import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.rsin-form.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "exact values"
    ],
    "questionText": "Express $\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $R$ as an exact surd and $\\alpha$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We want the two-term expression written as a single sine wave. Setting it identically equal to $R\\sin(\\theta+\\alpha)$ lets us expand the right-hand side and then compare it, term by term, with the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and pulling the constant $R$ through puts the right-hand side in the same shape as the left: a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "For the two sides to be equal for every value of $\\theta$, the amount of $\\sin\\theta$ must match and the amount of $\\cos\\theta$ must match. That gives two equations linking $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding the two equations removes $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=1^2+1^2$. We take the positive root since $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{1} = 1 \\Rightarrow \\alpha = 45^\\circ",
          "explanation": "Dividing the $\\sin$ equation by the $\\cos$ equation cancels $R$ and leaves $\\tan\\alpha=1$. Both coefficients are positive, so $\\alpha$ is acute and $\\alpha=45^\\circ$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin(\\theta+45^\\circ)",
          "explanation": "Putting the amplitude $R=\\sqrt{2}$ and phase $\\alpha=45^\\circ$ together gives the single-wave form, which immediately shows the expression oscillates between $-\\sqrt{2}$ and $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "\\sqrt{2}\\,\\sin(\\theta+45^\\circ) = \\sqrt{2}\\left(\\dfrac{\\sqrt{2}}{2}\\sin\\theta + \\dfrac{\\sqrt{2}}{2}\\cos\\theta\\right) = \\sin\\theta + \\cos\\theta",
          "explanation": "Expanding the answer recovers the original expression exactly, which confirms that $R$ and $\\alpha$ have been chosen correctly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin(\\theta+45^\\circ)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "exact values"
    ],
    "questionText": "Express $\\sqrt{3}\\,\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We aim to combine the two terms into one sine wave. Writing the expression as $R\\sin(\\theta+\\alpha)$ and expanding will let us match coefficients on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Applying $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ writes the target as a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, exactly the form of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = \\sqrt{3}, \\qquad R\\sin\\alpha = 1",
          "explanation": "Matching the coefficient of $\\sin\\theta$ gives $R\\cos\\alpha=\\sqrt{3}$ and matching the coefficient of $\\cos\\theta$ gives $R\\sin\\alpha=1$. These two equations determine $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding removes $\\alpha$ since $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=3+1=4$. Taking the positive root gives the amplitude $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{\\sqrt{3}} \\Rightarrow \\alpha = 30^\\circ",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{1}{\\sqrt{3}}$. This is a standard exact value, so $\\alpha=30^\\circ$, which is acute as required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin(\\theta+30^\\circ)",
          "explanation": "Combining the amplitude and phase gives the single-wave form. The expression therefore has maximum $2$ and minimum $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "2\\sin(\\theta+30^\\circ) = 2\\left(\\dfrac{\\sqrt{3}}{2}\\sin\\theta + \\dfrac{1}{2}\\cos\\theta\\right) = \\sqrt{3}\\,\\sin\\theta + \\cos\\theta",
          "explanation": "Expanding the answer returns the original expression, confirming the values of $R$ and $\\alpha$ are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin(\\theta+30^\\circ)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "exact values"
    ],
    "questionText": "Express $\\sin\\theta + \\sqrt{3}\\,\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin\\theta + \\sqrt{3}\\,\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We want a single sine wave equal to the given expression. Setting up the identity lets us expand the right-hand side and compare it with the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle formula turns $R\\sin(\\theta+\\alpha)$ into a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, which is the same shape as the expression we are matching.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = \\sqrt{3}",
          "explanation": "Here the coefficient of $\\sin\\theta$ is $1$ and the coefficient of $\\cos\\theta$ is $\\sqrt{3}$, so matching term by term gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding the equations eliminates $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=1+3=4$, so the positive amplitude is $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{\\sqrt{3}}{1} = \\sqrt{3} \\Rightarrow \\alpha = 60^\\circ",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=\\sqrt{3}$, a standard exact value, so $\\alpha=60^\\circ$ and it is acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\sqrt{3}\\,\\cos\\theta = 2\\sin(\\theta+60^\\circ)",
          "explanation": "Combining $R=2$ and $\\alpha=60^\\circ$ gives the single-wave form, which oscillates between $-2$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "2\\sin(\\theta+60^\\circ) = 2\\left(\\dfrac{1}{2}\\sin\\theta + \\dfrac{\\sqrt{3}}{2}\\cos\\theta\\right) = \\sin\\theta + \\sqrt{3}\\,\\cos\\theta",
          "explanation": "Expanding the final answer reproduces the original expression, confirming the conversion is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\sqrt{3}\\,\\cos\\theta = 2\\sin(\\theta+60^\\circ)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "amplitude"
    ],
    "questionText": "The expression $7\\sin\\theta + 24\\cos\\theta$ can be written as $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0^\\circ<\\alpha<90^\\circ$. Find the value of $R$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "7\\sin\\theta + 24\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We only need the amplitude $R$, but it comes from the same matching process, so we start by writing the expression as a single sine wave.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the compound-angle formula gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, ready to compare with the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 7, \\qquad R\\sin\\alpha = 24",
          "explanation": "Matching the amount of $\\sin\\theta$ and the amount of $\\cos\\theta$ on each side gives these two equations relating $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square each equation",
          "workingLatex": "R^2\\cos^2\\alpha = 49, \\qquad R^2\\sin^2\\alpha = 576",
          "explanation": "To isolate $R$ we square both equations, which prepares them to be added so that the angle can be eliminated.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the squared equations",
          "workingLatex": "R^2\\cos^2\\alpha + R^2\\sin^2\\alpha = 49 + 576 = 625",
          "explanation": "Adding the two results groups the $R^2$ terms together, and the right-hand side becomes a single number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "R^2(\\cos^2\\alpha + \\sin^2\\alpha) = R^2 = 625",
          "explanation": "Since $\\cos^2\\alpha+\\sin^2\\alpha=1$, the bracket disappears and we are left with $R^2=625$, so the angle has been removed completely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the positive square root",
          "workingLatex": "R = \\sqrt{625} = 25",
          "explanation": "Because the problem states $R>0$, we take the positive root, giving the amplitude $R=25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R = 25$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "phase angle"
    ],
    "questionText": "It is given that $5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta+\\alpha)$, where $0^\\circ<\\alpha<90^\\circ$. Find $\\alpha$, giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given identity",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta \\equiv 13\\sin(\\theta+\\alpha)",
          "explanation": "We are told the amplitude is already $13$, so only $\\alpha$ remains to be found. We begin from the stated identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the right-hand side",
          "workingLatex": "13\\sin(\\theta+\\alpha) = 13\\cos\\alpha\\,\\sin\\theta + 13\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the compound-angle formula puts the right-hand side in terms of $\\sin\\theta$ and $\\cos\\theta$ so it can be compared with the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "13\\cos\\alpha = 5, \\qquad 13\\sin\\alpha = 12",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and of $\\cos\\theta$ gives these two equations, both containing the known amplitude $13$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide to eliminate R",
          "workingLatex": "\\dfrac{13\\sin\\alpha}{13\\cos\\alpha} = \\dfrac{12}{5} \\Rightarrow \\tan\\alpha = \\dfrac{12}{5}",
          "explanation": "Dividing the second equation by the first cancels the common factor $13$, leaving $\\tan\\alpha=\\tfrac{12}{5}$, which isolates the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{12}{5} = 67.4^\\circ",
          "explanation": "Taking the inverse tangent gives $\\alpha=67.38^\\circ$, which rounds to $67.4^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm α is acute",
          "workingLatex": "0^\\circ < 67.4^\\circ < 90^\\circ",
          "explanation": "Both matched coefficients $5$ and $12$ are positive, so $\\alpha$ lies in the first quadrant and is indeed acute, matching the stated range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the completed identity",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta+67.4^\\circ)",
          "explanation": "Placing the value of $\\alpha$ back into the identity confirms the full R-form and provides a clear final statement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\alpha = 67.4^\\circ$ (to $1$ d.p.)."
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
    "answerType": "coordinates",
    "tags": [
      "r form",
      "harmonic form",
      "maximum"
    ],
    "questionText": "Express $3\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0^\\circ<\\alpha<90^\\circ$. Hence write down the maximum value of $3\\sin\\theta + 4\\cos\\theta$ and the value of $\\theta$ in the interval $0^\\circ\\le\\theta<360^\\circ$ at which it occurs. Give $\\alpha$ and $\\theta$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Writing the expression as a single sine wave makes its maximum obvious, because a sine wave has amplitude $R$. We start from the identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, the same shape as the left-hand side, ready for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 3, \\qquad R\\sin\\alpha = 4",
          "explanation": "Matching the coefficients of $\\sin\\theta$ and $\\cos\\theta$ on both sides gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=9+16=25$, so the positive amplitude is $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{4}{3} \\Rightarrow \\alpha = 53.1^\\circ",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{4}{3}$. Both coefficients are positive, so $\\alpha$ is acute and $\\alpha=53.1^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta+53.1^\\circ)",
          "explanation": "The expression is now a single sine wave of amplitude $5$, so it varies smoothly between $-5$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the maximum value",
          "workingLatex": "\\sin(\\theta+53.1^\\circ) \\le 1 \\Rightarrow 5\\sin(\\theta+53.1^\\circ) \\le 5",
          "explanation": "Since $\\sin$ never exceeds $1$, the largest the expression can be is $5\\times 1=5$. No calculus is needed: the maximum of any $R\\sin(\\cdots)$ is simply $R$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find where the maximum occurs",
          "workingLatex": "\\theta + 53.1^\\circ = 90^\\circ \\Rightarrow \\theta = 36.9^\\circ",
          "explanation": "The maximum happens when the sine equals $1$, that is when its angle is $90^\\circ$. Solving $\\theta+53.1^\\circ=90^\\circ$ gives $\\theta=36.9^\\circ$, which lies in the required interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta+53.1^\\circ)$; the maximum value is $5$, occurring at $\\theta = 36.9^\\circ$."
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
    "tags": [
      "r form",
      "harmonic form",
      "cosine form"
    ],
    "questionText": "Express $\\cos\\theta - \\sin\\theta$ in the form $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0^\\circ<\\alpha<90^\\circ$. Give exact values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\cos\\theta - \\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "Because the expression is written in terms of $\\cos\\theta$ first, the natural single-wave target is the cosine form $R\\cos(\\theta+\\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\cos(\\theta+\\alpha) = R\\cos\\alpha\\,\\cos\\theta - R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ gives a multiple of $\\cos\\theta$ minus a multiple of $\\sin\\theta$, matching the layout of the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of cosθ and sinθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "The coefficient of $\\cos\\theta$ gives $R\\cos\\alpha=1$; the coefficient of $\\sin\\theta$ is $-1$ on both sides, so $-R\\sin\\alpha=-1$, that is $R\\sin\\alpha=1$. The minus signs already agree.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding the two equations eliminates $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=2$, so the positive amplitude is $R=\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{1} = 1 \\Rightarrow \\alpha = 45^\\circ",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=1$. Both values are positive, so $\\alpha$ is acute and equals $45^\\circ$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\cos\\theta - \\sin\\theta = \\sqrt{2}\\,\\cos(\\theta+45^\\circ)",
          "explanation": "Combining $R=\\sqrt{2}$ and $\\alpha=45^\\circ$ gives the single cosine wave, which ranges between $-\\sqrt{2}$ and $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "\\sqrt{2}\\,\\cos(\\theta+45^\\circ) = \\sqrt{2}\\left(\\dfrac{\\sqrt{2}}{2}\\cos\\theta - \\dfrac{\\sqrt{2}}{2}\\sin\\theta\\right) = \\cos\\theta - \\sin\\theta",
          "explanation": "Expanding the answer recovers the original expression exactly, confirming that the cosine form and its sign are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta - \\sin\\theta = \\sqrt{2}\\,\\cos(\\theta+45^\\circ)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "radians"
    ],
    "questionText": "Express $\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0<\\alpha<\\dfrac{\\pi}{2}$. Give $\\alpha$ in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The method is the same whether we work in degrees or radians; only the final angle is expressed differently. We begin from the identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle formula rewrites the target as a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, ready to compare with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "Matching the amount of $\\sin\\theta$ and of $\\cos\\theta$ gives these two equations linking $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding removes $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=2$, so the positive amplitude is $R=\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α in radians",
          "workingLatex": "\\tan\\alpha = 1 \\Rightarrow \\alpha = \\dfrac{\\pi}{4}",
          "explanation": "Dividing the equations gives $\\tan\\alpha=1$. Since we want a value between $0$ and $\\tfrac{\\pi}{2}$, the acute answer in radians is $\\alpha=\\tfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\left(\\theta+\\dfrac{\\pi}{4}\\right)",
          "explanation": "Combining the amplitude and phase gives the single-wave form with the angle expressed in radians, as requested.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "\\sqrt{2}\\,\\sin\\left(\\theta+\\dfrac{\\pi}{4}\\right) = \\sqrt{2}\\left(\\dfrac{\\sqrt{2}}{2}\\sin\\theta + \\dfrac{\\sqrt{2}}{2}\\cos\\theta\\right) = \\sin\\theta + \\cos\\theta",
          "explanation": "Expanding the result returns the original expression, confirming the conversion is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\left(\\theta+\\dfrac{\\pi}{4}\\right)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "phase angle"
    ],
    "questionText": "Express $8\\sin\\theta + 6\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ<\\alpha<90^\\circ$. Give $\\alpha$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We combine the two terms into one sine wave by writing the expression as $R\\sin(\\theta+\\alpha)$ and comparing after expansion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle expansion produces a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, matching the form of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 6",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and of $\\cos\\theta$ gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=64+36=100$, so the positive amplitude is $R=10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α using tanα = b/a",
          "workingLatex": "\\tan\\alpha = \\dfrac{6}{8} = \\dfrac{3}{4} \\Rightarrow \\alpha = 36.9^\\circ",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{3}{4}$. Both coefficients are positive, so $\\alpha$ is acute and $\\alpha=36.9^\\circ$ to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta = 10\\sin(\\theta+36.9^\\circ)",
          "explanation": "Combining $R=10$ and $\\alpha=36.9^\\circ$ gives the single-wave form, which oscillates between $-10$ and $10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity-check the amplitude",
          "workingLatex": "10\\cos 36.9^\\circ \\approx 8, \\qquad 10\\sin 36.9^\\circ \\approx 6",
          "explanation": "Substituting the values back into $R\\cos\\alpha$ and $R\\sin\\alpha$ returns the original coefficients $8$ and $6$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\sin\\theta + 6\\cos\\theta = 10\\sin(\\theta+36.9^\\circ)$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "radians"
    ],
    "questionText": "Express $\\sqrt{3}\\,\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0<\\alpha<\\dfrac{\\pi}{2}$, giving $\\alpha$ in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We convert the expression into a single sine wave; because the interval is given in radians, the final $\\alpha$ will be stated in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the compound-angle formula gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = \\sqrt{3}, \\qquad R\\sin\\alpha = 1",
          "explanation": "Matching the coefficient of $\\sin\\theta$ gives $R\\cos\\alpha=\\sqrt{3}$ and the coefficient of $\\cos\\theta$ gives $R\\sin\\alpha=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R using R² = a² + b²",
          "workingLatex": "R = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding eliminates $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=3+1=4$, so the positive amplitude is $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α in radians",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{\\sqrt{3}} \\Rightarrow \\alpha = \\dfrac{\\pi}{6}",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{1}{\\sqrt{3}}$, a standard exact value. The acute angle with this tangent is $\\tfrac{\\pi}{6}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\left(\\theta+\\dfrac{\\pi}{6}\\right)",
          "explanation": "Combining $R=2$ and $\\alpha=\\tfrac{\\pi}{6}$ gives the single sine wave with its phase in radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check by expanding back",
          "workingLatex": "2\\sin\\left(\\theta+\\dfrac{\\pi}{6}\\right) = 2\\left(\\dfrac{\\sqrt{3}}{2}\\sin\\theta + \\dfrac{1}{2}\\cos\\theta\\right) = \\sqrt{3}\\,\\sin\\theta + \\cos\\theta",
          "explanation": "Expanding the answer returns the original expression, confirming the amplitude and phase are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\left(\\theta+\\dfrac{\\pi}{6}\\right)$."
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
    "answerType": "coordinates",
    "tags": [
      "r form",
      "harmonic form",
      "maximum"
    ],
    "questionText": "Given that $5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta+\\alpha)$ where $\\alpha = 67.4^\\circ$ (to $1$ d.p.), find the maximum value of $5\\sin\\theta + 12\\cos\\theta$ and the value of $\\theta$ in $0^\\circ\\le\\theta<360^\\circ$ at which this maximum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the given R-form",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta+67.4^\\circ)",
          "explanation": "The expression has already been written as a single sine wave, so its behaviour is easy to read off. We work directly from this form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the range of the sine factor",
          "workingLatex": "-1 \\le \\sin(\\theta+67.4^\\circ) \\le 1",
          "explanation": "A sine function can never be larger than $1$ or smaller than $-1$, no matter what its angle is. This fact alone controls the size of the whole expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Scale by the amplitude",
          "workingLatex": "-13 \\le 13\\sin(\\theta+67.4^\\circ) \\le 13",
          "explanation": "Multiplying the bounds by the positive amplitude $13$ shows the expression stays between $-13$ and $13$. No calculus is needed; the amplitude gives the extreme values directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the maximum value",
          "workingLatex": "\\text{maximum} = 13",
          "explanation": "The greatest value the expression can reach is $13$, achieved exactly when the sine factor equals its largest value, $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the sine factor equal to 1",
          "workingLatex": "\\sin(\\theta+67.4^\\circ) = 1 \\Rightarrow \\theta + 67.4^\\circ = 90^\\circ",
          "explanation": "The sine of an angle equals $1$ when that angle is $90^\\circ$. Setting the shifted angle to $90^\\circ$ locates the maximum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for θ",
          "workingLatex": "\\theta = 90^\\circ - 67.4^\\circ = 22.6^\\circ",
          "explanation": "Subtracting the phase shift $67.4^\\circ$ undoes it and gives the value of $\\theta$ where the maximum occurs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm θ lies in the interval",
          "workingLatex": "0^\\circ \\le 22.6^\\circ < 360^\\circ",
          "explanation": "The solution $22.6^\\circ$ lies inside the required interval, so it is the value of $\\theta$ at which the expression reaches its maximum.",
          "diagram": null
        }
      ],
      "finalAnswer": "The maximum value is $13$, occurring at $\\theta = 22.6^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form"
    ],
    "questionText": "Express $4\\cos\\theta + 3\\sin\\theta$ in the form $R\\cos(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $\\alpha$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "4\\cos\\theta + 3\\sin\\theta \\equiv R\\cos(\\theta-\\alpha)",
          "explanation": "The target here is a cosine wave, so we write the expression identically equal to $R\\cos(\\theta-\\alpha)$. Expanding the right-hand side will let us compare it with the left term by term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\cos(\\theta-\\alpha) = R\\cos\\alpha\\,\\cos\\theta + R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta-\\alpha)=\\cos\\theta\\cos\\alpha+\\sin\\theta\\sin\\alpha$ and carrying the constant $R$ through gives a multiple of $\\cos\\theta$ plus a multiple of $\\sin\\theta$, exactly the shape of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of cosθ and sinθ",
          "workingLatex": "R\\cos\\alpha = 4, \\qquad R\\sin\\alpha = 3",
          "explanation": "For the two sides to agree for every $\\theta$, the amount of $\\cos\\theta$ must match and the amount of $\\sin\\theta$ must match, which gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5",
          "explanation": "Squaring both equations and adding removes $\\alpha$, because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=4^2+3^2$. We take the positive root since $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\dfrac{R\\sin\\alpha}{R\\cos\\alpha} = \\dfrac{3}{4} \\Rightarrow \\tan\\alpha = \\dfrac{3}{4}",
          "explanation": "Dividing the sine equation by the cosine equation cancels $R$, and $\\dfrac{\\sin\\alpha}{\\cos\\alpha}=\\tan\\alpha$, so we are left with a simple equation for the angle alone.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{3}{4} = 36.9^\\circ",
          "explanation": "Both matched values are positive, so $\\alpha$ lies in the first quadrant and is acute. Taking the inverse tangent gives $\\alpha=36.9^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "4\\cos\\theta + 3\\sin\\theta = 5\\cos(\\theta - 36.9^\\circ)",
          "explanation": "Combining the amplitude $R=5$ and the phase shift $\\alpha=36.9^\\circ$ gives the single cosine wave, which is the required form.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4\\cos\\theta + 3\\sin\\theta = 5\\cos(\\theta - 36.9^\\circ)$, with $R=5$ and $\\alpha=36.9^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum"
    ],
    "questionText": "Express $8\\sin\\theta + 6\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence write down the maximum value of $8\\sin\\theta + 6\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We want the two-term expression written as a single sine wave. Setting it identically equal to $R\\sin(\\theta+\\alpha)$ lets us expand the right-hand side and match coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ puts the right-hand side in the same form as the left: a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 6",
          "explanation": "Matching the amount of $\\sin\\theta$ on each side gives $R\\cos\\alpha=8$, and matching the amount of $\\cos\\theta$ gives $R\\sin\\alpha=6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10",
          "explanation": "Squaring and adding the two equations eliminates $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=8^2+6^2=100$. The positive root gives $R=10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{R\\sin\\alpha}{R\\cos\\alpha} = \\dfrac{6}{8} = \\dfrac{3}{4}",
          "explanation": "Dividing the two equations cancels $R$ and leaves $\\tan\\alpha=\\dfrac{6}{8}$, which simplifies to $\\dfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{3}{4} = 36.9^\\circ",
          "explanation": "Both $8$ and $6$ are positive, so $\\alpha$ is acute. The inverse tangent gives $\\alpha=36.9^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "8\\sin\\theta + 6\\cos\\theta = 10\\sin(\\theta + 36.9^\\circ)",
          "explanation": "Putting the amplitude and phase together gives the single sine wave equivalent to the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the maximum value",
          "workingLatex": "-10 \\le 10\\sin(\\theta+36.9^\\circ) \\le 10 \\Rightarrow \\text{max} = 10",
          "explanation": "Since $\\sin$ of any angle never exceeds $1$, the expression $10\\sin(\\theta+36.9^\\circ)$ is greatest when the sine equals $1$. Its maximum value is therefore simply $R=10$, with no calculus needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\sin\\theta + 6\\cos\\theta = 10\\sin(\\theta + 36.9^\\circ)$, so the maximum value of the expression is $10$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum",
      "minimum"
    ],
    "questionText": "Express $7\\sin\\theta + 24\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $\\alpha$ to $1$ decimal place. Hence write down the maximum value and the least value of the expression.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "7\\sin\\theta + 24\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We combine the two terms into one sine wave by writing the expression identically equal to $R\\sin(\\theta+\\alpha)$, ready to expand and compare.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and carrying $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, the same shape as the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 7, \\qquad R\\sin\\alpha = 24",
          "explanation": "Matching the $\\sin\\theta$ terms gives $R\\cos\\alpha=7$ and matching the $\\cos\\theta$ terms gives $R\\sin\\alpha=24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=7^2+24^2=625$. The positive root gives $R=25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{24}{7}",
          "explanation": "Dividing the sine equation by the cosine equation cancels $R$ and leaves $\\tan\\alpha=\\dfrac{24}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{24}{7} = 73.7^\\circ",
          "explanation": "Both coefficients are positive, so $\\alpha$ is acute; the inverse tangent gives $\\alpha=73.7^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "7\\sin\\theta + 24\\cos\\theta = 25\\sin(\\theta + 73.7^\\circ)",
          "explanation": "Combining $R=25$ and $\\alpha=73.7^\\circ$ gives the single sine wave equivalent to the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the maximum and least values",
          "workingLatex": "-25 \\le 25\\sin(\\theta+73.7^\\circ) \\le 25",
          "explanation": "A sine function always lies between $-1$ and $1$, so $25\\sin(\\theta+73.7^\\circ)$ lies between $-25$ and $25$. The maximum value is $25$ and the least value is $-25$, read straight off the amplitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\sin\\theta + 24\\cos\\theta = 25\\sin(\\theta + 73.7^\\circ)$; the maximum value is $25$ and the least value is $-25$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "sign variant"
    ],
    "questionText": "Express $5\\sin\\theta - 12\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $\\alpha$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "5\\sin\\theta - 12\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "Because the two terms are subtracted, the natural target is $R\\sin(\\theta-\\alpha)$, whose expansion also has a minus sign in front of the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ gives a multiple of $\\sin\\theta$ minus a multiple of $\\cos\\theta$, matching the pattern of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 12",
          "explanation": "Matching the $\\sin\\theta$ terms gives $R\\cos\\alpha=5$; matching the $\\cos\\theta$ terms, the two minus signs line up so $R\\sin\\alpha=12$ (both $R$ and $\\sin\\alpha$ positive).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13",
          "explanation": "Squaring and adding the two equations eliminates $\\alpha$, leaving $R^2=5^2+12^2=169$, so the positive root is $R=13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{12}{5}",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=\\dfrac{12}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{12}{5} = 67.4^\\circ",
          "explanation": "Both matched values are positive, so $\\alpha$ is acute; the inverse tangent gives $\\alpha=67.4^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "5\\sin\\theta - 12\\cos\\theta = 13\\sin(\\theta - 67.4^\\circ)",
          "explanation": "Combining $R=13$ with $\\alpha=67.4^\\circ$ inside a $\\theta-\\alpha$ bracket gives the required single sine wave.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sin\\theta - 12\\cos\\theta = 13\\sin(\\theta - 67.4^\\circ)$, with $R=13$ and $\\alpha=67.4^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "sign variant"
    ],
    "questionText": "Express $4\\cos\\theta - 3\\sin\\theta$ in the form $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $\\alpha$ to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "4\\cos\\theta - 3\\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "The expression is a cosine term minus a sine term, so the matching target is $R\\cos(\\theta+\\alpha)$, whose expansion also has a minus sign before the sine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\cos(\\theta+\\alpha) = R\\cos\\alpha\\,\\cos\\theta - R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ gives a multiple of $\\cos\\theta$ minus a multiple of $\\sin\\theta$, exactly matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of cosθ and sinθ",
          "workingLatex": "R\\cos\\alpha = 4, \\qquad R\\sin\\alpha = 3",
          "explanation": "Matching the $\\cos\\theta$ terms gives $R\\cos\\alpha=4$; matching the $\\sin\\theta$ terms, the minus signs align so $R\\sin\\alpha=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding removes $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=4^2+3^2=25$, so $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{3}{4}",
          "explanation": "Dividing the sine equation by the cosine equation cancels $R$ and gives $\\tan\\alpha=\\dfrac{3}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{3}{4} = 36.9^\\circ",
          "explanation": "Both matched values are positive, so $\\alpha$ is acute; the inverse tangent gives $\\alpha=36.9^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "4\\cos\\theta - 3\\sin\\theta = 5\\cos(\\theta + 36.9^\\circ)",
          "explanation": "Combining $R=5$ with $\\alpha=36.9^\\circ$ inside a $\\theta+\\alpha$ bracket gives the required single cosine wave.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4\\cos\\theta - 3\\sin\\theta = 5\\cos(\\theta + 36.9^\\circ)$, with $R=5$ and $\\alpha=36.9^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "radians",
      "maximum"
    ],
    "questionText": "Express $\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, giving $R$ and $\\alpha$ exactly. Hence write down the maximum value of $\\sin\\theta + \\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We combine the two terms into a single sine wave by writing the expression identically equal to $R\\sin(\\theta+\\alpha)$. Everything here is measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and pulling $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "The coefficient of $\\sin\\theta$ on the left is $1$ and of $\\cos\\theta$ is $1$, giving these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=1^2+1^2=2$. As $R>0$ we keep the exact surd $R=\\sqrt{2}$ rather than rounding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{1} = 1",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the exact acute angle α",
          "workingLatex": "\\alpha = \\dfrac{\\pi}{4}",
          "explanation": "The acute angle whose tangent is $1$ is $\\dfrac{\\pi}{4}$ radians (that is, $45^\\circ$), which lies in the required range $0<\\alpha<\\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\!\\left(\\theta + \\dfrac{\\pi}{4}\\right)",
          "explanation": "Combining $R=\\sqrt{2}$ and $\\alpha=\\dfrac{\\pi}{4}$ gives the single sine wave equivalent to the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the maximum value",
          "workingLatex": "\\text{max} = R = \\sqrt{2}",
          "explanation": "Since $\\sin$ never exceeds $1$, the expression $\\sqrt{2}\\,\\sin\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right)$ is largest when the sine equals $1$, so its maximum value is simply $\\sqrt{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\!\\left(\\theta + \\dfrac{\\pi}{4}\\right)$; the maximum value is $\\sqrt{2}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "radians"
    ],
    "questionText": "Express $\\sqrt{3}\\,\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, giving $R$ and $\\alpha$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We write the expression identically equal to $R\\sin(\\theta+\\alpha)$, working throughout in radians so that $\\alpha$ comes out as an exact multiple of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, ready to compare with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = \\sqrt{3}, \\qquad R\\sin\\alpha = 1",
          "explanation": "The coefficient of $\\sin\\theta$ on the left is $\\sqrt{3}$ and the coefficient of $\\cos\\theta$ is $1$, giving these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=(\\sqrt{3})^2+1^2=3+1=4$, so $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{\\sqrt{3}}",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=\\dfrac{1}{\\sqrt{3}}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the exact acute angle α",
          "workingLatex": "\\alpha = \\dfrac{\\pi}{6}",
          "explanation": "The acute angle whose tangent is $\\dfrac{1}{\\sqrt{3}}$ is $\\dfrac{\\pi}{6}$ radians (that is, $30^\\circ$), which lies in the required range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\!\\left(\\theta + \\dfrac{\\pi}{6}\\right)",
          "explanation": "Combining $R=2$ and $\\alpha=\\dfrac{\\pi}{6}$ gives the single sine wave equivalent to the original expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\!\\left(\\theta + \\dfrac{\\pi}{6}\\right)$, with $R=2$ and $\\alpha=\\dfrac{\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "radians"
    ],
    "questionText": "Express $\\sin\\theta + \\sqrt{3}\\,\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, giving $R$ and $\\alpha$ exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin\\theta + \\sqrt{3}\\,\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We write the expression identically equal to $R\\sin(\\theta+\\alpha)$, working in radians so that $\\alpha$ is an exact multiple of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, the same form as the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = \\sqrt{3}",
          "explanation": "Here the coefficient of $\\sin\\theta$ is $1$ and the coefficient of $\\cos\\theta$ is $\\sqrt{3}$; note this is the reverse of the previous example, so $\\alpha$ will be larger.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=1+3=4$, so $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{\\sqrt{3}}{1} = \\sqrt{3}",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the exact acute angle α",
          "workingLatex": "\\alpha = \\dfrac{\\pi}{3}",
          "explanation": "The acute angle whose tangent is $\\sqrt{3}$ is $\\dfrac{\\pi}{3}$ radians (that is, $60^\\circ$), which lies in the required range.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\sqrt{3}\\,\\cos\\theta = 2\\sin\\!\\left(\\theta + \\dfrac{\\pi}{3}\\right)",
          "explanation": "Combining $R=2$ and $\\alpha=\\dfrac{\\pi}{3}$ gives the single sine wave equivalent to the original expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\sqrt{3}\\,\\cos\\theta = 2\\sin\\!\\left(\\theta + \\dfrac{\\pi}{3}\\right)$, with $R=2$ and $\\alpha=\\dfrac{\\pi}{3}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum",
      "minimum"
    ],
    "questionText": "Express $5\\sin\\theta + 12\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $\\alpha$ to $1$ decimal place. Write down the maximum value and the least value of the expression, and find the smallest positive value of $\\theta$ at which the maximum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We combine the two terms into a single sine wave, which will make the maximum, the least value and their positions easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and carrying $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 12",
          "explanation": "Matching the $\\sin\\theta$ terms gives $R\\cos\\alpha=5$ and matching the $\\cos\\theta$ terms gives $R\\sin\\alpha=12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13",
          "explanation": "Squaring and adding eliminates $\\alpha$, leaving $R^2=5^2+12^2=169$, so the positive root is $R=13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\tan\\alpha = \\dfrac{12}{5} \\Rightarrow \\alpha = 67.4^\\circ",
          "explanation": "Dividing the two equations gives $\\tan\\alpha=\\dfrac{12}{5}$; both coefficients are positive so $\\alpha$ is acute, giving $\\alpha=67.4^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta + 67.4^\\circ)",
          "explanation": "Combining $R=13$ and $\\alpha=67.4^\\circ$ gives the single sine wave, from which the extreme values follow immediately.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the maximum and least values",
          "workingLatex": "-13 \\le 13\\sin(\\theta+67.4^\\circ) \\le 13",
          "explanation": "Since a sine is always between $-1$ and $1$, the expression lies between $-13$ and $13$. The maximum value is $13$ and the least value is $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the maximum condition",
          "workingLatex": "\\text{max when } \\sin(\\theta+67.4^\\circ) = 1 \\Rightarrow \\theta + 67.4^\\circ = 90^\\circ",
          "explanation": "The maximum $13$ is reached exactly when the sine equals $1$, and the first time that happens is when the angle inside equals $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the smallest positive θ",
          "workingLatex": "\\theta = 90^\\circ - 67.4^\\circ = 22.6^\\circ",
          "explanation": "Subtracting the phase shift $67.4^\\circ$ gives $\\theta=22.6^\\circ$, which is positive, so this is the smallest positive value of $\\theta$ at which the maximum occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sin\\theta + 12\\cos\\theta = 13\\sin(\\theta + 67.4^\\circ)$; the maximum value is $13$ and the least value is $-13$, with the maximum first occurring at $\\theta = 22.6^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "maximum"
    ],
    "questionText": "Express $12\\cos\\theta + 5\\sin\\theta$ in the form $R\\cos(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $\\alpha$ to $1$ decimal place. Hence write down the maximum value of the expression and the smallest positive value of $\\theta$ at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "12\\cos\\theta + 5\\sin\\theta \\equiv R\\cos(\\theta-\\alpha)",
          "explanation": "The target is a cosine wave, so we write the expression identically equal to $R\\cos(\\theta-\\alpha)$ and expand to compare.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\cos(\\theta-\\alpha) = R\\cos\\alpha\\,\\cos\\theta + R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta-\\alpha)=\\cos\\theta\\cos\\alpha+\\sin\\theta\\sin\\alpha$ gives a multiple of $\\cos\\theta$ plus a multiple of $\\sin\\theta$, the same shape as the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of cosθ and sinθ",
          "workingLatex": "R\\cos\\alpha = 12, \\qquad R\\sin\\alpha = 5",
          "explanation": "Matching the $\\cos\\theta$ terms gives $R\\cos\\alpha=12$ and matching the $\\sin\\theta$ terms gives $R\\sin\\alpha=5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=12^2+5^2=169$, so $R=13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\tan\\alpha = \\dfrac{5}{12} \\Rightarrow \\alpha = 22.6^\\circ",
          "explanation": "Dividing the two equations gives $\\tan\\alpha=\\dfrac{5}{12}$; both matched values are positive so $\\alpha$ is acute, giving $\\alpha=22.6^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "12\\cos\\theta + 5\\sin\\theta = 13\\cos(\\theta - 22.6^\\circ)",
          "explanation": "Combining $R=13$ and $\\alpha=22.6^\\circ$ gives the single cosine wave equivalent to the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the maximum value",
          "workingLatex": "-13 \\le 13\\cos(\\theta-22.6^\\circ) \\le 13 \\Rightarrow \\text{max} = 13",
          "explanation": "A cosine is always between $-1$ and $1$, so the expression lies between $-13$ and $13$; its maximum value is $13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the maximum condition",
          "workingLatex": "\\text{max when } \\cos(\\theta-22.6^\\circ) = 1 \\Rightarrow \\theta - 22.6^\\circ = 0^\\circ",
          "explanation": "A cosine reaches its greatest value $1$ when its angle is $0^\\circ$, so the maximum of the expression occurs when $\\theta-22.6^\\circ=0^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the smallest positive θ",
          "workingLatex": "\\theta = 22.6^\\circ",
          "explanation": "Adding the phase shift gives $\\theta=22.6^\\circ$, which is positive, so this is the smallest positive angle at which the maximum $13$ occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$12\\cos\\theta + 5\\sin\\theta = 13\\cos(\\theta - 22.6^\\circ)$; the maximum value is $13$, occurring first at $\\theta = 22.6^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum",
      "minimum"
    ],
    "questionText": "Express $15\\sin\\theta + 8\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $\\alpha$ to $1$ decimal place. Hence write down the maximum value and the least value of $15\\sin\\theta + 8\\cos\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "15\\sin\\theta + 8\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We combine the two terms into a single sine wave by writing the expression identically equal to $R\\sin(\\theta+\\alpha)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, matching the form of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients of sinθ and cosθ",
          "workingLatex": "R\\cos\\alpha = 15, \\qquad R\\sin\\alpha = 8",
          "explanation": "Matching the $\\sin\\theta$ terms gives $R\\cos\\alpha=15$ and matching the $\\cos\\theta$ terms gives $R\\sin\\alpha=8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R by squaring and adding",
          "workingLatex": "R = \\sqrt{15^2 + 8^2} = \\sqrt{289} = 17",
          "explanation": "Squaring and adding eliminates $\\alpha$, leaving $R^2=15^2+8^2=225+64=289$, so the positive root is $R=17$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the equations to isolate tanα",
          "workingLatex": "\\tan\\alpha = \\dfrac{8}{15}",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and gives $\\tan\\alpha=\\dfrac{8}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acute angle α",
          "workingLatex": "\\alpha = \\arctan\\dfrac{8}{15} = 28.1^\\circ",
          "explanation": "Both coefficients are positive, so $\\alpha$ is acute; the inverse tangent gives $\\alpha=28.1^\\circ$ to $1$ decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the R-form",
          "workingLatex": "15\\sin\\theta + 8\\cos\\theta = 17\\sin(\\theta + 28.1^\\circ)",
          "explanation": "Combining $R=17$ and $\\alpha=28.1^\\circ$ gives the single sine wave equivalent to the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the maximum and least values",
          "workingLatex": "-17 \\le 17\\sin(\\theta+28.1^\\circ) \\le 17",
          "explanation": "Because a sine always lies between $-1$ and $1$, the expression lies between $-17$ and $17$. The maximum value is $17$ and the least value is $-17$, read directly from the amplitude.",
          "diagram": null
        }
      ],
      "finalAnswer": "$15\\sin\\theta + 8\\cos\\theta = 17\\sin(\\theta + 28.1^\\circ)$; the maximum value is $17$ and the least value is $-17$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q023",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Express $2\\sin\\theta + 5\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $2\\sin\\theta + 5\\cos\\theta = 3$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "2\\sin\\theta + 5\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We want to fold the two separate waves into a single sine wave. Writing the expression identically equal to $R\\sin(\\theta+\\alpha)$ lets us expand the right-hand side and match it piece by piece with the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and bringing $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, exactly the shape of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 2, \\qquad R\\sin\\alpha = 5",
          "explanation": "For the two sides to agree for every $\\theta$, the amount of $\\sin\\theta$ must match and the amount of $\\cos\\theta$ must match. That gives one equation from each term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{2^2 + 5^2} = \\sqrt{29}",
          "explanation": "Squaring and adding the two equations removes $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2 = 2^2+5^2$. We take the positive root since $R>0$, and $\\sqrt{29}$ does not simplify so we keep it exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{5}{2} \\Rightarrow \\alpha = 68.2^\\circ",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and leaves $\\tan\\alpha=\\tfrac{5}{2}$. Both coefficients are positive, so $\\alpha$ is acute: $\\alpha=\\arctan\\tfrac{5}{2}=68.2^\\circ$ to $1$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "2\\sin\\theta + 5\\cos\\theta = \\sqrt{29}\\,\\sin(\\theta + 68.2^\\circ)",
          "explanation": "Combining the amplitude and the phase shift gives the single-wave form. It immediately shows the expression swings between $-\\sqrt{29}$ and $+\\sqrt{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{29}\\,\\sin(\\theta+68.2^\\circ) = 3 \\Rightarrow \\sin(\\theta+68.2^\\circ) = \\dfrac{3}{\\sqrt{29}} = 0.5571",
          "explanation": "Replacing the two-term expression by the single wave turns the problem into a basic sine equation. Dividing both sides by $\\sqrt{29}$ isolates the sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow 68.2^\\circ \\le \\theta+68.2^\\circ \\le 428.2^\\circ",
          "explanation": "We are now solving for the combined angle $\\theta+68.2^\\circ$, so we add $68.2^\\circ$ to both ends of the range. Searching this shifted window makes sure no solution is lost at either end.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta+68.2^\\circ = \\arcsin(0.5571) = 33.9^\\circ",
          "explanation": "The calculator gives the principal value. This is our anchor; every other solution is built from it using the symmetry of the sine curve.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta+68.2^\\circ = 146.1^\\circ,\\; 393.9^\\circ",
          "explanation": "Sine is also positive in the second quadrant, giving $180^\\circ-33.9^\\circ=146.1^\\circ$, and adding $360^\\circ$ to the base angle gives $393.9^\\circ$. The base value $33.9^\\circ$ itself is below $68.2^\\circ$, so it lies outside the shifted window and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 146.1^\\circ-68.2^\\circ,\\; 393.9^\\circ-68.2^\\circ = 77.9^\\circ,\\; 325.7^\\circ",
          "explanation": "Undoing the shift by subtracting $68.2^\\circ$ returns each answer to the original variable. Both results lie in $0^\\circ$ to $360^\\circ$, so both are kept.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2\\sin\\theta + 5\\cos\\theta = \\sqrt{29}\\,\\sin(\\theta+68.2^\\circ)$, and the equation has solutions $\\theta = 77.9^\\circ$ and $\\theta = 325.7^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q024",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Given that $3\\sin\\theta + 7\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)$ with $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, find $R$ and $\\alpha$, and hence solve $3\\sin\\theta + 7\\cos\\theta = 5$ for $0^\\circ \\le \\theta \\le 360^\\circ$. Give each solution to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "3\\sin\\theta + 7\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The plan is to rewrite the sum of two waves as one wave of amplitude $R$ shifted by $\\alpha$. Setting the two expressions identically equal lets us compare them after expanding.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ with the compound-angle formula and pulling $R$ through puts the right-hand side into the same $\\sin\\theta$-plus-$\\cos\\theta$ form as the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 3, \\qquad R\\sin\\alpha = 7",
          "explanation": "Matching the coefficient of $\\sin\\theta$ on each side gives the first equation, and matching the coefficient of $\\cos\\theta$ gives the second. These two equations pin down $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{3^2 + 7^2} = \\sqrt{58}",
          "explanation": "Squaring and adding eliminates $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=3^2+7^2=58$. Taking the positive root gives $R=\\sqrt{58}$, which has no square factors so we leave it as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{7}{3} \\Rightarrow \\alpha = 66.8^\\circ",
          "explanation": "Dividing the sine equation by the cosine equation cancels $R$ and leaves $\\tan\\alpha=\\tfrac{7}{3}$. Because both $3$ and $7$ are positive, the acute angle is $\\alpha=66.8^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "3\\sin\\theta + 7\\cos\\theta = \\sqrt{58}\\,\\sin(\\theta + 66.8^\\circ)",
          "explanation": "This is the required single-wave form. It tells us at a glance that the expression oscillates between $-\\sqrt{58}$ and $+\\sqrt{58}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{58}\\,\\sin(\\theta+66.8^\\circ) = 5 \\Rightarrow \\sin(\\theta+66.8^\\circ) = \\dfrac{5}{\\sqrt{58}} = 0.6565",
          "explanation": "Substituting the R-form reduces the equation to a single sine equal to a number. Dividing by $\\sqrt{58}$ leaves the sine on its own, ready to invert.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow 66.8^\\circ \\le \\theta+66.8^\\circ \\le 426.8^\\circ",
          "explanation": "Since the unknown inside the sine is $\\theta+66.8^\\circ$, we shift the search interval up by $66.8^\\circ$. This guarantees we catch every solution of the shifted angle before converting back.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta+66.8^\\circ = \\arcsin(0.6565) = 41.0^\\circ",
          "explanation": "The principal value from the calculator is the starting point. The sine curve's symmetry then generates the remaining solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta+66.8^\\circ = 139.0^\\circ,\\; 401.0^\\circ",
          "explanation": "The second-quadrant partner is $180^\\circ-41.0^\\circ=139.0^\\circ$, and adding $360^\\circ$ to $41.0^\\circ$ gives $401.0^\\circ$. The base value $41.0^\\circ$ is smaller than $66.8^\\circ$, so it falls outside the shifted window.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 139.0^\\circ-66.8^\\circ,\\; 401.0^\\circ-66.8^\\circ = 72.2^\\circ,\\; 334.2^\\circ",
          "explanation": "Subtracting $66.8^\\circ$ from each shifted angle returns to $\\theta$. Both values sit inside $0^\\circ$ to $360^\\circ$, so both are valid solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$R=\\sqrt{58}$, $\\alpha=66.8^\\circ$, so $3\\sin\\theta+7\\cos\\theta=\\sqrt{58}\\,\\sin(\\theta+66.8^\\circ)$; the solutions are $\\theta = 72.2^\\circ$ and $\\theta = 334.2^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q025",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "solving equations"
    ],
    "questionText": "Express $5\\cos\\theta + 2\\sin\\theta$ in the form $R\\cos(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $5\\cos\\theta + 2\\sin\\theta = 4$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "5\\cos\\theta + 2\\sin\\theta \\equiv R\\cos(\\theta-\\alpha)",
          "explanation": "Here the natural target is a cosine wave because the expression leads with $\\cos\\theta$. Setting it identically equal to $R\\cos(\\theta-\\alpha)$ lets us expand and match coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(\\theta-\\alpha) = R\\cos\\alpha\\,\\cos\\theta + R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta-\\alpha)=\\cos\\theta\\cos\\alpha+\\sin\\theta\\sin\\alpha$ and taking $R$ through gives a multiple of $\\cos\\theta$ plus a multiple of $\\sin\\theta$, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 2",
          "explanation": "The coefficient of $\\cos\\theta$ must match, giving $R\\cos\\alpha=5$, and the coefficient of $\\sin\\theta$ must match, giving $R\\sin\\alpha=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{5^2 + 2^2} = \\sqrt{29}",
          "explanation": "Squaring and adding removes $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=5^2+2^2=29$. The positive root $\\sqrt{29}$ is already in simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{2}{5} \\Rightarrow \\alpha = 21.8^\\circ",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{2}{5}$. Both parts are positive, so $\\alpha$ is acute: $\\alpha=21.8^\\circ$ to $1$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "5\\cos\\theta + 2\\sin\\theta = \\sqrt{29}\\,\\cos(\\theta - 21.8^\\circ)",
          "explanation": "This packages the expression as one cosine wave of amplitude $\\sqrt{29}$, shifted right by $21.8^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{29}\\,\\cos(\\theta-21.8^\\circ) = 4 \\Rightarrow \\cos(\\theta-21.8^\\circ) = \\dfrac{4}{\\sqrt{29}} = 0.7428",
          "explanation": "Substituting the R-form turns the equation into a single cosine equal to a number, which we isolate by dividing through by $\\sqrt{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow -21.8^\\circ \\le \\theta-21.8^\\circ \\le 338.2^\\circ",
          "explanation": "The unknown inside is $\\theta-21.8^\\circ$, so we subtract $21.8^\\circ$ from both ends. The window now starts slightly below $0^\\circ$, which matters for catching every solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta-21.8^\\circ = \\arccos(0.7428) = 42.0^\\circ",
          "explanation": "The calculator gives the principal cosine value. Because cosine is even, its negative is also a solution, and that symmetry generates the rest.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta-21.8^\\circ = 42.0^\\circ,\\; 318.0^\\circ",
          "explanation": "Cosine is positive at $\\pm 42.0^\\circ$. The value $-42.0^\\circ$ is below $-21.8^\\circ$, so instead we add $360^\\circ$ to get $318.0^\\circ$, which lies in the window alongside $42.0^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add α to recover θ",
          "workingLatex": "\\theta = 42.0^\\circ+21.8^\\circ,\\; 318.0^\\circ+21.8^\\circ = 63.8^\\circ,\\; 339.8^\\circ",
          "explanation": "Undoing the shift means adding $21.8^\\circ$ back to each angle. Both results lie within $0^\\circ$ to $360^\\circ$, so both are solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\cos\\theta + 2\\sin\\theta = \\sqrt{29}\\,\\cos(\\theta-21.8^\\circ)$, and the equation has solutions $\\theta = 63.8^\\circ$ and $\\theta = 339.8^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q026",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Express $6\\sin\\theta - 4\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $R$ as an exact surd in simplest form. Hence solve $6\\sin\\theta - 4\\cos\\theta = 3$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "6\\sin\\theta - 4\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The minus sign between the terms points us to the $R\\sin(\\theta-\\alpha)$ target, whose expansion naturally carries a minus in front of the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ produces a positive $\\sin\\theta$ term and a negative $\\cos\\theta$ term, matching the signs on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 6, \\qquad R\\sin\\alpha = 4",
          "explanation": "Matching $\\sin\\theta$ gives $R\\cos\\alpha=6$. Matching $\\cos\\theta$ gives $-R\\sin\\alpha=-4$, that is $R\\sin\\alpha=4$; the two minus signs cancel so $\\alpha$ stays acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{6^2 + 4^2} = \\sqrt{52} = 2\\sqrt{13}",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=36+16=52$. Since $52=4\\times 13$, the surd simplifies to $2\\sqrt{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{4}{6} = \\dfrac{2}{3} \\Rightarrow \\alpha = 33.7^\\circ",
          "explanation": "Dividing the equations cancels $R$ and leaves $\\tan\\alpha=\\tfrac{4}{6}=\\tfrac{2}{3}$. Both matched coefficients are positive, so $\\alpha$ is acute at $33.7^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "6\\sin\\theta - 4\\cos\\theta = 2\\sqrt{13}\\,\\sin(\\theta - 33.7^\\circ)",
          "explanation": "The expression is now a single sine wave of amplitude $2\\sqrt{13}$ shifted right by $33.7^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sqrt{13}\\,\\sin(\\theta-33.7^\\circ) = 3 \\Rightarrow \\sin(\\theta-33.7^\\circ) = \\dfrac{3}{2\\sqrt{13}} = 0.4160",
          "explanation": "Replacing the two terms by the single wave gives a basic sine equation. Dividing by $2\\sqrt{13}$ isolates the sine so we can invert it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow -33.7^\\circ \\le \\theta-33.7^\\circ \\le 326.3^\\circ",
          "explanation": "The unknown angle is $\\theta-33.7^\\circ$, so both ends of the range drop by $33.7^\\circ$. Working in this shifted window ensures no solution is overlooked.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta-33.7^\\circ = \\arcsin(0.4160) = 24.6^\\circ",
          "explanation": "The calculator's principal value is the anchor solution, from which the second-quadrant partner follows.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta-33.7^\\circ = 24.6^\\circ,\\; 155.4^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so alongside $24.6^\\circ$ we take $180^\\circ-24.6^\\circ=155.4^\\circ$. Both lie inside $-33.7^\\circ$ to $326.3^\\circ$; no further copies fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add α to recover θ",
          "workingLatex": "\\theta = 24.6^\\circ+33.7^\\circ,\\; 155.4^\\circ+33.7^\\circ = 58.3^\\circ,\\; 189.1^\\circ",
          "explanation": "Adding $33.7^\\circ$ back to each shifted angle returns to $\\theta$. Both answers lie in $0^\\circ$ to $360^\\circ$, so both are kept.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6\\sin\\theta - 4\\cos\\theta = 2\\sqrt{13}\\,\\sin(\\theta-33.7^\\circ)$, and the equation has solutions $\\theta = 58.3^\\circ$ and $\\theta = 189.1^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q027",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum"
    ],
    "questionText": "The function is defined by $f(\\theta) = 8\\sin\\theta + 5\\cos\\theta + 2$ for $0^\\circ \\le \\theta \\le 360^\\circ$. By first writing $8\\sin\\theta + 5\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0^\\circ < \\alpha < 90^\\circ$, find the maximum and minimum values of $f(\\theta)$ and the value of $\\theta$ at which the maximum occurs. Give non-exact answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "8\\sin\\theta + 5\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We only need to rewrite the wave part; the constant $+2$ simply slides the whole graph up and can be added back at the end. Writing the wave as $R\\sin(\\theta+\\alpha)$ exposes its amplitude directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the compound-angle formula puts the target in the same $\\sin\\theta$-and-$\\cos\\theta$ form as the expression we are matching.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 5",
          "explanation": "Matching the $\\sin\\theta$ terms and then the $\\cos\\theta$ terms gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 5^2} = \\sqrt{89}",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=64+25=89$. The amplitude of the wave is therefore $\\sqrt{89}\\approx 9.434$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{5}{8} \\Rightarrow \\alpha = 32.0^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{5}{8}$, and since both coefficients are positive the acute angle is $\\alpha=32.0^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite f in R-form",
          "workingLatex": "f(\\theta) = \\sqrt{89}\\,\\sin(\\theta+32.0^\\circ) + 2",
          "explanation": "Now the whole function is a single sine wave of amplitude $\\sqrt{89}$ lifted by $2$. Its high and low points are now easy to read off without any calculus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the range of sine",
          "workingLatex": "-1 \\le \\sin(\\theta+32.0^\\circ) \\le 1",
          "explanation": "A sine never exceeds $1$ or drops below $-1$. Multiplying by the positive amplitude $\\sqrt{89}$ and adding $2$ scales and shifts these bounds into the bounds for $f$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Maximum value",
          "workingLatex": "f_{\\max} = \\sqrt{89} + 2 \\approx 11.4",
          "explanation": "The largest value occurs when the sine hits its top value of $1$, giving $\\sqrt{89}\\times 1 + 2 = 2+\\sqrt{89}\\approx 11.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Where the maximum occurs",
          "workingLatex": "\\theta+32.0^\\circ = 90^\\circ \\Rightarrow \\theta = 58.0^\\circ",
          "explanation": "The sine equals $1$ when its angle is $90^\\circ$. Setting $\\theta+32.0^\\circ=90^\\circ$ and solving gives $\\theta=58.0^\\circ$, which lies in the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Minimum value",
          "workingLatex": "f_{\\min} = 2 - \\sqrt{89} \\approx -7.4",
          "explanation": "The smallest value occurs when the sine reaches $-1$, giving $\\sqrt{89}\\times(-1)+2 = 2-\\sqrt{89}\\approx -7.4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range",
          "workingLatex": "-7.4 \\le f(\\theta) \\le 11.4",
          "explanation": "Because $f$ is a single continuous wave, it takes every value between its minimum and maximum, so its outputs fill the interval $[2-\\sqrt{89},\\,2+\\sqrt{89}]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(\\theta)=\\sqrt{89}\\,\\sin(\\theta+32.0^\\circ)+2$; the maximum value is $2+\\sqrt{89}\\approx 11.4$ (at $\\theta=58.0^\\circ$) and the minimum value is $2-\\sqrt{89}\\approx -7.4$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q028",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "solving equations"
    ],
    "questionText": "Express $7\\cos\\theta - 3\\sin\\theta$ in the form $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $7\\cos\\theta - 3\\sin\\theta = 2$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "7\\cos\\theta - 3\\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "Leading with $\\cos\\theta$ and having a minus sign, the fitting target is $R\\cos(\\theta+\\alpha)$, whose expansion carries a minus in front of the sine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(\\theta+\\alpha) = R\\cos\\alpha\\,\\cos\\theta - R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ gives a positive $\\cos\\theta$ term and a negative $\\sin\\theta$ term, matching the pattern on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 7, \\qquad R\\sin\\alpha = 3",
          "explanation": "Matching $\\cos\\theta$ gives $R\\cos\\alpha=7$. Matching $\\sin\\theta$ gives $-R\\sin\\alpha=-3$, so $R\\sin\\alpha=3$; the signs cancel and $\\alpha$ stays acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{7^2 + 3^2} = \\sqrt{58}",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=49+9=58$. The positive root $\\sqrt{58}$ has no square factors, so it stays as a surd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{3}{7} \\Rightarrow \\alpha = 23.2^\\circ",
          "explanation": "Dividing the two equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{3}{7}$. Both matched coefficients are positive, so $\\alpha=23.2^\\circ$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "7\\cos\\theta - 3\\sin\\theta = \\sqrt{58}\\,\\cos(\\theta + 23.2^\\circ)",
          "explanation": "The expression is now one cosine wave of amplitude $\\sqrt{58}$, shifted left by $23.2^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{58}\\,\\cos(\\theta+23.2^\\circ) = 2 \\Rightarrow \\cos(\\theta+23.2^\\circ) = \\dfrac{2}{\\sqrt{58}} = 0.2626",
          "explanation": "Substituting the R-form gives a single cosine equal to a number; dividing by $\\sqrt{58}$ isolates it ready to invert.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow 23.2^\\circ \\le \\theta+23.2^\\circ \\le 383.2^\\circ",
          "explanation": "Since the unknown inside the cosine is $\\theta+23.2^\\circ$, we add $23.2^\\circ$ to both ends of the interval before solving.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta+23.2^\\circ = \\arccos(0.2626) = 74.8^\\circ",
          "explanation": "The calculator gives the principal cosine value. Since cosine is even, the negative of this angle is also a solution, which generates the second answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta+23.2^\\circ = 74.8^\\circ,\\; 285.2^\\circ",
          "explanation": "Cosine is positive at $\\pm 74.8^\\circ$. As $-74.8^\\circ$ is below $23.2^\\circ$, we add $360^\\circ$ to obtain $285.2^\\circ$, which lies in the window with $74.8^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 74.8^\\circ-23.2^\\circ,\\; 285.2^\\circ-23.2^\\circ = 51.6^\\circ,\\; 262.0^\\circ",
          "explanation": "Subtracting $23.2^\\circ$ from each shifted angle returns to $\\theta$. Both values lie in $0^\\circ$ to $360^\\circ$, so both are accepted.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\cos\\theta - 3\\sin\\theta = \\sqrt{58}\\,\\cos(\\theta+23.2^\\circ)$, and the equation has solutions $\\theta = 51.6^\\circ$ and $\\theta = 262.0^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q029",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum"
    ],
    "questionText": "Express $9\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence write down the greatest and least values of $9\\sin\\theta + 4\\cos\\theta - 3$, and find the value of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$ at which the least value occurs. Give non-exact answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "9\\sin\\theta + 4\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We rewrite only the wave part; the $-3$ shifts the whole graph down and is reinstated at the end. The $R\\sin(\\theta+\\alpha)$ form shows the amplitude at a glance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the addition formula and pulling $R$ through casts the target in the same shape as the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 9, \\qquad R\\sin\\alpha = 4",
          "explanation": "Matching the $\\sin\\theta$ coefficients and then the $\\cos\\theta$ coefficients gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{9^2 + 4^2} = \\sqrt{97}",
          "explanation": "Squaring and adding eliminates $\\alpha$, so $R^2=81+16=97$ and the amplitude is $\\sqrt{97}\\approx 9.849$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{4}{9} \\Rightarrow \\alpha = 24.0^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{4}{9}$; both coefficients are positive, so $\\alpha=24.0^\\circ$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "9\\sin\\theta + 4\\cos\\theta = \\sqrt{97}\\,\\sin(\\theta+24.0^\\circ)",
          "explanation": "The wave part is now a single sine of amplitude $\\sqrt{97}$ shifted left by $24.0^\\circ$, which controls the whole expression's swing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the range of sine",
          "workingLatex": "-\\sqrt{97} \\le \\sqrt{97}\\,\\sin(\\theta+24.0^\\circ) \\le \\sqrt{97}",
          "explanation": "Because $\\sin$ lies between $-1$ and $1$, multiplying by the positive amplitude $\\sqrt{97}$ shows the wave itself ranges from $-\\sqrt{97}$ to $+\\sqrt{97}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Greatest value",
          "workingLatex": "\\text{greatest} = \\sqrt{97} - 3 \\approx 6.8",
          "explanation": "Subtracting $3$ lowers every value by $3$, so the greatest value is the top of the wave minus $3$: $\\sqrt{97}-3\\approx 6.8$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Least value",
          "workingLatex": "\\text{least} = -\\sqrt{97} - 3 \\approx -12.8",
          "explanation": "Likewise the least value is the bottom of the wave minus $3$: $-\\sqrt{97}-3\\approx -12.8$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Where the least value occurs",
          "workingLatex": "\\theta+24.0^\\circ = 270^\\circ \\Rightarrow \\theta = 246.0^\\circ",
          "explanation": "The wave reaches its bottom when the sine equals $-1$, i.e. when its angle is $270^\\circ$. Solving $\\theta+24.0^\\circ=270^\\circ$ gives $\\theta=246.0^\\circ$, which lies in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$9\\sin\\theta + 4\\cos\\theta = \\sqrt{97}\\,\\sin(\\theta+24.0^\\circ)$; the greatest value of $9\\sin\\theta+4\\cos\\theta-3$ is $\\sqrt{97}-3\\approx 6.8$ and the least value is $-\\sqrt{97}-3\\approx -12.8$, the least occurring at $\\theta=246.0^\\circ$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q030",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Express $5\\sin\\theta + 3\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $5\\sin\\theta + 3\\cos\\theta = -2$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "5\\sin\\theta + 3\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We fold the two waves into one sine of amplitude $R$ shifted by $\\alpha$, so that a basic sine equation replaces the two-term one, even though the right-hand side here is negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle expansion, with $R$ brought through, matches the shape of the left-hand side term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 3",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and then of $\\cos\\theta$ gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{5^2 + 3^2} = \\sqrt{34}",
          "explanation": "Squaring and adding removes $\\alpha$, so $R^2=25+9=34$ and $R=\\sqrt{34}$, which is already in simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{3}{5} \\Rightarrow \\alpha = 30.96^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{3}{5}$. Both coefficients are positive, so $\\alpha$ is acute; we keep $2$ decimal places here so the later subtraction stays accurate to $1$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "5\\sin\\theta + 3\\cos\\theta = \\sqrt{34}\\,\\sin(\\theta+30.96^\\circ)",
          "explanation": "The expression is now a single sine wave of amplitude $\\sqrt{34}$ shifted left by $30.96^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{34}\\,\\sin(\\theta+30.96^\\circ) = -2 \\Rightarrow \\sin(\\theta+30.96^\\circ) = \\dfrac{-2}{\\sqrt{34}} = -0.3430",
          "explanation": "Substituting the R-form gives a basic sine equation. Dividing by $\\sqrt{34}$ leaves a negative value, so the shifted angle must lie where sine is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow 30.96^\\circ \\le \\theta+30.96^\\circ \\le 390.96^\\circ",
          "explanation": "The unknown inside the sine is $\\theta+30.96^\\circ$, so both ends of the range rise by $30.96^\\circ$ before we solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta+30.96^\\circ = \\arcsin(-0.3430) = -20.06^\\circ",
          "explanation": "The calculator returns a negative principal value, which sits below our window. It is not a final answer itself but the anchor from which the in-range solutions are built.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta+30.96^\\circ = 200.06^\\circ,\\; 339.94^\\circ",
          "explanation": "Sine is negative in the third and fourth quadrants: $180^\\circ-(-20.06^\\circ)=200.06^\\circ$ and $360^\\circ+(-20.06^\\circ)=339.94^\\circ$. Both lie inside $30.96^\\circ$ to $390.96^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 200.06^\\circ-30.96^\\circ,\\; 339.94^\\circ-30.96^\\circ = 169.1^\\circ,\\; 309.0^\\circ",
          "explanation": "Subtracting $30.96^\\circ$ from each shifted angle returns to $\\theta$, and rounding to $1$ d.p. gives the two solutions, both inside $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sin\\theta + 3\\cos\\theta = \\sqrt{34}\\,\\sin(\\theta+30.96^\\circ)$, and the equation has solutions $\\theta = 169.1^\\circ$ and $\\theta = 309.0^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q031",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Express $4\\sin\\theta - 7\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $4\\sin\\theta - 7\\cos\\theta = 5$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "4\\sin\\theta - 7\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The minus sign between the terms suggests the $R\\sin(\\theta-\\alpha)$ target, whose expansion has a minus in front of the cosine, matching the given expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta-\\alpha)$ produces a positive $\\sin\\theta$ term and a negative $\\cos\\theta$ term, exactly the sign pattern of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 4, \\qquad R\\sin\\alpha = 7",
          "explanation": "Matching $\\sin\\theta$ gives $R\\cos\\alpha=4$. Matching $\\cos\\theta$ gives $-R\\sin\\alpha=-7$, so $R\\sin\\alpha=7$; the minus signs cancel and $\\alpha$ remains acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{4^2 + 7^2} = \\sqrt{65}",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=16+49=65$. The root $\\sqrt{65}$ has no square factors, so it stays exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{7}{4} \\Rightarrow \\alpha = 60.26^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{7}{4}$; both matched coefficients are positive, so $\\alpha$ is acute. We keep $2$ d.p. so the final subtraction is accurate to $1$ d.p.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "4\\sin\\theta - 7\\cos\\theta = \\sqrt{65}\\,\\sin(\\theta-60.26^\\circ)",
          "explanation": "The expression is now a single sine wave of amplitude $\\sqrt{65}$ shifted right by $60.26^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{65}\\,\\sin(\\theta-60.26^\\circ) = 5 \\Rightarrow \\sin(\\theta-60.26^\\circ) = \\dfrac{5}{\\sqrt{65}} = 0.6202",
          "explanation": "Substituting the R-form reduces the equation to a single sine equal to a number, isolated by dividing through by $\\sqrt{65}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow -60.26^\\circ \\le \\theta-60.26^\\circ \\le 299.74^\\circ",
          "explanation": "The unknown inside the sine is $\\theta-60.26^\\circ$, so both ends of the range drop by $60.26^\\circ$. The window now starts below zero, which we must keep in mind.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta-60.26^\\circ = \\arcsin(0.6202) = 38.33^\\circ",
          "explanation": "The calculator's principal value is the anchor solution, and the second-quadrant partner follows from the sine curve's symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta-60.26^\\circ = 38.33^\\circ,\\; 141.67^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so with $38.33^\\circ$ we also take $180^\\circ-38.33^\\circ=141.67^\\circ$. Both lie inside $-60.26^\\circ$ to $299.74^\\circ$; no other copies fit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add α to recover θ",
          "workingLatex": "\\theta = 38.33^\\circ+60.26^\\circ,\\; 141.67^\\circ+60.26^\\circ = 98.6^\\circ,\\; 201.9^\\circ",
          "explanation": "Adding $60.26^\\circ$ back to each shifted angle returns to $\\theta$. Rounding to $1$ d.p., both solutions lie in $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4\\sin\\theta - 7\\cos\\theta = \\sqrt{65}\\,\\sin(\\theta-60.26^\\circ)$, and the equation has solutions $\\theta = 98.6^\\circ$ and $\\theta = 201.9^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "questionDiagram": null,
    "id": "al.y2.pure.rsin-form.q032",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations"
    ],
    "questionText": "Express $11\\sin\\theta + 6\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ < \\alpha < 90^\\circ$. Hence solve $11\\sin\\theta + 6\\cos\\theta = 7$ for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers to $1$ decimal place.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "11\\sin\\theta + 6\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Writing the two-term expression as a single sine of amplitude $R$ shifted by $\\alpha$ will turn the equation into a basic sine equation we can solve directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the addition formula and taking $R$ through matches the shape of the left-hand side, a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 11, \\qquad R\\sin\\alpha = 6",
          "explanation": "For the identity to hold for all $\\theta$, the $\\sin\\theta$ coefficients must match and the $\\cos\\theta$ coefficients must match, giving these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{11^2 + 6^2} = \\sqrt{157}",
          "explanation": "Squaring and adding eliminates $\\alpha$, so $R^2=121+36=157$. Since $157$ is prime it has no square factors, and $R=\\sqrt{157}$ stays exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{6}{11} \\Rightarrow \\alpha = 28.6^\\circ",
          "explanation": "Dividing the equations cancels $R$ and gives $\\tan\\alpha=\\tfrac{6}{11}$. Both coefficients are positive, so $\\alpha=28.6^\\circ$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "11\\sin\\theta + 6\\cos\\theta = \\sqrt{157}\\,\\sin(\\theta+28.6^\\circ)",
          "explanation": "The expression is now a single sine wave of amplitude $\\sqrt{157}$ shifted left by $28.6^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{157}\\,\\sin(\\theta+28.6^\\circ) = 7 \\Rightarrow \\sin(\\theta+28.6^\\circ) = \\dfrac{7}{\\sqrt{157}} = 0.5587",
          "explanation": "Substituting the R-form gives a single sine equal to a number, which we isolate by dividing through by $\\sqrt{157}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ \\le \\theta \\le 360^\\circ \\Rightarrow 28.6^\\circ \\le \\theta+28.6^\\circ \\le 388.6^\\circ",
          "explanation": "The unknown inside the sine is $\\theta+28.6^\\circ$, so we add $28.6^\\circ$ to both ends before solving to avoid missing any solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\theta+28.6^\\circ = \\arcsin(0.5587) = 34.0^\\circ",
          "explanation": "The calculator gives the principal value, the anchor from which the second-quadrant solution follows.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "List all angles in the shifted range",
          "workingLatex": "\\theta+28.6^\\circ = 34.0^\\circ,\\; 146.0^\\circ",
          "explanation": "Sine is positive in the first and second quadrants, so alongside $34.0^\\circ$ we take $180^\\circ-34.0^\\circ=146.0^\\circ$. Adding $360^\\circ$ would exceed $388.6^\\circ$, so there are no further solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 34.0^\\circ-28.6^\\circ,\\; 146.0^\\circ-28.6^\\circ = 5.4^\\circ,\\; 117.4^\\circ",
          "explanation": "Subtracting $28.6^\\circ$ from each shifted angle returns to $\\theta$. Both results lie in $0^\\circ$ to $360^\\circ$, so both are valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$11\\sin\\theta + 6\\cos\\theta = \\sqrt{157}\\,\\sin(\\theta+28.6^\\circ)$, and the equation has solutions $\\theta = 5.4^\\circ$ and $\\theta = 117.4^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations",
      "radians"
    ],
    "questionText": "Express $\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence solve $\\sin\\theta + \\cos\\theta = 1$ for $0 \\le \\theta \\le 2\\pi$, giving your answers exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "We want to fold the two separate waves into a single sine wave. Writing the expression as identically equal to $R\\sin(\\theta+\\alpha)$ lets us expand the right-hand side and then match it term by term with the left.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and pulling the constant $R$ through gives the right-hand side the same shape as the left: some amount of $\\sin\\theta$ plus some amount of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "For the two sides to agree for every value of $\\theta$, the amount of $\\sin\\theta$ on each side must match and the amount of $\\cos\\theta$ must match. That gives us two equations in $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding the two equations removes $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=1^2+1^2$. We take the positive root since $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{1} = 1 \\Rightarrow \\alpha = \\dfrac{\\pi}{4}",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and leaves $\\tan\\alpha=1$. Both coefficients are positive, so $\\alpha$ is acute, and the exact acute angle with tangent $1$ is $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\!\\left(\\theta + \\dfrac{\\pi}{4}\\right)",
          "explanation": "Combining the amplitude and phase gives the single-wave form. It shows at a glance that the expression oscillates between $-\\sqrt{2}$ and $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{2}\\,\\sin\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right) = 1 \\Rightarrow \\sin\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Replacing the two-term expression by the single wave turns the problem into a basic sine equation. Dividing both sides by $\\sqrt{2}$ isolates the sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0 \\le \\theta \\le 2\\pi \\Rightarrow \\dfrac{\\pi}{4} \\le \\theta+\\dfrac{\\pi}{4} \\le \\dfrac{9\\pi}{4}",
          "explanation": "We are now solving for the shifted angle $\\theta+\\dfrac{\\pi}{4}$, so we add $\\dfrac{\\pi}{4}$ to both ends of the search interval. This guarantees we catch every solution and drop none at the edges.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta+\\dfrac{\\pi}{4} = \\dfrac{\\pi}{4},\\; \\dfrac{3\\pi}{4},\\; \\dfrac{9\\pi}{4}",
          "explanation": "The principal value of $\\arcsin\\dfrac{1}{\\sqrt{2}}$ is $\\dfrac{\\pi}{4}$; sine is also positive in the second quadrant, giving $\\pi-\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}$; adding $2\\pi$ to the principal value gives $\\dfrac{9\\pi}{4}$, which still lies inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 0,\\; \\dfrac{\\pi}{2},\\; 2\\pi",
          "explanation": "Subtracting $\\dfrac{\\pi}{4}$ from each shifted value undoes the shift. All three results lie in $0 \\le \\theta \\le 2\\pi$, so all are kept.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solutions",
          "workingLatex": "\\sin 0 + \\cos 0 = 1, \\quad \\sin\\tfrac{\\pi}{2} + \\cos\\tfrac{\\pi}{2} = 1, \\quad \\sin 2\\pi + \\cos 2\\pi = 1",
          "explanation": "Substituting each answer back into the original equation returns $1$ every time, confirming the three values are genuine solutions and none has been introduced by mistake.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\,\\sin\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right)$, and the equation is satisfied by $\\theta = 0,\\; \\dfrac{\\pi}{2},\\; 2\\pi$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum",
      "radians"
    ],
    "questionText": "Express $3\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence find the maximum and minimum values of $3\\sin\\theta + 4\\cos\\theta + 7$, and the values of $\\theta$ in $0 \\le \\theta \\le 2\\pi$ at which each occurs. Give the angles in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Rewriting the two-term expression as one sine wave is the key move: once it is a single wave of amplitude $R$, its largest and smallest values are read straight off, with no calculus needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and multiplying through by $R$ puts the right-hand side into the same $\\sin\\theta$-plus-$\\cos\\theta$ shape as the left, ready for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 3, \\qquad R\\sin\\alpha = 4",
          "explanation": "Matching the amount of $\\sin\\theta$ and the amount of $\\cos\\theta$ on each side yields the two defining equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding eliminates $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=3^2+4^2$. The positive root gives the amplitude $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{4}{3} \\Rightarrow \\alpha = 0.927",
          "explanation": "Dividing the two equations leaves $\\tan\\alpha=\\dfrac{4}{3}$. Both coefficients are positive so $\\alpha$ is acute, and in radians $\\alpha=\\arctan\\dfrac{4}{3}=0.927$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form of the whole expression",
          "workingLatex": "3\\sin\\theta + 4\\cos\\theta + 7 = 5\\sin(\\theta + 0.927) + 7",
          "explanation": "The constant $7$ simply rides along unchanged. The expression is now a single wave of amplitude $5$ lifted up by $7$, which makes its extreme values easy to see.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1 \\le \\sin(\\theta + 0.927) \\le 1",
          "explanation": "Every sine, whatever its argument, stays between $-1$ and $1$. This single fact is what pins down the largest and smallest possible values of the expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the maximum value",
          "workingLatex": "\\text{max} = 5(1) + 7 = 12",
          "explanation": "The expression is greatest when the sine reaches its ceiling of $+1$. Then $5(1)+7=12$, so the maximum value is $12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find θ for the maximum",
          "workingLatex": "\\theta + 0.927 = \\dfrac{\\pi}{2} \\Rightarrow \\theta = \\dfrac{\\pi}{2} - 0.927 = 0.644",
          "explanation": "A sine equals $+1$ when its angle is $\\dfrac{\\pi}{2}$. Solving $\\theta+0.927=\\dfrac{\\pi}{2}$ gives $\\theta=0.644$, which lies in the required interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum value",
          "workingLatex": "\\text{min} = 5(-1) + 7 = 2",
          "explanation": "The expression is smallest when the sine drops to its floor of $-1$. Then $5(-1)+7=2$, so the minimum value is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find θ for the minimum",
          "workingLatex": "\\theta + 0.927 = \\dfrac{3\\pi}{2} \\Rightarrow \\theta = \\dfrac{3\\pi}{2} - 0.927 = 3.79",
          "explanation": "A sine equals $-1$ when its angle is $\\dfrac{3\\pi}{2}$. Solving $\\theta+0.927=\\dfrac{3\\pi}{2}$ gives $\\theta=3.79$, which also lies in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta+0.927)$. The maximum value is $12$ at $\\theta = 0.644$, and the minimum value is $2$ at $\\theta = 3.79$ (angles in radians to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "solving equations"
    ],
    "questionText": "Express $5\\cos\\theta - 2\\sin\\theta$ in the form $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence solve $5\\cos\\theta - 2\\sin\\theta = 3$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "5\\cos\\theta - 2\\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "Because the expression leads with a cosine and the sine is subtracted, the natural single-wave target is $R\\cos(\\theta+\\alpha)$: its expansion produces exactly a cosine term minus a sine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(\\theta+\\alpha) = R\\cos\\alpha\\,\\cos\\theta - R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ and distributing $R$ gives a cosine term minus a sine term, matching the layout of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 2",
          "explanation": "Matching the coefficient of $\\cos\\theta$ gives $R\\cos\\alpha=5$, and matching the coefficient of $\\sin\\theta$ (the minus signs cancel on both sides) gives $R\\sin\\alpha=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{5^2 + 2^2} = \\sqrt{29}",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=5^2+2^2=29$. Since $29$ is not a perfect square, we keep $R=\\sqrt{29}$ in exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{2}{5} \\Rightarrow \\alpha = 0.381",
          "explanation": "Dividing the two equations gives $\\tan\\alpha=\\dfrac{2}{5}$. Both parts are positive, so $\\alpha$ is acute, and in radians $\\alpha=\\arctan\\dfrac{2}{5}=0.381$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "5\\cos\\theta - 2\\sin\\theta = \\sqrt{29}\\,\\cos(\\theta + 0.381)",
          "explanation": "Putting amplitude and phase together gives the single cosine wave. It oscillates between $-\\sqrt{29}$ and $\\sqrt{29}$, so an equation equal to $3$ certainly has solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{29}\\,\\cos(\\theta+0.381) = 3 \\Rightarrow \\cos(\\theta+0.381) = \\dfrac{3}{\\sqrt{29}} = 0.5571",
          "explanation": "Substituting the single-wave form turns the equation into a basic cosine equation. Dividing by $\\sqrt{29}$ isolates the cosine and gives a value we can invert.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0 \\le \\theta \\le 2\\pi \\Rightarrow 0.381 \\le \\theta+0.381 \\le 6.664",
          "explanation": "Since we now solve for $\\theta+0.381$, we add $0.381$ to both ends of the interval. Working in the shifted interval makes sure no valid solution is lost near either boundary.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta+0.381 = 0.980,\\; 2\\pi - 0.980 = 5.303",
          "explanation": "The principal value $\\arccos(0.5571)=0.980$. Cosine is also positive in the fourth quadrant, giving $2\\pi-0.980=5.303$; both lie inside the shifted interval, and adding a further $2\\pi$ would fall outside it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 0.980 - 0.381 = 0.599,\\quad \\theta = 5.303 - 0.381 = 4.92",
          "explanation": "Subtracting the phase $0.381$ from each shifted angle undoes the shift. Both results lie in $0 \\le \\theta \\le 2\\pi$, so both are valid solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solutions",
          "workingLatex": "5\\cos(0.599) - 2\\sin(0.599) \\approx 3, \\quad 5\\cos(4.92) - 2\\sin(4.92) \\approx 3",
          "explanation": "Substituting each answer back into the original expression returns approximately $3$, confirming the two rounded solutions are correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\cos\\theta - 2\\sin\\theta = \\sqrt{29}\\,\\cos(\\theta+0.381)$, and the equation has solutions $\\theta = 0.599$ and $\\theta = 4.92$ (radians, to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": [
      "r form",
      "harmonic form",
      "range",
      "radians"
    ],
    "questionText": "The function $f$ is defined by $f(\\theta) = 6 + 5\\sin\\theta - 12\\cos\\theta$. By writing $5\\sin\\theta - 12\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$ with $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, find the range of $f$, and state the value of $\\theta$ in $0 \\le \\theta \\le 2\\pi$ at which $f$ takes its greatest value. Give the angle in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "5\\sin\\theta - 12\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "Because the cosine term is subtracted, the tidy single-wave target is $R\\sin(\\theta-\\alpha)$; its expansion naturally gives a sine term minus a cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ and distributing $R$ matches the sine-minus-cosine layout of the expression we are converting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 12",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and of $\\cos\\theta$ (the minus signs match on both sides) gives the two defining equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=5^2+12^2=169$, a perfect square, so the amplitude is exactly $R=13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{12}{5} \\Rightarrow \\alpha = 1.18",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\dfrac{12}{5}$. Both coefficients are positive, so $\\alpha$ is acute; in radians $\\alpha=\\arctan\\dfrac{12}{5}=1.18$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite f in single-wave form",
          "workingLatex": "f(\\theta) = 6 + 13\\sin(\\theta - 1.176)",
          "explanation": "Keeping a little extra accuracy in the phase, the function is now a single sine wave of amplitude $13$ raised by the constant $6$, which makes its full range easy to read.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1 \\le \\sin(\\theta - 1.176) \\le 1",
          "explanation": "The sine can go no higher than $+1$ and no lower than $-1$, and both extremes are actually reached as $\\theta$ runs over a full revolution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the range of f",
          "workingLatex": "6 - 13 \\le f(\\theta) \\le 6 + 13 \\Rightarrow -7 \\le f(\\theta) \\le 19",
          "explanation": "Multiplying the sine bounds by $13$ and adding $6$ scales and shifts them. So $f$ takes every value from $-7$ up to $19$, giving the range $[-7,\\,19]$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Locate the greatest value",
          "workingLatex": "\\sin(\\theta - 1.176) = 1 \\Rightarrow \\theta - 1.176 = \\dfrac{\\pi}{2}",
          "explanation": "The greatest value $19$ occurs exactly when the sine hits $+1$, which happens when its angle equals $\\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for θ",
          "workingLatex": "\\theta = \\dfrac{\\pi}{2} + 1.176 = 2.75",
          "explanation": "Adding the phase $1.176$ to $\\dfrac{\\pi}{2}$ gives $\\theta=2.75$, which lies in $0 \\le \\theta \\le 2\\pi$, so this is where $f$ reaches its maximum of $19$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note where the least value occurs",
          "workingLatex": "\\sin(\\theta - 1.176) = -1 \\Rightarrow \\theta = \\dfrac{3\\pi}{2} + 1.176 = 5.89",
          "explanation": "For completeness, the least value $-7$ is reached when the sine equals $-1$, at $\\theta=5.89$; this confirms both ends of the range are attained inside the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(\\theta) = 6 + 13\\sin(\\theta - 1.18)$, so the range of $f$ is $-7 \\le f(\\theta) \\le 19$. The greatest value $19$ occurs at $\\theta = 2.75$ radians (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations",
      "radians"
    ],
    "questionText": "Express $\\sqrt{3}\\,\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence solve $\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 1$ for $0 \\le \\theta \\le 2\\pi$, giving your answers exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The expression is a positive sine plus a positive cosine, so the single-wave target $R\\sin(\\theta+\\alpha)$ fits perfectly. We expand and compare to find $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and multiplying by $R$ produces a $\\sin\\theta$ term plus a $\\cos\\theta$ term, exactly the form of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = \\sqrt{3}, \\qquad R\\sin\\alpha = 1",
          "explanation": "Equating the amount of $\\sin\\theta$ and of $\\cos\\theta$ on both sides gives the two equations that define $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=3+1=4$. Taking the positive root gives the clean amplitude $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{\\sqrt{3}} \\Rightarrow \\alpha = \\dfrac{\\pi}{6}",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\dfrac{1}{\\sqrt{3}}$. Both coefficients are positive, so $\\alpha$ is acute, and the exact acute angle with this tangent is $\\dfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\!\\left(\\theta + \\dfrac{\\pi}{6}\\right)",
          "explanation": "Combining amplitude and phase gives a single sine wave of amplitude $2$, so the expression varies between $-2$ and $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin\\!\\left(\\theta+\\dfrac{\\pi}{6}\\right) = 1 \\Rightarrow \\sin\\!\\left(\\theta+\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}",
          "explanation": "Replacing the two-term expression by the single wave and dividing by $2$ reduces the problem to a standard sine equation with a well-known value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0 \\le \\theta \\le 2\\pi \\Rightarrow \\dfrac{\\pi}{6} \\le \\theta+\\dfrac{\\pi}{6} \\le \\dfrac{13\\pi}{6}",
          "explanation": "As we are solving for $\\theta+\\dfrac{\\pi}{6}$, we add $\\dfrac{\\pi}{6}$ to both ends of the interval so that every solution is captured.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta+\\dfrac{\\pi}{6} = \\dfrac{\\pi}{6},\\; \\dfrac{5\\pi}{6},\\; \\dfrac{13\\pi}{6}",
          "explanation": "The principal value $\\arcsin\\dfrac{1}{2}=\\dfrac{\\pi}{6}$; sine is also positive in the second quadrant giving $\\pi-\\dfrac{\\pi}{6}=\\dfrac{5\\pi}{6}$; adding $2\\pi$ to the principal value gives $\\dfrac{13\\pi}{6}$, still inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 0,\\; \\dfrac{2\\pi}{3},\\; 2\\pi",
          "explanation": "Subtracting $\\dfrac{\\pi}{6}$ from each shifted value undoes the shift. All three lie in $0 \\le \\theta \\le 2\\pi$, so all are retained.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solutions",
          "workingLatex": "\\sqrt{3}\\sin\\tfrac{2\\pi}{3} + \\cos\\tfrac{2\\pi}{3} = \\sqrt{3}\\cdot\\tfrac{\\sqrt{3}}{2} - \\tfrac{1}{2} = 1",
          "explanation": "Checking the non-trivial value $\\dfrac{2\\pi}{3}$ returns $1$, and the endpoints $0$ and $2\\pi$ both give $\\sqrt{3}(0)+1=1$, so all three solutions are confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sqrt{3}\\,\\sin\\theta + \\cos\\theta = 2\\sin\\!\\left(\\theta+\\dfrac{\\pi}{6}\\right)$, and the equation is satisfied by $\\theta = 0,\\; \\dfrac{2\\pi}{3},\\; 2\\pi$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "solving equations"
    ],
    "questionText": "Express $\\cos\\theta - \\sin\\theta$ in the form $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence solve $\\cos\\theta - \\sin\\theta = 1$ for $0 \\le \\theta \\le 2\\pi$, giving your answers exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "\\cos\\theta - \\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "A cosine with a sine subtracted matches the expansion of $R\\cos(\\theta+\\alpha)$, which is a cosine term minus a sine term, so this is the target form to compare against.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(\\theta+\\alpha) = R\\cos\\alpha\\,\\cos\\theta - R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ and distributing $R$ gives a cosine term minus a sine term, ready to compare with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = 1",
          "explanation": "Matching the coefficient of $\\cos\\theta$ gives $R\\cos\\alpha=1$, and matching the coefficient of $\\sin\\theta$ (the minus signs cancel) gives $R\\sin\\alpha=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{1^2 + 1^2} = \\sqrt{2}",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=2$, so the amplitude is $R=\\sqrt{2}$ in exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{1}{1} = 1 \\Rightarrow \\alpha = \\dfrac{\\pi}{4}",
          "explanation": "Dividing the two equations gives $\\tan\\alpha=1$. Both coefficients are positive so $\\alpha$ is acute, and the acute angle with tangent $1$ is $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "\\cos\\theta - \\sin\\theta = \\sqrt{2}\\,\\cos\\!\\left(\\theta + \\dfrac{\\pi}{4}\\right)",
          "explanation": "Combining amplitude and phase gives a single cosine wave of amplitude $\\sqrt{2}$, so the expression ranges between $-\\sqrt{2}$ and $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{2}\\,\\cos\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right) = 1 \\Rightarrow \\cos\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Substituting the single-wave form and dividing by $\\sqrt{2}$ turns the equation into a standard cosine equation with a familiar exact value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0 \\le \\theta \\le 2\\pi \\Rightarrow \\dfrac{\\pi}{4} \\le \\theta+\\dfrac{\\pi}{4} \\le \\dfrac{9\\pi}{4}",
          "explanation": "Since we solve for $\\theta+\\dfrac{\\pi}{4}$, we add $\\dfrac{\\pi}{4}$ to both ends of the interval to be sure no solution is dropped at the boundaries.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta+\\dfrac{\\pi}{4} = \\dfrac{\\pi}{4},\\; \\dfrac{7\\pi}{4},\\; \\dfrac{9\\pi}{4}",
          "explanation": "Cosine equals $\\dfrac{1}{\\sqrt{2}}$ at $\\pm\\dfrac{\\pi}{4}$ plus multiples of $2\\pi$. Inside the shifted interval these are $\\dfrac{\\pi}{4}$, then $2\\pi-\\dfrac{\\pi}{4}=\\dfrac{7\\pi}{4}$, and $\\dfrac{\\pi}{4}+2\\pi=\\dfrac{9\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract α to recover θ",
          "workingLatex": "\\theta = 0,\\; \\dfrac{3\\pi}{2},\\; 2\\pi",
          "explanation": "Subtracting $\\dfrac{\\pi}{4}$ from each shifted value undoes the shift. All three lie in $0 \\le \\theta \\le 2\\pi$, so all are valid solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solutions",
          "workingLatex": "\\cos\\tfrac{3\\pi}{2} - \\sin\\tfrac{3\\pi}{2} = 0 - (-1) = 1",
          "explanation": "The value $\\dfrac{3\\pi}{2}$ gives $1$, and the endpoints $0$ and $2\\pi$ both give $\\cos-\\sin=1-0=1$, confirming all three solutions satisfy the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta - \\sin\\theta = \\sqrt{2}\\,\\cos\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right)$, and the equation is satisfied by $\\theta = 0,\\; \\dfrac{3\\pi}{2},\\; 2\\pi$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum",
      "radians"
    ],
    "questionText": "Express $8\\sin\\theta - 6\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence find the maximum and minimum values of $8\\sin\\theta - 6\\cos\\theta + 5$, and the values of $\\theta$ in $0 \\le \\theta \\le 2\\pi$ at which each occurs. Give the angles in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "8\\sin\\theta - 6\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "Because the cosine is subtracted, the tidy target is $R\\sin(\\theta-\\alpha)$. Once the expression is one wave of amplitude $R$, its extreme values follow directly, with no differentiation required.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ and distributing $R$ gives a sine term minus a cosine term, matching the expression's layout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 6",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and of $\\cos\\theta$ (both sides carry the minus) gives the two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=64+36=100$, a perfect square, so the amplitude is exactly $R=10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{6}{8} = \\dfrac{3}{4} \\Rightarrow \\alpha = 0.644",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\dfrac{3}{4}$. Both coefficients are positive, so $\\alpha$ is acute; in radians $\\alpha=\\arctan\\dfrac{3}{4}=0.644$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form of the whole expression",
          "workingLatex": "8\\sin\\theta - 6\\cos\\theta + 5 = 10\\sin(\\theta - 0.6435) + 5",
          "explanation": "Keeping a little extra accuracy in the phase, the expression is a single wave of amplitude $10$ raised by $5$. Its largest and smallest values now come straight from the size of the wave.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1 \\le \\sin(\\theta - 0.6435) \\le 1",
          "explanation": "Whatever the argument, a sine never leaves the band from $-1$ to $1$, and both limits are reached over a full turn of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the maximum value",
          "workingLatex": "\\text{max} = 10(1) + 5 = 15",
          "explanation": "The expression is greatest when the sine reaches $+1$. Then $10(1)+5=15$, so the maximum value is $15$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find θ for the maximum",
          "workingLatex": "\\theta - 0.6435 = \\dfrac{\\pi}{2} \\Rightarrow \\theta = \\dfrac{\\pi}{2} + 0.6435 = 2.21",
          "explanation": "A sine equals $+1$ when its angle is $\\dfrac{\\pi}{2}$. Solving $\\theta-0.6435=\\dfrac{\\pi}{2}$ gives $\\theta=2.21$, which lies in the interval.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the minimum value",
          "workingLatex": "\\text{min} = 10(-1) + 5 = -5",
          "explanation": "The expression is smallest when the sine drops to $-1$. Then $10(-1)+5=-5$, so the minimum value is $-5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find θ for the minimum",
          "workingLatex": "\\theta - 0.6435 = \\dfrac{3\\pi}{2} \\Rightarrow \\theta = \\dfrac{3\\pi}{2} + 0.6435 = 5.36",
          "explanation": "A sine equals $-1$ when its angle is $\\dfrac{3\\pi}{2}$. Solving $\\theta-0.6435=\\dfrac{3\\pi}{2}$ gives $\\theta=5.36$, which also lies in the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\sin\\theta - 6\\cos\\theta = 10\\sin(\\theta-0.644)$. The maximum value is $15$ at $\\theta = 2.21$, and the minimum value is $-5$ at $\\theta = 5.36$ (angles in radians to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "greatest and least"
    ],
    "questionText": "Express $4\\cos\\theta + 3\\sin\\theta$ in the form $R\\cos(\\theta-\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence find the greatest and least values of $4\\cos\\theta + 3\\sin\\theta - 2$, and the value of $\\theta$ in $0 \\le \\theta \\le 2\\pi$ at which the greatest value occurs. Give the angle in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "4\\cos\\theta + 3\\sin\\theta \\equiv R\\cos(\\theta-\\alpha)",
          "explanation": "A cosine plus a sine matches the expansion of $R\\cos(\\theta-\\alpha)$, which is a cosine term plus a sine term. Turning the pair into one wave makes the greatest and least values immediate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(\\theta-\\alpha) = R\\cos\\alpha\\,\\cos\\theta + R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta-\\alpha)=\\cos\\theta\\cos\\alpha+\\sin\\theta\\sin\\alpha$ and distributing $R$ gives a cosine term plus a sine term, ready to compare.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 4, \\qquad R\\sin\\alpha = 3",
          "explanation": "Matching the coefficient of $\\cos\\theta$ gives $R\\cos\\alpha=4$, and matching the coefficient of $\\sin\\theta$ gives $R\\sin\\alpha=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=16+9=25$, so the amplitude is exactly $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{3}{4} \\Rightarrow \\alpha = 0.644",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\dfrac{3}{4}$. Both coefficients are positive so $\\alpha$ is acute; in radians $\\alpha=\\arctan\\dfrac{3}{4}=0.644$ to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "4\\cos\\theta + 3\\sin\\theta = 5\\cos(\\theta - 0.6435)",
          "explanation": "Keeping extra accuracy in the phase, the expression is one cosine wave of amplitude $5$, so on its own it swings between $-5$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the cosine term",
          "workingLatex": "-1 \\le \\cos(\\theta - 0.6435) \\le 1",
          "explanation": "A cosine, whatever its argument, stays between $-1$ and $1$, and reaches both limits as $\\theta$ runs over a full revolution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the greatest value",
          "workingLatex": "\\text{greatest} = 5(1) - 2 = 3",
          "explanation": "Subtracting $2$ throughout, the expression is greatest when the cosine equals $+1$. Then $5(1)-2=3$, so the greatest value is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find θ for the greatest value",
          "workingLatex": "\\theta - 0.6435 = 0 \\Rightarrow \\theta = 0.6435 = 0.644",
          "explanation": "A cosine equals $+1$ when its angle is $0$. So $\\theta-0.6435=0$ gives $\\theta=0.644$, which lies in $0 \\le \\theta \\le 2\\pi$ and is where the greatest value occurs.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the least value",
          "workingLatex": "\\text{least} = 5(-1) - 2 = -7",
          "explanation": "The expression is least when the cosine equals $-1$. Then $5(-1)-2=-7$, so the least value is $-7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note where the least value occurs",
          "workingLatex": "\\theta - 0.6435 = \\pi \\Rightarrow \\theta = \\pi + 0.6435 = 3.79",
          "explanation": "For completeness, the cosine equals $-1$ when its angle is $\\pi$, giving $\\theta=3.79$; this confirms the least value $-7$ is indeed attained inside the interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$4\\cos\\theta + 3\\sin\\theta = 5\\cos(\\theta-0.644)$. The greatest value is $3$ (at $\\theta = 0.644$ radians) and the least value is $-7$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations",
      "radians"
    ],
    "questionText": "Express $7\\sin\\theta - 24\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, where $R>0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. Hence solve $7\\sin\\theta - 24\\cos\\theta = 15$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "7\\sin\\theta - 24\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The cosine term is subtracted, so the neat single-wave target is $R\\sin(\\theta-\\alpha)$. We expand and compare coefficients to pin down $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta-\\alpha) = R\\cos\\alpha\\,\\sin\\theta - R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta-\\alpha)$ and distributing $R$ gives a sine term minus a cosine term, matching the layout of the expression being converted.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 7, \\qquad R\\sin\\alpha = 24",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and of $\\cos\\theta$ (both carry the minus) gives the two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=49+576=625$, a perfect square, so the amplitude is exactly $R=25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{24}{7} \\Rightarrow \\alpha = 1.287",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\dfrac{24}{7}$. Both coefficients are positive, so $\\alpha$ is acute; in radians $\\alpha=\\arctan\\dfrac{24}{7}=1.287$ to $4$ significant figures for accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "7\\sin\\theta - 24\\cos\\theta = 25\\sin(\\theta - 1.287)",
          "explanation": "Combining amplitude and phase gives a single sine wave of amplitude $25$, so an equation equal to $15$ certainly has solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "25\\sin(\\theta-1.287) = 15 \\Rightarrow \\sin(\\theta-1.287) = 0.6",
          "explanation": "Substituting the single-wave form and dividing by $25$ reduces the problem to a basic sine equation with value $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0 \\le \\theta \\le 2\\pi \\Rightarrow -1.287 \\le \\theta - 1.287 \\le 4.996",
          "explanation": "As we now solve for $\\theta-1.287$, we subtract $1.287$ from both ends of the interval. Note the lower end is negative, so we must look for solutions below zero too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta-1.287 = 0.6435,\\; \\pi - 0.6435 = 2.498",
          "explanation": "The principal value $\\arcsin 0.6 = 0.6435$; sine is also positive in the second quadrant, giving $\\pi-0.6435=2.498$. Both lie in the shifted interval, and no further value obtained by adding or subtracting $2\\pi$ falls inside it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add α to recover θ",
          "workingLatex": "\\theta = 0.6435 + 1.287 = 1.93,\\quad \\theta = 2.498 + 1.287 = 3.79",
          "explanation": "Adding the phase $1.287$ to each shifted angle undoes the shift. Both results lie in $0 \\le \\theta \\le 2\\pi$, so both are valid solutions.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solutions",
          "workingLatex": "7\\sin(1.93) - 24\\cos(1.93) \\approx 15, \\quad 7\\sin(3.79) - 24\\cos(3.79) \\approx 15",
          "explanation": "Substituting each answer back into the original expression returns approximately $15$, confirming both rounded solutions are correct and none is missing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\sin\\theta - 24\\cos\\theta = 25\\sin(\\theta-1.287)$, and the equation has solutions $\\theta = 1.93$ and $\\theta = 3.79$ (radians, to $3$ s.f.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum"
    ],
    "questionText": "The function $f$ is defined by $f(\\theta)=\\dfrac{12}{7+3\\sin\\theta+4\\cos\\theta}$ for $0^\\circ \\le \\theta \\le 360^\\circ$. By first writing $3\\sin\\theta+4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0^\\circ<\\alpha<90^\\circ$, find the greatest and least values of $f(\\theta)$ and the value of $\\theta$ at which each occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity for the denominator",
          "workingLatex": "3\\sin\\theta+4\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Rewriting the two-term part $3\\sin\\theta+4\\cos\\theta$ as a single sine wave will let us read its range off at a glance, because a single sine only ever ranges between $-R$ and $R$. We set it identically equal to $R\\sin(\\theta+\\alpha)$ so we can expand and compare.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and pulling the constant $R$ through writes the right-hand side as a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, exactly the shape of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=3,\\qquad R\\sin\\alpha=4",
          "explanation": "The identity must hold for every $\\theta$, so the amount of $\\sin\\theta$ on each side must agree and likewise for $\\cos\\theta$. That matching gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "Squaring and adding both equations uses $\\cos^2\\alpha+\\sin^2\\alpha=1$ to eliminate $\\alpha$, leaving $R^2=3^2+4^2$. We take the positive root because $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{4}{3}\\Rightarrow \\alpha=53.13^\\circ",
          "explanation": "Dividing the sine equation by the cosine equation cancels $R$ and gives $\\tan\\alpha=\\tfrac{4}{3}$. Both coefficients are positive, so $\\alpha$ is acute and equals $\\arctan\\tfrac{4}{3}=53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite f using the R-form",
          "workingLatex": "f(\\theta)=\\dfrac{12}{7+5\\sin(\\theta+53.13^\\circ)}",
          "explanation": "Substituting the single wave for the two-term part turns the denominator into $7+5\\sin(\\theta+53.13^\\circ)$. Because the wave part is bounded, the whole denominator is now easy to bound.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le \\sin(\\theta+53.13^\\circ)\\le 1",
          "explanation": "A sine function never leaves the interval from $-1$ to $1$, whatever its input, so this is the full range of $\\sin(\\theta+53.13^\\circ)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bound the denominator",
          "workingLatex": "2\\le 7+5\\sin(\\theta+53.13^\\circ)\\le 12",
          "explanation": "Multiplying the sine bounds by $5$ and adding $7$ shifts the range to between $2$ and $12$. Since the smallest possible denominator is $2>0$, the fraction is always positive and never undefined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Greatest value of f",
          "workingLatex": "f_{\\max}=\\dfrac{12}{2}=6",
          "explanation": "A positive fraction with a fixed numerator is largest when its denominator is smallest. The least denominator is $2$, so the greatest value of $f$ is $\\tfrac{12}{2}=6$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Value of θ giving the greatest value",
          "workingLatex": "\\sin(\\theta+53.13^\\circ)=-1\\Rightarrow \\theta+53.13^\\circ=270^\\circ\\Rightarrow \\theta=216.87^\\circ",
          "explanation": "The denominator is smallest when the sine equals $-1$, which happens at $\\theta+53.13^\\circ=270^\\circ$. Subtracting $53.13^\\circ$ gives the angle in range where the maximum occurs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Least value of f",
          "workingLatex": "f_{\\min}=\\dfrac{12}{12}=1",
          "explanation": "By the same reasoning the fraction is smallest when the denominator is largest. The greatest denominator is $12$, so the least value of $f$ is $\\tfrac{12}{12}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Value of θ giving the least value",
          "workingLatex": "\\sin(\\theta+53.13^\\circ)=1\\Rightarrow \\theta+53.13^\\circ=90^\\circ\\Rightarrow \\theta=36.87^\\circ",
          "explanation": "The denominator is largest when the sine equals $1$, at $\\theta+53.13^\\circ=90^\\circ$. Subtracting $53.13^\\circ$ gives the angle at which the minimum occurs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta+4\\cos\\theta=5\\sin(\\theta+53.13^\\circ)$, so $f(\\theta)=\\dfrac{12}{7+5\\sin(\\theta+53.13^\\circ)}$. The greatest value is $f=6$ at $\\theta=216.9^\\circ$, and the least value is $f=1$ at $\\theta=36.9^\\circ$ (angles to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum",
      "radians"
    ],
    "questionText": "Given that $g(\\theta)=\\dfrac{6}{4+\\sin\\theta+\\sqrt{3}\\,\\cos\\theta}$ for $0 \\le \\theta \\le 2\\pi$, express $\\sin\\theta+\\sqrt{3}\\,\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0<\\alpha<\\tfrac{\\pi}{2}$, and hence find the exact greatest and least values of $g(\\theta)$ and the value of $\\theta$ at which each occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity for the denominator",
          "workingLatex": "\\sin\\theta+\\sqrt{3}\\,\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Turning $\\sin\\theta+\\sqrt{3}\\,\\cos\\theta$ into a single sine wave will pin its range down neatly, since one sine only swings between $-R$ and $R$. We set it identically equal to $R\\sin(\\theta+\\alpha)$ to expand and compare.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target with the addition formula",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Applying $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and multiplying by $R$ puts the right-hand side in the same $\\sin\\theta$-plus-$\\cos\\theta$ shape as the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=\\sqrt{3}",
          "explanation": "For the two expressions to be equal for all $\\theta$, the coefficients of $\\sin\\theta$ must match and so must those of $\\cos\\theta$, giving these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+(\\sqrt{3})^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=1+3=4$. The positive root gives $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}=\\sqrt{3}\\Rightarrow \\alpha=\\dfrac{\\pi}{3}",
          "explanation": "Dividing the two equations cancels $R$ to give $\\tan\\alpha=\\sqrt{3}$. Both coefficients are positive, so $\\alpha$ is acute, and the exact angle with $\\tan\\alpha=\\sqrt{3}$ is $\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite g using the R-form",
          "workingLatex": "g(\\theta)=\\dfrac{6}{4+2\\sin\\left(\\theta+\\frac{\\pi}{3}\\right)}",
          "explanation": "Replacing the two-term part with $2\\sin\\left(\\theta+\\tfrac{\\pi}{3}\\right)$ gives a denominator built from a single bounded wave, which we can now bound cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le \\sin\\left(\\theta+\\frac{\\pi}{3}\\right)\\le 1",
          "explanation": "Whatever the angle, a sine value lies between $-1$ and $1$, so this is the complete range of the wave inside the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bound the denominator",
          "workingLatex": "2\\le 4+2\\sin\\left(\\theta+\\frac{\\pi}{3}\\right)\\le 6",
          "explanation": "Scaling the sine bounds by $2$ and adding $4$ gives a denominator between $2$ and $6$. The smallest value is $2>0$, so the fraction is always positive and well defined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Greatest value of g",
          "workingLatex": "g_{\\max}=\\dfrac{6}{2}=3",
          "explanation": "With a fixed positive numerator, the fraction is greatest when its denominator is least. The least denominator is $2$, giving $g_{\\max}=\\tfrac{6}{2}=3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Value of θ giving the greatest value",
          "workingLatex": "\\sin\\left(\\theta+\\tfrac{\\pi}{3}\\right)=-1\\Rightarrow \\theta+\\dfrac{\\pi}{3}=\\dfrac{3\\pi}{2}\\Rightarrow \\theta=\\dfrac{7\\pi}{6}",
          "explanation": "The denominator is least when the sine is $-1$, at $\\theta+\\tfrac{\\pi}{3}=\\tfrac{3\\pi}{2}$. Subtracting $\\tfrac{\\pi}{3}$ gives $\\theta=\\tfrac{7\\pi}{6}$, which lies inside $[0,2\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Least value of g",
          "workingLatex": "g_{\\min}=\\dfrac{6}{6}=1",
          "explanation": "The fraction is smallest when the denominator is largest. The greatest denominator is $6$, giving $g_{\\min}=\\tfrac{6}{6}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Value of θ giving the least value",
          "workingLatex": "\\sin\\left(\\theta+\\tfrac{\\pi}{3}\\right)=1\\Rightarrow \\theta+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{2}\\Rightarrow \\theta=\\dfrac{\\pi}{6}",
          "explanation": "The denominator is largest when the sine is $1$, at $\\theta+\\tfrac{\\pi}{3}=\\tfrac{\\pi}{2}$. Subtracting $\\tfrac{\\pi}{3}$ gives $\\theta=\\tfrac{\\pi}{6}$, which lies inside $[0,2\\pi]$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta+\\sqrt{3}\\,\\cos\\theta=2\\sin\\left(\\theta+\\tfrac{\\pi}{3}\\right)$. The greatest value is $g=3$ at $\\theta=\\tfrac{7\\pi}{6}$, and the least value is $g=1$ at $\\theta=\\tfrac{\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "r form",
      "harmonic form",
      "proof",
      "maximum and minimum"
    ],
    "questionText": "(a) Prove that $5\\sin\\theta-12\\cos\\theta \\equiv 13\\sin(\\theta-\\alpha)$, where $R>0$ and $\\alpha$ is acute, stating the value of $\\alpha$ to $2$ decimal places. (b) Hence write down the maximum and minimum values of $5\\sin\\theta-12\\cos\\theta$ and find the value of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$ at which the maximum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to prove",
          "workingLatex": "5\\sin\\theta-12\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "Because the expression is $5\\sin\\theta$ minus a cosine term, the natural single-wave target is $R\\sin(\\theta-\\alpha)$, whose expansion produces a subtraction. We set them identically equal and work out $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand using the subtraction formula",
          "workingLatex": "R\\sin(\\theta-\\alpha)=R\\cos\\alpha\\,\\sin\\theta-R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Applying $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ and multiplying by $R$ produces a positive multiple of $\\sin\\theta$ and a negative multiple of $\\cos\\theta$, matching the signs in the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=5,\\qquad R\\sin\\alpha=12",
          "explanation": "Matching the coefficient of $\\sin\\theta$ gives $R\\cos\\alpha=5$, and matching the coefficient of $\\cos\\theta$ (both sides carry a minus sign) gives $R\\sin\\alpha=12$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{5^2+12^2}=\\sqrt{169}=13",
          "explanation": "Squaring and adding eliminates $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=5^2+12^2=169$ and the positive root is $R=13$, as required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{12}{5}\\Rightarrow \\alpha=67.38^\\circ",
          "explanation": "Dividing the two equations cancels $R$ to give $\\tan\\alpha=\\tfrac{12}{5}$. Both $5$ and $12$ are positive, so $\\alpha$ is acute and equals $\\arctan\\tfrac{12}{5}=67.38^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the identity",
          "workingLatex": "\\cos\\alpha=\\tfrac{5}{13},\\ \\sin\\alpha=\\tfrac{12}{13}\\Rightarrow 13\\cdot\\tfrac{5}{13}\\sin\\theta-13\\cdot\\tfrac{12}{13}\\cos\\theta=5\\sin\\theta-12\\cos\\theta",
          "explanation": "Substituting the exact values $\\cos\\alpha=\\tfrac{5}{13}$ and $\\sin\\alpha=\\tfrac{12}{13}$ back into the expansion reproduces $5\\sin\\theta-12\\cos\\theta$ exactly, which completes the proof.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the proven identity",
          "workingLatex": "5\\sin\\theta-12\\cos\\theta \\equiv 13\\sin(\\theta-67.38^\\circ)",
          "explanation": "Combining the amplitude and phase gives the single-wave form. This immediately reveals how the expression behaves: it is $13$ times a sine, so it oscillates between $-13$ and $13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the range",
          "workingLatex": "-13\\le 13\\sin(\\theta-67.38^\\circ)\\le 13",
          "explanation": "Since $\\sin$ of any angle lies between $-1$ and $1$, multiplying by $13$ shows the expression can be no larger than $13$ and no smaller than $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the maximum and minimum values",
          "workingLatex": "\\text{maximum}=13,\\qquad \\text{minimum}=-13",
          "explanation": "The extreme values are reached exactly when the sine hits $+1$ or $-1$, so the greatest value is $13$ and the least value is $-13$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find θ where the maximum occurs",
          "workingLatex": "\\sin(\\theta-67.38^\\circ)=1\\Rightarrow \\theta-67.38^\\circ=90^\\circ\\Rightarrow \\theta=157.38^\\circ",
          "explanation": "The maximum happens when the sine equals $1$, at $\\theta-67.38^\\circ=90^\\circ$. Adding $67.38^\\circ$ gives $\\theta=157.38^\\circ$, which lies within $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sin\\theta-12\\cos\\theta \\equiv 13\\sin(\\theta-67.38^\\circ)$ with $\\alpha=67.38^\\circ$. The maximum value is $13$ and the minimum value is $-13$; the maximum occurs at $\\theta=157.4^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "radians"
    ],
    "questionText": "The displacement, in centimetres, of a particle at time $t$ seconds is modelled by $x(t)=3\\sin(2t)+4\\cos(2t)$ for $t\\ge 0$. Express $x(t)$ in the form $R\\sin(2t+\\alpha)$, where $R>0$ and $0<\\alpha<\\tfrac{\\pi}{2}$ (in radians), and hence state the amplitude of the motion and find the first time $t>0$ at which the displacement is greatest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "3\\sin(2t)+4\\cos(2t)\\equiv R\\sin(2t+\\alpha)",
          "explanation": "Writing the sum of a sine and cosine of the same angle $2t$ as one sine wave reveals the amplitude directly, since a single sine of amplitude $R$ swings between $-R$ and $R$. We set the two forms identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(2t+\\alpha)=R\\cos\\alpha\\,\\sin(2t)+R\\sin\\alpha\\,\\cos(2t)",
          "explanation": "The addition formula applied to the angle $2t$ gives a multiple of $\\sin(2t)$ plus a multiple of $\\cos(2t)$, the same shape as the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=3,\\qquad R\\sin\\alpha=4",
          "explanation": "Matching the amount of $\\sin(2t)$ and the amount of $\\cos(2t)$ on each side gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "Squaring and adding removes $\\alpha$ through $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=3^2+4^2=25$ and the positive amplitude is $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α in radians",
          "workingLatex": "\\tan\\alpha=\\dfrac{4}{3}\\Rightarrow \\alpha=0.9273\\ \\text{rad}",
          "explanation": "Dividing the equations cancels $R$ to give $\\tan\\alpha=\\tfrac{4}{3}$. Both coefficients are positive, so $\\alpha$ is acute; in radians $\\alpha=\\arctan\\tfrac{4}{3}=0.9273$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the model in R-form",
          "workingLatex": "x(t)=5\\sin(2t+0.9273)",
          "explanation": "Putting the amplitude and phase together writes the displacement as a single sine wave, which makes the largest and smallest displacements easy to identify.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=R=5\\ \\text{cm}",
          "explanation": "A single sine wave of the form $R\\sin(\\cdots)$ reaches at most $R$ from the centre, so the amplitude of the motion is $5$ centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Condition for greatest displacement",
          "workingLatex": "x\\text{ greatest when }\\sin(2t+0.9273)=1",
          "explanation": "The displacement is largest exactly when the sine reaches its top value of $1$, giving $x=5$. We now find the first time this happens.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the bracket",
          "workingLatex": "2t+0.9273=\\dfrac{\\pi}{2}\\Rightarrow 2t=1.5708-0.9273=0.6435",
          "explanation": "The sine first equals $1$ when its input is $\\tfrac{\\pi}{2}$. Subtracting the phase $0.9273$ isolates $2t$, and this is the earliest such input for $t>0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the first time t",
          "workingLatex": "t=\\dfrac{0.6435}{2}=0.3217\\ \\text{s}",
          "explanation": "Halving gives the time. So the displacement first reaches its greatest value of $5$ cm at about $t=0.32$ seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(t)=5\\sin(2t+0.9273)$. The amplitude is $5$ cm, and the displacement is first greatest (equal to $5$ cm) at $t\\approx 0.32$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "proof",
      "solving equations"
    ],
    "questionText": "(a) Prove that $\\sqrt{3}\\,\\sin\\theta+\\cos\\theta \\equiv 2\\sin(\\theta+30^\\circ)$. (b) Hence solve the equation $\\sqrt{3}\\,\\sin\\theta+\\cos\\theta=1$ for $0^\\circ \\le \\theta \\le 360^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to prove",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta+\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The expression is a sine plus a cosine of the same angle, so it fits the target $R\\sin(\\theta+\\alpha)$. We set them identically equal and determine $R$ and $\\alpha$ to establish the identity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with $\\sin(\\theta+\\alpha)=\\sin\\theta\\cos\\alpha+\\cos\\theta\\sin\\alpha$ and multiplying by $R$ gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=\\sqrt{3},\\qquad R\\sin\\alpha=1",
          "explanation": "Matching the coefficient of $\\sin\\theta$ gives $R\\cos\\alpha=\\sqrt{3}$ and matching the coefficient of $\\cos\\theta$ gives $R\\sin\\alpha=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{(\\sqrt{3})^2+1^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$ using $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=3+1=4$ and the positive root is $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{1}{\\sqrt{3}}\\Rightarrow \\alpha=30^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{1}{\\sqrt{3}}$, whose acute solution is exactly $30^\\circ$. This confirms the stated identity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the proven identity",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta+\\cos\\theta \\equiv 2\\sin(\\theta+30^\\circ)",
          "explanation": "With $R=2$ and $\\alpha=30^\\circ$ the two forms are identical for all $\\theta$, which proves part (a) and gives us a simpler expression to solve with.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "2\\sin(\\theta+30^\\circ)=1\\Rightarrow \\sin(\\theta+30^\\circ)=\\dfrac{1}{2}",
          "explanation": "Replacing the two-term expression by the single wave turns the equation into a basic sine equation; dividing by $2$ isolates the sine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ\\le\\theta\\le360^\\circ\\Rightarrow 30^\\circ\\le\\theta+30^\\circ\\le390^\\circ",
          "explanation": "Because we now solve for $\\theta+30^\\circ$, we shift the whole search interval up by $30^\\circ$ so that no solutions are lost at either end.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the shifted angle",
          "workingLatex": "\\theta+30^\\circ=30^\\circ,\\;150^\\circ,\\;390^\\circ",
          "explanation": "The principal value is $\\arcsin\\tfrac{1}{2}=30^\\circ$; sine is also positive in the second quadrant giving $180^\\circ-30^\\circ=150^\\circ$; and adding $360^\\circ$ to $30^\\circ$ gives $390^\\circ$. All three lie in $[30^\\circ,390^\\circ]$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract 30° to find θ",
          "workingLatex": "\\theta=0^\\circ,\\;120^\\circ,\\;360^\\circ",
          "explanation": "Subtracting $30^\\circ$ from each value undoes the shift. All three results lie in $0^\\circ$ to $360^\\circ$, so they are all valid solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "Part (a): $\\sqrt{3}\\,\\sin\\theta+\\cos\\theta \\equiv 2\\sin(\\theta+30^\\circ)$. Part (b): $\\theta=0^\\circ,\\ 120^\\circ,\\ 360^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "maximum and minimum"
    ],
    "questionText": "The temperature $T$, in $^\\circ\\text{C}$, in a greenhouse $t$ hours after midnight is modelled by $T(t)=15+8\\sin(30t^\\circ)+6\\cos(30t^\\circ)$ for $0\\le t\\le 24$. Express $8\\sin(30t^\\circ)+6\\cos(30t^\\circ)$ in the form $R\\sin(30t^\\circ+\\alpha)$ with $R>0$ and $0^\\circ<\\alpha<90^\\circ$, and hence find the amplitude of the temperature variation, the maximum temperature, and the first time after midnight at which the maximum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "8\\sin(30t^\\circ)+6\\cos(30t^\\circ)\\equiv R\\sin(30t^\\circ+\\alpha)",
          "explanation": "Combining the varying sine and cosine terms into one sine wave lets us read off how far the temperature swings about its average of $15^\\circ\\text{C}$. We set the two forms identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(30t^\\circ+\\alpha)=R\\cos\\alpha\\,\\sin(30t^\\circ)+R\\sin\\alpha\\,\\cos(30t^\\circ)",
          "explanation": "The addition formula applied to the angle $30t^\\circ$ produces a multiple of $\\sin(30t^\\circ)$ plus a multiple of $\\cos(30t^\\circ)$, matching the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=8,\\qquad R\\sin\\alpha=6",
          "explanation": "Equating the amount of $\\sin(30t^\\circ)$ and of $\\cos(30t^\\circ)$ on each side gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{8^2+6^2}=\\sqrt{100}=10",
          "explanation": "Squaring and adding eliminates $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=64+36=100$ and the positive amplitude is $R=10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{6}{8}=0.75\\Rightarrow \\alpha=36.87^\\circ",
          "explanation": "Dividing the equations cancels $R$ to give $\\tan\\alpha=0.75$. Both coefficients are positive, so $\\alpha$ is acute and equals $\\arctan 0.75=36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the model in R-form",
          "workingLatex": "T(t)=15+10\\sin(30t^\\circ+36.87^\\circ)",
          "explanation": "Writing the wave part as a single sine shows the temperature as a steady $15^\\circ\\text{C}$ plus a sine that adds or subtracts up to $10^\\circ\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=R=10\\ ^\\circ\\text{C}",
          "explanation": "The sine part reaches at most $10$ above and below the mean, so the temperature varies with an amplitude of $10^\\circ\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the maximum temperature",
          "workingLatex": "T_{\\max}=15+10=25\\ ^\\circ\\text{C}",
          "explanation": "The greatest temperature occurs when the sine equals its top value of $1$, adding the full $10^\\circ\\text{C}$ to the mean of $15^\\circ\\text{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Condition for the maximum",
          "workingLatex": "\\sin(30t^\\circ+36.87^\\circ)=1\\Rightarrow 30t^\\circ+36.87^\\circ=90^\\circ",
          "explanation": "The sine first reaches $1$ when its input equals $90^\\circ$, so we set the bracket equal to $90^\\circ$ to find the earliest time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for t",
          "workingLatex": "30t=90-36.87=53.13\\Rightarrow t=\\dfrac{53.13}{30}=1.771",
          "explanation": "Subtracting the phase and dividing by $30$ gives the time in hours at which the bracket first reaches $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the time",
          "workingLatex": "t\\approx 1.77\\ \\text{hours after midnight}",
          "explanation": "So the greenhouse first reaches its maximum temperature of $25^\\circ\\text{C}$ about $1.77$ hours after midnight (roughly $01{:}46$).",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\sin(30t^\\circ)+6\\cos(30t^\\circ)=10\\sin(30t^\\circ+36.87^\\circ)$. The amplitude is $10^\\circ\\text{C}$, the maximum temperature is $25^\\circ\\text{C}$, and it first occurs at $t\\approx 1.77$ hours after midnight."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum and minimum"
    ],
    "questionText": "The function $h$ is given by $h(\\theta)=\\dfrac{27}{14+12\\sin\\theta+5\\cos\\theta}$ for $0^\\circ \\le \\theta \\le 360^\\circ$. Express $12\\sin\\theta+5\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ<\\alpha<90^\\circ$, and hence determine the maximum and minimum values of $h(\\theta)$, stating the value of $\\theta$ in each case.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity for the denominator",
          "workingLatex": "12\\sin\\theta+5\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Rewriting the varying part $12\\sin\\theta+5\\cos\\theta$ as a single sine wave will let us bound the denominator, since a single sine only ranges from $-R$ to $R$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding with the addition formula and multiplying by $R$ gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, the same shape as the expression to convert.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=12,\\qquad R\\sin\\alpha=5",
          "explanation": "Matching the coefficient of $\\sin\\theta$ gives $R\\cos\\alpha=12$ and matching the coefficient of $\\cos\\theta$ gives $R\\sin\\alpha=5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{12^2+5^2}=\\sqrt{169}=13",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=144+25=169$ and the positive root is $R=13$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{5}{12}\\Rightarrow \\alpha=22.62^\\circ",
          "explanation": "Dividing the equations cancels $R$ to give $\\tan\\alpha=\\tfrac{5}{12}$. Both coefficients are positive, so $\\alpha$ is acute and equals $\\arctan\\tfrac{5}{12}=22.62^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite h using the R-form",
          "workingLatex": "h(\\theta)=\\dfrac{27}{14+13\\sin(\\theta+22.62^\\circ)}",
          "explanation": "Substituting $13\\sin(\\theta+22.62^\\circ)$ for the two-term part gives a denominator built from a single bounded wave, which is now easy to bound.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le \\sin(\\theta+22.62^\\circ)\\le 1",
          "explanation": "A sine value always lies between $-1$ and $1$, so this is the full range of the wave inside the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Bound the denominator",
          "workingLatex": "1\\le 14+13\\sin(\\theta+22.62^\\circ)\\le 27",
          "explanation": "Scaling the sine bounds by $13$ and adding $14$ gives a denominator between $1$ and $27$. The least value is $1>0$, so the fraction is always positive and defined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Maximum value of h",
          "workingLatex": "h_{\\max}=\\dfrac{27}{1}=27",
          "explanation": "With a fixed positive numerator, the fraction is largest when the denominator is smallest. The least denominator is $1$, giving $h_{\\max}=\\tfrac{27}{1}=27$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Value of θ for the maximum",
          "workingLatex": "\\sin(\\theta+22.62^\\circ)=-1\\Rightarrow \\theta+22.62^\\circ=270^\\circ\\Rightarrow \\theta=247.38^\\circ",
          "explanation": "The denominator is least when the sine equals $-1$, at $\\theta+22.62^\\circ=270^\\circ$. Subtracting $22.62^\\circ$ gives the angle where $h$ is greatest.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Minimum value of h",
          "workingLatex": "h_{\\min}=\\dfrac{27}{27}=1",
          "explanation": "The fraction is smallest when the denominator is largest. The greatest denominator is $27$, giving $h_{\\min}=\\tfrac{27}{27}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Value of θ for the minimum",
          "workingLatex": "\\sin(\\theta+22.62^\\circ)=1\\Rightarrow \\theta+22.62^\\circ=90^\\circ\\Rightarrow \\theta=67.38^\\circ",
          "explanation": "The denominator is largest when the sine equals $1$, at $\\theta+22.62^\\circ=90^\\circ$. Subtracting $22.62^\\circ$ gives the angle where $h$ is least.",
          "diagram": null
        }
      ],
      "finalAnswer": "$12\\sin\\theta+5\\cos\\theta=13\\sin(\\theta+22.62^\\circ)$, so $h(\\theta)=\\dfrac{27}{14+13\\sin(\\theta+22.62^\\circ)}$. The maximum value is $h=27$ at $\\theta=247.4^\\circ$, and the minimum value is $h=1$ at $\\theta=67.4^\\circ$ (angles to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "proof",
      "maximum and minimum"
    ],
    "questionText": "(a) Show that $7\\cos\\theta-24\\sin\\theta$ can be written as $R\\cos(\\theta+\\alpha)$, where $R>0$ and $0^\\circ<\\alpha<90^\\circ$, giving $\\alpha$ to $2$ decimal places. (b) Hence state the minimum value of $7\\cos\\theta-24\\sin\\theta$ and find the value of $\\theta$ in $0^\\circ \\le \\theta \\le 360^\\circ$ at which this minimum occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the correct target form",
          "workingLatex": "7\\cos\\theta-24\\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "Because the expression leads with a cosine and subtracts a sine, the matching target is $R\\cos(\\theta+\\alpha)$, whose expansion naturally gives a cosine minus a sine. We set the two identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\cos(\\theta+\\alpha)=R\\cos\\alpha\\,\\cos\\theta-R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ and multiplying by $R$ produces a positive multiple of $\\cos\\theta$ and a negative multiple of $\\sin\\theta$, matching the original signs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=7,\\qquad R\\sin\\alpha=24",
          "explanation": "Matching the coefficient of $\\cos\\theta$ gives $R\\cos\\alpha=7$, and matching the coefficient of $\\sin\\theta$ (both carry a minus sign) gives $R\\sin\\alpha=24$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{7^2+24^2}=\\sqrt{625}=25",
          "explanation": "Squaring and adding eliminates $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=49+576=625$ and the positive root is $R=25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{24}{7}\\Rightarrow \\alpha=73.74^\\circ",
          "explanation": "Dividing the equations cancels $R$ to give $\\tan\\alpha=\\tfrac{24}{7}$. Both values are positive, so $\\alpha$ is acute and equals $\\arctan\\tfrac{24}{7}=73.74^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the identity",
          "workingLatex": "7\\cos\\theta-24\\sin\\theta \\equiv 25\\cos(\\theta+73.74^\\circ)",
          "explanation": "Combining the amplitude and phase gives the single-wave form, which shows the expression is $25$ times a cosine and so oscillates between $-25$ and $25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the range",
          "workingLatex": "-25\\le 25\\cos(\\theta+73.74^\\circ)\\le 25",
          "explanation": "Since $\\cos$ of any angle lies between $-1$ and $1$, multiplying by $25$ shows the expression ranges from $-25$ to $25$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the minimum value",
          "workingLatex": "\\text{minimum}=-25",
          "explanation": "The least value is reached when the cosine equals $-1$, giving a minimum of $-25$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find θ where the minimum occurs",
          "workingLatex": "\\cos(\\theta+73.74^\\circ)=-1\\Rightarrow \\theta+73.74^\\circ=180^\\circ\\Rightarrow \\theta=106.26^\\circ",
          "explanation": "The cosine equals $-1$ when its input is $180^\\circ$. Subtracting $73.74^\\circ$ gives $\\theta=106.26^\\circ$, which lies within $0^\\circ$ to $360^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the maximum for completeness",
          "workingLatex": "\\text{maximum}=25\\ \\text{at}\\ \\theta+73.74^\\circ=360^\\circ\\Rightarrow \\theta=286.26^\\circ",
          "explanation": "By the same idea the greatest value $25$ occurs when the cosine is $1$; in range this is at $\\theta+73.74^\\circ=360^\\circ$, giving $\\theta=286.26^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$7\\cos\\theta-24\\sin\\theta \\equiv 25\\cos(\\theta+73.74^\\circ)$ with $\\alpha=73.74^\\circ$. The minimum value is $-25$, occurring at $\\theta=106.26^\\circ$ (to $2$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "radians"
    ],
    "questionText": "A particle moves so that its displacement $x$ metres from a fixed point at time $t$ seconds ($t\\ge 0$) is $x(t)=\\sin t-\\sqrt{3}\\,\\cos t$. Express $x(t)$ in the form $R\\sin(t-\\alpha)$, where $R>0$ and $0<\\alpha<\\tfrac{\\pi}{2}$, and hence state the amplitude and find, in exact form, the first time $t>0$ at which $x=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "\\sin t-\\sqrt{3}\\,\\cos t\\equiv R\\sin(t-\\alpha)",
          "explanation": "Since the model is a sine minus a cosine of the same angle $t$, the natural single-wave target is $R\\sin(t-\\alpha)$, whose expansion produces a subtraction. We set them identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(t-\\alpha)=R\\cos\\alpha\\,\\sin t-R\\sin\\alpha\\,\\cos t",
          "explanation": "Applying $\\sin(t-\\alpha)=\\sin t\\cos\\alpha-\\cos t\\sin\\alpha$ and multiplying by $R$ gives a positive multiple of $\\sin t$ and a negative multiple of $\\cos t$, matching the signs of the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=\\sqrt{3}",
          "explanation": "Matching the coefficient of $\\sin t$ gives $R\\cos\\alpha=1$ and matching the coefficient of $\\cos t$ gives $R\\sin\\alpha=\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+(\\sqrt{3})^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha+\\sin^2\\alpha=1$, so $R^2=1+3=4$ and the positive amplitude is $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}=\\sqrt{3}\\Rightarrow \\alpha=\\dfrac{\\pi}{3}",
          "explanation": "Dividing the equations cancels $R$ to give $\\tan\\alpha=\\sqrt{3}$, whose acute value is exactly $\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the model in R-form",
          "workingLatex": "x(t)=2\\sin\\left(t-\\dfrac{\\pi}{3}\\right)",
          "explanation": "Putting the amplitude and phase together writes the displacement as a single sine wave, which reveals the amplitude and makes the equation $x=1$ simple to solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude}=R=2\\ \\text{m}",
          "explanation": "A single sine wave $R\\sin(\\cdots)$ moves at most $R$ from the centre, so the amplitude of the motion is $2$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the equation x = 1",
          "workingLatex": "2\\sin\\left(t-\\dfrac{\\pi}{3}\\right)=1\\Rightarrow \\sin\\left(t-\\dfrac{\\pi}{3}\\right)=\\dfrac{1}{2}",
          "explanation": "Using the R-form turns $x=1$ into a basic sine equation; dividing by $2$ isolates the sine of the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the first shifted angle",
          "workingLatex": "t-\\dfrac{\\pi}{3}=\\dfrac{\\pi}{6}",
          "explanation": "For $t>0$ the shifted angle $t-\\tfrac{\\pi}{3}$ exceeds $-\\tfrac{\\pi}{3}$, and the smallest such angle with sine $\\tfrac{1}{2}$ is the principal value $\\tfrac{\\pi}{6}$, giving the earliest time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for t",
          "workingLatex": "t=\\dfrac{\\pi}{6}+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{6}+\\dfrac{2\\pi}{6}=\\dfrac{\\pi}{2}",
          "explanation": "Adding $\\tfrac{\\pi}{3}$ to undo the shift gives the exact first time, $t=\\tfrac{\\pi}{2}$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the solution",
          "workingLatex": "x\\left(\\tfrac{\\pi}{2}\\right)=\\sin\\tfrac{\\pi}{2}-\\sqrt{3}\\cos\\tfrac{\\pi}{2}=1-0=1",
          "explanation": "Substituting $t=\\tfrac{\\pi}{2}$ back into the original expression gives $x=1$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x(t)=2\\sin\\left(t-\\tfrac{\\pi}{3}\\right)$. The amplitude is $2$ m, and the displacement first equals $1$ m at $t=\\tfrac{\\pi}{2}$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "tides"
    ],
    "questionText": "The depth of water in a harbour is modelled by $D(t) = 15 + 5\\sin(30t)^\\circ + 12\\cos(30t)^\\circ$ metres, where $t$ is the time in hours after midnight and $0 \\le t \\le 24$. (a) Express $5\\sin(30t)^\\circ + 12\\cos(30t)^\\circ$ in the form $R\\sin(30t + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) Hence find the maximum depth of water and the time after midnight at which it first occurs. (c) Find the times during the first $12$ hours at which the depth is exactly $20$ m, giving your answers in hours to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the constant from the waves",
          "workingLatex": "D(t) = 15 + \\big(5\\sin(30t)^\\circ + 12\\cos(30t)^\\circ\\big)",
          "explanation": "The constant $15$ simply lifts the whole model up; it does not change the shape of the oscillation. So the sensible first move is to combine the two wave terms into a single sine wave and add the $15$ back at the end.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity to match",
          "workingLatex": "5\\sin(30t)^\\circ + 12\\cos(30t)^\\circ \\equiv R\\sin(30t + \\alpha)",
          "explanation": "We want the two terms written as one wave. Setting them identically equal to $R\\sin(30t+\\alpha)$ lets us expand the right-hand side and compare it term by term. Here $30t$ plays the role of the angle throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(30t + \\alpha) = R\\cos\\alpha\\,\\sin(30t)^\\circ + R\\sin\\alpha\\,\\cos(30t)^\\circ",
          "explanation": "Using $\\sin(A+B)=\\sin A\\cos B + \\cos A\\sin B$ and pulling the constant $R$ through puts the right-hand side into the same shape as the left: a multiple of $\\sin(30t)$ plus a multiple of $\\cos(30t)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 5, \\qquad R\\sin\\alpha = 12",
          "explanation": "For the two expressions to be equal for every value of $t$, the amount of $\\sin(30t)$ must match on both sides, and so must the amount of $\\cos(30t)$. That gives these two simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13",
          "explanation": "Squaring and adding the two equations removes $\\alpha$ because $\\cos^2\\alpha + \\sin^2\\alpha = 1$, leaving $R^2 = 5^2 + 12^2$. We take the positive root since $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{12}{5} \\Rightarrow \\alpha = 67.38^\\circ",
          "explanation": "Dividing the second equation by the first cancels $R$ and leaves $\\tan\\alpha = \\tfrac{12}{5}$. Both coefficients are positive, so $\\alpha$ is acute, giving $\\alpha = \\arctan\\tfrac{12}{5} = 67.38^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full model",
          "workingLatex": "D(t) = 15 + 13\\sin(30t + 67.38^\\circ)",
          "explanation": "Putting the amplitude and phase together, then restoring the $+15$, gives the model as a single shifted wave sitting on a mean level of $15$ m. It immediately shows the depth swings $13$ m either side of $15$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the period for context",
          "workingLatex": "\\text{period} = \\dfrac{360^\\circ}{30} = 12\\text{ hours}",
          "explanation": "The angle increases by $30^\\circ$ for every hour, so a full $360^\\circ$ cycle takes $12$ hours. This tells us the tide repeats twice a day, which is why we only need to search the first $12$ hours in part (c).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the maximum depth",
          "workingLatex": "\\sin(\\ldots)_{\\max} = 1 \\Rightarrow D_{\\max} = 15 + 13 = 28\\text{ m}",
          "explanation": "A sine function can never exceed $1$, so the largest the wave can be is $+13$. No calculus is needed: the maximum of the model is simply the mean plus the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the time of maximum depth",
          "workingLatex": "30t + 67.38^\\circ = 90^\\circ \\Rightarrow 30t = 22.62^\\circ \\Rightarrow t = 0.75\\text{ h}",
          "explanation": "The sine reaches its peak of $1$ when its angle is $90^\\circ$. Solving for $t$ gives the first moment of high tide, about $0.75$ h after midnight (roughly $00\\!:\\!45$).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the level equation",
          "workingLatex": "15 + 13\\sin(30t + 67.38^\\circ) = 20 \\Rightarrow \\sin(30t + 67.38^\\circ) = \\dfrac{5}{13}",
          "explanation": "To find when the depth is $20$ m we set the model equal to $20$ and rearrange. Subtracting $15$ and dividing by $13$ turns it into a basic sine equation for the shifted angle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin\\dfrac{5}{13} = 22.62^\\circ",
          "explanation": "The calculator gives the principal value $22.62^\\circ$. Because sine is positive in both the first and second quadrants, we will need more than just this one value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Shift the search interval",
          "workingLatex": "0 \\le t \\le 12 \\Rightarrow 67.38^\\circ \\le 30t + 67.38^\\circ \\le 427.38^\\circ",
          "explanation": "We are now solving for the shifted angle $30t+67.38^\\circ$, so we must shift the whole interval to match. This guarantees we do not miss any solutions or accidentally include ones outside the first $12$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "List all shifted-angle solutions",
          "workingLatex": "30t + 67.38^\\circ = 157.38^\\circ,\\; 382.62^\\circ",
          "explanation": "In the interval $[67.38^\\circ, 427.38^\\circ]$ the solutions of $\\sin = \\tfrac{5}{13}$ are $180^\\circ - 22.62^\\circ = 157.38^\\circ$ and $360^\\circ + 22.62^\\circ = 382.62^\\circ$. The base value $22.62^\\circ$ itself is below $67.38^\\circ$, so it is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Solve for t and conclude",
          "workingLatex": "t = \\dfrac{157.38 - 67.38}{30} = 3\\text{ h}, \\qquad t = \\dfrac{382.62 - 67.38}{30} = 10.51\\text{ h}",
          "explanation": "Subtracting $67.38^\\circ$ and dividing by $30$ undoes the shift and returns the times. Both lie in the first $12$ hours, so the depth is $20$ m at $t = 3.00$ h and $t = 10.51$ h.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $5\\sin(30t)^\\circ + 12\\cos(30t)^\\circ = 13\\sin(30t + 67.38^\\circ)$. (b) The maximum depth is $28$ m, first reached at $t = 0.75$ h after midnight. (c) The depth is $20$ m at $t = 3.00$ h and $t = 10.51$ h."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "radians"
    ],
    "questionText": "The voltage in an alternating-current circuit is $V(t) = 8\\sin(50t) + 15\\cos(50t)$ volts, where $t$ is the time in seconds and all angles are in radians. (a) Express $V(t)$ in the form $R\\sin(50t + \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. (b) Write down the peak voltage and find the first time $t > 0$ at which it is reached. (c) Find the first time $t > 0$ at which the voltage is $8.5$ V. Give your times in seconds to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "8\\sin(50t) + 15\\cos(50t) \\equiv R\\sin(50t + \\alpha)",
          "explanation": "We want the two terms combined into a single sine wave so the amplitude and timing are easy to read. Setting them identically equal to $R\\sin(50t+\\alpha)$ lets us expand and compare, with $50t$ acting as the angle throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(50t + \\alpha) = R\\cos\\alpha\\,\\sin(50t) + R\\sin\\alpha\\,\\cos(50t)",
          "explanation": "Applying $\\sin(A+B)=\\sin A\\cos B + \\cos A\\sin B$ and pulling $R$ through gives the right-hand side the same structure as the left: a multiple of $\\sin(50t)$ plus a multiple of $\\cos(50t)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 15",
          "explanation": "For the identity to hold for all $t$, the coefficient of $\\sin(50t)$ must match and the coefficient of $\\cos(50t)$ must match. This produces two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17",
          "explanation": "Squaring and adding eliminates $\\alpha$ through $\\cos^2\\alpha + \\sin^2\\alpha = 1$, leaving $R^2 = 8^2 + 15^2$. The positive root gives the amplitude $R = 17$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α in radians",
          "workingLatex": "\\tan\\alpha = \\dfrac{15}{8} \\Rightarrow \\alpha = 1.0808^{c}",
          "explanation": "Dividing the two equations gives $\\tan\\alpha = \\tfrac{15}{8}$. Both coefficients are positive so $\\alpha$ is acute; working in radians (to match the model) gives $\\alpha = 1.0808$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "V(t) = 17\\sin(50t + 1.0808)",
          "explanation": "Combining the amplitude and phase writes the voltage as a single sine wave. This makes the peak value and its timing straightforward to extract.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the period",
          "workingLatex": "\\text{period} = \\dfrac{2\\pi}{50} = \\dfrac{\\pi}{25} \\approx 0.1257\\text{ s}",
          "explanation": "For a wave in the form $\\sin(kt+\\ldots)$ the period is $\\tfrac{2\\pi}{k}$. With $k = 50$ the voltage completes a full cycle every $\\tfrac{\\pi}{25}\\approx 0.1257$ seconds, which is why the peak in part (b) occurs so soon after $t=0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write down the peak voltage",
          "workingLatex": "V_{\\max} = R = 17\\text{ V}",
          "explanation": "Since $\\sin$ never exceeds $1$, the largest value of the model is simply the amplitude $R = 17$. This is read directly off the R-form with no calculus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the time of the peak",
          "workingLatex": "50t + 1.0808 = \\dfrac{\\pi}{2} \\Rightarrow 50t = 0.4900 \\Rightarrow t = 0.0098\\text{ s}",
          "explanation": "A sine reaches its maximum of $1$ when its angle equals $\\tfrac{\\pi}{2}$. Solving for $t$ gives the first instant, after $t=0$, at which the voltage peaks.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the level equation",
          "workingLatex": "17\\sin(50t + 1.0808) = 8.5 \\Rightarrow \\sin(50t + 1.0808) = 0.5",
          "explanation": "For the voltage to be $8.5$ V we set the model equal to $8.5$ and divide by the amplitude $17$, reducing it to the simple equation $\\sin(50t+1.0808)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin(0.5) = \\dfrac{\\pi}{6} = 0.5236",
          "explanation": "The principal solution of $\\sin = 0.5$ is $\\tfrac{\\pi}{6}$. Sine is also positive in the second quadrant, so the other relevant value is $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Choose the first valid shifted angle",
          "workingLatex": "50t + 1.0808 = 0.5236 \\;(\\text{rejected}), \\quad 50t + 1.0808 = \\dfrac{5\\pi}{6} = 2.6180",
          "explanation": "The angle starts at $1.0808$ when $t=0$, so it can never equal $0.5236$ for $t>0$; that root gives a negative time and is rejected. The next solution, $\\tfrac{5\\pi}{6} = 2.6180$, is the first that the increasing angle actually reaches.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "50t = 2.6180 - 1.0808 = 1.5372 \\Rightarrow t = 0.0307\\text{ s}",
          "explanation": "Subtracting the phase and dividing by $50$ gives the first time after $t=0$ at which the voltage falls to $8.5$ V, which happens just after the peak on the way down.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $V(t) = 17\\sin(50t + 1.0808)$ (radians). (b) The peak voltage is $17$ V, first reached at $t = 0.0098$ s. (c) The voltage is first $8.5$ V at $t = 0.0307$ s."
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
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "radians"
    ],
    "questionText": "A mass on a spring has displacement $x(t) = 7\\sin(2t) - 24\\cos(2t)$ cm from its rest position, where $t$ is the time in seconds and all angles are in radians. (a) Express $x(t)$ in the form $R\\sin(2t - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. (b) State the amplitude and the period of the motion. (c) Find the maximum displacement and the first time $t > 0$ at which it occurs. (d) Find the first time $t > 0$ at which the displacement is $12.5$ cm. Give your times in seconds to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "7\\sin(2t) - 24\\cos(2t) \\equiv R\\sin(2t - \\alpha)",
          "explanation": "Because the cosine term is being subtracted, the natural single-wave form is $R\\sin(2t-\\alpha)$, whose expansion also has a subtracted cosine term. Matching like to like keeps $\\alpha$ acute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the subtraction formula",
          "workingLatex": "R\\sin(2t - \\alpha) = R\\cos\\alpha\\,\\sin(2t) - R\\sin\\alpha\\,\\cos(2t)",
          "explanation": "Using $\\sin(A-B)=\\sin A\\cos B - \\cos A\\sin B$ and pulling $R$ through gives a multiple of $\\sin(2t)$ minus a multiple of $\\cos(2t)$, matching the structure of the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 7, \\qquad R\\sin\\alpha = 24",
          "explanation": "Matching the $\\sin(2t)$ terms gives $R\\cos\\alpha = 7$; matching the $\\cos(2t)$ terms, the two minus signs cancel to give $R\\sin\\alpha = 24$. Both right-hand sides are positive, keeping $\\alpha$ acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25",
          "explanation": "Squaring and adding eliminates $\\alpha$ using $\\cos^2\\alpha + \\sin^2\\alpha = 1$, so $R^2 = 7^2 + 24^2 = 625$ and the positive root is $R = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α in radians",
          "workingLatex": "\\tan\\alpha = \\dfrac{24}{7} \\Rightarrow \\alpha = 1.2870^{c}",
          "explanation": "Dividing the equations gives $\\tan\\alpha = \\tfrac{24}{7}$. As both parts are positive, $\\alpha$ is acute, and in radians $\\alpha = \\arctan\\tfrac{24}{7} = 1.2870$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "x(t) = 25\\sin(2t - 1.2870)",
          "explanation": "The displacement is now a single sine wave of amplitude $25$. This makes the size and timing of the motion easy to read off directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = R = 25\\text{ cm}",
          "explanation": "The amplitude is the greatest distance from rest, which is exactly $R$. The mass therefore moves between $+25$ cm and $-25$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the period",
          "workingLatex": "\\text{period} = \\dfrac{2\\pi}{2} = \\pi \\approx 3.1416\\text{ s}",
          "explanation": "For a wave in the form $\\sin(kt+\\ldots)$ the period is $\\tfrac{2\\pi}{k}$. Here $k = 2$, so one complete oscillation takes $\\pi$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the maximum displacement",
          "workingLatex": "x_{\\max} = R = 25\\text{ cm}",
          "explanation": "Since $\\sin$ cannot exceed $1$, the greatest displacement is the amplitude $25$ cm. The maximum is read straight from the R-form with no calculus needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the time of maximum displacement",
          "workingLatex": "2t - 1.2870 = \\dfrac{\\pi}{2} \\Rightarrow 2t = 2.8578 \\Rightarrow t = 1.4289\\text{ s}",
          "explanation": "The sine peaks when its angle is $\\tfrac{\\pi}{2}$. Solving gives the first time after $t=0$ that the mass is fully extended to $+25$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the level equation",
          "workingLatex": "25\\sin(2t - 1.2870) = 12.5 \\Rightarrow \\sin(2t - 1.2870) = 0.5",
          "explanation": "For a displacement of $12.5$ cm we set the model equal to $12.5$ and divide by $25$, giving the simple equation $\\sin(2t-1.2870)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the first solution",
          "workingLatex": "2t - 1.2870 = \\dfrac{\\pi}{6} = 0.5236",
          "explanation": "At $t=0$ the angle is $-1.2870$, so as $t$ increases the angle rises through zero. The first time $\\sin$ equals $0.5$ is at the principal value $\\tfrac{\\pi}{6}=0.5236$, reached on the way up.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "2t = 0.5236 + 1.2870 = 1.8106 \\Rightarrow t = 0.9053\\text{ s}",
          "explanation": "Adding the phase back and dividing by $2$ gives the first moment the mass passes through $12.5$ cm. This lies between leaving rest and reaching full extension, exactly as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $x(t) = 25\\sin(2t - 1.2870)$ (radians). (b) Amplitude $25$ cm and period $\\pi \\approx 3.1416$ s. (c) The maximum displacement is $25$ cm, first reached at $t = 1.4289$ s. (d) The displacement is first $12.5$ cm at $t = 0.9053$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "temperature"
    ],
    "questionText": "The temperature in a greenhouse is modelled by $T(t) = 16 + 3\\sin(15t)^\\circ + 4\\cos(15t)^\\circ$ degrees Celsius, where $t$ is the time in hours after midnight and $0 \\le t \\le 24$. (a) Express $3\\sin(15t)^\\circ + 4\\cos(15t)^\\circ$ in the form $R\\sin(15t + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) Find the maximum and minimum temperatures and the times at which they first occur. (c) Find the times at which the temperature is $18^\\circ$C, giving your answers in hours to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the constant from the waves",
          "workingLatex": "T(t) = 16 + \\big(3\\sin(15t)^\\circ + 4\\cos(15t)^\\circ\\big)",
          "explanation": "The $16$ is just the mean temperature about which the greenhouse warms and cools. We combine the two wave terms into one sine wave first, then add the $16$ back.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity to match",
          "workingLatex": "3\\sin(15t)^\\circ + 4\\cos(15t)^\\circ \\equiv R\\sin(15t + \\alpha)",
          "explanation": "Writing the two terms as a single wave $R\\sin(15t+\\alpha)$ lets us expand and compare coefficients, with $15t$ acting as the angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(15t + \\alpha) = R\\cos\\alpha\\,\\sin(15t)^\\circ + R\\sin\\alpha\\,\\cos(15t)^\\circ",
          "explanation": "Applying $\\sin(A+B)=\\sin A\\cos B + \\cos A\\sin B$ gives a multiple of $\\sin(15t)$ plus a multiple of $\\cos(15t)$, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 3, \\qquad R\\sin\\alpha = 4",
          "explanation": "Matching the amount of $\\sin(15t)$ and the amount of $\\cos(15t)$ on each side gives these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5",
          "explanation": "Squaring and adding removes $\\alpha$ via $\\cos^2\\alpha + \\sin^2\\alpha = 1$, so $R^2 = 3^2 + 4^2 = 25$ and $R = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{4}{3} \\Rightarrow \\alpha = 53.13^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha = \\tfrac{4}{3}$, and since both parts are positive $\\alpha$ is acute, so $\\alpha = 53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full model",
          "workingLatex": "T(t) = 16 + 5\\sin(15t + 53.13^\\circ)",
          "explanation": "The temperature is now a single wave of amplitude $5$ sitting on a mean of $16^\\circ$C, so it swings between $11^\\circ$C and $21^\\circ$C.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the maximum temperature and its time",
          "workingLatex": "T_{\\max} = 16 + 5 = 21^\\circ\\text{C at } 15t + 53.13^\\circ = 90^\\circ \\Rightarrow t = 2.46\\text{ h}",
          "explanation": "The greatest value of $\\sin$ is $1$, giving $T_{\\max} = 21^\\circ$C. It first occurs when the angle is $90^\\circ$, which solves to $t \\approx 2.46$ h. No calculus is required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the minimum temperature and its time",
          "workingLatex": "T_{\\min} = 16 - 5 = 11^\\circ\\text{C at } 15t + 53.13^\\circ = 270^\\circ \\Rightarrow t = 14.46\\text{ h}",
          "explanation": "The least value of $\\sin$ is $-1$, giving $T_{\\min} = 11^\\circ$C when the angle is $270^\\circ$, which occurs at $t \\approx 14.46$ h in the afternoon.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the level equation",
          "workingLatex": "16 + 5\\sin(15t + 53.13^\\circ) = 18 \\Rightarrow \\sin(15t + 53.13^\\circ) = 0.4",
          "explanation": "For a temperature of $18^\\circ$C we set the model equal to $18$, subtract the mean and divide by the amplitude, reducing it to $\\sin(15t+53.13^\\circ)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin(0.4) = 23.58^\\circ",
          "explanation": "The principal value is $23.58^\\circ$. Sine is positive in the first and second quadrants, so we will also need $180^\\circ - 23.58^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Shift the search interval",
          "workingLatex": "0 \\le t \\le 24 \\Rightarrow 53.13^\\circ \\le 15t + 53.13^\\circ \\le 413.13^\\circ",
          "explanation": "Because we are solving for the shifted angle, we shift the endpoints too. This keeps every solution tied to a time inside the $24$-hour window.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "List all shifted-angle solutions",
          "workingLatex": "15t + 53.13^\\circ = 156.42^\\circ,\\; 383.58^\\circ",
          "explanation": "Within $[53.13^\\circ, 413.13^\\circ]$ the solutions are $180^\\circ - 23.58^\\circ = 156.42^\\circ$ and $360^\\circ + 23.58^\\circ = 383.58^\\circ$. The base $23.58^\\circ$ is below the interval and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{156.42 - 53.13}{15} = 6.89\\text{ h}, \\qquad t = \\dfrac{383.58 - 53.13}{15} = 22.03\\text{ h}",
          "explanation": "Undoing the shift gives two times: once in the morning as the greenhouse warms past $18^\\circ$C, and once late in the evening as it cools back through $18^\\circ$C.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $3\\sin(15t)^\\circ + 4\\cos(15t)^\\circ = 5\\sin(15t + 53.13^\\circ)$. (b) Maximum $21^\\circ$C at $t = 2.46$ h; minimum $11^\\circ$C at $t = 14.46$ h. (c) The temperature is $18^\\circ$C at $t = 6.89$ h and $t = 22.03$ h."
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
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "ferris wheel"
    ],
    "questionText": "A capsule on a large observation wheel has height $h(t) = 35 + 20\\sin(12t)^\\circ + 21\\cos(12t)^\\circ$ metres above the ground, where $t$ is the time in minutes after the capsule passes a marker and $0 \\le t \\le 30$. (a) Express $20\\sin(12t)^\\circ + 21\\cos(12t)^\\circ$ in the form $R\\sin(12t + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) Find the greatest and least heights of the capsule and the times at which they first occur. (c) Find the times during the ride at which the capsule is $50$ m above the ground, giving your answers in minutes to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the constant from the waves",
          "workingLatex": "h(t) = 35 + \\big(20\\sin(12t)^\\circ + 21\\cos(12t)^\\circ\\big)",
          "explanation": "The $35$ is the height of the centre of the wheel; the two wave terms describe the capsule rising and falling about that centre. We combine the waves first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity to match",
          "workingLatex": "20\\sin(12t)^\\circ + 21\\cos(12t)^\\circ \\equiv R\\sin(12t + \\alpha)",
          "explanation": "Writing the two terms as one wave lets us find the true amplitude of the capsule's motion by expanding and comparing coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(12t + \\alpha) = R\\cos\\alpha\\,\\sin(12t)^\\circ + R\\sin\\alpha\\,\\cos(12t)^\\circ",
          "explanation": "Expanding $\\sin(12t+\\alpha)$ gives a multiple of $\\sin(12t)$ plus a multiple of $\\cos(12t)$, matching the shape of the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 20, \\qquad R\\sin\\alpha = 21",
          "explanation": "Matching the coefficients of $\\sin(12t)$ and $\\cos(12t)$ produces these two equations, which we solve for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{20^2 + 21^2} = \\sqrt{841} = 29",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2 = 400 + 441 = 841$, so the amplitude of the motion is $R = 29$ m.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{21}{20} \\Rightarrow \\alpha = 46.40^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha = \\tfrac{21}{20}$, and both parts being positive makes $\\alpha$ acute, so $\\alpha = 46.40^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full model",
          "workingLatex": "h(t) = 35 + 29\\sin(12t + 46.40^\\circ)",
          "explanation": "The height is a single wave of amplitude $29$ about a centre of $35$ m, so the capsule ranges between $6$ m and $64$ m above the ground.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the greatest height and its time",
          "workingLatex": "h_{\\max} = 35 + 29 = 64\\text{ m at } 12t + 46.40^\\circ = 90^\\circ \\Rightarrow t = 3.63\\text{ min}",
          "explanation": "The top of the ride is the centre height plus the amplitude, $64$ m, reached when the sine equals $1$, i.e. when the angle is $90^\\circ$. This first happens at $t \\approx 3.63$ min.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the least height and its time",
          "workingLatex": "h_{\\min} = 35 - 29 = 6\\text{ m at } 12t + 46.40^\\circ = 270^\\circ \\Rightarrow t = 18.63\\text{ min}",
          "explanation": "The lowest point is the centre minus the amplitude, $6$ m, reached when the sine equals $-1$, i.e. the angle is $270^\\circ$, at $t \\approx 18.63$ min.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the level equation",
          "workingLatex": "35 + 29\\sin(12t + 46.40^\\circ) = 50 \\Rightarrow \\sin(12t + 46.40^\\circ) = \\dfrac{15}{29}",
          "explanation": "For a height of $50$ m we set the model equal to $50$, subtract $35$ and divide by $29$, giving $\\sin(12t+46.40^\\circ)=\\tfrac{15}{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin\\dfrac{15}{29} = 31.15^\\circ",
          "explanation": "The principal value is $31.15^\\circ$. Since sine is positive in the first and second quadrants, we will also use $180^\\circ - 31.15^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Shift the search interval",
          "workingLatex": "0 \\le t \\le 30 \\Rightarrow 46.40^\\circ \\le 12t + 46.40^\\circ \\le 406.40^\\circ",
          "explanation": "The ride lasts $30$ minutes, so the shifted angle runs from $46.40^\\circ$ to $406.40^\\circ$. We look for solutions only in this range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "List all shifted-angle solutions",
          "workingLatex": "12t + 46.40^\\circ = 148.85^\\circ,\\; 391.15^\\circ",
          "explanation": "In $[46.40^\\circ, 406.40^\\circ]$ the solutions are $180^\\circ - 31.15^\\circ = 148.85^\\circ$ and $360^\\circ + 31.15^\\circ = 391.15^\\circ$. The base $31.15^\\circ$ lies below the interval and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{148.85 - 46.40}{12} = 8.54\\text{ min}, \\qquad t = \\dfrac{391.15 - 46.40}{12} = 28.73\\text{ min}",
          "explanation": "Undoing the shift gives the two moments the capsule passes $50$ m: once on the way up early in the ride and once on the way down near the end.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $20\\sin(12t)^\\circ + 21\\cos(12t)^\\circ = 29\\sin(12t + 46.40^\\circ)$. (b) Greatest height $64$ m at $t = 3.63$ min; least height $6$ m at $t = 18.63$ min. (c) The capsule is $50$ m up at $t = 8.54$ min and $t = 28.73$ min."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "solving equations",
      "modelling"
    ],
    "questionText": "The temperature of a chemical reaction over two days is modelled by $T(t) = 20 + 8\\sin(15t)^\\circ + 6\\cos(15t)^\\circ$ degrees Celsius, where $t$ is the time in hours and $0 \\le t \\le 48$. (a) Express $8\\sin(15t)^\\circ + 6\\cos(15t)^\\circ$ in the form $R\\sin(15t + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) Hence find all the times at which the temperature is $25^\\circ$C, giving your answers in hours to $2$ decimal places, and state how many times per day this happens.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the constant from the waves",
          "workingLatex": "T(t) = 20 + \\big(8\\sin(15t)^\\circ + 6\\cos(15t)^\\circ\\big)",
          "explanation": "The $20$ is the mean temperature; the two wave terms carry the oscillation. We combine those two into one wave and keep the $20$ aside.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity to match",
          "workingLatex": "8\\sin(15t)^\\circ + 6\\cos(15t)^\\circ \\equiv R\\sin(15t + \\alpha)",
          "explanation": "Expressing the pair as a single sine $R\\sin(15t+\\alpha)$ lets us solve the level equation with one trig function instead of two.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(15t + \\alpha) = R\\cos\\alpha\\,\\sin(15t)^\\circ + R\\sin\\alpha\\,\\cos(15t)^\\circ",
          "explanation": "The expansion gives a multiple of $\\sin(15t)$ plus a multiple of $\\cos(15t)$, ready to be compared with the original.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 8, \\qquad R\\sin\\alpha = 6",
          "explanation": "Matching the coefficient of $\\sin(15t)$ gives $R\\cos\\alpha=8$ and matching $\\cos(15t)$ gives $R\\sin\\alpha=6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10",
          "explanation": "Squaring and adding eliminates $\\alpha$, giving $R^2 = 64 + 36 = 100$, so $R = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{6}{8} = \\dfrac{3}{4} \\Rightarrow \\alpha = 36.87^\\circ",
          "explanation": "Dividing gives $\\tan\\alpha = \\tfrac{6}{8}$; both parts are positive, so $\\alpha$ is acute and equals $36.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the full model",
          "workingLatex": "T(t) = 20 + 10\\sin(15t + 36.87^\\circ)",
          "explanation": "The model is a single wave of amplitude $10$ about a mean of $20^\\circ$C, so it ranges between $10^\\circ$C and $30^\\circ$C.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the level equation",
          "workingLatex": "20 + 10\\sin(15t + 36.87^\\circ) = 25 \\Rightarrow \\sin(15t + 36.87^\\circ) = 0.5",
          "explanation": "For a temperature of $25^\\circ$C, subtract $20$ and divide by $10$ to reach the simple equation $\\sin(15t+36.87^\\circ)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin(0.5) = 30^\\circ",
          "explanation": "The principal value is $30^\\circ$. Because sine is positive in two quadrants and the interval is very wide, we expect several solutions from repeated $360^\\circ$ cycles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Shift the search interval",
          "workingLatex": "0 \\le t \\le 48 \\Rightarrow 36.87^\\circ \\le 15t + 36.87^\\circ \\le 756.87^\\circ",
          "explanation": "Over two days the angle $15t$ sweeps through $720^\\circ$, so the shifted angle runs from $36.87^\\circ$ up to $756.87^\\circ$ — more than two full turns.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "List all shifted-angle solutions",
          "workingLatex": "15t + 36.87^\\circ = 150^\\circ,\\; 390^\\circ,\\; 510^\\circ,\\; 750^\\circ",
          "explanation": "Starting from $30^\\circ$ and $150^\\circ$ and adding $360^\\circ$ each cycle gives $30, 150, 390, 510, 750, \\ldots$. Keeping only those inside $[36.87^\\circ, 756.87^\\circ]$ leaves four values ($30^\\circ$ is just below the interval).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{150 - 36.87}{15},\\; \\dfrac{390 - 36.87}{15},\\; \\dfrac{510 - 36.87}{15},\\; \\dfrac{750 - 36.87}{15}",
          "explanation": "Subtracting the phase and dividing by $15$ converts each shifted angle back to a time in hours.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate and interpret",
          "workingLatex": "t = 7.54,\\; 23.54,\\; 31.54,\\; 47.54\\text{ hours}",
          "explanation": "There are four times in the $48$-hour window. They fall into two per $24$-hour day (once as the temperature rises through $25^\\circ$C and once as it falls back), matching the period of $\\tfrac{360}{15}=24$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $8\\sin(15t)^\\circ + 6\\cos(15t)^\\circ = 10\\sin(15t + 36.87^\\circ)$. (b) The temperature is $25^\\circ$C at $t = 7.54$, $23.54$, $31.54$ and $47.54$ hours — that is twice each day."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "maximum minimum",
      "reciprocal"
    ],
    "questionText": "As a receiving dish rotates, the signal strength registered on a meter is modelled by $S(\\theta) = \\dfrac{200}{25 + 9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ}$, where $0^\\circ \\le \\theta \\le 360^\\circ$. (a) Express $9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ$ in the form $R\\sin(\\theta + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) Hence find the maximum and minimum values of $S$ and the values of $\\theta$ at which they occur. You must not use calculus.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Focus on the denominator's wave part",
          "workingLatex": "S(\\theta) = \\dfrac{200}{25 + \\big(9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ\\big)}",
          "explanation": "The size of the fraction is controlled entirely by its denominator. The numerator $200$ is fixed, so the whole problem reduces to understanding the wave part $9\\sin\\theta+12\\cos\\theta$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity to match",
          "workingLatex": "9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ \\equiv R\\sin(\\theta + \\alpha)",
          "explanation": "Writing the two terms as a single sine wave shows exactly how large and how small the denominator can become, which is what we need.",
          "diagram": null
        },
        {
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(\\theta + \\alpha) = R\\cos\\alpha\\,\\sin\\theta + R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Applying $\\sin(A+B)=\\sin A\\cos B + \\cos A\\sin B$ and pulling $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, ready to compare with the wave part of the denominator.",
          "diagram": null,
          "stepNumber": 3
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 9, \\qquad R\\sin\\alpha = 12",
          "explanation": "For the identity to hold for all $\\theta$, the amount of $\\sin\\theta$ must match and the amount of $\\cos\\theta$ must match, giving these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2 = 81 + 144 = 225$, so the wave has amplitude $R = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{12}{9} = \\dfrac{4}{3} \\Rightarrow \\alpha = 53.13^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{12}{9}$, and both parts being positive makes $\\alpha$ acute, so $\\alpha = 53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the denominator",
          "workingLatex": "25 + 9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ = 25 + 15\\sin(\\theta + 53.13^\\circ)",
          "explanation": "The denominator is now a constant $25$ plus a single wave of amplitude $15$. This makes its largest and smallest possible values immediate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of the denominator",
          "workingLatex": "-1 \\le \\sin(\\theta + 53.13^\\circ) \\le 1 \\Rightarrow 10 \\le 25 + 15\\sin(\\theta + 53.13^\\circ) \\le 40",
          "explanation": "Since the sine lies between $-1$ and $1$, the denominator lies between $25-15=10$ and $25+15=40$. It is always positive, so $S$ is always defined and positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link the fraction to the denominator",
          "workingLatex": "S = \\dfrac{200}{\\text{denominator}}",
          "explanation": "For a positive numerator, a fraction is largest when its denominator is smallest, and smallest when its denominator is largest. This is the key idea that lets us find the extremes with no calculus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the maximum of S",
          "workingLatex": "S_{\\max} = \\dfrac{200}{10} = 20",
          "explanation": "The smallest the denominator can be is $10$, so the largest $S$ can be is $\\tfrac{200}{10} = 20$. This is the maximum reading with no calculus needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find where the maximum occurs",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = -1 \\Rightarrow \\theta + 53.13^\\circ = 270^\\circ \\Rightarrow \\theta = 216.87^\\circ",
          "explanation": "The denominator is smallest when the sine equals $-1$, i.e. when the angle is $270^\\circ$. Solving gives $\\theta = 216.87^\\circ$, which lies in the allowed range.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the minimum of S",
          "workingLatex": "S_{\\min} = \\dfrac{200}{40} = 5",
          "explanation": "The largest the denominator can be is $40$, so the smallest $S$ can be is $\\tfrac{200}{40} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find where the minimum occurs",
          "workingLatex": "\\sin(\\theta + 53.13^\\circ) = 1 \\Rightarrow \\theta + 53.13^\\circ = 90^\\circ \\Rightarrow \\theta = 36.87^\\circ",
          "explanation": "The denominator is largest when the sine equals $1$, i.e. the angle is $90^\\circ$, giving $\\theta = 36.87^\\circ$. Both extreme angles are valid, so the results are complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $9\\sin\\theta^\\circ + 12\\cos\\theta^\\circ = 15\\sin(\\theta + 53.13^\\circ)$. (b) The maximum of $S$ is $20$, at $\\theta = 216.87^\\circ$; the minimum of $S$ is $5$, at $\\theta = 36.87^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "radians",
      "exact values"
    ],
    "questionText": "A particle moves so that its displacement from a fixed point is $y = \\sin t + \\sqrt{3}\\cos t$ metres, where $t$ is the time in seconds (in radians) and $0 \\le t \\le 2\\pi$. (a) Express $y$ in the form $R\\sin(t + \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$, giving $\\alpha$ exactly. (b) State the greatest displacement and the first time it occurs. (c) Solve $y = 1$ for $0 \\le t \\le 2\\pi$, giving your answers as exact multiples of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "\\sin t + \\sqrt{3}\\cos t \\equiv R\\sin(t + \\alpha)",
          "explanation": "We combine the two terms into one sine wave so that the amplitude and the solutions can be found exactly. Setting them identically equal lets us expand and compare.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\sin(t + \\alpha) = R\\cos\\alpha\\,\\sin t + R\\sin\\alpha\\,\\cos t",
          "explanation": "Expanding puts the right-hand side in the same shape as the left: a multiple of $\\sin t$ plus a multiple of $\\cos t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 1, \\qquad R\\sin\\alpha = \\sqrt{3}",
          "explanation": "Matching the coefficient of $\\sin t$ gives $R\\cos\\alpha=1$ and matching the coefficient of $\\cos t$ gives $R\\sin\\alpha=\\sqrt{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2 = 1 + 3 = 4$, so the amplitude is exactly $R = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α exactly",
          "workingLatex": "\\tan\\alpha = \\dfrac{\\sqrt{3}}{1} = \\sqrt{3} \\Rightarrow \\alpha = \\dfrac{\\pi}{3}",
          "explanation": "Dividing gives $\\tan\\alpha = \\sqrt{3}$. This is a standard exact value, so $\\alpha = \\tfrac{\\pi}{3}$, which is acute as required.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "y = 2\\sin\\left(t + \\dfrac{\\pi}{3}\\right)",
          "explanation": "The displacement is a single sine wave of amplitude $2$, shifted left by $\\tfrac{\\pi}{3}$. Everything about the motion can now be read from this exact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the greatest displacement",
          "workingLatex": "y_{\\max} = R = 2\\text{ m}",
          "explanation": "Since $\\sin$ cannot exceed $1$, the greatest displacement is the amplitude $2$ m. This is read straight off the R-form with no calculus.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the time of greatest displacement",
          "workingLatex": "t + \\dfrac{\\pi}{3} = \\dfrac{\\pi}{2} \\Rightarrow t = \\dfrac{\\pi}{6}\\text{ s}",
          "explanation": "The sine peaks when its angle is $\\tfrac{\\pi}{2}$. Solving gives the first time the particle is at maximum displacement, $t = \\tfrac{\\pi}{6}$ s.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the equation y = 1",
          "workingLatex": "2\\sin\\left(t + \\dfrac{\\pi}{3}\\right) = 1 \\Rightarrow \\sin\\left(t + \\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}",
          "explanation": "Setting $y=1$ and dividing by the amplitude $2$ gives $\\sin(t+\\tfrac{\\pi}{3})=\\tfrac{1}{2}$, a standard exact-value equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin\\dfrac{1}{2} = \\dfrac{\\pi}{6}",
          "explanation": "The principal solution is $\\tfrac{\\pi}{6}$. Sine is also positive in the second quadrant, giving $\\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}$ as well.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Shift the search interval",
          "workingLatex": "0 \\le t \\le 2\\pi \\Rightarrow \\dfrac{\\pi}{3} \\le t + \\dfrac{\\pi}{3} \\le \\dfrac{7\\pi}{3}",
          "explanation": "Because we solve for the shifted angle $t+\\tfrac{\\pi}{3}$, we shift the endpoints too. This ensures every solution corresponds to a valid time in $[0, 2\\pi]$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List the shifted-angle solutions",
          "workingLatex": "t + \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{6},\\; \\dfrac{13\\pi}{6}",
          "explanation": "In $[\\tfrac{\\pi}{3}, \\tfrac{7\\pi}{3}]$ the solutions of $\\sin=\\tfrac{1}{2}$ are $\\tfrac{5\\pi}{6}$ and $2\\pi + \\tfrac{\\pi}{6} = \\tfrac{13\\pi}{6}$. The base value $\\tfrac{\\pi}{6}$ is below the interval and is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{5\\pi}{6} - \\dfrac{\\pi}{3} = \\dfrac{\\pi}{2}, \\qquad t = \\dfrac{13\\pi}{6} - \\dfrac{\\pi}{3} = \\dfrac{11\\pi}{6}",
          "explanation": "Subtracting $\\tfrac{\\pi}{3}$ from each shifted angle gives the exact times. Both lie inside $[0, 2\\pi]$, so the displacement equals $1$ m at $t = \\tfrac{\\pi}{2}$ and $t = \\tfrac{11\\pi}{6}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $y = 2\\sin\\left(t + \\dfrac{\\pi}{3}\\right)$. (b) The greatest displacement is $2$ m, first reached at $t = \\dfrac{\\pi}{6}$ s. (c) $y = 1$ at $t = \\dfrac{\\pi}{2}$ and $t = \\dfrac{11\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "cosine form",
      "modelling"
    ],
    "questionText": "The horizontal displacement of a piston is $s(t) = 24\\cos(20t)^\\circ - 7\\sin(20t)^\\circ$ cm, where $t$ is the time in seconds. (a) Express $s(t)$ in the form $R\\cos(20t + \\alpha)^\\circ$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. (b) State the amplitude and the period of the motion. (c) Find the least displacement and the first time $t > 0$ at which it occurs. (d) Find the first two times $t > 0$ at which the piston passes through $s = 0$, giving your answers in seconds to $3$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "24\\cos(20t)^\\circ - 7\\sin(20t)^\\circ \\equiv R\\cos(20t + \\alpha)",
          "explanation": "The expression leads with a cosine and subtracts a sine, which is exactly the shape produced by expanding $R\\cos(20t+\\alpha)$. Choosing this form keeps $\\alpha$ acute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the addition formula",
          "workingLatex": "R\\cos(20t + \\alpha) = R\\cos\\alpha\\,\\cos(20t)^\\circ - R\\sin\\alpha\\,\\sin(20t)^\\circ",
          "explanation": "Using $\\cos(A+B)=\\cos A\\cos B - \\sin A\\sin B$ gives a multiple of $\\cos(20t)$ minus a multiple of $\\sin(20t)$, matching the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 24, \\qquad R\\sin\\alpha = 7",
          "explanation": "Matching the $\\cos(20t)$ terms gives $R\\cos\\alpha=24$; matching the $\\sin(20t)$ terms, the two minus signs cancel to give $R\\sin\\alpha=7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{24^2 + 7^2} = \\sqrt{625} = 25",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2 = 576 + 49 = 625$, so the amplitude is $R = 25$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α",
          "workingLatex": "\\tan\\alpha = \\dfrac{7}{24} \\Rightarrow \\alpha = 16.26^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{7}{24}$, and both parts being positive makes $\\alpha$ acute, so $\\alpha = 16.26^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "s(t) = 25\\cos(20t + 16.26^\\circ)",
          "explanation": "The displacement is now a single cosine wave of amplitude $25$. Its size, timing and zeros are all easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the amplitude",
          "workingLatex": "\\text{amplitude} = R = 25\\text{ cm}",
          "explanation": "The amplitude is the greatest distance the piston moves from the centre of its travel, which is exactly $R = 25$ cm.",
          "diagram": null
        },
        {
          "description": "State the period",
          "workingLatex": "\\text{period} = \\dfrac{360^\\circ}{20} = 18\\text{ s}",
          "explanation": "The angle grows by $20^\\circ$ for each second, so a full cycle of $360^\\circ$ takes $18$ seconds. The piston therefore repeats its motion every $18$ s.",
          "diagram": null,
          "stepNumber": 8
        },
        {
          "stepNumber": 9,
          "description": "Read off the least displacement",
          "workingLatex": "s_{\\min} = -R = -25\\text{ cm}",
          "explanation": "A cosine cannot fall below $-1$, so the least displacement is $-25$ cm. No calculus is needed; the minimum is the negative of the amplitude.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the time of least displacement",
          "workingLatex": "20t + 16.26^\\circ = 180^\\circ \\Rightarrow 20t = 163.74^\\circ \\Rightarrow t = 8.187\\text{ s}",
          "explanation": "A cosine reaches $-1$ when its angle is $180^\\circ$. Solving for $t$ gives the first time the piston is at $-25$ cm.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the zero-displacement equation",
          "workingLatex": "25\\cos(20t + 16.26^\\circ) = 0 \\Rightarrow \\cos(20t + 16.26^\\circ) = 0",
          "explanation": "The piston is at $s=0$ when the cosine is zero. Dividing by $25$ leaves the basic equation $\\cos(20t+16.26^\\circ)=0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List the first shifted-angle solutions",
          "workingLatex": "20t + 16.26^\\circ = 90^\\circ,\\; 270^\\circ",
          "explanation": "Cosine is zero at $90^\\circ$ and $270^\\circ$ (and every $180^\\circ$ after). For the first two positive times we take the two smallest angles above the starting value $16.26^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for t",
          "workingLatex": "t = \\dfrac{90 - 16.26}{20} = 3.687\\text{ s}, \\qquad t = \\dfrac{270 - 16.26}{20} = 12.687\\text{ s}",
          "explanation": "Subtracting the phase and dividing by $20$ gives the first two moments the piston passes through the origin, one on each side of the minimum.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $s(t) = 25\\cos(20t + 16.26^\\circ)$. (b) Amplitude $25$ cm and period $18$ s. (c) The least displacement is $-25$ cm, first at $t = 8.187$ s. (d) The piston is at $s = 0$ at $t = 3.687$ s and $t = 12.687$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "radians"
    ],
    "questionText": "The current in a circuit is modelled by $I(t) = 15\\sin(4t) - 8\\cos(4t)$ amperes, where $t$ is the time in seconds and all angles are in radians. (a) Express $I(t)$ in the form $R\\sin(4t - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$. (b) State the peak current and the period. (c) Find the first time $t > 0$ at which the current reaches $10$ A, giving your answer in seconds to $4$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "15\\sin(4t) - 8\\cos(4t) \\equiv R\\sin(4t - \\alpha)",
          "explanation": "Because the cosine term is subtracted, the $R\\sin(4t-\\alpha)$ form is the natural choice: its expansion also subtracts a cosine term, which keeps $\\alpha$ acute.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the subtraction formula",
          "workingLatex": "R\\sin(4t - \\alpha) = R\\cos\\alpha\\,\\sin(4t) - R\\sin\\alpha\\,\\cos(4t)",
          "explanation": "Using $\\sin(A-B)=\\sin A\\cos B - \\cos A\\sin B$ gives a multiple of $\\sin(4t)$ minus a multiple of $\\cos(4t)$, matching the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha = 15, \\qquad R\\sin\\alpha = 8",
          "explanation": "Matching the $\\sin(4t)$ terms gives $R\\cos\\alpha=15$; matching the $\\cos(4t)$ terms, the minus signs cancel to give $R\\sin\\alpha=8$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R = \\sqrt{15^2 + 8^2} = \\sqrt{289} = 17",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2 = 225 + 64 = 289$, so the amplitude is $R = 17$ A.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find α in radians",
          "workingLatex": "\\tan\\alpha = \\dfrac{8}{15} \\Rightarrow \\alpha = 0.4900^{c}",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{8}{15}$; both parts positive means $\\alpha$ is acute, and in radians $\\alpha = 0.4900$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the R-form",
          "workingLatex": "I(t) = 17\\sin(4t - 0.4900)",
          "explanation": "The current is a single sine wave of amplitude $17$, from which the peak, period and level-crossings follow at once.",
          "diagram": null
        },
        {
          "description": "Check the R-form at t = 0",
          "workingLatex": "17\\sin(0 - 0.4900) = 17\\times(-0.4706) = -8 = I(0)",
          "explanation": "A quick check: at $t=0$ the original model gives $15\\sin 0 - 8\\cos 0 = -8$, and the R-form gives $17\\sin(-0.4900) = -8$ too. Agreement confirms $R$ and $\\alpha$ are correct before we use the form.",
          "diagram": null,
          "stepNumber": 7
        },
        {
          "stepNumber": 8,
          "description": "State the peak current",
          "workingLatex": "I_{\\max} = R = 17\\text{ A}",
          "explanation": "Since $\\sin$ never exceeds $1$, the peak current is the amplitude $17$ A, read directly off the R-form with no calculus.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the period",
          "workingLatex": "\\text{period} = \\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2} \\approx 1.5708\\text{ s}",
          "explanation": "For a wave $\\sin(kt+\\ldots)$ the period is $\\tfrac{2\\pi}{k}$. With $k = 4$, one complete cycle takes $\\tfrac{\\pi}{2}$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the level equation",
          "workingLatex": "17\\sin(4t - 0.4900) = 10 \\Rightarrow \\sin(4t - 0.4900) = \\dfrac{10}{17}",
          "explanation": "For a current of $10$ A we set the model equal to $10$ and divide by the amplitude $17$, giving $\\sin(4t-0.4900)=\\tfrac{10}{17}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the base angle",
          "workingLatex": "\\arcsin\\dfrac{10}{17} = 0.6288",
          "explanation": "The principal value is $0.6288$ radians. As $t$ increases from $0$, the angle $4t-0.4900$ increases from $-0.4900$, so this first positive-sine solution is the first one it reaches.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for the first time",
          "workingLatex": "4t - 0.4900 = 0.6288 \\Rightarrow 4t = 1.1188 \\Rightarrow t = 0.2797\\text{ s}",
          "explanation": "Adding the phase back and dividing by $4$ gives the first time the rising current reaches $10$ A.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm it is the earliest solution",
          "workingLatex": "\\text{next solution: } 4t - 0.4900 = \\pi - 0.6288 = 2.5128 \\Rightarrow t = 0.7507\\text{ s}",
          "explanation": "The second-quadrant solution gives a later time of $0.7507$ s, confirming that $t = 0.2797$ s is indeed the first time the current reaches $10$ A.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $I(t) = 17\\sin(4t - 0.4900)$ (radians). (b) The peak current is $17$ A and the period is $\\dfrac{\\pi}{2} \\approx 1.5708$ s. (c) The current first reaches $10$ A at $t = 0.2797$ s."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "reciprocal",
      "maximum and minimum"
    ],
    "questionText": "The function $f$ is defined by $f(\\theta)=\\dfrac{20}{8+3\\sin\\theta+4\\cos\\theta}$ for $0^\\circ\\le\\theta<360^\\circ$. By first expressing $3\\sin\\theta+4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$, where $R>0$ and $0^\\circ<\\alpha<90^\\circ$, find the greatest and least values of $f(\\theta)$ and the value of $\\theta$ at which each occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity to match",
          "workingLatex": "3\\sin\\theta+4\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The awkward part of $f$ is the two-term expression in the denominator. Writing it as a single sine wave $R\\sin(\\theta+\\alpha)$ lets us read off its exact range at a glance, so we set the two expressions identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand with the compound-angle formula",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding $\\sin(\\theta+\\alpha)$ and carrying the $R$ through gives a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$, exactly the same shape as the left-hand side, so we can compare the two sides term by term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=3,\\qquad R\\sin\\alpha=4",
          "explanation": "For the identity to hold for every $\\theta$, the amount of $\\sin\\theta$ on each side must match and likewise for $\\cos\\theta$, which gives these two simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "Squaring and adding the two equations eliminates $\\alpha$ because $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=3^2+4^2$. We take the positive root since $R>0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{4}{3}\\Rightarrow\\alpha=53.13^\\circ",
          "explanation": "Dividing $R\\sin\\alpha$ by $R\\cos\\alpha$ cancels $R$ and leaves $\\tan\\alpha=\\tfrac{4}{3}$. Both coefficients are positive, so $\\alpha$ is acute and equals $\\arctan\\tfrac{4}{3}=53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite f using the single wave",
          "workingLatex": "f(\\theta)=\\dfrac{20}{8+5\\sin(\\theta+53.13^\\circ)}",
          "explanation": "Replacing the two-term expression by the single wave puts all of the $\\theta$-dependence into one bounded sine term, which is what controls the size of the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le\\sin(\\theta+53.13^\\circ)\\le 1",
          "explanation": "A sine function can never rise above $1$ or fall below $-1$ whatever its input, so this is the complete range of the wave.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of the denominator",
          "workingLatex": "3\\le 8+5\\sin(\\theta+53.13^\\circ)\\le 13",
          "explanation": "Multiplying the sine bounds by $5$ and adding $8$ shifts and stretches them into the actual range of the denominator, which runs from $8-5=3$ up to $8+5=13$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply reciprocal reasoning",
          "workingLatex": "\\text{denominator} > 0 \\;\\Rightarrow\\; f \\text{ greatest when denominator least}",
          "explanation": "Because the denominator stays positive throughout, a smaller positive denominator makes the fraction bigger and a larger denominator makes it smaller. So the extremes of $f$ come straight from the extremes of the denominator, with no calculus needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Greatest value of f",
          "workingLatex": "f_{\\max}=\\dfrac{20}{3}\\approx 6.67",
          "explanation": "The fraction is largest when the denominator takes its smallest value $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Least value of f",
          "workingLatex": "f_{\\min}=\\dfrac{20}{13}\\approx 1.54",
          "explanation": "The fraction is smallest when the denominator takes its largest value $13$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Locate θ for the greatest value",
          "workingLatex": "\\sin(\\theta+53.13^\\circ)=-1\\Rightarrow\\theta+53.13^\\circ=270^\\circ\\Rightarrow\\theta=216.87^\\circ",
          "explanation": "The denominator is smallest when the sine term reaches its minimum $-1$, which happens when the angle inside equals $270^\\circ$; subtracting $53.13^\\circ$ gives the required $\\theta$, which lies in range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Locate θ for the least value",
          "workingLatex": "\\sin(\\theta+53.13^\\circ)=1\\Rightarrow\\theta+53.13^\\circ=90^\\circ\\Rightarrow\\theta=36.87^\\circ",
          "explanation": "The denominator is largest when the sine term reaches its maximum $1$, at an inside angle of $90^\\circ$; subtracting $53.13^\\circ$ gives this $\\theta$, and both angles lie in $0^\\circ\\le\\theta<360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta+4\\cos\\theta=5\\sin(\\theta+53.13^\\circ)$. The greatest value is $f=\\dfrac{20}{3}\\approx 6.67$, occurring at $\\theta=216.9^\\circ$, and the least value is $f=\\dfrac{20}{13}\\approx 1.54$, occurring at $\\theta=36.9^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "reciprocal",
      "radians"
    ],
    "questionText": "Given that $g(\\theta)=\\dfrac{1}{5+\\sin\\theta+\\sqrt{3}\\,\\cos\\theta}$ for $0\\le\\theta<2\\pi$, express $\\sin\\theta+\\sqrt{3}\\,\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ with $R>0$ and $0<\\alpha<\\dfrac{\\pi}{2}$, and hence determine the maximum and minimum values of $g(\\theta)$ together with the exact value of $\\theta$ at which each occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity",
          "workingLatex": "\\sin\\theta+\\sqrt{3}\\,\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "To understand how the denominator behaves we compress its two trigonometric terms into a single sine wave, so we begin by setting the expressions identically equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle expansion rearranges the right-hand side into a $\\sin\\theta$ part and a $\\cos\\theta$ part so that it lines up with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=\\sqrt{3}",
          "explanation": "Matching the coefficient of $\\sin\\theta$ and the coefficient of $\\cos\\theta$ on both sides produces these two equations for $R$ and $\\alpha$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+(\\sqrt{3})^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$ using $\\cos^2\\alpha+\\sin^2\\alpha=1$, leaving $R^2=1+3=4$, and we keep the positive root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}=\\sqrt{3}\\Rightarrow\\alpha=\\dfrac{\\pi}{3}",
          "explanation": "Dividing the two equations gives $\\tan\\alpha=\\sqrt{3}$; since both coefficients are positive $\\alpha$ is acute, and $\\arctan\\sqrt{3}=\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite g",
          "workingLatex": "g(\\theta)=\\dfrac{1}{5+2\\sin\\!\\left(\\theta+\\frac{\\pi}{3}\\right)}",
          "explanation": "With the two terms merged, the whole denominator is $5$ plus a single sine wave of amplitude $2$, so its behaviour is now easy to track.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le\\sin\\!\\left(\\theta+\\frac{\\pi}{3}\\right)\\le 1",
          "explanation": "The sine of any angle lies between $-1$ and $1$, and both extremes are actually reached as $\\theta$ runs over a full period.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of the denominator",
          "workingLatex": "3\\le 5+2\\sin\\!\\left(\\theta+\\frac{\\pi}{3}\\right)\\le 7",
          "explanation": "Scaling the sine bounds by $2$ and adding $5$ gives a denominator that varies between $5-2=3$ and $5+2=7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply reciprocal reasoning",
          "workingLatex": "\\text{denominator} > 0 \\;\\Rightarrow\\; g \\text{ largest when denominator smallest}",
          "explanation": "The denominator never reaches zero and stays positive, so the fraction is largest exactly when the denominator is smallest, and smallest when the denominator is largest. The turning values follow directly, without differentiating.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Maximum value of g",
          "workingLatex": "g_{\\max}=\\dfrac{1}{3}",
          "explanation": "Using the smallest denominator $3$ gives the largest value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Minimum value of g",
          "workingLatex": "g_{\\min}=\\dfrac{1}{7}",
          "explanation": "Using the largest denominator $7$ gives the smallest value of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Locate θ for the maximum",
          "workingLatex": "\\sin\\!\\left(\\theta+\\frac{\\pi}{3}\\right)=-1\\Rightarrow\\theta+\\frac{\\pi}{3}=\\frac{3\\pi}{2}\\Rightarrow\\theta=\\frac{7\\pi}{6}",
          "explanation": "The denominator is least when the sine term is $-1$, i.e. when the inside angle is $\\dfrac{3\\pi}{2}$; subtracting $\\dfrac{\\pi}{3}$ gives $\\theta=\\dfrac{7\\pi}{6}$, which lies in $[0,2\\pi)$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Locate θ for the minimum",
          "workingLatex": "\\sin\\!\\left(\\theta+\\frac{\\pi}{3}\\right)=1\\Rightarrow\\theta+\\frac{\\pi}{3}=\\frac{\\pi}{2}\\Rightarrow\\theta=\\frac{\\pi}{6}",
          "explanation": "The denominator is greatest when the sine term is $1$, i.e. when the inside angle is $\\dfrac{\\pi}{2}$; subtracting $\\dfrac{\\pi}{3}$ gives $\\theta=\\dfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "g_{\\max}=\\tfrac{1}{3}\\ \\text{at}\\ \\theta=\\tfrac{7\\pi}{6},\\qquad g_{\\min}=\\tfrac{1}{7}\\ \\text{at}\\ \\theta=\\tfrac{\\pi}{6}",
          "explanation": "Both angles lie in the required interval $0\\le\\theta<2\\pi$, so we have the complete answer for the maximum and minimum of $g$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta+\\sqrt{3}\\,\\cos\\theta=2\\sin\\!\\left(\\theta+\\dfrac{\\pi}{3}\\right)$. The maximum value is $g=\\dfrac{1}{3}$ at $\\theta=\\dfrac{7\\pi}{6}$, and the minimum value is $g=\\dfrac{1}{7}$ at $\\theta=\\dfrac{\\pi}{6}$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "proof",
      "solving equations"
    ],
    "questionText": "(a) Prove that $\\sqrt{3}\\,\\sin\\theta-\\cos\\theta\\equiv 2\\sin(\\theta-30^\\circ)$. (b) Hence solve the equation $\\sqrt{3}\\,\\sin\\theta-\\cos\\theta=1$ for $0^\\circ\\le\\theta\\le 720^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta-\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "Because the cosine term is subtracted, the natural match is $R\\sin(\\theta-\\alpha)$, whose expansion also has a minus sign in front of the $\\cos\\theta$ term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta-\\alpha)=R\\cos\\alpha\\,\\sin\\theta-R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Using $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$ and pulling the $R$ through gives a $\\sin\\theta$ term minus a $\\cos\\theta$ term, matching the structure we want to prove.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=\\sqrt{3},\\qquad R\\sin\\alpha=1",
          "explanation": "Equating the coefficients of $\\sin\\theta$ and of $\\cos\\theta$ on both sides gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{(\\sqrt{3})^2+1^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$, leaving $R^2=3+1=4$, so the positive amplitude is $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{1}{\\sqrt{3}}\\Rightarrow\\alpha=30^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{1}{\\sqrt{3}}$, and since both coefficients are positive $\\alpha$ is acute, giving $\\alpha=30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the identity",
          "workingLatex": "2\\sin(\\theta-30^\\circ)=2\\!\\left(\\tfrac{\\sqrt{3}}{2}\\sin\\theta-\\tfrac{1}{2}\\cos\\theta\\right)=\\sqrt{3}\\,\\sin\\theta-\\cos\\theta",
          "explanation": "Expanding $2\\sin(\\theta-30^\\circ)$ with the exact values $\\cos30^\\circ=\\tfrac{\\sqrt{3}}{2}$ and $\\sin30^\\circ=\\tfrac{1}{2}$ returns the original expression, which completes the proof of part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\sqrt{3}\\,\\sin\\theta-\\cos\\theta=1\\ \\Rightarrow\\ 2\\sin(\\theta-30^\\circ)=1",
          "explanation": "Replacing the left-hand side with the single wave we just proved turns the equation into a simple sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta-30^\\circ)=\\dfrac{1}{2}",
          "explanation": "Dividing both sides by $2$ leaves a standard sine value whose solutions we know exactly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ\\le\\theta\\le720^\\circ\\ \\Rightarrow\\ -30^\\circ\\le\\theta-30^\\circ\\le 690^\\circ",
          "explanation": "Since we are now solving for $\\theta-30^\\circ$, we shift the whole search interval down by $30^\\circ$ so that no solutions are lost at either end.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the principal value",
          "workingLatex": "\\theta-30^\\circ=30^\\circ",
          "explanation": "The principal solution of $\\sin x=\\tfrac{1}{2}$ is $x=\\arcsin\\tfrac{1}{2}=30^\\circ$, which lies inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the second-quadrant value",
          "workingLatex": "\\theta-30^\\circ=150^\\circ",
          "explanation": "Sine is also positive in the second quadrant, giving $180^\\circ-30^\\circ=150^\\circ$ as a further solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add full turns within the interval",
          "workingLatex": "\\theta-30^\\circ=390^\\circ,\\;510^\\circ",
          "explanation": "Sine repeats every $360^\\circ$, so adding a full turn to each base solution gives $30^\\circ+360^\\circ=390^\\circ$ and $150^\\circ+360^\\circ=510^\\circ$, both still inside $[-30^\\circ,690^\\circ]$. A further turn would exceed $690^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for θ",
          "workingLatex": "\\theta=60^\\circ,\\;180^\\circ,\\;420^\\circ,\\;540^\\circ",
          "explanation": "Adding $30^\\circ$ back to each shifted value undoes the substitution and gives the four values of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the solutions",
          "workingLatex": "\\theta=60^\\circ,\\,180^\\circ,\\,420^\\circ,\\,540^\\circ\\ \\text{all lie in}\\ [0^\\circ,720^\\circ]",
          "explanation": "Every value is inside the required interval and, for example, $\\sqrt{3}\\sin60^\\circ-\\cos60^\\circ=\\tfrac{3}{2}-\\tfrac{1}{2}=1$, confirming the equation is satisfied.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\sqrt{3}\\,\\sin\\theta-\\cos\\theta=2\\sin(\\theta-30^\\circ)$, as shown. (b) The solutions in $0^\\circ\\le\\theta\\le720^\\circ$ are $\\theta=60^\\circ,\\;180^\\circ,\\;420^\\circ,\\;540^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "rearranging",
      "solving equations"
    ],
    "questionText": "Solve the equation $4\\sin\\theta=3-2\\cos\\theta$ for $0^\\circ\\le\\theta\\le 360^\\circ$, giving your answers to $1$ decimal place. Begin by writing the equation in the form $a\\sin\\theta+b\\cos\\theta=c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange into standard form",
          "workingLatex": "4\\sin\\theta=3-2\\cos\\theta\\ \\Rightarrow\\ 4\\sin\\theta+2\\cos\\theta=3",
          "explanation": "The $R$-form method needs a single expression $a\\sin\\theta+b\\cos\\theta$, so we first move the cosine term across to collect both trigonometric terms on the same side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the identity",
          "workingLatex": "4\\sin\\theta+2\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "Now that the left-hand side is a clean sum of a sine and cosine term, we can write it as a single sine wave in the usual way.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding the compound angle puts the right-hand side in matching form: a multiple of $\\sin\\theta$ plus a multiple of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=4,\\qquad R\\sin\\alpha=2",
          "explanation": "Matching the $\\sin\\theta$ and $\\cos\\theta$ coefficients on both sides gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{4^2+2^2}=\\sqrt{20}=2\\sqrt{5}",
          "explanation": "Squaring and adding eliminates $\\alpha$, giving $R^2=16+4=20$, and $\\sqrt{20}$ simplifies to $2\\sqrt{5}$, kept as an exact surd.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{2}{4}=\\dfrac{1}{2}\\Rightarrow\\alpha=26.57^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{1}{2}$; both coefficients are positive so $\\alpha$ is acute, and $\\arctan\\tfrac{1}{2}=26.57^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation in R-form",
          "workingLatex": "2\\sqrt{5}\\,\\sin(\\theta+26.57^\\circ)=3",
          "explanation": "Substituting the single-wave form turns the rearranged equation into a basic sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate the sine",
          "workingLatex": "\\sin(\\theta+26.57^\\circ)=\\dfrac{3}{2\\sqrt{5}}=0.6708",
          "explanation": "Dividing by $2\\sqrt{5}$ leaves a numerical value of sine; $\\tfrac{3}{2\\sqrt5}\\approx0.6708$, which is between $-1$ and $1$, so solutions exist.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Shift the interval",
          "workingLatex": "0^\\circ\\le\\theta\\le360^\\circ\\Rightarrow 26.57^\\circ\\le\\theta+26.57^\\circ\\le 386.57^\\circ",
          "explanation": "As we are solving for $\\theta+26.57^\\circ$, the whole search interval is shifted up by $26.57^\\circ$ to catch every solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the principal value",
          "workingLatex": "\\theta+26.57^\\circ=42.13^\\circ",
          "explanation": "The principal solution is $\\arcsin0.6708=42.13^\\circ$, which sits inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the second-quadrant value",
          "workingLatex": "\\theta+26.57^\\circ=180^\\circ-42.13^\\circ=137.87^\\circ",
          "explanation": "Sine is positive in the second quadrant too, giving a second solution $137.87^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the out-of-range candidate",
          "workingLatex": "42.13^\\circ+360^\\circ=402.13^\\circ>386.57^\\circ\\ (\\text{reject})",
          "explanation": "Adding a full turn takes the angle beyond the upper limit of the shifted interval, so it gives no valid solution.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for θ",
          "workingLatex": "\\theta=42.13^\\circ-26.57^\\circ,\\;137.87^\\circ-26.57^\\circ=15.56^\\circ,\\;111.30^\\circ",
          "explanation": "Subtracting $26.57^\\circ$ from each shifted angle undoes the substitution to give the values of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round and verify",
          "workingLatex": "\\theta=15.6^\\circ,\\;111.3^\\circ",
          "explanation": "Rounding to $1$ decimal place gives the final answers; checking $\\theta=15.6^\\circ$ gives $4\\sin15.6^\\circ+2\\cos15.6^\\circ\\approx3$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "Rearranged, the equation is $4\\sin\\theta+2\\cos\\theta=3$, i.e. $2\\sqrt{5}\\,\\sin(\\theta+26.57^\\circ)=3$. The solutions in $0^\\circ\\le\\theta\\le360^\\circ$ are $\\theta=15.6^\\circ$ and $\\theta=111.3^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "radians",
      "solving equations"
    ],
    "questionText": "Solve the equation $\\sin\\theta-\\cos\\theta=1$ for $0\\le\\theta\\le 4\\pi$, giving your answers as exact multiples of $\\pi$. Use the form $R\\sin(\\theta-\\alpha)$ with $R>0$ and $0<\\alpha<\\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "\\sin\\theta-\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The cosine term is subtracted, so we match against $R\\sin(\\theta-\\alpha)$, whose expansion carries the same minus sign in front of $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta-\\alpha)=R\\cos\\alpha\\,\\sin\\theta-R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding the compound angle gives a $\\sin\\theta$ term minus a $\\cos\\theta$ term, ready to compare with the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=1",
          "explanation": "Matching the coefficients of $\\sin\\theta$ and $\\cos\\theta$ gives two equal equations because both coefficients on the left are $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+1^2}=\\sqrt{2}",
          "explanation": "Squaring and adding eliminates $\\alpha$ to give $R^2=2$, so the amplitude is the exact surd $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=1\\Rightarrow\\alpha=\\dfrac{\\pi}{4}",
          "explanation": "Dividing the equal equations gives $\\tan\\alpha=1$; working in radians, the acute angle is $\\alpha=\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite and isolate the sine",
          "workingLatex": "\\sqrt{2}\\,\\sin\\!\\left(\\theta-\\frac{\\pi}{4}\\right)=1\\Rightarrow\\sin\\!\\left(\\theta-\\frac{\\pi}{4}\\right)=\\dfrac{1}{\\sqrt{2}}",
          "explanation": "Substituting the single wave and dividing by $\\sqrt{2}$ gives a standard sine value $\\dfrac{1}{\\sqrt2}$ whose solutions are exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shift the interval",
          "workingLatex": "0\\le\\theta\\le4\\pi\\Rightarrow-\\frac{\\pi}{4}\\le\\theta-\\frac{\\pi}{4}\\le\\frac{15\\pi}{4}",
          "explanation": "Because we solve for $\\theta-\\dfrac{\\pi}{4}$, we shift the interval down by $\\dfrac{\\pi}{4}$. The upper limit becomes $4\\pi-\\dfrac{\\pi}{4}=\\dfrac{15\\pi}{4}$, and the wide interval means several solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the principal value",
          "workingLatex": "\\theta-\\frac{\\pi}{4}=\\frac{\\pi}{4}",
          "explanation": "The principal solution of $\\sin x=\\dfrac{1}{\\sqrt2}$ is $x=\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the second-quadrant value",
          "workingLatex": "\\theta-\\frac{\\pi}{4}=\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}",
          "explanation": "Sine is positive in the second quadrant, giving $\\pi-\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add a full turn to each",
          "workingLatex": "\\theta-\\frac{\\pi}{4}=\\frac{9\\pi}{4},\\;\\frac{11\\pi}{4}",
          "explanation": "Sine repeats every $2\\pi$, so adding $2\\pi=\\dfrac{8\\pi}{4}$ to each base value gives $\\dfrac{9\\pi}{4}$ and $\\dfrac{11\\pi}{4}$, both still inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm no further solutions",
          "workingLatex": "\\frac{\\pi}{4}+4\\pi=\\frac{17\\pi}{4}>\\frac{15\\pi}{4}\\ (\\text{reject})",
          "explanation": "A second full turn pushes the angle past the upper limit $\\dfrac{15\\pi}{4}$, so there are no more solutions to include.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List the shifted solutions",
          "workingLatex": "\\theta-\\frac{\\pi}{4}=\\frac{\\pi}{4},\\;\\frac{3\\pi}{4},\\;\\frac{9\\pi}{4},\\;\\frac{11\\pi}{4}",
          "explanation": "These are all four values of the shifted angle that lie in $\\left[-\\dfrac{\\pi}{4},\\dfrac{15\\pi}{4}\\right]$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for θ",
          "workingLatex": "\\theta=\\frac{\\pi}{2},\\;\\pi,\\;\\frac{5\\pi}{2},\\;3\\pi",
          "explanation": "Adding $\\dfrac{\\pi}{4}$ back to each shifted value gives the four values of $\\theta$ as exact multiples of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify a solution",
          "workingLatex": "\\sin\\pi-\\cos\\pi=0-(-1)=1\\ \\checkmark",
          "explanation": "Checking $\\theta=\\pi$ gives $0-(-1)=1$, confirming the equation holds; all four values lie within $0\\le\\theta\\le4\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta-\\cos\\theta=\\sqrt{2}\\,\\sin\\!\\left(\\theta-\\dfrac{\\pi}{4}\\right)$. The solutions in $0\\le\\theta\\le4\\pi$ are $\\theta=\\dfrac{\\pi}{2},\\;\\pi,\\;\\dfrac{5\\pi}{2},\\;3\\pi$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "exact",
    "tags": [
      "r form",
      "harmonic form",
      "squared",
      "maximum and minimum"
    ],
    "questionText": "The function $p$ is defined by $p(\\theta)=(2+\\sin\\theta+\\cos\\theta)^2$ for $0^\\circ\\le\\theta<360^\\circ$. Find the greatest and least values of $p(\\theta)$ in exact form, and the value of $\\theta$ at which each occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Work on the bracket first",
          "workingLatex": "\\sin\\theta+\\cos\\theta \\equiv R\\sin(\\theta+\\alpha)",
          "explanation": "The bracket is what varies with $\\theta$, so we first compress its two trig terms into a single sine wave; the squaring can be handled afterwards.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta+\\alpha)=R\\cos\\alpha\\,\\sin\\theta+R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "The compound-angle expansion writes the right-hand side as a $\\sin\\theta$ part plus a $\\cos\\theta$ part, ready for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=1",
          "explanation": "Matching the coefficients of $\\sin\\theta$ and $\\cos\\theta$ gives two equations, both with the value $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+1^2}=\\sqrt{2}",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=2$ and the exact amplitude $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=1\\Rightarrow\\alpha=45^\\circ",
          "explanation": "Dividing gives $\\tan\\alpha=1$, and with both coefficients positive the acute angle is $\\alpha=45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the bracket",
          "workingLatex": "2+\\sin\\theta+\\cos\\theta=2+\\sqrt{2}\\,\\sin(\\theta+45^\\circ)",
          "explanation": "Substituting the single wave shows the bracket is a constant $2$ plus a sine term of amplitude $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le\\sin(\\theta+45^\\circ)\\le 1",
          "explanation": "The sine term ranges between $-1$ and $1$, both of which are attained over a full turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of the bracket",
          "workingLatex": "2-\\sqrt{2}\\le 2+\\sqrt{2}\\,\\sin(\\theta+45^\\circ)\\le 2+\\sqrt{2}",
          "explanation": "Scaling by $\\sqrt{2}$ and adding $2$ gives the bracket's range, from $2-\\sqrt{2}$ up to $2+\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the bracket stays positive",
          "workingLatex": "2-\\sqrt{2}\\approx 0.59>0",
          "explanation": "Since even the smallest value of the bracket is positive, the bracket never changes sign. That means squaring preserves the ordering: the largest bracket gives the largest square and the smallest bracket the smallest square, so no calculus is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Greatest value of p",
          "workingLatex": "p_{\\max}=(2+\\sqrt{2})^2=4+4\\sqrt{2}+2=6+4\\sqrt{2}",
          "explanation": "The largest square comes from the largest bracket $2+\\sqrt{2}$; expanding gives the exact value $6+4\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Least value of p",
          "workingLatex": "p_{\\min}=(2-\\sqrt{2})^2=4-4\\sqrt{2}+2=6-4\\sqrt{2}",
          "explanation": "The smallest square comes from the smallest (still positive) bracket $2-\\sqrt{2}$, giving the exact value $6-4\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Locate θ for the greatest value",
          "workingLatex": "\\sin(\\theta+45^\\circ)=1\\Rightarrow\\theta+45^\\circ=90^\\circ\\Rightarrow\\theta=45^\\circ",
          "explanation": "The bracket is largest when the sine term is $1$, at an inside angle of $90^\\circ$; subtracting $45^\\circ$ gives $\\theta=45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Locate θ for the least value",
          "workingLatex": "\\sin(\\theta+45^\\circ)=-1\\Rightarrow\\theta+45^\\circ=270^\\circ\\Rightarrow\\theta=225^\\circ",
          "explanation": "The bracket is smallest when the sine term is $-1$, at an inside angle of $270^\\circ$; subtracting $45^\\circ$ gives $\\theta=225^\\circ$, and both angles lie in range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta+\\cos\\theta=\\sqrt{2}\\,\\sin(\\theta+45^\\circ)$, so $p(\\theta)=\\bigl(2+\\sqrt{2}\\,\\sin(\\theta+45^\\circ)\\bigr)^2$. Because the bracket stays positive, the greatest value is $(2+\\sqrt{2})^2=6+4\\sqrt{2}$ at $\\theta=45^\\circ$, and the least value is $(2-\\sqrt{2})^2=6-4\\sqrt{2}$ at $\\theta=225^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "proof",
      "radians"
    ],
    "questionText": "(a) Show that $\\cos\\theta-\\sqrt{3}\\,\\sin\\theta\\equiv 2\\cos\\!\\left(\\theta+\\dfrac{\\pi}{3}\\right)$. (b) Hence solve $\\cos\\theta-\\sqrt{3}\\,\\sin\\theta=1$ for $0\\le\\theta\\le 2\\pi$, giving exact answers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine target",
          "workingLatex": "\\cos\\theta-\\sqrt{3}\\,\\sin\\theta \\equiv R\\cos(\\theta+\\alpha)",
          "explanation": "The expression leads with $\\cos\\theta$ and subtracts a sine term, which is exactly the shape of $R\\cos(\\theta+\\alpha)$, so we target that form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\cos(\\theta+\\alpha)=R\\cos\\alpha\\,\\cos\\theta-R\\sin\\alpha\\,\\sin\\theta",
          "explanation": "Using $\\cos(\\theta+\\alpha)=\\cos\\theta\\cos\\alpha-\\sin\\theta\\sin\\alpha$ gives a $\\cos\\theta$ term minus a $\\sin\\theta$ term, matching the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=1,\\qquad R\\sin\\alpha=\\sqrt{3}",
          "explanation": "Matching the coefficient of $\\cos\\theta$ and of $\\sin\\theta$ gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{1^2+(\\sqrt{3})^2}=\\sqrt{4}=2",
          "explanation": "Squaring and adding removes $\\alpha$, giving $R^2=1+3=4$ and the positive amplitude $R=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}=\\sqrt{3}\\Rightarrow\\alpha=\\dfrac{\\pi}{3}",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\sqrt{3}$; with both coefficients positive the acute angle is $\\alpha=\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the identity",
          "workingLatex": "2\\cos\\!\\left(\\theta+\\frac{\\pi}{3}\\right)=2\\!\\left(\\tfrac{1}{2}\\cos\\theta-\\tfrac{\\sqrt{3}}{2}\\sin\\theta\\right)=\\cos\\theta-\\sqrt{3}\\,\\sin\\theta",
          "explanation": "Expanding with $\\cos\\dfrac{\\pi}{3}=\\tfrac{1}{2}$ and $\\sin\\dfrac{\\pi}{3}=\\tfrac{\\sqrt{3}}{2}$ returns the original expression, completing the proof for part (a).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the equation",
          "workingLatex": "\\cos\\theta-\\sqrt{3}\\,\\sin\\theta=1\\Rightarrow 2\\cos\\!\\left(\\theta+\\frac{\\pi}{3}\\right)=1",
          "explanation": "Substituting the identity turns the equation into a simple cosine equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate the cosine",
          "workingLatex": "\\cos\\!\\left(\\theta+\\frac{\\pi}{3}\\right)=\\dfrac{1}{2}",
          "explanation": "Dividing both sides by $2$ leaves a standard cosine value with known exact solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Shift the interval",
          "workingLatex": "0\\le\\theta\\le2\\pi\\Rightarrow\\frac{\\pi}{3}\\le\\theta+\\frac{\\pi}{3}\\le\\frac{7\\pi}{3}",
          "explanation": "Solving for $\\theta+\\dfrac{\\pi}{3}$ means shifting the interval up by $\\dfrac{\\pi}{3}$, so the search range for the inside angle runs from $\\dfrac{\\pi}{3}$ to $\\dfrac{7\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the principal value",
          "workingLatex": "\\theta+\\frac{\\pi}{3}=\\frac{\\pi}{3}",
          "explanation": "The principal solution of $\\cos x=\\dfrac{1}{2}$ is $x=\\dfrac{\\pi}{3}$, which is the lower endpoint of the interval and so is included.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the symmetric value",
          "workingLatex": "\\theta+\\frac{\\pi}{3}=2\\pi-\\frac{\\pi}{3}=\\frac{5\\pi}{3}",
          "explanation": "Cosine is positive in the fourth quadrant as well, giving the paired solution $2\\pi-\\dfrac{\\pi}{3}=\\dfrac{5\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add a full turn",
          "workingLatex": "\\theta+\\frac{\\pi}{3}=\\frac{\\pi}{3}+2\\pi=\\frac{7\\pi}{3}",
          "explanation": "Adding $2\\pi$ to the principal value gives $\\dfrac{7\\pi}{3}$, the upper endpoint, which is still inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for θ",
          "workingLatex": "\\theta=0,\\;\\frac{4\\pi}{3},\\;2\\pi",
          "explanation": "Subtracting $\\dfrac{\\pi}{3}$ from each inside angle gives the three values of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the solutions",
          "workingLatex": "\\cos\\tfrac{4\\pi}{3}-\\sqrt{3}\\sin\\tfrac{4\\pi}{3}=-\\tfrac{1}{2}+\\tfrac{3}{2}=1\\ \\checkmark",
          "explanation": "All three values lie in $[0,2\\pi]$; checking $\\theta=\\dfrac{4\\pi}{3}$ gives $-\\tfrac{1}{2}-\\sqrt{3}\\cdot(-\\tfrac{\\sqrt3}{2})=-\\tfrac12+\\tfrac32=1$, confirming the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\cos\\theta-\\sqrt{3}\\,\\sin\\theta=2\\cos\\!\\left(\\theta+\\dfrac{\\pi}{3}\\right)$, as shown. (b) The solutions in $0\\le\\theta\\le2\\pi$ are $\\theta=0,\\;\\dfrac{4\\pi}{3},\\;2\\pi$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": [
      "r form",
      "harmonic form",
      "radians",
      "solving equations"
    ],
    "questionText": "Solve the equation $3\\sin\\theta-4\\cos\\theta=2$ for $0\\le\\theta\\le 4\\pi$, giving your answers in radians to $3$ decimal places. Use the form $R\\sin(\\theta-\\alpha)$ with $R>0$ and $0<\\alpha<\\dfrac{\\pi}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "3\\sin\\theta-4\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The cosine term is subtracted, so the matching single wave is $R\\sin(\\theta-\\alpha)$, whose expansion also subtracts the cosine term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta-\\alpha)=R\\cos\\alpha\\,\\sin\\theta-R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding the compound angle gives a $\\sin\\theta$ term minus a $\\cos\\theta$ term, matching the structure of the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=3,\\qquad R\\sin\\alpha=4",
          "explanation": "Matching the $\\sin\\theta$ and $\\cos\\theta$ coefficients gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{3^2+4^2}=\\sqrt{25}=5",
          "explanation": "Squaring and adding eliminates $\\alpha$, giving $R^2=9+16=25$ and $R=5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α in radians",
          "workingLatex": "\\tan\\alpha=\\dfrac{4}{3}\\Rightarrow\\alpha=0.9273",
          "explanation": "Dividing gives $\\tan\\alpha=\\tfrac{4}{3}$; since the interval is in radians we compute $\\alpha=\\arctan\\tfrac{4}{3}=0.9273$ radians, which is acute.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite and isolate the sine",
          "workingLatex": "5\\sin(\\theta-0.9273)=2\\Rightarrow\\sin(\\theta-0.9273)=0.4",
          "explanation": "Substituting the single wave and dividing by $5$ gives a plain sine value of $0.4$, which lies between $-1$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Shift the interval",
          "workingLatex": "0\\le\\theta\\le4\\pi\\Rightarrow-0.9273\\le\\theta-0.9273\\le 11.639",
          "explanation": "As we solve for $\\theta-0.9273$, the interval shifts down by $0.9273$; the upper limit becomes $4\\pi-0.9273\\approx11.639$, and the wide range means several solutions.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the principal value",
          "workingLatex": "\\theta-0.9273=0.4115",
          "explanation": "The principal solution is $\\arcsin0.4=0.4115$ radians, which sits inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the second-quadrant value",
          "workingLatex": "\\theta-0.9273=\\pi-0.4115=2.7301",
          "explanation": "Sine is also positive in the second quadrant, giving $\\pi-0.4115=2.7301$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add a full turn to each",
          "workingLatex": "\\theta-0.9273=6.6947,\\;9.0133",
          "explanation": "Adding $2\\pi\\approx6.2832$ to each base value gives $0.4115+2\\pi=6.6947$ and $2.7301+2\\pi=9.0133$, both still inside the shifted interval.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm no further solutions",
          "workingLatex": "0.4115+4\\pi=12.978>11.639\\ (\\text{reject})",
          "explanation": "A second full turn exceeds the upper limit of the interval, and nothing lies below the lower limit either, so these four values are complete.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "List the shifted solutions",
          "workingLatex": "\\theta-0.9273=0.4115,\\;2.7301,\\;6.6947,\\;9.0133",
          "explanation": "These are the four values of the shifted angle inside $[-0.9273,\\,11.639]$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for θ",
          "workingLatex": "\\theta=1.339,\\;3.657,\\;7.622,\\;9.941",
          "explanation": "Adding $0.9273$ back to each shifted angle undoes the substitution to give the four values of $\\theta$ to $3$ decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify a solution",
          "workingLatex": "3\\sin(1.339)-4\\cos(1.339)\\approx 2.919-0.919=2\\ \\checkmark",
          "explanation": "Checking $\\theta=1.339$ gives approximately $2$, confirming the solution; all four values lie in $0\\le\\theta\\le4\\pi$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\sin\\theta-4\\cos\\theta=5\\sin(\\theta-0.9273)$, where $\\alpha=\\arctan\\tfrac{4}{3}=0.9273$. The solutions in $0\\le\\theta\\le4\\pi$ are $\\theta=1.339,\\;3.657,\\;7.622,\\;9.941$ (to $3$ d.p.)."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "interval",
    "tags": [
      "r form",
      "harmonic form",
      "reciprocal",
      "range"
    ],
    "questionText": "The function $h$ is given by $h(\\theta)=\\dfrac{30}{12+6\\sin\\theta-8\\cos\\theta}$ for $0^\\circ\\le\\theta<360^\\circ$. Express $6\\sin\\theta-8\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$ with $R>0$ and $0^\\circ<\\alpha<90^\\circ$, and hence find the range of $h$, stating the value of $\\theta$ at which the greatest and least values occur.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the target form",
          "workingLatex": "6\\sin\\theta-8\\cos\\theta \\equiv R\\sin(\\theta-\\alpha)",
          "explanation": "The cosine term is subtracted, so we match against $R\\sin(\\theta-\\alpha)$; compressing the denominator's varying part to one wave reveals its range.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin(\\theta-\\alpha)=R\\cos\\alpha\\,\\sin\\theta-R\\sin\\alpha\\,\\cos\\theta",
          "explanation": "Expanding the compound angle gives a $\\sin\\theta$ term minus a $\\cos\\theta$ term to compare against the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=6,\\qquad R\\sin\\alpha=8",
          "explanation": "Matching the coefficients of $\\sin\\theta$ and $\\cos\\theta$ gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{6^2+8^2}=\\sqrt{100}=10",
          "explanation": "Squaring and adding eliminates $\\alpha$, giving $R^2=36+64=100$ and $R=10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{8}{6}=\\dfrac{4}{3}\\Rightarrow\\alpha=53.13^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{4}{3}$; with both coefficients positive $\\alpha$ is acute and equals $53.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite h",
          "workingLatex": "h(\\theta)=\\dfrac{30}{12+10\\sin(\\theta-53.13^\\circ)}",
          "explanation": "With the two terms merged, the denominator is $12$ plus a single sine wave of amplitude $10$, so its range is easy to find.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Bound the sine term",
          "workingLatex": "-1\\le\\sin(\\theta-53.13^\\circ)\\le 1",
          "explanation": "The sine term lies between $-1$ and $1$, and both extremes are reached over a full turn.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of the denominator",
          "workingLatex": "2\\le 12+10\\sin(\\theta-53.13^\\circ)\\le 22",
          "explanation": "Scaling by $10$ and adding $12$ gives a denominator that varies between $12-10=2$ and $12+10=22$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply reciprocal reasoning",
          "workingLatex": "\\text{denominator} > 0 \\;\\Rightarrow\\; h \\text{ greatest when denominator least}",
          "explanation": "The denominator stays positive, so the fraction is largest when the denominator is smallest and smallest when the denominator is largest. The extreme values follow at once, with no calculus.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Greatest value of h",
          "workingLatex": "h_{\\max}=\\dfrac{30}{2}=15",
          "explanation": "The smallest denominator $2$ gives the greatest value of $h$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Least value of h",
          "workingLatex": "h_{\\min}=\\dfrac{30}{22}=\\dfrac{15}{11}",
          "explanation": "The largest denominator $22$ gives the least value of $h$, which simplifies to $\\dfrac{15}{11}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Locate θ for the greatest value",
          "workingLatex": "\\sin(\\theta-53.13^\\circ)=-1\\Rightarrow\\theta-53.13^\\circ=270^\\circ\\Rightarrow\\theta=323.13^\\circ",
          "explanation": "The denominator is least when the sine term is $-1$, at an inside angle of $270^\\circ$; adding $53.13^\\circ$ gives $\\theta=323.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Locate θ for the least value",
          "workingLatex": "\\sin(\\theta-53.13^\\circ)=1\\Rightarrow\\theta-53.13^\\circ=90^\\circ\\Rightarrow\\theta=143.13^\\circ",
          "explanation": "The denominator is greatest when the sine term is $1$, at an inside angle of $90^\\circ$; adding $53.13^\\circ$ gives $\\theta=143.13^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the range",
          "workingLatex": "\\dfrac{15}{11}\\le h\\le 15",
          "explanation": "Collecting the least and greatest values gives the full range of $h$; both are attained at the angles just found, which lie in $0^\\circ\\le\\theta<360^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$6\\sin\\theta-8\\cos\\theta=10\\sin(\\theta-53.13^\\circ)$, so $h(\\theta)=\\dfrac{30}{12+10\\sin(\\theta-53.13^\\circ)}$. The range is $\\dfrac{15}{11}\\le h\\le 15$: the greatest value $15$ occurs at $\\theta=323.1^\\circ$ and the least value $\\dfrac{15}{11}\\approx1.36$ occurs at $\\theta=143.1^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.rsin-form.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "The form Rsin(θ + α)",
    "subtopicId": "al.y2.pure.rsin-form",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "r form",
      "harmonic form",
      "modelling",
      "maximum and minimum"
    ],
    "questionText": "The depth of water in a harbour is modelled by $D(t)=20+5\\sin(30t)^\\circ+12\\cos(30t)^\\circ$ metres, where $t$ is the time in hours after midnight and $0\\le t<12$. Express $5\\sin(30t)^\\circ+12\\cos(30t)^\\circ$ in the form $R\\sin\\bigl((30t+\\alpha)^\\circ\\bigr)$, and hence find: the maximum and minimum depths and when they first occur; the times when the depth is $25$ m; and the period of the model.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the identity for the oscillating part",
          "workingLatex": "5\\sin(30t)^\\circ+12\\cos(30t)^\\circ \\equiv R\\sin\\bigl((30t+\\alpha)^\\circ\\bigr)",
          "explanation": "The model adds a sine and a cosine of the same angle $30t^\\circ$, so we merge them into one wave to read off the amplitude and turning points directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the target",
          "workingLatex": "R\\sin\\bigl((30t+\\alpha)^\\circ\\bigr)=R\\cos\\alpha\\,\\sin(30t)^\\circ+R\\sin\\alpha\\,\\cos(30t)^\\circ",
          "explanation": "Expanding the compound angle writes the single wave as a multiple of $\\sin(30t)^\\circ$ plus a multiple of $\\cos(30t)^\\circ$, matching the model.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare coefficients",
          "workingLatex": "R\\cos\\alpha=5,\\qquad R\\sin\\alpha=12",
          "explanation": "Matching the coefficients of $\\sin(30t)^\\circ$ and $\\cos(30t)^\\circ$ gives these two equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find R",
          "workingLatex": "R=\\sqrt{5^2+12^2}=\\sqrt{169}=13",
          "explanation": "Squaring and adding eliminates $\\alpha$, giving $R^2=25+144=169$, so the amplitude of the oscillation is $13$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle α",
          "workingLatex": "\\tan\\alpha=\\dfrac{12}{5}\\Rightarrow\\alpha=67.38^\\circ",
          "explanation": "Dividing the equations gives $\\tan\\alpha=\\tfrac{12}{5}$; both coefficients are positive so $\\alpha$ is acute, giving $\\alpha=67.38^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the model",
          "workingLatex": "D(t)=20+13\\sin\\bigl((30t+67.38)^\\circ\\bigr)",
          "explanation": "Substituting the single wave shows the depth is a constant $20$ m plus a sine oscillation of amplitude $13$ m, which makes every feature of the model easy to read.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Maximum depth",
          "workingLatex": "D_{\\max}=20+13=33",
          "explanation": "The sine term is at most $1$, so the depth is greatest when it equals $1$, giving a maximum of $33$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "First time of maximum",
          "workingLatex": "30t+67.38=90\\Rightarrow t=\\dfrac{22.62}{30}=0.754",
          "explanation": "The sine term first reaches $1$ when the inside angle is $90^\\circ$; solving for $t$ gives about $0.75$ hours after midnight (roughly $00{:}45$).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Minimum depth",
          "workingLatex": "D_{\\min}=20-13=7",
          "explanation": "The sine term is at least $-1$, so the depth is least when it equals $-1$, giving a minimum of $7$ metres.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Time of minimum",
          "workingLatex": "30t+67.38=270\\Rightarrow t=\\dfrac{202.62}{30}=6.754",
          "explanation": "The sine term reaches $-1$ when the inside angle is $270^\\circ$; solving gives about $6.75$ hours after midnight.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set the depth equal to 25 m",
          "workingLatex": "20+13\\sin\\bigl((30t+67.38)^\\circ\\bigr)=25\\Rightarrow\\sin\\bigl((30t+67.38)^\\circ\\bigr)=\\dfrac{5}{13}=0.3846",
          "explanation": "Subtracting $20$ and dividing by $13$ turns the condition $D=25$ into a standard sine equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Shift the interval for the inside angle",
          "workingLatex": "0\\le t<12\\Rightarrow 67.38^\\circ\\le(30t+67.38)^\\circ<427.38^\\circ",
          "explanation": "Over the day $30t$ runs from $0^\\circ$ up to $360^\\circ$, so the inside angle runs from $67.38^\\circ$ to $427.38^\\circ$; we solve within this shifted range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve for the inside angle",
          "workingLatex": "(30t+67.38)^\\circ=157.38^\\circ,\\;382.62^\\circ",
          "explanation": "The principal value $\\arcsin0.3846=22.62^\\circ$ is below $67.38^\\circ$ and is rejected; the second-quadrant value $180^\\circ-22.62^\\circ=157.38^\\circ$ and its full-turn partner $22.62^\\circ+360^\\circ=382.62^\\circ$ both lie in range.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the times",
          "workingLatex": "30t=90\\Rightarrow t=3,\\qquad 30t=315.24\\Rightarrow t=10.508",
          "explanation": "Subtracting $67.38^\\circ$ from each inside angle and dividing by $30$ gives the two times when the depth is $25$ metres: exactly $t=3$ hours and about $t=10.51$ hours.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the period",
          "workingLatex": "T=\\dfrac{360^\\circ}{30}=12\\ \\text{hours}",
          "explanation": "The angle inside the sine increases by $30^\\circ$ per hour, so a full $360^\\circ$ cycle takes $12$ hours; the tide pattern repeats once per this interval.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Summarise the model",
          "workingLatex": "D(t)=20+13\\sin\\bigl((30t+67.38)^\\circ\\bigr)",
          "explanation": "Gathering the results: the depth swings between $7$ m and $33$ m, first peaks near $t=0.75$ h and bottoms near $t=6.75$ h, passes $25$ m at $t=3$ h and $t\\approx10.51$ h, and repeats every $12$ hours.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5\\sin(30t)^\\circ+12\\cos(30t)^\\circ=13\\sin\\bigl((30t+67.38)^\\circ\\bigr)$, so $D(t)=20+13\\sin\\bigl((30t+67.38)^\\circ\\bigr)$. The maximum depth is $33$ m, first at $t\\approx0.75$ h; the minimum depth is $7$ m at $t\\approx6.75$ h; the depth is $25$ m at $t=3$ h and $t\\approx10.51$ h; and the period is $12$ hours."
    }
  }
];
