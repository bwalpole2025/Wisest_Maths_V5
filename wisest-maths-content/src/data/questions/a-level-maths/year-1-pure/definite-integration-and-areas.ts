import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.pure.definite-integrationcontinued.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{1}^{2} 3x^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{1}^{2} 3x^{2} \\,dx",
        "explanation": "The numbers $1$ and $2$ are the lower and upper limits. This tells us to find the antiderivative first and then evaluate it between those two values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int 3x^{2} \\,dx = x^{3}",
        "explanation": "We add one to the power and divide by the new power: $3x^{2}$ becomes $\\frac{3x^{3}}{3} = x^{3}$. This is the reverse of differentiating.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{1}^{2} 3x^{2} \\,dx = \\left[ x^{3} \\right]_{1}^{2}",
        "explanation": "The square brackets hold the antiderivative, ready to be evaluated at the upper limit and the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "See why the constant cancels",
        "workingLatex": "\\left[ x^{3} + c \\right]_{1}^{2} = (F(2)+c) - (F(1)+c) = F(2) - F(1)",
        "explanation": "Even if we included $+c$, it appears in both bracketed values and cancels when we subtract. That is why a definite integral never needs a constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the limits",
        "workingLatex": "= (2)^{3} - (1)^{3}",
        "explanation": "We put in the upper limit $x = 2$, then subtract the value at the lower limit $x = 1$, following $F(b) - F(a)$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the powers",
        "workingLatex": "= 8 - 1",
        "explanation": "Cubing each limit gives $2^{3} = 8$ and $1^{3} = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Subtract to find the value",
        "workingLatex": "= 7",
        "explanation": "Subtracting the lower value from the upper value gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{2} 3x^{2} \\,dx = 7$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{0}^{2} (2x + 1) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{0}^{2} (2x + 1) \\,dx",
        "explanation": "The lower limit is $0$ and the upper limit is $2$. We integrate the expression first, then evaluate between these limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate term by term",
        "workingLatex": "\\int (2x + 1) \\,dx = x^{2} + x",
        "explanation": "Using the reverse power rule on each term: $2x$ integrates to $\\frac{2x^{2}}{2} = x^{2}$, and the constant $1$ integrates to $x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{0}^{2} (2x + 1) \\,dx = \\left[ x^{2} + x \\right]_{0}^{2}",
        "explanation": "The brackets record the antiderivative so we can evaluate it at both limits. No $+c$ is needed, because it would cancel on subtraction.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(2) = (2)^{2} + (2) = 6",
        "explanation": "Putting $x = 2$ into $x^{2} + x$ gives the value of the antiderivative at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit",
        "workingLatex": "F(0) = (0)^{2} + (0) = 0",
        "explanation": "Putting $x = 0$ gives the value at the bottom of the interval, which happens to be $0$ here.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 6 - 0",
        "explanation": "The definite integral is $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the value",
        "workingLatex": "= 6",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{0}^{2} (2x + 1) \\,dx = 6$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "fraction", "evaluate"],
  "questionText": "Evaluate $\\int_{1}^{3} x^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{1}^{3} x^{2} \\,dx",
        "explanation": "The limits are $1$ (lower) and $3$ (upper). We integrate $x^{2}$, then evaluate the result between these two values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "Add one to the power to get $x^{3}$, then divide by the new power $3$. There is no need for $+c$ in a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{1}^{3} x^{2} \\,dx = \\left[ \\frac{x^{3}}{3} \\right]_{1}^{3}",
        "explanation": "The brackets hold the antiderivative, ready for us to substitute the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(3) = \\frac{(3)^{3}}{3} = \\frac{27}{3} = 9",
        "explanation": "Putting $x = 3$ gives $\\frac{27}{3}$, which simplifies neatly to $9$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit",
        "workingLatex": "F(1) = \\frac{(1)^{3}}{3} = \\frac{1}{3}",
        "explanation": "Putting $x = 1$ gives $\\frac{1}{3}$, which does not simplify further.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 9 - \\frac{1}{3}",
        "explanation": "The definite integral equals $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine into a single fraction",
        "workingLatex": "= \\frac{27}{3} - \\frac{1}{3}",
        "explanation": "Write $9$ as $\\frac{27}{3}$ so both terms share the same denominator.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the value",
        "workingLatex": "= \\frac{26}{3}",
        "explanation": "Subtracting the numerators gives the exact value of the definite integral as a fraction.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{3} x^{2} \\,dx = \\frac{26}{3}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{0}^{1} 4x^{3} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{0}^{1} 4x^{3} \\,dx",
        "explanation": "The limits are $0$ and $1$. We find the antiderivative of $4x^{3}$ and then evaluate it between these two values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int 4x^{3} \\,dx = x^{4}",
        "explanation": "Add one to the power to get $x^{4}$ and divide by the new power $4$: $\\frac{4x^{4}}{4} = x^{4}$. A definite integral needs no $+c$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{0}^{1} 4x^{3} \\,dx = \\left[ x^{4} \\right]_{0}^{1}",
        "explanation": "The brackets record the antiderivative ready to substitute the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits and subtract",
        "workingLatex": "= (1)^{4} - (0)^{4}",
        "explanation": "We evaluate at the upper limit $x = 1$, then subtract the value at the lower limit $x = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the powers",
        "workingLatex": "= 1 - 0",
        "explanation": "Raising each limit to the fourth power gives $1^{4} = 1$ and $0^{4} = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the value",
        "workingLatex": "= 1",
        "explanation": "The subtraction gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{0}^{1} 4x^{3} \\,dx = 1$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{2}^{3} (2x - 1) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{2}^{3} (2x - 1) \\,dx",
        "explanation": "The lower limit is $2$ and the upper limit is $3$. We integrate the expression first, then evaluate between these limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate term by term",
        "workingLatex": "\\int (2x - 1) \\,dx = x^{2} - x",
        "explanation": "Using the reverse power rule: $2x$ integrates to $x^{2}$, and $-1$ integrates to $-x$. No $+c$ is needed for a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{2}^{3} (2x - 1) \\,dx = \\left[ x^{2} - x \\right]_{2}^{3}",
        "explanation": "The brackets hold the antiderivative, ready to be evaluated at the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(3) = (3)^{2} - (3) = 9 - 3 = 6",
        "explanation": "Putting $x = 3$ into $x^{2} - x$ gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit",
        "workingLatex": "F(2) = (2)^{2} - (2) = 4 - 2 = 2",
        "explanation": "Putting $x = 2$ gives the value at the bottom of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 6 - 2",
        "explanation": "The definite integral is $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the value",
        "workingLatex": "= 4",
        "explanation": "This gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{2}^{3} (2x - 1) \\,dx = 4$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "negative-limit", "evaluate"],
  "questionText": "Evaluate $\\int_{-1}^{2} x^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{-1}^{2} x^{2} \\,dx",
        "explanation": "The lower limit is $-1$ and the upper limit is $2$. We must take care with the sign when substituting the negative lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "Add one to the power to get $x^{3}$, then divide by $3$. A definite integral does not need $+c$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{-1}^{2} x^{2} \\,dx = \\left[ \\frac{x^{3}}{3} \\right]_{-1}^{2}",
        "explanation": "The brackets record the antiderivative, ready for the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(2) = \\frac{(2)^{3}}{3} = \\frac{8}{3}",
        "explanation": "Putting $x = 2$ gives $\\frac{8}{3}$ at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit carefully",
        "workingLatex": "F(-1) = \\frac{(-1)^{3}}{3} = \\frac{-1}{3} = -\\frac{1}{3}",
        "explanation": "Cubing a negative number stays negative: $(-1)^{3} = -1$, so this value is $-\\frac{1}{3}$. Watching this sign is the key step.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= \\frac{8}{3} - \\left( -\\frac{1}{3} \\right)",
        "explanation": "Subtracting a negative value turns into addition, so this becomes $\\frac{8}{3} + \\frac{1}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Add the fractions",
        "workingLatex": "= \\frac{8}{3} + \\frac{1}{3} = \\frac{9}{3}",
        "explanation": "The denominators already match, so we add the numerators to get $\\frac{9}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify to the value",
        "workingLatex": "= 3",
        "explanation": "$\\frac{9}{3}$ simplifies to the whole number $3$, the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{-1}^{2} x^{2} \\,dx = 3$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{0}^{2} (3x^{2} - 2x) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{0}^{2} (3x^{2} - 2x) \\,dx",
        "explanation": "The limits are $0$ and $2$. We integrate the whole expression, then evaluate it between these values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate term by term",
        "workingLatex": "\\int (3x^{2} - 2x) \\,dx = x^{3} - x^{2}",
        "explanation": "Using the reverse power rule: $3x^{2}$ integrates to $x^{3}$, and $-2x$ integrates to $-x^{2}$. No $+c$ is needed for a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{0}^{2} (3x^{2} - 2x) \\,dx = \\left[ x^{3} - x^{2} \\right]_{0}^{2}",
        "explanation": "The brackets hold the antiderivative, ready to be evaluated at both limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(2) = (2)^{3} - (2)^{2} = 8 - 4 = 4",
        "explanation": "Putting $x = 2$ into $x^{3} - x^{2}$ gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit",
        "workingLatex": "F(0) = (0)^{3} - (0)^{2} = 0",
        "explanation": "Putting $x = 0$ gives $0$, since every term contains a factor of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 4 - 0",
        "explanation": "The definite integral equals $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the value",
        "workingLatex": "= 4",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{0}^{2} (3x^{2} - 2x) \\,dx = 4$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{1}^{2} (6x^{2} + 2) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{1}^{2} (6x^{2} + 2) \\,dx",
        "explanation": "The lower limit is $1$ and the upper limit is $2$. We integrate first, then evaluate between the limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate term by term",
        "workingLatex": "\\int (6x^{2} + 2) \\,dx = 2x^{3} + 2x",
        "explanation": "By the reverse power rule: $6x^{2}$ integrates to $\\frac{6x^{3}}{3} = 2x^{3}$, and the constant $2$ integrates to $2x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{1}^{2} (6x^{2} + 2) \\,dx = \\left[ 2x^{3} + 2x \\right]_{1}^{2}",
        "explanation": "The brackets record the antiderivative, ready to substitute both limits. The constant of integration would cancel, so we leave it out.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(2) = 2(2)^{3} + 2(2) = 16 + 4 = 20",
        "explanation": "Putting $x = 2$ gives $2 \\times 8 + 4 = 20$ at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit",
        "workingLatex": "F(1) = 2(1)^{3} + 2(1) = 2 + 2 = 4",
        "explanation": "Putting $x = 1$ gives $2 + 2 = 4$ at the bottom of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 20 - 4",
        "explanation": "The definite integral is $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the value",
        "workingLatex": "= 16",
        "explanation": "This gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{2} (6x^{2} + 2) \\,dx = 16$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "fraction", "evaluate"],
  "questionText": "Evaluate $\\int_{0}^{3} (x^{2} - x) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{0}^{3} (x^{2} - x) \\,dx",
        "explanation": "The limits are $0$ and $3$. We integrate the expression, then evaluate the result between these two values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate term by term",
        "workingLatex": "\\int (x^{2} - x) \\,dx = \\frac{x^{3}}{3} - \\frac{x^{2}}{2}",
        "explanation": "By the reverse power rule: $x^{2}$ integrates to $\\frac{x^{3}}{3}$, and $-x$ integrates to $-\\frac{x^{2}}{2}$. No $+c$ is needed here.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{0}^{3} (x^{2} - x) \\,dx = \\left[ \\frac{x^{3}}{3} - \\frac{x^{2}}{2} \\right]_{0}^{3}",
        "explanation": "The brackets hold the antiderivative, ready to substitute the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(3) = \\frac{(3)^{3}}{3} - \\frac{(3)^{2}}{2} = 9 - \\frac{9}{2}",
        "explanation": "Putting $x = 3$ gives $\\frac{27}{3} = 9$ for the first term and $\\frac{9}{2}$ for the second term.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the upper value",
        "workingLatex": "F(3) = \\frac{18}{2} - \\frac{9}{2} = \\frac{9}{2}",
        "explanation": "Writing $9$ as $\\frac{18}{2}$ lets us subtract the fractions to get $\\frac{9}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the lower limit",
        "workingLatex": "F(0) = \\frac{(0)^{3}}{3} - \\frac{(0)^{2}}{2} = 0",
        "explanation": "Putting $x = 0$ makes every term zero, so the lower value is $0$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Subtract the values",
        "workingLatex": "= \\frac{9}{2} - 0",
        "explanation": "The definite integral is $F(b) - F(a)$, so we subtract the lower value from the upper value.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the value",
        "workingLatex": "= \\frac{9}{2}",
        "explanation": "This is the exact value of the definite integral, which equals $4.5$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{0}^{3} (x^{2} - x) \\,dx = \\frac{9}{2}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "evaluate"],
  "questionText": "Evaluate $\\int_{1}^{4} 2x \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{1}^{4} 2x \\,dx",
        "explanation": "The lower limit is $1$ and the upper limit is $4$. We integrate $2x$, then evaluate the result between these limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int 2x \\,dx = x^{2}",
        "explanation": "Add one to the power to get $x^{2}$ and divide by the new power $2$: $\\frac{2x^{2}}{2} = x^{2}$. No $+c$ is needed for a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{1}^{4} 2x \\,dx = \\left[ x^{2} \\right]_{1}^{4}",
        "explanation": "The brackets record the antiderivative, ready to substitute the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits and subtract",
        "workingLatex": "= (4)^{2} - (1)^{2}",
        "explanation": "We evaluate at the upper limit $x = 4$, then subtract the value at the lower limit $x = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the powers",
        "workingLatex": "= 16 - 1",
        "explanation": "Squaring each limit gives $4^{2} = 16$ and $1^{2} = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the value",
        "workingLatex": "= 15",
        "explanation": "Subtracting gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{4} 2x \\,dx = 15$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomial", "negative-limit", "evaluate"],
  "questionText": "Evaluate $\\int_{-2}^{1} 3x^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the definite integral",
        "workingLatex": "\\int_{-2}^{1} 3x^{2} \\,dx",
        "explanation": "The lower limit is $-2$ and the upper limit is $1$. We integrate $3x^{2}$, then take care with the sign of the negative lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate using the reverse power rule",
        "workingLatex": "\\int 3x^{2} \\,dx = x^{3}",
        "explanation": "Add one to the power and divide by it: $\\frac{3x^{3}}{3} = x^{3}$. A definite integral needs no $+c$, since it would cancel on subtraction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write with square-bracket limit notation",
        "workingLatex": "\\int_{-2}^{1} 3x^{2} \\,dx = \\left[ x^{3} \\right]_{-2}^{1}",
        "explanation": "The brackets hold the antiderivative, ready to substitute the upper and lower limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit",
        "workingLatex": "F(1) = (1)^{3} = 1",
        "explanation": "Putting $x = 1$ gives $1$ at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit carefully",
        "workingLatex": "F(-2) = (-2)^{3} = -8",
        "explanation": "Cubing a negative number stays negative: $(-2)^{3} = -8$. Tracking this sign carefully is the crucial step.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract the values",
        "workingLatex": "= 1 - (-8) = 1 + 8",
        "explanation": "The definite integral is $F(b) - F(a)$. Subtracting the negative lower value turns into addition.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the value",
        "workingLatex": "= 9",
        "explanation": "Adding gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{-2}^{1} 3x^{2} \\,dx = 9$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 2$, the $x$-axis and the lines $x = 0$ and $x = 3$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{0}^{3} \\left(x^{2} + 2\\right) \\,dx",
        "explanation": "On the interval from $x=0$ to $x=3$ the curve $y = x^{2} + 2$ is always positive, so the region sits entirely above the $x$-axis and its area is exactly the definite integral of $y$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} + 2x \\right]_{0}^{3}",
        "explanation": "We integrate term by term by raising each power by one and dividing by the new power; no constant of integration is needed because it would cancel when we apply the limits.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the two limits",
        "workingLatex": "= \\left( \\frac{3^{3}}{3} + 2(3) \\right) - \\left( \\frac{0^{3}}{3} + 2(0) \\right)",
        "explanation": "The square-bracket notation means we work out the antiderivative at the top limit and subtract its value at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the upper-limit bracket",
        "workingLatex": "= \\left( 9 + 6 \\right) - \\left( 0 + 0 \\right)",
        "explanation": "At $x=3$ we get $\\tfrac{27}{3}=9$ plus $6$; at $x=0$ every term is zero.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the two brackets",
        "workingLatex": "= 15 - 0",
        "explanation": "The lower limit contributes nothing, which is common when a limit is $0$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the area",
        "workingLatex": "= 15",
        "explanation": "This is the exact area of the region $R$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $15$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the curve $y = 3x^{2}$, the $x$-axis and the lines $x = 1$ and $x = 2$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{1}^{2} 3x^{2} \\,dx",
        "explanation": "Between $x=1$ and $x=2$ the curve $y = 3x^{2}$ is positive, so the area under it equals the definite integral of $y$ over that interval.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Keep the constant and integrate the power",
        "workingLatex": "= 3\\left[ \\frac{x^{3}}{3} \\right]_{1}^{2}",
        "explanation": "A number multiplying the function can stay outside; we integrate $x^{2}$ by raising the power to $3$ and dividing by $3$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ x^{3} \\right]_{1}^{2}",
        "explanation": "The factor of $3$ cancels the $\\tfrac{1}{3}$, leaving the tidy antiderivative $x^{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= (2)^{3} - (1)^{3}",
        "explanation": "Evaluate $x^{3}$ at the upper limit $x=2$ and subtract its value at the lower limit $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the cubes",
        "workingLatex": "= 8 - 1",
        "explanation": "$2^{3}=8$ and $1^{3}=1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the area",
        "workingLatex": "= 7",
        "explanation": "This difference is the exact area of the region $R$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $7$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the line $y = 2x + 1$, the $x$-axis and the lines $x = 0$ and $x = 4$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{0}^{4} \\left( 2x + 1 \\right) \\,dx",
        "explanation": "On $0 \\le x \\le 4$ the line $y = 2x + 1$ stays above the $x$-axis, so the area beneath it is the definite integral of $y$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "= \\left[ x^{2} + x \\right]_{0}^{4}",
        "explanation": "$2x$ integrates to $x^{2}$ and the constant $1$ integrates to $x$; each power goes up by one and is divided by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the two limits",
        "workingLatex": "= \\left( 4^{2} + 4 \\right) - \\left( 0^{2} + 0 \\right)",
        "explanation": "We evaluate the antiderivative at the top limit and subtract its value at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the upper-limit bracket",
        "workingLatex": "= \\left( 16 + 4 \\right) - 0",
        "explanation": "At $x=4$ we have $16 + 4$; at $x=0$ both terms vanish.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add the terms",
        "workingLatex": "= 20 - 0",
        "explanation": "Combining the upper-limit terms gives $20$, and the lower limit adds nothing.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the area",
        "workingLatex": "= 20",
        "explanation": "This is the exact area of the region $R$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $20$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the curve $y = x^{3}$, the $x$-axis and the lines $x = 0$ and $x = 2$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{0}^{2} x^{3} \\,dx",
        "explanation": "For $x$ between $0$ and $2$ the curve $y = x^{3}$ is at or above the $x$-axis, so the area of the region equals this definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the power",
        "workingLatex": "= \\left[ \\frac{x^{4}}{4} \\right]_{0}^{2}",
        "explanation": "Raise the power from $3$ to $4$ and divide by the new power $4$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the two limits",
        "workingLatex": "= \\frac{2^{4}}{4} - \\frac{0^{4}}{4}",
        "explanation": "Evaluate $\\tfrac{x^{4}}{4}$ at $x=2$ and subtract its value at $x=0$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the fourth powers",
        "workingLatex": "= \\frac{16}{4} - 0",
        "explanation": "$2^{4}=16$, while $0^{4}=0$ so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the fraction",
        "workingLatex": "= 4 - 0",
        "explanation": "Dividing $16$ by $4$ gives $4$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the area",
        "workingLatex": "= 4",
        "explanation": "This is the exact area of the region $R$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $4$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 4$, the $x$-axis and the lines $x = 1$ and $x = 3$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{1}^{3} \\left( x^{2} + 4 \\right) \\,dx",
        "explanation": "The curve $y = x^{2} + 4$ is always positive, so between $x=1$ and $x=3$ the region lies above the $x$-axis and its area is the definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} + 4x \\right]_{1}^{3}",
        "explanation": "We integrate term by term, raising each power by one and dividing by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the two limits",
        "workingLatex": "= \\left( \\frac{3^{3}}{3} + 4(3) \\right) - \\left( \\frac{1^{3}}{3} + 4(1) \\right)",
        "explanation": "Evaluate the antiderivative at $x=3$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Work out each bracket",
        "workingLatex": "= \\left( 9 + 12 \\right) - \\left( \\frac{1}{3} + 4 \\right)",
        "explanation": "$\\tfrac{27}{3}=9$ for the upper limit, while the lower limit keeps the fraction $\\tfrac{1}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify each bracket",
        "workingLatex": "= 21 - \\frac{13}{3}",
        "explanation": "The upper bracket is $21$; the lower bracket $\\tfrac{1}{3}+4$ becomes $\\tfrac{13}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Combine over a common denominator",
        "workingLatex": "= \\frac{63}{3} - \\frac{13}{3} = \\frac{50}{3}",
        "explanation": "Writing $21$ as $\\tfrac{63}{3}$ lets us subtract the fractions directly to get the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{50}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "polynomial"],
  "questionText": "The region $R$ is bounded by the curve $y = 6x - x^{2}$, the $x$-axis and the lines $x = 1$ and $x = 4$. Find the area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Express the area as a definite integral",
        "workingLatex": "A = \\int_{1}^{4} \\left( 6x - x^{2} \\right) \\,dx",
        "explanation": "The curve $y = 6x - x^{2}$ cuts the $x$-axis at $x=0$ and $x=6$, so on the interval from $1$ to $4$ it stays above the axis and the area equals the definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate each term",
        "workingLatex": "= \\left[ 3x^{2} - \\frac{x^{3}}{3} \\right]_{1}^{4}",
        "explanation": "$6x$ integrates to $3x^{2}$ and $x^{2}$ integrates to $\\tfrac{x^{3}}{3}$, keeping the minus sign in place.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the two limits",
        "workingLatex": "= \\left( 3(4)^{2} - \\frac{4^{3}}{3} \\right) - \\left( 3(1)^{2} - \\frac{1^{3}}{3} \\right)",
        "explanation": "Evaluate the antiderivative at $x=4$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Work out each bracket",
        "workingLatex": "= \\left( 48 - \\frac{64}{3} \\right) - \\left( 3 - \\frac{1}{3} \\right)",
        "explanation": "$3(16)=48$ and $4^{3}=64$ at the top; $3(1)=3$ and $1^{3}=1$ at the bottom.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine each bracket into a single fraction",
        "workingLatex": "= \\frac{80}{3} - \\frac{8}{3}",
        "explanation": "$48 - \\tfrac{64}{3} = \\tfrac{144-64}{3} = \\tfrac{80}{3}$ and $3 - \\tfrac{1}{3} = \\tfrac{8}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Subtract and simplify",
        "workingLatex": "= \\frac{72}{3} = 24",
        "explanation": "Subtracting the fractions and dividing gives the exact area of the region $R$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $24$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "fractional-powers", "surds"],
  "questionText": "Evaluate $\\int_{1}^{4} \\sqrt{x} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the surd as a power of $x$",
        "workingLatex": "\\int_{1}^{4} \\sqrt{x} \\,dx = \\int_{1}^{4} x^{\\frac{1}{2}} \\,dx",
        "explanation": "Writing $\\sqrt{x}$ as $x^{\\frac{1}{2}}$ lets us use the power rule for integration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the power rule",
        "workingLatex": "= \\left[ \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} \\right]_{1}^{4}",
        "explanation": "Add one to the power, $\\tfrac{1}{2}+1 = \\tfrac{3}{2}$, and divide by this new power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ \\frac{2}{3} x^{\\frac{3}{2}} \\right]_{1}^{4}",
        "explanation": "Dividing by $\\tfrac{3}{2}$ is the same as multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= \\frac{2}{3}\\left( 4^{\\frac{3}{2}} \\right) - \\frac{2}{3}\\left( 1^{\\frac{3}{2}} \\right)",
        "explanation": "Evaluate the antiderivative at $x=4$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the fractional powers",
        "workingLatex": "= \\frac{2}{3}(8) - \\frac{2}{3}(1)",
        "explanation": "$4^{\\frac{3}{2}} = (\\sqrt{4})^{3} = 2^{3} = 8$, and $1^{\\frac{3}{2}} = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify to the value",
        "workingLatex": "= \\frac{16}{3} - \\frac{2}{3} = \\frac{14}{3}",
        "explanation": "Subtracting the fractions gives the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\sqrt{x} \\,dx = \\dfrac{14}{3}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "negative-powers", "reciprocal"],
  "questionText": "Evaluate $\\int_{1}^{2} x^{-2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the power to be integrated",
        "workingLatex": "\\int_{1}^{2} x^{-2} \\,dx",
        "explanation": "The integrand is already a single power of $x$, so we can apply the power rule directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the power rule",
        "workingLatex": "= \\left[ \\frac{x^{-1}}{-1} \\right]_{1}^{2}",
        "explanation": "Add one to the power, $-2 + 1 = -1$, and divide by this new power $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ -\\frac{1}{x} \\right]_{1}^{2}",
        "explanation": "Dividing by $-1$ gives $-x^{-1}$, which is $-\\tfrac{1}{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= \\left( -\\frac{1}{2} \\right) - \\left( -\\frac{1}{1} \\right)",
        "explanation": "Evaluate $-\\tfrac{1}{x}$ at $x=2$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the signs",
        "workingLatex": "= -\\frac{1}{2} + 1",
        "explanation": "Subtracting a negative value turns it into an addition.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Combine to the value",
        "workingLatex": "= \\frac{1}{2}",
        "explanation": "$1 - \\tfrac{1}{2} = \\tfrac{1}{2}$, the exact value of the integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle\\int_{1}^{2} x^{-2} \\,dx = \\dfrac{1}{2}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "fractional-powers", "surds"],
  "questionText": "Evaluate $\\int_{1}^{4} \\frac{1}{\\sqrt{x}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the integrand as a power of $x$",
        "workingLatex": "\\int_{1}^{4} \\frac{1}{\\sqrt{x}} \\,dx = \\int_{1}^{4} x^{-\\frac{1}{2}} \\,dx",
        "explanation": "Since $\\sqrt{x} = x^{\\frac{1}{2}}$, its reciprocal is $x^{-\\frac{1}{2}}$, which is ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the power rule",
        "workingLatex": "= \\left[ \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} \\right]_{1}^{4}",
        "explanation": "Add one to the power, $-\\tfrac{1}{2}+1 = \\tfrac{1}{2}$, and divide by this new power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ 2\\sqrt{x} \\right]_{1}^{4}",
        "explanation": "Dividing by $\\tfrac{1}{2}$ means multiplying by $2$, and $x^{\\frac{1}{2}}=\\sqrt{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= 2\\sqrt{4} - 2\\sqrt{1}",
        "explanation": "Evaluate $2\\sqrt{x}$ at $x=4$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the square roots",
        "workingLatex": "= 2(2) - 2(1)",
        "explanation": "$\\sqrt{4}=2$ and $\\sqrt{1}=1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify to the value",
        "workingLatex": "= 4 - 2 = 2",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle\\int_{1}^{4} \\frac{1}{\\sqrt{x}} \\,dx = 2$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q021",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "negative-powers", "reciprocal"],
  "questionText": "Evaluate $\\int_{1}^{3} \\frac{2}{x^{2}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite the integrand as a power of $x$",
        "workingLatex": "\\int_{1}^{3} \\frac{2}{x^{2}} \\,dx = \\int_{1}^{3} 2x^{-2} \\,dx",
        "explanation": "Writing $\\tfrac{2}{x^{2}}$ as $2x^{-2}$ puts it in a form we can integrate with the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the power rule",
        "workingLatex": "= \\left[ \\frac{2x^{-1}}{-1} \\right]_{1}^{3}",
        "explanation": "The constant $2$ stays with the term; add one to the power, $-2+1=-1$, and divide by $-1$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ -\\frac{2}{x} \\right]_{1}^{3}",
        "explanation": "Dividing by $-1$ gives $-2x^{-1}$, which is $-\\tfrac{2}{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= \\left( -\\frac{2}{3} \\right) - \\left( -\\frac{2}{1} \\right)",
        "explanation": "Evaluate $-\\tfrac{2}{x}$ at $x=3$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the signs",
        "workingLatex": "= -\\frac{2}{3} + 2",
        "explanation": "Subtracting a negative turns it into an addition.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Combine to the value",
        "workingLatex": "= \\frac{-2 + 6}{3} = \\frac{4}{3}",
        "explanation": "Writing $2$ as $\\tfrac{6}{3}$ lets us add the fractions to get the exact value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle\\int_{1}^{3} \\frac{2}{x^{2}} \\,dx = \\dfrac{4}{3}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q022",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "fractional-powers", "cube-root"],
  "questionText": "Evaluate $\\int_{1}^{8} x^{\\frac{1}{3}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the power to be integrated",
        "workingLatex": "\\int_{1}^{8} x^{\\frac{1}{3}} \\,dx",
        "explanation": "The integrand is a single fractional power of $x$, so the power rule applies directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the power rule",
        "workingLatex": "= \\left[ \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} \\right]_{1}^{8}",
        "explanation": "Add one to the power, $\\tfrac{1}{3}+1 = \\tfrac{4}{3}$, and divide by this new power.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the antiderivative",
        "workingLatex": "= \\left[ \\frac{3}{4} x^{\\frac{4}{3}} \\right]_{1}^{8}",
        "explanation": "Dividing by $\\tfrac{4}{3}$ is the same as multiplying by $\\tfrac{3}{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the limits",
        "workingLatex": "= \\frac{3}{4}\\left( 8^{\\frac{4}{3}} \\right) - \\frac{3}{4}\\left( 1^{\\frac{4}{3}} \\right)",
        "explanation": "Evaluate the antiderivative at $x=8$ and subtract its value at $x=1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the fractional powers",
        "workingLatex": "= \\frac{3}{4}(16) - \\frac{3}{4}(1)",
        "explanation": "$8^{\\frac{4}{3}} = (\\sqrt[3]{8})^{4} = 2^{4} = 16$, and $1^{\\frac{4}{3}} = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify to the value",
        "workingLatex": "= 12 - \\frac{3}{4} = \\frac{45}{4}",
        "explanation": "$\\tfrac{3}{4}(16)=12$; writing $12$ as $\\tfrac{48}{4}$ and subtracting $\\tfrac{3}{4}$ gives the exact value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle\\int_{1}^{8} x^{\\frac{1}{3}} \\,dx = \\dfrac{45}{4}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q023",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "roots"],
  "questionText": "The curve $y = x(4 - x)$ meets the $x$-axis at two points. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area} = \\int_{a}^{b} y \\,dx, \\quad a, b \\text{ are the roots}",
        "explanation": "The region is boxed in by the curve and the $x$-axis, so its left and right edges are the points where the curve crosses the axis. Once we know those $x$-values we integrate $y$ between them.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set y equal to zero",
        "workingLatex": "x(4 - x) = 0",
        "explanation": "A curve meets the $x$-axis exactly where its height is zero, so we set the expression for $y$ equal to zero.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the roots",
        "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 4",
        "explanation": "A product is zero when one of its factors is zero, giving the two crossing points that become the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the curve lies above the axis",
        "workingLatex": "\\text{At } x = 2: \\; y = 2(4 - 2) = 4 > 0",
        "explanation": "Testing a value between the roots reveals the sign of $y$. Here $y$ is positive, so the region sits above the axis and the integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Expand into power terms",
        "workingLatex": "y = 4x - x^{2}",
        "explanation": "Multiplying out replaces the factored form with separate powers of $x$, each of which we can integrate with the standard rule.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the definite integral",
        "workingLatex": "A = \\int_{0}^{4} \\left(4x - x^{2}\\right) \\,dx",
        "explanation": "The area equals the integral of the height $y$ taken from the lower root to the upper root.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ 2x^{2} - \\frac{x^{3}}{3} \\right]_{0}^{4}",
        "explanation": "We raise each power by one and divide by the new power. No constant of integration is needed because the limits will cancel it.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } 2(4)^{2} - \\frac{(4)^{3}}{3} = 32 - \\frac{64}{3}",
        "explanation": "Putting $x = 4$ into the antiderivative gives the accumulated value at the right-hand edge of the region.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } 2(0)^{2} - \\frac{(0)^{3}}{3} = 0",
        "explanation": "Putting $x = 0$ into the antiderivative gives the value at the left-hand edge; here it is zero.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract lower from upper",
        "workingLatex": "A = \\left(32 - \\frac{64}{3}\\right) - 0 = \\frac{96 - 64}{3}",
        "explanation": "A definite integral is the top value minus the bottom value; writing over a common denominator lets us combine the terms neatly.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the area",
        "workingLatex": "A = \\frac{32}{3}",
        "explanation": "This positive result is the exact area enclosed between the curve and the $x$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{32}{3}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q024",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "region-below-axis", "roots"],
  "questionText": "The curve $y = (x - 1)(x - 3)$ meets the $x$-axis at $x = 1$ and $x = 3$. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area between the roots } x = 1 \\text{ and } x = 3",
        "explanation": "The region is bounded on the sides by the two crossing points and top-or-bottom by the curve, so those roots are our limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the roots",
        "workingLatex": "(x - 1)(x - 3) = 0 \\Rightarrow x = 1 \\text{ or } x = 3",
        "explanation": "Setting $y = 0$ confirms the curve meets the axis exactly at the stated points, so we integrate from $1$ to $3$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the sign of the curve between the roots",
        "workingLatex": "\\text{At } x = 2: \\; y = (1)(-1) = -1 < 0",
        "explanation": "Testing a point between the roots shows $y$ is negative, so this stretch of curve dips below the axis. The integral will come out negative and we must handle that at the end.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Expand into power terms",
        "workingLatex": "y = x^{2} - 4x + 3",
        "explanation": "Multiplying out gives separate powers of $x$ so we can apply the standard integration rule to each.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the definite integral",
        "workingLatex": "I = \\int_{1}^{3} \\left(x^{2} - 4x + 3\\right) \\,dx",
        "explanation": "We integrate the height across the interval; because the region is below the axis this value $I$ will be negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} - 2x^{2} + 3x \\right]_{1}^{3}",
        "explanation": "Each power is raised by one and divided by the new power, giving the antiderivative ready for the limits.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{27}{3} - 2(9) + 3(3) = 9 - 18 + 9 = 0",
        "explanation": "Putting $x = 3$ into the antiderivative gives the value at the top limit, which here works out to zero.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{1}{3} - 2(1) + 3(1) = \\frac{1}{3} + 1 = \\frac{4}{3}",
        "explanation": "Putting $x = 1$ into the antiderivative gives the value at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract to evaluate the integral",
        "workingLatex": "I = 0 - \\frac{4}{3} = -\\frac{4}{3}",
        "explanation": "Top minus bottom gives a negative integral, exactly as we predicted for a region lying under the axis.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Take the modulus for the area",
        "workingLatex": "A = \\left| -\\frac{4}{3} \\right| = \\frac{4}{3}",
        "explanation": "Area is always positive, so where the integral is negative we take its size (modulus) to report the physical area.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the area",
        "workingLatex": "A = \\frac{4}{3}",
        "explanation": "This is the exact area of the region enclosed between the curve and the $x$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{4}{3}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q025",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "roots"],
  "questionText": "The curve $y = x(6 - x)$ meets the $x$-axis at two points. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area} = \\int_{a}^{b} y \\,dx",
        "explanation": "The edges of the region are the points where the curve meets the axis, so we first find those and then integrate the height between them.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set y equal to zero",
        "workingLatex": "x(6 - x) = 0",
        "explanation": "The curve touches the $x$-axis where its height is zero, so we solve $y = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the roots",
        "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 6",
        "explanation": "A product equals zero when a factor is zero, giving the two limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the curve lies above the axis",
        "workingLatex": "\\text{At } x = 3: \\; y = 3(6 - 3) = 9 > 0",
        "explanation": "A test point between the roots gives a positive height, so the region is above the axis and the integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Expand into power terms",
        "workingLatex": "y = 6x - x^{2}",
        "explanation": "Multiplying out gives separate powers of $x$ that are straightforward to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the definite integral",
        "workingLatex": "A = \\int_{0}^{6} \\left(6x - x^{2}\\right) \\,dx",
        "explanation": "The area equals the integral of $y$ from the lower root to the upper root.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ 3x^{2} - \\frac{x^{3}}{3} \\right]_{0}^{6}",
        "explanation": "We raise each power by one and divide by the new power to obtain the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } 3(6)^{2} - \\frac{(6)^{3}}{3} = 108 - 72 = 36",
        "explanation": "Putting $x = 6$ into the antiderivative gives the accumulated value at the right edge.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } 3(0)^{2} - \\frac{(0)^{3}}{3} = 0",
        "explanation": "Putting $x = 0$ gives zero at the left edge, so nothing is subtracted.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract and state the area",
        "workingLatex": "A = 36 - 0 = 36",
        "explanation": "Top value minus bottom value gives the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $36$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q026",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "region-below-axis", "roots"],
  "questionText": "The curve $y = (x + 2)(x - 2)$ meets the $x$-axis at $x = -2$ and $x = 2$. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area between } x = -2 \\text{ and } x = 2",
        "explanation": "The two crossing points fix the left and right edges of the region, so they are the limits we integrate between.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the roots",
        "workingLatex": "(x + 2)(x - 2) = 0 \\Rightarrow x = -2 \\text{ or } x = 2",
        "explanation": "Setting $y = 0$ verifies the curve meets the axis at the stated points, so we integrate from $-2$ to $2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the sign of the curve between the roots",
        "workingLatex": "\\text{At } x = 0: \\; y = (2)(-2) = -4 < 0",
        "explanation": "A test point between the roots gives a negative height, so this part of the curve lies below the axis. Its integral will be negative and we take the modulus at the end.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Expand into power terms",
        "workingLatex": "y = x^{2} - 4",
        "explanation": "The difference of two squares expands to a simple quadratic that is easy to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the definite integral",
        "workingLatex": "I = \\int_{-2}^{2} \\left(x^{2} - 4\\right) \\,dx",
        "explanation": "We integrate the height across the interval; since the region is below the axis this value will be negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} - 4x \\right]_{-2}^{2}",
        "explanation": "Each power is raised by one and divided by the new power, giving the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{(2)^{3}}{3} - 4(2) = \\frac{8}{3} - 8",
        "explanation": "Putting $x = 2$ into the antiderivative gives the value at the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{(-2)^{3}}{3} - 4(-2) = -\\frac{8}{3} + 8",
        "explanation": "Putting $x = -2$ into the antiderivative gives the value at the bottom limit; note the cube of a negative stays negative.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract to evaluate the integral",
        "workingLatex": "I = \\left(\\frac{8}{3} - 8\\right) - \\left(-\\frac{8}{3} + 8\\right) = \\frac{16}{3} - 16 = -\\frac{32}{3}",
        "explanation": "Top minus bottom gives a negative integral, confirming the region lies under the axis.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Take the modulus for the area",
        "workingLatex": "A = \\left| -\\frac{32}{3} \\right| = \\frac{32}{3}",
        "explanation": "Because area cannot be negative, we report the size of the integral as the physical area.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the area",
        "workingLatex": "A = \\frac{32}{3}",
        "explanation": "This is the exact area enclosed between the curve and the $x$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{32}{3}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q027",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "roots"],
  "questionText": "The curve $y = 9 - x^{2}$ meets the $x$-axis at two points. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area} = \\int_{a}^{b} y \\,dx",
        "explanation": "The region is enclosed by the curve and the axis, so its edges are the crossing points; we integrate the height between them.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set y equal to zero",
        "workingLatex": "9 - x^{2} = 0 \\Rightarrow x^{2} = 9",
        "explanation": "The curve meets the $x$-axis where its height is zero, so we solve $y = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the roots",
        "workingLatex": "x = -3 \\quad \\text{or} \\quad x = 3",
        "explanation": "Taking the square root gives both a positive and a negative value, which become the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the curve lies above the axis",
        "workingLatex": "\\text{At } x = 0: \\; y = 9 > 0",
        "explanation": "A test point between the roots gives a positive height, so the region sits above the axis and the integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the definite integral",
        "workingLatex": "A = \\int_{-3}^{3} \\left(9 - x^{2}\\right) \\,dx",
        "explanation": "The area equals the integral of the height from the lower root to the upper root.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ 9x - \\frac{x^{3}}{3} \\right]_{-3}^{3}",
        "explanation": "The constant $9$ integrates to $9x$ and $x^{2}$ integrates to $\\tfrac{x^{3}}{3}$, giving the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } 9(3) - \\frac{(3)^{3}}{3} = 27 - 9 = 18",
        "explanation": "Putting $x = 3$ into the antiderivative gives the value at the right edge.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } 9(-3) - \\frac{(-3)^{3}}{3} = -27 + 9 = -18",
        "explanation": "Putting $x = -3$ gives the value at the left edge; the cube of a negative stays negative, so the second term becomes positive.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract lower from upper",
        "workingLatex": "A = 18 - (-18) = 36",
        "explanation": "Top value minus bottom value gives the exact enclosed area.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the area",
        "workingLatex": "A = 36",
        "explanation": "This positive result is the area of the region between the curve and the $x$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $36$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q028",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "region-below-axis", "roots"],
  "questionText": "The curve $y = (x - 1)(x - 4)$ meets the $x$-axis at two points. Find the area of the region enclosed between the curve and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the area problem",
        "workingLatex": "\\text{Area} = \\left| \\int_{a}^{b} y \\,dx \\right|",
        "explanation": "The crossing points are the edges of the region, so we find them first and integrate between them, ready to take the modulus if the curve dips below the axis.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the roots",
        "workingLatex": "(x - 1)(x - 4) = 0 \\Rightarrow x = 1 \\text{ or } x = 4",
        "explanation": "Setting $y = 0$ gives the two points where the curve meets the axis, which become the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the sign of the curve between the roots",
        "workingLatex": "\\text{At } x = 2: \\; y = (1)(-2) = -2 < 0",
        "explanation": "A test point between the roots gives a negative height, so the curve lies below the axis here. The integral will be negative and we finish by taking its modulus.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Expand into power terms",
        "workingLatex": "y = x^{2} - 5x + 4",
        "explanation": "Multiplying out gives separate powers of $x$ so each term can be integrated with the standard rule.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the definite integral",
        "workingLatex": "I = \\int_{1}^{4} \\left(x^{2} - 5x + 4\\right) \\,dx",
        "explanation": "We integrate the height across the interval; the value $I$ will be negative because the region is below the axis.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} - \\frac{5x^{2}}{2} + 4x \\right]_{1}^{4}",
        "explanation": "Each power is raised by one and divided by the new power to give the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{64}{3} - \\frac{5(16)}{2} + 16 = \\frac{64}{3} - 24 = -\\frac{8}{3}",
        "explanation": "Putting $x = 4$ into the antiderivative and simplifying gives the value at the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{1}{3} - \\frac{5}{2} + 4 = \\frac{2 - 15 + 24}{6} = \\frac{11}{6}",
        "explanation": "Putting $x = 1$ into the antiderivative and using a common denominator of $6$ gives the value at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract to evaluate the integral",
        "workingLatex": "I = -\\frac{8}{3} - \\frac{11}{6} = -\\frac{16}{6} - \\frac{11}{6} = -\\frac{27}{6} = -\\frac{9}{2}",
        "explanation": "Top minus bottom gives a negative integral, exactly as expected for a region under the axis.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Take the modulus for the area",
        "workingLatex": "A = \\left| -\\frac{9}{2} \\right| = \\frac{9}{2}",
        "explanation": "Area is positive, so we report the size of the integral as the physical area of the region.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the area",
        "workingLatex": "A = \\frac{9}{2}",
        "explanation": "This is the exact area enclosed between the curve and the $x$-axis.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{9}{2}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q029",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "expand-before-integrating", "polynomials"],
  "questionText": "Evaluate $\\displaystyle \\int_{1}^{2} x(x - 1) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the need to expand first",
        "workingLatex": "\\int_{1}^{2} x(x - 1) \\,dx",
        "explanation": "There is no rule for integrating a product as it stands, so we first multiply out the brackets into separate power terms.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the integrand",
        "workingLatex": "x(x - 1) = x^{2} - x",
        "explanation": "Multiplying $x$ through the bracket turns the product into a sum of powers we can integrate one at a time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integral",
        "workingLatex": "= \\int_{1}^{2} \\left(x^{2} - x\\right) \\,dx",
        "explanation": "The integral now contains only standard powers of $x$, ready for term-by-term integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} - \\frac{x^{2}}{2} \\right]_{1}^{2}",
        "explanation": "Each power is raised by one and divided by the new power. The constant of integration is not needed for a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{(2)^{3}}{3} - \\frac{(2)^{2}}{2} = \\frac{8}{3} - 2",
        "explanation": "Putting $x = 2$ into the antiderivative gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{(1)^{3}}{3} - \\frac{(1)^{2}}{2} = \\frac{1}{3} - \\frac{1}{2}",
        "explanation": "Putting $x = 1$ into the antiderivative gives the value at the bottom of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Subtract lower from upper",
        "workingLatex": "= \\left(\\frac{8}{3} - 2\\right) - \\left(\\frac{1}{3} - \\frac{1}{2}\\right)",
        "explanation": "The definite integral is the top value minus the bottom value, so we subtract the whole lower bracket.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Combine over a common denominator",
        "workingLatex": "= \\left(\\frac{8}{3} - \\frac{1}{3}\\right) + \\left(\\frac{1}{2} - 2\\right) = \\frac{7}{3} - \\frac{3}{2} = \\frac{14 - 9}{6}",
        "explanation": "Grouping the like terms and using a denominator of $6$ lets us add the fractions cleanly.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the value",
        "workingLatex": "= \\frac{5}{6}",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{1}^{2} x(x - 1) \\,dx = \\dfrac{5}{6}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q030",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "simplify-before-integrating", "fractional-powers"],
  "questionText": "Evaluate $\\displaystyle \\int_{1}^{4} \\frac{x^{2} - 3}{\\sqrt{x}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the need to simplify first",
        "workingLatex": "\\int_{1}^{4} \\frac{x^{2} - 3}{\\sqrt{x}} \\,dx, \\quad \\sqrt{x} = x^{1/2}",
        "explanation": "We cannot integrate a quotient directly, so we split the fraction and write the root as a power, turning it into terms we can integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Divide each term by the root",
        "workingLatex": "\\frac{x^{2} - 3}{x^{1/2}} = x^{2 - \\frac{1}{2}} - 3x^{-\\frac{1}{2}} = x^{3/2} - 3x^{-1/2}",
        "explanation": "Dividing each term by $x^{1/2}$ subtracts $\\tfrac{1}{2}$ from each exponent, giving clean fractional powers.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integral",
        "workingLatex": "= \\int_{1}^{4} \\left(x^{3/2} - 3x^{-1/2}\\right) \\,dx",
        "explanation": "The integrand is now a sum of powers of $x$, each ready for the standard rule.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{2}{5}x^{5/2} - 6x^{1/2} \\right]_{1}^{4}",
        "explanation": "Adding one to each power gives $\\tfrac{5}{2}$ and $\\tfrac{1}{2}$; dividing by these is the same as multiplying by $\\tfrac{2}{5}$ and $2$, so $-3x^{-1/2}$ becomes $-6x^{1/2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{2}{5}(4)^{5/2} - 6(4)^{1/2} = \\frac{2}{5}(32) - 6(2)",
        "explanation": "Since $4^{1/2} = 2$, we have $4^{5/2} = 2^{5} = 32$, which makes the upper values easy to compute.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the upper value",
        "workingLatex": "= \\frac{64}{5} - 12 = \\frac{64 - 60}{5} = \\frac{4}{5}",
        "explanation": "Writing $12$ as $\\tfrac{60}{5}$ lets us combine over a common denominator.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{2}{5}(1)^{5/2} - 6(1)^{1/2} = \\frac{2}{5} - 6",
        "explanation": "At $x = 1$ every power of $1$ is just $1$, so the value is straightforward.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the lower value",
        "workingLatex": "= \\frac{2}{5} - \\frac{30}{5} = -\\frac{28}{5}",
        "explanation": "Combining over a denominator of $5$ gives a single fraction for the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract lower from upper",
        "workingLatex": "= \\frac{4}{5} - \\left(-\\frac{28}{5}\\right) = \\frac{4 + 28}{5} = \\frac{32}{5}",
        "explanation": "Top value minus bottom value gives the exact result of the definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{4} \\frac{x^{2} - 3}{\\sqrt{x}} \\,dx = \\frac{32}{5}",
        "explanation": "This is the exact value of the integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{1}^{4} \\frac{x^{2} - 3}{\\sqrt{x}} \\,dx = \\dfrac{32}{5}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "expand-before-integrating", "polynomials"],
  "questionText": "Evaluate $\\displaystyle \\int_{1}^{3} (x + 1)(x - 2) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the need to expand first",
        "workingLatex": "\\int_{1}^{3} (x + 1)(x - 2) \\,dx",
        "explanation": "A product of brackets cannot be integrated as it stands, so we multiply out to get separate power terms.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the integrand",
        "workingLatex": "(x + 1)(x - 2) = x^{2} - x - 2",
        "explanation": "Expanding gives a standard quadratic whose terms we can integrate individually.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integral",
        "workingLatex": "= \\int_{1}^{3} \\left(x^{2} - x - 2\\right) \\,dx",
        "explanation": "The integrand is now a sum of powers of $x$, ready for term-by-term integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} - \\frac{x^{2}}{2} - 2x \\right]_{1}^{3}",
        "explanation": "Each power is raised by one and divided by the new power; the constant $-2$ integrates to $-2x$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{27}{3} - \\frac{9}{2} - 6 = 9 - \\frac{9}{2} - 6 = -\\frac{3}{2}",
        "explanation": "Putting $x = 3$ into the antiderivative and simplifying gives the value at the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{1}{3} - \\frac{1}{2} - 2 = \\frac{2 - 3 - 12}{6} = -\\frac{13}{6}",
        "explanation": "Putting $x = 1$ and using a common denominator of $6$ gives a single fraction for the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Subtract lower from upper",
        "workingLatex": "= -\\frac{3}{2} - \\left(-\\frac{13}{6}\\right) = -\\frac{9}{6} + \\frac{13}{6}",
        "explanation": "The definite integral is top minus bottom; rewriting $-\\tfrac{3}{2}$ as $-\\tfrac{9}{6}$ matches the denominators.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the result",
        "workingLatex": "= \\frac{4}{6} = \\frac{2}{3}",
        "explanation": "Adding the fractions and cancelling gives the value in lowest terms.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{3} (x + 1)(x - 2) \\,dx = \\frac{2}{3}",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{1}^{3} (x + 1)(x - 2) \\,dx = \\dfrac{2}{3}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "simplify-before-integrating", "polynomials"],
  "questionText": "Evaluate $\\displaystyle \\int_{1}^{2} \\frac{x^{3} + 2x}{x} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the need to simplify first",
        "workingLatex": "\\int_{1}^{2} \\frac{x^{3} + 2x}{x} \\,dx",
        "explanation": "We cannot integrate the quotient directly, so we divide each term of the numerator by $x$ to get a polynomial.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Divide each term by x",
        "workingLatex": "\\frac{x^{3} + 2x}{x} = x^{2} + 2",
        "explanation": "Dividing $x^{3}$ by $x$ gives $x^{2}$ and $2x$ by $x$ gives $2$. Every term divides cleanly, so no awkward $x^{-1}$ appears.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integral",
        "workingLatex": "= \\int_{1}^{2} \\left(x^{2} + 2\\right) \\,dx",
        "explanation": "The integrand is now a simple polynomial ready for term-by-term integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} + 2x \\right]_{1}^{2}",
        "explanation": "The power $x^{2}$ integrates to $\\tfrac{x^{3}}{3}$ and the constant $2$ integrates to $2x$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{(2)^{3}}{3} + 2(2) = \\frac{8}{3} + 4",
        "explanation": "Putting $x = 2$ into the antiderivative gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{(1)^{3}}{3} + 2(1) = \\frac{1}{3} + 2",
        "explanation": "Putting $x = 1$ into the antiderivative gives the value at the bottom of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Subtract lower from upper",
        "workingLatex": "= \\left(\\frac{8}{3} + 4\\right) - \\left(\\frac{1}{3} + 2\\right) = \\frac{7}{3} + 2",
        "explanation": "The fractional parts give $\\tfrac{8}{3} - \\tfrac{1}{3} = \\tfrac{7}{3}$ and the whole numbers give $4 - 2 = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Combine over a common denominator",
        "workingLatex": "= \\frac{7}{3} + \\frac{6}{3} = \\frac{13}{3}",
        "explanation": "Writing $2$ as $\\tfrac{6}{3}$ lets us add the terms into a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{2} \\frac{x^{3} + 2x}{x} \\,dx = \\frac{13}{3}",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{1}^{2} \\frac{x^{3} + 2x}{x} \\,dx = \\dfrac{13}{3}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "expand-before-integrating", "polynomials"],
  "questionText": "Evaluate $\\displaystyle \\int_{0}^{1} (2x - 1)^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the need to expand first",
        "workingLatex": "\\int_{0}^{1} (2x - 1)^{2} \\,dx",
        "explanation": "A squared bracket must be multiplied out before integrating, since there is no direct rule for integrating it in this form.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the square",
        "workingLatex": "(2x - 1)^{2} = 4x^{2} - 4x + 1",
        "explanation": "Using $(a - b)^{2} = a^{2} - 2ab + b^{2}$ with $a = 2x$ and $b = 1$ gives a quadratic in $x$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the integral",
        "workingLatex": "= \\int_{0}^{1} \\left(4x^{2} - 4x + 1\\right) \\,dx",
        "explanation": "The integrand is now a sum of powers of $x$, ready for term-by-term integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{4x^{3}}{3} - 2x^{2} + x \\right]_{0}^{1}",
        "explanation": "Each power is raised by one and divided by the new power, so $4x^{2}$ becomes $\\tfrac{4x^{3}}{3}$ and $-4x$ becomes $-2x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{4(1)^{3}}{3} - 2(1)^{2} + 1 = \\frac{4}{3} - 2 + 1",
        "explanation": "Putting $x = 1$ into the antiderivative gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the upper value",
        "workingLatex": "= \\frac{4}{3} - 1 = \\frac{1}{3}",
        "explanation": "Combining the whole numbers $-2 + 1 = -1$ and subtracting gives a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{4(0)^{3}}{3} - 2(0)^{2} + 0 = 0",
        "explanation": "Every term contains a factor of $x$, so putting $x = 0$ gives zero at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Subtract lower from upper",
        "workingLatex": "= \\frac{1}{3} - 0 = \\frac{1}{3}",
        "explanation": "Top value minus bottom value gives the exact result of the integral.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the value",
        "workingLatex": "\\int_{0}^{1} (2x - 1)^{2} \\,dx = \\frac{1}{3}",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{0}^{1} (2x - 1)^{2} \\,dx = \\dfrac{1}{3}$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "polynomials", "evaluate-integral"],
  "questionText": "Evaluate $\\displaystyle \\int_{-1}^{2} \\left(4x^{3} - 3x^{2} + 2\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the evaluation",
        "workingLatex": "\\int_{-1}^{2} \\left(4x^{3} - 3x^{2} + 2\\right) \\,dx",
        "explanation": "The integrand is already a polynomial, so we can integrate each term directly and then apply the limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the cubic term",
        "workingLatex": "\\int 4x^{3} \\,dx = x^{4}",
        "explanation": "Raising the power to $4$ and dividing by $4$ turns $4x^{3}$ into exactly $x^{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the quadratic term",
        "workingLatex": "\\int -3x^{2} \\,dx = -x^{3}",
        "explanation": "Raising the power to $3$ and dividing by $3$ turns $-3x^{2}$ into $-x^{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 2 \\,dx = 2x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the antiderivative with limits",
        "workingLatex": "= \\left[ x^{4} - x^{3} + 2x \\right]_{-1}^{2}",
        "explanation": "Collecting the three integrated terms gives the full antiderivative ready for substitution.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } (2)^{4} - (2)^{3} + 2(2) = 16 - 8 + 4",
        "explanation": "Putting $x = 2$ into each term gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the upper value",
        "workingLatex": "= 12",
        "explanation": "Adding the three terms gives the accumulated value at $x = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } (-1)^{4} - (-1)^{3} + 2(-1) = 1 - (-1) - 2",
        "explanation": "Putting $x = -1$ requires care with signs: the fourth power is positive and the cube is negative, so subtracting it adds $1$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify the lower value",
        "workingLatex": "= 1 + 1 - 2 = 0",
        "explanation": "The terms cancel, giving zero at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract lower from upper",
        "workingLatex": "= 12 - 0 = 12",
        "explanation": "Top value minus bottom value gives the exact result of the definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the value",
        "workingLatex": "\\int_{-1}^{2} \\left(4x^{3} - 3x^{2} + 2\\right) \\,dx = 12",
        "explanation": "This is the exact value of the integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{-1}^{2} \\left(4x^{3} - 3x^{2} + 2\\right) \\,dx = 12$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "polynomials", "evaluate-integral"],
  "questionText": "Evaluate $\\displaystyle \\int_{1}^{3} \\left(x^{3} - 4x + 1\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the evaluation",
        "workingLatex": "\\int_{1}^{3} \\left(x^{3} - 4x + 1\\right) \\,dx",
        "explanation": "The integrand is a polynomial, so we integrate each term with the standard rule and then apply the limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the cubic term",
        "workingLatex": "\\int x^{3} \\,dx = \\frac{x^{4}}{4}",
        "explanation": "Raising the power to $4$ and dividing by $4$ gives $\\tfrac{x^{4}}{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the linear term",
        "workingLatex": "\\int -4x \\,dx = -2x^{2}",
        "explanation": "Raising the power to $2$ and dividing by $2$ turns $-4x$ into $-2x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 1 \\,dx = x",
        "explanation": "The constant $1$ integrates to $x$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the antiderivative with limits",
        "workingLatex": "= \\left[ \\frac{x^{4}}{4} - 2x^{2} + x \\right]_{1}^{3}",
        "explanation": "Collecting the integrated terms gives the antiderivative ready for substitution.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } \\frac{(3)^{4}}{4} - 2(3)^{2} + 3 = \\frac{81}{4} - 18 + 3",
        "explanation": "Putting $x = 3$ into each term gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the upper value",
        "workingLatex": "= \\frac{81}{4} - 15 = \\frac{81 - 60}{4} = \\frac{21}{4}",
        "explanation": "Combining the whole numbers and using a denominator of $4$ gives a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } \\frac{(1)^{4}}{4} - 2(1)^{2} + 1 = \\frac{1}{4} - 2 + 1",
        "explanation": "Putting $x = 1$ into each term gives the value at the bottom of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify the lower value",
        "workingLatex": "= \\frac{1}{4} - 1 = -\\frac{3}{4}",
        "explanation": "Combining $-2 + 1 = -1$ and subtracting from $\\tfrac{1}{4}$ gives a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract lower from upper",
        "workingLatex": "= \\frac{21}{4} - \\left(-\\frac{3}{4}\\right) = \\frac{24}{4} = 6",
        "explanation": "Top value minus bottom value gives the exact result of the integral.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{3} \\left(x^{3} - 4x + 1\\right) \\,dx = 6",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{1}^{3} \\left(x^{3} - 4x + 1\\right) \\,dx = 6$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "polynomials", "evaluate-integral"],
  "questionText": "Evaluate $\\displaystyle \\int_{0}^{2} \\left(4x^{3} - 6x^{2} + 2x\\right) \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the evaluation",
        "workingLatex": "\\int_{0}^{2} \\left(4x^{3} - 6x^{2} + 2x\\right) \\,dx",
        "explanation": "The integrand is a polynomial, so we integrate each term separately and then apply the limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the cubic term",
        "workingLatex": "\\int 4x^{3} \\,dx = x^{4}",
        "explanation": "Raising the power to $4$ and dividing by $4$ turns $4x^{3}$ into $x^{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the quadratic term",
        "workingLatex": "\\int -6x^{2} \\,dx = -2x^{3}",
        "explanation": "Raising the power to $3$ and dividing by $3$ turns $-6x^{2}$ into $-2x^{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the linear term",
        "workingLatex": "\\int 2x \\,dx = x^{2}",
        "explanation": "Raising the power to $2$ and dividing by $2$ turns $2x$ into $x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the antiderivative with limits",
        "workingLatex": "= \\left[ x^{4} - 2x^{3} + x^{2} \\right]_{0}^{2}",
        "explanation": "Collecting the integrated terms gives the full antiderivative ready for substitution.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the upper limit",
        "workingLatex": "\\text{Upper: } (2)^{4} - 2(2)^{3} + (2)^{2} = 16 - 16 + 4",
        "explanation": "Putting $x = 2$ into each term gives the value at the top of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the upper value",
        "workingLatex": "= 4",
        "explanation": "The first two terms cancel, leaving $4$ as the value at $x = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "\\text{Lower: } (0)^{4} - 2(0)^{3} + (0)^{2} = 0",
        "explanation": "Every term contains a factor of $x$, so putting $x = 0$ gives zero at the bottom limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract lower from upper",
        "workingLatex": "= 4 - 0 = 4",
        "explanation": "Top value minus bottom value gives the exact result of the integral.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the value",
        "workingLatex": "\\int_{0}^{2} \\left(4x^{3} - 6x^{2} + 2x\\right) \\,dx = 4",
        "explanation": "This is the exact value of the definite integral.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\displaystyle \\int_{0}^{2} \\left(4x^{3} - 6x^{2} + 2x\\right) \\,dx = 4$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = 6x - x^{2}$ and the line $y = x$ enclose a finite region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "6x - x^{2} = x",
        "explanation": "The region is trapped between the two graphs, so it begins and ends exactly where they cross; setting the curve equal to the line locates those crossing points.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a quadratic and factorise",
        "workingLatex": "6x - x^{2} = x \\Rightarrow 5x - x^{2} = 0 \\Rightarrow x(5 - x) = 0",
        "explanation": "Bringing everything to one side gives a quadratic whose roots are the $x$-coordinates of the intersections; factorising reads them off immediately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = 0 \\quad \\text{and} \\quad x = 5",
        "explanation": "These two $x$-values are the left and right edges of the enclosed region, so they become the limits of the integral.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 1: \\; 6(1) - 1^{2} = 5 > 1 \\Rightarrow \\text{curve above line}",
        "explanation": "Testing one point inside the interval tells us which graph is higher there; the curve sits above the line, so we integrate (curve $-$ line) to keep the area positive.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{0}^{5} \\left( 6x - x^{2} - x \\right) \\,dx",
        "explanation": "The area between two graphs is the integral of the upper function minus the lower function across the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the integrand",
        "workingLatex": "A = \\int_{0}^{5} \\left( 5x - x^{2} \\right) \\,dx",
        "explanation": "Collecting like terms before integrating keeps the arithmetic clean and reduces the chance of slips.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ \\frac{5x^{2}}{2} - \\frac{x^{3}}{3} \\right]_{0}^{5}",
        "explanation": "Raise each power by one and divide by the new power; no constant is needed because it cancels in a definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 5: \\; \\frac{5(25)}{2} - \\frac{125}{3} = \\frac{125}{2} - \\frac{125}{3}",
        "explanation": "Evaluating the antiderivative at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 0: \\; \\frac{5(0)}{2} - \\frac{0}{3} = 0",
        "explanation": "At $x = 0$ every term vanishes, so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{125}{2} - \\frac{125}{3} = \\frac{375 - 250}{6} = \\frac{125}{6}",
        "explanation": "Subtracting the lower value from the upper value gives the exact area; a common denominator combines the fractions.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{125}{6}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = x^{2} - 4x + 5$ and the line $y = 2x - 3$ intersect at two points, enclosing a region. Find its exact area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "x^{2} - 4x + 5 = 2x - 3",
        "explanation": "The region lies between the parabola and the line, so its edges are the points where the two graphs cross; equating them locates those points.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a quadratic and factorise",
        "workingLatex": "x^{2} - 4x + 5 = 2x - 3 \\Rightarrow x^{2} - 6x + 8 = 0 \\Rightarrow (x - 2)(x - 4) = 0",
        "explanation": "Bringing all terms to one side gives a quadratic in $x$; factorising reveals the two intersection $x$-values.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = 2 \\quad \\text{and} \\quad x = 4",
        "explanation": "These are the horizontal boundaries of the region and therefore the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 3: \\; \\text{line} = 3, \\; \\text{curve} = 2 \\Rightarrow \\text{line above curve}",
        "explanation": "A midpoint test shows the line is higher on this interval, so we integrate (line $-$ curve) to obtain a positive area.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{2}^{4} \\left( (2x - 3) - (x^{2} - 4x + 5) \\right) \\,dx",
        "explanation": "The area between two graphs equals the integral of the top curve minus the bottom curve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the integrand",
        "workingLatex": "A = \\int_{2}^{4} \\left( -x^{2} + 6x - 8 \\right) \\,dx",
        "explanation": "Expanding the brackets and collecting like terms makes the integration straightforward.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ -\\frac{x^{3}}{3} + 3x^{2} - 8x \\right]_{2}^{4}",
        "explanation": "Apply the power rule to each term to find the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 4: \\; -\\frac{64}{3} + 48 - 32 = -\\frac{16}{3}",
        "explanation": "Evaluating at the upper limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 2: \\; -\\frac{8}{3} + 12 - 16 = -\\frac{20}{3}",
        "explanation": "Evaluating at the lower limit gives the value to subtract.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract and simplify",
        "workingLatex": "A = -\\frac{16}{3} - \\left( -\\frac{20}{3} \\right) = \\frac{4}{3}",
        "explanation": "The difference of the two values is the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{4}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = x^{2}$ and the line $y = 4$ enclose a region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the curve equal to the line",
        "workingLatex": "x^{2} = 4",
        "explanation": "The horizontal line cuts the parabola at two symmetric points; these mark the edges of the enclosed region.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Solve for the intersection points",
        "workingLatex": "x^{2} = 4 \\Rightarrow x = -2 \\; \\text{or} \\; x = 2",
        "explanation": "Taking square roots gives both crossing points, which become the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the limits of integration",
        "workingLatex": "\\text{Lower limit } x = -2, \\quad \\text{upper limit } x = 2",
        "explanation": "Reading left to right, the region runs from $x = -2$ to $x = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 0: \\; 4 > 0 \\Rightarrow \\text{line } y = 4 \\text{ above curve}",
        "explanation": "Inside the interval the line is higher than the parabola, so we integrate (line $-$ curve) to get a positive area.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-2}^{2} \\left( 4 - x^{2} \\right) \\,dx",
        "explanation": "The area is the integral of the upper function minus the lower function over the interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ 4x - \\frac{x^{3}}{3} \\right]_{-2}^{2}",
        "explanation": "Integrate each term using the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; 8 - \\frac{8}{3} = \\frac{16}{3}",
        "explanation": "Evaluating the antiderivative at the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -2: \\; -8 + \\frac{8}{3} = -\\frac{16}{3}",
        "explanation": "Evaluating at the bottom limit; the odd power $x^{3}$ changes sign.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{16}{3} - \\left( -\\frac{16}{3} \\right) = \\frac{32}{3}",
        "explanation": "Subtracting gives the exact area; the symmetry of the region doubles the positive contribution.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{32}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = 2x^{2}$ and the line $y = 2x + 4$ enclose a finite region. Find its exact area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "2x^{2} = 2x + 4",
        "explanation": "The region is bounded by both graphs, so the crossing points where they are equal give its edges.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange and simplify the quadratic",
        "workingLatex": "2x^{2} - 2x - 4 = 0 \\Rightarrow x^{2} - x - 2 = 0 \\Rightarrow (x - 2)(x + 1) = 0",
        "explanation": "Dividing through by $2$ first makes the factorising easier, then the roots follow directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = -1 \\quad \\text{and} \\quad x = 2",
        "explanation": "These $x$-values are the boundaries of the region and hence the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 0: \\; \\text{line} = 4 > 0 = \\text{curve} \\Rightarrow \\text{line above}",
        "explanation": "A midpoint test shows the line lies above the parabola, so we integrate (line $-$ curve).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-1}^{2} \\left( (2x + 4) - 2x^{2} \\right) \\,dx",
        "explanation": "The enclosed area is the integral of the top function minus the bottom function.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ x^{2} + 4x - \\frac{2x^{3}}{3} \\right]_{-1}^{2}",
        "explanation": "Apply the power rule to each term to obtain the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; 4 + 8 - \\frac{16}{3} = \\frac{20}{3}",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -1: \\; 1 - 4 + \\frac{2}{3} = -\\frac{7}{3}",
        "explanation": "At $x = -1$ the cube term $-\\tfrac{2x^{3}}{3}$ becomes $+\\tfrac{2}{3}$ since $(-1)^{3} = -1$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{20}{3} - \\left( -\\frac{7}{3} \\right) = \\frac{27}{3} = 9",
        "explanation": "Subtracting the lower value from the upper value gives the exact area, which simplifies to a whole number.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $9$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = x^{2}$ and the line $y = 2x + 8$ enclose a region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "x^{2} = 2x + 8",
        "explanation": "The parabola and the line bound the region, so the crossing points where they are equal give its edges.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a quadratic and factorise",
        "workingLatex": "x^{2} - 2x - 8 = 0 \\Rightarrow (x - 4)(x + 2) = 0",
        "explanation": "Moving all terms to one side gives a quadratic whose roots are the intersection $x$-values.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = -2 \\quad \\text{and} \\quad x = 4",
        "explanation": "These are the left and right boundaries of the region and so the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 0: \\; \\text{line} = 8 > 0 = \\text{curve} \\Rightarrow \\text{line above}",
        "explanation": "Testing a point inside the interval shows the line is higher, so we integrate (line $-$ curve).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-2}^{4} \\left( (2x + 8) - x^{2} \\right) \\,dx",
        "explanation": "The area between the graphs is the integral of the upper minus the lower function.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ x^{2} + 8x - \\frac{x^{3}}{3} \\right]_{-2}^{4}",
        "explanation": "Apply the power rule to each term to find the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 4: \\; 16 + 32 - \\frac{64}{3} = \\frac{80}{3}",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -2: \\; 4 - 16 + \\frac{8}{3} = -\\frac{28}{3}",
        "explanation": "At $x = -2$ the term $-\\tfrac{x^{3}}{3}$ becomes $+\\tfrac{8}{3}$ since $(-2)^{3} = -8$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{80}{3} - \\left( -\\frac{28}{3} \\right) = \\frac{108}{3} = 36",
        "explanation": "Subtracting gives the exact area, which simplifies to a whole number.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $36$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = 3x^{2}$ and the line $y = 6x$ enclose a finite region. Find its exact area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "3x^{2} = 6x",
        "explanation": "The region is bounded by both graphs, so equating them locates the crossing points that form its edges.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange and factorise",
        "workingLatex": "3x^{2} - 6x = 0 \\Rightarrow 3x(x - 2) = 0",
        "explanation": "Taking out the common factor $3x$ immediately gives the two roots.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = 0 \\quad \\text{and} \\quad x = 2",
        "explanation": "These $x$-values are the boundaries of the region and hence the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 1: \\; \\text{line} = 6 > 3 = \\text{curve} \\Rightarrow \\text{line above}",
        "explanation": "A midpoint test shows the line lies above the parabola, so we integrate (line $-$ curve).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{0}^{2} \\left( 6x - 3x^{2} \\right) \\,dx",
        "explanation": "The enclosed area is the integral of the top function minus the bottom function.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ 3x^{2} - x^{3} \\right]_{0}^{2}",
        "explanation": "Apply the power rule to each term to obtain the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; 3(4) - 8 = 12 - 8 = 4",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 0: \\; 3(0) - 0 = 0",
        "explanation": "At $x = 0$ both terms vanish, so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract to get the area",
        "workingLatex": "A = 4 - 0 = 4",
        "explanation": "Subtracting the lower value from the upper value gives the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $4$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "quadratic-intersection"],
  "questionText": "The curve $y = x^{2} - 4x + 4$ and the line $y = x$ enclose a region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve and line meet",
        "workingLatex": "x^{2} - 4x + 4 = x",
        "explanation": "The region sits between the parabola and the line, so the crossing points where they are equal give its edges.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a quadratic and factorise",
        "workingLatex": "x^{2} - 5x + 4 = 0 \\Rightarrow (x - 1)(x - 4) = 0",
        "explanation": "Bringing all terms to one side gives a quadratic whose roots are the intersection $x$-values.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the limits",
        "workingLatex": "x = 1 \\quad \\text{and} \\quad x = 4",
        "explanation": "These are the horizontal boundaries of the region and so the limits of integration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 2: \\; \\text{line} = 2 > 0 = \\text{curve} \\Rightarrow \\text{line above}",
        "explanation": "A midpoint test shows the line is higher than the parabola on this interval, so we integrate (line $-$ curve).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{1}^{4} \\left( x - (x^{2} - 4x + 4) \\right) \\,dx",
        "explanation": "The area between two graphs is the integral of the top function minus the bottom function.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the integrand",
        "workingLatex": "A = \\int_{1}^{4} \\left( -x^{2} + 5x - 4 \\right) \\,dx",
        "explanation": "Removing the brackets and collecting like terms makes the integration straightforward.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ -\\frac{x^{3}}{3} + \\frac{5x^{2}}{2} - 4x \\right]_{1}^{4}",
        "explanation": "Apply the power rule to each term to find the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 4: \\; -\\frac{64}{3} + 40 - 16 = \\frac{8}{3}",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 1: \\; -\\frac{1}{3} + \\frac{5}{2} - 4 = -\\frac{11}{6}",
        "explanation": "Evaluating at the lower limit gives the value to subtract.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{8}{3} - \\left( -\\frac{11}{6} \\right) = \\frac{16}{6} + \\frac{11}{6} = \\frac{27}{6} = \\frac{9}{2}",
        "explanation": "A common denominator combines the fractions to give the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{9}{2}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "area-between-curve-and-axis"],
  "questionText": "The finite region $R$ is enclosed by the curve $y = 16 - x^{2}$ and the $x$-axis. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the x-axis",
        "workingLatex": "16 - x^{2} = 0",
        "explanation": "The region is bounded below by the $x$-axis, so its edges are where the curve crosses that axis, that is where $y = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Solve for the crossing points",
        "workingLatex": "x^{2} = 16 \\Rightarrow x = -4 \\; \\text{or} \\; x = 4",
        "explanation": "Taking square roots gives both points where the curve cuts the axis.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the limits of integration",
        "workingLatex": "\\text{Lower } x = -4, \\quad \\text{upper } x = 4",
        "explanation": "The region runs between these two crossing points, so they become the limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the curve is above the axis",
        "workingLatex": "\\text{At } x = 0: \\; y = 16 > 0",
        "explanation": "Between the roots the curve lies above the $x$-axis, so the integral is positive and gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-4}^{4} \\left( 16 - x^{2} \\right) \\,dx",
        "explanation": "The area under a curve above the axis is the definite integral of the curve between the limits.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ 16x - \\frac{x^{3}}{3} \\right]_{-4}^{4}",
        "explanation": "Integrate each term using the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 4: \\; 64 - \\frac{64}{3} = \\frac{128}{3}",
        "explanation": "Evaluating the antiderivative at the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -4: \\; -64 + \\frac{64}{3} = -\\frac{128}{3}",
        "explanation": "At $x = -4$ the odd power $x^{3}$ changes sign, so the term $-\\tfrac{x^{3}}{3}$ becomes positive.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{128}{3} - \\left( -\\frac{128}{3} \\right) = \\frac{256}{3}",
        "explanation": "Subtracting gives the exact area; the symmetry of the region doubles the positive contribution.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{256}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "area-between-curve-and-axis"],
  "questionText": "The finite region $R$ is bounded by the curve $y = 12 - x - x^{2}$ and the $x$-axis. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the x-axis",
        "workingLatex": "12 - x - x^{2} = 0",
        "explanation": "The region sits on the $x$-axis, so its edges are the points where the curve crosses the axis, that is where $y = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Solve the quadratic",
        "workingLatex": "x^{2} + x - 12 = 0 \\Rightarrow (x + 4)(x - 3) = 0",
        "explanation": "Rearranging into a standard quadratic and factorising gives the two crossing points.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the limits of integration",
        "workingLatex": "x = -4 \\quad \\text{and} \\quad x = 3",
        "explanation": "The region runs from $x = -4$ to $x = 3$, so these are the limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the curve is above the axis",
        "workingLatex": "\\text{At } x = 0: \\; y = 12 > 0",
        "explanation": "Between the roots the curve lies above the axis, so the integral is positive and gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-4}^{3} \\left( 12 - x - x^{2} \\right) \\,dx",
        "explanation": "The area is the definite integral of the curve between the crossing points.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ 12x - \\frac{x^{2}}{2} - \\frac{x^{3}}{3} \\right]_{-4}^{3}",
        "explanation": "Apply the power rule to each term to find the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 3: \\; 36 - \\frac{9}{2} - 9 = \\frac{45}{2}",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -4: \\; -48 - 8 + \\frac{64}{3} = -\\frac{104}{3}",
        "explanation": "At $x = -4$ the term $-\\tfrac{x^{3}}{3}$ becomes $+\\tfrac{64}{3}$ since $(-4)^{3} = -64$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{45}{2} - \\left( -\\frac{104}{3} \\right) = \\frac{135 + 208}{6} = \\frac{343}{6}",
        "explanation": "A common denominator of $6$ combines the fractions to give the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{343}{6}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-two-curves", "quadratic-intersection"],
  "questionText": "The curves $y = x^{2}$ and $y = 8 - x^{2}$ enclose a finite region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the two curves meet",
        "workingLatex": "x^{2} = 8 - x^{2}",
        "explanation": "The region is trapped between the two parabolas, so its edges are the points where they cross; setting them equal finds those points.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Solve for the intersection points",
        "workingLatex": "2x^{2} = 8 \\Rightarrow x^{2} = 4 \\Rightarrow x = -2 \\; \\text{or} \\; x = 2",
        "explanation": "Collecting the $x^{2}$ terms and taking square roots gives both crossing points.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the limits of integration",
        "workingLatex": "x = -2 \\quad \\text{and} \\quad x = 2",
        "explanation": "These are the left and right boundaries of the region and hence the limits.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which curve is on top",
        "workingLatex": "\\text{At } x = 0: \\; 8 - 0 = 8 > 0 \\Rightarrow y = 8 - x^{2} \\text{ above}",
        "explanation": "A midpoint test shows the downward parabola is higher, so we integrate (upper $-$ lower).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-2}^{2} \\left( (8 - x^{2}) - x^{2} \\right) \\,dx",
        "explanation": "The area between two curves is the integral of the top curve minus the bottom curve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the integrand",
        "workingLatex": "A = \\int_{-2}^{2} \\left( 8 - 2x^{2} \\right) \\,dx",
        "explanation": "Collecting the $x^{2}$ terms keeps the integration tidy.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "A = \\left[ 8x - \\frac{2x^{3}}{3} \\right]_{-2}^{2}",
        "explanation": "Apply the power rule to each term to obtain the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; 16 - \\frac{16}{3} = \\frac{32}{3}",
        "explanation": "Evaluating at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit",
        "workingLatex": "x = -2: \\; -16 + \\frac{16}{3} = -\\frac{32}{3}",
        "explanation": "At $x = -2$ the odd power $x^{3}$ changes sign, so the term $-\\tfrac{2x^{3}}{3}$ becomes positive.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{32}{3} - \\left( -\\frac{32}{3} \\right) = \\frac{64}{3}",
        "explanation": "Subtracting gives the exact area; the symmetry doubles the positive contribution.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{64}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "fractional-powers"],
  "questionText": "The region $R$ lies under the curve $y = \\sqrt{x}$, above the $x$-axis, between $x = 1$ and $x = 9$. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the root as a power",
        "workingLatex": "\\sqrt{x} = x^{1/2}",
        "explanation": "Rewriting the square root as a fractional power lets us apply the standard power rule for integration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the curve is positive on the interval",
        "workingLatex": "\\text{For } 1 \\le x \\le 9, \\; x^{1/2} > 0",
        "explanation": "Because the curve stays above the $x$-axis, the definite integral gives the area directly with no sign issues.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{1}^{9} x^{1/2} \\,dx",
        "explanation": "The area under a positive curve between two limits is the definite integral of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the power rule for integration",
        "workingLatex": "\\int x^{1/2} \\,dx = \\frac{x^{3/2}}{3/2} = \\frac{2}{3} x^{3/2}",
        "explanation": "Add one to the power to get $\\tfrac{3}{2}$ and divide by it, which is the same as multiplying by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the definite integral in bracket form",
        "workingLatex": "A = \\left[ \\frac{2}{3} x^{3/2} \\right]_{1}^{9}",
        "explanation": "The bracket notation records the antiderivative ready to be evaluated at each limit.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the power at the upper limit",
        "workingLatex": "9^{3/2} = (\\sqrt{9})^{3} = 3^{3} = 27",
        "explanation": "A fractional power means take the root first then cube it; here $\\sqrt{9} = 3$ and $3^{3} = 27$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 9: \\; \\frac{2}{3}(27) = 18",
        "explanation": "Evaluating the antiderivative at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 1: \\; \\frac{2}{3}(1) = \\frac{2}{3}",
        "explanation": "Since $1^{3/2} = 1$, the lower limit contributes $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = 18 - \\frac{2}{3} = \\frac{54 - 2}{3} = \\frac{52}{3}",
        "explanation": "Subtracting the lower value from the upper value gives the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{52}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "negative-powers"],
  "questionText": "The region $R$ lies under the curve $y = x + \\dfrac{4}{x^{2}}$, above the $x$-axis, between $x = 1$ and $x = 2$. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite using index notation",
        "workingLatex": "y = x + \\frac{4}{x^{2}} = x + 4x^{-2}",
        "explanation": "Writing $\\tfrac{4}{x^{2}}$ as $4x^{-2}$ turns the term into a power of $x$ so the power rule can be used.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the curve is positive on the interval",
        "workingLatex": "\\text{For } 1 \\le x \\le 2, \\; x + 4x^{-2} > 0",
        "explanation": "The curve stays above the $x$-axis, so the definite integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{1}^{2} \\left( x + 4x^{-2} \\right) \\,dx",
        "explanation": "The area under a positive curve between two limits is the definite integral of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the first term",
        "workingLatex": "\\int x \\,dx = \\frac{x^{2}}{2}",
        "explanation": "Raise the power by one and divide by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the second term",
        "workingLatex": "\\int 4x^{-2} \\,dx = \\frac{4x^{-1}}{-1} = -\\frac{4}{x}",
        "explanation": "Adding one to the power $-2$ gives $-1$; dividing by $-1$ flips the sign, giving $-4x^{-1} = -\\tfrac{4}{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the definite integral in bracket form",
        "workingLatex": "A = \\left[ \\frac{x^{2}}{2} - \\frac{4}{x} \\right]_{1}^{2}",
        "explanation": "Collect the two antiderivatives into one bracket ready to evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; \\frac{4}{2} - \\frac{4}{2} = 2 - 2 = 0",
        "explanation": "Evaluating the antiderivative at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 1: \\; \\frac{1}{2} - \\frac{4}{1} = \\frac{1}{2} - 4 = -\\frac{7}{2}",
        "explanation": "Evaluating at the lower limit gives the value to subtract.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = 0 - \\left( -\\frac{7}{2} \\right) = \\frac{7}{2}",
        "explanation": "Subtracting the lower value from the upper value gives the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{7}{2}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "negative-powers"],
  "questionText": "The region $R$ lies under the curve $y = x^{2} + \\dfrac{1}{x^{2}}$, above the $x$-axis, between $x = 1$ and $x = 2$. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Rewrite using index notation",
        "workingLatex": "y = x^{2} + \\frac{1}{x^{2}} = x^{2} + x^{-2}",
        "explanation": "Writing $\\tfrac{1}{x^{2}}$ as $x^{-2}$ turns the term into a power of $x$ so the power rule applies.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the curve is positive on the interval",
        "workingLatex": "\\text{For } 1 \\le x \\le 2, \\; x^{2} + x^{-2} > 0",
        "explanation": "The curve stays above the $x$-axis, so the definite integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{1}^{2} \\left( x^{2} + x^{-2} \\right) \\,dx",
        "explanation": "The area under a positive curve between two limits is the definite integral of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "Raise the power by one and divide by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the second term",
        "workingLatex": "\\int x^{-2} \\,dx = \\frac{x^{-1}}{-1} = -\\frac{1}{x}",
        "explanation": "Adding one to the power $-2$ gives $-1$; dividing by $-1$ gives $-x^{-1} = -\\tfrac{1}{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the definite integral in bracket form",
        "workingLatex": "A = \\left[ \\frac{x^{3}}{3} - \\frac{1}{x} \\right]_{1}^{2}",
        "explanation": "Collect the two antiderivatives into one bracket ready to evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 2: \\; \\frac{8}{3} - \\frac{1}{2} = \\frac{16 - 3}{6} = \\frac{13}{6}",
        "explanation": "Evaluating the antiderivative at the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 1: \\; \\frac{1}{3} - 1 = -\\frac{2}{3}",
        "explanation": "Evaluating at the lower limit gives the value to subtract.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\frac{13}{6} - \\left( -\\frac{2}{3} \\right) = \\frac{13}{6} + \\frac{4}{6} = \\frac{17}{6}",
        "explanation": "Using a common denominator of $6$ combines the fractions to give the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{17}{6}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-under-curve", "fractional-powers"],
  "questionText": "The region $R$ lies under the curve $y = \\dfrac{x + 1}{\\sqrt{x}}$, above the $x$-axis, between $x = 1$ and $x = 4$. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Split the fraction into powers of x",
        "workingLatex": "y = \\frac{x + 1}{\\sqrt{x}} = \\frac{x}{x^{1/2}} + \\frac{1}{x^{1/2}} = x^{1/2} + x^{-1/2}",
        "explanation": "Dividing each term of the numerator by $x^{1/2}$ turns the awkward quotient into two simple powers we can integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the curve is positive on the interval",
        "workingLatex": "\\text{For } 1 \\le x \\le 4, \\; x^{1/2} + x^{-1/2} > 0",
        "explanation": "The curve stays above the $x$-axis, so the definite integral gives the area directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{1}^{4} \\left( x^{1/2} + x^{-1/2} \\right) \\,dx",
        "explanation": "The area under a positive curve between two limits is the definite integral of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{1/2} \\,dx = \\frac{x^{3/2}}{3/2} = \\frac{2}{3} x^{3/2}",
        "explanation": "Add one to the power to get $\\tfrac{3}{2}$ and divide by it, that is multiply by $\\tfrac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the second term",
        "workingLatex": "\\int x^{-1/2} \\,dx = \\frac{x^{1/2}}{1/2} = 2x^{1/2}",
        "explanation": "Adding one to $-\\tfrac{1}{2}$ gives $\\tfrac{1}{2}$; dividing by $\\tfrac{1}{2}$ means multiplying by $2$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the definite integral in bracket form",
        "workingLatex": "A = \\left[ \\frac{2}{3} x^{3/2} + 2x^{1/2} \\right]_{1}^{4}",
        "explanation": "Collect the two antiderivatives into one bracket ready to evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the upper limit",
        "workingLatex": "x = 4: \\; \\frac{2}{3}(8) + 2(2) = \\frac{16}{3} + 4",
        "explanation": "Here $4^{3/2} = (\\sqrt{4})^{3} = 8$ and $4^{1/2} = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the lower limit",
        "workingLatex": "x = 1: \\; \\frac{2}{3}(1) + 2(1) = \\frac{2}{3} + 2",
        "explanation": "Since $1^{3/2} = 1$ and $1^{1/2} = 1$, the lower limit gives $\\tfrac{2}{3} + 2$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Subtract and simplify",
        "workingLatex": "A = \\left( \\frac{16}{3} + 4 \\right) - \\left( \\frac{2}{3} + 2 \\right) = \\frac{14}{3} + 2 = \\frac{20}{3}",
        "explanation": "Subtracting the lower value from the upper value gives the exact area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The area of $R$ is $\\dfrac{20}{3}$ (square units)."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q051",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-two-curves", "parabola"],
  "questionText": "The curves $y = x^{2} + 1$ and $y = 9 - x^{2}$ enclose a finite region. Find the exact area of this region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the two curves equal to find where they meet",
        "workingLatex": "x^{2} + 1 = 9 - x^{2}",
        "explanation": "The curves intersect where they share the same $y$-value, and those intersection points give the $x$-limits of the enclosed region.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Collect the $x^{2}$ terms",
        "workingLatex": "x^{2} + x^{2} = 9 - 1 \\Rightarrow 2x^{2} = 8",
        "explanation": "Bringing both squared terms to one side turns the equation into a simple quadratic we can solve directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for $x$",
        "workingLatex": "x^{2} = 4 \\Rightarrow x = \\pm 2",
        "explanation": "Taking the square root gives both limits; the region stretches symmetrically from $x=-2$ to $x=2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which curve is on top",
        "workingLatex": "\\text{At } x = 0: \\ 9 - 0 = 9 \\ > \\ 0 + 1 = 1",
        "explanation": "Testing a point between the limits shows $y = 9 - x^{2}$ sits above $y = x^{2} + 1$, so it is the upper curve we subtract from.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the area as an integral of (upper $-$ lower)",
        "workingLatex": "A = \\int_{-2}^{2} \\left[ (9 - x^{2}) - (x^{2} + 1) \\right] \\,dx",
        "explanation": "The area trapped between two curves is the integral of the gap between them across the interval where they overlap.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the integrand",
        "workingLatex": "= \\int_{-2}^{2} \\left( 8 - 2x^{2} \\right) \\,dx",
        "explanation": "Combining like terms first keeps the integration clean and reduces the chance of a slip.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Use the symmetry of the integrand",
        "workingLatex": "= 2\\int_{0}^{2} \\left( 8 - 2x^{2} \\right) \\,dx",
        "explanation": "The integrand is even (only even powers of $x$), so the area from $-2$ to $2$ is just twice the area from $0$ to $2$, which is easier to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate term by term",
        "workingLatex": "= 2\\left[ 8x - \\frac{2x^{3}}{3} \\right]_{0}^{2}",
        "explanation": "Raising each power by one and dividing by the new power gives the antiderivative ready for the limits.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the upper limit $x = 2$",
        "workingLatex": "\\text{At } x = 2: \\ 8(2) - \\frac{2(2)^{3}}{3} = 16 - \\frac{16}{3}",
        "explanation": "Putting in the top limit gives the accumulated value there before we deal with the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Simplify that value",
        "workingLatex": "16 - \\frac{16}{3} = \\frac{48 - 16}{3} = \\frac{32}{3}",
        "explanation": "Writing $16$ over a common denominator of $3$ lets us combine the two terms into a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the lower limit $x = 0$",
        "workingLatex": "\\text{At } x = 0: \\ 0",
        "explanation": "Every term contains a factor of $x$, so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Apply the symmetry factor",
        "workingLatex": "A = 2\\left( \\frac{32}{3} - 0 \\right) = \\frac{64}{3}",
        "explanation": "Doubling the half-region gives the full enclosed area as an exact fraction.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Sense-check the result",
        "workingLatex": "\\frac{64}{3} \\approx 21.3, \\quad A > 0",
        "explanation": "The region spans from $x=-2$ to $x=2$ with a maximum height of $8$ at the centre, so an area of about $21.3$ is a sensible size, and a positive value confirms we subtracted the lower curve from the upper one the right way round.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{64}{3}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q052",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-two-curves", "cubic", "symmetry"],
  "questionText": "The curve $y = x^{3}$ and the line $y = x$ enclose two separate regions. Find the total area enclosed.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the curve equal to the line",
        "workingLatex": "x^{3} = x",
        "explanation": "The two graphs cross wherever their heights agree, and these crossings mark the edges of the enclosed regions.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Move everything to one side",
        "workingLatex": "x^{3} - x = 0",
        "explanation": "Setting the equation to zero lets us factorise and read off every intersection at once.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise fully",
        "workingLatex": "x(x - 1)(x + 1) = 0",
        "explanation": "Taking out $x$ leaves a difference of two squares, which factorises into two more brackets.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the intersection points",
        "workingLatex": "x = -1, \\ 0, \\ 1",
        "explanation": "There are three crossings, so the curve and line trap two distinct regions rather than one.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recognise that the regions must be handled separately",
        "workingLatex": "\\text{Regions: } [-1, 0] \\text{ and } [0, 1]",
        "explanation": "The graphs swap over at $x = 0$, so which one is on top changes; integrating straight through would let the two regions partly cancel.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the upper graph on $[0, 1]$",
        "workingLatex": "\\text{At } x = \\tfrac{1}{2}: \\ x = 0.5 \\ > \\ x^{3} = 0.125",
        "explanation": "On the right region the line lies above the cubic, so we integrate line minus curve there.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Set up the first area",
        "workingLatex": "A_{1} = \\int_{0}^{1} \\left( x - x^{3} \\right) \\,dx",
        "explanation": "The area is the integral of the vertical gap, upper minus lower, across this interval.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first region",
        "workingLatex": "= \\left[ \\frac{x^{2}}{2} - \\frac{x^{4}}{4} \\right]_{0}^{1}",
        "explanation": "Each power is raised by one and divided by the new power to give the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the first region",
        "workingLatex": "= \\left( \\frac{1}{2} - \\frac{1}{4} \\right) - 0 = \\frac{1}{4}",
        "explanation": "Substituting the limits gives the exact area of the region to the right of the origin.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the upper graph on $[-1, 0]$",
        "workingLatex": "\\text{At } x = -\\tfrac{1}{2}: \\ x^{3} = -0.125 \\ > \\ x = -0.5",
        "explanation": "On the left region the cubic is now the higher graph, so here we integrate curve minus line.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Set up the second area",
        "workingLatex": "A_{2} = \\int_{-1}^{0} \\left( x^{3} - x \\right) \\,dx",
        "explanation": "Choosing upper minus lower keeps the integrand positive so we get a genuine area, not a signed value.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Integrate the second region",
        "workingLatex": "= \\left[ \\frac{x^{4}}{4} - \\frac{x^{2}}{2} \\right]_{-1}^{0}",
        "explanation": "This is the antiderivative of the second integrand, ready to take the limits.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Evaluate the second region",
        "workingLatex": "= 0 - \\left( \\frac{1}{4} - \\frac{1}{2} \\right) = \\frac{1}{4}",
        "explanation": "Substituting shows the left region has the same area as the right, as the symmetry of the graphs suggests.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Add the two regions",
        "workingLatex": "A = A_{1} + A_{2} = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}",
        "explanation": "The total enclosed area is the sum of the two separate pieces.",
        "diagram": null
      }
    ],
    "finalAnswer": "The total enclosed area is $\\dfrac{1}{2}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q053",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-two-curves", "parabola"],
  "questionText": "The parabolas $y = x^{2} - 4x$ and $y = 2x - x^{2}$ enclose a finite region. Find its exact area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the two curves equal",
        "workingLatex": "x^{2} - 4x = 2x - x^{2}",
        "explanation": "Equal $y$-values locate the crossing points, which become the limits of the enclosed area.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Gather all terms on one side",
        "workingLatex": "x^{2} + x^{2} - 4x - 2x = 0 \\Rightarrow 2x^{2} - 6x = 0",
        "explanation": "Collecting everything to one side gives a quadratic equal to zero, which we can factorise.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise",
        "workingLatex": "2x(x - 3) = 0",
        "explanation": "Both terms share a factor of $2x$, so taking it out reveals the roots immediately.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the limits",
        "workingLatex": "x = 0, \\ x = 3",
        "explanation": "These are the two $x$-values where the parabolas meet, so the region runs from $0$ to $3$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Decide which curve is upper",
        "workingLatex": "\\text{At } x = 1: \\ 2(1) - 1 = 1 \\ > \\ 1 - 4 = -3",
        "explanation": "A test point inside the interval shows $y = 2x - x^{2}$ is the higher curve, so it goes first in the subtraction.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the area integral",
        "workingLatex": "A = \\int_{0}^{3} \\left[ (2x - x^{2}) - (x^{2} - 4x) \\right] \\,dx",
        "explanation": "Integrating the gap upper minus lower between the crossings gives the trapped area.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the integrand",
        "workingLatex": "= \\int_{0}^{3} \\left( 6x - 2x^{2} \\right) \\,dx",
        "explanation": "Expanding the minus sign and combining like terms makes the integration straightforward.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Confirm the integrand is non-negative on $[0,3]$",
        "workingLatex": "6x - 2x^{2} = 2x(3 - x) \\ge 0 \\ \\text{for } 0 \\le x \\le 3",
        "explanation": "Since the gap never dips below zero across the interval, the plain integral really does give the area with no cancellation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ 3x^{2} - \\frac{2x^{3}}{3} \\right]_{0}^{3}",
        "explanation": "Raising each power and dividing by the new power gives the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the upper limit $x = 3$",
        "workingLatex": "\\text{At } x = 3: \\ 3(9) - \\frac{2(27)}{3} = 27 - 18",
        "explanation": "Putting in the top limit gives the accumulated value there.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Simplify the upper value",
        "workingLatex": "= 9",
        "explanation": "The two terms combine to a whole number, a good sign the numbers were chosen cleanly.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Substitute the lower limit $x = 0$",
        "workingLatex": "\\text{At } x = 0: \\ 0",
        "explanation": "Every term has a factor of $x$, so the lower limit adds nothing.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Subtract to finish",
        "workingLatex": "A = 9 - 0 = 9",
        "explanation": "The difference of the two limit values is the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $9$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q054",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "parabola"],
  "questionText": "The curve $y = x^{2}$ and the line $y = x + 2$ enclose a finite region. Find its exact area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the curve equal to the line",
        "workingLatex": "x^{2} = x + 2",
        "explanation": "The curve and line meet where their $y$-values match, giving the limits of the enclosed region.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Rearrange into a quadratic",
        "workingLatex": "x^{2} - x - 2 = 0",
        "explanation": "Moving everything to one side prepares the equation for factorising.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise",
        "workingLatex": "(x - 2)(x + 1) = 0",
        "explanation": "We need two numbers multiplying to $-2$ and adding to $-1$, namely $-2$ and $+1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the limits",
        "workingLatex": "x = -1, \\ x = 2",
        "explanation": "These crossings are the left and right edges of the region.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Decide which graph is upper",
        "workingLatex": "\\text{At } x = 0: \\ 0 + 2 = 2 \\ > \\ 0^{2} = 0",
        "explanation": "The test point shows the line lies above the parabola between the crossings, so the line is subtracted from first.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-1}^{2} \\left[ (x + 2) - x^{2} \\right] \\,dx",
        "explanation": "Integrating upper minus lower across the interval gives the area between them.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{2}}{2} + 2x - \\frac{x^{3}}{3} \\right]_{-1}^{2}",
        "explanation": "Each term is integrated by raising its power and dividing by the new power.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit $x = 2$",
        "workingLatex": "\\text{At } x = 2: \\ \\frac{4}{2} + 4 - \\frac{8}{3} = 2 + 4 - \\frac{8}{3}",
        "explanation": "Evaluating at the top limit first keeps the two limit calculations tidy and separate.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify the upper value",
        "workingLatex": "= 6 - \\frac{8}{3} = \\frac{18 - 8}{3} = \\frac{10}{3}",
        "explanation": "Combining over a common denominator gives a single fraction for the top limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the lower limit $x = -1$",
        "workingLatex": "\\text{At } x = -1: \\ \\frac{1}{2} - 2 + \\frac{1}{3}",
        "explanation": "Care with signs matters here: $-\\frac{x^{3}}{3}$ becomes $+\\frac{1}{3}$ because $(-1)^{3} = -1$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Simplify the lower value",
        "workingLatex": "= \\frac{3}{6} - \\frac{12}{6} + \\frac{2}{6} = -\\frac{7}{6}",
        "explanation": "Using a common denominator of $6$ combines the three terms into one fraction.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Subtract the lower value from the upper",
        "workingLatex": "A = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{20}{6} + \\frac{7}{6}",
        "explanation": "Subtracting a negative adds it on; writing both over $6$ lets us combine them.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Finish the calculation",
        "workingLatex": "= \\frac{27}{6} = \\frac{9}{2}",
        "explanation": "Simplifying the fraction gives the exact enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{9}{2}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q055",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area-below-x-axis", "cubic", "splitting-at-roots"],
  "questionText": "Find the total area of the finite region enclosed between the curve $y = x^{3} - 4x$ and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the $x$-axis",
        "workingLatex": "x^{3} - 4x = 0",
        "explanation": "The curve touches the $x$-axis where $y = 0$; these roots mark the ends of the enclosed loops.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise fully",
        "workingLatex": "x(x^{2} - 4) = 0 \\Rightarrow x(x - 2)(x + 2) = 0",
        "explanation": "Taking out $x$ leaves a difference of squares, giving all three roots cleanly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "List the roots",
        "workingLatex": "x = -2, \\ 0, \\ 2",
        "explanation": "The curve crosses the axis three times, forming two separate loops.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note that the curve crosses at the origin",
        "workingLatex": "\\text{Crossing at } x = 0 \\Rightarrow \\text{a loop on each side}",
        "explanation": "Because the curve passes through the axis at $x = 0$, one loop sits on each side and we must treat them separately.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the sign on $[0, 2]$",
        "workingLatex": "\\text{At } x = 1: \\ 1 - 4 = -3 < 0 \\ (\\text{below axis})",
        "explanation": "On the right loop the curve dips below the axis, so this integral will come out negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the sign on $[-2, 0]$",
        "workingLatex": "\\text{At } x = -1: \\ -1 + 4 = 3 > 0 \\ (\\text{above axis})",
        "explanation": "On the left loop the curve rises above the axis, so that integral will be positive.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Explain why we must split",
        "workingLatex": "\\int_{-2}^{2} \\left( x^{3} - 4x \\right) \\,dx = 0 \\ (\\text{signs cancel})",
        "explanation": "One integral across the whole span would let the positive and negative parts cancel to zero, which is not the area; we must integrate each loop and add the sizes.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write down the antiderivative",
        "workingLatex": "\\int \\left( x^{3} - 4x \\right) \\,dx = \\frac{x^{4}}{4} - 2x^{2}",
        "explanation": "Integrating each power once gives the function we evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the right loop $[0, 2]$",
        "workingLatex": "\\left[ \\frac{x^{4}}{4} - 2x^{2} \\right]_{0}^{2} = (4 - 8) - 0 = -4",
        "explanation": "The negative sign confirms this loop lies below the axis, as expected.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Take the size of the right loop",
        "workingLatex": "\\text{Area}_{\\text{right}} = \\left| -4 \\right| = 4",
        "explanation": "Area is always positive, so we take the modulus of the signed integral.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the left loop $[-2, 0]$",
        "workingLatex": "\\left[ \\frac{x^{4}}{4} - 2x^{2} \\right]_{-2}^{0} = 0 - (4 - 8) = 4",
        "explanation": "This loop sits above the axis, so the integral is already positive.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Take the size of the left loop",
        "workingLatex": "\\text{Area}_{\\text{left}} = \\left| 4 \\right| = 4",
        "explanation": "Taking the modulus keeps our method consistent for both loops.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Add the two loop areas",
        "workingLatex": "A = 4 + 4 = 8",
        "explanation": "Summing the sizes of the two loops gives the total enclosed area.",
        "diagram": null
      }
    ],
    "finalAnswer": "The total enclosed area is $8$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q056",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area-below-x-axis", "cubic", "splitting-at-roots"],
  "questionText": "Find the total area of the finite region enclosed between the curve $y = x^{3} - 9x$ and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the $x$-axis",
        "workingLatex": "x^{3} - 9x = 0",
        "explanation": "Setting $y = 0$ gives the roots that bound the two loops of the curve.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise fully",
        "workingLatex": "x(x^{2} - 9) = 0 \\Rightarrow x(x - 3)(x + 3) = 0",
        "explanation": "Removing the common factor $x$ leaves a difference of squares to factorise.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "List the roots",
        "workingLatex": "x = -3, \\ 0, \\ 3",
        "explanation": "Three crossings mean the curve forms two separate loops with the axis.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note the crossing at the origin",
        "workingLatex": "\\text{Crossing at } x = 0 \\Rightarrow \\text{a loop on each side}",
        "explanation": "Passing through the axis at $x = 0$ means one loop lies above and one below, so we handle them separately.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the sign on $[0, 3]$",
        "workingLatex": "\\text{At } x = 1: \\ 1 - 9 = -8 < 0 \\ (\\text{below axis})",
        "explanation": "The right loop lies below the axis, so its integral will be negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the sign on $[-3, 0]$",
        "workingLatex": "\\text{At } x = -1: \\ -1 + 9 = 8 > 0 \\ (\\text{above axis})",
        "explanation": "The left loop lies above the axis, so its integral will be positive.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Explain why splitting is essential",
        "workingLatex": "\\int_{-3}^{3} \\left( x^{3} - 9x \\right) \\,dx = 0 \\ (\\text{cancels})",
        "explanation": "A single integral over the whole range cancels to zero because the loops have opposite signs; we must add the sizes of each piece instead.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write down the antiderivative",
        "workingLatex": "\\int \\left( x^{3} - 9x \\right) \\,dx = \\frac{x^{4}}{4} - \\frac{9x^{2}}{2}",
        "explanation": "Integrating each term gives the function to evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the right loop $[0, 3]$",
        "workingLatex": "\\left[ \\frac{x^{4}}{4} - \\frac{9x^{2}}{2} \\right]_{0}^{3} = \\frac{81}{4} - \\frac{81}{2}",
        "explanation": "Substituting $x = 3$ gives the two terms, which we now combine.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Simplify and take the size",
        "workingLatex": "= \\frac{81}{4} - \\frac{162}{4} = -\\frac{81}{4} \\Rightarrow \\text{area} = \\frac{81}{4}",
        "explanation": "The negative confirms this loop is below the axis, so we take its modulus for the area.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the left loop $[-3, 0]$",
        "workingLatex": "\\left[ \\frac{x^{4}}{4} - \\frac{9x^{2}}{2} \\right]_{-3}^{0} = 0 - \\left( \\frac{81}{4} - \\frac{81}{2} \\right)",
        "explanation": "Substituting the limits for the left loop; the even powers make the value at $-3$ match the value at $3$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Simplify the left loop",
        "workingLatex": "= \\frac{81}{4} \\Rightarrow \\text{area} = \\frac{81}{4}",
        "explanation": "This loop is above the axis, so the integral is already positive and equals its area.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Add the two loop areas",
        "workingLatex": "A = \\frac{81}{4} + \\frac{81}{4} = \\frac{162}{4} = \\frac{81}{2}",
        "explanation": "The total enclosed area is the sum of the two equal loops.",
        "diagram": null
      }
    ],
    "finalAnswer": "The total enclosed area is $\\dfrac{81}{2}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q057",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area-below-x-axis", "cubic", "splitting-at-roots"],
  "questionText": "Find the total area of the finite region enclosed between the curve $y = x^{3} - 2x^{2} - 3x$ and the $x$-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the $x$-axis",
        "workingLatex": "x^{3} - 2x^{2} - 3x = 0",
        "explanation": "The roots where $y = 0$ mark the boundaries of the regions trapped between the curve and the axis.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take out the common factor",
        "workingLatex": "x(x^{2} - 2x - 3) = 0",
        "explanation": "Every term has a factor of $x$, so removing it leaves a quadratic to factorise.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise the quadratic",
        "workingLatex": "x(x - 3)(x + 1) = 0",
        "explanation": "We need two numbers multiplying to $-3$ and adding to $-2$, namely $-3$ and $+1$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "List the roots",
        "workingLatex": "x = -1, \\ 0, \\ 3",
        "explanation": "These three crossings give two separate regions, one on each side of the origin.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Identify the two regions",
        "workingLatex": "\\text{Regions: } [-1, 0] \\text{ and } [0, 3]",
        "explanation": "The curve crosses the axis at $x = 0$, so the region there switches from one side of the axis to the other.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the sign on $[-1, 0]$",
        "workingLatex": "\\text{At } x = -\\tfrac{1}{2}: \\ -0.125 - 0.5 + 1.5 = 0.875 > 0 \\ (\\text{above})",
        "explanation": "This region lies above the axis, so its integral will come out positive.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the sign on $[0, 3]$",
        "workingLatex": "\\text{At } x = 1: \\ 1 - 2 - 3 = -4 < 0 \\ (\\text{below})",
        "explanation": "This region lies below the axis, so its integral will be negative and needs a modulus.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the plan",
        "workingLatex": "\\text{Split at } x = 0, \\ \\text{add the two moduli}",
        "explanation": "Because the regions are on opposite sides of the axis, integrating straight through would let them partly cancel, so we compute each and add the sizes.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the antiderivative",
        "workingLatex": "F(x) = \\frac{x^{4}}{4} - \\frac{2x^{3}}{3} - \\frac{3x^{2}}{2}",
        "explanation": "Integrating each term of the cubic gives a single function to evaluate at the limits.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate $F(-1)$",
        "workingLatex": "F(-1) = \\frac{1}{4} + \\frac{2}{3} - \\frac{3}{2} = \\frac{3 + 8 - 18}{12} = -\\frac{7}{12}",
        "explanation": "Watch the signs: $-\\frac{2x^{3}}{3}$ becomes $+\\frac{2}{3}$ since $(-1)^{3} = -1$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compute the first region $[-1, 0]$",
        "workingLatex": "\\int_{-1}^{0} = F(0) - F(-1) = 0 - \\left( -\\frac{7}{12} \\right) = \\frac{7}{12}",
        "explanation": "The positive result matches our earlier sign check, so this is already the area of the left region.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate $F(3)$",
        "workingLatex": "F(3) = \\frac{81}{4} - 18 - \\frac{27}{2} = \\frac{81 - 72 - 54}{4} = -\\frac{45}{4}",
        "explanation": "Writing the whole numbers over a denominator of $4$ lets the three terms combine into one fraction.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Compute the second region $[0, 3]$",
        "workingLatex": "\\int_{0}^{3} = F(3) - F(0) = -\\frac{45}{4} \\Rightarrow \\text{area} = \\frac{45}{4}",
        "explanation": "The negative value confirms the region is below the axis, so we take its modulus for the area.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Add the two areas",
        "workingLatex": "A = \\frac{7}{12} + \\frac{45}{4} = \\frac{7}{12} + \\frac{135}{12} = \\frac{142}{12} = \\frac{71}{6}",
        "explanation": "Adding the sizes of the two pieces over a common denominator gives the exact total area.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Confirm why splitting mattered",
        "workingLatex": "\\int_{-1}^{3} = -\\frac{32}{3}, \\ \\left| -\\frac{32}{3} \\right| = \\frac{32}{3} \\ne \\frac{71}{6}",
        "explanation": "A single integral over the whole span gives a smaller value because the pieces cancel, proving the split was necessary.",
        "diagram": null
      }
    ],
    "finalAnswer": "The total enclosed area is $\\dfrac{71}{6}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q058",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "find-unknown-limit", "factor-theorem"],
  "questionText": "The region $R$ is bounded by the curve $y = x^{2} + 1$, the $x$-axis, the $y$-axis and the line $x = k$, where $k > 0$. Given that the area of $R$ is $12$, find the value of $k$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the curve stays above the axis",
        "workingLatex": "x^{2} + 1 > 0 \\ \\text{for all } x",
        "explanation": "Because the curve never dips below the axis, the area is a single integral with no splitting or moduli needed.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the area as an integral",
        "workingLatex": "A = \\int_{0}^{k} \\left( x^{2} + 1 \\right) \\,dx",
        "explanation": "The region runs from the $y$-axis at $x = 0$ across to the line $x = k$, so those are the limits.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate term by term",
        "workingLatex": "= \\left[ \\frac{x^{3}}{3} + x \\right]_{0}^{k}",
        "explanation": "Raising each power and dividing by the new power gives the antiderivative.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the upper limit $x = k$",
        "workingLatex": "\\text{At } x = k: \\ \\frac{k^{3}}{3} + k",
        "explanation": "The area is left in terms of the unknown $k$ so we can form an equation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the lower limit $x = 0$",
        "workingLatex": "\\text{At } x = 0: \\ 0",
        "explanation": "Both terms vanish at zero, so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the area in terms of $k$",
        "workingLatex": "A = \\frac{k^{3}}{3} + k",
        "explanation": "This expression gives the area for any positive $k$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Set the area equal to $12$",
        "workingLatex": "\\frac{k^{3}}{3} + k = 12",
        "explanation": "Using the given area turns the problem into an equation for $k$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Clear the fraction",
        "workingLatex": "k^{3} + 3k = 36",
        "explanation": "Multiplying every term by $3$ removes the denominator and simplifies the algebra.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Form a cubic equal to zero",
        "workingLatex": "k^{3} + 3k - 36 = 0",
        "explanation": "Bringing everything to one side sets up the cubic ready to test for a root.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Test a likely integer root",
        "workingLatex": "k = 3: \\ 27 + 9 - 36 = 0 \\ \\checkmark",
        "explanation": "Trying small factors of $36$, the value $k = 3$ makes the cubic zero, so $(k - 3)$ is a factor.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Factorise out $(k - 3)$",
        "workingLatex": "(k - 3)(k^{2} + 3k + 12) = 0",
        "explanation": "Dividing the cubic by $(k - 3)$ leaves a quadratic factor holding any other roots.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the quadratic factor for real roots",
        "workingLatex": "k^{2} + 3k + 12: \\ \\Delta = 9 - 48 = -39 < 0",
        "explanation": "A negative discriminant means the quadratic has no real roots, so $k = 3$ is the only real solution.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the value of $k$",
        "workingLatex": "\\therefore k = 3 \\quad (k > 0)",
        "explanation": "The single real root is positive, matching the condition on $k$, so it is our answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "The value of $k$ is $3$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q059",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "triangle-decomposition"],
  "questionText": "The line $y = 2x$ meets the curve $y = x^{2}$ at the origin $O$ and at the point $A$. By finding the area of the appropriate triangle and subtracting the area under the curve, find the exact area of the region enclosed between the line and the curve.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the line meets the curve",
        "workingLatex": "x^{2} = 2x",
        "explanation": "The enclosed region is bounded by the two crossings, so we start by finding them.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Solve the equation",
        "workingLatex": "x^{2} - 2x = 0 \\Rightarrow x(x - 2) = 0",
        "explanation": "Factorising out $x$ gives the two crossing points directly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the intersection points",
        "workingLatex": "x = 0, \\ x = 2 \\Rightarrow O(0, 0), \\ A(2, 4)",
        "explanation": "The point $A$ lies at $x = 2$; substituting into either equation gives $y = 4$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Identify which graph is upper",
        "workingLatex": "\\text{At } x = 1: \\ 2(1) = 2 \\ > \\ 1^{2} = 1",
        "explanation": "Between the crossings the line lies above the curve, so the enclosed region sits under the line and over the curve.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Describe the decomposition",
        "workingLatex": "\\text{Area} = (\\text{triangle under the line}) - (\\text{area under the curve})",
        "explanation": "The region equals the triangle beneath the line down to the $x$-axis, with the area beneath the curve removed.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Introduce the foot of the vertical from $A$",
        "workingLatex": "B(2, 0)",
        "explanation": "Dropping a vertical from $A$ to the $x$-axis creates a right-angled triangle $OAB$ whose area is easy to find.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the base and height of the triangle",
        "workingLatex": "\\text{base } OB = 2, \\quad \\text{height } AB = 4",
        "explanation": "The base runs along the $x$-axis from $O$ to $B$, and the height is the vertical distance from $B$ up to $A$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Compute the triangle area",
        "workingLatex": "\\text{Triangle} = \\tfrac{1}{2} \\times 2 \\times 4 = 4",
        "explanation": "Half base times height gives the area of the triangle sitting under the line.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Set up the area under the curve",
        "workingLatex": "\\int_{0}^{2} x^{2} \\,dx = \\left[ \\frac{x^{3}}{3} \\right]_{0}^{2}",
        "explanation": "The region below the parabola from $x = 0$ to $x = 2$ is found by integrating the curve.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the area under the curve",
        "workingLatex": "= \\frac{8}{3} - 0 = \\frac{8}{3}",
        "explanation": "Substituting the limits gives the exact area beneath the parabola.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Subtract to find the enclosed region",
        "workingLatex": "\\text{Area} = 4 - \\frac{8}{3} = \\frac{12 - 8}{3} = \\frac{4}{3}",
        "explanation": "Removing the area under the curve from the triangle leaves exactly the region between the line and the curve.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Cross-check with a direct integral",
        "workingLatex": "\\int_{0}^{2} (2x - x^{2}) \\,dx = \\left[ x^{2} - \\frac{x^{3}}{3} \\right]_{0}^{2}",
        "explanation": "Integrating upper minus lower directly should give the same answer, which is a good confidence check.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Confirm the two methods agree",
        "workingLatex": "= 4 - \\frac{8}{3} = \\frac{4}{3} \\ \\checkmark",
        "explanation": "The direct integral matches the triangle method, confirming the area is correct.",
        "diagram": null
      }
    ],
    "finalAnswer": "The enclosed area is $\\dfrac{4}{3}$ square units."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q060",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area-between-curve-and-line", "find-constant"],
  "questionText": "The horizontal line $y = k$ (with $k > 0$) and the curve $y = x^{2}$ enclose a finite region. Given that the area of this region is $36$, find the value of $k$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the line meets the curve",
        "workingLatex": "x^{2} = k \\Rightarrow x = \\pm\\sqrt{k} \\quad (k > 0)",
        "explanation": "The line and parabola cross where their heights agree; the two symmetric crossings give the limits.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Decide which graph is upper",
        "workingLatex": "\\text{At } x = 0: \\ k \\ > \\ 0^{2} = 0",
        "explanation": "Since $k$ is positive, the horizontal line sits above the parabola between the crossings, so it is the upper boundary.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{-\\sqrt{k}}^{\\sqrt{k}} \\left( k - x^{2} \\right) \\,dx",
        "explanation": "The area is the integral of the gap, line minus curve, between the two intersection points.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use symmetry",
        "workingLatex": "= 2\\int_{0}^{\\sqrt{k}} \\left( k - x^{2} \\right) \\,dx",
        "explanation": "The integrand is even, so the whole area is twice the area from $0$ to $\\sqrt{k}$, which is simpler.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate term by term",
        "workingLatex": "= 2\\left[ kx - \\frac{x^{3}}{3} \\right]_{0}^{\\sqrt{k}}",
        "explanation": "Treating $k$ as a constant, each term integrates in the usual way.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the upper limit $x = \\sqrt{k}$",
        "workingLatex": "\\text{At } x = \\sqrt{k}: \\ k\\sqrt{k} - \\frac{(\\sqrt{k})^{3}}{3}",
        "explanation": "Putting the limit in leaves an expression in $\\sqrt{k}$ that we can tidy up.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the powers of $\\sqrt{k}$",
        "workingLatex": "(\\sqrt{k})^{3} = k\\sqrt{k} = k^{3/2}",
        "explanation": "Writing both terms as $k^{3/2}$ makes them easy to combine.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Combine the two terms",
        "workingLatex": "k^{3/2} - \\frac{k^{3/2}}{3} = \\frac{2}{3} k^{3/2}",
        "explanation": "Subtracting one third of the term from the whole leaves two thirds of it.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the lower limit $x = 0$",
        "workingLatex": "\\text{At } x = 0: \\ 0",
        "explanation": "Both terms vanish at zero, so the lower limit adds nothing.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Apply the symmetry factor",
        "workingLatex": "A = 2 \\times \\frac{2}{3} k^{3/2} = \\frac{4}{3} k^{3/2}",
        "explanation": "Doubling the half-area gives the full enclosed area in terms of $k$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Set the area equal to $36$",
        "workingLatex": "\\frac{4}{3} k^{3/2} = 36",
        "explanation": "Using the given area turns the expression into an equation for $k$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Isolate $k^{3/2}$",
        "workingLatex": "k^{3/2} = 27",
        "explanation": "Multiplying both sides by $\\tfrac{3}{4}$ leaves $k^{3/2}$ on its own.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Solve for $k$",
        "workingLatex": "k = 27^{2/3} = \\left( 27^{1/3} \\right)^{2} = 3^{2} = 9",
        "explanation": "Raising both sides to the power $\\tfrac{2}{3}$ undoes the $\\tfrac{3}{2}$ power; the cube root of $27$ is $3$, squared to give $9$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The value of $k$ is $9$."
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area", "x-axis", "split-region"],
  "questionText": "The curve $C$ has equation $y = x^{2} - 4x + 3$. Find the total area of the finite regions enclosed between $C$ and the $x$-axis for $0 \\le x \\le 4$, giving your answer as an exact value.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Factorise to locate where the curve meets the x-axis",
        "workingLatex": "x^{2} - 4x + 3 = (x - 1)(x - 3)",
        "explanation": "The curve crosses the $x$-axis where $y = 0$, so at $x = 1$ and $x = 3$. These crossing points tell us where the curve switches between being above and below the axis.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Work out the sign of the curve on each part of the interval",
        "workingLatex": "0 \\le x < 1:\\; y > 0, \\quad 1 < x < 3:\\; y < 0, \\quad 3 < x \\le 4:\\; y > 0",
        "explanation": "Testing a point in each section (for example $x = 2$ gives $y = -1$) shows the curve dips below the axis between $1$ and $3$ but is above it either side. A plain integral would let these parts cancel, so we must treat them separately.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State how the total area is built up",
        "workingLatex": "A = \\left| \\int_{0}^{1} y \\,dx \\right| + \\left| \\int_{1}^{3} y \\,dx \\right| + \\left| \\int_{3}^{4} y \\,dx \\right|",
        "explanation": "Total area means we add the size of each piece. Taking the modulus of each integral makes any negative (below-axis) piece count as a positive area.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the antiderivative once, to use on every interval",
        "workingLatex": "\\int \\left(x^{2} - 4x + 3\\right) \\,dx = \\frac{x^{3}}{3} - 2x^{2} + 3x",
        "explanation": "Raising each power by one and dividing by the new power gives a single function $F(x)$ we can reuse; no $+c$ is needed for definite integrals.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate F at x = 0",
        "workingLatex": "F(0) = 0",
        "explanation": "Every term contains an $x$, so substituting $x = 0$ gives zero. This will be the lower value for the first piece.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate F at x = 1",
        "workingLatex": "F(1) = \\frac{1}{3} - 2 + 3 = \\frac{4}{3}",
        "explanation": "Substituting $x = 1$ carefully and adding as fractions gives $\\frac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate F at x = 3",
        "workingLatex": "F(3) = 9 - 18 + 9 = 0",
        "explanation": "At $x = 3$ the three terms cancel exactly to zero, which is convenient for the middle and last pieces.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate F at x = 4",
        "workingLatex": "F(4) = \\frac{64}{3} - 32 + 12 = \\frac{64}{3} - 20 = \\frac{4}{3}",
        "explanation": "Writing $20 = \\frac{60}{3}$ lets us subtract cleanly to get $\\frac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "First region: integrate over [0, 1]",
        "workingLatex": "\\int_{0}^{1} y \\,dx = F(1) - F(0) = \\frac{4}{3} - 0 = \\frac{4}{3}",
        "explanation": "This piece is above the axis, so the integral is already positive and equals its area.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Second region: integrate over [1, 3]",
        "workingLatex": "\\int_{1}^{3} y \\,dx = F(3) - F(1) = 0 - \\frac{4}{3} = -\\frac{4}{3}",
        "explanation": "This piece lies below the axis, so the integral comes out negative, exactly as we expected.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Convert the below-axis integral to an area",
        "workingLatex": "\\left| -\\frac{4}{3} \\right| = \\frac{4}{3}",
        "explanation": "Area cannot be negative, so we take the size of the result. The middle region has area $\\frac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Third region: integrate over [3, 4]",
        "workingLatex": "\\int_{3}^{4} y \\,dx = F(4) - F(3) = \\frac{4}{3} - 0 = \\frac{4}{3}",
        "explanation": "The final piece is above the axis again, giving a positive area of $\\frac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Add the three areas",
        "workingLatex": "A = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3}",
        "explanation": "The three regions happen to be equal in size, so we simply combine three equal thirds.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the total area",
        "workingLatex": "A = \\frac{12}{3} = 4",
        "explanation": "Adding the equal pieces gives a whole-number total, confirming the split was handled correctly.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A = 4$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area", "curve-and-line"],
  "questionText": "The curve $C$ has equation $y = 9 - x^{2}$. The line $L$ passes through the point where $C$ meets the positive $x$-axis and the point where $C$ meets the $y$-axis. Find the exact area of the finite region enclosed between $C$ and $L$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the x-axis",
        "workingLatex": "9 - x^{2} = 0 \\;\\Rightarrow\\; x^{2} = 9 \\;\\Rightarrow\\; x = \\pm 3",
        "explanation": "Setting $y = 0$ gives the $x$-intercepts. We want the positive one, so the relevant point is $(3, 0)$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find where the curve meets the y-axis",
        "workingLatex": "x = 0 \\;\\Rightarrow\\; y = 9 \\;\\Rightarrow\\; (0, 9)",
        "explanation": "Putting $x = 0$ into the curve gives the $y$-intercept $(0, 9)$. The line $L$ joins this point to $(3, 0)$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the gradient of the line L",
        "workingLatex": "m = \\frac{0 - 9}{3 - 0} = -3",
        "explanation": "Using the two endpoints, the change in $y$ over the change in $x$ gives the slope of the straight line.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the equation of the line L",
        "workingLatex": "y = 9 - 3x",
        "explanation": "The line cuts the $y$-axis at $9$ with gradient $-3$, so its equation is $y = 9 - 3x$. A quick check: at $x = 3$, $y = 0$, as required.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Decide which graph is on top between the intersections",
        "workingLatex": "\\text{At } x = 1:\\; \\text{curve} = 8, \\;\\; \\text{line} = 6",
        "explanation": "Testing a point between $0$ and $3$ shows the curve sits above the line, so the region height is (curve $-$ line).",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{0}^{3} \\left[ \\left(9 - x^{2}\\right) - \\left(9 - 3x\\right) \\right] \\,dx",
        "explanation": "The area between two graphs is the integral of the upper curve minus the lower one, taken between the points where they meet.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the integrand",
        "workingLatex": "\\left(9 - x^{2}\\right) - \\left(9 - 3x\\right) = 3x - x^{2}",
        "explanation": "The constant $9$ cancels, leaving a simple quadratic that is easy to integrate.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the first term",
        "workingLatex": "\\int 3x \\,dx = \\frac{3x^{2}}{2}",
        "explanation": "Raising the power of $x$ by one and dividing by the new power gives $\\frac{3x^{2}}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the second term",
        "workingLatex": "\\int -x^{2} \\,dx = -\\frac{x^{3}}{3}",
        "explanation": "The same rule applied to $-x^{2}$ gives $-\\frac{x^{3}}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the antiderivative with limits",
        "workingLatex": "A = \\left[ \\frac{3x^{2}}{2} - \\frac{x^{3}}{3} \\right]_{0}^{3}",
        "explanation": "We now substitute the upper limit and subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the upper limit x = 3",
        "workingLatex": "\\frac{3(9)}{2} - \\frac{27}{3} = \\frac{27}{2} - 9",
        "explanation": "Putting $x = 3$ into each term gives $\\frac{27}{2}$ and $9$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine the upper-limit terms",
        "workingLatex": "\\frac{27}{2} - 9 = \\frac{27}{2} - \\frac{18}{2} = \\frac{9}{2}",
        "explanation": "Writing $9$ as $\\frac{18}{2}$ lets us subtract cleanly.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Substitute the lower limit x = 0",
        "workingLatex": "\\frac{3(0)}{2} - \\frac{0}{3} = 0",
        "explanation": "At $x = 0$ every term vanishes, so the lower limit contributes nothing.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the area",
        "workingLatex": "A = \\frac{9}{2} - 0 = \\frac{9}{2}",
        "explanation": "The enclosed region has exact area $\\frac{9}{2}$ square units.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A = \\dfrac{9}{2}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area", "shaded-region", "curve-and-line"],
  "questionText": "The point $P(2, 4)$ lies on the curve $y = x^{2}$. The line $L$ joins $P$ to the point $Q(4, 0)$ on the $x$-axis. The finite region $R$ is bounded by the $x$-axis, the arc of the curve from the origin to $P$, and the line segment $PQ$. Find the exact area of $R$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Understand how the region splits",
        "workingLatex": "R = R_{1}\\,(0 \\le x \\le 2) + R_{2}\\,(2 \\le x \\le 4)",
        "explanation": "The top boundary changes at $P$: from $0$ to $2$ it is the curve, and from $2$ to $4$ it is the straight line. We handle each part separately and add them.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm P lies on the curve",
        "workingLatex": "y = 2^{2} = 4 \\;\\Rightarrow\\; P(2, 4) \\text{ is on } y = x^{2}",
        "explanation": "Checking $P$ makes sure the curve and line really meet there, so the two pieces join up neatly.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the curved part",
        "workingLatex": "R_{1} = \\int_{0}^{2} x^{2} \\,dx",
        "explanation": "The area under the curve down to the $x$-axis, from the origin to $x = 2$, is a straightforward definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the curve",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "Raising the power by one and dividing gives $\\frac{x^{3}}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the curved part",
        "workingLatex": "R_{1} = \\left[ \\frac{x^{3}}{3} \\right]_{0}^{2} = \\frac{8}{3} - 0 = \\frac{8}{3}",
        "explanation": "Substituting the limits gives the area of the curved piece as $\\frac{8}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the gradient of line PQ",
        "workingLatex": "m = \\frac{0 - 4}{4 - 2} = -2",
        "explanation": "Using the endpoints $P(2, 4)$ and $Q(4, 0)$, the slope is the change in $y$ over the change in $x$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the equation of PQ",
        "workingLatex": "y = -2x + 8",
        "explanation": "Through $Q(4, 0)$ with gradient $-2$: $0 = -8 + 8$ checks out, so the line is $y = -2x + 8$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set up the straight part",
        "workingLatex": "R_{2} = \\int_{2}^{4} \\left(-2x + 8\\right) \\,dx",
        "explanation": "The area under the line down to the $x$-axis, from $x = 2$ to $x = 4$, is the second piece.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the line",
        "workingLatex": "\\int \\left(-2x + 8\\right) \\,dx = -x^{2} + 8x",
        "explanation": "Integrating term by term gives $-x^{2} + 8x$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the upper limit x = 4",
        "workingLatex": "-(4)^{2} + 8(4) = -16 + 32 = 16",
        "explanation": "Evaluating the antiderivative at the top limit gives $16$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the lower limit x = 2",
        "workingLatex": "-(2)^{2} + 8(2) = -4 + 16 = 12",
        "explanation": "Evaluating at the bottom limit gives $12$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the straight part",
        "workingLatex": "R_{2} = 16 - 12 = 4",
        "explanation": "Subtracting gives the area of the triangular piece as $4$. (As a check, it is a triangle of base $2$ and height $4$: $\\tfrac{1}{2}\\times 2 \\times 4 = 4$.)",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Add the two pieces",
        "workingLatex": "R = \\frac{8}{3} + 4",
        "explanation": "The total shaded area is the curved part plus the triangular part.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Combine into a single fraction",
        "workingLatex": "R = \\frac{8}{3} + \\frac{12}{3} = \\frac{20}{3}",
        "explanation": "Writing $4$ as $\\frac{12}{3}$ lets us add to a single exact value.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "State the answer",
        "workingLatex": "R = \\frac{20}{3}",
        "explanation": "The finite region $R$ has exact area $\\frac{20}{3}$ square units.",
        "diagram": null
      }
    ],
    "finalAnswer": "$R = \\dfrac{20}{3}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "find-limit", "quadratic"],
  "questionText": "Given that $\\int_{0}^{k} \\left(4x + 3\\right) \\,dx = 27$ and $k > 0$, find the exact value of $k$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the type of problem",
        "workingLatex": "\\int_{0}^{k} \\left(4x + 3\\right) \\,dx = 27",
        "explanation": "Here the limit itself is unknown. The plan is to integrate first, then set the result equal to $27$ and solve for $k$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the first term",
        "workingLatex": "\\int 4x \\,dx = 2x^{2}",
        "explanation": "Raising the power by one and dividing by it turns $4x$ into $2x^{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the second term",
        "workingLatex": "\\int 3 \\,dx = 3x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the limits 0 and k",
        "workingLatex": "\\left[ 2x^{2} + 3x \\right]_{0}^{k} = \\left(2k^{2} + 3k\\right) - 0",
        "explanation": "Substituting $x = k$ then subtracting the value at $x = 0$ (which is zero) gives an expression in $k$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set the expression equal to 27",
        "workingLatex": "2k^{2} + 3k = 27",
        "explanation": "This uses the information given in the question and turns it into an equation to solve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rearrange to standard quadratic form",
        "workingLatex": "2k^{2} + 3k - 27 = 0",
        "explanation": "Moving everything to one side gives a quadratic $= 0$, ready to solve.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compute the discriminant",
        "workingLatex": "b^{2} - 4ac = 3^{2} - 4(2)(-27) = 9 + 216 = 225",
        "explanation": "The discriminant tells us how many solutions there are; $225$ is a perfect square, so the roots are exact.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Take the square root",
        "workingLatex": "\\sqrt{225} = 15",
        "explanation": "A clean square root confirms the quadratic factorises neatly.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Apply the quadratic formula",
        "workingLatex": "k = \\frac{-3 \\pm 15}{2 \\times 2} = \\frac{-3 \\pm 15}{4}",
        "explanation": "Substituting into the formula gives the two possible values of $k$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the first root",
        "workingLatex": "k = \\frac{-3 + 15}{4} = \\frac{12}{4} = 3",
        "explanation": "Taking the plus sign gives $k = 3$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Find the second root",
        "workingLatex": "k = \\frac{-3 - 15}{4} = \\frac{-18}{4} = -\\frac{9}{2}",
        "explanation": "Taking the minus sign gives a negative value.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Reject the invalid root",
        "workingLatex": "k > 0 \\;\\Rightarrow\\; k \\ne -\\frac{9}{2}",
        "explanation": "The question states $k > 0$, so the negative solution cannot be an upper limit here and is discarded.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the value of k",
        "workingLatex": "k = 3",
        "explanation": "Only the positive root satisfies the condition.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check the answer",
        "workingLatex": "\\left[ 2x^{2} + 3x \\right]_{0}^{3} = 18 + 9 = 27 \\;\\checkmark",
        "explanation": "Substituting $k = 3$ back in reproduces the given value $27$, confirming the solution.",
        "diagram": null
      }
    ],
    "finalAnswer": "$k = 3$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["definite-integration", "area", "find-constant", "fractional-power"],
  "questionText": "The curve $y = x^{2}$ and the line $y = c$, where $c > 0$, enclose a finite region of area $36$. Find the value of $c$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find where the curve meets the line",
        "workingLatex": "x^{2} = c \\;\\Rightarrow\\; x = \\pm\\sqrt{c}",
        "explanation": "The region is closed off where the parabola meets the horizontal line, giving symmetric limits $\\pm\\sqrt{c}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{For } -\\sqrt{c} < x < \\sqrt{c}:\\; c > x^{2}",
        "explanation": "Between the intersections the line $y = c$ lies above the parabola, so the height of the region is (line $-$ curve).",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use symmetry to simplify the area",
        "workingLatex": "A = 2\\int_{0}^{\\sqrt{c}} \\left(c - x^{2}\\right) \\,dx",
        "explanation": "The region is symmetric about the $y$-axis, so we integrate over the right half and double it. This avoids dealing with the negative limit.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the bracket",
        "workingLatex": "\\int \\left(c - x^{2}\\right) \\,dx = cx - \\frac{x^{3}}{3}",
        "explanation": "Here $c$ is a constant, so $c$ integrates to $cx$, and $x^{2}$ becomes $\\frac{x^{3}}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the upper limit",
        "workingLatex": "c\\sqrt{c} - \\frac{\\left(\\sqrt{c}\\right)^{3}}{3}",
        "explanation": "Putting $x = \\sqrt{c}$ into the antiderivative gives these two terms; recall $\\left(\\sqrt{c}\\right)^{3} = c\\sqrt{c}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite using index notation",
        "workingLatex": "= c^{\\frac{3}{2}} - \\frac{c^{\\frac{3}{2}}}{3}",
        "explanation": "Both $c\\sqrt{c}$ and $\\left(\\sqrt{c}\\right)^{3}$ equal $c^{\\frac{3}{2}}$, which makes the next step tidy.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine the half-region value",
        "workingLatex": "c^{\\frac{3}{2}} - \\frac{c^{\\frac{3}{2}}}{3} = \\frac{2}{3}c^{\\frac{3}{2}}",
        "explanation": "Subtracting a third of a quantity from the whole leaves two-thirds of it.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Lower limit contributes nothing",
        "workingLatex": "\\text{at } x = 0:\\; c(0) - \\frac{0}{3} = 0",
        "explanation": "The value at $x = 0$ is zero, so the half-region area is exactly $\\frac{2}{3}c^{\\frac{3}{2}}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Double for the full area",
        "workingLatex": "A = 2 \\times \\frac{2}{3}c^{\\frac{3}{2}} = \\frac{4}{3}c^{\\frac{3}{2}}",
        "explanation": "Using the symmetry from earlier, the total enclosed area is twice the half-region.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Set the area equal to 36",
        "workingLatex": "\\frac{4}{3}c^{\\frac{3}{2}} = 36",
        "explanation": "This turns the given information into an equation for $c$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Isolate the power of c",
        "workingLatex": "c^{\\frac{3}{2}} = 36 \\times \\frac{3}{4} = 27",
        "explanation": "Multiplying both sides by $\\frac{3}{4}$ leaves $c^{\\frac{3}{2}}$ alone.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Raise both sides to the power two-thirds",
        "workingLatex": "c = 27^{\\frac{2}{3}}",
        "explanation": "The inverse of the power $\\frac{3}{2}$ is the power $\\frac{2}{3}$, which undoes it and leaves $c$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Evaluate the fractional power",
        "workingLatex": "27^{\\frac{2}{3}} = \\left(27^{\\frac{1}{3}}\\right)^{2} = 3^{2} = 9",
        "explanation": "Take the cube root of $27$ first (which is $3$), then square it.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Check the answer",
        "workingLatex": "\\frac{4}{3}\\left(9\\right)^{\\frac{3}{2}} = \\frac{4}{3}\\times 27 = 36 \\;\\checkmark",
        "explanation": "Substituting $c = 9$ back gives area $36$, confirming the value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$c = 9$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "area", "fractional-power", "curve-and-line"],
  "questionText": "Find the exact area of the finite region enclosed between the curve $y = \\sqrt{x}$ and the line $y = \\frac{x}{2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the curve equal to the line",
        "workingLatex": "\\sqrt{x} = \\frac{x}{2}",
        "explanation": "The region is bounded where the two graphs cross, so we solve for those $x$-values first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Clear the fraction and remove the root",
        "workingLatex": "2\\sqrt{x} = x \\;\\Rightarrow\\; 4x = x^{2}",
        "explanation": "Multiplying by $2$, then squaring both sides, removes the square root and gives a polynomial equation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the intersection points",
        "workingLatex": "x^{2} - 4x = 0 \\;\\Rightarrow\\; x(x - 4) = 0 \\;\\Rightarrow\\; x = 0,\\; 4",
        "explanation": "Factorising shows the graphs meet at $x = 0$ and $x = 4$, the limits of our region.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = 1:\\; \\sqrt{1} = 1 > \\frac{1}{2}",
        "explanation": "Testing a point between $0$ and $4$ shows the curve $\\sqrt{x}$ lies above the line, so the height is (curve $-$ line).",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{0}^{4} \\left(\\sqrt{x} - \\frac{x}{2}\\right) \\,dx",
        "explanation": "The area between the graphs is the integral of the upper minus the lower, taken between the intersection points.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rewrite the root as a power",
        "workingLatex": "\\sqrt{x} = x^{\\frac{1}{2}}",
        "explanation": "Writing the square root as a fractional power lets us apply the standard integration rule.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the root term",
        "workingLatex": "\\int x^{\\frac{1}{2}} \\,dx = \\frac{2}{3}x^{\\frac{3}{2}}",
        "explanation": "Add one to the power to get $\\frac{3}{2}$, then divide by $\\frac{3}{2}$, which is the same as multiplying by $\\frac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the line term",
        "workingLatex": "\\int \\frac{x}{2} \\,dx = \\frac{x^{2}}{4}",
        "explanation": "Integrating $\\frac{1}{2}x$ raises the power to give $\\frac{x^{2}}{4}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the antiderivative with limits",
        "workingLatex": "A = \\left[ \\frac{2}{3}x^{\\frac{3}{2}} - \\frac{x^{2}}{4} \\right]_{0}^{4}",
        "explanation": "We now substitute the upper limit and subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the upper limit x = 4",
        "workingLatex": "\\frac{2}{3}\\left(4\\right)^{\\frac{3}{2}} - \\frac{16}{4} = \\frac{2}{3}(8) - 4",
        "explanation": "Since $4^{\\frac{3}{2}} = (\\sqrt{4})^{3} = 8$, the first term is $\\frac{16}{3}$ and the second is $4$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Combine the upper-limit terms",
        "workingLatex": "\\frac{16}{3} - 4 = \\frac{16}{3} - \\frac{12}{3} = \\frac{4}{3}",
        "explanation": "Writing $4$ as $\\frac{12}{3}$ lets us subtract to a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Lower limit gives zero",
        "workingLatex": "\\frac{2}{3}(0) - \\frac{0}{4} = 0",
        "explanation": "At $x = 0$ every term vanishes, so nothing is subtracted.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the area",
        "workingLatex": "A = \\frac{4}{3} - 0 = \\frac{4}{3}",
        "explanation": "The finite region between the curve and the line has exact area $\\frac{4}{3}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A = \\dfrac{4}{3}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "area", "fractional-power", "curve-and-line"],
  "questionText": "The curve $y = x^{\\frac{3}{2}}$ and the line $y = x$ meet at the origin and at one other point. Find the exact area of the finite region enclosed between them.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set the curve equal to the line",
        "workingLatex": "x^{\\frac{3}{2}} = x",
        "explanation": "The region is bounded where the two graphs cross, so we begin by finding those $x$-values.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Bring everything to one side",
        "workingLatex": "x^{\\frac{3}{2}} - x = 0",
        "explanation": "Rearranging to equal zero lets us factorise and read off the solutions.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factor out x",
        "workingLatex": "x\\left(x^{\\frac{1}{2}} - 1\\right) = 0",
        "explanation": "Taking a common factor of $x$ (since $x^{\\frac{3}{2}} = x \\cdot x^{\\frac{1}{2}}$) splits the equation into simple parts.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the intersection points",
        "workingLatex": "x = 0 \\quad \\text{or} \\quad x^{\\frac{1}{2}} = 1 \\;\\Rightarrow\\; x = 1",
        "explanation": "Each factor gives a crossing point, so the region runs from $x = 0$ to $x = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Decide which graph is on top",
        "workingLatex": "\\text{At } x = \\tfrac{1}{4}:\\; x = 0.25 > \\left(\\tfrac{1}{4}\\right)^{\\frac{3}{2}} = 0.125",
        "explanation": "For $0 < x < 1$ a fractional power greater than one makes $x^{\\frac{3}{2}}$ smaller than $x$, so the line lies above the curve.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set up the area integral",
        "workingLatex": "A = \\int_{0}^{1} \\left(x - x^{\\frac{3}{2}}\\right) \\,dx",
        "explanation": "The area is the integral of the upper graph (the line) minus the lower graph (the curve) between the crossings.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Recall the integration rule for powers",
        "workingLatex": "\\int x^{n} \\,dx = \\frac{x^{n+1}}{n+1}",
        "explanation": "We add one to each index and divide by the new index; this works for fractional powers too.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the line term",
        "workingLatex": "\\int x \\,dx = \\frac{x^{2}}{2}",
        "explanation": "Applying the rule to $x^{1}$ gives $\\frac{x^{2}}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the curve term",
        "workingLatex": "\\int x^{\\frac{3}{2}} \\,dx = \\frac{2}{5}x^{\\frac{5}{2}}",
        "explanation": "The power $\\frac{3}{2}$ becomes $\\frac{5}{2}$, and dividing by $\\frac{5}{2}$ is the same as multiplying by $\\frac{2}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Write the antiderivative with limits",
        "workingLatex": "A = \\left[ \\frac{x^{2}}{2} - \\frac{2}{5}x^{\\frac{5}{2}} \\right]_{0}^{1}",
        "explanation": "We substitute the upper limit then subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the upper limit x = 1",
        "workingLatex": "\\frac{1}{2} - \\frac{2}{5}(1) = \\frac{1}{2} - \\frac{2}{5}",
        "explanation": "Since every power of $1$ is $1$, the upper limit gives $\\frac{1}{2} - \\frac{2}{5}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine over a common denominator",
        "workingLatex": "\\frac{1}{2} - \\frac{2}{5} = \\frac{5}{10} - \\frac{4}{10} = \\frac{1}{10}",
        "explanation": "Using a denominator of $10$ lets us subtract the two fractions exactly.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Lower limit gives zero",
        "workingLatex": "\\frac{0}{2} - \\frac{2}{5}(0) = 0",
        "explanation": "At $x = 0$ both terms vanish, so nothing is subtracted.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the area",
        "workingLatex": "A = \\frac{1}{10} - 0 = \\frac{1}{10}",
        "explanation": "The finite region enclosed between the curve and the line has exact area $\\frac{1}{10}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A = \\dfrac{1}{10}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "value",
  "tags": ["definite-integration", "rewrite", "expand-bracket", "fractional-power"],
  "questionText": "Find the exact value of $\\int_{0}^{4} \\left(\\sqrt{x} - 2\\right)^{2} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "See why a rewrite is needed",
        "workingLatex": "\\left(\\sqrt{x} - 2\\right)^{2} \\text{ cannot be integrated directly}",
        "explanation": "There is no rule for integrating a squared bracket as it stands, so we expand it into separate power terms first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the squared bracket",
        "workingLatex": "\\left(\\sqrt{x} - 2\\right)^{2} = x - 4\\sqrt{x} + 4",
        "explanation": "Using $(a - b)^{2} = a^{2} - 2ab + b^{2}$ with $a = \\sqrt{x}$ gives $x$, the cross term $-4\\sqrt{x}$, and $4$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rewrite the root as a power",
        "workingLatex": "x - 4\\sqrt{x} + 4 = x - 4x^{\\frac{1}{2}} + 4",
        "explanation": "Writing $\\sqrt{x}$ as $x^{\\frac{1}{2}}$ puts every term in a form we can integrate with the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the first term",
        "workingLatex": "\\int x \\,dx = \\frac{x^{2}}{2}",
        "explanation": "Raising the power by one and dividing gives $\\frac{x^{2}}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the root term",
        "workingLatex": "\\int -4x^{\\frac{1}{2}} \\,dx = -4 \\cdot \\frac{2}{3}x^{\\frac{3}{2}} = -\\frac{8}{3}x^{\\frac{3}{2}}",
        "explanation": "The power $\\frac{1}{2}$ becomes $\\frac{3}{2}$; dividing by $\\frac{3}{2}$ multiplies the $-4$ by $\\frac{2}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 4 \\,dx = 4x",
        "explanation": "A constant integrates to that constant times $x$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the antiderivative with limits",
        "workingLatex": "\\left[ \\frac{x^{2}}{2} - \\frac{8}{3}x^{\\frac{3}{2}} + 4x \\right]_{0}^{4}",
        "explanation": "We now substitute the upper limit and subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the upper limit x = 4",
        "workingLatex": "\\frac{16}{2} - \\frac{8}{3}\\left(4\\right)^{\\frac{3}{2}} + 4(4)",
        "explanation": "Putting $x = 4$ into each term prepares the numerical value; note $4^{\\frac{3}{2}} = 8$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Simplify each piece",
        "workingLatex": "= 8 - \\frac{8}{3}(8) + 16 = 8 - \\frac{64}{3} + 16",
        "explanation": "The first term is $8$, the middle term is $\\frac{64}{3}$, and the last is $16$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Combine the whole numbers",
        "workingLatex": "= 24 - \\frac{64}{3}",
        "explanation": "Adding $8 + 16 = 24$ leaves a whole number minus a fraction.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Subtract using a common denominator",
        "workingLatex": "24 - \\frac{64}{3} = \\frac{72}{3} - \\frac{64}{3} = \\frac{8}{3}",
        "explanation": "Writing $24$ as $\\frac{72}{3}$ lets us subtract cleanly to $\\frac{8}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Lower limit gives zero",
        "workingLatex": "\\frac{0}{2} - \\frac{8}{3}(0) + 4(0) = 0",
        "explanation": "Every term contains a positive power of $x$, so at $x = 0$ the whole expression is zero.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the value",
        "workingLatex": "\\int_{0}^{4} \\left(\\sqrt{x} - 2\\right)^{2} \\,dx = \\frac{8}{3} - 0 = \\frac{8}{3}",
        "explanation": "Subtracting the (zero) lower-limit value gives the exact answer $\\frac{8}{3}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{0}^{4} \\left(\\sqrt{x} - 2\\right)^{2} \\,dx = \\dfrac{8}{3}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "rewrite", "split-fraction"],
  "questionText": "Find the exact value of $\\int_{1}^{2} \\frac{\\left(x^{2} + 1\\right)^{2}}{x^{2}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "See why a rewrite is needed",
        "workingLatex": "\\frac{\\left(x^{2} + 1\\right)^{2}}{x^{2}} \\text{ cannot be integrated directly}",
        "explanation": "A quotient like this has no direct integration rule, so we expand the top and then split the fraction into simple powers of $x$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Expand the numerator",
        "workingLatex": "\\left(x^{2} + 1\\right)^{2} = x^{4} + 2x^{2} + 1",
        "explanation": "Using $(a + b)^{2} = a^{2} + 2ab + b^{2}$ with $a = x^{2}$ gives these three terms.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write as a single fraction",
        "workingLatex": "\\frac{x^{4} + 2x^{2} + 1}{x^{2}}",
        "explanation": "Placing the expanded numerator over $x^{2}$ sets up the division term by term.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Divide each term by the denominator",
        "workingLatex": "\\frac{x^{4}}{x^{2}} + \\frac{2x^{2}}{x^{2}} + \\frac{1}{x^{2}} = x^{2} + 2 + x^{-2}",
        "explanation": "Subtracting indices when dividing gives $x^{2}$, a constant $2$, and $x^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the power rule applies",
        "workingLatex": "x^{-2}:\\; \\text{index } -2 \\ne -1",
        "explanation": "The power rule works for every index except $-1$. Here the index is $-2$, so it is safe to integrate normally.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{2} \\,dx = \\frac{x^{3}}{3}",
        "explanation": "Raising the power by one and dividing gives $\\frac{x^{3}}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the constant term",
        "workingLatex": "\\int 2 \\,dx = 2x",
        "explanation": "The constant $2$ integrates to $2x$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the negative-power term",
        "workingLatex": "\\int x^{-2} \\,dx = \\frac{x^{-1}}{-1} = -\\frac{1}{x}",
        "explanation": "Adding one to $-2$ gives $-1$; dividing by $-1$ produces $-\\frac{1}{x}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Write the antiderivative with limits",
        "workingLatex": "\\left[ \\frac{x^{3}}{3} + 2x - \\frac{1}{x} \\right]_{1}^{2}",
        "explanation": "We substitute the upper limit and subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the upper limit x = 2",
        "workingLatex": "\\frac{8}{3} + 4 - \\frac{1}{2}",
        "explanation": "Putting $x = 2$ gives $\\frac{8}{3}$, $4$, and $\\frac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Combine the upper-limit value",
        "workingLatex": "\\frac{8}{3} + \\frac{7}{2} = \\frac{16}{6} + \\frac{21}{6} = \\frac{37}{6}",
        "explanation": "First $4 - \\frac{1}{2} = \\frac{7}{2}$; then using a denominator of $6$ gives $\\frac{37}{6}$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Substitute the lower limit x = 1",
        "workingLatex": "\\frac{1}{3} + 2 - 1 = \\frac{1}{3} + 1 = \\frac{4}{3} = \\frac{8}{6}",
        "explanation": "Putting $x = 1$ gives $\\frac{4}{3}$, which we write as $\\frac{8}{6}$ to match the other value.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Subtract the two values",
        "workingLatex": "\\frac{37}{6} - \\frac{8}{6} = \\frac{29}{6}",
        "explanation": "Subtracting the lower-limit value from the upper-limit value gives the definite integral.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{2} \\frac{\\left(x^{2} + 1\\right)^{2}}{x^{2}} \\,dx = \\frac{29}{6}",
        "explanation": "The exact value of the integral is $\\frac{29}{6}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{2} \\frac{\\left(x^{2} + 1\\right)^{2}}{x^{2}} \\,dx = \\dfrac{29}{6}$"
  }
},
{
  "id": "al.y1.pure.definite-integrationcontinued.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Pure",
  "subtopic": "Definite integration and areas",
  "subtopicId": "al.y1.pure.definite-integrationcontinued",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "value",
  "tags": ["definite-integration", "rewrite", "split-fraction", "fractional-power"],
  "questionText": "Find the exact value of $\\int_{1}^{9} \\frac{x + 4}{\\sqrt{x}} \\,dx$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "See why a rewrite is needed",
        "workingLatex": "\\frac{x + 4}{\\sqrt{x}} \\text{ cannot be integrated directly}",
        "explanation": "There is no rule for dividing by $\\sqrt{x}$ inside an integral, so we split the fraction into separate terms first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Split the fraction over the denominator",
        "workingLatex": "\\frac{x + 4}{\\sqrt{x}} = \\frac{x}{\\sqrt{x}} + \\frac{4}{\\sqrt{x}}",
        "explanation": "A single denominator can be shared by each term of the numerator, breaking the quotient into two simpler pieces.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify each piece using indices",
        "workingLatex": "\\frac{x}{\\sqrt{x}} = x^{\\frac{1}{2}}, \\qquad \\frac{4}{\\sqrt{x}} = 4x^{-\\frac{1}{2}}",
        "explanation": "Subtracting the index $\\frac{1}{2}$ turns $x$ into $x^{\\frac{1}{2}}$ and turns the $4$ term into $4x^{-\\frac{1}{2}}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the rewritten integrand",
        "workingLatex": "\\frac{x + 4}{\\sqrt{x}} = x^{\\frac{1}{2}} + 4x^{-\\frac{1}{2}}",
        "explanation": "Both terms are now simple powers of $x$ ready for the power rule.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the power rule applies",
        "workingLatex": "-\\tfrac{1}{2} \\ne -1",
        "explanation": "The power rule fails only for an index of $-1$. Here the index is $-\\frac{1}{2}$, so integration proceeds normally.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the first term",
        "workingLatex": "\\int x^{\\frac{1}{2}} \\,dx = \\frac{2}{3}x^{\\frac{3}{2}}",
        "explanation": "Add one to the power to get $\\frac{3}{2}$, then divide by $\\frac{3}{2}$ (multiply by $\\frac{2}{3}$).",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the second term",
        "workingLatex": "\\int 4x^{-\\frac{1}{2}} \\,dx = 4 \\cdot 2x^{\\frac{1}{2}} = 8x^{\\frac{1}{2}}",
        "explanation": "Here $-\\frac{1}{2}$ becomes $\\frac{1}{2}$; dividing by $\\frac{1}{2}$ doubles the coefficient, giving $8x^{\\frac{1}{2}}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Write the antiderivative with limits",
        "workingLatex": "\\left[ \\frac{2}{3}x^{\\frac{3}{2}} + 8x^{\\frac{1}{2}} \\right]_{1}^{9}",
        "explanation": "We substitute the upper limit and subtract the value at the lower limit.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the upper limit x = 9",
        "workingLatex": "\\frac{2}{3}\\left(9\\right)^{\\frac{3}{2}} + 8\\left(9\\right)^{\\frac{1}{2}}",
        "explanation": "Note $9^{\\frac{1}{2}} = 3$ and $9^{\\frac{3}{2}} = 3^{3} = 27$, which keep the arithmetic exact.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the upper limit",
        "workingLatex": "\\frac{2}{3}(27) + 8(3) = 18 + 24 = 42",
        "explanation": "The two terms give $18$ and $24$, summing to $42$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Substitute the lower limit x = 1",
        "workingLatex": "\\frac{2}{3}(1) + 8(1) = \\frac{2}{3} + 8",
        "explanation": "Since all powers of $1$ are $1$, the lower limit gives $\\frac{2}{3} + 8$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Combine the lower-limit value",
        "workingLatex": "\\frac{2}{3} + 8 = \\frac{2}{3} + \\frac{24}{3} = \\frac{26}{3}",
        "explanation": "Writing $8$ as $\\frac{24}{3}$ lets us add to a single fraction.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Subtract the two values",
        "workingLatex": "42 - \\frac{26}{3} = \\frac{126}{3} - \\frac{26}{3} = \\frac{100}{3}",
        "explanation": "Writing $42$ as $\\frac{126}{3}$ makes the final subtraction exact.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the value",
        "workingLatex": "\\int_{1}^{9} \\frac{x + 4}{\\sqrt{x}} \\,dx = \\frac{100}{3}",
        "explanation": "The exact value of the integral is $\\frac{100}{3}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\int_{1}^{9} \\frac{x + 4}{\\sqrt{x}} \\,dx = \\dfrac{100}{3}$"
  }
}
];
