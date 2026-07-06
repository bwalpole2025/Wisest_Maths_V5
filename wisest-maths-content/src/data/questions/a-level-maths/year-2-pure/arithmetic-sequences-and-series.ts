import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.arithmetic-series.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "common difference"
    ],
    "questionText": "An arithmetic sequence has first term $a = 4$ and common difference $d = 3$. Find the $12$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "In an arithmetic sequence every term is reached from the first term $a$ by adding the common difference $d$ a fixed number of times. To land on the $n$th term you take $n-1$ steps of size $d$, which is exactly what $a + (n-1)d$ counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 4, \\quad d = 3, \\quad n = 12",
          "explanation": "We are given the first term and the common difference, and we want the $12$th term, so $n = 12$. Writing the values down first makes the substitution clean and error-free.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_{12} = 4 + (12 - 1)\\times 3",
          "explanation": "Replacing $a$, $n$ and $d$ with their values turns the general rule into a single arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "u_{12} = 4 + 11 \\times 3",
          "explanation": "There are $11$ gaps between the $1$st and the $12$th term, so the common difference is added $11$ times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "u_{12} = 4 + 33 = 37",
          "explanation": "Carrying out the multiplication first and then the addition gives the value of the twelfth term.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "u_{12} = 37",
          "explanation": "So the $12$th term of the sequence is $37$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{12} = 37$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "common difference"
    ],
    "questionText": "The first four terms of an arithmetic sequence are $9, 14, 19, 24, \\ldots$ State the common difference and find the $18$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference",
          "workingLatex": "d = 14 - 9 = 5",
          "explanation": "The common difference is the constant gap between neighbouring terms, so subtracting one term from the term just after it reveals $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the difference is constant",
          "workingLatex": "19 - 14 = 5, \\quad 24 - 19 = 5",
          "explanation": "A sequence is only arithmetic if the *same* gap appears every time; checking a second and third gap confirms the pattern really is constant at $d = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Every term is built from the first term $a$ by adding the common difference $d$ repeatedly; reaching the $n$th term takes $n-1$ of those steps.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the known values",
          "workingLatex": "a = 9, \\quad d = 5, \\quad n = 18",
          "explanation": "The first listed term is $a = 9$, we found $d = 5$, and we want the $18$th term so $n = 18$. Writing them down first keeps the substitution clean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the formula",
          "workingLatex": "u_{18} = 9 + (18 - 1)\\times 5",
          "explanation": "Replacing the letters with their values turns the general rule into a single arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the bracket",
          "workingLatex": "u_{18} = 9 + 17 \\times 5",
          "explanation": "There are $17$ gaps between the $1$st and $18$th terms, so the common difference is added $17$ times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "u_{18} = 9 + 85 = 94",
          "explanation": "Doing the multiplication before the addition follows the order of operations and gives the value of the term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "d = 5, \\quad u_{18} = 94",
          "explanation": "So the common difference is $5$ and the $18$th term of the sequence is $94$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5$ and $u_{18} = 94$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "linear form"
    ],
    "questionText": "An arithmetic sequence has first term $a = 3$ and common difference $d = 5$. Find an expression for the $n$th term $u_n$, giving your answer in the form $pn + q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The $n$th term is reached from the first term $a$ by adding the common difference $d$ a total of $n-1$ times, which is exactly what this formula encodes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad d = 5",
          "explanation": "We are told the first term and the common difference, so these go straight into the formula; here $n$ stays as a letter because we want a general expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_n = 3 + (n-1)\\times 5",
          "explanation": "Putting $a$ and $d$ in place leaves an expression in $n$ alone, which we now tidy into the requested form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "u_n = 3 + 5n - 5",
          "explanation": "Multiplying $5$ across $(n-1)$ gives $5n - 5$; expanding first lets us gather like terms in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the constant terms",
          "workingLatex": "u_n = 5n - 2",
          "explanation": "Combining $3 - 5 = -2$ leaves the tidy linear form; the $5n$ term has nothing to combine with, so it stays as it is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check against the first term",
          "workingLatex": "u_1 = 5(1) - 2 = 3 = a",
          "explanation": "Substituting $n = 1$ should return the first term; it gives $3$, which matches $a$, so the expression is trustworthy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_n = 5n - 2",
          "explanation": "So the $n$th term in the required form $pn + q$ is $5n - 2$, with $p = 5$ and $q = -2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_n = 5n - 2$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "common difference",
      "nth term"
    ],
    "questionText": "An arithmetic sequence has first term $8$. Its $5$th term is $28$. Find the common difference, and hence find the $12$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Any term can be written in terms of the first term $a$ and the common difference $d$; here $d$ is unknown, so we build an equation from the term we do know.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 5th term",
          "workingLatex": "u_5 = a + (5-1)d = 28",
          "explanation": "The $5$th term is $4$ steps of $d$ beyond the first term, and we are told this equals $28$, giving us an equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the first term",
          "workingLatex": "8 + 4d = 28",
          "explanation": "Replacing $a$ with $8$ leaves a simple linear equation in the single unknown $d$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the common difference",
          "workingLatex": "4d = 20 \\implies d = 5",
          "explanation": "Subtracting $8$ from both sides isolates $4d$, then dividing by $4$ gives $d = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the 12th term",
          "workingLatex": "u_{12} = 8 + (12-1)\\times 5",
          "explanation": "Now that both $a$ and $d$ are known, we substitute $n = 12$ to reach the term the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the bracket",
          "workingLatex": "u_{12} = 8 + 11 \\times 5",
          "explanation": "There are $11$ gaps between the $1$st and $12$th terms, so $d$ is added $11$ times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "u_{12} = 8 + 55 = 63",
          "explanation": "Multiplying first and then adding gives the value of the twelfth term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "d = 5, \\quad u_{12} = 63",
          "explanation": "So the common difference is $5$ and the $12$th term is $63$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5$ and $u_{12} = 63$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "decreasing sequence"
    ],
    "questionText": "An arithmetic sequence has first term $50$ and common difference $-4$. Find the $15$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The same formula works whether the sequence grows or shrinks; a negative $d$ simply means each step subtracts rather than adds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 50, \\quad d = -4, \\quad n = 15",
          "explanation": "Because $d = -4$ is negative the terms decrease; keeping the minus sign attached now avoids sign slips later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_{15} = 50 + (15 - 1)\\times(-4)",
          "explanation": "Putting the values in place turns the rule into one calculation; the bracket $(-4)$ is kept whole to protect the sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "u_{15} = 50 + 14 \\times (-4)",
          "explanation": "There are $14$ gaps between the $1$st and $15$th terms, so the difference of $-4$ is applied $14$ times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply",
          "workingLatex": "u_{15} = 50 + (-56)",
          "explanation": "Adding $14$ lots of $-4$ removes $56$ overall, because a negative common difference pulls the terms downward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "u_{15} = 50 - 56 = -6",
          "explanation": "Since $56$ is larger than $50$ the result drops below zero, giving a negative term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_{15} = -6",
          "explanation": "So the $15$th term of this decreasing sequence is $-6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{15} = -6$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": [
      "arithmetic sequences",
      "nth term rule",
      "common difference"
    ],
    "questionText": "The $n$th term of an arithmetic sequence is given by $u_n = 7n - 3$. Write down the first three terms and state the common difference.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule",
          "workingLatex": "u_n = 7n - 3",
          "explanation": "This formula gives any term directly: substitute the position number $n$ and it returns the term sitting in that position.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = 7(1) - 3 = 4",
          "explanation": "The first term is found by putting $n = 1$ into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the second term",
          "workingLatex": "u_2 = 7(2) - 3 = 11",
          "explanation": "Substituting $n = 2$ gives the next term in the list.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the third term",
          "workingLatex": "u_3 = 7(3) - 3 = 18",
          "explanation": "Substituting $n = 3$ completes the first three terms of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the common difference",
          "workingLatex": "d = 11 - 4 = 7 \\quad (18 - 11 = 7)",
          "explanation": "Subtracting consecutive terms gives the constant gap; both gaps equal $7$, confirming the sequence is arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link the difference to the rule",
          "workingLatex": "u_n = 7n - 3 \\ \\Rightarrow\\ d = 7",
          "explanation": "In any linear rule of the form $pn + q$ the coefficient of $n$ is the common difference, because increasing $n$ by $1$ adds another $p$ to the term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "4, \\ 11, \\ 18, \\quad d = 7",
          "explanation": "So the first three terms are $4, 11, 18$ and the common difference is $7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The first three terms are $4, 11, 18$ and the common difference is $d = 7$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "first term",
      "nth term"
    ],
    "questionText": "In an arithmetic sequence the $7$th term is $40$ and the common difference is $6$. Find the first term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The formula links a known term back to the unknown first term $a$; here $a$ is what we want, so we rearrange for it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 7th term",
          "workingLatex": "u_7 = a + (7-1)d = 40",
          "explanation": "The $7$th term sits $6$ steps of $d$ beyond the first term, and this equals $40$, giving an equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the common difference",
          "workingLatex": "a + 6 \\times 6 = 40",
          "explanation": "Replacing $d$ with $6$ leaves the first term as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify",
          "workingLatex": "a + 36 = 40",
          "explanation": "Working out $6 \\times 6 = 36$ shows how far the $7$th term has travelled beyond the first term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the first term",
          "workingLatex": "a = 40 - 36",
          "explanation": "Subtracting $36$ from both sides isolates $a$, undoing the $36$ that was added on.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "a = 4",
          "explanation": "Carrying out the subtraction gives the value of the first term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "a = 4",
          "explanation": "So the first term of the sequence is $4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 4$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "membership test"
    ],
    "questionText": "An arithmetic sequence begins $4, 11, 18, 25, \\ldots$ Determine whether $88$ is a term of this sequence, and if so state its position.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference",
          "workingLatex": "d = 11 - 4 = 7",
          "explanation": "Subtracting consecutive terms gives the constant gap $d = 7$, which every genuine term must respect.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the nth term equal to the target",
          "workingLatex": "a + (n-1)d = 88",
          "explanation": "A number is a term exactly when some whole-number position $n$ produces it, so we set the general term equal to $88$ and try to solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "4 + (n-1)\\times 7 = 88",
          "explanation": "Putting in $a = 4$ and $d = 7$ leaves a single equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the term in n",
          "workingLatex": "(n-1)\\times 7 = 84",
          "explanation": "Subtracting the first term $4$ from both sides shows how far $88$ lies beyond the start of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for n minus one",
          "workingLatex": "n - 1 = 12",
          "explanation": "Dividing by $d = 7$ counts how many whole steps of $7$ are needed; here it is exactly $12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for n",
          "workingLatex": "n = 13",
          "explanation": "Adding $1$ converts the number of steps into the position number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check n is a positive integer",
          "workingLatex": "n = 13 \\in \\mathbb{Z}^{+}",
          "explanation": "A value is only a term if its position is a positive whole number; $13$ qualifies, so $88$ really does appear in the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "u_{13} = 88",
          "explanation": "So $88$ is a term of the sequence, sitting in the $13$th position.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, $88$ is a term of the sequence: it is the $13$th term, so $u_{13} = 88$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "arithmetic sequences",
      "simultaneous equations",
      "nth term"
    ],
    "questionText": "In an arithmetic sequence the $4$th term is $20$ and the $9$th term is $45$. Find the first term and common difference, and hence find an expression for the $n$th term $u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Each given term can be written using the two unknowns $a$ and $d$; with two terms we will get two equations and can solve for both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 4th term",
          "workingLatex": "a + 3d = 20",
          "explanation": "The $4$th term is $3$ steps of $d$ beyond the first term, and it equals $20$; this is our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write an equation for the 9th term",
          "workingLatex": "a + 8d = 45",
          "explanation": "The $9$th term is $8$ steps of $d$ beyond the first term, and it equals $45$; this is our second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract to eliminate a",
          "workingLatex": "(a + 8d) - (a + 3d) = 45 - 20",
          "explanation": "Both equations contain a single $a$, so subtracting one from the other cancels $a$ and leaves only $d$ to find.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "5d = 25",
          "explanation": "The difference between the $9$th and $4$th terms is $5$ steps of $d$, and that difference in value is $25$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the common difference",
          "workingLatex": "d = 5",
          "explanation": "Dividing by $5$ gives the common difference directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find a",
          "workingLatex": "a + 3(5) = 20",
          "explanation": "Putting $d = 5$ into the first equation turns it into a simple equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the first term",
          "workingLatex": "a + 15 = 20 \\implies a = 5",
          "explanation": "Subtracting $15$ from both sides isolates $a$, giving the first term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Build the nth term",
          "workingLatex": "u_n = 5 + (n-1)\\times 5",
          "explanation": "With both $a$ and $d$ known, substituting them into the formula gives a general expression for any term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Expand and simplify",
          "workingLatex": "u_n = 5 + 5n - 5 = 5n",
          "explanation": "Expanding gives $5n - 5$, and the constants $5 - 5$ cancel, leaving the neat form $u_n = 5n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "a = 5, \\quad d = 5, \\quad u_n = 5n",
          "explanation": "So the first term is $5$, the common difference is $5$, and the $n$th term is $u_n = 5n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5$, $d = 5$ and $u_n = 5n$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "inequality",
      "nth term"
    ],
    "questionText": "The arithmetic sequence $5, 8, 11, 14, \\ldots$ increases without bound. Find the first term that is greater than $100$, stating both its position and its value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the common difference",
          "workingLatex": "d = 8 - 5 = 3",
          "explanation": "Subtracting consecutive terms gives the constant gap $d = 3$; because it is positive the terms keep rising, so eventually they pass $100$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the first term",
          "workingLatex": "a = 5, \\quad d = 3",
          "explanation": "Recording $a$ and $d$ sets up the nth term rule we will turn into an inequality.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Derive the simplified nth term",
          "workingLatex": "u_n = 5 + (n-1)\\times 3 = 3n + 2",
          "explanation": "Expanding $5 + 3n - 3$ gives $3n + 2$; a tidy expression makes the inequality much easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the inequality",
          "workingLatex": "3n + 2 > 100",
          "explanation": "\"Greater than $100$\" means the term's value must exceed $100$, so we require the nth term to be strictly larger than $100$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 2 from both sides",
          "workingLatex": "3n > 98",
          "explanation": "Removing the constant $2$ begins to isolate $n$ while keeping the inequality balanced.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 3",
          "workingLatex": "n > \\dfrac{98}{3} \\approx 32.67",
          "explanation": "Dividing by the positive number $3$ keeps the inequality direction the same and gives the boundary value for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round up to the next integer",
          "workingLatex": "n = 33",
          "explanation": "Positions must be whole numbers, and we need $n$ strictly above $32.67$, so the first qualifying position is $n = 33$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the value of that term",
          "workingLatex": "u_{33} = 3(33) + 2 = 101",
          "explanation": "Substituting $n = 33$ back into the rule gives the value of the first term that breaks past $100$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the previous term is not over 100",
          "workingLatex": "u_{32} = 3(32) + 2 = 98 \\ (< 100)",
          "explanation": "Checking the term just before confirms $u_{33}$ really is the first over $100$, since $u_{32} = 98$ is still below the threshold.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "n = 33, \\quad u_{33} = 101",
          "explanation": "So the first term greater than $100$ is the $33$rd term, which equals $101$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The $33$rd term is the first term greater than $100$, with value $u_{33} = 101$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "negative common difference"
    ],
    "questionText": "An arithmetic sequence has first term $a = 8$ and common difference $d = -3$. Find the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Every term of an arithmetic sequence is reached from the first term $a$ by adding the common difference $d$ a fixed number of times. To land on the $n$th term you take $n-1$ steps of size $d$, which is what $a + (n-1)d$ counts.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 8, \\quad d = -3, \\quad n = 10",
          "explanation": "Here the common difference is negative, so the sequence is going down. Writing the values out first keeps the signs under control when we substitute.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "u_{10} = 8 + (10 - 1)\\times(-3)",
          "explanation": "Replacing $a$, $n$ and $d$ turns the general rule into a single calculation for the tenth term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "u_{10} = 8 + 9\\times(-3)",
          "explanation": "There are $9$ gaps between the $1$st and the $10$th term, so the common difference is applied $9$ times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out",
          "workingLatex": "u_{10} = 8 - 27",
          "explanation": "A positive number times a negative number is negative, so $9\\times(-3) = -27$; adding $-27$ is the same as subtracting $27$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "u_{10} = -19",
          "explanation": "Subtracting $27$ from $8$ takes us past zero into the negatives, giving $-19$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_{10} = -19",
          "explanation": "So the $10$th term of the sequence is $-19$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_{10} = -19$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "common difference",
      "nth term"
    ],
    "questionText": "An arithmetic sequence has first term $a = 4$, and its $8$th term is $39$. Find the common difference $d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The $8$th term is just a particular value produced by the nth term rule, so we can build an equation by setting the rule equal to the given value.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 4, \\quad n = 8, \\quad u_8 = 39",
          "explanation": "We know the first term and the value of the eighth term; the only unknown is the common difference $d$, which is what we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "39 = 4 + (8 - 1)d",
          "explanation": "Putting the known values into the rule gives a single equation in $d$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "39 = 4 + 7d",
          "explanation": "There are $7$ steps from the $1$st term to the $8$th term, so the common difference has been added $7$ times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract 4 from both sides",
          "workingLatex": "35 = 7d",
          "explanation": "Removing the first term $4$ leaves exactly the total amount contributed by the seven steps of size $d$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 7",
          "workingLatex": "d = \\dfrac{35}{7} = 5",
          "explanation": "Sharing the total rise of $35$ equally over the $7$ steps gives the size of one step.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "d = 5",
          "explanation": "So the common difference of the sequence is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term",
      "which term"
    ],
    "questionText": "An arithmetic sequence has first term $a = 5$ and common difference $d = 6$. Which term of the sequence is equal to $89$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The question asks for the position $n$ of a term, so we set the nth term rule equal to the known value and solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set the nth term equal to 89",
          "workingLatex": "5 + (n-1)\\times 6 = 89",
          "explanation": "Substituting $a = 5$ and $d = 6$ and requiring the term to equal $89$ turns the problem into an equation for the unknown position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 5 from both sides",
          "workingLatex": "(n-1)\\times 6 = 84",
          "explanation": "Removing the first term $5$ isolates the part that comes from the repeated steps of size $6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by 6",
          "workingLatex": "n - 1 = 14",
          "explanation": "Dividing the total climb of $84$ by the step size $6$ tells us how many steps were taken.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for n",
          "workingLatex": "n = 15",
          "explanation": "The number of steps is $n-1$, so adding $1$ gives the position of the term itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the result",
          "workingLatex": "u_{15} = 5 + 14\\times 6 = 5 + 84 = 89",
          "explanation": "Substituting $n = 15$ back into the rule returns $89$, confirming the position is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "n = 15",
          "explanation": "So $89$ is the $15$th term of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 15$ (the $15$th term)"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "number of terms",
      "last term"
    ],
    "questionText": "A finite arithmetic sequence has first term $6$, last term $96$, and common difference $d = 5$. How many terms are in the sequence?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See the last term as an nth term",
          "workingLatex": "l = a + (n-1)d",
          "explanation": "The last term is simply the $n$th term of the sequence, where $n$ is the total number of terms. So the nth term formula, with the last term as $l$, lets us solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 6, \\quad l = 96, \\quad d = 5",
          "explanation": "We know where the sequence starts, where it ends, and the size of each step; the only unknown is how many terms it takes to get there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "96 = 6 + (n-1)\\times 5",
          "explanation": "Putting the values in gives a single equation for the number of terms $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract 6 from both sides",
          "workingLatex": "90 = (n-1)\\times 5",
          "explanation": "Taking away the starting value leaves the total distance climbed by the repeated steps.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by 5",
          "workingLatex": "18 = n - 1",
          "explanation": "Dividing the total climb of $90$ by the step size $5$ gives the number of steps between the first and last terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for n",
          "workingLatex": "n = 19",
          "explanation": "There is always one more term than there are gaps, so adding $1$ to the $18$ steps gives the total count of terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "n = 19",
          "explanation": "So the sequence contains $19$ terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 19$ terms"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": [
      "arithmetic sequences",
      "nth term rule",
      "increasing or decreasing"
    ],
    "questionText": "The $n$th term of a sequence is given by $u_n = 20 - 3n$. Find the $7$th term, and state whether the sequence is increasing or decreasing, explaining why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the rule",
          "workingLatex": "u_n = 20 - 3n",
          "explanation": "This rule gives any term directly: substitute the position $n$ and it returns the value of that term, so no earlier terms are needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute n = 7",
          "workingLatex": "u_7 = 20 - 3\\times 7",
          "explanation": "To find the $7$th term we simply replace $n$ with $7$ in the rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply out",
          "workingLatex": "u_7 = 20 - 21",
          "explanation": "Working out $3\\times 7 = 21$ before subtracting keeps the order of operations correct.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the term",
          "workingLatex": "u_7 = -1",
          "explanation": "Since $21$ is larger than $20$, the result drops just below zero, giving $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the coefficient of n",
          "workingLatex": "u_n = -3n + 20 \\ \\Rightarrow\\ d = -3",
          "explanation": "In a linear rule $u_n = pn + q$, the coefficient of $n$ is the common difference. Here it is $-3$, meaning each term is $3$ less than the one before.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide increasing or decreasing",
          "workingLatex": "d = -3 < 0",
          "explanation": "A negative common difference means the terms fall as $n$ grows, so the sequence is decreasing. If the coefficient of $n$ had been positive the sequence would increase instead.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "u_7 = -1, \\quad d = -3",
          "explanation": "So the $7$th term is $-1$, and the sequence is decreasing because the coefficient of $n$ is $-3$, which is negative.",
          "diagram": null
        }
      ],
      "finalAnswer": "$u_7 = -1$; the sequence is decreasing because the coefficient of $n$ is $-3$ (negative), so each term is $3$ less than the previous one."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "nth term rule",
      "which term"
    ],
    "questionText": "The $n$th term of an arithmetic sequence is $u_n = 6n - 4$. Which term of the sequence is equal to $92$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the equation",
          "workingLatex": "6n - 4 = 92",
          "explanation": "We want the position $n$ at which the term equals $92$, so we set the nth term rule equal to $92$ and solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 4 to both sides",
          "workingLatex": "6n = 96",
          "explanation": "Undoing the $-4$ isolates the term $6n$, moving us a step closer to $n$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by 6",
          "workingLatex": "n = \\dfrac{96}{6} = 16",
          "explanation": "Dividing by the coefficient of $n$ leaves $n$ by itself and gives the position of the term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the result",
          "workingLatex": "u_{16} = 6\\times 16 - 4 = 96 - 4 = 92",
          "explanation": "Substituting $n = 16$ back into the rule returns $92$, confirming the position is correct.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm it is a whole number",
          "workingLatex": "n = 16 \\in \\mathbb{Z}^{+}",
          "explanation": "A valid term position must be a positive whole number. Since $16$ is a positive integer, $92$ genuinely appears in the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "n = 16",
          "explanation": "So $92$ is the $16$th term of the sequence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 16$ (the $16$th term)"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "simultaneous equations",
      "nth term"
    ],
    "questionText": "In an arithmetic sequence the $3$rd term is $13$ and the $8$th term is $38$. Find the first term $a$ and the common difference $d$, and hence find the $20$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Each given term is an instance of this rule, so we can write one equation for each known term and then solve them together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the 3rd term",
          "workingLatex": "a + 2d = 13",
          "explanation": "The $3$rd term takes $2$ steps of size $d$ from the first term, so $u_3 = a + 2d$, and this equals $13$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation for the 8th term",
          "workingLatex": "a + 7d = 38",
          "explanation": "The $8$th term takes $7$ steps from the first term, so $u_8 = a + 7d$, and this equals $38$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the equations",
          "workingLatex": "(a + 7d) - (a + 2d) = 38 - 13",
          "explanation": "Both equations contain the same $a$, so subtracting one from the other eliminates $a$ and leaves an equation in $d$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "5d = 25",
          "explanation": "The five extra steps between the $3$rd and $8$th terms account for the rise of $25$, giving a neat equation for $d$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for d",
          "workingLatex": "d = 5",
          "explanation": "Dividing the total rise of $25$ by the $5$ steps gives the size of a single step.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute back to find a",
          "workingLatex": "a + 2\\times 5 = 13",
          "explanation": "Putting $d = 5$ into the first equation gives a simple equation for the first term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for a",
          "workingLatex": "a = 13 - 10 = 3",
          "explanation": "Subtracting the contribution of the two steps leaves the first term on its own.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the 20th term",
          "workingLatex": "u_{20} = a + 19d = 3 + 19\\times 5",
          "explanation": "Now that $a$ and $d$ are known, the $20$th term is found by taking $19$ steps from the first term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate",
          "workingLatex": "u_{20} = 3 + 95 = 98",
          "explanation": "Computing $19\\times 5 = 95$ and adding the first term gives the value of the twentieth term.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "a = 3, \\quad d = 5, \\quad u_{20} = 98",
          "explanation": "So the first term is $3$, the common difference is $5$, and the $20$th term is $98$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$, $d = 5$, and $u_{20} = 98$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "consecutive terms",
      "common difference"
    ],
    "questionText": "The expressions $3x - 2$, $2x + 5$ and $5x + 4$ are three consecutive terms of an arithmetic sequence. Find the value of $x$ and the common difference.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Use the constant-difference property",
          "workingLatex": "\\text{middle} - \\text{first} = \\text{third} - \\text{middle}",
          "explanation": "In an arithmetic sequence the gap between consecutive terms is the same. So the step from the first to the middle term equals the step from the middle to the third term.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange into the average form",
          "workingLatex": "2(\\text{middle}) = \\text{first} + \\text{third}",
          "explanation": "Adding the middle term to both sides of the equal-gaps statement shows that the middle term is exactly the average of its two neighbours, which is a tidy equation to work with.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the expressions",
          "workingLatex": "2(2x + 5) = (3x - 2) + (5x + 4)",
          "explanation": "Replacing each term with its expression in $x$ turns the property into an equation we can solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the left-hand side",
          "workingLatex": "4x + 10 = (3x - 2) + (5x + 4)",
          "explanation": "Multiplying the bracket by $2$ prepares the left side for comparison with the right.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Collect the right-hand side",
          "workingLatex": "4x + 10 = 8x + 2",
          "explanation": "Adding the two neighbouring terms combines like terms: $3x + 5x = 8x$ and $-2 + 4 = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Gather the x terms",
          "workingLatex": "10 - 2 = 8x - 4x",
          "explanation": "Moving all the $x$ terms to one side and the numbers to the other prepares the equation for a single division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "8 = 4x",
          "explanation": "Combining each side leaves a simple equation linking a number to a multiple of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x = 2",
          "explanation": "Dividing both sides by $4$ isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Work out the three terms",
          "workingLatex": "3(2)-2 = 4, \\quad 2(2)+5 = 9, \\quad 5(2)+4 = 14",
          "explanation": "Substituting $x = 2$ into each expression turns them into actual numbers so we can read off the sequence: $4, 9, 14$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the common difference",
          "workingLatex": "d = 9 - 4 = 5 \\quad (\\text{check } 14 - 9 = 5)",
          "explanation": "The common difference is the gap between consecutive terms; both gaps are $5$, which confirms the terms really do form an arithmetic sequence.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "x = 2, \\quad d = 5",
          "explanation": "So $x = 2$ and the common difference of the sequence is $5$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 2$ and $d = 5$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "common difference",
      "inequality"
    ],
    "questionText": "An arithmetic sequence has first term $4$, and its $5$th term is $24$. Find the common difference, then determine how many terms of the sequence are less than $100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "We first need the common difference; the $5$th term is an instance of this rule, so it gives an equation for $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the 5th term",
          "workingLatex": "4 + (5-1)d = 24",
          "explanation": "Substituting $a = 4$, $n = 5$ and $u_5 = 24$ turns the rule into an equation for the unknown step size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify and solve for d",
          "workingLatex": "4 + 4d = 24 \\ \\Rightarrow\\ 4d = 20 \\ \\Rightarrow\\ d = 5",
          "explanation": "Removing the first term and dividing by the $4$ steps between the $1$st and $5$th terms gives the common difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write a formula for the nth term",
          "workingLatex": "u_n = 4 + (n-1)\\times 5",
          "explanation": "With $d = 5$ known, we can express any term directly in terms of its position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the nth term",
          "workingLatex": "u_n = 5n - 1",
          "explanation": "Expanding gives $4 + 5n - 5 = 5n - 1$, a clean linear rule that is easy to compare with $100$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the inequality",
          "workingLatex": "5n - 1 < 100",
          "explanation": "\"Less than $100$\" means the term value must be below $100$, so we require the nth term to satisfy this inequality.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add 1 to both sides",
          "workingLatex": "5n < 101",
          "explanation": "Undoing the $-1$ keeps the inequality balanced and isolates the multiple of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by 5",
          "workingLatex": "n < 20.2",
          "explanation": "Dividing by the positive number $5$ does not flip the inequality, giving an upper bound on the position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the whole-number condition",
          "workingLatex": "n \\leq 20",
          "explanation": "Positions must be positive whole numbers, so the largest allowed value is the greatest integer below $20.2$, which is $20$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the boundary terms",
          "workingLatex": "u_{20} = 99 < 100, \\quad u_{21} = 104 > 100",
          "explanation": "The $20$th term is still under $100$ but the $21$st is over, confirming the cut-off is exactly at $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "\\text{Number of terms below }100 = 20",
          "explanation": "So the first $20$ terms of the sequence are less than $100$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5$, and $20$ terms are less than $100$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "simultaneous equations",
      "inequality"
    ],
    "questionText": "In an arithmetic sequence the $2$nd term is $11$ and the $5$th term is $26$. Find the first term and common difference, then find the first term of the sequence that is greater than $500$, giving both its position and its value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Each given term is an instance of this rule, so the two known terms produce two equations we can solve together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation for the 2nd term",
          "workingLatex": "a + d = 11",
          "explanation": "The $2$nd term is one step from the first, so $u_2 = a + d$, and this equals $11$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the equation for the 5th term",
          "workingLatex": "a + 4d = 26",
          "explanation": "The $5$th term is four steps from the first, so $u_5 = a + 4d$, and this equals $26$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the equations",
          "workingLatex": "(a + 4d) - (a + d) = 26 - 11",
          "explanation": "Both equations share the same first term, so subtracting eliminates $a$ and leaves an equation in $d$ only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for d",
          "workingLatex": "3d = 15 \\ \\Rightarrow\\ d = 5",
          "explanation": "The three extra steps between the $2$nd and $5$th terms account for the rise of $15$, so each step is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for a",
          "workingLatex": "a + 5 = 11 \\ \\Rightarrow\\ a = 6",
          "explanation": "Substituting $d = 5$ into the first equation and subtracting gives the first term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write a formula for the nth term",
          "workingLatex": "u_n = 6 + (n-1)\\times 5 = 5n + 1",
          "explanation": "Expanding $6 + 5n - 5$ gives the tidy rule $5n + 1$, which is easy to compare with $500$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the inequality",
          "workingLatex": "5n + 1 > 500",
          "explanation": "We want the first term whose value exceeds $500$, so we require the nth term to be greater than $500$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract 1 from both sides",
          "workingLatex": "5n > 499",
          "explanation": "Undoing the $+1$ isolates the multiple of $n$ while keeping the inequality balanced.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide by 5",
          "workingLatex": "n > 99.8",
          "explanation": "Dividing by the positive number $5$ keeps the inequality direction, giving a lower bound on the position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Choose the smallest valid position",
          "workingLatex": "n = 100",
          "explanation": "Positions are positive whole numbers, so the first one greater than $99.8$ is $100$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the value and check",
          "workingLatex": "u_{100} = 5\\times 100 + 1 = 501, \\quad u_{99} = 496",
          "explanation": "The $100$th term is $501$, which is above $500$, while the $99$th term is $496$, which is not, confirming $100$ is the first position to exceed $500$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The first term greater than $500$ is the $100$th term, with value $u_{100} = 501$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "sum formula"
    ],
    "questionText": "An arithmetic series has first term $a = 3$ and common difference $d = 2$. Find the sum of the first $10$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "Adding many terms one at a time is slow, so we use the standard result for the sum of an arithmetic series. It works by pairing terms from the ends inwards: each pair has the same total, and this formula packages that idea for any number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 3, \\quad d = 2, \\quad n = 10",
          "explanation": "We are told the first term and the common difference, and we want the total of the first ten terms, so $n = 10$. Writing the values out first keeps the substitution tidy.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "S_{10} = \\dfrac{10}{2}\\left[2\\times 3 + (10-1)\\times 2\\right]",
          "explanation": "Replacing $a$, $d$ and $n$ with their values turns the general rule into a single arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{10} = 5\\left[6 + 9\\times 2\\right]",
          "explanation": "The fraction $\\dfrac{10}{2}$ becomes $5$, and $10 - 1 = 9$ counts the nine steps of size $d$ taken across the ten terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the bracket",
          "workingLatex": "S_{10} = 5\\left[6 + 18\\right] = 5 \\times 24",
          "explanation": "Working out the multiplication and addition inside the bracket first gives a single number to multiply by $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "S_{10} = 120",
          "explanation": "Multiplying $5$ by $24$ gives the total of all ten terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_{10} = 120",
          "explanation": "So the sum of the first $10$ terms of the series is $120$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{10} = 120$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "common difference"
    ],
    "questionText": "Find the sum of the first $20$ terms of the arithmetic series $5 + 9 + 13 + \\dots$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common difference",
          "workingLatex": "a = 5, \\quad d = 9 - 5 = 4",
          "explanation": "The series starts at $5$, so that is $a$. The common difference is the constant jump between consecutive terms, found by subtracting any term from the next one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "We know the first term and common difference but not the last term, so the version of the sum formula built from $a$ and $d$ is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known values",
          "workingLatex": "a = 5, \\quad d = 4, \\quad n = 20",
          "explanation": "We want the total of the first twenty terms, so $n = 20$. Collecting the values first makes the substitution clean.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "S_{20} = \\dfrac{20}{2}\\left[2\\times 5 + (20-1)\\times 4\\right]",
          "explanation": "Putting each known value in its place converts the general formula into a numerical calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{20} = 10\\left[10 + 19\\times 4\\right]",
          "explanation": "Here $\\dfrac{20}{2} = 10$, and $20 - 1 = 19$ is the number of common-difference steps spread across the twenty terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the bracket",
          "workingLatex": "S_{20} = 10\\left[10 + 76\\right] = 10 \\times 86",
          "explanation": "Completing the multiplication and addition inside the bracket leaves a single product to compute.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply out",
          "workingLatex": "S_{20} = 860",
          "explanation": "Multiplying $10$ by $86$ gives the sum of the first twenty terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the answer",
          "workingLatex": "S_{20} = 860",
          "explanation": "So the first $20$ terms of the series add up to $860$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{20} = 860$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum formula",
      "first and last term"
    ],
    "questionText": "An arithmetic series has first term $a = 8$ and last term $l = 80$, and contains $19$ terms. Find the sum of the series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the right sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "When the first term, the last term and the number of terms are all known, this form is quickest. It comes from pairing the first and last terms: every such pair sums to $a + l$, and there are effectively $\\dfrac{n}{2}$ pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 8, \\quad l = 80, \\quad n = 19",
          "explanation": "The question gives all three quantities the formula needs, so we can substitute directly without finding the common difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "S_{19} = \\dfrac{19}{2}(8 + 80)",
          "explanation": "Placing the values into the formula turns it into a straightforward calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the terms in the bracket",
          "workingLatex": "S_{19} = \\dfrac{19}{2}(88)",
          "explanation": "The bracket represents the total of a first-and-last pair, which is $88$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the calculation",
          "workingLatex": "S_{19} = 19 \\times 44",
          "explanation": "Halving $88$ before multiplying keeps the numbers small and avoids a large division at the end.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "S_{19} = 836",
          "explanation": "Multiplying $19$ by $44$ gives the sum of all nineteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_{19} = 836",
          "explanation": "So the sum of the series is $836$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{19} = 836$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "natural numbers",
      "sum"
    ],
    "questionText": "Find the sum of the first $100$ natural numbers, $1 + 2 + 3 + \\dots + 100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the series as arithmetic",
          "workingLatex": "a = 1, \\quad d = 1",
          "explanation": "The natural numbers increase by a constant $1$ each time, so they form an arithmetic series with first term $1$ and common difference $1$. This means we can use a sum formula rather than adding one hundred numbers by hand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the number of terms and last term",
          "workingLatex": "n = 100, \\quad l = 100",
          "explanation": "We are adding the numbers from $1$ up to $100$, so there are $100$ terms and the last term is $100$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the pairing sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Since we know the first and last terms, this form is ideal. It reflects the classic trick of pairing $1$ with $100$, $2$ with $99$, and so on, each pair totalling $101$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "S_{100} = \\dfrac{100}{2}(1 + 100)",
          "explanation": "Placing $n$, $a$ and $l$ into the formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "S_{100} = 50 \\times 101",
          "explanation": "There are $\\dfrac{100}{2} = 50$ pairs, and each pair adds to $101$, so the total is $50$ lots of $101$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out",
          "workingLatex": "S_{100} = 5050",
          "explanation": "Multiplying $50$ by $101$ gives the total of all one hundred numbers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "S_{100} = 5050",
          "explanation": "So $1 + 2 + 3 + \\dots + 100 = 5050$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{100} = 5050$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "number of terms",
      "sum"
    ],
    "questionText": "Find the sum of the arithmetic series $2 + 5 + 8 + \\dots + 59$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common difference",
          "workingLatex": "a = 2, \\quad d = 5 - 2 = 3",
          "explanation": "The series begins at $2$, and each term is $3$ more than the previous one, so the common difference is $3$. We need these before we can find how many terms there are.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The last term $59$ is one of the terms of the sequence, so we can use the nth term formula to work out which position it occupies, giving us $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the nth term equal to the last term",
          "workingLatex": "59 = 2 + (n-1)\\times 3",
          "explanation": "Setting the general term equal to $59$ lets us solve for the number of terms that reaches the end of the series.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the first term",
          "workingLatex": "57 = (n-1)\\times 3",
          "explanation": "Taking $2$ from both sides isolates the part that counts the common-difference steps.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide by the common difference",
          "workingLatex": "n - 1 = 19",
          "explanation": "Dividing by $3$ tells us there are $19$ steps of size $3$ between the first and last terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the number of terms",
          "workingLatex": "n = 20",
          "explanation": "There is always one more term than there are gaps, so $19$ gaps means $20$ terms in the series.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Now that we know the first term, last term and number of terms, this form gives the sum in a single step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "S_{20} = \\dfrac{20}{2}(2 + 59)",
          "explanation": "With $n = 20$, $a = 2$ and $l = 59$, the formula becomes a numerical calculation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify",
          "workingLatex": "S_{20} = 10 \\times 61",
          "explanation": "There are $10$ pairs, and each first-and-last pair sums to $61$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply out",
          "workingLatex": "S_{20} = 610",
          "explanation": "Multiplying $10$ by $61$ gives the total of all twenty terms.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "S_{20} = 610",
          "explanation": "So $2 + 5 + 8 + \\dots + 59 = 610$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{20} = 610$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "simultaneous equations",
      "sum"
    ],
    "questionText": "In an arithmetic sequence the $3$rd term is $10$ and the $7$th term is $26$. Find the first term and common difference, then find the sum of the first $15$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Each given term can be written using this formula, which turns the two pieces of information into two equations we can solve together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write an equation for the 3rd term",
          "workingLatex": "a + 2d = 10",
          "explanation": "The $3$rd term is reached by taking two steps of $d$ from $a$, and we are told this equals $10$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write an equation for the 7th term",
          "workingLatex": "a + 6d = 26",
          "explanation": "Similarly the $7$th term is $a$ plus six steps of $d$, and this equals $26$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract the equations to eliminate a",
          "workingLatex": "(a + 6d) - (a + 2d) = 26 - 10",
          "explanation": "Both equations contain $a$, so subtracting them cancels $a$ and leaves an equation in $d$ alone. This works because the difference between the $7$th and $3$rd terms is exactly four common-difference steps.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the common difference",
          "workingLatex": "4d = 16 \\;\\Rightarrow\\; d = 4",
          "explanation": "The four steps between the two terms account for the increase of $16$, so each step is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute back to find the first term",
          "workingLatex": "a + 2(4) = 10 \\;\\Rightarrow\\; a = 2",
          "explanation": "Putting $d = 4$ into the equation for the $3$rd term gives the first term directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "With $a$ and $d$ now known, this form lets us find the sum without first working out the last term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "S_{15} = \\dfrac{15}{2}\\left[2\\times 2 + (15-1)\\times 4\\right]",
          "explanation": "Using $a = 2$, $d = 4$ and $n = 15$ sets up the sum of the first fifteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{15} = \\dfrac{15}{2}\\left[4 + 56\\right]",
          "explanation": "Here $14 \\times 4 = 56$ is the total of all fourteen common-difference steps across the fifteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the bracket",
          "workingLatex": "S_{15} = \\dfrac{15}{2}\\times 60 = 15 \\times 30",
          "explanation": "Adding inside the bracket gives $60$, and halving it before multiplying keeps the arithmetic simple.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Multiply out",
          "workingLatex": "S_{15} = 450",
          "explanation": "Multiplying $15$ by $30$ gives the sum of the first fifteen terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "a = 2, \\quad d = 4, \\quad S_{15} = 450",
          "explanation": "So the first term is $2$, the common difference is $4$, and the sum of the first $15$ terms is $450$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2$, $d = 4$, $S_{15} = 450$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "common difference",
      "rearranging"
    ],
    "questionText": "The sum of the first $12$ terms of an arithmetic series is $222$. The first term is $a = 2$. Find the common difference $d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The sum, the number of terms and the first term are known, and the only unknown is $d$, so this formula becomes an equation we can rearrange for $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "n = 12, \\quad a = 2, \\quad S_{12} = 222",
          "explanation": "Collecting the given quantities makes it clear that $d$ is the single unknown to solve for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "222 = \\dfrac{12}{2}\\left[2\\times 2 + (12-1)d\\right]",
          "explanation": "Replacing everything except $d$ turns the formula into a single equation in $d$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the constants",
          "workingLatex": "222 = 6\\left[4 + 11d\\right]",
          "explanation": "Here $\\dfrac{12}{2} = 6$, and $12 - 1 = 11$ counts the eleven common-difference steps across the twelve terms.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide both sides by 6",
          "workingLatex": "37 = 4 + 11d",
          "explanation": "Dividing by $6$ removes the factor outside the bracket, leaving a simpler linear equation in $d$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 4 from both sides",
          "workingLatex": "33 = 11d",
          "explanation": "Removing the constant term isolates the term containing $d$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for d",
          "workingLatex": "d = 3",
          "explanation": "Dividing by $11$ gives the common difference.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the result",
          "workingLatex": "S_{12} = 6\\left[4 + 11\\times 3\\right] = 6\\times 37 = 222 \\;\\checkmark",
          "explanation": "Substituting $d = 3$ back into the sum reproduces $222$, confirming the answer is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 3",
          "explanation": "So the common difference of the series is $3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "quadratic",
      "number of terms"
    ],
    "questionText": "An arithmetic series has first term $a = 5$ and common difference $d = 3$. The sum of the first $n$ terms is $185$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The unknown here is the number of terms $n$, which appears both outside and inside the bracket. That means the equation will turn out to be quadratic in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "a = 5, \\quad d = 3, \\quad S_n = 185",
          "explanation": "We know the first term, the common difference and the target sum, so we can substitute everything except $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the formula",
          "workingLatex": "185 = \\dfrac{n}{2}\\left[2\\times 5 + (n-1)\\times 3\\right]",
          "explanation": "Placing the known values in leaves an equation whose only unknown is $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "185 = \\dfrac{n}{2}\\left[3n + 7\\right]",
          "explanation": "Expanding gives $10 + 3n - 3 = 3n + 7$, so the bracket depends on $n$, which is why the equation is not linear.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "370 = n(3n + 7)",
          "explanation": "Multiplying both sides by $2$ removes the denominator and prepares the equation for expanding into standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a quadratic",
          "workingLatex": "3n^2 + 7n - 370 = 0",
          "explanation": "Expanding the right-hand side and moving everything to one side gives a quadratic equation set equal to zero, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the discriminant",
          "workingLatex": "b^2 - 4ac = 7^2 - 4\\times 3\\times(-370) = 49 + 4440 = 4489",
          "explanation": "The discriminant tells us whether the quadratic has nice roots. Since $4489$ is a perfect square, the solutions will be exact.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "\\sqrt{4489} = 67",
          "explanation": "The square root of the discriminant is a whole number, confirming the roots will be rational.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-7 \\pm 67}{2\\times 3}",
          "explanation": "Using $n = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with the values just found produces the two possible solutions.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Work out both roots",
          "workingLatex": "n = \\dfrac{60}{6} = 10 \\quad \\text{or} \\quad n = \\dfrac{-74}{6}",
          "explanation": "The plus sign gives $10$; the minus sign gives a negative fraction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Reject the invalid root",
          "workingLatex": "n = 10",
          "explanation": "The number of terms must be a positive whole number, so the negative fractional root cannot be a real answer and is discarded, leaving $n = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "n = 10",
          "explanation": "So it takes $10$ terms for the series to sum to $185$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 10$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "multiples",
      "sum"
    ],
    "questionText": "Find the sum of all the multiples of $6$ between $1$ and $200$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the series",
          "workingLatex": "6, \\; 12, \\; 18, \\; \\dots \\qquad a = 6, \\quad d = 6",
          "explanation": "The multiples of $6$ go up in equal steps of $6$, so they form an arithmetic series with first term $6$ and common difference $6$. This lets us use a sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the last multiple of 6 below 200",
          "workingLatex": "200 \\div 6 = 33.3\\ldots \\;\\Rightarrow\\; 33\\times 6 = 198",
          "explanation": "Dividing $200$ by $6$ shows that $33$ whole multiples fit, so the largest multiple of $6$ under $200$ is $198$, which is the last term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the number of terms",
          "workingLatex": "n = \\dfrac{198}{6} = 33",
          "explanation": "The multiples are $6\\times 1, 6\\times 2, \\dots, 6\\times 33$, so there are exactly $33$ of them.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Knowing the first term, last term and number of terms makes this the most direct form to use.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "S_{33} = \\dfrac{33}{2}(6 + 198)",
          "explanation": "Using $n = 33$, $a = 6$ and $l = 198$ turns the formula into a calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the terms in the bracket",
          "workingLatex": "S_{33} = \\dfrac{33}{2}(204)",
          "explanation": "The first-and-last pair totals $204$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S_{33} = 33 \\times 102",
          "explanation": "Halving $204$ before multiplying keeps the numbers manageable.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply out",
          "workingLatex": "S_{33} = 3366",
          "explanation": "Multiplying $33$ by $102$ gives the total of all the multiples of $6$ in the range.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_{33} = 3366",
          "explanation": "So the sum of all multiples of $6$ between $1$ and $200$ is $3366$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{33} = 3366$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "multiples",
      "sum"
    ],
    "questionText": "Find the sum of all the multiples of $7$ below $500$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the series",
          "workingLatex": "7, \\; 14, \\; 21, \\; \\dots \\qquad a = 7, \\quad d = 7",
          "explanation": "The multiples of $7$ increase in equal steps of $7$, forming an arithmetic series with first term $7$ and common difference $7$, so a sum formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the largest multiple of 7 below 500",
          "workingLatex": "500 \\div 7 = 71.4\\ldots \\;\\Rightarrow\\; 71\\times 7 = 497",
          "explanation": "Dividing $500$ by $7$ shows that $71$ whole multiples fit, so the biggest multiple of $7$ under $500$ is $497$, the last term.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the number of terms",
          "workingLatex": "n = \\dfrac{497}{7} = 71",
          "explanation": "The terms are $7\\times 1, 7\\times 2, \\dots, 7\\times 71$, so there are $71$ multiples in total.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "With the first term, last term and number of terms known, this is the quickest form to use.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "S_{71} = \\dfrac{71}{2}(7 + 497)",
          "explanation": "Using $n = 71$, $a = 7$ and $l = 497$ turns the formula into a calculation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the terms in the bracket",
          "workingLatex": "S_{71} = \\dfrac{71}{2}(504)",
          "explanation": "The first-and-last pair totals $504$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "S_{71} = 71 \\times 252",
          "explanation": "Halving $504$ first keeps the multiplication cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply out",
          "workingLatex": "S_{71} = 17892",
          "explanation": "Multiplying $71$ by $252$ gives the total of all the multiples of $7$ below $500$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_{71} = 17892",
          "explanation": "So the sum of all multiples of $7$ below $500$ is $17892$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{71} = 17892$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "sigma notation",
      "arithmetic series",
      "sum formula"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{10}(3r+2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{r=1}^{10}(3r+2) = (3(1)+2) + (3(2)+2) + \\cdots + (3(10)+2)",
          "explanation": "The symbol $\\sum$ is an instruction to add. We substitute $r = 1, 2, 3, \\ldots, 10$ into $3r+2$ one at a time and total the results, so the notation is just a compact way of writing a long sum.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the terms",
          "workingLatex": "= 5 + 8 + 11 + \\cdots + 32",
          "explanation": "Putting $r = 1$ gives $5$, $r = 2$ gives $8$, and $r = 10$ gives $3(10)+2 = 32$. Seeing the first few terms and the last term lets us recognise the pattern.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise an arithmetic series",
          "workingLatex": "a = 5, \\quad d = 8 - 5 = 3",
          "explanation": "Each term is $3$ more than the one before, so the difference between consecutive terms is constant. A constant difference means this is an arithmetic series, with first term $a = 5$ and common difference $d = 3$ (the coefficient of $r$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the number of terms",
          "workingLatex": "n = 10",
          "explanation": "The limits on the sum tell us $r$ runs from $1$ up to $10$, so there are exactly $10$ terms to add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "This formula pairs the terms so that each pair has the same total, which is far quicker than adding all ten terms individually and avoids arithmetic slips.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "S_{10} = \\dfrac{10}{2}\\left[2(5) + (10-1)(3)\\right]",
          "explanation": "Replacing $a$, $d$ and $n$ with $5$, $3$ and $10$ turns the general formula into a single numerical calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{10} = 5\\left[10 + 27\\right] = 5 \\times 37",
          "explanation": "Working out the bracket first follows the order of operations: $2(5) = 10$ and $9 \\times 3 = 27$ combine to give $37$, and $\\tfrac{10}{2} = 5$ multiplies it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate and state the answer",
          "workingLatex": "S_{10} = 185",
          "explanation": "The final multiplication gives the total of all ten terms, so the value of the sum is $185$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{10}(3r+2) = 185$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sigma notation",
      "arithmetic series",
      "odd numbers"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{20}(2r-1)$, the sum of the first $20$ odd numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{r=1}^{20}(2r-1) = (2(1)-1) + (2(2)-1) + \\cdots + (2(20)-1)",
          "explanation": "The $\\sum$ tells us to substitute $r = 1, 2, \\ldots, 20$ into $2r-1$ and add every result together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write out the terms",
          "workingLatex": "= 1 + 3 + 5 + \\cdots + 39",
          "explanation": "Each value of $2r-1$ is an odd number: $r = 1$ gives $1$, $r = 2$ gives $3$, and $r = 20$ gives $2(20)-1 = 39$. So this really is the sum of the first twenty odd numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the arithmetic structure",
          "workingLatex": "a = 1, \\quad d = 2, \\quad l = 39",
          "explanation": "The odd numbers go up in steps of $2$, so the difference is constant and the series is arithmetic with first term $a = 1$ and last term $l = 39$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the number of terms",
          "workingLatex": "n = 20",
          "explanation": "Since $r$ runs from $1$ to $20$ there are $20$ terms in the sum.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the last-term form of the sum",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "When the first and last terms are both known, this version of the formula is fastest: it averages the first and last terms and multiplies by how many terms there are.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "S_{20} = \\dfrac{20}{2}(1 + 39) = 10 \\times 40",
          "explanation": "Putting $n = 20$, $a = 1$ and $l = 39$ into the formula gives a single product to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate and state the answer",
          "workingLatex": "S_{20} = 400",
          "explanation": "The sum is $400$. This matches the well-known fact that the sum of the first $n$ odd numbers is $n^2$, and here $20^2 = 400$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{20}(2r-1) = 400$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": [
      "sigma notation",
      "constant sum",
      "sum of a constant"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{12} 5$, and explain why the answer is $12 \\times 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{r=1}^{12} 5 = 5 + 5 + 5 + \\cdots + 5",
          "explanation": "The expression being summed is just $5$; it contains no $r$, so it does not change as $r$ increases. Every single term in the sum is therefore $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count how many terms there are",
          "workingLatex": "\\text{number of terms} = 12",
          "explanation": "The limits show $r$ taking the values $1, 2, 3, \\ldots, 12$, which is $12$ values, so we are adding twelve copies of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Turn repeated addition into multiplication",
          "workingLatex": "\\sum_{r=1}^{12} 5 = 12 \\times 5",
          "explanation": "Adding the same number to itself repeatedly is exactly what multiplication means: twelve lots of $5$ is $12 \\times 5$. This is why summing a constant multiplies it by the number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the general rule",
          "workingLatex": "\\sum_{r=1}^{n} c = nc",
          "explanation": "In general, summing a constant $c$ over $n$ terms gives $nc$, because none of the terms depend on the counter $r$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the product",
          "workingLatex": "12 \\times 5 = 60",
          "explanation": "Carrying out the multiplication gives the total value of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "\\sum_{r=1}^{12} 5 = 60",
          "explanation": "So the sum equals $60$, which is $12 \\times 5$ as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{12} 5 = 60$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "sigma notation",
      "arithmetic series",
      "nth term"
    ],
    "questionText": "Write the finite series $4 + 7 + 10 + \\cdots + 31$ using sigma notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common difference",
          "workingLatex": "a = 4, \\quad d = 7 - 4 = 3",
          "explanation": "To describe the series with one formula we first read off where it starts and how it grows. It begins at $4$ and each term is $3$ more than the last, so $a = 4$ and $d = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the nth term formula",
          "workingLatex": "u_n = a + (n-1)d = 4 + (n-1)(3)",
          "explanation": "Any arithmetic term is the first term plus a whole number of steps of size $d$. Substituting $a = 4$ and $d = 3$ gives a rule for the term in position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the nth term",
          "workingLatex": "u_n = 4 + 3n - 3 = 3n + 1",
          "explanation": "Expanding the bracket and collecting the constants gives a tidy expression $3n+1$ that generates every term of the series.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find how many terms there are",
          "workingLatex": "3n + 1 = 31",
          "explanation": "The last written term is $31$. Setting the general term equal to $31$ lets us find which position that term occupies, and hence how many terms there are.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the number of terms",
          "workingLatex": "3n = 30 \\quad\\Rightarrow\\quad n = 10",
          "explanation": "Subtracting $1$ and dividing by $3$ shows that $31$ is the $10$th term, so the series has $10$ terms in total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the summation variable",
          "workingLatex": "u_r = 3r + 1",
          "explanation": "Inside a sum we use the counter $r$ in place of $n$. The general term $3r+1$ will run through every value of the series as $r$ changes.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Assemble the sigma notation",
          "workingLatex": "4 + 7 + 10 + \\cdots + 31 = \\sum_{r=1}^{10}(3r+1)",
          "explanation": "The counter starts at $r = 1$ (the first term) and ends at $r = 10$ (the last term), with $3r+1$ generating each term in between.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the endpoints",
          "workingLatex": "r = 1: \\ 3(1)+1 = 4, \\qquad r = 10: \\ 3(10)+1 = 31",
          "explanation": "Testing the bottom and top limits confirms the notation reproduces the correct first and last terms, so it faithfully represents the series.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{10}(3r+1)$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "sigma notation",
      "arithmetic series",
      "partial sums"
    ],
    "questionText": "Evaluate $\\sum_{r=3}^{15}(4r-1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sum",
          "workingLatex": "\\sum_{r=3}^{15}(4r-1) = (4(3)-1) + \\cdots + (4(15)-1)",
          "explanation": "This time the counter $r$ starts at $3$, not $1$, so the sum begins from the third value of $4r-1$ and runs up to $r = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use a difference of full sums",
          "workingLatex": "\\sum_{r=3}^{15}(4r-1) = \\sum_{r=1}^{15}(4r-1) - \\sum_{r=1}^{2}(4r-1)",
          "explanation": "The standard sum formula assumes we start counting from $r = 1$. To use it, we take the whole sum from $r = 1$ to $15$ and simply remove the two terms ($r = 1$ and $r = 2$) that we do not want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the arithmetic details",
          "workingLatex": "a = 4(1)-1 = 3, \\quad d = 4",
          "explanation": "Treating $4r-1$ as a sequence from $r = 1$, the first term is $3$ and each term rises by $4$ (the coefficient of $r$), so it is arithmetic with $a = 3$, $d = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "We need the sum of the first $15$ terms, and this formula computes it directly from $a$, $d$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the sum to 15 terms",
          "workingLatex": "S_{15} = \\dfrac{15}{2}\\left[2(3) + (15-1)(4)\\right]",
          "explanation": "Substituting $n = 15$, $a = 3$ and $d = 4$ sets up the value of the full sum from $r = 1$ to $15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the full sum",
          "workingLatex": "S_{15} = \\dfrac{15}{2}\\left[6 + 56\\right] = \\dfrac{15}{2}(62) = 15 \\times 31 = 465",
          "explanation": "The bracket becomes $62$; halving it gives $31$, and multiplying by $15$ gives $465$ for the complete sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the two unwanted terms",
          "workingLatex": "\\sum_{r=1}^{2}(4r-1) = 3 + 7 = 10",
          "explanation": "The first two terms, at $r = 1$ and $r = 2$, are $3$ and $7$. These are the terms we must subtract off because our sum actually starts at $r = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract to get the required sum",
          "workingLatex": "\\sum_{r=3}^{15}(4r-1) = 465 - 10 = 455",
          "explanation": "Removing the first two terms from the full total leaves exactly the sum from $r = 3$ to $r = 15$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify directly",
          "workingLatex": "\\dfrac{13}{2}(11 + 59) = \\dfrac{13}{2}(70) = 13 \\times 35 = 455",
          "explanation": "As a check, the wanted sum has $15 - 3 + 1 = 13$ terms, from $4(3)-1 = 11$ to $4(15)-1 = 59$. Using $\\tfrac{n}{2}(a+l)$ confirms the answer $455$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\sum_{r=3}^{15}(4r-1) = 455",
          "explanation": "Both methods agree, so the value of the sum is $455$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=3}^{15}(4r-1) = 455$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "partial sums",
      "sum formula"
    ],
    "questionText": "An arithmetic progression has first term $a = 7$ and common difference $d = 3$. Find the sum of the $5$th term to the $20$th term inclusive.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what is known and what is wanted",
          "workingLatex": "a = 7, \\quad d = 3, \\quad \\text{sum of } u_5 \\text{ to } u_{20}",
          "explanation": "We are given the start and step of the progression and asked for a block of terms that does not begin at the first term, so we cannot just use a single sum formula directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Express the block as a difference of sums",
          "workingLatex": "u_5 + u_6 + \\cdots + u_{20} = S_{20} - S_{4}",
          "explanation": "The sum of the first $20$ terms includes the first $4$ terms that we do not want. Subtracting $S_4$ removes them and leaves exactly the terms from the $5$th to the $20$th.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "This lets us compute each of the two partial sums, $S_{20}$ and $S_4$, from the same first term and common difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the sum to 20 terms",
          "workingLatex": "S_{20} = \\dfrac{20}{2}\\left[2(7) + (20-1)(3)\\right]",
          "explanation": "Substituting $n = 20$, $a = 7$ and $d = 3$ prepares the larger of the two sums.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the sum to 20 terms",
          "workingLatex": "S_{20} = 10\\left[14 + 57\\right] = 10 \\times 71 = 710",
          "explanation": "The bracket gives $71$, and multiplying by $\\tfrac{20}{2} = 10$ gives $710$ for the first twenty terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the sum to 4 terms",
          "workingLatex": "S_{4} = \\dfrac{4}{2}\\left[2(7) + (4-1)(3)\\right]",
          "explanation": "Now we find the total of the first four terms so we can strip them away.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the sum to 4 terms",
          "workingLatex": "S_{4} = 2\\left[14 + 9\\right] = 2 \\times 23 = 46",
          "explanation": "The bracket gives $23$, and multiplying by $\\tfrac{4}{2} = 2$ gives $46$ for the first four terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Subtract to find the required sum",
          "workingLatex": "S_{20} - S_{4} = 710 - 46 = 664",
          "explanation": "Removing the first four terms from the first twenty leaves the sum of the $5$th to the $20$th terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify directly",
          "workingLatex": "\\dfrac{16}{2}(19 + 64) = 8 \\times 83 = 664",
          "explanation": "As a check, the block has $20 - 5 + 1 = 16$ terms, from $u_5 = 7 + 4(3) = 19$ to $u_{20} = 7 + 19(3) = 64$; using $\\tfrac{n}{2}(a+l)$ confirms $664$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "u_5 + \\cdots + u_{20} = 664",
          "explanation": "So the sum of the $5$th term through to the $20$th term is $664$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{20} - S_{4} = 664$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "sigma notation",
      "arithmetic series",
      "quadratic equation"
    ],
    "questionText": "Given that $\\sum_{r=1}^{n}(2r+3) = 320$, find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the task",
          "workingLatex": "\\sum_{r=1}^{n}(2r+3) = 320",
          "explanation": "Here the number of terms $n$ is unknown; we are told the total comes to $320$ and must work backwards to find how many terms were added.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the arithmetic details",
          "workingLatex": "a = 2(1)+3 = 5, \\quad d = 2",
          "explanation": "The summand $2r+3$ gives $5$ when $r = 1$, and rises by $2$ each time, so the series is arithmetic with first term $a = 5$ and common difference $d = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "We build an expression for the sum of $n$ terms in terms of $n$, which we can then set equal to $320$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute a and d",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(5) + (n-1)(2)\\right]",
          "explanation": "Putting in $a = 5$ and $d = 2$ leaves the sum written purely in terms of the unknown $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the sum expression",
          "workingLatex": "S_n = \\dfrac{n}{2}(2n + 8) = n(n+4) = n^2 + 4n",
          "explanation": "The bracket simplifies to $2n+8$; halving it gives $n+4$, so the sum of $n$ terms is the neat quadratic $n^2 + 4n$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form an equation",
          "workingLatex": "n^2 + 4n = 320",
          "explanation": "Setting our expression for the sum equal to the given total $320$ produces an equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange into a quadratic",
          "workingLatex": "n^2 + 4n - 320 = 0",
          "explanation": "Bringing everything to one side gives a standard quadratic equal to zero, ready to be solved.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic",
          "workingLatex": "(n + 20)(n - 16) = 0",
          "explanation": "We need two numbers that multiply to $-320$ and add to $+4$; those are $+20$ and $-16$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Read off the solutions",
          "workingLatex": "n = -20 \\quad \\text{or} \\quad n = 16",
          "explanation": "Setting each factor to zero gives the two possible values of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reject the invalid solution",
          "workingLatex": "n = 16",
          "explanation": "The number of terms must be a positive whole number, so $n = -20$ is impossible and we keep $n = 16$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the answer",
          "workingLatex": "16^2 + 4(16) = 256 + 64 = 320",
          "explanation": "Substituting $n = 16$ back into $n^2 + 4n$ recovers $320$, confirming the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 16$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "nth term",
      "inequality"
    ],
    "questionText": "A decreasing arithmetic series begins $100 + 94 + 88 + \\cdots$. Find how many terms are positive, and find the sum of all the positive terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common difference",
          "workingLatex": "a = 100, \\quad d = 94 - 100 = -6",
          "explanation": "The series starts at $100$ and each term is $6$ less than the previous one, so the common difference is negative: $d = -6$. This is why the terms shrink and will eventually turn negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the nth term",
          "workingLatex": "u_n = a + (n-1)d = 100 + (n-1)(-6)",
          "explanation": "To decide which terms are positive we need a formula for a general term in terms of its position $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the nth term",
          "workingLatex": "u_n = 100 - 6n + 6 = 106 - 6n",
          "explanation": "Expanding and collecting terms gives a clean linear expression $106 - 6n$ for the $n$th term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the positivity condition",
          "workingLatex": "106 - 6n > 0",
          "explanation": "A term is positive exactly when its value is greater than zero, so we require $u_n > 0$ and solve the resulting inequality.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the inequality",
          "workingLatex": "6n < 106 \\quad\\Rightarrow\\quad n < 17.67",
          "explanation": "Rearranging gives $n < \\tfrac{106}{6} \\approx 17.67$. Since $n$ counts terms it must be a whole number, so the largest allowed value is $n = 17$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the boundary terms",
          "workingLatex": "u_{17} = 106 - 102 = 4 > 0, \\qquad u_{18} = 106 - 108 = -2 < 0",
          "explanation": "Checking either side of the boundary shows the $17$th term is still positive but the $18$th is negative, so there are exactly $17$ positive terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the sum of the positive terms",
          "workingLatex": "S_{17} = \\dfrac{17}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The sum of all positive terms is just the sum of the first $17$ terms, so we apply the sum formula with $n = 17$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "S_{17} = \\dfrac{17}{2}\\left[2(100) + (17-1)(-6)\\right]",
          "explanation": "Putting in $a = 100$, $d = -6$ and $n = 17$ turns the formula into a number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the sum",
          "workingLatex": "S_{17} = \\dfrac{17}{2}\\left[200 - 96\\right] = \\dfrac{17}{2}(104) = 17 \\times 52 = 884",
          "explanation": "The bracket gives $104$; halving it gives $52$, and multiplying by $17$ gives the total $884$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both answers",
          "workingLatex": "17 \\text{ positive terms}, \\quad S_{17} = 884",
          "explanation": "So there are $17$ positive terms and their sum is $884$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$17$ positive terms, with sum $S_{17} = 884$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "arithmetic series",
      "sum formula",
      "nth term from sum"
    ],
    "questionText": "The sum of the first $n$ terms of an arithmetic series is given by $S_n = 2n^2 + 3n$. Find the first term, the common difference, and an expression for the $n$th term $u_n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what S_n represents",
          "workingLatex": "S_n = u_1 + u_2 + \\cdots + u_n = 2n^2 + 3n",
          "explanation": "The formula $S_n$ gives the running total after adding the first $n$ terms. From this single formula we can recover the individual terms of the series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "u_1 = S_1 = 2(1)^2 + 3(1) = 5",
          "explanation": "The sum of just one term is that term itself, so $u_1 = S_1$. Substituting $n = 1$ gives the first term directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record the first term",
          "workingLatex": "a = 5",
          "explanation": "So the first term of the series, usually written $a$, is $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the key relationship",
          "workingLatex": "u_n = S_n - S_{n-1}",
          "explanation": "The $n$th term is the total after $n$ terms minus the total after $n-1$ terms: everything cancels except the single term that was just added. This gives a formula for any term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum of the first n minus 1 terms",
          "workingLatex": "S_{n-1} = 2(n-1)^2 + 3(n-1)",
          "explanation": "We reuse the same rule but with $n$ replaced by $n-1$, giving the total of the first $n-1$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the square",
          "workingLatex": "(n-1)^2 = n^2 - 2n + 1",
          "explanation": "Expanding the bracket carefully now avoids sign errors when we combine everything.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply out each part",
          "workingLatex": "2(n-1)^2 = 2n^2 - 4n + 2, \\qquad 3(n-1) = 3n - 3",
          "explanation": "Distributing the $2$ and the $3$ over their brackets prepares the two pieces of $S_{n-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into a single expression",
          "workingLatex": "S_{n-1} = 2n^2 - 4n + 2 + 3n - 3 = 2n^2 - n - 1",
          "explanation": "Adding the two pieces and collecting like terms gives a tidy expression for the sum of the first $n-1$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Subtract to find the nth term",
          "workingLatex": "u_n = (2n^2 + 3n) - (2n^2 - n - 1)",
          "explanation": "Now we apply $u_n = S_n - S_{n-1}$, being careful to subtract the whole of $S_{n-1}$ (note the sign change on every term inside the bracket).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the nth term",
          "workingLatex": "u_n = 2n^2 + 3n - 2n^2 + n + 1 = 4n + 1",
          "explanation": "The $2n^2$ terms cancel and the linear terms combine, leaving the simple expression $u_n = 4n + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check against the first term",
          "workingLatex": "u_1 = 4(1) + 1 = 5",
          "explanation": "Substituting $n = 1$ into $4n+1$ gives $5$, which matches the first term found earlier and confirms the formula is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the common difference",
          "workingLatex": "u_2 = 4(2) + 1 = 9, \\qquad d = u_2 - u_1 = 9 - 5 = 4",
          "explanation": "The common difference is the gap between consecutive terms. Computing $u_2 = 9$ and subtracting $u_1 = 5$ gives $d = 4$ (equivalently, $d$ is the coefficient of $n$ in $u_n = 4n+1$).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State all three results",
          "workingLatex": "a = 5, \\quad d = 4, \\quad u_n = 4n + 1",
          "explanation": "So the series has first term $5$, common difference $4$, and $n$th term $4n + 1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5,\\ d = 4,\\ u_n = 4n + 1$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum formula",
      "quadratic inequality"
    ],
    "questionText": "For the arithmetic series $7 + 11 + 15 + \\cdots$, find the least number of terms needed for the sum to first exceed $1000$, and state that sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the first term and common difference",
          "workingLatex": "a = 7, \\quad d = 11 - 7 = 4",
          "explanation": "The series starts at $7$ and grows by $4$ each time, so $a = 7$ and $d = 4$. These control how quickly the running total builds up.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "We want an expression for the sum of $n$ terms so we can see when it passes $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute a and d",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(7) + (n-1)(4)\\right]",
          "explanation": "Putting in $a = 7$ and $d = 4$ leaves the sum in terms of $n$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the sum",
          "workingLatex": "S_n = \\dfrac{n}{2}(4n + 10) = n(2n + 5) = 2n^2 + 5n",
          "explanation": "The bracket becomes $4n+10$; halving it gives $2n+5$, so the sum of $n$ terms is the quadratic $2n^2 + 5n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the inequality",
          "workingLatex": "2n^2 + 5n > 1000",
          "explanation": "\"The sum first exceeds $1000$\" means we need the smallest $n$ for which $S_n$ is greater than $1000$, giving this inequality.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to standard form",
          "workingLatex": "2n^2 + 5n - 1000 > 0",
          "explanation": "Moving $1000$ across gives a quadratic greater than zero; the critical values come from where the quadratic equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the boundary equation",
          "workingLatex": "2n^2 + 5n - 1000 = 0",
          "explanation": "The quadratic does not factorise with whole numbers, so we solve the boundary equation with the quadratic formula to find where the sum equals exactly $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-5 \\pm \\sqrt{5^2 - 4(2)(-1000)}}{2(2)}",
          "explanation": "Using $n = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a = 2$, $b = 5$, $c = -1000$ locates the boundary values of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the discriminant",
          "workingLatex": "5^2 - 4(2)(-1000) = 25 + 8000 = 8025",
          "explanation": "Computing under the root gives $8025$; it is positive, so there are two real boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the positive root",
          "workingLatex": "n = \\dfrac{-5 + \\sqrt{8025}}{4} \\approx \\dfrac{-5 + 89.58}{4} \\approx 21.15",
          "explanation": "Only the positive root is meaningful for a number of terms. Since $\\sqrt{8025} \\approx 89.58$, the boundary is at about $n \\approx 21.15$; the other root is negative and rejected.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Round up to the next whole number",
          "workingLatex": "n = 22",
          "explanation": "The upward-opening parabola is above $1000$ once $n$ passes $21.15$. As $n$ must be a whole number, we round up to $n = 22$ for the sum to first exceed $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check n = 21 and n = 22",
          "workingLatex": "S_{21} = 2(441) + 5(21) = 987, \\qquad S_{22} = 2(484) + 5(22) = 1078",
          "explanation": "Testing either side confirms it: after $21$ terms the sum is $987$ (still below $1000$), but after $22$ terms it is $1078$, which is the first total above $1000$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "n = 22, \\qquad S_{22} = 1078",
          "explanation": "So $22$ terms are needed, and the sum at that point is $1078$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 22$, with $S_{22} = 1078$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sigma notation",
      "sum formula"
    ],
    "questionText": "Evaluate $\\sum_{r=1}^{40}(50-2r)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{r=1}^{40}(50-2r) = 48 + 46 + 44 + \\ldots",
          "explanation": "The sigma symbol tells us to add up the expression $50-2r$ as $r$ runs through the whole numbers from $1$ to $40$. Writing out the first few terms lets us see the pattern before choosing a formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first term",
          "workingLatex": "a = 50 - 2(1) = 48",
          "explanation": "The first term is simply the value of $50-2r$ when $r=1$. This is the starting point of the series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the common difference",
          "workingLatex": "d = -2",
          "explanation": "Each time $r$ goes up by $1$, the term changes by the coefficient of $r$, which is $-2$. Because $d$ is negative, this is a decreasing arithmetic series.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the number of terms",
          "workingLatex": "n = 40",
          "explanation": "The counter $r$ starts at $1$ and ends at $40$, so there are $40$ terms to add.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "This is the standard formula for the sum of an arithmetic series. It pairs terms from the two ends so we never have to add all $40$ values by hand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "S_{40} = \\dfrac{40}{2}\\left[2(48) + (40-1)(-2)\\right]",
          "explanation": "We replace $a$ with $48$, $d$ with $-2$ and $n$ with $40$, turning the general rule into a single numerical calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{40} = 20\\left[96 + (39)(-2)\\right]",
          "explanation": "We work out $\\dfrac{40}{2}=20$ and $2\\times 48 = 96$, and note there are $39$ steps of $-2$ between the first and last terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the terms in the bracket",
          "workingLatex": "S_{40} = 20\\left[96 - 78\\right] = 20 \\times 18",
          "explanation": "Adding $39$ lots of $-2$ gives $-78$, and $96-78 = 18$. This is the average-adjusted total inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the sum",
          "workingLatex": "S_{40} = 360",
          "explanation": "Multiplying $20$ by $18$ gives the total of the series.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\sum_{r=1}^{40}(50-2r) = 360",
          "explanation": "So the value of the summation is $360$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=1}^{40}(50-2r) = 360$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sigma notation",
      "number of terms"
    ],
    "questionText": "Evaluate $\\sum_{r=10}^{30}(3r+1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the sigma notation",
          "workingLatex": "\\sum_{r=10}^{30}(3r+1)",
          "explanation": "We must add the values of $3r+1$ as $r$ runs from $10$ up to $30$. The important feature here is that the lower limit is $10$, not $1$, so we must be careful when counting terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the first term",
          "workingLatex": "a = 3(10) + 1 = 31",
          "explanation": "The series starts at $r=10$, so the first term is the value of $3r+1$ there.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the last term",
          "workingLatex": "l = 3(30) + 1 = 91",
          "explanation": "The series ends at $r=30$, so the last term is the value of $3r+1$ there. Knowing both ends lets us use the paired-ends form of the sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the common difference",
          "workingLatex": "d = 3",
          "explanation": "Increasing $r$ by $1$ increases $3r+1$ by $3$, the coefficient of $r$, confirming the terms are equally spaced.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count the number of terms",
          "workingLatex": "n = 30 - 10 + 1 = 21",
          "explanation": "When the lower limit is not $1$, the number of terms is (top limit) $-$ (bottom limit) $+\\,1$. Both $r=10$ and $r=30$ are included, so we add $1$ — forgetting this is the classic error, which would give $20$ instead of $21$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Since we already have the first term, the last term and the number of terms, the $a+l$ form of the formula is the quickest route.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values",
          "workingLatex": "S_{21} = \\dfrac{21}{2}(31 + 91)",
          "explanation": "We put in $n=21$, $a=31$ and $l=91$. The bracket $a+l$ is the total of one pair of end terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the bracket",
          "workingLatex": "S_{21} = \\dfrac{21}{2} \\times 122",
          "explanation": "Adding the first and last terms gives $122$. Every such pair from the ends of the series has the same total, which is why the formula works.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the sum",
          "workingLatex": "S_{21} = 21 \\times 61 = 1281",
          "explanation": "Halving $122$ gives $61$, and $21 \\times 61 = 1281$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "\\sum_{r=10}^{30}(3r+1) = 1281",
          "explanation": "So the value of the summation is $1281$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sum_{r=10}^{30}(3r+1) = 1281$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "nth term",
      "sum formula"
    ],
    "questionText": "A graduate's starting salary is $\\pounds 18000$ per year. Each year the salary rises by $\\pounds 900$. Treating the annual salaries as an arithmetic sequence, find (a) the salary in year $10$, and (b) the total amount earned over the first $10$ years.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 18000, \\quad d = 900",
          "explanation": "The first year's salary is the first term $a$, and the fixed yearly rise of $\\pounds 900$ is the common difference $d$. Modelling the salaries as an arithmetic sequence lets us use the standard formulae.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "To reach the salary in a given year we start at $a$ and add the rise $d$ once for each year that has passed, which is $n-1$ times by year $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for year 10",
          "workingLatex": "u_{10} = 18000 + (10-1)(900)",
          "explanation": "Part (a) asks for year $10$, so $n=10$. There are $9$ pay rises between year $1$ and year $10$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the year 10 salary",
          "workingLatex": "u_{10} = 18000 + 8100 = 26100",
          "explanation": "Nine rises of $\\pounds 900$ add $\\pounds 8100$ to the starting salary.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the year 10 salary",
          "workingLatex": "u_{10} = \\pounds 26100",
          "explanation": "So in year $10$ the salary is $\\pounds 26100$. This is also the last term we will need for the total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "Part (b) asks for the total earned over $10$ years, which is the sum of the first $10$ salaries.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for the 10-year total",
          "workingLatex": "S_{10} = \\dfrac{10}{2}\\left[2(18000) + (10-1)(900)\\right]",
          "explanation": "We use $n=10$, $a=18000$ and $d=900$ to add up all ten annual salaries at once.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_{10} = 5\\left[36000 + 8100\\right]",
          "explanation": "Here $\\dfrac{10}{2}=5$, $2\\times 18000 = 36000$, and the nine rises contribute $8100$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the total",
          "workingLatex": "S_{10} = 5 \\times 44100 = 220500",
          "explanation": "Adding inside the bracket gives $44100$, and multiplying by $5$ gives the grand total.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the total earned",
          "workingLatex": "S_{10} = \\pounds 220500",
          "explanation": "So over the first $10$ years the graduate earns $\\pounds 220500$ in total.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "u_{10} = \\pounds 26100, \\quad S_{10} = \\pounds 220500",
          "explanation": "The year $10$ salary is $\\pounds 26100$ and the total earned over the $10$ years is $\\pounds 220500$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Year $10$ salary $u_{10} = \\pounds 26100$; total over $10$ years $S_{10} = \\pounds 220500$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "sum formula"
    ],
    "questionText": "Priya saves $\\pounds 15$ in the first week, and each week she saves $\\pounds 3$ more than the week before. Find the total amount she has saved after $26$ weeks.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 15, \\quad d = 3",
          "explanation": "The amount saved each week forms an arithmetic sequence: the first week's saving is $a=15$ and the constant weekly increase is $d=3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the number of terms",
          "workingLatex": "n = 26",
          "explanation": "We want the total over $26$ weeks, so we are adding the first $26$ terms of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The total saved is the sum of the weekly amounts, so we use the arithmetic series sum formula rather than adding $26$ numbers individually.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "S_{26} = \\dfrac{26}{2}\\left[2(15) + (26-1)(3)\\right]",
          "explanation": "We replace $n$ with $26$, $a$ with $15$ and $d$ with $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the first part of the bracket",
          "workingLatex": "2a = 30",
          "explanation": "The term $2a$ represents the sum of the first and last terms before adjusting for the differences; here $2\\times 15 = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the second part of the bracket",
          "workingLatex": "(n-1)d = 25 \\times 3 = 75",
          "explanation": "There are $25$ weekly increases from week $1$ to week $26$, each of $\\pounds 3$, contributing $\\pounds 75$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine inside the bracket",
          "workingLatex": "S_{26} = 13\\left[30 + 75\\right] = 13 \\times 105",
          "explanation": "We simplify $\\dfrac{26}{2}=13$ and add the two parts of the bracket to get $105$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the total",
          "workingLatex": "S_{26} = 1365",
          "explanation": "Multiplying $13$ by $105$ gives the total amount saved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "S_{26} = \\pounds 1365",
          "explanation": "So after $26$ weeks Priya has saved $\\pounds 1365$ in total.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S_{26} = \\pounds 1365$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "nth term",
      "sum formula"
    ],
    "questionText": "In a theatre the front row has $20$ seats, and each row behind it has $3$ more seats than the row in front. There are $25$ rows in total. Find (a) the number of seats in the last row, and (b) the total number of seats in the theatre.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 20, \\quad d = 3, \\quad n = 25",
          "explanation": "The seats per row form an arithmetic sequence: the front row is the first term $a=20$, each row adds $d=3$ seats, and there are $n=25$ rows.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Part (a) asks for the last (25th) row. Each row after the first has $3$ more seats, so we add $d$ a total of $n-1$ times.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for the last row",
          "workingLatex": "u_{25} = 20 + (25-1)(3)",
          "explanation": "With $n=25$ there are $24$ gaps between the front row and the back row.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the last row",
          "workingLatex": "u_{25} = 20 + 72 = 92",
          "explanation": "The $24$ increases of $3$ seats add $72$ seats to the front row's $20$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the number of seats in the last row",
          "workingLatex": "u_{25} = 92",
          "explanation": "So the back row has $92$ seats. This is the last term $l$ we need for the total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "For part (b) we now know the first and last rows, so the $a+l$ form of the sum formula gives the total quickly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values",
          "workingLatex": "S_{25} = \\dfrac{25}{2}(20 + 92)",
          "explanation": "We use $n=25$, $a=20$ and $l=92$ to add the seats in all $25$ rows.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the bracket",
          "workingLatex": "S_{25} = \\dfrac{25}{2} \\times 112",
          "explanation": "Front and back rows together hold $112$ seats; every symmetric pair of rows has this same total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the total",
          "workingLatex": "S_{25} = 25 \\times 56 = 1400",
          "explanation": "Halving $112$ gives $56$, and $25 \\times 56 = 1400$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the total number of seats",
          "workingLatex": "S_{25} = 1400",
          "explanation": "So the theatre has $1400$ seats in total.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "u_{25} = 92, \\quad S_{25} = 1400",
          "explanation": "The last row has $92$ seats and the theatre holds $1400$ seats altogether.",
          "diagram": null
        }
      ],
      "finalAnswer": "Last row has $92$ seats; total number of seats $S_{25} = 1400$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "number of terms",
      "sum formula"
    ],
    "questionText": "Logs are stacked so that the bottom row has $30$ logs, and each row above has $2$ fewer logs than the row below it. The top row has $6$ logs. Find (a) the number of rows in the stack, and (b) the total number of logs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 30, \\quad d = -2",
          "explanation": "Reading from the bottom up, the rows form an arithmetic sequence: the bottom row is the first term $a=30$, and going up each row loses $2$ logs, so $d=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The top row is the last term of the sequence. To find how many rows there are, we set the nth term equal to the known top value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the nth term equal to the top row",
          "workingLatex": "30 + (n-1)(-2) = 6",
          "explanation": "The top row has $6$ logs, so the $n$th term equals $6$. Solving this equation gives the number of rows $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the equation",
          "workingLatex": "-2(n-1) = 6 - 30 = -24",
          "explanation": "Subtracting $30$ from both sides isolates the term containing $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the bracket",
          "workingLatex": "n - 1 = \\dfrac{-24}{-2} = 12",
          "explanation": "Dividing both sides by $-2$ removes the common difference and leaves $n-1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for n",
          "workingLatex": "n = 13",
          "explanation": "Adding $1$ gives the number of rows. There are $12$ steps up from the bottom, so $13$ rows in total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the number of rows",
          "workingLatex": "n = 13",
          "explanation": "So the stack has $13$ rows.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "For part (b) we know the first row ($30$), the last row ($6$) and the number of rows ($13$), so the $a+l$ form is fastest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the known values",
          "workingLatex": "S_{13} = \\dfrac{13}{2}(30 + 6)",
          "explanation": "We use $n=13$, $a=30$ and $l=6$ to add the logs in every row.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the bracket",
          "workingLatex": "S_{13} = \\dfrac{13}{2} \\times 36 = 13 \\times 18",
          "explanation": "Bottom and top rows together hold $36$ logs; halving $36$ gives $18$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the total",
          "workingLatex": "S_{13} = 234",
          "explanation": "Multiplying $13$ by $18$ gives the total number of logs.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer",
          "workingLatex": "n = 13, \\quad S_{13} = 234",
          "explanation": "So there are $13$ rows and $234$ logs in the stack.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 13$ rows; total number of logs $S_{13} = 234$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "quadratic equation"
    ],
    "questionText": "A loan is repaid in monthly instalments that form an arithmetic sequence. The first month's payment is $\\pounds 200$, and each following payment is $\\pounds 50$ more than the previous one. The total amount repaid is $\\pounds 3000$. Find the number of months needed to repay the loan.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 200, \\quad d = 50",
          "explanation": "The monthly payments form an arithmetic sequence: the first payment is $a=200$ and each rise of $\\pounds 50$ is the common difference $d=50$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The total repaid is the sum of the monthly payments, so we build an expression for $S_n$ in terms of the unknown number of months $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(200) + (n-1)(50)\\right]",
          "explanation": "We put in $a=200$ and $d=50$ but keep $n$ as the unknown we are solving for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[400 + 50n - 50\\right] = \\dfrac{n}{2}\\left[350 + 50n\\right]",
          "explanation": "Expanding $(n-1)(50)$ gives $50n-50$; combining constants tidies the bracket to $350+50n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to a quadratic",
          "workingLatex": "S_n = n(175 + 25n) = 25n^2 + 175n",
          "explanation": "Multiplying the bracket by $\\dfrac{n}{2}$ gives a quadratic in $n$, because the total grows faster than linearly as the payments rise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the total equal to the repayment",
          "workingLatex": "25n^2 + 175n = 3000",
          "explanation": "The total repaid is $\\pounds 3000$, so we set our expression for $S_n$ equal to $3000$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange into standard form",
          "workingLatex": "25n^2 + 175n - 3000 = 0",
          "explanation": "Bringing everything to one side gives a quadratic equation equal to zero, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide through to simplify",
          "workingLatex": "n^2 + 7n - 120 = 0",
          "explanation": "Every coefficient is divisible by $25$, so dividing through gives smaller, easier numbers without changing the roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the discriminant",
          "workingLatex": "b^2 - 4ac = 7^2 - 4(1)(-120) = 49 + 480 = 529",
          "explanation": "The discriminant tells us about the roots; since $529$ is a perfect square, the quadratic factorises neatly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root of the discriminant",
          "workingLatex": "\\sqrt{529} = 23",
          "explanation": "A whole-number square root confirms the roots will be exact, so no rounding is needed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-7 \\pm 23}{2}",
          "explanation": "Substituting $b=7$ and $\\sqrt{b^2-4ac}=23$ into $n=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ gives the two possible values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the two roots",
          "workingLatex": "n = \\dfrac{16}{2} = 8 \\quad \\text{or} \\quad n = \\dfrac{-30}{2} = -15",
          "explanation": "The two roots come from taking the $+$ and $-$ signs in turn.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the invalid root",
          "workingLatex": "n = -15 \\; \\text{rejected} \\; (n > 0)",
          "explanation": "A number of months cannot be negative, so $n=-15$ has no meaning in this context and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the valid root",
          "workingLatex": "S_8 = \\dfrac{8}{2}\\left[400 + 7(50)\\right] = 4 \\times 750 = 3000",
          "explanation": "Substituting $n=8$ back in returns exactly $\\pounds 3000$, confirming the answer is correct.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "n = 8",
          "explanation": "So the loan is fully repaid after $8$ months.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 8$ months"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "quadratic inequality"
    ],
    "questionText": "An athlete runs $2$ km on day $1$ of a training programme and increases the distance run by $0.5$ km each day. On which day does the total distance run since day $1$ first exceed $100$ km?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 2, \\quad d = 0.5",
          "explanation": "The daily distances form an arithmetic sequence: day $1$ is the first term $a=2$ and the fixed daily increase of $0.5$ km is $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The total distance since day $1$ is the sum of the daily distances, so we express $S_n$ in terms of the day number $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(2) + (n-1)(0.5)\\right]",
          "explanation": "We put in $a=2$ and $d=0.5$, keeping $n$ as the unknown day.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[4 + 0.5n - 0.5\\right] = \\dfrac{n}{2}\\left[3.5 + 0.5n\\right]",
          "explanation": "Expanding $(n-1)(0.5)$ and combining the constants tidies the bracket to $3.5+0.5n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to a quadratic",
          "workingLatex": "S_n = 0.25n^2 + 1.75n",
          "explanation": "Multiplying out by $\\dfrac{n}{2}$ gives a quadratic in $n$, since the cumulative distance builds up faster and faster.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the inequality",
          "workingLatex": "0.25n^2 + 1.75n > 100",
          "explanation": "We want the first day on which the total exceeds $100$ km, so we require $S_n > 100$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the decimals",
          "workingLatex": "n^2 + 7n > 400",
          "explanation": "Multiplying every term by $4$ removes the decimals and keeps the inequality equivalent, making the algebra cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into standard form",
          "workingLatex": "n^2 + 7n - 400 > 0",
          "explanation": "Bringing $400$ across gives a quadratic expression we can analyse against zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the associated equation",
          "workingLatex": "n^2 + 7n - 400 = 0",
          "explanation": "The boundary values where the total equals exactly $100$ km are the roots of the corresponding equation; these mark where the sign of the expression changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the discriminant",
          "workingLatex": "b^2 - 4ac = 7^2 - 4(1)(-400) = 49 + 1600 = 1649",
          "explanation": "The discriminant feeds into the quadratic formula; it is not a perfect square, so the roots are irrational and we work with decimals.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-7 \\pm \\sqrt{1649}}{2}, \\quad \\sqrt{1649} \\approx 40.61",
          "explanation": "Substituting into $n=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ gives the two boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the relevant root",
          "workingLatex": "n \\approx \\dfrac{-7 + 40.61}{2} \\approx 16.8 \\quad (\\text{reject } n \\approx -23.8)",
          "explanation": "The negative root has no meaning for a day number, so we keep the positive root. Since the parabola opens upward, $S_n > 100$ once $n$ passes about $16.8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round up to the next whole day",
          "workingLatex": "n = 17",
          "explanation": "The day number must be a whole number, and the total first exceeds $100$ just after day $16.8$, so the first day that works is day $17$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the surrounding days",
          "workingLatex": "S_{16} = 92, \\quad S_{17} = 102",
          "explanation": "Checking either side confirms the crossover: after $16$ days the total is $92$ km (still under $100$), while after $17$ days it is $102$ km (over $100$).",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "\\text{Day } 17",
          "explanation": "So the cumulative distance first exceeds $100$ km on day $17$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Day $17$ (since $S_{16} = 92$ km and $S_{17} = 102$ km)"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "quadratic inequality"
    ],
    "questionText": "A factory worker produces $120$ components in year $1$, and the annual output increases by $20$ components each year, forming an arithmetic sequence. Find the year in which the worker's cumulative total output first exceeds $2000$ components, and state that cumulative total.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 120, \\quad d = 20",
          "explanation": "The yearly output forms an arithmetic sequence: year $1$ is the first term $a=120$ and the fixed yearly rise is the common difference $d=20$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The cumulative total output is the sum of the yearly outputs, so we express $S_n$ in terms of the year number $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(120) + (n-1)(20)\\right]",
          "explanation": "We put in $a=120$ and $d=20$, keeping $n$ as the unknown year.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[240 + 20n - 20\\right] = \\dfrac{n}{2}\\left[220 + 20n\\right]",
          "explanation": "Expanding $(n-1)(20)$ and combining the constants tidies the bracket to $220+20n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to a quadratic",
          "workingLatex": "S_n = n(110 + 10n) = 10n^2 + 110n",
          "explanation": "Multiplying out by $\\dfrac{n}{2}$ gives a quadratic in $n$, as the running total accelerates each year.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the inequality",
          "workingLatex": "10n^2 + 110n > 2000",
          "explanation": "We want the first year in which the cumulative total exceeds $2000$, so we require $S_n > 2000$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through to simplify",
          "workingLatex": "n^2 + 11n > 200",
          "explanation": "Dividing every term by $10$ leaves smaller coefficients while keeping the inequality equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into standard form",
          "workingLatex": "n^2 + 11n - 200 > 0",
          "explanation": "Moving $200$ across gives a quadratic expression to compare against zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the associated equation",
          "workingLatex": "n^2 + 11n - 200 = 0",
          "explanation": "The boundary where the total equals exactly $2000$ is a root of the corresponding equation, marking where the expression changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the discriminant",
          "workingLatex": "b^2 - 4ac = 11^2 - 4(1)(-200) = 121 + 800 = 921",
          "explanation": "The discriminant is not a perfect square, so the boundary is irrational and we use a decimal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-11 \\pm \\sqrt{921}}{2}, \\quad \\sqrt{921} \\approx 30.35",
          "explanation": "Substituting into the quadratic formula gives the two boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the relevant root",
          "workingLatex": "n \\approx \\dfrac{-11 + 30.35}{2} \\approx 9.67 \\quad (\\text{reject } n \\approx -20.7)",
          "explanation": "A year number cannot be negative, so we keep the positive root. The upward parabola is positive once $n$ passes about $9.67$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round up to the next whole year",
          "workingLatex": "n = 10",
          "explanation": "Since $n$ must be a whole year and the total first exceeds $2000$ just after $9.67$, the first year that works is year $10$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify and find the cumulative total",
          "workingLatex": "S_9 = 1800, \\quad S_{10} = 10(10)^2 + 110(10) = 2100",
          "explanation": "After $9$ years the total is $1800$ (still under $2000$), while after $10$ years it is $2100$, confirming year $10$ is the first to exceed the target.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "\\text{Year } 10, \\quad S_{10} = 2100",
          "explanation": "So the cumulative output first exceeds $2000$ in year $10$, when the running total is $2100$ components.",
          "diagram": null
        }
      ],
      "finalAnswer": "Year $10$; cumulative total $S_{10} = 2100$ components"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "modelling",
      "quadratic inequality"
    ],
    "questionText": "A factory produces $500$ units in month $1$, and production increases by $40$ units each month. In which month does the cumulative production first reach $20000$ units, and what is the exact cumulative total in that month?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the arithmetic model",
          "workingLatex": "a = 500, \\quad d = 40",
          "explanation": "The monthly production forms an arithmetic sequence: month $1$ is the first term $a=500$ and the fixed monthly rise is the common difference $d=40$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The cumulative production is the sum of the monthly outputs, so we express $S_n$ in terms of the month number $n$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(500) + (n-1)(40)\\right]",
          "explanation": "We put in $a=500$ and $d=40$, keeping $n$ as the unknown month.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[1000 + 40n - 40\\right] = \\dfrac{n}{2}\\left[960 + 40n\\right]",
          "explanation": "Expanding $(n-1)(40)$ and combining the constants tidies the bracket to $960+40n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand to a quadratic",
          "workingLatex": "S_n = n(480 + 20n) = 20n^2 + 480n",
          "explanation": "Multiplying out by $\\dfrac{n}{2}$ gives a quadratic in $n$, since the running total grows faster as production rises.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the inequality",
          "workingLatex": "20n^2 + 480n \\geq 20000",
          "explanation": "We want the first month in which the cumulative production reaches $20000$, so we require $S_n \\geq 20000$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide through to simplify",
          "workingLatex": "n^2 + 24n \\geq 1000",
          "explanation": "Dividing every term by $20$ leaves smaller coefficients while keeping the inequality equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into standard form",
          "workingLatex": "n^2 + 24n - 1000 \\geq 0",
          "explanation": "Moving $1000$ across gives a quadratic expression to compare against zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the associated equation",
          "workingLatex": "n^2 + 24n - 1000 = 0",
          "explanation": "The boundary where the total equals exactly $20000$ is a root of the corresponding equation, marking where the sign changes.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the discriminant",
          "workingLatex": "b^2 - 4ac = 24^2 - 4(1)(-1000) = 576 + 4000 = 4576",
          "explanation": "The discriminant is not a perfect square, so the boundary is irrational and we use a decimal approximation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-24 \\pm \\sqrt{4576}}{2}, \\quad \\sqrt{4576} \\approx 67.65",
          "explanation": "Substituting into the quadratic formula gives the two boundary values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the relevant root",
          "workingLatex": "n \\approx \\dfrac{-24 + 67.65}{2} \\approx 21.8 \\quad (\\text{reject } n \\approx -45.8)",
          "explanation": "A month number cannot be negative, so we keep the positive root. The upward parabola is non-negative once $n$ passes about $21.8$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round up to the next whole month",
          "workingLatex": "n = 22",
          "explanation": "Since $n$ must be a whole month and the total first reaches $20000$ just after $21.8$, the first month that works is month $22$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the surrounding months",
          "workingLatex": "S_{21} = 18900, \\quad S_{22} = 20240",
          "explanation": "After $21$ months the total is $18900$ (still under $20000$), while after $22$ months it is $20240$ (over $20000$), confirming month $22$ is the first to reach the target.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compute the exact cumulative total",
          "workingLatex": "S_{22} = 20(22)^2 + 480(22) = 9680 + 10560 = 20240",
          "explanation": "Substituting $n=22$ into the sum expression gives the exact running total for that month.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer",
          "workingLatex": "\\text{Month } 22, \\quad S_{22} = 20240",
          "explanation": "So cumulative production first reaches $20000$ units in month $22$, when the exact total is $20240$ units.",
          "diagram": null
        }
      ],
      "finalAnswer": "Month $22$; exact cumulative total $S_{22} = 20240$ units"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "simultaneous equations",
      "nth term"
    ],
    "questionText": "In an arithmetic sequence, the $4$th term is three times the first term, and the $6$th term is $13$. Form two equations in $a$ and $d$, and hence find the first term $a$ and the common difference $d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Every term of an arithmetic sequence is the first term $a$ plus a whole number of steps of size $d$. To reach the $n$th term you take $n-1$ steps, so $u_n = a + (n-1)d$. This is the tool that turns each worded clue into an equation in $a$ and $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the first condition",
          "workingLatex": "u_4 = a + 3d = 3a",
          "explanation": "The $4$th term is $a + 3d$, and we are told it equals three times the first term, which is $3a$. Setting these two descriptions of the same number equal to each other gives our first relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to Equation 1",
          "workingLatex": "3d = 2a \\quad\\Rightarrow\\quad 2a - 3d = 0",
          "explanation": "Subtracting $a$ from both sides of $a + 3d = 3a$ leaves $3d = 2a$. Rearranging into $2a - 3d = 0$ lines the unknowns up neatly, ready to be combined with the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Translate the second condition",
          "workingLatex": "u_6 = a + 5d = 13",
          "explanation": "The $6$th term is $a + 5d$, and we are told this equals $13$. This is Equation 2. Now we have two equations and two unknowns, so the system can be solved.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Prepare to eliminate a",
          "workingLatex": "2 \\times (a + 5d = 13) \\;\\Rightarrow\\; 2a + 10d = 26",
          "explanation": "Equation 1 contains $2a$, so if Equation 2 also contains $2a$ we can subtract to remove $a$ entirely. Doubling every term of Equation 2 keeps it true while creating that matching $2a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract to eliminate a",
          "workingLatex": "(2a + 10d) - (2a - 3d) = 26 - 0",
          "explanation": "Subtracting Equation 1 from the doubled Equation 2 cancels the $2a$ terms, leaving a single equation in $d$ only. Removing one unknown is exactly what lets us pin down the other.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "13d = 26",
          "explanation": "Collecting the $d$ terms gives $10d - (-3d) = 13d$, and the right-hand side is $26$. A single-variable equation like this is now trivial to solve.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for d",
          "workingLatex": "d = 2",
          "explanation": "Dividing both sides by $13$ isolates the common difference. So the sequence goes up in steps of $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute back to find a",
          "workingLatex": "a + 5(2) = 13 \\;\\Rightarrow\\; a + 10 = 13 \\;\\Rightarrow\\; a = 3",
          "explanation": "Putting $d = 2$ into Equation 2 turns it into a simple equation for $a$. Using the original equation to back-substitute guards against carrying an error forward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check and state the answer",
          "workingLatex": "u_4 = 3 + 3(2) = 9 = 3a, \\qquad u_6 = 3 + 5(2) = 13",
          "explanation": "Both conditions hold: the $4$th term $9$ is indeed three times the first term $3$, and the $6$th term is $13$. So $a = 3$ and $d = 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$ and $d = 2$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "simultaneous equations"
    ],
    "questionText": "In an arithmetic series, the sum of the first $8$ terms is $100$ and the sum of the first $16$ terms is $392$. Find the first term $a$ and the common difference $d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The sum of the first $n$ terms of an arithmetic series depends only on $a$, $d$ and $n$. Since we know two different sums, this formula lets us write two equations in the unknowns $a$ and $d$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the formula to the first 8 terms",
          "workingLatex": "S_8 = \\dfrac{8}{2}\\left[2a + 7d\\right] = 4(2a + 7d) = 100",
          "explanation": "Substituting $n = 8$ gives $\\tfrac{8}{2} = 4$ outside the bracket and $(n-1)d = 7d$ inside. Setting this equal to the given sum $100$ produces our first equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify to Equation 1",
          "workingLatex": "2a + 7d = 25",
          "explanation": "Dividing both sides of $4(2a + 7d) = 100$ by $4$ clears the constant factor and leaves a clean equation. Smaller numbers make the elimination step less error-prone.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the formula to the first 16 terms",
          "workingLatex": "S_{16} = \\dfrac{16}{2}\\left[2a + 15d\\right] = 8(2a + 15d) = 392",
          "explanation": "Substituting $n = 16$ gives $\\tfrac{16}{2} = 8$ and $(n-1)d = 15d$. Setting this equal to $392$ gives the second equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to Equation 2",
          "workingLatex": "2a + 15d = 49",
          "explanation": "Dividing $8(2a + 15d) = 392$ by $8$ gives $49$ on the right. Notice both equations now start with $2a$, which is exactly what we want for elimination.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract to eliminate a",
          "workingLatex": "(2a + 15d) - (2a + 7d) = 49 - 25",
          "explanation": "Because both equations contain $2a$, subtracting one from the other removes $a$ completely and leaves an equation in $d$ alone. Eliminating a variable is the key move in solving a linear system.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for d",
          "workingLatex": "8d = 24 \\;\\Rightarrow\\; d = 3",
          "explanation": "The $d$ terms give $15d - 7d = 8d$ and the constants give $24$. Dividing by $8$ shows the common difference is $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find a",
          "workingLatex": "2a + 7(3) = 25 \\;\\Rightarrow\\; 2a + 21 = 25",
          "explanation": "Putting $d = 3$ into Equation 1 turns it into a single equation for $a$. Using the simpler first equation keeps the arithmetic light.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for a",
          "workingLatex": "2a = 4 \\;\\Rightarrow\\; a = 2",
          "explanation": "Subtracting $21$ from both sides then dividing by $2$ isolates the first term, giving $a = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check and state the answer",
          "workingLatex": "S_8 = 4(4 + 21) = 100, \\qquad S_{16} = 8(4 + 45) = 392",
          "explanation": "Both given sums are reproduced exactly, so the values are consistent. The first term is $a = 2$ and the common difference is $d = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2$ and $d = 3$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "sum of terms",
      "simultaneous equations"
    ],
    "questionText": "In an arithmetic sequence, the $7$th term is $29$ and the sum of the first $7$ terms is $119$. Find the first term $a$ and the common difference $d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "The $n$th term is the first term plus $n-1$ steps of the common difference. This lets us turn the fact about the $7$th term into an equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write Equation 1 from the 7th term",
          "workingLatex": "u_7 = a + 6d = 29",
          "explanation": "Substituting $n = 7$ gives $(n-1)d = 6d$. Setting the $7$th term equal to $29$ produces our first equation linking $a$ and $d$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The sum of the first $n$ terms gives us a second, independent piece of information, which we will convert into a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the sum formula for 7 terms",
          "workingLatex": "S_7 = \\dfrac{7}{2}\\left[2a + 6d\\right] = 119",
          "explanation": "Substituting $n = 7$ gives $\\tfrac{7}{2}$ outside and $6d$ inside the bracket, and we set the result equal to the given sum $119$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to Equation 2",
          "workingLatex": "7(a + 3d) = 119 \\;\\Rightarrow\\; a + 3d = 17",
          "explanation": "The bracket $2a + 6d$ is twice $a + 3d$, so $\\tfrac{7}{2}\\times 2(a+3d) = 7(a+3d)$. Dividing $119$ by $7$ leaves the tidy Equation 2, $a + 3d = 17$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract to eliminate a",
          "workingLatex": "(a + 6d) - (a + 3d) = 29 - 17",
          "explanation": "Both equations contain a single $a$, so subtracting Equation 2 from Equation 1 removes $a$ and leaves an equation in $d$ only.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for d",
          "workingLatex": "3d = 12 \\;\\Rightarrow\\; d = 4",
          "explanation": "The difference of the $d$ terms is $6d - 3d = 3d$, equal to $12$. Dividing by $3$ gives the common difference $d = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find a",
          "workingLatex": "a + 3(4) = 17 \\;\\Rightarrow\\; a + 12 = 17",
          "explanation": "Putting $d = 4$ into Equation 2 gives a single equation for $a$. Back-substituting into the simplest equation minimises the chance of error.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for a",
          "workingLatex": "a = 5",
          "explanation": "Subtracting $12$ from both sides gives $a = 5$, the first term of the sequence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check and state the answer",
          "workingLatex": "u_7 = 5 + 6(4) = 29, \\qquad S_7 = 7(5 + 12) = 119",
          "explanation": "Both conditions are satisfied, confirming the solution. The first term is $a = 5$ and the common difference is $d = 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 5$ and $d = 4$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "common difference",
      "sum of terms"
    ],
    "questionText": "An arithmetic series has $20$ terms. Its first term is $5$ and its last term is $62$. Find the common difference $d$ and the sum of all $20$ terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known values",
          "workingLatex": "n = 20, \\quad a = 5, \\quad l = 62",
          "explanation": "Here $l$ denotes the last (that is, the $20$th) term. Writing the given information down first makes it clear which formulas can be applied.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Relate the last term to the nth term formula",
          "workingLatex": "l = a + (n-1)d",
          "explanation": "The last term of a finite arithmetic series is just its $n$th term. This equation connects the known first and last terms to the unknown common difference.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "62 = 5 + (20 - 1)d",
          "explanation": "Putting in $l = 62$, $a = 5$ and $n = 20$ leaves $d$ as the only unknown, so the equation can be solved directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "62 = 5 + 19d",
          "explanation": "There are $19$ gaps between the $1$st and $20$th terms, so the common difference is added $19$ times to get from $5$ up to $62$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for d",
          "workingLatex": "19d = 57 \\;\\Rightarrow\\; d = 3",
          "explanation": "Subtracting $5$ gives $19d = 57$, and dividing by $19$ gives $d = 3$. The sequence climbs in steps of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the first-and-last sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Since we know both the first and last terms, this version of the sum formula is quickest: it averages the first and last terms and multiplies by how many terms there are.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "S_{20} = \\dfrac{20}{2}(5 + 62)",
          "explanation": "Putting in $n = 20$, $a = 5$ and $l = 62$ turns the formula into a single arithmetic calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "S_{20} = 10 \\times 67",
          "explanation": "Half of $20$ is $10$, and the sum of the first and last terms is $67$. The product of these gives the total.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the sum",
          "workingLatex": "S_{20} = 670",
          "explanation": "Multiplying $10$ by $67$ gives $670$, the sum of all twenty terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 3, \\qquad S_{20} = 670",
          "explanation": "The common difference is $3$ and the sum of the $20$ terms is $670$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$ and $S_{20} = 670$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "nth term"
    ],
    "questionText": "The sum of the first $n$ terms of an arithmetic series is given by $S_n = 3n^2 - n$. Using $u_n = S_n - S_{n-1}$, find the first term $a$, the common difference $d$, an expression for the $n$th term $u_n$, and the value of the $10$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the key relationship",
          "workingLatex": "u_n = S_n - S_{n-1}",
          "explanation": "The sum $S_n$ is the running total up to the $n$th term, while $S_{n-1}$ is the running total up to the term before. Their difference is exactly the single term that was added last, namely $u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down S_n",
          "workingLatex": "S_n = 3n^2 - n",
          "explanation": "This is the given rule for the total of the first $n$ terms. We will use it twice: once as it stands and once with $n$ replaced by $n-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form S_(n-1) by replacing n with n-1",
          "workingLatex": "S_{n-1} = 3(n-1)^2 - (n-1)",
          "explanation": "To get the total up to the previous term, substitute $n-1$ everywhere $n$ appears. Keeping the brackets is essential so that the squaring and the sign are handled correctly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the squared bracket",
          "workingLatex": "3(n-1)^2 = 3(n^2 - 2n + 1) = 3n^2 - 6n + 3",
          "explanation": "Expanding $(n-1)^2$ gives $n^2 - 2n + 1$, and multiplying through by $3$ distributes the factor across every term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify S_(n-1)",
          "workingLatex": "S_{n-1} = 3n^2 - 6n + 3 - n + 1 = 3n^2 - 7n + 4",
          "explanation": "Subtracting $(n-1)$ means subtracting $n$ and adding $1$. Collecting like terms gives the tidy quadratic $3n^2 - 7n + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract to find u_n",
          "workingLatex": "u_n = (3n^2 - n) - (3n^2 - 7n + 4)",
          "explanation": "Now we apply the key relationship, subtracting the previous total from the current total. The bracket must be subtracted as a whole, so every sign inside flips.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the nth term",
          "workingLatex": "u_n = 3n^2 - n - 3n^2 + 7n - 4 = 6n - 4",
          "explanation": "The $3n^2$ terms cancel, and combining $-n + 7n$ gives $6n$. This leaves a linear expression, which is exactly what an arithmetic sequence should have.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the nth term expression",
          "workingLatex": "u_n = 6n - 4",
          "explanation": "A linear rule in $n$ confirms the sequence really is arithmetic: each unit increase in $n$ changes the term by the same amount.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the first term a",
          "workingLatex": "a = u_1 = 6(1) - 4 = 2",
          "explanation": "The first term is just $u_n$ evaluated at $n = 1$. As a safety check, $S_1 = 3(1)^2 - 1 = 2$ as well, and the first sum must equal the first term.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the common difference d",
          "workingLatex": "u_2 = 6(2) - 4 = 8, \\qquad d = u_2 - u_1 = 8 - 2 = 6",
          "explanation": "The common difference is the gap between consecutive terms. It also equals the coefficient of $n$ in $u_n = 6n - 4$, which is $6$, confirming the value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check with the standard form",
          "workingLatex": "a + (n-1)d = 2 + 6(n-1) = 6n - 4",
          "explanation": "Rebuilding the $n$th term from $a = 2$ and $d = 6$ reproduces $6n - 4$ exactly, so the first term and common difference are consistent with the derived expression.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute n = 10 for the 10th term",
          "workingLatex": "u_{10} = 6(10) - 4",
          "explanation": "To find a specific term we simply substitute its position into the formula for $u_n$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the 10th term",
          "workingLatex": "u_{10} = 60 - 4 = 56",
          "explanation": "Carrying out the multiplication then the subtraction gives the tenth term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all the answers",
          "workingLatex": "a = 2, \\quad d = 6, \\quad u_n = 6n - 4, \\quad u_{10} = 56",
          "explanation": "The first term is $2$, the common difference is $6$, the $n$th term is $6n - 4$, and the tenth term is $56$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2$, $d = 6$, $u_n = 6n - 4$, and $u_{10} = 56$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "quadratic equation"
    ],
    "questionText": "An arithmetic series has first term $a = 4$ and common difference $d = 5$. The sum of the first $n$ terms is $378$. Find the value of $n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The sum depends on the number of terms $n$. Since here $a$ and $d$ are known but $n$ is unknown, substituting will give a single equation in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute a = 4 and d = 5",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[8 + 5(n-1)\\right]",
          "explanation": "Replacing $2a$ with $8$ and $d$ with $5$ leaves an expression in $n$ only. This is the total after $n$ terms of this particular series.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}(5n + 3)",
          "explanation": "Inside the bracket, $8 + 5(n-1) = 8 + 5n - 5 = 5n + 3$. Tidying it now keeps the algebra manageable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the sum equal to 378",
          "workingLatex": "\\dfrac{n}{2}(5n + 3) = 378",
          "explanation": "We are told the total reaches $378$, so we equate our expression for $S_n$ to that value. This is the equation to solve for $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Clear the fraction",
          "workingLatex": "n(5n + 3) = 756",
          "explanation": "Multiplying both sides by $2$ removes the denominator, which makes the equation easier to expand into standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the left-hand side",
          "workingLatex": "5n^2 + 3n = 756",
          "explanation": "Multiplying out $n(5n + 3)$ gives a quadratic in $n$. This tells us the problem is genuinely quadratic, so we expect up to two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange to standard form",
          "workingLatex": "5n^2 + 3n - 756 = 0",
          "explanation": "Bringing every term to one side sets the quadratic equal to zero, which is the form required for the quadratic formula.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the coefficients",
          "workingLatex": "\\text{coefficients: } 5, \\; 3, \\; -756",
          "explanation": "Comparing with the standard quadratic $An^2 + Bn + C = 0$ gives $A = 5$, $B = 3$ and $C = -756$, ready to substitute into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the discriminant",
          "workingLatex": "B^2 - 4AC = 3^2 - 4(5)(-756) = 9 + 15120 = 15129",
          "explanation": "The discriminant decides how many real solutions there are and, if it is a perfect square, guarantees whole-number answers. Here it is positive, so two real roots exist.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Take the square root",
          "workingLatex": "\\sqrt{15129} = 123",
          "explanation": "Since $123^2 = 15129$, the discriminant is a perfect square. This is a strong sign the intended value of $n$ is a clean integer.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-3 \\pm 123}{2(5)} = \\dfrac{-3 \\pm 123}{10}",
          "explanation": "The quadratic formula $n = \\dfrac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$ gives both possible values of $n$ at once via the $\\pm$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Work out the two roots",
          "workingLatex": "n = \\dfrac{120}{10} = 12 \\qquad \\text{or} \\qquad n = \\dfrac{-126}{10} = -12.6",
          "explanation": "Taking the plus sign gives $12$; taking the minus sign gives $-12.6$. Only one of these can make sense as a number of terms.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the invalid root",
          "workingLatex": "n = -12.6 \\;\\text{ is rejected}",
          "explanation": "The number of terms must be a positive whole number, so a negative, non-integer value like $-12.6$ is impossible. We discard it and keep $n = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check and state the answer",
          "workingLatex": "S_{12} = \\dfrac{12}{2}(8 + 55) = 6 \\times 63 = 378",
          "explanation": "Substituting $n = 12$ back into the sum reproduces $378$, confirming the answer. So $n = 12$ terms are needed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 12$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic progression",
      "simultaneous equations",
      "quadratic equation"
    ],
    "questionText": "Three numbers are in arithmetic progression. Their sum is $30$ and the sum of their squares is $332$. By writing the three numbers as $a - d$, $a$, and $a + d$, find the three numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a symmetric representation",
          "workingLatex": "a - d, \\quad a, \\quad a + d",
          "explanation": "Centring the three terms on the middle value $a$ is a clever choice: the outer terms are equal distances $d$ below and above $a$. This symmetry makes the sum collapse neatly, as we will see.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum condition",
          "workingLatex": "(a - d) + a + (a + d) = 30",
          "explanation": "The first fact is that the three numbers add to $30$. Writing them in the symmetric form makes this equation easy to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the sum",
          "workingLatex": "3a = 30",
          "explanation": "The $-d$ and $+d$ cancel, leaving three copies of $a$. This is the payoff of the symmetric choice: the sum no longer involves $d$ at all.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for a",
          "workingLatex": "a = 10",
          "explanation": "Dividing by $3$ pins down the middle number immediately. Knowing $a$ before touching the squares keeps the next step simpler.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the sum-of-squares condition",
          "workingLatex": "(a - d)^2 + a^2 + (a + d)^2 = 332",
          "explanation": "The second fact is that the squares add to $332$. This will give us an equation for $d$ once we expand.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the outer squares",
          "workingLatex": "(a - d)^2 = a^2 - 2ad + d^2, \\qquad (a + d)^2 = a^2 + 2ad + d^2",
          "explanation": "Expanding each bracket produces matching $-2ad$ and $+2ad$ cross terms. Their symmetry is exactly what will cause them to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three squares",
          "workingLatex": "3a^2 + 2d^2 = 332",
          "explanation": "Summing gives $a^2 + a^2 + a^2 = 3a^2$, while the $\\pm 2ad$ terms cancel and the two $d^2$ terms add to $2d^2$. The equation now involves only $a^2$ and $d^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = 10",
          "workingLatex": "3(10)^2 + 2d^2 = 332 \\;\\Rightarrow\\; 300 + 2d^2 = 332",
          "explanation": "We already know $a = 10$, so $3a^2 = 300$. Substituting turns the equation into one for $d^2$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Isolate d squared",
          "workingLatex": "2d^2 = 32 \\;\\Rightarrow\\; d^2 = 16",
          "explanation": "Subtracting $300$ then dividing by $2$ leaves $d^2 = 16$. We are one square root away from the common difference.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for d",
          "workingLatex": "d = \\pm 4",
          "explanation": "Taking the square root gives two values. Both are valid: a positive $d$ lists the numbers in increasing order, a negative $d$ in decreasing order, but the set of numbers is the same.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Build the three numbers",
          "workingLatex": "a - d = 6, \\quad a = 10, \\quad a + d = 14",
          "explanation": "Using $a = 10$ and $d = 4$, the terms are $10 - 4 = 6$, $10$, and $10 + 4 = 14$. Choosing $d = -4$ would simply reverse the order.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the sum",
          "workingLatex": "6 + 10 + 14 = 30",
          "explanation": "The three numbers add to $30$, matching the first condition.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the sum of squares",
          "workingLatex": "6^2 + 10^2 + 14^2 = 36 + 100 + 196 = 332",
          "explanation": "The squares add to $332$, matching the second condition. Both requirements are satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "6, \\quad 10, \\quad 14",
          "explanation": "The three numbers in arithmetic progression are $6$, $10$ and $14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The three numbers are $6$, $10$ and $14$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "geometric sequence",
      "quadratic equation"
    ],
    "questionText": "In an arithmetic sequence the first term is $a = 8$. The $2$nd, $5$th and $9$th terms form, in that order, a geometric sequence. Given that the common difference $d$ is not zero, find $d$ and the values of these three terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the three terms using the nth term formula",
          "workingLatex": "u_2 = a + d, \\quad u_5 = a + 4d, \\quad u_9 = a + 8d",
          "explanation": "Each term of the arithmetic sequence is $a + (n-1)d$. Expressing the $2$nd, $5$th and $9$th terms this way lets us impose the geometric condition on them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the geometric condition",
          "workingLatex": "\\dfrac{u_5}{u_2} = \\dfrac{u_9}{u_5} \\;\\Rightarrow\\; u_5^2 = u_2 \\, u_9",
          "explanation": "In a geometric sequence, consecutive terms share a common ratio, so the middle term divided by the first equals the last divided by the middle. Cross-multiplying gives the neat 'middle squared equals product of the outer terms' relationship.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the arithmetic expressions",
          "workingLatex": "(a + 4d)^2 = (a + d)(a + 8d)",
          "explanation": "Replacing each term with its arithmetic form turns the geometric condition into a single equation in $a$ and $d$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the left-hand side",
          "workingLatex": "(a + 4d)^2 = a^2 + 8ad + 16d^2",
          "explanation": "Squaring the middle term gives $a^2$, twice the product $2\\cdot a \\cdot 4d = 8ad$, and $16d^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the right-hand side",
          "workingLatex": "(a + d)(a + 8d) = a^2 + 9ad + 8d^2",
          "explanation": "Multiplying out gives $a^2 + 8ad + ad + 8d^2$, and combining the middle terms gives $9ad$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the two sides equal",
          "workingLatex": "a^2 + 8ad + 16d^2 = a^2 + 9ad + 8d^2",
          "explanation": "Both expansions describe the same quantity, so we equate them. The matching $a^2$ terms hint that a lot will cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cancel and collect terms",
          "workingLatex": "16d^2 - 8d^2 = 9ad - 8ad \\;\\Rightarrow\\; 8d^2 = ad",
          "explanation": "Subtracting $a^2$ from both sides removes it, then gathering the $d^2$ terms on the left and the $ad$ terms on the right gives the compact relation $8d^2 = ad$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factorise",
          "workingLatex": "8d^2 - ad = 0 \\;\\Rightarrow\\; d(8d - a) = 0",
          "explanation": "Bringing everything to one side reveals a common factor of $d$. A product equal to zero means one of the factors must be zero, giving two possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the condition d is not zero",
          "workingLatex": "d \\neq 0 \\;\\Rightarrow\\; 8d - a = 0 \\;\\Rightarrow\\; d = \\dfrac{a}{8}",
          "explanation": "The factor $d = 0$ would make every term equal, a degenerate case we are told to exclude. So the other factor must vanish, giving $d = \\dfrac{a}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute a = 8",
          "workingLatex": "d = \\dfrac{8}{8} = 1",
          "explanation": "Using the given first term $a = 8$ gives a common difference of exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the 2nd term",
          "workingLatex": "u_2 = 8 + 1 = 9",
          "explanation": "Substituting $a = 8$ and $d = 1$ into $u_2 = a + d$ gives the first of the three geometric terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the 5th term",
          "workingLatex": "u_5 = 8 + 4(1) = 12",
          "explanation": "Using $u_5 = a + 4d$ gives the middle term of the geometric sequence.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Find the 9th term",
          "workingLatex": "u_9 = 8 + 8(1) = 16",
          "explanation": "Using $u_9 = a + 8d$ gives the last of the three terms.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the geometric property",
          "workingLatex": "\\dfrac{12}{9} = \\dfrac{4}{3}, \\qquad \\dfrac{16}{12} = \\dfrac{4}{3}",
          "explanation": "The ratio of consecutive terms is $\\tfrac{4}{3}$ both times, so $9, 12, 16$ genuinely form a geometric sequence. Equivalently, $12^2 = 144 = 9 \\times 16$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer",
          "workingLatex": "d = 1; \\quad 9, \\; 12, \\; 16",
          "explanation": "The common difference is $d = 1$, and the three terms are $9$, $12$ and $16$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 1$; the three terms are $9$, $12$ and $16$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "quadratic inequality"
    ],
    "questionText": "Consider the arithmetic series $3 + 7 + 11 + \\ldots$. Find the least number of terms required for the sum to exceed $500$, and state the value of that sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify a and d",
          "workingLatex": "a = 3, \\qquad d = 7 - 3 = 4",
          "explanation": "The first term is $3$, and each term increases by the same amount, found by subtracting one term from the next: $7 - 3 = 4$. These two numbers define the whole series.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "We need a formula for the running total after $n$ terms so we can decide when it passes $500$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute a = 3 and d = 4",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[6 + 4(n-1)\\right]",
          "explanation": "Replacing $2a$ with $6$ and $d$ with $4$ leaves the sum as a function of $n$ only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}(4n + 2)",
          "explanation": "Inside the bracket, $6 + 4(n-1) = 6 + 4n - 4 = 4n + 2$. Simplifying now makes the next step cleaner.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reduce to a neat expression",
          "workingLatex": "S_n = n(2n + 1) = 2n^2 + n",
          "explanation": "Half of $4n + 2$ is $2n + 1$, so $S_n = n(2n+1)$. Expanding gives the quadratic $2n^2 + n$, which we can compare against $500$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the inequality",
          "workingLatex": "2n^2 + n > 500",
          "explanation": "'The sum exceeds $500$' means $S_n$ is strictly greater than $500$. This is a quadratic inequality in the number of terms $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the boundary equation",
          "workingLatex": "2n^2 + n - 500 = 0",
          "explanation": "The sum equals $500$ exactly at the boundary. Solving this equation locates the changeover point, and the smallest whole number beyond it is our answer.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Apply the quadratic formula",
          "workingLatex": "n = \\dfrac{-1 \\pm \\sqrt{1^2 - 4(2)(-500)}}{2(2)} = \\dfrac{-1 \\pm \\sqrt{4001}}{4}",
          "explanation": "With $A = 2$, $B = 1$ and $C = -500$, the discriminant is $1 + 4000 = 4001$. The quadratic formula gives the exact boundary values of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the positive root",
          "workingLatex": "\\sqrt{4001} \\approx 63.25 \\;\\Rightarrow\\; n \\approx \\dfrac{-1 + 63.25}{4} \\approx 15.56",
          "explanation": "The number of terms must be positive, so we take the plus sign. The boundary sits at about $15.56$ terms, which is not a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Round up to the next whole number",
          "workingLatex": "n > 15.56 \\;\\Rightarrow\\; n = 16",
          "explanation": "Because the sum grows as we add terms, we need $n$ larger than $15.56$. The smallest whole number satisfying this is $16$, so $16$ terms is the candidate.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check that 15 terms is not enough",
          "workingLatex": "S_{15} = 2(15)^2 + 15 = 450 + 15 = 465",
          "explanation": "With $15$ terms the sum is $465$, which is below $500$. This confirms $15$ terms fall short, so we do need more.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check that 16 terms exceeds 500",
          "workingLatex": "S_{16} = 2(16)^2 + 16 = 512 + 16 = 528",
          "explanation": "With $16$ terms the sum is $528$, which is above $500$. So $16$ is exactly where the total first passes $500$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm 16 is the least value",
          "workingLatex": "S_{15} = 465 < 500 < 528 = S_{16}",
          "explanation": "Since $15$ terms undershoot and $16$ terms overshoot, $16$ is genuinely the least number of terms needed. There is no whole number in between.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer",
          "workingLatex": "n = 16, \\qquad S_{16} = 528",
          "explanation": "The least number of terms for the sum to exceed $500$ is $16$, and that sum is $528$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$16$ terms are needed, giving a sum of $528$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "sum of terms",
      "nth term"
    ],
    "questionText": "In an arithmetic series, the sum of the first $30$ terms is $1500$ and the $30$th term is $79$. Find the first term $a$ and the common difference $d$, and hence find the $50$th term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the first-and-last sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "We know both a sum and a specific term, so the version of the sum formula that uses the last term $l$ is ideal. Here the '$30$th term' plays the role of the last term of the first $30$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known sum and 30th term",
          "workingLatex": "S_{30} = \\dfrac{30}{2}(a + 79) = 1500",
          "explanation": "With $n = 30$ and last term $l = u_{30} = 79$, the formula becomes an equation with $a$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "15(a + 79) = 1500",
          "explanation": "Half of $30$ is $15$, so the equation reduces to $15$ times the bracket. Dividing next will isolate the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide by 15",
          "workingLatex": "a + 79 = 100",
          "explanation": "Dividing both sides by $15$ gives a simple linear equation for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for a",
          "workingLatex": "a = 100 - 79 = 21",
          "explanation": "Subtracting $79$ gives the first term $a = 21$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Now that $a$ is known, the fact about the $30$th term will give us $d$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply it to the 30th term",
          "workingLatex": "u_{30} = a + 29d = 79",
          "explanation": "Substituting $n = 30$ gives $(n-1)d = 29d$, and we know this term equals $79$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute a = 21",
          "workingLatex": "21 + 29d = 79",
          "explanation": "Using the value of $a$ found earlier leaves $d$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange",
          "workingLatex": "29d = 58",
          "explanation": "Subtracting $21$ from both sides isolates the term containing $d$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for d",
          "workingLatex": "d = 2",
          "explanation": "Dividing by $29$ gives the common difference $d = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Set up the 50th term",
          "workingLatex": "u_{50} = a + 49d",
          "explanation": "The $50$th term is $49$ steps of size $d$ beyond the first term. With $a$ and $d$ known, this is a direct calculation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute a = 21 and d = 2",
          "workingLatex": "u_{50} = 21 + 49(2)",
          "explanation": "Putting in the values turns the formula into a single arithmetic computation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate",
          "workingLatex": "u_{50} = 21 + 98 = 119",
          "explanation": "Multiplying then adding gives the fiftieth term.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check and state the answer",
          "workingLatex": "S_{30} = 15(21 + 79) = 15 \\times 100 = 1500",
          "explanation": "The sum check reproduces $1500$, confirming $a$ and $d$. So $a = 21$, $d = 2$, and the $50$th term is $119$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 21$, $d = 2$, and $u_{50} = 119$"
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic means",
      "arithmetic sequences",
      "common difference"
    ],
    "questionText": "Insert four arithmetic means between $3$ and $28$, so that the six numbers together form an arithmetic sequence. List the four means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what inserting means does",
          "workingLatex": "3,\\ ?,\\ ?,\\ ?,\\ ?,\\ 28 \\quad (6\\ \\text{terms})",
          "explanation": "Inserting four numbers between $3$ and $28$ so the whole list is arithmetic means we build a single sequence with $3$ as the first term and $28$ as the sixth term. The four unknown 'means' are just the terms sitting in positions $2$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the known quantities",
          "workingLatex": "a = 3, \\quad l = 28, \\quad n = 6",
          "explanation": "The first term is $a = 3$ and the last (sixth) term is $l = 28$. Because there are six terms in total, $n = 6$. Writing these down turns the puzzle into a standard sequence problem.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the nth term relationship",
          "workingLatex": "l = a + (n-1)d",
          "explanation": "The last term is reached from the first by adding the common difference $d$ a fixed number of times. Getting from term $1$ to term $6$ takes $n-1 = 5$ equal steps, and this formula captures exactly that.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "28 = 3 + (6-1)d",
          "explanation": "Replacing $l$, $a$ and $n$ turns the general rule into a single equation whose only unknown is the common difference we need.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the equation",
          "workingLatex": "28 = 3 + 5d",
          "explanation": "There are five gaps between the six terms, so the difference $d$ is added five times as we travel from $3$ to $28$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the common difference",
          "workingLatex": "25 = 5d \\;\\Rightarrow\\; d = 5",
          "explanation": "Subtracting $3$ from both sides isolates the $5d$ term, and dividing by $5$ shares the total rise of $25$ equally across the five steps, giving $d = 5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Build the second and third terms",
          "workingLatex": "3 + 5 = 8, \\qquad 8 + 5 = 13",
          "explanation": "Now that each step is worth $5$, we generate the sequence simply by repeatedly adding $5$. The first two inserted numbers are $8$ and $13$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Build the fourth and fifth terms",
          "workingLatex": "13 + 5 = 18, \\qquad 18 + 5 = 23",
          "explanation": "Continuing to add $5$ produces the remaining two means, $18$ and $23$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the sequence ends correctly",
          "workingLatex": "3,\\ 8,\\ 13,\\ 18,\\ 23,\\ 28",
          "explanation": "Adding one more step, $23 + 5 = 28$, lands exactly on the given final term. This confirms the common difference is right and no arithmetic slipped.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the four means",
          "workingLatex": "8,\\ 13,\\ 18,\\ 23",
          "explanation": "The four numbers placed between $3$ and $28$ are $8$, $13$, $18$ and $23$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The four arithmetic means are $8,\\ 13,\\ 18,\\ 23$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "sum",
      "simultaneous reasoning"
    ],
    "questionText": "Five numbers form an arithmetic sequence. Their sum is $40$ and the largest of the five is $12$. Find all five numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Represent the five terms",
          "workingLatex": "a,\\ a+d,\\ a+2d,\\ a+3d,\\ a+4d",
          "explanation": "Any arithmetic sequence is built from a first term $a$ and a common difference $d$. Writing the five terms this way lets us translate the two facts we are given into equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the five terms",
          "workingLatex": "a + (a+d) + (a+2d) + (a+3d) + (a+4d) = 40",
          "explanation": "The word 'sum' tells us to add all five expressions and set the result equal to $40$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Collect like terms",
          "workingLatex": "5a + 10d = 40",
          "explanation": "There are five $a$ terms, and the multiples of $d$ add to $0+1+2+3+4 = 10$. This tidies the sum into a single linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide through to simplify",
          "workingLatex": "a + 2d = 8",
          "explanation": "Dividing by $5$ gives the neat statement that $a + 2d = 8$. Notice $a + 2d$ is the middle (third) term, so this is just saying the middle term equals the average $40 \\div 5 = 8$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the fact about the largest term",
          "workingLatex": "a + 4d = 12",
          "explanation": "In an increasing arithmetic sequence the largest term is the last one, $a + 4d$. Setting it equal to $12$ gives a second equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the equations",
          "workingLatex": "(a+4d) - (a+2d) = 12 - 8",
          "explanation": "Subtracting cancels the $a$ terms, leaving only $d$. This is the quickest route because both equations share the same first term.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the common difference",
          "workingLatex": "2d = 4 \\;\\Rightarrow\\; d = 2",
          "explanation": "The difference between the middle term and the largest term spans two steps, so $2d = 4$, giving $d = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the first term",
          "workingLatex": "a + 2(2) = 8 \\;\\Rightarrow\\; a = 4",
          "explanation": "Substituting $d = 2$ back into $a + 2d = 8$ isolates $a$, giving a first term of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "List the five numbers",
          "workingLatex": "4,\\ 6,\\ 8,\\ 10,\\ 12",
          "explanation": "Starting at $4$ and adding $2$ each time generates the full sequence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check both conditions",
          "workingLatex": "4+6+8+10+12 = 40, \\qquad \\text{largest} = 12",
          "explanation": "The five numbers add to $40$ and the biggest is $12$, so both given facts are satisfied and the answer is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "The five numbers are $4,\\ 6,\\ 8,\\ 10,\\ 12$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "proof",
      "sum of series",
      "arithmetic series"
    ],
    "questionText": "Prove that the sum of the first $n$ terms of an arithmetic series with first term $a$ and common difference $d$ is $S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the quantity to be summed",
          "workingLatex": "S_n = u_1 + u_2 + u_3 + \\cdots + u_n",
          "explanation": "Let $S_n$ stand for the total of the first $n$ terms. Naming the sum first gives us something concrete to manipulate throughout the proof.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the last term",
          "workingLatex": "l = u_n = a + (n-1)d",
          "explanation": "It helps to give the final term a short name, $l$. From the nth term formula it equals $a + (n-1)d$; we will use both $l$ and its expanded form later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum forwards",
          "workingLatex": "S_n = a + (a+d) + (a+2d) + \\cdots + l",
          "explanation": "Writing the series in full, starting from the first term and increasing by $d$ each time, sets up the clever step to come.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the same sum backwards",
          "workingLatex": "S_n = l + (l-d) + (l-2d) + \\cdots + a",
          "explanation": "The sum is unchanged if we add the terms in reverse order, starting from the last term $l$ and decreasing by $d$. This second copy is the heart of the argument.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Prepare to add the two rows",
          "workingLatex": "2S_n = (a + l) + \\big[(a+d)+(l-d)\\big] + \\cdots",
          "explanation": "Adding the forwards and backwards versions column by column will double the sum on the left. The point is that each column on the right simplifies beautifully.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the first column",
          "workingLatex": "a + l",
          "explanation": "Pairing the first term of each row gives $a + l$. This is our target pair value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the second column",
          "workingLatex": "(a+d) + (l-d) = a + l",
          "explanation": "In the second column the $+d$ and the $-d$ cancel, again leaving $a + l$. The rising and falling changes exactly balance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the third column",
          "workingLatex": "(a+2d) + (l-2d) = a + l",
          "explanation": "The same cancellation happens: $+2d$ meets $-2d$. Every column is guaranteed to collapse to $a + l$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Generalise the column result",
          "workingLatex": "\\text{each column} = a + l",
          "explanation": "For any column, the amount added to one row is exactly the amount subtracted from the other, so all differences vanish and every column is $a + l$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Count the columns",
          "workingLatex": "2S_n = n(a + l)",
          "explanation": "There are $n$ terms in each row, hence $n$ columns, and each contributes $a + l$. So twice the sum equals $n$ copies of $a + l$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Divide by two",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Halving both sides recovers the single sum. This is already a valid formula for $S_n$ in terms of the first and last terms.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the last term",
          "workingLatex": "l = a + (n-1)d",
          "explanation": "To express the sum using only $a$, $d$ and $n$, we replace $l$ with its formula from Step 2.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the paired sum",
          "workingLatex": "a + l = a + \\big[a + (n-1)d\\big] = 2a + (n-1)d",
          "explanation": "Combining the two $a$ terms gives $2a$, and the $(n-1)d$ carries through unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Assemble the final formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "Substituting this expression for $a + l$ into the halved sum produces the required formula.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude the proof",
          "workingLatex": "\\therefore\\ S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right] \\quad \\blacksquare",
          "explanation": "The reverse-and-add argument has shown the identity holds for every positive integer $n$, completing the proof.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "polygon angles",
      "quadratic"
    ],
    "questionText": "The interior angles of a polygon are in arithmetic progression. The smallest angle is $120^\\circ$ and the common difference is $5^\\circ$. Using the fact that the interior angles of an $n$-sided polygon sum to $(n-2)\\times 180^\\circ$, form a quadratic equation in $n$ and hence find the number of sides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the arithmetic progression",
          "workingLatex": "a = 120, \\quad d = 5",
          "explanation": "The angles increase by a constant $5^\\circ$, so they form an arithmetic sequence with first term $a = 120$ and common difference $d = 5$. An $n$-sided polygon has $n$ angles, so there are $n$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sum of the angles",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The total of the interior angles is the sum of this arithmetic sequence, so we use the standard sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(120) + (n-1)5\\right]",
          "explanation": "Putting $a = 120$ and $d = 5$ into the formula expresses the angle sum purely in terms of the number of sides $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify inside the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[240 + 5n - 5\\right] = \\dfrac{n}{2}(235 + 5n)",
          "explanation": "Expanding $2(120) = 240$ and $(n-1)5 = 5n - 5$, then combining the constants $240 - 5 = 235$, tidies the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the polygon angle sum",
          "workingLatex": "S_n = (n-2)\\times 180",
          "explanation": "Independently, geometry tells us the interior angles of any $n$-sided polygon add to $(n-2)\\times 180^\\circ$. This gives a second expression for the same total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Equate the two expressions",
          "workingLatex": "\\dfrac{n}{2}(235 + 5n) = 180(n-2)",
          "explanation": "Both sides describe the sum of the angles, so they must be equal. This single equation now determines $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the right-hand side",
          "workingLatex": "\\dfrac{n}{2}(235 + 5n) = 180n - 360",
          "explanation": "Multiplying out $180(n-2)$ prepares the equation for clearing the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by 2",
          "workingLatex": "n(235 + 5n) = 360n - 720",
          "explanation": "Doubling both sides removes the fraction, which keeps the algebra clean and avoids working with halves.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the left-hand side",
          "workingLatex": "235n + 5n^2 = 360n - 720",
          "explanation": "Distributing $n$ across the bracket produces the quadratic terms we need.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Move everything to one side",
          "workingLatex": "5n^2 + 235n - 360n + 720 = 0",
          "explanation": "Collecting all terms on the left sets the equation to zero, ready to solve as a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the quadratic",
          "workingLatex": "5n^2 - 125n + 720 = 0",
          "explanation": "Combining the $n$ terms, $235n - 360n = -125n$, gives a tidy quadratic in $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Divide by the common factor",
          "workingLatex": "n^2 - 25n + 144 = 0",
          "explanation": "Every coefficient is divisible by $5$, so dividing through makes factorising much easier.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Factorise the quadratic",
          "workingLatex": "(n - 9)(n - 16) = 0",
          "explanation": "We need two numbers multiplying to $144$ and adding to $25$; these are $9$ and $16$, giving the factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Read off the two roots",
          "workingLatex": "n = 9 \\quad \\text{or} \\quad n = 16",
          "explanation": "Both roots are positive whole numbers, so neither can be dismissed just for being an impossible count. We must test each against the geometry.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the larger root",
          "workingLatex": "n = 16:\\quad \\text{largest} = 120 + (16-1)5 = 195^\\circ",
          "explanation": "For $n = 16$ the biggest angle would be $195^\\circ$. An interior angle of a simple polygon must be less than $180^\\circ$, so $n = 16$ is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Test the smaller root",
          "workingLatex": "n = 9:\\quad \\text{largest} = 120 + (9-1)5 = 160^\\circ",
          "explanation": "For $n = 9$ the largest angle is $160^\\circ$, and since the angles run $120^\\circ, 125^\\circ, \\ldots, 160^\\circ$, every one lies below $180^\\circ$. This root is valid.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "State the number of sides",
          "workingLatex": "n = 9",
          "explanation": "Only $n = 9$ keeps all interior angles under $180^\\circ$, so the polygon has $9$ sides.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 9$ (a nine-sided polygon), rejecting $n = 16$ because it forces an angle of $195^\\circ > 180^\\circ$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "sum",
      "simultaneous equations"
    ],
    "questionText": "In an arithmetic sequence the third term is $8$ and the sum of the first six terms is $57$. Find the first term $a$ and the common difference $d$, and hence find the tenth term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Each term is the first term plus a whole number of common differences. We will use this to turn the '$3$rd term' fact into an equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the third-term condition",
          "workingLatex": "u_3 = a + 2d = 8",
          "explanation": "The third term takes two steps of size $d$ from the first term, so $a + 2d = 8$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The 'sum of the first six terms' fact needs the sum formula, so we quote it before substituting.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute n = 6",
          "workingLatex": "S_6 = \\dfrac{6}{2}\\left[2a + 5d\\right] = 3(2a + 5d)",
          "explanation": "Putting $n = 6$ gives $\\tfrac{6}{2} = 3$ outside the bracket and $(n-1)d = 5d$ inside.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the sum equal to 57",
          "workingLatex": "3(2a + 5d) = 57",
          "explanation": "The problem states this sum is $57$, giving an equation linking $a$ and $d$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the sum equation",
          "workingLatex": "2a + 5d = 19",
          "explanation": "Dividing both sides by $3$ removes the factor and leaves a clean linear equation. Call this equation (2).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make a the subject of equation (1)",
          "workingLatex": "a = 8 - 2d",
          "explanation": "Rearranging equation (1) lets us substitute for $a$ and reduce the problem to one unknown.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into equation (2)",
          "workingLatex": "2(8 - 2d) + 5d = 19",
          "explanation": "Replacing $a$ in equation (2) with $8 - 2d$ produces an equation in $d$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand the bracket",
          "workingLatex": "16 - 4d + 5d = 19",
          "explanation": "Multiplying out $2(8 - 2d)$ gives $16 - 4d$, ready to combine with the $+5d$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for d",
          "workingLatex": "16 + d = 19 \\;\\Rightarrow\\; d = 3",
          "explanation": "Combining $-4d + 5d = d$ and subtracting $16$ isolates the common difference as $d = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the first term",
          "workingLatex": "a = 8 - 2(3) = 2",
          "explanation": "Substituting $d = 3$ back into $a = 8 - 2d$ gives the first term $a = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check against the sum",
          "workingLatex": "2 + 5 + 8 + 11 + 14 + 17 = 57",
          "explanation": "Listing the first six terms with $a = 2$, $d = 3$ and adding confirms the total is $57$, so the values are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the tenth term",
          "workingLatex": "u_{10} = a + 9d = 2 + 9(3)",
          "explanation": "The tenth term is nine steps of $d$ beyond the first term, so we substitute $a = 2$ and $d = 3$ with $n = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the tenth term",
          "workingLatex": "u_{10} = 2 + 27 = 29",
          "explanation": "Working out $9 \\times 3 = 27$ and adding the first term gives the tenth term.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "a = 2, \\quad d = 3, \\quad u_{10} = 29",
          "explanation": "The first term is $2$, the common difference is $3$, and the tenth term is $29$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2,\\ d = 3$ and $u_{10} = 29$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "arithmetic series",
      "triangular numbers",
      "quadratic"
    ],
    "questionText": "Cans are stacked so that the top row has $1$ can, the second row has $2$ cans, and in general the $k$th row has $k$ cans. The stack contains $210$ cans in total. Find the number of rows.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the pattern as a series",
          "workingLatex": "1 + 2 + 3 + \\cdots + n = 210",
          "explanation": "If there are $n$ rows, the row counts $1, 2, 3, \\ldots, n$ add up to the total number of cans. These counts form an arithmetic sequence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the sequence parameters",
          "workingLatex": "a = 1, \\quad d = 1",
          "explanation": "The first row has $1$ can and each row has one more than the last, so the first term is $1$ and the common difference is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right]",
          "explanation": "The total number of cans is the sum of the first $n$ terms, so we use the arithmetic sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute a and d",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2(1) + (n-1)(1)\\right]",
          "explanation": "Putting $a = 1$ and $d = 1$ into the formula gives the sum purely in terms of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the bracket",
          "workingLatex": "S_n = \\dfrac{n}{2}(n + 1)",
          "explanation": "Inside the bracket $2 + (n-1) = n + 1$, giving the familiar triangular-number formula $\\tfrac{n(n+1)}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set the total to 210",
          "workingLatex": "\\dfrac{n(n+1)}{2} = 210",
          "explanation": "The stack holds $210$ cans, so the sum equals $210$. Now we solve for the number of rows $n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Clear the fraction",
          "workingLatex": "n(n+1) = 420",
          "explanation": "Multiplying both sides by $2$ removes the denominator and gives a cleaner equation to work with.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange into a quadratic",
          "workingLatex": "n^2 + n - 420 = 0",
          "explanation": "Expanding and bringing everything to one side puts the equation in standard quadratic form, ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Look for a factor pair",
          "workingLatex": "20 \\times 21 = 420, \\quad 21 - 20 = 1",
          "explanation": "We need two numbers whose product is $420$ and whose difference is $1$ (to give the $+n$ term). The pair $20$ and $21$ works.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "(n - 20)(n + 21) = 0",
          "explanation": "Using that factor pair, the quadratic splits into two brackets whose product is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for n",
          "workingLatex": "n = 20 \\quad \\text{or} \\quad n = -21",
          "explanation": "Setting each bracket to zero gives the two possible values of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Reject the impossible root",
          "workingLatex": "n = -21 \\ \\text{is rejected}",
          "explanation": "The number of rows must be a positive whole number, so the negative solution has no physical meaning and is discarded.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the valid root",
          "workingLatex": "\\dfrac{20 \\times 21}{2} = 210",
          "explanation": "Checking $n = 20$ back in the sum gives exactly $210$ cans, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the number of rows",
          "workingLatex": "n = 20",
          "explanation": "The stack is built from $20$ complete rows.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n = 20$ rows."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "proof",
      "nth term",
      "arithmetic sequences"
    ],
    "questionText": "In an arithmetic sequence the $p$th term is equal to $q$ and the $q$th term is equal to $p$, where $p \\neq q$. Prove that the $(p+q)$th term is $0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the nth term formula",
          "workingLatex": "u_n = a + (n-1)d",
          "explanation": "Every term of an arithmetic sequence is the first term $a$ plus $(n-1)$ common differences. This formula is the tool that turns the two conditions into equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Translate the first condition",
          "workingLatex": "a + (p-1)d = q",
          "explanation": "The $p$th term equals $q$, so substituting $n = p$ into the formula and setting it equal to $q$ gives equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate the second condition",
          "workingLatex": "a + (q-1)d = p",
          "explanation": "Similarly the $q$th term equals $p$, giving equation (2) with $n = q$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract equation (2) from equation (1)",
          "workingLatex": "\\left[(p-1) - (q-1)\\right]d = q - p",
          "explanation": "Subtracting eliminates the first term $a$, leaving an equation that involves only the common difference $d$. This is the key move.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the coefficient of d",
          "workingLatex": "(p - q)d = q - p",
          "explanation": "The brackets simplify because $(p-1) - (q-1) = p - q$. The right-hand side stays as $q - p$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the right-hand side",
          "workingLatex": "(p - q)d = -(p - q)",
          "explanation": "Noticing that $q - p = -(p - q)$ makes the common factor $(p - q)$ appear on both sides, which is exactly what we want.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by the non-zero factor",
          "workingLatex": "d = -1",
          "explanation": "Because we are told $p \\neq q$, the factor $p - q$ is not zero, so we may divide both sides by it. This gives the common difference $d = -1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute d back into equation (1)",
          "workingLatex": "a + (p-1)(-1) = q",
          "explanation": "Now that $d$ is known, put it into equation (1) to find the first term $a$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand and simplify",
          "workingLatex": "a - p + 1 = q",
          "explanation": "Multiplying $(p-1)$ by $-1$ gives $-p + 1$, which we can now rearrange for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the first term",
          "workingLatex": "a = p + q - 1",
          "explanation": "Adding $p$ and subtracting $1$ from both sides makes $a$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the (p+q)th term",
          "workingLatex": "u_{p+q} = a + (p+q-1)d",
          "explanation": "To reach the term we are asked about, substitute $n = p + q$ into the nth term formula.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute a and d",
          "workingLatex": "u_{p+q} = (p+q-1) + (p+q-1)(-1)",
          "explanation": "Replacing $a$ with $p+q-1$ and $d$ with $-1$ gives an expression in $p$ and $q$ only.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "u_{p+q} = (p+q-1) - (p+q-1) = 0",
          "explanation": "The two identical quantities cancel exactly, leaving zero. Notice that $a$ and the multiple of $d$ were designed to be equal and opposite.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "\\therefore\\ u_{p+q} = 0 \\quad \\blacksquare",
          "explanation": "The $(p+q)$th term is $0$, exactly as required, so the statement is proved.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: the $(p+q)$th term is $0$ (since $d = -1$ and $a = p + q - 1$)."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "proof",
      "odd numbers",
      "arithmetic series"
    ],
    "questionText": "Show that the sum of the first $n$ odd numbers, $1 + 3 + 5 + \\cdots + (2n-1)$, is equal to $n^2$, by treating it as an arithmetic series.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the series is arithmetic",
          "workingLatex": "1,\\ 3,\\ 5,\\ 7,\\ \\ldots,\\ (2n-1)",
          "explanation": "The odd numbers go up in equal jumps, so their sum is an arithmetic series. We can therefore apply the arithmetic sum formula rather than guessing.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the first term",
          "workingLatex": "a = 1",
          "explanation": "The first odd number is $1$, so the first term of the series is $a = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the common difference",
          "workingLatex": "d = 3 - 1 = 2",
          "explanation": "Consecutive odd numbers differ by $2$ (for example $5 - 3 = 2$), so the common difference is $d = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the general term",
          "workingLatex": "u_k = 1 + (k-1)2 = 2k - 1",
          "explanation": "Checking the nth term formula gives $2k - 1$, which is exactly the $k$th odd number, so our $a$ and $d$ are consistent with the stated last term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the last term and count",
          "workingLatex": "l = 2n - 1, \\quad \\text{number of terms} = n",
          "explanation": "The series stops at the $n$th odd number, $2n - 1$, so there are $n$ terms in total, with last term $l = 2n - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the first-and-last sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Because we know the first and last terms, the neatest form of the sum formula pairs them together.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "S_n = \\dfrac{n}{2}\\big(1 + (2n - 1)\\big)",
          "explanation": "Putting $a = 1$ and $l = 2n - 1$ into the formula sets up the final simplification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the bracket",
          "workingLatex": "1 + (2n - 1) = 2n",
          "explanation": "The $+1$ and $-1$ cancel, leaving simply $2n$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the factors",
          "workingLatex": "S_n = \\dfrac{n}{2} \\times 2n",
          "explanation": "Substituting $2n$ back in gives a product of $\\tfrac{n}{2}$ and $2n$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reach the result",
          "workingLatex": "S_n = n \\times n = n^2",
          "explanation": "The $2$ in the numerator cancels the $2$ in the denominator, leaving $n \\times n = n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Cross-check with the other sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}\\left[2a + (n-1)d\\right] = \\dfrac{n}{2}\\left[2 + (n-1)2\\right]",
          "explanation": "As a safeguard we repeat the calculation with the $a$-and-$d$ form of the formula, substituting $a = 1$ and $d = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the check",
          "workingLatex": "\\dfrac{n}{2}\\left[2 + 2n - 2\\right] = \\dfrac{n}{2}(2n)",
          "explanation": "Inside the bracket $2 - 2 = 0$, leaving $2n$, exactly as before.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the same answer",
          "workingLatex": "\\dfrac{n}{2}(2n) = n^2",
          "explanation": "The second method gives $n^2$ too, so both routes agree.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Conclude the proof",
          "workingLatex": "1 + 3 + 5 + \\cdots + (2n-1) = n^2 \\quad \\blacksquare",
          "explanation": "The sum of the first $n$ odd numbers is $n^2$, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Proved: $1 + 3 + 5 + \\cdots + (2n-1) = n^2$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "modelling",
      "arithmetic series",
      "sum"
    ],
    "questionText": "Each week a saver deposits an amount that increases by the same fixed sum every week, forming an arithmetic sequence. Over $12$ weeks the total saved is $\\pounds 192$, and the deposit in the final ($12$th) week is $\\pounds 27$. Find the first deposit and the weekly increase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the model",
          "workingLatex": "u_1 = a, \\quad d = \\text{weekly increase}",
          "explanation": "The weekly deposits form an arithmetic sequence: the first deposit is $a$ and each week adds a fixed extra amount $d$. These are the two quantities we must find.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the final week as an nth term",
          "workingLatex": "u_{12} = a + 11d = 27",
          "explanation": "The $12$th week's deposit is the $12$th term. From the first term it is $11$ increases later, so $a + 11d = 27$. Call this equation (1).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the total saved",
          "workingLatex": "S_{12} = 192",
          "explanation": "Adding all twelve deposits gives the total amount saved, which is $\\pounds 192$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the first-and-last sum formula",
          "workingLatex": "S_n = \\dfrac{n}{2}(a + l)",
          "explanation": "Since we already know the last term $l = u_{12} = 27$, the pairing form of the sum formula is the most direct choice.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values",
          "workingLatex": "S_{12} = \\dfrac{12}{2}(a + 27) = 6(a + 27)",
          "explanation": "Putting $n = 12$ and $l = 27$ gives $\\tfrac{12}{2} = 6$ outside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form an equation for a",
          "workingLatex": "6(a + 27) = 192",
          "explanation": "Setting the sum equal to the total of $192$ produces an equation whose only unknown is the first deposit $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by 6",
          "workingLatex": "a + 27 = 32",
          "explanation": "Dividing both sides by $6$ isolates the bracket and keeps the numbers small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the first deposit",
          "workingLatex": "a = 32 - 27 = 5",
          "explanation": "Subtracting $27$ gives the first deposit $a = 5$, i.e. $\\pounds 5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute a into equation (1)",
          "workingLatex": "5 + 11d = 27",
          "explanation": "Now that $a$ is known, put it into the final-term equation to find the weekly increase.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the d term",
          "workingLatex": "11d = 22",
          "explanation": "Subtracting $5$ from both sides leaves $11d$, the total of the eleven increases across the twelve weeks.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the weekly increase",
          "workingLatex": "d = 2",
          "explanation": "Dividing by $11$ gives $d = 2$, so each week's deposit rises by $\\pounds 2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the total",
          "workingLatex": "S_{12} = \\dfrac{12}{2}\\left[2(5) + 11(2)\\right] = 6(10 + 22) = 192",
          "explanation": "Checking with the full sum formula recovers $\\pounds 192$, confirming both $a$ and $d$ are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer",
          "workingLatex": "a = 5, \\quad d = 2",
          "explanation": "The first deposit is $\\pounds 5$ and the weekly increase is $\\pounds 2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "First deposit $\\pounds 5$, weekly increase $\\pounds 2$."
    }
  },
  {
    "id": "al.y2.pure.arithmetic-series.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Arithmetic sequences and series",
    "subtopicId": "al.y2.pure.arithmetic-series",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "arithmetic sequences",
      "mean property",
      "sum"
    ],
    "questionText": "Three consecutive terms of an arithmetic sequence are $3k-1$, $4k+2$ and $6k+1$. Find the value of $k$ and the three terms, and hence find the sum of the first $12$ terms of the sequence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the mean property",
          "workingLatex": "2 \\times (\\text{middle}) = (\\text{first}) + (\\text{third})",
          "explanation": "In an arithmetic sequence each term is the average of its two neighbours, so twice the middle term equals the sum of the outer two. This gives an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the property to the expressions",
          "workingLatex": "2(4k + 2) = (3k - 1) + (6k + 1)",
          "explanation": "Substituting the three given expressions turns the mean property into an equation in $k$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side",
          "workingLatex": "8k + 4 = (3k - 1) + (6k + 1)",
          "explanation": "Multiplying the middle term by $2$ gives $8k + 4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the right-hand side",
          "workingLatex": "8k + 4 = 9k",
          "explanation": "Adding the outer terms, the $-1$ and $+1$ cancel and $3k + 6k = 9k$, leaving $9k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for k",
          "workingLatex": "4 = k \\;\\Rightarrow\\; k = 4",
          "explanation": "Subtracting $8k$ from both sides gives $4 = k$, so $k = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the first term",
          "workingLatex": "3(4) - 1 = 11",
          "explanation": "Substituting $k = 4$ into $3k - 1$ gives the first of the three terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the middle term",
          "workingLatex": "4(4) + 2 = 18",
          "explanation": "Substituting $k = 4$ into $4k + 2$ gives the middle term.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the third term",
          "workingLatex": "6(4) + 1 = 25",
          "explanation": "Substituting $k = 4$ into $6k + 1$ gives the third term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the common difference",
          "workingLatex": "18 - 11 = 7, \\qquad 25 - 18 = 7",
          "explanation": "Both gaps equal $7$, which confirms the three numbers really are in arithmetic progression with common difference $d = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Identify a and d for the sequence",
          "workingLatex": "a = 11, \\quad d = 7",
          "explanation": "Taking $11$ as the first term of the sequence, the common difference is $7$. These feed straight into the sum formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the sum formula",
          "workingLatex": "S_{12} = \\dfrac{12}{2}\\left[2a + (12-1)d\\right]",
          "explanation": "The sum of the first $12$ terms uses the standard arithmetic sum formula with $n = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute the values",
          "workingLatex": "S_{12} = 6\\left[2(11) + 11(7)\\right]",
          "explanation": "Here $\\tfrac{12}{2} = 6$, and inside the bracket $2a = 22$ and $(n-1)d = 11 \\times 7$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the bracket",
          "workingLatex": "S_{12} = 6\\left[22 + 77\\right] = 6(99)",
          "explanation": "Working out $11 \\times 7 = 77$ and adding $22$ gives $99$ inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the sum",
          "workingLatex": "S_{12} = 594",
          "explanation": "Multiplying $6 \\times 99$ gives the sum of the first twelve terms.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the results",
          "workingLatex": "k = 4, \\quad 11,\\ 18,\\ 25, \\quad S_{12} = 594",
          "explanation": "So $k = 4$, the three terms are $11$, $18$ and $25$, and the sum of the first twelve terms is $594$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 4$, the terms are $11,\\ 18,\\ 25$, and $S_{12} = 594$."
    }
  }
];
