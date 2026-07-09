import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.vocabulary.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "expression", "classification"],
    "questionText": "Classify the statement $3x+2$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the deciding feature.", "workingLatex": "\\text{expression / equation / formula / identity}", "explanation": "The fastest way to sort these four types is to look for an equals sign first, because an expression is the only one that has no equals sign at all.", "diagram": null },
        { "stepNumber": 2, "description": "Look for an $=$ or $\\equiv$ sign.", "workingLatex": "3x+2", "explanation": "Scanning the statement, there is no $=$ and no $\\equiv$ anywhere, so it makes no claim that two things are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Rule out equation, formula and identity.", "workingLatex": "\\text{no } = \\text{ or } \\equiv", "explanation": "Equations, formulae and identities all need a sign joining two sides; with nothing to equate, none of those labels can fit.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret what remains.", "workingLatex": "3x \\;+\\; 2", "explanation": "What we have left is simply terms joined by an operation, which is exactly the definition of an expression.", "diagram": null },
        { "stepNumber": 5, "description": "State the classification.", "workingLatex": "3x+2 \\rightarrow \\text{expression}", "explanation": "Because it is only terms combined with $+$ and has no equals sign, $3x+2$ is an expression.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "\\text{expression}", "explanation": "An expression can be evaluated once $x$ is known, but on its own it asserts no equality — matching what we see here.", "diagram": null }
      ],
      "finalAnswer": "$3x+2$ is an expression."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "equation", "classification"],
    "questionText": "Classify the statement $5x-7=13$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "5x-7=13", "explanation": "There is a single $=$ sign, so this is not an expression — it claims that two things are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign used.", "workingLatex": "= \\;\\text{(not } \\equiv \\text{)}", "explanation": "It uses an ordinary equals sign, not the identity sign $\\equiv$, so it is not claiming to be true for every value of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Count the variables involved.", "workingLatex": "\\text{one letter: } x", "explanation": "Only one letter appears. A formula normally links two or more different variables, so this does not look like a formula.", "diagram": null },
        { "stepNumber": 4, "description": "Test for how many values make it true.", "workingLatex": "5x-7=13 \\Rightarrow x=4", "explanation": "Solving gives just one value, $x=4$; the statement is only true for that particular value, which is the hallmark of an equation.", "diagram": null },
        { "stepNumber": 5, "description": "State the classification.", "workingLatex": "5x-7=13 \\rightarrow \\text{equation}", "explanation": "A statement with an ordinary $=$ that is true only for a particular value is an equation.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "\\text{equation}", "explanation": "If we tried $x=1$ we would get $5-7=-2 \\ne 13$, confirming it is not true for all values, so equation is correct.", "diagram": null }
      ],
      "finalAnswer": "$5x-7=13$ is an equation."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "classification"],
    "questionText": "Classify the statement $A=\\pi r^2$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "A=\\pi r^2", "explanation": "There is an $=$ sign, so this is not an expression; it links two sides together.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign type.", "workingLatex": "= \\;\\text{(not } \\equiv \\text{)}", "explanation": "It uses an ordinary equals sign, so we are not being told it is an identity true for all values.", "diagram": null },
        { "stepNumber": 3, "description": "Count the different letters.", "workingLatex": "A, \\; r", "explanation": "Two different variables appear, $A$ and $r$, so the statement is connecting two quantities rather than solving for one number.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the relationship.", "workingLatex": "A=\\pi r^2", "explanation": "This is the rule for the area of a circle: it tells you how the area $A$ depends on the radius $r$, which is exactly what a formula does.", "diagram": null },
        { "stepNumber": 5, "description": "Note the subject.", "workingLatex": "\\text{subject} = A", "explanation": "The single variable on its own on the left, $A$, is the subject, another clue that this is a formula.", "diagram": null },
        { "stepNumber": 6, "description": "State the classification.", "workingLatex": "A=\\pi r^2 \\rightarrow \\text{formula}", "explanation": "A rule linking two or more variables, with one as the subject, is a formula.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "\\text{formula}", "explanation": "Change $r$ and $A$ changes with it, so this expresses a relationship — confirming it is a formula, not a one-off equation.", "diagram": null }
      ],
      "finalAnswer": "$A=\\pi r^2$ is a formula."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "classification"],
    "questionText": "Classify the statement $2(x+4)\\equiv 2x+8$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the sign linking the sides.", "workingLatex": "2(x+4)\\equiv 2x+8", "explanation": "The special three-line sign $\\equiv$ is used here, which immediately signals an identity — a statement true for every value of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $\\equiv$ means.", "workingLatex": "\\equiv \\;\\Rightarrow\\; \\text{true for all values}", "explanation": "Unlike an ordinary $=$, the sign $\\equiv$ claims the two sides are equal no matter what number $x$ takes.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the left-hand side to check.", "workingLatex": "2(x+4)=2x+8", "explanation": "Multiplying out the bracket gives $2x+8$, so the two sides really are the same expression written differently.", "diagram": null },
        { "stepNumber": 4, "description": "Test a value to be sure.", "workingLatex": "x=1:\\; 2(5)=10,\\; 2(1)+8=10", "explanation": "Trying $x=1$ makes both sides equal $10$, supporting that this holds for any value.", "diagram": null },
        { "stepNumber": 5, "description": "Test a second value.", "workingLatex": "x=0:\\; 2(4)=8,\\; 2(0)+8=8", "explanation": "A second test with $x=0$ also balances, which is what we expect from a genuine identity.", "diagram": null },
        { "stepNumber": 6, "description": "State the classification.", "workingLatex": "2(x+4)\\equiv 2x+8 \\rightarrow \\text{identity}", "explanation": "Because the two sides are equal for all values and the $\\equiv$ sign is used, this is an identity.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "An identity is just the same quantity written two ways, exactly as $2(x+4)$ and $2x+8$ are here.", "diagram": null }
      ],
      "finalAnswer": "$2(x+4)\\equiv 2x+8$ is an identity."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "terms", "counting terms"],
    "questionText": "How many terms are there in the expression $4x+3y-7$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a term is.", "workingLatex": "\\text{term} = \\text{part separated by } + \\text{ or } -", "explanation": "Terms are the separate pieces of an expression, split apart at each $+$ or $-$ sign.", "diagram": null },
        { "stepNumber": 2, "description": "Mark the separating signs.", "workingLatex": "4x \\;{\\color{gray}+}\\; 3y \\;{\\color{gray}-}\\; 7", "explanation": "The $+$ and $-$ signs act like fences that divide the expression into separate terms.", "diagram": null },
        { "stepNumber": 3, "description": "List the first term.", "workingLatex": "4x", "explanation": "Everything before the first $+$ sign, namely $4x$, is one complete term.", "diagram": null },
        { "stepNumber": 4, "description": "List the second term.", "workingLatex": "3y", "explanation": "Between the $+$ and the $-$ sits $3y$, giving a second term.", "diagram": null },
        { "stepNumber": 5, "description": "List the third term.", "workingLatex": "-7", "explanation": "After the $-$ sign comes $7$; the sign belongs to it, making the constant term $-7$.", "diagram": null },
        { "stepNumber": 6, "description": "Count the terms.", "workingLatex": "4x,\\; 3y,\\; -7 \\Rightarrow 3", "explanation": "There are three separate pieces, so the expression has three terms.", "diagram": null }
      ],
      "finalAnswer": "$3$ terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "terms", "counting terms"],
    "questionText": "How many terms are there in the expression $5a-2b$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a term is.", "workingLatex": "\\text{term} = \\text{part separated by } + \\text{ or } -", "explanation": "An expression is broken into terms wherever a $+$ or $-$ sign appears.", "diagram": null },
        { "stepNumber": 2, "description": "Locate the separating sign.", "workingLatex": "5a \\;{\\color{gray}-}\\; 2b", "explanation": "There is a single $-$ sign, which splits the expression into two pieces.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the first term.", "workingLatex": "5a", "explanation": "Before the $-$ sign we have $5a$, the first term.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the second term.", "workingLatex": "-2b", "explanation": "The $-$ sign attaches to the $2b$, giving the second term $-2b$.", "diagram": null },
        { "stepNumber": 5, "description": "Count the terms.", "workingLatex": "5a,\\; -2b \\Rightarrow 2", "explanation": "Two separate pieces means the expression has two terms.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "2 \\text{ terms}", "explanation": "The letters $a$ and $b$ are different, but that does not change the count — we are only counting separate pieces.", "diagram": null }
      ],
      "finalAnswer": "$2$ terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient"],
    "questionText": "In the expression $7x+2$, what is the coefficient of $x$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{number multiplying the letter}", "explanation": "The coefficient of a variable is the number written in front of it that it is being multiplied by.", "diagram": null },
        { "stepNumber": 2, "description": "Find the term containing $x$.", "workingLatex": "7x", "explanation": "We only look at the term that actually contains $x$, which is $7x$.", "diagram": null },
        { "stepNumber": 3, "description": "Separate the number from the letter.", "workingLatex": "7x = 7 \\times x", "explanation": "The term $7x$ means $7$ multiplied by $x$, so the number part is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Ignore the constant.", "workingLatex": "+2 \\;\\text{has no } x", "explanation": "The $+2$ term contains no $x$, so it plays no part in finding the coefficient of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } x = 7", "explanation": "The number multiplying $x$ is $7$, so that is the coefficient.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "7", "explanation": "The coefficient is just the multiplier of the letter, here clearly $7$.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of $x$ is $7$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient", "negative"],
    "questionText": "In the expression $-3y+5$, what is the coefficient of $y$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{number multiplying the letter}", "explanation": "The coefficient is the multiplier attached to the variable, and it includes any sign in front of it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the term containing $y$.", "workingLatex": "-3y", "explanation": "The only term with a $y$ in it is $-3y$.", "diagram": null },
        { "stepNumber": 3, "description": "Keep the sign with the number.", "workingLatex": "-3y = -3 \\times y", "explanation": "The minus sign belongs to the number, so the multiplier of $y$ is $-3$, not just $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Ignore the constant term.", "workingLatex": "+5 \\;\\text{has no } y", "explanation": "The $+5$ has no $y$, so it does not affect the coefficient of $y$.", "diagram": null },
        { "stepNumber": 5, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } y = -3", "explanation": "Including its sign, the number multiplying $y$ is $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "-3", "explanation": "Forgetting the minus sign is a common slip; keeping it gives the correct coefficient $-3$.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of $y$ is $-3$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "constant term"],
    "questionText": "In the expression $6x+9$, what is the constant term?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a constant term is.", "workingLatex": "\\text{constant} = \\text{term with no letter}", "explanation": "A constant term is a fixed number with no variable attached, so its value never changes.", "diagram": null },
        { "stepNumber": 2, "description": "List the terms.", "workingLatex": "6x,\\; 9", "explanation": "Splitting at the $+$ sign gives two terms: $6x$ and $9$.", "diagram": null },
        { "stepNumber": 3, "description": "Check which term has a letter.", "workingLatex": "6x \\;\\text{contains } x", "explanation": "The term $6x$ has a variable, so it changes with $x$ and is not the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Find the term with no letter.", "workingLatex": "9", "explanation": "The term $9$ has no variable at all, so it stays the same whatever $x$ is.", "diagram": null },
        { "stepNumber": 5, "description": "State the constant term.", "workingLatex": "\\text{constant} = 9", "explanation": "The fixed number $9$ is the constant term.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "9", "explanation": "Whatever value $x$ takes, the $9$ never changes — confirming it is the constant.", "diagram": null }
      ],
      "finalAnswer": "The constant term is $9$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "constant term", "quadratic"],
    "questionText": "In the expression $2x^2-4x+11$, what is the constant term?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a constant term is.", "workingLatex": "\\text{constant} = \\text{term with no letter}", "explanation": "The constant term is the piece of the expression with no variable, so its value is fixed.", "diagram": null },
        { "stepNumber": 2, "description": "Split into terms.", "workingLatex": "2x^2,\\; -4x,\\; 11", "explanation": "Splitting at each $+$ or $-$ sign gives the three terms $2x^2$, $-4x$ and $11$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the first term.", "workingLatex": "2x^2 \\;\\text{contains } x", "explanation": "The term $2x^2$ has a variable, so it changes with $x$ and cannot be the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Check the second term.", "workingLatex": "-4x \\;\\text{contains } x", "explanation": "The term $-4x$ also has a variable, so it is not constant either.", "diagram": null },
        { "stepNumber": 5, "description": "Find the term with no letter.", "workingLatex": "11", "explanation": "Only $11$ has no variable, so it is the fixed value in the expression.", "diagram": null },
        { "stepNumber": 6, "description": "State the constant term.", "workingLatex": "\\text{constant} = 11", "explanation": "The constant term is $11$.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "11", "explanation": "Substituting $x=0$ leaves only $11$, which confirms it is the constant term.", "diagram": null }
      ],
      "finalAnswer": "The constant term is $11$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "like terms"],
    "questionText": "Are $3x$ and $5x$ like terms or unlike terms?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of like terms.", "workingLatex": "\\text{like terms} = \\text{same letters, same powers}", "explanation": "Two terms are 'like' when their variable parts match exactly — the same letters raised to the same powers.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variable part of each.", "workingLatex": "3x \\to x, \\quad 5x \\to x", "explanation": "Ignoring the numbers, both terms have exactly the letter $x$ to the power $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the variable parts.", "workingLatex": "x = x", "explanation": "The variable parts are identical, so the numbers in front do not matter for deciding 'like' or 'unlike'.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the definition.", "workingLatex": "\\text{same variable part} \\Rightarrow \\text{like}", "explanation": "Because the variable parts match, the terms qualify as like terms.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "3x,\\; 5x \\rightarrow \\text{like terms}", "explanation": "So $3x$ and $5x$ are like terms.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "3x+5x = 8x", "explanation": "Like terms can be added into a single term, and indeed $3x+5x=8x$, confirming they are alike.", "diagram": null }
      ],
      "finalAnswer": "Like terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "like terms", "unlike terms"],
    "questionText": "Are $4x$ and $4y$ like terms or unlike terms?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of like terms.", "workingLatex": "\\text{like terms} = \\text{same letters, same powers}", "explanation": "Like terms must have identical variable parts; the numerical coefficients are allowed to differ.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variable part of each.", "workingLatex": "4x \\to x, \\quad 4y \\to y", "explanation": "One term has the letter $x$, the other has the letter $y$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the variable parts.", "workingLatex": "x \\ne y", "explanation": "Even though both have a coefficient of $4$, the letters are different, so the variable parts do not match.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the definition.", "workingLatex": "\\text{different variable part} \\Rightarrow \\text{unlike}", "explanation": "Because the variable parts differ, the terms are unlike terms.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "4x,\\; 4y \\rightarrow \\text{unlike terms}", "explanation": "So $4x$ and $4y$ are unlike terms.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "4x+4y \\;\\text{cannot simplify}", "explanation": "Unlike terms cannot be combined into one term; $4x+4y$ stays as it is, confirming they are unlike.", "diagram": null }
      ],
      "finalAnswer": "Unlike terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "classification"],
    "questionText": "Classify the statement $v=u+at$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "v=u+at", "explanation": "There is an $=$ sign, so this is not just an expression; it connects two sides.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign type.", "workingLatex": "= \\;\\text{(not } \\equiv \\text{)}", "explanation": "An ordinary equals sign is used, so it is not being presented as an identity.", "diagram": null },
        { "stepNumber": 3, "description": "Count the different letters.", "workingLatex": "v,\\; u,\\; a,\\; t", "explanation": "Several different variables appear, which strongly suggests a relationship between quantities rather than a single unknown to solve.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the relationship.", "workingLatex": "v=u+at", "explanation": "This is a well-known rule of motion linking final velocity to initial velocity, acceleration and time — exactly what a formula does.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the subject.", "workingLatex": "\\text{subject} = v", "explanation": "The single letter $v$ sits alone on the left as the subject, another sign of a formula.", "diagram": null },
        { "stepNumber": 6, "description": "State the classification.", "workingLatex": "v=u+at \\rightarrow \\text{formula}", "explanation": "A rule linking several variables with one as the subject is a formula.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "\\text{formula}", "explanation": "You would use it to calculate $v$ from given values of $u$, $a$ and $t$, which is how formulae are used.", "diagram": null }
      ],
      "finalAnswer": "$v=u+at$ is a formula."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "expression", "classification"],
    "questionText": "Classify the statement $7x-4$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign first.", "workingLatex": "7x-4", "explanation": "The very first check is for an $=$ or $\\equiv$ sign, because only an expression lacks one.", "diagram": null },
        { "stepNumber": 2, "description": "Confirm there is no sign.", "workingLatex": "\\text{no } = \\text{ or } \\equiv", "explanation": "Neither an equals sign nor an identity sign is present, so nothing is being set equal to anything.", "diagram": null },
        { "stepNumber": 3, "description": "Rule out the other three types.", "workingLatex": "\\text{not equation / formula / identity}", "explanation": "Equations, formulae and identities all require two sides joined by a sign, which we do not have.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret what is left.", "workingLatex": "7x \\;-\\; 4", "explanation": "We simply have two terms joined by a subtraction, which is exactly what an expression is.", "diagram": null },
        { "stepNumber": 5, "description": "State the classification.", "workingLatex": "7x-4 \\rightarrow \\text{expression}", "explanation": "With no equals sign and just terms combined, $7x-4$ is an expression.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "\\text{expression}", "explanation": "It can be evaluated for a chosen $x$ but makes no claim of equality, confirming it is an expression.", "diagram": null }
      ],
      "finalAnswer": "$7x-4$ is an expression."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "classification"],
    "questionText": "Classify the statement $x+x+x\\equiv 3x$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the linking sign.", "workingLatex": "x+x+x\\equiv 3x", "explanation": "The $\\equiv$ sign signals that both sides are claimed equal for every value of $x$, which points to an identity.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $\\equiv$ means.", "workingLatex": "\\equiv \\;\\Rightarrow\\; \\text{true for all values}", "explanation": "An identity must balance no matter what number $x$ is, so we should check the two sides are genuinely the same.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the left-hand side.", "workingLatex": "x+x+x = 3x", "explanation": "Adding three lots of $x$ together gives $3x$, so the left side equals the right side.", "diagram": null },
        { "stepNumber": 4, "description": "Test a value.", "workingLatex": "x=2:\\; 2+2+2=6,\\; 3(2)=6", "explanation": "With $x=2$ both sides give $6$, supporting that it holds for any value.", "diagram": null },
        { "stepNumber": 5, "description": "Test another value.", "workingLatex": "x=5:\\; 5+5+5=15,\\; 3(5)=15", "explanation": "A second value also balances, as expected for an identity.", "diagram": null },
        { "stepNumber": 6, "description": "State the classification.", "workingLatex": "x+x+x\\equiv 3x \\rightarrow \\text{identity}", "explanation": "The two sides are equal for all values, so this is an identity.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "It is just the same quantity written two ways, which is precisely what an identity is.", "diagram": null }
      ],
      "finalAnswer": "$x+x+x\\equiv 3x$ is an identity."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "equation", "classification"],
    "questionText": "Classify the statement $2x=10$ as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "2x=10", "explanation": "There is an ordinary $=$ sign, so it is not an expression and not an identity (which would use $\\equiv$).", "diagram": null },
        { "stepNumber": 2, "description": "Count the different letters.", "workingLatex": "\\text{one letter: } x", "explanation": "Only one variable appears, so this is unlikely to be a formula, which usually links two or more variables.", "diagram": null },
        { "stepNumber": 3, "description": "Check for how many values are true.", "workingLatex": "2x=10 \\Rightarrow x=5", "explanation": "Solving gives a single value $x=5$; the statement is only true for that particular value.", "diagram": null },
        { "stepNumber": 4, "description": "Test another value to confirm.", "workingLatex": "x=1:\\; 2(1)=2 \\ne 10", "explanation": "Trying $x=1$ fails, showing it is not true for all values, so it is not an identity.", "diagram": null },
        { "stepNumber": 5, "description": "State the classification.", "workingLatex": "2x=10 \\rightarrow \\text{equation}", "explanation": "An ordinary equals sign that holds for one particular value is an equation.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "\\text{equation}", "explanation": "Being solvable for a single unknown value is the classic feature of an equation.", "diagram": null }
      ],
      "finalAnswer": "$2x=10$ is an equation."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "terms", "counting terms"],
    "questionText": "How many terms are there in the expression $8p$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a term is.", "workingLatex": "\\text{term} = \\text{part separated by } + \\text{ or } -", "explanation": "Terms are the pieces created when you split an expression at each $+$ or $-$ sign.", "diagram": null },
        { "stepNumber": 2, "description": "Look for separating signs.", "workingLatex": "8p", "explanation": "There are no $+$ or $-$ signs anywhere in $8p$, so there is nothing to split it into pieces.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the single piece.", "workingLatex": "8p = 8 \\times p", "explanation": "The whole thing $8p$ is one product, forming a single term.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the factors within the term.", "workingLatex": "8p = 8 \\times p", "explanation": "Within this single term, $8$ and $p$ are factors multiplied together, but multiplication does not create extra terms — only $+$ or $-$ does.", "diagram": null },
        { "stepNumber": 5, "description": "Count the terms.", "workingLatex": "8p \\Rightarrow 1", "explanation": "With no separating signs there is just one piece, so one term.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "1 \\text{ term}", "explanation": "A number times a letter, with no addition or subtraction, is always a single term.", "diagram": null }
      ],
      "finalAnswer": "$1$ term."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient", "quadratic"],
    "questionText": "In the expression $5a^2+3a$, what is the coefficient of $a^2$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{number multiplying that term}", "explanation": "The coefficient of $a^2$ is the number that the $a^2$ is being multiplied by.", "diagram": null },
        { "stepNumber": 2, "description": "Find the term with $a^2$.", "workingLatex": "5a^2", "explanation": "We look for the term containing $a^2$, which is $5a^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Separate number from variable.", "workingLatex": "5a^2 = 5 \\times a^2", "explanation": "The term is $5$ multiplied by $a^2$, so the number part is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Do not confuse with the $a$ term.", "workingLatex": "3a \\;\\text{has } a, \\text{ not } a^2", "explanation": "The term $3a$ has $a$ to the power $1$, not $a^2$, so its coefficient belongs to $a$, not to $a^2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } a^2 = 5", "explanation": "The number multiplying $a^2$ is $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "5", "explanation": "Matching the power carefully avoids picking the wrong term, giving the coefficient $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Note the other coefficient.", "workingLatex": "\\text{coefficient of } a = 3", "explanation": "For contrast, the coefficient of $a$ is $3$, but the question asked only about $a^2$.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of $a^2$ is $5$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "constant term"],
    "questionText": "In the expression $4-3x$, what is the constant term?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a constant term is.", "workingLatex": "\\text{constant} = \\text{term with no letter}", "explanation": "The constant term is the fixed number that carries no variable.", "diagram": null },
        { "stepNumber": 2, "description": "Split into terms.", "workingLatex": "4,\\; -3x", "explanation": "Splitting at the $-$ sign gives the terms $4$ and $-3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Check which term has a letter.", "workingLatex": "-3x \\;\\text{contains } x", "explanation": "The term $-3x$ has a variable, so it changes with $x$ and is not constant.", "diagram": null },
        { "stepNumber": 4, "description": "Find the term with no letter.", "workingLatex": "4", "explanation": "The term $4$ stands alone with no variable, so it is fixed.", "diagram": null },
        { "stepNumber": 5, "description": "State the constant term.", "workingLatex": "\\text{constant} = 4", "explanation": "The constant term is $4$; note that the order of writing does not change which term is constant.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "4", "explanation": "Putting $x=0$ leaves $4$, confirming the constant term.", "diagram": null }
      ],
      "finalAnswer": "The constant term is $4$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "like terms"],
    "questionText": "Are $2xy$ and $5xy$ like terms or unlike terms?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of like terms.", "workingLatex": "\\text{like terms} = \\text{identical variable parts}", "explanation": "Like terms have exactly the same letters raised to the same powers; only the number in front may differ.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variable parts.", "workingLatex": "2xy \\to xy, \\quad 5xy \\to xy", "explanation": "Ignoring the numbers, both terms have the variable part $xy$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the variable parts.", "workingLatex": "xy = xy", "explanation": "Both contain an $x$ and a $y$ each to the power $1$, so the variable parts match perfectly.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the definition.", "workingLatex": "\\text{same variable part} \\Rightarrow \\text{like}", "explanation": "Matching variable parts means the terms are like terms.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "2xy,\\; 5xy \\rightarrow \\text{like terms}", "explanation": "So $2xy$ and $5xy$ are like terms.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "2xy+5xy = 7xy", "explanation": "They combine neatly into $7xy$, which only happens with like terms.", "diagram": null }
      ],
      "finalAnswer": "Like terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "like terms", "powers"],
    "questionText": "Are $3x^2$ and $3x$ like terms or unlike terms?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of like terms.", "workingLatex": "\\text{like terms} = \\text{same letters AND same powers}", "explanation": "For terms to be alike, both the letters and the powers on those letters must match.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variable parts.", "workingLatex": "3x^2 \\to x^2, \\quad 3x \\to x", "explanation": "One term has $x$ squared, the other has $x$ to the power $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the powers.", "workingLatex": "x^2 \\ne x", "explanation": "Although the letter $x$ is the same, the powers ($2$ and $1$) are different, so the variable parts do not match.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the definition.", "workingLatex": "\\text{different powers} \\Rightarrow \\text{unlike}", "explanation": "Because the powers differ, the terms are unlike terms even though the coefficients are both $3$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "3x^2,\\; 3x \\rightarrow \\text{unlike terms}", "explanation": "So $3x^2$ and $3x$ are unlike terms.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "3x^2+3x \\;\\text{cannot simplify}", "explanation": "They cannot be added into a single term, which confirms they are unlike.", "diagram": null }
      ],
      "finalAnswer": "Unlike terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "classification"],
    "questionText": "Classify the statement $P=4l$, the perimeter of a square, as an expression, equation, formula or identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "P=4l", "explanation": "There is an $=$ sign, so this is not an expression; two sides are being connected.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign type.", "workingLatex": "= \\;\\text{(not } \\equiv \\text{)}", "explanation": "An ordinary equals sign is used, so it is not presented as an identity.", "diagram": null },
        { "stepNumber": 3, "description": "Count the different letters.", "workingLatex": "P,\\; l", "explanation": "Two different variables appear, $P$ and $l$, suggesting a relationship between two quantities.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the relationship.", "workingLatex": "P=4l", "explanation": "This is the rule that a square's perimeter is four times its side length — it tells you how $P$ depends on $l$, which is what a formula does.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the subject.", "workingLatex": "\\text{subject} = P", "explanation": "The single variable $P$ on the left is the subject, a typical feature of a formula.", "diagram": null },
        { "stepNumber": 6, "description": "State the classification.", "workingLatex": "P=4l \\rightarrow \\text{formula}", "explanation": "A rule linking two variables with one as the subject is a formula.", "diagram": null },
        { "stepNumber": 7, "description": "Final check.", "workingLatex": "\\text{formula}", "explanation": "You would use it to find $P$ from a given side length $l$, confirming it is a formula.", "diagram": null }
      ],
      "finalAnswer": "$P=4l$ is a formula."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient", "hidden coefficient"],
    "questionText": "In the expression $x+9$, what is the coefficient of $x$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{number multiplying the letter}", "explanation": "The coefficient is the number in front of the variable, even when it is not written out.", "diagram": null },
        { "stepNumber": 2, "description": "Find the term with $x$.", "workingLatex": "x", "explanation": "The term containing $x$ is simply $x$, with no visible number in front.", "diagram": null },
        { "stepNumber": 3, "description": "Reveal the hidden coefficient.", "workingLatex": "x = 1 \\times x", "explanation": "Writing just $x$ means one lot of $x$, so there is an invisible $1$ multiplying it.", "diagram": null },
        { "stepNumber": 4, "description": "Ignore the constant.", "workingLatex": "+9 \\;\\text{has no } x", "explanation": "The $+9$ has no $x$, so it does not affect the coefficient of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } x = 1", "explanation": "The multiplier of $x$ is $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "1", "explanation": "A common mistake is to say there is no coefficient; in fact a bare letter always has coefficient $1$.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of $x$ is $1$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient", "negative"],
    "questionText": "In the expression $-x+6$, what is the coefficient of $x$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{signed number multiplying the letter}", "explanation": "The coefficient is the number multiplying the variable, and its sign is part of it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the term with $x$.", "workingLatex": "-x", "explanation": "The term with a variable is $-x$, with a minus sign but no visible number.", "diagram": null },
        { "stepNumber": 3, "description": "Reveal the hidden coefficient.", "workingLatex": "-x = -1 \\times x", "explanation": "Writing $-x$ means negative one lot of $x$, so the coefficient is $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Ignore the constant.", "workingLatex": "+6 \\;\\text{has no } x", "explanation": "The $+6$ contains no $x$, so it is irrelevant to the coefficient of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } x = -1", "explanation": "Including the sign, the coefficient of $x$ is $-1$.", "diagram": null },
        { "stepNumber": 6, "description": "Final check.", "workingLatex": "-1", "explanation": "Both the invisible $1$ and the minus sign matter, giving $-1$.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of $x$ is $-1$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "equation", "classification", "justification"],
    "questionText": "Classify $5x+3=2x+12$ as an expression, equation, formula or identity, and justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the linking sign.", "workingLatex": "5x+3=2x+12", "explanation": "An ordinary $=$ sign is present, so this is not an expression, and the absence of $\\equiv$ means it is not automatically an identity.", "diagram": null },
        { "stepNumber": 2, "description": "Count the different letters.", "workingLatex": "\\text{one letter: } x", "explanation": "Only one variable appears, so it is unlikely to be a formula, which normally relates two or more variables.", "diagram": null },
        { "stepNumber": 3, "description": "Decide the key test.", "workingLatex": "\\text{true for all } x \\;?\\; \\text{or just one?}", "explanation": "To separate an equation from an identity we must check whether the statement holds for every value or only for a particular one.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the $x$ terms.", "workingLatex": "5x-2x+3=12", "explanation": "Subtracting $2x$ from both sides gathers the variable terms on the left.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "3x+3=12", "explanation": "Combining $5x-2x$ gives $3x$, tidying the statement.", "diagram": null },
        { "stepNumber": 6, "description": "Isolate the variable term.", "workingLatex": "3x=9", "explanation": "Subtracting $3$ from both sides leaves the $x$ term on its own.", "diagram": null },
        { "stepNumber": 7, "description": "Solve for $x$.", "workingLatex": "x=3", "explanation": "Dividing by $3$ gives a single value, $x=3$.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the single solution.", "workingLatex": "x=3 \\;\\text{only}", "explanation": "Because the statement is true only when $x=3$, it is a claim about one particular value, not all values.", "diagram": null },
        { "stepNumber": 9, "description": "State and justify the classification.", "workingLatex": "5x+3=2x+12 \\rightarrow \\text{equation}", "explanation": "It uses an ordinary $=$ and is true for only one value of $x$, so it is an equation, not an identity or formula.", "diagram": null }
      ],
      "finalAnswer": "It is an equation, because it uses $=$ and is true only for the single value $x=3$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "equals sign", "meaning"],
    "questionText": "Explain the difference between the symbols $=$ and $\\equiv$, giving an example of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what $=$ means.", "workingLatex": "=", "explanation": "The ordinary equals sign says two things have the same value, and this may be true only for particular values of the variable.", "diagram": null },
        { "stepNumber": 2, "description": "State what $\\equiv$ means.", "workingLatex": "\\equiv", "explanation": "The identity sign says two expressions are equal for every possible value of the variable, not just some.", "diagram": null },
        { "stepNumber": 3, "description": "Give an example with $=$.", "workingLatex": "x+4=9", "explanation": "This is true only when $x=5$, so an ordinary equals sign is the correct choice here.", "diagram": null },
        { "stepNumber": 4, "description": "Check the example.", "workingLatex": "x=5:\\; 9=9; \\quad x=0:\\; 4\\ne 9", "explanation": "It balances for $x=5$ but fails for $x=0$, confirming it holds only for a particular value.", "diagram": null },
        { "stepNumber": 5, "description": "Give an example with $\\equiv$.", "workingLatex": "2(x+3)\\equiv 2x+6", "explanation": "Both sides are the same expression written differently, so they are equal for every value of $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the identity for one value.", "workingLatex": "x=1:\\; 2(4)=8,\\; 2(1)+6=8", "explanation": "The sides match for $x=1$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the identity for another value.", "workingLatex": "x=10:\\; 2(13)=26,\\; 2(10)+6=26", "explanation": "They match again for $x=10$, illustrating that the identity holds for all values.", "diagram": null },
        { "stepNumber": 8, "description": "Summarise the distinction.", "workingLatex": "= \\Rightarrow \\text{particular value}, \\quad \\equiv \\Rightarrow \\text{all values}", "explanation": "In short, $=$ can be conditional on the value, while $\\equiv$ is a promise that it is always true.", "diagram": null },
        { "stepNumber": 9, "description": "Final summary.", "workingLatex": "\\text{equation vs identity}", "explanation": "An $=$ typically appears in equations solved for a value; an $\\equiv$ appears in identities that hold universally.", "diagram": null }
      ],
      "finalAnswer": "$=$ means equal for particular value(s), e.g. $x+4=9$; $\\equiv$ means equal for all values, e.g. $2(x+3)\\equiv 2x+6$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "subject"],
    "questionText": "For $A=\\pi r^2$, classify the statement and name its subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for an equals sign.", "workingLatex": "A=\\pi r^2", "explanation": "There is an ordinary $=$ sign, so this is not just an expression.", "diagram": null },
        { "stepNumber": 2, "description": "Count the different letters.", "workingLatex": "A,\\; r", "explanation": "Two different variables are related, which is typical of a formula rather than a single-unknown equation.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the relationship.", "workingLatex": "A=\\pi r^2", "explanation": "It gives the area of a circle in terms of its radius — a rule connecting quantities, so it is a formula.", "diagram": null },
        { "stepNumber": 4, "description": "Recall what a subject is.", "workingLatex": "\\text{subject} = \\text{variable alone on one side}", "explanation": "The subject of a formula is the variable that stands by itself, usually on the left, that the formula gives you directly.", "diagram": null },
        { "stepNumber": 5, "description": "Locate the isolated variable.", "workingLatex": "A = \\ldots", "explanation": "Here $A$ sits alone on the left-hand side, with everything defining it on the right.", "diagram": null },
        { "stepNumber": 6, "description": "State the subject.", "workingLatex": "\\text{subject} = A", "explanation": "So $A$ is the subject of the formula.", "diagram": null },
        { "stepNumber": 7, "description": "State the classification.", "workingLatex": "A=\\pi r^2 \\rightarrow \\text{formula}", "explanation": "It relates two variables with one as the subject, so it is a formula.", "diagram": null },
        { "stepNumber": 8, "description": "Final check.", "workingLatex": "\\text{formula, subject } A", "explanation": "Given a value of $r$, the formula produces $A$ directly, confirming $A$ is the subject.", "diagram": null },
        { "stepNumber": 9, "description": "Note how to change subject.", "workingLatex": "r=\\sqrt{A/\\pi}", "explanation": "If we rearranged to make $r$ the subject, it would still be the same formula — only the subject would change.", "diagram": null }
      ],
      "finalAnswer": "It is a formula, and the subject is $A$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "factors", "term"],
    "questionText": "Write down three factors of the term $6xy$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "\\text{factor} = \\text{something that multiplies to give the term}", "explanation": "A factor of a term is any quantity that divides into it exactly, so multiplying factors together rebuilds the term.", "diagram": null },
        { "stepNumber": 2, "description": "Break the term into building blocks.", "workingLatex": "6xy = 2 \\times 3 \\times x \\times y", "explanation": "Writing $6$ as $2\\times 3$ and separating the letters shows the basic pieces the term is built from.", "diagram": null },
        { "stepNumber": 3, "description": "Pick out numerical factors.", "workingLatex": "1,\\; 2,\\; 3,\\; 6", "explanation": "The number $6$ has factors $1$, $2$, $3$ and $6$, all of which are factors of the whole term.", "diagram": null },
        { "stepNumber": 4, "description": "Pick out variable factors.", "workingLatex": "x,\\; y,\\; xy", "explanation": "Each letter, and their product $xy$, also divides the term exactly, so these are factors too.", "diagram": null },
        { "stepNumber": 5, "description": "Choose three factors.", "workingLatex": "2,\\; x,\\; 3y", "explanation": "We can select any three, for example $2$, $x$ and $3y$; there are many valid choices.", "diagram": null },
        { "stepNumber": 6, "description": "Verify the choice multiplies back.", "workingLatex": "2 \\times x \\times 3y = 6xy", "explanation": "Multiplying $2$, $x$ and $3y$ together does indeed give $6xy$, confirming they are genuine factors.", "diagram": null },
        { "stepNumber": 7, "description": "Note the largest factor.", "workingLatex": "6xy \\;\\text{itself}", "explanation": "The term is always a factor of itself, and $1$ is always a factor, so factors range from $1$ up to $6xy$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "2,\\; x,\\; 3y", "explanation": "Three valid factors of $6xy$ are $2$, $x$ and $3y$.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{all divide } 6xy \\text{ exactly}", "explanation": "Each chosen factor divides $6xy$ without remainder, so the answer is correct.", "diagram": null }
      ],
      "finalAnswer": "Three factors are $2$, $x$ and $3y$ (other valid answers exist, e.g. $3$, $6$, $y$, $xy$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "terms", "coefficient", "constant term"],
    "questionText": "For the expression $4x^2-7x+9$, state the number of terms, the coefficient of $x$, and the constant term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "4x^2,\\; -7x,\\; 9", "explanation": "Splitting at each $+$ or $-$ sign gives three separate pieces.", "diagram": null },
        { "stepNumber": 2, "description": "Count the terms.", "workingLatex": "3 \\text{ terms}", "explanation": "There are three pieces, so the expression has three terms.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $x$ term.", "workingLatex": "-7x", "explanation": "The term with $x$ to the power $1$ is $-7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Read off its coefficient with the sign.", "workingLatex": "\\text{coefficient of } x = -7", "explanation": "The signed number multiplying $x$ is $-7$; keeping the minus sign is essential.", "diagram": null },
        { "stepNumber": 5, "description": "Distinguish from the $x^2$ term.", "workingLatex": "4x^2 \\to \\text{coeff of } x^2 = 4", "explanation": "The $4$ belongs to $x^2$, not to $x$, so we must not confuse the two coefficients.", "diagram": null },
        { "stepNumber": 6, "description": "Find the constant term.", "workingLatex": "9", "explanation": "The only term with no variable is $9$, so that is the constant.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the constant.", "workingLatex": "x=0:\\; 4(0)-7(0)+9=9", "explanation": "Substituting $x=0$ leaves $9$, confirming the constant term.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the answers.", "workingLatex": "3 \\text{ terms},\\; -7,\\; 9", "explanation": "We now have all three requested pieces of information.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{consistent}", "explanation": "Each answer matches the correct part of the expression, so the results are consistent.", "diagram": null }
      ],
      "finalAnswer": "$3$ terms; coefficient of $x$ is $-7$; constant term is $9$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "selection"],
    "questionText": "Which of these is an identity? (A) $3x=12$  (B) $(x+1)^2\\equiv x^2+2x+1$  (C) $x+5=2x$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what makes an identity.", "workingLatex": "\\text{identity} = \\text{true for all values}", "explanation": "An identity must balance for every value of the variable, whereas an equation holds only for particular values.", "diagram": null },
        { "stepNumber": 2, "description": "Test statement (A).", "workingLatex": "3x=12 \\Rightarrow x=4", "explanation": "Statement (A) is only true when $x=4$, so it is an equation, not an identity.", "diagram": null },
        { "stepNumber": 3, "description": "Test statement (C).", "workingLatex": "x+5=2x \\Rightarrow x=5", "explanation": "Statement (C) is only true when $x=5$, so it too is an equation.", "diagram": null },
        { "stepNumber": 4, "description": "Focus on statement (B).", "workingLatex": "(x+1)^2\\equiv x^2+2x+1", "explanation": "Statement (B) uses the identity sign, so we check whether the two sides are genuinely equal for all $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the left-hand side.", "workingLatex": "(x+1)^2 = (x+1)(x+1)", "explanation": "Squaring means multiplying the bracket by itself.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply out.", "workingLatex": "x^2+x+x+1", "explanation": "Expanding each pair of terms gives $x^2$, two lots of $x$, and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "x^2+2x+1", "explanation": "Combining the two $x$ terms produces $x^2+2x+1$, which matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 8, "description": "Conclude which is the identity.", "workingLatex": "\\text{(B) holds for all } x", "explanation": "Since both sides of (B) are equal for every value of $x$, statement (B) is the identity.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{answer: (B)}", "explanation": "Only (B) is true for all values, so it is the identity while (A) and (C) are equations.", "diagram": null }
      ],
      "finalAnswer": "Statement (B) $(x+1)^2\\equiv x^2+2x+1$ is the identity."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "classification", "justification"],
    "questionText": "Classify $3(x+2)\\equiv 3x+6$ and justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the sign used.", "workingLatex": "3(x+2)\\equiv 3x+6", "explanation": "The $\\equiv$ sign is a strong hint of an identity, but we should verify the two sides are truly equal for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the meaning of identity.", "workingLatex": "\\equiv \\Rightarrow \\text{true for all } x", "explanation": "To justify the label we check whether the sides match after simplifying, not just for one value.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the left-hand side.", "workingLatex": "3(x+2) = 3\\times x + 3\\times 2", "explanation": "The bracket is multiplied out by distributing the $3$ over both terms inside.", "diagram": null },
        { "stepNumber": 4, "description": "Complete the expansion.", "workingLatex": "= 3x+6", "explanation": "This gives $3x+6$, which is exactly the right-hand side.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the two sides.", "workingLatex": "3x+6 = 3x+6", "explanation": "The sides are identical as expressions, so they will match for any value of $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Test a value to reassure.", "workingLatex": "x=4:\\; 3(6)=18,\\; 3(4)+6=18", "explanation": "Checking $x=4$ gives $18$ on both sides, supporting the conclusion.", "diagram": null },
        { "stepNumber": 7, "description": "Test another value.", "workingLatex": "x=-1:\\; 3(1)=3,\\; 3(-1)+6=3", "explanation": "A negative value also balances, as an identity should.", "diagram": null },
        { "stepNumber": 8, "description": "State and justify the classification.", "workingLatex": "3(x+2)\\equiv 3x+6 \\rightarrow \\text{identity}", "explanation": "Because expanding the left side reproduces the right side exactly, the statement is true for all $x$, so it is an identity.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "The two sides are the same quantity written differently, which is the definition of an identity.", "diagram": null }
      ],
      "finalAnswer": "It is an identity, because expanding $3(x+2)$ gives $3x+6$, so both sides are equal for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "expression", "equation", "justification"],
    "questionText": "Explain why $2x+5$ is an expression and not an equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the key difference.", "workingLatex": "\\text{equation has } =, \\;\\text{expression does not}", "explanation": "The single most important difference is that an equation contains an equals sign, joining two sides, while an expression does not.", "diagram": null },
        { "stepNumber": 2, "description": "Inspect the statement.", "workingLatex": "2x+5", "explanation": "Looking at $2x+5$, there is no $=$ sign anywhere.", "diagram": null },
        { "stepNumber": 3, "description": "Consider what an equation needs.", "workingLatex": "\\text{something} = \\text{something}", "explanation": "An equation must claim that two quantities are equal, but here nothing is set equal to anything.", "diagram": null },
        { "stepNumber": 4, "description": "Describe what $2x+5$ actually is.", "workingLatex": "2x \\;+\\; 5", "explanation": "It is simply two terms joined by addition — a recipe for a value once $x$ is known — which is an expression.", "diagram": null },
        { "stepNumber": 5, "description": "Note it cannot be solved.", "workingLatex": "\\text{no solution to find}", "explanation": "Because there is no equation to balance, there is nothing to solve; you can only evaluate it, which is what you do with an expression.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "2x+5 \\rightarrow \\text{expression}", "explanation": "With no equals sign, $2x+5$ is an expression, not an equation.", "diagram": null },
        { "stepNumber": 7, "description": "Contrast with an equation.", "workingLatex": "2x+5=11 \\rightarrow \\text{equation}", "explanation": "Adding $=11$ would turn it into an equation you could solve, which highlights the difference.", "diagram": null },
        { "stepNumber": 8, "description": "Final check.", "workingLatex": "\\text{no } = \\Rightarrow \\text{expression}", "explanation": "The absence of an equals sign is exactly why $2x+5$ is an expression.", "diagram": null },
        { "stepNumber": 9, "description": "Summarise.", "workingLatex": "\\text{expression}", "explanation": "It combines terms without asserting equality, so it is an expression.", "diagram": null }
      ],
      "finalAnswer": "$2x+5$ is an expression because it has no equals sign, so it makes no claim of equality and cannot be solved."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "subject", "variables"],
    "questionText": "For $F=ma$, classify the statement, name its subject, and list its variables.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the linking sign.", "workingLatex": "F=ma", "explanation": "An ordinary $=$ sign connects two sides, so this is not an expression.", "diagram": null },
        { "stepNumber": 2, "description": "Count the different letters.", "workingLatex": "F,\\; m,\\; a", "explanation": "Three different variables appear, which points to a relationship between quantities — a formula.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the relationship.", "workingLatex": "F=ma", "explanation": "This is Newton's rule that force equals mass times acceleration, linking three physical quantities, so it is a formula.", "diagram": null },
        { "stepNumber": 4, "description": "Recall what the subject is.", "workingLatex": "\\text{subject} = \\text{variable alone}", "explanation": "The subject is the variable standing by itself, given directly by the rest of the formula.", "diagram": null },
        { "stepNumber": 5, "description": "Locate the isolated variable.", "workingLatex": "F = ma", "explanation": "$F$ sits alone on the left, so it is the subject.", "diagram": null },
        { "stepNumber": 6, "description": "State the subject.", "workingLatex": "\\text{subject} = F", "explanation": "The subject of the formula is $F$.", "diagram": null },
        { "stepNumber": 7, "description": "List all the variables.", "workingLatex": "F,\\; m,\\; a", "explanation": "The letters representing quantities are $F$, $m$ and $a$.", "diagram": null },
        { "stepNumber": 8, "description": "State the classification.", "workingLatex": "F=ma \\rightarrow \\text{formula}", "explanation": "It relates several variables with one as the subject, so it is a formula.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{formula, subject } F", "explanation": "Given $m$ and $a$, the formula produces $F$, confirming $F$ is the subject and the statement is a formula.", "diagram": null }
      ],
      "finalAnswer": "It is a formula; the subject is $F$; the variables are $F$, $m$ and $a$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "terms", "counting terms"],
    "questionText": "How many terms are there in the expression $5a+3b-2c+7$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a term is.", "workingLatex": "\\text{term} = \\text{part separated by } + \\text{ or } -", "explanation": "Terms are found by splitting the expression wherever a $+$ or $-$ sign appears.", "diagram": null },
        { "stepNumber": 2, "description": "Mark the separating signs.", "workingLatex": "5a\\;{\\color{gray}+}\\;3b\\;{\\color{gray}-}\\;2c\\;{\\color{gray}+}\\;7", "explanation": "There are three signs separating the pieces.", "diagram": null },
        { "stepNumber": 3, "description": "List the first two terms.", "workingLatex": "5a,\\; 3b", "explanation": "The first two pieces are $5a$ and $3b$.", "diagram": null },
        { "stepNumber": 4, "description": "List the next term.", "workingLatex": "-2c", "explanation": "The minus sign attaches to give the term $-2c$.", "diagram": null },
        { "stepNumber": 5, "description": "List the final term.", "workingLatex": "7", "explanation": "The last piece is the constant term $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Count all the terms.", "workingLatex": "5a,\\; 3b,\\; -2c,\\; 7 \\Rightarrow 4", "explanation": "There are four separate pieces, so four terms.", "diagram": null },
        { "stepNumber": 7, "description": "Check none can be combined.", "workingLatex": "a,\\, b,\\, c \\text{ all different}", "explanation": "The variables are all different and the $7$ is constant, so no terms combine, keeping the count at four.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "4 \\text{ terms}", "explanation": "The expression has four terms.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "4", "explanation": "Counting the separating signs (three) and adding one gives four terms, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$4$ terms."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "coefficient", "constant term"],
    "questionText": "In the expression $3-2x$, state the coefficient of $x$ and the constant term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "3,\\; -2x", "explanation": "Splitting at the $-$ sign gives the terms $3$ and $-2x$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the definitions.", "workingLatex": "\\text{coeff of } x, \\;\\text{constant}", "explanation": "The coefficient of $x$ is the signed number multiplying $x$; the constant is the term with no variable.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $x$ term.", "workingLatex": "-2x", "explanation": "The term containing $x$ is $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Read the coefficient with its sign.", "workingLatex": "\\text{coeff of } x = -2", "explanation": "The multiplier of $x$, including the minus sign, is $-2$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the constant term.", "workingLatex": "3", "explanation": "The term with no variable is $3$, so it is the constant.", "diagram": null },
        { "stepNumber": 6, "description": "Watch the order trap.", "workingLatex": "3-2x \\ne 3x", "explanation": "The $3$ being written first does not make it a coefficient of $x$; it is simply the constant.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the answers.", "workingLatex": "-2 \\;\\text{and}\\; 3", "explanation": "So the coefficient of $x$ is $-2$ and the constant term is $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Final check.", "workingLatex": "x=0:\\; 3-2(0)=3", "explanation": "Substituting $x=0$ leaves $3$, confirming the constant term, and the $-2x$ term confirms the coefficient.", "diagram": null },
        { "stepNumber": 9, "description": "Summarise.", "workingLatex": "\\text{coeff } -2, \\;\\text{constant } 3", "explanation": "The results are consistent with the expression as written.", "diagram": null }
      ],
      "finalAnswer": "Coefficient of $x$ is $-2$; constant term is $3$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "like terms", "grouping"],
    "questionText": "From the list $3x,\\; 4y,\\; 7x,\\; 2y$, identify the two pairs of like terms.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of like terms.", "workingLatex": "\\text{like} = \\text{same variable part}", "explanation": "Like terms share exactly the same letters and powers, so we group by variable part.", "diagram": null },
        { "stepNumber": 2, "description": "List the variable parts.", "workingLatex": "3x\\to x,\\;4y\\to y,\\;7x\\to x,\\;2y\\to y", "explanation": "Stripping the numbers away shows each term is built on either $x$ or $y$.", "diagram": null },
        { "stepNumber": 3, "description": "Group the $x$ terms.", "workingLatex": "3x,\\; 7x", "explanation": "Both $3x$ and $7x$ have the variable part $x$, so they belong together.", "diagram": null },
        { "stepNumber": 4, "description": "Group the $y$ terms.", "workingLatex": "4y,\\; 2y", "explanation": "Both $4y$ and $2y$ have the variable part $y$, so they form the second pair.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm the pairs are like.", "workingLatex": "x=x,\\quad y=y", "explanation": "Within each pair the variable parts match exactly, so each pair really is a pair of like terms.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm cross-pairs are unlike.", "workingLatex": "3x \\text{ vs } 4y:\\; x\\ne y", "explanation": "An $x$ term and a $y$ term are unlike, so they cannot be paired together.", "diagram": null },
        { "stepNumber": 7, "description": "State the pairs.", "workingLatex": "\\{3x,7x\\},\\;\\{4y,2y\\}", "explanation": "The two pairs of like terms are $3x$ with $7x$, and $4y$ with $2y$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the coefficients are irrelevant.", "workingLatex": "3x,7x \\to \\text{both } x", "explanation": "The different numbers $3$ and $7$ do not affect the grouping; only the matching variable part $x$ decides that they are like terms.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "3x+7x=10x,\\;4y+2y=6y", "explanation": "Each pair combines into a single term, which only like terms can do, confirming the grouping.", "diagram": null }
      ],
      "finalAnswer": "The like-term pairs are $3x$ & $7x$, and $4y$ & $2y$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "equation", "justification"],
    "questionText": "Explain why $v=u+at$ is a formula rather than an equation to be solved for a single value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what a formula is.", "workingLatex": "\\text{formula} = \\text{rule linking variables}", "explanation": "A formula expresses a general relationship between two or more quantities, allowing you to calculate one from the others.", "diagram": null },
        { "stepNumber": 2, "description": "State what a single-unknown equation is.", "workingLatex": "\\text{equation} = \\text{solve for one value}", "explanation": "A typical equation involves one unknown and is solved to find the particular value that makes it true.", "diagram": null },
        { "stepNumber": 3, "description": "Count the variables in $v=u+at$.", "workingLatex": "v,\\; u,\\; a,\\; t", "explanation": "Four different quantities appear, so there is not a single unknown to solve for.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the relationship.", "workingLatex": "v=u+at", "explanation": "The statement tells you how final velocity depends on initial velocity, acceleration and time — a general rule, not a puzzle with one answer.", "diagram": null },
        { "stepNumber": 5, "description": "Show it is used by substitution.", "workingLatex": "u=2,a=3,t=4 \\Rightarrow v=14", "explanation": "You plug in known values of $u$, $a$ and $t$ to compute $v$; this is how formulae are used.", "diagram": null },
        { "stepNumber": 6, "description": "Show it works for other values too.", "workingLatex": "u=0,a=10,t=2 \\Rightarrow v=20", "explanation": "Different inputs give different outputs, showing the statement is a flexible rule, not a fixed condition.", "diagram": null },
        { "stepNumber": 7, "description": "Contrast with an equation.", "workingLatex": "\\text{no single } v \\text{ to find}", "explanation": "There is no unique value of $v$ to solve for; its value depends on the other variables, unlike an equation with one solution.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the subject.", "workingLatex": "\\text{subject} = v", "explanation": "Having a clearly stated subject $v$ is another sign that this is a formula.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "v=u+at \\rightarrow \\text{formula}", "explanation": "Because it links several variables as a general rule with a subject, it is a formula, not an equation solved for a single value.", "diagram": null }
      ],
      "finalAnswer": "It is a formula: it links several variables ($v,u,a,t$) as a general rule and has a subject $v$, rather than having one unknown to solve for."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "equation", "classification", "justification"],
    "questionText": "Classify $4x-1=7$ as an expression, equation, formula or identity, and justify by testing values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the linking sign.", "workingLatex": "4x-1=7", "explanation": "An ordinary $=$ sign is present, so this is not an expression and, without $\\equiv$, not automatically an identity.", "diagram": null },
        { "stepNumber": 2, "description": "Count the letters.", "workingLatex": "\\text{one letter: } x", "explanation": "Only one variable appears, so this is not the multi-variable relationship of a formula.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the key test.", "workingLatex": "\\text{all values or one?}", "explanation": "To decide between equation and identity we test whether it is true for all values or only some.", "diagram": null },
        { "stepNumber": 4, "description": "Test $x=2$.", "workingLatex": "4(2)-1=7 \\;\\checkmark", "explanation": "With $x=2$ the left side is $7$, matching the right side, so $x=2$ works.", "diagram": null },
        { "stepNumber": 5, "description": "Test $x=0$.", "workingLatex": "4(0)-1=-1 \\ne 7", "explanation": "With $x=0$ the left side is $-1$, which does not equal $7$, so it fails here.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret the tests.", "workingLatex": "\\text{true only for } x=2", "explanation": "Because it holds for one value but not another, it is not true for all values, ruling out an identity.", "diagram": null },
        { "stepNumber": 7, "description": "Solve to confirm the single value.", "workingLatex": "4x=8 \\Rightarrow x=2", "explanation": "Rearranging confirms there is exactly one solution, $x=2$.", "diagram": null },
        { "stepNumber": 8, "description": "State the classification.", "workingLatex": "4x-1=7 \\rightarrow \\text{equation}", "explanation": "An ordinary equals sign true for a single value is an equation.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{equation}", "explanation": "The value tests directly demonstrate it is conditional, confirming the equation classification.", "diagram": null }
      ],
      "finalAnswer": "It is an equation: $x=2$ works but $x=0$ does not, so it is true only for a particular value."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "classification", "expression", "equation", "formula"],
    "questionText": "Classify each of these: (A) $6x-1$  (B) $y=mx+c$  (C) $3x-4=11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the strategy.", "workingLatex": "\\text{check sign, then variables, then values}", "explanation": "For each statement we first look for an equals sign, then count variables, then test values if needed.", "diagram": null },
        { "stepNumber": 2, "description": "Examine (A).", "workingLatex": "6x-1", "explanation": "There is no equals sign, so (A) cannot be an equation, formula or identity.", "diagram": null },
        { "stepNumber": 3, "description": "Classify (A).", "workingLatex": "6x-1 \\rightarrow \\text{expression}", "explanation": "Just terms joined by subtraction with no equals sign makes (A) an expression.", "diagram": null },
        { "stepNumber": 4, "description": "Examine (B).", "workingLatex": "y=mx+c", "explanation": "There is an $=$ sign and several different letters ($y$, $m$, $x$, $c$), suggesting a relationship between variables.", "diagram": null },
        { "stepNumber": 5, "description": "Classify (B).", "workingLatex": "y=mx+c \\rightarrow \\text{formula}", "explanation": "It is the general rule for a straight line, linking variables with $y$ as the subject, so (B) is a formula.", "diagram": null },
        { "stepNumber": 6, "description": "Examine (C).", "workingLatex": "3x-4=11", "explanation": "There is an $=$ sign and a single variable $x$.", "diagram": null },
        { "stepNumber": 7, "description": "Test (C) for a single value.", "workingLatex": "3x=15 \\Rightarrow x=5", "explanation": "Solving gives exactly one value, $x=5$, so it is true only for that particular value.", "diagram": null },
        { "stepNumber": 8, "description": "Classify (C).", "workingLatex": "3x-4=11 \\rightarrow \\text{equation}", "explanation": "An ordinary equals sign true for a single value makes (C) an equation.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the classifications.", "workingLatex": "\\text{(A) expression, (B) formula, (C) equation}", "explanation": "Each statement has been placed by checking for a sign, counting variables and testing values, giving the three labels.", "diagram": null }
      ],
      "finalAnswer": "(A) expression, (B) formula, (C) equation."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "factors", "term"],
    "questionText": "List all the positive whole-number factors of $12$ in the term $12a^2$, and give two variable factors.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "\\text{factor} = \\text{divides exactly}", "explanation": "A factor of the term is any quantity that multiplies with others to give the term, dividing it exactly.", "diagram": null },
        { "stepNumber": 2, "description": "Break the term into pieces.", "workingLatex": "12a^2 = 12 \\times a \\times a", "explanation": "Separating the number from the repeated letter shows the building blocks.", "diagram": null },
        { "stepNumber": 3, "description": "Find factor pairs of $12$.", "workingLatex": "1\\times12,\\;2\\times6,\\;3\\times4", "explanation": "Listing pairs of numbers that multiply to $12$ finds all its whole-number factors systematically.", "diagram": null },
        { "stepNumber": 4, "description": "List the numerical factors.", "workingLatex": "1,2,3,4,6,12", "explanation": "From the pairs, the factors of $12$ are $1$, $2$, $3$, $4$, $6$ and $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Find variable factors.", "workingLatex": "a,\\; a^2", "explanation": "Since $a^2 = a\\times a$, both $a$ and $a^2$ divide the term exactly, so they are variable factors.", "diagram": null },
        { "stepNumber": 6, "description": "Choose two variable factors.", "workingLatex": "a \\;\\text{and}\\; a^2", "explanation": "Two valid variable factors are $a$ and $a^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Verify a combined factor.", "workingLatex": "4a \\times 3a = 12a^2", "explanation": "For instance $4a$ and $3a$ multiply to give the term, showing factors can mix numbers and letters.", "diagram": null },
        { "stepNumber": 8, "description": "State the answers.", "workingLatex": "1,2,3,4,6,12;\\;\\; a,\\,a^2", "explanation": "The whole-number factors of $12$ are listed, with $a$ and $a^2$ as variable factors.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{each divides } 12a^2", "explanation": "Every listed factor divides $12a^2$ exactly, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "Factors of $12$: $1,2,3,4,6,12$; variable factors include $a$ and $a^2$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "coefficient", "two variables"],
    "questionText": "In the expression $5xy-3x$, what is the coefficient of the $xy$ term?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a coefficient is.", "workingLatex": "\\text{coefficient} = \\text{number multiplying the term}", "explanation": "The coefficient of the $xy$ term is the number that the $xy$ is being multiplied by.", "diagram": null },
        { "stepNumber": 2, "description": "Split into terms.", "workingLatex": "5xy,\\; -3x", "explanation": "The expression has two terms, $5xy$ and $-3x$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $xy$ term.", "workingLatex": "5xy", "explanation": "The term containing both $x$ and $y$ is $5xy$.", "diagram": null },
        { "stepNumber": 4, "description": "Separate number from variables.", "workingLatex": "5xy = 5 \\times xy", "explanation": "The number multiplying $xy$ is $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Do not use the other term.", "workingLatex": "-3x \\;\\text{has no } y", "explanation": "The term $-3x$ has only $x$, not $xy$, so it is not the term we want.", "diagram": null },
        { "stepNumber": 6, "description": "State the coefficient.", "workingLatex": "\\text{coefficient of } xy = 5", "explanation": "The coefficient of the $xy$ term is $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Note the other coefficient.", "workingLatex": "\\text{coeff of } x = -3", "explanation": "For contrast, the coefficient of $x$ is $-3$, but the question asked only about $xy$.", "diagram": null },
        { "stepNumber": 8, "description": "Final check.", "workingLatex": "5", "explanation": "Matching the exact variable part $xy$ gives the correct coefficient $5$.", "diagram": null },
        { "stepNumber": 9, "description": "Summarise.", "workingLatex": "\\text{coeff of } xy = 5", "explanation": "The result is consistent with the expression as written.", "diagram": null }
      ],
      "finalAnswer": "The coefficient of the $xy$ term is $5$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "terms", "coefficient", "constant term"],
    "questionText": "For $2x^3-5x^2+x-8$, state the number of terms, the coefficient of $x^2$, and the constant term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "2x^3,\\; -5x^2,\\; x,\\; -8", "explanation": "Splitting at each $+$ or $-$ sign gives four separate pieces.", "diagram": null },
        { "stepNumber": 2, "description": "Count the terms.", "workingLatex": "4 \\text{ terms}", "explanation": "There are four pieces, so four terms.", "diagram": null },
        { "stepNumber": 3, "description": "Find the $x^2$ term.", "workingLatex": "-5x^2", "explanation": "The term with $x$ to the power $2$ is $-5x^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Read its coefficient with the sign.", "workingLatex": "\\text{coeff of } x^2 = -5", "explanation": "The signed number multiplying $x^2$ is $-5$; keep the minus sign.", "diagram": null },
        { "stepNumber": 5, "description": "Avoid confusing with $x^3$.", "workingLatex": "2x^3 \\to \\text{coeff of } x^3 = 2", "explanation": "The $2$ belongs to $x^3$, a different power, so it is not the coefficient of $x^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the coefficient of $x$.", "workingLatex": "x = 1\\times x \\Rightarrow \\text{coeff }1", "explanation": "The bare $x$ has a hidden coefficient of $1$, though the question did not ask for it.", "diagram": null },
        { "stepNumber": 7, "description": "Find the constant term.", "workingLatex": "-8", "explanation": "The only term with no variable is $-8$, so that is the constant.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the constant.", "workingLatex": "x=0:\\; -8", "explanation": "Substituting $x=0$ leaves $-8$, confirming the constant term including its sign.", "diagram": null },
        { "stepNumber": 9, "description": "Collect the answers.", "workingLatex": "4,\\; -5,\\; -8", "explanation": "Four terms, coefficient of $x^2$ is $-5$, and the constant term is $-8$.", "diagram": null }
      ],
      "finalAnswer": "$4$ terms; coefficient of $x^2$ is $-5$; constant term is $-8$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "like terms"],
    "questionText": "Is $2x+3x\\equiv 5x$ an identity? Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what an identity requires.", "workingLatex": "\\equiv \\Rightarrow \\text{true for all } x", "explanation": "We must check that both sides are equal for every value of $x$, which we do by simplifying the left side.", "diagram": null },
        { "stepNumber": 2, "description": "Identify like terms on the left.", "workingLatex": "2x,\\; 3x \\to \\text{like}", "explanation": "Both $2x$ and $3x$ have the same variable part $x$, so they are like terms and can be combined.", "diagram": null },
        { "stepNumber": 3, "description": "Add the coefficients.", "workingLatex": "2+3=5", "explanation": "Adding like terms means adding their coefficients while keeping the variable part.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the left side.", "workingLatex": "2x+3x = 5x", "explanation": "Combining gives $5x$, which is exactly the right-hand side.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the two sides.", "workingLatex": "5x = 5x", "explanation": "The two sides are identical as expressions, so they match for any value of $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Test a value.", "workingLatex": "x=4:\\; 8+12=20,\\; 5(4)=20", "explanation": "Checking $x=4$ gives $20$ on both sides, supporting the conclusion.", "diagram": null },
        { "stepNumber": 7, "description": "Test a second value.", "workingLatex": "x=-1:\\; -2-3=-5,\\; 5(-1)=-5", "explanation": "A negative value also balances, which is what we expect from a genuine identity.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "2x+3x\\equiv 5x \\;\\checkmark", "explanation": "Because the sides are equal for all $x$, this is a genuine identity.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "It simply rewrites the same quantity, which is what an identity does.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $2x+3x$ simplifies to $5x$, so both sides are equal for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "subject", "variables"],
    "questionText": "For $C=2\\pi r$, classify the statement, name the subject, and state which variable it depends on.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the linking sign.", "workingLatex": "C=2\\pi r", "explanation": "An ordinary $=$ sign connects the two sides, so this is not an expression.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variables.", "workingLatex": "C,\\; r", "explanation": "There are two variables, $C$ and $r$, while $\\pi$ is a fixed constant, not a variable.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the relationship.", "workingLatex": "C=2\\pi r", "explanation": "This is the rule for the circumference of a circle in terms of its radius — a relationship between quantities, so it is a formula.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the meaning of subject.", "workingLatex": "\\text{subject} = \\text{isolated variable}", "explanation": "The subject is the variable standing alone, given directly by the rest of the formula.", "diagram": null },
        { "stepNumber": 5, "description": "Find the subject.", "workingLatex": "\\text{subject} = C", "explanation": "$C$ sits by itself on the left, so it is the subject.", "diagram": null },
        { "stepNumber": 6, "description": "State the dependency.", "workingLatex": "C \\text{ depends on } r", "explanation": "As the radius $r$ changes, the circumference $C$ changes with it, so $C$ depends on $r$.", "diagram": null },
        { "stepNumber": 7, "description": "Note $\\pi$ is constant.", "workingLatex": "\\pi \\approx 3.14159", "explanation": "$\\pi$ is a fixed number, so it does not count as a variable the formula depends on.", "diagram": null },
        { "stepNumber": 8, "description": "State the classification.", "workingLatex": "C=2\\pi r \\rightarrow \\text{formula}", "explanation": "It relates two variables with $C$ as the subject, so it is a formula.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{formula, subject } C", "explanation": "Given a value of $r$, the formula produces $C$, confirming the classification and subject.", "diagram": null }
      ],
      "finalAnswer": "It is a formula; the subject is $C$, which depends on the variable $r$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "formula", "classification", "selection"],
    "questionText": "Which of these is a formula? (A) $x+2$  (B) $3x=9$  (C) $A=lw$",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a formula is.", "workingLatex": "\\text{formula} = \\text{rule linking variables}", "explanation": "A formula has an equals sign and connects two or more variables as a general rule.", "diagram": null },
        { "stepNumber": 2, "description": "Examine (A).", "workingLatex": "x+2", "explanation": "There is no equals sign, so (A) is an expression, not a formula.", "diagram": null },
        { "stepNumber": 3, "description": "Examine (B).", "workingLatex": "3x=9", "explanation": "There is an equals sign but only one variable, and it is true only for $x=3$, so (B) is an equation.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm (B) is an equation.", "workingLatex": "3x=9 \\Rightarrow x=3", "explanation": "Solving gives a single value, confirming (B) is an equation rather than a formula.", "diagram": null },
        { "stepNumber": 5, "description": "Examine (C).", "workingLatex": "A=lw", "explanation": "There is an equals sign and three variables ($A$, $l$, $w$), suggesting a relationship between quantities.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret (C).", "workingLatex": "A=lw", "explanation": "This is the rule for the area of a rectangle in terms of length and width — a general rule, so a formula.", "diagram": null },
        { "stepNumber": 7, "description": "Identify the subject of (C).", "workingLatex": "\\text{subject} = A", "explanation": "$A$ stands alone as the subject, another sign that (C) is a formula.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{answer: (C)}", "explanation": "Only (C) links several variables as a general rule, so (C) is the formula.", "diagram": null },
        { "stepNumber": 9, "description": "Summarise the others.", "workingLatex": "\\text{(A) expression, (B) equation}", "explanation": "For completeness, (A) is an expression and (B) is an equation, leaving (C) as the formula.", "diagram": null }
      ],
      "finalAnswer": "Statement (C) $A=lw$ is the formula."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "term", "factor", "difference"],
    "questionText": "Explain the difference between a term and a factor, using $6x$ as an example.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Define a term.", "workingLatex": "\\text{term} = \\text{piece added or subtracted}", "explanation": "A term is one of the pieces of an expression, separated from the others by $+$ or $-$ signs.", "diagram": null },
        { "stepNumber": 2, "description": "Define a factor.", "workingLatex": "\\text{factor} = \\text{piece multiplied}", "explanation": "A factor is one of the things multiplied together to make a term, so factors are joined by multiplication, not addition.", "diagram": null },
        { "stepNumber": 3, "description": "Look at $6x$ as a term.", "workingLatex": "\\ldots + 6x + \\ldots", "explanation": "Within a larger expression, $6x$ would be a single term because it is one added-or-subtracted piece.", "diagram": null },
        { "stepNumber": 4, "description": "Break the term into factors.", "workingLatex": "6x = 6 \\times x", "explanation": "Inside the term, $6$ and $x$ are multiplied, so each of them is a factor of the term.", "diagram": null },
        { "stepNumber": 5, "description": "List the factors of $6x$.", "workingLatex": "1,\\;2,\\;3,\\;6,\\;x,\\;2x,\\;3x,\\;6x", "explanation": "Any quantity dividing $6x$ exactly is a factor, including numbers dividing $6$ and combinations with $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Contrast the two ideas.", "workingLatex": "\\text{terms: } +/-, \\;\\text{factors: } \\times", "explanation": "The key difference is the operation: terms are combined by adding or subtracting, factors by multiplying.", "diagram": null },
        { "stepNumber": 7, "description": "Illustrate with a two-term expression.", "workingLatex": "6x+5:\\; \\text{terms } 6x,5", "explanation": "In $6x+5$, the terms are $6x$ and $5$, while the factors of the term $6x$ are $6$ and $x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "\\text{term vs factor}", "explanation": "So $6x$ is a term made from the factors $6$ and $x$; terms are added, factors are multiplied.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "6\\times x = 6x", "explanation": "Multiplying the factors $6$ and $x$ rebuilds the term $6x$, confirming the distinction.", "diagram": null }
      ],
      "finalAnswer": "A term is a piece added/subtracted (like $6x$); factors are pieces multiplied together (like $6$ and $x$) to build a term."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "coefficient", "constant term", "quadratic"],
    "questionText": "In the expression $9-x^2$, state the coefficient of $x^2$ and the constant term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "9,\\; -x^2", "explanation": "Splitting at the $-$ sign gives the terms $9$ and $-x^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the $x^2$ term.", "workingLatex": "-x^2", "explanation": "The term containing $x^2$ is $-x^2$, with a minus sign and no visible number.", "diagram": null },
        { "stepNumber": 3, "description": "Reveal the hidden coefficient.", "workingLatex": "-x^2 = -1 \\times x^2", "explanation": "A bare $-x^2$ means negative one lot of $x^2$, so the coefficient is $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the constant term.", "workingLatex": "9", "explanation": "The term with no variable is $9$, so that is the constant.", "diagram": null },
        { "stepNumber": 5, "description": "Beware the order trap.", "workingLatex": "9-x^2 \\ne 9x^2", "explanation": "Writing the $9$ first does not make it a coefficient; it is the constant, and the coefficient of $x^2$ is still $-1$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the answers.", "workingLatex": "-1 \\;\\text{and}\\; 9", "explanation": "The coefficient of $x^2$ is $-1$ and the constant term is $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the constant.", "workingLatex": "x=0:\\; 9-0=9", "explanation": "Substituting $x=0$ leaves $9$, confirming the constant term.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the coefficient.", "workingLatex": "x=1:\\; 9-1=8 = 9+(-1)(1)", "explanation": "With $x=1$, the $x^2$ term contributes $-1$, matching a coefficient of $-1$.", "diagram": null },
        { "stepNumber": 9, "description": "Summarise.", "workingLatex": "\\text{coeff } -1, \\;\\text{constant } 9", "explanation": "The results are consistent with the expression as written.", "diagram": null }
      ],
      "finalAnswer": "Coefficient of $x^2$ is $-1$; constant term is $9$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "selection", "justification"],
    "questionText": "Which of these is an identity? (A) $5x-2=3x$  (B) $4(x-1)\\equiv 4x-4$  (C) $x^2=9$. Justify.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what an identity requires.", "workingLatex": "\\text{true for all values}", "explanation": "An identity balances for every value of the variable; equations balance only for particular values.", "diagram": null },
        { "stepNumber": 2, "description": "Test (A).", "workingLatex": "5x-2=3x \\Rightarrow x=1", "explanation": "Rearranging gives $2x=2$, so $x=1$ only; (A) is an equation.", "diagram": null },
        { "stepNumber": 3, "description": "Test (C).", "workingLatex": "x^2=9 \\Rightarrow x=\\pm 3", "explanation": "This holds only for $x=3$ or $x=-3$, not for all values, so (C) is an equation.", "diagram": null },
        { "stepNumber": 4, "description": "Focus on (B).", "workingLatex": "4(x-1)\\equiv 4x-4", "explanation": "Statement (B) uses $\\equiv$, so we check whether both sides are equal for all $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the left side of (B).", "workingLatex": "4(x-1) = 4\\times x - 4\\times 1", "explanation": "Distributing the $4$ over the bracket multiplies each inside term by $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Complete the expansion.", "workingLatex": "= 4x-4", "explanation": "This gives $4x-4$, exactly the right-hand side.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the sides.", "workingLatex": "4x-4 = 4x-4", "explanation": "The two sides are identical, so they are equal for every value of $x$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "\\text{answer: (B)}", "explanation": "Only (B) is true for all values, so it is the identity.", "diagram": null },
        { "stepNumber": 9, "description": "Final check.", "workingLatex": "\\text{(A),(C) equations; (B) identity}", "explanation": "(A) and (C) hold only for particular values, confirming that (B) is the sole identity.", "diagram": null }
      ],
      "finalAnswer": "Statement (B) $4(x-1)\\equiv 4x-4$ is the identity, since expanding gives $4x-4$ for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "expression", "equation", "difference"],
    "questionText": "Explain the difference between an expression and an equation, giving one example of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Define an expression.", "workingLatex": "\\text{expression} = \\text{terms, no } =", "explanation": "An expression is a collection of terms combined by operations, with no equals sign, so it makes no claim of equality.", "diagram": null },
        { "stepNumber": 2, "description": "Define an equation.", "workingLatex": "\\text{equation} = \\text{two sides joined by } =", "explanation": "An equation sets two expressions equal using an equals sign, and is usually true only for particular values.", "diagram": null },
        { "stepNumber": 3, "description": "Give an expression example.", "workingLatex": "3x+7", "explanation": "The statement $3x+7$ has no equals sign, so it is an expression you can only evaluate.", "diagram": null },
        { "stepNumber": 4, "description": "Give an equation example.", "workingLatex": "3x+7=13", "explanation": "Adding $=13$ turns it into an equation that can be solved.", "diagram": null },
        { "stepNumber": 5, "description": "Show the equation has a solution.", "workingLatex": "3x=6 \\Rightarrow x=2", "explanation": "The equation is true only for $x=2$, illustrating how equations pin down a value.", "diagram": null },
        { "stepNumber": 6, "description": "Show the expression cannot be solved.", "workingLatex": "3x+7 \\;\\text{just evaluates}", "explanation": "Without an equals sign there is nothing to solve; you simply substitute a value to get a number.", "diagram": null },
        { "stepNumber": 7, "description": "State the key difference.", "workingLatex": "= \\text{ present?}", "explanation": "The presence or absence of an equals sign is the deciding feature between the two.", "diagram": null },
        { "stepNumber": 8, "description": "Note a shared feature.", "workingLatex": "3x+7 \\;\\text{inside}\\; 3x+7=13", "explanation": "An equation is built from expressions; here the expression $3x+7$ sits on the left of the equation, so the two ideas are closely linked but not the same.", "diagram": null },
        { "stepNumber": 9, "description": "Final summary.", "workingLatex": "\\text{expression: evaluate; equation: solve}", "explanation": "An expression is evaluated for a value, while an equation is solved to find a value.", "diagram": null }
      ],
      "finalAnswer": "An expression (e.g. $3x+7$) has no equals sign and is evaluated; an equation (e.g. $3x+7=13$) has an equals sign and is solved."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "terms", "coefficient", "like terms"],
    "questionText": "For $7y^2+2y-y^2+4$, first simplify, then state the number of terms and the coefficient of $y^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the original terms.", "workingLatex": "7y^2,\\; 2y,\\; -y^2,\\; 4", "explanation": "The expression as written has four terms before any simplifying.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the like terms.", "workingLatex": "7y^2 \\text{ and } -y^2", "explanation": "Both $7y^2$ and $-y^2$ have the variable part $y^2$, so they are like terms that can be combined.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the $y^2$ terms.", "workingLatex": "7y^2 - y^2 = 6y^2", "explanation": "Subtracting the coefficients, $7-1=6$, gives $6y^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Carry the other terms down.", "workingLatex": "6y^2 + 2y + 4", "explanation": "The terms $2y$ and $4$ have no like partners, so they stay unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Write the simplified expression.", "workingLatex": "6y^2+2y+4", "explanation": "The fully simplified form is $6y^2+2y+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Count the terms now.", "workingLatex": "6y^2,\\; 2y,\\; 4 \\Rightarrow 3", "explanation": "After combining, there are three terms.", "diagram": null },
        { "stepNumber": 7, "description": "Find the coefficient of $y^2$.", "workingLatex": "\\text{coeff of } y^2 = 6", "explanation": "In the simplified expression, the number multiplying $y^2$ is $6$.", "diagram": null },
        { "stepNumber": 8, "description": "Note the importance of simplifying first.", "workingLatex": "\\text{before: }7,\\;\\text{after: }6", "explanation": "The coefficient of $y^2$ is only correct after combining like terms, which is why we simplified first.", "diagram": null },
        { "stepNumber": 9, "description": "State the answers.", "workingLatex": "3 \\text{ terms},\\; \\text{coeff } 6", "explanation": "The simplified expression has three terms and the coefficient of $y^2$ is $6$.", "diagram": null }
      ],
      "finalAnswer": "Simplified: $6y^2+2y+4$; $3$ terms; coefficient of $y^2$ is $6$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "verification"],
    "questionText": "Verify whether $(x+3)^2\\equiv x^2+6x+9$ is an identity by expanding the left-hand side.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what must be shown.", "workingLatex": "\\text{LHS} = \\text{RHS for all } x", "explanation": "To confirm an identity we expand one side and check it becomes identical to the other, term for term.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square as a product.", "workingLatex": "(x+3)^2 = (x+3)(x+3)", "explanation": "Squaring a bracket means multiplying it by itself, which sets up the expansion.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first term of each bracket multiplies to give $x^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair, $x$ and $3$, multiply to give $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair, $3$ and $x$, also give $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the last terms.", "workingLatex": "3 \\times 3 = 9", "explanation": "The final terms multiply to give the constant $9$.", "diagram": null },
        { "stepNumber": 7, "description": "Write out all four products.", "workingLatex": "x^2 + 3x + 3x + 9", "explanation": "Collecting the four products gives the full unsimplified expansion.", "diagram": null },
        { "stepNumber": 8, "description": "Identify the like terms.", "workingLatex": "3x + 3x", "explanation": "The two middle terms are like terms because both have the variable part $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the like terms.", "workingLatex": "3x+3x = 6x", "explanation": "Adding the coefficients $3+3$ gives $6x$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the simplified expansion.", "workingLatex": "x^2 + 6x + 9", "explanation": "The left-hand side simplifies to $x^2+6x+9$.", "diagram": null },
        { "stepNumber": 11, "description": "Compare with the right-hand side.", "workingLatex": "x^2+6x+9 = x^2+6x+9", "explanation": "This matches the right-hand side exactly, term for term.", "diagram": null },
        { "stepNumber": 12, "description": "Test a value as a safeguard.", "workingLatex": "x=2:\\; (5)^2=25,\\; 4+12+9=25", "explanation": "Checking $x=2$ gives $25$ on both sides, supporting the algebra.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(x+3)^2\\equiv x^2+6x+9", "explanation": "Since the expanded left side equals the right side for all $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $(x+3)^2$ expands to $x^2+6x+9$, matching the right-hand side for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "verification"],
    "questionText": "Determine whether $2(3x-4)\\equiv 6x-8$ is an identity, showing full working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{check LHS} = \\text{RHS for all } x", "explanation": "We expand the left side and see whether it becomes exactly the right side.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the distributive law.", "workingLatex": "a(b+c) = ab+ac", "explanation": "Multiplying a bracket by a number means multiplying each term inside by that number.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first inside term.", "workingLatex": "2 \\times 3x = 6x", "explanation": "The $2$ multiplies $3x$ to give $6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second inside term.", "workingLatex": "2 \\times (-4) = -8", "explanation": "The $2$ multiplies $-4$ to give $-8$, keeping the negative sign.", "diagram": null },
        { "stepNumber": 5, "description": "Write the expansion.", "workingLatex": "2(3x-4) = 6x-8", "explanation": "Putting the two products together gives $6x-8$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two sides.", "workingLatex": "6x-8 = 6x-8", "explanation": "The expanded left side matches the right side exactly.", "diagram": null },
        { "stepNumber": 7, "description": "Test a value.", "workingLatex": "x=1:\\; 2(-1)=-2,\\; 6-8=-2", "explanation": "Checking $x=1$ gives $-2$ on both sides, supporting the result.", "diagram": null },
        { "stepNumber": 8, "description": "Test another value.", "workingLatex": "x=3:\\; 2(5)=10,\\; 18-8=10", "explanation": "A second value also balances, as an identity requires.", "diagram": null },
        { "stepNumber": 9, "description": "Test a negative value.", "workingLatex": "x=-2:\\; 2(-10)=-20,\\; -12-8=-20", "explanation": "Even a negative value matches, giving strong confidence.", "diagram": null },
        { "stepNumber": 10, "description": "Compare coefficients of $x$.", "workingLatex": "6x \\text{ vs } 6x", "explanation": "The coefficient of $x$ is $6$ on both sides, so the variable parts agree exactly.", "diagram": null },
        { "stepNumber": 11, "description": "Compare the constant terms.", "workingLatex": "-8 \\text{ vs } -8", "explanation": "The constant term is $-8$ on both sides, so the two expressions match part for part.", "diagram": null },
        { "stepNumber": 12, "description": "State the conclusion.", "workingLatex": "2(3x-4)\\equiv 6x-8", "explanation": "Since the sides are equal for all $x$, the statement is a true identity.", "diagram": null },
        { "stepNumber": 13, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "The algebra and value tests agree, confirming it is an identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $2(3x-4)$ expands to $6x-8$, equal for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "collecting terms"],
    "questionText": "Show that $3(x+2)+2(x-1)\\equiv 5x+4$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{simplify LHS to match RHS}", "explanation": "We expand both brackets on the left and collect like terms to see if we reach $5x+4$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "3(x+2) = 3x+6", "explanation": "Multiplying the $3$ over $x$ and $2$ gives $3x$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the second bracket.", "workingLatex": "2(x-1) = 2x-2", "explanation": "Multiplying the $2$ over $x$ and $-1$ gives $2x$ and $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the full expansion.", "workingLatex": "3x+6+2x-2", "explanation": "Combining the two expansions lists all four terms.", "diagram": null },
        { "stepNumber": 5, "description": "Group the $x$ terms.", "workingLatex": "3x+2x", "explanation": "The terms $3x$ and $2x$ are like terms because both have the variable part $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x$ terms.", "workingLatex": "3x+2x = 5x", "explanation": "Adding the coefficients $3+2$ gives $5x$.", "diagram": null },
        { "stepNumber": 7, "description": "Group the constants.", "workingLatex": "6-2", "explanation": "The constant terms $6$ and $-2$ can be combined separately.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the constants.", "workingLatex": "6-2 = 4", "explanation": "Subtracting gives the constant $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified left side.", "workingLatex": "5x+4", "explanation": "Putting the parts together gives $5x+4$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare with the right side.", "workingLatex": "5x+4 = 5x+4", "explanation": "This is exactly the right-hand side, so the sides match.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value.", "workingLatex": "x=2:\\; 3(4)+2(1)=14,\\; 5(2)+4=14", "explanation": "Checking $x=2$ gives $14$ on both sides, supporting the result.", "diagram": null },
        { "stepNumber": 12, "description": "Test another value.", "workingLatex": "x=0:\\; 3(2)+2(-1)=4,\\; 4", "explanation": "With $x=0$ both sides give $4$, as expected for an identity.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "3(x+2)+2(x-1)\\equiv 5x+4", "explanation": "Since the simplified left side equals the right side for all $x$, this is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: the left side simplifies to $5x+4$, equal to the right side for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "double brackets"],
    "questionText": "Verify whether $(x+2)(x+5)\\equiv x^2+7x+10$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand LHS, compare with RHS}", "explanation": "We multiply out the two brackets and check the result matches the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first term of each bracket multiplies to give $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outer terms.", "workingLatex": "x \\times 5 = 5x", "explanation": "The outer pair $x$ and $5$ multiply to give $5x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the inner terms.", "workingLatex": "2 \\times x = 2x", "explanation": "The inner pair $2$ and $x$ multiply to give $2x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the last terms.", "workingLatex": "2 \\times 5 = 10", "explanation": "The last terms multiply to give the constant $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all four products.", "workingLatex": "x^2 + 5x + 2x + 10", "explanation": "Collecting the four products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 7, "description": "Identify the like terms.", "workingLatex": "5x + 2x", "explanation": "The two $x$ terms are like terms and can be combined.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the like terms.", "workingLatex": "5x+2x = 7x", "explanation": "Adding the coefficients $5+2$ gives $7x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified expansion.", "workingLatex": "x^2+7x+10", "explanation": "The left-hand side simplifies to $x^2+7x+10$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare with the right side.", "workingLatex": "x^2+7x+10 = x^2+7x+10", "explanation": "This matches the right-hand side exactly, term for term.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value.", "workingLatex": "x=1:\\; (3)(6)=18,\\; 1+7+10=18", "explanation": "Checking $x=1$ gives $18$ on both sides, supporting the algebra.", "diagram": null },
        { "stepNumber": 12, "description": "Test another value.", "workingLatex": "x=0:\\; (2)(5)=10,\\; 10", "explanation": "With $x=0$ both sides give $10$, as expected.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(x+2)(x+5)\\equiv x^2+7x+10", "explanation": "Since the expanded left side equals the right side for all $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $(x+2)(x+5)$ expands to $x^2+7x+10$ for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "counterexample"],
    "questionText": "Decide whether $(x-4)^2\\equiv x^2-16$ is an identity. Justify your answer with full working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand LHS, compare with RHS}", "explanation": "We expand $(x-4)^2$ correctly and see whether it truly equals $x^2-16$ for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square as a product.", "workingLatex": "(x-4)^2 = (x-4)(x-4)", "explanation": "Squaring means multiplying the bracket by itself, not squaring each term separately.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first terms give $x^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the outer terms.", "workingLatex": "x \\times (-4) = -4x", "explanation": "The outer pair gives $-4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the inner terms.", "workingLatex": "-4 \\times x = -4x", "explanation": "The inner pair also gives $-4x$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the last terms.", "workingLatex": "-4 \\times -4 = 16", "explanation": "Two negatives multiply to give a positive $16$.", "diagram": null },
        { "stepNumber": 7, "description": "Write all four products.", "workingLatex": "x^2 - 4x - 4x + 16", "explanation": "Collecting the products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the like terms.", "workingLatex": "-4x - 4x = -8x", "explanation": "Adding the two middle terms gives $-8x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the correct expansion.", "workingLatex": "x^2 - 8x + 16", "explanation": "So $(x-4)^2 = x^2-8x+16$, which has a middle term.", "diagram": null },
        { "stepNumber": 10, "description": "Compare with the claimed right side.", "workingLatex": "x^2-8x+16 \\ne x^2-16", "explanation": "The correct expansion has a $-8x$ term and a $+16$, whereas the claim has neither, so the two are not equal.", "diagram": null },
        { "stepNumber": 11, "description": "Give a counterexample.", "workingLatex": "x=1:\\; (-3)^2=9,\\; 1-16=-15", "explanation": "For $x=1$ the left side is $9$ but the right side is $-15$; a single failing value is enough to disprove an identity.", "diagram": null },
        { "stepNumber": 12, "description": "Explain the misconception.", "workingLatex": "(x-4)^2 \\ne x^2-4^2", "explanation": "The claim wrongly squares each term separately; squaring a bracket must include the cross terms.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(x-4)^2 \\not\\equiv x^2-16", "explanation": "Because the sides differ, this is not an identity; the correct identity is $(x-4)^2\\equiv x^2-8x+16$.", "diagram": null }
      ],
      "finalAnswer": "No, it is not an identity: $(x-4)^2 = x^2-8x+16 \\ne x^2-16$ (e.g. $x=1$ gives $9 \\ne -15$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "classification", "mixed", "reasoning"],
    "questionText": "Classify each statement with a reason: (A) $4x-9$  (B) $2x+1=9$  (C) $P=2(l+w)$  (D) $5(x+2)\\equiv 5x+10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the strategy.", "workingLatex": "\\text{sign} \\to \\text{variables} \\to \\text{values}", "explanation": "For each statement we check for an equals sign, count variables, and test values where needed.", "diagram": null },
        { "stepNumber": 2, "description": "Examine (A).", "workingLatex": "4x-9", "explanation": "There is no equals sign, so (A) has no claim of equality.", "diagram": null },
        { "stepNumber": 3, "description": "Classify (A).", "workingLatex": "4x-9 \\rightarrow \\text{expression}", "explanation": "Just terms joined by subtraction with no equals sign makes (A) an expression.", "diagram": null },
        { "stepNumber": 4, "description": "Examine (B).", "workingLatex": "2x+1=9", "explanation": "There is an ordinary $=$ and one variable $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Test (B).", "workingLatex": "2x=8 \\Rightarrow x=4", "explanation": "It is true only for $x=4$, so (B) is an equation.", "diagram": null },
        { "stepNumber": 6, "description": "Examine (C).", "workingLatex": "P=2(l+w)", "explanation": "There is an $=$ and several variables ($P$, $l$, $w$), forming a general rule.", "diagram": null },
        { "stepNumber": 7, "description": "Classify (C).", "workingLatex": "P=2(l+w) \\rightarrow \\text{formula}", "explanation": "It is the perimeter rule for a rectangle, linking variables with $P$ as the subject, so it is a formula.", "diagram": null },
        { "stepNumber": 8, "description": "Examine (D).", "workingLatex": "5(x+2)\\equiv 5x+10", "explanation": "The $\\equiv$ sign suggests an identity, which we verify by expanding.", "diagram": null },
        { "stepNumber": 9, "description": "Expand (D)'s left side.", "workingLatex": "5(x+2) = 5x+10", "explanation": "Distributing the $5$ gives $5x+10$, matching the right side.", "diagram": null },
        { "stepNumber": 10, "description": "Classify (D).", "workingLatex": "5(x+2)\\equiv 5x+10 \\rightarrow \\text{identity}", "explanation": "The sides are equal for all $x$, so (D) is an identity.", "diagram": null },
        { "stepNumber": 11, "description": "Check (D) with a value.", "workingLatex": "x=3:\\; 5(5)=25,\\; 15+10=25", "explanation": "The value $x=3$ balances, supporting the identity classification.", "diagram": null },
        { "stepNumber": 12, "description": "Collect the classifications.", "workingLatex": "\\text{expr, eqn, formula, identity}", "explanation": "Each of the four types appears exactly once across the statements.", "diagram": null },
        { "stepNumber": 13, "description": "State the answers with reasons.", "workingLatex": "\\text{A:expr, B:eqn, C:formula, D:identity}", "explanation": "(A) has no equals sign; (B) is true for one value; (C) links variables as a rule; (D) is true for all values.", "diagram": null }
      ],
      "finalAnswer": "(A) expression (no $=$), (B) equation (true only for $x=4$), (C) formula (links variables), (D) identity (true for all $x$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "double brackets"],
    "questionText": "Verify whether $(2x+1)(x-3)\\equiv 2x^2-5x-3$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand LHS, compare with RHS}", "explanation": "We multiply out the brackets carefully and check the result matches the right-hand side.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first terms.", "workingLatex": "2x \\times x = 2x^2", "explanation": "The first term of each bracket multiplies to give $2x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outer terms.", "workingLatex": "2x \\times (-3) = -6x", "explanation": "The outer pair $2x$ and $-3$ gives $-6x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair $1$ and $x$ gives $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the last terms.", "workingLatex": "1 \\times (-3) = -3", "explanation": "The last terms give the constant $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all four products.", "workingLatex": "2x^2 - 6x + x - 3", "explanation": "Collecting the products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 7, "description": "Identify the like terms.", "workingLatex": "-6x + x", "explanation": "The two $x$ terms are like terms and can be combined.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the like terms.", "workingLatex": "-6x + x = -5x", "explanation": "Adding the coefficients $-6+1$ gives $-5x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified expansion.", "workingLatex": "2x^2 - 5x - 3", "explanation": "The left side simplifies to $2x^2-5x-3$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare with the right side.", "workingLatex": "2x^2-5x-3 = 2x^2-5x-3", "explanation": "This matches the right-hand side exactly, term for term.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value.", "workingLatex": "x=2:\\; (5)(-1)=-5,\\; 8-10-3=-5", "explanation": "Checking $x=2$ gives $-5$ on both sides, supporting the algebra.", "diagram": null },
        { "stepNumber": 12, "description": "Test another value.", "workingLatex": "x=0:\\; (1)(-3)=-3,\\; -3", "explanation": "With $x=0$ both sides give $-3$, as expected.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(2x+1)(x-3)\\equiv 2x^2-5x-3", "explanation": "Since the expanded left side equals the right side for all $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $(2x+1)(x-3)$ expands to $2x^2-5x-3$ for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "identity", "unknown coefficient"],
    "questionText": "Find the value of $k$ so that $4x+kx\\equiv 9x$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what an identity demands.", "workingLatex": "\\text{true for all } x", "explanation": "For the statement to hold for every value of $x$, the two sides must be the same expression, so their coefficients of $x$ must match.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise the left terms are like.", "workingLatex": "4x,\\; kx \\to \\text{like}", "explanation": "Both $4x$ and $kx$ have the variable part $x$, so they can be combined into one term.", "diagram": null },
        { "stepNumber": 3, "description": "Combine the left side.", "workingLatex": "4x+kx = (4+k)x", "explanation": "Adding like terms means adding coefficients, giving $(4+k)x$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the identity condition.", "workingLatex": "(4+k)x \\equiv 9x", "explanation": "For this to be true for all $x$, the coefficient on the left must equal the coefficient on the right.", "diagram": null },
        { "stepNumber": 5, "description": "Equate the coefficients.", "workingLatex": "4+k = 9", "explanation": "Matching the number multiplying $x$ on each side gives an equation for $k$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $k$.", "workingLatex": "k = 9-4", "explanation": "Subtracting $4$ from both sides isolates $k$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute $k$.", "workingLatex": "k = 5", "explanation": "So the required value is $k=5$.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute back to check.", "workingLatex": "4x+5x = 9x", "explanation": "With $k=5$ the left side becomes $9x$, matching the right side.", "diagram": null },
        { "stepNumber": 9, "description": "Test a value.", "workingLatex": "x=2:\\; 8+10=18,\\; 9(2)=18", "explanation": "Checking $x=2$ gives $18$ on both sides, confirming the identity holds.", "diagram": null },
        { "stepNumber": 10, "description": "Test another value.", "workingLatex": "x=-1:\\; -4-5=-9,\\; 9(-1)=-9", "explanation": "A negative value also balances, as an identity should.", "diagram": null },
        { "stepNumber": 11, "description": "Explain why matching coefficients works.", "workingLatex": "\\text{coeffs equal} \\Rightarrow \\text{all } x", "explanation": "When the coefficient of $x$ is the same on both sides and there are no constants, the expressions are identical for every $x$.", "diagram": null },
        { "stepNumber": 12, "description": "State the answer.", "workingLatex": "k=5", "explanation": "The value that makes the statement an identity is $k=5$.", "diagram": null },
        { "stepNumber": 13, "description": "Final check.", "workingLatex": "4x+5x\\equiv 9x", "explanation": "Substituting $k=5$ gives a genuine identity, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$k=5$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "identity", "unknown constant"],
    "questionText": "Find the value of $a$ so that $3(x+a)\\equiv 3x+12$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the identity condition.", "workingLatex": "\\text{true for all } x", "explanation": "For an identity, once we expand the left side it must match the right side term for term.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left side.", "workingLatex": "3(x+a) = 3x+3a", "explanation": "Distributing the $3$ over $x$ and $a$ gives $3x$ and $3a$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the identity to satisfy.", "workingLatex": "3x+3a \\equiv 3x+12", "explanation": "We now compare $3x+3a$ with the target $3x+12$.", "diagram": null },
        { "stepNumber": 4, "description": "Match the $x$ terms.", "workingLatex": "3x = 3x \\;\\checkmark", "explanation": "The $x$ terms already agree, so no condition comes from them.", "diagram": null },
        { "stepNumber": 5, "description": "Match the constant terms.", "workingLatex": "3a = 12", "explanation": "For the identity to hold, the constant on the left must equal the constant on the right.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $a$.", "workingLatex": "a = \\frac{12}{3}", "explanation": "Dividing both sides by $3$ isolates $a$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute $a$.", "workingLatex": "a = 4", "explanation": "So the required value is $a=4$.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute back.", "workingLatex": "3(x+4) = 3x+12", "explanation": "With $a=4$, expanding gives exactly $3x+12$.", "diagram": null },
        { "stepNumber": 9, "description": "Test a value.", "workingLatex": "x=1:\\; 3(5)=15,\\; 3+12=15", "explanation": "Checking $x=1$ gives $15$ on both sides, confirming the identity.", "diagram": null },
        { "stepNumber": 10, "description": "Test another value.", "workingLatex": "x=0:\\; 3(4)=12,\\; 12", "explanation": "With $x=0$ both sides give $12$, as expected.", "diagram": null },
        { "stepNumber": 11, "description": "Explain why comparing constants works.", "workingLatex": "\\text{match each part}", "explanation": "Two expressions are identical only if both their $x$-coefficients and their constants agree; here that fixes $a$.", "diagram": null },
        { "stepNumber": 12, "description": "State the answer.", "workingLatex": "a = 4", "explanation": "The value making the statement an identity is $a=4$.", "diagram": null },
        { "stepNumber": 13, "description": "Final check.", "workingLatex": "3(x+4)\\equiv 3x+12", "explanation": "Substituting $a=4$ produces a genuine identity, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$a=4$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "misconception", "like terms", "identity"],
    "questionText": "A student writes $x+x\\equiv x^2$. Explain the misconception and state the correct identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the claimed statement.", "workingLatex": "x+x\\equiv x^2", "explanation": "The student is claiming that adding $x$ to itself gives $x^2$, which we should test carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the meaning of adding like terms.", "workingLatex": "x+x = 2x", "explanation": "Adding two lots of the same term $x$ counts how many there are, giving $2x$, not a higher power.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the meaning of $x^2$.", "workingLatex": "x^2 = x \\times x", "explanation": "Squaring means multiplying $x$ by itself, which is a different operation from adding.", "diagram": null },
        { "stepNumber": 4, "description": "Contrast the two operations.", "workingLatex": "\\text{add: } 2x, \\;\\text{multiply: } x^2", "explanation": "The student has confused addition with multiplication; addition raises the count, multiplication raises the power.", "diagram": null },
        { "stepNumber": 5, "description": "Test the claim with a value.", "workingLatex": "x=3:\\; 3+3=6,\\; 3^2=9", "explanation": "For $x=3$, the left side is $6$ but $x^2$ is $9$; they disagree, so the claim is false.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm it fails in general.", "workingLatex": "x=5:\\; 5+5=10,\\; 25", "explanation": "Another value shows an even bigger gap, so it is not an identity.", "diagram": null },
        { "stepNumber": 7, "description": "State the correct identity.", "workingLatex": "x+x\\equiv 2x", "explanation": "The true identity for all values is $x+x\\equiv 2x$.", "diagram": null },
        { "stepNumber": 8, "description": "Check the correct identity.", "workingLatex": "x=3:\\; 3+3=6,\\; 2(3)=6", "explanation": "For $x=3$ both sides give $6$, confirming $x+x\\equiv 2x$.", "diagram": null },
        { "stepNumber": 9, "description": "Note when $2x=x^2$.", "workingLatex": "2x=x^2 \\Rightarrow x=0 \\text{ or } 2", "explanation": "The two only ever coincide at $x=0$ and $x=2$, which shows the original was at best an equation, never an identity.", "diagram": null },
        { "stepNumber": 10, "description": "Summarise the correction.", "workingLatex": "x+x = 2x \\ne x^2", "explanation": "The misconception is treating repeated addition as squaring; correctly, $x+x=2x$.", "diagram": null },
        { "stepNumber": 11, "description": "Final check.", "workingLatex": "\\text{correct identity: } x+x\\equiv 2x", "explanation": "The corrected statement holds for all $x$, so it is a genuine identity.", "diagram": null },
        { "stepNumber": 12, "description": "Give guidance.", "workingLatex": "\\text{count terms, do not change power}", "explanation": "When adding like terms, only the coefficient changes; the power of the variable stays the same.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "\\text{misconception explained}", "explanation": "The student confused adding with multiplying; the correct identity is $x+x\\equiv 2x$.", "diagram": null }
      ],
      "finalAnswer": "The student confused adding with squaring: $x+x$ counts terms giving $2x$, not $x^2$. The correct identity is $x+x\\equiv 2x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "difference of squares", "expanding"],
    "questionText": "Verify whether $(x+1)(x-1)\\equiv x^2-1$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand LHS, compare with RHS}", "explanation": "We multiply out the brackets and check whether the result equals $x^2-1$ for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first term of each bracket multiplies to give $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outer terms.", "workingLatex": "x \\times (-1) = -x", "explanation": "The outer pair $x$ and $-1$ gives $-x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the inner terms.", "workingLatex": "1 \\times x = x", "explanation": "The inner pair $1$ and $x$ gives $+x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the last terms.", "workingLatex": "1 \\times (-1) = -1", "explanation": "The last terms give the constant $-1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all four products.", "workingLatex": "x^2 - x + x - 1", "explanation": "Collecting the products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the middle terms.", "workingLatex": "-x + x = 0", "explanation": "The two $x$ terms are opposites, so they cancel to zero.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified expansion.", "workingLatex": "x^2 - 1", "explanation": "With the middle terms gone, the left side simplifies to $x^2-1$.", "diagram": null },
        { "stepNumber": 9, "description": "Compare with the right side.", "workingLatex": "x^2-1 = x^2-1", "explanation": "This matches the right-hand side exactly.", "diagram": null },
        { "stepNumber": 10, "description": "Test a value.", "workingLatex": "x=3:\\; (4)(2)=8,\\; 9-1=8", "explanation": "Checking $x=3$ gives $8$ on both sides, supporting the result.", "diagram": null },
        { "stepNumber": 11, "description": "Test another value.", "workingLatex": "x=0:\\; (1)(-1)=-1,\\; -1", "explanation": "With $x=0$ both sides give $-1$, as expected.", "diagram": null },
        { "stepNumber": 12, "description": "Name the pattern.", "workingLatex": "(x+1)(x-1)\\equiv x^2-1", "explanation": "This is the difference-of-two-squares pattern, where the cross terms always cancel.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "\\text{identity}", "explanation": "Since the expanded left side equals the right side for all $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $(x+1)(x-1)$ expands to $x^2-1$ (difference of two squares) for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "construction", "expression", "equation", "formula", "identity"],
    "questionText": "Using the variable $x$ (and $y$ where needed), construct one example each of an expression, an equation, a formula and an identity, and justify each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the four definitions.", "workingLatex": "\\text{expr, eqn, formula, identity}", "explanation": "We need one statement of each type, so we keep the defining feature of each in mind as we build them.", "diagram": null },
        { "stepNumber": 2, "description": "Build an expression.", "workingLatex": "2x+7", "explanation": "Choosing terms with no equals sign gives an expression; $2x+7$ is just terms combined.", "diagram": null },
        { "stepNumber": 3, "description": "Justify the expression.", "workingLatex": "\\text{no } = \\text{ sign}", "explanation": "Because it has no equals sign, $2x+7$ makes no claim of equality, so it is an expression.", "diagram": null },
        { "stepNumber": 4, "description": "Build an equation.", "workingLatex": "2x+7=15", "explanation": "Adding an equals sign and a value creates an equation with a single unknown.", "diagram": null },
        { "stepNumber": 5, "description": "Justify the equation.", "workingLatex": "2x=8 \\Rightarrow x=4", "explanation": "It is true only for $x=4$, the mark of an equation rather than an identity.", "diagram": null },
        { "stepNumber": 6, "description": "Build a formula.", "workingLatex": "y = 3x+1", "explanation": "Using two variables with one as the subject creates a formula, a general rule linking $x$ and $y$.", "diagram": null },
        { "stepNumber": 7, "description": "Justify the formula.", "workingLatex": "\\text{subject } y, \\text{ two variables}", "explanation": "It relates $y$ to $x$ with $y$ as the subject, so it is a formula, giving $y$ for any chosen $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Build an identity.", "workingLatex": "2(x+3)\\equiv 2x+6", "explanation": "Writing the same expression two different ways, joined by $\\equiv$, creates an identity.", "diagram": null },
        { "stepNumber": 9, "description": "Expand to justify the identity.", "workingLatex": "2(x+3) = 2x+6", "explanation": "Expanding the left side reproduces the right side, so the two are equal for all $x$.", "diagram": null },
        { "stepNumber": 10, "description": "Test the identity.", "workingLatex": "x=5:\\; 2(8)=16,\\; 10+6=16", "explanation": "The value $x=5$ balances, supporting that it is a genuine identity.", "diagram": null },
        { "stepNumber": 11, "description": "Check all four are different types.", "workingLatex": "\\text{expr} \\ne \\text{eqn} \\ne \\text{formula} \\ne \\text{identity}", "explanation": "Each example has a distinct defining feature, so all four types are correctly represented.", "diagram": null },
        { "stepNumber": 12, "description": "Note the constraints are met.", "workingLatex": "\\text{use } x \\text{ (and } y)", "explanation": "Every example uses $x$, and the formula also uses $y$, as required.", "diagram": null },
        { "stepNumber": 13, "description": "State the four examples.", "workingLatex": "2x+7;\\; 2x+7=15;\\; y=3x+1;\\; 2(x+3)\\equiv 2x+6", "explanation": "These four statements are, in order, a valid expression, equation, formula and identity.", "diagram": null }
      ],
      "finalAnswer": "Expression: $2x+7$; Equation: $2x+7=15$ (true only for $x=4$); Formula: $y=3x+1$ (links $x,y$, subject $y$); Identity: $2(x+3)\\equiv 2x+6$ (true for all $x$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "collecting terms", "verification"],
    "questionText": "Show that $5x-2x+x\\equiv 4x$ is an identity, explaining each step.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{simplify LHS to match RHS}", "explanation": "We collect the like terms on the left and check we reach $4x$.", "diagram": null },
        { "stepNumber": 2, "description": "Note all terms are like.", "workingLatex": "5x,\\; -2x,\\; x \\to \\text{all } x", "explanation": "Every term has the variable part $x$, so they are all like terms and can be combined.", "diagram": null },
        { "stepNumber": 3, "description": "Reveal the hidden coefficient.", "workingLatex": "x = 1x", "explanation": "The bare $x$ has a coefficient of $1$, which we make explicit before adding.", "diagram": null },
        { "stepNumber": 4, "description": "List the coefficients.", "workingLatex": "5,\\; -2,\\; 1", "explanation": "The coefficients to combine are $5$, $-2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the first two.", "workingLatex": "5-2 = 3", "explanation": "Combining $5x$ and $-2x$ gives $3x$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the last coefficient.", "workingLatex": "3+1 = 4", "explanation": "Adding the final $x$ brings the coefficient to $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the simplified left side.", "workingLatex": "5x-2x+x = 4x", "explanation": "So the left side simplifies to $4x$.", "diagram": null },
        { "stepNumber": 8, "description": "Compare with the right side.", "workingLatex": "4x = 4x", "explanation": "The two sides are identical, so they are equal for all $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Test a value.", "workingLatex": "x=2:\\; 10-4+2=8,\\; 4(2)=8", "explanation": "Checking $x=2$ gives $8$ on both sides, supporting the result.", "diagram": null },
        { "stepNumber": 10, "description": "Test another value.", "workingLatex": "x=-1:\\; -5+2-1=-4,\\; 4(-1)=-4", "explanation": "A negative value also balances, as an identity should.", "diagram": null },
        { "stepNumber": 11, "description": "Explain why it holds for all $x$.", "workingLatex": "\\text{same coefficient of } x", "explanation": "Both sides are a single $x$ term with coefficient $4$, so they match whatever value $x$ takes.", "diagram": null },
        { "stepNumber": 12, "description": "State the conclusion.", "workingLatex": "5x-2x+x\\equiv 4x", "explanation": "Since the simplified left side equals the right side for all $x$, the statement is a true identity.", "diagram": null },
        { "stepNumber": 13, "description": "Final check.", "workingLatex": "\\text{identity}", "explanation": "The algebra and value tests agree, confirming it is an identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: $5x-2x+x$ simplifies to $4x$, equal to the right side for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "counterexample", "expanding"],
    "questionText": "Decide whether $(x+3)(x+3)\\equiv x^2+9$ is an identity. Justify with full working.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand LHS, compare with RHS}", "explanation": "We expand the product carefully and check whether it truly equals $x^2+9$ for all $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first terms give $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outer terms.", "workingLatex": "x \\times 3 = 3x", "explanation": "The outer pair gives $3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the inner terms.", "workingLatex": "3 \\times x = 3x", "explanation": "The inner pair also gives $3x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the last terms.", "workingLatex": "3 \\times 3 = 9", "explanation": "The last terms give the constant $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all four products.", "workingLatex": "x^2 + 3x + 3x + 9", "explanation": "Collecting the products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the middle terms.", "workingLatex": "3x + 3x = 6x", "explanation": "The two $x$ terms add to $6x$; crucially they do not cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Write the correct expansion.", "workingLatex": "x^2 + 6x + 9", "explanation": "So $(x+3)(x+3) = x^2+6x+9$, which contains a $6x$ term.", "diagram": null },
        { "stepNumber": 9, "description": "Compare with the claim.", "workingLatex": "x^2+6x+9 \\ne x^2+9", "explanation": "The correct expansion has a $6x$ term that the claim is missing, so the two are not equal.", "diagram": null },
        { "stepNumber": 10, "description": "Give a counterexample.", "workingLatex": "x=1:\\; (4)(4)=16,\\; 1+9=10", "explanation": "For $x=1$ the left side is $16$ but the right side is $10$; one failing value disproves an identity.", "diagram": null },
        { "stepNumber": 11, "description": "Explain the misconception.", "workingLatex": "(x+3)^2 \\ne x^2+3^2", "explanation": "The claim wrongly squares each term separately, forgetting the cross terms that produce $6x$.", "diagram": null },
        { "stepNumber": 12, "description": "State the correct identity.", "workingLatex": "(x+3)^2\\equiv x^2+6x+9", "explanation": "The genuine identity includes the middle term: $(x+3)^2\\equiv x^2+6x+9$.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "(x+3)(x+3)\\not\\equiv x^2+9", "explanation": "Because the sides differ, the given statement is not an identity.", "diagram": null }
      ],
      "finalAnswer": "No, it is not an identity: $(x+3)(x+3)=x^2+6x+9 \\ne x^2+9$ (e.g. $x=1$ gives $16 \\ne 10$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "unknown constants", "matching coefficients"],
    "questionText": "Find values of $a$ and $b$ so that $5x+a\\equiv bx-3$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the identity condition.", "workingLatex": "\\text{true for all } x", "explanation": "For the statement to hold for every value of $x$, both sides must be the same expression, so their matching parts must agree.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the $x$ terms.", "workingLatex": "5x \\;\\text{and}\\; bx", "explanation": "The coefficient of $x$ on the left is $5$, and on the right it is $b$; these must be equal.", "diagram": null },
        { "stepNumber": 3, "description": "Match the coefficients of $x$.", "workingLatex": "b = 5", "explanation": "Setting the $x$-coefficients equal gives $b=5$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the constant terms.", "workingLatex": "a \\;\\text{and}\\; -3", "explanation": "The constant on the left is $a$, and on the right it is $-3$; these must also be equal.", "diagram": null },
        { "stepNumber": 5, "description": "Match the constants.", "workingLatex": "a = -3", "explanation": "Setting the constants equal gives $a=-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the completed statement.", "workingLatex": "5x-3 \\equiv 5x-3", "explanation": "Substituting $a=-3$ and $b=5$ makes both sides read $5x-3$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm both sides are identical.", "workingLatex": "5x-3 = 5x-3", "explanation": "The two sides are now the same expression, so they are equal for all $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Test a value.", "workingLatex": "x=2:\\; 5(2)-3=7,\\; 5(2)-3=7", "explanation": "Checking $x=2$ gives $7$ on both sides, confirming the identity.", "diagram": null },
        { "stepNumber": 9, "description": "Test another value.", "workingLatex": "x=0:\\; -3 = -3", "explanation": "With $x=0$ both sides give $-3$, as expected.", "diagram": null },
        { "stepNumber": 10, "description": "Explain why matching parts works.", "workingLatex": "\\text{coeffs and constants must agree}", "explanation": "Two linear expressions are identical exactly when their $x$-coefficients agree and their constants agree, which fixes $a$ and $b$.", "diagram": null },
        { "stepNumber": 11, "description": "Note the answer is unique.", "workingLatex": "a=-3,\\; b=5 \\text{ only}", "explanation": "Any other values would leave a mismatch in either the $x$ term or the constant, so this is the only solution.", "diagram": null },
        { "stepNumber": 12, "description": "State the answer.", "workingLatex": "a=-3,\\; b=5", "explanation": "The values making the statement an identity are $a=-3$ and $b=5$.", "diagram": null },
        { "stepNumber": 13, "description": "Final check.", "workingLatex": "5x-3\\equiv 5x-3", "explanation": "Substituting the values gives a genuine identity, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$a=-3$ and $b=5$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "expanding", "collecting terms"],
    "questionText": "Show that $2(x^2+3x)-(x^2-x)\\equiv x^2+7x$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{simplify LHS to match RHS}", "explanation": "We expand both brackets, being careful with the subtraction, then collect like terms.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the first bracket.", "workingLatex": "2(x^2+3x) = 2x^2+6x", "explanation": "Multiplying the $2$ over $x^2$ and $3x$ gives $2x^2$ and $6x$.", "diagram": null },
        { "stepNumber": 3, "description": "Handle the subtraction sign.", "workingLatex": "-(x^2-x) = -x^2+x", "explanation": "Subtracting the whole bracket flips the sign of each term inside, giving $-x^2+x$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the full expansion.", "workingLatex": "2x^2+6x-x^2+x", "explanation": "Combining the two parts lists all four terms ready to collect.", "diagram": null },
        { "stepNumber": 5, "description": "Group the $x^2$ terms.", "workingLatex": "2x^2 - x^2", "explanation": "The terms $2x^2$ and $-x^2$ are like terms with variable part $x^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the $x^2$ terms.", "workingLatex": "2x^2 - x^2 = x^2", "explanation": "Subtracting the coefficients $2-1$ gives $x^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Group the $x$ terms.", "workingLatex": "6x + x", "explanation": "The terms $6x$ and $x$ are like terms with variable part $x$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the $x$ terms.", "workingLatex": "6x + x = 7x", "explanation": "Adding the coefficients $6+1$ gives $7x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified left side.", "workingLatex": "x^2+7x", "explanation": "Putting the parts together gives $x^2+7x$.", "diagram": null },
        { "stepNumber": 10, "description": "Compare with the right side.", "workingLatex": "x^2+7x = x^2+7x", "explanation": "This is exactly the right-hand side, so the sides match.", "diagram": null },
        { "stepNumber": 11, "description": "Test a value.", "workingLatex": "x=1:\\; 2(4)-(0)=8,\\; 1+7=8", "explanation": "Checking $x=1$ gives $8$ on both sides, supporting the result.", "diagram": null },
        { "stepNumber": 12, "description": "Test another value.", "workingLatex": "x=2:\\; 2(10)-(2)=18,\\; 4+14=18", "explanation": "With $x=2$ both sides give $18$, as expected for an identity.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "2(x^2+3x)-(x^2-x)\\equiv x^2+7x", "explanation": "Since the simplified left side equals the right side for all $x$, the statement is a true identity.", "diagram": null }
      ],
      "finalAnswer": "Yes, it is an identity: the left side simplifies to $x^2+7x$, equal to the right side for all $x$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "misconception", "expanding", "identity"],
    "questionText": "A student claims $3(x+4)\\equiv 3x+4$. Explain the misconception and state the correct identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the claim.", "workingLatex": "3(x+4)\\equiv 3x+4", "explanation": "The student has multiplied only the first term inside the bracket by $3$, which we should test.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the distributive law.", "workingLatex": "a(b+c) = ab+ac", "explanation": "When multiplying a bracket by a number, every term inside must be multiplied, not just the first.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the first term correctly.", "workingLatex": "3 \\times x = 3x", "explanation": "The $3$ multiplies $x$ to give $3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the second term correctly.", "workingLatex": "3 \\times 4 = 12", "explanation": "The $3$ must also multiply the $4$, giving $12$ — this is the step the student missed.", "diagram": null },
        { "stepNumber": 5, "description": "Write the correct expansion.", "workingLatex": "3(x+4) = 3x+12", "explanation": "So the true expansion is $3x+12$, not $3x+4$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the claim.", "workingLatex": "3x+12 \\ne 3x+4", "explanation": "The correct constant is $12$, whereas the claim keeps $4$, so the two are not equal.", "diagram": null },
        { "stepNumber": 7, "description": "Give a counterexample.", "workingLatex": "x=1:\\; 3(5)=15,\\; 3(1)+4=7", "explanation": "For $x=1$ the left side is $15$ but the claim gives $7$; one failing value disproves the identity.", "diagram": null },
        { "stepNumber": 8, "description": "Explain the misconception.", "workingLatex": "\\text{multiply all terms in bracket}", "explanation": "The student forgot to multiply the $4$ by $3$; the number outside a bracket applies to every term inside.", "diagram": null },
        { "stepNumber": 9, "description": "State the correct identity.", "workingLatex": "3(x+4)\\equiv 3x+12", "explanation": "The genuine identity is $3(x+4)\\equiv 3x+12$.", "diagram": null },
        { "stepNumber": 10, "description": "Check the correct identity.", "workingLatex": "x=1:\\; 3(5)=15,\\; 3+12=15", "explanation": "For $x=1$ both sides give $15$, confirming the corrected identity.", "diagram": null },
        { "stepNumber": 11, "description": "Check with another value.", "workingLatex": "x=0:\\; 3(4)=12,\\; 12", "explanation": "With $x=0$ both sides give $12$, as expected.", "diagram": null },
        { "stepNumber": 12, "description": "Give guidance.", "workingLatex": "3(x+4) = 3\\cdot x + 3\\cdot 4", "explanation": "A helpful habit is to draw arrows from the $3$ to each term to make sure none is missed.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "\\text{correct: } 3x+12", "explanation": "The misconception is incomplete expansion; the correct identity is $3(x+4)\\equiv 3x+12$.", "diagram": null }
      ],
      "finalAnswer": "The student only multiplied the first term. Correctly, $3(x+4)\\equiv 3x+12$, since $3$ multiplies both $x$ and $4$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "classification", "mixed", "reasoning"],
    "questionText": "Classify each statement with a reason: (A) $7-2x+x^2$  (B) $\\tfrac{1}{2}(x+6)\\equiv \\tfrac{1}{2}x+3$  (C) $v^2=u^2+2as$  (D) $6x+5=2x-3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the strategy.", "workingLatex": "\\text{sign} \\to \\text{variables} \\to \\text{values}", "explanation": "For each statement we look for an equals sign, count variables, and test values where needed.", "diagram": null },
        { "stepNumber": 2, "description": "Examine (A).", "workingLatex": "7-2x+x^2", "explanation": "There is no equals sign, so (A) makes no claim of equality.", "diagram": null },
        { "stepNumber": 3, "description": "Classify (A).", "workingLatex": "7-2x+x^2 \\rightarrow \\text{expression}", "explanation": "It is three terms combined with no equals sign, so (A) is an expression.", "diagram": null },
        { "stepNumber": 4, "description": "Examine (B).", "workingLatex": "\\tfrac{1}{2}(x+6)\\equiv \\tfrac{1}{2}x+3", "explanation": "The $\\equiv$ sign suggests an identity, which we verify by expanding.", "diagram": null },
        { "stepNumber": 5, "description": "Expand (B)'s left side.", "workingLatex": "\\tfrac{1}{2}(x+6) = \\tfrac{1}{2}x+3", "explanation": "Multiplying $\\tfrac{1}{2}$ over $x$ and $6$ gives $\\tfrac{1}{2}x$ and $3$, matching the right side.", "diagram": null },
        { "stepNumber": 6, "description": "Classify (B).", "workingLatex": "\\text{(B)} \\rightarrow \\text{identity}", "explanation": "The two sides are equal for all $x$, so (B) is an identity.", "diagram": null },
        { "stepNumber": 7, "description": "Examine (C).", "workingLatex": "v^2=u^2+2as", "explanation": "There is an $=$ and several different variables ($v$, $u$, $a$, $s$), forming a general rule.", "diagram": null },
        { "stepNumber": 8, "description": "Classify (C).", "workingLatex": "\\text{(C)} \\rightarrow \\text{formula}", "explanation": "It is a rule of motion linking several quantities with $v^2$ as the subject, so (C) is a formula.", "diagram": null },
        { "stepNumber": 9, "description": "Examine (D).", "workingLatex": "6x+5=2x-3", "explanation": "There is an ordinary $=$ and a single variable $x$.", "diagram": null },
        { "stepNumber": 10, "description": "Solve (D).", "workingLatex": "4x=-8 \\Rightarrow x=-2", "explanation": "Collecting terms gives $4x=-8$, so $x=-2$; it is true only for that value.", "diagram": null },
        { "stepNumber": 11, "description": "Classify (D).", "workingLatex": "\\text{(D)} \\rightarrow \\text{equation}", "explanation": "Being true only for the single value $x=-2$ makes (D) an equation.", "diagram": null },
        { "stepNumber": 12, "description": "Check all four types appear.", "workingLatex": "\\text{expr, identity, formula, eqn}", "explanation": "Each of the four types is represented exactly once across the statements.", "diagram": null },
        { "stepNumber": 13, "description": "State the answers with reasons.", "workingLatex": "\\text{A:expr, B:identity, C:formula, D:eqn}", "explanation": "(A) has no equals sign; (B) is true for all $x$; (C) links variables as a rule; (D) is true only for $x=-2$.", "diagram": null }
      ],
      "finalAnswer": "(A) expression (no $=$), (B) identity (true for all $x$), (C) formula (links variables), (D) equation (true only for $x=-2$)."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["algebraic vocabulary", "identity", "unknown constant", "expanding"],
    "questionText": "Find the value of $a$ so that $(x+a)^2\\equiv x^2+10x+25$ is an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the identity condition.", "workingLatex": "\\text{expand LHS, match RHS}", "explanation": "We expand $(x+a)^2$ in terms of $a$ and compare it with $x^2+10x+25$ term by term.", "diagram": null },
        { "stepNumber": 2, "description": "Write the square as a product.", "workingLatex": "(x+a)^2 = (x+a)(x+a)", "explanation": "Squaring the bracket means multiplying it by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply out the terms.", "workingLatex": "x^2 + ax + ax + a^2", "explanation": "Multiplying each pair of terms gives $x^2$, two lots of $ax$, and $a^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the like terms.", "workingLatex": "x^2 + 2ax + a^2", "explanation": "The two $ax$ terms combine into $2ax$, giving the general expansion.", "diagram": null },
        { "stepNumber": 5, "description": "Match the $x$ terms.", "workingLatex": "2ax = 10x", "explanation": "For the identity to hold, the coefficient of $x$ on the left, $2a$, must equal $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $a$.", "workingLatex": "2a = 10 \\Rightarrow a = 5", "explanation": "Dividing by $2$ gives $a=5$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the constant term.", "workingLatex": "a^2 = 25", "explanation": "The constant on the left is $a^2$, which should equal $25$.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm consistency.", "workingLatex": "5^2 = 25 \\;\\checkmark", "explanation": "With $a=5$, the constant $a^2=25$ matches the right side, so both conditions agree.", "diagram": null },
        { "stepNumber": 9, "description": "Write the completed identity.", "workingLatex": "(x+5)^2\\equiv x^2+10x+25", "explanation": "Substituting $a=5$ gives a statement whose two sides are identical.", "diagram": null },
        { "stepNumber": 10, "description": "Test a value.", "workingLatex": "x=1:\\; (6)^2=36,\\; 1+10+25=36", "explanation": "Checking $x=1$ gives $36$ on both sides, confirming the identity.", "diagram": null },
        { "stepNumber": 11, "description": "Test another value.", "workingLatex": "x=0:\\; 5^2=25,\\; 25", "explanation": "With $x=0$ both sides give $25$, as expected.", "diagram": null },
        { "stepNumber": 12, "description": "Explain why both conditions matched.", "workingLatex": "\\text{perfect square form}", "explanation": "The right side is a perfect square, so a single value of $a$ satisfies both the $x$-term and the constant, confirming consistency.", "diagram": null },
        { "stepNumber": 13, "description": "State the answer.", "workingLatex": "a = 5", "explanation": "The value making the statement an identity is $a=5$.", "diagram": null }
      ],
      "finalAnswer": "$a=5$."
    }
  },
  {
    "id": "gcse.algebra.vocabulary.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic vocabulary",
    "subtopicId": "gcse.algebra.vocabulary",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic vocabulary", "identity", "equation", "expanding", "reasoning"],
    "questionText": "Show that $(x+4)(x-2)\\equiv x^2+2x-8$ is an identity, and explain why the related statement $x^2+2x-8=0$ is an equation rather than an identity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the aim.", "workingLatex": "\\text{expand, then compare the two statements}", "explanation": "First we verify the identity by expanding, then we contrast it with the equation to highlight the difference.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first terms.", "workingLatex": "x \\times x = x^2", "explanation": "The first terms of the brackets give $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the outer terms.", "workingLatex": "x \\times (-2) = -2x", "explanation": "The outer pair $x$ and $-2$ gives $-2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the inner terms.", "workingLatex": "4 \\times x = 4x", "explanation": "The inner pair $4$ and $x$ gives $4x$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the last terms.", "workingLatex": "4 \\times (-2) = -8", "explanation": "The last terms give the constant $-8$.", "diagram": null },
        { "stepNumber": 6, "description": "Write all four products.", "workingLatex": "x^2 - 2x + 4x - 8", "explanation": "Collecting the products gives the unsimplified expansion.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the $x$ terms.", "workingLatex": "-2x + 4x = 2x", "explanation": "Adding the coefficients $-2+4$ gives $2x$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the simplified expansion.", "workingLatex": "x^2 + 2x - 8", "explanation": "The left side simplifies to $x^2+2x-8$, matching the right side of the identity.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the identity.", "workingLatex": "(x+4)(x-2)\\equiv x^2+2x-8", "explanation": "Since the two sides are equal for all $x$, the statement is a true identity.", "diagram": null },
        { "stepNumber": 10, "description": "Now consider the equation.", "workingLatex": "x^2+2x-8=0", "explanation": "This new statement sets the same expression equal to zero, which is a condition, not a rewrite.", "diagram": null },
        { "stepNumber": 11, "description": "Solve the equation.", "workingLatex": "(x+4)(x-2)=0 \\Rightarrow x=-4,\\,2", "explanation": "Using the factorised form, the expression is zero only when $x=-4$ or $x=2$.", "diagram": null },
        { "stepNumber": 12, "description": "Test a non-solution.", "workingLatex": "x=0:\\; -8 \\ne 0", "explanation": "For $x=0$ the expression is $-8$, not $0$, so the equation fails for most values.", "diagram": null },
        { "stepNumber": 13, "description": "Explain the difference.", "workingLatex": "\\text{identity: all } x; \\;\\text{equation: } x=-4,2", "explanation": "The identity rewrites the same quantity and holds for every $x$, whereas the equation is a condition true only for the particular values $x=-4$ and $x=2$.", "diagram": null }
      ],
      "finalAnswer": "The identity holds: $(x+4)(x-2)=x^2+2x-8$ for all $x$. But $x^2+2x-8=0$ is an equation, true only for $x=-4$ or $x=2$, not for all values."
    }
  }
];
