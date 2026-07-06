import { Question } from "@/lib/types";

export const questions: Question[] = [
{
    "id": "al.y2.pure.small-angles.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Write down the small angle approximation for $\\sin\\theta$ when $\\theta$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the three standard small angle results",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad \\tan\\theta \\approx \\theta, \\qquad \\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "These three approximations are the ones quoted in the formula book. Writing them all out first means you can pick the one you need with confidence rather than trying to recall a single line under pressure.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the condition that the angle is in radians",
          "workingLatex": "\\theta \\text{ small}, \\quad \\theta \\text{ in radians}",
          "explanation": "The approximations only hold when $\\theta$ is measured in radians. In radians the angle and its sine share the same natural scale near zero, which is exactly what makes $\\sin\\theta$ and $\\theta$ almost equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the sine result",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The question asks specifically for $\\sin\\theta$, so we single out the first of the three results and leave the others aside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain why sine and the angle are so close",
          "workingLatex": "\\theta \\to 0 \\;\\Rightarrow\\; \\sin\\theta \\to \\theta",
          "explanation": "Near zero the graph of $y = \\sin\\theta$ hugs the straight line $y = \\theta$, so for a tiny angle the two values are almost indistinguishable. That is the picture behind the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note how good the approximation is",
          "workingLatex": "\\theta = 0.1 \\;\\Rightarrow\\; \\sin\\theta \\approx 0.1, \\quad \\sin 0.1 = 0.0998\\ldots",
          "explanation": "A quick check with $\\theta = 0.1$ shows the estimate $0.1$ against the true $0.0998$, so the error is tiny. This reassures us the rule is genuinely accurate for small angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "This is the required result, valid whenever $\\theta$ is a small angle in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\theta \\approx \\theta$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Write down the small angle approximation for $\\cos\\theta$ when $\\theta$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the three standard small angle results",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad \\tan\\theta \\approx \\theta, \\qquad \\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "Listing all three results first lets you pick the correct one cleanly. The cosine result is the odd one out because it is not simply $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the condition that the angle is in radians",
          "workingLatex": "\\theta \\text{ small}, \\quad \\theta \\text{ in radians}",
          "explanation": "As with the sine and tangent rules, the cosine approximation is only valid when $\\theta$ is a small angle measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the cosine result",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "The question asks for $\\cos\\theta$, so we take the third result. Unlike sine and tangent, cosine keeps a squared term because it starts at $1$ and only dips slowly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain why cosine starts at one",
          "workingLatex": "\\theta = 0 \\;\\Rightarrow\\; \\cos\\theta = 1",
          "explanation": "At $\\theta = 0$ the cosine is exactly $1$, so any approximation must begin at $1$. The curve then falls away gently, and the $-\\tfrac{1}{2}\\theta^2$ term captures that gentle drop.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approximation on a small value",
          "workingLatex": "\\theta = 0.1 \\;\\Rightarrow\\; 1 - \\tfrac{1}{2}(0.1)^2 = 0.995, \\quad \\cos 0.1 = 0.9950\\ldots",
          "explanation": "Testing $\\theta = 0.1$ gives $0.995$, which matches the true cosine to four decimal places, confirming the rule works well for small angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "This is the required result, valid whenever $\\theta$ is a small angle in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "tan"],
    "questionText": "Write down the small angle approximation for $\\tan\\theta$ when $\\theta$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the three standard small angle results",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad \\tan\\theta \\approx \\theta, \\qquad \\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "Writing out all three results first makes it easy to lift the one we need. Both sine and tangent approximate to $\\theta$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the condition that the angle is in radians",
          "workingLatex": "\\theta \\text{ small}, \\quad \\theta \\text{ in radians}",
          "explanation": "The tangent approximation, like the others, is only valid when $\\theta$ is a small angle in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Select the tangent result",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "The question asks for $\\tan\\theta$, so we take the middle result. It matches the sine result because for tiny angles sine and cosine give $\\tan\\theta \\approx \\theta / 1 = \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain the result using the ratio of sine to cosine",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\approx \\frac{\\theta}{1} = \\theta",
          "explanation": "Since $\\sin\\theta \\approx \\theta$ and $\\cos\\theta \\approx 1$ for small angles, dividing them leaves $\\theta$. This shows the tangent result follows naturally from the other two.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the approximation on a small value",
          "workingLatex": "\\theta = 0.1 \\;\\Rightarrow\\; \\tan\\theta \\approx 0.1, \\quad \\tan 0.1 = 0.1003\\ldots",
          "explanation": "A test with $\\theta = 0.1$ gives $0.1$ against the true $0.1003$, so the error is very small, confirming the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "This is the required result, valid whenever $\\theta$ is a small angle in radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\theta \\approx \\theta$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Use a small angle approximation to estimate $\\sin(0.1)$, where $0.1$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine is almost equal to the angle itself, so this is the rule that will give us a quick estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.1 \\text{ radians (small)}",
          "explanation": "The value $0.1$ is close to zero and stated in radians, so the approximation applies and we can use it safely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Picture the sine curve near zero",
          "workingLatex": "\\theta \\to 0 \\;\\Rightarrow\\; \\sin\\theta \\to \\theta",
          "explanation": "Near zero the graph of $y = \\sin\\theta$ runs almost along the straight line $y = \\theta$, so the sine of a tiny angle is barely different from the angle itself. That is why swapping $\\sin(0.1)$ for $0.1$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\sin(0.1) \\approx 0.1",
          "explanation": "Replacing $\\theta$ with $0.1$ turns the rule directly into the estimate, since the approximation says the sine equals the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the estimate",
          "workingLatex": "\\sin(0.1) \\approx 0.1",
          "explanation": "The estimated value of the sine is simply $0.1$, obtained with no calculation beyond reading off the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\sin 0.1 = 0.09983\\ldots",
          "explanation": "The calculator value is $0.0998$, extremely close to our estimate of $0.1$. The tiny gap shows the approximation is accurate for such a small angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(0.1) \\approx 0.1$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "tan"],
    "questionText": "Use a small angle approximation to estimate $\\tan(0.2)$, where $0.2$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the tangent is almost equal to the angle, so this rule gives a fast estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.2 \\text{ radians (small)}",
          "explanation": "The value $0.2$ is close to zero and measured in radians, so the tangent approximation is valid here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why tangent matches the angle near zero",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\approx \\frac{\\theta}{1} = \\theta",
          "explanation": "For a tiny angle the sine is about $\\theta$ and the cosine is about $1$, so their ratio is again about $\\theta$. This is the reasoning that lets us replace $\\tan(0.2)$ by $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\tan(0.2) \\approx 0.2",
          "explanation": "Putting $\\theta = 0.2$ into $\\tan\\theta \\approx \\theta$ gives the estimate directly, with no further working needed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the estimate",
          "workingLatex": "\\tan(0.2) \\approx 0.2",
          "explanation": "The estimated value of the tangent is $0.2$, read straight off the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\tan 0.2 = 0.2027\\ldots",
          "explanation": "The calculator gives $0.2027$, very near our estimate of $0.2$. The small difference is expected because the angle is not quite negligible, but the approximation is still good.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(0.2) \\approx 0.2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Use a small angle approximation to estimate $\\cos(0.1)$, where $0.1$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine is close to $1$, dropping by a small amount governed by $\\tfrac{1}{2}\\theta^2$. This is the rule we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.1 \\text{ radians (small)}",
          "explanation": "The angle $0.1$ is close to zero and given in radians, so the cosine approximation applies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\cos(0.1) \\approx 1 - \\tfrac{1}{2}(0.1)^2",
          "explanation": "Replacing $\\theta$ with $0.1$ sets up the arithmetic. The squared term is what makes cosine dip below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the angle and halve it",
          "workingLatex": "\\tfrac{1}{2}(0.1)^2 = \\tfrac{1}{2}(0.01) = 0.005",
          "explanation": "Squaring $0.1$ gives $0.01$, and halving that gives $0.005$. This is the small amount by which the cosine falls short of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from one",
          "workingLatex": "\\cos(0.1) \\approx 1 - 0.005 = 0.995",
          "explanation": "Taking the correction away from $1$ leaves $0.995$, our estimate for the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\cos 0.1 = 0.99500\\ldots",
          "explanation": "The calculator gives $0.99500$, matching our estimate to several decimal places, which confirms the approximation is excellent for this angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(0.1) \\approx 0.995$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Use a small angle approximation to estimate $\\cos(0.2)$, where $0.2$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine sits just below $1$, and the $\\tfrac{1}{2}\\theta^2$ term measures the drop. This is the rule to use.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.2 \\text{ radians (small)}",
          "explanation": "The angle $0.2$ is near zero and measured in radians, so the cosine approximation is valid.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\cos(0.2) \\approx 1 - \\tfrac{1}{2}(0.2)^2",
          "explanation": "Putting $\\theta = 0.2$ into the formula sets up the calculation, with the squared term controlling the size of the dip.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the angle and halve it",
          "workingLatex": "\\tfrac{1}{2}(0.2)^2 = \\tfrac{1}{2}(0.04) = 0.02",
          "explanation": "Squaring $0.2$ gives $0.04$, and halving gives $0.02$, the amount by which the cosine falls below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from one",
          "workingLatex": "\\cos(0.2) \\approx 1 - 0.02 = 0.98",
          "explanation": "Subtracting the correction from $1$ gives $0.98$ as the estimate for the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\cos 0.2 = 0.98007\\ldots",
          "explanation": "The calculator value $0.98007$ is very close to our $0.98$, confirming the approximation remains accurate at this slightly larger angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(0.2) \\approx 0.98$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Use a small angle approximation to estimate $\\sin(0.05)$, where $0.05$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine is almost the same as the angle, so this rule provides an instant estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.05 \\text{ radians (small)}",
          "explanation": "The angle $0.05$ is very close to zero and given in radians, so the approximation is well suited here and should be very accurate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Picture the sine curve near zero",
          "workingLatex": "\\theta \\to 0 \\;\\Rightarrow\\; \\sin\\theta \\to \\theta",
          "explanation": "Very near zero the graph of $y = \\sin\\theta$ lies almost on top of the line $y = \\theta$, so the sine of a tiny angle is practically the angle itself. This justifies replacing $\\sin(0.05)$ by $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\sin(0.05) \\approx 0.05",
          "explanation": "Replacing $\\theta$ with $0.05$ gives the estimate directly, since the rule says the sine equals the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the estimate",
          "workingLatex": "\\sin(0.05) \\approx 0.05",
          "explanation": "The estimated value is simply $0.05$, read straight from the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\sin 0.05 = 0.049979\\ldots",
          "explanation": "The calculator gives $0.04998$, almost identical to $0.05$. Because the angle is so small the approximation is even better here than for $0.1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(0.05) \\approx 0.05$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Write down the small angle approximation for $\\sin(3x)$, where $x$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The standard result approximates the sine of any small angle by the angle itself. We will apply it with the angle being $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the radians condition",
          "workingLatex": "\\theta \\text{ in radians, small}",
          "explanation": "The rule requires the angle inside the sine to be small and in radians. Here that angle is $3x$, so $3x$ must be small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the sine",
          "workingLatex": "\\theta = 3x",
          "explanation": "The whole quantity inside the sine is $3x$, so we treat $3x$ as a single small angle and match it to $\\theta$ in the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the argument into the approximation",
          "workingLatex": "\\sin(3x) \\approx 3x",
          "explanation": "Replacing $\\theta$ by $3x$ in $\\sin\\theta \\approx \\theta$ turns the general rule into the specific approximation for $\\sin(3x)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result and note validity",
          "workingLatex": "\\sin(3x) \\approx 3x \\quad (3x \\text{ small})",
          "explanation": "The approximation is $3x$, valid provided $3x$ itself is small, which holds when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note how the graph behaves near zero",
          "workingLatex": "x \\to 0 \\;\\Rightarrow\\; \\sin(3x) \\to 3x",
          "explanation": "Close to the origin the graph of $y = \\sin(3x)$ follows the straight line $y = 3x$, so the curve and the line are almost the same there. This is the geometric picture behind the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin(3x) \\approx 3x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "tan"],
    "questionText": "Write down the small angle approximation for $\\tan(5x)$, where $x$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "The standard result approximates the tangent of a small angle by the angle itself. We apply it with the angle equal to $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the radians condition",
          "workingLatex": "\\theta \\text{ in radians, small}",
          "explanation": "The rule needs the angle inside the tangent to be small and in radians. Here that angle is $5x$, so $5x$ must be small.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the tangent",
          "workingLatex": "\\theta = 5x",
          "explanation": "The quantity inside the tangent is $5x$, so we treat $5x$ as one small angle and match it to $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the argument into the approximation",
          "workingLatex": "\\tan(5x) \\approx 5x",
          "explanation": "Replacing $\\theta$ by $5x$ in $\\tan\\theta \\approx \\theta$ gives the approximation for $\\tan(5x)$ straight away.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result and note validity",
          "workingLatex": "\\tan(5x) \\approx 5x \\quad (5x \\text{ small})",
          "explanation": "The approximation is $5x$, valid as long as $5x$ is small, which is the case when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note how the graph behaves near zero",
          "workingLatex": "x \\to 0 \\;\\Rightarrow\\; \\tan(5x) \\to 5x",
          "explanation": "Near the origin the graph of $y = \\tan(5x)$ rises along the straight line $y = 5x$, so the curve and the line are almost indistinguishable there. This is why the linear approximation works.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(5x) \\approx 5x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Write down the small angle approximation for $\\cos(2x)$, where $x$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "The standard cosine result stays close to $1$ and subtracts $\\tfrac{1}{2}\\theta^2$. We will apply it with the angle equal to $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the radians condition",
          "workingLatex": "\\theta \\text{ in radians, small}",
          "explanation": "The rule requires the angle inside the cosine, which is $2x$, to be small and in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the cosine",
          "workingLatex": "\\theta = 2x",
          "explanation": "The quantity inside the cosine is $2x$, so we substitute $\\theta = 2x$ into the standard result.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the argument into the approximation",
          "workingLatex": "\\cos(2x) \\approx 1 - \\tfrac{1}{2}(2x)^2",
          "explanation": "Replacing $\\theta$ by $2x$ sets up the expression. The key difference from sine and tangent is that the argument gets squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the argument",
          "workingLatex": "(2x)^2 = 4x^2",
          "explanation": "Squaring $2x$ means squaring both the $2$ and the $x$, giving $4x^2$. Forgetting to square the coefficient is a common slip here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared term",
          "workingLatex": "\\tfrac{1}{2}(4x^2) = 2x^2",
          "explanation": "Halving $4x^2$ gives $2x^2$, the amount subtracted from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified result",
          "workingLatex": "\\cos(2x) \\approx 1 - 2x^2 \\quad (2x \\text{ small})",
          "explanation": "Combining the pieces gives $1 - 2x^2$, valid when $2x$ is small, that is when $x$ is small.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(2x) \\approx 1 - 2x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Write down the small angle approximation for $\\cos(4x)$, where $x$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "The standard cosine result subtracts $\\tfrac{1}{2}\\theta^2$ from $1$. Here the angle will be $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the radians condition",
          "workingLatex": "\\theta \\text{ in radians, small}",
          "explanation": "The angle inside the cosine is $4x$, and it must be small and in radians for the approximation to hold.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the cosine",
          "workingLatex": "\\theta = 4x",
          "explanation": "The quantity inside the cosine is $4x$, so we substitute $\\theta = 4x$ into the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the argument into the approximation",
          "workingLatex": "\\cos(4x) \\approx 1 - \\tfrac{1}{2}(4x)^2",
          "explanation": "Replacing $\\theta$ by $4x$ prepares the expression. Remember the whole argument $4x$ is squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the argument",
          "workingLatex": "(4x)^2 = 16x^2",
          "explanation": "Squaring $4x$ squares both the $4$ and the $x$, giving $16x^2$. The coefficient must be squared too.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared term",
          "workingLatex": "\\tfrac{1}{2}(16x^2) = 8x^2",
          "explanation": "Halving $16x^2$ gives $8x^2$, the amount taken away from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the simplified result",
          "workingLatex": "\\cos(4x) \\approx 1 - 8x^2 \\quad (4x \\text{ small})",
          "explanation": "Putting the parts together gives $1 - 8x^2$, valid provided $4x$ is small, that is when $x$ is small.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos(4x) \\approx 1 - 8x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Write down the small angle approximation for $\\sin\\left(\\tfrac{1}{2}x\\right)$, where $x$ is small and measured in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The standard result approximates the sine of a small angle by the angle itself. Here the angle is $\\tfrac{1}{2}x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the radians condition",
          "workingLatex": "\\theta \\text{ in radians, small}",
          "explanation": "The angle inside the sine, $\\tfrac{1}{2}x$, must be small and in radians for the approximation to apply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the sine",
          "workingLatex": "\\theta = \\tfrac{1}{2}x",
          "explanation": "The quantity inside the sine is $\\tfrac{1}{2}x$, so we treat it as a single small angle matched to $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the argument into the approximation",
          "workingLatex": "\\sin\\!\\left(\\tfrac{1}{2}x\\right) \\approx \\tfrac{1}{2}x",
          "explanation": "Replacing $\\theta$ by $\\tfrac{1}{2}x$ in $\\sin\\theta \\approx \\theta$ gives the approximation immediately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the result and note validity",
          "workingLatex": "\\sin\\!\\left(\\tfrac{1}{2}x\\right) \\approx \\tfrac{1}{2}x \\quad (\\tfrac{1}{2}x \\text{ small})",
          "explanation": "The approximation is $\\tfrac{1}{2}x$, valid whenever $\\tfrac{1}{2}x$ is small, which holds when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note how the graph behaves near zero",
          "workingLatex": "x \\to 0 \\;\\Rightarrow\\; \\sin\\!\\left(\\tfrac{1}{2}x\\right) \\to \\tfrac{1}{2}x",
          "explanation": "Close to the origin the graph of $y = \\sin\\!\\left(\\tfrac{1}{2}x\\right)$ hugs the straight line $y = \\tfrac{1}{2}x$, so the two are almost equal there. This picture is the reason the approximation is trustworthy.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\left(\\tfrac{1}{2}x\\right) \\approx \\tfrac{1}{2}x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "tan"],
    "questionText": "Use a small angle approximation to estimate $\\tan(0.15)$, where $0.15$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the tangent is almost equal to the angle, so this rule gives a quick estimate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.15 \\text{ radians (small)}",
          "explanation": "The angle $0.15$ is close to zero and stated in radians, so the tangent approximation is valid here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "See why tangent matches the angle near zero",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\approx \\frac{\\theta}{1} = \\theta",
          "explanation": "For a small angle the sine is about $\\theta$ and the cosine is about $1$, so dividing them leaves roughly $\\theta$. This is the reasoning that lets us replace $\\tan(0.15)$ by $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the value into the approximation",
          "workingLatex": "\\tan(0.15) \\approx 0.15",
          "explanation": "Putting $\\theta = 0.15$ into $\\tan\\theta \\approx \\theta$ gives the estimate directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the estimate",
          "workingLatex": "\\tan(0.15) \\approx 0.15",
          "explanation": "The estimated value of the tangent is $0.15$, read straight off the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sense-check against the true value",
          "workingLatex": "\\tan 0.15 = 0.15114\\ldots",
          "explanation": "The calculator gives $0.15114$, very close to our estimate of $0.15$. The small gap is expected and confirms the approximation is reliable for this angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan(0.15) \\approx 0.15$"
    }
  },
{
    "id": "al.y2.pure.small-angles.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "tan"],
    "questionText": "Write down the small angle approximation for $\\tan 2x$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base approximation for tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\tan\\theta \\approx \\theta$, because near zero the graph of $y = \\tan\\theta$ runs almost exactly along the line $y = \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for the rule",
          "workingLatex": "\\theta \\text{ small, in radians}",
          "explanation": "The rule only holds when $\\theta$ is close to $0$ and measured in radians, since it comes from treating the angle as arc length on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the angle inside the tangent",
          "workingLatex": "\\theta = 2x",
          "explanation": "The angle here is $2x$, so we match $\\theta$ to $2x$ and reuse the same rule with $2x$ in place of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the new angle is also small",
          "workingLatex": "x \\to 0 \\;\\Rightarrow\\; 2x \\to 0",
          "explanation": "If $x$ is small then $2x$ is also small, so the approximation stays valid for the doubled angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the angle into the approximation",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "Replacing $\\theta$ with $2x$ gives $\\tan 2x \\approx 2x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "This is the required small angle approximation for $\\tan 2x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 2x \\approx 2x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Write down the small angle approximation for $\\sin 4x$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the base approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\sin\\theta \\approx \\theta$, because near zero the sine curve is almost straight and follows the line $y = \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the condition for the rule",
          "workingLatex": "\\theta \\text{ small, in radians}",
          "explanation": "This only works when $\\theta$ is near $0$ and in radians, as the rule comes from measuring the angle as arc length on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the angle inside the sine",
          "workingLatex": "\\theta = 4x",
          "explanation": "The angle here is $4x$, so we match $\\theta$ to $4x$ and apply the same rule with $4x$ in place of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the new angle is also small",
          "workingLatex": "x \\to 0 \\;\\Rightarrow\\; 4x \\to 0",
          "explanation": "If $x$ is small then $4x$ is also small, so the approximation remains valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the angle into the approximation",
          "workingLatex": "\\sin 4x \\approx 4x",
          "explanation": "Replacing $\\theta$ with $4x$ gives $\\sin 4x \\approx 4x$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\sin 4x \\approx 4x",
          "explanation": "This is the required small angle approximation for $\\sin 4x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 4x \\approx 4x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Use a small angle approximation to estimate the value of $\\cos 0.3$, where $0.3$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians, $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$, because the cosine curve dips gently below $1$ like a downward parabola near zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.3 \\text{ rad, small}",
          "explanation": "Here $\\theta = 0.3$ radians, which is close enough to $0$ for the approximation to be accurate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the angle",
          "workingLatex": "\\theta^2 = 0.3^2 = 0.09",
          "explanation": "We need $\\theta^2$ first, so squaring $0.3$ gives $0.09$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve the squared value",
          "workingLatex": "\\tfrac{1}{2}\\theta^2 = \\tfrac{1}{2}(0.09) = 0.045",
          "explanation": "The correction term is half of $\\theta^2$, which is $0.045$; this is how far below $1$ the cosine sits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract from 1",
          "workingLatex": "\\cos 0.3 \\approx 1 - 0.045 = 0.955",
          "explanation": "Subtracting the correction from $1$ gives the estimate $0.955$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the estimate",
          "workingLatex": "\\cos 0.3 \\approx 0.955",
          "explanation": "So the small angle approximation gives $\\cos 0.3 \\approx 0.955$, which matches the calculator value very closely.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 0.3 \\approx 0.955$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["small angle approximations", "cos"],
    "questionText": "Find the small angle approximation for $\\cos\\left(\\tfrac{1}{2}x\\right)$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians, $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$, since cosine curves gently down from $1$ near zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the angle",
          "workingLatex": "\\theta = \\tfrac{1}{2}x",
          "explanation": "The angle inside the cosine is $\\tfrac{1}{2}x$, so we substitute $\\theta = \\tfrac{1}{2}x$ into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the angle",
          "workingLatex": "\\theta^2 = \\left(\\tfrac{1}{2}x\\right)^2 = \\dfrac{x^2}{4}",
          "explanation": "Squaring $\\tfrac{1}{2}x$ squares both the $\\tfrac{1}{2}$ and the $x$, giving $\\dfrac{x^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve the squared value",
          "workingLatex": "\\tfrac{1}{2}\\theta^2 = \\tfrac{1}{2}\\cdot\\dfrac{x^2}{4} = \\dfrac{x^2}{8}",
          "explanation": "The correction term is half of $\\dfrac{x^2}{4}$, which simplifies to $\\dfrac{x^2}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the approximation",
          "workingLatex": "\\cos\\left(\\tfrac{1}{2}x\\right) \\approx 1 - \\dfrac{x^2}{8}",
          "explanation": "Putting the correction back into $1 - \\tfrac{1}{2}\\theta^2$ gives $1 - \\dfrac{x^2}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\cos\\left(\\tfrac{1}{2}x\\right) \\approx 1 - \\dfrac{x^2}{8}",
          "explanation": "This is the required approximation for $\\cos\\left(\\tfrac{1}{2}x\\right)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\left(\\tfrac{1}{2}x\\right) \\approx 1 - \\dfrac{x^2}{8}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["small angle approximations", "sin"],
    "questionText": "Use a small angle approximation to estimate the value of $\\sin 0.02$, where $0.02$ is in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\sin\\theta \\approx \\theta$, because near zero the sine curve is almost a straight line through the origin with gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians and small",
          "workingLatex": "\\theta = 0.02 \\text{ rad, very small}",
          "explanation": "The rule only works in radians, and here $\\theta = 0.02$ radians is extremely close to $0$, so the approximation will be very accurate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the angle to substitute",
          "workingLatex": "\\theta = 0.02",
          "explanation": "We match $\\theta$ in the rule to the given value $0.02$, ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the approximation",
          "workingLatex": "\\sin 0.02 \\approx 0.02",
          "explanation": "Replacing $\\theta$ with $0.02$ gives the estimate straight away, since the sine of a small angle is just the angle itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the true value as a check",
          "workingLatex": "\\sin 0.02 = 0.0199987\\ldots",
          "explanation": "A calculator gives $\\sin 0.02 \\approx 0.0199987$, which agrees with our estimate $0.02$ to several decimal places — a reassuring sense-check that the approximation is sound.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the estimate",
          "workingLatex": "\\sin 0.02 \\approx 0.02",
          "explanation": "So the small angle approximation gives $\\sin 0.02 \\approx 0.02$, confirmed as accurate by the comparison above.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 0.02 \\approx 0.02$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "sin", "radians"],
    "questionText": "Use a small angle approximation to estimate $\\sin 6^{\\circ}$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\sin\\theta \\approx \\theta$; note the angle must be in radians for this rule to work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the need to convert to radians",
          "workingLatex": "6^{\\circ} \\text{ must become radians first}",
          "explanation": "The approximation is only valid in radians, so we must convert $6^{\\circ}$ before applying it — using degrees would give a wildly wrong answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the degree-to-radian conversion",
          "workingLatex": "\\text{radians} = \\text{degrees} \\times \\dfrac{\\pi}{180}",
          "explanation": "To convert we multiply by $\\dfrac{\\pi}{180}$, since $180^{\\circ}$ equals $\\pi$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the angle",
          "workingLatex": "6^{\\circ} = 6 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{30}",
          "explanation": "Multiplying $6$ by $\\dfrac{\\pi}{180}$ simplifies to $\\dfrac{\\pi}{30}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the radian measure",
          "workingLatex": "\\dfrac{\\pi}{30} \\approx 0.10472",
          "explanation": "As a decimal, $\\dfrac{\\pi}{30} \\approx 0.10472$, which is small enough for the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the approximation",
          "workingLatex": "\\sin 6^{\\circ} \\approx 0.10472",
          "explanation": "Since $\\sin\\theta \\approx \\theta$, the sine is approximately equal to the radian measure itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "0.10472 \\approx 0.105",
          "explanation": "Rounding to 3 significant figures gives $0.105$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the estimate",
          "workingLatex": "\\sin 6^{\\circ} \\approx 0.105",
          "explanation": "So $\\sin 6^{\\circ} \\approx 0.105$, matching the calculator value to 3 significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 6^{\\circ} \\approx 0.105$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["small angle approximations", "tan", "radians"],
    "questionText": "Use a small angle approximation to estimate $\\tan 3^{\\circ}$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\tan\\theta \\approx \\theta$; as always the angle must be in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the need to convert to radians",
          "workingLatex": "3^{\\circ} \\text{ must become radians first}",
          "explanation": "The rule fails in degrees, so we convert $3^{\\circ}$ to radians before applying it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the degree-to-radian conversion",
          "workingLatex": "\\text{radians} = \\text{degrees} \\times \\dfrac{\\pi}{180}",
          "explanation": "We multiply by $\\dfrac{\\pi}{180}$ because $180^{\\circ} = \\pi$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Convert the angle",
          "workingLatex": "3^{\\circ} = 3 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{60}",
          "explanation": "Multiplying $3$ by $\\dfrac{\\pi}{180}$ simplifies to $\\dfrac{\\pi}{60}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the radian measure",
          "workingLatex": "\\dfrac{\\pi}{60} \\approx 0.05236",
          "explanation": "As a decimal, $\\dfrac{\\pi}{60} \\approx 0.05236$, which is small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the approximation",
          "workingLatex": "\\tan 3^{\\circ} \\approx 0.05236",
          "explanation": "Since $\\tan\\theta \\approx \\theta$, the tangent is approximately the radian measure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 significant figures",
          "workingLatex": "0.05236 \\approx 0.0524",
          "explanation": "Rounding to 3 significant figures gives $0.0524$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the estimate",
          "workingLatex": "\\tan 3^{\\circ} \\approx 0.0524",
          "explanation": "So $\\tan 3^{\\circ} \\approx 0.0524$, in close agreement with a calculator.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan 3^{\\circ} \\approx 0.0524$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["small angle approximations", "cos", "radians"],
    "questionText": "Use a small angle approximation to estimate $\\cos 5^{\\circ}$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians, $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$, with $\\theta$ measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the need to convert to radians",
          "workingLatex": "5^{\\circ} \\text{ must become radians first}",
          "explanation": "The formula only works in radians, so we convert $5^{\\circ}$ before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Convert the angle",
          "workingLatex": "5^{\\circ} = 5 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{36}",
          "explanation": "Multiplying $5$ by $\\dfrac{\\pi}{180}$ gives $\\dfrac{\\pi}{36}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the radian measure",
          "workingLatex": "\\dfrac{\\pi}{36} \\approx 0.08727",
          "explanation": "As a decimal, $\\dfrac{\\pi}{36} \\approx 0.08727$, small enough for the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the angle",
          "workingLatex": "\\theta^2 \\approx 0.08727^2 \\approx 0.007616",
          "explanation": "Squaring the radian measure gives about $0.007616$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared value",
          "workingLatex": "\\tfrac{1}{2}\\theta^2 \\approx 0.003808",
          "explanation": "Halving gives the correction term $0.003808$, the small amount cosine drops below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract from 1",
          "workingLatex": "\\cos 5^{\\circ} \\approx 1 - 0.003808 = 0.996192",
          "explanation": "Subtracting from $1$ gives $0.996192$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round and state the estimate",
          "workingLatex": "\\cos 5^{\\circ} \\approx 0.996",
          "explanation": "Rounding to 3 significant figures gives $\\cos 5^{\\circ} \\approx 0.996$, matching a calculator.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 5^{\\circ} \\approx 0.996$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["small angle approximations", "sin", "limit"],
    "questionText": "Show that $\\dfrac{\\sin 2x}{x} \\approx 2$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{\\sin 2x}{x}",
          "explanation": "We start from the expression to be approximated so we can see which trig term to replace.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small angles in radians, $\\sin\\theta \\approx \\theta$, which lets us swap the sine for a simple algebraic term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, in radians}",
          "explanation": "The replacement is only valid because $x$ (and hence $2x$) is small and measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the angle in the numerator",
          "workingLatex": "\\theta = 2x",
          "explanation": "The angle inside the sine is $2x$, so we apply the rule with $2x$ in place of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the approximation",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "Replacing the sine gives $\\sin 2x \\approx 2x$ for the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{\\sin 2x}{x} \\approx \\dfrac{2x}{x}",
          "explanation": "Putting the approximated numerator over the same denominator gives $\\dfrac{2x}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2x}{x} = 2 \\quad (x \\neq 0)",
          "explanation": "Since $x$ is small but not zero, we can cancel it from top and bottom, leaving $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{\\sin 2x}{x} \\to 2 \\text{ as } x \\to 0",
          "explanation": "This constant $2$ is the value the expression approaches as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\dfrac{\\sin 2x}{x} \\approx 2",
          "explanation": "Hence for small $x$, $\\dfrac{\\sin 2x}{x} \\approx 2$ as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2x}{x} \\approx 2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["small angle approximations", "sin", "limit"],
    "questionText": "Simplify $\\dfrac{\\sin 3x}{\\sin x}$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{\\sin 3x}{\\sin x}",
          "explanation": "We start from the given fraction, which has a sine in both numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small angles in radians, $\\sin\\theta \\approx \\theta$, so each sine can be replaced by its angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, in radians}",
          "explanation": "Both $x$ and $3x$ are small when $x$ is small, so the replacement is valid for each sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the numerator",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "Applying the rule with angle $3x$ replaces the top by $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the denominator",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "Applying the rule with angle $x$ replaces the bottom by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{\\sin 3x}{\\sin x} \\approx \\dfrac{3x}{x}",
          "explanation": "Both approximations together turn the fraction into $\\dfrac{3x}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{3x}{x} = 3 \\quad (x \\neq 0)",
          "explanation": "Since $x \\neq 0$ we cancel it from top and bottom, leaving $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{\\sin 3x}{\\sin x} \\to 3 \\text{ as } x \\to 0",
          "explanation": "The constant $3$ is the value the expression approaches as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\dfrac{\\sin 3x}{\\sin x} \\approx 3",
          "explanation": "So for small $x$, the fraction simplifies to approximately $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 3x}{\\sin x} \\approx 3$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["small angle approximations", "tan", "limit"],
    "questionText": "Simplify $\\dfrac{\\tan 4x}{2x}$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{\\tan 4x}{2x}",
          "explanation": "We begin from the given fraction, which has a tangent on top and a linear term below.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For small angles in radians, $\\tan\\theta \\approx \\theta$, so the tangent can be replaced by its angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, in radians}",
          "explanation": "Since $x$ is small, $4x$ is also small, so the replacement is valid here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the angle",
          "workingLatex": "\\theta = 4x",
          "explanation": "The angle inside the tangent is $4x$, so we use the rule with $4x$ in place of $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the approximation",
          "workingLatex": "\\tan 4x \\approx 4x",
          "explanation": "Replacing the tangent gives $4x$ for the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{\\tan 4x}{2x} \\approx \\dfrac{4x}{2x}",
          "explanation": "Substituting gives the algebraic fraction $\\dfrac{4x}{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{4x}{2x} = \\dfrac{4}{2} \\quad (x \\neq 0)",
          "explanation": "As $x \\neq 0$ we cancel the $x$ from top and bottom, leaving $\\dfrac{4}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the constant",
          "workingLatex": "\\dfrac{4}{2} = 2",
          "explanation": "This simplifies to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret and state the result",
          "workingLatex": "\\dfrac{\\tan 4x}{2x} \\to 2 \\text{ as } x \\to 0",
          "explanation": "So the fraction approaches $2$ as $x \\to 0$; for small $x$ it is approximately $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\tan 4x}{2x} \\approx 2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "cos", "limit"],
    "questionText": "Find an approximation for $\\dfrac{1 - \\cos x}{x^2}$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2}",
          "explanation": "We start from the given fraction, which contains a cosine we can approximate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For small angles in radians, $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$, keeping the quadratic term since the constant terms will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, in radians}",
          "explanation": "The approximation holds because $x$ is small and in radians.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the cosine",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "Using angle $x$ gives $\\cos x \\approx 1 - \\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\cos x \\approx 1 - \\left(1 - \\tfrac{1}{2}x^2\\right) = \\tfrac{1}{2}x^2",
          "explanation": "The two $1$s cancel, leaving just $\\tfrac{1}{2}x^2$ on top — this is why we needed the quadratic term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2} \\approx \\dfrac{\\tfrac{1}{2}x^2}{x^2}",
          "explanation": "Placing the simplified numerator over $x^2$ gives $\\dfrac{\\tfrac{1}{2}x^2}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the powers of x",
          "workingLatex": "\\dfrac{\\tfrac{1}{2}x^2}{x^2} = \\tfrac{1}{2} \\quad (x \\neq 0)",
          "explanation": "Since $x \\neq 0$, the $x^2$ cancels top and bottom, leaving $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2} \\to \\tfrac{1}{2} \\text{ as } x \\to 0",
          "explanation": "The value the expression approaches as $x \\to 0$ is $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2} \\approx \\dfrac{1}{2}",
          "explanation": "So for small $x$, the expression is approximately $\\dfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos x}{x^2} \\approx \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "sin", "tan", "limit"],
    "questionText": "Find an approximation for $\\dfrac{\\sin 5x}{\\tan 2x}$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{\\sin 5x}{\\tan 2x}",
          "explanation": "We start from the given fraction, which has a sine on top and a tangent below.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small angles in radians, $\\sin\\theta \\approx \\theta$, so we can replace the sine by its angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the approximation for tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "Similarly, $\\tan\\theta \\approx \\theta$ for small angles, so the tangent can be replaced too.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, in radians}",
          "explanation": "Both $5x$ and $2x$ are small when $x$ is small, so both replacements are valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the numerator",
          "workingLatex": "\\sin 5x \\approx 5x",
          "explanation": "Applying the sine rule with angle $5x$ gives $5x$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the denominator",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "Applying the tangent rule with angle $2x$ gives $2x$ on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{\\sin 5x}{\\tan 2x} \\approx \\dfrac{5x}{2x}",
          "explanation": "Together the substitutions give the algebraic fraction $\\dfrac{5x}{2x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{5x}{2x} = \\dfrac{5}{2} \\quad (x \\neq 0)",
          "explanation": "Since $x \\neq 0$ we cancel the $x$, leaving $\\dfrac{5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{\\sin 5x}{\\tan 2x} \\to \\dfrac{5}{2} \\text{ as } x \\to 0",
          "explanation": "The value the expression approaches as $x \\to 0$ is $\\dfrac{5}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\dfrac{\\sin 5x}{\\tan 2x} \\approx \\dfrac{5}{2}",
          "explanation": "So for small $x$ the expression is approximately $\\dfrac{5}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 5x}{\\tan 2x} \\approx \\dfrac{5}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "cos", "limit"],
    "questionText": "Find an approximation for $\\dfrac{1 - \\cos 2x}{x^2}$ for small values of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the expression",
          "workingLatex": "\\dfrac{1 - \\cos 2x}{x^2}",
          "explanation": "We start from the given fraction, which contains the cosine of the doubled angle $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the approximation for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For small angles in radians, $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$; we keep the quadratic term because the constants will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the condition",
          "workingLatex": "x \\text{ small, so } 2x \\text{ small, in radians}",
          "explanation": "Since $x$ is small, $2x$ is also small, so the approximation is valid for angle $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the angle",
          "workingLatex": "\\theta = 2x",
          "explanation": "The angle inside the cosine is $2x$, so we substitute $\\theta = 2x$ into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the cosine",
          "workingLatex": "\\cos 2x \\approx 1 - \\tfrac{1}{2}(2x)^2 = 1 - 2x^2",
          "explanation": "Here $(2x)^2 = 4x^2$, and half of that is $2x^2$, so $\\cos 2x \\approx 1 - 2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\cos 2x \\approx 1 - \\left(1 - 2x^2\\right) = 2x^2",
          "explanation": "The two $1$s cancel, leaving $2x^2$ on top.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the fraction",
          "workingLatex": "\\dfrac{1 - \\cos 2x}{x^2} \\approx \\dfrac{2x^2}{x^2}",
          "explanation": "Placing the simplified numerator over $x^2$ gives $\\dfrac{2x^2}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the powers of x",
          "workingLatex": "\\dfrac{2x^2}{x^2} = 2 \\quad (x \\neq 0)",
          "explanation": "Since $x \\neq 0$, the $x^2$ cancels top and bottom, leaving $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{1 - \\cos 2x}{x^2} \\to 2 \\text{ as } x \\to 0",
          "explanation": "The value the expression approaches as $x \\to 0$ is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "\\dfrac{1 - \\cos 2x}{x^2} \\approx 2",
          "explanation": "So for small $x$ the expression is approximately $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos 2x}{x^2} \\approx 2$"
    }
  },
{
    "id": "al.y2.pure.small-angles.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "cosine"],
    "questionText": "Find an approximation for $\\cos 3x - 1$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine sits just below $1$, dipping by about $\\tfrac{1}{2}\\theta^2$. This captures the gentle downward curve of the cosine graph near its peak at $\\theta = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is measured in radians",
          "workingLatex": "x \\text{ small} \\Rightarrow 3x \\text{ small (radians)}",
          "explanation": "The approximation only works in radians, and it needs the angle itself to be small. Since $x$ is small, $3x$ is also small, so we are allowed to apply the rule to $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the angle to substitute",
          "workingLatex": "\\theta = 3x",
          "explanation": "Here the angle inside the cosine is $3x$, so we replace $\\theta$ with $3x$ everywhere in the formula. Matching the angle correctly is the key move.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the angle into the approximation",
          "workingLatex": "\\cos 3x \\approx 1 - \\tfrac{1}{2}(3x)^2",
          "explanation": "We put $3x$ in place of $\\theta$. The whole angle, including the factor of $3$, must go inside the bracket that gets squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the bracket",
          "workingLatex": "(3x)^2 = 9x^2",
          "explanation": "Squaring $3x$ squares both the $3$ and the $x$, giving $9x^2$. Forgetting to square the $3$ is the most common slip here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the approximation for cos 3x",
          "workingLatex": "\\cos 3x \\approx 1 - \\tfrac{9x^2}{2}",
          "explanation": "Multiplying $\\tfrac{1}{2}$ by $9x^2$ gives $\\tfrac{9x^2}{2}$. This is a tidy expression for the cosine of the small angle $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write down the required expression",
          "workingLatex": "\\cos 3x - 1",
          "explanation": "The question asks for $\\cos 3x - 1$, so we now subtract $1$ from our approximation. Keeping the target expression in view stops us stopping too early.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the approximation",
          "workingLatex": "\\cos 3x - 1 \\approx 1 - \\tfrac{9x^2}{2} - 1",
          "explanation": "We replace $\\cos 3x$ with its approximation and keep the $-1$ that the question demands. Now everything is written in terms of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the constant terms",
          "workingLatex": "1 - 1 = 0",
          "explanation": "The $+1$ and the $-1$ cancel exactly, which is why this kind of expression collapses to a pure quadratic term. The constant part disappears.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final approximation",
          "workingLatex": "\\cos 3x - 1 \\approx -\\tfrac{9x^2}{2}",
          "explanation": "What remains is the small negative $x^2$ term, showing that $\\cos 3x - 1$ is negative and shrinks quickly to zero as $x \\to 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos 3x - 1 \\approx -\\dfrac{9x^2}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "tangent", "sine"],
    "questionText": "Find an approximation for $(\\tan 3x)(\\sin 2x)$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, $\\tan\\theta$ is almost exactly equal to the angle itself, because the tangent graph leaves the origin with gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "Similarly, for a small angle in radians $\\sin\\theta \\approx \\theta$. Near zero the sine curve is virtually a straight line of gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the tangent factor",
          "workingLatex": "\\tan 3x \\approx 3x",
          "explanation": "Replacing $\\theta$ with $3x$ gives $\\tan 3x \\approx 3x$, since $3x$ is small when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "Replacing $\\theta$ with $2x$ gives $\\sin 2x \\approx 2x$. Each factor is handled separately before we multiply them.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the product using the approximations",
          "workingLatex": "(\\tan 3x)(\\sin 2x) \\approx (3x)(2x)",
          "explanation": "We now substitute both approximations into the original product. Because both are close to their true values, their product is close to the true product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the numerical coefficients",
          "workingLatex": "3 \\times 2 = 6",
          "explanation": "The numbers $3$ and $2$ multiply to give $6$. Dealing with the coefficients first keeps the algebra clean.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply the powers of x",
          "workingLatex": "x \\times x = x^2",
          "explanation": "Multiplying $x$ by $x$ adds the indices to give $x^2$. This is why a product of two small linear terms becomes quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the parts",
          "workingLatex": "(3x)(2x) = 6x^2",
          "explanation": "Putting the coefficient and the power of $x$ together gives $6x^2$. No constant term appears because both factors vanish at $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final approximation",
          "workingLatex": "(\\tan 3x)(\\sin 2x) \\approx 6x^2",
          "explanation": "The product behaves like $6x^2$ for small $x$, a small positive quantity that shrinks rapidly towards zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\tan 3x)(\\sin 2x) \\approx 6x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "sine"],
    "questionText": "Find an approximation for $5x + \\sin 2x$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine of the angle is almost equal to the angle itself, because the sine graph starts with gradient $1$ at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small",
          "workingLatex": "x \\text{ small} \\Rightarrow 2x \\text{ small}",
          "explanation": "Since $x$ is small, $2x$ is also small, so we may safely replace $\\sin 2x$ by its small angle approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the term that needs approximating",
          "workingLatex": "5x + \\sin 2x",
          "explanation": "The $5x$ term is already a simple multiple of $x$, so only the $\\sin 2x$ part needs to be replaced by an approximation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the sine term",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "Substituting $\\theta = 2x$ gives $\\sin 2x \\approx 2x$. The factor of $2$ stays with the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the expression",
          "workingLatex": "5x + \\sin 2x \\approx 5x + 2x",
          "explanation": "We leave the $5x$ unchanged and replace $\\sin 2x$ with $2x$, so the whole expression is now a sum of like terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise like terms",
          "workingLatex": "5x \\text{ and } 2x \\text{ are like terms}",
          "explanation": "Both terms are multiples of $x$, so they can be added directly by combining their coefficients.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the coefficients",
          "workingLatex": "5 + 2 = 7",
          "explanation": "Adding the coefficients $5$ and $2$ gives $7$. This is the only arithmetic needed once the approximation is in place.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into a single term",
          "workingLatex": "5x + 2x = 7x",
          "explanation": "The like terms combine to give $7x$, a single linear term in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final approximation",
          "workingLatex": "5x + \\sin 2x \\approx 7x",
          "explanation": "For small $x$ the expression behaves like $7x$, growing in direct proportion to $x$ near the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5x + \\sin 2x \\approx 7x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "sine"],
    "questionText": "Find an approximation for $x\\sin x$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine of the angle is very close to the angle itself, since the sine curve leaves the origin with gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is small",
          "workingLatex": "x \\text{ small (radians)}",
          "explanation": "Here the angle inside the sine is just $x$, which is small, so the approximation applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the structure of the expression",
          "workingLatex": "x\\sin x = x \\times \\sin x",
          "explanation": "The expression is a product of the factor $x$ and the factor $\\sin x$. We keep the leading $x$ as it is and approximate only the sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "Replacing $\\theta$ with $x$ gives $\\sin x \\approx x$. This turns the trigonometric factor into a simple algebraic one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify dropping the higher order terms",
          "workingLatex": "\\sin x = x - \\tfrac{1}{6}x^3 + \\cdots \\approx x",
          "explanation": "The next correction to $\\sin x$ is of size $x^3$, which is far smaller than $x$ when $x$ is small, so keeping just $x$ is accurate enough for this approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the product",
          "workingLatex": "x\\sin x \\approx x \\times x",
          "explanation": "We replace $\\sin x$ with $x$, so the product becomes $x$ multiplied by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the index law",
          "workingLatex": "x \\times x = x^{1+1}",
          "explanation": "Multiplying powers of the same base adds the indices, so $x^1 \\times x^1$ becomes $x^{1+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the index",
          "workingLatex": "x^{1+1} = x^2",
          "explanation": "Adding the indices gives $x^2$, so the product simplifies neatly to a squared term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the behaviour near zero",
          "workingLatex": "x\\sin x \\approx x^2 \\text{ (parabola-like near } x = 0)",
          "explanation": "Because the expression behaves like $x^2$, its graph is parabola-like close to the origin: always positive and flattening to zero as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Carry out a numerical sense-check",
          "workingLatex": "x = 0.1:\\ x\\sin x = 0.1 \\times 0.0998 \\approx 0.00998,\\quad x^2 = 0.01",
          "explanation": "At $x = 0.1$ the true value $0.00998$ is very close to $x^2 = 0.01$, confirming the approximation is reliable for small $x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final approximation",
          "workingLatex": "x\\sin x \\approx x^2",
          "explanation": "For small $x$ the expression behaves like $x^2$, a small positive quantity that vanishes quickly as $x \\to 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x\\sin x \\approx x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "limits", "cosine"],
    "questionText": "Find an approximation for $\\dfrac{1 - \\cos x}{x\\sin x}$ when $x$ is small, giving your answer as a single number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine dips just below $1$ by $\\tfrac{1}{2}\\theta^2$, and this quadratic term is exactly what survives in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians $\\sin\\theta \\approx \\theta$, which we will need for the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the numerator",
          "workingLatex": "1 - \\cos x \\approx 1 - \\left(1 - \\tfrac{1}{2}x^2\\right)",
          "explanation": "Substituting the cosine approximation into $1 - \\cos x$ lets us see how the constant terms interact.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "1 - 1 + \\tfrac{1}{2}x^2 = \\tfrac{1}{2}x^2",
          "explanation": "The $1$ and $-1$ cancel, leaving $\\tfrac{1}{2}x^2$. So the numerator behaves like a quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximate the sine in the denominator",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "We replace $\\sin x$ with $x$, ready to build the denominator $x\\sin x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Approximate the denominator",
          "workingLatex": "x\\sin x \\approx x \\times x = x^2",
          "explanation": "Multiplying the leading $x$ by the approximation $x$ gives $x^2$, so the denominator is also quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the approximate fraction",
          "workingLatex": "\\frac{1 - \\cos x}{x\\sin x} \\approx \\frac{\\tfrac{1}{2}x^2}{x^2}",
          "explanation": "Placing the two approximations over one another turns the expression into a ratio of quadratics, which is easy to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common power of x",
          "workingLatex": "\\frac{\\tfrac{1}{2}x^2}{x^2} = \\tfrac{1}{2} \\times \\frac{x^2}{x^2}",
          "explanation": "Because $x^2$ appears top and bottom it cancels completely, which is why the answer is a fixed number rather than something depending on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the ratio of powers",
          "workingLatex": "\\frac{x^2}{x^2} = 1",
          "explanation": "Any non-zero quantity divided by itself is $1$, so the $x$-dependence disappears entirely.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limiting value",
          "workingLatex": "\\frac{1 - \\cos x}{x\\sin x} \\approx \\tfrac{1}{2}",
          "explanation": "The expression settles down to $\\tfrac{1}{2}$ for small $x$. This is the value the fraction approaches as $x$ tends to zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos x}{x\\sin x} \\approx \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "limits", "tangent", "sine"],
    "questionText": "Find an approximation for $\\dfrac{x + \\tan 2x}{\\sin 3x}$ when $x$ is small, giving your answer as a single number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the tangent equals the angle to a very good approximation, because the tangent graph has gradient $1$ at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians $\\sin\\theta \\approx \\theta$, which we will use for the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the tangent term",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "Substituting $\\theta = 2x$ gives $\\tan 2x \\approx 2x$, keeping the factor of $2$ with the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Build the numerator",
          "workingLatex": "x + \\tan 2x \\approx x + 2x",
          "explanation": "The $x$ term stays as it is, and $\\tan 2x$ is replaced by $2x$, so the numerator becomes a sum of like terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "x + 2x = 3x",
          "explanation": "Adding the like terms gives $3x$. The numerator behaves linearly in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Approximate the denominator",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "Substituting $\\theta = 3x$ gives $\\sin 3x \\approx 3x$, so the denominator is also linear in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the approximate fraction",
          "workingLatex": "\\frac{x + \\tan 2x}{\\sin 3x} \\approx \\frac{3x}{3x}",
          "explanation": "Placing numerator over denominator gives a ratio of two linear terms, both multiples of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor of x",
          "workingLatex": "\\frac{3x}{3x} = \\frac{3}{3} \\times \\frac{x}{x}",
          "explanation": "The factor of $x$ cancels top and bottom, which is why the answer is a pure number independent of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the coefficients",
          "workingLatex": "\\frac{3}{3} = 1",
          "explanation": "The coefficients $3$ and $3$ are equal, so their ratio is exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limiting value",
          "workingLatex": "\\frac{x + \\tan 2x}{\\sin 3x} \\approx 1",
          "explanation": "For small $x$ the fraction approaches $1$, meaning numerator and denominator grow at the same rate near the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x + \\tan 2x}{\\sin 3x} \\approx 1$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "percentage error", "sine"],
    "questionText": "The approximation $\\sin\\theta \\approx \\theta$ is used at $\\theta = 0.2$ radians. Find the percentage error, giving your answer to $2$ significant figures. Use $\\text{error} = \\dfrac{|\\text{approx} - \\text{true}|}{\\text{true}} \\times 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the approximation being tested",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The small angle rule replaces $\\sin\\theta$ by the angle itself. We want to know how far off this is at $\\theta = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the approximate value",
          "workingLatex": "\\text{approx} = 0.2",
          "explanation": "Using the rule, the approximate value of $\\sin 0.2$ is simply the angle $0.2$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the true value from a calculator",
          "workingLatex": "\\sin(0.2) = 0.198669\\ldots",
          "explanation": "Evaluating $\\sin 0.2$ in radian mode gives $0.198669$ to six decimal places. This is the exact benchmark we compare against.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the true value for the calculation",
          "workingLatex": "\\text{true} = 0.198669",
          "explanation": "We keep several decimal places so that rounding does not distort the small error we are about to compute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the absolute error",
          "workingLatex": "|\\text{approx} - \\text{true}| = |0.2 - 0.198669|",
          "explanation": "The absolute error is the size of the gap between the approximate and true values, ignoring its sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the absolute error",
          "workingLatex": "|0.2 - 0.198669| = 0.001331",
          "explanation": "The difference is $0.001331$, a very small number, which already suggests the approximation is good at this angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the percentage error formula",
          "workingLatex": "\\text{percentage error} = \\frac{|\\text{approx} - \\text{true}|}{\\text{true}} \\times 100",
          "explanation": "Dividing the absolute error by the true value and multiplying by $100$ expresses the error as a percentage of the correct answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "\\text{percentage error} = \\frac{0.001331}{0.198669} \\times 100",
          "explanation": "We put the absolute error over the true value and multiply by $100$, ready to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the percentage",
          "workingLatex": "\\frac{0.001331}{0.198669} \\times 100 = 0.6700\\ldots",
          "explanation": "Carrying out the division and multiplication gives about $0.6700$, the raw percentage error before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round to 2 significant figures",
          "workingLatex": "0.6700\\ldots \\approx 0.67",
          "explanation": "Rounding to two significant figures gives $0.67$, so the approximation is off by well under one percent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.67\\%$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "percentage error", "cosine"],
    "questionText": "The approximation $\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2$ is used at $\\theta = 0.3$ radians. Find the percentage error, giving your answer to $2$ significant figures. Use $\\text{error} = \\dfrac{|\\text{approx} - \\text{true}|}{\\text{true}} \\times 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the approximation being tested",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "The small angle rule replaces $\\cos\\theta$ by $1 - \\tfrac{1}{2}\\theta^2$. We measure how accurate this is at $\\theta = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square the angle",
          "workingLatex": "0.3^2 = 0.09",
          "explanation": "The approximation needs $\\theta^2$, so we first square $0.3$ to get $0.09$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Halve the squared angle",
          "workingLatex": "\\tfrac{1}{2} \\times 0.09 = 0.045",
          "explanation": "Multiplying by $\\tfrac{1}{2}$ gives $0.045$, the amount the approximation subtracts from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write down the approximate value",
          "workingLatex": "\\text{approx} = 1 - 0.045 = 0.955",
          "explanation": "Subtracting from $1$ gives an approximate cosine of $0.955$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the true value from a calculator",
          "workingLatex": "\\cos(0.3) = 0.955336\\ldots",
          "explanation": "Evaluating $\\cos 0.3$ in radian mode gives $0.955336$, our exact benchmark for comparison.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the true value for the calculation",
          "workingLatex": "\\text{true} = 0.955336",
          "explanation": "We keep six decimal places so that the tiny error is not lost to premature rounding.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the absolute error",
          "workingLatex": "|0.955 - 0.955336| = 0.000336",
          "explanation": "The absolute error is the size of the gap between the two values, which here is only $0.000336$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the percentage error formula",
          "workingLatex": "\\text{percentage error} = \\frac{|\\text{approx} - \\text{true}|}{\\text{true}} \\times 100",
          "explanation": "Dividing the absolute error by the true value and multiplying by $100$ turns the gap into a percentage of the correct answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the values",
          "workingLatex": "\\text{percentage error} = \\frac{0.000336}{0.955336} \\times 100",
          "explanation": "We place the absolute error over the true value and multiply by $100$, ready to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the percentage",
          "workingLatex": "\\frac{0.000336}{0.955336} \\times 100 = 0.03523\\ldots",
          "explanation": "Carrying out the arithmetic gives about $0.03523$, the raw percentage error before rounding.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round to 2 significant figures",
          "workingLatex": "0.03523\\ldots \\approx 0.035",
          "explanation": "Rounding to two significant figures gives $0.035$, showing the quadratic cosine approximation is extremely accurate here.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0.035\\%$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "limits", "sine", "tangent"],
    "questionText": "Find an approximation for $\\dfrac{2\\sin 3x}{3\\tan 2x}$ when $x$ is small, giving your answer as a single number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine equals the angle to a good approximation, which handles the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the tangent also equals the angle, which handles the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the sine term",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "Substituting $\\theta = 3x$ gives $\\sin 3x \\approx 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Build the numerator",
          "workingLatex": "2\\sin 3x \\approx 2 \\times 3x = 6x",
          "explanation": "Multiplying the approximation by the coefficient $2$ gives a numerator of $6x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximate the tangent term",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "Substituting $\\theta = 2x$ gives $\\tan 2x \\approx 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Build the denominator",
          "workingLatex": "3\\tan 2x \\approx 3 \\times 2x = 6x",
          "explanation": "Multiplying the approximation by the coefficient $3$ gives a denominator of $6x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the approximate fraction",
          "workingLatex": "\\frac{2\\sin 3x}{3\\tan 2x} \\approx \\frac{6x}{6x}",
          "explanation": "Placing numerator over denominator gives a ratio of two identical linear terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor of x",
          "workingLatex": "\\frac{6x}{6x} = \\frac{6}{6} \\times \\frac{x}{x}",
          "explanation": "The factor of $x$ cancels top and bottom, so the result cannot depend on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the coefficients",
          "workingLatex": "\\frac{6}{6} = 1",
          "explanation": "The coefficients are equal, so their ratio is exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limiting value",
          "workingLatex": "\\frac{2\\sin 3x}{3\\tan 2x} \\approx 1",
          "explanation": "For small $x$ the expression approaches $1$, since the carefully chosen coefficients make numerator and denominator match.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2\\sin 3x}{3\\tan 2x} \\approx 1$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "limits", "sine"],
    "questionText": "Find an approximation for $\\dfrac{\\sin 4x - \\sin 2x}{x}$ when $x$ is small, giving your answer as a single number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine of the angle is close to the angle itself, and both sines in the numerator can be treated this way.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the first sine term",
          "workingLatex": "\\sin 4x \\approx 4x",
          "explanation": "Substituting $\\theta = 4x$ gives $\\sin 4x \\approx 4x$, keeping the factor of $4$ with the angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the second sine term",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "Substituting $\\theta = 2x$ gives $\\sin 2x \\approx 2x$. Each term is approximated separately before subtracting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the numerator",
          "workingLatex": "\\sin 4x - \\sin 2x \\approx 4x - 2x",
          "explanation": "Replacing both sines gives a difference of like terms, which is straightforward to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "4x - 2x = 2x",
          "explanation": "Subtracting the like terms leaves $2x$, a single linear term in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the approximate fraction",
          "workingLatex": "\\frac{\\sin 4x - \\sin 2x}{x} \\approx \\frac{2x}{x}",
          "explanation": "Dividing the simplified numerator by $x$ gives a ratio of linear terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of x",
          "workingLatex": "\\frac{2x}{x} = 2 \\times \\frac{x}{x}",
          "explanation": "The factor of $x$ cancels top and bottom, so the answer is a fixed number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the ratio",
          "workingLatex": "\\frac{x}{x} = 1",
          "explanation": "Since $x$ divided by $x$ is $1$, only the coefficient $2$ remains.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the limiting value",
          "workingLatex": "\\frac{\\sin 4x - \\sin 2x}{x} \\approx 2",
          "explanation": "For small $x$ the expression approaches $2$, reflecting the difference of the two rates $4$ and $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 4x - \\sin 2x}{x} \\approx 2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "cosine"],
    "questionText": "Find an approximation for $1 - \\cos 5x$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine dips below $1$ by $\\tfrac{1}{2}\\theta^2$, and this quadratic term is what will remain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the angle to substitute",
          "workingLatex": "\\theta = 5x",
          "explanation": "The angle inside the cosine is $5x$, which is small when $x$ is small, so we replace $\\theta$ with $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the approximation",
          "workingLatex": "\\cos 5x \\approx 1 - \\tfrac{1}{2}(5x)^2",
          "explanation": "Placing $5x$ into the formula, the whole angle including the $5$ goes inside the squared bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the bracket",
          "workingLatex": "(5x)^2 = 25x^2",
          "explanation": "Squaring $5x$ squares both the $5$ and the $x$, giving $25x^2$. The $5$ must be squared too.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the approximation for cos 5x",
          "workingLatex": "\\cos 5x \\approx 1 - \\tfrac{25x^2}{2}",
          "explanation": "Multiplying $\\tfrac{1}{2}$ by $25x^2$ gives $\\tfrac{25x^2}{2}$, so this is our approximation for $\\cos 5x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the required expression",
          "workingLatex": "1 - \\cos 5x",
          "explanation": "The question asks for $1 - \\cos 5x$, so we subtract the whole cosine approximation from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the approximation",
          "workingLatex": "1 - \\cos 5x \\approx 1 - \\left(1 - \\tfrac{25x^2}{2}\\right)",
          "explanation": "Replacing $\\cos 5x$ with its approximation, we keep the bracket so the signs are handled carefully.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "1 - 1 + \\tfrac{25x^2}{2}",
          "explanation": "The minus sign in front of the bracket flips the signs inside, turning $-\\tfrac{25x^2}{2}$ into $+\\tfrac{25x^2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the constants",
          "workingLatex": "1 - 1 = 0",
          "explanation": "The $1$ and $-1$ cancel, leaving only the positive quadratic term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final approximation",
          "workingLatex": "1 - \\cos 5x \\approx \\tfrac{25x^2}{2}",
          "explanation": "What remains is $\\tfrac{25x^2}{2}$, a small positive quantity, confirming that $1 - \\cos 5x$ is always positive for small $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1 - \\cos 5x \\approx \\dfrac{25x^2}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["small angle approximations", "cosine"],
    "questionText": "Find an approximation for $\\cos x - \\cos 3x$ when $x$ is small, giving your answer in terms of $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine dips below $1$ by $\\tfrac{1}{2}\\theta^2$. We apply this to both cosine terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the first cosine",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "With $\\theta = x$ the approximation gives $\\cos x \\approx 1 - \\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for the second cosine",
          "workingLatex": "\\cos 3x \\approx 1 - \\tfrac{1}{2}(3x)^2",
          "explanation": "With $\\theta = 3x$ we substitute into the same formula, remembering the whole angle goes inside the square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the bracket for the second cosine",
          "workingLatex": "(3x)^2 = 9x^2",
          "explanation": "Squaring $3x$ gives $9x^2$, since the factor of $3$ is squared as well.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the second cosine",
          "workingLatex": "\\cos 3x \\approx 1 - \\tfrac{9x^2}{2}",
          "explanation": "Halving $9x^2$ gives $\\tfrac{9x^2}{2}$, so $\\cos 3x \\approx 1 - \\tfrac{9x^2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the required difference",
          "workingLatex": "\\cos x - \\cos 3x",
          "explanation": "The question asks for $\\cos x - \\cos 3x$, so we subtract the second approximation from the first.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute both approximations",
          "workingLatex": "\\cos x - \\cos 3x \\approx \\left(1 - \\tfrac{1}{2}x^2\\right) - \\left(1 - \\tfrac{9x^2}{2}\\right)",
          "explanation": "We keep both brackets so that the subtraction handles every sign correctly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the second bracket",
          "workingLatex": "= 1 - \\tfrac{1}{2}x^2 - 1 + \\tfrac{9x^2}{2}",
          "explanation": "The minus in front of the second bracket flips its signs, so $-\\tfrac{9x^2}{2}$ becomes $+\\tfrac{9x^2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the constants",
          "workingLatex": "1 - 1 = 0",
          "explanation": "The constant terms cancel, leaving only the quadratic terms in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the quadratic terms",
          "workingLatex": "-\\tfrac{1}{2}x^2 + \\tfrac{9x^2}{2} = \\tfrac{8x^2}{2}",
          "explanation": "Adding $-\\tfrac{1}{2}x^2$ and $\\tfrac{9}{2}x^2$ gives $\\tfrac{8}{2}x^2$, since $9 - 1 = 8$ over the common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final approximation",
          "workingLatex": "\\cos x - \\cos 3x \\approx 4x^2",
          "explanation": "Simplifying $\\tfrac{8}{2}x^2$ gives $4x^2$, a small positive quantity showing $\\cos x$ exceeds $\\cos 3x$ for small $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos x - \\cos 3x \\approx 4x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits", "tangent", "sine"],
    "questionText": "Find an approximation for $\\dfrac{\\tan 3x}{\\sin 5x}$ when $x$ is small, giving your answer as a single number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the tangent equals the angle to a good approximation, which handles the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians the sine also equals the angle, which handles the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Confirm both angles are small",
          "workingLatex": "x \\text{ small} \\Rightarrow 3x \\text{ and } 5x \\text{ small (radians)}",
          "explanation": "Both $3x$ and $5x$ shrink towards zero as $x$ does, so each approximation is justified and may be applied to its own factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the numerator",
          "workingLatex": "\\tan 3x \\approx 3x",
          "explanation": "Substituting $\\theta = 3x$ into $\\tan\\theta \\approx \\theta$ gives $\\tan 3x \\approx 3x$, keeping the factor of $3$ with the angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximate the denominator",
          "workingLatex": "\\sin 5x \\approx 5x",
          "explanation": "Substituting $\\theta = 5x$ into $\\sin\\theta \\approx \\theta$ gives $\\sin 5x \\approx 5x$, keeping the factor of $5$ with the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the approximate fraction",
          "workingLatex": "\\frac{\\tan 3x}{\\sin 5x} \\approx \\frac{3x}{5x}",
          "explanation": "Placing numerator over denominator gives a ratio of two linear terms in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor of x",
          "workingLatex": "\\frac{3x}{5x} = \\frac{3}{5} \\times \\frac{x}{x}",
          "explanation": "The factor of $x$ appears top and bottom and cancels, so the result cannot depend on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the ratio of x terms",
          "workingLatex": "\\frac{x}{x} = 1",
          "explanation": "Since $x$ divided by $x$ is $1$, only the ratio of coefficients remains.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the constant value",
          "workingLatex": "\\frac{\\tan 3x}{\\sin 5x} \\approx \\tfrac{3}{5}",
          "explanation": "What remains is $\\tfrac{3}{5}$, the ratio of the two angle multipliers $3$ and $5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret as a limit",
          "workingLatex": "\\lim_{x \\to 0} \\frac{\\tan 3x}{\\sin 5x} = \\tfrac{3}{5}",
          "explanation": "As $x \\to 0$ the approximations become exact, so $\\tfrac{3}{5}$ is precisely the limiting value the fraction approaches.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Carry out a numerical sense-check",
          "workingLatex": "x = 0.01:\\ \\frac{\\tan 0.03}{\\sin 0.05} \\approx \\frac{0.030009}{0.049979} \\approx 0.6004",
          "explanation": "At $x = 0.01$ the true value $0.6004$ is very close to $\\tfrac{3}{5} = 0.6$, confirming the approximation is reliable for small $x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\tan 3x}{\\sin 5x} \\approx \\dfrac{3}{5}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["small angle approximations", "double angle", "proof"],
    "questionText": "Using the double angle formula $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and small angle approximations, show that $\\sin 2\\theta \\approx 2\\theta$ for small $\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the double angle identity",
          "workingLatex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "The double angle formula rewrites $\\sin 2\\theta$ in terms of the single angle $\\theta$, so we can bring in the small angle approximations for $\\sin\\theta$ and $\\cos\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle in radians $\\sin\\theta \\approx \\theta$, since the sine curve leaves the origin with gradient $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle in radians the cosine is just below $1$. To leading order it is very close to $1$ because the $\\theta^2$ correction is tiny.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the cosine to first order",
          "workingLatex": "\\cos\\theta \\approx 1",
          "explanation": "Because $\\theta$ is small, $\\tfrac{1}{2}\\theta^2$ is negligible compared with $1$, so to first order we may simply take $\\cos\\theta \\approx 1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the sine approximation",
          "workingLatex": "2\\sin\\theta\\cos\\theta \\approx 2(\\theta)\\cos\\theta",
          "explanation": "We replace $\\sin\\theta$ with $\\theta$, keeping the cosine factor for the moment.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the cosine approximation",
          "workingLatex": "2(\\theta)\\cos\\theta \\approx 2(\\theta)(1)",
          "explanation": "Replacing $\\cos\\theta$ with $1$ removes the cosine factor, leaving only the linear term in $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the product",
          "workingLatex": "2(\\theta)(1) = 2\\theta",
          "explanation": "Multiplying $2$, $\\theta$ and $1$ together gives $2\\theta$, a clean linear expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result",
          "workingLatex": "\\sin 2\\theta \\approx 2\\theta",
          "explanation": "This confirms $\\sin 2\\theta \\approx 2\\theta$, exactly the result we would get by applying the sine approximation directly to the angle $2\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm consistency with the direct approximation",
          "workingLatex": "\\sin(2\\theta) \\approx 2\\theta \\text{ (same as } \\sin\\phi \\approx \\phi)",
          "explanation": "Setting $\\phi = 2\\theta$ in $\\sin\\phi \\approx \\phi$ gives the same answer, which reassures us that the double angle route is consistent with the basic rule.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 2\\theta \\approx 2\\theta$"
    }
  },
{
    "id": "al.y2.pure.small-angles.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{6x + \\sin 2x - \\tan x}{x}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the approximations we need",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad \\tan\\theta \\approx \\theta",
          "explanation": "When an angle is small (measured in radians) both $\\sin\\theta$ and $\\tan\\theta$ sit very close to the angle $\\theta$ itself. Swapping the trig functions for these simple multiples of $x$ is what turns a messy expression into ordinary algebra.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the sine term",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "The angle here is $2x$, which is still small, so $\\sin 2x$ is close to that angle, namely $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the tangent term",
          "workingLatex": "\\tan x \\approx x",
          "explanation": "Likewise $\\tan x$ is close to the angle $x$ when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the numerator",
          "workingLatex": "6x + \\sin 2x - \\tan x \\approx 6x + 2x - x",
          "explanation": "Replacing each trig term by its approximation leaves only powers of $x$ in the top of the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "6x + 2x - x = 7x",
          "explanation": "Collecting the like terms $6x$, $2x$ and $-x$ gives a single term $7x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the whole fraction",
          "workingLatex": "\\dfrac{6x + \\sin 2x - \\tan x}{x} \\approx \\dfrac{7x}{x}",
          "explanation": "The denominator is unchanged, so we place the simplified numerator over $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{7x}{x} = 7",
          "explanation": "Both top and bottom share a factor of $x$; cancelling it removes $x$ entirely and leaves a constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{6x + \\sin 2x - \\tan x}{x} \\approx 7",
          "explanation": "The expression tends to the fixed value $7$ as $x$ becomes small, no matter how small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.05:\\quad \\dfrac{6(0.05) + \\sin 0.1 - \\tan 0.05}{0.05} \\approx 7.00",
          "explanation": "Putting in $x = 0.05$ gives about $7.00$, which confirms our approximation is right.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{6x + \\sin 2x - \\tan x}{x} \\approx 7$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{1 - \\cos 4x}{1 - \\cos 2x}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2 \\;\\Rightarrow\\; 1 - \\cos\\theta \\approx \\tfrac{1}{2}\\theta^2",
          "explanation": "For a small angle $\\cos\\theta$ is just below $1$, and the tiny gap $1 - \\cos\\theta$ is close to $\\tfrac{1}{2}\\theta^2$. Since both top and bottom here are of this form, this is exactly the tool we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the numerator",
          "workingLatex": "1 - \\cos 4x \\approx \\tfrac{1}{2}(4x)^2",
          "explanation": "Using the rule with angle $4x$: the gap $1 - \\cos 4x$ is about half the square of $4x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "\\tfrac{1}{2}(4x)^2 = \\tfrac{1}{2}\\times 16x^2 = 8x^2",
          "explanation": "Squaring $4x$ gives $16x^2$, and halving that gives $8x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the denominator",
          "workingLatex": "1 - \\cos 2x \\approx \\tfrac{1}{2}(2x)^2",
          "explanation": "The same rule with angle $2x$ gives half the square of $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the denominator",
          "workingLatex": "\\tfrac{1}{2}(2x)^2 = \\tfrac{1}{2}\\times 4x^2 = 2x^2",
          "explanation": "Squaring $2x$ gives $4x^2$, and halving gives $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the ratio",
          "workingLatex": "\\dfrac{1 - \\cos 4x}{1 - \\cos 2x} \\approx \\dfrac{8x^2}{2x^2}",
          "explanation": "We now have both parts as simple multiples of $x^2$, ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel and evaluate",
          "workingLatex": "\\dfrac{8x^2}{2x^2} = 4",
          "explanation": "The $x^2$ factors cancel, leaving just $8 \\div 2 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{1 - \\cos 4x}{1 - \\cos 2x} \\approx 4",
          "explanation": "The ratio settles to the constant $4$ as $x$ becomes small.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.078939}{0.019933} \\approx 3.96",
          "explanation": "At $x = 0.1$ the exact ratio is about $3.96$, comfortably close to $4$; smaller $x$ would be closer still.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos 4x}{1 - \\cos 2x} \\approx 4$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{x^2}{1 - \\cos x}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the approximation needed",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "The only tricky part is the denominator, which contains $\\cos x$. For small $x$ the cosine is close to $1 - \\tfrac{1}{2}x^2$, so this is the tool to reach for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Build the expression for the denominator",
          "workingLatex": "1 - \\cos x \\approx 1 - \\left(1 - \\tfrac{1}{2}x^2\\right)",
          "explanation": "We substitute the approximation for $\\cos x$ into $1 - \\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the denominator",
          "workingLatex": "1 - 1 + \\tfrac{1}{2}x^2 = \\tfrac{1}{2}x^2",
          "explanation": "The two $1$s cancel, leaving the small quantity $\\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the fraction",
          "workingLatex": "\\dfrac{x^2}{1 - \\cos x} \\approx \\dfrac{x^2}{\\tfrac{1}{2}x^2}",
          "explanation": "Replacing the denominator with $\\tfrac{1}{2}x^2$ gives a fraction where both parts involve $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite dividing by a half",
          "workingLatex": "\\dfrac{x^2}{\\tfrac{1}{2}x^2} = \\dfrac{2x^2}{x^2}",
          "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$, so the top becomes $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{2x^2}{x^2} = 2",
          "explanation": "The $x^2$ terms cancel, leaving the constant $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{x^2}{1 - \\cos x} \\approx 2",
          "explanation": "The expression approaches the fixed value $2$ as $x$ becomes small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the result is independent of x",
          "workingLatex": "\\text{answer} = 2 \\;\\; (\\text{no } x \\text{ remains})",
          "explanation": "Because every $x$ cancels, the limiting value carries no $x$ at all, which is a useful check that we handled the algebra correctly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.01}{0.0049958} \\approx 2.00",
          "explanation": "At $x = 0.1$ the exact value is about $2.00$, confirming our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x^2}{1 - \\cos x} \\approx 2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "percentage error"],
    "questionText": "Using the approximation $\\sin\\theta \\approx \\theta$, find the percentage error when it is used to estimate $\\sin 0.15$, where $0.15$ is measured in radians. Give your answer to $2$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the percentage error formula",
          "workingLatex": "\\text{percentage error} = \\dfrac{|\\text{approx} - \\text{true}|}{\\text{true}} \\times 100",
          "explanation": "Percentage error compares the size of the mistake to the true value, then scales it to a percentage. This tells us how good the approximation really is.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the approximate value",
          "workingLatex": "\\text{approx} = \\theta = 0.15",
          "explanation": "The rule $\\sin\\theta \\approx \\theta$ simply replaces the sine by the angle, so our estimate is exactly $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the true value (radian mode)",
          "workingLatex": "\\sin 0.15 = 0.149438\\ldots",
          "explanation": "Because the angle is in radians, the calculator must be in radian mode. This gives the accurate value $0.149438$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the absolute error",
          "workingLatex": "|0.15 - 0.149438| = 0.000562",
          "explanation": "The size of the mistake is the difference between our estimate and the true value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the true value",
          "workingLatex": "\\dfrac{0.000562}{0.149438}",
          "explanation": "Dividing the error by the true value tells us how big the mistake is relative to what we were trying to find.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the fraction",
          "workingLatex": "\\dfrac{0.000562}{0.149438} = 0.003761\\ldots",
          "explanation": "This decimal is the fractional error before turning it into a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to a percentage",
          "workingLatex": "0.003761 \\times 100 = 0.3761\\ldots",
          "explanation": "Multiplying by $100$ expresses the fractional error as a percentage.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 2 significant figures",
          "workingLatex": "0.3761\\ldots \\approx 0.38",
          "explanation": "Rounding to $2$ significant figures gives $0.38$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the result",
          "workingLatex": "\\text{percentage error} \\approx 0.38\\%",
          "explanation": "The error is well under half a percent, which shows why $\\sin\\theta \\approx \\theta$ is so reliable for small angles.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{percentage error} \\approx 0.38\\%$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Simplify $\\dfrac{3x\\sin 2x}{1 - \\cos 2x}$ for small $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the approximations we need",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad 1 - \\cos\\theta \\approx \\tfrac{1}{2}\\theta^2",
          "explanation": "The numerator has a sine and the denominator has a $1 - \\cos$, so we prepare both small angle rules.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the sine",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "With angle $2x$ small, the sine is close to $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the numerator",
          "workingLatex": "3x\\sin 2x \\approx 3x \\times 2x = 6x^2",
          "explanation": "Multiplying the $3x$ outside by the $2x$ from the sine gives $6x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the denominator",
          "workingLatex": "1 - \\cos 2x \\approx \\tfrac{1}{2}(2x)^2",
          "explanation": "The gap $1 - \\cos 2x$ is about half the square of the angle $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the denominator",
          "workingLatex": "\\tfrac{1}{2}(2x)^2 = \\tfrac{1}{2}\\times 4x^2 = 2x^2",
          "explanation": "Squaring $2x$ gives $4x^2$, and halving gives $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the ratio",
          "workingLatex": "\\dfrac{3x\\sin 2x}{1 - \\cos 2x} \\approx \\dfrac{6x^2}{2x^2}",
          "explanation": "Both parts are now simple multiples of $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel and evaluate",
          "workingLatex": "\\dfrac{6x^2}{2x^2} = 3",
          "explanation": "The $x^2$ factors cancel, leaving $6 \\div 2 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{3x\\sin 2x}{1 - \\cos 2x} \\approx 3",
          "explanation": "The expression tends to the constant $3$ for small $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.0596008}{0.0199335} \\approx 2.99",
          "explanation": "At $x = 0.1$ the exact value is about $2.99$, close to $3$ as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3x\\sin 2x}{1 - \\cos 2x} \\approx 3$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{(\\tan 2x)^2}{1 - \\cos 2x}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the approximations we need",
          "workingLatex": "\\tan\\theta \\approx \\theta, \\qquad 1 - \\cos\\theta \\approx \\tfrac{1}{2}\\theta^2",
          "explanation": "The top involves a tangent and the bottom a $1 - \\cos$, so both small angle rules are needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the tangent",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "For small $x$ the angle $2x$ is small, so $\\tan 2x$ is close to $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square the numerator",
          "workingLatex": "(\\tan 2x)^2 \\approx (2x)^2",
          "explanation": "We square the approximation because the whole tangent is squared.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerator",
          "workingLatex": "(2x)^2 = 4x^2",
          "explanation": "Squaring $2x$ gives $4x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximate the denominator",
          "workingLatex": "1 - \\cos 2x \\approx \\tfrac{1}{2}(2x)^2",
          "explanation": "The gap $1 - \\cos 2x$ is about half the square of $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the denominator",
          "workingLatex": "\\tfrac{1}{2}(2x)^2 = 2x^2",
          "explanation": "Half of $4x^2$ is $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the ratio",
          "workingLatex": "\\dfrac{(\\tan 2x)^2}{1 - \\cos 2x} \\approx \\dfrac{4x^2}{2x^2}",
          "explanation": "Both parts are simple multiples of $x^2$, ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel and evaluate",
          "workingLatex": "\\dfrac{4x^2}{2x^2} = 2",
          "explanation": "The $x^2$ factors cancel, leaving $4 \\div 2 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State and sense check",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.041091}{0.0199335} \\approx 2.06",
          "explanation": "The approximation is $2$, and at $x = 0.1$ the exact value is about $2.06$, close to $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{(\\tan 2x)^2}{1 - \\cos 2x} \\approx 2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["small angle approximations", "limits"],
    "questionText": "For small $x$, find an approximation for $(\\sin x)(\\cos x)$, keeping only the leading term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For small $x$ the sine is close to the angle itself, so $\\sin x \\approx x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the full cosine approximation",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "The cosine of a small angle is just below $1$, differing by the small amount $\\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Keep only the leading term of the cosine",
          "workingLatex": "\\cos x \\approx 1",
          "explanation": "Since we only want the leading term of the product, we keep the dominant part of the cosine, which is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Explain why the extra piece is dropped",
          "workingLatex": "x\\left(-\\tfrac{1}{2}x^2\\right) = -\\tfrac{1}{2}x^3 \\;\\ll\\; x",
          "explanation": "Multiplying $x$ by the discarded $-\\tfrac{1}{2}x^2$ would only add a much smaller $x^3$ term. Since $x^3$ is tiny compared with $x$, dropping it is justified for the leading term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the approximations",
          "workingLatex": "(\\sin x)(\\cos x) \\approx (x)(1)",
          "explanation": "We combine the two leading approximations, $x$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "(x)(1) = x",
          "explanation": "Multiplying by $1$ leaves the product as simply $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cross-check with a double angle identity",
          "workingLatex": "(\\sin x)(\\cos x) = \\tfrac{1}{2}\\sin 2x \\approx \\tfrac{1}{2}(2x) = x",
          "explanation": "Using $\\sin 2x = 2\\sin x\\cos x$ gives the same leading term $x$, which is reassuring.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the approximation",
          "workingLatex": "(\\sin x)(\\cos x) \\approx x",
          "explanation": "To leading order the product behaves just like $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad (\\sin 0.1)(\\cos 0.1) = 0.09933 \\approx 0.1",
          "explanation": "At $x = 0.1$ the exact product is $0.09933$, very close to $0.1$, confirming the leading term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(\\sin x)(\\cos x) \\approx x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{1 - \\cos 3x}{x^2}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the cosine gap approximation",
          "workingLatex": "1 - \\cos\\theta \\approx \\tfrac{1}{2}\\theta^2",
          "explanation": "For small angles the gap between $1$ and $\\cos\\theta$ is close to half the square of the angle. This directly handles the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply it with angle 3x",
          "workingLatex": "1 - \\cos 3x \\approx \\tfrac{1}{2}(3x)^2",
          "explanation": "Here the angle is $3x$, so the gap is about half the square of $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerator",
          "workingLatex": "\\tfrac{1}{2}(3x)^2 = \\tfrac{1}{2}\\times 9x^2 = \\tfrac{9}{2}x^2",
          "explanation": "Squaring $3x$ gives $9x^2$, and halving gives $\\tfrac{9}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the fraction",
          "workingLatex": "\\dfrac{1 - \\cos 3x}{x^2} \\approx \\dfrac{\\tfrac{9}{2}x^2}{x^2}",
          "explanation": "We place the simplified numerator over the unchanged denominator $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{\\tfrac{9}{2}x^2}{x^2} = \\dfrac{9}{2}",
          "explanation": "The $x^2$ factors cancel, leaving the constant coefficient $\\tfrac{9}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Express as a decimal",
          "workingLatex": "\\dfrac{9}{2} = 4.5",
          "explanation": "Writing it as $4.5$ makes the size of the answer easy to picture.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{1 - \\cos 3x}{x^2} \\approx \\dfrac{9}{2}",
          "explanation": "The expression approaches the fixed value $\\tfrac{9}{2}$ as $x$ becomes small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the result is constant",
          "workingLatex": "\\text{answer} = \\dfrac{9}{2} \\;\\; (\\text{no } x \\text{ remains})",
          "explanation": "Every $x$ has cancelled, so the limiting value is a pure number, a good sign the working is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.0446635}{0.01} \\approx 4.47",
          "explanation": "At $x = 0.1$ the exact value is about $4.47$, close to $4.5$ and getting closer as $x$ shrinks.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 - \\cos 3x}{x^2} \\approx \\dfrac{9}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Show that $\\dfrac{\\tan x - \\sin x}{x^3} \\approx \\dfrac{1}{2}$ for small $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See why the crudest approximations fail",
          "workingLatex": "\\tan x \\approx x, \\quad \\sin x \\approx x \\;\\Rightarrow\\; \\tan x - \\sin x \\approx 0",
          "explanation": "If we replace both terms by $x$, their difference collapses to $0$ while the bottom $x^3$ also heads to $0$, giving the useless form $\\tfrac{0}{0}$. We must keep more detail, so we factor the numerator first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write tangent as sine over cosine",
          "workingLatex": "\\tan x = \\dfrac{\\sin x}{\\cos x}",
          "explanation": "Turning $\\tan x$ into $\\tfrac{\\sin x}{\\cos x}$ exposes a common factor of $\\sin x$ with the second term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the numerator",
          "workingLatex": "\\tan x - \\sin x = \\dfrac{\\sin x}{\\cos x} - \\sin x",
          "explanation": "Substituting the previous line into the numerator prepares it for factoring.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out sine",
          "workingLatex": "= \\sin x\\left(\\dfrac{1}{\\cos x} - 1\\right)",
          "explanation": "Both terms share a factor of $\\sin x$; pulling it out isolates the small difference in the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the bracket over one denominator",
          "workingLatex": "\\dfrac{1}{\\cos x} - 1 = \\dfrac{1 - \\cos x}{\\cos x}",
          "explanation": "Writing the bracket as a single fraction reveals the familiar quantity $1 - \\cos x$, which we know how to approximate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the factored numerator",
          "workingLatex": "\\tan x - \\sin x = \\dfrac{\\sin x\\,(1 - \\cos x)}{\\cos x}",
          "explanation": "The numerator is now a product of pieces whose small angle behaviour is standard.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write down the approximations we need",
          "workingLatex": "\\sin x \\approx x, \\quad 1 - \\cos x \\approx \\tfrac{1}{2}x^2, \\quad \\cos x \\approx 1",
          "explanation": "Each factor gets its leading small angle value: sine behaves like $x$, the cosine gap like $\\tfrac{1}{2}x^2$, and the cosine in the denominator like $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Replace the sine factor",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "The leading behaviour of $\\sin x$ is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Replace the cosine gap",
          "workingLatex": "1 - \\cos x \\approx \\tfrac{1}{2}x^2",
          "explanation": "This is the crucial second-order piece; keeping it is what stops the answer collapsing to zero.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Replace the cosine in the denominator",
          "workingLatex": "\\cos x \\approx 1",
          "explanation": "In the denominator only the leading value $1$ matters, since finer detail would affect higher-order terms we are ignoring.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute everything in",
          "workingLatex": "\\tan x - \\sin x \\approx \\dfrac{x \\times \\tfrac{1}{2}x^2}{1}",
          "explanation": "Putting the three approximations into the factored form gives a clean product on top.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the numerator",
          "workingLatex": "x \\times \\tfrac{1}{2}x^2 = \\tfrac{1}{2}x^3",
          "explanation": "Multiplying $x$ by $\\tfrac{1}{2}x^2$ produces a leading $x^3$ term, matching the $x^3$ in the denominator of the original expression.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Divide by the cube",
          "workingLatex": "\\dfrac{\\tan x - \\sin x}{x^3} \\approx \\dfrac{\\tfrac{1}{2}x^3}{x^3}",
          "explanation": "Now we bring back the original denominator $x^3$ and divide.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Cancel to reach the result",
          "workingLatex": "\\dfrac{\\tfrac{1}{2}x^3}{x^3} = \\dfrac{1}{2}",
          "explanation": "The $x^3$ factors cancel exactly, leaving the required constant $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{0.100335 - 0.099833}{0.001} \\approx 0.502",
          "explanation": "At $x = 0.1$ the exact value is about $0.502$, comfortably close to $\\tfrac{1}{2}$, which confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\tan x - \\sin x}{x^3} \\approx \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["small angle approximations", "proof"],
    "questionText": "Starting from the identity $\\cos\\theta = 1 - 2\\sin^2\\!\\left(\\dfrac{\\theta}{2}\\right)$ and the approximation $\\sin\\!\\left(\\dfrac{\\theta}{2}\\right) \\approx \\dfrac{\\theta}{2}$, derive the small angle approximation $\\cos\\theta \\approx 1 - \\dfrac{\\theta^2}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the aim",
          "workingLatex": "\\text{Aim: show } \\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "We want to build the cosine approximation from a known exact identity plus the simplest sine approximation, so that nothing is assumed without justification.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the double angle formula for cosine",
          "workingLatex": "\\cos 2A = \\cos^2 A - \\sin^2 A",
          "explanation": "This standard identity relates the cosine of a doubled angle to the sine and cosine of the original angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the Pythagorean identity",
          "workingLatex": "\\cos^2 A = 1 - \\sin^2 A",
          "explanation": "Since $\\sin^2 A + \\cos^2 A = 1$, we can trade $\\cos^2 A$ for $1 - \\sin^2 A$, expressing everything through sine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Derive the identity we will use",
          "workingLatex": "\\cos 2A = (1 - \\sin^2 A) - \\sin^2 A = 1 - 2\\sin^2 A",
          "explanation": "Substituting shows exactly why $\\cos 2A = 1 - 2\\sin^2 A$; this holds for every angle, with no approximation yet.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the doubled angle equal to theta",
          "workingLatex": "2A = \\theta \\;\\Rightarrow\\; A = \\tfrac{\\theta}{2}",
          "explanation": "Choosing $A = \\tfrac{\\theta}{2}$ makes the doubled angle exactly $\\theta$, which is what we want on the left.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the exact identity in theta",
          "workingLatex": "\\cos\\theta = 1 - 2\\sin^2\\!\\left(\\tfrac{\\theta}{2}\\right)",
          "explanation": "This is the given identity, and it is still exact, valid for all $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note the small angle condition",
          "workingLatex": "\\theta \\text{ small (radians)} \\;\\Rightarrow\\; \\tfrac{\\theta}{2} \\text{ small}",
          "explanation": "If $\\theta$ is a small angle in radians, then half of it is smaller still, so the sine approximation applies to the half-angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the sine approximation",
          "workingLatex": "\\sin\\!\\left(\\tfrac{\\theta}{2}\\right) \\approx \\tfrac{\\theta}{2}",
          "explanation": "For the small half-angle the sine is close to the angle itself. This step is only valid because the angle is measured in radians.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the identity",
          "workingLatex": "\\cos\\theta \\approx 1 - 2\\left(\\tfrac{\\theta}{2}\\right)^2",
          "explanation": "Replacing the sine of the half-angle by the half-angle introduces the approximation for the first time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square the bracket",
          "workingLatex": "\\left(\\tfrac{\\theta}{2}\\right)^2 = \\tfrac{\\theta^2}{4}",
          "explanation": "Squaring the half-angle gives $\\tfrac{\\theta^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the squared term",
          "workingLatex": "\\cos\\theta \\approx 1 - 2\\times\\tfrac{\\theta^2}{4}",
          "explanation": "Placing $\\tfrac{\\theta^2}{4}$ back in leaves a single arithmetic simplification.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the coefficient",
          "workingLatex": "2\\times\\tfrac{\\theta^2}{4} = \\tfrac{\\theta^2}{2}",
          "explanation": "The factor of $2$ cancels one of the $4$s in the denominator, giving $\\tfrac{\\theta^2}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the derived approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{\\theta^2}{2}",
          "explanation": "This is exactly the small angle cosine approximation we set out to prove.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm with a numerical check",
          "workingLatex": "\\theta = 0.2:\\quad \\cos 0.2 = 0.98007, \\quad 1 - \\tfrac{0.2^2}{2} = 0.98",
          "explanation": "At $\\theta = 0.2$ radians the true cosine is $0.98007$ and the approximation gives $0.98$, agreeing closely and confirming the derivation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\theta \\approx 1 - \\dfrac{\\theta^2}{2} \\quad \\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find an approximation for $\\dfrac{\\cos 3x - 1}{x\\tan 2x}$ when $x$ is small.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to treat top and bottom separately",
          "workingLatex": "\\text{numerator: } \\cos 3x - 1, \\qquad \\text{denominator: } x\\tan 2x",
          "explanation": "The expression mixes a cosine on top with a tangent on the bottom, so it is cleanest to approximate each part on its own and then divide.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2",
          "explanation": "For small angles the cosine sits just below $1$, differing by $\\tfrac{1}{2}\\theta^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply it to cos 3x",
          "workingLatex": "\\cos 3x \\approx 1 - \\tfrac{1}{2}(3x)^2",
          "explanation": "Using the rule with angle $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the numerator",
          "workingLatex": "\\cos 3x - 1 \\approx -\\tfrac{1}{2}(3x)^2",
          "explanation": "Subtracting $1$ removes the leading $1$, leaving the negative small term. The minus sign is important and carries through to the answer.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "-\\tfrac{1}{2}(3x)^2 = -\\tfrac{1}{2}\\times 9x^2 = -\\tfrac{9}{2}x^2",
          "explanation": "Squaring $3x$ gives $9x^2$, and halving with the minus sign gives $-\\tfrac{9}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For small angles the tangent is close to the angle itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply it to tan 2x",
          "workingLatex": "\\tan 2x \\approx 2x",
          "explanation": "With angle $2x$ small, the tangent is about $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the denominator",
          "workingLatex": "x\\tan 2x \\approx x \\times 2x = 2x^2",
          "explanation": "Multiplying the outside $x$ by the approximated tangent $2x$ gives $2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the ratio",
          "workingLatex": "\\dfrac{\\cos 3x - 1}{x\\tan 2x} \\approx \\dfrac{-\\tfrac{9}{2}x^2}{2x^2}",
          "explanation": "Both parts are multiples of $x^2$, so the fraction is ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Clear the compound fraction",
          "workingLatex": "\\dfrac{-\\tfrac{9}{2}x^2}{2x^2} = \\dfrac{-9x^2}{4x^2}",
          "explanation": "Dividing $-\\tfrac{9}{2}$ by $2$ is the same as putting a $4$ underneath, giving $-\\tfrac{9}{4}$ times $\\tfrac{x^2}{x^2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{-9x^2}{4x^2} = -\\dfrac{9}{4}",
          "explanation": "The $x^2$ factors cancel, leaving the constant $-\\tfrac{9}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Express as a decimal",
          "workingLatex": "-\\dfrac{9}{4} = -2.25",
          "explanation": "Writing it as $-2.25$ makes the size and sign easy to read.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the approximation",
          "workingLatex": "\\dfrac{\\cos 3x - 1}{x\\tan 2x} \\approx -\\dfrac{9}{4}",
          "explanation": "The expression tends to the fixed value $-\\tfrac{9}{4}$ for small $x$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.05:\\quad \\dfrac{-0.011229}{0.00501675} \\approx -2.24",
          "explanation": "At $x = 0.05$ the exact value is about $-2.24$, close to $-2.25$ and improving as $x$ shrinks.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\cos 3x - 1}{x\\tan 2x} \\approx -\\dfrac{9}{4}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["small angle approximations", "limits"],
    "questionText": "Find $\\displaystyle\\lim_{x \\to 0}\\left(\\dfrac{\\sin 3x}{2x} - \\dfrac{1 - \\cos x}{x^2}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan to handle each part separately",
          "workingLatex": "\\text{part A: } \\dfrac{\\sin 3x}{2x}, \\qquad \\text{part B: } \\dfrac{1 - \\cos x}{x^2}",
          "explanation": "The limit of a difference is the difference of the limits, so we find the limit of each fraction on its own and then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the approximations we need",
          "workingLatex": "\\sin\\theta \\approx \\theta, \\qquad 1 - \\cos\\theta \\approx \\tfrac{1}{2}\\theta^2",
          "explanation": "Part A needs the sine rule and part B needs the cosine gap rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the first numerator",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "For small $x$ the angle $3x$ is small, so $\\sin 3x$ is close to $3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into part A",
          "workingLatex": "\\dfrac{\\sin 3x}{2x} \\approx \\dfrac{3x}{2x}",
          "explanation": "Replacing the sine gives a simple ratio of multiples of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cancel in part A",
          "workingLatex": "\\dfrac{3x}{2x} = \\dfrac{3}{2}",
          "explanation": "The $x$ factors cancel, leaving $\\tfrac{3}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the limit of part A",
          "workingLatex": "\\dfrac{\\sin 3x}{2x} \\to \\dfrac{3}{2}",
          "explanation": "So the first fraction tends to $\\tfrac{3}{2}$ as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Approximate the second numerator",
          "workingLatex": "1 - \\cos x \\approx \\tfrac{1}{2}x^2",
          "explanation": "The gap between $1$ and $\\cos x$ is about half the square of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into part B",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2} \\approx \\dfrac{\\tfrac{1}{2}x^2}{x^2}",
          "explanation": "Replacing the numerator gives a ratio of multiples of $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel in part B",
          "workingLatex": "\\dfrac{\\tfrac{1}{2}x^2}{x^2} = \\dfrac{1}{2}",
          "explanation": "The $x^2$ factors cancel, leaving $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limit of part B",
          "workingLatex": "\\dfrac{1 - \\cos x}{x^2} \\to \\dfrac{1}{2}",
          "explanation": "So the second fraction tends to $\\tfrac{1}{2}$ as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Subtract the two limits",
          "workingLatex": "\\dfrac{3}{2} - \\dfrac{1}{2}",
          "explanation": "The overall limit is the first limit minus the second.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify",
          "workingLatex": "\\dfrac{3}{2} - \\dfrac{1}{2} = \\dfrac{2}{2} = 1",
          "explanation": "The fractions share a denominator, so we subtract the numerators to get $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the limit",
          "workingLatex": "\\lim_{x \\to 0}\\left(\\dfrac{\\sin 3x}{2x} - \\dfrac{1 - \\cos x}{x^2}\\right) = 1",
          "explanation": "The whole expression approaches $1$ as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.01:\\quad 1.49978 - 0.50000 \\approx 1.00",
          "explanation": "At $x = 0.01$ the two parts are about $1.49978$ and $0.5$, whose difference is about $1.00$, confirming the limit.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\lim_{x \\to 0}\\left(\\dfrac{\\sin 3x}{2x} - \\dfrac{1 - \\cos x}{x^2}\\right) = 1$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["small angle approximations", "binomial approximation"],
    "questionText": "For small $x$, find an approximation for $\\sec x = \\dfrac{1}{\\cos x}$, up to and including the term in $x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write secant as a reciprocal",
          "workingLatex": "\\sec x = \\dfrac{1}{\\cos x}",
          "explanation": "Secant is just one over cosine, so approximating $\\sec x$ means approximating $\\tfrac{1}{\\cos x}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the cosine",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "We keep the cosine up to its $x^2$ term, since we want the final answer to that order.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the reciprocal",
          "workingLatex": "\\sec x \\approx \\dfrac{1}{1 - \\tfrac{1}{2}x^2}",
          "explanation": "Replacing $\\cos x$ gives a reciprocal that is close to $\\tfrac{1}{1} = 1$ but not quite.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write as a negative power",
          "workingLatex": "= \\left(1 - \\tfrac{1}{2}x^2\\right)^{-1}",
          "explanation": "Writing the reciprocal as a power of $-1$ lets us use the binomial approximation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the binomial approximation",
          "workingLatex": "(1 + u)^{n} \\approx 1 + nu \\quad (u \\text{ small})",
          "explanation": "For a small quantity $u$, raising $1 + u$ to any power $n$ is close to $1 + nu$. This is the standard first-order binomial expansion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify u and n",
          "workingLatex": "1 - \\tfrac{1}{2}x^2 = 1 + u, \\quad u = -\\tfrac{1}{2}x^2, \\quad n = -1",
          "explanation": "Matching our expression to $1 + u$ shows $u = -\\tfrac{1}{2}x^2$, and the power is $n = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm u is small",
          "workingLatex": "x \\text{ small} \\;\\Rightarrow\\; u = -\\tfrac{1}{2}x^2 \\text{ small}",
          "explanation": "Because $x$ is small, $u$ is even smaller, so the binomial approximation is valid here.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the approximation",
          "workingLatex": "(1 + u)^{-1} \\approx 1 + (-1)u = 1 - u",
          "explanation": "With $n = -1$ the expansion becomes $1 - u$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute u back in",
          "workingLatex": "1 - u = 1 - \\left(-\\tfrac{1}{2}x^2\\right)",
          "explanation": "Putting $u = -\\tfrac{1}{2}x^2$ back in turns the subtraction of a negative into an addition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify",
          "workingLatex": "1 - \\left(-\\tfrac{1}{2}x^2\\right) = 1 + \\tfrac{1}{2}x^2",
          "explanation": "Subtracting a negative adds it, giving $1 + \\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the approximation",
          "workingLatex": "\\sec x \\approx 1 + \\tfrac{1}{2}x^2",
          "explanation": "So secant is a little larger than $1$, which makes sense because cosine is a little smaller than $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the sign is consistent",
          "workingLatex": "\\cos x < 1 \\;\\Rightarrow\\; \\sec x = \\tfrac{1}{\\cos x} > 1",
          "explanation": "Dividing $1$ by something slightly less than $1$ gives a result slightly bigger than $1$, agreeing with the $+\\tfrac{1}{2}x^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense check with a small value",
          "workingLatex": "x = 0.1:\\quad \\dfrac{1}{\\cos 0.1} = 1.00502, \\quad 1 + \\tfrac{0.1^2}{2} = 1.005",
          "explanation": "At $x = 0.1$ the true secant is $1.00502$ and the approximation gives $1.005$, matching closely.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sec x \\approx 1 + \\dfrac{x^2}{2}$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "equations"],
    "questionText": "Solve the equation $1 - \\cos x = 0.045$ for small $x$ (in radians), using a small angle approximation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the small angle structure",
          "workingLatex": "1 - \\cos x = 0.045",
          "explanation": "Because the right-hand side is small, the angle $x$ must be small too, so a small angle approximation will let us solve this without inverse trig.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine approximation",
          "workingLatex": "\\cos x \\approx 1 - \\tfrac{1}{2}x^2",
          "explanation": "For a small angle the cosine is close to $1 - \\tfrac{1}{2}x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the cosine gap",
          "workingLatex": "1 - \\cos x \\approx \\tfrac{1}{2}x^2",
          "explanation": "Subtracting the approximation from $1$ leaves the simple expression $\\tfrac{1}{2}x^2$ for the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the left-hand side",
          "workingLatex": "\\tfrac{1}{2}x^2 = 0.045",
          "explanation": "Swapping $1 - \\cos x$ for its approximation turns the trig equation into a simple quadratic in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate x squared",
          "workingLatex": "x^2 = 2 \\times 0.045",
          "explanation": "Multiplying both sides by $2$ removes the fraction and leaves $x^2$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the right-hand side",
          "workingLatex": "x^2 = 0.09",
          "explanation": "Doubling $0.045$ gives $0.09$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take square roots",
          "workingLatex": "x = \\pm\\sqrt{0.09}",
          "explanation": "Solving $x^2 = 0.09$ gives two roots, one positive and one negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the root",
          "workingLatex": "\\sqrt{0.09} = 0.3",
          "explanation": "Since $0.3^2 = 0.09$, the square root is exactly $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write both solutions",
          "workingLatex": "x = \\pm 0.3",
          "explanation": "So the two candidate solutions are $+0.3$ and $-0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Select the small positive root",
          "workingLatex": "x = 0.3",
          "explanation": "The question asks for the small angle, and it is conventional to take the positive root, so we keep $x = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the angle really is small",
          "workingLatex": "0.3 \\text{ rad} \\approx 17^\\circ",
          "explanation": "An angle of about $17^\\circ$ is genuinely small, so using the small angle approximation was justified.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the solution",
          "workingLatex": "x \\approx 0.3",
          "explanation": "The small positive solution of the equation is $x \\approx 0.3$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense check against the original",
          "workingLatex": "\\cos 0.3 = 0.9553, \\quad 1 - 0.9553 = 0.0447 \\approx 0.045",
          "explanation": "Substituting $x = 0.3$ back gives $1 - \\cos 0.3 \\approx 0.0447$, very close to the required $0.045$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 0.3$"
    }
  },
{
    "id": "al.y2.pure.small-angles.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["small angle approximations", "polygon", "limit"],
    "questionText": "A regular polygon with $n$ sides is inscribed in a circle of radius $r$. Its perimeter is $P = 2nr\\sin\\dfrac{\\pi}{n}$. Show that as $n$ becomes large, $P \\to 2\\pi r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the perimeter formula and the goal",
          "workingLatex": "P = 2nr\\sin\\frac{\\pi}{n}, \\qquad \\text{show } P \\to 2\\pi r",
          "explanation": "We are given the exact perimeter of the polygon and want to see what it tends to as the number of sides $n$ grows without bound.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the angle inside the sine",
          "workingLatex": "\\text{each side subtends } \\frac{2\\pi}{n}, \\quad \\text{half-angle } = \\frac{\\pi}{n}",
          "explanation": "The full angle at the centre, $2\\pi$, is split equally among the $n$ sides. The $\\dfrac{\\pi}{n}$ inside the sine is half of one such angle, coming from splitting each isosceles triangle down the middle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Examine the size of the angle for large n",
          "workingLatex": "n \\to \\infty \\implies \\frac{\\pi}{n} \\to 0",
          "explanation": "As we add more and more sides, the angle $\\dfrac{\\pi}{n}$ shrinks towards zero, which is exactly the regime where a small angle approximation is accurate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the small angle approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\theta \\text{ small, in radians})",
          "explanation": "For a small angle measured in radians, the sine of the angle is very nearly equal to the angle itself, because the sine curve is almost a straight line of gradient $1$ near the origin.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the small angle equal to the argument",
          "workingLatex": "\\theta = \\frac{\\pi}{n}",
          "explanation": "We match the general approximation to our specific situation by letting $\\theta$ be the angle $\\dfrac{\\pi}{n}$ that appears in the perimeter formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the approximation",
          "workingLatex": "\\sin\\frac{\\pi}{n} \\approx \\frac{\\pi}{n}",
          "explanation": "Replacing the sine of the small angle by the angle itself turns an awkward trigonometric expression into a simple fraction we can manipulate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the approximation into the perimeter",
          "workingLatex": "P \\approx 2nr \\cdot \\frac{\\pi}{n}",
          "explanation": "Putting the approximation back into $P = 2nr\\sin\\dfrac{\\pi}{n}$ gives an expression in which the $n$ can be dealt with directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the factor of n",
          "workingLatex": "P \\approx 2\\pi r \\cdot \\frac{n}{n} = 2\\pi r",
          "explanation": "The $n$ in the numerator (from the $2nr$) cancels with the $n$ in the denominator (from $\\dfrac{\\pi}{n}$), leaving a result that no longer depends on $n$ at all.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the perimeter exactly to justify the limit",
          "workingLatex": "P = 2nr\\sin\\frac{\\pi}{n} = 2\\pi r \\cdot \\frac{\\sin(\\pi/n)}{\\pi/n}",
          "explanation": "To make the argument rigorous rather than just approximate, we factor out $2\\pi r$ so the remaining bracket is exactly the standard ratio $\\dfrac{\\sin u}{u}$ with $u = \\dfrac{\\pi}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the standard limit of the sine ratio",
          "workingLatex": "\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1",
          "explanation": "This fundamental limit is the precise statement behind $\\sin u \\approx u$: as the angle vanishes the ratio of sine to angle tends exactly to one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the limit of the bracket",
          "workingLatex": "\\frac{\\pi}{n} \\to 0 \\implies \\frac{\\sin(\\pi/n)}{\\pi/n} \\to 1",
          "explanation": "Since $\\dfrac{\\pi}{n} \\to 0$ as $n \\to \\infty$, the bracket approaches $1$, so the only surviving factor is the constant in front.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the limit of the perimeter",
          "workingLatex": "P \\to 2\\pi r \\cdot 1 = 2\\pi r",
          "explanation": "Multiplying the constant $2\\pi r$ by the limiting value $1$ of the bracket gives the exact limit of the perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check against the circle",
          "workingLatex": "2\\pi r = \\text{circumference of a circle of radius } r",
          "explanation": "This is a satisfying check: as the polygon gains more sides it hugs the circle ever more tightly, so its perimeter should approach the circle's circumference, which is exactly $2\\pi r$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical confirmation",
          "workingLatex": "n = 1000:\\quad 2000\\sin\\frac{\\pi}{1000} \\approx 6.28317, \\qquad 2\\pi \\approx 6.28319",
          "explanation": "With $r = 1$ and a thousand sides the polygon perimeter already agrees with $2\\pi$ to five decimal places, confirming the limit numerically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\to 2\\pi r$ as $n \\to \\infty$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["small angle approximations", "polygon", "area", "limit"],
    "questionText": "A regular polygon with $n$ sides is inscribed in a circle of radius $r$. Its area is $A = \\dfrac{1}{2} n r^2 \\sin\\dfrac{2\\pi}{n}$. Show that as $n$ becomes large, $A \\to \\pi r^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the area formula and the goal",
          "workingLatex": "A = \\tfrac{1}{2} n r^2 \\sin\\frac{2\\pi}{n}, \\qquad \\text{show } A \\to \\pi r^2",
          "explanation": "We start from the exact area of the inscribed polygon and want to determine what value it approaches as the number of sides increases indefinitely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "See the polygon as n triangles",
          "workingLatex": "A = n \\cdot \\tfrac{1}{2} r^2 \\sin\\frac{2\\pi}{n}",
          "explanation": "The polygon splits into $n$ identical isosceles triangles, each with two sides of length $r$ and apex angle $\\dfrac{2\\pi}{n}$, so each has area $\\tfrac{1}{2}r^2\\sin\\dfrac{2\\pi}{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Examine the apex angle for large n",
          "workingLatex": "n \\to \\infty \\implies \\frac{2\\pi}{n} \\to 0",
          "explanation": "As the number of triangles grows, each apex angle $\\dfrac{2\\pi}{n}$ becomes tiny, which is precisely when the small angle approximation is reliable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the small angle approximation for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\theta \\text{ small, in radians})",
          "explanation": "Near zero the sine of an angle in radians is almost equal to the angle, because the graph of sine is nearly a straight line through the origin there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the small angle equal to the argument",
          "workingLatex": "\\theta = \\frac{2\\pi}{n}",
          "explanation": "We identify the small angle in our formula, $\\dfrac{2\\pi}{n}$, as the $\\theta$ in the general approximation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the approximation",
          "workingLatex": "\\sin\\frac{2\\pi}{n} \\approx \\frac{2\\pi}{n}",
          "explanation": "Swapping the sine of the small angle for the angle itself replaces the trigonometric term with a simple algebraic fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the approximation into the area",
          "workingLatex": "A \\approx \\tfrac{1}{2} n r^2 \\cdot \\frac{2\\pi}{n}",
          "explanation": "Substituting into $A = \\tfrac{1}{2} n r^2 \\sin\\dfrac{2\\pi}{n}$ produces an expression where the dependence on $n$ can be resolved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the factor of n",
          "workingLatex": "A \\approx \\tfrac{1}{2} \\cdot 2\\pi \\cdot r^2 \\cdot \\frac{n}{n} = \\pi r^2",
          "explanation": "The $n$ from $\\tfrac{1}{2}nr^2$ cancels with the $n$ in the denominator, and the half combines with the two to leave simply $\\pi r^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the area exactly to justify the limit",
          "workingLatex": "A = \\pi r^2 \\cdot \\frac{\\sin(2\\pi/n)}{2\\pi/n}",
          "explanation": "Factoring out $\\pi r^2$ leaves exactly the ratio $\\dfrac{\\sin u}{u}$ with $u = \\dfrac{2\\pi}{n}$, which lets us pass from approximation to a genuine limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recall the standard limit of the sine ratio",
          "workingLatex": "\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1",
          "explanation": "This is the exact form of the small angle approximation: the ratio of sine to angle tends to one as the angle shrinks to nothing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the limit of the bracket",
          "workingLatex": "\\frac{2\\pi}{n} \\to 0 \\implies \\frac{\\sin(2\\pi/n)}{2\\pi/n} \\to 1",
          "explanation": "Because $\\dfrac{2\\pi}{n} \\to 0$, the bracket tends to $1$, so it stops affecting the value and only the leading constant remains.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the limit of the area",
          "workingLatex": "A \\to \\pi r^2 \\cdot 1 = \\pi r^2",
          "explanation": "The constant factor $\\pi r^2$ multiplied by the limiting value $1$ gives the exact limit of the polygon's area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check against the circle",
          "workingLatex": "\\pi r^2 = \\text{area of a circle of radius } r",
          "explanation": "As the polygon acquires more sides it fills the circle more and more completely, so its area should tend to the circle's area $\\pi r^2$, which is exactly what we found.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical confirmation",
          "workingLatex": "n = 1000:\\quad \\tfrac{1}{2}(1000)\\sin\\frac{2\\pi}{1000} \\approx 3.14157, \\qquad \\pi \\approx 3.14159",
          "explanation": "With $r = 1$ and a thousand sides the polygon area already matches $\\pi$ to four decimal places, giving a numerical check of the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\to \\pi r^2$ as $n \\to \\infty$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": ["small angle approximations", "next-order", "arc", "chord"],
    "questionText": "A chord of a circle of radius $r$ subtends a small angle $\\theta$ at the centre. The arc length is $r\\theta$ and the chord length is $2r\\sin\\dfrac{\\theta}{2}$. Using the next-order approximation $\\sin u \\approx u - \\dfrac{u^3}{6}$, show that $\\text{arc} - \\text{chord} \\approx \\dfrac{r\\theta^3}{24}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two lengths and the goal",
          "workingLatex": "\\text{arc} = r\\theta, \\qquad \\text{chord} = 2r\\sin\\frac{\\theta}{2}",
          "explanation": "We record the exact arc and chord lengths and aim to find how much longer the arc is than the straight chord for a small angle $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Anticipate that leading terms cancel",
          "workingLatex": "\\text{leading order: } 2r\\cdot\\frac{\\theta}{2} = r\\theta = \\text{arc}",
          "explanation": "To first order the chord already equals the arc, so their difference is hidden in the smaller cubic terms. This tells us the crude approximation $\\sin u \\approx u$ is not enough and we must keep the next term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the next-order approximation",
          "workingLatex": "\\sin u \\approx u - \\frac{u^3}{6}",
          "explanation": "Keeping the cubic term captures the gentle bending of the sine curve away from the straight line $y = u$, and it is exactly this correction that measures the gap between arc and chord.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the small argument",
          "workingLatex": "u = \\frac{\\theta}{2}",
          "explanation": "The chord formula contains $\\sin\\dfrac{\\theta}{2}$, so we apply the approximation with $u = \\dfrac{\\theta}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cube of the argument",
          "workingLatex": "u^3 = \\left(\\frac{\\theta}{2}\\right)^3 = \\frac{\\theta^3}{8}",
          "explanation": "Cubing $\\dfrac{\\theta}{2}$ gives $\\dfrac{\\theta^3}{8}$, which we will need for the correction term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the approximation to the half-angle sine",
          "workingLatex": "\\sin\\frac{\\theta}{2} \\approx \\frac{\\theta}{2} - \\frac{1}{6}\\cdot\\frac{\\theta^3}{8} = \\frac{\\theta}{2} - \\frac{\\theta^3}{48}",
          "explanation": "Substituting $u = \\dfrac{\\theta}{2}$ into $u - \\dfrac{u^3}{6}$ and simplifying the fraction $\\dfrac{1}{6}\\cdot\\dfrac{1}{8} = \\dfrac{1}{48}$ gives the sharper estimate of the half-angle sine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the chord length",
          "workingLatex": "\\text{chord} = 2r\\sin\\frac{\\theta}{2} \\approx 2r\\left(\\frac{\\theta}{2} - \\frac{\\theta^3}{48}\\right)",
          "explanation": "Multiplying the approximated sine by $2r$ turns it into an estimate of the actual chord length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the bracket",
          "workingLatex": "\\text{chord} \\approx r\\theta - \\frac{2r\\theta^3}{48} = r\\theta - \\frac{r\\theta^3}{24}",
          "explanation": "Distributing the $2r$ gives a leading term $r\\theta$ (matching the arc) minus a small cubic correction $\\dfrac{r\\theta^3}{24}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write down the arc length",
          "workingLatex": "\\text{arc} = r\\theta",
          "explanation": "The arc length is exact and simple, with no correction terms, so it is just $r\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Subtract chord from arc",
          "workingLatex": "\\text{arc} - \\text{chord} \\approx r\\theta - \\left(r\\theta - \\frac{r\\theta^3}{24}\\right)",
          "explanation": "Taking the difference lines up the two expressions so the equal leading parts can be removed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cancel the leading terms",
          "workingLatex": "\\text{arc} - \\text{chord} \\approx r\\theta - r\\theta + \\frac{r\\theta^3}{24} = \\frac{r\\theta^3}{24}",
          "explanation": "The $r\\theta$ terms cancel exactly, leaving only the cubic correction. This confirms that the gap between arc and chord is a third-order effect.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on neglected terms",
          "workingLatex": "\\text{next correction is order } \\theta^5, \\text{ negligible for small } \\theta",
          "explanation": "The terms we dropped are of order $\\theta^5$ and smaller, so for a genuinely small angle they contribute far less than the $\\theta^3$ term we kept, and the result is a good approximation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check with a concrete angle",
          "workingLatex": "r=1,\\ \\theta=0.2:\\quad \\text{arc}=0.2,\\ \\text{chord}=2\\sin 0.1 \\approx 0.199667",
          "explanation": "Taking a unit radius and $\\theta = 0.2$ radians, we compute the actual arc and chord to test the formula against real numbers.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the derived formula",
          "workingLatex": "\\text{arc}-\\text{chord} \\approx 0.000333, \\qquad \\frac{r\\theta^3}{24} = \\frac{0.008}{24} \\approx 0.000333",
          "explanation": "The true difference $0.000333$ agrees to three significant figures with $\\dfrac{r\\theta^3}{24}$, confirming the derivation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{arc} - \\text{chord} \\approx \\dfrac{r\\theta^3}{24}$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "next-order", "limit"],
    "questionText": "Find an approximation for $\\dfrac{x - \\sin x}{x^3}$ for small $x$, using $\\sin x \\approx x - \\dfrac{x^3}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\frac{x - \\sin x}{x^3}, \\qquad x \\text{ small}",
          "explanation": "We want a simple numerical value that this fraction settles down to as $x$ becomes small.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test naive substitution",
          "workingLatex": "x \\to 0:\\quad \\frac{0 - 0}{0} \\ \\text{(indeterminate)}",
          "explanation": "Substituting $x = 0$ directly gives the meaningless form $\\dfrac{0}{0}$, so we must expand the sine carefully rather than just plug in.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise the need for the cubic term",
          "workingLatex": "\\sin x \\approx x \\implies x - \\sin x \\approx 0",
          "explanation": "The crude approximation $\\sin x \\approx x$ makes the numerator vanish, which loses all information. Because the denominator is $x^3$, we need the sine expanded up to its $x^3$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the next-order approximation",
          "workingLatex": "\\sin x \\approx x - \\frac{x^3}{6}",
          "explanation": "Keeping the cubic term records how the sine curve dips below the line $y = x$, which is exactly the part that survives in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the numerator",
          "workingLatex": "x - \\sin x \\approx x - \\left(x - \\frac{x^3}{6}\\right)",
          "explanation": "Replacing $\\sin x$ by its expansion sets up a cancellation of the leading $x$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "x - x + \\frac{x^3}{6} = \\frac{x^3}{6}",
          "explanation": "The two $x$ terms cancel and we are left with just the cubic piece $\\dfrac{x^3}{6}$, showing the numerator is genuinely of order $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the full ratio",
          "workingLatex": "\\frac{x - \\sin x}{x^3} \\approx \\frac{x^3/6}{x^3}",
          "explanation": "Placing the simplified numerator over $x^3$ prepares the fraction for cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the powers of x",
          "workingLatex": "\\frac{x^3/6}{x^3} = \\frac{1}{6}",
          "explanation": "The $x^3$ in the numerator cancels with the $x^3$ in the denominator, leaving the pure constant $\\dfrac{1}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why matching orders mattered",
          "workingLatex": "\\text{num } \\sim x^3, \\quad \\text{den } = x^3 \\implies \\text{finite ratio}",
          "explanation": "Because the numerator and denominator are both of order $x^3$, their ratio approaches a finite non-zero constant rather than $0$ or infinity.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Comment on neglected terms",
          "workingLatex": "\\text{dropped terms are order } x^5, \\text{ vanish in the limit}",
          "explanation": "The next term in the sine expansion is of order $x^5$, contributing an order-$x^2$ piece to the ratio that vanishes as $x \\to 0$, so it does not change the limit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the limiting value",
          "workingLatex": "\\frac{x - \\sin x}{x^3} \\to \\frac{1}{6} \\approx 0.1667",
          "explanation": "The fraction tends to $\\dfrac{1}{6}$, which as a decimal is about $0.1667$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check at a small value",
          "workingLatex": "x = 0.1:\\quad \\sin 0.1 \\approx 0.0998334, \\quad x - \\sin x \\approx 0.00016658",
          "explanation": "Choosing $x = 0.1$, we compute the actual numerator to test the prediction with real numbers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare with the predicted value",
          "workingLatex": "\\frac{0.00016658}{0.001} \\approx 0.16658 \\ \\approx \\ \\tfrac{1}{6}",
          "explanation": "Dividing by $x^3 = 0.001$ gives $0.16658$, agreeing closely with $\\dfrac{1}{6} = 0.16667$ and confirming our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{x - \\sin x}{x^3} \\to \\dfrac{1}{6}$ as $x \\to 0$."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["small angle approximations", "limit", "cosine"],
    "questionText": "Find an approximation for $\\dfrac{\\sin 2x\\,(1 - \\cos 3x)}{x^3}$ for small $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\frac{\\sin 2x\\,(1 - \\cos 3x)}{x^3}, \\qquad x \\text{ small}",
          "explanation": "We want the constant value this expression approaches as $x$ tends to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the indeterminate form",
          "workingLatex": "x \\to 0:\\quad \\frac{0 \\cdot 0}{0} \\ \\text{(indeterminate)}",
          "explanation": "Both $\\sin 2x$ and $1 - \\cos 3x$ vanish at $x = 0$, and so does the denominator, so we must approximate each factor to the right order.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "For a small angle the sine is approximately the angle, so $\\sin 2x$ behaves like $2x$ to leading order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "Near zero the cosine dips below $1$ by an amount proportional to the square of the angle, which is the key to handling the $1 - \\cos$ factor.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply it with angle 3x",
          "workingLatex": "\\cos 3x \\approx 1 - \\frac{(3x)^2}{2} = 1 - \\frac{9x^2}{2}",
          "explanation": "Setting the angle to $3x$ and squaring gives the correction $\\dfrac{9x^2}{2}$ below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the second factor",
          "workingLatex": "1 - \\cos 3x \\approx 1 - \\left(1 - \\frac{9x^2}{2}\\right) = \\frac{9x^2}{2}",
          "explanation": "Subtracting the approximation from $1$ cancels the ones and leaves a clean quadratic term $\\dfrac{9x^2}{2}$, showing this factor is of order $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply the two approximated factors",
          "workingLatex": "\\sin 2x\\,(1 - \\cos 3x) \\approx (2x)\\left(\\frac{9x^2}{2}\\right)",
          "explanation": "Combining the leading behaviours of both factors gives the leading behaviour of the whole numerator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "(2x)\\left(\\frac{9x^2}{2}\\right) = 9x^3",
          "explanation": "The $2$ and the $\\dfrac{1}{2}$ cancel, and $x \\cdot x^2 = x^3$, so the numerator is approximately $9x^3$ and is genuinely of order $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form the full ratio",
          "workingLatex": "\\frac{\\sin 2x\\,(1 - \\cos 3x)}{x^3} \\approx \\frac{9x^3}{x^3}",
          "explanation": "Dividing the approximated numerator by $x^3$ sets up the final cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cancel the powers of x",
          "workingLatex": "\\frac{9x^3}{x^3} = 9",
          "explanation": "The cubic powers cancel, leaving the constant $9$ with no dependence on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the orders match",
          "workingLatex": "\\text{num order } x^3 = \\text{den order } x^3 \\implies \\text{finite limit}",
          "explanation": "Since numerator and denominator share the same order $x^3$, the ratio tends to a finite non-zero number rather than blowing up or collapsing to zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the limiting value",
          "workingLatex": "\\frac{\\sin 2x\\,(1 - \\cos 3x)}{x^3} \\to 9",
          "explanation": "The expression settles down to the value $9$ as $x \\to 0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at a small value",
          "workingLatex": "x = 0.05:\\quad \\sin 0.1 \\approx 0.0998334, \\quad 1 - \\cos 0.15 \\approx 0.011229",
          "explanation": "Choosing $x = 0.05$, we evaluate each true factor to compare with the prediction.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the predicted value",
          "workingLatex": "\\frac{0.0998334 \\times 0.011229}{0.000125} \\approx 8.97 \\ \\approx \\ 9",
          "explanation": "The actual ratio comes out near $8.97$, close to $9$, with the small shortfall due to higher-order terms — a good confirmation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 2x\\,(1 - \\cos 3x)}{x^3} \\to 9$ as $x \\to 0$."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "limit", "ratio"],
    "questionText": "Show that $\\dfrac{\\sin 5x}{\\sin 3x} \\to \\dfrac{5}{3}$ as $x \\to 0$, and estimate its value at $x = 0.02$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\frac{\\sin 5x}{\\sin 3x}, \\qquad x \\to 0",
          "explanation": "We want to find the limiting value of this ratio of sines as $x$ approaches zero, then estimate it at a specific small value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the indeterminate form",
          "workingLatex": "x \\to 0:\\quad \\frac{\\sin 0}{\\sin 0} = \\frac{0}{0} \\ \\text{(indeterminate)}",
          "explanation": "Both top and bottom vanish at $x = 0$, so direct substitution fails and we approximate each sine instead.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the numerator",
          "workingLatex": "\\sin 5x \\approx 5x",
          "explanation": "For a small angle the sine equals the angle to leading order, so $\\sin 5x$ behaves like $5x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the denominator",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "By the same reasoning, $\\sin 3x$ behaves like $3x$ when $x$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the ratio of approximations",
          "workingLatex": "\\frac{\\sin 5x}{\\sin 3x} \\approx \\frac{5x}{3x}",
          "explanation": "Replacing each sine by its leading term turns the ratio into a simple algebraic fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor of x",
          "workingLatex": "\\frac{5x}{3x} = \\frac{5}{3}",
          "explanation": "The $x$ cancels top and bottom, leaving the constant $\\dfrac{5}{3}$ independent of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why first order is enough",
          "workingLatex": "\\text{both } \\sim x \\implies \\text{no cancellation of leading terms}",
          "explanation": "Unlike expressions where leading terms cancel, here the numerator and denominator are each of order $x$ and neither vanishes faster, so the crude $\\sin\\theta \\approx \\theta$ suffices.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the limit",
          "workingLatex": "\\frac{\\sin 5x}{\\sin 3x} \\to \\frac{5}{3} \\approx 1.667",
          "explanation": "The ratio tends to $\\dfrac{5}{3}$, which as a decimal is about $1.667$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the numerical estimate",
          "workingLatex": "x = 0.02:\\quad 5x = 0.1, \\quad 3x = 0.06",
          "explanation": "To estimate the value at $x = 0.02$ we first find the two angles involved, $0.1$ and $0.06$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the numerator sine",
          "workingLatex": "\\sin 0.1 \\approx 0.0998334",
          "explanation": "We compute the actual sine of the numerator angle rather than its approximation, to make the check meaningful.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the denominator sine",
          "workingLatex": "\\sin 0.06 \\approx 0.0599640",
          "explanation": "Likewise we compute the true sine of the denominator angle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the numerical ratio",
          "workingLatex": "\\frac{0.0998334}{0.0599640} \\approx 1.6649",
          "explanation": "Dividing the two true sines gives the actual value of the expression at $x = 0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare with the limit",
          "workingLatex": "1.6649 \\ \\approx \\ \\frac{5}{3} = 1.6667",
          "explanation": "The computed value $1.6649$ is very close to $\\dfrac{5}{3} = 1.6667$, confirming both the limit and the quality of the small angle approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin 5x}{\\sin 3x} \\to \\dfrac{5}{3} \\approx 1.667$; at $x = 0.02$ the value is about $1.665$."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "optics", "Snell's law"],
    "questionText": "In optics, Snell's law is $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. For small angles this becomes $n_1\\theta_1 \\approx n_2\\theta_2$. A ray passes from air ($n_1 = 1$) into glass ($n_2 = 1.5$) with angle of incidence $\\theta_1 = 0.1$ rad. Find the angle of refraction $\\theta_2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State Snell's law and the goal",
          "workingLatex": "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2, \\qquad \\text{find } \\theta_2",
          "explanation": "Snell's law relates the angles a light ray makes on either side of a boundary; we want the refraction angle $\\theta_2$ inside the glass.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the angles are small",
          "workingLatex": "\\theta_1 = 0.1 \\text{ rad is small}",
          "explanation": "An angle of $0.1$ radians is small, and the refracted angle will be smaller still, so the small angle approximation is justified.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the small angle approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta \\implies n_1\\theta_1 \\approx n_2\\theta_2",
          "explanation": "Replacing each sine by its angle turns Snell's law into a simple linear relationship between the two angles, which is far easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "(1)(0.1) \\approx (1.5)\\,\\theta_2",
          "explanation": "Putting in $n_1 = 1$, $n_2 = 1.5$ and $\\theta_1 = 0.1$ leaves a single unknown, $\\theta_2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the refraction angle",
          "workingLatex": "\\theta_2 \\approx \\frac{0.1}{1.5}",
          "explanation": "Dividing both sides by $1.5$ isolates $\\theta_2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the fraction",
          "workingLatex": "\\theta_2 \\approx 0.06667",
          "explanation": "Carrying out the division gives approximately $0.06667$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round the answer",
          "workingLatex": "\\theta_2 \\approx 0.0667 \\text{ rad (3 s.f.)}",
          "explanation": "Rounding to three significant figures gives $0.0667$ radians for the angle of refraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result physically",
          "workingLatex": "\\theta_2 < \\theta_1 \\text{ since } n_2 > n_1",
          "explanation": "The ray bends towards the normal on entering the denser glass, so the refraction angle is smaller than the incidence angle, which is exactly what we found.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the approximation is reasonable",
          "workingLatex": "0.1 \\text{ rad} \\approx 5.7^\\circ \\text{ (small)}",
          "explanation": "Converting shows the incidence angle is only about $5.7^\\circ$, comfortably small, so we expect the approximation to be accurate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the exact comparison",
          "workingLatex": "\\sin\\theta_2 = \\frac{\\sin 0.1}{1.5} = \\frac{0.0998334}{1.5} \\approx 0.0665556",
          "explanation": "To test the approximation we solve Snell's law exactly, using the true sine of the incidence angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Invert to find the exact angle",
          "workingLatex": "\\theta_2 = \\arcsin(0.0665556) \\approx 0.066605",
          "explanation": "Taking the inverse sine gives the exact refraction angle to compare against our approximate value.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare approximate and exact values",
          "workingLatex": "0.0667 \\ \\approx \\ 0.06660",
          "explanation": "The approximate value $0.0667$ matches the exact $0.06660$ to three significant figures, confirming the small angle method is trustworthy here.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answer",
          "workingLatex": "\\theta_2 \\approx 0.0667 \\text{ rad}",
          "explanation": "The angle of refraction inside the glass is about $0.0667$ radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta_2 \\approx 0.0667$ rad (3 s.f.)."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["small angle approximations", "cosine", "expansion"],
    "questionText": "Find an approximation for $\\cos^2 x$ for small $x$, up to the term in $x^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\cos^2 x, \\qquad \\text{approximate up to } x^2",
          "explanation": "We want a polynomial approximation of $\\cos^2 x$ for small $x$, keeping terms up to and including $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos x \\approx 1 - \\frac{x^2}{2}",
          "explanation": "For a small angle the cosine falls just below $1$ by half the square of the angle, which is the standard second-order approximation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the square in terms of the approximation",
          "workingLatex": "\\cos^2 x \\approx \\left(1 - \\frac{x^2}{2}\\right)^2",
          "explanation": "Since $\\cos^2 x$ is just $\\cos x$ squared, we square the approximation for $\\cos x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "\\left(1 - \\frac{x^2}{2}\\right)^2 = 1 - 2\\cdot\\frac{x^2}{2} + \\left(\\frac{x^2}{2}\\right)^2",
          "explanation": "Using $(a - b)^2 = a^2 - 2ab + b^2$ with $a = 1$ and $b = \\dfrac{x^2}{2}$ expands the square term by term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the individual terms",
          "workingLatex": "= 1 - x^2 + \\frac{x^4}{4}",
          "explanation": "The middle term simplifies to $-x^2$ and the last term to $\\dfrac{x^4}{4}$, giving a tidy polynomial.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the orders present",
          "workingLatex": "1 \\ (x^0), \\quad -x^2 \\ (x^2), \\quad \\frac{x^4}{4} \\ (x^4)",
          "explanation": "The expansion contains a constant, an $x^2$ term, and an $x^4$ term; only the first two are within the requested order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Discard the higher-order term",
          "workingLatex": "\\frac{x^4}{4} \\text{ is order } x^4 \\text{, drop it}",
          "explanation": "For small $x$ the $x^4$ term is far smaller than the $x^2$ term, and it exceeds the order we were asked to keep, so we discard it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the approximation",
          "workingLatex": "\\cos^2 x \\approx 1 - x^2",
          "explanation": "Keeping only terms up to $x^2$ gives the clean approximation $1 - x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up an independent check via the double angle",
          "workingLatex": "\\cos^2 x = \\frac{1 + \\cos 2x}{2}",
          "explanation": "The double angle identity offers a second route to the same result, giving us a way to verify the answer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Approximate the doubled cosine",
          "workingLatex": "\\cos 2x \\approx 1 - \\frac{(2x)^2}{2} = 1 - 2x^2",
          "explanation": "Applying the cosine approximation with angle $2x$ gives $1 - 2x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute into the identity",
          "workingLatex": "\\cos^2 x \\approx \\frac{1 + (1 - 2x^2)}{2} = \\frac{2 - 2x^2}{2}",
          "explanation": "Inserting the approximation into the identity and combining the constants prepares a final simplification.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify to confirm the result",
          "workingLatex": "\\frac{2 - 2x^2}{2} = 1 - x^2",
          "explanation": "This second method gives exactly $1 - x^2$, matching the first derivation and confirming our approximation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Numerical check at a small value",
          "workingLatex": "x = 0.1:\\quad \\cos^2 0.1 \\approx 0.990033, \\qquad 1 - x^2 = 0.99",
          "explanation": "At $x = 0.1$ the true value $0.990033$ is extremely close to the approximation $0.99$, the tiny difference being the neglected $x^4$ term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos^2 x \\approx 1 - x^2$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["small angle approximations", "binomial", "first order"],
    "questionText": "Find an approximation for $\\dfrac{1 + \\sin 2x}{1 - \\sin x}$ for small $x$, up to the term in $x$ (first order).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\frac{1 + \\sin 2x}{1 - \\sin x}, \\qquad \\text{keep up to } x^1",
          "explanation": "We want a linear approximation of this fraction for small $x$, keeping only the constant and the term in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Approximate the two sines",
          "workingLatex": "\\sin 2x \\approx 2x, \\qquad \\sin x \\approx x",
          "explanation": "To first order each sine equals its angle, so we replace $\\sin 2x$ by $2x$ and $\\sin x$ by $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the numerator",
          "workingLatex": "1 + \\sin 2x \\approx 1 + 2x",
          "explanation": "Substituting into the top gives the simple linear expression $1 + 2x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the denominator",
          "workingLatex": "1 - \\sin x \\approx 1 - x",
          "explanation": "Substituting into the bottom gives $1 - x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the fraction as a product",
          "workingLatex": "\\frac{1 + 2x}{1 - x} = (1 + 2x)(1 - x)^{-1}",
          "explanation": "Writing the division as multiplication by $(1 - x)^{-1}$ lets us use a binomial approximation on the awkward denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the reciprocal to first order",
          "workingLatex": "(1 - x)^{-1} \\approx 1 + x",
          "explanation": "For small $x$, $\\dfrac{1}{1 - x} \\approx 1 + x$ by the binomial (or geometric series) approximation, keeping only the first-order term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the reciprocal approximation",
          "workingLatex": "\\frac{1 + \\sin 2x}{1 - \\sin x} \\approx (1 + 2x)(1 + x)",
          "explanation": "Replacing $(1 - x)^{-1}$ by $1 + x$ turns the whole expression into a product of two simple brackets.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the product",
          "workingLatex": "(1 + 2x)(1 + x) = 1 + x + 2x + 2x^2",
          "explanation": "Multiplying out term by term gives a constant, two linear terms, and a quadratic term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect like terms",
          "workingLatex": "= 1 + 3x + 2x^2",
          "explanation": "Adding the linear terms $x + 2x = 3x$ tidies the expansion.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Discard the second-order term",
          "workingLatex": "2x^2 \\text{ is order } x^2, \\text{ drop it}",
          "explanation": "Since we only want terms up to first order, the $x^2$ term lies beyond our required accuracy and is removed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the first-order approximation",
          "workingLatex": "\\frac{1 + \\sin 2x}{1 - \\sin x} \\approx 1 + 3x",
          "explanation": "Keeping only the constant and linear parts gives the neat approximation $1 + 3x$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check at a small value",
          "workingLatex": "x = 0.05:\\quad \\frac{1 + \\sin 0.1}{1 - \\sin 0.05} \\approx \\frac{1.099833}{0.950021} \\approx 1.1577",
          "explanation": "At $x = 0.05$ the true value of the fraction is about $1.1577$, which we compare with the approximation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compare with the approximation",
          "workingLatex": "1 + 3(0.05) = 1.15 \\ \\approx \\ 1.1577",
          "explanation": "The first-order value $1.15$ is close to the true $1.1577$; the small gap is the neglected $x^2$ and higher terms, confirming the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{1 + \\sin 2x}{1 - \\sin x} \\approx 1 + 3x$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "proof",
    "tags": ["small angle approximations", "squeeze theorem", "limit"],
    "questionText": "Using a sector of a circle of radius $1$ and comparing the areas of the inner triangle, the sector, and the outer triangle ($\\tfrac{1}{2}\\sin\\theta \\le \\tfrac{1}{2}\\theta \\le \\tfrac{1}{2}\\tan\\theta$), show that $\\sin\\theta \\le \\theta \\le \\tan\\theta$ for small positive $\\theta$, and deduce that $\\dfrac{\\sin\\theta}{\\theta} \\to 1$ as $\\theta \\to 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the unit circle sector",
          "workingLatex": "\\text{unit circle, radius } 1, \\text{ small angle } \\theta > 0",
          "explanation": "We work in a circle of radius $1$ and mark out a thin sector of angle $\\theta$, from which three nested regions can be compared.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the inner triangle area",
          "workingLatex": "\\text{inner triangle area} = \\tfrac{1}{2}\\sin\\theta",
          "explanation": "The triangle formed by the two radii and the chord has area $\\tfrac{1}{2}(1)(1)\\sin\\theta$, using the formula for the area of a triangle from two sides and the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sector area",
          "workingLatex": "\\text{sector area} = \\tfrac{1}{2}(1)^2\\theta = \\tfrac{1}{2}\\theta",
          "explanation": "The area of a sector of radius $1$ and angle $\\theta$ (in radians) is $\\tfrac{1}{2}r^2\\theta$, which reduces to $\\tfrac{1}{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the outer triangle area",
          "workingLatex": "\\text{outer triangle area} = \\tfrac{1}{2}(1)\\tan\\theta = \\tfrac{1}{2}\\tan\\theta",
          "explanation": "The larger right-angled triangle, built on the tangent at one radius, has base $1$ and height $\\tan\\theta$, giving area $\\tfrac{1}{2}\\tan\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Order the three regions by containment",
          "workingLatex": "\\text{inner triangle} \\subset \\text{sector} \\subset \\text{outer triangle}",
          "explanation": "Geometrically the inner triangle sits inside the sector, which in turn sits inside the outer triangle, so their areas are in increasing order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the area inequality",
          "workingLatex": "\\tfrac{1}{2}\\sin\\theta \\le \\tfrac{1}{2}\\theta \\le \\tfrac{1}{2}\\tan\\theta",
          "explanation": "The containment of the regions translates directly into this chain of inequalities between their areas.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by 2",
          "workingLatex": "\\sin\\theta \\le \\theta \\le \\tan\\theta",
          "explanation": "Clearing the common factor of $\\tfrac{1}{2}$ gives the required inequality relating sine, the angle, and tangent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide through by the positive sine",
          "workingLatex": "1 \\le \\frac{\\theta}{\\sin\\theta} \\le \\frac{\\tan\\theta}{\\sin\\theta}",
          "explanation": "For small positive $\\theta$, $\\sin\\theta > 0$, so dividing every part by $\\sin\\theta$ preserves the inequality directions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the right-hand side",
          "workingLatex": "\\frac{\\tan\\theta}{\\sin\\theta} = \\frac{\\sin\\theta/\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\cos\\theta}",
          "explanation": "Writing $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ and cancelling the sine turns the right bound into $\\dfrac{1}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the tidied inequality",
          "workingLatex": "1 \\le \\frac{\\theta}{\\sin\\theta} \\le \\frac{1}{\\cos\\theta}",
          "explanation": "This cleaner form traps the ratio $\\dfrac{\\theta}{\\sin\\theta}$ between $1$ and $\\dfrac{1}{\\cos\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take reciprocals to isolate the target ratio",
          "workingLatex": "\\cos\\theta \\le \\frac{\\sin\\theta}{\\theta} \\le 1",
          "explanation": "Reciprocating each positive part reverses the inequalities and produces bounds directly on $\\dfrac{\\sin\\theta}{\\theta}$, which is what we care about.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the limit of the lower bound",
          "workingLatex": "\\theta \\to 0 \\implies \\cos\\theta \\to 1",
          "explanation": "As $\\theta$ shrinks to zero the cosine tends to $1$, so the lower bound approaches the same value as the upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply the squeeze",
          "workingLatex": "\\cos\\theta \\le \\frac{\\sin\\theta}{\\theta} \\le 1, \\quad \\text{both bounds} \\to 1",
          "explanation": "The ratio is squeezed between $\\cos\\theta$ and $1$; since both squeeze to $1$, the ratio is forced to the same limit.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the limit",
          "workingLatex": "\\frac{\\sin\\theta}{\\theta} \\to 1 \\text{ as } \\theta \\to 0",
          "explanation": "By the squeeze theorem the ratio $\\dfrac{\\sin\\theta}{\\theta}$ tends to $1$, which is the rigorous foundation of the approximation $\\sin\\theta \\approx \\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Numerical confirmation",
          "workingLatex": "\\theta = 0.01:\\quad \\frac{\\sin 0.01}{0.01} \\approx 0.9999833",
          "explanation": "At $\\theta = 0.01$ the ratio is already within two hundred-thousandths of $1$, confirming the limit numerically.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\sin\\theta}{\\theta} \\to 1$ as $\\theta \\to 0$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": ["small angle approximations", "triple angle", "identity"],
    "questionText": "Using the triple angle formula $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$, show that $\\sin 3\\theta \\approx 3\\theta$ for small $\\theta$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the identity and the goal",
          "workingLatex": "\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta, \\qquad \\text{show } \\sin 3\\theta \\approx 3\\theta",
          "explanation": "We take the exact triple angle identity and use small angle reasoning to show its right-hand side reduces to $3\\theta$ when $\\theta$ is small.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the small angle approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\theta \\text{ small})",
          "explanation": "For a small angle the sine is approximately the angle itself, and we will apply this to every sine in the identity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Approximate the first term",
          "workingLatex": "3\\sin\\theta \\approx 3\\theta",
          "explanation": "Replacing $\\sin\\theta$ by $\\theta$ in the first term gives $3\\theta$, a first-order quantity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Approximate the cubed sine",
          "workingLatex": "\\sin^3\\theta \\approx \\theta^3",
          "explanation": "Cubing the approximation $\\sin\\theta \\approx \\theta$ gives $\\theta^3$, so the sine-cubed term behaves like $\\theta^3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Approximate the second term",
          "workingLatex": "4\\sin^3\\theta \\approx 4\\theta^3",
          "explanation": "Multiplying by $4$ gives the second term as approximately $4\\theta^3$, a third-order quantity.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute both approximations",
          "workingLatex": "\\sin 3\\theta \\approx 3\\theta - 4\\theta^3",
          "explanation": "Putting the two approximated terms back into the identity gives an expression with a first-order part and a third-order part.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the orders of the two terms",
          "workingLatex": "3\\theta \\ (\\text{order } \\theta), \\qquad 4\\theta^3 \\ (\\text{order } \\theta^3)",
          "explanation": "The first term is of order $\\theta$ while the second is of order $\\theta^3$, which is far smaller for a small angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Neglect the cubic term",
          "workingLatex": "\\theta \\text{ small} \\implies 4\\theta^3 \\ll 3\\theta",
          "explanation": "Because $\\theta^3$ is negligible compared with $\\theta$ when $\\theta$ is small, the cubic term contributes little and can be dropped to first order.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the first-order result",
          "workingLatex": "\\sin 3\\theta \\approx 3\\theta",
          "explanation": "Keeping only the leading term shows $\\sin 3\\theta$ is approximately $3\\theta$ for small $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Cross-check with the direct approximation",
          "workingLatex": "\\sin(3\\theta) \\approx 3\\theta \\text{ using } \\sin u \\approx u,\\ u = 3\\theta",
          "explanation": "Applying the small angle rule directly to $\\sin(3\\theta)$ with $u = 3\\theta$ gives the same answer, a reassuring consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why both routes agree",
          "workingLatex": "\\text{both discard order-}\\theta^3 \\text{ corrections}",
          "explanation": "Both the identity route and the direct route neglect the same $\\theta^3$ correction, so they must produce the same first-order result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Numerical check at a small value",
          "workingLatex": "\\theta = 0.05:\\quad \\sin 0.15 \\approx 0.149438, \\qquad 3\\theta = 0.15",
          "explanation": "At $\\theta = 0.05$ the true value $\\sin 0.15 \\approx 0.149438$ is very close to $3\\theta = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the cubic correction",
          "workingLatex": "3\\theta - 4\\theta^3 = 0.15 - 0.0005 = 0.1495 \\ \\approx \\ 0.149438",
          "explanation": "Including the cubic term gives $0.1495$, matching the true value even more closely, which confirms both the identity manipulation and the size of the neglected term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin 3\\theta \\approx 3\\theta$ for small $\\theta$. $\\blacksquare$"
    }
  },
  {
    "id": "al.y2.pure.small-angles.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "limit", "cosine"],
    "questionText": "For small $x$, $f(x) = \\dfrac{1 - \\cos 4x}{x\\sin 2x}$. Find the value $f(x)$ approaches as $x \\to 0$, and estimate $f(0.05)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function and the goal",
          "workingLatex": "f(x) = \\frac{1 - \\cos 4x}{x\\sin 2x}, \\qquad x \\to 0",
          "explanation": "We want the value $f(x)$ tends to as $x \\to 0$ and then a numerical estimate at $x = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the indeterminate form",
          "workingLatex": "x \\to 0:\\quad \\frac{1 - 1}{0 \\cdot 0} = \\frac{0}{0} \\ \\text{(indeterminate)}",
          "explanation": "Both numerator and denominator vanish at $x = 0$, so we approximate each part to the correct order rather than substituting directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "Near zero the cosine drops below $1$ by half the square of the angle, which lets us handle the $1 - \\cos$ numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply it with angle 4x",
          "workingLatex": "\\cos 4x \\approx 1 - \\frac{(4x)^2}{2} = 1 - 8x^2",
          "explanation": "Setting the angle to $4x$ and squaring gives a correction of $8x^2$ below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the numerator",
          "workingLatex": "1 - \\cos 4x \\approx 1 - (1 - 8x^2) = 8x^2",
          "explanation": "Subtracting from $1$ cancels the ones and leaves $8x^2$, so the numerator is of order $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Approximate the sine in the denominator",
          "workingLatex": "\\sin 2x \\approx 2x",
          "explanation": "For a small angle the sine equals the angle, so $\\sin 2x$ behaves like $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the denominator",
          "workingLatex": "x\\sin 2x \\approx x \\cdot 2x = 2x^2",
          "explanation": "Multiplying by the extra factor of $x$ gives a denominator of order $x^2$, matching the numerator's order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the full ratio",
          "workingLatex": "f(x) \\approx \\frac{8x^2}{2x^2}",
          "explanation": "Placing the approximated numerator over the approximated denominator sets up the cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the powers of x",
          "workingLatex": "\\frac{8x^2}{2x^2} = 4",
          "explanation": "The $x^2$ terms cancel and $\\dfrac{8}{2} = 4$, giving a constant independent of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limit",
          "workingLatex": "f(x) \\to 4 \\text{ as } x \\to 0",
          "explanation": "Because numerator and denominator are both of order $x^2$, the function tends to the finite value $4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the true numerator at x = 0.05",
          "workingLatex": "1 - \\cos 0.2 \\approx 1 - 0.980067 = 0.019933",
          "explanation": "For the estimate we compute the actual value $1 - \\cos 4x$ with $4x = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the true denominator at x = 0.05",
          "workingLatex": "0.05 \\times \\sin 0.1 \\approx 0.05 \\times 0.0998334 = 0.00499167",
          "explanation": "Similarly we compute the actual denominator $x\\sin 2x$ with $2x = 0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Form the numerical estimate and compare",
          "workingLatex": "f(0.05) \\approx \\frac{0.019933}{0.00499167} \\approx 3.99 \\ \\approx \\ 4",
          "explanation": "The computed value $3.99$ is very close to the limit $4$, confirming both the limit and the approximation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) \\to 4$ as $x \\to 0$; $f(0.05) \\approx 3.99$."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["small angle approximations", "cosine", "equation"],
    "questionText": "Solve, for small $x$ in radians, the equation $\\cos x = 0.98$ using a small angle approximation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and the goal",
          "workingLatex": "\\cos x = 0.98, \\qquad x \\text{ small}",
          "explanation": "We want the small positive solution of $\\cos x = 0.98$, using an approximation rather than the inverse cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify the small angle assumption",
          "workingLatex": "\\cos x = 0.98 \\text{ is close to } 1 \\implies x \\text{ small}",
          "explanation": "Since $0.98$ is only slightly less than $1$, the angle must be small, so the small angle approximation for cosine is appropriate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the cosine approximation",
          "workingLatex": "\\cos x \\approx 1 - \\frac{x^2}{2}",
          "explanation": "For a small angle the cosine falls below $1$ by half the square of the angle, which turns the trigonometric equation into an algebraic one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the approximation equal to 0.98",
          "workingLatex": "1 - \\frac{x^2}{2} = 0.98",
          "explanation": "Replacing $\\cos x$ by its approximation converts the problem into a simple quadratic equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the squared term",
          "workingLatex": "\\frac{x^2}{2} = 1 - 0.98 = 0.02",
          "explanation": "Rearranging brings the $\\dfrac{x^2}{2}$ term alone on one side, equal to the small gap $0.02$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply through by 2",
          "workingLatex": "x^2 = 0.04",
          "explanation": "Doubling both sides clears the fraction and gives $x^2$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "x = \\pm\\sqrt{0.04} = \\pm 0.2",
          "explanation": "Square rooting gives two solutions, but the problem asks for the small positive angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Select the positive small root",
          "workingLatex": "x \\approx 0.2 \\text{ rad}",
          "explanation": "Taking the positive root gives the required small solution $x \\approx 0.2$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the angle really is small",
          "workingLatex": "0.2 \\text{ rad} \\approx 11.5^\\circ",
          "explanation": "Converting shows the solution is about $11.5^\\circ$, small enough for the approximation to be reasonably accurate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by direct evaluation",
          "workingLatex": "\\cos 0.2 \\approx 0.980067",
          "explanation": "Computing the true cosine of $0.2$ gives $0.980067$, remarkably close to the target $0.98$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the exact solution for comparison",
          "workingLatex": "x = \\arccos(0.98) \\approx 0.20033",
          "explanation": "The exact solution from the inverse cosine is $0.20033$, giving a benchmark for our approximation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare approximate and exact values",
          "workingLatex": "0.2 \\ \\approx \\ 0.20033 \\ (\\text{agree to 3 s.f.})",
          "explanation": "The approximate answer $0.2$ matches the exact $0.20033$ to three significant figures, confirming the method works well.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain the small discrepancy",
          "workingLatex": "\\text{dropped } +\\frac{x^4}{24} \\text{ term makes exact } x \\text{ slightly larger}",
          "explanation": "The next term in the cosine expansion, $+\\dfrac{x^4}{24}$, was neglected; keeping it would nudge the solution up slightly, which is why the exact value is a touch above $0.2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\approx 0.2$ rad."
    }
  },
  {
    "id": "al.y2.pure.small-angles.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Small angle approximations",
    "subtopicId": "al.y2.pure.small-angles",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["small angle approximations", "limit", "tangent"],
    "questionText": "Find an approximation for $\\dfrac{\\tan 3x - \\sin 3x}{x^3}$ for small $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the expression and the goal",
          "workingLatex": "\\frac{\\tan 3x - \\sin 3x}{x^3}, \\qquad x \\text{ small}",
          "explanation": "We want the constant this fraction approaches as $x \\to 0$, where a difference of two nearly equal quantities sits over $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the indeterminate form",
          "workingLatex": "x \\to 0:\\quad \\frac{0 - 0}{0} \\ \\text{(indeterminate)}",
          "explanation": "Both $\\tan 3x$ and $\\sin 3x$ vanish at $x = 0$, so we must factor the difference carefully rather than substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write tangent in terms of sine and cosine",
          "workingLatex": "\\tan 3x - \\sin 3x = \\frac{\\sin 3x}{\\cos 3x} - \\sin 3x",
          "explanation": "Expressing the tangent as sine over cosine lets us combine the two terms over a common factor.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factor out the sine",
          "workingLatex": "= \\sin 3x\\left(\\frac{1}{\\cos 3x} - 1\\right)",
          "explanation": "Taking $\\sin 3x$ out as a common factor isolates the part that measures how far the cosine is from $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the bracket over a common denominator",
          "workingLatex": "= \\sin 3x \\cdot \\frac{1 - \\cos 3x}{\\cos 3x}",
          "explanation": "Writing the bracket as a single fraction reveals a $1 - \\cos 3x$ term, which we know how to approximate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin 3x \\approx 3x",
          "explanation": "For a small angle the sine equals the angle, so $\\sin 3x$ behaves like $3x$ to leading order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Approximate the cosine gap",
          "workingLatex": "1 - \\cos 3x \\approx \\frac{(3x)^2}{2} = \\frac{9x^2}{2}",
          "explanation": "Using $\\cos\\theta \\approx 1 - \\dfrac{\\theta^2}{2}$ with $\\theta = 3x$, the gap $1 - \\cos 3x$ is approximately $\\dfrac{9x^2}{2}$, a quadratic quantity.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Approximate the cosine in the denominator",
          "workingLatex": "\\cos 3x \\approx 1",
          "explanation": "In the denominator only the leading behaviour matters, and $\\cos 3x \\to 1$ for small $x$, so we take it as $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute all approximations",
          "workingLatex": "\\tan 3x - \\sin 3x \\approx (3x)\\cdot\\frac{9x^2/2}{1}",
          "explanation": "Combining the leading behaviours of each factor gives the leading behaviour of the whole numerator.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the numerator",
          "workingLatex": "(3x)\\left(\\frac{9x^2}{2}\\right) = \\frac{27x^3}{2}",
          "explanation": "Multiplying gives $\\dfrac{27x^3}{2}$, showing the difference is genuinely of order $x^3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form the full ratio",
          "workingLatex": "\\frac{\\tan 3x - \\sin 3x}{x^3} \\approx \\frac{27x^3/2}{x^3}",
          "explanation": "Dividing the approximated numerator by $x^3$ sets up the final cancellation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cancel the powers of x",
          "workingLatex": "\\frac{27x^3/2}{x^3} = \\frac{27}{2}",
          "explanation": "The $x^3$ terms cancel, leaving the constant $\\dfrac{27}{2}$ independent of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the limiting value",
          "workingLatex": "\\frac{\\tan 3x - \\sin 3x}{x^3} \\to \\frac{27}{2} = 13.5",
          "explanation": "The expression tends to $\\dfrac{27}{2}$, which is $13.5$ as a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Numerical check at a small value",
          "workingLatex": "x = 0.05:\\quad \\tan 0.15 \\approx 0.151135, \\quad \\sin 0.15 \\approx 0.149438",
          "explanation": "Choosing $x = 0.05$, we evaluate the true tangent and sine to test the prediction.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compare with the predicted value",
          "workingLatex": "\\frac{0.151135 - 0.149438}{0.000125} \\approx 13.58 \\ \\approx \\ 13.5",
          "explanation": "The actual ratio is about $13.58$, close to $\\dfrac{27}{2} = 13.5$, with the small excess coming from higher-order terms — a good confirmation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\tan 3x - \\sin 3x}{x^3} \\to \\dfrac{27}{2} = 13.5$ as $x \\to 0$."
    }
  },
];
