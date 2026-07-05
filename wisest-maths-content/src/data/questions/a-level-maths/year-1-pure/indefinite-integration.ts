import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.pure.integration.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "power-of-x"],
  "questionText": "Find $\\int 6x^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule for integrating a power of $x$",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Integration reverses differentiation. Differentiating multiplies by the power then drops it by one, so integrating undoes this by adding one to the power and dividing by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take the constant multiple outside",
        "workingLatex": "\\int 6x^{2} \\,dx = 6\\int x^{2} \\,dx",
        "explanation": "Integration is linear, so a constant factor can be pulled to the front and dealt with at the end. This lets us focus on integrating just the $x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "= 6 \\cdot \\frac{x^{2+1}}{2+1} + c",
        "explanation": "Here $n = 2$, so the new power is $2 + 1 = 3$ and we divide by that same $3$. This is the reverse of the power rule for differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the power expression",
        "workingLatex": "= 6 \\cdot \\frac{x^{3}}{3} + c",
        "explanation": "Writing out $2 + 1 = 3$ tidies the fraction before we combine the numbers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= 2x^{3} + c",
        "explanation": "Dividing the $6$ by the new power $3$ gives $2$. We keep $+c$ because any constant differentiates to zero, so infinitely many functions share this derivative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(2x^{3} + c\\right) = 6x^{2}",
        "explanation": "Differentiating our answer returns the original integrand $6x^{2}$, which confirms the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int 6x^{2} \\,dx = 2x^{3} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "power-of-x"],
  "questionText": "Find $\\int x^{5} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule for integrating a power of $x$",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "To integrate a power of $x$ we add one to the power and divide by the new power. This is exactly the reverse of what differentiation does.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = 5",
        "explanation": "The term is $x^{5}$, so the power we are working with is $5$. There is no coefficient in front, which is the same as a coefficient of $1$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "\\int x^{5} \\,dx = \\frac{x^{5+1}}{5+1} + c",
        "explanation": "Raising the power from $5$ to $6$ and dividing by that new $6$ follows the rule directly.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the power and denominator",
        "workingLatex": "= \\frac{x^{6}}{6} + c",
        "explanation": "Computing $5 + 1 = 6$ in both the exponent and the denominator gives the tidy form of the answer.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the meaning of the constant",
        "workingLatex": "\\frac{x^{6}}{6} + c",
        "explanation": "The $+c$ is essential: since a constant vanishes when differentiated, we cannot know its value from the integrand alone, so we include it to represent every possibility.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{6}}{6} + c\\right) = \\frac{6x^{5}}{6} = x^{5}",
        "explanation": "Differentiating brings the $6$ down and cancels the denominator, returning $x^{5}$. This matches the integrand, so the answer is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int x^{5} \\,dx = \\dfrac{x^{6}}{6} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "constant"],
  "questionText": "Find $\\int 7 \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the constant as a power of $x$",
        "workingLatex": "7 = 7x^{0}",
        "explanation": "Any number to the power zero equals $1$, so $7x^{0} = 7$. Writing the constant this way lets us use the same power rule as for any other term.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the rule for integrating a power of $x$",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "We add one to the power and divide by the new power. This reverses differentiation and works even when the power is zero.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the rule with the power zero",
        "workingLatex": "\\int 7x^{0} \\,dx = 7 \\cdot \\frac{x^{0+1}}{0+1} + c",
        "explanation": "The constant $7$ stays in front, and the power rises from $0$ to $1$ while we divide by that new $1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the result",
        "workingLatex": "= 7 \\cdot \\frac{x^{1}}{1} + c = 7x + c",
        "explanation": "Dividing by $1$ changes nothing, so integrating a constant simply multiplies it by $x$. This makes sense because $7x$ has a steady gradient of $7$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Include the constant of integration",
        "workingLatex": "7x + c",
        "explanation": "We add $+c$ because any constant differentiates to zero, so the integrand cannot tell us the vertical position of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(7x + c\\right) = 7",
        "explanation": "Differentiating $7x$ gives $7$ and the constant vanishes, returning the original integrand and confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int 7 \\,dx = 7x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "power-of-x"],
  "questionText": "Find $\\int 12x^{3} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule for integrating a power of $x$",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Integrating a power means adding one to the power and dividing by the new power, which reverses the effect of differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take the constant multiple outside",
        "workingLatex": "\\int 12x^{3} \\,dx = 12\\int x^{3} \\,dx",
        "explanation": "The constant factor $12$ can be pulled outside the integral, leaving the simpler task of integrating $x^{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "= 12 \\cdot \\frac{x^{3+1}}{3+1} + c",
        "explanation": "With $n = 3$, the power becomes $4$ and we divide by that same $4$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the power expression",
        "workingLatex": "= 12 \\cdot \\frac{x^{4}}{4} + c",
        "explanation": "Evaluating $3 + 1 = 4$ tidies the fraction before we deal with the coefficient.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= 3x^{4} + c",
        "explanation": "Dividing $12$ by the new power $4$ gives $3$. The $+c$ remains because the original derivative could have come from any vertical shift of this curve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(3x^{4} + c\\right) = 12x^{3}",
        "explanation": "Differentiating our answer returns $12x^{3}$, matching the integrand, so the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int 12x^{3} \\,dx = 3x^{4} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "polynomial"],
  "questionText": "Find $\\int \\left(3x^{2} + 2x\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule and integrate term by term",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Because integration is linear, we can integrate each term of a sum separately and add the results. We add one to each power and divide by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the integral into separate terms",
        "workingLatex": "\\int \\left(3x^{2} + 2x\\right) \\,dx = \\int 3x^{2} \\,dx + \\int 2x \\,dx",
        "explanation": "Separating the terms makes each piece a simple single-power integral that we can handle one at a time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the first term",
        "workingLatex": "\\int 3x^{2} \\,dx = 3 \\cdot \\frac{x^{3}}{3} = x^{3}",
        "explanation": "The power rises from $2$ to $3$, and dividing the coefficient $3$ by the new power $3$ leaves $1$, giving simply $x^{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the second term",
        "workingLatex": "\\int 2x \\,dx = 2 \\cdot \\frac{x^{2}}{2} = x^{2}",
        "explanation": "Here the power rises from $1$ to $2$, and dividing the coefficient $2$ by the new power $2$ gives $1$, leaving $x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine the results",
        "workingLatex": "= x^{3} + x^{2} + c",
        "explanation": "We add the integrated terms together and attach a single constant of integration for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the single constant",
        "workingLatex": "x^{3} + x^{2} + c",
        "explanation": "Only one $+c$ is needed, not one per term, because all the separate unknown constants combine into a single unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(x^{3} + x^{2} + c\\right) = 3x^{2} + 2x",
        "explanation": "Differentiating term by term returns the original integrand $3x^{2} + 2x$, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\left(3x^{2} + 2x\\right) \\,dx = x^{3} + x^{2} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "polynomial"],
  "questionText": "Find $\\int \\left(4x^{3} - 5\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule and integrate term by term",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Integration is linear, so we integrate each term separately, keeping the minus sign attached to the constant term throughout.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the integral into separate terms",
        "workingLatex": "\\int \\left(4x^{3} - 5\\right) \\,dx = \\int 4x^{3} \\,dx - \\int 5 \\,dx",
        "explanation": "Breaking the expression apart turns it into two straightforward integrals that we can evaluate one at a time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the first term",
        "workingLatex": "\\int 4x^{3} \\,dx = 4 \\cdot \\frac{x^{4}}{4} = x^{4}",
        "explanation": "The power rises from $3$ to $4$, and dividing the coefficient $4$ by the new power $4$ leaves $1$, giving $x^{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 5 \\,dx = 5x",
        "explanation": "Integrating a constant multiplies it by $x$, because a constant is really $5x^{0}$ and the power rises to $1$. The minus sign in front stays with this term.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine the results",
        "workingLatex": "= x^{4} - 5x + c",
        "explanation": "We join the integrated terms with the correct sign and add one constant of integration for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the single constant",
        "workingLatex": "x^{4} - 5x + c",
        "explanation": "One $+c$ covers all the unknown vertical shifts, since separate constants would simply merge into a single unknown value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(x^{4} - 5x + c\\right) = 4x^{3} - 5",
        "explanation": "Differentiating returns $4x^{3} - 5$, exactly the integrand, so the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\left(4x^{3} - 5\\right) \\,dx = x^{4} - 5x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "polynomial"],
  "questionText": "Find $\\int \\left(x^{2} + x + 1\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule and integrate term by term",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "We can integrate a sum by handling each term on its own, adding one to each power and dividing by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the integral into separate terms",
        "workingLatex": "\\int \\left(x^{2} + x + 1\\right) \\,dx = \\int x^{2} \\,dx + \\int x \\,dx + \\int 1 \\,dx",
        "explanation": "Each term becomes a simple single-power integral once the expression is separated out.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the $x^{2}$ term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "The power rises from $2$ to $3$ and we divide by that new power $3$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the $x$ term",
        "workingLatex": "\\int x \\,dx = \\frac{x^{2}}{2}",
        "explanation": "The power rises from $1$ to $2$ and we divide by that new power $2$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 1 \\,dx = x",
        "explanation": "Integrating the constant $1$ gives $x$, since $1 = x^{0}$ and the power rises to $1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Combine the results",
        "workingLatex": "= \\frac{x^{3}}{3} + \\frac{x^{2}}{2} + x + c",
        "explanation": "We add the three integrated terms and attach a single constant of integration for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} + \\frac{x^{2}}{2} + x + c\\right) = x^{2} + x + 1",
        "explanation": "Differentiating each term returns the original integrand $x^{2} + x + 1$, which confirms the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\left(x^{2} + x + 1\\right) \\,dx = \\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2} + x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "reverse-power-rule", "polynomial"],
  "questionText": "Find $\\int \\left(10x^{4} - 6x\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the rule and integrate term by term",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Integration is linear, so we integrate each term on its own, adding one to the power and dividing by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the integral into separate terms",
        "workingLatex": "\\int \\left(10x^{4} - 6x\\right) \\,dx = \\int 10x^{4} \\,dx - \\int 6x \\,dx",
        "explanation": "Separating the two terms turns the problem into two simple single-power integrals, keeping the minus sign with the second term.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the first term",
        "workingLatex": "\\int 10x^{4} \\,dx = 10 \\cdot \\frac{x^{5}}{5} = 2x^{5}",
        "explanation": "The power rises from $4$ to $5$, and dividing the coefficient $10$ by the new power $5$ gives $2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the second term",
        "workingLatex": "\\int 6x \\,dx = 6 \\cdot \\frac{x^{2}}{2} = 3x^{2}",
        "explanation": "The power rises from $1$ to $2$, and dividing the coefficient $6$ by the new power $2$ gives $3$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine the results",
        "workingLatex": "= 2x^{5} - 3x^{2} + c",
        "explanation": "We join the terms with the correct sign and add one constant of integration for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the single constant",
        "workingLatex": "2x^{5} - 3x^{2} + c",
        "explanation": "A single $+c$ is enough because the integrand gives no information about the curve's vertical position.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by differentiating back",
        "workingLatex": "\\frac{d}{dx}\\left(2x^{5} - 3x^{2} + c\\right) = 10x^{4} - 6x",
        "explanation": "Differentiating returns the integrand $10x^{4} - 6x$, so the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\left(10x^{4} - 6x\\right) \\,dx = 2x^{5} - 3x^{2} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "polynomial"],
  "questionText": "A curve has gradient function $\\frac{dy}{dx} = 2x + 3$ and passes through the point $(1, 6)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise that $y$ comes from integrating the gradient",
        "workingLatex": "y = \\int \\left(2x + 3\\right) \\,dx",
        "explanation": "The gradient function is the derivative of $y$, so integrating it reverses the differentiation and recovers $y$ itself.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = 2 \\cdot \\frac{x^{2}}{2} + 3x + c",
        "explanation": "The $2x$ integrates to $x^{2}$ and the constant $3$ integrates to $3x$. We must include $+c$ because integration leaves the vertical position unknown.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the general equation",
        "workingLatex": "y = x^{2} + 3x + c",
        "explanation": "This is the family of all curves with the given gradient; the point will pin down the exact one by fixing $c$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the given point to find $c$",
        "workingLatex": "6 = (1)^{2} + 3(1) + c",
        "explanation": "Since the curve passes through $(1, 6)$, substituting $x = 1$ and $y = 6$ must satisfy the equation, giving us an equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the right-hand side",
        "workingLatex": "6 = 1 + 3 + c = 4 + c",
        "explanation": "Working out the numbers gives $1 + 3 = 4$, so the equation becomes $6 = 4 + c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $c$",
        "workingLatex": "c = 6 - 4 = 2",
        "explanation": "Subtracting $4$ from both sides isolates the constant, giving $c = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the equation of the curve",
        "workingLatex": "y = x^{2} + 3x + 2",
        "explanation": "Replacing $c$ with its value gives the single curve that both has the right gradient and passes through the given point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the answer",
        "workingLatex": "\\frac{dy}{dx} = 2x + 3, \\quad (1)^{2} + 3(1) + 2 = 6",
        "explanation": "Differentiating gives back $2x + 3$, and substituting $x = 1$ gives $y = 6$, so both conditions are satisfied.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{2} + 3x + 2$"
  }
},
{
  "id": "al.y1.pure.integration.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "polynomial"],
  "questionText": "A curve has gradient function $\\frac{dy}{dx} = 3x^{2} - 4$ and passes through the point $(2, 5)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise that $y$ comes from integrating the gradient",
        "workingLatex": "y = \\int \\left(3x^{2} - 4\\right) \\,dx",
        "explanation": "The gradient function is the derivative of $y$, so integrating it undoes the differentiation and gives back $y$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = 3 \\cdot \\frac{x^{3}}{3} - 4x + c",
        "explanation": "The $3x^{2}$ integrates to $x^{3}$ and the constant $-4$ integrates to $-4x$. The $+c$ is required because the vertical position is not yet known.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the general equation",
        "workingLatex": "y = x^{3} - 4x + c",
        "explanation": "This represents every curve with the given gradient; the point will select the exact one.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the given point to find $c$",
        "workingLatex": "5 = (2)^{3} - 4(2) + c",
        "explanation": "The curve passes through $(2, 5)$, so substituting $x = 2$ and $y = 5$ gives an equation we can solve for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the right-hand side",
        "workingLatex": "5 = 8 - 8 + c = c",
        "explanation": "Computing $2^{3} = 8$ and $4 \\times 2 = 8$ shows these cancel, leaving $5 = c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the value of $c$",
        "workingLatex": "c = 5",
        "explanation": "The equation directly gives $c = 5$, which fixes the vertical position of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the equation of the curve",
        "workingLatex": "y = x^{3} - 4x + 5",
        "explanation": "Substituting the value of $c$ gives the unique curve satisfying both the gradient and the point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the answer",
        "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 4, \\quad (2)^{3} - 4(2) + 5 = 5",
        "explanation": "Differentiating returns $3x^{2} - 4$, and substituting $x = 2$ gives $y = 5$, so both conditions hold.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{3} - 4x + 5$"
  }
},
{
  "id": "al.y1.pure.integration.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "polynomial"],
  "questionText": "A curve has gradient function $\\frac{dy}{dx} = 6x^{2} + 2x$ and passes through the point $(1, 5)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise that $y$ comes from integrating the gradient",
        "workingLatex": "y = \\int \\left(6x^{2} + 2x\\right) \\,dx",
        "explanation": "Because the gradient function is the derivative of $y$, integrating it reverses the process and recovers $y$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = 6 \\cdot \\frac{x^{3}}{3} + 2 \\cdot \\frac{x^{2}}{2} + c",
        "explanation": "The $6x^{2}$ integrates to $2x^{3}$ and the $2x$ integrates to $x^{2}$. We include $+c$ since integration leaves the constant undetermined.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the general equation",
        "workingLatex": "y = 2x^{3} + x^{2} + c",
        "explanation": "This is the family of curves with the given gradient; the given point will fix the exact member.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the given point to find $c$",
        "workingLatex": "5 = 2(1)^{3} + (1)^{2} + c",
        "explanation": "The curve passes through $(1, 5)$, so substituting $x = 1$ and $y = 5$ produces an equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the right-hand side",
        "workingLatex": "5 = 2 + 1 + c = 3 + c",
        "explanation": "Evaluating $2(1) = 2$ and $1^{2} = 1$ gives $2 + 1 = 3$, so the equation becomes $5 = 3 + c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $c$",
        "workingLatex": "c = 5 - 3 = 2",
        "explanation": "Subtracting $3$ from both sides isolates the constant, giving $c = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the equation of the curve",
        "workingLatex": "y = 2x^{3} + x^{2} + 2",
        "explanation": "Replacing $c$ with $2$ gives the unique curve with the correct gradient that passes through the point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the answer",
        "workingLatex": "\\frac{dy}{dx} = 6x^{2} + 2x, \\quad 2(1)^{3} + (1)^{2} + 2 = 5",
        "explanation": "Differentiating returns $6x^{2} + 2x$, and substituting $x = 1$ gives $y = 5$, confirming both conditions are met.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{3} + x^{2} + 2$"
  }
},
{
  "id": "al.y1.pure.integration.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "negative-index", "power-rule"],
  "questionText": "Find $\\int x^{-2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the power rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "To integrate a power of $x$ we raise the power by one and divide by that new power. This works for every $n$ except $n=-1$, and here $n=-2$, so we are safe to use it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = -2",
        "explanation": "The integrand $x^{-2}$ is already a single power of $x$, so we can read the exponent straight off as $n=-2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "n+1 = -2+1 = -1",
        "explanation": "Raising the power by one turns $-2$ into $-1$; this is the exponent that will appear in the answer.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the rule",
        "workingLatex": "\\int x^{-2} \\,dx = \\frac{x^{-1}}{-1} + c",
        "explanation": "We place $x^{-1}$ over the new power $-1$ and add the constant of integration $c$, since any constant vanishes when differentiated.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= -x^{-1} + c",
        "explanation": "Dividing by $-1$ just flips the sign, leaving $-x^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite with a positive index",
        "workingLatex": "= -\\frac{1}{x} + c",
        "explanation": "A negative power means a reciprocal, so $-x^{-1}$ is the same as $-\\tfrac{1}{x}$. Differentiating this gives back $x^{-2}$, confirming the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int x^{-2} \\,dx = -\\dfrac{1}{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "negative-index", "rewrite"],
  "questionText": "Find $\\int \\dfrac{1}{x^{3}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the fraction as a power",
        "workingLatex": "\\frac{1}{x^{3}} = x^{-3}",
        "explanation": "The power rule needs a single power of $x$, so we move $x^{3}$ up from the denominator by making its index negative.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = -3",
        "explanation": "Now that the integrand is $x^{-3}$, the exponent to use in the rule is $n=-3$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "n+1 = -3+1 = -2",
        "explanation": "Raising the power by one turns $-3$ into $-2$, the exponent for the answer.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "\\int x^{-3} \\,dx = \\frac{x^{-2}}{-2} + c",
        "explanation": "We divide $x^{-2}$ by the new power $-2$ and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= -\\frac{1}{2}x^{-2} + c",
        "explanation": "Dividing by $-2$ is the same as multiplying by $-\\tfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite with a positive index",
        "workingLatex": "= -\\frac{1}{2x^{2}} + c",
        "explanation": "Moving $x^{-2}$ back to the denominator gives $-\\tfrac{1}{2x^{2}}$. Differentiating this returns $x^{-3}$, so the answer checks out.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{1}{x^{3}} \\,dx = -\\dfrac{1}{2x^{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "fractional-index", "rewrite"],
  "questionText": "Find $\\int 6\\sqrt{x} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the root as a power",
        "workingLatex": "6\\sqrt{x} = 6x^{\\frac{1}{2}}",
        "explanation": "A square root is a power of one half, so $\\sqrt{x}=x^{1/2}$. The coefficient $6$ simply stays in front.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take the constant factor outside",
        "workingLatex": "\\int 6x^{\\frac{1}{2}} \\,dx = 6\\int x^{\\frac{1}{2}} \\,dx",
        "explanation": "A constant multiplier can be pulled outside the integral and reattached at the end, which keeps the working tidy.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "\\tfrac{1}{2}+1 = \\tfrac{3}{2}",
        "explanation": "Raising $\\tfrac{1}{2}$ by one gives $\\tfrac{3}{2}$, the new exponent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "6\\int x^{\\frac{1}{2}} \\,dx = 6\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + c",
        "explanation": "We divide $x^{3/2}$ by the new power $\\tfrac{3}{2}$ and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the division",
        "workingLatex": "= 6\\cdot\\tfrac{2}{3}x^{\\frac{3}{2}} + c",
        "explanation": "Dividing by $\\tfrac{3}{2}$ is the same as multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Multiply the constants",
        "workingLatex": "= 4x^{\\frac{3}{2}} + c",
        "explanation": "Since $6\\times\\tfrac{2}{3}=4$, the coefficient is $4$. Differentiating $4x^{3/2}$ gives $6x^{1/2}=6\\sqrt{x}$, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int 6\\sqrt{x} \\,dx = 4x^{\\frac{3}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "fractional-index", "power-rule"],
  "questionText": "Find $\\int x^{\\frac{1}{3}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the power rule",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the power by one and divide by the new power. This is valid here because $n=\\tfrac{1}{3}$ is not $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = \\tfrac{1}{3}",
        "explanation": "The integrand is already a single power of $x$, so the exponent is simply $\\tfrac{1}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "n+1 = \\tfrac{1}{3}+1 = \\tfrac{4}{3}",
        "explanation": "Writing $1$ as $\\tfrac{3}{3}$ gives $\\tfrac{1}{3}+\\tfrac{3}{3}=\\tfrac{4}{3}$, the new exponent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the rule",
        "workingLatex": "\\int x^{\\frac{1}{3}} \\,dx = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + c",
        "explanation": "We divide $x^{4/3}$ by the new power $\\tfrac{4}{3}$ and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the fraction",
        "workingLatex": "= \\tfrac{3}{4}x^{\\frac{4}{3}} + c",
        "explanation": "Dividing by $\\tfrac{4}{3}$ is the same as multiplying by $\\tfrac{3}{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\tfrac{3}{4}x^{\\frac{4}{3}}\\right) = \\tfrac{3}{4}\\cdot\\tfrac{4}{3}x^{\\frac{1}{3}} = x^{\\frac{1}{3}}",
        "explanation": "Differentiating our answer returns the original integrand, which confirms the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int x^{\\frac{1}{3}} \\,dx = \\dfrac{3}{4}x^{\\frac{4}{3}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "negative-index", "rewrite"],
  "questionText": "Find $\\int \\dfrac{1}{\\sqrt{x}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite as a single power",
        "workingLatex": "\\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}",
        "explanation": "A square root is a half power, and sitting in the denominator makes the index negative, so $\\tfrac{1}{\\sqrt{x}}=x^{-1/2}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = -\\tfrac{1}{2}",
        "explanation": "The integrand is now a single power of $x$ with exponent $-\\tfrac{1}{2}$, which is not $-1$, so the rule applies.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "-\\tfrac{1}{2}+1 = \\tfrac{1}{2}",
        "explanation": "Raising $-\\tfrac{1}{2}$ by one gives $\\tfrac{1}{2}$, the new exponent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "\\int x^{-\\frac{1}{2}} \\,dx = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + c",
        "explanation": "We divide $x^{1/2}$ by the new power $\\tfrac{1}{2}$ and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the division",
        "workingLatex": "= 2x^{\\frac{1}{2}} + c",
        "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite using a root",
        "workingLatex": "= 2\\sqrt{x} + c",
        "explanation": "Since $x^{1/2}=\\sqrt{x}$, we can present the answer with a root. Differentiating $2\\sqrt{x}$ gives $x^{-1/2}=\\tfrac{1}{\\sqrt{x}}$, confirming it.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{1}{\\sqrt{x}} \\,dx = 2\\sqrt{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "negative-index", "rewrite"],
  "questionText": "Find $\\int \\dfrac{3}{x^{2}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite as a power",
        "workingLatex": "\\frac{3}{x^{2}} = 3x^{-2}",
        "explanation": "Move $x^{2}$ to the top by making its index negative; the $3$ is just a constant multiplier that stays in front.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take the constant outside",
        "workingLatex": "\\int 3x^{-2} \\,dx = 3\\int x^{-2} \\,dx",
        "explanation": "Constant factors can be moved outside the integral, so we integrate $x^{-2}$ and multiply by $3$ at the end.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "-2+1 = -1",
        "explanation": "Raising $-2$ by one gives $-1$, the exponent for the answer.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "3\\int x^{-2} \\,dx = 3\\cdot\\frac{x^{-1}}{-1} + c",
        "explanation": "We divide $x^{-1}$ by the new power $-1$, keeping the factor of $3$, and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= -3x^{-1} + c",
        "explanation": "Dividing by $-1$ flips the sign, and multiplying by $3$ gives $-3x^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite with a positive index",
        "workingLatex": "= -\\frac{3}{x} + c",
        "explanation": "Moving $x^{-1}$ back to the denominator gives $-\\tfrac{3}{x}$. Differentiating this returns $3x^{-2}$, so the answer is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{3}{x^{2}} \\,dx = -\\dfrac{3}{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "fractional-index", "sum"],
  "questionText": "Find $\\int \\left(x^{\\frac{1}{2}} + x^{-2}\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Integrate term by term",
        "workingLatex": "\\int \\left(x^{\\frac{1}{2}} + x^{-2}\\right) \\,dx = \\int x^{\\frac{1}{2}} \\,dx + \\int x^{-2} \\,dx",
        "explanation": "Integration of a sum can be done one term at a time, and the results are simply added together.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "First term: add one to the power",
        "workingLatex": "\\tfrac{1}{2}+1 = \\tfrac{3}{2}",
        "explanation": "For $x^{1/2}$, raising the power by one gives $\\tfrac{3}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{\\frac{1}{2}} \\,dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = \\tfrac{2}{3}x^{\\frac{3}{2}}",
        "explanation": "Dividing by $\\tfrac{3}{2}$ is multiplying by $\\tfrac{2}{3}$, giving $\\tfrac{2}{3}x^{3/2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Second term: add one to the power",
        "workingLatex": "-2+1 = -1",
        "explanation": "For $x^{-2}$, raising the power by one gives $-1$, which is allowed here.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the second term",
        "workingLatex": "\\int x^{-2} \\,dx = \\frac{x^{-1}}{-1} = -x^{-1}",
        "explanation": "Dividing $x^{-1}$ by $-1$ simply changes the sign, giving $-x^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Combine with a single constant",
        "workingLatex": "= \\tfrac{2}{3}x^{\\frac{3}{2}} - x^{-1} + c",
        "explanation": "We add the two results and only need one constant of integration $c$ for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Rewrite the negative index",
        "workingLatex": "= \\tfrac{2}{3}x^{\\frac{3}{2}} - \\frac{1}{x} + c",
        "explanation": "Writing $-x^{-1}$ as $-\\tfrac{1}{x}$ tidies the answer. Differentiating gives $x^{1/2}+x^{-2}$, confirming the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\left(x^{\\frac{1}{2}} + x^{-2}\\right) \\,dx = \\dfrac{2}{3}x^{\\frac{3}{2}} - \\dfrac{1}{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["integration", "negative-index", "power-rule"],
  "questionText": "Find $\\int 5x^{-4} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Take the constant outside",
        "workingLatex": "\\int 5x^{-4} \\,dx = 5\\int x^{-4} \\,dx",
        "explanation": "The factor of $5$ is a constant, so we can move it outside the integral and multiply back in at the end.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the power",
        "workingLatex": "n = -4",
        "explanation": "The remaining integrand $x^{-4}$ is a single power of $x$ with exponent $-4$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "-4+1 = -3",
        "explanation": "Raising $-4$ by one gives $-3$, the exponent for the answer.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "5\\int x^{-4} \\,dx = 5\\cdot\\frac{x^{-3}}{-3} + c",
        "explanation": "We divide $x^{-3}$ by the new power $-3$, keep the factor of $5$, and add the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "= -\\tfrac{5}{3}x^{-3} + c",
        "explanation": "Multiplying $5$ by $\\tfrac{1}{-3}$ gives the coefficient $-\\tfrac{5}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite with a positive index",
        "workingLatex": "= -\\frac{5}{3x^{3}} + c",
        "explanation": "Moving $x^{-3}$ into the denominator gives $-\\tfrac{5}{3x^{3}}$. Differentiating returns $5x^{-4}$, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int 5x^{-4} \\,dx = -\\dfrac{5}{3x^{3}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "negative-index", "constant-of-integration"],
  "questionText": "A curve passes through the point $(1, 5)$ and has gradient function $\\dfrac{dy}{dx} = x^{-2}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Integrate the gradient function",
        "workingLatex": "y = \\int x^{-2} \\,dx",
        "explanation": "The curve $y$ is the function whose derivative is the given gradient, so we recover $y$ by integrating $x^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Add one to the power",
        "workingLatex": "-2+1 = -1",
        "explanation": "Raising $-2$ by one gives $-1$, the exponent for the integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the power rule",
        "workingLatex": "y = \\frac{x^{-1}}{-1} + c",
        "explanation": "We divide $x^{-1}$ by the new power $-1$ and include the constant of integration, which we will find using the point.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify",
        "workingLatex": "y = -x^{-1} + c = -\\frac{1}{x} + c",
        "explanation": "Dividing by $-1$ flips the sign, and writing $-x^{-1}$ as $-\\tfrac{1}{x}$ makes the expression clearer.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the known point",
        "workingLatex": "5 = -\\frac{1}{1} + c",
        "explanation": "The curve passes through $(1,5)$, so putting $x=1$ and $y=5$ into the equation lets us pin down $c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the constant",
        "workingLatex": "5 = -1 + c \\Rightarrow c = 6",
        "explanation": "Adding $1$ to both sides isolates $c$, giving $c=6$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the equation of the curve",
        "workingLatex": "y = -\\frac{1}{x} + 6",
        "explanation": "Substituting $c=6$ gives the full equation. Checking $x=1$ gives $y=-1+6=5$, matching the point.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = -\\dfrac{1}{x} + 6$"
  }
},
{
  "id": "al.y1.pure.integration.q021",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "fractional-index", "constant-of-integration"],
  "questionText": "A curve passes through the point $(4, 21)$ and its gradient is given by $\\dfrac{dy}{dx} = 3\\sqrt{x}$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the root as a power",
        "workingLatex": "3\\sqrt{x} = 3x^{\\frac{1}{2}}",
        "explanation": "To integrate we need a power of $x$, so we write $\\sqrt{x}$ as $x^{1/2}$ with the coefficient $3$ in front.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the gradient function",
        "workingLatex": "y = \\int 3x^{\\frac{1}{2}} \\,dx = 3\\int x^{\\frac{1}{2}} \\,dx",
        "explanation": "The curve $y$ is the integral of its gradient, and the constant $3$ can be taken outside the integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "\\tfrac{1}{2}+1 = \\tfrac{3}{2}",
        "explanation": "Raising $\\tfrac{1}{2}$ by one gives $\\tfrac{3}{2}$, the new exponent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "y = 3\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + c = 3\\cdot\\tfrac{2}{3}x^{\\frac{3}{2}} + c",
        "explanation": "Dividing by $\\tfrac{3}{2}$ is multiplying by $\\tfrac{2}{3}$, and we keep the constant of integration $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the coefficient",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + c",
        "explanation": "Since $3\\times\\tfrac{2}{3}=2$, the coefficient becomes $2$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the known point",
        "workingLatex": "21 = 2(4)^{\\frac{3}{2}} + c",
        "explanation": "The curve passes through $(4,21)$; note $4^{3/2}=(\\sqrt{4})^{3}=2^{3}=8$, so this becomes easy to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "21 = 16 + c \\Rightarrow c = 5",
        "explanation": "Since $2\\times 8 = 16$, subtracting $16$ from both sides gives $c=5$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + 5",
        "explanation": "Substituting $c=5$ completes the equation. Checking $x=4$ gives $y=16+5=21$, as required.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{\\frac{3}{2}} + 5$"
  }
},
{
  "id": "al.y1.pure.integration.q022",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "negative-index", "constant-of-integration"],
  "questionText": "A curve passes through $(9, 13)$ and satisfies $\\dfrac{dy}{dx} = \\dfrac{1}{\\sqrt{x}}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the gradient as a power",
        "workingLatex": "\\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}",
        "explanation": "A root in the denominator becomes a negative half power, so $\\tfrac{1}{\\sqrt{x}}=x^{-1/2}$, ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the gradient function",
        "workingLatex": "y = \\int x^{-\\frac{1}{2}} \\,dx",
        "explanation": "The curve $y$ is recovered by integrating its gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add one to the power",
        "workingLatex": "-\\tfrac{1}{2}+1 = \\tfrac{1}{2}",
        "explanation": "Raising $-\\tfrac{1}{2}$ by one gives $\\tfrac{1}{2}$, the new exponent.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule",
        "workingLatex": "y = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + c = 2x^{\\frac{1}{2}} + c",
        "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$, and we keep the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rewrite using a root",
        "workingLatex": "y = 2\\sqrt{x} + c",
        "explanation": "Since $x^{1/2}=\\sqrt{x}$, writing the answer with a root makes substituting the point simpler.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the known point",
        "workingLatex": "13 = 2\\sqrt{9} + c",
        "explanation": "The curve passes through $(9,13)$, and $\\sqrt{9}=3$, so the numbers work out neatly.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "13 = 6 + c \\Rightarrow c = 7",
        "explanation": "Since $2\\times 3 = 6$, subtracting $6$ from both sides gives $c=7$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2\\sqrt{x} + 7",
        "explanation": "Substituting $c=7$ gives the final equation. Checking $x=9$ gives $y=6+7=13$, matching the point.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2\\sqrt{x} + 7$"
  }
},
{
  "id": "al.y1.pure.integration.q023",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "product"],
  "questionText": "Find $\\int (2x+1)(x-3) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int (2x+1)(x-3) \\,dx",
        "explanation": "There is no rule for integrating a product of two brackets as it stands, so the plan is to expand into a sum of powers of $x$, each of which we can integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the brackets",
        "workingLatex": "(2x+1)(x-3) = 2x\\cdot x + 2x\\cdot(-3) + 1\\cdot x + 1\\cdot(-3)",
        "explanation": "Multiplying every term in the first bracket by every term in the second keeps the value unchanged while turning the product into separate terms.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each product",
        "workingLatex": "= 2x^{2} - 6x + x - 3",
        "explanation": "Working out each of the four products gives four simple terms before we tidy them up.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Collect like terms",
        "workingLatex": "= 2x^{2} - 5x - 3",
        "explanation": "The two $x$ terms combine since $-6x+x=-5x$, leaving a straightforward quadratic to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "For each power of $x$ we raise the index by one and divide by the new index; this reverses differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the first term",
        "workingLatex": "\\int 2x^{2} \\,dx = \\frac{2x^{3}}{3}",
        "explanation": "The index $2$ becomes $3$ and we divide by $3$; the coefficient $2$ simply travels along unchanged.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the second term",
        "workingLatex": "\\int -5x \\,dx = -\\frac{5x^{2}}{2}",
        "explanation": "Here $x$ means $x^{1}$, so the index rises to $2$ and we divide by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int -3 \\,dx = -3x",
        "explanation": "A constant behaves like $-3x^{0}$; raising the index gives $-3x^{1}$, which is just $-3x$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{2x^{3}}{3} - \\frac{5x^{2}}{2} - 3x + c",
        "explanation": "The separate integrals join into one expression, and a single constant $c$ covers every constant that could have differentiated away.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{2x^{3}}{3} - \\frac{5x^{2}}{2} - 3x + c\\right) = 2x^{2} - 5x - 3",
        "explanation": "Differentiating our answer returns the expanded integrand, which confirms the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int (2x+1)(x-3) \\,dx = \\dfrac{2x^{3}}{3} - \\dfrac{5x^{2}}{2} - 3x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q024",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "distributive"],
  "questionText": "Find $\\int x^{2}(3x-4) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int x^{2}(3x-4) \\,dx",
        "explanation": "A power multiplying a bracket cannot be integrated directly, so we distribute the $x^{2}$ to obtain a sum of separate powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Multiply out the bracket",
        "workingLatex": "x^{2}(3x-4) = x^{2}\\cdot 3x - x^{2}\\cdot 4",
        "explanation": "Sharing the $x^{2}$ across both terms in the bracket preserves the value while splitting it into two pieces.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use the index law for the products",
        "workingLatex": "= 3x^{3} - 4x^{2}",
        "explanation": "When multiplying powers of $x$ we add the indices, so $x^{2}\\cdot x = x^{3}$; the numbers just multiply.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Each power has its index raised by one and is divided by that new index, undoing differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the first term",
        "workingLatex": "\\int 3x^{3} \\,dx = \\frac{3x^{4}}{4}",
        "explanation": "The index $3$ rises to $4$, and dividing by $4$ keeps the coefficient as $\\tfrac{3}{4}$ in fraction form.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the second term",
        "workingLatex": "\\int -4x^{2} \\,dx = -\\frac{4x^{3}}{3}",
        "explanation": "The index $2$ rises to $3$ and we divide by $3$, keeping the sign negative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{3x^{4}}{4} - \\frac{4x^{3}}{3} + c",
        "explanation": "We join the two integrated terms and attach one constant $c$, since any constant would vanish on differentiating.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{3x^{4}}{4} - \\frac{4x^{3}}{3} + c\\right) = 3x^{3} - 4x^{2}",
        "explanation": "Differentiating recovers $3x^{3}-4x^{2}$, exactly the expanded integrand, so the answer is correct.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result",
        "workingLatex": "\\int x^{2}(3x-4) \\,dx = \\frac{3x^{4}}{4} - \\frac{4x^{3}}{3} + c",
        "explanation": "This is the required family of functions whose derivative is the original integrand.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int x^{2}(3x-4) \\,dx = \\dfrac{3x^{4}}{4} - \\dfrac{4x^{3}}{3} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q025",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "perfect-square"],
  "questionText": "Find $\\int (x+2)^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int (x+2)^{2} \\,dx",
        "explanation": "A squared bracket is still a product, so we expand it first into a quadratic that we can integrate term by term.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the square as a product",
        "workingLatex": "(x+2)^{2} = (x+2)(x+2)",
        "explanation": "Squaring simply means multiplying the bracket by itself, which makes the expansion clearer.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand fully",
        "workingLatex": "= x^{2} + 2x + 2x + 4",
        "explanation": "Multiplying each term of the first bracket by each term of the second produces these four pieces.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Collect like terms",
        "workingLatex": "= x^{2} + 4x + 4",
        "explanation": "The two middle terms combine to $4x$, giving a tidy quadratic ready to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "We raise each index by one and divide by the new index to reverse differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the $x^{2}$ term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "The index $2$ becomes $3$ and we divide by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the $4x$ term",
        "workingLatex": "\\int 4x \\,dx = 2x^{2}",
        "explanation": "The index rises to $2$ and dividing $4$ by $2$ gives a clean coefficient of $2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 4 \\,dx = 4x",
        "explanation": "Integrating a constant introduces one power of $x$, turning $4$ into $4x$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{x^{3}}{3} + 2x^{2} + 4x + c",
        "explanation": "The three integrated terms join together with a single constant $c$ for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} + 2x^{2} + 4x + c\\right) = x^{2} + 4x + 4",
        "explanation": "Differentiating returns the expanded integrand $x^{2}+4x+4$, confirming the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int (x+2)^{2} \\,dx = \\dfrac{x^{3}}{3} + 2x^{2} + 4x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q026",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "perfect-square"],
  "questionText": "Find $\\int (2x-1)^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int (2x-1)^{2} \\,dx",
        "explanation": "The squared bracket is a product, so we expand it into a quadratic before integrating each term separately.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the square as a product",
        "workingLatex": "(2x-1)^{2} = (2x-1)(2x-1)",
        "explanation": "A square means the bracket multiplied by itself, which sets up a clear expansion.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand fully",
        "workingLatex": "= 4x^{2} - 2x - 2x + 1",
        "explanation": "Multiplying every term in one bracket by every term in the other gives these four products, taking care with the signs.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Collect like terms",
        "workingLatex": "= 4x^{2} - 4x + 1",
        "explanation": "The two middle terms combine to $-4x$, leaving a neat quadratic integrand.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Raising each index by one and dividing by the new index reverses the process of differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the $4x^{2}$ term",
        "workingLatex": "\\int 4x^{2} \\,dx = \\frac{4x^{3}}{3}",
        "explanation": "The index rises from $2$ to $3$ and we divide by $3$, leaving the coefficient as $\\tfrac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the $-4x$ term",
        "workingLatex": "\\int -4x \\,dx = -2x^{2}",
        "explanation": "The index rises to $2$ and dividing $-4$ by $2$ gives $-2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 1 \\,dx = x",
        "explanation": "Integrating the constant $1$ produces one power of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{4x^{3}}{3} - 2x^{2} + x + c",
        "explanation": "We join the integrated terms and add a single constant $c$ to represent every possible vertical shift.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{4x^{3}}{3} - 2x^{2} + x + c\\right) = 4x^{2} - 4x + 1",
        "explanation": "Differentiating our answer gives back $4x^{2}-4x+1$, the expanded integrand, so the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int (2x-1)^{2} \\,dx = \\dfrac{4x^{3}}{3} - 2x^{2} + x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q027",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "product"],
  "questionText": "Find $\\int (x-1)(x+4) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int (x-1)(x+4) \\,dx",
        "explanation": "We cannot integrate two brackets multiplied together directly, so we expand into a quadratic first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the brackets",
        "workingLatex": "(x-1)(x+4) = x\\cdot x + x\\cdot 4 - 1\\cdot x - 1\\cdot 4",
        "explanation": "Each term in the first bracket multiplies each term in the second, keeping careful track of the signs.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each product",
        "workingLatex": "= x^{2} + 4x - x - 4",
        "explanation": "Evaluating the four products gives these terms before collecting.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Collect like terms",
        "workingLatex": "= x^{2} + 3x - 4",
        "explanation": "Combining $4x-x$ gives $3x$, leaving a simple quadratic to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "For each term we raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the $x^{2}$ term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "The index $2$ becomes $3$ and we divide by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the $3x$ term",
        "workingLatex": "\\int 3x \\,dx = \\frac{3x^{2}}{2}",
        "explanation": "The index rises to $2$ and we divide by $2$, leaving the coefficient as $\\tfrac{3}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int -4 \\,dx = -4x",
        "explanation": "Integrating $-4$ attaches one power of $x$, giving $-4x$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{x^{3}}{3} + \\frac{3x^{2}}{2} - 4x + c",
        "explanation": "The three integrated terms join into one expression with a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} + \\frac{3x^{2}}{2} - 4x + c\\right) = x^{2} + 3x - 4",
        "explanation": "Differentiating recovers the expanded integrand, so the answer is verified.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int (x-1)(x+4) \\,dx = \\dfrac{x^{3}}{3} + \\dfrac{3x^{2}}{2} - 4x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q028",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "distributive"],
  "questionText": "Find $\\int x(x^{2}-5) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int x(x^{2}-5) \\,dx",
        "explanation": "The $x$ outside the bracket makes this a product, so we distribute it to get a sum of powers we can integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Multiply out the bracket",
        "workingLatex": "x(x^{2}-5) = x\\cdot x^{2} - x\\cdot 5",
        "explanation": "Sharing the $x$ across both terms of the bracket keeps the value the same while separating the terms.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the index law",
        "workingLatex": "= x^{3} - 5x",
        "explanation": "Multiplying $x$ by $x^{2}$ adds the indices to give $x^{3}$, and $x\\cdot 5$ gives $5x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "We raise each index by one and divide by the new index to reverse differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the $x^{3}$ term",
        "workingLatex": "\\int x^{3} \\,dx = \\frac{x^{4}}{4}",
        "explanation": "The index $3$ becomes $4$ and we divide by $4$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the $-5x$ term",
        "workingLatex": "\\int -5x \\,dx = -\\frac{5x^{2}}{2}",
        "explanation": "The index rises to $2$ and we divide by $2$, keeping the coefficient as $\\tfrac{5}{2}$ with a minus sign.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{x^{4}}{4} - \\frac{5x^{2}}{2} + c",
        "explanation": "The two integrated terms join with a single constant $c$ for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{4}}{4} - \\frac{5x^{2}}{2} + c\\right) = x^{3} - 5x",
        "explanation": "Differentiating returns $x^{3}-5x$, the expanded integrand, confirming the result.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result",
        "workingLatex": "\\int x(x^{2}-5) \\,dx = \\frac{x^{4}}{4} - \\frac{5x^{2}}{2} + c",
        "explanation": "This is the required indefinite integral, valid for all $x$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int x(x^{2}-5) \\,dx = \\dfrac{x^{4}}{4} - \\dfrac{5x^{2}}{2} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q029",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "divide-first", "fraction"],
  "questionText": "Find $\\int \\dfrac{x^{3}+2x}{x} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int \\frac{x^{3}+2x}{x} \\,dx",
        "explanation": "We cannot integrate a fraction like this directly, but since the numerator is a sum we can divide each term by $x$ separately.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction term by term",
        "workingLatex": "\\frac{x^{3}+2x}{x} = \\frac{x^{3}}{x} + \\frac{2x}{x}",
        "explanation": "A single denominator can be shared out over each term of the numerator, turning one fraction into two simpler ones.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each fraction",
        "workingLatex": "= x^{2} + 2",
        "explanation": "Dividing subtracts indices, so $x^{3}\\div x = x^{2}$, and $2x\\div x = 2$; this is now a simple polynomial.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Each power gets its index raised by one and is divided by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the $x^{2}$ term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "The index $2$ becomes $3$ and we divide by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 2 \\,dx = 2x",
        "explanation": "Integrating the constant $2$ introduces one power of $x$, giving $2x$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{x^{3}}{3} + 2x + c",
        "explanation": "The two integrated terms join with a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} + 2x + c\\right) = x^{2} + 2",
        "explanation": "Differentiating gives back $x^{2}+2$, which equals the simplified integrand, so the answer is correct.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result",
        "workingLatex": "\\int \\frac{x^{3}+2x}{x} \\,dx = \\frac{x^{3}}{3} + 2x + c",
        "explanation": "This is the required indefinite integral of the original fraction.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{x^{3}+2x}{x} \\,dx = \\dfrac{x^{3}}{3} + 2x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q030",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "expression",
  "tags": ["integration", "divide-first", "fraction"],
  "questionText": "Find $\\int \\dfrac{x^{4}-3x^{2}}{x^{2}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int \\frac{x^{4}-3x^{2}}{x^{2}} \\,dx",
        "explanation": "This fraction cannot be integrated as written, so we divide each term of the numerator by $x^{2}$ to simplify first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction term by term",
        "workingLatex": "\\frac{x^{4}-3x^{2}}{x^{2}} = \\frac{x^{4}}{x^{2}} - \\frac{3x^{2}}{x^{2}}",
        "explanation": "The common denominator $x^{2}$ can be applied to each term of the numerator separately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each fraction",
        "workingLatex": "= x^{2} - 3",
        "explanation": "Subtracting indices gives $x^{4}\\div x^{2}=x^{2}$, and $3x^{2}\\div x^{2}=3$, leaving a simple quadratic.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "We raise the index by one and divide by the new index for each power.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the $x^{2}$ term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "The index $2$ becomes $3$ and we divide by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the constant term",
        "workingLatex": "\\int -3 \\,dx = -3x",
        "explanation": "Integrating $-3$ attaches one power of $x$, giving $-3x$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{x^{3}}{3} - 3x + c",
        "explanation": "The two integrated terms join with a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} - 3x + c\\right) = x^{2} - 3",
        "explanation": "Differentiating returns $x^{2}-3$, the simplified integrand, confirming the result.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result",
        "workingLatex": "\\int \\frac{x^{4}-3x^{2}}{x^{2}} \\,dx = \\frac{x^{3}}{3} - 3x + c",
        "explanation": "This is the required indefinite integral of the original fraction.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{x^{4}-3x^{2}}{x^{2}} \\,dx = \\dfrac{x^{3}}{3} - 3x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "divide-first", "fraction"],
  "questionText": "Find $\\int \\dfrac{6x^{3}-4x}{2x} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int \\frac{6x^{3}-4x}{2x} \\,dx",
        "explanation": "The integrand is a fraction with two terms on top, so we divide each term by $2x$ to reduce it to a polynomial.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction term by term",
        "workingLatex": "\\frac{6x^{3}-4x}{2x} = \\frac{6x^{3}}{2x} - \\frac{4x}{2x}",
        "explanation": "The single denominator $2x$ can be shared across each term of the numerator.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the first fraction",
        "workingLatex": "\\frac{6x^{3}}{2x} = 3x^{2}",
        "explanation": "Dividing the numbers gives $6\\div 2 = 3$, and subtracting indices gives $x^{3}\\div x = x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the second fraction",
        "workingLatex": "\\frac{4x}{2x} = 2",
        "explanation": "Here the $x$ terms cancel completely and $4\\div 2 = 2$, leaving a constant.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the simplified integrand",
        "workingLatex": "3x^{2} - 2",
        "explanation": "The fraction has become a simple expression that is easy to integrate term by term.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Each power has its index raised by one and is divided by that new index.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the $3x^{2}$ term",
        "workingLatex": "\\int 3x^{2} \\,dx = x^{3}",
        "explanation": "The index rises to $3$ and dividing $3$ by $3$ gives a clean coefficient of $1$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int -2 \\,dx = -2x",
        "explanation": "Integrating $-2$ introduces one power of $x$, giving $-2x$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine and add the constant of integration",
        "workingLatex": "x^{3} - 2x + c",
        "explanation": "The integrated terms join with a single constant $c$ for the whole expression.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(x^{3} - 2x + c\\right) = 3x^{2} - 2",
        "explanation": "Differentiating gives back $3x^{2}-2$, the simplified integrand, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{6x^{3}-4x}{2x} \\,dx = x^{3} - 2x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "expand-first", "surd"],
  "questionText": "Find $\\int \\sqrt{x}\\,(x+1) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int \\sqrt{x}\\,(x+1) \\,dx",
        "explanation": "The root multiplying a bracket is a product, so we expand it and write everything as powers of $x$ before integrating.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Writing the square root as a fractional index lets us use the ordinary power rule when integrating.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand the product",
        "workingLatex": "x^{\\frac{1}{2}}(x+1) = x^{\\frac{1}{2}}\\cdot x + x^{\\frac{1}{2}}\\cdot 1",
        "explanation": "Sharing $x^{1/2}$ across both terms of the bracket keeps the value unchanged.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify using index laws",
        "workingLatex": "= x^{\\frac{3}{2}} + x^{\\frac{1}{2}}",
        "explanation": "Adding indices gives $x^{1/2}\\cdot x = x^{3/2}$, so the integrand is now a sum of two powers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "The power rule works for fractional indices too: raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{\\frac{3}{2}} \\,dx = \\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = \\frac{2}{5}x^{\\frac{5}{2}}",
        "explanation": "Adding one to $\\tfrac{3}{2}$ gives $\\tfrac{5}{2}$; dividing by $\\tfrac{5}{2}$ is the same as multiplying by $\\tfrac{2}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the second term",
        "workingLatex": "\\int x^{\\frac{1}{2}} \\,dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = \\frac{2}{3}x^{\\frac{3}{2}}",
        "explanation": "Here $\\tfrac{1}{2}$ increases to $\\tfrac{3}{2}$, and dividing by $\\tfrac{3}{2}$ means multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{2}{5}x^{\\frac{5}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + c",
        "explanation": "The two integrated terms join with a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{2}{5}x^{\\frac{5}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + c\\right) = x^{\\frac{3}{2}} + x^{\\frac{1}{2}}",
        "explanation": "Differentiating brings the fractional powers back down to $x^{3/2}+x^{1/2}$, the expanded integrand, confirming the result.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the result",
        "workingLatex": "\\int \\sqrt{x}\\,(x+1) \\,dx = \\frac{2}{5}x^{\\frac{5}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + c",
        "explanation": "This is the required indefinite integral, written in fractional-index form.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\sqrt{x}\\,(x+1) \\,dx = \\dfrac{2}{5}x^{\\frac{5}{2}} + \\dfrac{2}{3}x^{\\frac{3}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "divide-first", "surd"],
  "questionText": "Find $\\int \\dfrac{x^{2}-3}{\\sqrt{x}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "\\int \\frac{x^{2}-3}{\\sqrt{x}} \\,dx",
        "explanation": "We divide each term of the numerator by $\\sqrt{x}$ and rewrite everything as powers of $x$ so the power rule applies.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Expressing the denominator as $x^{1/2}$ lets us handle it with index laws.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split the fraction term by term",
        "workingLatex": "\\frac{x^{2}-3}{x^{\\frac{1}{2}}} = \\frac{x^{2}}{x^{\\frac{1}{2}}} - \\frac{3}{x^{\\frac{1}{2}}}",
        "explanation": "The common denominator can be shared across both terms of the numerator.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify using index laws",
        "workingLatex": "= x^{\\frac{3}{2}} - 3x^{-\\frac{1}{2}}",
        "explanation": "Subtracting indices gives $x^{2}\\div x^{1/2}=x^{3/2}$, and $1\\div x^{1/2}=x^{-1/2}$, so the integrand becomes a sum of powers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Both indices here are away from $-1$, so the power rule applies safely to each term.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{\\frac{3}{2}} \\,dx = \\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = \\frac{2}{5}x^{\\frac{5}{2}}",
        "explanation": "Adding one to $\\tfrac{3}{2}$ gives $\\tfrac{5}{2}$, and dividing by $\\tfrac{5}{2}$ is multiplying by $\\tfrac{2}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the second term",
        "workingLatex": "\\int -3x^{-\\frac{1}{2}} \\,dx = -3\\cdot\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = -6x^{\\frac{1}{2}}",
        "explanation": "Adding one to $-\\tfrac{1}{2}$ gives $\\tfrac{1}{2}$; dividing by $\\tfrac{1}{2}$ doubles the term, so $-3$ becomes $-6$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Combine and add the constant of integration",
        "workingLatex": "\\frac{2}{5}x^{\\frac{5}{2}} - 6x^{\\frac{1}{2}} + c",
        "explanation": "The integrated terms join with a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{2}{5}x^{\\frac{5}{2}} - 6x^{\\frac{1}{2}} + c\\right) = x^{\\frac{3}{2}} - 3x^{-\\frac{1}{2}}",
        "explanation": "Differentiating returns $x^{3/2}-3x^{-1/2}$, which is the simplified integrand, so the answer is correct.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the result",
        "workingLatex": "\\int \\frac{x^{2}-3}{\\sqrt{x}} \\,dx = \\frac{2}{5}x^{\\frac{5}{2}} - 6x^{\\frac{1}{2}} + c",
        "explanation": "This is the required indefinite integral in fractional-index form.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int \\dfrac{x^{2}-3}{\\sqrt{x}} \\,dx = \\dfrac{2}{5}x^{\\frac{5}{2}} - 6x^{\\frac{1}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "expand-first", "find-curve"],
  "questionText": "A curve passes through the point $(6, 60)$ and satisfies $\\dfrac{dy}{dx} = (x+3)(x-2)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "y = \\int (x+3)(x-2) \\,dx",
        "explanation": "To recover $y$ from its gradient function we integrate; we expand the product first so it can be integrated term by term.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the brackets",
        "workingLatex": "(x+3)(x-2) = x^{2} - 2x + 3x - 6",
        "explanation": "Multiplying each term of the first bracket by each term of the second gives these four terms.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Collect like terms",
        "workingLatex": "= x^{2} + x - 6",
        "explanation": "Combining $-2x+3x$ gives $x$, so the gradient function is a simple quadratic.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Each power has its index raised by one and is divided by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate term by term",
        "workingLatex": "y = \\frac{x^{3}}{3} + \\frac{x^{2}}{2} - 6x + c",
        "explanation": "Applying the power rule to each term gives the general solution, with a constant $c$ still unknown.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note why the constant matters",
        "workingLatex": "c \\text{ is fixed by the point } (6, 60)",
        "explanation": "Integration alone leaves infinitely many parallel curves; the given point selects the one we want by pinning down $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the point",
        "workingLatex": "60 = \\frac{6^{3}}{3} + \\frac{6^{2}}{2} - 6(6) + c",
        "explanation": "Because the curve passes through $(6,60)$, putting $x=6$ and $y=60$ into the equation must hold true.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the numerical terms",
        "workingLatex": "60 = 72 + 18 - 36 + c",
        "explanation": "Here $\\tfrac{216}{3}=72$, $\\tfrac{36}{2}=18$ and $6\\times 6=36$, all of which are whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the constant",
        "workingLatex": "60 = 54 + c \\;\\Rightarrow\\; c = 6",
        "explanation": "Simplifying the right-hand side to $54+c$ and subtracting $54$ from both sides gives $c=6$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the equation of the curve",
        "workingLatex": "y = \\frac{x^{3}}{3} + \\frac{x^{2}}{2} - 6x + 6",
        "explanation": "Replacing $c$ with its value gives the single curve that fits both the gradient function and the point.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check the point satisfies the equation",
        "workingLatex": "72 + 18 - 36 + 6 = 60 \\;\\checkmark",
        "explanation": "Substituting $x=6$ returns $y=60$, confirming the constant is correct and the curve passes through the given point.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2} - 6x + 6$"
  }
},
{
  "id": "al.y1.pure.integration.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "divide-first", "find-curve"],
  "questionText": "A curve passes through the point $(3, 2)$ and satisfies $\\dfrac{dy}{dx} = \\dfrac{x^{3}-4x}{x}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "y = \\int \\frac{x^{3}-4x}{x} \\,dx",
        "explanation": "We integrate the gradient function to find $y$, first simplifying the fraction by dividing each term by $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction term by term",
        "workingLatex": "\\frac{x^{3}-4x}{x} = \\frac{x^{3}}{x} - \\frac{4x}{x}",
        "explanation": "The single denominator $x$ can be applied to each term of the numerator separately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each fraction",
        "workingLatex": "= x^{2} - 4",
        "explanation": "Subtracting indices gives $x^{3}\\div x = x^{2}$, and $4x\\div x = 4$, so the gradient function is $x^{2}-4$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "We raise each index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate term by term",
        "workingLatex": "y = \\frac{x^{3}}{3} - 4x + c",
        "explanation": "Applying the power rule to each term gives the general solution with an unknown constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note why the constant matters",
        "workingLatex": "c \\text{ is fixed by the point } (3, 2)",
        "explanation": "Many parallel curves share this gradient function; the given point selects the correct one by fixing $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the point",
        "workingLatex": "2 = \\frac{3^{3}}{3} - 4(3) + c",
        "explanation": "Since the curve passes through $(3,2)$, setting $x=3$ and $y=2$ in the equation must be true.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the numerical terms",
        "workingLatex": "2 = 9 - 12 + c",
        "explanation": "Here $\\tfrac{27}{3}=9$ and $4\\times 3=12$, both whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the constant",
        "workingLatex": "2 = -3 + c \\;\\Rightarrow\\; c = 5",
        "explanation": "Simplifying to $-3+c$ and adding $3$ to both sides gives $c=5$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the equation of the curve",
        "workingLatex": "y = \\frac{x^{3}}{3} - 4x + 5",
        "explanation": "Substituting the value of $c$ gives the unique curve satisfying both conditions.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check the point satisfies the equation",
        "workingLatex": "9 - 12 + 5 = 2 \\;\\checkmark",
        "explanation": "Putting $x=3$ gives $y=2$, confirming the constant and the curve are correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\dfrac{x^{3}}{3} - 4x + 5$"
  }
},
{
  "id": "al.y1.pure.integration.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "expand-first", "find-curve"],
  "questionText": "A curve passes through the point $(3, 10)$ and satisfies $\\dfrac{dy}{dx} = (2x-3)^{2}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Decide on a strategy",
        "workingLatex": "y = \\int (2x-3)^{2} \\,dx",
        "explanation": "We integrate the gradient function to recover $y$, expanding the squared bracket first so it can be integrated term by term.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the square as a product",
        "workingLatex": "(2x-3)^{2} = (2x-3)(2x-3)",
        "explanation": "Squaring means multiplying the bracket by itself, which prepares it for expansion.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand and collect",
        "workingLatex": "= 4x^{2} - 12x + 9",
        "explanation": "Multiplying out gives $4x^{2}-6x-6x+9$, and combining the middle terms leaves $-12x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the rule for integration",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\neq -1)",
        "explanation": "Each power has its index raised by one and is divided by that new index.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate term by term",
        "workingLatex": "y = \\frac{4x^{3}}{3} - 6x^{2} + 9x + c",
        "explanation": "Applying the power rule to each term gives the general solution; note $-12x$ integrates to $-6x^{2}$ since $12\\div 2 = 6$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note why the constant matters",
        "workingLatex": "c \\text{ is fixed by the point } (3, 10)",
        "explanation": "The gradient function alone gives a whole family of curves; the given point picks out one by fixing $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the point",
        "workingLatex": "10 = \\frac{4(3)^{3}}{3} - 6(3)^{2} + 9(3) + c",
        "explanation": "Because the curve passes through $(3,10)$, putting $x=3$ and $y=10$ into the equation must hold.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the numerical terms",
        "workingLatex": "10 = 36 - 54 + 27 + c",
        "explanation": "Here $\\tfrac{4\\times 27}{3}=36$, $6\\times 9=54$ and $9\\times 3=27$, all whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the constant",
        "workingLatex": "10 = 9 + c \\;\\Rightarrow\\; c = 1",
        "explanation": "Simplifying the right-hand side to $9+c$ and subtracting $9$ from both sides gives $c=1$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the equation of the curve",
        "workingLatex": "y = \\frac{4x^{3}}{3} - 6x^{2} + 9x + 1",
        "explanation": "Replacing $c$ with its value gives the single curve that fits both the gradient and the point.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check the point satisfies the equation",
        "workingLatex": "36 - 54 + 27 + 1 = 10 \\;\\checkmark",
        "explanation": "Substituting $x=3$ returns $y=10$, confirming the constant is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\dfrac{4x^{3}}{3} - 6x^{2} + 9x + 1$"
  }
},
{
  "id": "al.y1.pure.integration.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "constant-of-integration"],
  "questionText": "A curve passes through $(1, 4)$ and has gradient function $\\frac{dy}{dx} = 3x^{2} - 2x + 1$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise that the curve is the integral of its gradient function",
        "workingLatex": "y = \\int \\left(3x^{2} - 2x + 1\\right) \\,dx",
        "explanation": "The gradient function is the derivative of $y$, so integrating it reverses the differentiation and recovers $y$, together with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term using the power rule",
        "workingLatex": "y = \\frac{3x^{3}}{3} - \\frac{2x^{2}}{2} + x + c",
        "explanation": "For each power of $x$ we raise the index by one and divide by the new index; the constant term $1$ integrates to $x$. The $+c$ appears because differentiation destroys any constant.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the coefficients",
        "workingLatex": "y = x^{3} - x^{2} + x + c",
        "explanation": "Dividing gives clean coefficients. At this stage the whole family of curves with this gradient is described; the constant $c$ selects which one.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the given point to pin down $c$",
        "workingLatex": "4 = (1)^{3} - (1)^{2} + (1) + c",
        "explanation": "The curve passes through $(1,4)$, so those coordinates must satisfy the equation, which turns it into a single equation in $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the powers",
        "workingLatex": "4 = 1 - 1 + 1 + c",
        "explanation": "Substituting $x = 1$ term by term keeps the arithmetic simple and avoids slips.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the constant",
        "workingLatex": "4 = 1 + c \\Rightarrow c = 3",
        "explanation": "Collecting the numbers and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the equation of the curve",
        "workingLatex": "y = x^{3} - x^{2} + x + 3",
        "explanation": "Replacing $c$ with its value gives the one curve that has the required gradient and passes through the point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 2x + 1",
        "explanation": "Differentiating the answer returns the original gradient function, confirming the integration was done correctly.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check the point lies on the curve",
        "workingLatex": "(1)^{3} - (1)^{2} + (1) + 3 = 4",
        "explanation": "Substituting $x = 1$ gives $y = 4$, so the curve genuinely passes through $(1,4)$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{3} - x^{2} + x + 3$"
  }
},
{
  "id": "al.y1.pure.integration.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "negative-powers"],
  "questionText": "A curve passes through $(1, 3)$ and has gradient function $\\frac{dy}{dx} = 4x - \\frac{1}{x^{2}}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(4x - \\frac{1}{x^{2}}\\right) \\,dx",
        "explanation": "Integrating the gradient function reverses the differentiation and returns the curve $y$, plus an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the reciprocal term as a power",
        "workingLatex": "y = \\int \\left(4x - x^{-2}\\right) \\,dx",
        "explanation": "Writing $\\frac{1}{x^{2}}$ as $x^{-2}$ lets the power rule be applied; the rule works for negative indices too.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{4x^{2}}{2} - \\frac{x^{-1}}{-1} + c",
        "explanation": "Raise each index by one and divide by the new index. For $x^{-2}$ the new index is $-1$, so we divide by $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify, turning the negative power back into a fraction",
        "workingLatex": "y = 2x^{2} + x^{-1} + c = 2x^{2} + \\frac{1}{x} + c",
        "explanation": "Dividing by $-1$ flips the sign to a plus, and $x^{-1}$ is written as $\\frac{1}{x}$ for a tidy final form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "3 = 2(1)^{2} + \\frac{1}{1} + c",
        "explanation": "The point $(1,3)$ lies on the curve, so its coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the terms",
        "workingLatex": "3 = 2 + 1 + c",
        "explanation": "Working out each term at $x = 1$ prepares a simple equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "3 = 3 + c \\Rightarrow c = 0",
        "explanation": "Here the constant is zero, which simply means the curve already passes through the point without any vertical shift.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{2} + \\frac{1}{x}",
        "explanation": "With $c = 0$ the equation is complete.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 4x - \\frac{1}{x^{2}}",
        "explanation": "Differentiating $2x^{2} + x^{-1}$ gives $4x - x^{-2}$, matching the original gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{2} + \\frac{1}{x}$"
  }
},
{
  "id": "al.y1.pure.integration.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "fractional-powers"],
  "questionText": "A curve passes through $(4, 10)$ and has gradient function $\\frac{dy}{dx} = 6\\sqrt{x}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int 6\\sqrt{x} \\,dx",
        "explanation": "Integrating the gradient function recovers $y$ along with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the square root as a power",
        "workingLatex": "y = \\int 6x^{\\frac{1}{2}} \\,dx",
        "explanation": "The power rule needs the term as a power of $x$, and $\\sqrt{x} = x^{\\frac{1}{2}}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate using the power rule",
        "workingLatex": "y = \\frac{6x^{\\frac{3}{2}}}{\\frac{3}{2}} + c",
        "explanation": "Adding one to $\\frac{1}{2}$ gives $\\frac{3}{2}$, and we divide by this new index.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficient",
        "workingLatex": "y = 4x^{\\frac{3}{2}} + c",
        "explanation": "Dividing by $\\frac{3}{2}$ is the same as multiplying by $\\frac{2}{3}$, and $6 \\times \\frac{2}{3} = 4$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "10 = 4(4)^{\\frac{3}{2}} + c",
        "explanation": "The curve passes through $(4,10)$, so these values satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the fractional power",
        "workingLatex": "10 = 4(8) + c = 32 + c",
        "explanation": "Since $4^{\\frac{3}{2}} = (\\sqrt{4})^{3} = 2^{3} = 8$, the term becomes $4 \\times 8 = 32$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "c = 10 - 32 = -22",
        "explanation": "Rearranging isolates $c$, which comes out negative here.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 4x^{\\frac{3}{2}} - 22",
        "explanation": "Substituting the value of $c$ gives the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 4 \\times \\frac{3}{2} x^{\\frac{1}{2}} = 6\\sqrt{x}",
        "explanation": "Differentiating the answer returns the original gradient, confirming the work.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 4x^{\\frac{3}{2}} - 22$"
  }
},
{
  "id": "al.y1.pure.integration.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "expanding-brackets"],
  "questionText": "A curve passes through $(6, 48)$ and has gradient function $\\frac{dy}{dx} = (x + 1)(x - 2)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int (x + 1)(x - 2) \\,dx",
        "explanation": "Integrating the gradient function returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the brackets first",
        "workingLatex": "(x + 1)(x - 2) = x^{2} - x - 2",
        "explanation": "We cannot integrate a product factor by factor, so the brackets must be multiplied out into separate powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{x^{3}}{3} - \\frac{x^{2}}{2} - 2x + c",
        "explanation": "Applying the power rule to each term raises the index by one and divides by the new index; the constant $-2$ integrates to $-2x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the point to find $c$",
        "workingLatex": "48 = \\frac{(6)^{3}}{3} - \\frac{(6)^{2}}{2} - 2(6) + c",
        "explanation": "The point $(6,48)$ lies on the curve, so its coordinates satisfy the equation. The value $x = 6$ was chosen so both fractions divide exactly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the powers",
        "workingLatex": "48 = \\frac{216}{3} - \\frac{36}{2} - 12 + c",
        "explanation": "Working out $6^{3} = 216$ and $6^{2} = 36$ prepares the fractions for simplification.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the fractions",
        "workingLatex": "48 = 72 - 18 - 12 + c",
        "explanation": "Each fraction reduces to a whole number, keeping the arithmetic clean.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "48 = 42 + c \\Rightarrow c = 6",
        "explanation": "Collecting the numbers on the right and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = \\frac{x^{3}}{3} - \\frac{x^{2}}{2} - 2x + 6",
        "explanation": "Replacing $c$ gives the curve with the required gradient through the given point.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = x^{2} - x - 2 = (x + 1)(x - 2)",
        "explanation": "Differentiating and factorising recovers the original product form of the gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\frac{x^{3}}{3} - \\frac{x^{2}}{2} - 2x + 6$"
  }
},
{
  "id": "al.y1.pure.integration.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "negative-powers"],
  "questionText": "A curve passes through $(1, 2)$ and has gradient function $\\frac{dy}{dx} = 8x^{3} - \\frac{3}{x^{2}}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(8x^{3} - \\frac{3}{x^{2}}\\right) \\,dx",
        "explanation": "Integrating the gradient function reverses differentiation and returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the reciprocal term as a power",
        "workingLatex": "y = \\int \\left(8x^{3} - 3x^{-2}\\right) \\,dx",
        "explanation": "Expressing $\\frac{3}{x^{2}}$ as $3x^{-2}$ lets the power rule be used on it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{8x^{4}}{4} - \\frac{3x^{-1}}{-1} + c",
        "explanation": "Raise each index by one and divide by the new index; for $x^{-2}$ the new index is $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify and rewrite the negative power",
        "workingLatex": "y = 2x^{4} + 3x^{-1} + c = 2x^{4} + \\frac{3}{x} + c",
        "explanation": "Dividing by $-1$ turns the term positive, and $3x^{-1}$ is written as $\\frac{3}{x}$ for a tidy answer.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "2 = 2(1)^{4} + \\frac{3}{1} + c",
        "explanation": "The curve passes through $(1,2)$, so these coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the terms",
        "workingLatex": "2 = 2 + 3 + c",
        "explanation": "Working each term out at $x = 1$ gives a simple equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "2 = 5 + c \\Rightarrow c = -3",
        "explanation": "Rearranging isolates $c$, which is negative here.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{4} + \\frac{3}{x} - 3",
        "explanation": "Substituting the constant completes the equation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 8x^{3} - \\frac{3}{x^{2}}",
        "explanation": "Differentiating $2x^{4} + 3x^{-1}$ gives $8x^{3} - 3x^{-2}$, matching the original gradient.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{4} + \\frac{3}{x} - 3$"
  }
},
{
  "id": "al.y1.pure.integration.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "fractional-powers"],
  "questionText": "A curve passes through $(4, 30)$ and has gradient function $\\frac{dy}{dx} = 3\\sqrt{x} + 2x$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(3\\sqrt{x} + 2x\\right) \\,dx",
        "explanation": "Integrating the gradient function recovers $y$ together with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the root as a power",
        "workingLatex": "y = \\int \\left(3x^{\\frac{1}{2}} + 2x\\right) \\,dx",
        "explanation": "Writing $\\sqrt{x}$ as $x^{\\frac{1}{2}}$ allows the power rule to be applied to that term.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{3x^{\\frac{3}{2}}}{\\frac{3}{2}} + \\frac{2x^{2}}{2} + c",
        "explanation": "Add one to each index and divide by the new index; the first index becomes $\\frac{3}{2}$ and the second becomes $2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficients",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + x^{2} + c",
        "explanation": "Dividing $3$ by $\\frac{3}{2}$ gives $2$, and $\\frac{2}{2} = 1$, so the coefficients tidy nicely.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "30 = 2(4)^{\\frac{3}{2}} + (4)^{2} + c",
        "explanation": "The curve passes through $(4,30)$, so these coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the powers",
        "workingLatex": "30 = 2(8) + 16 + c = 16 + 16 + c",
        "explanation": "Since $4^{\\frac{3}{2}} = 8$ and $4^{2} = 16$, both terms become whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "30 = 32 + c \\Rightarrow c = -2",
        "explanation": "Rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + x^{2} - 2",
        "explanation": "Substituting the constant gives the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 2 \\times \\frac{3}{2} x^{\\frac{1}{2}} + 2x = 3\\sqrt{x} + 2x",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{\\frac{3}{2}} + x^{2} - 2$"
  }
},
{
  "id": "al.y1.pure.integration.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "constant-of-integration"],
  "questionText": "A curve passes through $(2, 1)$ and has gradient function $\\frac{dy}{dx} = 5 - 2x$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(5 - 2x\\right) \\,dx",
        "explanation": "Integrating the gradient function reverses the differentiation and returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = 5x - \\frac{2x^{2}}{2} + c",
        "explanation": "The constant $5$ integrates to $5x$, and for $-2x$ we raise the index to $2$ and divide by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the coefficients",
        "workingLatex": "y = 5x - x^{2} + c",
        "explanation": "Dividing $2$ by $2$ leaves a coefficient of $1$, giving a clean expression.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the point to find $c$",
        "workingLatex": "1 = 5(2) - (2)^{2} + c",
        "explanation": "The point $(2,1)$ lies on the curve, so its coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the terms",
        "workingLatex": "1 = 10 - 4 + c",
        "explanation": "Working out each term at $x = 2$ prepares a simple equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the constant",
        "workingLatex": "1 = 6 + c \\Rightarrow c = -5",
        "explanation": "Collecting the numbers and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the equation of the curve",
        "workingLatex": "y = 5x - x^{2} - 5",
        "explanation": "Replacing $c$ gives the required equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 5 - 2x",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check the point lies on the curve",
        "workingLatex": "5(2) - (2)^{2} - 5 = 10 - 4 - 5 = 1",
        "explanation": "Substituting $x = 2$ gives $y = 1$, confirming the curve passes through $(2,1)$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 5x - x^{2} - 5$"
  }
},
{
  "id": "al.y1.pure.integration.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "y-intercept"],
  "questionText": "A curve passes through $(0, 7)$ and has gradient function $\\frac{dy}{dx} = 9x^{2} + 4x - 5$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(9x^{2} + 4x - 5\\right) \\,dx",
        "explanation": "Integrating the gradient function returns $y$ together with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{9x^{3}}{3} + \\frac{4x^{2}}{2} - 5x + c",
        "explanation": "Raise each index by one and divide by the new index; the constant $-5$ integrates to $-5x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the coefficients",
        "workingLatex": "y = 3x^{3} + 2x^{2} - 5x + c",
        "explanation": "Dividing gives whole-number coefficients, leaving $c$ to be determined.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the given point to find $c$",
        "workingLatex": "7 = 3(0)^{3} + 2(0)^{2} - 5(0) + c",
        "explanation": "The curve passes through $(0,7)$, so substituting these coordinates gives an equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate at $x = 0$",
        "workingLatex": "7 = 0 + 0 - 0 + c \\Rightarrow c = 7",
        "explanation": "Every term with an $x$ vanishes, so the constant equals the $y$-value. Here $c$ is exactly the $y$-intercept.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the equation of the curve",
        "workingLatex": "y = 3x^{3} + 2x^{2} - 5x + 7",
        "explanation": "Replacing $c$ with $7$ gives the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 9x^{2} + 4x - 5",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the point lies on the curve",
        "workingLatex": "3(0)^{3} + 2(0)^{2} - 5(0) + 7 = 7",
        "explanation": "At $x = 0$ the curve gives $y = 7$, confirming it passes through $(0,7)$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Interpret the constant",
        "workingLatex": "y(0) = c = 7",
        "explanation": "Because the point had $x = 0$, the constant of integration is read off directly as the height where the curve crosses the $y$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 3x^{3} + 2x^{2} - 5x + 7$"
  }
},
{
  "id": "al.y1.pure.integration.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "fractional-powers"],
  "questionText": "A curve passes through $(9, 10)$ and has gradient function $\\frac{dy}{dx} = \\frac{2}{\\sqrt{x}}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\frac{2}{\\sqrt{x}} \\,dx",
        "explanation": "Integrating the gradient function reverses differentiation and returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the term as a power",
        "workingLatex": "y = \\int 2x^{-\\frac{1}{2}} \\,dx",
        "explanation": "Since $\\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}$, the term becomes a single power ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate using the power rule",
        "workingLatex": "y = \\frac{2x^{\\frac{1}{2}}}{\\frac{1}{2}} + c",
        "explanation": "Adding one to $-\\frac{1}{2}$ gives $\\frac{1}{2}$, and we divide by this new index.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficient",
        "workingLatex": "y = 4x^{\\frac{1}{2}} + c = 4\\sqrt{x} + c",
        "explanation": "Dividing by $\\frac{1}{2}$ is multiplying by $2$, so $2 \\times 2 = 4$; we then rewrite $x^{\\frac{1}{2}}$ as $\\sqrt{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "10 = 4\\sqrt{9} + c",
        "explanation": "The curve passes through $(9,10)$; $x = 9$ was chosen because its square root is exact.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the square root",
        "workingLatex": "10 = 4(3) + c = 12 + c",
        "explanation": "Since $\\sqrt{9} = 3$, the term becomes $4 \\times 3 = 12$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "c = 10 - 12 = -2",
        "explanation": "Rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 4\\sqrt{x} - 2",
        "explanation": "Substituting the constant gives the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 4 \\times \\frac{1}{2} x^{-\\frac{1}{2}} = \\frac{2}{\\sqrt{x}}",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 4\\sqrt{x} - 2$"
  }
},
{
  "id": "al.y1.pure.integration.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "expanding-brackets"],
  "questionText": "A curve passes through $(3, 25)$ and has gradient function $\\frac{dy}{dx} = (2x - 1)^{2}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int (2x - 1)^{2} \\,dx",
        "explanation": "Integrating the gradient function returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the square first",
        "workingLatex": "(2x - 1)^{2} = 4x^{2} - 4x + 1",
        "explanation": "A squared bracket cannot be integrated directly, so we multiply it out into separate powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{4x^{3}}{3} - \\frac{4x^{2}}{2} + x + c",
        "explanation": "Apply the power rule term by term; the constant $1$ integrates to $x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficients",
        "workingLatex": "y = \\frac{4}{3}x^{3} - 2x^{2} + x + c",
        "explanation": "The middle term simplifies since $\\frac{4}{2} = 2$; the leading fraction stays as $\\frac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "25 = \\frac{4}{3}(3)^{3} - 2(3)^{2} + 3 + c",
        "explanation": "The point $(3,25)$ lies on the curve; $x = 3$ makes the $\\frac{4}{3}$ term divide exactly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the powers",
        "workingLatex": "25 = 36 - 18 + 3 + c",
        "explanation": "Since $\\frac{4}{3} \\times 27 = 36$ and $2 \\times 9 = 18$, all terms become whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "25 = 21 + c \\Rightarrow c = 4",
        "explanation": "Collecting the numbers and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = \\frac{4}{3}x^{3} - 2x^{2} + x + 4",
        "explanation": "Replacing $c$ gives the curve with the required gradient through the point.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 4x^{2} - 4x + 1 = (2x - 1)^{2}",
        "explanation": "Differentiating and recognising the perfect square returns the original gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\frac{4}{3}x^{3} - 2x^{2} + x + 4$"
  }
},
{
  "id": "al.y1.pure.integration.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "constant-of-integration"],
  "questionText": "A curve passes through $(1, 4)$ and has gradient function $\\frac{dy}{dx} = 12x^{3} - 6x + 5$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(12x^{3} - 6x + 5\\right) \\,dx",
        "explanation": "Integrating the gradient function reverses differentiation and returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{12x^{4}}{4} - \\frac{6x^{2}}{2} + 5x + c",
        "explanation": "Raise each index by one and divide by the new index; the constant $5$ integrates to $5x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the coefficients",
        "workingLatex": "y = 3x^{4} - 3x^{2} + 5x + c",
        "explanation": "Dividing gives whole-number coefficients, leaving $c$ to be found.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the point to find $c$",
        "workingLatex": "4 = 3(1)^{4} - 3(1)^{2} + 5(1) + c",
        "explanation": "The curve passes through $(1,4)$, so these coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the terms",
        "workingLatex": "4 = 3 - 3 + 5 + c",
        "explanation": "Working out each term at $x = 1$ gives a simple equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the constant",
        "workingLatex": "4 = 5 + c \\Rightarrow c = -1",
        "explanation": "Collecting the numbers and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the equation of the curve",
        "workingLatex": "y = 3x^{4} - 3x^{2} + 5x - 1",
        "explanation": "Replacing $c$ gives the required equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 12x^{3} - 6x + 5",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check the point lies on the curve",
        "workingLatex": "3(1)^{4} - 3(1)^{2} + 5(1) - 1 = 4",
        "explanation": "Substituting $x = 1$ gives $y = 4$, confirming the curve passes through $(1,4)$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 3x^{4} - 3x^{2} + 5x - 1$"
  }
},
{
  "id": "al.y1.pure.integration.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "negative-powers"],
  "questionText": "A curve passes through $(1, 6)$ and has gradient function $\\frac{dy}{dx} = 10x^{4} - \\frac{4}{x^{3}}$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(10x^{4} - \\frac{4}{x^{3}}\\right) \\,dx",
        "explanation": "Integrating the gradient function returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the reciprocal term as a power",
        "workingLatex": "y = \\int \\left(10x^{4} - 4x^{-3}\\right) \\,dx",
        "explanation": "Expressing $\\frac{4}{x^{3}}$ as $4x^{-3}$ lets the power rule handle it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{10x^{5}}{5} - \\frac{4x^{-2}}{-2} + c",
        "explanation": "Raise each index by one and divide by the new index; for $x^{-3}$ the new index is $-2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify and rewrite the negative power",
        "workingLatex": "y = 2x^{5} + 2x^{-2} + c = 2x^{5} + \\frac{2}{x^{2}} + c",
        "explanation": "Dividing $-4$ by $-2$ gives $+2$, and $2x^{-2}$ is written as $\\frac{2}{x^{2}}$ for the final form.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "6 = 2(1)^{5} + \\frac{2}{(1)^{2}} + c",
        "explanation": "The curve passes through $(1,6)$, so these coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the terms",
        "workingLatex": "6 = 2 + 2 + c",
        "explanation": "Working each term out at $x = 1$ gives a simple equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "6 = 4 + c \\Rightarrow c = 2",
        "explanation": "Rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{5} + \\frac{2}{x^{2}} + 2",
        "explanation": "Substituting the constant completes the equation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 10x^{4} - \\frac{4}{x^{3}}",
        "explanation": "Differentiating $2x^{5} + 2x^{-2}$ gives $10x^{4} - 4x^{-3}$, matching the original gradient.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{5} + \\frac{2}{x^{2}} + 2$"
  }
},
{
  "id": "al.y1.pure.integration.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "fractional-powers"],
  "questionText": "A curve passes through $(4, 5)$ and has gradient function $\\frac{dy}{dx} = 6\\sqrt{x} - 4x$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\left(6\\sqrt{x} - 4x\\right) \\,dx",
        "explanation": "Integrating the gradient function recovers $y$ together with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the root as a power",
        "workingLatex": "y = \\int \\left(6x^{\\frac{1}{2}} - 4x\\right) \\,dx",
        "explanation": "Writing $\\sqrt{x}$ as $x^{\\frac{1}{2}}$ prepares that term for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{6x^{\\frac{3}{2}}}{\\frac{3}{2}} - \\frac{4x^{2}}{2} + c",
        "explanation": "Add one to each index and divide by the new index; the first index becomes $\\frac{3}{2}$ and the second becomes $2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficients",
        "workingLatex": "y = 4x^{\\frac{3}{2}} - 2x^{2} + c",
        "explanation": "Dividing $6$ by $\\frac{3}{2}$ gives $4$, and $\\frac{4}{2} = 2$, tidying the expression.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "5 = 4(4)^{\\frac{3}{2}} - 2(4)^{2} + c",
        "explanation": "The curve passes through $(4,5)$, so these coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the powers",
        "workingLatex": "5 = 4(8) - 2(16) + c = 32 - 32 + c",
        "explanation": "Since $4^{\\frac{3}{2}} = 8$ and $4^{2} = 16$, the two terms cancel exactly.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "5 = 0 + c \\Rightarrow c = 5",
        "explanation": "With the variable terms cancelling, the constant equals the given $y$-value.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = 4x^{\\frac{3}{2}} - 2x^{2} + 5",
        "explanation": "Substituting the constant gives the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 4 \\times \\frac{3}{2} x^{\\frac{1}{2}} - 4x = 6\\sqrt{x} - 4x",
        "explanation": "Differentiating the answer returns the original gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 4x^{\\frac{3}{2}} - 2x^{2} + 5$"
  }
},
{
  "id": "al.y1.pure.integration.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "equation",
  "tags": ["integration", "gradient-function", "find-curve", "expanding-brackets"],
  "questionText": "A curve passes through $(2, 3)$ and has gradient function $\\frac{dy}{dx} = (3x + 2)(x - 1)$. Find the equation of the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int (3x + 2)(x - 1) \\,dx",
        "explanation": "Integrating the gradient function returns $y$ with an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the brackets first",
        "workingLatex": "(3x + 2)(x - 1) = 3x^{2} - x - 2",
        "explanation": "A product must be multiplied out into separate powers of $x$ before it can be integrated.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate each term",
        "workingLatex": "y = \\frac{3x^{3}}{3} - \\frac{x^{2}}{2} - 2x + c",
        "explanation": "Apply the power rule term by term; the constant $-2$ integrates to $-2x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the coefficients",
        "workingLatex": "y = x^{3} - \\frac{x^{2}}{2} - 2x + c",
        "explanation": "The leading term simplifies since $\\frac{3}{3} = 1$; the middle term keeps its $\\frac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the point to find $c$",
        "workingLatex": "3 = (2)^{3} - \\frac{(2)^{2}}{2} - 2(2) + c",
        "explanation": "The point $(2,3)$ lies on the curve; $x = 2$ is even so the $\\frac{x^{2}}{2}$ term divides exactly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the terms",
        "workingLatex": "3 = 8 - 2 - 4 + c",
        "explanation": "Since $2^{3} = 8$ and $\\frac{4}{2} = 2$, all terms become whole numbers.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the constant",
        "workingLatex": "3 = 2 + c \\Rightarrow c = 1",
        "explanation": "Collecting the numbers and rearranging isolates $c$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the equation of the curve",
        "workingLatex": "y = x^{3} - \\frac{x^{2}}{2} - 2x + 1",
        "explanation": "Replacing $c$ gives the curve with the required gradient through the point.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{dy}{dx} = 3x^{2} - x - 2 = (3x + 2)(x - 1)",
        "explanation": "Differentiating and factorising recovers the original product form of the gradient function.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{3} - \\frac{x^{2}}{2} - 2x + 1$"
  }
},
{
  "id": "al.y1.pure.integration.q051",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "equation",
  "tags": ["integration", "second-derivative", "integrate-twice", "boundary-conditions"],
  "questionText": "A curve satisfies $\\frac{d^2y}{dx^2} = 12x + 2$. Its gradient is $5$ when $x = 1$, and it passes through $(0, 4)$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the plan",
        "workingLatex": "\\frac{d^2y}{dx^2} \\xrightarrow{\\int} \\frac{dy}{dx} \\xrightarrow{\\int} y",
        "explanation": "The second derivative is two integrations away from $y$. Each integration introduces one unknown constant, so we will need the two given conditions to pin them down.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the second derivative once",
        "workingLatex": "\\frac{dy}{dx} = \\int (12x + 2)\\,dx = 6x^{2} + 2x + A",
        "explanation": "Integrating $\\frac{d^2y}{dx^2}$ returns the gradient function. Raising each power by one and dividing gives $6x^2 + 2x$, and we attach the first unknown constant $A$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Recognise what fixes $A$",
        "workingLatex": "\\left.\\frac{dy}{dx}\\right|_{x=1} = 5",
        "explanation": "The constant $A$ is unknown for now. The gradient condition is a statement about $\\frac{dy}{dx}$, so it is exactly the tool needed to determine $A$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the gradient condition",
        "workingLatex": "5 = 6(1)^{2} + 2(1) + A",
        "explanation": "Putting $x=1$ into the gradient function and setting it equal to the known gradient $5$ turns the condition into a simple equation for $A$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the right-hand side",
        "workingLatex": "5 = 8 + A",
        "explanation": "Evaluating $6(1)^2 + 2(1) = 8$ collapses the numbers so only $A$ remains unknown.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $A$",
        "workingLatex": "A = 5 - 8 = -3",
        "explanation": "Subtracting $8$ from both sides isolates the first constant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the complete gradient function",
        "workingLatex": "\\frac{dy}{dx} = 6x^{2} + 2x - 3",
        "explanation": "With $A$ known, the gradient function is now fully determined and ready for the second integration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate a second time",
        "workingLatex": "y = \\int (6x^{2} + 2x - 3)\\,dx = 2x^{3} + x^{2} - 3x + B",
        "explanation": "Integrating the gradient function gives $y$ itself, term by term, with a fresh unknown constant $B$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Recognise what fixes $B$",
        "workingLatex": "y = 4 \\ \\text{when} \\ x = 0",
        "explanation": "The remaining constant $B$ is a vertical shift of the whole curve. A point the curve passes through tells us the exact height, so it fixes $B$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the point $(0,4)$",
        "workingLatex": "4 = 2(0)^{3} + (0)^{2} - 3(0) + B",
        "explanation": "Because $x=0$, every term carrying an $x$ vanishes, leaving the constant exposed.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Solve for $B$",
        "workingLatex": "B = 4",
        "explanation": "The equation reduces immediately, giving the second constant.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{3} + x^{2} - 3x + 4",
        "explanation": "Both constants are now known, so this is the unique curve satisfying all the given information.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check: differentiate once",
        "workingLatex": "\\frac{dy}{dx} = 6x^{2} + 2x - 3",
        "explanation": "Differentiating the answer should return the gradient function we built. It does, which is a reassuring internal check.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check the gradient condition",
        "workingLatex": "6(1)^{2} + 2(1) - 3 = 5 \\;\\checkmark",
        "explanation": "The gradient at $x=1$ comes out as $5$, matching the given condition exactly.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Check the second derivative and the point",
        "workingLatex": "\\frac{d^2y}{dx^2} = 12x + 2 \\;\\checkmark, \\qquad y(0) = 4 \\;\\checkmark",
        "explanation": "Differentiating again recovers the original $\\frac{d^2y}{dx^2}$, and the point $(0,4)$ is satisfied. All conditions hold, so the answer is confirmed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{3} + x^{2} - 3x + 4$"
  }
},
{
  "id": "al.y1.pure.integration.q052",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "equation",
  "tags": ["integration", "second-derivative", "integrate-twice", "boundary-conditions"],
  "questionText": "A curve satisfies $\\frac{d^2y}{dx^2} = 6x - 4$. The gradient of the curve is $3$ at the point where $x = 2$, and the curve passes through $(1, 1)$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the plan",
        "workingLatex": "\\frac{d^2y}{dx^2} \\xrightarrow{\\int} \\frac{dy}{dx} \\xrightarrow{\\int} y",
        "explanation": "We integrate twice to travel from the second derivative up to $y$, using the gradient condition to fix the first constant and the point to fix the second.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the second derivative once",
        "workingLatex": "\\frac{dy}{dx} = \\int (6x - 4)\\,dx = 3x^{2} - 4x + A",
        "explanation": "Reversing the power rule on each term gives the gradient function, and the first constant $A$ records the information integration cannot recover on its own.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the gradient condition",
        "workingLatex": "3 = 3(2)^{2} - 4(2) + A",
        "explanation": "The gradient is $3$ at $x=2$, so substituting $x=2$ into $\\frac{dy}{dx}$ and equating to $3$ produces an equation for $A$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the arithmetic",
        "workingLatex": "3 = 12 - 8 + A = 4 + A",
        "explanation": "Working out $3(2)^2 = 12$ and $4(2) = 8$ leaves a clean expression in $A$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $A$",
        "workingLatex": "A = 3 - 4 = -1",
        "explanation": "Isolating $A$ finishes the first constant.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the full gradient function",
        "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 4x - 1",
        "explanation": "The gradient function is now complete and can be integrated to reach $y$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate a second time",
        "workingLatex": "y = \\int (3x^{2} - 4x - 1)\\,dx = x^{3} - 2x^{2} - x + B",
        "explanation": "A second integration lifts the gradient function to $y$, introducing the second constant $B$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply the point condition",
        "workingLatex": "1 = (1)^{3} - 2(1)^{2} - (1) + B",
        "explanation": "The curve passes through $(1,1)$, so substituting $x=1$ and $y=1$ gives an equation for $B$. Here $x=1$ does not vanish, so we simply evaluate each term.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify",
        "workingLatex": "1 = 1 - 2 - 1 + B = -2 + B",
        "explanation": "Collecting the numbers $1 - 2 - 1 = -2$ isolates $B$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve for $B$",
        "workingLatex": "B = 1 + 2 = 3",
        "explanation": "Adding $2$ to both sides gives the second constant.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the equation of the curve",
        "workingLatex": "y = x^{3} - 2x^{2} - x + 3",
        "explanation": "With both constants determined this is the unique curve meeting all the requirements.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check: differentiate once",
        "workingLatex": "\\frac{dy}{dx} = 3x^{2} - 4x - 1",
        "explanation": "Differentiating the answer reproduces the gradient function we constructed.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Verify the gradient value",
        "workingLatex": "3(2)^{2} - 4(2) - 1 = 12 - 8 - 1 = 3 \\;\\checkmark",
        "explanation": "The gradient at $x=2$ is $3$, exactly as required.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Verify the second derivative and the point",
        "workingLatex": "\\frac{d^2y}{dx^2} = 6x - 4 \\;\\checkmark, \\qquad y(1) = 1 - 2 - 1 + 3 = 1 \\;\\checkmark",
        "explanation": "The second derivative matches the original equation and the point $(1,1)$ is satisfied, so every condition holds.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{3} - 2x^{2} - x + 3$"
  }
},
{
  "id": "al.y1.pure.integration.q053",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "equation",
  "tags": ["integration", "second-derivative", "integrate-twice", "boundary-conditions"],
  "questionText": "A curve satisfies $\\frac{d^2y}{dx^2} = 12x^{2} - 6$. The gradient of the curve is $5$ when $x = -1$, and the curve passes through $(2, 11)$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the plan",
        "workingLatex": "\\frac{d^2y}{dx^2} \\xrightarrow{\\int} \\frac{dy}{dx} \\xrightarrow{\\int} y",
        "explanation": "Two integrations take us from the second derivative to $y$. Watch signs carefully here because one condition uses a negative $x$-value.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the second derivative once",
        "workingLatex": "\\frac{dy}{dx} = \\int (12x^{2} - 6)\\,dx = 4x^{3} - 6x + A",
        "explanation": "Reversing the power rule, $12x^2$ becomes $4x^3$ and $-6$ becomes $-6x$, plus the first constant $A$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the gradient condition at $x=-1$",
        "workingLatex": "5 = 4(-1)^{3} - 6(-1) + A",
        "explanation": "The gradient is $5$ at $x=-1$. Substituting carefully keeps track of the odd power turning negative.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the powers of $-1$",
        "workingLatex": "5 = 4(-1) + 6 + A = -4 + 6 + A",
        "explanation": "Since $(-1)^3 = -1$, the first term is $-4$, while $-6(-1) = +6$. Careful sign handling is the whole point of using a negative input.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify",
        "workingLatex": "5 = 2 + A",
        "explanation": "Combining $-4 + 6 = 2$ leaves a short equation for $A$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $A$",
        "workingLatex": "A = 5 - 2 = 3",
        "explanation": "Subtracting $2$ isolates the first constant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the full gradient function",
        "workingLatex": "\\frac{dy}{dx} = 4x^{3} - 6x + 3",
        "explanation": "The gradient function is now complete and ready to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate a second time",
        "workingLatex": "y = \\int (4x^{3} - 6x + 3)\\,dx = x^{4} - 3x^{2} + 3x + B",
        "explanation": "Integrating each term raises $y$ from the gradient function, adding the second constant $B$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Apply the point $(2,11)$",
        "workingLatex": "11 = (2)^{4} - 3(2)^{2} + 3(2) + B",
        "explanation": "Substituting $x=2$ and $y=11$ turns the point into an equation for $B$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the powers of $2$",
        "workingLatex": "11 = 16 - 12 + 6 + B",
        "explanation": "Here $2^4 = 16$, $3(2)^2 = 12$ and $3(2) = 6$, so the numbers are ready to combine.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Simplify and solve for $B$",
        "workingLatex": "11 = 10 + B \\;\\Rightarrow\\; B = 1",
        "explanation": "Since $16 - 12 + 6 = 10$, subtracting gives the second constant.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State the equation of the curve",
        "workingLatex": "y = x^{4} - 3x^{2} + 3x + 1",
        "explanation": "Both constants are known, so this is the unique curve satisfying the two conditions.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check: differentiate once",
        "workingLatex": "\\frac{dy}{dx} = 4x^{3} - 6x + 3",
        "explanation": "Differentiating the answer gives back the gradient function, so the second integration was done correctly.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Verify the gradient value",
        "workingLatex": "4(-1)^{3} - 6(-1) + 3 = -4 + 6 + 3 = 5 \\;\\checkmark",
        "explanation": "Re-testing at $x=-1$ gives the required gradient of $5$.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Verify the second derivative and the point",
        "workingLatex": "\\frac{d^2y}{dx^2} = 12x^{2} - 6 \\;\\checkmark, \\qquad y(2) = 16 - 12 + 6 + 1 = 11 \\;\\checkmark",
        "explanation": "Differentiating twice recovers the original equation and the point $(2,11)$ checks out, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{4} - 3x^{2} + 3x + 1$"
  }
},
{
  "id": "al.y1.pure.integration.q054",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "equation",
  "tags": ["integration", "second-derivative", "integrate-twice", "fractional-powers"],
  "questionText": "A curve satisfies $\\frac{d^2y}{dx^2} = 15\\sqrt{x}$ for $x > 0$. The gradient of the curve is $12$ when $x = 1$, and the curve passes through $(0, 5)$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the surd as a power",
        "workingLatex": "\\frac{d^2y}{dx^2} = 15\\sqrt{x} = 15x^{\\frac{1}{2}}",
        "explanation": "Before integrating, express the root as a fractional power. The power rule only works on terms written as $x^n$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate once using the power rule",
        "workingLatex": "\\frac{dy}{dx} = 15\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + A",
        "explanation": "Add one to the power $\\tfrac{1}{2}$ to get $\\tfrac{3}{2}$, then divide by the new power. Dividing by $\\tfrac{3}{2}$ is the same as multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the coefficient",
        "workingLatex": "\\frac{dy}{dx} = 15\\cdot\\frac{2}{3}\\,x^{\\frac{3}{2}} + A = 10x^{\\frac{3}{2}} + A",
        "explanation": "Multiplying $15 \\times \\tfrac{2}{3} = 10$ gives a tidy gradient function, plus the first constant $A$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the gradient condition",
        "workingLatex": "12 = 10(1)^{\\frac{3}{2}} + A",
        "explanation": "The gradient is $12$ at $x=1$. Since $1$ to any power is $1$, this substitution is clean.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $A$",
        "workingLatex": "12 = 10 + A \\;\\Rightarrow\\; A = 2",
        "explanation": "Subtracting $10$ isolates the first constant.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the full gradient function",
        "workingLatex": "\\frac{dy}{dx} = 10x^{\\frac{3}{2}} + 2",
        "explanation": "The gradient function is now complete and ready for a second integration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the first term again",
        "workingLatex": "\\int 10x^{\\frac{3}{2}}\\,dx = 10\\cdot\\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = 10\\cdot\\frac{2}{5}\\,x^{\\frac{5}{2}} = 4x^{\\frac{5}{2}}",
        "explanation": "Raising $\\tfrac{3}{2}$ to $\\tfrac{5}{2}$ and dividing by $\\tfrac{5}{2}$ (i.e. multiplying by $\\tfrac{2}{5}$) gives $10 \\times \\tfrac{2}{5} = 4$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 2\\,dx = 2x",
        "explanation": "A constant integrates to that constant times $x$, since its rate of change is constant.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Combine to get $y$",
        "workingLatex": "y = 4x^{\\frac{5}{2}} + 2x + B",
        "explanation": "Putting the integrated terms together and attaching the second constant $B$ gives the general form of $y$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Apply the point $(0,5)$",
        "workingLatex": "5 = 4(0)^{\\frac{5}{2}} + 2(0) + B",
        "explanation": "At $x=0$ both $x$-terms are zero, so the equation exposes $B$ directly.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Solve for $B$",
        "workingLatex": "B = 5",
        "explanation": "The point fixes the vertical position of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State the equation of the curve",
        "workingLatex": "y = 4x^{\\frac{5}{2}} + 2x + 5",
        "explanation": "Both constants are known, so this is the required curve.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check: differentiate once",
        "workingLatex": "\\frac{dy}{dx} = 4\\cdot\\frac{5}{2}x^{\\frac{3}{2}} + 2 = 10x^{\\frac{3}{2}} + 2",
        "explanation": "Differentiating $4x^{5/2}$ multiplies by $\\tfrac{5}{2}$ and drops the power to $\\tfrac{3}{2}$, recovering the gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Verify the gradient value",
        "workingLatex": "10(1)^{\\frac{3}{2}} + 2 = 12 \\;\\checkmark",
        "explanation": "The gradient at $x=1$ is $12$, matching the condition.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Verify the second derivative and the point",
        "workingLatex": "\\frac{d^2y}{dx^2} = 10\\cdot\\frac{3}{2}x^{\\frac{1}{2}} = 15\\sqrt{x} \\;\\checkmark, \\qquad y(0) = 5 \\;\\checkmark",
        "explanation": "Differentiating again gives back $15\\sqrt{x}$, and the curve passes through $(0,5)$, so all conditions are satisfied.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 4x^{\\frac{5}{2}} + 2x + 5$"
  }
},
{
  "id": "al.y1.pure.integration.q055",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "equation",
  "tags": ["integration", "second-derivative", "integrate-twice", "boundary-conditions"],
  "questionText": "A curve satisfies $\\frac{d^2y}{dx^2} = 24x^{2} - 6x$. The gradient of the curve is $9$ when $x = 1$, and the curve passes through $(1, 4)$. Find $y$ in terms of $x$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the plan",
        "workingLatex": "\\frac{d^2y}{dx^2} \\xrightarrow{\\int} \\frac{dy}{dx} \\xrightarrow{\\int} y",
        "explanation": "Both conditions here happen at $x=1$: one is about the gradient, the other about the height. Keeping them separate is the key to using each correctly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the second derivative once",
        "workingLatex": "\\frac{dy}{dx} = \\int (24x^{2} - 6x)\\,dx = 8x^{3} - 3x^{2} + A",
        "explanation": "Reversing the power rule, $24x^2$ becomes $8x^3$ and $-6x$ becomes $-3x^2$, plus the first constant $A$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the gradient condition",
        "workingLatex": "9 = 8(1)^{3} - 3(1)^{2} + A",
        "explanation": "The gradient is $9$ at $x=1$, so this substitution into $\\frac{dy}{dx}$ gives an equation for $A$. We must use the gradient condition on the first derivative, not on $y$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify",
        "workingLatex": "9 = 8 - 3 + A = 5 + A",
        "explanation": "Evaluating $8 - 3 = 5$ leaves a short equation for $A$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $A$",
        "workingLatex": "A = 9 - 5 = 4",
        "explanation": "Subtracting $5$ gives the first constant.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the full gradient function",
        "workingLatex": "\\frac{dy}{dx} = 8x^{3} - 3x^{2} + 4",
        "explanation": "The gradient function is now complete, ready for the second integration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate a second time",
        "workingLatex": "y = \\int (8x^{3} - 3x^{2} + 4)\\,dx = 2x^{4} - x^{3} + 4x + B",
        "explanation": "Integrating each term lifts the gradient function to $y$, with the second constant $B$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply the point condition",
        "workingLatex": "4 = 2(1)^{4} - (1)^{3} + 4(1) + B",
        "explanation": "The curve passes through $(1,4)$, so substituting $x=1$ and $y=4$ gives an equation for $B$. This is the second, distinct use of $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify",
        "workingLatex": "4 = 2 - 1 + 4 + B = 5 + B",
        "explanation": "Collecting $2 - 1 + 4 = 5$ isolates $B$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve for $B$",
        "workingLatex": "B = 4 - 5 = -1",
        "explanation": "Subtracting $5$ gives the second constant.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{4} - x^{3} + 4x - 1",
        "explanation": "With both constants determined, this is the unique curve meeting both conditions.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check: differentiate once",
        "workingLatex": "\\frac{dy}{dx} = 8x^{3} - 3x^{2} + 4",
        "explanation": "Differentiating the answer reproduces the gradient function, confirming the second integration.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Verify the gradient value",
        "workingLatex": "8(1)^{3} - 3(1)^{2} + 4 = 8 - 3 + 4 = 9 \\;\\checkmark",
        "explanation": "The gradient at $x=1$ is $9$, as required.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Verify the second derivative and the point",
        "workingLatex": "\\frac{d^2y}{dx^2} = 24x^{2} - 6x \\;\\checkmark, \\qquad y(1) = 2 - 1 + 4 - 1 = 4 \\;\\checkmark",
        "explanation": "Differentiating twice recovers the original equation and the point $(1,4)$ is satisfied, so the answer is confirmed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{4} - x^{3} + 4x - 1$"
  }
},
{
  "id": "al.y1.pure.integration.q056",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "expression",
  "tags": ["integration", "rewrite-first", "fractional-powers", "expand-and-divide"],
  "questionText": "Find $\\int \\frac{(2x-3)^{2}}{\\sqrt{x}}\\,dx$, giving each term in its simplest form.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the obstacle",
        "workingLatex": "\\int \\frac{(2x-3)^{2}}{\\sqrt{x}}\\,dx",
        "explanation": "There is no rule for integrating a quotient like this directly. The plan is to rewrite the integrand as a sum of simple powers of $x$, which we can integrate one at a time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the numerator",
        "workingLatex": "(2x-3)^{2} = 4x^{2} - 12x + 9",
        "explanation": "Squaring the bracket using $(a-b)^2 = a^2 - 2ab + b^2$ turns the numerator into a polynomial we can split apart.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integrand as a single fraction",
        "workingLatex": "\\frac{4x^{2} - 12x + 9}{\\sqrt{x}}",
        "explanation": "Placing the expanded numerator over $\\sqrt{x}$ prepares us to divide each term separately.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}} \\;\\Rightarrow\\; \\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}",
        "explanation": "Expressing the root as a power lets us divide using the index law $\\frac{x^m}{x^n} = x^{m-n}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide the first term",
        "workingLatex": "\\frac{4x^{2}}{x^{\\frac{1}{2}}} = 4x^{2-\\frac{1}{2}} = 4x^{\\frac{3}{2}}",
        "explanation": "Subtracting the indices, $2 - \\tfrac{1}{2} = \\tfrac{3}{2}$, gives the first power term.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Divide the second term",
        "workingLatex": "\\frac{-12x}{x^{\\frac{1}{2}}} = -12x^{1-\\frac{1}{2}} = -12x^{\\frac{1}{2}}",
        "explanation": "Here $1 - \\tfrac{1}{2} = \\tfrac{1}{2}$, giving the middle term.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Divide the third term",
        "workingLatex": "\\frac{9}{x^{\\frac{1}{2}}} = 9x^{-\\frac{1}{2}}",
        "explanation": "The constant becomes a negative fractional power. Note this is $x^{-1/2}$, not $x^{-1}$, so it will integrate cleanly by the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Rewrite the whole integral",
        "workingLatex": "\\int \\left(4x^{\\frac{3}{2}} - 12x^{\\frac{1}{2}} + 9x^{-\\frac{1}{2}}\\right)dx",
        "explanation": "The awkward quotient is now a sum of standard power terms, each ready for the reverse power rule.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to the power and divide by the new power. This works for every term here since none of the powers is $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the first term",
        "workingLatex": "4\\cdot\\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = 4\\cdot\\frac{2}{5}x^{\\frac{5}{2}} = \\frac{8}{5}x^{\\frac{5}{2}}",
        "explanation": "Raising $\\tfrac{3}{2}$ to $\\tfrac{5}{2}$ and dividing by $\\tfrac{5}{2}$ gives $4 \\times \\tfrac{2}{5} = \\tfrac{8}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Integrate the second term",
        "workingLatex": "-12\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = -12\\cdot\\frac{2}{3}x^{\\frac{3}{2}} = -8x^{\\frac{3}{2}}",
        "explanation": "Similarly $-12 \\times \\tfrac{2}{3} = -8$ after raising the power to $\\tfrac{3}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Integrate the third term",
        "workingLatex": "9\\cdot\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = 9\\cdot 2\\,x^{\\frac{1}{2}} = 18x^{\\frac{1}{2}}",
        "explanation": "The power $-\\tfrac{1}{2}$ rises to $\\tfrac{1}{2}$; dividing by $\\tfrac{1}{2}$ doubles the coefficient to $18$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Combine and add the constant",
        "workingLatex": "\\frac{8}{5}x^{\\frac{5}{2}} - 8x^{\\frac{3}{2}} + 18x^{\\frac{1}{2}} + c",
        "explanation": "Collecting the three integrated terms and adding a single constant of integration completes the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{8}{5}x^{\\frac{5}{2}} - 8x^{\\frac{3}{2}} + 18x^{\\frac{1}{2}}\\right) = 4x^{\\frac{3}{2}} - 12x^{\\frac{1}{2}} + 9x^{-\\frac{1}{2}}",
        "explanation": "Differentiating returns exactly the rewritten integrand, which confirms the integration is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{8}{5}x^{\\frac{5}{2}} - 8x^{\\frac{3}{2}} + 18x^{\\frac{1}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q057",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "rewrite-first", "expand-first"],
  "questionText": "Find $\\int (x^{2}-1)^{2}\\,dx$, giving each term in its simplest form.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the obstacle",
        "workingLatex": "\\int (x^{2}-1)^{2}\\,dx",
        "explanation": "We cannot integrate a squared bracket by simply raising its power; there is no chain-rule-in-reverse rule at this level. The safe route is to expand first, then integrate term by term.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the square",
        "workingLatex": "(x^{2}-1)^{2} = (x^{2})^{2} - 2(x^{2})(1) + (1)^{2}",
        "explanation": "Applying $(a-b)^2 = a^2 - 2ab + b^2$ with $a = x^2$ and $b = 1$ sets up each piece before simplifying.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the expansion",
        "workingLatex": "= x^{4} - 2x^{2} + 1",
        "explanation": "Using $(x^2)^2 = x^4$ turns the integrand into a plain polynomial, which is straightforward to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rewrite the integral",
        "workingLatex": "\\int \\left(x^{4} - 2x^{2} + 1\\right)dx",
        "explanation": "Now the integral is a sum of standard power terms.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Split over the sum",
        "workingLatex": "\\int \\left(x^{4} - 2x^{2} + 1\\right)dx = \\int x^{4}\\,dx - \\int 2x^{2}\\,dx + \\int 1\\,dx",
        "explanation": "Integration distributes over addition and subtraction, so we may deal with each term on its own and then add the results.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to each power and divide by the new power. Every power here is a positive whole number, so the rule applies safely.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{4}\\,dx = \\frac{x^{5}}{5}",
        "explanation": "Raising the power to $5$ and dividing by $5$ handles the leading term.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the second term",
        "workingLatex": "\\int -2x^{2}\\,dx = -2\\cdot\\frac{x^{3}}{3} = -\\frac{2}{3}x^{3}",
        "explanation": "The coefficient $-2$ rides along while the power rises from $2$ to $3$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the third term",
        "workingLatex": "\\int 1\\,dx = x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Combine and add the constant",
        "workingLatex": "\\frac{x^{5}}{5} - \\frac{2}{3}x^{3} + x + c",
        "explanation": "Assembling the three antiderivatives and one constant of integration gives the full result.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check by differentiating the first term",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{5}}{5}\\right) = x^{4}",
        "explanation": "Differentiating the leading term returns $x^4$, the first term of the expanded integrand.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the remaining terms",
        "workingLatex": "\\frac{d}{dx}\\left(-\\frac{2}{3}x^{3} + x\\right) = -2x^{2} + 1",
        "explanation": "Differentiating the other two terms gives $-2x^2 + 1$, so the full derivative is $x^4 - 2x^2 + 1$, matching the integrand and confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final result",
        "workingLatex": "\\int (x^{2}-1)^{2}\\,dx = \\frac{x^{5}}{5} - \\frac{2}{3}x^{3} + x + c",
        "explanation": "The differentiation check confirms the antiderivative, so this is the final answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x^{5}}{5} - \\frac{2}{3}x^{3} + x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q058",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "expression",
  "tags": ["integration", "rewrite-first", "expand-and-divide", "negative-powers"],
  "questionText": "Find $\\int \\frac{(x^{2}+3)^{2}}{x^{2}}\\,dx$, giving each term in its simplest form.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the obstacle",
        "workingLatex": "\\int \\frac{(x^{2}+3)^{2}}{x^{2}}\\,dx",
        "explanation": "A squared bracket over $x^2$ cannot be integrated as it stands. We expand the top, then divide each term by $x^2$ to get simple powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the numerator",
        "workingLatex": "(x^{2}+3)^{2} = x^{4} + 6x^{2} + 9",
        "explanation": "Using $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x^2$, $b = 3$ gives $x^4 + 6x^2 + 9$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite as a single fraction",
        "workingLatex": "\\frac{x^{4} + 6x^{2} + 9}{x^{2}}",
        "explanation": "Placing the expanded numerator over $x^2$ lets us divide each term individually.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Divide the first term",
        "workingLatex": "\\frac{x^{4}}{x^{2}} = x^{4-2} = x^{2}",
        "explanation": "Subtracting indices gives $x^2$ for the leading term.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide the second term",
        "workingLatex": "\\frac{6x^{2}}{x^{2}} = 6",
        "explanation": "The powers cancel, leaving the constant $6$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Divide the third term",
        "workingLatex": "\\frac{9}{x^{2}} = 9x^{-2}",
        "explanation": "The constant over $x^2$ becomes $9x^{-2}$. This is $x^{-2}$, not $x^{-1}$, so the power rule will still apply.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Rewrite the whole integral",
        "workingLatex": "\\int \\left(x^{2} + 6 + 9x^{-2}\\right)dx",
        "explanation": "The quotient is now a sum of three standard power terms.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c, \\quad n \\neq -1",
        "explanation": "Add one to the power and divide. The condition $n \\neq -1$ is safe here because our powers are $2$, $0$ and $-2$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{2}\\,dx = \\frac{x^{3}}{3}",
        "explanation": "Raising to $x^3$ and dividing by $3$ handles the leading term.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 6\\,dx = 6x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Integrate the negative-power term",
        "workingLatex": "\\int 9x^{-2}\\,dx = 9\\cdot\\frac{x^{-1}}{-1} = -9x^{-1}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ flips the sign. Notice we integrate $x^{-2}$ into $x^{-1}$, which is fine, and we never had to integrate $x^{-1}$ itself.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine and add the constant",
        "workingLatex": "\\frac{x^{3}}{3} + 6x - 9x^{-1} + c",
        "explanation": "Collecting the terms and adding the constant of integration completes the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Write with a positive index",
        "workingLatex": "\\frac{x^{3}}{3} + 6x - \\frac{9}{x} + c",
        "explanation": "Rewriting $-9x^{-1}$ as $-\\tfrac{9}{x}$ presents the answer in its neatest form.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{3}}{3} + 6x - 9x^{-1}\\right) = x^{2} + 6 + 9x^{-2}",
        "explanation": "Differentiating gives back the rewritten integrand $x^2 + 6 + 9x^{-2}$, confirming the result is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x^{3}}{3} + 6x - \\frac{9}{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q059",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "rewrite-first", "expand-first", "fractional-powers"],
  "questionText": "Find $\\int (\\sqrt{x}+2)^{2}\\,dx$, giving each term in its simplest form.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the obstacle",
        "workingLatex": "\\int (\\sqrt{x}+2)^{2}\\,dx",
        "explanation": "The squared bracket contains a root, so we cannot integrate it directly. Expanding first turns it into a sum of powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Working with a fractional power rather than a root makes the algebra and the later integration cleaner.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Expand the square",
        "workingLatex": "(x^{\\frac{1}{2}}+2)^{2} = (x^{\\frac{1}{2}})^{2} + 2\\cdot 2\\cdot x^{\\frac{1}{2}} + 2^{2}",
        "explanation": "Applying $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x^{1/2}$ and $b = 2$ lays out the three terms.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the expansion",
        "workingLatex": "= x + 4x^{\\frac{1}{2}} + 4",
        "explanation": "Since $(x^{1/2})^2 = x$, the middle term is $4x^{1/2}$ and the last is $4$. The integrand is now a sum of simple powers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rewrite the integral",
        "workingLatex": "\\int \\left(x + 4x^{\\frac{1}{2}} + 4\\right)dx",
        "explanation": "Every term is now of the form $x^n$, ready for the reverse power rule.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Split over the sum",
        "workingLatex": "\\int \\left(x + 4x^{\\frac{1}{2}} + 4\\right)dx = \\int x\\,dx + \\int 4x^{\\frac{1}{2}}\\,dx + \\int 4\\,dx",
        "explanation": "Integration distributes across a sum, so each term can be integrated separately and the results added together.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to the power and divide by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int x\\,dx = \\frac{x^{2}}{2}",
        "explanation": "Here the power $1$ rises to $2$ and we divide by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the middle term",
        "workingLatex": "\\int 4x^{\\frac{1}{2}}\\,dx = 4\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 4\\cdot\\frac{2}{3}x^{\\frac{3}{2}} = \\frac{8}{3}x^{\\frac{3}{2}}",
        "explanation": "Raising $\\tfrac{1}{2}$ to $\\tfrac{3}{2}$ and dividing by $\\tfrac{3}{2}$ gives $4 \\times \\tfrac{2}{3} = \\tfrac{8}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 4\\,dx = 4x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Combine and add the constant",
        "workingLatex": "\\frac{x^{2}}{2} + \\frac{8}{3}x^{\\frac{3}{2}} + 4x + c",
        "explanation": "Assembling the three antiderivatives and one constant of integration gives the full result.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{x^{2}}{2} + \\frac{8}{3}x^{\\frac{3}{2}} + 4x\\right) = x + 4x^{\\frac{1}{2}} + 4",
        "explanation": "Differentiating each term recovers $x + 4x^{1/2} + 4$, the expanded integrand, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final result",
        "workingLatex": "\\int (\\sqrt{x}+2)^{2}\\,dx = \\frac{x^{2}}{2} + \\frac{8}{3}x^{\\frac{3}{2}} + 4x + c",
        "explanation": "The check confirms the antiderivative, so this is the final answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{x^{2}}{2} + \\frac{8}{3}x^{\\frac{3}{2}} + 4x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q060",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "expression",
  "tags": ["integration", "rewrite-first", "expand-and-divide", "fractional-powers"],
  "questionText": "Find $\\int \\frac{x^{3} - 2x^{2} + x}{\\sqrt{x}}\\,dx$, giving each term in its simplest form.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the obstacle",
        "workingLatex": "\\int \\frac{x^{3} - 2x^{2} + x}{\\sqrt{x}}\\,dx",
        "explanation": "A polynomial divided by a root cannot be integrated as a single object. We divide each term by $\\sqrt{x}$ to produce simple powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}} \\;\\Rightarrow\\; \\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}",
        "explanation": "Turning the denominator into $x^{1/2}$ lets us divide using the index law $\\frac{x^m}{x^n} = x^{m-n}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Divide the first term",
        "workingLatex": "\\frac{x^{3}}{x^{\\frac{1}{2}}} = x^{3-\\frac{1}{2}} = x^{\\frac{5}{2}}",
        "explanation": "Subtracting the indices, $3 - \\tfrac{1}{2} = \\tfrac{5}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Divide the second term",
        "workingLatex": "\\frac{-2x^{2}}{x^{\\frac{1}{2}}} = -2x^{2-\\frac{1}{2}} = -2x^{\\frac{3}{2}}",
        "explanation": "Here $2 - \\tfrac{1}{2} = \\tfrac{3}{2}$, carrying the coefficient $-2$ along.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide the third term",
        "workingLatex": "\\frac{x}{x^{\\frac{1}{2}}} = x^{1-\\frac{1}{2}} = x^{\\frac{1}{2}}",
        "explanation": "Finally $1 - \\tfrac{1}{2} = \\tfrac{1}{2}$. Every power is positive and fractional, so no $x^{-1}$ term appears.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite the whole integral",
        "workingLatex": "\\int \\left(x^{\\frac{5}{2}} - 2x^{\\frac{3}{2}} + x^{\\frac{1}{2}}\\right)dx",
        "explanation": "The quotient is now a sum of three standard power terms.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to the power and divide by the new power; this applies to each fractional power here.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{\\frac{5}{2}}\\,dx = \\frac{x^{\\frac{7}{2}}}{\\frac{7}{2}} = \\frac{2}{7}x^{\\frac{7}{2}}",
        "explanation": "Raising $\\tfrac{5}{2}$ to $\\tfrac{7}{2}$ and dividing by $\\tfrac{7}{2}$ gives the coefficient $\\tfrac{2}{7}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the second term",
        "workingLatex": "\\int -2x^{\\frac{3}{2}}\\,dx = -2\\cdot\\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = -2\\cdot\\frac{2}{5}x^{\\frac{5}{2}} = -\\frac{4}{5}x^{\\frac{5}{2}}",
        "explanation": "The power rises to $\\tfrac{5}{2}$ and $-2 \\times \\tfrac{2}{5} = -\\tfrac{4}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the third term",
        "workingLatex": "\\int x^{\\frac{1}{2}}\\,dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = \\frac{2}{3}x^{\\frac{3}{2}}",
        "explanation": "Raising $\\tfrac{1}{2}$ to $\\tfrac{3}{2}$ and dividing gives $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Combine and add the constant",
        "workingLatex": "\\frac{2}{7}x^{\\frac{7}{2}} - \\frac{4}{5}x^{\\frac{5}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + c",
        "explanation": "Collecting the three integrated terms and adding the constant of integration completes the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the first two terms by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{2}{7}x^{\\frac{7}{2}} - \\frac{4}{5}x^{\\frac{5}{2}}\\right) = x^{\\frac{5}{2}} - 2x^{\\frac{3}{2}}",
        "explanation": "Differentiating the first two terms reproduces the first two terms of the rewritten integrand.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check the last term and conclude",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{2}{3}x^{\\frac{3}{2}}\\right) = x^{\\frac{1}{2}} \\;\\Rightarrow\\; x^{\\frac{5}{2}} - 2x^{\\frac{3}{2}} + x^{\\frac{1}{2}} \\;\\checkmark",
        "explanation": "The last term differentiates to $x^{1/2}$, so the full derivative matches the integrand exactly, confirming the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{2}{7}x^{\\frac{7}{2}} - \\frac{4}{5}x^{\\frac{5}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["integration", "rewrite", "find-curve", "evaluate"],
  "questionText": "A curve passes through $(1, 2)$ and has gradient function $\\dfrac{dy}{dx} = \\dfrac{3x-1}{\\sqrt{x}}$. Find $y$ in terms of $x$, and hence find the value of $y$ when $x = 4$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise that integrating the gradient rebuilds the curve",
        "workingLatex": "y = \\int \\frac{dy}{dx}\\,dx = \\int \\frac{3x-1}{\\sqrt{x}}\\,dx",
        "explanation": "The gradient function is the derivative of $y$, so integrating it recovers $y$ up to an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the root as a fractional power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Fractional-power form lets us use the laws of indices to carry out the division.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split the single fraction over each term in the numerator",
        "workingLatex": "\\frac{3x-1}{x^{\\frac{1}{2}}} = \\frac{3x}{x^{\\frac{1}{2}}} - \\frac{1}{x^{\\frac{1}{2}}}",
        "explanation": "A shared denominator can be handed to each term on top, which lets us simplify them separately.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the first term by subtracting indices",
        "workingLatex": "\\frac{3x}{x^{\\frac{1}{2}}} = 3x^{1-\\frac{1}{2}} = 3x^{\\frac{1}{2}}",
        "explanation": "Dividing powers of $x$ means subtracting the indices, and $1 - \\tfrac{1}{2} = \\tfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{1}{x^{\\frac{1}{2}}} = x^{-\\frac{1}{2}}",
        "explanation": "A reciprocal of a power becomes the same power with a negative index.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the integrand as clean powers of $x$",
        "workingLatex": "\\frac{dy}{dx} = 3x^{\\frac{1}{2}} - x^{-\\frac{1}{2}}",
        "explanation": "Every term is now a simple power of $x$, so the power rule for integration will apply directly.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one, then divide by that new index.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int 3x^{\\frac{1}{2}}\\,dx = 3\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 2x^{\\frac{3}{2}}",
        "explanation": "Raising $\\tfrac{1}{2}$ by one gives $\\tfrac{3}{2}$; dividing by $\\tfrac{3}{2}$ is the same as multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the second term",
        "workingLatex": "\\int -x^{-\\frac{1}{2}}\\,dx = -\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = -2x^{\\frac{1}{2}}",
        "explanation": "Here $-\\tfrac{1}{2} + 1 = \\tfrac{1}{2}$, and dividing by $\\tfrac{1}{2}$ doubles the term.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Collect the terms and add the constant",
        "workingLatex": "y = 2x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + c",
        "explanation": "A single constant $c$ captures every unknown offset introduced by integrating.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Use the point $(1, 2)$ to find $c$",
        "workingLatex": "2 = 2(1)^{\\frac{3}{2}} - 2(1)^{\\frac{1}{2}} + c",
        "explanation": "The curve passes through $(1, 2)$, so those coordinates must satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the powers of $1$",
        "workingLatex": "2 = 2 - 2 + c",
        "explanation": "Any power of $1$ is just $1$, so the first two terms cancel each other.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Solve for the constant",
        "workingLatex": "c = 2",
        "explanation": "This is the only constant that makes the curve pass through the given point.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Write the equation of the curve",
        "workingLatex": "y = 2x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + 2",
        "explanation": "With $c$ known, the curve is fully determined.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Substitute $x = 4$ to find the required $y$",
        "workingLatex": "y = 2(4)^{\\frac{3}{2}} - 2(4)^{\\frac{1}{2}} + 2",
        "explanation": "The second part asks for the height of the curve at $x = 4$, so we substitute that value in.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "Work out the powers of $4$",
        "workingLatex": "4^{\\frac{1}{2}} = 2, \\quad 4^{\\frac{3}{2}} = 2^{3} = 8",
        "explanation": "The square root of $4$ is $2$, and cubing that root gives $8$.",
        "diagram": null
      },
      {
        "stepNumber": 17,
        "description": "Compute the final value",
        "workingLatex": "y = 2(8) - 2(2) + 2 = 16 - 4 + 2 = 14",
        "explanation": "Combining the terms gives the required value of $y$ at $x = 4$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + 2$, and $y = 14$ when $x = 4$."
  }
},
{
  "id": "al.y1.pure.integration.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["integration", "rewrite", "find-curve", "roots"],
  "questionText": "A curve passes through $(1, 3)$ and satisfies $\\dfrac{dy}{dx} = \\dfrac{3x+2}{\\sqrt{x}}$. Find the equation of the curve, and hence find $y$ when $x = 4$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient function",
        "workingLatex": "y = \\int \\frac{3x+2}{\\sqrt{x}}\\,dx",
        "explanation": "Integrating the gradient function reverses differentiation and returns the curve $y$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the root as a fractional power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "This lets us divide using the laws of indices instead of dividing by a root.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split the fraction over each term",
        "workingLatex": "\\frac{3x+2}{x^{\\frac{1}{2}}} = \\frac{3x}{x^{\\frac{1}{2}}} + \\frac{2}{x^{\\frac{1}{2}}}",
        "explanation": "The common denominator is shared with each term on top so they can be simplified separately.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{3x}{x^{\\frac{1}{2}}} = 3x^{1-\\frac{1}{2}} = 3x^{\\frac{1}{2}}",
        "explanation": "Subtracting indices when dividing powers of $x$ gives the exponent $\\tfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{2}{x^{\\frac{1}{2}}} = 2x^{-\\frac{1}{2}}",
        "explanation": "Moving the power from the denominator to the numerator makes the index negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\frac{dy}{dx} = 3x^{\\frac{1}{2}} + 2x^{-\\frac{1}{2}}",
        "explanation": "Both terms are now standard powers ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Increase the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int 3x^{\\frac{1}{2}}\\,dx = 3\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 2x^{\\frac{3}{2}}",
        "explanation": "Dividing by $\\tfrac{3}{2}$ multiplies the $3$ by $\\tfrac{2}{3}$, leaving a coefficient of $2$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the second term",
        "workingLatex": "\\int 2x^{-\\frac{1}{2}}\\,dx = 2\\cdot\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = 4x^{\\frac{1}{2}}",
        "explanation": "Since $-\\tfrac{1}{2} + 1 = \\tfrac{1}{2}$, dividing by $\\tfrac{1}{2}$ doubles the coefficient from $2$ to $4$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the general equation with the constant",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}} + c",
        "explanation": "The constant $c$ stands for the vertical position that integration cannot yet fix.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the point $(1, 3)$",
        "workingLatex": "3 = 2(1)^{\\frac{3}{2}} + 4(1)^{\\frac{1}{2}} + c",
        "explanation": "The curve passes through $(1, 3)$, so those values satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the powers of $1$",
        "workingLatex": "3 = 2 + 4 + c",
        "explanation": "Every power of $1$ equals $1$, giving simple numbers to add.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Solve for the constant",
        "workingLatex": "c = 3 - 6 = -3",
        "explanation": "Rearranging isolates the constant that fits the given point.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the equation of the curve",
        "workingLatex": "y = 2x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}} - 3",
        "explanation": "This is the unique curve with the given gradient that passes through $(1, 3)$.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Substitute $x = 4$",
        "workingLatex": "y = 2(4)^{\\frac{3}{2}} + 4(4)^{\\frac{1}{2}} - 3",
        "explanation": "We now read off the height of the curve at $x = 4$.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "Evaluate the powers and combine",
        "workingLatex": "y = 2(8) + 4(2) - 3 = 16 + 8 - 3 = 21",
        "explanation": "With $4^{1/2}=2$ and $4^{3/2}=8$, the terms combine to give the final value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 2x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}} - 3$, and $y = 21$ when $x = 4$."
  }
},
{
  "id": "al.y1.pure.integration.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["integration", "rewrite", "find-curve", "reciprocal"],
  "questionText": "A curve has gradient function $\\dfrac{dy}{dx} = \\dfrac{x^{3}+4}{x^{2}}$ and passes through the point $(2, 1)$. Find $y$ in terms of $x$, and hence find the value of $y$ when $x = 4$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient",
        "workingLatex": "y = \\int \\frac{x^{3}+4}{x^{2}}\\,dx",
        "explanation": "Integrating the gradient function reverses differentiation and rebuilds the curve.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction over the common denominator",
        "workingLatex": "\\frac{x^{3}+4}{x^{2}} = \\frac{x^{3}}{x^{2}} + \\frac{4}{x^{2}}",
        "explanation": "Sharing the denominator $x^{2}$ with each term lets us simplify them independently.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{x^{3}}{x^{2}} = x^{3-2} = x",
        "explanation": "Dividing powers of $x$ subtracts the indices, leaving $x^{1}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{4}{x^{2}} = 4x^{-2}",
        "explanation": "Bringing $x^{2}$ up from the denominator turns the index negative.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\frac{dy}{dx} = x + 4x^{-2}",
        "explanation": "The lowest power here is $x^{-2}$, not $x^{-1}$, so the ordinary power rule works with no logarithm needed.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to the index and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the first term",
        "workingLatex": "\\int x\\,dx = \\frac{1}{2}x^{2}",
        "explanation": "Raising $x^{1}$ to $x^{2}$ and dividing by $2$ gives the standard result.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the second term",
        "workingLatex": "\\int 4x^{-2}\\,dx = 4\\cdot\\frac{x^{-1}}{-1} = -4x^{-1}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ flips the sign of the term.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the general equation with the constant",
        "workingLatex": "y = \\frac{1}{2}x^{2} - \\frac{4}{x} + c",
        "explanation": "The term $-4x^{-1}$ is written as a fraction, and $c$ holds the unknown vertical shift.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the point $(2, 1)$",
        "workingLatex": "1 = \\frac{1}{2}(2)^{2} - \\frac{4}{2} + c",
        "explanation": "The curve passes through $(2, 1)$, so those coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the numbers",
        "workingLatex": "1 = 2 - 2 + c",
        "explanation": "Here $\\tfrac{1}{2}(4) = 2$ and $\\tfrac{4}{2} = 2$, which cancel.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Solve for the constant",
        "workingLatex": "c = 1",
        "explanation": "Only this constant places the curve through the given point.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the equation of the curve",
        "workingLatex": "y = \\frac{1}{2}x^{2} - \\frac{4}{x} + 1",
        "explanation": "This is the complete equation with the constant fixed.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Substitute $x = 4$",
        "workingLatex": "y = \\frac{1}{2}(4)^{2} - \\frac{4}{4} + 1",
        "explanation": "We now find the value of $y$ at the requested point.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Evaluate each term",
        "workingLatex": "y = \\frac{1}{2}(16) - 1 + 1 = 8 - 1 + 1",
        "explanation": "Working through the arithmetic keeps the terms clear before adding.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "Compute the final value",
        "workingLatex": "y = 8",
        "explanation": "The two unit terms cancel, leaving the required value of $y$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = \\frac{1}{2}x^{2} - \\frac{4}{x} + 1$, and $y = 8$ when $x = 4$."
  }
},
{
  "id": "al.y1.pure.integration.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["integration", "rewrite", "find-curve", "roots"],
  "questionText": "The gradient of a curve is given by $\\dfrac{dy}{dx} = \\dfrac{6x-1}{\\sqrt{x}}$, and the curve passes through $(1, 3)$. Find the equation of the curve, and hence find $y$ when $x = 4$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient",
        "workingLatex": "y = \\int \\frac{6x-1}{\\sqrt{x}}\\,dx",
        "explanation": "The curve is the integral of its gradient function, plus an unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the root as a fractional power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "This makes the division a matter of subtracting indices.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split the fraction over each term",
        "workingLatex": "\\frac{6x-1}{x^{\\frac{1}{2}}} = \\frac{6x}{x^{\\frac{1}{2}}} - \\frac{1}{x^{\\frac{1}{2}}}",
        "explanation": "The denominator is shared out over the numerator so each piece can be simplified.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{6x}{x^{\\frac{1}{2}}} = 6x^{1-\\frac{1}{2}} = 6x^{\\frac{1}{2}}",
        "explanation": "Subtracting the indices leaves the exponent $\\tfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{1}{x^{\\frac{1}{2}}} = x^{-\\frac{1}{2}}",
        "explanation": "A reciprocal power carries a negative index.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\frac{dy}{dx} = 6x^{\\frac{1}{2}} - x^{-\\frac{1}{2}}",
        "explanation": "Both terms are standard powers, ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by that new index.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int 6x^{\\frac{1}{2}}\\,dx = 6\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 4x^{\\frac{3}{2}}",
        "explanation": "Dividing by $\\tfrac{3}{2}$ multiplies the $6$ by $\\tfrac{2}{3}$, giving $4$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the second term",
        "workingLatex": "\\int -x^{-\\frac{1}{2}}\\,dx = -\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = -2x^{\\frac{1}{2}}",
        "explanation": "Since $-\\tfrac{1}{2} + 1 = \\tfrac{1}{2}$, dividing by $\\tfrac{1}{2}$ doubles the term.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the general equation with the constant",
        "workingLatex": "y = 4x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + c",
        "explanation": "The constant $c$ represents the vertical position not yet determined.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the point $(1, 3)$",
        "workingLatex": "3 = 4(1)^{\\frac{3}{2}} - 2(1)^{\\frac{1}{2}} + c",
        "explanation": "The curve passes through $(1, 3)$, so those coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the powers of $1$",
        "workingLatex": "3 = 4 - 2 + c",
        "explanation": "Every power of $1$ equals $1$, leaving simple numbers.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Solve for the constant",
        "workingLatex": "c = 3 - 2 = 1",
        "explanation": "Rearranging gives the constant that fits the point.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the equation of the curve",
        "workingLatex": "y = 4x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + 1",
        "explanation": "This is the fully determined curve.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Substitute $x = 4$",
        "workingLatex": "y = 4(4)^{\\frac{3}{2}} - 2(4)^{\\frac{1}{2}} + 1",
        "explanation": "We now evaluate the curve at the requested $x$-value.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "Evaluate the powers and combine",
        "workingLatex": "y = 4(8) - 2(2) + 1 = 32 - 4 + 1 = 29",
        "explanation": "With $4^{1/2}=2$ and $4^{3/2}=8$, the terms combine to the final value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = 4x^{\\frac{3}{2}} - 2x^{\\frac{1}{2}} + 1$, and $y = 29$ when $x = 4$."
  }
},
{
  "id": "al.y1.pure.integration.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["integration", "rewrite", "find-curve", "reciprocal"],
  "questionText": "A curve passes through $(1, 4)$ and has gradient function $\\dfrac{dy}{dx} = \\dfrac{2x^{3}-5}{x^{2}}$. Find $y$ in terms of $x$, and hence find the value of $y$ when $x = 5$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the integral of the gradient",
        "workingLatex": "y = \\int \\frac{2x^{3}-5}{x^{2}}\\,dx",
        "explanation": "The curve is recovered by integrating its gradient function.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction over the denominator",
        "workingLatex": "\\frac{2x^{3}-5}{x^{2}} = \\frac{2x^{3}}{x^{2}} - \\frac{5}{x^{2}}",
        "explanation": "Sharing $x^{2}$ with each term lets us handle them separately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{2x^{3}}{x^{2}} = 2x^{3-2} = 2x",
        "explanation": "Subtracting the indices leaves a single power of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{5}{x^{2}} = 5x^{-2}",
        "explanation": "Raising $x^{2}$ from the denominator makes the index negative.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\frac{dy}{dx} = 2x - 5x^{-2}",
        "explanation": "No $x^{-1}$ term appears, so the ordinary power rule works throughout with no logarithm.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Add one to the index and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the first term",
        "workingLatex": "\\int 2x\\,dx = 2\\cdot\\frac{x^{2}}{2} = x^{2}",
        "explanation": "The factor of $2$ cancels with the divisor $2$ from the new index.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the second term",
        "workingLatex": "\\int -5x^{-2}\\,dx = -5\\cdot\\frac{x^{-1}}{-1} = 5x^{-1}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ turns the sign positive.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the general equation with the constant",
        "workingLatex": "y = x^{2} + \\frac{5}{x} + c",
        "explanation": "The term $5x^{-1}$ is written as a fraction, and $c$ is the unknown constant.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the point $(1, 4)$",
        "workingLatex": "4 = (1)^{2} + \\frac{5}{1} + c",
        "explanation": "The curve passes through $(1, 4)$, so those coordinates satisfy the equation.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the numbers",
        "workingLatex": "4 = 1 + 5 + c",
        "explanation": "Both terms evaluate simply at $x = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Solve for the constant",
        "workingLatex": "c = 4 - 6 = -2",
        "explanation": "Rearranging isolates the constant that fits the point.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the equation of the curve",
        "workingLatex": "y = x^{2} + \\frac{5}{x} - 2",
        "explanation": "This is the curve with its constant now fixed.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Substitute $x = 5$",
        "workingLatex": "y = (5)^{2} + \\frac{5}{5} - 2",
        "explanation": "We now find the height of the curve at $x = 5$.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Evaluate each term",
        "workingLatex": "y = 25 + 1 - 2",
        "explanation": "Computing each term keeps the sum clear.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "Compute the final value",
        "workingLatex": "y = 24",
        "explanation": "Combining the terms gives the required value of $y$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$y = x^{2} + \\frac{5}{x} - 2$, and $y = 24$ when $x = 5$."
  }
},
{
  "id": "al.y1.pure.integration.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "expression",
  "tags": ["integration", "rewrite", "expand", "quotient"],
  "questionText": "Find $\\displaystyle\\int \\dfrac{(x^{2}+2)^{2}}{x^{2}}\\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the approach",
        "workingLatex": "\\int \\frac{(x^{2}+2)^{2}}{x^{2}}\\,dx",
        "explanation": "We cannot integrate a quotient directly, so first expand the square and then split it into separate powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the square using the identity",
        "workingLatex": "(x^{2}+2)^{2} = (x^{2})^{2} + 2(x^{2})(2) + (2)^{2}",
        "explanation": "Apply $(a+b)^{2} = a^{2} + 2ab + b^{2}$ with $a = x^{2}$ and $b = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the expansion",
        "workingLatex": "(x^{2}+2)^{2} = x^{4} + 4x^{2} + 4",
        "explanation": "Squaring and doubling the cross term gives a tidy quadratic in $x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rewrite the integral with the expanded numerator",
        "workingLatex": "\\int \\frac{x^{4}+4x^{2}+4}{x^{2}}\\,dx",
        "explanation": "The numerator is now a polynomial we can divide term by term.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide the first term by $x^{2}$",
        "workingLatex": "\\frac{x^{4}}{x^{2}} = x^{2}",
        "explanation": "Subtracting indices, $4 - 2 = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Divide the second term by $x^{2}$",
        "workingLatex": "\\frac{4x^{2}}{x^{2}} = 4",
        "explanation": "The powers of $x$ cancel, leaving a constant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Divide the third term by $x^{2}$",
        "workingLatex": "\\frac{4}{x^{2}} = 4x^{-2}",
        "explanation": "Bringing $x^{2}$ up from the denominator makes the index negative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\int \\left(x^{2} + 4 + 4x^{-2}\\right)\\,dx",
        "explanation": "The lowest power is $x^{-2}$, not $x^{-1}$, so the power rule applies to every term with no logarithm.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{2}\\,dx = \\frac{1}{3}x^{3}",
        "explanation": "Raising to $x^{3}$ and dividing by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 4\\,dx = 4x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Integrate the last term",
        "workingLatex": "\\int 4x^{-2}\\,dx = 4\\cdot\\frac{x^{-1}}{-1} = -4x^{-1}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ flips the sign.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Combine into the final result",
        "workingLatex": "\\int \\frac{(x^{2}+2)^{2}}{x^{2}}\\,dx = \\frac{1}{3}x^{3} + 4x - \\frac{4}{x} + c",
        "explanation": "Writing $-4x^{-1}$ as a fraction and adding a single constant $c$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{1}{3}x^{3} + 4x - 4x^{-1}\\right) = x^{2} + 4 + 4x^{-2}",
        "explanation": "Differentiating returns the integrand, confirming the answer is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{1}{3}x^{3} + 4x - \\frac{4}{x} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "rewrite", "expand", "roots"],
  "questionText": "Find $\\displaystyle\\int (\\sqrt{x}+1)(\\sqrt{x}-3)\\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the approach",
        "workingLatex": "\\int (\\sqrt{x}+1)(\\sqrt{x}-3)\\,dx",
        "explanation": "A product of brackets cannot be integrated as it stands, so expand it into separate powers of $x$ first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the roots as fractional powers",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Fractional-power form makes the multiplication follow the laws of indices.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Multiply the first terms of each bracket",
        "workingLatex": "x^{\\frac{1}{2}}\\cdot x^{\\frac{1}{2}} = x^{1} = x",
        "explanation": "Adding the indices $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Multiply the outer and inner terms",
        "workingLatex": "-3x^{\\frac{1}{2}} + 1\\cdot x^{\\frac{1}{2}} = -2x^{\\frac{1}{2}}",
        "explanation": "The two middle products combine into a single root term.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Multiply the last terms",
        "workingLatex": "1\\cdot(-3) = -3",
        "explanation": "This is the constant term of the expansion.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Assemble the expanded expression",
        "workingLatex": "(\\sqrt{x}+1)(\\sqrt{x}-3) = x - 2x^{\\frac{1}{2}} - 3",
        "explanation": "Collecting the three pieces gives a sum of clean powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the integrand",
        "workingLatex": "\\int \\left(x - 2x^{\\frac{1}{2}} - 3\\right)\\,dx",
        "explanation": "Each term is now a standard power, ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the first term",
        "workingLatex": "\\int x\\,dx = \\frac{1}{2}x^{2}",
        "explanation": "Raising $x^{1}$ to $x^{2}$ and dividing by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the root term",
        "workingLatex": "\\int -2x^{\\frac{1}{2}}\\,dx = -2\\cdot\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = -\\frac{4}{3}x^{\\frac{3}{2}}",
        "explanation": "Dividing by $\\tfrac{3}{2}$ multiplies the $-2$ by $\\tfrac{2}{3}$, giving $-\\tfrac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Integrate the constant term",
        "workingLatex": "\\int -3\\,dx = -3x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine into the final result",
        "workingLatex": "\\int (\\sqrt{x}+1)(\\sqrt{x}-3)\\,dx = \\frac{1}{2}x^{2} - \\frac{4}{3}x^{\\frac{3}{2}} - 3x + c",
        "explanation": "Adding a single constant $c$ completes the indefinite integral.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{1}{2}x^{2} - \\frac{4}{3}x^{\\frac{3}{2}} - 3x\\right) = x - 2x^{\\frac{1}{2}} - 3",
        "explanation": "Differentiating returns the expanded integrand, confirming the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{1}{2}x^{2} - \\frac{4}{3}x^{\\frac{3}{2}} - 3x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "expression",
  "tags": ["integration", "rewrite", "quotient", "roots"],
  "questionText": "Find $\\displaystyle\\int \\dfrac{4x^{3}+3x}{x\\sqrt{x}}\\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the approach",
        "workingLatex": "\\int \\frac{4x^{3}+3x}{x\\sqrt{x}}\\,dx",
        "explanation": "First combine the denominator into a single power of $x$, then split the fraction into terms we can integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rewrite the denominator as one power",
        "workingLatex": "x\\sqrt{x} = x^{1}\\cdot x^{\\frac{1}{2}} = x^{\\frac{3}{2}}",
        "explanation": "Adding the indices $1 + \\tfrac{1}{2} = \\tfrac{3}{2}$ collapses the product into a single power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Recall the index law for division",
        "workingLatex": "\\frac{x^{a}}{x^{b}} = x^{a-b}",
        "explanation": "We will subtract the denominator's index from each numerator term's index.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Split the fraction over the denominator",
        "workingLatex": "\\frac{4x^{3}+3x}{x^{\\frac{3}{2}}} = \\frac{4x^{3}}{x^{\\frac{3}{2}}} + \\frac{3x}{x^{\\frac{3}{2}}}",
        "explanation": "Sharing the denominator with each term lets us simplify them independently.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{4x^{3}}{x^{\\frac{3}{2}}} = 4x^{3-\\frac{3}{2}} = 4x^{\\frac{3}{2}}",
        "explanation": "Subtracting $\\tfrac{3}{2}$ from $3$ leaves $\\tfrac{3}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{3x}{x^{\\frac{3}{2}}} = 3x^{1-\\frac{3}{2}} = 3x^{-\\frac{1}{2}}",
        "explanation": "Since $1 - \\tfrac{3}{2} = -\\tfrac{1}{2}$, this term has a negative fractional index.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\int \\left(4x^{\\frac{3}{2}} + 3x^{-\\frac{1}{2}}\\right)\\,dx",
        "explanation": "The lowest power is $x^{-1/2}$, safely above $x^{-1}$, so the power rule applies with no logarithm.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by that new index.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the first term",
        "workingLatex": "\\int 4x^{\\frac{3}{2}}\\,dx = 4\\cdot\\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = \\frac{8}{5}x^{\\frac{5}{2}}",
        "explanation": "Adding one to $\\tfrac{3}{2}$ gives $\\tfrac{5}{2}$; dividing by $\\tfrac{5}{2}$ multiplies the $4$ by $\\tfrac{2}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the second term",
        "workingLatex": "\\int 3x^{-\\frac{1}{2}}\\,dx = 3\\cdot\\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} = 6x^{\\frac{1}{2}}",
        "explanation": "Since $-\\tfrac{1}{2} + 1 = \\tfrac{1}{2}$, dividing by $\\tfrac{1}{2}$ doubles the coefficient to $6$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Combine into the final result",
        "workingLatex": "\\int \\frac{4x^{3}+3x}{x\\sqrt{x}}\\,dx = \\frac{8}{5}x^{\\frac{5}{2}} + 6x^{\\frac{1}{2}} + c",
        "explanation": "Adding a single constant $c$ completes the indefinite integral.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the first term by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{8}{5}x^{\\frac{5}{2}}\\right) = \\frac{8}{5}\\cdot\\frac{5}{2}x^{\\frac{3}{2}} = 4x^{\\frac{3}{2}}",
        "explanation": "Differentiating recovers the first term of the integrand.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check the second term by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(6x^{\\frac{1}{2}}\\right) = 6\\cdot\\frac{1}{2}x^{-\\frac{1}{2}} = 3x^{-\\frac{1}{2}}",
        "explanation": "Differentiating recovers the second term, confirming the answer is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{8}{5}x^{\\frac{5}{2}} + 6x^{\\frac{1}{2}} + c$"
  }
},
{
  "id": "al.y1.pure.integration.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "rewrite", "expand", "product"],
  "questionText": "Find $\\displaystyle\\int (x-2)^{2}(x+1)\\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the approach",
        "workingLatex": "\\int (x-2)^{2}(x+1)\\,dx",
        "explanation": "Expand the product fully into a polynomial before integrating, since we can only integrate powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the square first",
        "workingLatex": "(x-2)^{2} = x^{2} - 4x + 4",
        "explanation": "Using $(a-b)^{2} = a^{2} - 2ab + b^{2}$ with $a = x$ and $b = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Multiply the trinomial by $x$",
        "workingLatex": "x(x^{2}-4x+4) = x^{3} - 4x^{2} + 4x",
        "explanation": "Distributing $x$ across each term raises every power by one.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Multiply the trinomial by $1$",
        "workingLatex": "1(x^{2}-4x+4) = x^{2} - 4x + 4",
        "explanation": "The second part of $(x+1)$ leaves the trinomial unchanged.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add the two partial products",
        "workingLatex": "x^{3} - 4x^{2} + 4x + x^{2} - 4x + 4",
        "explanation": "Combining the results of multiplying by $x$ and by $1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Collect like terms",
        "workingLatex": "(x-2)^{2}(x+1) = x^{3} - 3x^{2} + 4",
        "explanation": "Here $-4x^{2} + x^{2} = -3x^{2}$ and $4x - 4x = 0$, so the $x$ term vanishes.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the integrand",
        "workingLatex": "\\int \\left(x^{3} - 3x^{2} + 4\\right)\\,dx",
        "explanation": "A clean polynomial is now ready for term-by-term integration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the cubic term",
        "workingLatex": "\\int x^{3}\\,dx = \\frac{1}{4}x^{4}",
        "explanation": "Raising to $x^{4}$ and dividing by $4$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the quadratic term",
        "workingLatex": "\\int -3x^{2}\\,dx = -3\\cdot\\frac{x^{3}}{3} = -x^{3}",
        "explanation": "The factor of $3$ cancels with the divisor from the new index.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 4\\,dx = 4x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine into the final result",
        "workingLatex": "\\int (x-2)^{2}(x+1)\\,dx = \\frac{1}{4}x^{4} - x^{3} + 4x + c",
        "explanation": "Adding a single constant $c$ completes the indefinite integral.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Check by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{1}{4}x^{4} - x^{3} + 4x\\right) = x^{3} - 3x^{2} + 4",
        "explanation": "Differentiating returns the expanded integrand, confirming the result.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{1}{4}x^{4} - x^{3} + 4x + c$"
  }
},
{
  "id": "al.y1.pure.integration.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Indefinite integration",
  "subtopicId": "al.y1.pure.integration",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "expression",
  "tags": ["integration", "rewrite", "quotient", "split"],
  "questionText": "Find $\\displaystyle\\int \\dfrac{5x^{4}-2x}{x^{3}}\\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the approach",
        "workingLatex": "\\int \\frac{5x^{4}-2x}{x^{3}}\\,dx",
        "explanation": "Split the quotient into separate powers of $x$ before integrating, since a fraction cannot be integrated directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction over the denominator",
        "workingLatex": "\\frac{5x^{4}-2x}{x^{3}} = \\frac{5x^{4}}{x^{3}} - \\frac{2x}{x^{3}}",
        "explanation": "Sharing $x^{3}$ with each term lets us simplify them separately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the first term",
        "workingLatex": "\\frac{5x^{4}}{x^{3}} = 5x^{4-3} = 5x",
        "explanation": "Subtracting the indices leaves a single power of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the second term",
        "workingLatex": "\\frac{2x}{x^{3}} = 2x^{1-3} = 2x^{-2}",
        "explanation": "Since $1 - 3 = -2$, this term carries a negative index.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the integrand as powers of $x$",
        "workingLatex": "\\int \\left(5x - 2x^{-2}\\right)\\,dx",
        "explanation": "The lowest power is $x^{-2}$, not $x^{-1}$, so the power rule applies with no logarithm needed.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Recall the integration power rule",
        "workingLatex": "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + c",
        "explanation": "Raise the index by one and divide by the new index.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the first term",
        "workingLatex": "\\int 5x\\,dx = 5\\cdot\\frac{x^{2}}{2} = \\frac{5}{2}x^{2}",
        "explanation": "Raising $x^{1}$ to $x^{2}$ and dividing by $2$ gives the coefficient $\\tfrac{5}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the second term",
        "workingLatex": "\\int -2x^{-2}\\,dx = -2\\cdot\\frac{x^{-1}}{-1} = 2x^{-1}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ turns the sign positive.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Rewrite the negative power as a fraction",
        "workingLatex": "2x^{-1} = \\frac{2}{x}",
        "explanation": "A negative index means a reciprocal, so this term is best written as a fraction.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Combine into the final result",
        "workingLatex": "\\int \\frac{5x^{4}-2x}{x^{3}}\\,dx = \\frac{5}{2}x^{2} + \\frac{2}{x} + c",
        "explanation": "Adding a single constant $c$ completes the indefinite integral.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Check the first term by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(\\frac{5}{2}x^{2}\\right) = 5x",
        "explanation": "Differentiating recovers the first term of the integrand.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the second term by differentiating",
        "workingLatex": "\\frac{d}{dx}\\left(2x^{-1}\\right) = -2x^{-2}",
        "explanation": "Differentiating recovers the second term of the integrand.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Confirm the sum matches the original",
        "workingLatex": "5x - 2x^{-2} = \\frac{5x^{4}-2x}{x^{3}}",
        "explanation": "The recovered derivative equals the starting quotient, confirming the answer is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\frac{5}{2}x^{2} + \\frac{2}{x} + c$"
  }
}
];
