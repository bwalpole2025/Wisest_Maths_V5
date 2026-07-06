import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.recurrence.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "sequences"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = 2u_n - 3$ with first term $u_1 = 5$. Find $u_2$, $u_3$ and $u_4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = 2u_n - 3",
          "explanation": "A recurrence relation is a rule that builds each term from the one before it: whatever term you put in as $u_n$, the rule doubles it and subtracts $3$ to give the next term $u_{n+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 5",
          "explanation": "A recurrence on its own is not enough — we also need a starting term to get going. Here that anchor is $u_1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = 2u_1 - 3 = 2(5) - 3",
          "explanation": "Setting $n = 1$ turns the rule into $u_2 = 2u_1 - 3$, and we substitute the known value $u_1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate u_2",
          "workingLatex": "u_2 = 10 - 3 = 7",
          "explanation": "Doubling $5$ gives $10$, and subtracting $3$ leaves $7$, so the second term is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = 2u_2 - 3 = 2(7) - 3 = 11",
          "explanation": "Each new term uses the previous answer, so we now feed $u_2 = 7$ back into the same rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = 2u_3 - 3 = 2(11) - 3 = 19",
          "explanation": "Feeding $u_3 = 11$ into the rule one more time gives the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the three terms",
          "workingLatex": "u_2 = 7, \\quad u_3 = 11, \\quad u_4 = 19",
          "explanation": "Working one step at a time from the starting value produces the required terms of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 7,\\ u_3 = 11,\\ u_4 = 19$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "linear recurrence"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = u_n + 4$ with first term $u_1 = 3$. Find $u_2$, $u_3$, $u_4$ and $u_5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = u_n + 4",
          "explanation": "This rule tells us how to get from one term to the next: take the current term $u_n$ and add $4$ to produce the following term $u_{n+1}$. So the sequence goes up in steps of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 3",
          "explanation": "The rule only tells us how to move forward, so we need a first term to launch from. That anchor is given as $u_1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = u_1 + 4 = 3 + 4 = 7",
          "explanation": "Putting $n = 1$ into the rule gives $u_2 = u_1 + 4$, and substituting $u_1 = 3$ and adding $4$ gives the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = u_2 + 4 = 7 + 4 = 11",
          "explanation": "Each new term feeds the previous answer back into the rule, so we now add $4$ to $u_2 = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = u_3 + 4 = 11 + 4 = 15",
          "explanation": "Continuing the same pattern, we add $4$ to the term we just found, $u_3 = 11$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the rule with n = 4 to get u_5",
          "workingLatex": "u_5 = u_4 + 4 = 15 + 4 = 19",
          "explanation": "One more application, adding $4$ to $u_4 = 15$, gives the fifth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the four terms",
          "workingLatex": "u_2 = 7, \\quad u_3 = 11, \\quad u_4 = 15, \\quad u_5 = 19",
          "explanation": "Stepping forward one term at a time from the starting value produces the required terms; because we add a fixed $4$ each time, this is an arithmetic sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 7,\\ u_3 = 11,\\ u_4 = 15,\\ u_5 = 19$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "geometric recurrence"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = 3u_n$ with first term $u_1 = 2$. Write down the first four terms of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = 3u_n",
          "explanation": "This rule multiplies the current term by $3$ to reach the next term. Each step scales up by the same factor, so this builds a geometric sequence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first term",
          "workingLatex": "u_1 = 2",
          "explanation": "The first of the four terms we need is simply the given starting value, $u_1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = 3u_1 = 3 \\times 2 = 6",
          "explanation": "Setting $n = 1$ gives $u_2 = 3u_1$; multiplying the starting value $2$ by $3$ gives the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = 3u_2 = 3 \\times 6 = 18",
          "explanation": "We triple the previous answer $u_2 = 6$ to get the third term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = 3u_3 = 3 \\times 18 = 54",
          "explanation": "Tripling $u_3 = 18$ one more time gives the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the first four terms",
          "workingLatex": "2, \\quad 6, \\quad 18, \\quad 54",
          "explanation": "Reading the terms in order gives the first four values of the sequence; each is three times the one before it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2,\\ 6,\\ 18,\\ 54$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "nonlinear recurrence"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = u_n^2 - 1$ with first term $u_1 = 2$. Find $u_2$ and $u_3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = u_n^2 - 1",
          "explanation": "To get the next term, this rule squares the current term and then subtracts $1$. Because it squares the previous value, the sequence is nonlinear and can grow quickly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "We are given the anchor $u_1 = 2$ to feed into the rule first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to set up u_2",
          "workingLatex": "u_2 = u_1^2 - 1",
          "explanation": "Setting $n = 1$ turns the rule into $u_2 = u_1^2 - 1$; the order matters — we square first, then subtract.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate u_2",
          "workingLatex": "u_2 = 2^2 - 1 = 4 - 1 = 3",
          "explanation": "Substituting $u_1 = 2$: squaring gives $4$, and subtracting $1$ leaves $3$, so the second term is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 2 to set up u_3",
          "workingLatex": "u_3 = u_2^2 - 1 = 3^2 - 1",
          "explanation": "Now feed the new term $u_2 = 3$ back into the same rule to build the third term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate u_3",
          "workingLatex": "u_3 = 9 - 1 = 8",
          "explanation": "Squaring $3$ gives $9$, and subtracting $1$ leaves $8$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the two terms",
          "workingLatex": "u_2 = 3, \\quad u_3 = 8",
          "explanation": "Applying the rule twice in order, always squaring before subtracting, produces the required terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 3,\\ u_3 = 8$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "fractions"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = \\dfrac{u_n}{2} + 1$ with first term $u_1 = 8$. Find $u_2$, $u_3$ and $u_4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = \\dfrac{u_n}{2} + 1",
          "explanation": "This rule takes the current term, halves it, and then adds $1$ to produce the next term. Halving each time means the terms will steadily shrink towards a fixed value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 8",
          "explanation": "We begin from the given first term $u_1 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = \\dfrac{u_1}{2} + 1 = \\dfrac{8}{2} + 1 = 4 + 1 = 5",
          "explanation": "Halving $8$ gives $4$, and adding $1$ gives $5$, so the second term is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = \\dfrac{u_2}{2} + 1 = \\dfrac{5}{2} + 1 = \\dfrac{5}{2} + \\dfrac{2}{2} = \\dfrac{7}{2}",
          "explanation": "Halving $5$ gives $\\dfrac{5}{2}$; writing the $1$ as $\\dfrac{2}{2}$ lets us add the fractions to get $\\dfrac{7}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = \\dfrac{u_3}{2} + 1 = \\dfrac{7}{4} + 1 = \\dfrac{7}{4} + \\dfrac{4}{4} = \\dfrac{11}{4}",
          "explanation": "Halving $\\dfrac{7}{2}$ means doubling the denominator to $\\dfrac{7}{4}$; adding $1$ as $\\dfrac{4}{4}$ gives $\\dfrac{11}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Express the fractional terms as decimals",
          "workingLatex": "\\dfrac{7}{2} = 3.5, \\quad \\dfrac{11}{4} = 2.75",
          "explanation": "Writing the fractions as decimals makes it easy to see the sequence is decreasing: $8, 5, 3.5, 2.75, \\ldots$ falling towards a limit.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the three terms",
          "workingLatex": "u_2 = 5, \\quad u_3 = \\dfrac{7}{2}, \\quad u_4 = \\dfrac{11}{4}",
          "explanation": "Working carefully with the fractions at each stage gives the required terms of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 5,\\ u_3 = \\dfrac{7}{2},\\ u_4 = \\dfrac{11}{4}$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "periodic sequence"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = 5 - u_n$ with first term $u_1 = 2$. Find $u_2$, $u_3$ and $u_4$, and comment on what you notice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = 5 - u_n",
          "explanation": "This rule subtracts the current term from $5$ to give the next term. Since $5$ is fixed, each term is $5$ minus the one before it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "We start from the given first term $u_1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = 5 - u_1 = 5 - 2 = 3",
          "explanation": "Subtracting $u_1 = 2$ from $5$ gives the second term, $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = 5 - u_2 = 5 - 3 = 2",
          "explanation": "Subtracting $u_2 = 3$ from $5$ brings us back to $2$ — exactly the value we started with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = 5 - u_3 = 5 - 2 = 3",
          "explanation": "Subtracting $u_3 = 2$ from $5$ gives $3$ again, matching $u_2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the repeating pattern",
          "workingLatex": "2, \\ 3, \\ 2, \\ 3, \\ \\ldots",
          "explanation": "The values alternate between $2$ and $3$ forever, so the sequence is periodic with period $2$: it satisfies $u_{n+2} = u_n$ for every $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the terms and comment",
          "workingLatex": "u_2 = 3, \\quad u_3 = 2, \\quad u_4 = 3",
          "explanation": "The terms are $3$, $2$ and $3$; the sequence repeats with period $2$, cycling between $2$ and $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 3,\\ u_3 = 2,\\ u_4 = 3$; the sequence is periodic with period $2$, alternating between $2$ and $3$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "general sequences",
      "nth term formula",
      "generating terms"
    ],
    "questionText": "A sequence has general term given by the formula $u_n = n^2 + 1$. Write down the first four terms of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the nth-term formula",
          "workingLatex": "u_n = n^2 + 1",
          "explanation": "Unlike a recurrence, this formula gives each term directly from its position $n$: substitute the term number in for $n$ and evaluate. There is no need to know the previous term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term (n = 1)",
          "workingLatex": "u_1 = 1^2 + 1 = 1 + 1 = 2",
          "explanation": "Putting $n = 1$ into the formula: $1^2 = 1$, and adding $1$ gives the first term, $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term (n = 2)",
          "workingLatex": "u_2 = 2^2 + 1 = 4 + 1 = 5",
          "explanation": "Substituting $n = 2$: $2^2 = 4$, and adding $1$ gives $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term (n = 3)",
          "workingLatex": "u_3 = 3^2 + 1 = 9 + 1 = 10",
          "explanation": "Substituting $n = 3$: $3^2 = 9$, and adding $1$ gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth term (n = 4)",
          "workingLatex": "u_4 = 4^2 + 1 = 16 + 1 = 17",
          "explanation": "Substituting $n = 4$: $4^2 = 16$, and adding $1$ gives $17$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the advantage of a closed formula",
          "workingLatex": "u_{n} \\text{ found directly from } n",
          "explanation": "Because each term is computed independently from its position, we could jump straight to, say, the $100$th term without listing everything before it — the key difference from a recurrence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the first four terms",
          "workingLatex": "2, \\quad 5, \\quad 10, \\quad 17",
          "explanation": "Listing the results in order gives the first four terms of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2,\\ 5,\\ 10,\\ 17$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "second-order recurrence",
      "Fibonacci"
    ],
    "questionText": "A sequence is defined by the second-order recurrence relation $u_{n+2} = u_{n+1} + u_n$ with $u_1 = 1$ and $u_2 = 1$. Find $u_3$, $u_4$, $u_5$ and $u_6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the second-order recurrence",
          "workingLatex": "u_{n+2} = u_{n+1} + u_n",
          "explanation": "This rule builds each term by adding the two terms immediately before it. Because it looks back two places, it is called second-order and needs two starting values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the two starting values",
          "workingLatex": "u_1 = 1, \\quad u_2 = 1",
          "explanation": "A second-order rule needs a pair of anchors to get going; here both are given as $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_3",
          "workingLatex": "u_3 = u_2 + u_1 = 1 + 1 = 2",
          "explanation": "Setting $n = 1$ gives $u_3 = u_2 + u_1$; adding the two starting terms gives $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_4",
          "workingLatex": "u_4 = u_3 + u_2 = 2 + 1 = 3",
          "explanation": "Now add the two most recent terms, $u_3 = 2$ and $u_2 = 1$, to reach the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_5",
          "workingLatex": "u_5 = u_4 + u_3 = 3 + 2 = 5",
          "explanation": "Adding the latest pair, $u_4 = 3$ and $u_3 = 2$, gives the fifth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the rule with n = 4 to get u_6",
          "workingLatex": "u_6 = u_5 + u_4 = 5 + 3 = 8",
          "explanation": "Adding $u_5 = 5$ and $u_4 = 3$ gives the sixth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the four terms",
          "workingLatex": "u_3 = 2, \\quad u_4 = 3, \\quad u_5 = 5, \\quad u_6 = 8",
          "explanation": "Each term is the sum of the previous two — these are the Fibonacci numbers, and the required terms are $2, 3, 5, 8$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_3 = 2,\\ u_4 = 3,\\ u_5 = 5,\\ u_6 = 8$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "boundary check"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = 2u_n + 1$ with first term $u_1 = 3$. Find $u_4$, and determine the first term of the sequence that exceeds $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = 2u_n + 1",
          "explanation": "This rule doubles the current term and adds $1$ to give the next. Doubling each time means the terms grow rapidly, so they will pass $100$ before long.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 3",
          "explanation": "We begin the iteration from the given first term $u_1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1 to get u_2",
          "workingLatex": "u_2 = 2u_1 + 1 = 2(3) + 1 = 7",
          "explanation": "Doubling $3$ gives $6$, and adding $1$ gives the second term, $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = 2u_2 + 1 = 2(7) + 1 = 15",
          "explanation": "Feeding $u_2 = 7$ back in: doubling gives $14$, plus $1$ gives $15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = 2u_3 + 1 = 2(15) + 1 = 31",
          "explanation": "Doubling $u_3 = 15$ gives $30$, plus $1$ gives $31$, which answers the first part of the question.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record the first answer",
          "workingLatex": "u_4 = 31",
          "explanation": "So the fourth term is $31$. Since this is still below $100$, we keep iterating to find the first term that crosses that threshold.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the rule with n = 4 to get u_5",
          "workingLatex": "u_5 = 2u_4 + 1 = 2(31) + 1 = 63",
          "explanation": "Continuing the sequence, doubling $31$ gives $62$, plus $1$ gives $63$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check u_5 against the boundary",
          "workingLatex": "63 < 100",
          "explanation": "The fifth term $63$ is still less than $100$, so it is not yet the term we want — we need at least one more step.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the rule with n = 5 to get u_6",
          "workingLatex": "u_6 = 2u_5 + 1 = 2(63) + 1 = 127",
          "explanation": "Doubling $63$ gives $126$, plus $1$ gives $127$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check u_6 against the boundary",
          "workingLatex": "127 > 100",
          "explanation": "The sixth term $127$ is greater than $100$, and since $u_5 = 63$ was below the threshold, $u_6$ is genuinely the first term to exceed $100$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answers",
          "workingLatex": "u_4 = 31; \\quad u_6 = 127 \\text{ is the first term exceeding } 100",
          "explanation": "The fourth term is $31$, and by iterating and checking each value we confirm that $u_6 = 127$ is the first term greater than $100$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_4 = 31$; the first term exceeding $100$ is $u_6 = 127$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "unknown parameter",
      "generating terms"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = p\\,u_n + 2$, where $p$ is a constant. Given that $u_1 = 1$ and $u_2 = 5$, find the value of $p$, and hence find $u_4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = p\\,u_n + 2",
          "explanation": "This rule multiplies the current term by an unknown constant $p$ and then adds $2$. We must first pin down $p$ before we can generate further terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the given values",
          "workingLatex": "u_1 = 1, \\quad u_2 = 5",
          "explanation": "We are told both the first term and the second term. Because the rule links consecutive terms, this pair gives us an equation for $p$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with n = 1",
          "workingLatex": "u_2 = p\\,u_1 + 2",
          "explanation": "Setting $n = 1$ connects the two known terms through $p$: the second term equals $p$ times the first term, plus $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "5 = p(1) + 2",
          "explanation": "Putting in $u_2 = 5$ and $u_1 = 1$ turns the relation into a simple equation in $p$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for p",
          "workingLatex": "p = 5 - 2 = 3",
          "explanation": "Subtracting $2$ from both sides isolates $p$, giving $p = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the fully-known recurrence",
          "workingLatex": "u_{n+1} = 3u_n + 2",
          "explanation": "Now that $p = 3$, the rule is completely determined and we can use it to build the remaining terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the value of p against u_2",
          "workingLatex": "u_2 = 3(1) + 2 = 5",
          "explanation": "As a quick verification, the completed rule reproduces the given $u_2 = 5$, confirming $p = 3$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the rule with n = 2 to get u_3",
          "workingLatex": "u_3 = 3u_2 + 2 = 3(5) + 2 = 17",
          "explanation": "Multiplying $u_2 = 5$ by $3$ gives $15$, and adding $2$ gives the third term, $17$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the rule with n = 3 to get u_4",
          "workingLatex": "u_4 = 3u_3 + 2 = 3(17) + 2 = 53",
          "explanation": "Multiplying $u_3 = 17$ by $3$ gives $51$, and adding $2$ gives the fourth term, $53$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answers",
          "workingLatex": "p = 3, \\quad u_4 = 53",
          "explanation": "First finding the constant $p = 3$ lets us generate the sequence, and iterating twice more gives $u_4 = 53$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$p = 3$ and $u_4 = 53$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "general sequences",
      "nth term",
      "increasing sequences"
    ],
    "questionText": "The sequence $\\{u_n\\}$ has $n$th term $u_n = 3n - 2$. Write down the first four terms, and by considering $u_{n+1} - u_n$ explain why the sequence is increasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the position-to-term rule",
          "workingLatex": "u_n = 3n - 2",
          "explanation": "This formula gives a term directly from its position $n$: substitute the term number and it tells you the value, without needing the previous term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = 3(1) - 2 = 1",
          "explanation": "Putting $n = 1$ into the rule gives the first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = 3(2) - 2 = 4",
          "explanation": "Putting $n = 2$ into the rule gives the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third and fourth terms",
          "workingLatex": "u_3 = 3(3) - 2 = 7, \\quad u_4 = 3(4) - 2 = 10",
          "explanation": "Continuing with $n = 3$ and $n = 4$ completes the first four terms: $1, 4, 7, 10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the general difference between consecutive terms",
          "workingLatex": "u_{n+1} - u_n = \\left[3(n+1) - 2\\right] - \\left[3n - 2\\right]",
          "explanation": "To test whether a sequence increases, compare each term with the next by subtracting; a positive gap means every term is larger than the one before it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the difference",
          "workingLatex": "u_{n+1} - u_n = 3n + 3 - 2 - 3n + 2 = 3",
          "explanation": "The $3n$ terms cancel and the constants combine, leaving a fixed gap of $3$ between any term and the next.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the sequence is increasing",
          "workingLatex": "u_{n+1} - u_n = 3 > 0",
          "explanation": "Because the difference is positive for every $n$, each term is $3$ more than the previous one, so the sequence is increasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 1,\\ u_2 = 4,\\ u_3 = 7,\\ u_4 = 10$; the sequence is increasing because $u_{n+1} - u_n = 3 > 0$ for all $n$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "general sequences",
      "nth term",
      "oscillating sequences"
    ],
    "questionText": "A sequence is given by $u_n = (-1)^n\\, n$. Write down the first four terms and describe the behaviour of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sign factor",
          "workingLatex": "u_n = (-1)^n\\, n",
          "explanation": "The factor $(-1)^n$ equals $-1$ when $n$ is odd and $+1$ when $n$ is even, so it flips the sign of the term as $n$ increases; the extra $n$ makes the size grow.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = (-1)^1 (1) = -1",
          "explanation": "With $n = 1$ (odd), $(-1)^1 = -1$, giving $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = (-1)^2 (2) = 2",
          "explanation": "With $n = 2$ (even), $(-1)^2 = +1$, giving $+2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = (-1)^3 (3) = -3",
          "explanation": "With $n = 3$ (odd) the sign is negative again, giving $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth term",
          "workingLatex": "u_4 = (-1)^4 (4) = 4",
          "explanation": "With $n = 4$ (even) the sign is positive, giving $+4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Look at the pattern of the terms",
          "workingLatex": "-1, \\ 2, \\ -3, \\ 4, \\ \\ldots",
          "explanation": "The signs alternate negative, positive, negative, positive, while the sizes $1, 2, 3, 4$ keep growing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the behaviour",
          "workingLatex": "\\left| u_n \\right| = n \\to \\infty",
          "explanation": "Because the sign keeps flipping, the sequence oscillates; and since the size grows without bound, it never settles to a single value, so it does not converge.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = -1,\\ u_2 = 2,\\ u_3 = -3,\\ u_4 = 4$; the sequence oscillates (its sign alternates) and the size of the terms grows without bound, so it does not converge."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "general sequences",
      "nth term",
      "generating terms"
    ],
    "questionText": "A sequence has $n$th term $u_n = 2^n - n$. Find the first four terms $u_1$, $u_2$, $u_3$ and $u_4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the formula",
          "workingLatex": "u_n = 2^n - n",
          "explanation": "This gives each term straight from its position: raise $2$ to the power $n$, then subtract $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = 2^1 - 1 = 1",
          "explanation": "With $n = 1$: $2^1 = 2$, and $2 - 1 = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = 2^2 - 2 = 2",
          "explanation": "With $n = 2$: $2^2 = 4$, and $4 - 2 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = 2^3 - 3 = 5",
          "explanation": "With $n = 3$: $2^3 = 8$, and $8 - 3 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth term",
          "workingLatex": "u_4 = 2^4 - 4 = 12",
          "explanation": "With $n = 4$: $2^4 = 16$, and $16 - 4 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the four terms",
          "workingLatex": "u_1 = 1, \\quad u_2 = 2, \\quad u_3 = 5, \\quad u_4 = 12",
          "explanation": "Evaluating the formula at $n = 1, 2, 3, 4$ gives the first four terms of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 1,\\ u_2 = 2,\\ u_3 = 5,\\ u_4 = 12$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "general sequences",
      "decreasing sequences",
      "nth term"
    ],
    "questionText": "The $n$th term of a sequence is $u_n = 20 - 3n$. By examining $u_{n+1} - u_n$, determine whether the sequence is increasing or decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the formula",
          "workingLatex": "u_n = 20 - 3n",
          "explanation": "The term is found from its position: start at $20$ and take away $3$ for each unit of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find a couple of terms to get a feel",
          "workingLatex": "u_1 = 20 - 3(1) = 17, \\quad u_2 = 20 - 3(2) = 14",
          "explanation": "The first two terms already look as though they are falling, but to be certain for every $n$ we compare consecutive terms in general.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the next term",
          "workingLatex": "u_{n+1} = 20 - 3(n+1)",
          "explanation": "Replacing $n$ with $n+1$ in the formula gives the following term expressed in terms of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form the difference between consecutive terms",
          "workingLatex": "u_{n+1} - u_n = \\left[20 - 3(n+1)\\right] - \\left[20 - 3n\\right]",
          "explanation": "The sign of this gap tells us the direction: positive means increasing, negative means decreasing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the brackets",
          "workingLatex": "u_{n+1} - u_n = 20 - 3n - 3 - 20 + 3n",
          "explanation": "Multiply out carefully, keeping track of the signs so nothing is dropped.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "u_{n+1} - u_n = -3",
          "explanation": "The $20$s cancel and the $3n$s cancel, leaving a constant gap of $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the direction",
          "workingLatex": "u_{n+1} - u_n = -3 < 0",
          "explanation": "Since the difference is negative for every $n$, each term is $3$ less than the one before, so the sequence is decreasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{n+1} - u_n = -3 < 0$ for all $n$, so the sequence is decreasing."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "general sequences",
      "nth term",
      "limits"
    ],
    "questionText": "A sequence is defined by $u_n = \\dfrac{1}{n}$ for $n \\geq 1$. Write down the first four terms, and state the behaviour of the sequence and the value it approaches.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the formula",
          "workingLatex": "u_n = \\dfrac{1}{n}",
          "explanation": "Each term is the reciprocal of its position number, so a larger $n$ produces a smaller fraction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = \\dfrac{1}{1} = 1",
          "explanation": "With $n = 1$ the term is $\\dfrac{1}{1} = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = \\dfrac{1}{2}",
          "explanation": "With $n = 2$ the term is one half.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third and fourth terms",
          "workingLatex": "u_3 = \\dfrac{1}{3}, \\quad u_4 = \\dfrac{1}{4}",
          "explanation": "Continuing with $n = 3$ and $n = 4$ gives $\\dfrac{1}{3}$ and $\\dfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare consecutive terms",
          "workingLatex": "1 > \\dfrac{1}{2} > \\dfrac{1}{3} > \\dfrac{1}{4}",
          "explanation": "Each term is smaller than the last, yet every term stays positive, so the sequence is decreasing but never negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consider what happens for large n",
          "workingLatex": "\\dfrac{1}{n} \\to 0 \\text{ as } n \\to \\infty",
          "explanation": "Dividing $1$ by an ever-larger number gives a value as close to $0$ as we like, although it never actually reaches $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the behaviour",
          "workingLatex": "u_n \\to 0",
          "explanation": "The sequence is positive and decreasing, and its terms approach the limiting value $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 1,\\ u_2 = \\dfrac{1}{2},\\ u_3 = \\dfrac{1}{3},\\ u_4 = \\dfrac{1}{4}$; the terms are positive and decreasing, approaching $0$ as $n \\to \\infty$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "decreasing sequences"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = u_n - 5$ with first term $u_1 = 40$. Write down the first five terms and state whether the sequence is increasing or decreasing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = u_n - 5",
          "explanation": "This rule builds each term from the previous one by subtracting $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 40",
          "explanation": "A recurrence needs an anchor to start from; here that is $u_1 = 40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = u_1 - 5 = 40 - 5 = 35",
          "explanation": "Setting $n = 1$ gives $u_2 = u_1 - 5$; subtracting $5$ from $40$ leaves $35$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = u_2 - 5 = 35 - 5 = 30",
          "explanation": "Feed the previous answer back in: $35 - 5 = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the fourth term",
          "workingLatex": "u_4 = u_3 - 5 = 30 - 5 = 25",
          "explanation": "Again subtract $5$ from the previous term to get $25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the fifth term",
          "workingLatex": "u_5 = u_4 - 5 = 25 - 5 = 20",
          "explanation": "One more application completes the five terms: $40, 35, 30, 25, 20$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State whether increasing or decreasing",
          "workingLatex": "u_{n+1} - u_n = -5 < 0",
          "explanation": "Every term is $5$ less than the previous one, so the sequence is decreasing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 40,\\ u_2 = 35,\\ u_3 = 30,\\ u_4 = 25,\\ u_5 = 20$; the sequence is decreasing."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "limits",
      "convergence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{u_n + 6}{2}$ with $u_1 = 2$. Find $u_2$, $u_3$ and $u_4$, and find the limit of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{u_n + 6}{2}",
          "explanation": "Each term is the average of the previous term and $6$: add $6$, then halve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "This is the anchor the sequence is generated from.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the second term",
          "workingLatex": "u_2 = \\dfrac{u_1 + 6}{2} = \\dfrac{2 + 6}{2}",
          "explanation": "Put $n = 1$ and substitute $u_1 = 2$ into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the second term",
          "workingLatex": "u_2 = \\dfrac{8}{2} = 4",
          "explanation": "Adding gives $8$, and halving gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the third term",
          "workingLatex": "u_3 = \\dfrac{u_2 + 6}{2} = \\dfrac{4 + 6}{2} = 5",
          "explanation": "Feed $u_2 = 4$ back in: $\\dfrac{10}{2} = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the fourth term",
          "workingLatex": "u_4 = \\dfrac{u_3 + 6}{2} = \\dfrac{5 + 6}{2} = \\dfrac{11}{2} = 5.5",
          "explanation": "Feed $u_3 = 5$ back in: $\\dfrac{11}{2} = 5.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Notice the trend",
          "workingLatex": "2, \\ 4, \\ 5, \\ 5.5, \\ \\ldots",
          "explanation": "The terms are rising, but by smaller and smaller amounts, edging toward a value near $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the idea of a limit",
          "workingLatex": "u_n \\to L \\ \\Rightarrow \\ u_{n+1} \\to L",
          "explanation": "If the sequence converges to a limit $L$, then both $u_n$ and the next term $u_{n+1}$ get arbitrarily close to the same value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Replace both terms with L",
          "workingLatex": "L = \\dfrac{L + 6}{2}",
          "explanation": "Substituting $L$ for both $u_{n+1}$ and $u_n$ turns the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for L",
          "workingLatex": "2L = L + 6 \\ \\Rightarrow \\ L = 6",
          "explanation": "Multiply both sides by $2$, then subtract $L$ from each side to leave $L = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm and state the limit",
          "workingLatex": "L = 6",
          "explanation": "The terms increase toward $6$ and the equation has the single solution $6$, so the limit is $6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = 4,\\ u_3 = 5,\\ u_4 = \\dfrac{11}{2}$, and the limit is $L = 6$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limits",
      "convergence",
      "linear model"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 0.2u_n + 4$. Given that the sequence converges, find the limit $L$ and explain why the terms approach it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the linear recurrence",
          "workingLatex": "u_{n+1} = 0.2u_n + 4",
          "explanation": "This has the form $u_{n+1} = au_n + b$ with $a = 0.2$ and $b = 4$: multiply by a fixed factor, then add a constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the meaning of a limit",
          "workingLatex": "u_n \\to L \\ \\Rightarrow \\ u_{n+1} \\to L",
          "explanation": "If the terms settle toward a limit $L$, then consecutive terms $u_n$ and $u_{n+1}$ both approach the same value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace both terms with L",
          "workingLatex": "L = 0.2L + 4",
          "explanation": "Substituting $L$ for $u_n$ and $u_{n+1}$ converts the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gather the L terms",
          "workingLatex": "L - 0.2L = 4",
          "explanation": "Subtract $0.2L$ from both sides to collect the unknown on the left.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the left side",
          "workingLatex": "0.8L = 4",
          "explanation": "Since $1 - 0.2 = 0.8$, the equation becomes $0.8L = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for L",
          "workingLatex": "L = \\dfrac{4}{0.8} = 5",
          "explanation": "Dividing $4$ by $0.8$ gives the limit $L = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check with the standard formula",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{4}{1 - 0.2} = 5",
          "explanation": "For $u_{n+1} = au_n + b$ the limit is $\\dfrac{b}{1 - a}$, which confirms $L = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the terms approach it",
          "workingLatex": "\\left| a \\right| = 0.2 < 1",
          "explanation": "Each step multiplies the distance from $L$ by $a$; since $\\left| a \\right| < 1$, that gap shrinks every time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the stability",
          "workingLatex": "\\text{gap to } L \\text{ is cut to } 0.2 \\text{ of its size each step}",
          "explanation": "Because the distance from $5$ is repeatedly reduced to a fifth, the terms close in on $5$ no matter where they start.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the limit",
          "workingLatex": "L = 5",
          "explanation": "The sequence converges to the limit $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 5$; the terms approach it because $\\left| a \\right| = 0.2 < 1$, so the distance to the limit shrinks at each step."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limits",
      "convergence",
      "quadratic"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\sqrt{6 + u_n}$ with $u_1 = 1$. Find $u_2$ and $u_3$, and find the limit of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\sqrt{6 + u_n}",
          "explanation": "Each term is found by adding $6$ to the previous term and taking the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 1",
          "explanation": "This anchors the sequence so the iteration can begin.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = \\sqrt{6 + 1} = \\sqrt{7} \\approx 2.646",
          "explanation": "Substitute $u_1 = 1$: $6 + 1 = 7$, and $\\sqrt{7} \\approx 2.646$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = \\sqrt{6 + \\sqrt{7}} \\approx \\sqrt{8.646} \\approx 2.940",
          "explanation": "Feed $u_2 \\approx 2.646$ back in: $6 + 2.646 = 8.646$, whose root is about $2.940$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Notice the trend",
          "workingLatex": "1, \\ 2.646, \\ 2.940, \\ \\ldots",
          "explanation": "The terms are rising by smaller amounts each time, closing in on a value near $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the idea of a limit",
          "workingLatex": "u_n \\to L \\ \\Rightarrow \\ u_{n+1} \\to L",
          "explanation": "If the sequence converges, both $u_n$ and $u_{n+1}$ approach the same limit $L$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Replace both terms with L",
          "workingLatex": "L = \\sqrt{6 + L}",
          "explanation": "Substituting $L$ into the recurrence gives an equation whose solution is the limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square both sides",
          "workingLatex": "L^2 = 6 + L",
          "explanation": "Squaring removes the square root; this is valid here because both sides are non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Form a quadratic",
          "workingLatex": "L^2 - L - 6 = 0",
          "explanation": "Bring every term to one side to obtain a standard quadratic in $L$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve the quadratic",
          "workingLatex": "(L - 3)(L + 2) = 0 \\ \\Rightarrow \\ L = 3 \\text{ or } L = -2",
          "explanation": "Factorising gives two possible roots for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Choose the valid root and state the limit",
          "workingLatex": "L = 3",
          "explanation": "A square root is never negative, and the terms are all positive and rising toward $3$, so $L = -2$ is impossible; the limit is $L = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = \\sqrt{7} \\approx 2.646,\\ u_3 \\approx 2.940$, and the limit is $L = 3$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limits",
      "convergence",
      "linear model"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = a u_n + 3$, where $a$ is a constant. Given that the sequence converges to the limit $5$, find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'converges to 5'",
          "workingLatex": "u_n \\to 5",
          "explanation": "Saying the sequence converges to $5$ means its terms get arbitrarily close to $5$ as $n$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consecutive terms share the limit",
          "workingLatex": "u_{n+1} \\to 5 \\text{ as well}",
          "explanation": "If $u_n$ approaches $5$, then the next term $u_{n+1}$ approaches the same value $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the limit into the recurrence",
          "workingLatex": "5 = a(5) + 3",
          "explanation": "Replace both $u_{n+1}$ and $u_n$ with the limit $5$ to obtain an equation in the unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right side",
          "workingLatex": "5 = 5a + 3",
          "explanation": "Writing $a \\times 5$ as $5a$ gives the equation $5 = 5a + 3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 3 from both sides",
          "workingLatex": "5 - 3 = 5a",
          "explanation": "Move the constant to the left to isolate the term containing $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the left side",
          "workingLatex": "2 = 5a",
          "explanation": "The left side becomes $2$, leaving $2 = 5a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = \\dfrac{2}{5}",
          "explanation": "Divide both sides by $5$ to make $a$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write as a decimal",
          "workingLatex": "a = 0.4",
          "explanation": "Since $\\dfrac{2}{5} = 0.4$, this is a convenient decimal form of the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the convergence condition",
          "workingLatex": "\\left| a \\right| = 0.4 < 1",
          "explanation": "For $u_{n+1} = au_n + b$ the sequence only converges when $\\left| a \\right| < 1$; since $0.4 < 1$, a genuine limit really does exist, so the value is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "a = \\dfrac{2}{5}",
          "explanation": "The constant is $a = \\dfrac{2}{5}$, that is $0.4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\dfrac{2}{5}$ (that is, $a = 0.4$)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "periodic sequences",
      "recurrence relations",
      "period"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 5 - u_n$ with first term $u_1 = 2$. Show that the sequence is $2, 3, 2, 3, \\ldots$ and state its period.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = 5 - u_n",
          "explanation": "This rule takes the current term and subtracts it from $5$ to make the next term. Because it feeds each answer back in, a repeating pattern is possible, so we generate terms one at a time and watch for it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "The recurrence only tells us how to step forward; we still need an anchor to begin from. Here that is $u_1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = 5 - u_1 = 5 - 2 = 3",
          "explanation": "Setting $n = 1$ gives $u_2 = 5 - u_1$; substituting $u_1 = 2$ produces the second term $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = 5 - u_2 = 5 - 3 = 2",
          "explanation": "Feeding $u_2 = 3$ back into the same rule brings us back to $2$ — already a sign the values are cycling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4 and u_5 to confirm the pattern",
          "workingLatex": "u_4 = 5 - u_3 = 5 - 2 = 3, \\quad u_5 = 5 - u_4 = 5 - 3 = 2",
          "explanation": "Continuing a little further checks the pattern is genuine and not a coincidence: the terms keep bouncing between $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe that the block repeats",
          "workingLatex": "2,\\ 3,\\ 2,\\ 3,\\ 2,\\ \\ldots",
          "explanation": "The values return to $2$ every time we take two steps, so the block $2, 3$ repeats forever. A sequence that repeats like this is called periodic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the period",
          "workingLatex": "u_{n+2} = u_n \\quad \\Rightarrow \\quad \\text{period} = 2",
          "explanation": "The shortest gap after which the terms repeat is $2$ terms, so the period is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is $2, 3, 2, 3, \\ldots$, which repeats every two terms, so it is periodic with period $2$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "recurrence relations",
      "period"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = -u_n$ with first term $u_1 = 4$. Find the first four terms and state the period of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = -u_n",
          "explanation": "This rule simply flips the sign of each term to get the next one. Flipping the sign twice returns you to where you started, so we expect a repeating pattern.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 4",
          "explanation": "We need a first term to launch the sequence, and here it is $u_1 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = -u_1 = -4",
          "explanation": "Changing the sign of $4$ gives $-4$ for the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = -u_2 = -(-4) = 4",
          "explanation": "Changing the sign of $-4$ gives back $4$ — the sign flip has undone itself.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = -u_3 = -4",
          "explanation": "Applying the rule once more returns $-4$, so the terms are alternating between $4$ and $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "List the terms and note the repeat",
          "workingLatex": "4,\\ -4,\\ 4,\\ -4,\\ \\ldots",
          "explanation": "The block $4, -4$ repeats indefinitely, which tells us the sequence is periodic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the period",
          "workingLatex": "u_{n+2} = u_n \\quad \\Rightarrow \\quad \\text{period} = 2",
          "explanation": "The values repeat every two terms, so the period is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 4,\\ u_2 = -4,\\ u_3 = 4,\\ u_4 = -4$; the sequence is periodic with period $2$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "period",
      "far term"
    ],
    "questionText": "A periodic sequence has period $3$ and its terms are $1, 4, 2, 1, 4, 2, \\ldots$. Find $u_{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret period 3",
          "workingLatex": "u_{n+3} = u_n",
          "explanation": "Period $3$ means the sequence exactly repeats every three terms, so a term is identical to the one three places before it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the repeating block and its positions",
          "workingLatex": "u_1 = 1, \\quad u_2 = 4, \\quad u_3 = 2",
          "explanation": "The whole sequence is built from these three values. Every term matches whichever of positions $1$, $2$ or $3$ it lines up with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the remainder on division by 3 to find the position",
          "workingLatex": "\\text{position of } u_n = \\text{remainder when } n \\text{ is divided by } 3",
          "explanation": "Because the pattern resets every $3$ terms, dividing the term number by $3$ and looking at the remainder tells us where in the block we land.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide 10 by 3",
          "workingLatex": "10 = 3 \\times 3 + 1",
          "explanation": "Ten terms cover three complete blocks and then one term over, so the remainder is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the remainder to a term in the block",
          "workingLatex": "u_{10} = u_7 = u_4 = u_1",
          "explanation": "Stepping back three at a time from $u_{10}$ lands on $u_1$, confirming that remainder $1$ corresponds to the first term of the block.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the value",
          "workingLatex": "u_{10} = u_1 = 1",
          "explanation": "Since $u_{10}$ sits in the same position as $u_1$, it takes that same value $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{10} = 1$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "recurrence relations",
      "period",
      "far term"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{1}{u_n}$ with first term $u_1 = 3$. Find the first few terms, show that the sequence has period $2$, and hence state $u_{11}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = \\dfrac{1}{u_n}",
          "explanation": "Each term is the reciprocal of the one before. Taking the reciprocal twice returns the original number, so a repeating pattern is very likely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 3",
          "explanation": "We begin from the given first term $u_1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = \\dfrac{1}{u_1} = \\dfrac{1}{3}",
          "explanation": "The reciprocal of $3$ is $\\dfrac{1}{3}$, giving the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = \\dfrac{1}{u_2} = \\dfrac{1}{\\frac{1}{3}} = 3",
          "explanation": "The reciprocal of $\\dfrac{1}{3}$ is $3$, so we are back to the starting value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4 to confirm the pattern",
          "workingLatex": "u_4 = \\dfrac{1}{u_3} = \\dfrac{1}{3}",
          "explanation": "The values keep alternating between $3$ and $\\dfrac{1}{3}$, confirming the cycle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the period",
          "workingLatex": "3,\\ \\tfrac{1}{3},\\ 3,\\ \\tfrac{1}{3},\\ \\ldots \\quad \\Rightarrow \\quad \\text{period} = 2",
          "explanation": "The block $3, \\dfrac{1}{3}$ repeats every two terms, so the period is $2$. Odd-numbered terms are $3$ and even-numbered terms are $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Locate u_11 within the cycle",
          "workingLatex": "11 = 2 \\times 5 + 1 \\quad \\Rightarrow \\quad u_{11} = u_1",
          "explanation": "Dividing $11$ by the period $2$ leaves remainder $1$, so $u_{11}$ sits in the same position as the first term. It is an odd index.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the value",
          "workingLatex": "u_{11} = 3",
          "explanation": "Since $u_{11}$ matches the position of $u_1$, it equals $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{11} = 3$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "recurrence relations",
      "period",
      "far term"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{1}{1 - u_n}$ with first term $u_1 = 2$. Show that the sequence is periodic with period $3$, and find $u_{50}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = \\dfrac{1}{1 - u_n}",
          "explanation": "Each term is found by subtracting the current term from $1$ and then taking the reciprocal. We generate terms in order and watch for the sequence to return to its start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "The sequence is anchored by its first term $u_1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = \\dfrac{1}{1 - u_1} = \\dfrac{1}{1 - 2} = \\dfrac{1}{-1} = -1",
          "explanation": "Substituting $u_1 = 2$ gives a denominator of $1 - 2 = -1$, so the reciprocal is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = \\dfrac{1}{1 - u_2} = \\dfrac{1}{1 - (-1)} = \\dfrac{1}{2}",
          "explanation": "Now the denominator is $1 - (-1) = 2$, so the third term is $\\dfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = \\dfrac{1}{1 - u_3} = \\dfrac{1}{1 - \\frac{1}{2}} = \\dfrac{1}{\\frac{1}{2}} = 2",
          "explanation": "The denominator is $1 - \\dfrac{1}{2} = \\dfrac{1}{2}$, and its reciprocal is $2$ — exactly the value we started with.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the return to the start",
          "workingLatex": "u_4 = u_1 = 2",
          "explanation": "Because the fourth term equals the first, applying the rule again must reproduce $u_2$, then $u_3$, and so on. The whole pattern locks into a loop.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the period",
          "workingLatex": "2,\\ -1,\\ \\tfrac{1}{2},\\ 2,\\ -1,\\ \\tfrac{1}{2},\\ \\ldots \\quad \\Rightarrow \\quad \\text{period} = 3",
          "explanation": "The block $2, -1, \\dfrac{1}{2}$ repeats every three terms, so the sequence is periodic with period $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the position of u_50 in the cycle",
          "workingLatex": "\\text{position of } u_n = \\text{remainder when } n \\text{ is divided by } 3",
          "explanation": "Since the pattern resets every $3$ terms, the remainder on dividing $50$ by $3$ tells us which term of the block $u_{50}$ matches.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Divide 50 by 3",
          "workingLatex": "50 = 3 \\times 16 + 2",
          "explanation": "Fifty terms give $16$ complete blocks and then two terms over, so the remainder is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Match the remainder to a term",
          "workingLatex": "u_{50} = u_2 = -1",
          "explanation": "Remainder $2$ means $u_{50}$ sits in the same position as the second term of the block, which is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the value",
          "workingLatex": "u_{50} = -1",
          "explanation": "So the fiftieth term of the sequence is $-1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is periodic with period $3$, and $u_{50} = -1$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "period",
      "far term",
      "sum"
    ],
    "questionText": "A sequence is periodic with period $4$ and its first four terms are $u_1 = 3$, $u_2 = 7$, $u_3 = -2$ and $u_4 = 5$. Find $u_{2026}$ and the sum of the terms in one complete period.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret period 4",
          "workingLatex": "u_{n+4} = u_n",
          "explanation": "Period $4$ means the sequence repeats exactly every four terms, so every term matches the one four places earlier.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the repeating block with its positions",
          "workingLatex": "u_1 = 3, \\quad u_2 = 7, \\quad u_3 = -2, \\quad u_4 = 5",
          "explanation": "These four values are all the sequence ever contains; every later term copies one of them depending on its position in the block.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the remainder on division by 4 to find the position",
          "workingLatex": "\\text{position of } u_n = \\text{remainder when } n \\text{ is divided by } 4",
          "explanation": "Because the block has length $4$, dividing the term number by $4$ and reading the remainder tells us where in the block that term lies.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide 2026 by 4",
          "workingLatex": "2026 = 4 \\times 506 + 2",
          "explanation": "This covers $506$ complete blocks and then two terms over, so the remainder is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match the remainder to a term",
          "workingLatex": "u_{2026} = u_2",
          "explanation": "Remainder $2$ places $u_{2026}$ in the same position as the second term of the block.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State u_2026",
          "workingLatex": "u_{2026} = 7",
          "explanation": "The second term of the block is $7$, so $u_{2026} = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the sum of one period",
          "workingLatex": "S = u_1 + u_2 + u_3 + u_4",
          "explanation": "One complete period is just the four distinct terms added together; every full cycle contributes exactly this total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "S = 3 + 7 + (-2) + 5",
          "explanation": "We insert the four known terms, taking care to add the negative term as a subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the sum",
          "workingLatex": "S = 13",
          "explanation": "Combining $3 + 7 - 2 + 5$ gives $13$ for one full period.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both results",
          "workingLatex": "u_{2026} = 7, \\quad S = 13",
          "explanation": "So the $2026$th term is $7$ and each complete period sums to $13$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{2026} = 7$ and the sum of one complete period is $13$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "period",
      "sum"
    ],
    "questionText": "A sequence is periodic with period $3$ and its terms repeat as $5, 8, 2, 5, 8, 2, \\ldots$. Find the sum of the first $100$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret period 3",
          "workingLatex": "u_{n+3} = u_n",
          "explanation": "The sequence repeats every three terms, so the first $100$ terms are made entirely of copies of the block $5, 8, 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the sum of one period",
          "workingLatex": "P = 5 + 8 + 2 = 15",
          "explanation": "Every complete cycle contributes the same total, so the sum of one block is the key building number.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plan how to split 100 terms",
          "workingLatex": "100 = 3q + r",
          "explanation": "To add $100$ terms we count how many whole blocks fit ($q$) and how many spare terms are left over ($r$), then handle each part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide 100 by 3",
          "workingLatex": "100 = 3 \\times 33 + 1",
          "explanation": "There are $33$ complete blocks and then $1$ extra term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the complete periods",
          "workingLatex": "33 \\times 15 = 495",
          "explanation": "Each of the $33$ full periods contributes $15$, so together they contribute $495$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the leftover term",
          "workingLatex": "\\text{remainder } 1 \\ \\Rightarrow \\ \\text{extra term} = u_1 = 5",
          "explanation": "After the $33$ blocks, one more term follows, which starts a fresh block and is therefore $u_1 = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the two parts",
          "workingLatex": "S_{100} = 495 + 5",
          "explanation": "The total is the sum from the complete periods plus the single leftover term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the total",
          "workingLatex": "S_{100} = 500",
          "explanation": "Adding gives $500$ for the sum of the first $100$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_{100} = 500",
          "explanation": "So the first $100$ terms of the sequence sum to $500$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum of the first $100$ terms is $500$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "recurrence relations",
      "period",
      "far term"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{u_n - 1}{u_n}$ with first term $u_1 = 2$. Show that the sequence is periodic, state its period, and find $u_{100}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence relation",
          "workingLatex": "u_{n+1} = \\dfrac{u_n - 1}{u_n}",
          "explanation": "Each term is made by subtracting $1$ from the current term and dividing by the current term. We generate terms in order and look for the sequence to loop back.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting value",
          "workingLatex": "u_1 = 2",
          "explanation": "The sequence is launched from its first term $u_1 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = \\dfrac{u_1 - 1}{u_1} = \\dfrac{2 - 1}{2} = \\dfrac{1}{2}",
          "explanation": "Substituting $u_1 = 2$ gives $\\dfrac{2 - 1}{2} = \\dfrac{1}{2}$ for the second term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = \\dfrac{u_2 - 1}{u_2} = \\dfrac{\\frac{1}{2} - 1}{\\frac{1}{2}} = \\dfrac{-\\frac{1}{2}}{\\frac{1}{2}} = -1",
          "explanation": "The numerator $\\dfrac{1}{2} - 1 = -\\dfrac{1}{2}$ divided by $\\dfrac{1}{2}$ gives $-1$ for the third term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = \\dfrac{u_3 - 1}{u_3} = \\dfrac{-1 - 1}{-1} = \\dfrac{-2}{-1} = 2",
          "explanation": "Here $\\dfrac{-2}{-1} = 2$, which is exactly the first term again.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recognise the return to the start",
          "workingLatex": "u_4 = u_1 = 2 \\quad \\Rightarrow \\quad \\text{period} = 3",
          "explanation": "Because the fourth term matches the first, the same three values must repeat forever, so the sequence is periodic with period $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Record the repeating block",
          "workingLatex": "2,\\ \\tfrac{1}{2},\\ -1,\\ 2,\\ \\tfrac{1}{2},\\ -1,\\ \\ldots",
          "explanation": "Writing the block out makes the position of each term clear: positions $1, 2, 3$ hold $2$, $\\dfrac{1}{2}$ and $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate u_100 within the cycle",
          "workingLatex": "100 = 3 \\times 33 + 1",
          "explanation": "Dividing $100$ by the period $3$ leaves remainder $1$, so $u_{100}$ sits in the same position as the first term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the value",
          "workingLatex": "u_{100} = u_1 = 2",
          "explanation": "Remainder $1$ points to the first term of the block, which is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "\\text{period} = 3, \\quad u_{100} = 2",
          "explanation": "So the sequence has period $3$ and its $100$th term is $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is periodic with period $3$, and $u_{100} = 2$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "period",
      "sum"
    ],
    "questionText": "A sequence is periodic with period $5$ and its terms repeat as $2, 6, 1, 4, 7, 2, 6, 1, 4, 7, \\ldots$. Find the sum of the first $60$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret period 5",
          "workingLatex": "u_{n+5} = u_n",
          "explanation": "The sequence repeats every five terms, so the first $60$ terms are just copies of the block $2, 6, 1, 4, 7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the repeating block",
          "workingLatex": "2,\\ 6,\\ 1,\\ 4,\\ 7",
          "explanation": "These five values make up one full period; every cycle adds the same set of numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the sum of one period",
          "workingLatex": "P = 2 + 6 + 1 + 4 + 7",
          "explanation": "The total of one block is the key number, since we will multiply it by however many complete blocks appear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the period sum",
          "workingLatex": "P = 20",
          "explanation": "Adding the five terms gives $20$ for one complete period.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plan how to split 60 terms",
          "workingLatex": "60 = 5q + r",
          "explanation": "We count how many whole blocks of $5$ fit into $60$ and check for any leftover terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide 60 by 5",
          "workingLatex": "60 = 5 \\times 12 + 0",
          "explanation": "Sixty divides exactly by five, giving $12$ complete blocks and a remainder of $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note there are no leftover terms",
          "workingLatex": "r = 0 \\ \\Rightarrow \\ 12 \\text{ complete periods only}",
          "explanation": "Because the remainder is $0$, the first $60$ terms are exactly $12$ whole periods with nothing extra to add.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply the period sum by the number of periods",
          "workingLatex": "S_{60} = 12 \\times 20",
          "explanation": "Each of the $12$ complete periods contributes $20$, so we multiply.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the total",
          "workingLatex": "S_{60} = 240",
          "explanation": "This gives $240$ for the sum of the first $60$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "S_{60} = 240",
          "explanation": "So the first $60$ terms of the sequence sum to $240$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sum of the first $60$ terms is $240$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "periodic sequences",
      "period",
      "far term",
      "sum"
    ],
    "questionText": "A sequence is periodic with period $6$ and its first six terms are $4, 1, 3, 6, 2, 5$, repeating thereafter. Find $u_{100}$ and the sum of the first $100$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret period 6",
          "workingLatex": "u_{n+6} = u_n",
          "explanation": "The sequence repeats exactly every six terms, so every term equals the one six places before it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the block with its positions",
          "workingLatex": "u_1 = 4,\\ u_2 = 1,\\ u_3 = 3,\\ u_4 = 6,\\ u_5 = 2,\\ u_6 = 5",
          "explanation": "These six values are all the sequence ever contains; a term's value is decided by its position within this block.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the remainder on division by 6 to place u_100",
          "workingLatex": "\\text{position of } u_n = \\text{remainder when } n \\text{ is divided by } 6",
          "explanation": "Because the block has length $6$, the remainder on dividing $100$ by $6$ tells us which term of the block $u_{100}$ matches.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide 100 by 6",
          "workingLatex": "100 = 6 \\times 16 + 4",
          "explanation": "There are $16$ complete blocks and then four terms over, so the remainder is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off u_100",
          "workingLatex": "u_{100} = u_4 = 6",
          "explanation": "Remainder $4$ places $u_{100}$ in the same position as the fourth term of the block, which is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the sum of one period",
          "workingLatex": "P = 4 + 1 + 3 + 6 + 2 + 5 = 21",
          "explanation": "Every complete cycle contributes this same total, so $21$ is the building block for the sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split 100 terms into periods plus a remainder",
          "workingLatex": "100 = 16 \\text{ periods} + 4 \\text{ terms}",
          "explanation": "From the division above, the first $100$ terms are $16$ complete periods followed by $4$ leftover terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the complete periods",
          "workingLatex": "16 \\times 21 = 336",
          "explanation": "The $16$ full periods each contribute $21$, giving $336$ in total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the leftover terms",
          "workingLatex": "u_1 + u_2 + u_3 + u_4 = 4 + 1 + 3 + 6 = 14",
          "explanation": "The four extra terms start a fresh block, so they are the first four terms $4, 1, 3, 6$, which sum to $14$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine both parts",
          "workingLatex": "S_{100} = 336 + 14 = 350",
          "explanation": "Adding the complete-period total to the leftover total gives the full sum.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the results",
          "workingLatex": "u_{100} = 6, \\quad S_{100} = 350",
          "explanation": "So the $100$th term is $6$ and the first $100$ terms sum to $350$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{100} = 6$ and the sum of the first $100$ terms is $350$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sequences",
      "sigma notation",
      "series",
      "nth term"
    ],
    "questionText": "A sequence has $n$th term $u_n = 2n - 1$. Evaluate $\\sum_{n=1}^{5} u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the position-to-term formula",
          "workingLatex": "u_n = 2n - 1",
          "explanation": "This gives the $n$th term directly: choose a position $n$, substitute it, and the formula returns that term. No previous term is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{n=1}^{5} u_n = u_1 + u_2 + u_3 + u_4 + u_5",
          "explanation": "The symbol $\\sum$ means 'add up'. The $n = 1$ underneath and $5$ on top tell us to run $n$ from $1$ to $5$ and total the terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute n = 1, 2, 3",
          "workingLatex": "u_1 = 2(1) - 1 = 1, \\quad u_2 = 2(2) - 1 = 3, \\quad u_3 = 2(3) - 1 = 5",
          "explanation": "Putting each value of $n$ into $2n - 1$ gives the first three terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute n = 4, 5",
          "workingLatex": "u_4 = 2(4) - 1 = 7, \\quad u_5 = 2(5) - 1 = 9",
          "explanation": "The same substitution gives the last two terms we need.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the pattern",
          "workingLatex": "1, 3, 5, 7, 9",
          "explanation": "These are the first five odd numbers — a useful check that the terms are correct and evenly spaced by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the five terms",
          "workingLatex": "\\sum_{n=1}^{5} u_n = 1 + 3 + 5 + 7 + 9 = 25",
          "explanation": "Adding the terms gives the total. As a neat check, the first five odd numbers always sum to $5^2 = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\sum_{n=1}^{5} u_n = 25",
          "explanation": "The value of the sum is $25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{n=1}^{5} u_n = 25$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "series",
      "arithmetic sequence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = u_n + 3$ with first term $u_1 = 2$. Write down the first five terms and find their sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = u_n + 3",
          "explanation": "Each new term is found by adding $3$ to the term before it, so the sequence climbs in steps of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting term",
          "workingLatex": "u_1 = 2",
          "explanation": "The recurrence needs an anchor to start from; here the first term is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = u_1 + 3 = 2 + 3 = 5",
          "explanation": "Add $3$ to the first term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = u_2 + 3 = 5 + 3 = 8",
          "explanation": "Feed the previous answer back in and add $3$ again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = u_3 + 3 = 8 + 3 = 11",
          "explanation": "Repeat the same step starting from $u_3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find u_5",
          "workingLatex": "u_5 = u_4 + 3 = 11 + 3 = 14",
          "explanation": "One more application gives the fifth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the five terms",
          "workingLatex": "2 + 5 + 8 + 11 + 14 = 40",
          "explanation": "Total the five terms we generated.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "2, 5, 8, 11, 14 \\quad \\text{sum} = 40",
          "explanation": "The first five terms are $2, 5, 8, 11, 14$ and their sum is $40$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The first five terms are $2, 5, 8, 11, 14$, and their sum is $40$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "sigma notation",
      "series"
    ],
    "questionText": "A sequence is defined by $u_{r+1} = 2u_r + 1$ with $u_1 = 1$. Evaluate $\\sum_{r=1}^{4} u_r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{r+1} = 2u_r + 1",
          "explanation": "Each term is made by doubling the previous term and then adding $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the starting term",
          "workingLatex": "u_1 = 1",
          "explanation": "This is the anchor value the recurrence builds from.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = 2u_1 + 1 = 2(1) + 1 = 3",
          "explanation": "Double the first term and add $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = 2u_2 + 1 = 2(3) + 1 = 7",
          "explanation": "Feed $u_2 = 3$ back into the same rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = 2u_3 + 1 = 2(7) + 1 = 15",
          "explanation": "One more application, using $u_3 = 7$, gives the fourth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sum",
          "workingLatex": "\\sum_{r=1}^{4} u_r = u_1 + u_2 + u_3 + u_4",
          "explanation": "The sigma notation asks us to add the terms from $r = 1$ to $r = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the terms",
          "workingLatex": "\\sum_{r=1}^{4} u_r = 1 + 3 + 7 + 15 = 26",
          "explanation": "Totalling the four terms gives $26$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "\\sum_{r=1}^{4} u_r = 26",
          "explanation": "The value of the sum is $26$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{4} u_r = 26$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sequences",
      "sigma notation",
      "series",
      "nth term"
    ],
    "questionText": "A sequence has $n$th term $u_n = n^2 + 1$. Evaluate $\\sum_{n=1}^{6} u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the formula",
          "workingLatex": "u_n = n^2 + 1",
          "explanation": "Substituting a position $n$ squares it and adds $1$ to give that term directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{n=1}^{6} u_n = u_1 + u_2 + u_3 + u_4 + u_5 + u_6",
          "explanation": "We must run $n$ from $1$ to $6$ and total the six terms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute n = 1, 2, 3",
          "workingLatex": "u_1 = 1^2 + 1 = 2, \\quad u_2 = 2^2 + 1 = 5, \\quad u_3 = 3^2 + 1 = 10",
          "explanation": "Square each value of $n$ and add $1$ to get the first three terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute n = 4, 5, 6",
          "workingLatex": "u_4 = 4^2 + 1 = 17, \\quad u_5 = 5^2 + 1 = 26, \\quad u_6 = 6^2 + 1 = 37",
          "explanation": "The same rule gives the remaining three terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the addition",
          "workingLatex": "\\sum_{n=1}^{6} u_n = 2 + 5 + 10 + 17 + 26 + 37",
          "explanation": "List all six terms ready to be added.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add step by step",
          "workingLatex": "2 + 5 = 7, \\ + 10 = 17, \\ + 17 = 34, \\ + 26 = 60, \\ + 37 = 97",
          "explanation": "Keeping a running total avoids arithmetic slips: the terms accumulate to $97$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "\\sum_{n=1}^{6} u_n = 97",
          "explanation": "The value of the sum is $97$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{n=1}^{6} u_n = 97$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "periodic sequences",
      "series",
      "sigma notation"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{1}{1 - u_n}$ with $u_1 = 2$. Show that the sequence is periodic and hence evaluate $\\sum_{n=1}^{20} u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{1}{1 - u_n}",
          "explanation": "Each term is built by subtracting the current term from $1$ and then taking the reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start from u_1",
          "workingLatex": "u_1 = 2",
          "explanation": "This is the given first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_2",
          "workingLatex": "u_2 = \\dfrac{1}{1 - u_1} = \\dfrac{1}{1 - 2} = \\dfrac{1}{-1} = -1",
          "explanation": "Substitute $u_1 = 2$; the denominator is $1 - 2 = -1$, so the reciprocal is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_3",
          "workingLatex": "u_3 = \\dfrac{1}{1 - u_2} = \\dfrac{1}{1 - (-1)} = \\dfrac{1}{2}",
          "explanation": "Subtracting a negative adds, so the denominator is $1 + 1 = 2$ and the term is $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute u_4",
          "workingLatex": "u_4 = \\dfrac{1}{1 - u_3} = \\dfrac{1}{1 - \\frac{1}{2}} = \\dfrac{1}{\\frac{1}{2}} = 2",
          "explanation": "The denominator is $\\tfrac{1}{2}$, and dividing $1$ by $\\tfrac{1}{2}$ gives $2$ — exactly the first term again.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the period",
          "workingLatex": "u_4 = u_1 \\ \\Rightarrow\\ \\text{period } 3",
          "explanation": "Because $u_4$ equals $u_1$, the rule must reproduce the same three values forever. The sequence is periodic with period $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the repeating block",
          "workingLatex": "2, \\ -1, \\ \\tfrac{1}{2}, \\ 2, \\ -1, \\ \\tfrac{1}{2}, \\ \\dots",
          "explanation": "The block $2, -1, \\tfrac{1}{2}$ cycles endlessly, which lets us total many terms quickly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum one full period",
          "workingLatex": "2 + (-1) + \\dfrac{1}{2} = \\dfrac{3}{2}",
          "explanation": "Adding the three distinct values gives the total contributed by each complete cycle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Split 20 terms into periods",
          "workingLatex": "20 = 3 \\times 6 + 2",
          "explanation": "Twenty terms make $6$ complete cycles of length $3$, with $2$ terms left over.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the total",
          "workingLatex": "\\sum_{n=1}^{20} u_n = 6 \\times \\dfrac{3}{2} + (u_1 + u_2)",
          "explanation": "Six full cycles each contribute $\\tfrac{3}{2}$, and the $2$ extra terms are the start of a fresh cycle, namely $u_1$ and $u_2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate",
          "workingLatex": "= 9 + (2 + (-1)) = 9 + 1 = 10",
          "explanation": "Six cycles give $9$; the two leftover terms add $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "\\sum_{n=1}^{20} u_n = 10",
          "explanation": "The sum of the first $20$ terms is $10$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is periodic with period $3$, and $\\sum_{n=1}^{20} u_n = 10$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "generating terms",
      "nth term",
      "series"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = u_n + (2n + 1)$ with $u_1 = 1$. Find the first five terms, write down an expression for $u_n$, and hence evaluate $\\sum_{n=1}^{5} u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = u_n + (2n + 1)",
          "explanation": "To get the next term, add the odd number $2n + 1$ — which grows as $n$ increases — to the current term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start from u_1",
          "workingLatex": "u_1 = 1",
          "explanation": "This is the given first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2 (n = 1)",
          "workingLatex": "u_2 = u_1 + (2(1) + 1) = 1 + 3 = 4",
          "explanation": "With $n = 1$ the amount added is $2(1) + 1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3 (n = 2)",
          "workingLatex": "u_3 = u_2 + (2(2) + 1) = 4 + 5 = 9",
          "explanation": "With $n = 2$ the amount added is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4 (n = 3)",
          "workingLatex": "u_4 = u_3 + (2(3) + 1) = 9 + 7 = 16",
          "explanation": "With $n = 3$ the amount added is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find u_5 (n = 4)",
          "workingLatex": "u_5 = u_4 + (2(4) + 1) = 16 + 9 = 25",
          "explanation": "With $n = 4$ the amount added is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recognise the pattern",
          "workingLatex": "1, 4, 9, 16, 25 = 1^2, 2^2, 3^2, 4^2, 5^2 \\ \\Rightarrow\\ u_n = n^2",
          "explanation": "The terms are perfect squares. This makes sense: starting at $1$ and adding successive odd numbers builds the squares, because $n^2 + (2n + 1) = (n + 1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the sum",
          "workingLatex": "\\sum_{n=1}^{5} u_n = u_1 + u_2 + u_3 + u_4 + u_5",
          "explanation": "We add the five terms just found.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the terms",
          "workingLatex": "\\sum_{n=1}^{5} u_n = 1 + 4 + 9 + 16 + 25 = 55",
          "explanation": "Totalling the five square numbers gives $55$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "u_n = n^2, \\quad \\sum_{n=1}^{5} u_n = 55",
          "explanation": "The $n$th term is $n^2$ and the required sum is $55$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_n = n^2$, and $\\sum_{n=1}^{5} u_n = 55$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limit of a sequence",
      "convergence",
      "fixed point"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{3u_n + 2}{4}$. Given that the sequence converges, find the value $L$ to which it converges.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret and rewrite the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{3u_n + 2}{4} = \\dfrac{3}{4}u_n + \\dfrac{1}{2}",
          "explanation": "Splitting the fraction shows this is a linear recurrence $u_{n+1} = au_n + b$ with $a = \\tfrac{3}{4}$ and $b = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check it converges",
          "workingLatex": "\\left| a \\right| = \\dfrac{3}{4} < 1",
          "explanation": "A linear recurrence settles to a fixed limit when the multiplier $a$ has size less than $1$, which holds here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the limit condition",
          "workingLatex": "u_{n+1} \\to L, \\quad u_n \\to L",
          "explanation": "As the terms settle, consecutive terms become indistinguishable, so both $u_{n+1}$ and $u_n$ approach the same value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace both terms by L",
          "workingLatex": "L = \\dfrac{3L + 2}{4}",
          "explanation": "Substituting $L$ for $u_{n+1}$ and $u_n$ turns the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "4L = 3L + 2",
          "explanation": "Multiply both sides by $4$ to remove the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for L",
          "workingLatex": "4L - 3L = 2 \\ \\Rightarrow\\ L = 2",
          "explanation": "Collecting the $L$ terms leaves $L = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity-check by iterating",
          "workingLatex": "u_1 = 6: \\quad u_2 = \\dfrac{3(6) + 2}{4} = 5, \\quad u_3 = \\dfrac{3(5) + 2}{4} = \\dfrac{17}{4} = 4.25",
          "explanation": "Starting from any value, say $6$, the terms $6, 5, 4.25, \\dots$ march steadily towards $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the trend",
          "workingLatex": "6 \\to 5 \\to 4.25 \\to \\dots \\to 2",
          "explanation": "The terms keep closing in on $2$, which agrees with the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the result",
          "workingLatex": "L = 2",
          "explanation": "The limit is the value the sequence would reach if it continued forever.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "L = 2",
          "explanation": "The sequence converges to $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 2$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limit of a sequence",
      "convergence",
      "iteration"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 0.5u_n + 3$ with $u_1 = 2$. Find the limit $L$ of the sequence, and determine the first term that is within $0.1$ of $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = 0.5u_n + 3",
          "explanation": "This is a linear recurrence with multiplier $a = 0.5$ and added constant $b = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check it converges",
          "workingLatex": "\\left| a \\right| = 0.5 < 1",
          "explanation": "Because the multiplier has size below $1$, the sequence settles to a limit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the limit equation",
          "workingLatex": "L = 0.5L + 3",
          "explanation": "At the limit, $u_{n+1}$ and $u_n$ are both $L$, so substitute $L$ into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for L",
          "workingLatex": "L - 0.5L = 3 \\ \\Rightarrow\\ 0.5L = 3 \\ \\Rightarrow\\ L = 6",
          "explanation": "Collecting terms gives the limit $L = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Record the starting distance",
          "workingLatex": "u_1 = 2, \\quad \\left| 6 - 2 \\right| = 4",
          "explanation": "The first term is $4$ away from the limit; we now iterate and watch this gap shrink.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute u_2 and its distance",
          "workingLatex": "u_2 = 0.5(2) + 3 = 4, \\quad \\left| 6 - 4 \\right| = 2",
          "explanation": "The gap has halved from $4$ to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 0.5(4) + 3 = 5, \\quad \\left| 6 - 5 \\right| = 1",
          "explanation": "The gap halves again to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 0.5(5) + 3 = 5.5, \\quad \\left| 6 - 5.5 \\right| = 0.5",
          "explanation": "The gap is now $0.5$, still larger than $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute u_5",
          "workingLatex": "u_5 = 0.5(5.5) + 3 = 5.75, \\quad \\left| 6 - 5.75 \\right| = 0.25",
          "explanation": "The gap is $0.25$, still above $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute u_6",
          "workingLatex": "u_6 = 0.5(5.75) + 3 = 5.875, \\quad \\left| 6 - 5.875 \\right| = 0.125",
          "explanation": "The gap is $0.125$ — still just above the $0.1$ threshold.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute u_7 and check the boundary",
          "workingLatex": "u_7 = 0.5(5.875) + 3 = 5.9375, \\quad \\left| 6 - 5.9375 \\right| = 0.0625 < 0.1",
          "explanation": "Now the gap $0.0625$ is below $0.1$. Since $u_6$ was still $0.125$ away, $u_7$ is the first term within $0.1$ of the limit.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "L = 6, \\quad u_7 = 5.9375",
          "explanation": "The limit is $6$, and the first term within $0.1$ of it is the seventh term, $u_7 = 5.9375$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 6$; the first term within $0.1$ of $L$ is $u_7 = 5.9375$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limit of a sequence",
      "convergence",
      "proof",
      "linear model"
    ],
    "questionText": "A sequence is defined by the linear recurrence $u_{n+1} = au_n + b$, where $\\left| a \\right| < 1$. Prove that the sequence converges to $L = \\dfrac{b}{1 - a}$, and hence find the limit of the sequence $u_{n+1} = 0.2u_n + 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the setup and aim",
          "workingLatex": "u_{n+1} = au_n + b, \\quad \\left| a \\right| < 1",
          "explanation": "We want to show the sequence approaches a single limit $L$ and to find a formula for that limit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Assume a limit exists",
          "workingLatex": "u_n \\to L \\ \\Rightarrow\\ u_{n+1} \\to L",
          "explanation": "If the terms settle at $L$, then the very next term also settles at $L$; consecutive terms share the same limit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take limits of both sides",
          "workingLatex": "L = aL + b",
          "explanation": "Replacing $u_{n+1}$ and $u_n$ by $L$ turns the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gather the L terms",
          "workingLatex": "L - aL = b",
          "explanation": "Move the $aL$ across so all $L$ terms are on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factorise",
          "workingLatex": "L(1 - a) = b",
          "explanation": "Factor out $L$ on the left-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to isolate L",
          "workingLatex": "L = \\dfrac{b}{1 - a}",
          "explanation": "Since $\\left| a \\right| < 1$ means $a \\neq 1$, the factor $1 - a$ is non-zero, so we may divide by it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up a convergence proof",
          "workingLatex": "e_n = u_n - L",
          "explanation": "So far we only assumed a limit exists. To prove it truly converges, define the error $e_n$: how far term $n$ sits from $L$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the next error",
          "workingLatex": "e_{n+1} = u_{n+1} - L = au_n + b - L",
          "explanation": "Substitute the recurrence for $u_{n+1}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the limit relation",
          "workingLatex": "L = aL + b \\ \\Rightarrow\\ b - L = -aL",
          "explanation": "Rearranging the limit equation gives a replacement for $b - L$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the error recurrence",
          "workingLatex": "e_{n+1} = au_n - aL = a(u_n - L) = a\\,e_n",
          "explanation": "The errors obey the same multiplier: each error is exactly $a$ times the previous error.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve the error recurrence",
          "workingLatex": "e_n = a^{n-1}e_1",
          "explanation": "Multiplying by $a$ at every step means the error is the starting error scaled by $a^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Let n grow without bound",
          "workingLatex": "\\left| a \\right| < 1 \\ \\Rightarrow\\ a^{n-1} \\to 0 \\ \\Rightarrow\\ e_n \\to 0 \\ \\Rightarrow\\ u_n \\to L",
          "explanation": "A number smaller than $1$ in size, raised to ever higher powers, shrinks to zero — so the error vanishes and $u_n$ genuinely converges to $L = \\tfrac{b}{1-a}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Apply to the given case",
          "workingLatex": "u_{n+1} = 0.2u_n + 8 \\ \\Rightarrow\\ a = 0.2, \\ b = 8",
          "explanation": "Read off the multiplier and constant from the specific recurrence.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the condition",
          "workingLatex": "\\left| a \\right| = 0.2 < 1",
          "explanation": "The convergence condition holds, so the formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Substitute into the formula",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{8}{1 - 0.2} = \\dfrac{8}{0.8} = 10",
          "explanation": "Plugging $a = 0.2$ and $b = 8$ into $L = \\tfrac{b}{1-a}$ gives $10$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer",
          "workingLatex": "L = \\dfrac{b}{1 - a}; \\quad L = 10 \\text{ for } u_{n+1} = 0.2u_n + 8",
          "explanation": "The limit is $L = \\tfrac{b}{1-a}$ in general, which equals $10$ for the given sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence converges to $L = \\dfrac{b}{1 - a}$; for $u_{n+1} = 0.2u_n + 8$ this gives $L = 10$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "geometric sequence",
      "sum to infinity",
      "convergence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{u_n}{2}$ with $u_1 = 8$. Explain why the terms form a geometric sequence, and find the sum to infinity of all its terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{u_n}{2}",
          "explanation": "Each term is exactly half of the term before it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Start from u_1",
          "workingLatex": "u_1 = 8",
          "explanation": "This is the given first term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_2",
          "workingLatex": "u_2 = \\dfrac{8}{2} = 4",
          "explanation": "Halve the first term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_3",
          "workingLatex": "u_3 = \\dfrac{4}{2} = 2",
          "explanation": "Halve again.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_4",
          "workingLatex": "u_4 = \\dfrac{2}{2} = 1",
          "explanation": "And once more.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find u_5 and see the pattern",
          "workingLatex": "u_5 = \\dfrac{1}{2}; \\quad 8, 4, 2, 1, \\tfrac{1}{2}, \\dots",
          "explanation": "The terms keep halving, producing $8, 4, 2, 1, \\tfrac{1}{2}, \\dots$",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the common ratio",
          "workingLatex": "\\dfrac{u_{n+1}}{u_n} = \\dfrac{1}{2} \\ \\text{(constant)}",
          "explanation": "Dividing any term by the one before always gives $\\tfrac{1}{2}$. A constant ratio between successive terms is exactly what defines a geometric sequence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State it is geometric",
          "workingLatex": "a = 8, \\quad r = \\dfrac{1}{2}",
          "explanation": "So this is a geometric sequence with first term $a = 8$ and common ratio $r = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the general term",
          "workingLatex": "u_n = 8 \\left( \\dfrac{1}{2} \\right)^{n-1}",
          "explanation": "A geometric sequence has $n$th term $ar^{n-1}$. Check: $n = 4$ gives $8 \\left( \\tfrac{1}{2} \\right)^3 = 8 \\times \\tfrac{1}{8} = 1$, matching $u_4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check a sum to infinity exists",
          "workingLatex": "\\left| r \\right| = \\dfrac{1}{2} < 1",
          "explanation": "A geometric series only totals a finite amount when the ratio has size less than $1$; here it does, so the infinite sum exists.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Recall the sum-to-infinity formula",
          "workingLatex": "S_\\infty = \\dfrac{a}{1 - r}",
          "explanation": "For a convergent geometric series the total of all terms is the first term divided by $1$ minus the ratio.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the values",
          "workingLatex": "S_\\infty = \\dfrac{8}{1 - \\frac{1}{2}} = \\dfrac{8}{\\frac{1}{2}}",
          "explanation": "Put $a = 8$ and $r = \\tfrac{1}{2}$ into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "S_\\infty = \\dfrac{8}{\\frac{1}{2}} = 8 \\times 2 = 16",
          "explanation": "Dividing by $\\tfrac{1}{2}$ is the same as multiplying by $2$, giving $16$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Interpret the link",
          "workingLatex": "8 + 4 + 2 + 1 + \\dfrac{1}{2} + \\dots = 16",
          "explanation": "Each halving term adds less than the one before, so the running total closes in on a ceiling of $16$ without ever passing it — that ceiling is the sum to infinity.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "\\text{geometric: } a = 8, \\ r = \\tfrac{1}{2}; \\quad S_\\infty = 16",
          "explanation": "The terms are geometric with ratio $\\tfrac{1}{2}$, and the sum of all of them is $16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The terms form a geometric sequence with $a = 8$ and $r = \\dfrac{1}{2}$; the sum to infinity is $16$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limit of a sequence",
      "convergence",
      "linear recurrence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 0.25u_n + 9$ with first term $u_1 = 4$. (a) Show that the sequence converges and find its limit $L$. (b) Verify that your answer is reasonable by computing $u_2$, $u_3$ and $u_4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure of the recurrence",
          "workingLatex": "u_{n+1} = au_n + b, \\quad a = 0.25, \\quad b = 9",
          "explanation": "This is a linear recurrence: each term is a fixed multiple of the previous term plus a fixed amount. Recognising the multiplier $a = 0.25$ and the constant $b = 9$ tells us exactly how the sequence behaves.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the condition for convergence",
          "workingLatex": "\\left| a \\right| = 0.25 < 1",
          "explanation": "A linear recurrence settles down to a fixed value only when the multiplier has size less than $1$. Multiplying by a quarter each step shrinks the gap between a term and its target, so the sequence must converge.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the limit equation",
          "workingLatex": "L = 0.25L + 9",
          "explanation": "If the terms settle to a limit $L$, then both $u_{n+1}$ and $u_n$ get arbitrarily close to $L$. Since the rule always holds, we can replace both by $L$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the L terms",
          "workingLatex": "L - 0.25L = 9 \\quad\\Rightarrow\\quad 0.75L = 9",
          "explanation": "Subtracting $0.25L$ from both sides gathers the unknown on one side, leaving a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the limit",
          "workingLatex": "L = \\dfrac{9}{0.75} = 12",
          "explanation": "Dividing by $0.75$ isolates $L$. The sequence therefore converges to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute u_2 to check the trend",
          "workingLatex": "u_2 = 0.25(4) + 9 = 1 + 9 = 10",
          "explanation": "Substituting the starting value $u_1 = 4$ into the rule gives the second term. It has already jumped most of the way toward $12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 0.25(10) + 9 = 2.5 + 9 = 11.5",
          "explanation": "Feeding $u_2 = 10$ back into the same rule pushes the sequence closer still to the limit.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 0.25(11.5) + 9 = 2.875 + 9 = 11.875",
          "explanation": "One more application gives $11.875$, only $0.125$ short of $12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the behaviour matches the limit",
          "workingLatex": "10 \\to 11.5 \\to 11.875 \\to \\cdots \\to 12",
          "explanation": "The terms rise steadily and close in on $12$, exactly as the limit calculation predicted, which confirms the answer is sensible.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "L = 12",
          "explanation": "The sequence converges because $\\left| a \\right| < 1$, and its limit is $12$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 12$; the terms $u_2 = 10,\\ u_3 = 11.5,\\ u_4 = 11.875$ climb toward $12$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "nonlinear recurrence",
      "limit of a sequence",
      "surds"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\sqrt{u_n + 12}$ with $u_1 = 2$. The sequence converges to a limit $L$. Find the value of $L$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\sqrt{u_n + 12}",
          "explanation": "Each new term is the (positive) square root of the previous term plus $12$. Because a square root is never negative, every term of the sequence is positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute u_2 to see the trend",
          "workingLatex": "u_2 = \\sqrt{2 + 12} = \\sqrt{14} \\approx 3.742",
          "explanation": "Substituting $u_1 = 2$ shows the sequence jumping upward on its first step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_3",
          "workingLatex": "u_3 = \\sqrt{3.742 + 12} = \\sqrt{15.742} \\approx 3.968",
          "explanation": "Feeding the previous term back in, the sequence keeps rising but by a smaller amount, hinting it is closing in on a limit.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_4",
          "workingLatex": "u_4 = \\sqrt{3.968 + 12} = \\sqrt{15.968} \\approx 3.996",
          "explanation": "The terms are settling near $4$, which suggests the limit is $4$; now we confirm this algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the limit equation",
          "workingLatex": "L = \\sqrt{L + 12}",
          "explanation": "At the limit, consecutive terms are both equal to $L$, so replacing $u_{n+1}$ and $u_n$ by $L$ turns the recurrence into an equation for $L$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Remove the square root",
          "workingLatex": "L^2 = L + 12",
          "explanation": "Squaring both sides clears the root. This is valid here because $L$ is positive, so no sign information is lost.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form a quadratic",
          "workingLatex": "L^2 - L - 12 = 0",
          "explanation": "Bringing every term to one side gives a standard quadratic that we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "(L - 4)(L + 3) = 0",
          "explanation": "We need two numbers multiplying to $-12$ and adding to $-1$; these are $-4$ and $+3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the roots",
          "workingLatex": "L = 4 \\quad \\text{or} \\quad L = -3",
          "explanation": "The factorised form gives two candidate limits.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Select the valid root",
          "workingLatex": "L = 4",
          "explanation": "Every term is a positive square root, so the limit cannot be negative. Squaring in step 6 can introduce a false root; here $L = -3$ is that spurious root and must be rejected, leaving $L = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the result",
          "workingLatex": "L = 4",
          "explanation": "The computed terms approaching $4$ agree with this, confirming the limit is $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 4$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "savings and interest",
      "growth"
    ],
    "questionText": "£100 is placed in a savings account. At the end of each month the balance earns $3\\%$ interest and then a further £100 is deposited. If $u_n$ denotes the balance in pounds at the end of month $n$, the balance satisfies $u_{n+1} = 1.03u_n + 100$ with $u_1 = 100$. Find the balance at the end of months $2$, $3$ and $4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the multiplier and constant",
          "workingLatex": "u_{n+1} = 1.03u_n + 100",
          "explanation": "Multiplying by $1.03$ keeps the whole balance ($100\\%$) and adds $3\\%$ interest, and the $+100$ is the fresh deposit made each month.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fix the meaning of the index",
          "workingLatex": "u_1 = 100 \\ \\text{(balance at the end of month 1)}",
          "explanation": "The index $n$ counts months, and $u_1 = 100$ is the balance at the end of the first month, immediately after the opening deposit. Every later balance is built from this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule for month 2",
          "workingLatex": "u_2 = 1.03(100) + 100",
          "explanation": "Setting $n = 1$: the month-1 balance earns interest and then the month-2 deposit is added.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate u_2",
          "workingLatex": "u_2 = 103 + 100 = 203",
          "explanation": "The £100 grows to £103 with interest, and the new £100 brings the balance to £203.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the rule for month 3",
          "workingLatex": "u_3 = 1.03(203) + 100 = 209.09 + 100",
          "explanation": "Now the month-2 balance of £203 earns $3\\%$ interest before the next £100 deposit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate u_3",
          "workingLatex": "u_3 = 309.09",
          "explanation": "Adding the interest and the deposit gives a balance of £309.09 at the end of month 3.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the rule for month 4",
          "workingLatex": "u_4 = 1.03(309.09) + 100 = 318.3627 + 100",
          "explanation": "The same process repeats: grow the current balance by $3\\%$, then add £100.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate u_4",
          "workingLatex": "u_4 = 418.3627 \\approx 418.36",
          "explanation": "Rounding to the nearest penny gives £418.36 at the end of month 4.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note there is no limit here",
          "workingLatex": "\\left| a \\right| = 1.03 > 1",
          "explanation": "Because the multiplier exceeds $1$, the balance never settles to a fixed value; it keeps growing, which is exactly what we want from a savings account.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "u_2 = 203, \\quad u_3 = 309.09, \\quad u_4 = 418.36",
          "explanation": "Working month by month from the opening balance gives the three required balances.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = \\pounds 203,\\ u_3 = \\pounds 309.09,\\ u_4 = \\pounds 418.36$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "drug dosage",
      "limit of a sequence"
    ],
    "questionText": "A patient takes a $20$ mg dose of a drug at the start of each day. During each day the body breaks the drug down so that only $25\\%$ of it remains by the time of the next dose. The amount of drug in milligrams present just after the $n$th dose satisfies $u_{n+1} = 0.25u_n + 20$ with $u_1 = 20$. Find the long-term amount of drug present just after a dose.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 0.25u_n + 20",
          "explanation": "The $0.25$ says a quarter of yesterday's drug is still present, and the $+20$ is the fresh $20$ mg dose taken today.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check that a steady amount exists",
          "workingLatex": "\\left| a \\right| = 0.25 < 1",
          "explanation": "Since only a quarter carries over each day, the leftover from old doses shrinks fast. With a fixed $20$ mg topped up each day, the total settles to a steady value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_2",
          "workingLatex": "u_2 = 0.25(20) + 20 = 5 + 20 = 25",
          "explanation": "After the first day, $5$ mg of the original dose remains and a new $20$ mg is added, giving $25$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 0.25(25) + 20 = 6.25 + 20 = 26.25",
          "explanation": "Repeating the rule, the amount just after the third dose has crept up to $26.25$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 0.25(26.25) + 20 = 6.5625 + 20 = 26.5625",
          "explanation": "The increases are getting smaller, so the sequence is levelling off near a limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the limit equation",
          "workingLatex": "L = 0.25L + 20",
          "explanation": "In the long term the amount just after a dose stops changing, so $u_{n+1}$ and $u_n$ are both this steady value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the L terms",
          "workingLatex": "L - 0.25L = 20 \\quad\\Rightarrow\\quad 0.75L = 20",
          "explanation": "Subtracting $0.25L$ from both sides leaves a simple equation for $L$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the limit",
          "workingLatex": "L = \\dfrac{20}{0.75} = \\dfrac{80}{3} \\approx 26.67",
          "explanation": "Dividing by $0.75$ gives $\\tfrac{80}{3}$ mg, which matches the terms edging toward $26.67$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the answer",
          "workingLatex": "L = \\dfrac{80}{3} \\ \\text{mg}",
          "explanation": "In the long run the amount of drug present just after each dose settles at about $26.67$ mg, so the level stops building up indefinitely.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "L = \\dfrac{80}{3} \\approx 26.67 \\ \\text{mg}",
          "explanation": "The long-term amount of drug present just after a dose is $\\tfrac{80}{3}$ mg.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = \\dfrac{80}{3} \\approx 26.67$ mg"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "population dynamics",
      "equilibrium"
    ],
    "questionText": "A lake is stocked with fish. Each year $20\\%$ of the fish are lost and then $200$ fish are added. The number of fish at the start of year $n$ is modelled by $u_{n+1} = 0.8u_n + 200$. (a) Find the equilibrium population. (b) Interpret this value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 0.8u_n + 200",
          "explanation": "Losing $20\\%$ leaves $80\\%$, so the multiplier is $0.8$; the $+200$ is the fish added each year to restock.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define equilibrium",
          "workingLatex": "u_{n+1} = u_n = L",
          "explanation": "An equilibrium population is one that stays the same from one year to the next, so both consecutive terms equal the same value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equilibrium equation",
          "workingLatex": "L = 0.8L + 200",
          "explanation": "Replacing both $u_{n+1}$ and $u_n$ by $L$ in the model gives the equation the steady population must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the L terms",
          "workingLatex": "L - 0.8L = 200 \\quad\\Rightarrow\\quad 0.2L = 200",
          "explanation": "Subtracting $0.8L$ from both sides isolates the loss fraction times $L$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the equilibrium",
          "workingLatex": "L = \\dfrac{200}{0.2} = 1000",
          "explanation": "Dividing by $0.2$ gives an equilibrium population of $1000$ fish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the equilibrium holds",
          "workingLatex": "0.8(1000) + 200 = 800 + 200 = 1000",
          "explanation": "Feeding $1000$ into the model returns $1000$, confirming it really is a fixed point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm the equilibrium is approached",
          "workingLatex": "\\left| a \\right| = 0.8 < 1",
          "explanation": "Because the multiplier has size less than $1$, any starting population is drawn toward $1000$ over time, so the equilibrium is stable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Illustrate the approach",
          "workingLatex": "u_1 = 500 \\ \\Rightarrow\\ u_2 = 0.8(500) + 200 = 600",
          "explanation": "Starting below equilibrium, the population rises toward $1000$; starting above it, it would fall toward $1000$ instead.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the value",
          "workingLatex": "0.2 \\times 1000 = 200",
          "explanation": "At $1000$ fish the yearly loss of $20\\%$ is exactly $200$ fish, which is balanced by the $200$ restocked, so the population holds steady at $1000$ in the long term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the result",
          "workingLatex": "L = 1000",
          "explanation": "The equilibrium population is $1000$ fish, and any reasonable starting number settles toward it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 1000$ fish (a stable equilibrium: the $200$ lost each year are balanced by the $200$ restocked)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "population dynamics",
      "stability"
    ],
    "questionText": "A population of insects grows by $10\\%$ each year, but $500$ insects are removed at the end of every year by a control programme. The population at the start of year $n$ is modelled by $u_{n+1} = 1.1u_n - 500$. (a) Find the equilibrium population. (b) Determine, with reasons, whether this equilibrium is stable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 1.1u_n - 500",
          "explanation": "Growing by $10\\%$ multiplies the population by $1.1$, and the $-500$ removes the insects taken out by the control programme each year.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define equilibrium",
          "workingLatex": "u_{n+1} = u_n = L",
          "explanation": "An equilibrium is a population that neither grows nor shrinks, so consecutive terms are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the equilibrium equation",
          "workingLatex": "L = 1.1L - 500",
          "explanation": "Replacing both terms by $L$ gives the equation the fixed population must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "L - 1.1L = -500 \\quad\\Rightarrow\\quad -0.1L = -500",
          "explanation": "Collecting the $L$ terms leaves a single linear equation; note the growth term is larger, so the coefficient is negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the equilibrium",
          "workingLatex": "L = \\dfrac{-500}{-0.1} = 5000",
          "explanation": "Dividing both sides by $-0.1$ gives an equilibrium of $5000$ insects.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the equilibrium holds",
          "workingLatex": "1.1(5000) - 500 = 5500 - 500 = 5000",
          "explanation": "At $5000$ the $10\\%$ growth adds exactly $500$, which is then removed, so the population stays at $5000$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the stability test",
          "workingLatex": "\\left| a \\right| = 1.1 > 1",
          "explanation": "The size of the multiplier decides stability. Here it exceeds $1$, which warns that any departure from equilibrium will be amplified rather than corrected.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a start just below 5000",
          "workingLatex": "u_1 = 4999 \\ \\Rightarrow\\ u_2 = 1.1(4999) - 500 = 4998.9",
          "explanation": "Starting one below equilibrium, the population drops further; it will keep falling toward extinction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a start just above 5000",
          "workingLatex": "u_1 = 5001 \\ \\Rightarrow\\ u_2 = 1.1(5001) - 500 = 5001.1",
          "explanation": "Starting one above equilibrium, the population grows further and keeps increasing without bound.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State and interpret the result",
          "workingLatex": "L = 5000 \\ \\text{(unstable)}",
          "explanation": "Because $\\left| a \\right| > 1$, the equilibrium $5000$ is unstable: it is a tipping point where populations below it die out and populations above it explode.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 5000$; the equilibrium is unstable because $\\left| 1.1 \\right| > 1$ (start below and it declines, start above and it grows without bound)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "loans and mortgages",
      "equilibrium"
    ],
    "questionText": "A loan of £25000 is charged interest at $2\\%$ per year. At the end of each year, immediately after the interest is added, a fixed repayment of £$P$ is made. The outstanding balance in pounds then satisfies $u_{n+1} = 1.02u_n - P$ with $u_1 = 25000$. (a) Find the repayment $P$ for which the balance never changes. (b) Explain what happens to the debt if the actual repayment is slightly larger, or slightly smaller, than this value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 1.02u_n - P",
          "explanation": "Multiplying by $1.02$ adds $2\\%$ interest to the outstanding balance, and subtracting $P$ removes the annual repayment.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate \"never changes\" into equilibrium",
          "workingLatex": "u_{n+1} = u_n = L",
          "explanation": "A balance that never changes is a fixed point of the recurrence, so consecutive balances are equal to the same value $L$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the fixed balance",
          "workingLatex": "L = u_1 = 25000",
          "explanation": "Since the balance starts at £25000 and must stay unchanged, the fixed value is exactly the opening balance, $25000$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the equilibrium equation",
          "workingLatex": "L = 1.02L - P",
          "explanation": "Replacing both balances by $L$ in the recurrence gives the condition the constant balance must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Make P the subject",
          "workingLatex": "P = 1.02L - L = 0.02L",
          "explanation": "Rearranging shows the repayment must equal $0.02L$, that is, exactly the interest charged on the balance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret 0.02L",
          "workingLatex": "0.02L = \\text{one year's interest}",
          "explanation": "This makes financial sense: to hold the debt still you must pay off precisely the interest and nothing more, so the principal never moves.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the balance",
          "workingLatex": "P = 0.02 \\times 25000",
          "explanation": "Putting $L = 25000$ into $P = 0.02L$ gives the required repayment.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate P",
          "workingLatex": "P = 500",
          "explanation": "The repayment that keeps the balance fixed is £500 per year.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the fixed point",
          "workingLatex": "1.02(25000) - 500 = 25500 - 500 = 25000",
          "explanation": "Applying the model with $P = 500$ returns the balance to £25000, confirming it is genuinely unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a larger repayment",
          "workingLatex": "P = 600:\\quad 1.02(25000) - 600 = 24900",
          "explanation": "Paying £100 more than the interest reduces the balance below £25000 in the first year.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why a larger repayment clears the loan",
          "workingLatex": "\\left| a \\right| = 1.02 > 1",
          "explanation": "Because the multiplier exceeds $1$, the equilibrium is unstable: once the balance dips below £25000 the shortfall between interest and payment grows each year, so the debt keeps falling and is eventually cleared.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test a smaller repayment",
          "workingLatex": "P = 400:\\quad 1.02(25000) - 400 = 25100",
          "explanation": "Paying £100 less than the interest lets the balance climb above £25000 in the first year.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Explain why a smaller repayment grows the debt",
          "workingLatex": "\\text{balance} > 25000 \\Rightarrow \\text{grows without bound}",
          "explanation": "Again because $\\left| a \\right| > 1$, once the balance rises above £25000 the unpaid interest snowballs and the debt grows without bound.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise the knife-edge behaviour",
          "workingLatex": "P = 500 \\ \\text{(unstable equilibrium)}",
          "explanation": "£500 is a tipping point: pay a little more and the loan is repaid over time, pay a little less and the debt spirals upward.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the result",
          "workingLatex": "P = \\pounds 500 \\ \\text{per year}",
          "explanation": "The repayment that keeps the balance exactly constant is £500 per year, equal to one year's interest.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = \\pounds 500$ per year (equal to the yearly interest); pay more and the debt is cleared, pay less and it grows without bound since $\\left| 1.02 \\right| > 1$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "savings and interest",
      "iteration"
    ],
    "questionText": "At the end of each year, starting with year 1, £1200 is paid into an account that earns $5\\%$ interest per year. The balance in pounds at the end of year $n$ is modelled by $u_{n+1} = 1.05u_n + 1200$ with $u_1 = 1200$. (a) Find the balance at the end of years $2$, $3$ and $4$. (b) Determine the first year at the end of which the balance exceeds £10000.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 1.05u_n + 1200",
          "explanation": "The multiplier $1.05$ adds $5\\%$ interest to the existing balance, and $+1200$ is the yearly deposit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fix the starting value",
          "workingLatex": "u_1 = 1200 \\ \\text{(end of year 1)}",
          "explanation": "The first £1200 is deposited at the end of year 1, so $u_1 = 1200$ is the balance at that point, before any interest has been earned.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the year-2 balance",
          "workingLatex": "u_2 = 1.05(1200) + 1200 = 1260 + 1200 = 2460",
          "explanation": "The year-1 balance earns interest and then the second deposit is added, giving £2460.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the year-3 balance",
          "workingLatex": "u_3 = 1.05(2460) + 1200 = 2583 + 1200 = 3783",
          "explanation": "Applying the rule again grows £2460 by $5\\%$ and adds another £1200.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the year-4 balance",
          "workingLatex": "u_4 = 1.05(3783) + 1200 = 3972.15 + 1200 = 5172.15",
          "explanation": "One more year of interest and a deposit gives £5172.15, completing part (a).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the part (a) answers",
          "workingLatex": "u_2 = 2460, \\quad u_3 = 3783, \\quad u_4 = 5172.15",
          "explanation": "These are the balances at the end of years 2, 3 and 4.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Argue the balance keeps rising",
          "workingLatex": "a = 1.05 > 1, \\quad +1200 > 0",
          "explanation": "Interest above $0\\%$ and a positive deposit each year mean the balance strictly increases, so once it passes £10000 it stays above. We just need the first crossing, found by continuing the iteration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the year-5 balance",
          "workingLatex": "u_5 = 1.05(5172.15) + 1200 = 6630.7575 \\approx 6630.76",
          "explanation": "Still below £10000, so we keep going.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the year-6 balance",
          "workingLatex": "u_6 = 1.05(6630.7575) + 1200 = 8162.295\\ldots \\approx 8162.30",
          "explanation": "Getting closer, but still under the target.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the year-7 balance",
          "workingLatex": "u_7 = 1.05(8162.295\\ldots) + 1200 = 9770.410\\ldots \\approx 9770.41",
          "explanation": "The balance is now just under £10000.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check year 7 against the target",
          "workingLatex": "u_7 \\approx 9770.41 < 10000",
          "explanation": "At the end of year 7 the balance has not yet reached £10000, so the crossing has not happened.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the year-8 balance",
          "workingLatex": "u_8 = 1.05(9770.410\\ldots) + 1200 = 11458.930\\ldots \\approx 11458.93",
          "explanation": "Applying the rule once more takes the balance past £10000.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check year 8 against the target",
          "workingLatex": "u_8 \\approx 11458.93 > 10000",
          "explanation": "At the end of year 8 the balance exceeds £10000.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm the boundary",
          "workingLatex": "u_7 \\approx 9770.41 < 10000 < 11458.93 \\approx u_8",
          "explanation": "Since year 7 is below and year 8 is above, and the sequence is strictly increasing, year 8 is definitely the first year the balance exceeds £10000.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "\\text{first year above } 10000 : \\ n = 8",
          "explanation": "The balances are £2460, £3783, £5172.15, and the balance first exceeds £10000 at the end of year 8.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_2 = \\pounds 2460,\\ u_3 = \\pounds 3783,\\ u_4 = \\pounds 5172.15$; the balance first exceeds £10000 at the end of year $8$ (about £11458.93)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "nonlinear recurrence",
      "convergence",
      "monotone bounded"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\sqrt{u_n + 6}$ with $u_1 = 1$. (a) Prove that the sequence is increasing and that it is bounded above by $3$. (b) Hence explain why the sequence converges, and find its limit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\sqrt{u_n + 6}",
          "explanation": "Each term is the positive square root of the previous term plus $6$, so every term is positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the first few terms",
          "workingLatex": "u_2 = \\sqrt{7} \\approx 2.646, \\quad u_3 = \\sqrt{8.646} \\approx 2.940, \\quad u_4 \\approx 2.990",
          "explanation": "The terms rise and appear to be closing in on $3$; parts (a) and (b) make this rigorous.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the bounded-above claim",
          "workingLatex": "\\text{Claim: } u_n < 3 \\ \\text{for all } n",
          "explanation": "We show by induction that no term ever reaches $3$, which caps the whole sequence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Base case for the bound",
          "workingLatex": "u_1 = 1 < 3",
          "explanation": "The first term satisfies the bound, giving us a starting point for the induction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Inductive step for the bound",
          "workingLatex": "u_n < 3 \\ \\Rightarrow\\ u_n + 6 < 9 \\ \\Rightarrow\\ u_{n+1} = \\sqrt{u_n + 6} < \\sqrt{9} = 3",
          "explanation": "Assuming a term is below $3$, adding $6$ keeps it below $9$, and taking the square root keeps it below $3$. So the next term is also below $3$, and by induction every term is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the increasing test",
          "workingLatex": "u_{n+1} > u_n \\iff u_n + 6 > u_n^{\\,2}",
          "explanation": "Since all terms are positive, comparing $u_{n+1} = \\sqrt{u_n + 6}$ with $u_n$ is the same as comparing their squares $u_n + 6$ and $u_n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the inequality",
          "workingLatex": "u_n^{\\,2} - u_n - 6 < 0",
          "explanation": "Moving everything to one side turns the comparison into a quadratic inequality in $u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(u_n - 3)(u_n + 2) < 0",
          "explanation": "Factorising shows the expression is negative exactly when $-2 < u_n < 3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the sequence is increasing",
          "workingLatex": "0 < u_n < 3 \\ \\Rightarrow\\ (u_n - 3)(u_n + 2) < 0 \\ \\Rightarrow\\ u_{n+1} > u_n",
          "explanation": "From part (a) every term lies between $0$ and $3$, which falls inside $-2 < u_n < 3$, so the inequality holds and each term is larger than the one before: the sequence is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce convergence",
          "workingLatex": "\\text{increasing} + \\text{bounded above} \\Rightarrow \\text{converges}",
          "explanation": "A sequence that keeps rising but can never exceed $3$ must pile up against a ceiling; this is the monotone convergence idea, guaranteeing a limit exists.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the limit equation",
          "workingLatex": "L = \\sqrt{L + 6}",
          "explanation": "At the limit both consecutive terms equal $L$, so the recurrence becomes an equation for $L$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Square both sides",
          "workingLatex": "L^2 = L + 6",
          "explanation": "Squaring removes the root; valid because $L$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Form the quadratic",
          "workingLatex": "L^2 - L - 6 = 0",
          "explanation": "Collecting terms gives a quadratic to solve for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Factorise and read off roots",
          "workingLatex": "(L - 3)(L + 2) = 0 \\ \\Rightarrow\\ L = 3 \\ \\text{or}\\ L = -2",
          "explanation": "The two candidate limits come from setting each factor to zero.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Select the valid root",
          "workingLatex": "L = 3",
          "explanation": "The terms are positive and increase from $1$, so the limit cannot be $-2$; the genuine limit is $3$, matching the ceiling found in part (a).",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the result",
          "workingLatex": "L = 3",
          "explanation": "The sequence is increasing and bounded above by $3$, so it converges, and its limit is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 3$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "modelling",
      "steady state",
      "limit of a sequence"
    ],
    "questionText": "A swimming pool is treated with chlorine. Each day $30\\%$ of the chlorine breaks down, so $70\\%$ remains, and then $60$ g of chlorine is added. The mass of chlorine in grams just after the treatment on day $n$ is modelled by $u_{n+1} = 0.7u_n + 60$ with $u_1 = 60$. (a) Find the steady-state (long-term) mass of chlorine. (b) Find the mass of chlorine that breaks down each day once the steady state is reached, and interpret your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 0.7u_n + 60",
          "explanation": "If $30\\%$ breaks down then $70\\%$ survives, so the multiplier is $0.7$; the $+60$ is the fresh chlorine added each day.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check that a steady state exists",
          "workingLatex": "\\left| a \\right| = 0.7 < 1",
          "explanation": "Because only $70\\%$ carries over each day, the influence of old chlorine fades away, so with a fixed daily top-up the mass settles to a steady value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_2",
          "workingLatex": "u_2 = 0.7(60) + 60 = 42 + 60 = 102",
          "explanation": "After one day, $42$ g of the first treatment remains and $60$ g is added, giving $102$ g.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 0.7(102) + 60 = 71.4 + 60 = 131.4",
          "explanation": "Repeating the rule, the mass keeps building but by a smaller amount each day.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 0.7(131.4) + 60 = 91.98 + 60 = 151.98",
          "explanation": "The rising amounts are levelling off, which tells us a limit is being approached.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the steady-state equation",
          "workingLatex": "u_{n+1} = u_n = L",
          "explanation": "At the steady state the mass just after treatment is the same each day, so both consecutive terms equal $L$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the equation for L",
          "workingLatex": "L = 0.7L + 60",
          "explanation": "Replacing both terms by $L$ in the model gives the equation the steady value must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Collect the L terms",
          "workingLatex": "L - 0.7L = 60 \\quad\\Rightarrow\\quad 0.3L = 60",
          "explanation": "Subtracting $0.7L$ from both sides leaves the fraction that breaks down times $L$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the steady state",
          "workingLatex": "L = \\dfrac{60}{0.3} = 200",
          "explanation": "Dividing by $0.3$ gives a long-term mass of $200$ g, consistent with the terms rising toward $200$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the related quantity",
          "workingLatex": "\\text{daily breakdown} = 30\\% \\text{ of } L",
          "explanation": "Part (b) asks how much chlorine is lost per day at the steady state; this is $30\\%$ of the steady mass.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the daily breakdown",
          "workingLatex": "0.3 \\times 200 = 60 \\ \\text{g}",
          "explanation": "At $200$ g, the amount that breaks down each day is $60$ g.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the balance",
          "workingLatex": "\\text{lost per day} = 60 \\ \\text{g} = \\text{added per day}",
          "explanation": "The $60$ g lost each day is exactly matched by the $60$ g added, so the mass neither rises nor falls: inflow balances outflow, which is why the level holds steady.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the approach to steady state",
          "workingLatex": "u_1 = 60 < 200",
          "explanation": "Since the pool starts with only $60$ g, below the steady value, the mass climbs day by day and levels off at $200$ g rather than dropping to it.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "L = 200 \\ \\text{g}, \\quad \\text{daily breakdown} = 60 \\ \\text{g}",
          "explanation": "The long-term mass is $200$ g, and at that level $60$ g breaks down each day, exactly balancing the daily dose.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 200$ g; at steady state $60$ g breaks down each day, exactly balancing the $60$ g added, which is why the mass stays constant."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "finding constants",
      "simultaneous equations"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = a u_n + b$, where $a$ and $b$ are constants. Three consecutive terms are $u_1 = 2$, $u_2 = 7$ and $u_3 = 17$. Find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the form of the recurrence",
          "workingLatex": "u_{n+1} = a u_n + b",
          "explanation": "The rule takes a term, multiplies it by the unknown $a$ and adds the unknown $b$. Because $a$ and $b$ are the same for every step, any two consecutive terms must obey this equation — that is what lets us pin the constants down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Link the first two terms (n = 1)",
          "workingLatex": "u_2 = a u_1 + b \\;\\Rightarrow\\; 7 = 2a + b",
          "explanation": "Putting $n = 1$ into the rule connects $u_1$ and $u_2$. Substituting the known values $u_1 = 2$ and $u_2 = 7$ turns it into an equation containing only $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link the next two terms (n = 2)",
          "workingLatex": "u_3 = a u_2 + b \\;\\Rightarrow\\; 17 = 7a + b",
          "explanation": "Putting $n = 2$ into the same rule connects $u_2$ and $u_3$. This gives a second equation in $a$ and $b$, and two equations are exactly what we need for two unknowns.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the simultaneous equations",
          "workingLatex": "\\begin{cases} 2a + b = 7 \\\\ 7a + b = 17 \\end{cases}",
          "explanation": "We now have a pair of simultaneous equations. Both contain the term $+b$, so subtracting one from the other will remove $b$ and leave a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Eliminate b by subtracting",
          "workingLatex": "(7a + b) - (2a + b) = 17 - 7 \\;\\Rightarrow\\; 5a = 10",
          "explanation": "Subtracting the equations cancels the $b$ terms because they are identical, and the difference of the right-hand sides gives $10$. This isolates $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for a",
          "workingLatex": "a = \\dfrac{10}{5} = 2",
          "explanation": "Dividing both sides by $5$ gives the multiplier of the recurrence.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find b",
          "workingLatex": "2(2) + b = 7 \\;\\Rightarrow\\; 4 + b = 7 \\;\\Rightarrow\\; b = 3",
          "explanation": "Putting $a = 2$ into the first equation leaves a simple equation for $b$: subtracting the known $4$ from $7$ gives the added constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the completed recurrence",
          "workingLatex": "u_{n+1} = 2 u_n + 3",
          "explanation": "With both constants found, we can state the rule fully. It is worth checking it really does reproduce all three given terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check it reproduces u_2",
          "workingLatex": "u_2 = 2(2) + 3 = 7 \\;\\checkmark",
          "explanation": "Feeding in $u_1 = 2$ returns $7$, which matches the given second term, so the rule is consistent so far.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check it reproduces u_3",
          "workingLatex": "u_3 = 2(7) + 3 = 17 \\;\\checkmark",
          "explanation": "Feeding in $u_2 = 7$ returns $17$, which matches the given third term. Both checks pass, confirming the constants.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "a = 2, \\quad b = 3",
          "explanation": "The two consecutive-term equations pin the constants down uniquely, and both terms check out.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2,\\ b = 3$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "Fibonacci-type",
      "second-order recurrence",
      "summing terms"
    ],
    "questionText": "A sequence is defined by the second-order recurrence relation $u_{n+2} = u_{n+1} + u_n$ with $u_1 = 2$ and $u_2 = 5$. Find $u_7$ and the sum of the first seven terms, $\\displaystyle\\sum_{n=1}^{7} u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the second-order rule",
          "workingLatex": "u_{n+2} = u_{n+1} + u_n",
          "explanation": "This is a Fibonacci-type rule: each new term is the sum of the two terms directly before it. Because it looks two terms back, we must be given two starting values, not one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the two starting terms",
          "workingLatex": "u_1 = 2, \\quad u_2 = 5",
          "explanation": "These two anchors let the rule begin. From here we build forward one term at a time, always adding the most recent pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find u_3",
          "workingLatex": "u_3 = u_2 + u_1 = 5 + 2 = 7",
          "explanation": "Adding the two known starting terms gives the third term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find u_4",
          "workingLatex": "u_4 = u_3 + u_2 = 7 + 5 = 12",
          "explanation": "We slide the pair along by one: now we add $u_3$ and $u_2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find u_5",
          "workingLatex": "u_5 = u_4 + u_3 = 12 + 7 = 19",
          "explanation": "Each step reuses the two most recent terms, so we add $u_4$ and $u_3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find u_6",
          "workingLatex": "u_6 = u_5 + u_4 = 19 + 12 = 31",
          "explanation": "Continuing the same pattern with the latest pair gives the sixth term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find u_7",
          "workingLatex": "u_7 = u_6 + u_5 = 31 + 19 = 50",
          "explanation": "One more application of the rule reaches the seventh term, which is the first thing we were asked to find.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "List all seven terms",
          "workingLatex": "2,\\ 5,\\ 7,\\ 12,\\ 19,\\ 31,\\ 50",
          "explanation": "Writing the terms out in order gives a clear list to add up for the sum. Building every term first avoids any gaps.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the sum",
          "workingLatex": "\\sum_{n=1}^{7} u_n = 2 + 5 + 7 + 12 + 19 + 31 + 50",
          "explanation": "The sum of the first seven terms is simply the total of the list we generated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the terms carefully",
          "workingLatex": "2 + 5 = 7,\\ +7 = 14,\\ +12 = 26,\\ +19 = 45,\\ +31 = 76,\\ +50 = 126",
          "explanation": "Adding one term at a time and keeping a running total reduces the chance of an arithmetic slip.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answers",
          "workingLatex": "u_7 = 50, \\qquad \\sum_{n=1}^{7} u_n = 126",
          "explanation": "The seventh term is $50$ and the seven terms total $126$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_7 = 50$ and $\\displaystyle\\sum_{n=1}^{7} u_n = 126$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "working backwards",
      "inverse rule"
    ],
    "questionText": "A sequence is defined by the recurrence relation $u_{n+1} = 3u_n + 1$. It is known that $u_3 = 40$. By working backwards, find the first term $u_1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the forward rule",
          "workingLatex": "u_{n+1} = 3u_n + 1",
          "explanation": "The rule normally moves forwards: triple a term and add $1$ to reach the next. Here we are given a later term and need to run the machine in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise we must reverse the process",
          "workingLatex": "u_3 = 40 \\;\\rightsquigarrow\\; u_2 \\;\\rightsquigarrow\\; u_1",
          "explanation": "We cannot substitute forwards because we do not know $u_1$ yet. Instead we undo the rule twice, stepping from $u_3$ back to $u_2$ and then to $u_1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the rule to undo it",
          "workingLatex": "u_{n+1} - 1 = 3u_n",
          "explanation": "To reverse the rule we invert each operation in the opposite order. The last thing done was adding $1$, so the first thing to undo is subtracting $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make the earlier term the subject",
          "workingLatex": "u_n = \\dfrac{u_{n+1} - 1}{3}",
          "explanation": "The other operation was multiplying by $3$, so we undo it by dividing by $3$. This formula takes any term and hands back the one before it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Step back from u_3 to u_2",
          "workingLatex": "u_2 = \\dfrac{u_3 - 1}{3} = \\dfrac{40 - 1}{3}",
          "explanation": "Using $n = 2$ in the reversed rule links $u_2$ and $u_3$. Substituting $u_3 = 40$ gives an arithmetic expression for $u_2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate u_2",
          "workingLatex": "u_2 = \\dfrac{39}{3} = 13",
          "explanation": "Subtracting $1$ from $40$ gives $39$, and dividing by $3$ gives the second term, $13$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Step back from u_2 to u_1",
          "workingLatex": "u_1 = \\dfrac{u_2 - 1}{3} = \\dfrac{13 - 1}{3}",
          "explanation": "Using $n = 1$ in the reversed rule links $u_1$ and $u_2$. Substituting the $u_2$ we just found lets us reach the first term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate u_1",
          "workingLatex": "u_1 = \\dfrac{12}{3} = 4",
          "explanation": "Subtracting $1$ from $13$ gives $12$, and dividing by $3$ gives the first term, $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check by going forwards",
          "workingLatex": "u_2 = 3(4) + 1 = 13, \\quad u_3 = 3(13) + 1 = 40 \\;\\checkmark",
          "explanation": "Running the original rule forwards from $u_1 = 4$ rebuilds $u_2 = 13$ and $u_3 = 40$, matching the given value, so our reverse working is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "u_1 = 4",
          "explanation": "Undoing the rule twice recovers the starting term, and the forward check confirms it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 4$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "convergent recurrence",
      "limit",
      "finding a constant"
    ],
    "questionText": "The recurrence relation $u_{n+1} = 0.2\\,u_n + b$ produces a sequence that converges to a limit of $15$. Find the value of the constant $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = 0.2\\,u_n + b",
          "explanation": "Each term is one-fifth of the previous term plus a fixed amount $b$. We are told the sequence settles to a limit, and we must use that to find $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what convergence means",
          "workingLatex": "u_n \\to L \\quad \\text{and} \\quad u_{n+1} \\to L",
          "explanation": "If the terms home in on a limit $L$, then far along the sequence both a term and the next term are essentially equal to $L$. That is the key that turns the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the limit equation",
          "workingLatex": "L = 0.2L + b",
          "explanation": "Replacing both $u_{n+1}$ and $u_n$ by the common limit $L$ gives the fixed-point equation the limit must satisfy.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate b",
          "workingLatex": "L - 0.2L = b \\;\\Rightarrow\\; 0.8L = b",
          "explanation": "Gathering the $L$ terms on one side leaves $b$ expressed neatly in terms of the limit.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known limit",
          "workingLatex": "b = 0.8 \\times 15",
          "explanation": "We are told the limit is $L = 15$, so we substitute it straight into the rearranged equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate b",
          "workingLatex": "b = 12",
          "explanation": "Multiplying $0.8$ by $15$ gives the required constant.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm convergence is genuine",
          "workingLatex": "|a| = 0.2 < 1",
          "explanation": "A linear recurrence $u_{n+1} = a u_n + b$ actually converges only when $\\left| a \\right| < 1$. Here $\\left| 0.2 \\right| < 1$, so the limit really exists and our working is valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with the limit formula",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{12}{1 - 0.2} = \\dfrac{12}{0.8} = 15 \\;\\checkmark",
          "explanation": "Substituting $b = 12$ into the standard limit formula returns $15$, matching the given limit and confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "b = 12",
          "explanation": "The limit condition fixes $b$ uniquely, and the check confirms it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b = 12$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "convergent recurrence",
      "limit",
      "simultaneous equations",
      "finding constants"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = a u_n + b$, where $a$ and $b$ are constants with $|a| < 1$. The sequence converges to a limit of $12$, and its first two terms are $u_1 = 4$ and $u_2 = 8$. Find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence and unknowns",
          "workingLatex": "u_{n+1} = a u_n + b",
          "explanation": "There are two unknown constants, so we need two independent facts to find them. We are given two: the limit the sequence reaches, and the values of the first two terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the limit condition",
          "workingLatex": "L = aL + b",
          "explanation": "Because the sequence converges, far along it both a term and the next are equal to the limit $L$. Replacing $u_{n+1}$ and $u_n$ by $L$ gives the fixed-point equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given limit (Equation 1)",
          "workingLatex": "12 = 12a + b",
          "explanation": "Putting $L = 12$ into the fixed-point equation gives our first equation linking $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the consecutive terms (n = 1)",
          "workingLatex": "u_2 = a u_1 + b",
          "explanation": "Setting $n = 1$ in the recurrence connects the two given terms. This will provide a second, independent equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the term values (Equation 2)",
          "workingLatex": "8 = 4a + b",
          "explanation": "Substituting $u_1 = 4$ and $u_2 = 8$ gives the second equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Collect the two equations",
          "workingLatex": "\\begin{cases} 12a + b = 12 \\\\ 4a + b = 8 \\end{cases}",
          "explanation": "Both equations contain $+b$, so subtracting one from the other will eliminate $b$ and leave a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to eliminate b",
          "workingLatex": "(12a + b) - (4a + b) = 12 - 8 \\;\\Rightarrow\\; 8a = 4",
          "explanation": "The identical $b$ terms cancel, and the right-hand sides differ by $4$, isolating $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = \\dfrac{4}{8} = \\dfrac{1}{2}",
          "explanation": "Dividing by $8$ gives the multiplier $a = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find b",
          "workingLatex": "4\\left(\\tfrac{1}{2}\\right) + b = 8 \\;\\Rightarrow\\; 2 + b = 8 \\;\\Rightarrow\\; b = 6",
          "explanation": "Putting $a = \\tfrac{1}{2}$ into the second equation leaves a simple equation for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the completed recurrence",
          "workingLatex": "u_{n+1} = \\tfrac{1}{2} u_n + 6",
          "explanation": "With both constants found we can write the full rule, then check it against every given fact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the convergence condition",
          "workingLatex": "|a| = \\tfrac{1}{2} < 1",
          "explanation": "The problem stated $\\left| a \\right| < 1$; our value $a = \\tfrac{1}{2}$ satisfies this, so the sequence really does converge as claimed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the limit",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{6}{1 - \\tfrac{1}{2}} = \\dfrac{6}{\\tfrac{1}{2}} = 12 \\;\\checkmark",
          "explanation": "The limit formula returns $12$, matching the given limit.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the second term",
          "workingLatex": "u_2 = \\tfrac{1}{2}(4) + 6 = 2 + 6 = 8 \\;\\checkmark",
          "explanation": "Feeding $u_1 = 4$ into the rule reproduces $u_2 = 8$, matching the given term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense-check the approach to the limit",
          "workingLatex": "u_3 = \\tfrac{1}{2}(8) + 6 = 10, \\quad u_4 = \\tfrac{1}{2}(10) + 6 = 11",
          "explanation": "The next terms $4, 8, 10, 11, \\dots$ creep steadily up towards $12$, exactly the behaviour we expect from a convergent sequence with limit $12$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "a = \\tfrac{1}{2}, \\quad b = 6",
          "explanation": "The limit and the term values together fix both constants, and every check confirms them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\dfrac{1}{2},\\ b = 6$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "periodic sequence",
      "period",
      "summing a periodic sequence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{1}{1 - u_n}$ with $u_1 = 2$. Show that the sequence is periodic, state its period, and hence find the sum of the first $50$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{1}{1 - u_n}",
          "explanation": "Each term is found by subtracting the previous term from $1$ and taking the reciprocal. To spot periodicity we simply generate terms and watch for the pattern to repeat.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute u_2",
          "workingLatex": "u_2 = \\dfrac{1}{1 - 2} = \\dfrac{1}{-1} = -1",
          "explanation": "Substituting $u_1 = 2$ gives $1 - 2 = -1$, and its reciprocal is $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_3",
          "workingLatex": "u_3 = \\dfrac{1}{1 - (-1)} = \\dfrac{1}{2}",
          "explanation": "Substituting $u_2 = -1$ gives $1 - (-1) = 2$, so the reciprocal is $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_4",
          "workingLatex": "u_4 = \\dfrac{1}{1 - \\tfrac{1}{2}} = \\dfrac{1}{\\tfrac{1}{2}} = 2",
          "explanation": "Substituting $u_3 = \\tfrac{1}{2}$ gives $1 - \\tfrac{1}{2} = \\tfrac{1}{2}$, and dividing $1$ by $\\tfrac{1}{2}$ returns $2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Notice the value has returned",
          "workingLatex": "u_4 = 2 = u_1",
          "explanation": "The fourth term equals the first term. Because every term depends only on the one before it, once a value repeats the whole block of values must repeat forever.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the periodicity",
          "workingLatex": "u_{n+3} = u_n \\quad \\text{for all } n",
          "explanation": "Since $u_4 = u_1$, the sequence cycles through the same three values endlessly: $2, -1, \\tfrac{1}{2}, 2, -1, \\tfrac{1}{2}, \\dots$ The period is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sum one full period",
          "workingLatex": "2 + (-1) + \\tfrac{1}{2} = \\tfrac{3}{2}",
          "explanation": "The three repeating values add to $\\tfrac{3}{2}$. Every complete cycle of the sequence contributes this same amount to a running total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split 50 terms into whole periods",
          "workingLatex": "50 = 3 \\times 16 + 2",
          "explanation": "To sum $50$ terms we count how many complete periods of $3$ fit inside, plus any leftover terms. Sixteen periods use $48$ terms and leave $2$ over.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sum the 16 complete periods",
          "workingLatex": "16 \\times \\tfrac{3}{2} = 24",
          "explanation": "Each of the $16$ complete cycles contributes $\\tfrac{3}{2}$, so together they add $24$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the two leftover terms",
          "workingLatex": "49 = 3 \\times 16 + 1 \\Rightarrow u_{49} = u_1 = 2, \\qquad u_{50} = u_2 = -1",
          "explanation": "After the $48$th term, the cycle restarts, so the $49$th term is again the first value and the $50$th is the second value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sum the leftover terms",
          "workingLatex": "u_{49} + u_{50} = 2 + (-1) = 1",
          "explanation": "The two leftover terms add to $1$, completing the tally.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine for the total",
          "workingLatex": "\\sum_{n=1}^{50} u_n = 24 + 1 = 25",
          "explanation": "Adding the whole-period contribution and the leftover contribution gives the sum of the first $50$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "\\sum_{n=1}^{50} u_n = 25",
          "explanation": "The sequence has period $3$, and using that structure the first $50$ terms sum to $25$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is periodic with period $3$, and $\\displaystyle\\sum_{n=1}^{50} u_n = 25$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "modelling",
      "equilibrium",
      "stability",
      "convergent recurrence"
    ],
    "questionText": "A drug is taken once a day. Each day the patient's body retains $75\\%$ of the amount of drug present and then a fresh $20$ mg dose is taken, so the amount (in mg) just after each dose follows $u_{n+1} = 0.75\\,u_n + 20$, with $u_1 = 20$. Find the long-term (equilibrium) amount of drug in the body, and determine, with reasoning, whether the sequence approaches this equilibrium or moves away from it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the model",
          "workingLatex": "u_{n+1} = 0.75\\,u_n + 20",
          "explanation": "Each day the amount left is $75\\%$ of yesterday's amount (the rest is cleared by the body), then a $20$ mg dose is added. We want the level the amount settles towards over many days.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the equilibrium",
          "workingLatex": "u_{n+1} = u_n = L",
          "explanation": "An equilibrium is a level that the rule leaves unchanged: if you start there, the amount stays there day after day. So we set a term and the next term both equal to $L$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the equilibrium equation",
          "workingLatex": "L = 0.75L + 20",
          "explanation": "Replacing both amounts by the common value $L$ turns the recurrence into an equation for the equilibrium level.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange",
          "workingLatex": "L - 0.75L = 20 \\;\\Rightarrow\\; 0.25L = 20",
          "explanation": "Gathering the $L$ terms shows that a quarter of the equilibrium equals the daily dose — sensible, because at equilibrium the amount cleared ($25\\%$) must exactly balance the dose added.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the equilibrium",
          "workingLatex": "L = \\dfrac{20}{0.25} = 80",
          "explanation": "Dividing gives an equilibrium of $80$ mg: the long-term amount of drug in the body just after each dose.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the stability test",
          "workingLatex": "u_{n+1} = 0.75\\,u_n + 20, \\qquad L = 0.75L + 20",
          "explanation": "To decide whether the amount drifts towards or away from $80$ mg, we track the gap between a term and the equilibrium. We compare the recurrence with the equilibrium equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract to find how the gap changes",
          "workingLatex": "u_{n+1} - L = 0.75\\,(u_n - L)",
          "explanation": "Subtracting the equilibrium equation from the recurrence cancels the constant $20$ and shows that the gap from equilibrium is simply multiplied by $0.75$ each day.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the multiplier",
          "workingLatex": "|0.75| < 1",
          "explanation": "Because the gap is scaled by a factor smaller than $1$ in size every day, it shrinks steadily towards zero. That means the amount is pulled in towards the equilibrium — the equilibrium is stable and is approached.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute u_2 to support this",
          "workingLatex": "u_2 = 0.75(20) + 20 = 35 \\quad (\\text{gap } 80 - 35 = 45)",
          "explanation": "Starting from $u_1 = 20$ (a gap of $60$ from $80$), the next amount is $35$, closing the gap to $45$ — and indeed $45 = 0.75 \\times 60$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 0.75(35) + 20 = 46.25 \\quad (\\text{gap } 33.75)",
          "explanation": "The gap falls again from $45$ to $33.75$, once more a factor of $0.75$ smaller.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 0.75(46.25) + 20 = 54.6875 \\quad (\\text{gap } 25.3125)",
          "explanation": "The gaps $60,\\ 45,\\ 33.75,\\ 25.31,\\dots$ keep shrinking by $0.75$ each step, visibly closing in on $80$ mg.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the direction of approach",
          "workingLatex": "u_1 = 20 < u_2 < u_3 < \\cdots < 80",
          "explanation": "Because the starting amount is below equilibrium and the gap always has the same sign (it is scaled by a positive factor), the sequence rises steadily up to $80$ mg without overshooting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "L = 80 \\text{ mg}, \\quad \\text{approached since } |0.75| < 1",
          "explanation": "The equilibrium amount is $80$ mg, and since each daily gap is multiplied by $0.75$ (a factor less than $1$ in size), the drug level approaches this equilibrium: the model is stable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The equilibrium amount is $80$ mg. Because each day the gap from equilibrium is multiplied by $0.75$ and $\\left| 0.75 \\right| < 1$, the gap shrinks towards zero, so the sequence approaches the equilibrium (it is stable)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "Fibonacci-type",
      "ratio of terms",
      "golden ratio",
      "limit"
    ],
    "questionText": "The Fibonacci sequence is defined by $u_{n+2} = u_{n+1} + u_n$ with $u_1 = 1$ and $u_2 = 1$. By investigating the ratio $r_n = \\dfrac{u_{n+1}}{u_n}$ of successive terms, show that as $n$ increases this ratio approaches a limit $x$ satisfying $x^2 = x + 1$, and find that limit exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sequence and the ratio",
          "workingLatex": "u_{n+2} = u_{n+1} + u_n, \\qquad r_n = \\dfrac{u_{n+1}}{u_n}",
          "explanation": "Each term is the sum of the two before it. We study $r_n$, the factor by which each term grows compared with the one before, to see whether that growth factor settles down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Generate several terms",
          "workingLatex": "1,\\ 1,\\ 2,\\ 3,\\ 5,\\ 8,\\ 13,\\ 21,\\ 34,\\ 55",
          "explanation": "Adding successive pairs builds the sequence. Having plenty of terms lets us watch the ratio numerically before proving anything.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the first few ratios",
          "workingLatex": "r_1 = \\tfrac{1}{1} = 1, \\quad r_2 = \\tfrac{2}{1} = 2, \\quad r_3 = \\tfrac{3}{2} = 1.5, \\quad r_4 = \\tfrac{5}{3} \\approx 1.667",
          "explanation": "The early ratios swing above and below a central value, alternately overshooting and undershooting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute further ratios",
          "workingLatex": "r_5 = \\tfrac{8}{5} = 1.6, \\quad r_6 = \\tfrac{13}{8} = 1.625, \\quad r_7 = \\tfrac{21}{13} \\approx 1.615, \\quad r_8 = \\tfrac{34}{21} \\approx 1.619",
          "explanation": "The swings are getting smaller: the ratios are closing in on a value near $1.618$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Observe the trend",
          "workingLatex": "r_9 = \\tfrac{55}{34} \\approx 1.6176, \\quad \\dots \\to x",
          "explanation": "The ratios clearly converge. If they approach a limit, both $r_n$ and the next ratio $r_{n+1}$ tend to the same value $x$, and we can find $x$ algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide the recurrence by u_(n+1)",
          "workingLatex": "\\dfrac{u_{n+2}}{u_{n+1}} = \\dfrac{u_{n+1}}{u_{n+1}} + \\dfrac{u_n}{u_{n+1}}",
          "explanation": "Dividing the defining relation through by $u_{n+1}$ turns it into a statement purely about ratios of consecutive terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite in terms of the ratios",
          "workingLatex": "r_{n+1} = 1 + \\dfrac{1}{r_n}",
          "explanation": "Here $\\tfrac{u_{n+2}}{u_{n+1}} = r_{n+1}$, and $\\tfrac{u_n}{u_{n+1}}$ is the reciprocal of $r_n$. This gives a clean recurrence connecting one ratio to the next.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the limit",
          "workingLatex": "r_n \\to x, \\quad r_{n+1} \\to x \\;\\Rightarrow\\; x = 1 + \\dfrac{1}{x}",
          "explanation": "If the ratios converge to $x$, then far along the sequence both sides of the ratio recurrence must equal $x$. Replacing $r_{n+1}$ and $r_n$ by $x$ gives the limiting equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clear the fraction",
          "workingLatex": "x \\times x = x \\times 1 + x \\times \\dfrac{1}{x} \\;\\Rightarrow\\; x^2 = x + 1",
          "explanation": "Multiplying every term by $x$ removes the reciprocal and produces exactly the required relation $x^2 = x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Form a standard quadratic",
          "workingLatex": "x^2 - x - 1 = 0",
          "explanation": "Bringing everything to one side puts the equation in a form ready for the quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "x = \\dfrac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} = \\dfrac{1 \\pm \\sqrt{5}}{2}",
          "explanation": "With $a = 1$, $b = -1$, $c = -1$, the discriminant is $1 + 4 = 5$, giving two possible limits.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the negative root",
          "workingLatex": "\\dfrac{1 - \\sqrt{5}}{2} \\approx -0.618 < 0",
          "explanation": "Every term of the sequence is positive, so every ratio $r_n$ is positive; the limit cannot be negative. We discard the negative root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Identify the limit",
          "workingLatex": "x = \\dfrac{1 + \\sqrt{5}}{2} \\approx 1.618",
          "explanation": "The positive root is the golden ratio, and its value $\\approx 1.618$ matches the numerical ratios we computed — a reassuring confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "\\lim_{n \\to \\infty} \\dfrac{u_{n+1}}{u_n} = \\dfrac{1 + \\sqrt{5}}{2}",
          "explanation": "The ratio of successive terms approaches the golden ratio, the positive solution of $x^2 = x + 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{1 + \\sqrt{5}}{2} \\approx 1.618$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "closed form",
      "linear recurrence",
      "geometric sequence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 2u_n + 3$ with $u_1 = 1$. Derive a closed-form (position-to-term) formula for $u_n$ in terms of $n$, and use it to find $u_{10}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence and the goal",
          "workingLatex": "u_{n+1} = 2u_n + 3, \\quad u_1 = 1",
          "explanation": "Right now each term is defined only through the previous one. A closed form is a single formula giving $u_n$ directly from $n$, so we never have to iterate. The constant $+3$ is what stops this being a plain geometric sequence, so we deal with it first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the fixed point of the rule",
          "workingLatex": "L = 2L + 3 \\;\\Rightarrow\\; -L = 3 \\;\\Rightarrow\\; L = -3",
          "explanation": "The fixed point is the value the rule would leave unchanged. Even though this sequence grows without limit, this value $-3$ is exactly the right amount to shift by so that the constant disappears.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Introduce a shifted sequence",
          "workingLatex": "v_n = u_n - L = u_n + 3",
          "explanation": "We measure each term relative to the fixed point. This shift is designed to convert the awkward $+3$ recurrence into a clean multiply-only one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show the shifted sequence is geometric",
          "workingLatex": "u_{n+1} + 3 = (2u_n + 3) + 3 = 2u_n + 6 = 2(u_n + 3)",
          "explanation": "Adding $3$ to both sides of the recurrence and factorising shows the shifted terms simply double each step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the geometric relation",
          "workingLatex": "v_{n+1} = 2v_n",
          "explanation": "In terms of $v_n$ the rule is purely 'multiply by $2$', so $v_n$ is a geometric sequence with common ratio $2$ — and geometric sequences have an easy closed form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the first shifted term",
          "workingLatex": "v_1 = u_1 + 3 = 1 + 3 = 4",
          "explanation": "The starting value of the shifted sequence comes straight from $u_1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the closed form for v_n",
          "workingLatex": "v_n = v_1 \\times 2^{\\,n-1} = 4 \\times 2^{\\,n-1}",
          "explanation": "A geometric sequence with first term $v_1$ and ratio $2$ has $n$th term $v_1 \\times 2^{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the power",
          "workingLatex": "v_n = 4 \\times 2^{\\,n-1} = 2^2 \\times 2^{\\,n-1} = 2^{\\,n+1}",
          "explanation": "Writing $4$ as $2^2$ and adding the indices tidies the expression into a single power of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Undo the shift to get u_n",
          "workingLatex": "u_n = v_n - 3 = 2^{\\,n+1} - 3",
          "explanation": "Since $v_n = u_n + 3$, we recover $u_n$ by subtracting $3$. This is the closed-form formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the formula at n = 1",
          "workingLatex": "u_1 = 2^{2} - 3 = 4 - 3 = 1 \\;\\checkmark",
          "explanation": "The formula returns the correct first term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the formula at n = 2 and n = 3",
          "workingLatex": "u_2 = 2^{3} - 3 = 5, \\quad u_3 = 2^{4} - 3 = 13",
          "explanation": "The recurrence gives $u_2 = 2(1)+3 = 5$ and $u_3 = 2(5)+3 = 13$, matching the formula, so we can trust it.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute n = 10",
          "workingLatex": "u_{10} = 2^{\\,11} - 3",
          "explanation": "The whole point of a closed form is that we can jump straight to a far term without listing the ones before it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate u_10",
          "workingLatex": "u_{10} = 2048 - 3 = 2045",
          "explanation": "Since $2^{11} = 2048$, subtracting $3$ gives the tenth term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "u_n = 2^{\\,n+1} - 3, \\qquad u_{10} = 2045",
          "explanation": "The closed form is $u_n = 2^{n+1} - 3$, and it gives $u_{10} = 2045$ directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_n = 2^{\\,n+1} - 3$, giving $u_{10} = 2045$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "periodic sequence",
      "period",
      "summing a periodic sequence"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{6}{u_n}$ with $u_1 = 2$. Show that the sequence is periodic, state its period, and hence find the sum of the first $41$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = \\dfrac{6}{u_n}",
          "explanation": "Each term is $6$ divided by the previous term. To detect periodicity we generate terms and look for a value that reappears.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute u_2",
          "workingLatex": "u_2 = \\dfrac{6}{2} = 3",
          "explanation": "Dividing $6$ by the first term $2$ gives the second term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_3",
          "workingLatex": "u_3 = \\dfrac{6}{3} = 2",
          "explanation": "Dividing $6$ by $u_2 = 3$ returns $2$ — the same as the first term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_4 to confirm the cycle",
          "workingLatex": "u_4 = \\dfrac{6}{2} = 3",
          "explanation": "Dividing $6$ by $u_3 = 2$ gives $3$ again, so the values are alternating between $2$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Notice the repetition",
          "workingLatex": "u_3 = u_1 = 2, \\quad u_4 = u_2 = 3",
          "explanation": "The values have returned after two steps. Because each term depends only on the previous one, once two terms repeat the whole pattern repeats forever.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the period",
          "workingLatex": "u_{n+2} = u_n \\quad \\text{for all } n",
          "explanation": "The sequence cycles through $2, 3, 2, 3, \\dots$, so it is periodic with period $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sum one full period",
          "workingLatex": "2 + 3 = 5",
          "explanation": "Each complete cycle of two terms contributes $5$ to a running total.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split 41 terms into whole periods",
          "workingLatex": "41 = 2 \\times 20 + 1",
          "explanation": "We count how many complete periods of $2$ fit inside $41$ terms: twenty periods use $40$ terms and leave $1$ over.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sum the 20 complete periods",
          "workingLatex": "20 \\times 5 = 100",
          "explanation": "Each of the $20$ complete cycles contributes $5$, so together the first $40$ terms sum to $100$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify the leftover term by position",
          "workingLatex": "u_n = 2 \\text{ for odd } n, \\quad u_n = 3 \\text{ for even } n",
          "explanation": "The value at each position depends on whether the index is odd or even: odd positions hold $2$, even positions hold $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the 41st term",
          "workingLatex": "41 \\text{ is odd} \\;\\Rightarrow\\; u_{41} = 2",
          "explanation": "Since $41$ is odd, the leftover $41$st term takes the odd-position value $2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine for the total",
          "workingLatex": "\\sum_{n=1}^{41} u_n = 100 + 2 = 102",
          "explanation": "Adding the whole-period contribution and the single leftover term gives the sum of the first $41$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "\\sum_{n=1}^{41} u_n = 102",
          "explanation": "The sequence has period $2$, and using that structure the first $41$ terms sum to $102$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The sequence is periodic with period $2$, and $\\displaystyle\\sum_{n=1}^{41} u_n = 102$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "telescoping sum",
      "partial fractions"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = u_n + \\dfrac{1}{n(n+1)}$ for $n \\geq 1$, with first term $u_1 = 0$. By writing $\\dfrac{1}{n(n+1)}$ in partial fractions, find the exact value of $u_{20}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = u_n + \\dfrac{1}{n(n+1)}, \\quad u_1 = 0",
          "explanation": "Each term is the previous term plus a small extra amount $\\dfrac{1}{n(n+1)}$ that shrinks as $n$ grows. Building up from $u_1 = 0$, every jump adds one of these pieces.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the target term as a running total of the added pieces",
          "workingLatex": "u_{20} = u_1 + \\sum_{n=1}^{19}\\left(u_{n+1} - u_n\\right)",
          "explanation": "Going from $u_1$ up to $u_{20}$ takes $19$ steps, and each step adds one difference $u_{n+1} - u_n$. Adding all those differences onto the start value rebuilds $u_{20}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify each difference",
          "workingLatex": "u_{n+1} - u_n = \\dfrac{1}{n(n+1)}",
          "explanation": "The recurrence states exactly what is added at each step, so the gap between consecutive terms is $\\dfrac{1}{n(n+1)}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express u_20 as a single sum",
          "workingLatex": "u_{20} = 0 + \\sum_{n=1}^{19} \\dfrac{1}{n(n+1)}",
          "explanation": "Substituting the difference and the starting value $u_1 = 0$ turns the task into evaluating one sum of $19$ fractions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split into partial fractions",
          "workingLatex": "\\dfrac{1}{n(n+1)} = \\dfrac{1}{n} - \\dfrac{1}{n+1}",
          "explanation": "Writing the fraction as a difference of two simpler fractions is the key trick: it makes neighbouring terms overlap so they cancel.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the partial fractions",
          "workingLatex": "\\dfrac{1}{n} - \\dfrac{1}{n+1} = \\dfrac{(n+1) - n}{n(n+1)} = \\dfrac{1}{n(n+1)}",
          "explanation": "Recombining over a common denominator returns the original fraction, confirming the split is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the split into the sum",
          "workingLatex": "\\sum_{n=1}^{19}\\left(\\dfrac{1}{n} - \\dfrac{1}{n+1}\\right)",
          "explanation": "Now every bracket contributes a positive part $\\dfrac{1}{n}$ and a negative part $\\dfrac{1}{n+1}$ that lines up with the next bracket.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write out terms to expose the telescoping",
          "workingLatex": "\\left(\\tfrac{1}{1} - \\tfrac{1}{2}\\right) + \\left(\\tfrac{1}{2} - \\tfrac{1}{3}\\right) + \\cdots + \\left(\\tfrac{1}{19} - \\tfrac{1}{20}\\right)",
          "explanation": "Laying the terms out shows the pattern: the $-\\tfrac{1}{2}$ from the first bracket cancels the $+\\tfrac{1}{2}$ in the second, and so on down the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the interior terms",
          "workingLatex": "= \\dfrac{1}{1} - \\dfrac{1}{20}",
          "explanation": "Every fraction except the very first and the very last is cancelled by a neighbour, which is why this is called a telescoping sum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate what remains",
          "workingLatex": "1 - \\dfrac{1}{20} = \\dfrac{20}{20} - \\dfrac{1}{20} = \\dfrac{19}{20}",
          "explanation": "Only the opening $\\tfrac{1}{1}$ and the closing $-\\tfrac{1}{20}$ survive, and combining them gives $\\dfrac{19}{20}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State u_20",
          "workingLatex": "u_{20} = 0 + \\dfrac{19}{20} = \\dfrac{19}{20} = 0.95",
          "explanation": "Adding this total to the starting value $u_1 = 0$ gives $u_{20} = \\dfrac{19}{20}$. As $n$ grows the terms creep towards $1$, so a value of $0.95$ sitting just below $1$ is a reassuring check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{20} = \\dfrac{19}{20} = 0.95$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "constant sequence",
      "fixed point"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = 4u_n - 9$. Find the value of the first term $u_1$ for which the sequence is constant, that is, for which every term is equal to the one before it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what a constant sequence means",
          "workingLatex": "u_{n+1} = u_n \\text{ for all } n",
          "explanation": "A constant sequence never changes: every term equals the one before it. Such a value is called a fixed point, because feeding it into the rule returns the very same number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the fixed-point condition",
          "workingLatex": "c = 4c - 9",
          "explanation": "If the constant value is $c$, then applying the rule to $c$ must give $c$ again. Replacing both $u_n$ and $u_{n+1}$ by $c$ gives this equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Gather the c terms",
          "workingLatex": "c - 4c = -9 \\implies -3c = -9",
          "explanation": "Collecting the $c$ terms on one side isolates the unknown constant.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Finish solving",
          "workingLatex": "c = \\dfrac{-9}{-3} = 3",
          "explanation": "Dividing through gives the only value that stays fixed under the rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret for the first term",
          "workingLatex": "u_1 = 3",
          "explanation": "For the whole sequence to be constant it must start at the fixed point, so the required first term is $u_1 = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify the second term",
          "workingLatex": "u_2 = 4(3) - 9 = 12 - 9 = 3",
          "explanation": "Applying the rule to $3$ returns $3$, so the sequence has not moved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify it stays constant",
          "workingLatex": "u_3 = 4(3) - 9 = 3, \\quad u_4 = 4(3) - 9 = 3",
          "explanation": "Each new term is again $3$; by induction, once the sequence sits at $3$ it stays there forever.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Show why other starting values do not work",
          "workingLatex": "u_1 = 4 \\implies u_2 = 4(4) - 9 = 7 \\implies u_3 = 4(7) - 9 = 19",
          "explanation": "Starting just one unit away, the terms race off to $7$, then $19$, and keep growing, so $3$ really is special.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the behaviour",
          "workingLatex": "u_{n+1} - 3 = 4(u_n - 3)",
          "explanation": "The gap from $3$ is multiplied by $4$ every step. Only a gap of zero (starting exactly at $3$) keeps the sequence constant; any other start is magnified.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "u_1 = 3",
          "explanation": "The single first term producing a constant sequence is $u_1 = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_1 = 3$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "recurrence relations",
      "periodic sequence",
      "proof"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{1}{1 - u_n}$, where $u_n \\neq 1$ for all $n$. Prove that the sequence is periodic and state its period, by showing that $u_{n+3} = u_n$. Illustrate your result using $u_1 = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the proof",
          "workingLatex": "\\text{Show } u_{n+3} = u_n \\text{ by finding } u_{n+2} \\text{ and } u_{n+3} \\text{ in terms of } u_n",
          "explanation": "A sequence has period $3$ if applying the rule three times brings you back to where you started. So we compute two more steps on from $u_n$ and check that the third lands on $u_n$ again.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the rule",
          "workingLatex": "u_{n+1} = \\dfrac{1}{1 - u_n}",
          "explanation": "This is the single rule we apply repeatedly; the condition $u_n \\neq 1$ just keeps every denominator non-zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write u_{n+2} using the rule",
          "workingLatex": "u_{n+2} = \\dfrac{1}{1 - u_{n+1}} = \\dfrac{1}{1 - \\dfrac{1}{1 - u_n}}",
          "explanation": "Applying the rule to $u_{n+1}$ gives $u_{n+2}$; then we substitute the expression for $u_{n+1}$ so everything is written in terms of $u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the inner denominator",
          "workingLatex": "1 - \\dfrac{1}{1 - u_n} = \\dfrac{(1 - u_n) - 1}{1 - u_n} = \\dfrac{-u_n}{1 - u_n}",
          "explanation": "Combining the two pieces over the common denominator $1 - u_n$ tidies the compound fraction into a single ratio.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Complete u_{n+2}",
          "workingLatex": "u_{n+2} = \\dfrac{1}{\\,\\dfrac{-u_n}{1 - u_n}\\,} = \\dfrac{1 - u_n}{-u_n} = \\dfrac{u_n - 1}{u_n}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal, and tidying the signs gives a clean form for the term two steps ahead.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write u_{n+3} using the rule",
          "workingLatex": "u_{n+3} = \\dfrac{1}{1 - u_{n+2}} = \\dfrac{1}{1 - \\dfrac{u_n - 1}{u_n}}",
          "explanation": "One more application of the rule, this time substituting the expression we just found for $u_{n+2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify this denominator",
          "workingLatex": "1 - \\dfrac{u_n - 1}{u_n} = \\dfrac{u_n - (u_n - 1)}{u_n} = \\dfrac{1}{u_n}",
          "explanation": "The $u_n$ terms cancel in the numerator, leaving the very simple $\\dfrac{1}{u_n}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Complete u_{n+3}",
          "workingLatex": "u_{n+3} = \\dfrac{1}{\\,\\dfrac{1}{u_n}\\,} = u_n",
          "explanation": "The reciprocal of $\\dfrac{1}{u_n}$ is $u_n$, so after three applications we are exactly back to the starting term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the periodicity conclusion",
          "workingLatex": "u_{n+3} = u_n \\text{ for all valid } n",
          "explanation": "Because this holds for every $n$, the sequence repeats every three terms. That is precisely the definition of period $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Illustrate with u_1 = 4: find u_2",
          "workingLatex": "u_2 = \\dfrac{1}{1 - 4} = \\dfrac{1}{-3} = -\\dfrac{1}{3}",
          "explanation": "A concrete start makes the cycle visible. Applying the rule to $4$ gives the second term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find u_3",
          "workingLatex": "u_3 = \\dfrac{1}{1 - \\left(-\\tfrac{1}{3}\\right)} = \\dfrac{1}{\\tfrac{4}{3}} = \\dfrac{3}{4}",
          "explanation": "Feeding $-\\tfrac{1}{3}$ into the rule produces the third term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find u_4",
          "workingLatex": "u_4 = \\dfrac{1}{1 - \\tfrac{3}{4}} = \\dfrac{1}{\\tfrac{1}{4}} = 4 = u_1",
          "explanation": "The fourth term returns to $4$, exactly matching $u_1$ — the cycle has closed after three steps, just as the algebra predicted.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the period is exactly 3",
          "workingLatex": "u_1 = 4, \\ u_2 = -\\tfrac{1}{3}, \\ u_3 = \\tfrac{3}{4}, \\ u_4 = u_1",
          "explanation": "The first three terms are all different, so the sequence does not repeat any sooner than every three terms. Hence the period is exactly $3$, not $1$ or $2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result",
          "workingLatex": "\\text{Periodic with period } 3",
          "explanation": "We have proved algebraically that $u_{n+3} = u_n$ and confirmed it numerically, so the sequence is periodic with period $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "It is proved that $u_{n+3} = u_n$ for all valid $n$, so the sequence is periodic with period $3$."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "periodic sequence",
      "sum of terms",
      "period and remainder"
    ],
    "questionText": "A sequence is periodic with period $7$, and its first seven terms are $u_1 = 5$, $u_2 = 8$, $u_3 = 2$, $u_4 = -1$, $u_5 = 6$, $u_6 = 3$, $u_7 = 4$. Find $\\displaystyle\\sum_{n=1}^{300} u_n$, the sum of the first $300$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the periodicity",
          "workingLatex": "u_{n+7} = u_n",
          "explanation": "Period $7$ means the seven listed values repeat over and over: terms $8, 9, 10, \\ldots$ copy terms $1, 2, 3, \\ldots$ in the same order.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Show the block repeats",
          "workingLatex": "u_8 = u_1, \\quad u_9 = u_2, \\quad \\ldots, \\quad u_{14} = u_7",
          "explanation": "Making the repetition explicit reassures us that the whole sequence is just the same block of seven numbers stacked end to end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add up one full period",
          "workingLatex": "S_7 = 5 + 8 + 2 + (-1) + 6 + 3 + 4",
          "explanation": "Each complete block contributes the same amount, so the sum of one block is the natural building unit for the total.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the period sum",
          "workingLatex": "S_7 = 27",
          "explanation": "Adding the seven values carefully gives $27$ for every complete cycle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Plan the split of 300 terms",
          "workingLatex": "300 = (\\text{whole periods}) \\times 7 + (\\text{leftover terms})",
          "explanation": "Since the pattern comes in chunks of seven, we count how many whole chunks fit into $300$ terms and how many spare terms remain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide 300 by 7",
          "workingLatex": "300 = 7 \\times 42 + 6",
          "explanation": "Because $7 \\times 42 = 294$, there is a remainder of $6$. So there are $42$ complete periods and $6$ extra terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the leftover terms",
          "workingLatex": "\\text{terms } 295\\text{ to }300 \\ \\equiv \\ u_1, u_2, u_3, u_4, u_5, u_6",
          "explanation": "After $42$ full periods we have used $294$ terms; the next six (positions $295$ to $300$) begin the block again, so they are $u_1$ through $u_6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum from the complete periods",
          "workingLatex": "42 \\times S_7 = 42 \\times 27",
          "explanation": "Each of the $42$ whole periods contributes $27$, so together they give $42 \\times 27$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate that contribution",
          "workingLatex": "42 \\times 27 = 1134",
          "explanation": "This is the total coming from all the complete cycles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sum the six leftover terms",
          "workingLatex": "u_1 + u_2 + u_3 + u_4 + u_5 + u_6 = 5 + 8 + 2 + (-1) + 6 + 3",
          "explanation": "The remaining part of the total comes from the six spare terms at the end.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the leftover sum",
          "workingLatex": "5 + 8 + 2 + (-1) + 6 + 3 = 23",
          "explanation": "Adding the first six values of the block gives $23$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine the two parts",
          "workingLatex": "\\sum_{n=1}^{300} u_n = 1134 + 23",
          "explanation": "The full sum is the complete-period total plus the leftover total.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final total",
          "workingLatex": "\\sum_{n=1}^{300} u_n = 1157",
          "explanation": "Adding the two contributions gives the sum of the first $300$ terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{n=1}^{300} u_n = 1157$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "linear recurrence",
      "limit",
      "closed form"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = a u_n + b$, where $a$ and $b$ are constants with $\\left| a \\right| < 1$. The terms approach the limit $6$, and the first two terms are $u_1 = 2$ and $u_2 = 4$. (a) Find $a$ and $b$. (b) Find a closed form for $u_n$. (c) Hence find the exact value of $u_8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the limit to form an equation",
          "workingLatex": "6 = 6a + b",
          "explanation": "If the terms settle to the limit $6$, then $u_n$ and $u_{n+1}$ are both essentially $6$. Putting $L = 6$ into $u_{n+1} = a u_n + b$ gives this relationship between $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the two given terms to form a second equation",
          "workingLatex": "u_2 = a u_1 + b \\implies 4 = 2a + b",
          "explanation": "The recurrence links consecutive terms, so substituting the known $u_1 = 2$ and $u_2 = 4$ gives a second equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Eliminate b by subtracting",
          "workingLatex": "(6) - (4) = (6a + b) - (2a + b)",
          "explanation": "Both equations contain a single $+b$, so subtracting one from the other removes $b$ and leaves an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "2 = 4a \\implies a = \\dfrac{1}{2}",
          "explanation": "The subtraction gives $2 = 4a$, so $a = \\tfrac{1}{2}$. Note $\\left| a \\right| < 1$, which is exactly the condition needed for the sequence to converge.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for b",
          "workingLatex": "4 = 2\\left(\\tfrac{1}{2}\\right) + b = 1 + b \\implies b = 3",
          "explanation": "Substituting $a = \\tfrac{1}{2}$ back into $4 = 2a + b$ gives $b = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the limit",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{3}{1 - \\tfrac{1}{2}} = 6",
          "explanation": "The standard equilibrium formula $L = \\dfrac{b}{1-a}$ returns $6$, matching the given limit — a good check on $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the closed form via the gap from the limit",
          "workingLatex": "u_{n+1} - 6 = \\tfrac{1}{2}\\left(u_n - 6\\right)",
          "explanation": "Measuring each term as a gap from the limit, the recurrence says the gap simply halves every step. That makes the gaps a geometric sequence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the gap as a geometric term",
          "workingLatex": "u_n - 6 = (u_1 - 6)\\left(\\tfrac{1}{2}\\right)^{n-1} = -4\\left(\\tfrac{1}{2}\\right)^{n-1}",
          "explanation": "A geometric sequence of gaps starts at $u_1 - 6 = -4$ and multiplies by $\\tfrac{1}{2}$ each step, giving the $n$-th gap directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into a closed form for u_n",
          "workingLatex": "u_n = 6 - 4\\left(\\tfrac{1}{2}\\right)^{n-1}",
          "explanation": "Adding $6$ back onto the gap expresses $u_n$ explicitly in terms of $n$, with no need to iterate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the closed form on the known terms",
          "workingLatex": "u_1 = 6 - 4(1) = 2, \\quad u_2 = 6 - 4\\left(\\tfrac{1}{2}\\right) = 4",
          "explanation": "The formula reproduces $u_1 = 2$ and $u_2 = 4$, confirming it is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check one more term",
          "workingLatex": "u_3 = 6 - 4\\left(\\tfrac{1}{4}\\right) = 5; \\quad \\tfrac{1}{2}(4) + 3 = 5",
          "explanation": "The closed form and the recurrence agree on $u_3 = 5$, giving further confidence.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the far term u_8",
          "workingLatex": "u_8 = 6 - 4\\left(\\tfrac{1}{2}\\right)^{7} = 6 - \\dfrac{4}{128}",
          "explanation": "The closed form lets us jump straight to $u_8$ without computing every term in between.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify u_8",
          "workingLatex": "u_8 = 6 - \\dfrac{1}{32} = \\dfrac{192 - 1}{32} = \\dfrac{191}{32}",
          "explanation": "Simplifying gives the exact value; as expected it sits just below the limit $6$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all results",
          "workingLatex": "a = \\tfrac{1}{2}, \\ b = 3, \\ u_n = 6 - 4\\left(\\tfrac{1}{2}\\right)^{n-1}, \\ u_8 = \\dfrac{191}{32}",
          "explanation": "We have found the constants, an explicit formula, and the requested distant term.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = \\dfrac{1}{2}, \\ b = 3, \\ u_n = 6 - 4\\left(\\dfrac{1}{2}\\right)^{n-1}, \\ u_8 = \\dfrac{191}{32}$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "nonlinear recurrence",
      "monotone bounded",
      "limit"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\sqrt{6 + u_n}$ with $u_1 = 1$. (a) Show that if $0 < u_n < 3$ then $0 < u_{n+1} < 3$, and that the sequence is increasing. (b) Explain why the sequence converges, and find its limit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the setup and compute a term",
          "workingLatex": "u_1 = 1, \\quad u_2 = \\sqrt{6 + 1} = \\sqrt{7} \\approx 2.646",
          "explanation": "Before proving anything, a couple of terms show the behaviour: the sequence starts at $1$ and jumps up toward roughly $3$, suggesting it increases but is held below some ceiling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute another term",
          "workingLatex": "u_3 = \\sqrt{6 + \\sqrt{7}} \\approx \\sqrt{8.646} \\approx 2.940",
          "explanation": "The next term is larger still, but by a smaller amount, hinting that the values are closing in on a limit near $3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the upper-bound claim",
          "workingLatex": "\\text{Claim: } 0 < u_n < 3 \\text{ for all } n",
          "explanation": "To guarantee the sequence cannot run away, we show every term stays trapped strictly between $0$ and $3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the base case",
          "workingLatex": "0 < u_1 = 1 < 3",
          "explanation": "The first term clearly lies in the interval, so the claim holds at the start.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Do the inductive step for the bound",
          "workingLatex": "0 < u_n < 3 \\implies 6 < 6 + u_n < 9 \\implies \\sqrt{6} < u_{n+1} < 3",
          "explanation": "If a term is below $3$, then $6 + u_n$ is below $9$, and taking the square root keeps it below $\\sqrt{9} = 3$. It also stays positive, so the next term is again in $(0, 3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude boundedness",
          "workingLatex": "0 < u_n < 3 \\text{ for all } n",
          "explanation": "By induction the sequence is bounded above by $3$ (and stays positive) for every term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the increasing claim",
          "workingLatex": "u_{n+1}^2 - u_n^2 = (6 + u_n) - u_n^2",
          "explanation": "To compare $u_{n+1}$ with $u_n$ we compare their squares, which avoids the awkward square root. The difference uses $u_{n+1}^2 = 6 + u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the difference",
          "workingLatex": "(6 + u_n) - u_n^2 = -(u_n^2 - u_n - 6) = -(u_n - 3)(u_n + 2)",
          "explanation": "Factorising the quadratic reveals exactly where the difference is positive or negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determine the sign",
          "workingLatex": "0 < u_n < 3 \\implies (u_n - 3) < 0, \\ (u_n + 2) > 0",
          "explanation": "Inside our interval the first bracket is negative and the second positive, so their product is negative; the leading minus sign then makes the whole difference positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude increasing",
          "workingLatex": "u_{n+1}^2 - u_n^2 > 0 \\implies u_{n+1} > u_n",
          "explanation": "Since both terms are positive, a larger square means a larger term, so every term exceeds the one before: the sequence is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Invoke convergence",
          "workingLatex": "\\text{increasing and bounded above} \\implies \\text{converges}",
          "explanation": "A sequence that keeps rising but can never pass a ceiling must settle down to a limit. This is the monotone-bounded convergence principle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Form the limit equation",
          "workingLatex": "L = \\sqrt{6 + L}",
          "explanation": "At the limit, $u_n$ and $u_{n+1}$ are both $L$, so the rule becomes an equation for $L$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve by squaring",
          "workingLatex": "L^2 = 6 + L \\implies L^2 - L - 6 = 0",
          "explanation": "Squaring removes the root and rearranges into a standard quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Factorise and pick the root",
          "workingLatex": "(L - 3)(L + 2) = 0 \\implies L = 3 \\text{ or } L = -2",
          "explanation": "The quadratic factorises neatly. Since every term is positive, the limit cannot be $-2$, so the genuine limit is $L = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "L = 3",
          "explanation": "The sequence is increasing, bounded above by $3$, and therefore converges to $L = 3$, consistent with the terms we computed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 3$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "geometric sequence",
      "sum of terms"
    ],
    "questionText": "A sequence is defined by $u_{n+2} = \\dfrac{u_{n+1}^{\\,2}}{u_n}$ with $u_1 = 2$ and $u_2 = 6$. (a) Prove that the sequence is geometric. (b) Find, in terms of $n$, the sum of the first $n$ terms, and hence evaluate the sum of the first $8$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the test for a geometric sequence",
          "workingLatex": "\\text{Geometric} \\iff \\dfrac{u_{n+1}}{u_n} = \\text{constant}",
          "explanation": "A sequence is geometric exactly when the ratio of each term to the previous one is the same fixed number. So we aim to show this ratio never changes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the recurrence",
          "workingLatex": "u_{n+2} = \\dfrac{u_{n+1}^{\\,2}}{u_n} \\implies \\dfrac{u_{n+2}}{u_{n+1}} = \\dfrac{u_{n+1}}{u_n}",
          "explanation": "Dividing both sides of the rule by $u_{n+1}$ shows the ratio one step ahead equals the current ratio, so each ratio copies the one before it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the ratio relation",
          "workingLatex": "r_{n+1} = r_n \\text{ where } r_n = \\dfrac{u_{n+1}}{u_n}",
          "explanation": "Writing the ratio as $r_n$, the relation says $r_{n+1} = r_n$: the ratios themselves form a constant sequence, so they all share one value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the common ratio from the first two terms",
          "workingLatex": "r = \\dfrac{u_2}{u_1} = \\dfrac{6}{2} = 3",
          "explanation": "Since every ratio is equal, we only need the first one, computed from the given $u_1 = 2$ and $u_2 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm with the next terms",
          "workingLatex": "u_3 = \\dfrac{u_2^2}{u_1} = \\dfrac{36}{2} = 18, \\quad u_4 = \\dfrac{u_3^2}{u_2} = \\dfrac{324}{6} = 54",
          "explanation": "Generating the next terms gives $2, 6, 18, 54$, and each is $3$ times the one before, matching the constant ratio.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the geometric conclusion",
          "workingLatex": "\\text{Geometric with } a = 2, \\ r = 3",
          "explanation": "The ratio is a fixed $3$, so the sequence is geometric with first term $2$ and common ratio $3$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the sum formula",
          "workingLatex": "S_n = \\dfrac{a(r^n - 1)}{r - 1}",
          "explanation": "For a geometric sequence with $r \\neq 1$, the sum of the first $n$ terms has this standard closed form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a and r",
          "workingLatex": "S_n = \\dfrac{2(3^n - 1)}{3 - 1} = \\dfrac{2(3^n - 1)}{2}",
          "explanation": "Putting in $a = 2$ and $r = 3$, the denominator becomes $2$, which will cancel neatly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the general sum",
          "workingLatex": "S_n = 3^n - 1",
          "explanation": "The factor of $2$ cancels, leaving a remarkably clean formula for the sum of the first $n$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute n = 8",
          "workingLatex": "S_8 = 3^8 - 1",
          "explanation": "The question also asks for the sum of the first eight terms, so we set $n = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the power",
          "workingLatex": "3^8 = (3^4)^2 = 81^2 = 6561",
          "explanation": "Computing $3^8$ by squaring $3^4 = 81$ gives the large term.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Finish the numerical sum",
          "workingLatex": "S_8 = 6561 - 1 = 6560",
          "explanation": "Subtracting $1$ gives the total of the first eight terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "S_n = 3^n - 1, \\quad S_8 = 6560",
          "explanation": "The sequence is geometric, its first-$n$ sum is $3^n - 1$, and the first eight terms total $6560$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_n = 3^n - 1$, and $S_8 = 6560$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "recurrence relations",
      "summation",
      "closed form"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = u_n + (2n + 1)$ with $u_1 = 3$. (a) By summation, find a closed form for $u_n$ in terms of $n$. (b) Hence find $u_{20}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the recurrence",
          "workingLatex": "u_{n+1} = u_n + (2n + 1), \\quad u_1 = 3",
          "explanation": "Each term is the previous one plus $2n + 1$, an amount that grows with $n$. Because the increment changes each step, the sequence is not arithmetic, so we build a closed form by summing the increments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express u_n as the start plus accumulated increments",
          "workingLatex": "u_n = u_1 + \\sum_{k=1}^{n-1}(2k + 1)",
          "explanation": "Climbing from $u_1$ to $u_n$ takes $n - 1$ steps, and step $k$ adds $2k + 1$. Adding all those increments onto the starting value gives $u_n$ (a telescoping of the differences).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the starting value",
          "workingLatex": "u_n = 3 + \\sum_{k=1}^{n-1}(2k + 1)",
          "explanation": "With $u_1 = 3$ fixed, the whole problem reduces to evaluating one sum in terms of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the sum",
          "workingLatex": "\\sum_{k=1}^{n-1}(2k + 1) = 2\\sum_{k=1}^{n-1} k + \\sum_{k=1}^{n-1} 1",
          "explanation": "Separating the linear part from the constant part lets us use standard summation formulas on each piece.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sum the linear part",
          "workingLatex": "2\\sum_{k=1}^{n-1} k = 2 \\cdot \\dfrac{(n-1)n}{2} = n(n-1)",
          "explanation": "The sum of the first $n - 1$ whole numbers is $\\dfrac{(n-1)n}{2}$; doubling it cancels the halves.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Sum the constant part",
          "workingLatex": "\\sum_{k=1}^{n-1} 1 = n - 1",
          "explanation": "Adding $1$ a total of $n - 1$ times simply gives $n - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the two sums",
          "workingLatex": "n(n-1) + (n-1) = (n-1)(n+1) = n^2 - 1",
          "explanation": "Factoring out $(n - 1)$ and using the difference of two squares tidies the sum into $n^2 - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form the closed form",
          "workingLatex": "u_n = 3 + (n^2 - 1) = n^2 + 2",
          "explanation": "Adding the starting value gives a simple explicit formula for the $n$-th term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the first term",
          "workingLatex": "u_1 = 1^2 + 2 = 3",
          "explanation": "The formula returns the given $u_1 = 3$, a first check that it is right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the second term",
          "workingLatex": "u_2 = 2^2 + 2 = 6; \\quad u_1 + (2(1)+1) = 3 + 3 = 6",
          "explanation": "The closed form and the recurrence agree on $u_2 = 6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the third term",
          "workingLatex": "u_3 = 3^2 + 2 = 11; \\quad u_2 + (2(2)+1) = 6 + 5 = 11",
          "explanation": "They also agree on $u_3 = 11$, confirming the formula behaves correctly as $n$ increases.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the required term u_20",
          "workingLatex": "u_{20} = 20^2 + 2 = 400 + 2 = 402",
          "explanation": "The closed form lets us find $u_{20}$ instantly, without listing all the earlier terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the results",
          "workingLatex": "u_n = n^2 + 2, \\quad u_{20} = 402",
          "explanation": "We have an explicit formula for the sequence and the specific value asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_n = n^2 + 2$, and $u_{20} = 402$"
    }
  },
  {
    "id": "al.y2.pure.recurrence.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "modelling",
      "recurrence relations",
      "savings account"
    ],
    "questionText": "£2000 is invested in a savings account. At the end of each year, $4\\%$ interest is added and then a further £500 is deposited. The amount in the account at the start of year $n$ is $u_n$, with $u_1 = 2000$. Find the year in which the balance first exceeds £5000, and state that balance to the nearest penny.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Build the recurrence from the model",
          "workingLatex": "u_{n+1} = 1.04\\,u_n + 500, \\quad u_1 = 2000",
          "explanation": "Adding $4\\%$ interest multiplies the balance by $1.04$; the extra £500 deposit is then added on. So each year's balance is $1.04$ times last year's plus $500$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the long-term behaviour",
          "workingLatex": "a = 1.04 > 1",
          "explanation": "Because the multiplier exceeds $1$, the balance grows without limit — there is no steady state, so we track the terms until they pass £5000.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_2",
          "workingLatex": "u_2 = 1.04(2000) + 500 = 2080 + 500 = 2580",
          "explanation": "One year on: interest turns £2000 into £2080, and the deposit brings it to £2580.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_3",
          "workingLatex": "u_3 = 1.04(2580) + 500 = 2683.20 + 500 = 3183.20",
          "explanation": "Repeating the same two-step calculation gives the start-of-year-3 balance.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute u_4",
          "workingLatex": "u_4 = 1.04(3183.20) + 500 = 3310.528 + 500 = 3810.528",
          "explanation": "The balance keeps climbing; we keep full accuracy to avoid rounding drift.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute u_5",
          "workingLatex": "u_5 = 1.04(3810.528) + 500 = 3962.949 + 500 = 4462.949",
          "explanation": "By the start of year 5 the balance is about £4462.95, still short of the £5000 target.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute u_6",
          "workingLatex": "u_6 = 1.04(4462.949) + 500 = 4641.467 + 500 = 5141.467",
          "explanation": "By the start of year 6 the balance is about £5141.47, which is above £5000.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the first crossing",
          "workingLatex": "u_5 \\approx 4462.95 < 5000 < 5141.47 \\approx u_6",
          "explanation": "The balance is below the target at the start of year 5 and above it at the start of year 6, so it first exceeds £5000 during year 6.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up a check using the closed form: find the equilibrium",
          "workingLatex": "L = \\dfrac{b}{1 - a} = \\dfrac{500}{1 - 1.04} = \\dfrac{500}{-0.04} = -12500",
          "explanation": "The formula $L = \\dfrac{b}{1-a}$ gives the (here negative) equilibrium value used to build an exact expression for $u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the closed form",
          "workingLatex": "u_n = -12500 + (2000 + 12500)(1.04)^{n-1} = -12500 + 14500(1.04)^{n-1}",
          "explanation": "Measuring the balance as a gap from $L$, the gap grows geometrically by $1.04$ each year, giving an exact formula for any year.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the target inequality",
          "workingLatex": "-12500 + 14500(1.04)^{n-1} > 5000",
          "explanation": "We want the first year the balance passes £5000, so we solve this inequality for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Isolate the power",
          "workingLatex": "(1.04)^{n-1} > \\dfrac{17500}{14500} = \\dfrac{35}{29} \\approx 1.2069",
          "explanation": "Adding $12500$ and dividing by $14500$ leaves the growth factor on its own, ready for logarithms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take logarithms",
          "workingLatex": "n - 1 > \\dfrac{\\ln(1.2069)}{\\ln(1.04)} \\approx \\dfrac{0.1881}{0.0392} \\approx 4.79",
          "explanation": "Logarithms bring the exponent down. The result $4.79$ means $n - 1$ must exceed $4.79$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round up to the first whole year",
          "workingLatex": "n - 1 \\geq 5 \\implies n \\geq 6 \\implies n = 6",
          "explanation": "Since $n$ counts whole years, the first year that works is $n = 6$, confirming the iteration above.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer with the balance",
          "workingLatex": "\\text{Year } 6, \\quad u_6 \\approx \\pounds 5141.47",
          "explanation": "The balance first exceeds £5000 during year 6, when it is about £5141.47 to the nearest penny.",
          "diagram": null
        }
      ],
      "finalAnswer": "The balance first exceeds £5000 in year $6$, when it is £5141.47 (to the nearest penny)."
    }
  },
  {
    "id": "al.y2.pure.recurrence.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Recurrence and general sequences",
    "subtopicId": "al.y2.pure.recurrence",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "recurrence relations",
      "limit",
      "fixed point"
    ],
    "questionText": "A sequence is defined by $u_{n+1} = \\dfrac{2u_n + 3}{u_n + 4}$ with $u_1 = 2$. Given that the sequence converges, find its limit, justifying which value is the genuine limit.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the fixed-point method",
          "workingLatex": "u_n \\to L \\implies L = \\dfrac{2L + 3}{L + 4}",
          "explanation": "If the sequence converges to $L$, then both $u_n$ and $u_{n+1}$ approach $L$. Because the rule is a continuous function, replacing them by $L$ turns the recurrence into an equation for the limit.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute u_2 to see the trend",
          "workingLatex": "u_2 = \\dfrac{2(2) + 3}{2 + 4} = \\dfrac{7}{6} \\approx 1.167",
          "explanation": "Generating a few terms shows where the sequence is heading. From $u_1 = 2$ it drops to about $1.17$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute u_3",
          "workingLatex": "u_3 = \\dfrac{2\\left(\\tfrac{7}{6}\\right) + 3}{\\tfrac{7}{6} + 4} = \\dfrac{\\tfrac{16}{3}}{\\tfrac{31}{6}} = \\dfrac{32}{31} \\approx 1.032",
          "explanation": "The next term is about $1.03$; the values are closing in, suggesting a limit near $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute u_4",
          "workingLatex": "u_4 = \\dfrac{2\\left(\\tfrac{32}{31}\\right) + 3}{\\tfrac{32}{31} + 4} = \\dfrac{\\tfrac{157}{31}}{\\tfrac{156}{31}} = \\dfrac{157}{156} \\approx 1.006",
          "explanation": "The terms edge ever closer to $1$, giving strong numerical evidence for the limit we will now confirm algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the fixed-point equation",
          "workingLatex": "L = \\dfrac{2L + 3}{L + 4}",
          "explanation": "This is the equation the limit must satisfy; solving it gives the candidate values.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Clear the fraction",
          "workingLatex": "L(L + 4) = 2L + 3",
          "explanation": "Multiplying both sides by $L + 4$ removes the denominator and produces a polynomial equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the left side",
          "workingLatex": "L^2 + 4L = 2L + 3",
          "explanation": "Expanding the bracket prepares the equation for collecting all terms on one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to a quadratic",
          "workingLatex": "L^2 + 2L - 3 = 0",
          "explanation": "Bringing everything to one side gives a standard quadratic in $L$ — a Mobius-type recurrence always leads to a quadratic for its limit.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Factorise",
          "workingLatex": "(L + 3)(L - 1) = 0",
          "explanation": "The quadratic factorises neatly, revealing the two possible limits.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the two roots",
          "workingLatex": "L = -3 \\quad \\text{or} \\quad L = 1",
          "explanation": "Both are valid solutions of the fixed-point equation, so we must decide which one the sequence actually approaches.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Establish that the terms stay positive",
          "workingLatex": "u_1 = 2 > 0; \\quad u_n > 0 \\implies 2u_n + 3 > 0, \\ u_n + 4 > 0",
          "explanation": "The first term is positive, and if a term is positive then both the numerator and denominator of the rule are positive, so the next term is positive too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude positivity by induction",
          "workingLatex": "u_n > 0 \\text{ for all } n \\implies L \\geq 0",
          "explanation": "By induction every term is positive, so the limit cannot be negative.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the negative root",
          "workingLatex": "L = -3 \\text{ rejected}, \\quad L = 1 \\text{ accepted}",
          "explanation": "Since $L \\geq 0$, the value $-3$ is impossible; the genuine limit is $L = 1$, which also matches the terms we computed.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "L = 1",
          "explanation": "The sequence converges to $L = 1$, the only root consistent with its positive terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$L = 1$"
    }
  }
];
