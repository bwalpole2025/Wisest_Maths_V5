import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.notation.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "multiplication convention", "simplify"],
    "questionText": "Write $p \\times q$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the multiplication convention.", "workingLatex": "a \\times b = ab", "explanation": "In algebra we save writing by leaving out the multiplication sign between letters.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it to the two letters.", "workingLatex": "p \\times q \\to pq", "explanation": "The letters are simply written next to each other to mean they are multiplied.", "diagram": null },
        { "stepNumber": 3, "description": "Write them in alphabetical order.", "workingLatex": "pq", "explanation": "By convention letters are usually placed in alphabetical order, which keeps answers consistent.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "pq", "explanation": "So $p \\times q$ is written as $pq$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the meaning is unchanged.", "workingLatex": "pq = p \\times q", "explanation": "Reading it back confirms it still means the same product, just written more compactly.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "pq", "explanation": "The tidy algebraic form is $pq$.", "diagram": null }
      ],
      "finalAnswer": "$pq$"
    }
  },
  {
    "id": "gcse.algebra.notation.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "coefficient", "simplify"],
    "questionText": "Write $5 \\times t$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how a number multiplies a letter.", "workingLatex": "3 \\times y = 3y", "explanation": "A number in front of a letter is written directly before it, with no sign in between.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the number and the letter.", "workingLatex": "5 \\text{ and } t", "explanation": "Here the number is $5$ and the letter is $t$.", "diagram": null },
        { "stepNumber": 3, "description": "Place the number in front.", "workingLatex": "5 \\times t \\to 5t", "explanation": "The number always goes before the letter, giving the coefficient of the term.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "5t", "explanation": "So $5 \\times t$ becomes $5t$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the coefficient.", "workingLatex": "5t = t + t + t + t + t", "explanation": "The $5$ tells us we have five lots of $t$, which is what the notation captures.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "5t", "explanation": "The compact algebraic form is $5t$.", "diagram": null }
      ],
      "finalAnswer": "$5t$"
    }
  },
  {
    "id": "gcse.algebra.notation.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "powers", "index"],
    "questionText": "Write $a \\times a$ using index notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise a repeated multiplication.", "workingLatex": "a \\times a", "explanation": "The same letter multiplied by itself can be written using a power.", "diagram": null },
        { "stepNumber": 2, "description": "Count how many times the letter appears.", "workingLatex": "a \\text{ appears } 2 \\text{ times}", "explanation": "The number of times the letter is multiplied becomes the index (power).", "diagram": null },
        { "stepNumber": 3, "description": "Write it as a power.", "workingLatex": "a \\times a = a^{2}", "explanation": "Two lots of $a$ multiplied gives $a$ squared.", "diagram": null },
        { "stepNumber": 4, "description": "Read the power correctly.", "workingLatex": "a^{2} = \\text{\"a squared\"}", "explanation": "The small $2$ is an index, not a multiplier, so it means multiply, not $a \\times 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Distinguish from $2a$.", "workingLatex": "a^{2} \\neq 2a", "explanation": "$a^2$ means $a\\times a$, whereas $2a$ means $a+a$; noticing this avoids a common slip.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "a^{2}", "explanation": "So $a \\times a = a^{2}$.", "diagram": null }
      ],
      "finalAnswer": "$a^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "division", "fraction"],
    "questionText": "Write $a \\div b$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how division is written in algebra.", "workingLatex": "a \\div b = \\frac{a}{b}", "explanation": "Division is almost always written as a fraction rather than with a $\\div$ sign.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the dividend and divisor.", "workingLatex": "a \\text{ over } b", "explanation": "The amount being divided goes on top; what we divide by goes on the bottom.", "diagram": null },
        { "stepNumber": 3, "description": "Write the fraction.", "workingLatex": "\\frac{a}{b}", "explanation": "Placing $a$ above $b$ shows the division clearly.", "diagram": null },
        { "stepNumber": 4, "description": "Check the order matters.", "workingLatex": "\\frac{a}{b} \\neq \\frac{b}{a}", "explanation": "Division is not commutative, so keeping $a$ on top preserves the meaning.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "\\frac{a}{b}", "explanation": "So $a \\div b$ is written as $\\dfrac{a}{b}$.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "\\frac{a}{b}", "explanation": "The fraction form is the conventional algebraic way to show the division.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{a}{b}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "coefficient of one", "simplify"],
    "questionText": "Simplify $1 \\times n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall multiplying by one.", "workingLatex": "1 \\times n = n", "explanation": "Multiplying anything by one leaves it unchanged.", "diagram": null },
        { "stepNumber": 2, "description": "Apply this to the letter.", "workingLatex": "1 \\times n \\to n", "explanation": "One lot of $n$ is simply $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the notation convention.", "workingLatex": "1n = n", "explanation": "We never write a coefficient of $1$ in algebra; it is left out.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "n", "explanation": "So $1 \\times n$ is written simply as $n$.", "diagram": null },
        { "stepNumber": 5, "description": "Note why the $1$ is dropped.", "workingLatex": "n \\text{ means } 1n", "explanation": "A lone letter already means one of that letter, so writing the $1$ is unnecessary.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "n", "explanation": "The simplified form is $n$.", "diagram": null }
      ],
      "finalAnswer": "$n$"
    }
  },
  {
    "id": "gcse.algebra.notation.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "multiplication convention", "order"],
    "questionText": "Write $y \\times 3$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "y \\times 3", "explanation": "We have a letter multiplied by a number, written the 'wrong' way round.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the order convention.", "workingLatex": "\\text{number before letter}", "explanation": "By convention the number is always written in front of the letter.", "diagram": null },
        { "stepNumber": 3, "description": "Swap the order.", "workingLatex": "y \\times 3 = 3 \\times y", "explanation": "Multiplication can be done in any order, so we may swap them freely.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the convention.", "workingLatex": "3 \\times y \\to 3y", "explanation": "Now the number sits in front and the sign is dropped.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "3y", "explanation": "So $y \\times 3$ is written as $3y$.", "diagram": null },
        { "stepNumber": 6, "description": "Explain why not $y3$.", "workingLatex": "y3 \\text{ is non-standard}", "explanation": "Writing the number after the letter is avoided because it is easy to misread, so $3y$ is preferred.", "diagram": null }
      ],
      "finalAnswer": "$3y$"
    }
  },
  {
    "id": "gcse.algebra.notation.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "powers", "cube"],
    "questionText": "Write $a \\times a \\times a$ using index notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot the repeated factor.", "workingLatex": "a \\times a \\times a", "explanation": "The same letter is multiplied several times, so a power will tidy it.", "diagram": null },
        { "stepNumber": 2, "description": "Count the factors.", "workingLatex": "a \\text{ appears } 3 \\text{ times}", "explanation": "The count of the letter becomes the index.", "diagram": null },
        { "stepNumber": 3, "description": "Write as a power.", "workingLatex": "a \\times a \\times a = a^{3}", "explanation": "Three lots of $a$ multiplied is $a$ cubed.", "diagram": null },
        { "stepNumber": 4, "description": "Read it correctly.", "workingLatex": "a^{3} = \\text{\"a cubed\"}", "explanation": "The index $3$ means multiply the letter by itself three times.", "diagram": null },
        { "stepNumber": 5, "description": "Distinguish from $3a$.", "workingLatex": "a^{3} \\neq 3a", "explanation": "$a^3$ multiplies, while $3a$ adds three copies; they are very different.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "a^{3}", "explanation": "So $a \\times a \\times a = a^{3}$.", "diagram": null }
      ],
      "finalAnswer": "$a^{3}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "coefficient"],
    "questionText": "Explain what the expression $4n$ means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the coefficient and letter.", "workingLatex": "4n", "explanation": "The number $4$ is the coefficient and $n$ is the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the hidden operation.", "workingLatex": "4n = 4 \\times n", "explanation": "A number written next to a letter means the two are multiplied.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret in words.", "workingLatex": "4 \\text{ lots of } n", "explanation": "So $4n$ means four times the value of $n$.", "diagram": null },
        { "stepNumber": 4, "description": "Show as repeated addition.", "workingLatex": "4n = n + n + n + n", "explanation": "Four lots of $n$ can also be seen as adding $n$ to itself four times.", "diagram": null },
        { "stepNumber": 5, "description": "Give a numerical illustration.", "workingLatex": "n = 5 \\Rightarrow 4n = 20", "explanation": "If $n$ were $5$, then $4n$ would be $20$, which shows the meaning clearly.", "diagram": null },
        { "stepNumber": 6, "description": "State the interpretation.", "workingLatex": "4n = 4 \\times n", "explanation": "So $4n$ means 'four times $n$'.", "diagram": null }
      ],
      "finalAnswer": "$4n$ means four times $n$, i.e. $4 \\times n$"
    }
  },
  {
    "id": "gcse.algebra.notation.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "multiplication convention", "three factors"],
    "questionText": "Write $2 \\times a \\times b$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the factors.", "workingLatex": "2, \\; a, \\; b", "explanation": "We are multiplying a number and two letters together.", "diagram": null },
        { "stepNumber": 2, "description": "Put the number first.", "workingLatex": "2 \\times a \\times b", "explanation": "The number stays at the front as the coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Drop the multiplication signs.", "workingLatex": "2ab", "explanation": "Writing the factors next to each other means they are multiplied.", "diagram": null },
        { "stepNumber": 4, "description": "Order the letters alphabetically.", "workingLatex": "2ab", "explanation": "Letters are placed in alphabetical order, so $a$ comes before $b$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "2ab", "explanation": "So $2 \\times a \\times b$ is written as $2ab$.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm the meaning.", "workingLatex": "2ab = 2 \\times a \\times b", "explanation": "Reading it back shows the compact form means the same product.", "diagram": null }
      ],
      "finalAnswer": "$2ab$"
    }
  },
  {
    "id": "gcse.algebra.notation.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "division", "fraction", "coefficient"],
    "questionText": "Write $x \\div 4$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall division becomes a fraction.", "workingLatex": "x \\div 4 = \\frac{x}{4}", "explanation": "Division in algebra is written as a fraction rather than with a $\\div$ sign.", "diagram": null },
        { "stepNumber": 2, "description": "Place the letter on top.", "workingLatex": "\\frac{x}{4}", "explanation": "The quantity being divided, $x$, goes on top and the $4$ goes underneath.", "diagram": null },
        { "stepNumber": 3, "description": "Recognise an equivalent form.", "workingLatex": "\\frac{x}{4} = \\frac{1}{4}x", "explanation": "Dividing by $4$ is the same as multiplying by a quarter, an equally valid way to write it.", "diagram": null },
        { "stepNumber": 4, "description": "State the main form.", "workingLatex": "\\frac{x}{4}", "explanation": "The clearest form for this expression is $\\dfrac{x}{4}$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the order.", "workingLatex": "\\frac{x}{4} \\neq \\frac{4}{x}", "explanation": "Keeping $x$ on top matters because division is not reversible.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "\\frac{x}{4}", "explanation": "So $x \\div 4 = \\dfrac{x}{4}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{x}{4}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "powers"],
    "questionText": "Explain the difference between $n^{2}$ and $2n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the first expression.", "workingLatex": "n^{2} = n \\times n", "explanation": "The index $2$ means the letter is multiplied by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the second expression.", "workingLatex": "2n = n + n", "explanation": "The coefficient $2$ means two lots of $n$ added together.", "diagram": null },
        { "stepNumber": 3, "description": "Contrast the operations.", "workingLatex": "\\text{multiply vs add}", "explanation": "$n^2$ involves multiplying, while $2n$ involves adding, so they are not the same.", "diagram": null },
        { "stepNumber": 4, "description": "Test with a value.", "workingLatex": "n = 3: \\; n^{2} = 9, \\; 2n = 6", "explanation": "Trying $n=3$ gives $9$ and $6$, clearly different results.", "diagram": null },
        { "stepNumber": 5, "description": "Note when they are equal.", "workingLatex": "n^{2} = 2n \\text{ only if } n = 0 \\text{ or } 2", "explanation": "They happen to match only for special values, confirming they are generally different.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "n^{2} \\neq 2n", "explanation": "So $n^2$ means $n$ times $n$, and $2n$ means $n$ doubled.", "diagram": null }
      ],
      "finalAnswer": "$n^{2}=n\\times n$ (squaring); $2n=n+n$ (doubling) — they are different"
    }
  },
  {
    "id": "gcse.algebra.notation.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "coefficient", "identify"],
    "questionText": "In the term $7x$, state the coefficient and the variable.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of coefficient.", "workingLatex": "\\text{coefficient} = \\text{the number multiplying the letter}", "explanation": "The coefficient is the numerical part in front of the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the term.", "workingLatex": "7x", "explanation": "The term is made of a number and a letter written together.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the number.", "workingLatex": "7", "explanation": "The number $7$ sits in front, so it is the coefficient.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the letter.", "workingLatex": "x", "explanation": "The letter $x$ is the variable, the unknown quantity.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the hidden operation.", "workingLatex": "7x = 7 \\times x", "explanation": "They are multiplied, which is why $7$ counts as the coefficient of $x$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{coefficient } 7, \\text{ variable } x", "explanation": "So the coefficient is $7$ and the variable is $x$.", "diagram": null }
      ],
      "finalAnswer": "Coefficient $7$, variable $x$"
    }
  },
  {
    "id": "gcse.algebra.notation.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["algebraic notation", "multiply by zero", "simplify"],
    "questionText": "Simplify $0 \\times m$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall multiplying by zero.", "workingLatex": "0 \\times \\text{anything} = 0", "explanation": "Zero lots of any quantity is nothing at all.", "diagram": null },
        { "stepNumber": 2, "description": "Apply it to the letter.", "workingLatex": "0 \\times m = 0", "explanation": "Zero lots of $m$ is $0$, no matter what value $m$ takes.", "diagram": null },
        { "stepNumber": 3, "description": "Note there is no letter left.", "workingLatex": "0m = 0", "explanation": "Since the result is zero, the variable disappears entirely.", "diagram": null },
        { "stepNumber": 4, "description": "State the result.", "workingLatex": "0", "explanation": "So $0 \\times m$ simplifies to $0$.", "diagram": null },
        { "stepNumber": 5, "description": "Contrast with multiplying by one.", "workingLatex": "1 \\times m = m", "explanation": "Multiplying by one keeps the letter; multiplying by zero removes it.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "0", "explanation": "The simplified value is $0$.", "diagram": null }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.algebra.notation.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "powers", "mixed letters"],
    "questionText": "Write $x \\times y \\times x$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the factors.", "workingLatex": "x, \\; y, \\; x", "explanation": "We have two $x$'s and one $y$ being multiplied.", "diagram": null },
        { "stepNumber": 2, "description": "Group the repeated letter.", "workingLatex": "x \\times x \\times y", "explanation": "Multiplication order does not matter, so gather the two $x$'s together.", "diagram": null },
        { "stepNumber": 3, "description": "Turn the repeat into a power.", "workingLatex": "x \\times x = x^{2}", "explanation": "Two $x$'s multiplied become $x$ squared.", "diagram": null },
        { "stepNumber": 4, "description": "Bring in the other letter.", "workingLatex": "x^{2} \\times y", "explanation": "The single $y$ is simply multiplied on.", "diagram": null },
        { "stepNumber": 5, "description": "Write without signs.", "workingLatex": "x^{2}y", "explanation": "Placing them together with the power gives the tidy form.", "diagram": null },
        { "stepNumber": 6, "description": "Give the final form.", "workingLatex": "x^{2}y", "explanation": "So $x \\times y \\times x = x^{2}y$.", "diagram": null }
      ],
      "finalAnswer": "$x^{2}y$"
    }
  },
  {
    "id": "gcse.algebra.notation.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "addition"],
    "questionText": "Write an expression for 'a number $n$ increased by $6$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "n", "explanation": "The unknown number is already given the letter $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'increased by'.", "workingLatex": "\\text{increased by} = +", "explanation": "Increasing a quantity means adding to it.", "diagram": null },
        { "stepNumber": 3, "description": "Add the six.", "workingLatex": "n + 6", "explanation": "We add $6$ to the number $n$.", "diagram": null },
        { "stepNumber": 4, "description": "Check the order reads sensibly.", "workingLatex": "n + 6 = 6 + n", "explanation": "Addition can be written either way, but $n+6$ matches the wording best.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "n = 10 \\Rightarrow n + 6 = 16", "explanation": "If $n$ were $10$, the expression gives $16$, which fits 'increased by $6$'.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "n + 6", "explanation": "So the expression is $n+6$.", "diagram": null }
      ],
      "finalAnswer": "$n + 6$"
    }
  },
  {
    "id": "gcse.algebra.notation.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "subtraction"],
    "questionText": "Write an expression for '$5$ less than a number $x$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "x", "explanation": "The number is represented by $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'less than'.", "workingLatex": "\\text{less than} = -", "explanation": "'Less than' means we subtract.", "diagram": null },
        { "stepNumber": 3, "description": "Decide the order carefully.", "workingLatex": "x - 5", "explanation": "'$5$ less than $x$' means we start from $x$ and take away $5$, so $x$ comes first.", "diagram": null },
        { "stepNumber": 4, "description": "Warn against reversing it.", "workingLatex": "x - 5 \\neq 5 - x", "explanation": "Subtraction order matters, and $5 - x$ would be a common mistake here.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "x = 12 \\Rightarrow x - 5 = 7", "explanation": "If $x=12$, then $5$ less is $7$, matching the wording.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "x - 5", "explanation": "So the expression is $x-5$.", "diagram": null }
      ],
      "finalAnswer": "$x - 5$"
    }
  },
  {
    "id": "gcse.algebra.notation.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "words"],
    "questionText": "Write in words what the expression $2ab$ means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Break the expression into parts.", "workingLatex": "2, \\; a, \\; b", "explanation": "The expression is a coefficient $2$ with the letters $a$ and $b$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the hidden operations.", "workingLatex": "2ab = 2 \\times a \\times b", "explanation": "All the parts written together are being multiplied.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret $ab$.", "workingLatex": "ab = a \\times b", "explanation": "The letters together mean the product of $a$ and $b$.", "diagram": null },
        { "stepNumber": 4, "description": "Bring in the coefficient.", "workingLatex": "2 \\times (ab)", "explanation": "The $2$ then doubles that product.", "diagram": null },
        { "stepNumber": 5, "description": "Put it into words.", "workingLatex": "\\text{two times } a \\text{ times } b", "explanation": "So it reads as twice the product of $a$ and $b$.", "diagram": null },
        { "stepNumber": 6, "description": "State the interpretation.", "workingLatex": "2ab", "explanation": "So $2ab$ means 'two multiplied by $a$ multiplied by $b$'.", "diagram": null }
      ],
      "finalAnswer": "Two times $a$ times $b$ (twice the product of $a$ and $b$)"
    }
  },
  {
    "id": "gcse.algebra.notation.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "multiplication"],
    "questionText": "Write an expression for 'double a number $y$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "y", "explanation": "The number is $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'double'.", "workingLatex": "\\text{double} = \\times 2", "explanation": "Doubling means multiplying by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by two.", "workingLatex": "2 \\times y", "explanation": "We multiply the number $y$ by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the notation convention.", "workingLatex": "2 \\times y \\to 2y", "explanation": "The number goes in front and the sign is dropped.", "diagram": null },
        { "stepNumber": 5, "description": "Relate to addition.", "workingLatex": "2y = y + y", "explanation": "Doubling is the same as adding the number to itself, confirming the meaning.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "2y", "explanation": "So 'double $y$' is $2y$.", "diagram": null }
      ],
      "finalAnswer": "$2y$"
    }
  },
  {
    "id": "gcse.algebra.notation.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "division"],
    "questionText": "Write an expression for 'a number $p$ divided by $3$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "p", "explanation": "The number is $p$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'divided by'.", "workingLatex": "\\div 3", "explanation": "The number is being shared into three, so we divide by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Write as a fraction.", "workingLatex": "\\frac{p}{3}", "explanation": "Division in algebra is shown as a fraction, with $p$ on top.", "diagram": null },
        { "stepNumber": 4, "description": "Keep the order correct.", "workingLatex": "\\frac{p}{3} \\neq \\frac{3}{p}", "explanation": "Because $p$ is being divided, it must sit on the top.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "p = 12 \\Rightarrow \\frac{p}{3} = 4", "explanation": "If $p=12$, dividing by $3$ gives $4$, matching the wording.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "\\frac{p}{3}", "explanation": "So the expression is $\\dfrac{p}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{p}{3}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "multiplication convention", "coefficient"],
    "questionText": "Write $b \\times 4 \\times a$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the factors.", "workingLatex": "b, \\; 4, \\; a", "explanation": "We have a number and two letters multiplied in an untidy order.", "diagram": null },
        { "stepNumber": 2, "description": "Move the number to the front.", "workingLatex": "4 \\times a \\times b", "explanation": "Order does not affect multiplication, so put the coefficient first.", "diagram": null },
        { "stepNumber": 3, "description": "Order the letters alphabetically.", "workingLatex": "4 \\times a \\times b", "explanation": "Letters are conventionally placed in alphabetical order, so $a$ before $b$.", "diagram": null },
        { "stepNumber": 4, "description": "Drop the signs.", "workingLatex": "4ab", "explanation": "Writing the parts together shows they are multiplied.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "4ab", "explanation": "So $b \\times 4 \\times a = 4ab$.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm the meaning.", "workingLatex": "4ab = 4 \\times a \\times b", "explanation": "Reading it back shows the tidy form keeps the same value.", "diagram": null }
      ],
      "finalAnswer": "$4ab$"
    }
  },
  {
    "id": "gcse.algebra.notation.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "terms"],
    "questionText": "How many terms are there in the expression $3x + 2y - 7$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a term is.", "workingLatex": "\\text{term} = \\text{part separated by } + \\text{ or } -", "explanation": "Terms are the pieces of an expression split up by plus or minus signs.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the expression.", "workingLatex": "3x + 2y - 7", "explanation": "We read along and find where the $+$ and $-$ signs break it up.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the first term.", "workingLatex": "3x", "explanation": "The first piece before the plus is $3x$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the second term.", "workingLatex": "+2y", "explanation": "The next piece is $2y$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the third term.", "workingLatex": "-7", "explanation": "The last piece is the constant $-7$.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\text{ terms}", "explanation": "So the expression has three terms.", "diagram": null }
      ],
      "finalAnswer": "$3$ terms"
    }
  },
  {
    "id": "gcse.algebra.notation.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "multiplication"],
    "questionText": "Write an expression for 'the product of $m$ and $n$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'product'.", "workingLatex": "\\text{product} = \\times", "explanation": "The word product tells us to multiply.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the quantities.", "workingLatex": "m \\text{ and } n", "explanation": "The two things being multiplied are $m$ and $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply them.", "workingLatex": "m \\times n", "explanation": "We multiply the two letters together.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the notation.", "workingLatex": "m \\times n \\to mn", "explanation": "The multiplication sign is dropped between letters.", "diagram": null },
        { "stepNumber": 5, "description": "Order alphabetically.", "workingLatex": "mn", "explanation": "$m$ comes before $n$, which is the conventional order.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "mn", "explanation": "So the product of $m$ and $n$ is $mn$.", "diagram": null }
      ],
      "finalAnswer": "$mn$"
    }
  },
  {
    "id": "gcse.algebra.notation.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "powers"],
    "questionText": "Write in words what $y^{2}$ means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the base and index.", "workingLatex": "y^{2}", "explanation": "The letter $y$ is the base and the small $2$ is the index.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what the index does.", "workingLatex": "\\text{index} = \\text{how many to multiply}", "explanation": "The index tells us how many times to multiply the base by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Expand it.", "workingLatex": "y^{2} = y \\times y", "explanation": "An index of $2$ means two copies of $y$ multiplied.", "diagram": null },
        { "stepNumber": 4, "description": "Name it.", "workingLatex": "y^{2} = \\text{\"y squared\"}", "explanation": "Raising to the power $2$ is called squaring.", "diagram": null },
        { "stepNumber": 5, "description": "Warn about the misread.", "workingLatex": "y^{2} \\neq 2y", "explanation": "It does not mean $y \\times 2$; the index multiplies the letter by itself.", "diagram": null },
        { "stepNumber": 6, "description": "State the interpretation.", "workingLatex": "y \\times y", "explanation": "So $y^2$ means '$y$ multiplied by itself', i.e. $y$ squared.", "diagram": null }
      ],
      "finalAnswer": "$y$ squared, i.e. $y \\times y$"
    }
  },
  {
    "id": "gcse.algebra.notation.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "two operations"],
    "questionText": "Write an expression for 'a number $x$ multiplied by $4$, then add $1$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "x", "explanation": "The number is $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Do the first operation.", "workingLatex": "4 \\times x = 4x", "explanation": "First we multiply the number by $4$ to get $4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Do the second operation.", "workingLatex": "4x + 1", "explanation": "Then we add $1$ to that result.", "diagram": null },
        { "stepNumber": 4, "description": "Respect the order.", "workingLatex": "4x + 1 \\neq 4(x+1)", "explanation": "The multiplying happens first, so no bracket is needed around $x+1$.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "x = 2 \\Rightarrow 4x + 1 = 9", "explanation": "If $x=2$, then $4\\times2+1 = 9$, which matches the instructions.", "diagram": null },
        { "stepNumber": 6, "description": "State the expression.", "workingLatex": "4x + 1", "explanation": "So the expression is $4x+1$.", "diagram": null }
      ],
      "finalAnswer": "$4x + 1$"
    }
  },
  {
    "id": "gcse.algebra.notation.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "two operations"],
    "questionText": "Write an expression for '$5$ more than twice a number $n$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "n", "explanation": "Let the unknown number be $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'twice'.", "workingLatex": "\\text{twice } n = 2 \\times n", "explanation": "'Twice' means multiply by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write that in notation.", "workingLatex": "2n", "explanation": "The number goes in front, giving $2n$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret '5 more than'.", "workingLatex": "\\text{5 more than} = +5", "explanation": "'More than' tells us to add, here $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Attach the addition.", "workingLatex": "2n + 5", "explanation": "We add $5$ to the doubled number.", "diagram": null },
        { "stepNumber": 6, "description": "Watch the phrasing.", "workingLatex": "\\text{'5 more than X'} = X + 5", "explanation": "The thing that is 'more than' is $2n$, so it comes first and $5$ is added on.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "n = 4 \\Rightarrow 2n + 5 = 13", "explanation": "For $n=4$, twice is $8$ and five more is $13$, matching the wording.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm no bracket needed.", "workingLatex": "2n + 5", "explanation": "The doubling is already complete before adding, so the expression is fine as written.", "diagram": null },
        { "stepNumber": 9, "description": "State the expression.", "workingLatex": "2n + 5", "explanation": "So the expression is $2n+5$.", "diagram": null }
      ],
      "finalAnswer": "$2n + 5$"
    }
  },
  {
    "id": "gcse.algebra.notation.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "brackets"],
    "questionText": "Write an expression for 'add $3$ to a number $x$, then multiply the result by $2$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "x", "explanation": "Let the number be $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Do the first operation.", "workingLatex": "x + 3", "explanation": "First add $3$ to the number.", "diagram": null },
        { "stepNumber": 3, "description": "Note the whole result must be multiplied.", "workingLatex": "(x + 3)", "explanation": "Because we multiply the result, we keep $x+3$ together in a bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Do the second operation.", "workingLatex": "2 \\times (x + 3)", "explanation": "Now multiply that whole amount by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write in notation.", "workingLatex": "2(x + 3)", "explanation": "The multiplication sign is dropped in front of the bracket.", "diagram": null },
        { "stepNumber": 6, "description": "Explain why the bracket matters.", "workingLatex": "2(x+3) \\neq 2x + 3", "explanation": "Without the bracket only $x$ would be doubled, which is not what the wording says.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "x = 5 \\Rightarrow 2(5+3) = 16", "explanation": "For $x=5$, add $3$ to get $8$, then double to get $16$.", "diagram": null },
        { "stepNumber": 8, "description": "State the expression.", "workingLatex": "2(x + 3)", "explanation": "So the expression is $2(x+3)$.", "diagram": null }
      ],
      "finalAnswer": "$2(x + 3)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "squaring"],
    "questionText": "Write an expression for 'a number $n$ squared, then halved'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "n", "explanation": "Let the number be $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'squared'.", "workingLatex": "n^{2}", "explanation": "Squaring means multiplying the number by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret 'halved'.", "workingLatex": "\\div 2", "explanation": "Halving means dividing by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the squared value.", "workingLatex": "\\frac{n^{2}}{2}", "explanation": "The squared number is placed on top of the fraction and divided by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm the order of operations.", "workingLatex": "\\text{square first, then halve}", "explanation": "The wording squares before halving, and the fraction shows that clearly.", "diagram": null },
        { "stepNumber": 6, "description": "Contrast a wrong version.", "workingLatex": "\\frac{n^2}{2} \\neq \\left(\\frac{n}{2}\\right)^2", "explanation": "Halving then squaring would give a different result, so order matters.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "n = 6 \\Rightarrow \\frac{36}{2} = 18", "explanation": "For $n=6$, square to $36$ then halve to $18$.", "diagram": null },
        { "stepNumber": 8, "description": "State the expression.", "workingLatex": "\\frac{n^{2}}{2}", "explanation": "So the expression is $\\dfrac{n^{2}}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{n^{2}}{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "product and subtraction"],
    "questionText": "Write an expression for 'the product of $x$ and $y$, decreased by $4$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'product'.", "workingLatex": "x \\times y", "explanation": "The product means we multiply $x$ and $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Write it in notation.", "workingLatex": "xy", "explanation": "Dropping the sign gives $xy$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret 'decreased by'.", "workingLatex": "\\text{decreased by} = -", "explanation": "'Decreased by' means we subtract.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract from the product.", "workingLatex": "xy - 4", "explanation": "We take $4$ away from the product $xy$.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the order correct.", "workingLatex": "xy - 4 \\neq 4 - xy", "explanation": "The product is what is decreased, so it comes first.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "x=3, y=5 \\Rightarrow 15 - 4 = 11", "explanation": "The product $15$ decreased by $4$ is $11$, matching the wording.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "xy - 4", "explanation": "So the expression is $xy-4$.", "diagram": null }
      ],
      "finalAnswer": "$xy - 4$"
    }
  },
  {
    "id": "gcse.algebra.notation.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "mixed product", "powers"],
    "questionText": "Simplify $2 \\times a \\times 3 \\times a$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Separate numbers and letters.", "workingLatex": "(2 \\times 3) \\times (a \\times a)", "explanation": "Multiplication order does not matter, so group the numbers and the letters.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numbers.", "workingLatex": "2 \\times 3 = 6", "explanation": "The numerical parts multiply to give the coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the letters.", "workingLatex": "a \\times a = a^{2}", "explanation": "Two copies of $a$ multiplied give $a$ squared.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the results.", "workingLatex": "6 \\times a^{2}", "explanation": "Put the coefficient in front of the power.", "diagram": null },
        { "stepNumber": 5, "description": "Write in notation.", "workingLatex": "6a^{2}", "explanation": "The sign is dropped between the number and the power.", "diagram": null },
        { "stepNumber": 6, "description": "Warn against a slip.", "workingLatex": "6a^{2} \\neq (6a)^{2}", "explanation": "Only the $a$ is squared here, not the whole $6a$.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "a = 2 \\Rightarrow 6a^2 = 24", "explanation": "For $a=2$: $2\\times2\\times3\\times2 = 24$, and $6a^2 = 6\\times4 = 24$ agrees.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "6a^{2}", "explanation": "So the expression simplifies to $6a^{2}$.", "diagram": null }
      ],
      "finalAnswer": "$6a^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "perimeter", "context"],
    "questionText": "A rectangle has length $l$ and width $w$. Write an expression for its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what perimeter is.", "workingLatex": "\\text{perimeter} = \\text{total distance around}", "explanation": "The perimeter is the sum of all four side lengths.", "diagram": null },
        { "stepNumber": 2, "description": "List the four sides.", "workingLatex": "l, \\; w, \\; l, \\; w", "explanation": "A rectangle has two lengths and two widths.", "diagram": null },
        { "stepNumber": 3, "description": "Add them all.", "workingLatex": "l + w + l + w", "explanation": "Adding every side gives the distance around the shape.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the like terms.", "workingLatex": "2l + 2w", "explanation": "Two lengths make $2l$ and two widths make $2w$.", "diagram": null },
        { "stepNumber": 5, "description": "Optionally factorise.", "workingLatex": "2(l + w)", "explanation": "Taking out the common factor $2$ gives a neat alternative form.", "diagram": null },
        { "stepNumber": 6, "description": "Test with numbers.", "workingLatex": "l=5, w=3 \\Rightarrow 2(8) = 16", "explanation": "A $5$ by $3$ rectangle has perimeter $16$, which the formula gives.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "2l + 2w", "explanation": "So the perimeter is $2l+2w$ (or equivalently $2(l+w)$).", "diagram": null }
      ],
      "finalAnswer": "$2l + 2w$ (or $2(l+w)$)"
    }
  },
  {
    "id": "gcse.algebra.notation.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "words"],
    "questionText": "Write in words what the expression $\\dfrac{x+1}{3}$ means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the numerator.", "workingLatex": "x + 1", "explanation": "The top of the fraction is $x+1$, a number one more than $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the denominator.", "workingLatex": "3", "explanation": "The bottom is $3$, so the top is divided by three.", "diagram": null },
        { "stepNumber": 3, "description": "See what is divided.", "workingLatex": "(x + 1) \\div 3", "explanation": "The whole numerator, not just $x$, is divided by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the effect of the fraction bar.", "workingLatex": "\\frac{x+1}{3} \\neq \\frac{x}{3} + 1", "explanation": "The fraction bar acts like a bracket, keeping $x+1$ together.", "diagram": null },
        { "stepNumber": 5, "description": "Put it into words.", "workingLatex": "\\text{add 1 to } x, \\text{ then divide by 3}", "explanation": "First add $1$ to $x$, then share the result into three.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "x = 5 \\Rightarrow \\frac{6}{3} = 2", "explanation": "For $x=5$, add $1$ to get $6$ then divide by $3$ to get $2$.", "diagram": null },
        { "stepNumber": 7, "description": "State the interpretation.", "workingLatex": "\\frac{x+1}{3}", "explanation": "So it means 'one more than $x$, all divided by $3$'.", "diagram": null }
      ],
      "finalAnswer": "One more than $x$, all divided by $3$"
    }
  },
  {
    "id": "gcse.algebra.notation.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "consecutive"],
    "questionText": "A number is $n$. Write expressions for the next two consecutive integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what consecutive means.", "workingLatex": "\\text{consecutive} = \\text{next in order}", "explanation": "Consecutive integers go up one at a time.", "diagram": null },
        { "stepNumber": 2, "description": "Start from the given number.", "workingLatex": "n", "explanation": "The first number is $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the next integer.", "workingLatex": "n + 1", "explanation": "Adding $1$ gives the very next whole number.", "diagram": null },
        { "stepNumber": 4, "description": "Find the following integer.", "workingLatex": "n + 2", "explanation": "Adding another $1$ gives the one after that.", "diagram": null },
        { "stepNumber": 5, "description": "Check the pattern.", "workingLatex": "n, \\; n+1, \\; n+2", "explanation": "Each rises by one, which is exactly what consecutive means.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "n = 7 \\Rightarrow 8, 9", "explanation": "For $n=7$ the next two are $8$ and $9$, as expected.", "diagram": null },
        { "stepNumber": 7, "description": "State the expressions.", "workingLatex": "n+1 \\text{ and } n+2", "explanation": "So the next two consecutive integers are $n+1$ and $n+2$.", "diagram": null }
      ],
      "finalAnswer": "$n+1$ and $n+2$"
    }
  },
  {
    "id": "gcse.algebra.notation.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic notation", "money", "context"],
    "questionText": "Pens cost $p$ pence each and pencils cost $q$ pence each. Write an expression for the total cost, in pence, of $3$ pens and $5$ pencils.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cost of one pen.", "workingLatex": "p", "explanation": "Each pen costs $p$ pence.", "diagram": null },
        { "stepNumber": 2, "description": "Cost of three pens.", "workingLatex": "3 \\times p = 3p", "explanation": "Three pens cost three times the price of one.", "diagram": null },
        { "stepNumber": 3, "description": "Cost of one pencil.", "workingLatex": "q", "explanation": "Each pencil costs $q$ pence.", "diagram": null },
        { "stepNumber": 4, "description": "Cost of five pencils.", "workingLatex": "5 \\times q = 5q", "explanation": "Five pencils cost five times the price of one.", "diagram": null },
        { "stepNumber": 5, "description": "Add the two costs.", "workingLatex": "3p + 5q", "explanation": "The total is the pens' cost plus the pencils' cost.", "diagram": null },
        { "stepNumber": 6, "description": "Check the terms cannot combine.", "workingLatex": "3p + 5q", "explanation": "The terms use different letters, so they are unlike and stay separate.", "diagram": null },
        { "stepNumber": 7, "description": "Test with values.", "workingLatex": "p=10, q=5 \\Rightarrow 30 + 25 = 55", "explanation": "Three $10$p pens and five $5$p pencils cost $55$p, which the expression gives.", "diagram": null },
        { "stepNumber": 8, "description": "State the expression.", "workingLatex": "3p + 5q", "explanation": "So the total cost is $3p+5q$ pence.", "diagram": null }
      ],
      "finalAnswer": "$3p + 5q$ pence"
    }
  },
  {
    "id": "gcse.algebra.notation.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "age"],
    "questionText": "Tom is $t$ years old. Write an expression for his age in $5$ years' time, and an expression for his age $2$ years ago.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State Tom's age now.", "workingLatex": "t", "explanation": "Tom's current age is $t$ years.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'in 5 years'.", "workingLatex": "+5", "explanation": "In the future his age increases, so we add.", "diagram": null },
        { "stepNumber": 3, "description": "Write the future age.", "workingLatex": "t + 5", "explanation": "In five years Tom will be $t+5$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret '2 years ago'.", "workingLatex": "-2", "explanation": "In the past his age was smaller, so we subtract.", "diagram": null },
        { "stepNumber": 5, "description": "Write the past age.", "workingLatex": "t - 2", "explanation": "Two years ago Tom was $t-2$.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "t = 14 \\Rightarrow 19 \\text{ and } 12", "explanation": "If Tom is $14$, in five years he is $19$ and two years ago he was $12$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expressions.", "workingLatex": "t+5 \\text{ and } t-2", "explanation": "So the two ages are $t+5$ and $t-2$.", "diagram": null }
      ],
      "finalAnswer": "In 5 years: $t+5$; 2 years ago: $t-2$"
    }
  },
  {
    "id": "gcse.algebra.notation.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "brackets", "subtraction"],
    "questionText": "Write an expression for 'subtract $2$ from a number $x$, then multiply the result by $5$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "x", "explanation": "Let the number be $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Do the subtraction first.", "workingLatex": "x - 2", "explanation": "First take $2$ away from the number.", "diagram": null },
        { "stepNumber": 3, "description": "Keep the result together.", "workingLatex": "(x - 2)", "explanation": "Because the whole result is multiplied, we wrap it in a bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by five.", "workingLatex": "5(x - 2)", "explanation": "Now multiply that amount by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Explain the bracket's role.", "workingLatex": "5(x-2) \\neq 5x - 2", "explanation": "Without the bracket only $x$ would be multiplied, changing the meaning.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "x = 6 \\Rightarrow 5(4) = 20", "explanation": "For $x=6$, subtract $2$ to get $4$, then multiply by $5$ to get $20$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "5(x - 2)", "explanation": "So the expression is $5(x-2)$.", "diagram": null }
      ],
      "finalAnswer": "$5(x - 2)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic notation", "error spotting", "reasoning"],
    "questionText": "A student writes $a \\times a = 2a$. Explain the mistake and give the correct simplification.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the student's statement.", "workingLatex": "a \\times a = 2a", "explanation": "The student claims that multiplying $a$ by itself gives $2a$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $2a$ means.", "workingLatex": "2a = a + a", "explanation": "$2a$ is two lots of $a$ added together.", "diagram": null },
        { "stepNumber": 3, "description": "Recall what $a \\times a$ means.", "workingLatex": "a \\times a = a^{2}", "explanation": "Multiplying $a$ by itself is the square of $a$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the confusion.", "workingLatex": "\\text{adding vs multiplying}", "explanation": "The student has confused multiplying with adding.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "a = 3: \\; a \\times a = 9, \\; 2a = 6", "explanation": "For $a=3$ the two give $9$ and $6$, so they are clearly not equal.", "diagram": null },
        { "stepNumber": 6, "description": "Give the correct result.", "workingLatex": "a \\times a = a^{2}", "explanation": "The correct simplification is $a^2$, not $2a$.", "diagram": null },
        { "stepNumber": 7, "description": "State the explanation.", "workingLatex": "a \\times a = a^{2}", "explanation": "So the mistake is treating a product like a sum; the answer should be $a^2$.", "diagram": null }
      ],
      "finalAnswer": "Mistake: multiplying was treated as adding. Correct answer: $a^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "sum then divide"],
    "questionText": "Write an expression for 'the sum of $a$ and $b$, divided by $2$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'sum'.", "workingLatex": "a + b", "explanation": "The sum of $a$ and $b$ means we add them.", "diagram": null },
        { "stepNumber": 2, "description": "Note the whole sum is divided.", "workingLatex": "(a + b) \\div 2", "explanation": "It is the entire sum that gets divided by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write as a fraction.", "workingLatex": "\\frac{a + b}{2}", "explanation": "The fraction bar keeps $a+b$ together on top.", "diagram": null },
        { "stepNumber": 4, "description": "Explain the bar as a bracket.", "workingLatex": "\\frac{a+b}{2} \\neq a + \\frac{b}{2}", "explanation": "The bar groups the numerator, so both letters are divided by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Recognise it as a mean.", "workingLatex": "\\frac{a+b}{2} = \\text{average of } a, b", "explanation": "This is also the formula for the average of two numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "a=4, b=6 \\Rightarrow \\frac{10}{2} = 5", "explanation": "For $a=4,b=6$ the expression gives $5$, the average.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "\\frac{a + b}{2}", "explanation": "So the expression is $\\dfrac{a+b}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{a + b}{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "mixed product", "three letters"],
    "questionText": "Simplify $p \\times 4 \\times q \\times q$ using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Group numbers and letters.", "workingLatex": "4 \\times (p) \\times (q \\times q)", "explanation": "Rearrange so the number is first and repeated letters are together.", "diagram": null },
        { "stepNumber": 2, "description": "Keep the coefficient.", "workingLatex": "4", "explanation": "There is one number, $4$, which becomes the coefficient.", "diagram": null },
        { "stepNumber": 3, "description": "Handle the single $p$.", "workingLatex": "p", "explanation": "There is only one $p$, so it stays to the first power.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the two $q$'s.", "workingLatex": "q \\times q = q^{2}", "explanation": "Two copies of $q$ multiply to $q$ squared.", "diagram": null },
        { "stepNumber": 5, "description": "Bring the parts together.", "workingLatex": "4 \\times p \\times q^{2}", "explanation": "Coefficient first, then the letters in alphabetical order.", "diagram": null },
        { "stepNumber": 6, "description": "Write in notation.", "workingLatex": "4pq^{2}", "explanation": "Dropping the signs gives the tidy form.", "diagram": null },
        { "stepNumber": 7, "description": "Test with values.", "workingLatex": "p=2,q=3 \\Rightarrow 4\\times2\\times9 = 72", "explanation": "The original gives $2\\times4\\times3\\times3 = 72$ too, so it checks.", "diagram": null },
        { "stepNumber": 8, "description": "State the result.", "workingLatex": "4pq^{2}", "explanation": "So the expression simplifies to $4pq^{2}$.", "diagram": null }
      ],
      "finalAnswer": "$4pq^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "three more than half"],
    "questionText": "Write an expression for '$3$ more than half of a number $n$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "n", "explanation": "Let the number be $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'half of'.", "workingLatex": "\\frac{n}{2}", "explanation": "Half of the number is the number divided by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret '3 more than'.", "workingLatex": "+3", "explanation": "'More than' means we add $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Add to the half.", "workingLatex": "\\frac{n}{2} + 3", "explanation": "We add $3$ to half of the number.", "diagram": null },
        { "stepNumber": 5, "description": "Check the order.", "workingLatex": "\\frac{n}{2} + 3 \\neq \\frac{n + 3}{2}", "explanation": "Only the number is halved, not the number plus three, so no bracket over $n+3$.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "n = 8 \\Rightarrow 4 + 3 = 7", "explanation": "For $n=8$, half is $4$ and three more is $7$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "\\frac{n}{2} + 3", "explanation": "So the expression is $\\dfrac{n}{2}+3$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{n}{2} + 3$"
    }
  },
  {
    "id": "gcse.algebra.notation.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["algebraic notation", "identify", "coefficient", "constant"],
    "questionText": "In the expression $5x^{2} - 3x + 8$, state the coefficient of $x^{2}$, the coefficient of $x$, and the constant term.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "5x^{2}, \\; -3x, \\; +8", "explanation": "The $+$ and $-$ signs break the expression into three terms.", "diagram": null },
        { "stepNumber": 2, "description": "Look at the $x^{2}$ term.", "workingLatex": "5x^{2}", "explanation": "This term contains $x$ squared.", "diagram": null },
        { "stepNumber": 3, "description": "Read its coefficient.", "workingLatex": "5", "explanation": "The number in front of $x^2$ is $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Look at the $x$ term.", "workingLatex": "-3x", "explanation": "This term contains a single $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Read its coefficient with the sign.", "workingLatex": "-3", "explanation": "The coefficient includes the minus sign, so it is $-3$.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the constant.", "workingLatex": "+8", "explanation": "The term with no letter is the constant.", "diagram": null },
        { "stepNumber": 7, "description": "State the constant.", "workingLatex": "8", "explanation": "The constant term is $8$.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the answers.", "workingLatex": "5, \\; -3, \\; 8", "explanation": "So the coefficients are $5$ and $-3$, and the constant is $8$.", "diagram": null }
      ],
      "finalAnswer": "Coefficient of $x^{2}$ is $5$; of $x$ is $-3$; constant is $8$"
    }
  },
  {
    "id": "gcse.algebra.notation.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "context", "total"],
    "questionText": "A bag contains $x$ red counters and $y$ blue counters. Write an expression for the total number of counters, and an expression for the number of counters if $4$ are removed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Count each colour.", "workingLatex": "x \\text{ red}, \\; y \\text{ blue}", "explanation": "There are $x$ red and $y$ blue counters.", "diagram": null },
        { "stepNumber": 2, "description": "Add for the total.", "workingLatex": "x + y", "explanation": "The total is red plus blue.", "diagram": null },
        { "stepNumber": 3, "description": "Note the terms are unlike.", "workingLatex": "x + y", "explanation": "Different letters cannot be combined, so the total stays as $x+y$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret removing $4$.", "workingLatex": "-4", "explanation": "Taking counters away means subtracting.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract from the total.", "workingLatex": "x + y - 4", "explanation": "Remove $4$ from the total number of counters.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "x=5,y=3 \\Rightarrow 8, \\text{ then } 4", "explanation": "Five red and three blue give $8$, and removing $4$ leaves $4$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expressions.", "workingLatex": "x+y \\text{ and } x+y-4", "explanation": "So the total is $x+y$ and after removing $4$ it is $x+y-4$.", "diagram": null }
      ],
      "finalAnswer": "Total $x+y$; after removing $4$: $x+y-4$"
    }
  },
  {
    "id": "gcse.algebra.notation.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "compare"],
    "questionText": "Explain the difference between the expressions $3(x+2)$ and $3x+2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the first expression.", "workingLatex": "3(x + 2)", "explanation": "Here the bracket means the whole of $x+2$ is multiplied by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Describe the first in words.", "workingLatex": "\\text{add 2 to } x, \\text{ then times 3}", "explanation": "We add $2$ first, then triple the result.", "diagram": null },
        { "stepNumber": 3, "description": "Read the second expression.", "workingLatex": "3x + 2", "explanation": "Here only $x$ is multiplied by $3$, and then $2$ is added.", "diagram": null },
        { "stepNumber": 4, "description": "Describe the second in words.", "workingLatex": "\\text{times } x \\text{ by 3, then add 2}", "explanation": "We triple $x$ first, then add $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the first to compare.", "workingLatex": "3(x+2) = 3x + 6", "explanation": "Multiplying out shows the bracket version equals $3x+6$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two.", "workingLatex": "3x + 6 \\neq 3x + 2", "explanation": "The constant differs, so the expressions are not the same.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "x = 4: \\; 18 \\text{ vs } 14", "explanation": "For $x=4$ they give $18$ and $14$, confirming they differ.", "diagram": null },
        { "stepNumber": 8, "description": "State the conclusion.", "workingLatex": "3(x+2) \\neq 3x+2", "explanation": "So the bracket changes which parts get multiplied, giving different values.", "diagram": null }
      ],
      "finalAnswer": "$3(x+2)=3x+6$ triples everything; $3x+2$ only triples $x$ — they differ"
    }
  },
  {
    "id": "gcse.algebra.notation.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "squaring sum"],
    "questionText": "Write an expression for 'the square of the sum of $x$ and $3$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'sum of $x$ and $3$'.", "workingLatex": "x + 3", "explanation": "The sum is $x+3$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'the square of'.", "workingLatex": "(\\cdots)^{2}", "explanation": "Squaring means the whole thing is raised to the power $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Wrap the sum in a bracket.", "workingLatex": "(x + 3)", "explanation": "We keep the sum together so the squaring applies to all of it.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the power.", "workingLatex": "(x + 3)^{2}", "explanation": "The bracket is squared as a whole.", "diagram": null },
        { "stepNumber": 5, "description": "Contrast with $x^2 + 3$.", "workingLatex": "(x+3)^{2} \\neq x^{2} + 3", "explanation": "Squaring the sum is not the same as squaring only $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "x = 2 \\Rightarrow (5)^{2} = 25", "explanation": "For $x=2$, the sum is $5$ and its square is $25$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "(x + 3)^{2}", "explanation": "So the expression is $(x+3)^2$.", "diagram": null }
      ],
      "finalAnswer": "$(x + 3)^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic notation", "context", "cost", "change"],
    "questionText": "A book costs $\\pounds b$. Write an expression for the change, in pounds, received from a $\\pounds 20$ note when buying $2$ books.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cost of one book.", "workingLatex": "b", "explanation": "One book costs $\\pounds b$.", "diagram": null },
        { "stepNumber": 2, "description": "Cost of two books.", "workingLatex": "2 \\times b = 2b", "explanation": "Two books cost twice as much.", "diagram": null },
        { "stepNumber": 3, "description": "Recall how change works.", "workingLatex": "\\text{change} = \\text{paid} - \\text{cost}", "explanation": "Change is what is left after subtracting the cost from the amount paid.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the amount paid.", "workingLatex": "20", "explanation": "The note is worth $\\pounds20$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the cost.", "workingLatex": "20 - 2b", "explanation": "Take the cost of the books from the $\\pounds20$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the order correct.", "workingLatex": "20 - 2b \\neq 2b - 20", "explanation": "The amount paid comes first, since change is money left over.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "b = 7 \\Rightarrow 20 - 14 = 6", "explanation": "If a book is $\\pounds7$, two cost $\\pounds14$, leaving $\\pounds6$ change.", "diagram": null },
        { "stepNumber": 8, "description": "State the expression.", "workingLatex": "20 - 2b", "explanation": "So the change is $\\pounds(20 - 2b)$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds(20 - 2b)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "words"],
    "questionText": "Write in words what the expression $5n - 2$ means.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into terms.", "workingLatex": "5n, \\; -2", "explanation": "The expression has two terms, $5n$ and $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the first term.", "workingLatex": "5n = 5 \\times n", "explanation": "$5n$ means five times the number $n$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the second term.", "workingLatex": "-2", "explanation": "The $-2$ means we subtract $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the meaning.", "workingLatex": "5 \\times n - 2", "explanation": "Multiply the number by five, then take away two.", "diagram": null },
        { "stepNumber": 5, "description": "Note the order of operations.", "workingLatex": "\\text{multiply first, then subtract}", "explanation": "The multiplying is done before the subtraction, as the notation shows.", "diagram": null },
        { "stepNumber": 6, "description": "Test with a value.", "workingLatex": "n = 4 \\Rightarrow 20 - 2 = 18", "explanation": "For $n=4$, five times is $20$ and two less is $18$.", "diagram": null },
        { "stepNumber": 7, "description": "State the interpretation.", "workingLatex": "5n - 2", "explanation": "So $5n-2$ means 'five times $n$, then subtract $2$'.", "diagram": null }
      ],
      "finalAnswer": "Five times $n$, then subtract $2$"
    }
  },
  {
    "id": "gcse.algebra.notation.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "difference of squares idea"],
    "questionText": "Write an expression for 'the difference between $a^{2}$ and $b^{2}$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'a squared'.", "workingLatex": "a^{2}", "explanation": "$a$ squared is $a \\times a$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'b squared'.", "workingLatex": "b^{2}", "explanation": "$b$ squared is $b \\times b$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret 'difference'.", "workingLatex": "\\text{difference} = -", "explanation": "The difference between two quantities means we subtract one from the other.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract in the stated order.", "workingLatex": "a^{2} - b^{2}", "explanation": "Taking $b^2$ from $a^2$ follows the order given.", "diagram": null },
        { "stepNumber": 5, "description": "Note the terms are unlike.", "workingLatex": "a^{2} - b^{2}", "explanation": "The squares involve different letters, so they cannot be combined.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "a=5,b=3 \\Rightarrow 25 - 9 = 16", "explanation": "For $a=5,b=3$ the difference is $16$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "a^{2} - b^{2}", "explanation": "So the expression is $a^2-b^2$.", "diagram": null }
      ],
      "finalAnswer": "$a^{2} - b^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["algebraic notation", "context", "rate"],
    "questionText": "A car travels at a steady speed of $v$ km/h. Write an expression for the distance it travels in $3$ hours, and in $t$ hours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the link.", "workingLatex": "\\text{distance} = \\text{speed} \\times \\text{time}", "explanation": "Distance is found by multiplying speed by the time travelled.", "diagram": null },
        { "stepNumber": 2, "description": "Use the speed.", "workingLatex": "v", "explanation": "The speed is $v$ km/h.", "diagram": null },
        { "stepNumber": 3, "description": "Distance in 3 hours.", "workingLatex": "v \\times 3 = 3v", "explanation": "Three hours at speed $v$ covers $3v$ km.", "diagram": null },
        { "stepNumber": 4, "description": "Distance in $t$ hours.", "workingLatex": "v \\times t = vt", "explanation": "For a general time $t$, the distance is $vt$ km.", "diagram": null },
        { "stepNumber": 5, "description": "Write in conventional order.", "workingLatex": "3v \\text{ and } vt", "explanation": "Numbers go before letters, and letters in alphabetical order.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "v = 50 \\Rightarrow 150 \\text{ km in 3 h}", "explanation": "At $50$ km/h, three hours gives $150$ km, as expected.", "diagram": null },
        { "stepNumber": 7, "description": "State the expressions.", "workingLatex": "3v \\text{ and } vt", "explanation": "So the distances are $3v$ km and $vt$ km.", "diagram": null }
      ],
      "finalAnswer": "$3v$ km and $vt$ km"
    }
  },
  {
    "id": "gcse.algebra.notation.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic notation", "words to algebra", "two variables"],
    "questionText": "Write an expression for 'three times a number $x$ added to twice a number $y$'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'three times $x$'.", "workingLatex": "3x", "explanation": "Three times the number $x$ is $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'twice $y$'.", "workingLatex": "2y", "explanation": "Twice the number $y$ is $2y$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret 'added to'.", "workingLatex": "+", "explanation": "The two parts are joined by addition.", "diagram": null },
        { "stepNumber": 4, "description": "Combine the parts.", "workingLatex": "3x + 2y", "explanation": "We add the two products together.", "diagram": null },
        { "stepNumber": 5, "description": "Check they cannot combine.", "workingLatex": "3x + 2y", "explanation": "The terms use different letters, so they are unlike and stay separate.", "diagram": null },
        { "stepNumber": 6, "description": "Test with values.", "workingLatex": "x=2,y=5 \\Rightarrow 6 + 10 = 16", "explanation": "For $x=2,y=5$ the expression gives $16$.", "diagram": null },
        { "stepNumber": 7, "description": "State the expression.", "workingLatex": "3x + 2y", "explanation": "So the expression is $3x+2y$.", "diagram": null }
      ],
      "finalAnswer": "$3x + 2y$"
    }
  },
  {
    "id": "gcse.algebra.notation.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["algebraic notation", "error spotting", "reasoning"],
    "questionText": "A student writes $y \\div 2$ as $2y$. Explain the mistake and write the correct expression.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the student's answer.", "workingLatex": "y \\div 2 = 2y", "explanation": "The student has written the division as a multiplication by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what $2y$ means.", "workingLatex": "2y = 2 \\times y", "explanation": "$2y$ means the number doubled.", "diagram": null },
        { "stepNumber": 3, "description": "Recall what dividing by 2 means.", "workingLatex": "y \\div 2 = \\frac{y}{2}", "explanation": "Dividing by $2$ halves the number, written as a fraction.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the confusion.", "workingLatex": "\\text{halving vs doubling}", "explanation": "The student has doubled when they should have halved.", "diagram": null },
        { "stepNumber": 5, "description": "Test with a value.", "workingLatex": "y = 8: \\; \\frac{y}{2} = 4, \\; 2y = 16", "explanation": "For $y=8$ the correct answer is $4$, not $16$.", "diagram": null },
        { "stepNumber": 6, "description": "Give the correct expression.", "workingLatex": "\\frac{y}{2}", "explanation": "The correct form is $\\dfrac{y}{2}$.", "diagram": null },
        { "stepNumber": 7, "description": "State the explanation.", "workingLatex": "y \\div 2 = \\frac{y}{2}", "explanation": "So the mistake is confusing division with multiplication; it should be $\\dfrac{y}{2}$.", "diagram": null }
      ],
      "finalAnswer": "Mistake: division written as multiplication. Correct: $\\dfrac{y}{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["algebraic notation", "context", "perimeter", "squares"],
    "questionText": "A square has side length $s$. Write an expression for its perimeter and an expression for its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall a square's sides.", "workingLatex": "4 \\text{ equal sides}", "explanation": "A square has four sides all equal to $s$.", "diagram": null },
        { "stepNumber": 2, "description": "Add the sides for perimeter.", "workingLatex": "s + s + s + s", "explanation": "The perimeter is the total of the four sides.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the perimeter.", "workingLatex": "4s", "explanation": "Four equal sides give $4s$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall area of a square.", "workingLatex": "\\text{area} = \\text{side} \\times \\text{side}", "explanation": "The area is one side multiplied by itself.", "diagram": null },
        { "stepNumber": 5, "description": "Write the area.", "workingLatex": "s \\times s = s^{2}", "explanation": "Side times side gives $s$ squared.", "diagram": null },
        { "stepNumber": 6, "description": "Distinguish the two results.", "workingLatex": "4s \\neq s^{2}", "explanation": "Perimeter adds sides while area multiplies them, so they are different expressions.", "diagram": null },
        { "stepNumber": 7, "description": "Test with a value.", "workingLatex": "s = 5 \\Rightarrow 20 \\text{ and } 25", "explanation": "A square of side $5$ has perimeter $20$ and area $25$.", "diagram": null },
        { "stepNumber": 8, "description": "State the expressions.", "workingLatex": "4s \\text{ and } s^{2}", "explanation": "So the perimeter is $4s$ and the area is $s^2$.", "diagram": null }
      ],
      "finalAnswer": "Perimeter $4s$; area $s^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "money", "context"],
    "questionText": "A taxi firm charges a fixed fee of $\\pounds 3$ plus $\\pounds 2$ for every mile travelled. A journey is $m$ miles. Write an expression for the total cost, then an expression for the cost if the fixed fee is doubled.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the fixed part.", "workingLatex": "3", "explanation": "The fixed fee of $\\pounds3$ is paid whatever the distance.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the variable part.", "workingLatex": "\\pounds 2 \\text{ per mile}", "explanation": "The rest of the cost depends on the number of miles.", "diagram": null },
        { "stepNumber": 3, "description": "Cost of the miles.", "workingLatex": "2 \\times m = 2m", "explanation": "At $\\pounds2$ a mile, $m$ miles cost $2m$ pounds.", "diagram": null },
        { "stepNumber": 4, "description": "Add fixed and variable parts.", "workingLatex": "3 + 2m", "explanation": "The total is the fixed fee plus the mileage charge.", "diagram": null },
        { "stepNumber": 5, "description": "Write in a tidy order.", "workingLatex": "2m + 3", "explanation": "It is common to write the variable term first, giving $2m+3$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the terms are unlike.", "workingLatex": "2m + 3", "explanation": "One term has a letter and one does not, so they cannot combine.", "diagram": null },
        { "stepNumber": 7, "description": "Test the total with a value.", "workingLatex": "m = 4 \\Rightarrow 2(4) + 3 = 11", "explanation": "A $4$-mile trip costs $\\pounds11$, which fits the wording.", "diagram": null },
        { "stepNumber": 8, "description": "Now double the fixed fee.", "workingLatex": "2 \\times 3 = 6", "explanation": "Doubling the $\\pounds3$ fee gives a new fixed fee of $\\pounds6$.", "diagram": null },
        { "stepNumber": 9, "description": "Keep the mileage charge the same.", "workingLatex": "2m", "explanation": "The per-mile charge is unchanged.", "diagram": null },
        { "stepNumber": 10, "description": "Form the new total.", "workingLatex": "2m + 6", "explanation": "Add the new fixed fee to the mileage charge.", "diagram": null },
        { "stepNumber": 11, "description": "Test the new total.", "workingLatex": "m = 4 \\Rightarrow 2(4) + 6 = 14", "explanation": "The same trip now costs $\\pounds14$, three more than before as expected.", "diagram": null },
        { "stepNumber": 12, "description": "Compare the two expressions.", "workingLatex": "2m + 3 \\to 2m + 6", "explanation": "Only the constant changed; the mileage term stayed the same.", "diagram": null },
        { "stepNumber": 13, "description": "State the expressions.", "workingLatex": "2m + 3 \\text{ and } 2m + 6", "explanation": "So the total cost is $\\pounds(2m+3)$, and with the doubled fee it is $\\pounds(2m+6)$.", "diagram": null }
      ],
      "finalAnswer": "$\\pounds(2m + 3)$; doubled fee: $\\pounds(2m + 6)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "consecutive", "sum"],
    "questionText": "Three consecutive integers have $n$ as the smallest. Write an expression for their sum, and simplify it as far as possible.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the smallest integer.", "workingLatex": "n", "explanation": "The smallest of the three is $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the second integer.", "workingLatex": "n + 1", "explanation": "The next consecutive integer is one more.", "diagram": null },
        { "stepNumber": 3, "description": "Write the third integer.", "workingLatex": "n + 2", "explanation": "The one after that is two more than $n$.", "diagram": null },
        { "stepNumber": 4, "description": "List all three.", "workingLatex": "n, \\; n+1, \\; n+2", "explanation": "These are the three consecutive integers in order.", "diagram": null },
        { "stepNumber": 5, "description": "Write their sum.", "workingLatex": "n + (n+1) + (n+2)", "explanation": "The sum adds all three expressions together.", "diagram": null },
        { "stepNumber": 6, "description": "Remove the brackets.", "workingLatex": "n + n + 1 + n + 2", "explanation": "Since we are only adding, the brackets can be dropped.", "diagram": null },
        { "stepNumber": 7, "description": "Group the like terms.", "workingLatex": "(n + n + n) + (1 + 2)", "explanation": "Collect the $n$ terms together and the numbers together.", "diagram": null },
        { "stepNumber": 8, "description": "Add the $n$ terms.", "workingLatex": "n + n + n = 3n", "explanation": "Three lots of $n$ make $3n$.", "diagram": null },
        { "stepNumber": 9, "description": "Add the constants.", "workingLatex": "1 + 2 = 3", "explanation": "The numbers add to $3$.", "diagram": null },
        { "stepNumber": 10, "description": "Combine.", "workingLatex": "3n + 3", "explanation": "The simplified sum is $3n+3$.", "diagram": null },
        { "stepNumber": 11, "description": "Factorise for a neat form.", "workingLatex": "3(n + 1)", "explanation": "Taking out $3$ shows the sum is always a multiple of $3$.", "diagram": null },
        { "stepNumber": 12, "description": "Test with a value.", "workingLatex": "n = 4 \\Rightarrow 4+5+6 = 15 = 3(5)", "explanation": "For $n=4$ the sum is $15$, matching $3(n+1)$.", "diagram": null },
        { "stepNumber": 13, "description": "State the result.", "workingLatex": "3n + 3", "explanation": "So the sum is $3n+3$, which equals $3(n+1)$.", "diagram": null }
      ],
      "finalAnswer": "$3n + 3 = 3(n+1)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "geometry", "context"],
    "questionText": "A rectangle has width $w$ cm. Its length is $3$ cm more than twice its width. Write an expression for the length, and hence an expression for the perimeter, simplified.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the width.", "workingLatex": "w", "explanation": "The width is $w$ cm.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'twice the width'.", "workingLatex": "2w", "explanation": "Twice the width is $2w$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret '3 more than'.", "workingLatex": "2w + 3", "explanation": "Three more than twice the width adds $3$.", "diagram": null },
        { "stepNumber": 4, "description": "State the length.", "workingLatex": "l = 2w + 3", "explanation": "So the length is $2w+3$ cm.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the perimeter formula.", "workingLatex": "P = 2l + 2w", "explanation": "The perimeter is twice the length plus twice the width.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the length.", "workingLatex": "P = 2(2w + 3) + 2w", "explanation": "Replace $l$ with the expression for the length.", "diagram": null },
        { "stepNumber": 7, "description": "Expand the bracket.", "workingLatex": "2(2w + 3) = 4w + 6", "explanation": "Multiply each term inside the bracket by $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the perimeter.", "workingLatex": "P = 4w + 6 + 2w", "explanation": "Put the expanded part back with the remaining $2w$.", "diagram": null },
        { "stepNumber": 9, "description": "Group like terms.", "workingLatex": "(4w + 2w) + 6", "explanation": "Collect the $w$ terms together.", "diagram": null },
        { "stepNumber": 10, "description": "Add the $w$ terms.", "workingLatex": "4w + 2w = 6w", "explanation": "Four $w$ plus two $w$ is six $w$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the simplified perimeter.", "workingLatex": "P = 6w + 6", "explanation": "So the perimeter simplifies to $6w+6$.", "diagram": null },
        { "stepNumber": 12, "description": "Test with a value.", "workingLatex": "w = 4 \\Rightarrow l = 11, \\; P = 30", "explanation": "For $w=4$: length $11$, and $2(11)+2(4)=30$, matching $6(4)+6=30$.", "diagram": null },
        { "stepNumber": 13, "description": "State the results.", "workingLatex": "l = 2w+3, \\; P = 6w+6", "explanation": "So the length is $2w+3$ cm and the perimeter is $6w+6$ cm.", "diagram": null }
      ],
      "finalAnswer": "Length $2w+3$; perimeter $6w+6$"
    }
  },
  {
    "id": "gcse.algebra.notation.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "money", "mixed units"],
    "questionText": "Apples cost $a$ pence each and oranges cost $b$ pence each. Write an expression, in pounds, for the total cost of $4$ apples and $6$ oranges.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cost of the apples in pence.", "workingLatex": "4 \\times a = 4a", "explanation": "Four apples at $a$ pence each cost $4a$ pence.", "diagram": null },
        { "stepNumber": 2, "description": "Cost of the oranges in pence.", "workingLatex": "6 \\times b = 6b", "explanation": "Six oranges at $b$ pence each cost $6b$ pence.", "diagram": null },
        { "stepNumber": 3, "description": "Total in pence.", "workingLatex": "4a + 6b", "explanation": "Add the two costs to get the total in pence.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the pence-to-pounds link.", "workingLatex": "100 \\text{ pence} = \\pounds 1", "explanation": "There are $100$ pence in a pound.", "diagram": null },
        { "stepNumber": 5, "description": "Convert by dividing by 100.", "workingLatex": "\\frac{4a + 6b}{100}", "explanation": "To change pence into pounds we divide the whole total by $100$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the fraction bar acts as a bracket.", "workingLatex": "\\frac{4a+6b}{100}", "explanation": "The bar keeps the whole numerator together, so both terms are divided.", "diagram": null },
        { "stepNumber": 7, "description": "Check it is fully simplified.", "workingLatex": "\\gcd(4,6,100) = 2", "explanation": "The numbers share a factor of $2$, so we could simplify a little.", "diagram": null },
        { "stepNumber": 8, "description": "Divide top and bottom by 2.", "workingLatex": "\\frac{2a + 3b}{50}", "explanation": "Cancelling a factor of $2$ gives a neater equivalent form.", "diagram": null },
        { "stepNumber": 9, "description": "Test with values.", "workingLatex": "a=50,b=50 \\Rightarrow \\frac{200+300}{100} = 5", "explanation": "At $50$p each, the total is $\\pounds5$, which the expression gives.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm the simplified form agrees.", "workingLatex": "\\frac{100+150}{50} = 5", "explanation": "The simplified version gives $\\pounds5$ too, so both are correct.", "diagram": null },
        { "stepNumber": 11, "description": "State the expression.", "workingLatex": "\\frac{4a + 6b}{100}", "explanation": "So the total cost is $\\pounds\\dfrac{4a+6b}{100}$ (or $\\pounds\\dfrac{2a+3b}{50}$).", "diagram": null }
      ],
      "finalAnswer": "$\\pounds\\dfrac{4a + 6b}{100}$ (equivalently $\\pounds\\dfrac{2a+3b}{50}$)"
    }
  },
  {
    "id": "gcse.algebra.notation.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic notation", "error spotting", "reasoning", "multiple"],
    "questionText": "A student simplifies $3 \\times a \\times a$ as $3a$ and $2a + 2a$ as $4a^{2}$. Identify and correct both mistakes, explaining your reasoning.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the first statement.", "workingLatex": "3 \\times a \\times a = 3a", "explanation": "The student claims this equals $3a$.", "diagram": null },
        { "stepNumber": 2, "description": "Work out the letters.", "workingLatex": "a \\times a = a^{2}", "explanation": "The two $a$'s multiply to $a$ squared, not just $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the coefficient.", "workingLatex": "3 \\times a^{2} = 3a^{2}", "explanation": "So the correct simplification is $3a^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Explain the first mistake.", "workingLatex": "3a \\to 3a^{2}", "explanation": "The student lost a factor of $a$; multiplying two $a$'s gives $a^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Test the first correction.", "workingLatex": "a = 2: \\; 3\\times2\\times2 = 12 = 3a^{2}", "explanation": "For $a=2$ the true value is $12$, matching $3a^2$, not $3a=6$.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the second statement.", "workingLatex": "2a + 2a = 4a^{2}", "explanation": "The student claims this equals $4a^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Recognise these are like terms.", "workingLatex": "2a \\text{ and } 2a", "explanation": "Both terms are lots of $a$, so they can be added directly.", "diagram": null },
        { "stepNumber": 8, "description": "Add the coefficients.", "workingLatex": "2 + 2 = 4", "explanation": "Adding like terms adds the numbers in front.", "diagram": null },
        { "stepNumber": 9, "description": "Keep the letter unchanged.", "workingLatex": "2a + 2a = 4a", "explanation": "Adding does not change the power, so it stays $a$, giving $4a$.", "diagram": null },
        { "stepNumber": 10, "description": "Explain the second mistake.", "workingLatex": "4a^{2} \\to 4a", "explanation": "The student wrongly raised the power; addition never creates a square.", "diagram": null },
        { "stepNumber": 11, "description": "Test the second correction.", "workingLatex": "a = 3: \\; 6 + 6 = 12 = 4a", "explanation": "For $a=3$ the true value is $12 = 4\\times3$, not $4\\times9$.", "diagram": null },
        { "stepNumber": 12, "description": "State both corrections.", "workingLatex": "3a^{2} \\text{ and } 4a", "explanation": "So the correct answers are $3a^2$ and $4a$.", "diagram": null }
      ],
      "finalAnswer": "$3\\times a\\times a = 3a^{2}$; $2a + 2a = 4a$"
    }
  },
  {
    "id": "gcse.algebra.notation.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "two variables"],
    "questionText": "In a car park there are $c$ cars and $m$ motorbikes. Each car has $4$ wheels and each motorbike has $2$ wheels. Write an expression for the total number of wheels, and simplify an expression for the total number of vehicles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Wheels on the cars.", "workingLatex": "4 \\times c = 4c", "explanation": "Each of the $c$ cars has $4$ wheels.", "diagram": null },
        { "stepNumber": 2, "description": "Wheels on the motorbikes.", "workingLatex": "2 \\times m = 2m", "explanation": "Each of the $m$ motorbikes has $2$ wheels.", "diagram": null },
        { "stepNumber": 3, "description": "Total the wheels.", "workingLatex": "4c + 2m", "explanation": "Add the car wheels and the motorbike wheels.", "diagram": null },
        { "stepNumber": 4, "description": "Check the terms are unlike.", "workingLatex": "4c + 2m", "explanation": "Different letters mean the terms cannot be combined.", "diagram": null },
        { "stepNumber": 5, "description": "Optionally factorise the wheels.", "workingLatex": "2(2c + m)", "explanation": "Both terms share a factor of $2$, giving a neat alternative.", "diagram": null },
        { "stepNumber": 6, "description": "Now count vehicles.", "workingLatex": "c \\text{ cars}, \\; m \\text{ motorbikes}", "explanation": "The vehicles are simply the cars and the motorbikes.", "diagram": null },
        { "stepNumber": 7, "description": "Add for the total vehicles.", "workingLatex": "c + m", "explanation": "Each car and each motorbike counts once, so we add the counts.", "diagram": null },
        { "stepNumber": 8, "description": "Note this cannot simplify further.", "workingLatex": "c + m", "explanation": "The two terms are unlike, so $c+m$ is already fully simplified.", "diagram": null },
        { "stepNumber": 9, "description": "Contrast wheels and vehicles.", "workingLatex": "4c + 2m \\neq c + m", "explanation": "Wheels weight the counts by $4$ and $2$; vehicles count each once.", "diagram": null },
        { "stepNumber": 10, "description": "Test with values.", "workingLatex": "c=3,m=2 \\Rightarrow 16 \\text{ wheels}, 5 \\text{ vehicles}", "explanation": "Three cars and two bikes give $12+4=16$ wheels and $5$ vehicles.", "diagram": null },
        { "stepNumber": 11, "description": "State the expressions.", "workingLatex": "4c + 2m, \\; c + m", "explanation": "So there are $4c+2m$ wheels and $c+m$ vehicles.", "diagram": null }
      ],
      "finalAnswer": "Wheels $4c + 2m$; vehicles $c + m$"
    }
  },
  {
    "id": "gcse.algebra.notation.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "brackets"],
    "questionText": "A number $n$ is multiplied by $3$, then $4$ is subtracted, and finally the result is divided by $2$. Write a single expression for the outcome.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the number.", "workingLatex": "n", "explanation": "The starting value is $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by three.", "workingLatex": "3n", "explanation": "The first step multiplies $n$ by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract four.", "workingLatex": "3n - 4", "explanation": "The second step takes $4$ away from $3n$.", "diagram": null },
        { "stepNumber": 4, "description": "Note the whole result is divided.", "workingLatex": "(3n - 4)", "explanation": "The final division acts on everything so far, so keep it together.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by two.", "workingLatex": "\\frac{3n - 4}{2}", "explanation": "Put the whole expression over $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Explain the fraction bar.", "workingLatex": "\\frac{3n-4}{2} \\neq 3n - \\frac{4}{2}", "explanation": "The bar keeps $3n-4$ together so all of it is divided by $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the order of operations.", "workingLatex": "\\times, \\; -, \\; \\div", "explanation": "The expression follows the exact order described in the question.", "diagram": null },
        { "stepNumber": 8, "description": "Test with a value.", "workingLatex": "n = 4 \\Rightarrow \\frac{12 - 4}{2} = 4", "explanation": "For $n=4$: times $3$ is $12$, minus $4$ is $8$, divided by $2$ is $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Test another value.", "workingLatex": "n = 2 \\Rightarrow \\frac{6-4}{2} = 1", "explanation": "For $n=2$ the chain gives $1$, matching the expression.", "diagram": null },
        { "stepNumber": 10, "description": "Confirm it is a single expression.", "workingLatex": "\\frac{3n - 4}{2}", "explanation": "All three operations are captured in one neat expression.", "diagram": null },
        { "stepNumber": 11, "description": "State the answer.", "workingLatex": "\\frac{3n - 4}{2}", "explanation": "So the outcome is $\\dfrac{3n-4}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{3n - 4}{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "coins"],
    "questionText": "Sam has some $20$p coins and some $50$p coins. He has $x$ twenty-pence coins and $3$ more fifty-pence coins than twenty-pence coins. Write an expression, in pence, for the total value of his coins, simplified.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Count the 20p coins.", "workingLatex": "x", "explanation": "There are $x$ twenty-pence coins.", "diagram": null },
        { "stepNumber": 2, "description": "Count the 50p coins.", "workingLatex": "x + 3", "explanation": "There are $3$ more fifty-pence coins than twenty-pence coins.", "diagram": null },
        { "stepNumber": 3, "description": "Value of the 20p coins.", "workingLatex": "20 \\times x = 20x", "explanation": "Each $20$p coin is worth $20$ pence.", "diagram": null },
        { "stepNumber": 4, "description": "Value of the 50p coins.", "workingLatex": "50 \\times (x + 3)", "explanation": "Each $50$p coin is worth $50$ pence, and there are $x+3$ of them.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the bracket.", "workingLatex": "50(x + 3) = 50x + 150", "explanation": "Multiply both terms inside the bracket by $50$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the total value.", "workingLatex": "20x + 50x + 150", "explanation": "Add the value of both types of coin.", "diagram": null },
        { "stepNumber": 7, "description": "Group the like terms.", "workingLatex": "(20x + 50x) + 150", "explanation": "Collect the $x$ terms together.", "diagram": null },
        { "stepNumber": 8, "description": "Add the $x$ terms.", "workingLatex": "20x + 50x = 70x", "explanation": "Twenty $x$ plus fifty $x$ is seventy $x$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the simplified total.", "workingLatex": "70x + 150", "explanation": "So the total value is $70x+150$ pence.", "diagram": null },
        { "stepNumber": 10, "description": "Optionally factorise.", "workingLatex": "10(7x + 15)", "explanation": "Both terms share a factor of $10$, giving a neat alternative form.", "diagram": null },
        { "stepNumber": 11, "description": "Test with a value.", "workingLatex": "x = 2 \\Rightarrow 70(2) + 150 = 290", "explanation": "With $2$ twenty-pence and $5$ fifty-pence coins: $40+250 = 290$p, which matches.", "diagram": null },
        { "stepNumber": 12, "description": "State the expression.", "workingLatex": "70x + 150", "explanation": "So the total value is $(70x+150)$ pence.", "diagram": null }
      ],
      "finalAnswer": "$(70x + 150)$ pence"
    }
  },
  {
    "id": "gcse.algebra.notation.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "geometry", "powers"],
    "questionText": "A cuboid has a square base of side $x$ cm and a height of $x$ cm more than the base side. Write an expression for its volume, simplified using index notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the base.", "workingLatex": "x \\times x", "explanation": "The base is a square of side $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the base area.", "workingLatex": "x \\times x = x^{2}", "explanation": "A square base of side $x$ has area $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the height.", "workingLatex": "x + x = 2x", "explanation": "The height is $x$ cm more than the base side, so it is $x+x = 2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the volume formula.", "workingLatex": "V = \\text{base area} \\times \\text{height}", "explanation": "Volume of a cuboid is the base area times the height.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the parts.", "workingLatex": "V = x^{2} \\times 2x", "explanation": "Multiply the base area $x^2$ by the height $2x$.", "diagram": null },
        { "stepNumber": 6, "description": "Separate numbers and letters.", "workingLatex": "2 \\times (x^{2} \\times x)", "explanation": "Group the coefficient and the powers of $x$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the indices.", "workingLatex": "x^{2} \\times x = x^{3}", "explanation": "Multiplying powers of the same letter adds the indices: $2+1 = 3$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine with the coefficient.", "workingLatex": "2 \\times x^{3} = 2x^{3}", "explanation": "Put the $2$ in front of the $x^3$.", "diagram": null },
        { "stepNumber": 9, "description": "Warn about a common slip.", "workingLatex": "2x^{3} \\neq (2x)^{3}", "explanation": "Only $x$ is cubed and then doubled, not the whole $2x$.", "diagram": null },
        { "stepNumber": 10, "description": "Test with a value.", "workingLatex": "x = 3 \\Rightarrow 9 \\times 6 = 54 = 2(27)", "explanation": "For $x=3$: base $9$, height $6$, volume $54$, matching $2x^3 = 54$.", "diagram": null },
        { "stepNumber": 11, "description": "State the expression.", "workingLatex": "2x^{3}", "explanation": "So the volume is $2x^3$ cm³.", "diagram": null }
      ],
      "finalAnswer": "$2x^{3}\\text{ cm}^3$"
    }
  },
  {
    "id": "gcse.algebra.notation.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "average"],
    "questionText": "Three people have masses of $x$ kg, $(x+4)$ kg and $(2x-1)$ kg. Write an expression for their mean mass, simplified.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the three masses.", "workingLatex": "x, \\; x+4, \\; 2x-1", "explanation": "These are the masses of the three people.", "diagram": null },
        { "stepNumber": 2, "description": "Recall how to find a mean.", "workingLatex": "\\text{mean} = \\frac{\\text{total}}{\\text{how many}}", "explanation": "The mean is the total divided by the number of values.", "diagram": null },
        { "stepNumber": 3, "description": "Write the total.", "workingLatex": "x + (x + 4) + (2x - 1)", "explanation": "Add all three masses for the total.", "diagram": null },
        { "stepNumber": 4, "description": "Remove the brackets.", "workingLatex": "x + x + 4 + 2x - 1", "explanation": "Since we are adding, the brackets can be dropped.", "diagram": null },
        { "stepNumber": 5, "description": "Group like terms.", "workingLatex": "(x + x + 2x) + (4 - 1)", "explanation": "Collect the $x$ terms and the numbers separately.", "diagram": null },
        { "stepNumber": 6, "description": "Add the $x$ terms.", "workingLatex": "x + x + 2x = 4x", "explanation": "One plus one plus two lots of $x$ is $4x$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the constants.", "workingLatex": "4 - 1 = 3", "explanation": "The numbers combine to $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the total.", "workingLatex": "4x + 3", "explanation": "So the total mass is $4x+3$.", "diagram": null },
        { "stepNumber": 9, "description": "Divide by the number of people.", "workingLatex": "\\frac{4x + 3}{3}", "explanation": "There are $3$ people, so divide the total by $3$.", "diagram": null },
        { "stepNumber": 10, "description": "Keep the numerator together.", "workingLatex": "\\frac{4x+3}{3}", "explanation": "The fraction bar groups $4x+3$, so all of it is divided.", "diagram": null },
        { "stepNumber": 11, "description": "Test with a value.", "workingLatex": "x = 5 \\Rightarrow \\frac{23}{3}", "explanation": "For $x=5$: masses $5,9,9$ total $23$, mean $\\tfrac{23}{3}$, matching the expression.", "diagram": null },
        { "stepNumber": 12, "description": "State the expression.", "workingLatex": "\\frac{4x + 3}{3}", "explanation": "So the mean mass is $\\dfrac{4x+3}{3}$ kg.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{4x + 3}{3}\\text{ kg}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "brackets"],
    "questionText": "A rectangle has length $(x+5)$ cm and width $x$ cm. Write an expression for its area, and an expression for its perimeter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the dimensions.", "workingLatex": "l = x + 5, \\; w = x", "explanation": "The length is $x+5$ and the width is $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the area formula.", "workingLatex": "A = l \\times w", "explanation": "Area of a rectangle is length times width.", "diagram": null },
        { "stepNumber": 3, "description": "Write the area with a bracket.", "workingLatex": "A = (x + 5) \\times x", "explanation": "Keep $x+5$ in a bracket because all of it is multiplied by $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Present the area.", "workingLatex": "A = x(x + 5)", "explanation": "It is conventional to write the single factor in front of the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Recall the perimeter formula.", "workingLatex": "P = 2l + 2w", "explanation": "Perimeter is twice the length plus twice the width.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the dimensions.", "workingLatex": "P = 2(x + 5) + 2x", "explanation": "Replace $l$ and $w$ with their expressions.", "diagram": null },
        { "stepNumber": 7, "description": "Expand the bracket.", "workingLatex": "2(x + 5) = 2x + 10", "explanation": "Multiply each term inside by $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the perimeter.", "workingLatex": "P = 2x + 10 + 2x", "explanation": "Add the expanded part to the remaining $2x$.", "diagram": null },
        { "stepNumber": 9, "description": "Collect like terms.", "workingLatex": "P = 4x + 10", "explanation": "Two $x$ plus two $x$ is $4x$, giving $4x+10$.", "diagram": null },
        { "stepNumber": 10, "description": "Note area is left factorised.", "workingLatex": "A = x(x+5)", "explanation": "The area is fine as $x(x+5)$; it need not be expanded unless asked.", "diagram": null },
        { "stepNumber": 11, "description": "Test with a value.", "workingLatex": "x = 3 \\Rightarrow A = 24, \\; P = 22", "explanation": "For $x=3$: area $3\\times8=24$ and perimeter $4(3)+10=22$.", "diagram": null },
        { "stepNumber": 12, "description": "State the expressions.", "workingLatex": "A = x(x+5), \\; P = 4x + 10", "explanation": "So the area is $x(x+5)$ cm² and the perimeter is $4x+10$ cm.", "diagram": null }
      ],
      "finalAnswer": "Area $x(x+5)$; perimeter $4x+10$"
    }
  },
  {
    "id": "gcse.algebra.notation.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "time"],
    "questionText": "A film lasts $h$ hours and $m$ minutes. Write an expression for the total length of the film in minutes, and then an expression for the length in seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall minutes in an hour.", "workingLatex": "1 \\text{ hour} = 60 \\text{ min}", "explanation": "Each hour is $60$ minutes.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the hours.", "workingLatex": "h \\times 60 = 60h", "explanation": "The $h$ hours are worth $60h$ minutes.", "diagram": null },
        { "stepNumber": 3, "description": "Add the extra minutes.", "workingLatex": "60h + m", "explanation": "Add on the remaining $m$ minutes.", "diagram": null },
        { "stepNumber": 4, "description": "State the length in minutes.", "workingLatex": "60h + m", "explanation": "So the film is $60h+m$ minutes long.", "diagram": null },
        { "stepNumber": 5, "description": "Recall seconds in a minute.", "workingLatex": "1 \\text{ min} = 60 \\text{ s}", "explanation": "Each minute is $60$ seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Note the whole length is converted.", "workingLatex": "(60h + m) \\times 60", "explanation": "All the minutes must be multiplied by $60$, so keep them in a bracket.", "diagram": null },
        { "stepNumber": 7, "description": "Expand the bracket.", "workingLatex": "60 \\times 60h + 60 \\times m", "explanation": "Multiply each term inside by $60$.", "diagram": null },
        { "stepNumber": 8, "description": "Work out the first product.", "workingLatex": "60 \\times 60h = 3600h", "explanation": "There are $3600$ seconds in an hour.", "diagram": null },
        { "stepNumber": 9, "description": "Work out the second product.", "workingLatex": "60 \\times m = 60m", "explanation": "The $m$ minutes convert to $60m$ seconds.", "diagram": null },
        { "stepNumber": 10, "description": "Write the length in seconds.", "workingLatex": "3600h + 60m", "explanation": "Add the two parts for the total in seconds.", "diagram": null },
        { "stepNumber": 11, "description": "Test with values.", "workingLatex": "h=1,m=30 \\Rightarrow 90 \\text{ min}, 5400 \\text{ s}", "explanation": "One hour thirty is $90$ minutes, and $3600+1800 = 5400$ seconds.", "diagram": null },
        { "stepNumber": 12, "description": "State the expressions.", "workingLatex": "60h + m, \\; 3600h + 60m", "explanation": "So the length is $60h+m$ minutes, or $3600h+60m$ seconds.", "diagram": null }
      ],
      "finalAnswer": "$60h + m$ minutes; $3600h + 60m$ seconds"
    }
  },
  {
    "id": "gcse.algebra.notation.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["algebraic notation", "interpretation", "reasoning", "compare"],
    "questionText": "Explain why $(2x)^{2}$ and $2x^{2}$ are not the same, giving the simplified form of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the first expression.", "workingLatex": "(2x)^{2}", "explanation": "The bracket means the whole of $2x$ is squared.", "diagram": null },
        { "stepNumber": 2, "description": "Square each factor.", "workingLatex": "(2x)^{2} = 2x \\times 2x", "explanation": "Squaring $2x$ means multiplying $2x$ by itself.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "2 \\times 2 = 4", "explanation": "The two $2$'s multiply to $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the letters.", "workingLatex": "x \\times x = x^{2}", "explanation": "The two $x$'s multiply to $x^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Combine for the first result.", "workingLatex": "(2x)^{2} = 4x^{2}", "explanation": "So squaring $2x$ gives $4x^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Read the second expression.", "workingLatex": "2x^{2}", "explanation": "Here only the $x$ is squared, then multiplied by $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the power to $x$ only.", "workingLatex": "2 \\times x^{2}", "explanation": "The index attaches to $x$ alone, not to the $2$.", "diagram": null },
        { "stepNumber": 8, "description": "State the second result.", "workingLatex": "2x^{2}", "explanation": "So $2x^2$ stays as $2x^2$; only the $x$ is squared.", "diagram": null },
        { "stepNumber": 9, "description": "Compare the coefficients.", "workingLatex": "4x^{2} \\text{ vs } 2x^{2}", "explanation": "One has coefficient $4$ and the other $2$, so they differ.", "diagram": null },
        { "stepNumber": 10, "description": "Test with a value.", "workingLatex": "x = 3: \\; 36 \\text{ vs } 18", "explanation": "For $x=3$, $(2x)^2 = 36$ but $2x^2 = 18$, confirming they are different.", "diagram": null },
        { "stepNumber": 11, "description": "State the conclusion.", "workingLatex": "(2x)^{2} = 4x^{2} \\neq 2x^{2}", "explanation": "The bracket squares the $2$ as well, which is why the results differ.", "diagram": null }
      ],
      "finalAnswer": "$(2x)^{2} = 4x^{2}$, but $2x^{2}$ squares only $x$ — they differ"
    }
  },
  {
    "id": "gcse.algebra.notation.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "money"],
    "questionText": "A gym charges a joining fee of $\\pounds 25$ and then $\\pounds f$ per month. Write an expression for the total cost of membership for $1$ year, and simplify an expression for the total cost over $n$ years (assuming the joining fee is paid only once).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the one-off fee.", "workingLatex": "25", "explanation": "The joining fee of $\\pounds25$ is paid a single time.", "diagram": null },
        { "stepNumber": 2, "description": "Monthly cost for a year.", "workingLatex": "12 \\times f = 12f", "explanation": "A year has $12$ months, each costing $\\pounds f$.", "diagram": null },
        { "stepNumber": 3, "description": "Total for one year.", "workingLatex": "12f + 25", "explanation": "Add the year of monthly fees to the joining fee.", "diagram": null },
        { "stepNumber": 4, "description": "State the one-year cost.", "workingLatex": "12f + 25", "explanation": "So one year costs $\\pounds(12f+25)$.", "diagram": null },
        { "stepNumber": 5, "description": "Count months in $n$ years.", "workingLatex": "12 \\times n = 12n", "explanation": "Over $n$ years there are $12n$ months.", "diagram": null },
        { "stepNumber": 6, "description": "Monthly cost over $n$ years.", "workingLatex": "12n \\times f = 12nf", "explanation": "Each of the $12n$ months costs $\\pounds f$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the single joining fee.", "workingLatex": "12nf + 25", "explanation": "The joining fee is still added only once.", "diagram": null },
        { "stepNumber": 8, "description": "Check the terms are unlike.", "workingLatex": "12nf + 25", "explanation": "One term has letters and one is a constant, so they cannot combine.", "diagram": null },
        { "stepNumber": 9, "description": "Warn about a common error.", "workingLatex": "12nf + 25 \\neq n(12f + 25)", "explanation": "Multiplying the joining fee by $n$ would wrongly charge it every year.", "diagram": null },
        { "stepNumber": 10, "description": "Test with values.", "workingLatex": "f=20,n=2 \\Rightarrow 12(2)(20) + 25 = 505", "explanation": "Two years at $\\pounds20$/month plus one $\\pounds25$ fee is $\\pounds505$.", "diagram": null },
        { "stepNumber": 11, "description": "State the expressions.", "workingLatex": "12f + 25, \\; 12nf + 25", "explanation": "So one year costs $\\pounds(12f+25)$ and $n$ years cost $\\pounds(12nf+25)$.", "diagram": null }
      ],
      "finalAnswer": "One year: $\\pounds(12f + 25)$; $n$ years: $\\pounds(12nf + 25)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "fractions"],
    "questionText": "A number $n$ is increased by $50\\%$. Write a simplified expression for the result using algebraic notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the number.", "workingLatex": "n", "explanation": "The original number is $n$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 50% of the number.", "workingLatex": "50\\% = \\frac{1}{2}", "explanation": "Fifty percent is a half.", "diagram": null },
        { "stepNumber": 3, "description": "Find 50% of $n$.", "workingLatex": "\\frac{1}{2} \\times n = \\frac{n}{2}", "explanation": "Half of the number is $\\dfrac{n}{2}$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret 'increased by'.", "workingLatex": "n + \\frac{n}{2}", "explanation": "Increasing means we add the extra half onto the original.", "diagram": null },
        { "stepNumber": 5, "description": "Write $n$ as a fraction.", "workingLatex": "n = \\frac{2n}{2}", "explanation": "Rewriting $n$ over $2$ lets us add the fractions.", "diagram": null },
        { "stepNumber": 6, "description": "Add the fractions.", "workingLatex": "\\frac{2n}{2} + \\frac{n}{2} = \\frac{3n}{2}", "explanation": "Two halves plus one half of $n$ make three halves of $n$.", "diagram": null },
        { "stepNumber": 7, "description": "Give the multiplier form.", "workingLatex": "\\frac{3n}{2} = 1.5n", "explanation": "Increasing by $50\\%$ is the same as multiplying by $1.5$.", "diagram": null },
        { "stepNumber": 8, "description": "Test with a value.", "workingLatex": "n = 8 \\Rightarrow 1.5 \\times 8 = 12", "explanation": "Increasing $8$ by $50\\%$ gives $12$, matching the expression.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm the two forms agree.", "workingLatex": "\\frac{3(8)}{2} = 12", "explanation": "The fraction form gives $12$ too, so both are correct.", "diagram": null },
        { "stepNumber": 10, "description": "State the expression.", "workingLatex": "\\frac{3n}{2}", "explanation": "So the result is $\\dfrac{3n}{2}$, or equivalently $1.5n$.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{3n}{2}$ (i.e. $1.5n$)"
    }
  },
  {
    "id": "gcse.algebra.notation.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "two variables"],
    "questionText": "A shop sells small boxes holding $s$ chocolates and large boxes holding $l$ chocolates. A customer buys $5$ small boxes and $2$ large boxes but eats $3$ chocolates on the way home. Write a simplified expression for the number of chocolates remaining.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Chocolates in the small boxes.", "workingLatex": "5 \\times s = 5s", "explanation": "Five small boxes hold $5s$ chocolates.", "diagram": null },
        { "stepNumber": 2, "description": "Chocolates in the large boxes.", "workingLatex": "2 \\times l = 2l", "explanation": "Two large boxes hold $2l$ chocolates.", "diagram": null },
        { "stepNumber": 3, "description": "Total bought.", "workingLatex": "5s + 2l", "explanation": "Add the two amounts for the total bought.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret eating 3.", "workingLatex": "-3", "explanation": "Eating chocolates reduces the number, so we subtract.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract from the total.", "workingLatex": "5s + 2l - 3", "explanation": "Take away the $3$ eaten.", "diagram": null },
        { "stepNumber": 6, "description": "Check for like terms.", "workingLatex": "5s, \\; 2l, \\; -3", "explanation": "All three terms are different (two letters and a constant), so none combine.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm it is fully simplified.", "workingLatex": "5s + 2l - 3", "explanation": "There is nothing left to collect, so this is the simplest form.", "diagram": null },
        { "stepNumber": 8, "description": "Warn about the constant.", "workingLatex": "5s + 2l - 3 \\neq 4s + 2l", "explanation": "The $-3$ cannot be subtracted from $5s$ because they are unlike.", "diagram": null },
        { "stepNumber": 9, "description": "Test with values.", "workingLatex": "s=6,l=12 \\Rightarrow 30 + 24 - 3 = 51", "explanation": "Five sixes and two twelves is $54$, less $3$ is $51$.", "diagram": null },
        { "stepNumber": 10, "description": "State the expression.", "workingLatex": "5s + 2l - 3", "explanation": "So the number remaining is $5s+2l-3$.", "diagram": null }
      ],
      "finalAnswer": "$5s + 2l - 3$"
    }
  },
  {
    "id": "gcse.algebra.notation.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "brackets", "powers"],
    "questionText": "The side of a square is increased by $2$ cm. If the original side is $x$ cm, write an expression for the new area, and an expression for the increase in area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the original side.", "workingLatex": "x", "explanation": "The original square has side $x$ cm.", "diagram": null },
        { "stepNumber": 2, "description": "Original area.", "workingLatex": "x^{2}", "explanation": "A square of side $x$ has area $x^2$.", "diagram": null },
        { "stepNumber": 3, "description": "New side length.", "workingLatex": "x + 2", "explanation": "Increasing the side by $2$ gives $x+2$.", "diagram": null },
        { "stepNumber": 4, "description": "New area with a bracket.", "workingLatex": "(x + 2)^{2}", "explanation": "The whole new side is squared, so use a bracket.", "diagram": null },
        { "stepNumber": 5, "description": "State the new area.", "workingLatex": "(x + 2)^{2}", "explanation": "So the new area is $(x+2)^2$ cm².", "diagram": null },
        { "stepNumber": 6, "description": "Recall the increase.", "workingLatex": "\\text{increase} = \\text{new} - \\text{old}", "explanation": "The increase in area is the new area minus the original.", "diagram": null },
        { "stepNumber": 7, "description": "Write the difference.", "workingLatex": "(x + 2)^{2} - x^{2}", "explanation": "Subtract the original area from the new area.", "diagram": null },
        { "stepNumber": 8, "description": "Keep it as a clear expression.", "workingLatex": "(x + 2)^{2} - x^{2}", "explanation": "This is a valid expression for the increase; it can be left in this form.", "diagram": null },
        { "stepNumber": 9, "description": "Test the new area.", "workingLatex": "x = 3 \\Rightarrow (5)^{2} = 25", "explanation": "For $x=3$, the new side is $5$ and the new area is $25$.", "diagram": null },
        { "stepNumber": 10, "description": "Test the increase.", "workingLatex": "25 - 9 = 16", "explanation": "The original area was $9$, so the increase is $16$, which the expression gives.", "diagram": null },
        { "stepNumber": 11, "description": "State the expressions.", "workingLatex": "(x+2)^{2}, \\; (x+2)^{2} - x^{2}", "explanation": "So the new area is $(x+2)^2$ and the increase is $(x+2)^2 - x^2$.", "diagram": null }
      ],
      "finalAnswer": "New area $(x+2)^{2}$; increase $(x+2)^{2} - x^{2}$"
    }
  },
  {
    "id": "gcse.algebra.notation.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "consecutive even"],
    "questionText": "The smallest of three consecutive even numbers is $2n$. Write expressions for all three, and a simplified expression for their sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the smallest.", "workingLatex": "2n", "explanation": "The smallest even number is given as $2n$, which is always even.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the gap between even numbers.", "workingLatex": "+2", "explanation": "Consecutive even numbers go up in steps of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the second number.", "workingLatex": "2n + 2", "explanation": "Adding $2$ to the smallest gives the next even number.", "diagram": null },
        { "stepNumber": 4, "description": "Write the third number.", "workingLatex": "2n + 4", "explanation": "Adding another $2$ gives the third even number.", "diagram": null },
        { "stepNumber": 5, "description": "List the three.", "workingLatex": "2n, \\; 2n+2, \\; 2n+4", "explanation": "These are the three consecutive even numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Write the sum.", "workingLatex": "2n + (2n + 2) + (2n + 4)", "explanation": "Add all three to find the sum.", "diagram": null },
        { "stepNumber": 7, "description": "Remove brackets.", "workingLatex": "2n + 2n + 2 + 2n + 4", "explanation": "Only addition is involved, so brackets drop away.", "diagram": null },
        { "stepNumber": 8, "description": "Group like terms.", "workingLatex": "(2n + 2n + 2n) + (2 + 4)", "explanation": "Collect the $n$ terms and the numbers.", "diagram": null },
        { "stepNumber": 9, "description": "Add the $n$ terms.", "workingLatex": "2n + 2n + 2n = 6n", "explanation": "Three lots of $2n$ make $6n$.", "diagram": null },
        { "stepNumber": 10, "description": "Add the constants.", "workingLatex": "2 + 4 = 6", "explanation": "The numbers add to $6$.", "diagram": null },
        { "stepNumber": 11, "description": "Combine.", "workingLatex": "6n + 6", "explanation": "The sum is $6n+6$.", "diagram": null },
        { "stepNumber": 12, "description": "Factorise for insight.", "workingLatex": "6(n + 1)", "explanation": "Taking out $6$ shows the sum is always a multiple of $6$.", "diagram": null },
        { "stepNumber": 13, "description": "Test with a value.", "workingLatex": "n = 3 \\Rightarrow 6+8+10 = 24 = 6(4)", "explanation": "For $n=3$ the numbers are $6,8,10$ summing to $24 = 6(n+1)$.", "diagram": null },
        { "stepNumber": 14, "description": "State the results.", "workingLatex": "2n, 2n+2, 2n+4; \\; \\text{sum } 6n+6", "explanation": "So the three numbers are $2n$, $2n+2$, $2n+4$ and their sum is $6n+6$.", "diagram": null }
      ],
      "finalAnswer": "$2n,\\ 2n+2,\\ 2n+4$; sum $6n+6 = 6(n+1)$"
    }
  },
  {
    "id": "gcse.algebra.notation.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "rate"],
    "questionText": "A printer prints $p$ pages per minute. Write an expression for how many pages it prints in $t$ minutes, and an expression for how long, in minutes, it takes to print $500$ pages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the rate.", "workingLatex": "p \\text{ pages per minute}", "explanation": "The printer produces $p$ pages each minute.", "diagram": null },
        { "stepNumber": 2, "description": "Pages in $t$ minutes.", "workingLatex": "p \\times t = pt", "explanation": "Multiplying the rate by the time gives the number of pages.", "diagram": null },
        { "stepNumber": 3, "description": "State the first expression.", "workingLatex": "pt", "explanation": "So in $t$ minutes it prints $pt$ pages.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the link for time.", "workingLatex": "\\text{time} = \\frac{\\text{pages}}{\\text{rate}}", "explanation": "Time is the number of pages divided by the printing rate.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the values.", "workingLatex": "\\frac{500}{p}", "explanation": "For $500$ pages at $p$ per minute, divide $500$ by $p$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep the order correct.", "workingLatex": "\\frac{500}{p} \\neq \\frac{p}{500}", "explanation": "The pages go on top because we are sharing them out at rate $p$.", "diagram": null },
        { "stepNumber": 7, "description": "Check the units make sense.", "workingLatex": "\\frac{\\text{pages}}{\\text{pages/min}} = \\text{min}", "explanation": "Dividing pages by pages-per-minute leaves minutes, as required.", "diagram": null },
        { "stepNumber": 8, "description": "Test the first with values.", "workingLatex": "p=20,t=3 \\Rightarrow 60 \\text{ pages}", "explanation": "At $20$ pages/min for $3$ min gives $60$ pages, matching $pt$.", "diagram": null },
        { "stepNumber": 9, "description": "Test the second with a value.", "workingLatex": "p = 20 \\Rightarrow \\frac{500}{20} = 25", "explanation": "At $20$ pages/min, $500$ pages take $25$ minutes.", "diagram": null },
        { "stepNumber": 10, "description": "State the expressions.", "workingLatex": "pt, \\; \\frac{500}{p}", "explanation": "So it prints $pt$ pages in $t$ minutes and takes $\\dfrac{500}{p}$ minutes for $500$ pages.", "diagram": null }
      ],
      "finalAnswer": "$pt$ pages; time $\\dfrac{500}{p}$ minutes"
    }
  },
  {
    "id": "gcse.algebra.notation.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Algebraic notation",
    "subtopicId": "gcse.algebra.notation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["algebraic notation", "modelling", "context", "brackets", "simplify"],
    "questionText": "A triangle has a base of $(x + 1)$ cm and a perpendicular height of $6$ cm. Write an expression for its area, and simplify it fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the area formula.", "workingLatex": "A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}", "explanation": "The area of a triangle is half the base times the perpendicular height.", "diagram": null },
        { "stepNumber": 2, "description": "State the base and height.", "workingLatex": "\\text{base} = x + 1, \\; \\text{height} = 6", "explanation": "The base is $x+1$ cm and the height is $6$ cm.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the formula.", "workingLatex": "A = \\frac{1}{2} \\times (x + 1) \\times 6", "explanation": "Put the base and height into the area formula.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numbers first.", "workingLatex": "\\frac{1}{2} \\times 6 = 3", "explanation": "Half of $6$ is $3$, which simplifies the numerical part.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the area.", "workingLatex": "A = 3 \\times (x + 1)", "explanation": "Now multiply the bracket by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write with the factor in front.", "workingLatex": "A = 3(x + 1)", "explanation": "It is conventional to place the $3$ in front of the bracket.", "diagram": null },
        { "stepNumber": 7, "description": "Expand the bracket.", "workingLatex": "3(x + 1) = 3x + 3", "explanation": "Multiply each term inside the bracket by $3$.", "diagram": null },
        { "stepNumber": 8, "description": "State the expanded form.", "workingLatex": "A = 3x + 3", "explanation": "So the area is $3x+3$ cm² in expanded form.", "diagram": null },
        { "stepNumber": 9, "description": "Note both forms are valid.", "workingLatex": "3(x+1) = 3x + 3", "explanation": "The factorised and expanded forms are equal, so either is acceptable.", "diagram": null },
        { "stepNumber": 10, "description": "Test with a value.", "workingLatex": "x = 5 \\Rightarrow \\frac{1}{2}(6)(6) = 18", "explanation": "For $x=5$: base $6$, area $\\tfrac12\\times6\\times6 = 18$, and $3(5)+3 = 18$.", "diagram": null },
        { "stepNumber": 11, "description": "State the expression.", "workingLatex": "A = 3(x+1) = 3x + 3", "explanation": "So the area is $3(x+1)$ cm², which simplifies to $3x+3$ cm².", "diagram": null }
      ],
      "finalAnswer": "$3(x+1) = 3x + 3$ (cm²)"
    }
  }
];
