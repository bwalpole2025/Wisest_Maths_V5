import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.argument-notation.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "necessary and sufficient"
    ],
    "questionText": "Consider the two statements $P:\\ x = 3$ and $Q:\\ x^2 = 9$, where $x$ is real. State, with full justification, which one of the symbols $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ correctly connects $P$ and $Q$. Hence say whether $P$ is a sufficient condition, a necessary condition, both or neither, for $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two statements to be compared.",
          "workingLatex": "P:\\ x = 3, \\qquad Q:\\ x^2 = 9",
          "explanation": "Naming the statements $P$ and $Q$ lets us discuss direction without rewriting them each time. The whole task is about which statement forces the other, so we keep both clearly in view.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what each connecting symbol claims.",
          "workingLatex": "P \\Rightarrow Q\\ (P \\text{ forces } Q),\\quad P \\Leftarrow Q\\ (Q \\text{ forces } P),\\quad P \\Leftrightarrow Q\\ (\\text{both})",
          "explanation": "Choosing a symbol is really choosing a direction of implication. Because $\\Leftrightarrow$ needs both one-way arrows to hold, we must test each direction separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P implies Q.",
          "workingLatex": "x = 3 \\Rightarrow x^2 = 3^2 = 9",
          "explanation": "We assume $P$ and substitute into $x^2$. Squaring $3$ gives exactly $9$, so whenever $x=3$ the statement $Q$ is guaranteed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the forward implication is true.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true}",
          "explanation": "The substitution left no room for doubt, since the value $x=3$ produces $x^2=9$ every time. So $P$ on its own is enough to secure $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction Q implies P.",
          "workingLatex": "x^2 = 9 \\Rightarrow x = 3 \\text{ or } x = -3",
          "explanation": "Now we assume $Q$ and ask whether $x$ must equal $3$. Solving $x^2=9$ gives two roots, so knowing the square is $9$ does not pin down the sign of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Produce a counterexample to the reverse direction.",
          "workingLatex": "x = -3:\\ (-3)^2 = 9 \\text{ but } x \\neq 3",
          "explanation": "The value $x=-3$ satisfies $Q$ yet fails $P$, and one counterexample is enough to break an implication. This shows $Q$ does not force $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the correct connecting symbol.",
          "workingLatex": "P \\Rightarrow Q \\ (\\text{but } Q \\not\\Rightarrow P)",
          "explanation": "Only the forward arrow survives testing, so the one-way symbol from $P$ to $Q$ is correct. The failure of the reverse direction rules out $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Translate into necessary and sufficient language.",
          "workingLatex": "P \\text{ is sufficient for } Q, \\text{ but not necessary}",
          "explanation": "Because $P$ guarantees $Q$, $P$ is sufficient, meaning enough. Because $Q$ can hold via $x=-3$ without $P$, $P$ is not necessary, meaning not required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3 \\Rightarrow x^2 = 9$ only. So $x = 3$ is a sufficient but not a necessary condition for $x^2 = 9$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "counterexample"
    ],
    "questionText": "Consider the statement: \"If a number is a multiple of $4$, then it is even.\" Write down the converse of this statement, and determine whether the converse is true. Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the hypothesis and conclusion of the original statement.",
          "workingLatex": "P:\\ n \\text{ is a multiple of } 4, \\qquad Q:\\ n \\text{ is even}",
          "explanation": "An 'if $P$ then $Q$' statement has a hypothesis $P$ and a conclusion $Q$. Separating them cleanly is what makes forming the converse mechanical rather than guesswork.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall how a converse is formed.",
          "workingLatex": "\\text{original } P \\Rightarrow Q \\ \\longrightarrow\\ \\text{converse } Q \\Rightarrow P",
          "explanation": "The converse simply swaps the roles of hypothesis and conclusion. It is a genuinely different claim, so its truth must be judged on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse in words.",
          "workingLatex": "\\text{Converse: if } n \\text{ is even, then } n \\text{ is a multiple of } 4",
          "explanation": "Swapping $P$ and $Q$ gives the new statement. Putting it back into words makes it easy to test against ordinary numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to test the converse.",
          "workingLatex": "\\text{Seek } n \\text{ that is even but not a multiple of } 4",
          "explanation": "To disprove a general 'if...then' claim we only need one example that meets the hypothesis but breaks the conclusion. So we hunt for an even number that is not a multiple of $4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the value n = 6.",
          "workingLatex": "6 = 2 \\times 3 \\ (\\text{even}), \\quad 6 \\neq 4k \\text{ for any integer } k",
          "explanation": "The number $6$ is even, so it satisfies the converse's hypothesis, yet it is not a multiple of $4$. That makes it a valid counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the converse is false.",
          "workingLatex": "\\text{Converse is false}",
          "explanation": "A single counterexample is enough to bring down a universal statement. Because $6$ obeys the hypothesis but not the conclusion, the converse cannot be true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final result in context.",
          "workingLatex": "Q \\not\\Rightarrow P",
          "explanation": "Being even does not force a number to be a multiple of $4$, since even numbers like $6$ sit between the multiples $4$ and $8$. The original implication only runs one way.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: \"If a number is even, then it is a multiple of $4$.\" This is false; for example $6$ is even but not a multiple of $4$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "inequalities"
    ],
    "questionText": "Let $x$ be a real number. Determine whether the condition $x > 5$ is (a) a sufficient condition, and (b) a necessary condition, for $x > 2$. Justify each answer carefully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the two conditions as P and Q.",
          "workingLatex": "P:\\ x > 5, \\qquad Q:\\ x > 2",
          "explanation": "We label the conditions so we can test the two directions of implication. 'Sufficient' and 'necessary' are just names for those two directions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what sufficient and necessary mean here.",
          "workingLatex": "P \\text{ sufficient for } Q \\Leftrightarrow (P \\Rightarrow Q); \\quad P \\text{ necessary for } Q \\Leftrightarrow (Q \\Rightarrow P)",
          "explanation": "$P$ is sufficient for $Q$ if $P$ alone guarantees $Q$; $P$ is necessary for $Q$ if $Q$ cannot happen without $P$. These are opposite directions, so we check each in turn.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Picture the two conditions as sets on the number line.",
          "workingLatex": "\\{x : x > 5\\} \\subset \\{x : x > 2\\}",
          "explanation": "Every number bigger than $5$ is automatically bigger than $2$, so the set for $P$ sits entirely inside the set for $Q$. This picture predicts both results before any algebra.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test sufficiency: assume P and deduce Q.",
          "workingLatex": "x > 5 > 2 \\Rightarrow x > 2",
          "explanation": "If $x$ exceeds $5$ then it certainly exceeds $2$, since $5$ is already greater than $2$. So $P$ forces $Q$ and the forward implication holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude P is sufficient.",
          "workingLatex": "P \\Rightarrow Q \\text{ true, so } P \\text{ is sufficient}",
          "explanation": "Because assuming $P$ always delivers $Q$, the condition $x>5$ is enough on its own to secure $x>2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test necessity with a counterexample.",
          "workingLatex": "x = 3:\\ 3 > 2 \\ (Q \\text{ holds}) \\text{ but } 3 \\not> 5 \\ (P \\text{ fails})",
          "explanation": "For $P$ to be necessary, $Q$ would have to fail whenever $P$ fails. The value $x=3$ satisfies $Q$ without satisfying $P$, so $Q$ can hold without $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude P is not necessary.",
          "workingLatex": "Q \\not\\Rightarrow P, \\text{ so } P \\text{ is not necessary}",
          "explanation": "Since $x=3$ meets $x>2$ while missing $x>5$, the condition $x>5$ is not required for $x>2$. Numbers between $2$ and $5$ satisfy $Q$ on their own.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the two conclusions.",
          "workingLatex": "P \\text{ sufficient but not necessary for } Q",
          "explanation": "The forward test passed and the reverse test failed, so $x>5$ is sufficient but not necessary for $x>2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x > 5$ is a sufficient condition for $x > 2$ (since $x>5 \\Rightarrow x>2$) but not a necessary one (e.g. $x=3$ gives $x>2$ without $x>5$)."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "set notation"
    ],
    "questionText": "Translate the statement \"for all real numbers $x$, $x^2$ is greater than or equal to $0$\" into symbolic form using quantifier and set notation. Explain what each symbol means, and state whether the statement is true.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the logical shape of the sentence.",
          "workingLatex": "(\\text{for all } x \\text{ of a certain type})\\ (\\text{a property of } x)",
          "explanation": "The sentence makes a claim about every real number, not one specific value. Recognising it as a 'for all' statement tells us a universal quantifier is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the symbol for 'for all'.",
          "workingLatex": "\\forall",
          "explanation": "The universal quantifier $\\forall$ is read 'for all' or 'for every'. It signals that what follows must hold without a single exception.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express 'x is a real number' in set notation.",
          "workingLatex": "x \\in \\mathbb{R}",
          "explanation": "The symbol $\\in$ means 'is an element of', and $\\mathbb{R}$ denotes the set of all real numbers. Together they restrict $x$ to the reals.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the property being asserted.",
          "workingLatex": "x^2 \\ge 0",
          "explanation": "The phrase 'greater than or equal to $0$' is captured by $\\ge 0$. This is the condition claimed to hold for every real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the full symbolic statement.",
          "workingLatex": "\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0",
          "explanation": "Reading left to right, this says 'for all $x$ in the reals, $x$ squared is at least $0$'. The quantifier and domain come first, then the property.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide whether the statement is true.",
          "workingLatex": "x^2 = x \\cdot x \\ge 0 \\text{ for every real } x",
          "explanation": "A real number squared is either a positive times a positive or a negative times a negative, and it is $0$ when $x=0$. In every case the result is non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0 \\text{ is true}",
          "explanation": "Since no real number has a negative square, the universal claim holds with no exceptions, so the statement is true.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0$, read 'for all real $x$, $x^2 \\ge 0$'. The statement is true."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "geometry"
    ],
    "questionText": "A student writes: \"If a shape is a square, then it has four equal sides.\" Write down the converse of this statement, and decide whether the converse is true, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Separate the hypothesis and conclusion.",
          "workingLatex": "P:\\ \\text{the shape is a square}, \\qquad Q:\\ \\text{the shape has four equal sides}",
          "explanation": "The original statement runs from $P$ to $Q$. Isolating each part is the first move in building its converse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the rule for forming a converse.",
          "workingLatex": "P \\Rightarrow Q \\ \\longrightarrow \\ Q \\Rightarrow P",
          "explanation": "The converse swaps hypothesis and conclusion, reversing the arrow. It asks the reverse question and may have a different truth value from the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse in words.",
          "workingLatex": "\\text{If a shape has four equal sides, then it is a square}",
          "explanation": "Interchanging $P$ and $Q$ produces the new statement. Phrasing it plainly makes it easy to challenge with a specific shape.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Plan how to test the converse.",
          "workingLatex": "\\text{Seek a shape with four equal sides that is not a square}",
          "explanation": "One counterexample disproves a general geometric claim. So we look for a four-equal-sided shape whose other properties stop it being a square.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Consider a rhombus.",
          "workingLatex": "\\text{Rhombus: four equal sides, but angles} \\neq 90^\\circ",
          "explanation": "A rhombus has four equal sides, so it satisfies the converse's hypothesis, but its angles are not all right angles. A square additionally requires four right angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm the rhombus breaks the conclusion.",
          "workingLatex": "\\text{Rhombus has four equal sides but is not a square}",
          "explanation": "Because the rhombus meets the hypothesis yet fails to be a square, it is a valid counterexample to the converse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "Q \\Rightarrow P \\text{ is false}",
          "explanation": "Four equal sides alone do not force a shape to be a square, since the angles can differ from $90^\\circ$. The converse is therefore false.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: \"If a shape has four equal sides, then it is a square.\" This is false; a rhombus has four equal sides but is not a square, because its angles need not be $90^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "geometry"
    ],
    "questionText": "Let $P$ be the statement \"$ABCD$ is a square\" and $Q$ the statement \"$ABCD$ is a rectangle\". State, with justification, which of $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ correctly links $P$ and $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the defining properties of each shape.",
          "workingLatex": "\\text{Square: 4 equal sides and 4 right angles};\\quad \\text{Rectangle: 4 right angles}",
          "explanation": "Comparing statements about shapes is easiest when we list what each shape requires. A rectangle needs four right angles; a square needs those plus four equal sides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what the three symbols would claim.",
          "workingLatex": "P \\Rightarrow Q,\\quad P \\Leftarrow Q,\\quad P \\Leftrightarrow Q",
          "explanation": "Each symbol asserts a direction of implication, and the two-way symbol needs both directions. So we test 'square forces rectangle' and 'rectangle forces square' separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P implies Q.",
          "workingLatex": "\\text{square} \\Rightarrow \\text{4 right angles} \\Rightarrow \\text{rectangle}",
          "explanation": "A square has four right angles, which is exactly the requirement for a rectangle. So every square already meets the definition of a rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the forward implication holds.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true}",
          "explanation": "Since a square automatically satisfies everything a rectangle demands, being a square is enough to be a rectangle. A square is simply a special rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction with a counterexample.",
          "workingLatex": "\\text{Rectangle } 2 \\times 3:\\ \\text{4 right angles but sides } 2 \\neq 3",
          "explanation": "For the reverse we ask whether a rectangle must be a square. A $2$ by $3$ rectangle has right angles but unequal sides, so it is a rectangle that is not a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the reverse implication fails.",
          "workingLatex": "Q \\not\\Rightarrow P",
          "explanation": "The $2$ by $3$ rectangle satisfies $Q$ without satisfying $P$, and one counterexample is decisive. So $Q$ does not force $P$, which rules out $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the correct symbol.",
          "workingLatex": "P \\Rightarrow Q",
          "explanation": "Only the forward direction survived testing, so the one-way arrow from square to rectangle is the correct connective.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret in necessary and sufficient language.",
          "workingLatex": "P \\text{ sufficient for } Q, \\text{ not necessary}",
          "explanation": "Being a square is sufficient for being a rectangle but not necessary, since rectangles like the $2$ by $3$ one exist without being squares.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Rightarrow Q$: a square is always a rectangle, but not every rectangle is a square (e.g. a $2 \\times 3$ rectangle). So $\\Rightarrow$ is the correct symbol."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "quadratic equations"
    ],
    "questionText": "It is given that $x = 2 \\Rightarrow x^2 - 5x + 6 = 0$. Determine whether the converse of this implication is true, and hence state whether $x = 2$ and $x^2 - 5x + 6 = 0$ are connected by $\\Rightarrow$ or by $\\Leftrightarrow$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the given forward implication.",
          "workingLatex": "x = 2:\\ 2^2 - 5(2) + 6 = 4 - 10 + 6 = 0",
          "explanation": "Substituting $x=2$ makes the quadratic equal $0$, so the stated forward implication is genuinely true. This gives us a solid starting point before examining the converse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down what the converse claims.",
          "workingLatex": "\\text{Converse: } x^2 - 5x + 6 = 0 \\Rightarrow x = 2",
          "explanation": "The converse reverses the arrow, so it asks whether satisfying the equation forces $x$ to be $2$. This is a different claim and must be checked in its own right.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Decide to solve the equation to test the converse.",
          "workingLatex": "\\text{Find all } x \\text{ with } x^2 - 5x + 6 = 0",
          "explanation": "The converse is true only if $x=2$ is the sole solution. Finding every root of the quadratic will show whether any other value also works.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 5x + 6 = (x - 2)(x - 3)",
          "explanation": "We look for two numbers multiplying to $6$ and adding to $-5$, namely $-2$ and $-3$. Factorising exposes the roots directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the roots.",
          "workingLatex": "(x - 2)(x - 3) = 0 \\Rightarrow x = 2 \\text{ or } x = 3",
          "explanation": "A product is zero only when one factor is zero, so the equation has two solutions. The presence of a second root is exactly what threatens the converse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify a counterexample to the converse.",
          "workingLatex": "x = 3:\\ 3^2 - 5(3) + 6 = 9 - 15 + 6 = 0 \\text{ but } x \\neq 2",
          "explanation": "The value $x=3$ satisfies the equation yet is not equal to $2$, so it meets the converse's hypothesis while breaking its conclusion. This one counterexample settles the matter.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the converse is false.",
          "workingLatex": "x^2 - 5x + 6 = 0 \\not\\Rightarrow x = 2",
          "explanation": "Because $x=3$ also solves the equation, knowing the equation holds does not force $x=2$. The converse therefore fails.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the correct connecting symbol.",
          "workingLatex": "x = 2 \\Rightarrow x^2 - 5x + 6 = 0, \\text{ but not } \\Leftrightarrow",
          "explanation": "Only the forward direction holds, so the statements are linked by $\\Rightarrow$ and not by $\\Leftrightarrow$. Equivalence would need the equation's only root to be $2$, which it is not.",
          "diagram": null
        }
      ],
      "finalAnswer": "The converse is false, since $x=3$ also satisfies $x^2 - 5x + 6 = 0$ but $x \\neq 2$. So the statements are connected by $\\Rightarrow$ only, not by $\\Leftrightarrow$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "implication",
      "geometry"
    ],
    "questionText": "Consider the statement: \"If a triangle is equilateral then it is isosceles.\" Let $P$ be \"the triangle is equilateral\" and $Q$ be \"the triangle is isosceles\". Determine whether $P$ is a sufficient condition for $Q$, a necessary condition for $Q$, both, or neither. Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Pin down the definitions of the two properties.",
          "workingLatex": "P:\\ \\text{all three sides equal}, \\qquad Q:\\ \\text{at least two sides equal}",
          "explanation": "Before comparing the statements we fix exactly what each word means. 'Equilateral' demands all three sides equal, while 'isosceles' only asks for at least two equal sides, so equilateral is the stricter condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what sufficient and necessary mean.",
          "workingLatex": "\\text{sufficient}:\\ P \\Rightarrow Q, \\qquad \\text{necessary}:\\ Q \\Rightarrow P",
          "explanation": "$P$ is sufficient for $Q$ when having $P$ guarantees $Q$, and $P$ is necessary for $Q$ when $Q$ cannot happen without $P$. These are two separate directions, so we test each one on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "\\text{all three sides equal} \\Rightarrow \\text{at least two sides equal}",
          "explanation": "Assume the triangle is equilateral. If all three sides are equal, then in particular two of them are equal, which is precisely what 'isosceles' requires.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the forward direction holds, so P is sufficient.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true} \\;\\Rightarrow\\; P \\text{ is sufficient for } Q",
          "explanation": "Every equilateral triangle is automatically isosceles, so being equilateral is enough on its own to make the triangle isosceles. That is exactly the meaning of a sufficient condition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction Q ⇒ P with a counterexample.",
          "workingLatex": "\\text{sides } 5,\\,5,\\,3:\\ \\text{isosceles but not equilateral}",
          "explanation": "To check necessity we ask whether being isosceles forces the triangle to be equilateral. A triangle with sides 5, 5 and 3 has two equal sides yet not three, so it satisfies $Q$ but not $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the reverse direction fails, so P is not necessary.",
          "workingLatex": "Q \\not\\Rightarrow P \\;\\Rightarrow\\; P \\text{ is not necessary for } Q",
          "explanation": "The counterexample shows a triangle can be isosceles without being equilateral, so $Q$ does not require $P$. Hence being equilateral is not a necessary condition for being isosceles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\text{ is sufficient but not necessary for } Q",
          "explanation": "Only the forward implication holds, so equilateral is enough to guarantee isosceles but is not required for it. In short, $P$ is sufficient but not necessary for $Q$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ is a sufficient but not a necessary condition for $Q$: every equilateral triangle is isosceles ($P \\Rightarrow Q$), but a $5,5,3$ triangle is isosceles without being equilateral."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "set notation",
      "translation"
    ],
    "questionText": "Translate the statement \"there exists an integer $n$ such that $n^2 = 16$\" into symbolic form using the quantifier $\\exists$ together with $\\in$ and $\\mathbb{Z}$. State whether the resulting statement is true or false, justifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Break the sentence into its three logical parts.",
          "workingLatex": "\\text{(i) there exists} \\quad \\text{(ii) an integer } n \\quad \\text{(iii) } n^2 = 16",
          "explanation": "Translating words to symbols is easier once we separate the claim of existence, the type of object, and the property it must satisfy. Each part maps onto one piece of notation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Replace 'there exists' with the existential quantifier.",
          "workingLatex": "\\text{there exists} \\;\\longrightarrow\\; \\exists",
          "explanation": "The phrase 'there exists' is exactly what the symbol $\\exists$ stands for. It claims at least one object of the stated kind can be found.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Express 'n is an integer' using set membership.",
          "workingLatex": "n \\text{ is an integer} \\;\\longrightarrow\\; n \\in \\mathbb{Z}",
          "explanation": "$\\mathbb{Z}$ is the set of all integers, and $\\in$ means 'is a member of'. So $n \\in \\mathbb{Z}$ is the compact way of saying $n$ is an integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Keep the property as an equation.",
          "workingLatex": "n^2 = 16",
          "explanation": "The condition the integer must meet is already algebraic, so it carries straight over unchanged. This is the 'such that' clause of the sentence.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the full symbolic statement.",
          "workingLatex": "\\exists\\, n \\in \\mathbb{Z},\\ n^2 = 16",
          "explanation": "Placing the quantifier first, then the domain, then the property reads as 'there is an integer $n$ for which $n^2 = 16$'. This mirrors the original sentence exactly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the truth of the statement by finding a witness.",
          "workingLatex": "n = 4:\\ 4^2 = 16 \\;\\checkmark",
          "explanation": "An existential statement is true as soon as we can exhibit one object that works. Since $4$ is an integer and $4^2 = 16$, the claim is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude, noting a second witness exists.",
          "workingLatex": "n = -4:\\ (-4)^2 = 16 \\;\\Rightarrow\\; \\text{statement is true}",
          "explanation": "In fact $-4$ also works, but even one witness is enough to make an existential statement true. Hence the statement is true.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\exists\\, n \\in \\mathbb{Z},\\ n^2 = 16$. The statement is true, with witnesses $n = 4$ and $n = -4$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "equivalence",
      "divisibility"
    ],
    "questionText": "A student writes the true statement \"if $n$ is a multiple of $10$ then $n$ ends in the digit $0$\", where $n$ is a positive integer. Write down the converse of this statement, decide whether the converse is true, and hence state which of $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ correctly connects the two parts.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the hypothesis and conclusion of the original statement.",
          "workingLatex": "P:\\ n \\text{ is a multiple of } 10, \\qquad Q:\\ n \\text{ ends in the digit } 0",
          "explanation": "Naming the two halves as $P$ and $Q$ lets us track which is the assumption and which is the consequence. The original claim is then simply $P \\Rightarrow Q$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall how to form a converse.",
          "workingLatex": "\\text{converse of } (P \\Rightarrow Q) \\text{ is } (Q \\Rightarrow P)",
          "explanation": "The converse is obtained by swapping the hypothesis and the conclusion, reversing the direction of the arrow. It is a genuinely different statement whose truth must be checked separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse in words.",
          "workingLatex": "Q \\Rightarrow P:\\ \\text{if } n \\text{ ends in the digit } 0 \\text{ then } n \\text{ is a multiple of } 10",
          "explanation": "Reading $Q \\Rightarrow P$ back into English gives the converse statement directly. This is the claim we now need to test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the converse algebraically.",
          "workingLatex": "n \\text{ ends in } 0 \\;\\Rightarrow\\; n = 10k \\text{ for some integer } k",
          "explanation": "A positive integer whose last digit is $0$ can always be written as ten times another whole number, because the final $0$ carries a factor of $10$. That is exactly the definition of a multiple of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the converse is true.",
          "workingLatex": "Q \\Rightarrow P \\text{ is true}",
          "explanation": "Since every integer ending in $0$ is a multiple of $10$, the converse holds with no exceptions. There is no counterexample to find.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine both directions.",
          "workingLatex": "P \\Rightarrow Q \\text{ and } Q \\Rightarrow P",
          "explanation": "The original statement gives one direction and we have just proved the other. When both implications hold, the two statements say the same thing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the correct connecting symbol.",
          "workingLatex": "P \\Leftrightarrow Q",
          "explanation": "Because each condition forces the other, the correct connective is the two-way arrow $\\Leftrightarrow$. Being a multiple of $10$ and ending in the digit $0$ are equivalent conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: \"if $n$ ends in the digit $0$ then $n$ is a multiple of $10$\", which is true. Both directions hold, so $P \\Leftrightarrow Q$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "equivalence",
      "equations"
    ],
    "questionText": "Insert the correct symbol from $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ between the statements $2x + 1 = 7$ and $x = 3$, and justify your choice.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Clarify what the task requires.",
          "workingLatex": "2x + 1 = 7 \\;\\square\\; x = 3",
          "explanation": "Choosing between $\\Rightarrow$, $\\Leftarrow$ and $\\Leftrightarrow$ is really deciding which statement forces which. So we must test both directions of implication rather than just solving.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test the forward direction by solving the equation.",
          "workingLatex": "2x + 1 = 7 \\;\\Rightarrow\\; 2x = 6 \\;\\Rightarrow\\; x = 3",
          "explanation": "Assume the left statement holds. Subtracting $1$ from both sides and then dividing by $2$ are valid operations, and they lead uniquely to $x = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Record that the forward implication is valid.",
          "workingLatex": "(2x + 1 = 7) \\;\\Rightarrow\\; (x = 3)",
          "explanation": "The equation has $x = 3$ as its only solution, so knowing $2x + 1 = 7$ guarantees $x = 3$. The forward arrow therefore holds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the reverse direction by substitution.",
          "workingLatex": "x = 3 \\;\\Rightarrow\\; 2(3) + 1 = 7 \\;\\checkmark",
          "explanation": "Now assume the right statement. Substituting $x = 3$ back into $2x + 1$ gives $7$, so the left statement is recovered exactly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Record that the reverse implication is valid.",
          "workingLatex": "(x = 3) \\;\\Rightarrow\\; (2x + 1 = 7)",
          "explanation": "Because the value $x = 3$ makes the equation true, the right statement forces the left. So the backward arrow holds as well.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note that every solving step was reversible.",
          "workingLatex": "\\text{add/subtract and multiply/divide by nonzero are reversible}",
          "explanation": "Each operation used to solve a linear equation can be undone, so no information is lost or added along the way. This is why both directions come out true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the correct connecting symbol.",
          "workingLatex": "2x + 1 = 7 \\;\\Leftrightarrow\\; x = 3",
          "explanation": "Since each statement implies the other, the two are equivalent and the correct symbol is $\\Leftrightarrow$. The two equations describe exactly the same set of solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2x + 1 = 7 \\Leftrightarrow x = 3$. Both implications hold because every step of solving the linear equation is reversible."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "counterexample"
    ],
    "questionText": "For real numbers $x$, let $P$ be the statement $x^2 = 4$ and let $Q$ be the statement $x = 2$. Determine whether $P$ is a sufficient condition for $Q$, and whether $P$ is a necessary condition for $Q$. Justify each answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two statements and the domain.",
          "workingLatex": "P:\\ x^2 = 4, \\qquad Q:\\ x = 2, \\qquad x \\in \\mathbb{R}",
          "explanation": "Working over the real numbers matters here, because $x^2 = 4$ has two real solutions. Keeping the domain in view stops us from quietly assuming $x$ is positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of sufficient and necessary.",
          "workingLatex": "P \\text{ sufficient for } Q \\iff P \\Rightarrow Q; \\qquad P \\text{ necessary for } Q \\iff Q \\Rightarrow P",
          "explanation": "$P$ is sufficient when it guarantees $Q$, and $P$ is necessary when $Q$ cannot hold without it. These correspond to the two opposite directions of implication.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test sufficiency: does P ⇒ Q?",
          "workingLatex": "x^2 = 4 \\;\\Rightarrow\\; x = 2 \\text{ or } x = -2",
          "explanation": "Assuming $x^2 = 4$ and taking square roots gives two possibilities, not one. So knowing $x^2 = 4$ does not pin $x$ down to the value $2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Give a counterexample and conclude P is not sufficient.",
          "workingLatex": "x = -2:\\ (-2)^2 = 4 \\text{ but } -2 \\neq 2 \\;\\Rightarrow\\; P \\not\\Rightarrow Q",
          "explanation": "The value $x = -2$ satisfies $P$ yet fails $Q$, which is a direct counterexample to $P \\Rightarrow Q$. Hence $P$ is not sufficient for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test necessity: does Q ⇒ P?",
          "workingLatex": "x = 2 \\;\\Rightarrow\\; x^2 = 2^2 = 4",
          "explanation": "Now assume $Q$, so $x = 2$. Squaring gives $x^2 = 4$, which is exactly $P$, so $Q$ forces $P$ every time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude P is necessary.",
          "workingLatex": "Q \\Rightarrow P \\;\\Rightarrow\\; P \\text{ is necessary for } Q",
          "explanation": "Because $x = 2$ cannot occur without $x^2 = 4$ also holding, the condition $P$ is required whenever $Q$ is true. That is precisely what necessary means.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\text{ is necessary but not sufficient for } Q",
          "explanation": "The implication runs only from $Q$ to $P$, so $P$ is required for $Q$ but does not guarantee it. Thus $P$ is necessary but not sufficient for $Q$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ is necessary but not sufficient for $Q$: $x = 2 \\Rightarrow x^2 = 4$, but $x^2 = 4$ allows $x = -2$, so $x^2 = 4 \\not\\Rightarrow x = 2$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "set notation",
      "set-builder",
      "divisibility",
      "translation"
    ],
    "questionText": "Using set-builder notation and the membership symbol $\\in$, write down the set of all integers $n$ that are divisible by $6$. Explain what each part of your notation means, and give the equivalent divisibility shorthand.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret 'divisible by 6' algebraically.",
          "workingLatex": "n \\text{ divisible by } 6 \\iff n = 6k \\text{ for some integer } k",
          "explanation": "Saying $n$ is divisible by $6$ means $6$ goes into $n$ a whole number of times, so $n$ is $6$ multiplied by some integer. Turning the phrase into $n = 6k$ gives us a condition we can write down precisely.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the general shape of set-builder notation.",
          "workingLatex": "\\{\\, \\text{element} \\in \\text{domain} : \\text{condition} \\,\\}",
          "explanation": "Set-builder notation names a typical element, states which set it is drawn from, and then lists the property it must satisfy after the colon. The colon is read as 'such that'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the domain for n.",
          "workingLatex": "n \\in \\mathbb{Z}",
          "explanation": "Divisibility is a property of integers, so the natural domain is $\\mathbb{Z}$, the set of all integers. Writing $n \\in \\mathbb{Z}$ says $n$ is a member of that set.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the defining condition using a second integer.",
          "workingLatex": "n = 6k \\text{ for some } k \\in \\mathbb{Z}",
          "explanation": "The condition after the colon must capture 'is a multiple of $6$'. Introducing a fresh integer $k$ and requiring $n = 6k$ does exactly that.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Assemble the full set.",
          "workingLatex": "\\{\\, n \\in \\mathbb{Z} : n = 6k \\text{ for some } k \\in \\mathbb{Z} \\,\\}",
          "explanation": "Combining the domain and the condition inside the braces gives the complete description: all integers $n$ that can be written as $6$ times an integer. This is read 'the set of integers $n$ such that $n = 6k$ for some integer $k$'.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Give the divisibility shorthand.",
          "workingLatex": "6 \\mid n",
          "explanation": "The vertical bar in $6 \\mid n$ means '$6$ divides $n$', a compact way of writing the same condition. So the set can also be described as all $n \\in \\mathbb{Z}$ with $6 \\mid n$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the notation on sample values.",
          "workingLatex": "18 = 6 \\times 3 \\;\\Rightarrow\\; 18 \\in S; \\qquad 20 \\neq 6k \\;\\Rightarrow\\; 20 \\notin S",
          "explanation": "Testing a member and a non-member confirms the set behaves as intended: $18$ is $6 \\times 3$ so it belongs, while $20$ is not a multiple of $6$ so it is excluded. This sanity check guards against a mis-stated condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S = \\{\\, n \\in \\mathbb{Z} : n = 6k \\text{ for some } k \\in \\mathbb{Z} \\,\\}$, equivalently $\\{\\, n \\in \\mathbb{Z} : 6 \\mid n \\,\\}$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "counterexample"
    ],
    "questionText": "The statement \"if $x > 0$ then $x^2 > 0$\" is true for all real $x$. Write down the converse of this statement and determine, with justification, whether the converse is true.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the hypothesis and conclusion.",
          "workingLatex": "P:\\ x > 0, \\qquad Q:\\ x^2 > 0",
          "explanation": "Splitting the statement into $P$ and $Q$ makes the structure $P \\Rightarrow Q$ visible. This keeps clear which part is assumed and which is concluded.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall how the converse is formed.",
          "workingLatex": "\\text{converse of } (P \\Rightarrow Q) = (Q \\Rightarrow P)",
          "explanation": "The converse simply swaps the roles of hypothesis and conclusion. It is a new statement, and its truth is independent of the original.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse in symbols and words.",
          "workingLatex": "Q \\Rightarrow P:\\ x^2 > 0 \\;\\Rightarrow\\; x > 0",
          "explanation": "Reversing the arrow gives 'if $x^2 > 0$ then $x > 0$'. This is the claim we now need to examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to test the converse.",
          "workingLatex": "\\text{seek } x \\text{ with } x^2 > 0 \\text{ but } x \\le 0",
          "explanation": "To disprove an implication we look for a case that satisfies the hypothesis yet fails the conclusion. Negative numbers are the obvious place to look, since squaring removes the sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Try a negative value as a counterexample.",
          "workingLatex": "x = -1:\\ (-1)^2 = 1 > 0 \\text{ but } -1 < 0",
          "explanation": "At $x = -1$ the square is $1$, which is positive, so the hypothesis $x^2 > 0$ holds. Yet $x = -1$ is not greater than $0$, so the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the converse is false.",
          "workingLatex": "Q \\not\\Rightarrow P \\;\\Rightarrow\\; \\text{converse is false}",
          "explanation": "A single counterexample is enough to break an implication, and $x = -1$ provides one. So although the original statement is true, its converse is false; assuming otherwise would be the error of affirming the converse.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: \"if $x^2 > 0$ then $x > 0$\". This is false, since $x = -1$ gives $x^2 = 1 > 0$ but $x = -1 < 0$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "geometry"
    ],
    "questionText": "Let $P$ be the statement 'the triangle contains a $90^\\circ$ angle' and let $Q$ be the statement 'the triangle is right-angled'. Determine whether $P$ is a necessary condition, a sufficient condition, both, or neither, for $Q$. Justify your answer and state the symbol ($\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$) that connects $P$ and $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State clearly what each condition claims.",
          "workingLatex": "P:\\ \\text{one interior angle equals } 90^\\circ, \\qquad Q:\\ \\text{the triangle is right-angled}",
          "explanation": "Before comparing two statements we must know exactly what each one asserts. Writing them side by side makes it clear that both are talking about the same feature: the presence of a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of a right-angled triangle.",
          "workingLatex": "\\text{right-angled triangle} \\;=\\; \\text{a triangle with a } 90^\\circ \\text{ angle}",
          "explanation": "The whole question turns on a definition. A triangle is called right-angled precisely because it has a right angle, so the two statements are describing the very same property in different words.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the two directions that must be tested.",
          "workingLatex": "\\text{Test } P \\Rightarrow Q \\quad\\text{and}\\quad Q \\Rightarrow P",
          "explanation": "To choose between a one-way arrow and a two-way arrow we always check each direction separately. Only if both hold can we use the biconditional.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "\\text{angle } = 90^\\circ \\;\\Rightarrow\\; \\text{triangle is right-angled}",
          "explanation": "If a triangle has a $90^\\circ$ angle then by definition it earns the name 'right-angled'. So P alone is enough to guarantee Q.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction Q ⇒ P.",
          "workingLatex": "\\text{right-angled} \\;\\Rightarrow\\; \\text{it has a } 90^\\circ \\text{ angle}",
          "explanation": "If a triangle is right-angled then, again by definition, one of its angles must be $90^\\circ$. So Q also forces P; there is no right-angled triangle without a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine both directions into the correct symbol.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\;\\Longrightarrow\\; P \\Leftrightarrow Q",
          "explanation": "Because each statement implies the other, the connective is the two-way arrow. The statements are logically equivalent, which is expected since they are two phrasings of one definition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Translate into necessary / sufficient language.",
          "workingLatex": "P \\text{ is necessary and sufficient for } Q",
          "explanation": "P guarantees Q, so P is sufficient; Q cannot happen without P, so P is also necessary. When both hold, we say P is a necessary and sufficient condition.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final conclusion.",
          "workingLatex": "P \\Leftrightarrow Q",
          "explanation": "Since P is essentially the definition of Q, the two are equivalent and connected by $\\Leftrightarrow$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$. Having a $90^\\circ$ angle is both necessary and sufficient for a triangle to be right-angled, because the two statements are just the definition restated."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "converse",
      "primes"
    ],
    "questionText": "Consider the statements $P:\\ p$ is prime and $p > 2$, and $Q:\\ p$ is odd. Insert the correct symbol ($\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$) between $P$ and $Q$, and justify your choice fully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the two statements.",
          "workingLatex": "P:\\ p \\text{ is prime and } p > 2, \\qquad Q:\\ p \\text{ is odd}",
          "explanation": "We first make sure both statements are precise. P restricts us to primes strictly greater than $2$, while Q simply says the number is not divisible by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the symbol is a claim about direction.",
          "workingLatex": "\\text{Test } P \\Rightarrow Q \\quad\\text{and}\\quad Q \\Rightarrow P",
          "explanation": "The three symbols differ only in which way the implication runs, so the safe method is to test each direction on its own and then combine the results.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "p \\text{ even and } p > 2 \\;\\Rightarrow\\; 2 \\mid p \\;\\Rightarrow\\; p \\text{ not prime}",
          "explanation": "Suppose a prime bigger than $2$ were even. Then $2$ would divide it, giving it a factor other than $1$ and itself, so it could not be prime. This contradiction shows such a prime must be odd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the forward direction holds.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true}",
          "explanation": "Every prime greater than $2$ is odd, so P guarantees Q. This makes P a sufficient condition for Q.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction with a counterexample.",
          "workingLatex": "p = 9:\\ 9 \\text{ is odd, but } 9 = 3 \\times 3 \\ (\\text{not prime})",
          "explanation": "To check whether being odd forces P, we hunt for an odd number that fails P. The number $9$ is odd yet not prime, so a single example is enough to break the reverse direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the reverse direction fails.",
          "workingLatex": "Q \\not\\Rightarrow P",
          "explanation": "Because $9$ satisfies Q but not P, being odd does not guarantee 'prime and greater than $2$'. This rules out both $\\Leftarrow$ and $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the correct connecting symbol.",
          "workingLatex": "P \\Rightarrow Q",
          "explanation": "Only the forward direction is valid, so the correct symbol is the single right-pointing arrow from P to Q.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Summarise in necessary / sufficient terms.",
          "workingLatex": "P \\text{ sufficient for } Q,\\ \\text{but not necessary}",
          "explanation": "P being prime and above $2$ is enough to force oddness, but oddness can occur without it, so P is sufficient but not necessary for Q.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Rightarrow Q$. Every prime greater than $2$ is odd, but the converse fails ($9$ is odd yet not prime), so only the one-way implication holds."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "set notation",
      "translation"
    ],
    "questionText": "Consider the statement $\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0$. Translate the statement into ordinary English, explaining what each symbol means, and determine whether the statement is true.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decode the quantifier and set symbols.",
          "workingLatex": "\\forall \\;=\\; \\text{'for all'}, \\qquad x \\in \\mathbb{R} \\;=\\; x \\text{ is a real number}",
          "explanation": "Symbolic statements are read left to right like a sentence. The upside-down A means 'for every', and $\\in \\mathbb{R}$ tells us the objects we range over are the real numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decode the inequality that follows.",
          "workingLatex": "x^2 + 1 > 0 \\;=\\; \\text{'} x^2 + 1 \\text{ is positive'}",
          "explanation": "The part after the comma is the property being claimed about each $x$. Here it says the value of $x^2+1$ is strictly greater than zero, i.e. positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assemble the full English translation.",
          "workingLatex": "\\text{'For every real number } x,\\ x^2 + 1 \\text{ is positive.'}",
          "explanation": "Joining the pieces gives a complete sentence. The quantifier becomes the opening 'for every', and the inequality becomes the claim made about each real number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin testing truth by bounding the square term.",
          "workingLatex": "x^2 \\ge 0 \\quad \\text{for all } x \\in \\mathbb{R}",
          "explanation": "A real number squared can never be negative, since multiplying two numbers of the same sign gives a non-negative result. This fact is the key to the whole statement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 1 to the bound.",
          "workingLatex": "x^2 + 1 \\ge 0 + 1 = 1",
          "explanation": "Adding the same positive amount to both sides of an inequality preserves it, so the smallest that $x^2+1$ can ever be is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the lower bound with zero.",
          "workingLatex": "x^2 + 1 \\ge 1 > 0",
          "explanation": "Since the expression is always at least $1$, and $1$ is greater than $0$, the expression is strictly positive for every real $x$. No value of $x$ can make it drop to zero or below.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "\\forall x \\in \\mathbb{R},\\ x^2 + 1 > 0 \\ \\text{is TRUE}",
          "explanation": "Because the property holds without exception across all real numbers, the universally quantified statement is true.",
          "diagram": null
        }
      ],
      "finalAnswer": "In words: 'for every real number $x$, $x^2+1$ is positive.' The statement is TRUE, because $x^2 \\ge 0$ gives $x^2+1 \\ge 1 > 0$ for all real $x$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "equivalence",
      "geometry"
    ],
    "questionText": "A student writes: 'If two lines in a plane are parallel then they never meet.' Write down the converse of this statement, and discuss whether the converse is true, working throughout within a single plane. Hence state which symbol ($\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$) correctly connects the two statements.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the hypothesis and conclusion of the original statement.",
          "workingLatex": "P:\\ \\text{the lines are parallel}, \\qquad Q:\\ \\text{the lines never meet}",
          "explanation": "An 'if... then...' statement has the form $P \\Rightarrow Q$. Naming the two halves separately lets us handle the converse cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall how the converse is formed.",
          "workingLatex": "\\text{converse of } (P \\Rightarrow Q) \\ \\text{is}\\ (Q \\Rightarrow P)",
          "explanation": "The converse simply swaps the hypothesis and conclusion, reversing the direction of the arrow. It is a genuinely different claim, so its truth must be checked on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse in words.",
          "workingLatex": "\\text{'If two lines in a plane never meet, then they are parallel.'}",
          "explanation": "Applying the swap to the original sentence gives the converse. This now claims that non-meeting is enough to conclude the lines are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the original statement is true.",
          "workingLatex": "P \\Rightarrow Q:\\ \\text{parallel lines keep a constant gap, so never meet}",
          "explanation": "Parallel lines stay the same distance apart, so they can never cross. The original implication is therefore sound.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the converse using how two coplanar lines can relate.",
          "workingLatex": "\\text{Two lines in one plane: either they intersect, or they are parallel}",
          "explanation": "Within a single plane there are only two possibilities for a pair of distinct lines. This clean dichotomy is what makes the converse work here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce the converse from the dichotomy.",
          "workingLatex": "\\text{never meet} \\;\\Rightarrow\\; \\text{not intersecting} \\;\\Rightarrow\\; \\text{parallel}",
          "explanation": "If two coplanar lines never meet, the 'intersecting' option is ruled out, leaving only 'parallel'. So in a plane, never meeting does force the lines to be parallel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note why the single-plane restriction matters.",
          "workingLatex": "\\text{In 3D: skew lines never meet yet are not parallel}",
          "explanation": "The dichotomy fails in three dimensions, where skew lines never meet but are not parallel. Restricting to one plane is exactly what keeps the converse true.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine both directions into the connecting symbol.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\;\\Longrightarrow\\; P \\Leftrightarrow Q",
          "explanation": "Both the original and its converse are true for coplanar lines, so each statement implies the other and the correct connective is the two-way arrow.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: 'If two lines in a plane never meet, then they are parallel.' Within a single plane this converse is TRUE, so the statements are equivalent: $P \\Leftrightarrow Q$. (In 3D the converse would fail because of skew lines.)"
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "sufficient condition",
      "divisibility",
      "implication"
    ],
    "questionText": "Let $P$ be 'the integer $n$ is a multiple of $9$' and let $Q$ be 'the digit sum of $n$ is divisible by $9$'. Determine whether $P$ is a sufficient condition for $Q$, justifying your answer. Comment also on whether $P$ is necessary for $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions precisely.",
          "workingLatex": "P:\\ 9 \\mid n, \\qquad Q:\\ 9 \\mid (\\text{digit sum of } n)",
          "explanation": "We first pin down each claim. P is about the number itself being divisible by $9$; Q is about the sum of its digits being divisible by $9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what 'sufficient' means.",
          "workingLatex": "P \\text{ sufficient for } Q \\iff P \\Rightarrow Q",
          "explanation": "Saying P is sufficient for Q means P on its own guarantees Q. So the task reduces to checking whether the forward implication holds.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the divisibility-by-9 rule.",
          "workingLatex": "9 \\mid n \\iff 9 \\mid (\\text{digit sum of } n)",
          "explanation": "A standard result says a number is divisible by $9$ exactly when its digit sum is. This is because every power of ten leaves remainder $1$ on division by $9$, so $n$ and its digit sum share the same remainder.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the rule to test P ⇒ Q, with an example.",
          "workingLatex": "n = 72 = 9 \\times 8,\\quad \\text{digit sum} = 7 + 2 = 9,\\quad 9 \\mid 9",
          "explanation": "If $n$ is a multiple of $9$ then the rule immediately gives that its digit sum is divisible by $9$; the case $n=72$ illustrates it. So P forces Q.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude sufficiency.",
          "workingLatex": "P \\Rightarrow Q \\;\\Rightarrow\\; P \\text{ is sufficient for } Q",
          "explanation": "Because being a multiple of $9$ guarantees a digit sum divisible by $9$, P is indeed a sufficient condition for Q.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the reverse direction Q ⇒ P.",
          "workingLatex": "9 \\mid (\\text{digit sum}) \\;\\Rightarrow\\; 9 \\mid n \\quad (\\text{same rule, other direction})",
          "explanation": "The divisibility rule is itself a biconditional, so a digit sum divisible by $9$ also forces $n$ to be a multiple of $9$. This means the reverse implication holds too.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the reverse direction as necessity.",
          "workingLatex": "Q \\Rightarrow P \\;\\Rightarrow\\; P \\text{ is also necessary for } Q",
          "explanation": "Since Q cannot hold without P, P is necessary as well. Here the condition is in fact both necessary and sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\Leftrightarrow Q",
          "explanation": "P is at least sufficient for Q, and because the divisibility rule works both ways it is necessary too, giving a full equivalence.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, $P$ is sufficient for $Q$: any multiple of $9$ has a digit sum divisible by $9$ (the divisibility rule). In fact the rule works both ways, so $P$ is also necessary; thus $P \\Leftrightarrow Q$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "sufficient condition",
      "divisibility",
      "proof"
    ],
    "questionText": "Let $n$ be an integer. Determine whether the statement '$n$ is a multiple of $5$' is a sufficient condition for '$n^2$ is a multiple of $5$'. Justify your answer with algebra.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the two statements.",
          "workingLatex": "P:\\ n \\text{ is a multiple of } 5, \\qquad Q:\\ n^2 \\text{ is a multiple of } 5",
          "explanation": "Labelling the conditions keeps the argument organised. P is a claim about $n$; Q is a claim about $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what needs to be shown.",
          "workingLatex": "P \\text{ sufficient for } Q \\iff P \\Rightarrow Q",
          "explanation": "P is sufficient for Q precisely when assuming P lets us deduce Q. So we assume $n$ is a multiple of $5$ and try to reach a statement about $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the assumption P algebraically.",
          "workingLatex": "n = 5k \\quad \\text{for some integer } k",
          "explanation": "Turning 'multiple of $5$' into $n=5k$ converts the wording into algebra we can manipulate. The letter $k$ stands for whatever integer makes this true.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square both sides.",
          "workingLatex": "n^2 = (5k)^2 = 25k^2",
          "explanation": "Squaring is the natural move because Q is a statement about $n^2$. This expresses $n^2$ directly in terms of the integer $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out 5 to reveal the multiple.",
          "workingLatex": "25k^2 = 5\\,(5k^2)",
          "explanation": "Pulling out a factor of $5$ shows $n^2$ as $5$ times an integer, since $5k^2$ is an integer. That is exactly the form 'multiple of $5$' requires.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the implication holds.",
          "workingLatex": "n^2 = 5\\,(5k^2) \\;\\Rightarrow\\; Q \\text{ is true}, \\quad \\text{so } P \\Rightarrow Q",
          "explanation": "We started from P and derived Q with no gaps, so the forward implication is proven. Being a multiple of $5$ guarantees the square is a multiple of $5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer.",
          "workingLatex": "P \\text{ is a sufficient condition for } Q",
          "explanation": "Since $P \\Rightarrow Q$ was established directly, P is sufficient for Q. The clean factorisation is what makes the guarantee watertight.",
          "diagram": null
        }
      ],
      "finalAnswer": "Yes, it is sufficient. If $n = 5k$ then $n^2 = 25k^2 = 5(5k^2)$, which is a multiple of $5$; hence $P \\Rightarrow Q$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "geometry"
    ],
    "questionText": "Let $P$ be 'a quadrilateral has four right angles' and let $Q$ be 'the quadrilateral is a rectangle'. Determine whether $P$ is a necessary condition, a sufficient condition, both, or neither, for $Q$, and state the symbol ($\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$) connecting $P$ and $Q$. Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions.",
          "workingLatex": "P:\\ \\text{the quadrilateral has four } 90^\\circ \\text{ angles}, \\qquad Q:\\ \\text{it is a rectangle}",
          "explanation": "We begin by making both claims explicit. P describes a shape by its angles; Q gives it the name 'rectangle'.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of a rectangle.",
          "workingLatex": "\\text{rectangle} \\;=\\; \\text{a quadrilateral with four right angles}",
          "explanation": "The standard definition of a rectangle is a four-sided figure whose angles are all $90^\\circ$. This definition is what links the two statements.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up both directions to test.",
          "workingLatex": "\\text{Test } P \\Rightarrow Q \\quad\\text{and}\\quad Q \\Rightarrow P",
          "explanation": "Choosing the right symbol means checking each direction. Only if both hold do we use the biconditional.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the angle sum is consistent.",
          "workingLatex": "90^\\circ \\times 4 = 360^\\circ = \\text{angle sum of any quadrilateral}",
          "explanation": "Four right angles total $360^\\circ$, which is exactly the interior-angle sum of a quadrilateral. So a four-right-angled quadrilateral is genuinely possible and its sides close up into a rectangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "\\text{four } 90^\\circ \\text{ angles} \\;\\Rightarrow\\; \\text{rectangle}",
          "explanation": "A quadrilateral with all angles $90^\\circ$ meets the definition of a rectangle exactly, so P forces Q.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the reverse direction Q ⇒ P.",
          "workingLatex": "\\text{rectangle} \\;\\Rightarrow\\; \\text{four } 90^\\circ \\text{ angles}",
          "explanation": "By definition every rectangle has four right angles, so Q forces P as well. Neither statement can hold without the other.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the directions into the correct symbol.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\;\\Longrightarrow\\; P \\Leftrightarrow Q",
          "explanation": "Because each implies the other, the connective is the two-way arrow. This is unsurprising, as P is just the definition of Q rephrased.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in necessary / sufficient terms.",
          "workingLatex": "P \\text{ is necessary and sufficient for } Q,\\qquad P \\Leftrightarrow Q",
          "explanation": "P guarantees Q, so it is sufficient; Q cannot occur without P, so it is necessary. Both together give a necessary and sufficient condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$. Having four right angles is both necessary and sufficient for a quadrilateral to be a rectangle, since that is precisely the definition of a rectangle."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "implication",
      "primes"
    ],
    "questionText": "Express the statement 'every even integer greater than $2$ is not prime' symbolically, using the universal quantifier $\\forall$, the membership symbol $\\in$, and an implication $\\Rightarrow$. State whether the statement is true, giving a brief reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the three ingredients a symbolic form needs.",
          "workingLatex": "\\text{quantifier} \\ + \\ \\text{hypothesis} \\ + \\ \\text{conclusion}",
          "explanation": "A symbolic version of a general claim needs a quantifier to say 'for all', a hypothesis picking out which numbers we mean, and a conclusion asserted about them. Naming these parts first tells us exactly what to translate.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Introduce the variable and its domain with the quantifier.",
          "workingLatex": "\\forall n \\in \\mathbb{Z}",
          "explanation": "The claim is about integers, so we quantify over $n$ in $\\mathbb{Z}$. The symbol $\\forall$ means 'for every', and $\\in \\mathbb{Z}$ fixes the world of objects we are discussing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the hypothesis 'even and greater than 2'.",
          "workingLatex": "(n \\text{ is even}) \\land (n > 2)",
          "explanation": "The phrase 'even integer greater than 2' is a condition selecting a subset of integers, so it belongs on the left of the implication. The word 'and' becomes $\\land$ because both properties must hold together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the conclusion 'not prime'.",
          "workingLatex": "n \\text{ is not prime}",
          "explanation": "What the statement asserts about those numbers is that they fail to be prime, so this becomes the right-hand side of the implication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the parts into one symbolic statement.",
          "workingLatex": "\\forall n \\in \\mathbb{Z},\\ (n \\text{ is even} \\land n > 2) \\Rightarrow n \\text{ is not prime}",
          "explanation": "The implication $\\Rightarrow$ links the condition to the conclusion, while the quantifier ranges over the whole thing. This is the required symbolic form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Analyse whether such an integer can be prime.",
          "workingLatex": "n \\text{ even},\\ n > 2 \\Rightarrow n = 2m,\\ m \\ge 2",
          "explanation": "An even number is a multiple of 2, and being larger than 2 forces the other factor $m$ to be at least 2. So the number is a genuine product of two factors each bigger than 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the statement is true.",
          "workingLatex": "2 \\mid n,\\ 2 \\ne n \\Rightarrow n \\text{ is composite, so not prime}",
          "explanation": "A prime has no divisors other than 1 and itself, but here 2 is a divisor different from $n$, so $n$ is composite. Hence every such integer is not prime and the statement is true.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\forall n \\in \\mathbb{Z},\\ (n \\text{ is even} \\land n > 2) \\Rightarrow n \\text{ is not prime}$. The statement is true, since such an $n$ has 2 as a proper divisor and is therefore composite."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "implication",
      "counterexample"
    ],
    "questionText": "The statement $x = y \\Rightarrow x^2 = y^2$ is true for all real numbers $x$ and $y$. Write down the converse of this statement, and determine whether the converse is true, giving a counterexample if it is not.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the converse of an implication is.",
          "workingLatex": "P \\Rightarrow Q \\quad \\text{has converse} \\quad Q \\Rightarrow P",
          "explanation": "The converse swaps the roles of hypothesis and conclusion. It is a genuinely different statement, so its truth has to be checked separately from the original.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the hypothesis and conclusion of the original.",
          "workingLatex": "P: x = y, \\qquad Q: x^2 = y^2",
          "explanation": "Naming the two halves makes the swap mechanical. Here $P$ is the assumption and $Q$ is the consequence in the original implication.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the converse by exchanging P and Q.",
          "workingLatex": "Q \\Rightarrow P: \\quad x^2 = y^2 \\Rightarrow x = y",
          "explanation": "Swapping $P$ and $Q$ gives the converse, which now claims that equal squares force equal numbers. This is the statement we must test.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide how to test the converse.",
          "workingLatex": "\\text{seek } x, y \\text{ with } x^2 = y^2 \\text{ but } x \\ne y",
          "explanation": "An implication fails only when the hypothesis holds yet the conclusion does not. So we look for numbers with equal squares that are nevertheless unequal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose a pair of opposite numbers.",
          "workingLatex": "x = 1,\\ y = -1",
          "explanation": "A number and its negative always share the same square, which makes such a pair the natural place to look for a counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check that this pair breaks the converse.",
          "workingLatex": "x^2 = 1,\\ y^2 = 1 \\Rightarrow x^2 = y^2; \\quad 1 \\ne -1 \\Rightarrow x \\ne y",
          "explanation": "The squares agree, so the hypothesis $Q$ holds, but the numbers differ, so the conclusion $P$ fails. This single case is enough to break the implication.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion.",
          "workingLatex": "x^2 = y^2 \\Rightarrow x = y \\ \\text{ is false}",
          "explanation": "Because a counterexample exists, the converse is false even though the original statement is true. An implication and its converse can have different truth values.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse: $x^2 = y^2 \\Rightarrow x = y$. It is false; for example $x = 1,\\ y = -1$ give $x^2 = y^2$ but $x \\ne y$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "discriminant",
      "quadratics"
    ],
    "questionText": "For real constants $a$, $b$, $c$ with $a \\ne 0$, consider the statements $P:\\ b^2 - 4ac > 0$ and $Q:$ 'the equation $ax^2 + bx + c = 0$ has two distinct real roots'. Insert the correct symbol from $\\Rightarrow$, $\\Leftarrow$ and $\\Leftrightarrow$ between $P$ and $Q$, justifying both directions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify P and Q and what the choice of symbol means.",
          "workingLatex": "P: b^2 - 4ac > 0, \\quad Q: \\text{two distinct real roots}",
          "explanation": "Choosing between $\\Rightarrow$, $\\Leftarrow$ and $\\Leftrightarrow$ is a question about direction, so we must test whether $P$ forces $Q$, whether $Q$ forces $P$, or both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the quadratic formula for the roots.",
          "workingLatex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "explanation": "The roots are built from the square root of $b^2-4ac$, so the sign of that quantity is exactly what decides the nature of the roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the discriminant.",
          "workingLatex": "\\Delta = b^2 - 4ac",
          "explanation": "Giving the discriminant a name lets us reason cleanly about the $\\pm\\sqrt{\\Delta}$ term. Its sign is what splits the outcome into cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the forward direction P implies Q.",
          "workingLatex": "\\Delta > 0 \\Rightarrow \\sqrt{\\Delta} \\in \\mathbb{R},\\ \\sqrt{\\Delta} \\ne 0",
          "explanation": "If $\\Delta > 0$ its square root is a real, non-zero number, so the $+$ and $-$ options in the formula give two different real values. Hence $P$ guarantees two distinct real roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction Q implies P.",
          "workingLatex": "\\text{two distinct real roots} \\Rightarrow \\pm\\sqrt{\\Delta} \\text{ real, unequal} \\Rightarrow \\Delta > 0",
          "explanation": "If the two roots are real and distinct, the term $\\pm\\sqrt{\\Delta}$ must be real (not complex) and non-zero, or the roots would coincide. Both requirements together force $\\Delta > 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rule out the remaining discriminant cases.",
          "workingLatex": "\\Delta = 0 \\Rightarrow \\text{repeated root}; \\quad \\Delta < 0 \\Rightarrow \\text{non-real roots}",
          "explanation": "Checking the alternatives confirms that anything other than $\\Delta > 0$ fails to give two distinct real roots, so $Q$ can only happen when $P$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Select the connecting symbol.",
          "workingLatex": "b^2 - 4ac > 0 \\ \\Leftrightarrow\\ \\text{two distinct real roots}",
          "explanation": "Since each statement forces the other, the two are logically equivalent, so the correct connective is the double arrow $\\Leftrightarrow$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\Leftrightarrow$. A positive discriminant and 'two distinct real roots' are equivalent, so $b^2 - 4ac > 0 \\Leftrightarrow$ the quadratic has two distinct real roots."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "counterexample",
      "inequalities"
    ],
    "questionText": "For real numbers $x$, consider the statements $A: x^2 > x$ and $B: x > 1$. Determine which of $\\Rightarrow$, $\\Leftarrow$, $\\Leftrightarrow$ or 'none of these' correctly describes the relationship $A\\ ?\\ B$, testing each direction and using a counterexample where a direction fails. State your conclusion using the language of necessary and sufficient conditions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the problem and note both directions must be tested.",
          "workingLatex": "A: x^2 > x, \\quad B: x > 1",
          "explanation": "The correct connective depends on direction, so we separately ask whether $B$ forces $A$ and whether $A$ forces $B$. Only after both tests can we choose a symbol.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite A as a product inequality.",
          "workingLatex": "x^2 > x \\iff x^2 - x > 0 \\iff x(x - 1) > 0",
          "explanation": "Moving everything to one side and factoring turns the inequality into a product compared with zero, which reveals exactly which $x$ make $A$ true.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the solution set of A.",
          "workingLatex": "x(x - 1) > 0 \\iff x < 0 \\ \\text{or}\\ x > 1",
          "explanation": "A product of two factors is positive when both are negative or both positive, giving $x < 0$ or $x > 1$. This region is larger than just $x > 1$, which is worth remembering.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin the forward test: assume B.",
          "workingLatex": "x > 1 \\Rightarrow x > 1 > 0",
          "explanation": "We start from $B$ and try to reach $A$. Knowing $x > 1$ also tells us $x$ is positive, which lets us multiply the inequality safely without flipping it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the inequality by the positive number x.",
          "workingLatex": "x > 1 \\Rightarrow x \\cdot x > 1 \\cdot x \\Rightarrow x^2 > x",
          "explanation": "Multiplying both sides of $x > 1$ by the positive number $x$ preserves the direction and yields exactly $x^2 > x$. So $B$ genuinely produces $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the forward direction holds.",
          "workingLatex": "B \\Rightarrow A \\ \\text{ is true}",
          "explanation": "Every $x$ greater than 1 satisfies $x^2 > x$, so $B$ is enough to guarantee $A$. This makes $B$ a sufficient condition for $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the reverse test by seeking a counterexample.",
          "workingLatex": "\\text{seek } x \\text{ with } x^2 > x \\text{ but } x \\le 1",
          "explanation": "To break the reverse implication we want a value satisfying $A$ yet failing $B$. Step 3 showed $A$ also holds for $x < 0$, so that region is the place to look.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose a negative test value.",
          "workingLatex": "x = -2:\\ x^2 = 4,\\ x = -2",
          "explanation": "A negative value lies in the $x < 0$ part of $A$'s solution set, so it should satisfy $A$ while clearly not exceeding 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the counterexample against both statements.",
          "workingLatex": "4 > -2 \\Rightarrow A \\text{ holds}; \\quad -2 \\not> 1 \\Rightarrow B \\text{ fails}",
          "explanation": "Here $A$ is true but $B$ is false, so this single value shows that $A$ does not force $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the two tests to pick the symbol.",
          "workingLatex": "A \\not\\Rightarrow B,\\ B \\Rightarrow A \\ \\Rightarrow\\ A \\Leftarrow B",
          "explanation": "Only the direction from $B$ to $A$ survives, so the relationship is the single left arrow $A \\Leftarrow B$; the counterexample rules out the two-way $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Translate into necessary and sufficient language.",
          "workingLatex": "B \\text{ is sufficient, but not necessary, for } A",
          "explanation": "Because $x > 1$ guarantees $x^2 > x$, yet $x^2 > x$ can occur without $x > 1$ (as $x = -2$ showed), $B$ is a sufficient but not necessary condition for $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\Leftarrow B$ only, i.e. $x > 1 \\Rightarrow x^2 > x$, but $A \\not\\Rightarrow B$ since $x = -2$ gives $x^2 = 4 > -2$. So $x > 1$ is sufficient but not necessary for $x^2 > x$; in full, $x^2 > x \\Leftrightarrow (x < 0 \\ \\text{or}\\ x > 1)$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "proof",
      "contrapositive"
    ],
    "questionText": "Let $n$ be an integer. Prove that '$n$ is odd' is a necessary and sufficient condition for '$n^2$ is odd'. Prove each direction carefully, using a contrapositive argument where it is convenient, and state your conclusion using $\\Leftrightarrow$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Restate the goal as a biconditional.",
          "workingLatex": "P: n \\text{ odd}, \\quad Q: n^2 \\text{ odd}, \\quad \\text{prove } P \\Leftrightarrow Q",
          "explanation": "'Necessary and sufficient' means both $P \\Rightarrow Q$ and $Q \\Rightarrow P$, that is $P \\Leftrightarrow Q$. So the proof has two halves, one for each arrow.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall which arrow is 'sufficient' and which is 'necessary'.",
          "workingLatex": "\\text{sufficient}: P \\Rightarrow Q; \\quad \\text{necessary}: Q \\Rightarrow P",
          "explanation": "$P$ is sufficient for $Q$ if it guarantees $Q$; $P$ is necessary for $Q$ if $Q$ cannot occur without it. Establishing both gives the full equivalence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Start the sufficiency proof by writing n as odd.",
          "workingLatex": "P \\Rightarrow Q: \\ n \\text{ odd} \\Rightarrow n = 2k + 1,\\ k \\in \\mathbb{Z}",
          "explanation": "We prove sufficiency first. Every odd integer can be written as $2k+1$, which turns the word 'odd' into algebra we can square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the expression.",
          "workingLatex": "n^2 = (2k + 1)^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding the square lets us examine the parity of the result directly rather than guessing at it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the square in the standard odd form.",
          "workingLatex": "n^2 = 2(2k^2 + 2k) + 1",
          "explanation": "Factoring 2 out of the even part shows $n^2$ is 'twice an integer, plus one', which is exactly the definition of an odd number.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude that oddness of n is sufficient.",
          "workingLatex": "n^2 = 2m + 1,\\ m = 2k^2 + 2k \\Rightarrow n^2 \\text{ odd, so } P \\Rightarrow Q",
          "explanation": "The square comes out odd whenever $n$ is odd, so being odd is a sufficient condition for the square to be odd.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Switch to the contrapositive for the reverse direction.",
          "workingLatex": "Q \\Rightarrow P \\ \\equiv \\ \\lnot P \\Rightarrow \\lnot Q: \\ n \\text{ even} \\Rightarrow n^2 \\text{ even}",
          "explanation": "Proving $Q \\Rightarrow P$ directly is awkward, but its contrapositive 'if $n$ is even then $n^2$ is even' is logically identical and much easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Assume n even and square it.",
          "workingLatex": "n = 2k \\Rightarrow n^2 = 4k^2 = 2(2k^2)",
          "explanation": "An even integer is $2k$; squaring produces a number with an explicit factor of 2, so it is even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the contrapositive.",
          "workingLatex": "n^2 = 2(2k^2) \\Rightarrow n^2 \\text{ even, so } \\lnot P \\Rightarrow \\lnot Q",
          "explanation": "The square of an even number is even, which establishes the contrapositive and therefore the original implication $Q \\Rightarrow P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State necessity from the reverse implication.",
          "workingLatex": "Q \\Rightarrow P \\text{ holds, so } n \\text{ odd is necessary for } n^2 \\text{ odd}",
          "explanation": "Since $n^2$ can be odd only when $n$ is odd, oddness of $n$ is a necessary condition for oddness of $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine both directions into the biconditional.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\ \\Rightarrow\\ P \\Leftrightarrow Q",
          "explanation": "With both arrows proven, the two statements are equivalent, so '$n$ is odd' is both necessary and sufficient for '$n^2$ is odd'.",
          "diagram": null
        }
      ],
      "finalAnswer": "Both directions hold: $n$ odd $\\Rightarrow n^2 = 2(2k^2 + 2k) + 1$ is odd (sufficient); and by contrapositive $n$ even $\\Rightarrow n^2$ even, so $n^2$ odd $\\Rightarrow n$ odd (necessary). Hence $n \\text{ odd} \\Leftrightarrow n^2 \\text{ odd}$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "counterexample",
      "zero product"
    ],
    "questionText": "Let $a$ and $b$ be real numbers. Taking the statements $P: ab = 0$ and $Q: a = 0$, determine whether $P$ is a necessary condition, a sufficient condition, both, or neither, for $Q$. Justify each part, giving a counterexample where a direction fails.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate 'necessary' and 'sufficient' into arrows.",
          "workingLatex": "P: ab = 0, \\quad Q: a = 0",
          "explanation": "$P$ is sufficient for $Q$ exactly when $P \\Rightarrow Q$, and necessary for $Q$ exactly when $Q \\Rightarrow P$. So we test those two implications in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the sufficiency test.",
          "workingLatex": "\\text{does } ab = 0 \\Rightarrow a = 0?",
          "explanation": "Sufficiency asks whether knowing the product is zero is enough on its own to conclude that $a$ is zero. We probe this claim with a counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a counterexample for sufficiency.",
          "workingLatex": "a = 3,\\ b = 0:\\ ab = 3 \\cdot 0 = 0",
          "explanation": "Setting $b = 0$ forces the product to be zero no matter what $a$ is, which lets $a$ stay non-zero while $P$ still holds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show Q fails at this point.",
          "workingLatex": "ab = 0 \\ (P \\text{ holds}) \\text{ but } a = 3 \\ne 0 \\ (Q \\text{ fails})",
          "explanation": "Here the product is zero yet $a$ is not, so $P$ does not force $Q$. A single counterexample is enough to reject sufficiency.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude P is not sufficient.",
          "workingLatex": "P \\not\\Rightarrow Q,\\ \\text{so } P \\text{ is not sufficient for } Q",
          "explanation": "Because $ab = 0$ can happen without $a = 0$, the product being zero is not enough to guarantee $a = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the necessity test.",
          "workingLatex": "\\text{does } a = 0 \\Rightarrow ab = 0?",
          "explanation": "Necessity asks the other direction, namely whether $Q$ holding forces $P$ to hold as well. We check this by substituting $a = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute a = 0 into the product.",
          "workingLatex": "a = 0 \\Rightarrow ab = 0 \\cdot b = 0",
          "explanation": "If $a$ is zero then the product is zero regardless of $b$, because zero times anything is zero. So $Q$ always drags $P$ along with it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude P is necessary.",
          "workingLatex": "Q \\Rightarrow P \\text{ is true, so } P \\text{ is necessary for } Q",
          "explanation": "Since $a = 0$ cannot occur without $ab = 0$ also occurring, $P$ is a necessary condition for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give the intuitive reason behind the result.",
          "workingLatex": "ab = 0 \\iff (a = 0 \\ \\text{or}\\ b = 0)",
          "explanation": "The product being zero is a weaker requirement than $a = 0$ alone, since it can be met by $b = 0$ instead. A weaker consequence of $Q$ is exactly what 'necessary but not sufficient' looks like.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final classification.",
          "workingLatex": "P \\text{ is necessary but not sufficient for } Q",
          "explanation": "Combining the two tests, $ab = 0$ is forced by $a = 0$ but does not force it back, so $P$ is necessary but not sufficient for $Q$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ is necessary but not sufficient for $Q$: $a = 0 \\Rightarrow ab = 0$ (necessary), but $ab = 0 \\not\\Rightarrow a = 0$, as shown by $a = 3,\\ b = 0$ (not sufficient)."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "counterexample",
      "inequalities"
    ],
    "questionText": "For real numbers $a$ and $b$, decide whether the implication $a > b \\Rightarrow a^2 > b^2$ is true. If it is not, give a counterexample, and then state and prove one additional condition on $a$ and $b$ under which the implication does hold.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the claim to be tested.",
          "workingLatex": "\\text{Claim}: \\ a > b \\Rightarrow a^2 > b^2",
          "explanation": "We treat this as an implication to be tested. If even one pair $(a, b)$ satisfies the hypothesis but not the conclusion, the claim is false in general.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a candidate counterexample.",
          "workingLatex": "a = 1,\\ b = -2",
          "explanation": "Pairing a small positive number with a 'more negative' one is a good test, because a negative number of large size has a large square. First we confirm the hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check the hypothesis holds.",
          "workingLatex": "a > b:\\ 1 > -2 \\ \\text{(true)}",
          "explanation": "The pair satisfies $a > b$, so the hypothesis holds and this is a legitimate case in which to test the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the conclusion fails.",
          "workingLatex": "a^2 = 1,\\ b^2 = 4 \\Rightarrow a^2 < b^2",
          "explanation": "The squares reverse the order: $1$ is less than $4$, so $a^2 > b^2$ fails even though $a > b$. The implication is therefore false in general.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain why the implication breaks.",
          "workingLatex": "|{-2}| = 2 > 1 = |1|",
          "explanation": "Squaring compares sizes, not signed values, and here $b = -2$ is larger in magnitude than $a = 1$. Ordering by value on its own says nothing about ordering by magnitude.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify what truly controls the squares.",
          "workingLatex": "a^2 > b^2 \\iff |a| > |b|",
          "explanation": "Since $a^2 = |a|^2$, the inequality between squares is exactly the inequality between magnitudes. To repair the implication we must make $a > b$ also guarantee $|a| > |b|$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Propose an extra condition.",
          "workingLatex": "\\text{require } b \\ge 0, \\ \\text{i.e. assume } a > b \\ge 0",
          "explanation": "If both numbers are non-negative then their order by value and their order by magnitude agree, which should repair the implication. We now prove this works.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Factor the difference of two squares.",
          "workingLatex": "a^2 - b^2 = (a - b)(a + b)",
          "explanation": "Writing the gap between the squares as a product lets us decide its sign from the signs of the two factors.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determine the sign of each factor under the condition.",
          "workingLatex": "a > b \\Rightarrow a - b > 0; \\quad a > b \\ge 0 \\Rightarrow a + b > 0",
          "explanation": "The first factor is positive because $a > b$; the second is positive because both numbers are non-negative and $a > 0$. A product of two positives is positive.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the repaired implication.",
          "workingLatex": "a > b \\ge 0 \\Rightarrow a^2 - b^2 > 0 \\Rightarrow a^2 > b^2",
          "explanation": "With both factors positive the squares satisfy $a^2 > b^2$, so requiring $a > b \\ge 0$ makes the implication true. More generally $a > |b|$ already forces $a^2 > b^2$, and $a > b \\ge 0$ is a special case of it.",
          "diagram": null
        }
      ],
      "finalAnswer": "False in general: $a = 1,\\ b = -2$ give $a > b$ but $a^2 = 1 < 4 = b^2$. It becomes true under the extra condition $a > b \\ge 0$, since then $a^2 - b^2 = (a - b)(a + b) > 0$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "converse",
      "contrapositive",
      "parity"
    ],
    "questionText": "It is claimed that for integers $x$ and $y$, if $xy$ is even then $x$ is even or $y$ is even. Determine whether this statement is true, justifying your answer. Then write down its converse and decide whether the converse is also true. Hence state which symbol, $\\Rightarrow$ or $\\Leftrightarrow$, correctly links the statements $P:\\ xy$ is even and $Q:\\ x$ is even or $y$ is even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two statements in clear logical form.",
          "workingLatex": "P:\\ xy \\text{ is even}, \\qquad Q:\\ x \\text{ is even or } y \\text{ is even}",
          "explanation": "Naming the hypothesis $P$ and the conclusion $Q$ lets us treat the claim as $P \\Rightarrow Q$ and test it precisely. Being explicit about the 'or' in $Q$ matters, because attacking it directly would force us to juggle two separate cases.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a strategy: prove the claim by its contrapositive.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ is equivalent to } \\ \\lnot Q \\Rightarrow \\lnot P",
          "explanation": "A statement and its contrapositive are always true together, so we may prove whichever is easier. Here $\\lnot Q$ collapses to a single clean case, which is simpler than chasing the 'or' inside $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the negations using De Morgan's law.",
          "workingLatex": "\\lnot Q:\\ x \\text{ is odd and } y \\text{ is odd}, \\qquad \\lnot P:\\ xy \\text{ is odd}",
          "explanation": "Negating 'x even or y even' flips the 'or' to 'and' and each part to its opposite, giving 'x odd and y odd'. The contrapositive to prove is therefore: if both $x$ and $y$ are odd, then $xy$ is odd.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write two odd numbers in algebraic form.",
          "workingLatex": "x = 2a+1, \\qquad y = 2b+1 \\quad (a,b \\in \\mathbb{Z})",
          "explanation": "Every odd integer is one more than an even integer, so $2a+1$ captures any odd number. Turning the words into algebra lets us actually compute the product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply and factor out 2.",
          "workingLatex": "xy = (2a+1)(2b+1) = 4ab+2a+2b+1 = 2(2ab+a+b)+1",
          "explanation": "The product is an even quantity plus one, which is exactly the definition of an odd number. So multiplying two odd numbers can never produce an even result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the contrapositive, hence the original statement.",
          "workingLatex": "\\lnot Q \\Rightarrow \\lnot P \\ \\text{ true} \\ \\Rightarrow \\ P \\Rightarrow Q \\ \\text{ true}",
          "explanation": "Having shown that two odds give an odd product, the contrapositive holds, and therefore the original statement $P \\Rightarrow Q$ is true as well.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the converse.",
          "workingLatex": "\\text{Converse } Q \\Rightarrow P:\\ (x \\text{ even or } y \\text{ even}) \\Rightarrow xy \\text{ even}",
          "explanation": "The converse simply swaps hypothesis and conclusion. The truth of a statement tells us nothing automatically about its converse, so it must be checked separately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test the converse assuming x is even.",
          "workingLatex": "x = 2k \\Rightarrow xy = 2ky = 2(ky) \\text{ even}",
          "explanation": "If $x$ is even it carries a factor of 2, and multiplying by any integer $y$ keeps that factor, so the product is even. The case where $y$ is even works identically by symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the converse is true.",
          "workingLatex": "Q \\Rightarrow P \\ \\text{ is true}",
          "explanation": "A single even factor is enough to force the whole product to be even, so the converse holds in every case.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine both directions.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow \\ P \\Leftrightarrow Q",
          "explanation": "When a statement and its converse are both true, the two statements are logically equivalent, which we record with the two-way symbol $\\Leftrightarrow$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The statement is true (proved via its contrapositive: two odds multiply to an odd), and its converse is also true, so $P \\Leftrightarrow Q$: $xy$ is even if and only if $x$ is even or $y$ is even."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "divisibility"
    ],
    "questionText": "Let $n$ be a whole number. Show that '$n$ ends in the digit $0$ or $5$' is a necessary and sufficient condition for '$n$ is divisible by $5$'. You must prove both directions of the implication and state your final conclusion using the symbol $\\Leftrightarrow$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the two statements to be linked.",
          "workingLatex": "P:\\ n \\text{ ends in } 0 \\text{ or } 5, \\qquad Q:\\ 5 \\mid n",
          "explanation": "'Necessary and sufficient' means the two statements imply each other, so our target is $P \\Leftrightarrow Q$. Naming them keeps the two directions of the proof clearly separated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Separate a number into its last digit and the rest.",
          "workingLatex": "n = 10a + d, \\qquad a \\in \\mathbb{Z}_{\\ge 0}, \\ d \\in \\{0,1,\\dots,9\\}",
          "explanation": "The last digit $d$ is what 'ends in' refers to, and $10a$ is everything to its left. Splitting $n$ this way lets the single digit $d$ control the whole argument.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that the leading part is always divisible by 5.",
          "workingLatex": "10a = 5(2a) \\Rightarrow 5 \\mid 10a",
          "explanation": "Ten is itself a multiple of 5, so the entire 'tens and above' part $10a$ is divisible by 5 no matter what $a$ is. This is why only the last digit can decide the outcome.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Prove sufficiency: if it ends in 0 or 5 then 5 divides n.",
          "workingLatex": "d=0:\\ n=10a=5(2a); \\qquad d=5:\\ n=10a+5=5(2a+1)",
          "explanation": "Assuming $P$, the digit $d$ is itself a multiple of 5, and adding it to the multiple $10a$ keeps the sum a multiple of 5. So $P$ is enough to guarantee $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the forward conclusion.",
          "workingLatex": "P \\Rightarrow Q",
          "explanation": "Both allowed last digits produce a number equal to exactly 5 times an integer, establishing the sufficiency direction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Prove necessity: if 5 divides n then the last digit is fixed.",
          "workingLatex": "5 \\mid n \\text{ and } 5 \\mid 10a \\Rightarrow 5 \\mid (n - 10a) = d",
          "explanation": "If 5 divides $n$ and also divides $10a$, it must divide their difference, which is the last digit $d$. Divisibility is preserved under subtraction, so this pins down $d$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the possible last digits.",
          "workingLatex": "d \\in \\{0,\\dots,9\\} \\text{ and } 5 \\mid d \\Rightarrow d = 0 \\text{ or } d = 5",
          "explanation": "The only single digits that 5 divides are 0 and 5, so the number must end in one of these. That is exactly statement $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the reverse conclusion.",
          "workingLatex": "Q \\Rightarrow P",
          "explanation": "Divisibility by 5 has forced the final digit to be 0 or 5, establishing the necessity direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine both directions into a biconditional.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow \\ P \\Leftrightarrow Q",
          "explanation": "With both implications proved, the conditions are equivalent: each is both necessary and sufficient for the other.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Translate the result into necessary/sufficient language.",
          "workingLatex": "P \\text{ is necessary and sufficient for } Q",
          "explanation": "Because $P \\Rightarrow Q$, the digit condition is sufficient; because $Q \\Rightarrow P$, it is also necessary. Together this is precisely what the biconditional records.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: a whole number ends in $0$ or $5$ if and only if it is divisible by $5$, so the digit condition is both necessary and sufficient."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "implication",
      "quadratic",
      "sufficient not necessary"
    ],
    "questionText": "Consider the statements $P:\\ x^2 - 5x + 6 = 0$ and $Q:\\ x = 2 \\text{ or } x = 3$, where $x$ is real. Show that $P \\Leftrightarrow Q$. Then, taking $R:\\ x = 2$, explain carefully why $R$ is linked to $P$ only by $\\Rightarrow$ and not by $\\Leftrightarrow$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the statements and their domain.",
          "workingLatex": "P:\\ x^2-5x+6=0, \\quad Q:\\ x=2 \\text{ or } x=3, \\quad x \\in \\mathbb{R}",
          "explanation": "We are comparing a quadratic equation with a statement about its roots. Establishing $P \\Leftrightarrow Q$ means showing each statement forces the other.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - 5x + 6 = (x-2)(x-3)",
          "explanation": "Finding two numbers that multiply to $6$ and add to $5$ gives the factors. Factorising rewrites the equation in a form where the zero-product rule applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the zero-product principle.",
          "workingLatex": "(x-2)(x-3) = 0 \\iff x-2=0 \\ \\text{ or } \\ x-3=0",
          "explanation": "A product of real numbers is zero exactly when at least one factor is zero, and this is a genuine two-way equivalence rather than a one-way deduction. That single fact will carry both directions of the biconditional at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Confirm the forward direction P implies Q.",
          "workingLatex": "x^2-5x+6=0 \\Rightarrow (x-2)(x-3)=0 \\Rightarrow x=2 \\text{ or } x=3",
          "explanation": "If the equation holds, the factored product is zero, forcing one bracket to vanish. So any solution must be 2 or 3.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Confirm the reverse direction Q implies P by substitution.",
          "workingLatex": "x=2:\\ 4-10+6=0 \\ \\checkmark \\qquad x=3:\\ 9-15+6=0 \\ \\checkmark",
          "explanation": "Substituting each value back returns zero, so each really is a root. This confirms that '$x=2$ or $x=3$' guarantees the equation holds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude the biconditional.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow \\ P \\Leftrightarrow Q",
          "explanation": "Both directions hold, so the equation and the pair of roots are logically equivalent statements.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the single-value statement R.",
          "workingLatex": "R:\\ x=2",
          "explanation": "$R$ names just one of the two solutions. We test the two directions between $R$ and $P$ separately to see which arrows are valid.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Show R implies P.",
          "workingLatex": "x=2 \\Rightarrow 4-10+6=0 \\Rightarrow P \\text{ true}",
          "explanation": "Putting $x=2$ into the equation gives zero, so $R$ is enough to make $P$ true. This makes $R$ a sufficient condition for $P$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show P does not imply R using the other root.",
          "workingLatex": "x=3 \\ \\text{ satisfies } P \\ \\text{ but } R \\ \\text{ is false}",
          "explanation": "The value $x=3$ solves the equation yet is not $2$, so $P$ can hold while $R$ fails. One counterexample is enough to break the reverse arrow.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the correct link between R and P.",
          "workingLatex": "R \\Rightarrow P \\ \\text{ but } \\ P \\not\\Rightarrow R \\ \\Rightarrow \\ \\text{only } R \\Rightarrow P",
          "explanation": "Since only one direction survives, $R$ and $P$ are joined by $\\Rightarrow$ alone: $R$ is sufficient but not necessary for $P$. Claiming equivalence would wrongly assert that 2 is the only root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-2)(x-3)=0$ gives $P \\Leftrightarrow Q$. For $R:\\ x=2$ we have $R \\Rightarrow P$ but $P \\not\\Rightarrow R$ (since $x=3$ also works), so $R$ links to $P$ only by $\\Rightarrow$: it is sufficient but not necessary."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "converse",
      "counterexample",
      "geometry"
    ],
    "questionText": "$ABCD$ is a quadrilateral. Consider the statements $P:\\ ABCD$ is a rhombus, and $Q:\\ ABCD$ has perpendicular diagonals. Determine the logical relationship between $P$ and $Q$, deciding which of $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ applies. Hence state whether being a rhombus is a necessary condition, a sufficient condition, both, or neither, for having perpendicular diagonals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the two geometric statements.",
          "workingLatex": "P:\\ ABCD \\text{ is a rhombus}, \\qquad Q:\\ \\text{diagonals of } ABCD \\text{ are perpendicular}",
          "explanation": "To pick the right connective we must test whether each property forces the other. Naming the statements keeps the two directions apart.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the defining property of a rhombus.",
          "workingLatex": "\\text{rhombus} = \\text{parallelogram with all four sides equal}",
          "explanation": "A rhombus is a parallelogram whose four sides are equal in length. This high degree of symmetry is what constrains its diagonals.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P implies Q.",
          "workingLatex": "\\text{diagonals bisect each other and are perpendicular bisectors}",
          "explanation": "In a rhombus the diagonals are perpendicular bisectors of each other: each diagonal splits it into two congruent triangles that meet at right angles at the centre. So a rhombus always has perpendicular diagonals.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the forward conclusion.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ is true}",
          "explanation": "Every rhombus automatically has perpendicular diagonals, so the property $Q$ is guaranteed by being a rhombus.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up a test of the converse.",
          "workingLatex": "\\text{seek } ABCD \\text{ with perpendicular diagonals but not a rhombus}",
          "explanation": "To decide the converse we look for a single quadrilateral that has perpendicular diagonals yet fails to be a rhombus. If even one exists, the converse is false.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose a kite as the counterexample.",
          "workingLatex": "\\text{kite: } AB=AD, \\ CB=CD, \\ AB \\neq CB",
          "explanation": "A kite has two pairs of adjacent equal sides but not all four equal, so it is not a rhombus. It is the natural shape to try because its lopsided symmetry still constrains the diagonals.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show the kite has perpendicular diagonals.",
          "workingLatex": "\\text{axis of symmetry } \\perp \\text{ other diagonal} \\Rightarrow \\text{diagonals} \\perp",
          "explanation": "The axis of a kite is the perpendicular bisector of the other diagonal, so the diagonals meet at right angles. Thus $Q$ holds while $P$ fails, giving a valid counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the converse is false.",
          "workingLatex": "Q \\not\\Rightarrow P",
          "explanation": "Because the kite satisfies $Q$ but not $P$, the converse fails, which immediately rules out the two-way symbol $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Select the correct connecting symbol.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ only}",
          "explanation": "Only the forward implication survives, so the correct connective is the one-way arrow from rhombus to perpendicular diagonals.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Translate into necessary/sufficient language.",
          "workingLatex": "P \\text{ sufficient for } Q, \\ \\text{ not necessary}",
          "explanation": "Being a rhombus guarantees perpendicular diagonals, so it is sufficient; but perpendicular diagonals can occur without a rhombus (the kite), so it is not necessary.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Rightarrow Q$ only. A rhombus always has perpendicular diagonals, but a kite has perpendicular diagonals without being a rhombus, so the converse is false. Being a rhombus is therefore a sufficient but not a necessary condition for having perpendicular diagonals."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "contrapositive",
      "counterexample",
      "divisibility"
    ],
    "questionText": "For integers $n$, consider the true implication '$n$ is a multiple of $4 \\Rightarrow n$ is even'. Write down its converse and its contrapositive. For each of these two new statements, state whether it is true or false, justifying your decision with a proof or a counterexample.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Label the parts of the original implication.",
          "workingLatex": "P:\\ 4 \\mid n, \\quad Q:\\ n \\text{ even}, \\quad \\text{original } P \\Rightarrow Q",
          "explanation": "Labelling the hypothesis and conclusion lets us build the converse and contrapositive mechanically. The original is given as true, but that alone settles neither new statement.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Confirm the original implication is true.",
          "workingLatex": "n=4k=2(2k) \\Rightarrow n \\text{ even}, \\ \\text{ so } P \\Rightarrow Q \\ \\text{ true}",
          "explanation": "A multiple of 4 contains a factor of 2, so it is automatically even. Confirming this gives a firm anchor, since the contrapositive will share its truth value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall how the converse and contrapositive are formed.",
          "workingLatex": "\\text{converse: } Q \\Rightarrow P, \\qquad \\text{contrapositive: } \\lnot Q \\Rightarrow \\lnot P",
          "explanation": "The converse swaps the two parts; the contrapositive swaps and negates them. These are different constructions and in general behave differently.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the converse.",
          "workingLatex": "Q \\Rightarrow P:\\ n \\text{ even} \\Rightarrow 4 \\mid n",
          "explanation": "Reversing the arrow claims that evenness alone forces divisibility by 4. We must test whether that stronger claim actually holds.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Give a counterexample to the converse.",
          "workingLatex": "n=6:\\ 6 \\text{ even}, \\ \\text{ but } 6 = 4k \\text{ has no integer solution}",
          "explanation": "Six is even yet not a multiple of 4, so it satisfies $Q$ but not $P$. A single counterexample is enough to prove the converse false.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the truth of the converse.",
          "workingLatex": "Q \\Rightarrow P \\ \\text{ is false}",
          "explanation": "Evenness does not guarantee divisibility by 4, because a number can carry exactly one factor of 2. The converse therefore fails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the contrapositive.",
          "workingLatex": "\\lnot Q \\Rightarrow \\lnot P:\\ n \\text{ odd} \\Rightarrow n \\text{ is not a multiple of } 4",
          "explanation": "Negating 'even' gives 'odd', and negating 'multiple of 4' gives 'not a multiple of 4'. This is the contrapositive of the original implication.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use logical equivalence to judge the contrapositive.",
          "workingLatex": "(\\lnot Q \\Rightarrow \\lnot P) \\equiv (P \\Rightarrow Q)",
          "explanation": "A statement and its contrapositive are logically equivalent, so they always have the same truth value. Since the original is true, the contrapositive is true too.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the contrapositive directly as a check.",
          "workingLatex": "n \\text{ odd} \\Rightarrow n \\neq 2m; \\ \\text{ but } 4k=2(2k) \\text{ even}, \\ \\text{ so } n \\neq 4k",
          "explanation": "Directly, an odd number cannot equal a multiple of 4 because every multiple of 4 is even. This confirms the contrapositive on its own terms as well.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Summarise the three truth values.",
          "workingLatex": "\\text{original: true}, \\quad \\text{converse: false}, \\quad \\text{contrapositive: true}",
          "explanation": "The converse can differ in truth from the original, while the contrapositive must match it. That is exactly the pattern we found here.",
          "diagram": null
        }
      ],
      "finalAnswer": "Converse '$n$ even $\\Rightarrow 4 \\mid n$' is false (counterexample $n=6$). Contrapositive '$n$ odd $\\Rightarrow n$ is not a multiple of $4$' is true, being logically equivalent to the true original."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "proof",
    "tags": [
      "logic",
      "quantifiers",
      "set notation",
      "proof",
      "rational numbers"
    ],
    "questionText": "Prove that the sum of any two rational numbers is rational, beginning from the definition of a rational number. Explain also why this result is a universally quantified ($\\forall$) statement, and write the claim itself using quantifier and set notation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the claim using quantifier and set notation.",
          "workingLatex": "\\forall x, y \\in \\mathbb{Q}, \\ x + y \\in \\mathbb{Q}",
          "explanation": "The word 'any' signals that the claim ranges over every pair of rationals, which is exactly what $\\forall$ (for all) records. Stating it symbolically fixes precisely what must be proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of a rational number.",
          "workingLatex": "r \\in \\mathbb{Q} \\iff r = \\tfrac{p}{q}, \\ p \\in \\mathbb{Z}, \\ q \\in \\mathbb{Z}, \\ q \\neq 0",
          "explanation": "A rational number is a ratio of two integers with nonzero denominator. Starting from this definition means every later step rests on solid ground rather than intuition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Represent two arbitrary rational numbers.",
          "workingLatex": "x = \\tfrac{a}{b}, \\quad y = \\tfrac{c}{d}, \\qquad a,b,c,d \\in \\mathbb{Z}, \\ b,d \\neq 0",
          "explanation": "We assume nothing about $x$ and $y$ beyond being rational, so whatever we prove will apply to every rational. Using letters rather than specific numbers is what makes the argument universal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two fractions over a common denominator.",
          "workingLatex": "x + y = \\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}",
          "explanation": "Putting the fractions over the common denominator $bd$ combines them into a single ratio. Now we just need to check that this ratio fits the definition of rational.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Show the numerator is an integer.",
          "workingLatex": "a,b,c,d \\in \\mathbb{Z} \\Rightarrow ad + bc \\in \\mathbb{Z}",
          "explanation": "Integers are closed under multiplication and addition, so $ad+bc$ is again an integer. The numerator therefore causes no problem.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Show the denominator is a nonzero integer.",
          "workingLatex": "b,d \\in \\mathbb{Z}, \\ b,d \\neq 0 \\Rightarrow bd \\in \\mathbb{Z}, \\ bd \\neq 0",
          "explanation": "The product of two integers is an integer, and a product of nonzero numbers is nonzero. So the denominator $bd$ is a valid, nonzero integer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Match the sum to the definition of rational.",
          "workingLatex": "x+y = \\frac{ad+bc}{bd} = \\frac{\\text{integer}}{\\text{nonzero integer}}",
          "explanation": "The sum is an integer divided by a nonzero integer, which is precisely the form required for a rational number. Every condition of the definition is met.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the sum is rational.",
          "workingLatex": "x + y \\in \\mathbb{Q}",
          "explanation": "Since the sum matches the definition, it is rational. The proof is complete for the two numbers we selected.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why the statement is universally quantified.",
          "workingLatex": "\\text{general } a,b,c,d \\Rightarrow \\text{result holds } \\forall x,y \\in \\mathbb{Q}",
          "explanation": "Because we never used any special feature of $x$ and $y$, the same reasoning works for every pair of rationals, so the result is 'for all', not merely 'there exists'. An $\\exists$ claim would need only one example, but here we have covered all cases at once.",
          "diagram": null
        }
      ],
      "finalAnswer": "Writing $x=\\tfrac{a}{b}$, $y=\\tfrac{c}{d}$ gives $x+y=\\tfrac{ad+bc}{bd}$, an integer over a nonzero integer, so $x+y \\in \\mathbb{Q}$. As the proof uses arbitrary rationals, it establishes the universal statement $\\forall x,y \\in \\mathbb{Q},\\ x+y \\in \\mathbb{Q}$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "domain",
      "trigonometry",
      "counterexample"
    ],
    "questionText": "Consider the statements $P:\\ \\cos\\theta = 1$ and $Q:\\ \\theta = 0$. (a) Working on the interval $[0, 2\\pi)$, classify $P$ as a necessary condition, a sufficient condition, both, or neither, for $Q$. (b) Discuss how your answer changes when $\\theta$ is allowed to range over all real numbers, $\\theta \\in \\mathbb{R}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two statements to be compared.",
          "workingLatex": "P:\\ \\cos\\theta = 1, \\qquad Q:\\ \\theta = 0",
          "explanation": "Necessary and sufficient are about the direction of implication, so we will test $P \\Rightarrow Q$ and $Q \\Rightarrow P$. The domain of $\\theta$ will turn out to matter, so we handle each domain in turn.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the necessary/sufficient framework.",
          "workingLatex": "P \\text{ sufficient for } Q \\iff P \\Rightarrow Q; \\quad P \\text{ necessary for } Q \\iff Q \\Rightarrow P",
          "explanation": "'Sufficient' means the condition is enough to force $Q$; 'necessary' means $Q$ cannot happen without it. Keeping these definitions in view stops the two ideas being confused.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "On the interval, test whether Q implies P.",
          "workingLatex": "\\theta = 0 \\Rightarrow \\cos 0 = 1 \\Rightarrow P",
          "explanation": "If $\\theta=0$ then its cosine is exactly 1, so $Q \\Rightarrow P$ holds. This makes $P$ a necessary condition for $Q$, and this direction does not depend on the domain at all.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "On the interval, solve cos theta = 1.",
          "workingLatex": "\\cos\\theta = 1, \\ \\theta \\in [0,2\\pi) \\Rightarrow \\theta = 0 \\ \\text{ (only solution)}",
          "explanation": "Over one period starting at 0, the cosine curve reaches its peak value 1 only at the very start, $\\theta=0$. So on this interval $P$ forces $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine both directions on the interval.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow \\ P \\Leftrightarrow Q \\ \\text{ on } [0,2\\pi)",
          "explanation": "Both implications hold on the interval, so $P$ is both necessary and sufficient for $Q$ there, and the two statements are equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Now widen the domain to all real numbers.",
          "workingLatex": "\\theta \\in \\mathbb{R}",
          "explanation": "Widening the domain adds many more angles, so we must recheck each direction. Extra solutions can break an implication that held on a smaller set.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve cos theta = 1 over all reals.",
          "workingLatex": "\\cos\\theta = 1 \\iff \\theta = 2\\pi k, \\ k \\in \\mathbb{Z}",
          "explanation": "Cosine is periodic with period $2\\pi$, so it returns to its maximum value 1 at every full turn. There are now infinitely many solutions, not just one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check that necessity still holds.",
          "workingLatex": "\\theta = 0 \\Rightarrow \\cos\\theta = 1, \\ \\text{ so } Q \\Rightarrow P \\ \\text{ still true}",
          "explanation": "The reverse direction never used the domain, so $\\theta=0$ still gives cosine 1. Thus $P$ remains a necessary condition for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show sufficiency fails with a counterexample.",
          "workingLatex": "\\theta = 2\\pi:\\ \\cos 2\\pi = 1 \\ (P \\text{ true}), \\ \\text{ but } \\theta \\neq 0 \\ (Q \\text{ false})",
          "explanation": "At $\\theta=2\\pi$ the cosine is 1 yet the angle is not 0, so $P$ holds while $Q$ fails. This single counterexample shows $P$ no longer suffices for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion for the wider domain.",
          "workingLatex": "\\text{over } \\mathbb{R}: \\ P \\text{ necessary but not sufficient for } Q",
          "explanation": "The forward arrow is broken while the backward arrow survives, so over all reals $P$ is necessary but not sufficient. The classification genuinely depends on the chosen domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "On $[0,2\\pi)$: $\\cos\\theta=1$ only at $\\theta=0$, so $P \\Leftrightarrow Q$ and $P$ is necessary and sufficient for $Q$. Over $\\mathbb{R}$: $\\cos\\theta=1$ at $\\theta=2\\pi k$, so $P$ is necessary but not sufficient (e.g. $\\theta=2\\pi$)."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "sufficient condition",
      "inequalities"
    ],
    "questionText": "Let $x$ and $y$ be real numbers, and consider the statements $P:\\ (x > 2 \\text{ and } y > 3)$ and $Q:\\ x + y > 5$. Determine which of $P$ and $Q$ implies the other. Hence state whether $P$ is a sufficient condition, a necessary condition, both, or neither, for $Q$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two conditions precisely.",
          "workingLatex": "P:\\ x > 2 \\ \\text{and}\\ y > 3, \\qquad Q:\\ x + y > 5",
          "explanation": "Comparing two statements starts with writing each one exactly as given. $P$ places a separate lower bound on each variable, while $Q$ only controls their sum, so they carry different information.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clarify what has to be checked.",
          "workingLatex": "P \\Rightarrow Q \\ ? \\qquad Q \\Rightarrow P \\ ?",
          "explanation": "Deciding which statement implies the other means testing each direction on its own. One direction can hold while the other fails, so we must not assume symmetry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Assume P to test the forward direction.",
          "workingLatex": "x > 2, \\qquad y > 3",
          "explanation": "To show $P \\Rightarrow Q$ we take $P$ as given and try to reach $Q$. Having both bounds available is the natural starting point.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two inequalities.",
          "workingLatex": "x + y > 2 + 3",
          "explanation": "Two inequalities pointing the same way can be added term by term. Adding the lower bounds gives a lower bound on the sum $x+y$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the forward implication holds.",
          "workingLatex": "x + y > 5 \\quad \\Rightarrow \\quad P \\Rightarrow Q \\ \\text{is true}",
          "explanation": "The bound simplifies to exactly $Q$. So whenever both variables clear their individual thresholds, their sum is forced above $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the reverse direction by seeking a counterexample.",
          "workingLatex": "\\text{Seek } x, y \\text{ with } x + y > 5 \\text{ but not } (x > 2 \\text{ and } y > 3)",
          "explanation": "To decide whether $Q \\Rightarrow P$, a single counterexample is enough to break it. We look for a large sum built without meeting both separate conditions.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose specific values.",
          "workingLatex": "x = 10, \\qquad y = 0",
          "explanation": "Letting one variable be large and the other small keeps the sum big while sacrificing one of the two bounds. This is a promising way to satisfy $Q$ but not $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check that Q holds for these values.",
          "workingLatex": "x + y = 10 + 0 = 10 > 5",
          "explanation": "The sum comfortably exceeds $5$, so these numbers do satisfy $Q$. That is required for a valid counterexample to the reverse direction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check that P fails for these values.",
          "workingLatex": "y = 0 \\not> 3 \\quad \\Rightarrow \\quad P \\ \\text{is false}",
          "explanation": "Although $x=10>2$, the second requirement $y>3$ fails because $y=0$. Since $P$ needs both parts, it is false here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the reverse implication fails.",
          "workingLatex": "Q \\not\\Rightarrow P",
          "explanation": "We found values making $Q$ true and $P$ false, so $Q$ does not guarantee $P$. This rules out the two-way arrow $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Translate into necessary / sufficient language.",
          "workingLatex": "P \\Rightarrow Q \\text{ only} \\quad \\Rightarrow \\quad P \\text{ sufficient, not necessary for } Q",
          "explanation": "Because $P$ guarantees $Q$, it is sufficient. Because $Q$ can hold without $P$ (as $x=10,\\ y=0$ showed), $P$ is not necessary. 'Sufficient' means enough; 'necessary' means required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Rightarrow Q$ but $Q \\not\\Rightarrow P$ (e.g. $x=10,\\ y=0$). So $P$ is a sufficient but not a necessary condition for $Q$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "negation",
      "set notation"
    ],
    "questionText": "Consider the statement $S:\\ \\exists\\, x \\in \\mathbb{R} \\text{ such that } x^2 + 1 = 0$. Determine whether $S$ is true or false over $\\mathbb{R}$. Contrast $S$ with the corresponding universal statement $T:\\ \\forall\\, x \\in \\mathbb{R},\\ x^2 + 1 = 0$, and write down the negation of $S$, stating whether that negation is true.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate the existential statement into words.",
          "workingLatex": "S:\\ \\text{there is at least one real } x \\text{ with } x^2 + 1 = 0",
          "explanation": "The symbol $\\exists$ claims that a suitable value exists somewhere in the stated set. Reading it in words makes clear we only need one witness for $S$ to be true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the key fact about squares of real numbers.",
          "workingLatex": "x^2 \\ge 0 \\quad \\text{for all } x \\in \\mathbb{R}",
          "explanation": "A real number squared can never be negative, since multiplying two numbers of the same sign gives a non-negative result. This bound is the engine that drives the whole question.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bound the left-hand side of the equation.",
          "workingLatex": "x^2 + 1 \\ge 0 + 1 = 1",
          "explanation": "Adding $1$ to something that is at least $0$ gives something at least $1$. So the expression $x^2+1$ is always positive for real inputs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude no real solution exists.",
          "workingLatex": "x^2 + 1 \\ge 1 > 0 \\quad \\Rightarrow \\quad x^2 + 1 \\neq 0",
          "explanation": "Since the expression is never less than $1$, it can never equal $0$. There is no real value that satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the truth value of S over the reals.",
          "workingLatex": "S \\text{ is false over } \\mathbb{R}",
          "explanation": "An existential statement is false precisely when no member of the set works. Because every real $x$ fails, $S$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note how the truth of S depends on the domain.",
          "workingLatex": "\\text{Over } \\mathbb{C}:\\ x = i \\Rightarrow i^2 + 1 = -1 + 1 = 0",
          "explanation": "The falsehood of $S$ is tied to the domain $\\mathbb{R}$; over the complex numbers a witness does exist. Stating the domain is therefore essential when giving a truth value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the corresponding universal statement T.",
          "workingLatex": "T:\\ \\forall\\, x \\in \\mathbb{R},\\ x^2 + 1 = 0",
          "explanation": "The universal statement $T$ claims the equation holds for every real number, a far stronger demand than $S$. One failing value is enough to make $T$ false.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test T with a single value.",
          "workingLatex": "x = 0:\\ 0^2 + 1 = 1 \\neq 0 \\quad \\Rightarrow \\quad T \\text{ is false}",
          "explanation": "Since $x=0$ already breaks the equation, the 'for all' claim collapses immediately. This highlights the contrast: $\\exists$ needs one success, whereas $\\forall$ is destroyed by one failure.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Recall the rule for negating an existential statement.",
          "workingLatex": "\\neg\\big(\\exists\\, x \\in \\mathbb{R},\\ P(x)\\big) \\equiv \\forall\\, x \\in \\mathbb{R},\\ \\neg P(x)",
          "explanation": "Negating 'there exists one that works' gives 'every one fails'. The quantifier flips from $\\exists$ to $\\forall$ and the inner statement is negated.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the negation of S.",
          "workingLatex": "\\neg S:\\ \\forall\\, x \\in \\mathbb{R},\\ x^2 + 1 \\neq 0",
          "explanation": "Applying the rule to $S$ replaces $\\exists$ with $\\forall$ and turns $=0$ into $\\neq 0$. This says the equation has no real solution at all.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the truth value of the negation and check consistency.",
          "workingLatex": "\\neg S \\text{ is true, since } x^2 + 1 \\ge 1 > 0",
          "explanation": "Step 4 already showed $x^2+1$ is never zero, so $\\neg S$ is true. This is exactly what we expect: a statement and its negation always have opposite truth values, and $S$ was false.",
          "diagram": null
        }
      ],
      "finalAnswer": "$S$ is false over $\\mathbb{R}$ (indeed $x^2+1 \\ge 1 > 0$). The universal statement $T$ is also false (e.g. $x=0$). The negation is $\\neg S:\\ \\forall\\, x \\in \\mathbb{R},\\ x^2 + 1 \\neq 0$, which is true."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "Pythagoras"
    ],
    "questionText": "A triangle has sides of length $a$, $b$ and $c$, where $c$ is the longest side. Consider the condition $P:\\ a^2 + b^2 = c^2$ and the statement $Q:\\ \\text{the triangle is right-angled}$. Determine whether $P$ is a necessary condition, a sufficient condition, both, or neither, for $Q$, justifying each direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the condition and the statement.",
          "workingLatex": "P:\\ a^2 + b^2 = c^2, \\qquad Q:\\ \\text{triangle is right-angled}",
          "explanation": "We label the two claims so we can track each direction of implication. Because $c$ is the longest side, any right angle must sit opposite $c$, i.e. $c$ would be the hypotenuse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of necessary and sufficient.",
          "workingLatex": "P \\text{ sufficient for } Q \\Leftrightarrow P \\Rightarrow Q; \\quad P \\text{ necessary for } Q \\Leftrightarrow Q \\Rightarrow P",
          "explanation": "A sufficient condition guarantees the outcome; a necessary condition is one the outcome cannot occur without. Checking both directions tells us which labels apply.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the necessary direction Q implies P (Pythagoras).",
          "workingLatex": "Q \\Rightarrow P:\\ \\text{right-angled with hypotenuse } c",
          "explanation": "We assume the triangle is right-angled and ask whether the relation must follow. This is exactly the situation Pythagoras' theorem describes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply Pythagoras' theorem.",
          "workingLatex": "\\text{right angle opposite } c \\ \\Rightarrow \\ a^2 + b^2 = c^2",
          "explanation": "In a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides. So a right angle forces the relation $P$ to hold.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude P is necessary for Q.",
          "workingLatex": "Q \\Rightarrow P \\quad \\Rightarrow \\quad P \\text{ is necessary for } Q",
          "explanation": "Since the triangle cannot be right-angled without satisfying the relation, $P$ is a requirement for $Q$. That is precisely what 'necessary' means.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the sufficient direction P implies Q (converse of Pythagoras).",
          "workingLatex": "P \\Rightarrow Q:\\ \\text{assume } a^2 + b^2 = c^2",
          "explanation": "Now we assume only the algebraic relation and ask whether a right angle is forced. This is the converse of Pythagoras, which needs its own justification rather than being assumed.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Introduce the cosine rule for the angle opposite c.",
          "workingLatex": "c^2 = a^2 + b^2 - 2ab\\cos C",
          "explanation": "The cosine rule relates the three sides to the angle $C$ opposite side $c$. It lets us convert the side relation into information about that angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the assumed relation.",
          "workingLatex": "a^2 + b^2 = a^2 + b^2 - 2ab\\cos C \\ \\Rightarrow \\ 2ab\\cos C = 0",
          "explanation": "Replacing $c^2$ by $a^2+b^2$ cancels those terms and isolates the cosine term. What remains must equal zero.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the angle C.",
          "workingLatex": "a, b > 0 \\ \\Rightarrow \\ \\cos C = 0 \\ \\Rightarrow \\ C = 90^\\circ",
          "explanation": "Side lengths are positive, so $2ab \\neq 0$ and the cosine itself must be zero. The only triangle angle with zero cosine is $90^\\circ$, so the triangle is right-angled: $P \\Rightarrow Q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine both directions.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\quad \\Rightarrow \\quad P \\Leftrightarrow Q",
          "explanation": "With each statement forcing the other, the two are logically equivalent. The single symbol $\\Leftrightarrow$ captures this two-way link.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final classification.",
          "workingLatex": "P \\text{ is necessary and sufficient for } Q",
          "explanation": "Equivalence means $P$ is both necessary (from Pythagoras) and sufficient (from its converse). So the side relation is exactly the condition for the triangle to be right-angled.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: the relation is necessary (Pythagoras' theorem) and sufficient (its converse). So $a^2+b^2=c^2$ is a necessary and sufficient condition for the triangle to be right-angled."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "modulus",
      "inequalities"
    ],
    "questionText": "For a real number $x$, consider the statements $P:\\ |x| < 3$ and $Q:\\ -3 < x < 3$. Determine the logical relationship between $P$ and $Q$, proving both directions carefully.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two statements and the goal.",
          "workingLatex": "P:\\ |x| < 3, \\qquad Q:\\ -3 < x < 3",
          "explanation": "We want the correct connective between $P$ and $Q$, which means proving each implies the other or finding a counterexample. Writing both out keeps the two directions distinct.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret the modulus intuitively.",
          "workingLatex": "|x| = \\text{distance from } x \\text{ to } 0",
          "explanation": "The modulus measures how far $x$ sits from zero on the number line. Saying that distance is less than $3$ should mean $x$ lies strictly between $-3$ and $3$, which is what we now prove.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Begin the forward direction by assuming P.",
          "workingLatex": "\\text{Assume } |x| < 3; \\ \\text{use the definition } |x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}",
          "explanation": "To prove $P \\Rightarrow Q$ we assume $|x|<3$ and split by the sign of $x$, because the modulus is defined piecewise. Handling each case removes the absolute-value symbol cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Forward direction, case x is non-negative.",
          "workingLatex": "x \\ge 0:\\ |x| = x < 3 \\ \\Rightarrow \\ 0 \\le x < 3",
          "explanation": "When $x \\ge 0$ the modulus is just $x$, so the assumption gives $x<3$. Combined with $x \\ge 0$ this sits inside the interval $(-3,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Forward direction, case x is negative.",
          "workingLatex": "x < 0:\\ |x| = -x < 3 \\ \\Rightarrow \\ x > -3 \\ \\Rightarrow \\ -3 < x < 0",
          "explanation": "When $x<0$ the modulus equals $-x$, so $-x<3$ rearranges to $x>-3$. Together with $x<0$ this again lies inside $(-3,3)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the cases for the forward direction.",
          "workingLatex": "\\text{both cases} \\ \\Rightarrow \\ -3 < x < 3, \\quad \\text{so } P \\Rightarrow Q",
          "explanation": "Every real $x$ falls into one of the two cases, and each led to $-3<x<3$. Hence $|x|<3$ always forces $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Begin the reverse direction by assuming Q.",
          "workingLatex": "\\text{Assume } -3 < x < 3",
          "explanation": "Now we prove $Q \\Rightarrow P$ by starting from the double inequality. We again split on the sign of $x$ to evaluate $|x|$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse direction, case x is non-negative.",
          "workingLatex": "x \\ge 0:\\ |x| = x < 3",
          "explanation": "For $x \\ge 0$ the right half of $Q$ already gives $x<3$, and $|x|=x$, so the modulus is below $3$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reverse direction, case x is negative.",
          "workingLatex": "x < 0:\\ x > -3 \\ \\Rightarrow \\ -x < 3 \\ \\Rightarrow \\ |x| = -x < 3",
          "explanation": "For $x<0$ the left half of $Q$ gives $x>-3$; multiplying by $-1$ flips it to $-x<3$. Since $|x|=-x$ here, the modulus is again below $3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the cases for the reverse direction.",
          "workingLatex": "\\text{both cases} \\ \\Rightarrow \\ |x| < 3, \\quad \\text{so } Q \\Rightarrow P",
          "explanation": "Both sign cases produced $|x|<3$, so the interval condition always forces $P$. The reverse implication is established.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine both directions into the final relationship.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\quad \\Rightarrow \\quad |x| < 3 \\Leftrightarrow -3 < x < 3",
          "explanation": "Since each statement implies the other, they are logically equivalent. This is exactly why $|x|<3$ is standard shorthand for $-3<x<3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: $|x| < 3$ if and only if $-3 < x < 3$. Both directions hold, so the statements are logically equivalent."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "divisibility",
      "counterexample"
    ],
    "questionText": "Let $n$ be an integer. Show that $12 \\mid n$ if and only if $3 \\mid n$ and $4 \\mid n$. Then explain why the analogous statement with the pair $2$ and $6$ fails, i.e. why $(2 \\mid n \\text{ and } 6 \\mid n)$ does not force $12 \\mid n$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the statements to be linked.",
          "workingLatex": "P:\\ 12 \\mid n, \\qquad Q:\\ 3 \\mid n \\ \\text{and}\\ 4 \\mid n",
          "explanation": "Proving an 'if and only if' means establishing both $P \\Rightarrow Q$ and $Q \\Rightarrow P$. Naming the two claims keeps the two halves of the argument organised.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Prove the forward direction P implies Q.",
          "workingLatex": "12 \\mid n \\ \\Rightarrow \\ n = 12k = 3(4k) = 4(3k)",
          "explanation": "If $n$ is a multiple of $12$ we can write $n=12k$ and regroup the factors. Seeing $n$ as $3$ times an integer and as $4$ times an integer shows both smaller divisibilities at once.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Conclude the forward direction.",
          "workingLatex": "3 \\mid n \\ \\text{and}\\ 4 \\mid n, \\quad \\text{so } P \\Rightarrow Q",
          "explanation": "Because $12$ already contains both a factor of $3$ and a factor of $4$, any multiple of $12$ inherits both. The forward implication is immediate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin the reverse direction Q implies P.",
          "workingLatex": "\\text{Assume } 3 \\mid n \\ \\text{and}\\ 4 \\mid n",
          "explanation": "The harder direction is to show the two separate divisibilities combine to give divisibility by $12$. We start from both facts and work towards $n=12t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use divisibility by 4 to write n explicitly.",
          "workingLatex": "4 \\mid n \\ \\Rightarrow \\ n = 4m \\ \\text{for some integer } m",
          "explanation": "Turning $4 \\mid n$ into the equation $n=4m$ gives us something algebraic to substitute into the other condition. This is the standard way to use a divisibility fact.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply divisibility by 3 together with coprimality.",
          "workingLatex": "3 \\mid 4m, \\ \\gcd(3,4) = 1 \\ \\Rightarrow \\ 3 \\mid m",
          "explanation": "Since $3$ divides $4m$ but shares no factor with $4$, it must divide the other factor $m$ (Euclid's lemma). Coprimality of $3$ and $4$ is the crucial ingredient here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce divisibility by 12 and finish the reverse direction.",
          "workingLatex": "m = 3t \\ \\Rightarrow \\ n = 4m = 12t \\ \\Rightarrow \\ 12 \\mid n",
          "explanation": "Writing $m=3t$ and substituting back gives $n=12t$, so $12 \\mid n$. This completes $Q \\Rightarrow P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the biconditional.",
          "workingLatex": "12 \\mid n \\ \\Leftrightarrow \\ (3 \\mid n \\ \\text{and}\\ 4 \\mid n)",
          "explanation": "Both directions hold, so the two conditions are equivalent. The equivalence works because $3$ and $4$ are coprime, giving $\\operatorname{lcm}(3,4)=12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the analogous statement with 2 and 6.",
          "workingLatex": "R:\\ 2 \\mid n \\ \\text{and}\\ 6 \\mid n; \\quad \\text{does } R \\Rightarrow 12 \\mid n?",
          "explanation": "We now test whether replacing the pair $3,4$ by $2,6$ still forces divisibility by $12$. A single counterexample would show it does not.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give a counterexample.",
          "workingLatex": "n = 6:\\ 2 \\mid 6 \\ \\text{and}\\ 6 \\mid 6, \\ \\text{but}\\ 12 \\nmid 6",
          "explanation": "The number $6$ is divisible by both $2$ and $6$, yet it is not divisible by $12$. So the condition $R$ holds while the conclusion fails.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Explain why the argument breaks down.",
          "workingLatex": "\\gcd(2,6) = 2 \\neq 1, \\quad \\operatorname{lcm}(2,6) = 6 \\neq 12",
          "explanation": "Here $2$ and $6$ share the factor $2$, so their least common multiple is only $6$, not their product $12$. The overlapping factor is double-counted, which is exactly why divisibility by both forces only divisibility by $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final conclusion.",
          "workingLatex": "12 \\mid n \\Leftrightarrow (3 \\mid n \\ \\text{and}\\ 4 \\mid n); \\quad (2 \\mid n \\ \\text{and}\\ 6 \\mid n) \\not\\Rightarrow 12 \\mid n",
          "explanation": "Splitting a divisor into two factors gives an equivalence only when those factors are coprime. With coprime $3$ and $4$ it works; with the non-coprime $2$ and $6$ it does not.",
          "diagram": null
        }
      ],
      "finalAnswer": "$12 \\mid n \\Leftrightarrow (3 \\mid n \\text{ and } 4 \\mid n)$, because $3$ and $4$ are coprime so $\\operatorname{lcm}(3,4)=12$. The pair $2,6$ fails: $n=6$ is divisible by $2$ and by $6$ but not by $12$, since $\\gcd(2,6)=2$ gives $\\operatorname{lcm}(2,6)=6$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "hypothesis and conclusion",
      "geometric series"
    ],
    "questionText": "Consider the conditional statement: 'If a geometric series has common ratio $r$ with $|r| < 1$, then the series converges.' Identify the hypothesis and the conclusion, and determine whether the converse is true, restricting attention to geometric series whose first term $a$ is non-zero.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the statement in explicit if-then form.",
          "workingLatex": "\\text{If } |r| < 1 \\ \\text{then the geometric series converges}",
          "explanation": "A conditional splits cleanly into the part assumed and the part claimed. Isolating the 'if' clause and the 'then' clause is the first step to naming them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the hypothesis and the conclusion.",
          "workingLatex": "\\text{Hypothesis } H:\\ |r| < 1; \\qquad \\text{Conclusion } C:\\ \\text{the series converges}",
          "explanation": "The hypothesis is the condition we are allowed to assume; the conclusion is what must follow. Labelling them makes the converse easy to write down later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that the original statement is a known true result.",
          "workingLatex": "|r| < 1 \\ \\Rightarrow \\ \\sum_{k=0}^{\\infty} a r^{k} = \\frac{a}{1 - r}",
          "explanation": "For $|r|<1$ the sum to infinity exists and equals $a/(1-r)$, so the forward statement $H \\Rightarrow C$ is true. This orients us before we probe the converse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the converse statement.",
          "workingLatex": "\\text{Converse}:\\ \\text{if the series converges then } |r| < 1",
          "explanation": "The converse swaps hypothesis and conclusion, so it now assumes convergence and claims $|r|<1$. Whether this new statement is true must be checked separately from the original.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall a general test for convergence.",
          "workingLatex": "\\sum u_n \\text{ converges} \\ \\Rightarrow \\ u_n \\to 0",
          "explanation": "A series can only converge if its terms shrink to zero; otherwise the running total never settles. This necessary condition is the tool for testing the converse.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the general term of the geometric series.",
          "workingLatex": "u_n = a r^{\\,n-1}, \\qquad |u_n| = |a|\\,|r|^{\\,n-1}",
          "explanation": "Each term is the previous one multiplied by $r$, giving $u_n=a r^{n-1}$. Taking magnitudes lets us track whether the terms decay.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show the terms do not vanish when the ratio is large.",
          "workingLatex": "|r| \\ge 1 \\ \\Rightarrow \\ |r|^{\\,n-1} \\ge 1 \\ \\Rightarrow \\ |u_n| \\ge |a| > 0",
          "explanation": "If $|r| \\ge 1$ then its powers never drop below $1$, so each term stays at least $|a|$ in size, which is positive because $a \\neq 0$. The terms cannot tend to zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce divergence, then take the contrapositive.",
          "workingLatex": "|r| \\ge 1 \\ \\Rightarrow \\ \\text{diverges} \\ \\Longleftrightarrow \\ \\text{converges} \\ \\Rightarrow \\ |r| < 1",
          "explanation": "Since terms not tending to zero forces divergence, any $|r| \\ge 1$ diverges. The contrapositive of this is exactly the converse: convergence forces $|r|<1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why the non-zero first term is needed.",
          "workingLatex": "a = 0 \\ \\Rightarrow \\ \\sum u_n = 0 \\ \\text{converges for every } r",
          "explanation": "If $a=0$ every term is zero, so the series converges no matter how large $r$ is, which would break the converse. Requiring $a \\neq 0$ is what makes the converse hold.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine the two directions.",
          "workingLatex": "\\text{within geometric series, } a \\neq 0:\\ \\text{converges} \\ \\Leftrightarrow \\ |r| < 1",
          "explanation": "The original gives $|r|<1 \\Rightarrow$ convergence and the converse gives convergence $\\Rightarrow |r|<1$. Together they upgrade the one-way statement to an equivalence in this setting.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer.",
          "workingLatex": "H:\\ |r| < 1, \\quad C:\\ \\text{converges}, \\quad \\text{converse true} \\ \\Rightarrow \\ H \\Leftrightarrow C",
          "explanation": "The hypothesis is $|r|<1$ and the conclusion is convergence; the converse is true for geometric series with $a \\neq 0$. So in this restricted setting the two conditions are equivalent.",
          "diagram": null
        }
      ],
      "finalAnswer": "Hypothesis: $|r| < 1$. Conclusion: the series converges. The converse is true for geometric series with $a \\neq 0$ (a convergent geometric series must have $|r|<1$, since $|r| \\ge 1$ keeps $|u_n| \\ge |a| > 0$). Hence in this setting convergence $\\Leftrightarrow |r| < 1$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "discriminant"
    ],
    "questionText": "For the quadratic equation $ax^2 + bx + c = 0$ with $a \\neq 0$ and real coefficients, classify the condition $b^2 - 4ac \\ge 0$ as necessary, sufficient, both, or neither, for the statement 'the equation has at least one real root'. Justify each direction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the condition and the statement.",
          "workingLatex": "P:\\ \\Delta = b^2 - 4ac \\ge 0, \\qquad Q:\\ ax^2 + bx + c = 0 \\text{ has a real root}",
          "explanation": "We label the discriminant condition $P$ and the existence of a real root $Q$. Classifying $P$ means checking whether $P \\Rightarrow Q$, whether $Q \\Rightarrow P$, or both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the meaning of necessary and sufficient.",
          "workingLatex": "P \\text{ sufficient} \\Leftrightarrow P \\Rightarrow Q; \\quad P \\text{ necessary} \\Leftrightarrow Q \\Rightarrow P",
          "explanation": "A sufficient condition guarantees real roots; a necessary one is unavoidable if real roots exist. We will settle each label by proving the corresponding implication.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose completing the square as the working tool.",
          "workingLatex": "a \\neq 0 \\ \\Rightarrow \\ \\text{divide by } a: \\ x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0",
          "explanation": "Because $a \\neq 0$ we may divide through by $a$, which lets us complete the square. This single manipulation will expose both implications at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Complete the square.",
          "workingLatex": "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}",
          "explanation": "Rewriting the equation as a perfect square equal to a constant isolates $x$ inside a square. The constant on the right is built directly from the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Relate the sign of the right-hand side to the discriminant.",
          "workingLatex": "4a^2 > 0 \\ \\Rightarrow \\ \\operatorname{sign}\\!\\left(\\frac{b^2 - 4ac}{4a^2}\\right) = \\operatorname{sign}(\\Delta)",
          "explanation": "The denominator $4a^2$ is strictly positive, so the right-hand side has the same sign as $\\Delta$. Whether that side is non-negative is therefore controlled entirely by $\\Delta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the key equivalence about real solutions.",
          "workingLatex": "\\left(x + \\tfrac{b}{2a}\\right)^2 \\ge 0 \\ \\text{for real } x \\ \\Rightarrow \\ \\text{real } x \\text{ exists} \\Leftrightarrow \\text{RHS} \\ge 0",
          "explanation": "A real square is never negative, so the equation can be satisfied by a real $x$ only when the right-hand side is non-negative. This links the existence of a real root to the sign of $\\Delta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prove the sufficient direction P implies Q.",
          "workingLatex": "\\Delta \\ge 0 \\ \\Rightarrow \\ x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{\\Delta}}{2|a|} \\ \\text{are real}",
          "explanation": "If $\\Delta \\ge 0$ then $\\sqrt{\\Delta}$ is real, so taking square roots produces genuine real values of $x$. Thus a non-negative discriminant guarantees at least one real root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the boundary and interior cases.",
          "workingLatex": "\\Delta = 0 \\ \\Rightarrow \\ \\text{one repeated root}; \\quad \\Delta > 0 \\ \\Rightarrow \\ \\text{two distinct roots}",
          "explanation": "When $\\Delta=0$ the two roots coincide, still giving 'at least one' real root, and when $\\Delta>0$ there are two. Either way $Q$ holds, so $P \\Rightarrow Q$ is confirmed and $P$ is sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Prove the necessary direction Q implies P.",
          "workingLatex": "\\text{real root } x_0 \\ \\Rightarrow \\ \\frac{\\Delta}{4a^2} = \\left(x_0 + \\tfrac{b}{2a}\\right)^2 \\ge 0 \\ \\Rightarrow \\ \\Delta \\ge 0",
          "explanation": "If a real root exists, substituting it makes the right-hand side equal to a real square, which is non-negative. Multiplying by the positive $4a^2$ forces $\\Delta \\ge 0$, so $Q \\Rightarrow P$ and $P$ is necessary.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine both directions.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\ \\Rightarrow \\ P \\Leftrightarrow Q",
          "explanation": "Each statement implies the other, so a non-negative discriminant and the existence of a real root are logically equivalent. The two-way arrow captures this.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final classification.",
          "workingLatex": "b^2 - 4ac \\ge 0 \\text{ is necessary and sufficient for a real root}",
          "explanation": "Equivalence means the discriminant condition is both necessary and sufficient. So $\\Delta \\ge 0$ is exactly the condition for the quadratic to have at least one real root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: $b^2 - 4ac \\ge 0$ is both necessary and sufficient for $ax^2+bx+c=0$ (with $a \\neq 0$) to have at least one real root."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "contrapositive",
      "parity",
      "proof"
    ],
    "questionText": "Let $m$ and $n$ be integers. Consider the statements $P:\\ mn$ is odd, and $Q:\\ m$ and $n$ are both odd. Determine which of the symbols $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ correctly connects $P$ and $Q$, proving each direction that you claim.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write each statement in algebraic form.",
          "workingLatex": "P:\\ mn \\text{ is odd}, \\qquad Q:\\ m \\text{ is odd and } n \\text{ is odd}",
          "explanation": "Before comparing two statements we pin down exactly what each one asserts. Translating 'odd' into algebra later lets us test the claims by calculation rather than by feeling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise that a biconditional needs two separate proofs.",
          "workingLatex": "P \\Leftrightarrow Q \\ \\text{ requires both } \\ Q \\Rightarrow P \\ \\text{ and } \\ P \\Rightarrow Q",
          "explanation": "The two-way symbol $\\Leftrightarrow$ is a pair of one-way claims bundled together, so we must establish each direction on its own. We prove the two arrows separately and only then combine them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Begin the reverse direction Q ⇒ P by writing both numbers as odd.",
          "workingLatex": "m = 2a+1, \\quad n = 2b+1 \\qquad (a, b \\in \\mathbb{Z})",
          "explanation": "Assume $Q$ is true and try to reach $P$. Every odd integer is one more than an even number, so the form $2a+1$ captures 'odd' exactly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the two odd numbers together.",
          "workingLatex": "mn = (2a+1)(2b+1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1",
          "explanation": "Expanding and then grouping every term except the final $1$ into a factor of $2$ shows the product has the shape 'even number plus one'. That shape is the definition of odd.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the reverse direction.",
          "workingLatex": "mn = 2k + 1 \\ \\Rightarrow\\ mn \\text{ is odd}, \\qquad \\text{so } Q \\Rightarrow P",
          "explanation": "Since $2ab+a+b$ is an integer, $mn$ is genuinely of the form $2k+1$. Two odd factors therefore always give an odd product, so $Q$ forces $P$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the forward direction P ⇒ Q using its contrapositive.",
          "workingLatex": "(P \\Rightarrow Q) \\ \\equiv\\ (\\neg Q \\Rightarrow \\neg P)",
          "explanation": "Proving $P\\Rightarrow Q$ directly is awkward, but a statement and its contrapositive are logically identical. It is far easier to assume a factor is even and watch the product become even.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the negation of Q.",
          "workingLatex": "\\neg Q:\\ m \\text{ is even} \\ \\text{ or } \\ n \\text{ is even}",
          "explanation": "The opposite of 'both are odd' is 'at least one is even'. Because the situation is symmetric in $m$ and $n$, we may assume without loss of generality that $m$ is the even one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the even factor to compute the product.",
          "workingLatex": "m = 2a \\ \\Rightarrow\\ mn = (2a)n = 2(an)",
          "explanation": "Writing the even factor as $2a$ pulls a factor of $2$ straight out of the product. A single even factor is enough to make the whole product even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the contrapositive.",
          "workingLatex": "mn = 2(an) \\ \\Rightarrow\\ mn \\text{ is even}, \\quad \\text{i.e. } \\neg P",
          "explanation": "Since $an$ is an integer, $mn$ is a multiple of $2$, so $P$ fails. We have shown $\\neg Q$ leads to $\\neg P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Recover the forward direction.",
          "workingLatex": "\\neg Q \\Rightarrow \\neg P \\ \\text{ gives } \\ P \\Rightarrow Q",
          "explanation": "Because a contrapositive is equivalent to the original implication, proving $\\neg Q\\Rightarrow\\neg P$ has proved $P\\Rightarrow Q$. So an odd product forces both factors to be odd.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine both directions to choose the symbol.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow\\ P \\Leftrightarrow Q",
          "explanation": "Each statement forces the other, which is precisely what the two-way arrow means. The correct connective is therefore $\\Leftrightarrow$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: the product $mn$ is odd if and only if $m$ and $n$ are both odd."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "converse",
      "fallacy",
      "counterexample"
    ],
    "questionText": "A student argues: \"If it rains, then the ground gets wet. The ground is wet, so it must have rained.\" Identify the logical error in this reasoning, naming the fallacy, and give a mathematical analogue of the same error using the statement $x^2 = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Introduce symbols for the two everyday statements.",
          "workingLatex": "R:\\ \\text{it rains}, \\qquad W:\\ \\text{the ground is wet}",
          "explanation": "Replacing the sentences with symbols strips away the story and exposes the pure logical shape of the argument. It is the shape, not the topic, that is either valid or invalid.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the premise that is given.",
          "workingLatex": "\\text{Premise: } R \\Rightarrow W",
          "explanation": "'If it rains, the ground gets wet' is a one-way implication: rain guarantees wetness. It says nothing on its own about what wetness guarantees.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write out the structure of the student's argument.",
          "workingLatex": "\\text{Given } R \\Rightarrow W \\ \\text{ and } \\ W, \\ \\text{ they conclude } R",
          "explanation": "The argument starts from the implication and the fact that the ground is wet, then leaps to the cause. Laying it out this way lets us check whether the conclusion really follows.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compare with the valid pattern (modus ponens).",
          "workingLatex": "\\text{Valid: } \\ R \\Rightarrow W, \\ R \\ \\therefore\\ W",
          "explanation": "The genuinely valid move is to affirm the first part $R$ and deduce the second part $W$. Here $R$ is exactly what we are trying to prove, so this valid route is not available.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the invalid pattern actually used.",
          "workingLatex": "\\text{Used: } \\ R \\Rightarrow W, \\ W \\ \\therefore\\ R \\quad (\\text{invalid})",
          "explanation": "The student affirms the second part $W$ and concludes the first part $R$. This reversal is the classic error known as affirming the consequent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain what the argument secretly assumes.",
          "workingLatex": "\\text{It silently uses the converse } \\ W \\Rightarrow R",
          "explanation": "To get from $W$ back to $R$ you would need the converse implication, but the converse is a different claim that was never given. Treating a statement and its converse as the same thing is the heart of the fallacy.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Show the converse can fail.",
          "workingLatex": "\\text{A sprinkler makes } W \\text{ true while } R \\text{ is false}",
          "explanation": "Any other cause of a wet ground breaks the converse, so wetness does not pin down rain as the cause. A single such situation is enough to show the reasoning is unsound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the mathematical analogue.",
          "workingLatex": "P:\\ x = 3, \\qquad Q:\\ x^2 = 9, \\qquad P \\Rightarrow Q",
          "explanation": "Here $x=3$ genuinely forces $x^2=9$, mirroring 'rain forces wetness'. We now watch a student make the same reversed leap in a purely mathematical setting.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the flawed mathematical reasoning.",
          "workingLatex": "\\text{Flaw: from } x^2 = 9 \\ \\text{ conclude } \\ x = 3",
          "explanation": "This affirms the consequent $Q$ and jumps to $P$, exactly as the wet-ground argument did. It quietly assumes the converse $x^2=9\\Rightarrow x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give the counterexample.",
          "workingLatex": "x = -3:\\ (-3)^2 = 9 \\ \\text{ but } \\ x \\neq 3",
          "explanation": "The value $-3$ satisfies $x^2=9$ yet is not $3$, so the converse is false. This is the mathematical twin of the sprinkler that wets the ground without rain.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the correct implication.",
          "workingLatex": "x^2 = 9 \\ \\Rightarrow\\ x = 3 \\ \\text{ or } \\ x = -3",
          "explanation": "The honest conclusion keeps both roots joined by 'or', because $x^2=9$ narrows $x$ down only to that pair. Dropping the second possibility is what created the fallacy.",
          "diagram": null
        }
      ],
      "finalAnswer": "The error is the fallacy of affirming the consequent (affirming the converse): from $R\\Rightarrow W$ and $W$ one cannot deduce $R$. The mathematical analogue is deducing $x=3$ from $x^2=9$; this fails because $x=-3$ also satisfies $x^2=9$, so $x^2=9\\Rightarrow x=3$ or $x=-3$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "contrapositive",
      "case analysis",
      "divisibility",
      "proof"
    ],
    "questionText": "Let $n$ be an integer. Determine whether the statement \"if $n^2$ is a multiple of $3$ then $n$ is a multiple of $3$\" is true or false. Justify your answer using the contrapositive together with a case analysis on the remainder of $n$ modulo $3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the implication to be tested.",
          "workingLatex": "P:\\ 3 \\mid n^2, \\qquad Q:\\ 3 \\mid n; \\qquad \\text{decide whether } P \\Rightarrow Q",
          "explanation": "We name the hypothesis and the conclusion so the target implication is unambiguous. The bar notation $3\\mid n$ simply means '$3$ divides $n$ exactly'.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the contrapositive as the line of attack.",
          "workingLatex": "\\text{Prove instead } \\ \\neg Q \\Rightarrow \\neg P",
          "explanation": "Starting from '$n^2$ is a multiple of $3$' gives us little to grip onto, whereas starting from '$n$ is not a multiple of $3$' lets us write $n$ down explicitly. The contrapositive turns a hard direction into an easy calculation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Justify that the contrapositive suffices.",
          "workingLatex": "(P \\Rightarrow Q) \\ \\equiv\\ (\\neg Q \\Rightarrow \\neg P)",
          "explanation": "An implication and its contrapositive are logically equivalent, so proving one proves the other. This is a standard and fully rigorous substitution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Express 'n is not a multiple of 3' as two cases.",
          "workingLatex": "\\neg Q:\\ n = 3k + 1 \\ \\text{ or } \\ n = 3k + 2 \\qquad (k \\in \\mathbb{Z})",
          "explanation": "Every integer leaves remainder $0$, $1$ or $2$ on division by $3$; ruling out remainder $0$ leaves exactly these two forms. Splitting into cases lets us handle each remainder completely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the first case.",
          "workingLatex": "n = 3k+1:\\ n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1",
          "explanation": "Expanding and grouping the multiples of $3$ together isolates a leftover $+1$. This makes the remainder of $n^2$ visible at a glance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the remainder in the first case.",
          "workingLatex": "n^2 = 3m + 1 \\ (m = 3k^2 + 2k) \\ \\Rightarrow\\ 3 \\nmid n^2",
          "explanation": "Since $m$ is an integer, $n^2$ is one more than a multiple of $3$, so it cannot itself be a multiple of $3$. The first case already gives $\\neg P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Square the second case.",
          "workingLatex": "n = 3k+2:\\ n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1",
          "explanation": "The same expand-and-group technique again peels off every multiple of $3$ and leaves a single $+1$. The stray $4$ contributes a $3$ and a $1$, keeping the pattern.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Read off the remainder in the second case.",
          "workingLatex": "n^2 = 3m + 1 \\ \\Rightarrow\\ 3 \\nmid n^2",
          "explanation": "Once more $n^2$ is one more than a multiple of $3$, so $3$ does not divide it. The second case also gives $\\neg P$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the cases to complete the contrapositive.",
          "workingLatex": "\\text{In both cases } 3 \\nmid n^2, \\ \\text{ i.e. } \\neg P \\text{ holds}",
          "explanation": "The two cases together cover every integer that is not a multiple of $3$, and each forces $n^2$ to miss being a multiple of $3$. So $\\neg Q$ always leads to $\\neg P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the original statement is true.",
          "workingLatex": "\\neg Q \\Rightarrow \\neg P \\ \\Rightarrow\\ P \\Rightarrow Q \\ \\text{ is true}",
          "explanation": "Because the contrapositive holds, the original implication holds too. If $n^2$ is a multiple of $3$, then $n$ must be a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note where the argument relies on 3 being prime.",
          "workingLatex": "\\text{Fails for } 4:\\ 2^2 = 4 \\ \\text{ is a multiple of } 4, \\ \\text{ but } 4 \\nmid 2",
          "explanation": "The clean split into non-zero remainders both giving $+1$ works because $3$ is prime. For a composite divisor such as $4$ the analogous claim breaks, which shows primality is genuinely doing the work here.",
          "diagram": null
        }
      ],
      "finalAnswer": "True. If $n$ is not a multiple of $3$ then $n=3k+1$ or $n=3k+2$, and in each case $n^2=3m+1$, which is not a multiple of $3$. By the contrapositive, $3\\mid n^2 \\Rightarrow 3\\mid n$ (the argument uses that $3$ is prime)."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "equivalence",
      "inequalities",
      "real numbers"
    ],
    "questionText": "For real numbers $x$ and $y$, determine the logical relationship between the statement $P:\\ x^2 + y^2 = 0$ and the statement $Q:\\ x = 0$ and $y = 0$. State which of $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ connects them, and prove your claim.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two statements and the domain.",
          "workingLatex": "P:\\ x^2 + y^2 = 0, \\qquad Q:\\ x = 0 \\text{ and } y = 0 \\qquad (x, y \\in \\mathbb{R})",
          "explanation": "We record both claims and, crucially, the fact that $x$ and $y$ are real. The domain will turn out to be exactly what makes the equivalence work.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that a connective claim must be tested in both directions.",
          "workingLatex": "\\text{Test } \\ Q \\Rightarrow P \\ \\text{ and } \\ P \\Rightarrow Q",
          "explanation": "To decide between the one-way arrows and the two-way arrow we check each direction independently. Only if both hold may we write $\\Leftrightarrow$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Prove the easy direction Q ⇒ P.",
          "workingLatex": "x = 0, \\ y = 0 \\ \\Rightarrow\\ x^2 + y^2 = 0 + 0 = 0",
          "explanation": "If both variables are zero, substituting straight in gives a sum of zero. This direction is immediate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the reverse direction.",
          "workingLatex": "Q \\Rightarrow P \\ \\text{ holds}",
          "explanation": "So the harder question is whether the equation can force both variables to vanish. We now attack $P\\Rightarrow Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the key fact about real squares.",
          "workingLatex": "x^2 \\ge 0 \\ \\text{ and } \\ y^2 \\ge 0 \\quad \\text{for all } x, y \\in \\mathbb{R}",
          "explanation": "Squaring any real number can never produce a negative result, so both terms sit at or above zero. This non-negativity is the engine of the whole proof.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why the sum cannot hide cancellation.",
          "workingLatex": "\\text{two quantities} \\ge 0 \\ \\text{ summing to } 0 \\ \\Rightarrow\\ \\text{each is } 0",
          "explanation": "If neither term is negative, one cannot cancel the other; the only way their total reaches zero is for both to be zero. A single positive term would push the sum strictly above zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply this to the equation.",
          "workingLatex": "x^2 + y^2 = 0, \\ x^2 \\ge 0, \\ y^2 \\ge 0 \\ \\Rightarrow\\ x^2 = 0 \\ \\text{ and } \\ y^2 = 0",
          "explanation": "Combining the equation with the two inequalities pins each square to zero. There is no other option consistent with all three facts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Deduce the values of x and y.",
          "workingLatex": "x^2 = 0 \\Rightarrow x = 0, \\qquad y^2 = 0 \\Rightarrow y = 0",
          "explanation": "The only real number whose square is zero is zero itself, so each variable must vanish. This gives exactly the statement $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Record the forward direction.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ holds}",
          "explanation": "The equation really does force both variables to be zero. So the forward implication is established.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine both directions.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{ and } \\ Q \\Rightarrow P \\ \\Rightarrow\\ P \\Leftrightarrow Q",
          "explanation": "Each statement implies the other, so they are logically equivalent and the correct symbol is $\\Leftrightarrow$. The two conditions describe the very same situation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Highlight the reliance on the real domain.",
          "workingLatex": "\\text{Over } \\mathbb{C}: \\ x = 1, \\ y = i \\ \\Rightarrow\\ x^2 + y^2 = 1 + (-1) = 0, \\ \\text{ yet } Q \\text{ is false}",
          "explanation": "If complex values were allowed, a square could be negative and the equivalence would collapse. The non-negativity of squares, and hence the whole result, depends on staying within the real numbers.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: for real $x$ and $y$, $x^2 + y^2 = 0$ if and only if $x = 0$ and $y = 0$, because a sum of non-negative squares is zero only when each square is zero."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "geometry",
      "counterexample"
    ],
    "questionText": "Consider the condition $P:$ a quadrilateral has four equal sides, and the property $Q:$ the quadrilateral is a square. Classify $P$ as necessary, sufficient, both, or neither, as a condition for $Q$, justifying each part of your classification.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the condition and the property.",
          "workingLatex": "P:\\ \\text{quadrilateral has four equal sides}, \\qquad Q:\\ \\text{it is a square}",
          "explanation": "Fixing the labels keeps the two ideas from blurring together as we test them. We are asked how $P$ relates to $Q$, not the reverse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the precise meaning of the two words.",
          "workingLatex": "P \\text{ sufficient for } Q \\iff P \\Rightarrow Q; \\qquad P \\text{ necessary for } Q \\iff Q \\Rightarrow P",
          "explanation": "'Sufficient' means the condition is enough to guarantee the property, an arrow from $P$ to $Q$. 'Necessary' means the property cannot hold without the condition, an arrow from $Q$ back to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Frame the two tests intuitively.",
          "workingLatex": "\\text{sufficient} \\leftrightarrow \\text{'enough'}, \\qquad \\text{necessary} \\leftrightarrow \\text{'required'}",
          "explanation": "Thinking of the words as 'enough' and 'required' makes the two directions concrete. We now check each one against the geometry.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test sufficiency by hunting for a counterexample.",
          "workingLatex": "\\text{Is } P \\Rightarrow Q? \\ \\text{ Seek four equal sides without being a square}",
          "explanation": "To check whether four equal sides is enough, we look for a shape that has them yet fails to be a square. One counterexample would settle the sufficiency question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Provide a rhombus as the counterexample.",
          "workingLatex": "\\text{Rhombus with angles } 60^\\circ, 120^\\circ:\\ \\text{four equal sides, not a square}",
          "explanation": "A tilted rhombus has all four sides equal but its angles are not right angles, so it is not a square. This exhibits $P$ true while $Q$ is false.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude that P is not sufficient.",
          "workingLatex": "P \\not\\Rightarrow Q",
          "explanation": "Because a shape can satisfy $P$ without satisfying $Q$, the condition is not enough on its own. So $P$ is not sufficient for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test necessity by checking Q ⇒ P.",
          "workingLatex": "\\text{Is } Q \\Rightarrow P? \\ \\text{ Every square has four equal sides}",
          "explanation": "Now we ask whether a square must have four equal sides. This follows straight from the definition of a square.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude that P is necessary.",
          "workingLatex": "Q \\Rightarrow P \\ \\text{ is true}",
          "explanation": "Since being a square forces the four equal sides, the property cannot hold without the condition. So $P$ is necessary for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify what extra condition sufficiency would need.",
          "workingLatex": "\\text{square} = \\text{four equal sides} + \\text{four right angles}",
          "explanation": "A square requires equal angles as well as equal sides, and the rhombus is precisely the case where the angle condition is missing. This shows exactly why $P$ falls short of sufficiency.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final classification.",
          "workingLatex": "P \\text{ is necessary but not sufficient for } Q",
          "explanation": "The property demands the condition ($Q\\Rightarrow P$) but the condition does not deliver the property ($P\\not\\Rightarrow Q$). Four equal sides is required for a square, yet not enough to make one.",
          "diagram": null
        }
      ],
      "finalAnswer": "Having four equal sides is a necessary but not sufficient condition for being a square: every square has four equal sides ($Q\\Rightarrow P$), but a non-square rhombus also has four equal sides, so $P\\not\\Rightarrow Q$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "set notation",
      "interval notation",
      "inequalities",
      "disjunction"
    ],
    "questionText": "Solve the inequality $x^2 - x - 6 > 0$ for real $x$, and express the solution set in both set-builder and interval notation. Explain the role played by the logical connective 'or' in your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the quadratic.",
          "workingLatex": "x^2 - x - 6 = (x - 3)(x + 2)",
          "explanation": "We look for two numbers multiplying to $-6$ and adding to $-1$, namely $-3$ and $+2$. Factorising turns a quadratic inequality into a statement about the sign of a product.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the critical values.",
          "workingLatex": "(x - 3)(x + 2) = 0 \\ \\Rightarrow\\ x = 3, \\ x = -2",
          "explanation": "The product changes sign only where a factor is zero, so these two points split the number line into regions. They are the boundaries we must test around.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State when a product of two numbers is positive.",
          "workingLatex": "(x - 3)(x + 2) > 0 \\iff \\text{both factors positive, or both negative}",
          "explanation": "A product is positive exactly when its two factors share the same sign. This naturally breaks the problem into two cases to examine.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the 'both positive' case.",
          "workingLatex": "x - 3 > 0 \\text{ and } x + 2 > 0 \\ \\Rightarrow\\ x > 3 \\text{ and } x > -2 \\ \\Rightarrow\\ x > 3",
          "explanation": "For both factors to be positive, $x$ must exceed both roots at once, and the tighter requirement $x>3$ wins. The connective here is 'and', so we keep only the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the 'both negative' case.",
          "workingLatex": "x - 3 < 0 \\text{ and } x + 2 < 0 \\ \\Rightarrow\\ x < 3 \\text{ and } x < -2 \\ \\Rightarrow\\ x < -2",
          "explanation": "For both factors to be negative, $x$ must lie below both roots, and the tighter requirement $x<-2$ wins. Again 'and' inside the case forces the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the two cases with 'or'.",
          "workingLatex": "x < -2 \\ \\text{ or } \\ x > 3",
          "explanation": "Either case, on its own, makes the product positive, so a value solves the inequality if it satisfies one region or the other. The 'or' joins the two separate solution pieces rather than intersecting them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm with the shape of the parabola.",
          "workingLatex": "y = x^2 - x - 6 \\ \\text{ opens upward}, \\ > 0 \\ \\text{ outside the roots}",
          "explanation": "An upward parabola sits above the axis on the two outer arms and dips below between its roots. This matches the two-piece 'outside the roots' answer we found algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the solution in set-builder notation.",
          "workingLatex": "\\{ x \\in \\mathbb{R} : x < -2 \\} \\ \\cup \\ \\{ x \\in \\mathbb{R} : x > 3 \\}",
          "explanation": "Each region becomes a set of real numbers satisfying one inequality. The union symbol $\\cup$ is the set-theoretic form of the word 'or'.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why union captures 'or'.",
          "workingLatex": "x \\in A \\cup B \\iff x \\in A \\ \\text{ or } \\ x \\in B",
          "explanation": "Belonging to a union means belonging to at least one of the sets, which is exactly what 'or' asserts. The logical connective and the set operation are two views of the same idea.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the solution in interval notation.",
          "workingLatex": "(-\\infty, -2) \\ \\cup \\ (3, \\infty)",
          "explanation": "Each strict inequality becomes an open interval, and the union joins them. Open brackets exclude the endpoints because the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Contrast with what 'and' would give.",
          "workingLatex": "\\{ x < -2 \\} \\cap \\{ x > 3 \\} = \\varnothing",
          "explanation": "Replacing 'or' with 'and' would demand a number below $-2$ and above $3$ simultaneously, which is impossible. This is why the correct connective for combining the two cases is 'or', not 'and'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x < -2$ or $x > 3$; in set-builder notation $\\{ x \\in \\mathbb{R} : x < -2 \\} \\cup \\{ x \\in \\mathbb{R} : x > 3 \\}$, and in interval notation $(-\\infty, -2) \\cup (3, \\infty)$. The 'or' means the solution is the union of the two regions, since a value need satisfy only one of them."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "existence",
      "counterexample",
      "functions"
    ],
    "questionText": "The function $f$ is defined by $f(x) = x^2$ for all $x \\in \\mathbb{R}$. Show that $f$ is not one-to-one (not injective) on $\\mathbb{R}$ by producing an existence ($\\exists$) counterexample to the definition of injectivity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the definition of a one-to-one function.",
          "workingLatex": "f \\text{ injective}:\\ \\forall a, b \\in \\mathbb{R}, \\ f(a) = f(b) \\Rightarrow a = b",
          "explanation": "A one-to-one function never sends two different inputs to the same output. The definition is a universal ($\\forall$) statement, which shapes how we must disprove it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the negation of injectivity.",
          "workingLatex": "\\neg(\\text{injective}):\\ \\exists\\, a, b \\in \\mathbb{R} \\ \\text{ with } \\ a \\neq b \\ \\text{ and } \\ f(a) = f(b)",
          "explanation": "Negating a 'for all' statement produces a 'there exists' statement. To show the function is not injective we only need one pair of distinct inputs sharing an output.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain why a single example is enough.",
          "workingLatex": "\\text{one witnessing pair } (a, b) \\ \\Rightarrow\\ \\neg(\\text{injective})",
          "explanation": "An existence claim is proved the instant we exhibit one object that works, so no general argument is needed. This is the cheapest way to defeat a universal statement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose a strategy for finding the pair.",
          "workingLatex": "\\text{squaring erases sign: } (-c)^2 = c^2",
          "explanation": "Because squaring a number and its negative give the same result, any nonzero value and its negative make natural candidates. This tells us where to look for a collision.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Select specific values.",
          "workingLatex": "a = -1, \\quad b = 1, \\qquad a \\neq b",
          "explanation": "We pick the simplest such pair, $-1$ and $1$, which are clearly different real numbers. Keeping the numbers small makes the check transparent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the function at both inputs.",
          "workingLatex": "f(-1) = (-1)^2 = 1, \\qquad f(1) = 1^2 = 1",
          "explanation": "Substituting each value into $f(x)=x^2$ gives the same output of $1$. The two distinct inputs land on a single point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Record the collision explicitly.",
          "workingLatex": "f(-1) = f(1) = 1 \\ \\text{ while } \\ -1 \\neq 1",
          "explanation": "We have equal outputs from unequal inputs, which is precisely the situation injectivity forbids. This is the heart of the counterexample.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Match the example to the existence statement.",
          "workingLatex": "\\exists\\, a \\neq b \\ \\text{ with } \\ f(a) = f(b) \\ \\checkmark",
          "explanation": "The pair $(-1, 1)$ satisfies every part of the negated definition. So the existence statement that contradicts injectivity is now established.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion.",
          "workingLatex": "f(x) = x^2 \\ \\text{ is not one-to-one on } \\mathbb{R}",
          "explanation": "Having produced a valid witnessing pair, we have proved $f$ is not injective on the reals. A single counterexample is a complete proof of the negation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the role of the domain.",
          "workingLatex": "\\text{Restricted to } [0, \\infty), \\ f \\ \\text{ would be one-to-one}",
          "explanation": "The failure came entirely from allowing negative inputs alongside positive ones. Shrinking the domain to remove the negatives would repair injectivity, which shows the domain is essential to the claim.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f$ is not one-to-one on $\\mathbb{R}$: there exist $a \\neq b$ with $f(a) = f(b)$, for example $f(-1) = f(1) = 1$ while $-1 \\neq 1$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "necessary and sufficient",
      "parity",
      "counterexample"
    ],
    "questionText": "Let $a$ and $b$ be integers. Let $P$ be the statement \"$a$ and $b$ are both even\" and let $Q$ be the statement \"$a+b$ is even\". Determine, with full justification, whether $P$ is a sufficient condition for $Q$, a necessary condition for $Q$, both, or neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the two statements in algebraic form.",
          "workingLatex": "P:\\ a = 2m,\\ b = 2n\\ \\text{for integers } m,n \\qquad Q:\\ a+b = 2t\\ \\text{for some integer } t",
          "explanation": "Turning the words 'even' into the algebra $2m$ gives us something we can compute with. Fixing exactly what $P$ and $Q$ claim is the first move before we can test how they are related.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what sufficient and necessary mean here.",
          "workingLatex": "\\text{sufficient}:\\ P \\Rightarrow Q, \\qquad \\text{necessary}:\\ Q \\Rightarrow P",
          "explanation": "$P$ is sufficient for $Q$ if having $P$ guarantees $Q$, and $P$ is necessary for $Q$ if $Q$ cannot hold without $P$. These are opposite directions, so we must test each implication separately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "a + b = 2m + 2n = 2(m+n)",
          "explanation": "Assume $P$ is true, so both numbers are even. Adding them and factoring out a $2$ shows the sum is twice an integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclude the forward direction holds, so P is sufficient.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true} \\;\\Rightarrow\\; P \\text{ is sufficient for } Q",
          "explanation": "Because $m+n$ is an integer, $a+b$ is even whenever both $a$ and $b$ are even. So $P$ on its own is enough to force $Q$, which is exactly what 'sufficient' means.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the reverse direction Q ⇒ P by looking for a counterexample.",
          "workingLatex": "\\text{try } a = 1,\\ b = 3",
          "explanation": "To see whether $Q$ forces $P$, we hunt for a case where the sum is even but the two numbers are not both even. Two odd numbers are a natural place to look, since odd plus odd cancels the leftover units.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the counterexample satisfies Q but not P.",
          "workingLatex": "a + b = 1 + 3 = 4 = 2\\times 2\\ (\\text{even}), \\quad \\text{but } 1,3 \\text{ are odd}",
          "explanation": "Here the sum $4$ is even, so $Q$ holds, yet neither $1$ nor $3$ is even, so $P$ fails. A single valid counterexample is enough to break an implication.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain the general reason the reverse fails.",
          "workingLatex": "\\text{odd} + \\text{odd} = \\text{even}",
          "explanation": "The counterexample is not a fluke: any two odd numbers add to an even number, because their leftover units of $1$ combine to make $2$. So evenness of the sum can occur without either number being even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the reverse direction fails, so P is not necessary.",
          "workingLatex": "Q \\not\\Rightarrow P \\;\\Rightarrow\\; P \\text{ is not necessary for } Q",
          "explanation": "Since $Q$ can be true while $P$ is false, $Q$ does not require $P$. Hence both numbers being even is not a necessary condition for the sum being even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\Rightarrow Q,\\ Q \\not\\Rightarrow P \\;\\Rightarrow\\; P \\text{ sufficient but not necessary for } Q",
          "explanation": "Only the forward implication holds, so being both even guarantees an even sum but is not required for one. In short, $P$ is sufficient but not necessary for $Q$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ is a sufficient but not a necessary condition for $Q$. Forward: $a=2m,\\ b=2n \\Rightarrow a+b = 2(m+n)$ is even, so $P \\Rightarrow Q$. Reverse fails: $a=1,\\ b=3$ give $a+b=4$ (even) while neither is even, so $Q \\not\\Rightarrow P$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "quantifiers",
      "proof",
      "parity",
      "set notation"
    ],
    "questionText": "Consider the claim that the product of any two consecutive integers is even. Express this claim symbolically using a universal quantifier, explain why it is a single universally quantified statement rather than an implication with a separate hypothesis, and then prove it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate the claim into symbols using a universal quantifier.",
          "workingLatex": "\\forall n \\in \\mathbb{Z},\\ n(n+1)\\ \\text{is even}",
          "explanation": "Two consecutive integers can be written $n$ and $n+1$, so their product is $n(n+1)$. The words 'for any' become the symbol $\\forall$, and the domain $\\mathbb{Z}$ records that $n$ ranges over all integers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the logical shape of the statement.",
          "workingLatex": "\\forall n \\in \\mathbb{Z},\\ R(n) \\qquad \\text{not} \\qquad P(n) \\Rightarrow Q(n)",
          "explanation": "The only restriction on $n$ is that it is an integer, which the quantifier already carries as its domain. There is no separate hypothesis to assume, so this is a plain universally quantified statement, not an implication.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the key intuition behind the proof.",
          "workingLatex": "n,\\ n+1:\\ \\text{one is even, one is odd}",
          "explanation": "Consecutive integers alternate in parity, so exactly one of $n$ and $n+1$ is even. Multiplying anything by an even number gives an even result, which is why the product must be even.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up a proof by cases on the parity of n.",
          "workingLatex": "\\text{every } n \\in \\mathbb{Z}\\ \\text{is even or odd}",
          "explanation": "Every integer is either even or odd, so splitting into these two cases covers all possibilities for $n$. Proving the claim in each case therefore proves it for all integers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1: n is even.",
          "workingLatex": "n = 2k \\;\\Rightarrow\\; n(n+1) = 2k(n+1) = 2\\big[k(n+1)\\big]",
          "explanation": "If $n$ itself is even we write $n=2k$; the factor of $2$ passes straight into the product. Since $k(n+1)$ is an integer, the product is twice an integer and hence even.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Case 2: n is odd, so n+1 is even.",
          "workingLatex": "n = 2k+1 \\;\\Rightarrow\\; n+1 = 2k+2 = 2(k+1)",
          "explanation": "If $n$ is odd, then its successor $n+1$ is even, and we can factor a $2$ out of $n+1$ instead. This is the case where the even number is the second of the pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Complete Case 2 by factoring out the 2.",
          "workingLatex": "n(n+1) = n\\cdot 2(k+1) = 2\\big[n(k+1)\\big]",
          "explanation": "The even factor $2(k+1)$ makes the whole product a multiple of $2$. As $n(k+1)$ is an integer, the product is again even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the two cases.",
          "workingLatex": "\\text{even case} \\to \\text{even}, \\quad \\text{odd case} \\to \\text{even}",
          "explanation": "In both of the only two possibilities for $n$, the product $n(n+1)$ came out even. Since these cases exhaust the integers, no value of $n$ escapes the conclusion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the proved universally quantified statement.",
          "workingLatex": "\\forall n \\in \\mathbb{Z},\\ n(n+1)\\ \\text{is even} \\quad \\blacksquare",
          "explanation": "Because the argument held for an arbitrary integer split into its two possible parities, it holds for every integer. This confirms the original $\\forall$ statement, with the domain $\\mathbb{Z}$ as its only condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "The claim is $\\forall n \\in \\mathbb{Z},\\ n(n+1)\\text{ is even}$ — a universally quantified statement whose only condition is the domain $\\mathbb{Z}$, not a separate hypothesis. Proof by cases: if $n=2k$ then $n(n+1)=2[k(n+1)]$; if $n=2k+1$ then $n+1=2(k+1)$ so $n(n+1)=2[n(k+1)]$. Either way the product is even."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "equivalence",
      "coordinate geometry"
    ],
    "questionText": "Two lines in the plane are non-vertical, with gradients $m_1$ and $m_2$. Let $P$ be the statement \"$m_1 m_2 = -1$\" and let $Q$ be the statement \"the two lines are perpendicular\". Classify $P$ as a necessary condition, a sufficient condition, both, or neither, for $Q$, and state the correct connecting symbol.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two statements and note the domain restriction.",
          "workingLatex": "P:\\ m_1 m_2 = -1, \\qquad Q:\\ \\text{the lines are perpendicular} \\quad (\\text{both lines non-vertical})",
          "explanation": "The word 'non-vertical' guarantees both gradients $m_1$ and $m_2$ actually exist as real numbers. Fixing this domain first matters, because the gradient rule only makes sense when neither line is vertical.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall necessary, sufficient and the connecting symbols.",
          "workingLatex": "\\text{sufficient}:\\ P \\Rightarrow Q, \\quad \\text{necessary}:\\ Q \\Rightarrow P, \\quad \\text{both}:\\ P \\Leftrightarrow Q",
          "explanation": "If both implications hold then the two statements are logically equivalent and $P$ is both necessary and sufficient. So the plan is to test each direction and see whether we land on the two-way arrow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the intuition linking gradients and right angles.",
          "workingLatex": "m_2 = -\\frac{1}{m_1} \\;\\Leftrightarrow\\; m_1 m_2 = -1",
          "explanation": "Rotating a line by $90^\\circ$ turns a gradient into its negative reciprocal, which is precisely the relationship $m_1 m_2 = -1$. This geometric fact is what ties the algebra to perpendicularity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "m_1 m_2 = -1 \\;\\Rightarrow\\; m_2 = -\\tfrac{1}{m_1} \\;\\Rightarrow\\; \\text{lines are perpendicular}",
          "explanation": "Assume $P$. Then each gradient is the negative reciprocal of the other, so the two directions differ by a quarter turn and the lines meet at a right angle. Hence $P$ guarantees $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude P is sufficient.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true} \\;\\Rightarrow\\; P \\text{ is sufficient for } Q",
          "explanation": "Because the gradient product $-1$ forces the lines to be perpendicular, $P$ on its own is enough to secure $Q$. That is the definition of a sufficient condition.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the reverse direction Q ⇒ P.",
          "workingLatex": "\\text{perpendicular, non-vertical} \\;\\Rightarrow\\; m_2 = -\\tfrac{1}{m_1} \\;\\Rightarrow\\; m_1 m_2 = -1",
          "explanation": "Now assume $Q$: the two non-vertical lines meet at a right angle. The right angle forces each gradient to be the negative reciprocal of the other, and multiplying them gives $-1$. Hence $Q$ guarantees $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude P is necessary.",
          "workingLatex": "Q \\Rightarrow P \\text{ is true} \\;\\Rightarrow\\; P \\text{ is necessary for } Q",
          "explanation": "Since perpendicular non-vertical lines must have gradient product $-1$, the condition $P$ cannot be dispensed with when $Q$ holds. So $P$ is necessary for $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the non-vertical restriction is stated.",
          "workingLatex": "\\text{vertical} \\perp \\text{horizontal, yet gradient product undefined}",
          "explanation": "A vertical line paired with a horizontal one is perpendicular but has an undefined gradient, so the product $m_1 m_2 = -1$ cannot even be written. Restricting to non-vertical lines is exactly what keeps the equivalence clean.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\Leftrightarrow Q \\;\\Rightarrow\\; P \\text{ is both necessary and sufficient for } Q",
          "explanation": "Both directions hold, so the correct connective is the two-way arrow $\\Leftrightarrow$. For non-vertical lines, $m_1 m_2 = -1$ is both a necessary and a sufficient condition for perpendicularity.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P$ is both necessary and sufficient for $Q$, so $P \\Leftrightarrow Q$. For non-vertical lines, $m_1 m_2 = -1$ means each gradient is the negative reciprocal of the other, which holds exactly when the lines are perpendicular."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "necessary and sufficient",
      "number theory",
      "definition"
    ],
    "questionText": "Let $n$ be a positive integer. Let $P$ be the statement \"$n$ is prime\" and let $Q$ be the statement \"$n$ has exactly two positive divisors\". Determine which of $\\Rightarrow$, $\\Leftarrow$ or $\\Leftrightarrow$ correctly connects $P$ and $Q$, justifying each direction, and comment on the case $n=1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two statements and the domain.",
          "workingLatex": "P:\\ n\\ \\text{is prime}, \\qquad Q:\\ n\\ \\text{has exactly two positive divisors}, \\qquad n \\in \\mathbb{Z}^{+}",
          "explanation": "We compare a named property, 'prime', with a counting property about divisors. Because divisor counts depend on staying among the positive integers, fixing $n \\in \\mathbb{Z}^{+}$ frames the whole question.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the two directions needed for a biconditional.",
          "workingLatex": "P \\Leftrightarrow Q \\iff (P \\Rightarrow Q)\\ \\text{and}\\ (Q \\Rightarrow P)",
          "explanation": "The two-way arrow only earns its place if each statement forces the other. So we test $P \\Rightarrow Q$ and $Q \\Rightarrow P$ as two separate claims.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the two automatic divisors of any positive integer.",
          "workingLatex": "1 \\mid n \\ \\text{and}\\ n \\mid n \\quad \\text{for every } n \\in \\mathbb{Z}^{+}",
          "explanation": "Every positive integer is divisible by both $1$ and itself, so these two are always present on the divisor list. This is the anchor that connects the counting statement $Q$ to the meaning of prime.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the forward direction P ⇒ Q.",
          "workingLatex": "n\\ \\text{prime} \\Rightarrow n \\ge 2\\ \\text{and only divisors are } 1, n \\Rightarrow \\text{exactly two}",
          "explanation": "Assume $n$ is prime. By definition its only positive divisors are $1$ and $n$, and since a prime satisfies $n \\ge 2$ these two are different. That leaves exactly two divisors, which is $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the forward direction holds.",
          "workingLatex": "P \\Rightarrow Q \\text{ is true}",
          "explanation": "Being prime guarantees the divisor count is exactly two, so $P$ forces $Q$. The forward implication is secure.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the reverse direction Q ⇒ P.",
          "workingLatex": "\\text{exactly two divisors} \\Rightarrow \\{1, n\\},\\ 1 \\neq n \\Rightarrow n > 1\\ \\text{with no other divisor}",
          "explanation": "Assume $n$ has exactly two positive divisors. They must be the two automatic ones, $1$ and $n$, and for these to be two distinct numbers we need $n>1$. With no divisor besides $1$ and itself, $n$ fits the definition of prime.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the reverse direction holds.",
          "workingLatex": "Q \\Rightarrow P \\text{ is true}",
          "explanation": "Having exactly two positive divisors pins $n$ down to being prime, so $Q$ forces $P$ as well. The reverse implication also holds.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Comment on the special case n = 1.",
          "workingLatex": "\\text{divisors of } 1 = \\{1\\} \\Rightarrow \\text{one divisor} \\Rightarrow Q\\ \\text{false},\\ P\\ \\text{false}",
          "explanation": "The number $1$ has only the single divisor $1$, so it fails the 'exactly two' test and $Q$ is false. This matches $1$ not being prime, showing the condition automatically excludes $1$ without any special rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the overall conclusion.",
          "workingLatex": "P \\Leftrightarrow Q",
          "explanation": "Both directions hold, so the correct connective is $\\Leftrightarrow$. In fact 'exactly two positive divisors' is just a restatement of the definition of prime, and it neatly rules out $1$ on its own.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$. Forward: a prime has only $1$ and itself as divisors, and these are distinct since $n\\ge2$, giving exactly two. Reverse: exactly two divisors must be $1$ and $n$ with $n>1$ and nothing else, i.e. prime. The case $n=1$ has just one divisor, so $Q$ (and $P$) fail — the definition excludes $1$ automatically."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "converse",
      "equivalence",
      "polynomial roots",
      "domain"
    ],
    "questionText": "The statement \"if $x=1$ then $x^3 - 1 = 0$\" is true. Its converse is \"if $x^3 - 1 = 0$ then $x = 1$\". Determine whether the converse is true, treating the cases where $x$ ranges over the real numbers $\\mathbb{R}$ and over the complex numbers $\\mathbb{C}$ separately.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the original implication is true.",
          "workingLatex": "x = 1 \\Rightarrow x^3 - 1 = 1 - 1 = 0",
          "explanation": "Substituting $x=1$ makes $x^3-1$ equal to zero, so the original 'if $x=1$ then $x^3-1=0$' certainly holds. Establishing this reminds us the original and its converse are different claims to be judged on their own.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the converse that must be tested.",
          "workingLatex": "\\text{converse}:\\ x^3 - 1 = 0 \\Rightarrow x = 1",
          "explanation": "The converse swaps hypothesis and conclusion, so now we assume the equation holds and ask whether $x$ is forced to be $1$. Whether this is true depends entirely on which roots the equation has.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note that the converse's truth may depend on the number system.",
          "workingLatex": "\\text{roots of } x^3 - 1 = 0 \\ ?",
          "explanation": "A cubic can have hidden roots that are not real, so the answer may differ over $\\mathbb{R}$ and over $\\mathbb{C}$. This is why the question asks us to treat the two domains separately.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the cubic.",
          "workingLatex": "x^3 - 1 = (x-1)(x^2 + x + 1)",
          "explanation": "Since $x=1$ is a known root, $(x-1)$ is a factor, and dividing out gives the quadratic $x^2+x+1$. Factorising separates the obvious root from any others hiding in the quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the factorised form equal to zero.",
          "workingLatex": "(x-1)(x^2 + x + 1) = 0 \\Rightarrow x = 1 \\ \\text{or}\\ x^2 + x + 1 = 0",
          "explanation": "A product is zero exactly when one of its factors is zero, so the roots are $x=1$ together with any solutions of $x^2+x+1=0$. The whole question now rests on that quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Examine the quadratic over the reals using its discriminant.",
          "workingLatex": "x^2 + x + 1:\\ b^2 - 4ac = 1 - 4 = -3 < 0",
          "explanation": "A negative discriminant means the quadratic has no real roots, so over $\\mathbb{R}$ it never equals zero. Hence within the reals the equation gains no extra solutions from this factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the converse over the reals.",
          "workingLatex": "\\text{over } \\mathbb{R}:\\ \\text{only root is } x = 1 \\Rightarrow \\text{converse true}",
          "explanation": "With the quadratic contributing no real roots, $x=1$ is the only real solution of $x^3-1=0$. So over the reals the converse is true, and together with the original we get $x^3-1=0 \\Leftrightarrow x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the quadratic over the complex numbers.",
          "workingLatex": "x = \\frac{-1 \\pm \\sqrt{-3}}{2} = \\frac{-1 \\pm i\\sqrt{3}}{2}",
          "explanation": "Over $\\mathbb{C}$ the square root of $-3$ exists as $i\\sqrt{3}$, so the quadratic formula delivers two complex roots. These are the other two cube roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude the converse over the complex numbers.",
          "workingLatex": "\\text{over } \\mathbb{C}:\\ x^3 - 1 = 0 \\text{ has roots } 1,\\ \\tfrac{-1 + i\\sqrt{3}}{2},\\ \\tfrac{-1 - i\\sqrt{3}}{2} \\Rightarrow \\text{converse false}",
          "explanation": "Over the complex numbers there are three roots, so a solution of $x^3-1=0$ need not be $x=1$. Those two extra roots are counterexamples, making the converse false over $\\mathbb{C}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the overall conclusion.",
          "workingLatex": "\\mathbb{R}:\\ \\text{converse true } (\\Leftrightarrow); \\qquad \\mathbb{C}:\\ \\text{converse false}",
          "explanation": "The very same converse is true over the reals but false over the complex numbers. This shows that the truth of an implication can depend on the domain we allow the variable to take.",
          "diagram": null
        }
      ],
      "finalAnswer": "Over $\\mathbb{R}$ the converse is true: $x^3-1=(x-1)(x^2+x+1)$ and $x^2+x+1$ has discriminant $-3<0$, so $x=1$ is the only real root, giving $x^3-1=0 \\Leftrightarrow x=1$. Over $\\mathbb{C}$ the converse is false: the quadratic gives two further roots $x=\\tfrac{-1\\pm i\\sqrt{3}}{2}$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "contrapositive",
      "proof",
      "parity",
      "necessary and sufficient"
    ],
    "questionText": "Let $n$ be an integer. Prove that $n$ is even if and only if $n^2$ is even. Prove the forward direction directly and the reverse direction by contrapositive. Hence explain why each of the two conditions is both necessary and sufficient for the other.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the statements and the goal.",
          "workingLatex": "P:\\ n\\ \\text{is even}, \\quad Q:\\ n^2\\ \\text{is even}, \\quad \\text{prove } P \\Leftrightarrow Q",
          "explanation": "Labelling the two claims lets us track exactly which direction we are working on. The target $P \\Leftrightarrow Q$ is a biconditional, so it will take two separate arguments to establish.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the biconditional into two implications.",
          "workingLatex": "P \\Leftrightarrow Q \\iff (P \\Rightarrow Q)\\ \\text{and}\\ (Q \\Rightarrow P)",
          "explanation": "A two-way arrow is really two one-way arrows, so proving both $P \\Rightarrow Q$ and $Q \\Rightarrow P$ proves the whole statement. We will do the first directly and the second by its contrapositive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the intuition about squaring and parity.",
          "workingLatex": "\\text{squaring preserves parity: even} \\to \\text{even},\\ \\text{odd} \\to \\text{odd}",
          "explanation": "Squaring a number does not change whether it is even or odd, because the factors of $2$ (or their absence) are simply repeated. This is the underlying reason the two conditions must rise and fall together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin the forward direction P ⇒ Q by assuming P.",
          "workingLatex": "\\text{assume } n = 2k \\ \\text{for some integer } k",
          "explanation": "For a direct proof of $P \\Rightarrow Q$ we assume the hypothesis, that $n$ is even, and write it as $2k$. From here we compute forwards towards the conclusion about $n^2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square n.",
          "workingLatex": "n^2 = (2k)^2 = 4k^2",
          "explanation": "Squaring the even form $2k$ produces $4k^2$. The point is to expose a factor of $2$ inside this expression.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out a 2 to show n² is even.",
          "workingLatex": "n^2 = 2(2k^2)",
          "explanation": "Writing $4k^2$ as $2$ times $2k^2$ displays $n^2$ as twice an integer. That is exactly the definition of an even number, so $Q$ holds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the forward conclusion.",
          "workingLatex": "P \\Rightarrow Q \\text{ is proved}",
          "explanation": "Assuming $n$ even led directly to $n^2$ even, so the forward implication is established. One half of the biconditional is now done.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the reverse is done by contrapositive.",
          "workingLatex": "Q \\Rightarrow P \\ \\equiv\\ \\lnot P \\Rightarrow \\lnot Q",
          "explanation": "Going directly from '$n^2$ even' to '$n$ even' is awkward because we would need to un-square. Instead we prove the logically equivalent contrapositive: if $n$ is not even then $n^2$ is not even.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the contrapositive to be proved.",
          "workingLatex": "\\lnot P \\Rightarrow \\lnot Q:\\ n\\ \\text{odd} \\Rightarrow n^2\\ \\text{odd}",
          "explanation": "The negation of 'even' is 'odd', so the contrapositive says an odd $n$ has an odd square. Proving this is exactly as good as proving $Q \\Rightarrow P$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assume n is odd.",
          "workingLatex": "n = 2k + 1 \\ \\text{for some integer } k",
          "explanation": "We now assume the hypothesis of the contrapositive, that $n$ is odd, and write it in the standard form $2k+1$. Then we compute $n^2$ and look at its parity.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Square the odd form.",
          "workingLatex": "n^2 = (2k+1)^2 = 4k^2 + 4k + 1",
          "explanation": "Expanding the square gives $4k^2+4k+1$. We aim to separate the part that is clearly even from a leftover $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Rewrite to expose the odd form.",
          "workingLatex": "n^2 = 2(2k^2 + 2k) + 1",
          "explanation": "Grouping the first two terms as $2(2k^2+2k)$ leaves a remainder of $1$, so $n^2$ is one more than an even number. That is precisely what it means for $n^2$ to be odd.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete the contrapositive and hence the reverse direction.",
          "workingLatex": "n\\ \\text{odd} \\Rightarrow n^2\\ \\text{odd} \\;\\Rightarrow\\; Q \\Rightarrow P \\text{ is proved}",
          "explanation": "We have shown an odd $n$ forces an odd $n^2$, so the contrapositive holds. Because a statement and its contrapositive are equivalent, $Q \\Rightarrow P$ is thereby proved.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine both directions.",
          "workingLatex": "(P \\Rightarrow Q)\\ \\text{and}\\ (Q \\Rightarrow P) \\;\\Rightarrow\\; P \\Leftrightarrow Q \\quad \\blacksquare",
          "explanation": "With both implications established, the biconditional $n$ even $\\Leftrightarrow n^2$ even is proved. Both halves were required, and both are now secure.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Discuss necessary and sufficient.",
          "workingLatex": "P \\Leftrightarrow Q \\Rightarrow \\text{each condition is necessary and sufficient for the other}",
          "explanation": "Because each statement implies the other, each is both sufficient (it guarantees the other) and necessary (the other cannot hold without it). So '$n$ is even' and '$n^2$ is even' are interchangeable conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n$ even $\\Leftrightarrow n^2$ even. Forward (direct): $n=2k \\Rightarrow n^2 = 2(2k^2)$, even. Reverse (contrapositive): $n=2k+1 \\Rightarrow n^2 = 2(2k^2+2k)+1$, odd, so $n$ odd $\\Rightarrow n^2$ odd, i.e. $n^2$ even $\\Rightarrow n$ even. Both directions hold, so each condition is both necessary and sufficient for the other."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "equivalence",
      "contrapositive",
      "proof",
      "divisibility",
      "necessary and sufficient"
    ],
    "questionText": "Let $n$ be an integer. Prove that $n^2$ is a multiple of $3$ if and only if $n$ is a multiple of $3$. Prove the direction \"$n$ a multiple of $3 \\Rightarrow n^2$ a multiple of $3$\" directly, and prove the other direction by contrapositive using the two cases $n = 3k \\pm 1$. Hence state the necessary and sufficient relationship.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the statements and the goal.",
          "workingLatex": "A:\\ n\\ \\text{multiple of } 3, \\quad B:\\ n^2\\ \\text{multiple of } 3, \\quad \\text{prove } A \\Leftrightarrow B",
          "explanation": "Labelling the two claims keeps the two directions straight while we work. The target is the biconditional $A \\Leftrightarrow B$, which needs both implications proved.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the biconditional into two implications.",
          "workingLatex": "A \\Leftrightarrow B \\iff (A \\Rightarrow B)\\ \\text{and}\\ (B \\Rightarrow A)",
          "explanation": "The two-way arrow is two one-way arrows combined. We prove $A \\Rightarrow B$ directly and $B \\Rightarrow A$ by contrapositive, as the question directs.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the intuition using primeness of 3.",
          "workingLatex": "3\\ \\text{is prime} \\Rightarrow \\text{a factor of } 3 \\text{ in } n^2 \\text{ must come from } n",
          "explanation": "Because $3$ is prime, it cannot be built from smaller pieces, so if $3$ divides $n\\times n$ it must divide one of the factors, namely $n$ itself. This is the deeper reason the two conditions match.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Begin the direct direction A ⇒ B by assuming A.",
          "workingLatex": "\\text{assume } n = 3k \\ \\text{for some integer } k",
          "explanation": "For the direct proof of $A \\Rightarrow B$ we assume $n$ is a multiple of $3$ and write it as $3k$. Then we compute $n^2$ and read off its divisibility.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square n.",
          "workingLatex": "n^2 = (3k)^2 = 9k^2",
          "explanation": "Squaring $3k$ gives $9k^2$. The goal is to reveal a factor of $3$ in this result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out a 3 to show B.",
          "workingLatex": "n^2 = 3(3k^2)",
          "explanation": "Writing $9k^2$ as $3$ times $3k^2$ shows $n^2$ is three times an integer, so it is a multiple of $3$. Hence $B$ holds and $A \\Rightarrow B$ is proved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Explain why the reverse uses the contrapositive.",
          "workingLatex": "B \\Rightarrow A \\ \\equiv\\ \\lnot A \\Rightarrow \\lnot B",
          "explanation": "Arguing straight from '$n^2$ divisible by $3$' to '$n$ divisible by $3$' is awkward, so we prove the equivalent contrapositive. That means showing: if $n$ is not a multiple of $3$, then $n^2$ is not a multiple of $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Describe the non-multiples of 3 by their remainders.",
          "workingLatex": "\\lnot A:\\ n = 3k + 1 \\ \\text{or}\\ n = 3k - 1",
          "explanation": "Any integer that is not a multiple of $3$ leaves a remainder of $1$ or $2$, which we write neatly as $3k+1$ or $3k-1$. Covering both forms is what makes the case analysis complete.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case 1: square n = 3k + 1.",
          "workingLatex": "n = 3k+1 \\Rightarrow n^2 = 9k^2 + 6k + 1",
          "explanation": "Expanding $(3k+1)^2$ gives $9k^2+6k+1$. We now separate the clearly divisible part from any remainder.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Show Case 1 leaves remainder 1.",
          "workingLatex": "n^2 = 3(3k^2 + 2k) + 1",
          "explanation": "Grouping the first two terms as $3(3k^2+2k)$ leaves a remainder of $1$, so $n^2$ is one more than a multiple of $3$. Therefore $n^2$ is not a multiple of $3$ in this case.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case 2: square n = 3k - 1.",
          "workingLatex": "n = 3k-1 \\Rightarrow n^2 = 9k^2 - 6k + 1",
          "explanation": "Expanding $(3k-1)^2$ gives $9k^2-6k+1$. Again we isolate a factor of $3$ from the leftover.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Show Case 2 also leaves remainder 1.",
          "workingLatex": "n^2 = 3(3k^2 - 2k) + 1",
          "explanation": "Writing it as $3(3k^2-2k)+1$ again leaves a remainder of $1$, so $n^2$ is not divisible by $3$. Both non-multiple forms give the same outcome.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Complete the contrapositive.",
          "workingLatex": "\\lnot A \\Rightarrow \\lnot B \\ \\text{holds in both cases}",
          "explanation": "In each case a non-multiple of $3$ produced an $n^2$ that is not a multiple of $3$, so the contrapositive is proved. This is exactly the content of $\\lnot A \\Rightarrow \\lnot B$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Deduce the reverse direction.",
          "workingLatex": "\\lnot A \\Rightarrow \\lnot B \\ \\equiv\\ B \\Rightarrow A \\;\\Rightarrow\\; B \\Rightarrow A \\text{ is proved}",
          "explanation": "Since a statement and its contrapositive are logically equivalent, proving $\\lnot A \\Rightarrow \\lnot B$ proves $B \\Rightarrow A$. The reverse implication is now secure.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Combine both directions.",
          "workingLatex": "(A \\Rightarrow B)\\ \\text{and}\\ (B \\Rightarrow A) \\;\\Rightarrow\\; A \\Leftrightarrow B \\quad \\blacksquare",
          "explanation": "With both implications proved, the biconditional $n$ a multiple of $3 \\Leftrightarrow n^2$ a multiple of $3$ is complete. Each half was necessary to the whole.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the necessary and sufficient relationship.",
          "workingLatex": "A \\Leftrightarrow B \\Rightarrow \\text{each condition is necessary and sufficient for the other}",
          "explanation": "Because each statement forces the other, each is both sufficient and necessary for it. So '$n$ is a multiple of $3$' and '$n^2$ is a multiple of $3$' are equivalent, interchangeable conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$n$ a multiple of $3 \\Leftrightarrow n^2$ a multiple of $3$. Direct: $n=3k \\Rightarrow n^2 = 3(3k^2)$. Contrapositive: $n=3k+1 \\Rightarrow n^2 = 3(3k^2+2k)+1$ and $n=3k-1 \\Rightarrow n^2 = 3(3k^2-2k)+1$, neither a multiple of $3$, so $n^2$ a multiple of $3 \\Rightarrow n$ a multiple of $3$. Both hold, so each condition is necessary and sufficient for the other."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "proof by contradiction",
      "irrationality",
      "implication",
      "notation"
    ],
    "questionText": "Prove, by contradiction, that if $x^2 = 2$ then $x$ is irrational. Set out the logical structure of your argument carefully: state clearly the assumption you are contradicting, and use correct notation throughout (in particular the set $\\mathbb{Q}$ of rational numbers).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the claim and choose a proof strategy.",
          "workingLatex": "\\text{Claim: } x^2 = 2 \\ \\Rightarrow\\ x \\notin \\mathbb{Q}",
          "explanation": "The statement is an implication, so a natural strategy is to keep the hypothesis but deny the conclusion and search for a contradiction. If denying the conclusion turns out to be impossible, the implication must be true.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall what rational and irrational mean.",
          "workingLatex": "x \\in \\mathbb{Q} \\iff x = \\dfrac{p}{q}, \\ p \\in \\mathbb{Z}, \\ q \\in \\mathbb{Z}, \\ q \\neq 0",
          "explanation": "A number is rational exactly when it can be written as a ratio of two integers. 'Irrational' simply means 'not rational', so denying the conclusion amounts to asserting that $x$ is rational.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the contradiction hypothesis.",
          "workingLatex": "\\text{Assume } x^2 = 2 \\ \\text{and}\\ x \\in \\mathbb{Q}",
          "explanation": "In a proof by contradiction we suppose the opposite of the desired conclusion alongside the given condition. The goal is now to derive something logically impossible from these two suppositions together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write x as a fraction in lowest terms.",
          "workingLatex": "x = \\dfrac{p}{q}, \\quad \\gcd(p,q) = 1, \\ q \\neq 0",
          "explanation": "Any rational number can be reduced so that numerator and denominator share no common factor. Insisting on lowest terms builds in a property that we can later contradict.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the equation x^2 = 2.",
          "workingLatex": "\\left(\\dfrac{p}{q}\\right)^2 = 2 \\ \\Rightarrow\\ \\dfrac{p^2}{q^2} = 2 \\ \\Rightarrow\\ p^2 = 2q^2",
          "explanation": "Substituting the fraction into $x^2 = 2$ and clearing the denominator turns the problem into a statement about integers, where parity arguments become available.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce that p squared is even.",
          "workingLatex": "p^2 = 2q^2 \\ \\Rightarrow\\ p^2 \\text{ is even}",
          "explanation": "The right-hand side is $2$ times an integer, so $p^2$ is a multiple of $2$. This gives our first foothold: information about the parity of $p$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce that p itself is even via the contrapositive.",
          "workingLatex": "p \\text{ odd} \\Rightarrow p^2 \\text{ odd}; \\ \\text{so } p^2 \\text{ even} \\Rightarrow p \\text{ even}",
          "explanation": "If $p$ were odd, then $p = 2k+1$ gives $p^2 = 2(2k^2+2k)+1$, which is odd. Since $p^2$ is even, $p$ cannot be odd, so $p$ must be even.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write p as twice an integer.",
          "workingLatex": "p = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "Being even means $p$ is exactly twice some integer. Naming that integer lets us feed the fact back into the equation and continue the argument.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute p = 2m back into the equation.",
          "workingLatex": "(2m)^2 = 2q^2 \\ \\Rightarrow\\ 4m^2 = 2q^2 \\ \\Rightarrow\\ q^2 = 2m^2",
          "explanation": "Replacing $p$ shows that $q^2$ is also twice an integer. The same structure has reappeared, and that repetition is exactly what will force the contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce that q is even.",
          "workingLatex": "q^2 = 2m^2 \\ \\Rightarrow\\ q^2 \\text{ even} \\ \\Rightarrow\\ q \\text{ even}",
          "explanation": "By the identical parity argument used for $p$, an even square forces an even root. So $q$ is even as well.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note that p and q share the factor 2.",
          "workingLatex": "2 \\mid p \\ \\text{and}\\ 2 \\mid q \\ \\Rightarrow\\ \\gcd(p,q) \\geq 2",
          "explanation": "Both integers are divisible by $2$, so $2$ is a common factor of them. Their greatest common divisor is therefore at least $2$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confront the lowest-terms assumption.",
          "workingLatex": "\\gcd(p,q) \\geq 2 \\ \\text{contradicts}\\ \\gcd(p,q) = 1",
          "explanation": "We deliberately chose the fraction in lowest terms, which means their greatest common divisor is $1$. Having it be at least $2$ is a direct contradiction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the false assumption.",
          "workingLatex": "\\Rightarrow\\ (x \\in \\mathbb{Q}) \\text{ is false}",
          "explanation": "A contradiction means one of our suppositions was untenable. The equation $x^2 = 2$ stands, so the faulty supposition must be that $x$ is rational; hence $x$ is irrational.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion in implication form.",
          "workingLatex": "x^2 = 2 \\ \\Rightarrow\\ x \\notin \\mathbb{Q} \\qquad \\blacksquare",
          "explanation": "We assumed the hypothesis and reached the conclusion with no logical escape, which is precisely what the implication asserts. In particular this shows the specific number $\\sqrt{2}$ is irrational.",
          "diagram": null
        }
      ],
      "finalAnswer": "Assuming $x = \\tfrac{p}{q}$ in lowest terms forces $p$ and $q$ to both be even, contradicting $\\gcd(p,q)=1$. No such rational exists, so $x^2 = 2 \\Rightarrow x \\notin \\mathbb{Q}$; in particular $\\sqrt{2}$ is irrational."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "implication",
      "equivalence",
      "quadratic",
      "necessary and sufficient"
    ],
    "questionText": "Consider the statements $P:\\ x^2 - 4x + 3 = 0$, $\\ Q:\\ x = 1$ and $\\ R:\\ x = 3$, where $x \\in \\mathbb{R}$. Investigate all the logical implications among $P$, $Q$ and $R$: establish whether $Q \\Rightarrow P$, whether $R \\Rightarrow P$, whether $P \\Rightarrow (Q \\vee R)$, and whether $P \\Rightarrow Q$. Hence express the complete relationship between $P$ and the pair $Q,R$ using logical connectives, and comment on necessity and sufficiency.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Lay out the three statements and the plan.",
          "workingLatex": "P:\\ x^2 - 4x + 3 = 0, \\quad Q:\\ x = 1, \\quad R:\\ x = 3",
          "explanation": "Before deciding which arrows connect the statements, we record exactly what each one says. Because each symbol claims a direction, we will have to test both directions of every link separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the quadratic in P.",
          "workingLatex": "x^2 - 4x + 3 = (x-1)(x-3)",
          "explanation": "Factorising exposes the roots directly, which is the fastest route to relating $P$ to the two candidate values $x=1$ and $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite P as a product equal to zero.",
          "workingLatex": "P \\iff (x-1)(x-3) = 0",
          "explanation": "Since the factorisation is an identity, the equation $P$ holds under exactly the same conditions as the product being zero. This is a genuine equivalence, not just an implication.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero-product principle.",
          "workingLatex": "(x-1)(x-3) = 0 \\iff x = 1 \\ \\text{or}\\ x = 3",
          "explanation": "A product of real numbers is zero if and only if one of the factors is zero. This converts the algebra into a logical 'or' of the two value statements.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise the disjunction Q or R.",
          "workingLatex": "P \\iff (Q \\vee R)",
          "explanation": "The right-hand side is precisely the statement '$Q$ or $R$'. So already we can see the natural full relationship is a biconditional with the disjunction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test Q implies P by substitution.",
          "workingLatex": "x = 1:\\ 1 - 4 + 3 = 0 \\ \\checkmark \\ \\Rightarrow\\ Q \\Rightarrow P",
          "explanation": "Assuming $Q$ and putting $x=1$ into the quadratic gives zero, so $P$ holds. Hence $Q$ is enough on its own to guarantee $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test R implies P by substitution.",
          "workingLatex": "x = 3:\\ 9 - 12 + 3 = 0 \\ \\checkmark \\ \\Rightarrow\\ R \\Rightarrow P",
          "explanation": "Assuming $R$ and putting $x=3$ into the quadratic also gives zero, so $P$ holds. Thus $R$ likewise guarantees $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm P implies the disjunction Q or R.",
          "workingLatex": "P \\Rightarrow (x-1)(x-3) = 0 \\Rightarrow (Q \\vee R)",
          "explanation": "If $P$ holds, the factorised form forces one factor to vanish, giving $x=1$ or $x=3$. So $P$ cannot be true unless at least one of $Q$, $R$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test P implies Q with a counterexample.",
          "workingLatex": "x = 3:\\ P \\text{ true}, \\ Q \\text{ false} \\ \\Rightarrow\\ P \\not\\Rightarrow Q",
          "explanation": "At $x=3$ the equation $P$ holds but $Q$ (which says $x=1$) is false. A single counterexample is enough to show $P$ does not force $Q$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the symmetric failure P implies R.",
          "workingLatex": "x = 1:\\ P \\text{ true}, \\ R \\text{ false} \\ \\Rightarrow\\ P \\not\\Rightarrow R",
          "explanation": "By the mirror-image argument, $x=1$ satisfies $P$ but not $R$. So $P$ on its own pins the value down only to the pair, not to either one individually.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Assemble both directions with the disjunction.",
          "workingLatex": "(Q \\vee R) \\Rightarrow P \\ \\text{and}\\ P \\Rightarrow (Q \\vee R)",
          "explanation": "Steps 6-7 give the disjunction implying $P$, and step 8 gives $P$ implying the disjunction. Both directions holding is exactly the condition for a biconditional.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the complete relationship.",
          "workingLatex": "P \\iff (Q \\vee R)",
          "explanation": "Combining the two implications yields a clean equivalence between $P$ and 'either $Q$ or $R$'. This is the tightest true statement linking $P$ to the value statements.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Translate into necessary and sufficient language.",
          "workingLatex": "Q \\text{ sufficient, not necessary, for } P; \\quad (Q \\vee R) \\text{ necessary and sufficient for } P",
          "explanation": "Each of $Q$ and $R$ guarantees $P$ so is sufficient, but neither is required (the other root works instead) so neither is necessary. The disjunction is both required and enough, so it is necessary and sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Summarise all the implications.",
          "workingLatex": "Q \\Rightarrow P, \\ R \\Rightarrow P, \\ P \\Rightarrow (Q \\vee R), \\ P \\not\\Rightarrow Q, \\ P \\iff (Q \\vee R)",
          "explanation": "Collecting the verified links gives a full picture: the individual values are one-way sufficient conditions, while their disjunction is the exact equivalent of $P$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(x-1)(x-3)=0$ gives $P \\iff (Q \\vee R)$. Both $Q \\Rightarrow P$ and $R \\Rightarrow P$ hold, and $P \\Rightarrow (Q \\vee R)$, but $P \\not\\Rightarrow Q$ (since $x=3$ satisfies $P$). Each of $Q, R$ is sufficient but not necessary for $P$; $Q \\vee R$ is necessary and sufficient for $P$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "geometry",
      "parallelogram",
      "necessary and sufficient"
    ],
    "questionText": "Let $ABCD$ be a quadrilateral whose diagonals $AC$ and $BD$ meet at $M$. Prove that $ABCD$ is a parallelogram if and only if its diagonals bisect each other, that is, $AM = CM$ and $BM = DM$. Prove both directions carefully, and state your conclusion in the language of necessary and sufficient conditions.",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "geometry",
      "description": "Quadrilateral ABCD with vertices labelled in order; the two diagonals AC and BD are drawn and cross at the point M inside the quadrilateral.",
      "elements": [
        "Quadrilateral ABCD with vertices A, B, C, D taken in order",
        "Diagonal AC",
        "Diagonal BD",
        "Point M = intersection of AC and BD"
      ]
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the biconditional and the plan.",
          "workingLatex": "\\text{Prove: } ABCD \\text{ parallelogram} \\iff (AM = CM \\ \\text{and}\\ BM = DM)",
          "explanation": "A biconditional makes two separate claims joined by 'if and only if', so it must be proved in two directions. We will prove the forward implication first, then its converse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Fix the notation for the crossing point.",
          "workingLatex": "AC \\cap BD = M",
          "explanation": "Naming the intersection $M$ lets us talk precisely about the four segments the diagonals are cut into. Bisection then means $M$ is the midpoint of each diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forward direction: assume a parallelogram.",
          "workingLatex": "\\text{Assume } ABCD \\text{ parallelogram} \\Rightarrow AB \\parallel DC \\ \\text{and}\\ AB = DC",
          "explanation": "By definition of a parallelogram the opposite sides $AB$ and $DC$ are both parallel and equal in length. These two facts are what drive the congruence we need.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify equal alternate angles.",
          "workingLatex": "\\angle ABM = \\angle CDM, \\quad \\angle BAM = \\angle DCM",
          "explanation": "The parallel sides $AB$ and $DC$ are cut by the diagonals acting as transversals. Alternate angles across parallel lines are equal, giving two matching angle pairs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the ASA congruence criterion.",
          "workingLatex": "\\triangle ABM \\equiv \\triangle CDM \\quad (\\text{ASA})",
          "explanation": "The two triangles share two equal angles with the equal side $AB = DC$ between them. Angle-Side-Angle then guarantees the triangles are congruent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the corresponding equal sides.",
          "workingLatex": "\\Rightarrow AM = CM \\ \\text{and}\\ BM = DM",
          "explanation": "Congruent triangles have all corresponding sides equal. The sides matching up are exactly the halves of the two diagonals, so $M$ is the midpoint of each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the forward direction.",
          "workingLatex": "ABCD \\text{ parallelogram} \\Rightarrow \\text{diagonals bisect each other}",
          "explanation": "Having shown $M$ splits both diagonals into equal halves, we have established that in any parallelogram the diagonals bisect each other.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Reverse direction: assume the diagonals bisect.",
          "workingLatex": "\\text{Assume } AM = CM \\ \\text{and}\\ BM = DM",
          "explanation": "We now start from the bisection property alone and must recover the full parallelogram. This is the converse, so nothing about parallel sides may be assumed yet.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use vertically opposite angles at M.",
          "workingLatex": "\\angle AMB = \\angle CMD \\quad (\\text{vertically opposite})",
          "explanation": "The diagonals cross at $M$, so the angles on opposite sides of the crossing are vertically opposite and hence equal. This supplies the included angle for a congruence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the SAS congruence criterion.",
          "workingLatex": "\\triangle AMB \\equiv \\triangle CMD \\quad (\\text{SAS})",
          "explanation": "We have $AM = CM$, $BM = DM$ and the equal included angle between them. Side-Angle-Side then makes the two triangles congruent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Deduce a pair of sides equal and parallel.",
          "workingLatex": "\\Rightarrow AB = CD \\ \\text{and}\\ \\angle BAM = \\angle DCM \\Rightarrow AB \\parallel CD",
          "explanation": "Congruence gives $AB = CD$, and it also gives equal alternate angles $\\angle BAM = \\angle DCM$. Equal alternate angles across the transversal $AC$ force $AB$ to be parallel to $CD$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Invoke the equal-and-parallel theorem.",
          "workingLatex": "AB = CD \\ \\text{and}\\ AB \\parallel CD \\Rightarrow ABCD \\text{ parallelogram}",
          "explanation": "A quadrilateral with one pair of opposite sides both equal in length and parallel is a parallelogram. Having established that pair, the shape is determined.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude the reverse direction.",
          "workingLatex": "\\text{diagonals bisect each other} \\Rightarrow ABCD \\text{ parallelogram}",
          "explanation": "Starting only from the bisection property we have rebuilt the parallelogram, completing the converse implication.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine into the biconditional.",
          "workingLatex": "ABCD \\text{ parallelogram} \\iff (AM = CM \\ \\text{and}\\ BM = DM)",
          "explanation": "Both implications hold, so the two conditions are equivalent. The diagonals bisecting each other is therefore a necessary and sufficient condition for $ABCD$ to be a parallelogram.",
          "diagram": null
        }
      ],
      "finalAnswer": "Forward: a parallelogram gives $\\triangle ABM \\equiv \\triangle CDM$ (ASA), so $AM=CM$, $BM=DM$. Reverse: bisecting diagonals give $\\triangle AMB \\equiv \\triangle CMD$ (SAS), so $AB = CD$ and $AB \\parallel CD$, making a parallelogram. Hence $ABCD$ is a parallelogram $\\iff$ its diagonals bisect each other, which is necessary and sufficient."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "parity",
      "contrapositive",
      "quantifiers"
    ],
    "questionText": "Let $a, b \\in \\mathbb{Z}$. Prove that $ab$ is odd if and only if $a$ and $b$ are both odd. State the result with explicit quantifiers, prove each direction (using the contrapositive for one of them), and hence comment on what is necessary and what is sufficient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the result with explicit quantifiers.",
          "workingLatex": "\\forall a, b \\in \\mathbb{Z}: \\ ab \\text{ odd} \\iff (a \\text{ odd} \\ \\wedge\\ b \\text{ odd})",
          "explanation": "The claim is a universally quantified biconditional, so it must hold for every pair of integers and in both logical directions. Writing the quantifier out keeps the scope of the argument clear.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definitions of even and odd.",
          "workingLatex": "n \\text{ even} \\iff n = 2k; \\quad n \\text{ odd} \\iff n = 2k+1, \\ k \\in \\mathbb{Z}",
          "explanation": "Parity proofs work by turning the words 'even' and 'odd' into algebraic forms. Every integer is exactly one of these, which we will rely on later.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set out the two-direction plan.",
          "workingLatex": "\\text{Prove } (\\Leftarrow) \\text{ directly and } (\\Rightarrow) \\text{ by contrapositive}",
          "explanation": "The reverse direction is easy to handle by direct expansion, while the forward direction is cleaner through its contrapositive. Choosing the right tool for each keeps the working short.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Reverse direction: assume both are odd.",
          "workingLatex": "a = 2m+1, \\quad b = 2n+1, \\quad m, n \\in \\mathbb{Z}",
          "explanation": "Assuming the right-hand side, we write both integers in odd form with their own parameters. This lets us compute the product explicitly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand the product.",
          "workingLatex": "ab = (2m+1)(2n+1) = 4mn + 2m + 2n + 1",
          "explanation": "Multiplying out gives a sum of terms we can regroup. The aim is to isolate a leftover $+1$ after pulling out a factor of two.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the product in odd form.",
          "workingLatex": "ab = 2(2mn + m + n) + 1",
          "explanation": "Since $2mn + m + n$ is an integer, the product has the form $2K + 1$. That is exactly the definition of an odd number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude the reverse direction.",
          "workingLatex": "\\Rightarrow ab \\text{ odd}; \\quad (a \\text{ odd} \\wedge b \\text{ odd}) \\Rightarrow ab \\text{ odd}",
          "explanation": "The expansion shows the product of two odd numbers is odd. Being both odd is therefore sufficient for the product to be odd.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Forward direction: state the contrapositive.",
          "workingLatex": "\\text{Contrapositive: } \\neg(a \\text{ odd} \\wedge b \\text{ odd}) \\Rightarrow ab \\text{ even}",
          "explanation": "Proving 'if $ab$ odd then both odd' directly is awkward, so we negate both sides and swap them. This gives an equivalent statement that is easier to attack.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the negated hypothesis.",
          "workingLatex": "\\neg(a \\text{ odd} \\wedge b \\text{ odd}) \\equiv (a \\text{ even} \\ \\vee\\ b \\text{ even})",
          "explanation": "By De Morgan's law the negation of an 'and' is an 'or' of the negations, and for integers 'not odd' means 'even'. So we must show that at least one even factor makes the product even.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Assume one factor is even.",
          "workingLatex": "\\text{WLOG } a = 2m, \\quad m \\in \\mathbb{Z}",
          "explanation": "Because the product $ab$ is symmetric in $a$ and $b$, we may assume without loss of generality that it is $a$ that is even. The argument for $b$ even is identical.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Show the product is even.",
          "workingLatex": "ab = 2m \\cdot b = 2(mb) \\Rightarrow ab \\text{ even}",
          "explanation": "A single factor of two in $a$ survives into the product, so $ab$ is twice an integer. Hence the product is even whenever a factor is even.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Return to the forward statement.",
          "workingLatex": "\\Rightarrow ab \\text{ odd} \\Rightarrow (a \\text{ odd} \\wedge b \\text{ odd})",
          "explanation": "A statement and its contrapositive are logically equivalent, so proving the contrapositive proves the forward direction. If the product is odd, neither factor can be even, so both are odd.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine both directions.",
          "workingLatex": "\\Rightarrow ab \\text{ odd} \\iff (a \\text{ odd} \\wedge b \\text{ odd})",
          "explanation": "With both implications established, the biconditional holds for all integer pairs. Each side is now known to guarantee the other.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State necessity and sufficiency.",
          "workingLatex": "(a \\text{ odd} \\wedge b \\text{ odd}) \\text{ is necessary and sufficient for } ab \\text{ odd}",
          "explanation": "The reverse direction makes the condition sufficient and the forward direction makes it necessary. Together they say '$a$ and $b$ both odd' is exactly equivalent to '$ab$ odd'.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\forall a,b \\in \\mathbb{Z}: ab$ odd $\\iff a,b$ both odd. Reverse: $(2m+1)(2n+1)=2(2mn+m+n)+1$ is odd. Forward (contrapositive): if $a$ or $b$ is even, say $a=2m$, then $ab=2(mb)$ is even. Hence both factors being odd is necessary and sufficient for $ab$ to be odd."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "discriminant",
      "quadratic",
      "necessary and sufficient"
    ],
    "questionText": "For the quadratic equation $ax^2 + bx + c = 0$ with real coefficients and $a \\neq 0$, the discriminant is $\\Delta = b^2 - 4ac$. State and fully justify the three biconditionals: $\\Delta > 0 \\iff$ two distinct real roots; $\\Delta = 0 \\iff$ one repeated real root; $\\Delta < 0 \\iff$ no real roots. In each case classify the discriminant condition as necessary, sufficient, or both.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the three claims to be proved.",
          "workingLatex": "\\Delta > 0 \\iff \\text{2 distinct real}, \\quad \\Delta = 0 \\iff \\text{1 repeated}, \\quad \\Delta < 0 \\iff \\text{none}",
          "explanation": "Each claim is a biconditional, so for each we must show the discriminant condition forces the root count and vice versa. Completing the square once will let us settle all three together.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Divide through by the leading coefficient.",
          "workingLatex": "a \\neq 0:\\ x^2 + \\dfrac{b}{a}x + \\dfrac{c}{a} = 0",
          "explanation": "The condition $a \\neq 0$ is what makes the equation genuinely quadratic and lets us divide safely. A monic equation is easier to complete the square on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square.",
          "workingLatex": "\\left(x + \\dfrac{b}{2a}\\right)^2 - \\dfrac{b^2}{4a^2} + \\dfrac{c}{a} = 0",
          "explanation": "Rewriting the $x$-terms as a perfect square isolates the variable inside a single squared bracket. Everything about the number of roots then follows from that one square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate the square.",
          "workingLatex": "\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{b^2}{4a^2} - \\dfrac{c}{a} = \\dfrac{b^2 - 4ac}{4a^2}",
          "explanation": "Moving the constants to the right expresses a square equal to a single fraction. The numerator is exactly the discriminant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce the discriminant and its sign.",
          "workingLatex": "\\left(x + \\dfrac{b}{2a}\\right)^2 = \\dfrac{\\Delta}{4a^2}, \\quad 4a^2 > 0",
          "explanation": "Since $4a^2$ is a positive square, the sign of the right-hand side is identical to the sign of $\\Delta$. So the discriminant alone controls what happens.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the real-square principle.",
          "workingLatex": "t^2 = \\dfrac{\\Delta}{4a^2} \\text{ has real } t \\iff \\dfrac{\\Delta}{4a^2} \\geq 0 \\iff \\Delta \\geq 0",
          "explanation": "A real number squared can never be negative, so a real solution exists only when the right-hand side is at least zero. This single fact is the engine of all three cases.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take square roots when the discriminant is non-negative.",
          "workingLatex": "x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}",
          "explanation": "When $\\Delta \\geq 0$ we may square-root both sides, recovering the familiar quadratic formula. The $\\pm$ is where the count of roots is decided.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case Delta positive: forward direction.",
          "workingLatex": "\\Delta > 0:\\ \\sqrt{\\Delta} > 0 \\Rightarrow \\dfrac{-b+\\sqrt{\\Delta}}{2a} \\neq \\dfrac{-b-\\sqrt{\\Delta}}{2a}",
          "explanation": "A strictly positive discriminant gives a nonzero square root, so the two signs produce two genuinely different real values. Hence there are two distinct real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case Delta positive: converse and biconditional.",
          "workingLatex": "\\text{2 distinct real roots} \\Rightarrow \\sqrt{\\Delta} \\text{ real and } \\neq 0 \\Rightarrow \\Delta > 0",
          "explanation": "Conversely, two distinct real roots can only come from a real, nonzero square-root term, which forces $\\Delta > 0$. Both directions hold, so $\\Delta > 0 \\iff$ two distinct real roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case Delta zero: both directions.",
          "workingLatex": "\\Delta = 0:\\ x = \\dfrac{-b}{2a} \\text{ (repeated)}; \\ \\text{equal roots} \\Rightarrow \\sqrt{\\Delta} = 0 \\Rightarrow \\Delta = 0",
          "explanation": "A zero discriminant collapses the $\\pm$ to a single value, giving one repeated root. Conversely a single repeated root means the two formula values coincide, forcing $\\sqrt{\\Delta}=0$, so $\\Delta = 0 \\iff$ one repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case Delta negative: both directions.",
          "workingLatex": "\\Delta < 0:\\ \\dfrac{\\Delta}{4a^2} < 0 \\Rightarrow \\text{no real } x; \\ \\text{no real roots} \\Rightarrow \\Delta < 0",
          "explanation": "If $\\Delta < 0$ the square would have to equal a negative number, which no real value allows, so there are no real roots. Conversely, absence of real roots rules out $\\Delta \\geq 0$, giving $\\Delta < 0 \\iff$ no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note the cases are exhaustive and exclusive.",
          "workingLatex": "\\Delta > 0, \\ \\Delta = 0, \\ \\Delta < 0 \\text{ partition all possibilities}",
          "explanation": "Every real $\\Delta$ falls into exactly one of these three ranges, and each is matched with a distinct root count. That one-to-one pairing is what makes each implication reversible.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Classify each condition.",
          "workingLatex": "\\text{Each } \\Delta\\text{-condition is both necessary and sufficient for its root-count}",
          "explanation": "Because each statement is a proven biconditional, the discriminant sign is enough to force the outcome (sufficient) and is also forced by it (necessary). So every one is necessary and sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Justify why a biconditional gives both.",
          "workingLatex": "P \\iff Q \\Rightarrow P \\text{ necessary and sufficient for } Q",
          "explanation": "The forward arrow $P \\Rightarrow Q$ makes $P$ sufficient for $Q$, while $Q \\Rightarrow P$ makes $P$ necessary. Having both is exactly the meaning of 'necessary and sufficient'.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Summarise the three biconditionals.",
          "workingLatex": "\\Delta > 0 \\iff \\text{2 roots}, \\ \\Delta = 0 \\iff \\text{1 root}, \\ \\Delta < 0 \\iff \\text{0 roots}",
          "explanation": "Collecting the results, the sign of the discriminant is a complete and reliable test for the number of real roots. Each equivalence is a necessary and sufficient condition.",
          "diagram": null
        }
      ],
      "finalAnswer": "Completing the square gives $\\left(x+\\tfrac{b}{2a}\\right)^2 = \\tfrac{\\Delta}{4a^2}$ with $4a^2>0$, so the sign of $\\Delta$ fixes the root count: $\\Delta>0 \\iff$ two distinct real roots, $\\Delta=0 \\iff$ one repeated root, $\\Delta<0 \\iff$ no real roots. Each discriminant condition is necessary and sufficient for its root-count."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "proof",
      "inequality",
      "absolute value",
      "quantifiers"
    ],
    "questionText": "Prove the triangle inequality $|x + y| \\le |x| + |y|$ for all real numbers $x$ and $y$. Make the universal nature of the claim explicit, and determine the necessary and sufficient condition on $x$ and $y$ for equality to hold.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the universal claim and the plan.",
          "workingLatex": "\\forall x, y \\in \\mathbb{R}: \\ |x + y| \\le |x| + |y|",
          "explanation": "The claim must hold for every real pair, so we prove it in general rather than by examples. The cleanest route is to sandwich $x+y$ between fixed bounds and then convert to a modulus.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Bound x by its own modulus.",
          "workingLatex": "-|x| \\le x \\le |x|",
          "explanation": "Every real number lies between the negative and positive versions of its size. This double inequality is true whether $x$ is positive, negative or zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Bound y in the same way.",
          "workingLatex": "-|y| \\le y \\le |y|",
          "explanation": "The identical fact holds for $y$. Having both variables trapped between symmetric bounds lets us combine them.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two double inequalities.",
          "workingLatex": "-(|x| + |y|) \\le x + y \\le |x| + |y|",
          "explanation": "Adding inequalities that point the same way preserves the direction. This traps the sum $x+y$ between $-(|x|+|y|)$ and $+(|x|+|y|)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the modulus characterisation.",
          "workingLatex": "-a \\le t \\le a \\ (a \\ge 0) \\iff |t| \\le a",
          "explanation": "Saying a quantity lies between $-a$ and $a$ is exactly the same as saying its modulus is at most $a$. This is the bridge from the sandwich to an inequality about $|x+y|$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply it to finish the main inequality.",
          "workingLatex": "|x + y| \\le |x| + |y| \\quad \\forall x, y \\in \\mathbb{R} \\qquad \\blacksquare",
          "explanation": "Taking $t = x+y$ and $a = |x|+|y|$ in the previous line gives the triangle inequality directly. It holds for all reals, proving the universal statement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Prepare the equality analysis by squaring.",
          "workingLatex": "|x+y|^2 = (x+y)^2 = x^2 + 2xy + y^2",
          "explanation": "Both sides of the inequality are non-negative, so we may compare their squares without changing which is larger. Squaring removes the modulus on the left cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Square the right-hand side.",
          "workingLatex": "(|x|+|y|)^2 = x^2 + 2|x||y| + y^2 = x^2 + 2|xy| + y^2",
          "explanation": "Expanding and using $|x||y| = |xy|$ gives a form ready to compare with the left square. The only difference between the two squares is in the cross term.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the difference of the squares.",
          "workingLatex": "(|x|+|y|)^2 - |x+y|^2 = 2(|xy| - xy)",
          "explanation": "Subtracting the two expanded squares cancels the $x^2$ and $y^2$ terms, leaving only twice the gap between $|xy|$ and $xy$. This gap is where equality is won or lost.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the sign of the difference.",
          "workingLatex": "|xy| \\ge xy \\Rightarrow 2(|xy| - xy) \\ge 0",
          "explanation": "A number is never greater than its own modulus, so $|xy| \\ge xy$ always. This re-confirms the inequality and shows the difference is zero only when $|xy| = xy$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Link equal squares to equal values.",
          "workingLatex": "|x+y| \\ge 0, \\ |x|+|y| \\ge 0 \\Rightarrow (\\text{equal squares} \\iff \\text{equal values})",
          "explanation": "For non-negative quantities, they are equal exactly when their squares are equal. So equality in the triangle inequality happens precisely when the difference of squares is zero.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve the equality condition on the cross term.",
          "workingLatex": "|xy| = xy \\iff xy \\ge 0",
          "explanation": "A quantity equals its own modulus exactly when it is non-negative. So the difference of squares vanishes if and only if $xy \\ge 0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the equality condition.",
          "workingLatex": "|x+y| = |x| + |y| \\iff xy \\ge 0",
          "explanation": "Equality holds exactly when $x$ and $y$ have the same sign or at least one of them is zero. When they have opposite signs there is genuine cancellation and the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Express the condition as necessary and sufficient.",
          "workingLatex": "xy \\ge 0 \\text{ is necessary and sufficient for equality}",
          "explanation": "The proof shows $xy \\ge 0$ both forces equality and is forced by it, so it is exactly equivalent to equality. This completes the description of when the triangle inequality is tight.",
          "diagram": null
        }
      ],
      "finalAnswer": "From $-|x| \\le x \\le |x|$ and $-|y| \\le y \\le |y|$, adding gives $-(|x|+|y|) \\le x+y \\le |x|+|y|$, i.e. $|x+y| \\le |x|+|y|$ for all real $x,y$. Comparing squares, $(|x|+|y|)^2 - |x+y|^2 = 2(|xy|-xy)$, so equality holds if and only if $xy \\ge 0$ (same sign or a zero), which is necessary and sufficient."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "expression",
    "tags": [
      "logic",
      "biconditional",
      "geometry",
      "triangle",
      "necessary and sufficient"
    ],
    "questionText": "Let $ABC$ be a triangle with sides $a = BC$, $b = CA$, $c = AB$ opposite the interior angles $A$, $B$, $C$ respectively. Prove that the triangle is equilateral if and only if it is equiangular (all three angles equal to $60^\\circ$). Prove both directions, and phrase your final conclusion using necessary and sufficient conditions.",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "geometry",
      "description": "Triangle ABC with its three sides and three interior angles labelled, used to relate equal sides to equal angles.",
      "elements": [
        "Triangle ABC",
        "Side a = BC, opposite angle A",
        "Side b = CA, opposite angle B",
        "Side c = AB, opposite angle C",
        "Interior angles A, B, C at vertices A, B, C"
      ]
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the biconditional and the plan.",
          "workingLatex": "\\text{Prove: equilateral } (a=b=c) \\iff \\text{equiangular } (A=B=C=60^\\circ)",
          "explanation": "The statement joins two properties with 'if and only if', so it must be proved in both directions. We prove equilateral implies equiangular first, then the converse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Record the angle-sum fact.",
          "workingLatex": "A + B + C = 180^\\circ",
          "explanation": "The interior angles of any triangle add to $180^\\circ$. This is what will pin the common angle down to a specific value once we know the angles are equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Forward direction: assume equilateral.",
          "workingLatex": "\\text{Assume } a = b = c",
          "explanation": "We start from all three sides being equal and aim to deduce the angles. The isosceles-triangle theorem links equal sides to equal opposite angles.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the isosceles theorem to one pair.",
          "workingLatex": "b = c \\Rightarrow B = C \\quad (\\text{equal sides} \\Rightarrow \\text{equal opposite angles})",
          "explanation": "Sides $b$ and $c$ are opposite angles $B$ and $C$, so equal sides force those angles to be equal. This is the base-angles property of an isosceles triangle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the isosceles theorem to a second pair.",
          "workingLatex": "a = b \\Rightarrow A = B",
          "explanation": "Repeating the argument for sides $a$ and $b$, which are opposite angles $A$ and $B$, gives another equal pair. Two overlapping equalities will chain all three angles together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine to get all angles equal.",
          "workingLatex": "\\Rightarrow A = B = C",
          "explanation": "From $A=B$ and $B=C$ the three angles are all equal to one another. The triangle is therefore equiangular in the sense of having three equal angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the common angle.",
          "workingLatex": "3A = 180^\\circ \\Rightarrow A = B = C = 60^\\circ",
          "explanation": "Substituting three equal angles into the angle sum gives $3A = 180^\\circ$. Dividing shows each angle is exactly $60^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the forward direction.",
          "workingLatex": "\\text{equilateral} \\Rightarrow \\text{equiangular } (60^\\circ \\text{ each})",
          "explanation": "Equal sides have forced equal angles, each measuring $60^\\circ$. This completes the first implication.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reverse direction: assume equiangular.",
          "workingLatex": "\\text{Assume } A = B = C = 60^\\circ",
          "explanation": "Now we begin from equal angles and must recover equal sides. The converse of the isosceles theorem provides the needed link.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Apply the converse isosceles theorem once.",
          "workingLatex": "B = C \\Rightarrow b = c \\quad (\\text{equal angles} \\Rightarrow \\text{equal opposite sides})",
          "explanation": "If two angles are equal then the sides opposite them are equal; this is the converse of the base-angles property, and also follows from the sine rule. So $b = c$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the converse isosceles theorem again.",
          "workingLatex": "A = B \\Rightarrow a = b",
          "explanation": "Using another equal pair of angles gives a second pair of equal sides. Chaining these will force all three sides to agree.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Combine to get all sides equal.",
          "workingLatex": "\\Rightarrow a = b = c",
          "explanation": "From $a=b$ and $b=c$ all three sides are equal to one another. The triangle is therefore equilateral.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude the reverse direction.",
          "workingLatex": "\\text{equiangular} \\Rightarrow \\text{equilateral}",
          "explanation": "Equal angles have forced equal sides, completing the second implication. Both directions are now established.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine into the biconditional.",
          "workingLatex": "\\text{equilateral} \\iff \\text{equiangular}",
          "explanation": "Since each property implies the other, they are equivalent. Being equilateral is a necessary and sufficient condition for being equiangular, and vice versa.",
          "diagram": null
        }
      ],
      "finalAnswer": "Forward: $a=b=c$ with the isosceles theorem gives $A=B=C$, and the angle sum makes each $60^\\circ$. Reverse: $A=B=C=60^\\circ$ with the converse isosceles theorem gives $a=b=c$. Hence a triangle is equilateral $\\iff$ it is equiangular; each condition is necessary and sufficient for the other."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "logic",
      "equivalence",
      "necessary and sufficient",
      "completing the square",
      "discriminant"
    ],
    "questionText": "Consider the quadratic expression $ax^2 + bx + c$, where $a, b, c$ are real numbers and $a \\neq 0$. Call it a perfect square trinomial if it can be written as $a(x+d)^2$ for some real number $d$. Let $P$ be the statement '$ax^2+bx+c$ is a perfect square trinomial' and let $Q$ be the statement '$b^2 = 4ac$'. Prove that $P \\Leftrightarrow Q$ by proving both directions, and hence describe the relationship between the two conditions using the language of necessary and sufficient conditions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set out the two statements and the goal.",
          "workingLatex": "P:\\ ax^2+bx+c = a(x+d)^2 \\text{ for some real } d, \\qquad Q:\\ b^2 = 4ac",
          "explanation": "A biconditional $P \\Leftrightarrow Q$ is really two separate claims joined together, so before any algebra we write down exactly what each side asserts. This keeps us honest about what has to be proved in each direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the intuitive reason the discriminant should appear.",
          "workingLatex": "b^2 - 4ac = \\text{discriminant}, \\qquad b^2 = 4ac \\Leftrightarrow b^2 - 4ac = 0",
          "explanation": "A perfect square such as $a(x+d)^2$ touches zero at exactly one point $x=-d$, meaning a single repeated root. The discriminant $b^2-4ac$ counts real roots, so 'repeated root' matching 'discriminant zero' is why the target condition is $b^2=4ac$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Begin the forward direction by assuming P.",
          "workingLatex": "\\text{Assume } P:\\quad ax^2+bx+c = a(x+d)^2",
          "explanation": "To prove $P \\Rightarrow Q$ we start by supposing $P$ is true and aim to reach $Q$. Assuming the perfect-square form gives us a concrete expression to expand and compare.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the perfect-square form.",
          "workingLatex": "a(x+d)^2 = a\\left(x^2 + 2dx + d^2\\right) = ax^2 + 2ad\\,x + ad^2",
          "explanation": "Expanding lets us line the assumed form up against the original $ax^2+bx+c$. Once both are written as standard quadratics, matching coefficients is straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Match coefficients of like powers of x.",
          "workingLatex": "b = 2ad, \\qquad c = ad^2",
          "explanation": "Two quadratics are equal for all $x$ exactly when their matching coefficients agree. Comparing the $x$ terms gives $b=2ad$ and the constants give $c=ad^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute b squared from the matched coefficient.",
          "workingLatex": "b^2 = (2ad)^2 = 4a^2 d^2",
          "explanation": "We square the expression for $b$ so that we can compare it directly with $4ac$. Squaring $2ad$ produces the factor $4a^2d^2$ we will need.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute 4ac from the matched coefficient.",
          "workingLatex": "4ac = 4a\\,(ad^2) = 4a^2 d^2",
          "explanation": "Substituting $c=ad^2$ into $4ac$ gives exactly the same quantity as $b^2$. Building both sides independently and seeing them coincide is the cleanest way to establish the equality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the forward implication.",
          "workingLatex": "b^2 = 4a^2 d^2 = 4ac \\quad\\Rightarrow\\quad P \\Rightarrow Q",
          "explanation": "Since $b^2$ and $4ac$ both equal $4a^2d^2$, they are equal to each other, so $Q$ holds. This proves that being a perfect square is enough to force $b^2=4ac$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Begin the reverse direction by completing the square.",
          "workingLatex": "\\text{Assume } Q:\\ b^2=4ac.\\quad ax^2+bx+c = a\\left(x^2 + \\tfrac{b}{a}x\\right) + c",
          "explanation": "Now we assume $Q$ and try to reach $P$. Factoring $a$ out of the quadratic terms is the first move of completing the square, which is the natural way to reveal a perfect-square form.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Finish completing the square.",
          "workingLatex": "= a\\left(x + \\tfrac{b}{2a}\\right)^2 - a\\cdot\\tfrac{b^2}{4a^2} + c = a\\left(x + \\tfrac{b}{2a}\\right)^2 + \\left(c - \\tfrac{b^2}{4a}\\right)",
          "explanation": "Completing the square always leaves a squared bracket plus a constant remainder. Whether the expression is a perfect square depends entirely on whether that leftover constant vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the assumption to kill the constant remainder.",
          "workingLatex": "b^2 = 4ac \\;\\Rightarrow\\; c - \\tfrac{b^2}{4a} = c - \\tfrac{4ac}{4a} = c - c = 0",
          "explanation": "This is where the hypothesis $b^2=4ac$ does its work: it makes the leftover constant exactly zero. Without that condition a nonzero remainder would spoil the perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude the reverse implication.",
          "workingLatex": "ax^2+bx+c = a\\left(x + \\tfrac{b}{2a}\\right)^2 \\quad\\Rightarrow\\quad Q \\Rightarrow P",
          "explanation": "With the remainder gone, the expression is $a(x+d)^2$ with $d=\\tfrac{b}{2a}$, which is precisely the definition of a perfect square trinomial. So $Q$ is enough to force $P$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Combine both directions into the biconditional.",
          "workingLatex": "P \\Rightarrow Q \\ \\text{and}\\ Q \\Rightarrow P \\quad\\Rightarrow\\quad P \\Leftrightarrow Q",
          "explanation": "Having proved each implication separately, the two arrows combine into a single two-way arrow. A statement is proved 'if and only if' exactly when both one-way implications hold.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion in necessary/sufficient language.",
          "workingLatex": "b^2 = 4ac \\ \\text{is necessary and sufficient for}\\ ax^2+bx+c\\ \\text{to be a perfect square}",
          "explanation": "Because each condition forces the other, $b^2=4ac$ is both necessary and sufficient for the expression to be a perfect square. Sufficient means it guarantees the square; necessary means the square cannot occur without it.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P \\Leftrightarrow Q$: the quadratic $ax^2+bx+c$ (with $a \\neq 0$) is a perfect square trinomial if and only if $b^2 = 4ac$. Hence $b^2=4ac$ is a necessary and sufficient condition for the expression to be a perfect square."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "logic",
      "quantifiers",
      "sigma notation",
      "proof by induction",
      "series"
    ],
    "questionText": "The statement $S$ claims that for every natural number $n$, the sum of the first $n$ odd numbers equals $n^2$; that is, $\\forall n \\in \\mathbb{N}: \\; 1 + 3 + 5 + \\cdots + (2n-1) = n^2$. Rewrite the left-hand side using summation ($\\Sigma$) notation, and prove the statement. You may use a direct algebraic argument, a proof by induction, or both.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite the sum in sigma notation.",
          "workingLatex": "1 + 3 + 5 + \\cdots + (2n-1) = \\sum_{k=1}^{n} (2k-1)",
          "explanation": "The $k$-th odd number is $2k-1$, so the whole list is captured by letting $k$ run from $1$ to $n$. Sigma notation turns a vague '$\\cdots$' into a precise object we can manipulate algebraically.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the intuitive picture behind the result.",
          "workingLatex": "\\underbrace{1}_{1^2} + \\underbrace{3}_{2^2-1^2} + \\underbrace{5}_{3^2-2^2} + \\cdots",
          "explanation": "Each new odd number is exactly the extra area needed to grow an $m \\times m$ square into an $(m{+}1) \\times (m{+}1)$ square, since $(m+1)^2 - m^2 = 2m+1$. Stacking these L-shaped layers is why the running total is always a perfect square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Name the sum and state the target.",
          "workingLatex": "S_n = \\sum_{k=1}^{n} (2k-1), \\qquad \\text{goal: } S_n = n^2",
          "explanation": "Giving the sum a name lets us reason about it as a single quantity. Stating the goal explicitly keeps the algebra pointed at the right destination.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the sum into two simpler sums.",
          "workingLatex": "S_n = \\sum_{k=1}^{n} (2k-1) = 2\\sum_{k=1}^{n} k \\; - \\; \\sum_{k=1}^{n} 1",
          "explanation": "Summation is linear, so a sum of differences can be separated term by term and constants pulled out front. This breaks the problem into two standard sums we already know.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the sum of the first n integers.",
          "workingLatex": "\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}",
          "explanation": "Pairing the first and last terms, the second and second-last, and so on, each pair totals $n+1$ and there are $n/2$ such pairs, giving $\\tfrac{n(n+1)}{2}$. This is the classic Gauss pairing result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the sum of the constant term.",
          "workingLatex": "\\sum_{k=1}^{n} 1 = n",
          "explanation": "Adding the number $1$ to itself $n$ times simply gives $n$. It is easy to overlook, but this term is essential to cancel the extra piece from doubling.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the two known sums.",
          "workingLatex": "S_n = 2 \\cdot \\frac{n(n+1)}{2} - n",
          "explanation": "Replacing each piece with its closed form turns the sum into ordinary algebra. From here it is pure simplification.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to reach the answer.",
          "workingLatex": "S_n = n(n+1) - n = n^2 + n - n = n^2",
          "explanation": "The factor of $2$ cancels the $2$ in the denominator, and subtracting $n$ removes the leftover linear term. What remains is exactly $n^2$, completing the direct proof.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the algebraic conclusion for all n.",
          "workingLatex": "\\forall n \\in \\mathbb{N}: \\; \\sum_{k=1}^{n} (2k-1) = n^2",
          "explanation": "The manipulation used no special value of $n$, so the identity holds for every natural number, which is exactly what the universal quantifier demands.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up an independent proof by induction.",
          "workingLatex": "P(n): \\; \\sum_{k=1}^{n} (2k-1) = n^2",
          "explanation": "Induction confirms the result by a different route, which strengthens confidence and models the standard technique for statements quantified over $\\mathbb{N}$. We prove a base case and then a step that carries truth from one integer to the next.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the base case.",
          "workingLatex": "n=1:\\quad \\sum_{k=1}^{1}(2k-1) = 2(1)-1 = 1 = 1^2",
          "explanation": "The base case anchors the whole chain of implications. With a single term the sum is $1$, which matches $1^2$, so $P(1)$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the inductive hypothesis.",
          "workingLatex": "\\text{Assume } P(m):\\quad \\sum_{k=1}^{m}(2k-1) = m^2",
          "explanation": "We suppose the statement holds for some arbitrary $m$ and use it as a stepping stone. This assumption is temporary leverage, not the thing we are trying to prove outright.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the next odd term.",
          "workingLatex": "\\sum_{k=1}^{m+1}(2k-1) = \\underbrace{\\sum_{k=1}^{m}(2k-1)}_{=\\,m^2} + \\big(2(m+1)-1\\big) = m^2 + (2m+1)",
          "explanation": "The sum to $m+1$ terms is the sum to $m$ terms plus one extra odd number. Using the hypothesis for the first chunk turns the expression into simple algebra.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Recognise the perfect square.",
          "workingLatex": "m^2 + 2m + 1 = (m+1)^2 \\quad\\Rightarrow\\quad P(m) \\Rightarrow P(m+1)",
          "explanation": "The result $m^2+2m+1$ factors exactly as $(m+1)^2$, which is the statement $P(m+1)$. So truth at $m$ forces truth at $m+1$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Conclude by the principle of induction.",
          "workingLatex": "P(1)\\ \\text{true and}\\ P(m)\\Rightarrow P(m+1) \\;\\Rightarrow\\; \\forall n \\in \\mathbb{N}:\\ P(n)",
          "explanation": "A true base case plus a working step gives an unbroken ladder reaching every natural number. Both the algebraic argument and induction confirm the universally quantified statement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle \\sum_{k=1}^{n} (2k-1) = 2\\cdot\\frac{n(n+1)}{2} - n = n^2$ for all $n \\in \\mathbb{N}$, confirmed independently by induction (base $1=1^2$; step $m^2+(2m+1)=(m+1)^2$)."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": [
      "logic",
      "counterexample",
      "converse",
      "necessary and sufficient",
      "primes"
    ],
    "questionText": "Consider the statement: 'if $n$ is prime, then $2^n - 1$ is prime'. Investigate whether this statement is true. If it is false, disprove it with an explicit counterexample. Then examine its converse, decide whether the converse is true, and state precisely whether '$n$ is prime' is a necessary condition, a sufficient condition, both, or neither, for '$2^n-1$ is prime'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the logical structure of the statement.",
          "workingLatex": "P(n):\\ n \\text{ is prime}, \\qquad Q(n):\\ 2^n-1 \\text{ is prime}; \\qquad \\text{claim: } P(n) \\Rightarrow Q(n)",
          "explanation": "Numbers of the form $2^n-1$ are called Mersenne numbers, and the claim is a universal implication over all $n$. Naming $P$ and $Q$ clarifies exactly which direction is being asserted.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide how such a statement can be disproved.",
          "workingLatex": "\\text{To disprove } \\forall n\\,(P \\Rightarrow Q): \\text{ find one } n \\text{ with } P(n) \\text{ true but } Q(n) \\text{ false}",
          "explanation": "A single counterexample is enough to destroy a 'for all' claim, whereas no finite number of successes could ever prove it. So our search is for one prime $n$ whose Mersenne number is composite.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Check small primes to build intuition.",
          "workingLatex": "n=2\\!:\\,3,\\quad n=3\\!:\\,7,\\quad n=5\\!:\\,31,\\quad n=7\\!:\\,127 \\ (\\text{all prime})",
          "explanation": "Testing the first few primes shows the pattern holds early, which is exactly why the claim is tempting. This also warns us that surface-level evidence can be misleading.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Emphasise why examples are not a proof.",
          "workingLatex": "P(2),P(3),P(5),P(7) \\text{ hold} \\;\\not\\Rightarrow\\; \\forall n\\,(P\\Rightarrow Q)",
          "explanation": "Confirming several cases never establishes a universal statement, because the next case could always fail. This is the core discipline of the topic: verify structure, do not just pattern-match.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the next prime, n = 11.",
          "workingLatex": "n=11 \\ (\\text{prime}): \\quad 2^{11} = 2048, \\quad 2^{11}-1 = 2047",
          "explanation": "The number $11$ is prime, so $P(11)$ is true and it is a legitimate test case. We now need to determine whether $2047$ is prime or composite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise 2047.",
          "workingLatex": "2047 = 23 \\times 89",
          "explanation": "Trial division by small primes eventually reveals the factor $23$, and dividing gives $89$. Finding any factor other than $1$ and itself is enough to show a number is composite.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify the factorisation.",
          "workingLatex": "23 \\times 89 = 23 \\times 90 - 23 = 2070 - 23 = 2047 \\;\\checkmark",
          "explanation": "Checking the multiplication guards against arithmetic slips in the counterexample, which must be airtight. The product confirms $2047$ genuinely equals $23 \\times 89$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the original statement is false.",
          "workingLatex": "P(11) \\text{ true},\\ Q(11) \\text{ false} \\;\\Rightarrow\\; P \\Rightarrow Q \\text{ is FALSE}",
          "explanation": "We have a prime $n=11$ whose Mersenne number $2047$ is composite, so the implication fails for this $n$. One valid counterexample settles it: the statement is false.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the converse and set out to test it.",
          "workingLatex": "\\text{Converse } Q \\Rightarrow P: \\ \\text{if } 2^n-1 \\text{ is prime then } n \\text{ is prime}",
          "explanation": "The converse swaps hypothesis and conclusion, and its truth is logically independent of the original. We must judge it on its own merits rather than assume it follows.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Prove the converse via its contrapositive.",
          "workingLatex": "\\text{Contrapositive: } n \\text{ composite} \\Rightarrow 2^n-1 \\text{ composite}. \\ \\text{Let } n = ab,\\ 1<a,b<n",
          "explanation": "Proving the contrapositive is logically equivalent and far easier here. If $n$ is composite we can write it as a product $ab$ with both factors strictly between $1$ and $n$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply the factorisation identity for Mersenne numbers.",
          "workingLatex": "2^{ab}-1 = (2^a-1)\\left(2^{a(b-1)} + 2^{a(b-2)} + \\cdots + 2^a + 1\\right)",
          "explanation": "Using $x^b-1 = (x-1)(x^{b-1}+\\cdots+1)$ with $x = 2^a$ shows $2^a-1$ divides $2^n-1$. This exposes a genuine factor built from the composite structure of $n$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the divisor is proper.",
          "workingLatex": "1 < a < n \\;\\Rightarrow\\; 1 < 2^a - 1 < 2^n - 1",
          "explanation": "Because $a$ lies strictly between $1$ and $n$, the factor $2^a-1$ is bigger than $1$ but smaller than $2^n-1$. A proper factor greater than $1$ means the number is composite.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude the converse is true.",
          "workingLatex": "n \\text{ composite} \\Rightarrow 2^n-1 \\text{ composite} \\;\\equiv\\; 2^n-1 \\text{ prime} \\Rightarrow n \\text{ prime (TRUE)}",
          "explanation": "The contrapositive holds, so the converse it is equivalent to also holds. Whenever a Mersenne number is prime, its exponent must have been prime.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare the two directions.",
          "workingLatex": "P \\Rightarrow Q \\text{ FALSE}, \\quad Q \\Rightarrow P \\text{ TRUE} \\;\\Rightarrow\\; P \\not\\Leftrightarrow Q",
          "explanation": "One direction fails and the other holds, so the statements are not equivalent and no two-way arrow connects them. This asymmetry is the whole point of the question.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Translate into necessary/sufficient language.",
          "workingLatex": "Q \\Rightarrow P \\Rightarrow P \\text{ necessary for } Q; \\qquad P \\not\\Rightarrow Q \\Rightarrow P \\text{ not sufficient for } Q",
          "explanation": "Since $2^n-1$ prime forces $n$ prime, primality of $n$ is required (necessary) for the Mersenne number to be prime. But since primality of $n$ does not guarantee it, primality of $n$ is not sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the final classification.",
          "workingLatex": "\\text{'}n \\text{ prime'} \\text{ is necessary but not sufficient for '}2^n-1 \\text{ prime'}",
          "explanation": "Pulling the two directions together gives the precise verdict: primality of $n$ is a necessary but not a sufficient condition. The failed case $n=11$ is exactly what breaks sufficiency.",
          "diagram": null
        }
      ],
      "finalAnswer": "The statement is FALSE: $n=11$ is prime but $2^{11}-1 = 2047 = 23 \\times 89$ is composite. Its converse '$2^n-1$ prime $\\Rightarrow n$ prime' is TRUE. Hence the statements are not equivalent, and '$n$ is prime' is a necessary but not sufficient condition for '$2^n-1$ is prime'."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "proof",
    "tags": [
      "logic",
      "equivalence",
      "necessary and sufficient",
      "rational numbers",
      "proof structure"
    ],
    "questionText": "A real number $x$ is rational if $x = \\tfrac{p}{q}$ for some integers $p$ and $q$ with $q \\neq 0$. State precisely the biconditional '$x$ is rational $\\Leftrightarrow$ $x$ has a terminating or recurring (eventually periodic) decimal expansion', and lay out the structure of its proof. For each direction, identify clearly what must be established and give the key idea, emphasising the logical structure over exhaustive rigour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the biconditional precisely.",
          "workingLatex": "\\forall x \\in \\mathbb{R}: \\quad x \\in \\mathbb{Q} \\;\\Leftrightarrow\\; x \\text{ has a terminating or recurring decimal expansion}",
          "explanation": "Framing the claim with a quantifier over all real $x$ makes clear it is a general theorem, not a statement about one number. Writing $\\mathbb{Q} = \\{p/q : p,q \\in \\mathbb{Z},\\ q \\neq 0\\}$ fixes exactly what 'rational' means.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clarify the vocabulary of decimal expansions.",
          "workingLatex": "\\text{terminating: } 0.375; \\quad \\text{recurring: } 0.1\\overline{6}; \\quad \\text{both are 'eventually periodic'}",
          "explanation": "A terminating decimal can be seen as one whose repeating block is $0$, so both cases fall under 'eventually periodic'. Uniting them avoids treating termination as a genuinely separate phenomenon.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain what proving a biconditional requires.",
          "workingLatex": "A \\Leftrightarrow B \\ \\text{needs}\\ (A \\Rightarrow B)\\ \\text{and}\\ (B \\Rightarrow A)",
          "explanation": "An 'if and only if' is two implications that must each be proved. Splitting the task in two is the essential structural move, since one direction can be easy while the other is subtle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the forward direction and its obligation.",
          "workingLatex": "(\\Rightarrow)\\ \\ x \\in \\mathbb{Q} \\Rightarrow x \\text{ terminates or recurs}",
          "explanation": "Here we start from a fraction and must show its decimal cannot wander on forever without pattern. The obligation is to explain why some structure is forced on the digits.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Introduce long division as the mechanism.",
          "workingLatex": "x = \\tfrac{p}{q}: \\ \\text{long division produces at each stage a remainder } r,\\ 0 \\le r < q",
          "explanation": "Converting a fraction to a decimal is repeated division, and each stage leaves a remainder. Watching those remainders, rather than the digits themselves, is the key to the whole argument.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Observe the finiteness of possible remainders.",
          "workingLatex": "r \\in \\{0, 1, 2, \\ldots, q-1\\} \\quad (\\text{only } q \\text{ possibilities})",
          "explanation": "Every remainder is a whole number less than $q$, so there are only finitely many values it can take. Finiteness is the pressure that will force repetition.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the pigeonhole principle.",
          "workingLatex": "\\text{among the first } q+1 \\text{ remainders, two must coincide (pigeonhole)}",
          "explanation": "With only $q$ possible remainders, after at most $q+1$ steps some remainder must recur. This is the pigeonhole principle: more slots filled than distinct labels available forces a repeat.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why a repeated remainder forces periodicity.",
          "workingLatex": "\\text{remainder } r \\text{ determines the next digit and next remainder} \\Rightarrow \\text{the block repeats}",
          "explanation": "The division process is deterministic: the current remainder alone dictates the next digit and remainder. So once a remainder reappears, the entire sequence of digits after it must cycle identically, giving a recurring decimal (or a terminating one if the remainder is $0$).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Close the forward direction.",
          "workingLatex": "x \\in \\mathbb{Q} \\Rightarrow \\text{decimal terminates or recurs} \\quad \\checkmark",
          "explanation": "The finiteness of remainders plus determinism together guarantee eventual periodicity for every fraction. That completes the first of the two required implications.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the reverse direction and its obligation.",
          "workingLatex": "(\\Leftarrow)\\ \\ x \\text{ terminates or recurs} \\Rightarrow x \\in \\mathbb{Q}",
          "explanation": "Now we begin with a patterned decimal and must produce an actual fraction. The obligation is to exhibit integers $p$ and $q$ with $x = p/q$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Handle the terminating case.",
          "workingLatex": "0.d_1 d_2 \\cdots d_n = \\frac{d_1 d_2 \\cdots d_n}{10^{\\,n}} \\in \\mathbb{Q}",
          "explanation": "A decimal that stops after $n$ places is just an integer divided by a power of ten. This case is immediate and needs no machinery beyond reading off the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Set up the recurring case as a geometric series.",
          "workingLatex": "0.\\overline{d_1 \\cdots d_m} = \\frac{B}{10^m} + \\frac{B}{10^{2m}} + \\cdots, \\quad B = \\overline{d_1 \\cdots d_m}",
          "explanation": "A purely repeating decimal is the same block $B$ shifted further right each time, which is a geometric series with ratio $10^{-m}$. Recognising the geometric structure is what makes the sum computable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sum the series to a fraction.",
          "workingLatex": "= \\frac{B/10^m}{1 - 10^{-m}} = \\frac{B}{10^m - 1} \\in \\mathbb{Q}",
          "explanation": "The geometric series formula collapses the infinite sum into a single fraction with integer numerator and denominator. Any eventually periodic decimal is a rational prefix plus such a tail, so it too is rational.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Close the reverse direction.",
          "workingLatex": "x \\text{ terminates or recurs} \\Rightarrow x \\in \\mathbb{Q} \\quad \\checkmark",
          "explanation": "Both a terminating decimal and a recurring one have been written explicitly as fractions. That discharges the second implication.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Assemble the biconditional and the condition.",
          "workingLatex": "(\\Rightarrow)\\ \\text{and}\\ (\\Leftarrow) \\;\\Rightarrow\\; x \\in \\mathbb{Q} \\Leftrightarrow x \\text{ terminates or recurs}",
          "explanation": "With both implications proved, the two-way arrow stands. Having a terminating-or-recurring decimal is therefore both necessary and sufficient for a real number to be rational.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\in \\mathbb{Q} \\Leftrightarrow x$ has a terminating or recurring decimal expansion. Forward: long division of $p/q$ has only $q$ possible remainders, so by pigeonhole a remainder repeats and the digits become periodic. Reverse: a terminating decimal is $\\tfrac{\\text{integer}}{10^n}$, and a recurring block sums as a geometric series to $\\tfrac{B}{10^m-1}$; both are fractions. Hence the decimal condition is necessary and sufficient for rationality."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "proof",
    "tags": [
      "logic",
      "completing the square",
      "discriminant",
      "quadratics",
      "equivalence"
    ],
    "questionText": "Prove that $x^2 - 6x + 10 > 0$ for all real values of $x$ by completing the square. Then compute the discriminant of $x^2 - 6x + 10$, explain how a negative discriminant relates to your proof, and state the general equivalence '(for $a>0$) the quadratic is positive for all real $x$ $\\Leftrightarrow$ it has no real roots'.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the claim and identify the coefficients.",
          "workingLatex": "\\text{Claim: } \\forall x \\in \\mathbb{R},\\ x^2 - 6x + 10 > 0; \\qquad a=1,\\ b=-6,\\ c=10,\\ a>0",
          "explanation": "Writing the claim with '$\\forall x$' reminds us we must cover every real number, not just a few test values. Noting that $a=1>0$ tells us the parabola opens upwards, which will matter for the interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose a strategy and give its intuition.",
          "workingLatex": "\\text{aim: write it as } (\\text{something})^2 + (\\text{positive constant})",
          "explanation": "A square of a real number can never be negative, so if we can express the quadratic as a square plus a positive amount, positivity for all $x$ is immediate. Completing the square is the tool that produces exactly this form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Complete the square on the x-terms.",
          "workingLatex": "x^2 - 6x = (x-3)^2 - 9",
          "explanation": "Half of the coefficient $-6$ is $-3$, and $(x-3)^2$ expands to $x^2-6x+9$, which overshoots by $9$. Subtracting $9$ corrects for that, keeping the expression equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the whole quadratic.",
          "workingLatex": "x^2 - 6x + 10 = (x-3)^2 - 9 + 10 = (x-3)^2 + 1",
          "explanation": "Substituting back and combining the constants collapses the quadratic into a single square plus $1$. This is the decisive form for reading off its sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the non-negativity of a square.",
          "workingLatex": "(x-3)^2 \\ge 0 \\quad \\text{for all real } x",
          "explanation": "Any real number squared is at least zero, with equality only when the base is zero. This single fact is the engine of the whole proof.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the constant to bound the expression below.",
          "workingLatex": "(x-3)^2 + 1 \\ge 0 + 1 = 1",
          "explanation": "Adding $1$ to something that is at least $0$ gives something at least $1$. The expression can therefore never dip below $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude strict positivity.",
          "workingLatex": "x^2 - 6x + 10 \\ge 1 > 0 \\quad \\text{for all real } x",
          "explanation": "Since the value is always at least $1$, and $1$ is positive, the quadratic is strictly positive everywhere. This proves the claim.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Locate the minimum value.",
          "workingLatex": "\\min = 1 \\text{ at } x=3 \\ (\\text{where } (x-3)^2=0)",
          "explanation": "The smallest value occurs when the square is zero, namely at $x=3$, giving a minimum of $1$. Because even the minimum is above zero, the curve never reaches the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Connect positivity to the absence of roots.",
          "workingLatex": "x^2-6x+10 = 0 \\text{ has no solution, since the value is always } \\ge 1",
          "explanation": "A real root would be a value of $x$ making the expression zero, but we have shown it is always at least $1$. So the equation has no real roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = b^2 - 4ac = (-6)^2 - 4(1)(10) = 36 - 40 = -4",
          "explanation": "The discriminant is computed directly from the coefficients and independently measures how many real roots exist. Here it comes out negative.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the negative discriminant.",
          "workingLatex": "\\Delta = -4 < 0 \\;\\Rightarrow\\; \\text{no real roots (quadratic formula needs } \\sqrt{\\Delta})",
          "explanation": "The quadratic formula takes the square root of $\\Delta$, which has no real value when $\\Delta<0$. A negative discriminant therefore confirms there are no real roots, matching the completing-the-square finding.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the general equivalence for a > 0.",
          "workingLatex": "(a>0):\\quad ax^2+bx+c > 0\\ \\forall x \\;\\Leftrightarrow\\; \\text{no real roots} \\;\\Leftrightarrow\\; \\Delta < 0",
          "explanation": "When $a>0$ the parabola opens upward, so it lies entirely above the axis exactly when it never crosses it, i.e. has no real roots, i.e. $\\Delta<0$. The three descriptions are logically equivalent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the two methods agree.",
          "workingLatex": "\\text{completing square: } \\min = 1 > 0; \\quad \\text{discriminant: } \\Delta = -4 < 0",
          "explanation": "Both routes give the same verdict, which is a strong internal consistency check. A positive minimum and a negative discriminant are two faces of the same fact.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final conclusion.",
          "workingLatex": "x^2-6x+10 = (x-3)^2+1 > 0\\ \\forall x;\\ \\Delta=-4<0;\\ \\text{graph lies wholly above the } x\\text{-axis}",
          "explanation": "Because $a>0$ and there are no real roots, the parabola sits entirely above the $x$-axis, which is precisely why the expression is always positive. All three viewpoints reinforce one conclusion.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x^2 - 6x + 10 = (x-3)^2 + 1 \\ge 1 > 0$ for all real $x$. The discriminant is $\\Delta = 36 - 40 = -4 < 0$, confirming no real roots; since $a=1>0$, the parabola lies entirely above the $x$-axis. In general, for $a>0$, the quadratic is positive for all $x$ $\\Leftrightarrow$ it has no real roots $\\Leftrightarrow$ $\\Delta<0$."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": [
      "logic",
      "necessary and sufficient",
      "discriminant",
      "completing the square",
      "quadratics"
    ],
    "questionText": "Find the necessary and sufficient condition on the real constant $k$ for which $x^2 + kx + 9 > 0$ holds for all real $x$. Give your answer as an interval, prove both directions of the equivalence, and explain carefully why the endpoint values of $k$ are excluded.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the problem and identify coefficients.",
          "workingLatex": "\\text{Find all } k:\\ \\forall x \\in \\mathbb{R},\\ x^2+kx+9 > 0; \\qquad a=1,\\ b=k,\\ c=9,\\ a>0",
          "explanation": "We are hunting for the full set of $k$-values that keep the quadratic positive everywhere, so the answer will be a condition on $k$. Recording $a=1>0$ fixes that the parabola opens upward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Give the geometric intuition.",
          "workingLatex": "a>0 \\Rightarrow \\text{upward parabola; positive everywhere} \\Leftrightarrow \\text{never touches the } x\\text{-axis}",
          "explanation": "An upward-opening parabola stays strictly above the axis precisely when it has no real roots, because a root is a point where it meets the axis. This turns a positivity question into a question about roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Translate 'no real roots' into the discriminant.",
          "workingLatex": "\\text{no real roots} \\Leftrightarrow \\Delta < 0, \\qquad \\Delta = b^2 - 4ac = k^2 - 36",
          "explanation": "The discriminant decides the number of real roots, and strictly no roots corresponds to $\\Delta<0$. Computing it from the coefficients gives $k^2-36$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Record the equivalence chain to be solved.",
          "workingLatex": "x^2+kx+9 > 0\\ \\forall x \\;\\Leftrightarrow\\; \\text{no real roots} \\;\\Leftrightarrow\\; k^2 - 36 < 0",
          "explanation": "Chaining the equivalences shows the positivity condition reduces exactly to an inequality in $k$. Solving that inequality will give the required set.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the discriminant inequality.",
          "workingLatex": "k^2 - 36 < 0 \\Leftrightarrow k^2 < 36 \\Leftrightarrow |k| < 6 \\Leftrightarrow -6 < k < 6",
          "explanation": "The inequality $k^2<36$ means $k$ is within distance $6$ of zero, which is the interval from $-6$ to $6$. This is our candidate answer, still to be justified in both directions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the candidate answer.",
          "workingLatex": "k \\in (-6, 6)",
          "explanation": "The open interval $(-6,6)$ is the proposed necessary and sufficient condition. Because the question asks to prove both directions, we now verify it rather than stop at the discriminant shortcut.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Begin the sufficient direction by completing the square.",
          "workingLatex": "(\\Leftarrow)\\ \\text{assume } -6<k<6. \\quad x^2+kx+9 = \\left(x+\\tfrac{k}{2}\\right)^2 - \\tfrac{k^2}{4} + 9",
          "explanation": "To show the condition is sufficient we assume $-6<k<6$ and prove positivity directly. Completing the square exposes the minimum value cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the constant term after completing the square.",
          "workingLatex": "x^2+kx+9 = \\left(x+\\tfrac{k}{2}\\right)^2 + \\left(9 - \\tfrac{k^2}{4}\\right)",
          "explanation": "The quadratic is now a square bracket plus the constant $9-\\tfrac{k^2}{4}$. The sign of that constant controls whether the whole expression can stay positive.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Show the constant is positive under the assumption.",
          "workingLatex": "-6<k<6 \\Rightarrow k^2 < 36 \\Rightarrow \\tfrac{k^2}{4} < 9 \\Rightarrow 9 - \\tfrac{k^2}{4} > 0",
          "explanation": "The assumption bounds $k^2$ below $36$, so $\\tfrac{k^2}{4}$ stays below $9$ and the leftover constant is strictly positive. That positive floor is what we need.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude the sufficient direction.",
          "workingLatex": "\\left(x+\\tfrac{k}{2}\\right)^2 \\ge 0 \\;\\Rightarrow\\; x^2+kx+9 \\ge 9 - \\tfrac{k^2}{4} > 0 \\ \\forall x",
          "explanation": "A non-negative square added to a positive constant is always positive. So $-6<k<6$ guarantees the quadratic is positive for every real $x$; the condition is sufficient.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Begin the necessary direction.",
          "workingLatex": "(\\Rightarrow)\\ \\text{assume } x^2+kx+9 > 0\\ \\forall x. \\quad \\text{Least value occurs at } x=-\\tfrac{k}{2}",
          "explanation": "To show the condition is necessary we suppose positivity holds everywhere and deduce the bound on $k$. The tightest test is the minimum point, where the square bracket vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Force the minimum value to be positive.",
          "workingLatex": "\\min = 9 - \\tfrac{k^2}{4} > 0",
          "explanation": "If the expression is positive for all $x$, then in particular its smallest value must be positive. That minimum is exactly the constant $9-\\tfrac{k^2}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Solve to recover the interval.",
          "workingLatex": "9 - \\tfrac{k^2}{4} > 0 \\Rightarrow k^2 < 36 \\Rightarrow -6 < k < 6",
          "explanation": "Rearranging the minimum-value inequality returns exactly $-6<k<6$. So positivity everywhere cannot happen outside this interval, proving the condition is necessary.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check why the endpoints fail.",
          "workingLatex": "k=6:\\ x^2+6x+9=(x+3)^2=0 \\text{ at } x=-3; \\quad k=-6:\\ (x-3)^2=0 \\text{ at } x=3",
          "explanation": "At $k=\\pm 6$ the discriminant is zero, giving a repeated root where the quadratic equals $0$, not something $>0$. Because strict positivity fails at that single point, the endpoints are correctly excluded and the interval must be open.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Assemble the final biconditional.",
          "workingLatex": "x^2+kx+9 > 0\\ \\forall x \\;\\Leftrightarrow\\; k \\in (-6,6)",
          "explanation": "Both directions are proved, so membership of the open interval is the necessary and sufficient condition. The strict inequalities at the ends encode that the endpoints genuinely fail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k \\in (-6, 6)$, i.e. $-6 < k < 6$. Since $a=1>0$, positivity for all $x$ $\\Leftrightarrow$ no real roots $\\Leftrightarrow$ $\\Delta = k^2 - 36 < 0 \\Leftrightarrow |k| < 6$. The endpoints $k = \\pm 6$ give a repeated root where $(x \\pm 3)^2 = 0$, so the expression is $0$ rather than $>0$ there and they are excluded."
    }
  },
  {
    "id": "al.y1.pure.argument-notation.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Mathematical argument and notation",
    "subtopicId": "al.y1.pure.argument-notation",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "proof",
    "tags": [
      "logic",
      "counterexample",
      "biconditional",
      "necessary and sufficient",
      "geometry"
    ],
    "questionText": "Consider the statement: 'if a quadrilateral has four equal sides, then it is a square'. Show that this statement is false. Then state a corrected biconditional characterisation of a square of the form 'a quadrilateral is a square $\\Leftrightarrow$ it has four equal sides AND at least one right angle', prove both directions, and explain why the pair of conditions {four equal sides, one right angle} is necessary and sufficient for a square.",
    "questionDiagram": {
      "kind": "descriptive",
      "type": "comparison-figure",
      "description": "Two quadrilaterals drawn side by side, both with four equal-length sides, to contrast a rhombus (no right angle) against a square (right angles), showing that equal sides alone do not force a square.",
      "elements": [
        {
          "shape": "rhombus",
          "label": "Rhombus",
          "sides": "all four equal, length s",
          "angles": [
            "60 degrees",
            "120 degrees",
            "60 degrees",
            "120 degrees"
          ],
          "note": "four equal sides but not a square (counterexample)"
        },
        {
          "shape": "square",
          "label": "Square",
          "sides": "all four equal, length s",
          "angles": [
            "90 degrees",
            "90 degrees",
            "90 degrees",
            "90 degrees"
          ],
          "note": "four equal sides and right angles"
        }
      ]
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the logical structure.",
          "workingLatex": "P:\\ \\text{quadrilateral has four equal sides}, \\quad S:\\ \\text{it is a square}; \\quad \\text{claim } P \\Rightarrow S",
          "explanation": "The statement is a one-way implication, so it can be broken by a single shape satisfying $P$ but not $S$. Naming the conditions makes the target of the counterexample precise.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definitions involved.",
          "workingLatex": "\\text{square: four equal sides AND four right angles}; \\quad \\text{four equal sides alone: rhombus}",
          "explanation": "A square demands both equal sides and right angles, whereas 'four equal sides' by itself only defines a rhombus. Pinning down definitions is what lets us spot the gap in the claim.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Plan the disproof.",
          "workingLatex": "\\text{find a quadrilateral with four equal sides that is not a square}",
          "explanation": "Disproving $P \\Rightarrow S$ requires exactly one shape with equal sides but the wrong angles. A rhombus that is not a square is the natural candidate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Produce the counterexample.",
          "workingLatex": "\\text{rhombus with angles } 60^{\\circ}, 120^{\\circ}, 60^{\\circ}, 120^{\\circ} \\text{ (see diagram)}",
          "explanation": "This rhombus has all four sides equal yet none of its angles is a right angle, so it cannot be a square. It satisfies $P$ but violates $S$, exactly what a counterexample needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Conclude the original statement is false.",
          "workingLatex": "P \\text{ true}, \\ S \\text{ false for this shape} \\;\\Rightarrow\\; P \\Rightarrow S \\text{ is FALSE}",
          "explanation": "One valid counterexample is enough to refute the universal claim. Having four equal sides is therefore not sufficient to force a square.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note that equal sides is still necessary.",
          "workingLatex": "S \\Rightarrow P \\ (\\text{a square does have four equal sides})",
          "explanation": "Although equal sides do not guarantee a square, every square does have equal sides, so the condition is necessary. It is the sufficiency, not the necessity, that fails.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Diagnose the missing ingredient.",
          "workingLatex": "\\text{rhombus fails only because its angles are not } 90^{\\circ}",
          "explanation": "The single feature separating our counterexample from a square is the angle. Adding a right-angle requirement should close the gap, motivating the corrected statement.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the corrected biconditional.",
          "workingLatex": "S \\Leftrightarrow C, \\quad C:\\ \\text{four equal sides AND at least one right angle}",
          "explanation": "We propose that a square is characterised by equal sides together with one right angle. Writing it as a biconditional signals that both implications must now be proved.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Prove the easy direction S ⇒ C.",
          "workingLatex": "\\text{square} \\Rightarrow \\text{four equal sides and four right angles} \\Rightarrow C",
          "explanation": "A square by definition has four equal sides and four right angles, so it certainly has at least one right angle. This direction is immediate from the definition.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Begin the reverse direction C ⇒ S.",
          "workingLatex": "\\text{assume four equal sides and one } 90^{\\circ} \\text{ angle} \\Rightarrow \\text{shape is a rhombus (a parallelogram)}",
          "explanation": "Four equal sides make the quadrilateral a rhombus, and every rhombus is a parallelogram with opposite sides parallel. Parallelogram angle properties are the key to propagating the single right angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use co-interior (consecutive) angles.",
          "workingLatex": "\\text{consecutive angles of a parallelogram sum to } 180^{\\circ}: \\ 180^{\\circ} - 90^{\\circ} = 90^{\\circ}",
          "explanation": "In a parallelogram each pair of adjacent angles is supplementary. So if one angle is $90^{\\circ}$, both of its neighbours must also be $90^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use equal opposite angles for the fourth.",
          "workingLatex": "\\text{opposite angles equal} \\Rightarrow \\text{fourth angle} = 90^{\\circ}; \\ \\text{all four are } 90^{\\circ}",
          "explanation": "Opposite angles of a parallelogram are equal, so the remaining angle matches the first at $90^{\\circ}$. That forces every angle to be a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude C ⇒ S.",
          "workingLatex": "\\text{four equal sides} + \\text{four right angles} = \\text{square} \\;\\Rightarrow\\; C \\Rightarrow S",
          "explanation": "A quadrilateral with four equal sides and four right angles is by definition a square. So the pair of conditions is enough to force a square.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Combine into the biconditional.",
          "workingLatex": "S \\Rightarrow C \\ \\text{and}\\ C \\Rightarrow S \\;\\Rightarrow\\; S \\Leftrightarrow C",
          "explanation": "Both implications hold, so the corrected characterisation is a genuine two-way equivalence. The definition and the condition describe exactly the same shapes.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Show neither condition alone suffices.",
          "workingLatex": "\\text{equal sides only} \\to \\text{rhombus}; \\quad \\text{one right angle only} \\to \\text{e.g. rectangle}",
          "explanation": "A rhombus has equal sides without right angles, and a non-square rectangle has a right angle without equal sides. Each condition alone fails, which is why the square needs both together.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the necessary-and-sufficient conclusion.",
          "workingLatex": "\\{\\text{four equal sides},\\ \\text{one right angle}\\} \\text{ is necessary and sufficient for a square}",
          "explanation": "Together the two conditions are both required by a square and enough to guarantee one, so as a pair they are necessary and sufficient. The original claim failed only because it dropped the right-angle half.",
          "diagram": null
        }
      ],
      "finalAnswer": "The statement is FALSE: a rhombus with angles $60^{\\circ},120^{\\circ},60^{\\circ},120^{\\circ}$ has four equal sides but is not a square. Corrected: a quadrilateral is a square $\\Leftrightarrow$ it has four equal sides AND at least one right angle. Reverse direction: four equal sides make it a rhombus (a parallelogram), so one $90^{\\circ}$ angle forces all four angles to be $90^{\\circ}$, giving a square. Hence the pair {four equal sides, one right angle} is necessary and sufficient for a square, while neither condition alone suffices."
    }
  }
];
