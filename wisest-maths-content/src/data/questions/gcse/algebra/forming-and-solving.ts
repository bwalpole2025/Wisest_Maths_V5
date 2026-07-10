import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.forming-equations.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "linear"],
    "questionText": "I think of a number, multiply it by $4$ and add $3$. The result is $23$. Form an equation and find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose a letter.", "workingLatex": "\\text{let the number be } n", "explanation": "Naming the unknown lets us write the situation as algebra.", "diagram": null },
        { "stepNumber": 2, "description": "Translate the words.", "workingLatex": "4n + 3 = 23", "explanation": "\"Multiply by $4$\" gives $4n$; \"add $3$\" gives $+3$; \"result is $23$\" gives $= 23$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3$.", "workingLatex": "4n = 20", "explanation": "Undo the addition.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "n = 5", "explanation": "So the number is $5$.", "diagram": null }
      ],
      "finalAnswer": "The number is $5$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "linear"],
    "questionText": "A number is doubled and then $7$ is subtracted. The answer is $19$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let the number be } x", "explanation": "Introduce a variable for the number.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "2x - 7 = 19", "explanation": "\"Doubled\" gives $2x$ and \"subtract $7$\" gives $-7$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $7$.", "workingLatex": "2x = 26", "explanation": "Undo the subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = 13", "explanation": "So the number is $13$.", "diagram": null }
      ],
      "finalAnswer": "The number is $13$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "consecutive", "number"],
    "questionText": "The sum of three consecutive integers is $54$. Find the integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the integers.", "workingLatex": "n,\\ n+1,\\ n+2", "explanation": "Consecutive integers each go up by $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n + (n+1) + (n+2) = 54", "explanation": "Add the three expressions and set equal to $54$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "3n + 3 = 54", "explanation": "Collect like terms.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "3n = 51 \\Rightarrow n = 17", "explanation": "Subtract $3$, then divide by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "State the integers.", "workingLatex": "17,\\ 18,\\ 19", "explanation": "Use $n$, $n+1$, $n+2$.", "diagram": null }
      ],
      "finalAnswer": "The integers are $17$, $18$ and $19$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "ages"],
    "questionText": "Sam is $4$ years older than Tom. The sum of their ages is $26$. How old is each?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let Tom be } t", "explanation": "Choose the younger person as the variable to keep expressions simple.", "diagram": null },
        { "stepNumber": 2, "description": "Write Sam's age.", "workingLatex": "\\text{Sam} = t + 4", "explanation": "Sam is $4$ years older.", "diagram": null },
        { "stepNumber": 3, "description": "Form the equation.", "workingLatex": "t + (t + 4) = 26", "explanation": "Their ages sum to $26$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "2t + 4 = 26 \\Rightarrow t = 11", "explanation": "$2t = 22$, so $t = 11$.", "diagram": null },
        { "stepNumber": 5, "description": "Find both ages.", "workingLatex": "\\text{Tom } 11,\\ \\text{Sam } 15", "explanation": "Sam is $11 + 4 = 15$.", "diagram": null }
      ],
      "finalAnswer": "Tom is $11$ and Sam is $15$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "perimeter", "geometry"],
    "questionText": "A rectangle has length $(2x + 1)$ cm and width $x$ cm. Its perimeter is $32$ cm. Find $x$ and the dimensions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "2[(2x + 1) + x] = 32", "explanation": "Perimeter is twice the sum of length and width.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify inside.", "workingLatex": "2(3x + 1) = 32", "explanation": "$(2x + 1) + x = 3x + 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "6x + 2 = 32", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "6x = 30 \\Rightarrow x = 5", "explanation": "$6x = 30$, so $x = 5$.", "diagram": null },
        { "stepNumber": 5, "description": "State the dimensions.", "workingLatex": "\\text{length } 11\\text{ cm},\\ \\text{width } 5\\text{ cm}", "explanation": "Length $= 2(5) + 1 = 11$; width $= 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$; length $11$ cm, width $5$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "angles", "geometry"],
    "questionText": "Three angles on a straight line are $x$, $2x$ and $(x + 20)$ degrees. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the angle fact.", "workingLatex": "x + 2x + (x + 20) = 180", "explanation": "Angles on a straight line sum to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "4x + 20 = 180", "explanation": "$x + 2x + x = 4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4x = 160 \\Rightarrow x = 40", "explanation": "Subtract $20$, then divide by $4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 40^\\circ$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "Two adult tickets cost the same as five child tickets. An adult ticket costs £4.50 more than a child ticket. Find the cost of a child ticket.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let a child ticket be } c", "explanation": "Work in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Write the adult price.", "workingLatex": "\\text{adult} = c + 4.50", "explanation": "An adult ticket is £4.50 more.", "diagram": null },
        { "stepNumber": 3, "description": "Form the equation.", "workingLatex": "2(c + 4.50) = 5c", "explanation": "Two adult tickets equal five child tickets in cost.", "diagram": null },
        { "stepNumber": 4, "description": "Expand.", "workingLatex": "2c + 9 = 5c", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "9 = 3c \\Rightarrow c = 3", "explanation": "Subtract $2c$: $3c = 9$, so $c = 3$.", "diagram": null }
      ],
      "finalAnswer": "A child ticket costs £3."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "area", "quadratic"],
    "questionText": "A rectangle is $(x + 2)$ cm long and $(x - 1)$ cm wide. Its area is $40$ cm². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area.", "workingLatex": "(x + 2)(x - 1) = 40", "explanation": "Area is length times width.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "x^2 + x - 2 = 40", "explanation": "Multiply out the brackets.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange to standard form.", "workingLatex": "x^2 + x - 42 = 0", "explanation": "Subtract $40$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(x + 7)(x - 6) = 0", "explanation": "Numbers $+7$ and $-6$ multiply to $-42$ and add to $+1$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = -7 \\ \\text{ or } \\ x = 6", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "x = 6", "explanation": "Width $x - 1$ must be positive, so $x = 6$ (giving $8$ cm by $5$ cm).", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ cm (the negative root is rejected)."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "angles", "triangle"],
    "questionText": "The angles of a triangle are $x$, $(x + 30)$ and $(2x - 10)$ degrees. Find the size of each angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the angle sum.", "workingLatex": "x + (x + 30) + (2x - 10) = 180", "explanation": "Angles in a triangle add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "4x + 20 = 180", "explanation": "$x + x + 2x = 4x$ and $30 - 10 = 20$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4x = 160 \\Rightarrow x = 40", "explanation": "Subtract $20$, then divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Find each angle.", "workingLatex": "40^\\circ,\\ 70^\\circ,\\ 70^\\circ", "explanation": "$x = 40$, $x + 30 = 70$, $2x - 10 = 70$.", "diagram": null }
      ],
      "finalAnswer": "The angles are $40^\\circ$, $70^\\circ$ and $70^\\circ$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "sharing"],
    "questionText": "£90 is shared between Amy and Ben so that Amy gets twice as much as Ben. How much does each receive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let Ben get } b", "explanation": "Choose the smaller share as the variable.", "diagram": null },
        { "stepNumber": 2, "description": "Write Amy's share.", "workingLatex": "\\text{Amy} = 2b", "explanation": "Amy gets twice as much.", "diagram": null },
        { "stepNumber": 3, "description": "Form the equation.", "workingLatex": "b + 2b = 90", "explanation": "The two shares total £90.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "3b = 90 \\Rightarrow b = 30", "explanation": "So Ben gets £30.", "diagram": null },
        { "stepNumber": 5, "description": "Find Amy's share.", "workingLatex": "2(30) = 60", "explanation": "Amy gets £60.", "diagram": null }
      ],
      "finalAnswer": "Ben gets £30 and Amy gets £60."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "division"],
    "questionText": "A number is divided by $3$ and then $5$ is added. The result is $12$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "\\dfrac{x}{3} + 5 = 12", "explanation": "\"Divided by $3$\" gives $\\tfrac{x}{3}$; \"add $5$\" gives $+5$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $5$.", "workingLatex": "\\dfrac{x}{3} = 7", "explanation": "Undo the addition.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by $3$.", "workingLatex": "x = 21", "explanation": "So the number is $21$.", "diagram": null }
      ],
      "finalAnswer": "The number is $21$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "perimeter", "isosceles"],
    "questionText": "An isosceles triangle has two equal sides of length $(2x - 1)$ cm and a base of $x$ cm. Its perimeter is $23$ cm. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "(2x - 1) + (2x - 1) + x = 23", "explanation": "Add the two equal sides and the base.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "5x - 2 = 23", "explanation": "$2x + 2x + x = 5x$ and $-1 - 1 = -2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5x = 25 \\Rightarrow x = 5", "explanation": "Add $2$, then divide by $5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "unknowns both sides", "number"],
    "questionText": "If I add $8$ to a number, I get the same result as when I multiply the number by $3$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x + 8 = 3x", "explanation": "The two descriptions give equal results.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$.", "workingLatex": "8 = 2x", "explanation": "Collect the $x$ terms on the right.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 4", "explanation": "$8 \\div 2 = 4$.", "diagram": null }
      ],
      "finalAnswer": "The number is $4$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "consecutive", "quadratic"],
    "questionText": "The product of two consecutive odd numbers is $63$. Find the two numbers (take them as positive).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the numbers.", "workingLatex": "n,\\ n + 2", "explanation": "Consecutive odd numbers differ by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n(n + 2) = 63", "explanation": "Their product is $63$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and rearrange.", "workingLatex": "n^2 + 2n - 63 = 0", "explanation": "Multiply out and bring all terms to one side.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 9)(n - 7) = 0", "explanation": "Numbers $+9$ and $-7$ multiply to $-63$ and add to $+2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "n = -9 \\ \\text{ or } \\ n = 7", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "n = 7", "explanation": "Taking positive numbers, $n = 7$, giving $7$ and $9$.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $7$ and $9$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "A taxi charges a £3 fixed fee plus £2 per mile. A second taxi charges a £5 fixed fee plus £1.50 per mile. For what distance do the two taxis cost the same?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let the distance be } m \\text{ miles}", "explanation": "The variable is the number of miles.", "diagram": null },
        { "stepNumber": 2, "description": "Write both costs.", "workingLatex": "3 + 2m \\ \\text{ and } \\ 5 + 1.5m", "explanation": "Fixed fee plus per-mile charge for each taxi.", "diagram": null },
        { "stepNumber": 3, "description": "Set them equal.", "workingLatex": "3 + 2m = 5 + 1.5m", "explanation": "\"Cost the same\" means the two expressions are equal.", "diagram": null },
        { "stepNumber": 4, "description": "Collect terms.", "workingLatex": "0.5m = 2", "explanation": "Subtract $1.5m$ and $3$ from both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "m = 4", "explanation": "$2 \\div 0.5 = 4$.", "diagram": null }
      ],
      "finalAnswer": "They cost the same at $4$ miles."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number"],
    "questionText": "When $6$ is added to a number, the result is $2$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x + 6 = 2", "explanation": "Translate the sentence directly.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $6$.", "workingLatex": "x = 2 - 6", "explanation": "Undo the addition.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "x = -4", "explanation": "A negative result is possible.", "diagram": null }
      ],
      "finalAnswer": "The number is $-4$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "parallel"],
    "questionText": "Two angles are $(3x + 10)$ and $(5x - 30)$ degrees. They are equal (alternate angles). Find $x$ and the size of the angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the angles equal.", "workingLatex": "3x + 10 = 5x - 30", "explanation": "Alternate angles between parallel lines are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Collect $x$ terms.", "workingLatex": "10 = 2x - 30", "explanation": "Subtract $3x$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "40 = 2x \\Rightarrow x = 20", "explanation": "Add $30$, then divide by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the angle.", "workingLatex": "3(20) + 10 = 70^\\circ", "explanation": "Substitute back into either expression.", "diagram": null }
      ],
      "finalAnswer": "$x = 20$; the angle is $70^\\circ$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "collecting"],
    "questionText": "Pens cost $x$ pence each and rulers cost $(x + 15)$ pence each. Buying $4$ pens and $3$ rulers costs $290$ pence. Find the cost of a pen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "4x + 3(x + 15) = 290", "explanation": "Total cost is pens plus rulers.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "4x + 3x + 45 = 290", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Collect like terms.", "workingLatex": "7x + 45 = 290", "explanation": "$4x + 3x = 7x$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "7x = 245 \\Rightarrow x = 35", "explanation": "Subtract $45$, then divide by $7$.", "diagram": null }
      ],
      "finalAnswer": "A pen costs $35$ pence."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "consecutive", "even"],
    "questionText": "The sum of four consecutive even numbers is $92$. Find the numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the numbers.", "workingLatex": "n,\\ n+2,\\ n+4,\\ n+6", "explanation": "Consecutive even numbers go up by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "4n + 12 = 92", "explanation": "Their sum is $4n + (2 + 4 + 6) = 4n + 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4n = 80 \\Rightarrow n = 20", "explanation": "Subtract $12$, then divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "State the numbers.", "workingLatex": "20,\\ 22,\\ 24,\\ 26", "explanation": "Use $n$, $n+2$, $n+4$, $n+6$.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $20$, $22$, $24$ and $26$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "area", "quadratic", "context"],
    "questionText": "A square has side $x$ cm. If each side is increased by $3$ cm, the area becomes $64$ cm². Find the original side length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the new area.", "workingLatex": "(x + 3)^2 = 64", "explanation": "The enlarged square has side $x + 3$.", "diagram": null },
        { "stepNumber": 2, "description": "Take the square root.", "workingLatex": "x + 3 = \\pm 8", "explanation": "Both roots must be considered.", "diagram": null },
        { "stepNumber": 3, "description": "Solve both cases.", "workingLatex": "x = 5 \\ \\text{ or } \\ x = -11", "explanation": "$x + 3 = 8$ gives $5$; $x + 3 = -8$ gives $-11$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret.", "workingLatex": "x = 5", "explanation": "A length cannot be negative, so the original side is $5$ cm.", "diagram": null }
      ],
      "finalAnswer": "The original side is $5$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "quadrilateral"],
    "questionText": "The four angles of a quadrilateral are $x$, $(x + 10)$, $2x$ and $(2x + 20)$ degrees. Find $x$ and the largest angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the angle sum.", "workingLatex": "x + (x + 10) + 2x + (2x + 20) = 360", "explanation": "Angles in a quadrilateral add to $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "6x + 30 = 360", "explanation": "$x + x + 2x + 2x = 6x$ and $10 + 20 = 30$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "6x = 330 \\Rightarrow x = 55", "explanation": "Subtract $30$, then divide by $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the largest angle.", "workingLatex": "2x + 20 = 2(55) + 20 = 130^\\circ", "explanation": "The angles are $55^\\circ, 65^\\circ, 110^\\circ, 130^\\circ$; the largest is $130^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$x = 55$; the largest angle is $130^\\circ$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "Gym A charges £20 joining fee plus £15 per month. Gym B charges £35 per month with no joining fee. After how many months is the total cost the same?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write both totals.", "workingLatex": "20 + 15m \\ \\text{ and } \\ 35m", "explanation": "Let $m$ be the number of months.", "diagram": null },
        { "stepNumber": 2, "description": "Set them equal.", "workingLatex": "20 + 15m = 35m", "explanation": "\"Cost the same\" means the expressions are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Collect $m$ terms.", "workingLatex": "20 = 20m", "explanation": "Subtract $15m$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "m = 1", "explanation": "So the costs are equal after $1$ month.", "diagram": null }
      ],
      "finalAnswer": "After $1$ month."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "number", "fraction"],
    "questionText": "One third of a number, plus $4$, equals $10$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "\\dfrac{1}{3}x + 4 = 10", "explanation": "\"One third of a number\" is $\\tfrac{1}{3}x$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $4$.", "workingLatex": "\\dfrac{1}{3}x = 6", "explanation": "Remove the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by $3$.", "workingLatex": "x = 18", "explanation": "So the number is $18$.", "diagram": null }
      ],
      "finalAnswer": "The number is $18$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "consecutive", "quadratic", "interpret"],
    "questionText": "The sum of the squares of two consecutive integers is $85$. Find the integers (positive case).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the integers.", "workingLatex": "n,\\ n + 1", "explanation": "Consecutive integers differ by $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n^2 + (n + 1)^2 = 85", "explanation": "Add the squares.", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "n^2 + n^2 + 2n + 1 = 85", "explanation": "Expand $(n + 1)^2 = n^2 + 2n + 1$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify and rearrange.", "workingLatex": "2n^2 + 2n - 84 = 0", "explanation": "Collect terms and subtract $85$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $2$.", "workingLatex": "n^2 + n - 42 = 0", "explanation": "Simplify the quadratic.", "diagram": null },
        { "stepNumber": 6, "description": "Factorise.", "workingLatex": "(n + 7)(n - 6) = 0", "explanation": "Numbers $+7$ and $-6$ multiply to $-42$ and add to $+1$.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret.", "workingLatex": "n = 6", "explanation": "Taking the positive case, the integers are $6$ and $7$.", "diagram": null }
      ],
      "finalAnswer": "The integers are $6$ and $7$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "Three times a number, minus $5$, equals the number plus $7$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "3x - 5 = x + 7", "explanation": "Translate each phrase into algebra.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$.", "workingLatex": "2x - 5 = 7", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $5$.", "workingLatex": "2x = 12", "explanation": "Move the constant across.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 6", "explanation": "$12 \\div 2 = 6$.", "diagram": null }
      ],
      "finalAnswer": "The number is $6$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "area", "quadratic", "rectangle"],
    "questionText": "A rectangle's length is $3$ cm more than its width $w$. Its area is $70$ cm². Find the width.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area.", "workingLatex": "w(w + 3) = 70", "explanation": "Length is $w + 3$; area is width times length.", "diagram": null },
        { "stepNumber": 2, "description": "Expand and rearrange.", "workingLatex": "w^2 + 3w - 70 = 0", "explanation": "Multiply out and subtract $70$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(w + 10)(w - 7) = 0", "explanation": "Numbers $+10$ and $-7$ multiply to $-70$ and add to $+3$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "w = -10 \\ \\text{ or } \\ w = 7", "explanation": "Two algebraic solutions arise.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "w = 7", "explanation": "A width cannot be negative, so the width is $7$ cm.", "diagram": null }
      ],
      "finalAnswer": "The width is $7$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "sharing", "three parts"],
    "questionText": "£120 is shared between three people. The second gets £10 more than the first, and the third gets twice the first. How much does the first person get?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the shares.", "workingLatex": "\\text{first} = f,\\ \\text{second} = f + 10,\\ \\text{third} = 2f", "explanation": "Express each share in terms of the first.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "f + (f + 10) + 2f = 120", "explanation": "The three shares total £120.", "diagram": null },
        { "stepNumber": 3, "description": "Collect like terms.", "workingLatex": "4f + 10 = 120", "explanation": "$f + f + 2f = 4f$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "4f = 110 \\Rightarrow f = 27.50", "explanation": "The first person gets £27.50.", "diagram": null }
      ],
      "finalAnswer": "The first person gets £27.50."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "ages", "future"],
    "questionText": "A mother is $30$ years older than her son. In $5$ years' time she will be three times as old as he will be. How old is the son now?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let the son be } s \\text{ now}", "explanation": "The mother is then $s + 30$.", "diagram": null },
        { "stepNumber": 2, "description": "Write ages in $5$ years.", "workingLatex": "\\text{son } s + 5,\\ \\text{mother } s + 35", "explanation": "Add $5$ to each present age.", "diagram": null },
        { "stepNumber": 3, "description": "Form the equation.", "workingLatex": "s + 35 = 3(s + 5)", "explanation": "In $5$ years she is three times his age.", "diagram": null },
        { "stepNumber": 4, "description": "Expand and solve.", "workingLatex": "s + 35 = 3s + 15", "explanation": "$35 - 15 = 2s$, so $2s = 20$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "s = 10", "explanation": "The son is $10$ now.", "diagram": null }
      ],
      "finalAnswer": "The son is $10$ years old now."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "multiplication"],
    "questionText": "Five times a number is $60$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "5x = 60", "explanation": "\"Five times a number\" is $5x$.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $5$.", "workingLatex": "x = 12", "explanation": "So the number is $12$.", "diagram": null }
      ],
      "finalAnswer": "The number is $12$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "perimeter", "unknowns both sides"],
    "questionText": "A rectangle has length $(3x - 2)$ cm and width $(x + 4)$ cm. The length equals twice the width. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "3x - 2 = 2(x + 4)", "explanation": "\"Length equals twice the width\" gives this relationship.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "3x - 2 = 2x + 8", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Collect $x$ terms.", "workingLatex": "x - 2 = 8", "explanation": "Subtract $2x$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 10", "explanation": "Add $2$ to both sides.", "diagram": null }
      ],
      "finalAnswer": "$x = 10$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "number", "fraction equation"],
    "questionText": "When a number is increased by $2$ and the result is halved, the answer is $9$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "\\dfrac{x + 2}{2} = 9", "explanation": "\"Increased by $2$\" gives $x + 2$; \"halved\" divides by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $2$.", "workingLatex": "x + 2 = 18", "explanation": "Clear the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 16", "explanation": "Subtract $2$.", "diagram": null }
      ],
      "finalAnswer": "The number is $16$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "area", "quadratic", "path"],
    "questionText": "A rectangular lawn is $x$ m by $(x + 4)$ m. A path $1$ m wide runs all around the outside. The total area of lawn plus path is $96$ m². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the outer dimensions.", "workingLatex": "(x + 2) \\text{ by } (x + 6)", "explanation": "A $1$ m path adds $2$ m to each dimension (one metre on each side).", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "(x + 2)(x + 6) = 96", "explanation": "The outer rectangle has area $96$ m².", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "x^2 + 8x + 12 = 96", "explanation": "Multiply out the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Rearrange.", "workingLatex": "x^2 + 8x - 84 = 0", "explanation": "Subtract $96$.", "diagram": null },
        { "stepNumber": 5, "description": "Factorise.", "workingLatex": "(x + 14)(x - 6) = 0", "explanation": "Numbers $+14$ and $-6$ multiply to $-84$ and add to $+8$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "x = 6", "explanation": "A length must be positive, so $x = 6$ m.", "diagram": null }
      ],
      "finalAnswer": "$x = 6$ m."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "collecting"],
    "questionText": "A book costs £$b$. A magazine costs £3 less than the book. Buying $2$ books and $3$ magazines costs £29. Find the cost of a book.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the magazine cost.", "workingLatex": "\\text{magazine} = b - 3", "explanation": "£3 less than the book.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "2b + 3(b - 3) = 29", "explanation": "Total cost of $2$ books and $3$ magazines.", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "2b + 3b - 9 = 29", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "5b - 9 = 29 \\Rightarrow b = 7.60", "explanation": "$5b = 38$, so $b = 7.60$.", "diagram": null }
      ],
      "finalAnswer": "A book costs £7.60."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "ratio"],
    "questionText": "Two angles on a straight line are in the ratio $2 : 3$. Find the size of the larger angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the angles.", "workingLatex": "2x \\text{ and } 3x", "explanation": "A ratio $2 : 3$ can be written as $2x$ and $3x$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "2x + 3x = 180", "explanation": "Angles on a straight line sum to $180^\\circ$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5x = 180 \\Rightarrow x = 36", "explanation": "$180 \\div 5 = 36$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the larger angle.", "workingLatex": "3x = 108^\\circ", "explanation": "The larger angle is $3 \\times 36 = 108^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "The larger angle is $108^\\circ$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "product"],
    "questionText": "A number is $5$ more than another. Their product is $36$. Find the two numbers (positive case).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the numbers.", "workingLatex": "n \\text{ and } n + 5", "explanation": "One number is $5$ more than the other.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n(n + 5) = 36", "explanation": "Their product is $36$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and rearrange.", "workingLatex": "n^2 + 5n - 36 = 0", "explanation": "Multiply out and subtract $36$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 9)(n - 4) = 0", "explanation": "Numbers $+9$ and $-4$ multiply to $-36$ and add to $+5$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "n = 4", "explanation": "Taking the positive case, the numbers are $4$ and $9$.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $4$ and $9$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "Phone plan A costs £10 plus 5p per text. Plan B costs £4 plus 8p per text. For how many texts do they cost the same?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write both costs in pence.", "workingLatex": "1000 + 5t \\ \\text{ and } \\ 400 + 8t", "explanation": "£10 = 1000p and £4 = 400p; $t$ is the number of texts.", "diagram": null },
        { "stepNumber": 2, "description": "Set them equal.", "workingLatex": "1000 + 5t = 400 + 8t", "explanation": "\"Cost the same\" means the expressions are equal.", "diagram": null },
        { "stepNumber": 3, "description": "Collect $t$ terms.", "workingLatex": "600 = 3t", "explanation": "Subtract $5t$ and $400$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "t = 200", "explanation": "$600 \\div 3 = 200$.", "diagram": null }
      ],
      "finalAnswer": "They cost the same at $200$ texts."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "number", "consecutive"],
    "questionText": "The sum of two consecutive integers is $45$. Find the smaller integer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the integers.", "workingLatex": "n \\text{ and } n + 1", "explanation": "Consecutive integers differ by $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n + (n + 1) = 45", "explanation": "Their sum is $45$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "2n + 1 = 45 \\Rightarrow n = 22", "explanation": "$2n = 44$, so $n = 22$.", "diagram": null }
      ],
      "finalAnswer": "The smaller integer is $22$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "quadratic", "right-angled"],
    "questionText": "A right-angled triangle has legs of length $x$ cm and $(x + 7)$ cm. Its area is $30$ cm². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area.", "workingLatex": "\\tfrac{1}{2}x(x + 7) = 30", "explanation": "Area of a right-angled triangle is half the product of the legs.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $2$.", "workingLatex": "x(x + 7) = 60", "explanation": "Clear the fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and rearrange.", "workingLatex": "x^2 + 7x - 60 = 0", "explanation": "Multiply out and subtract $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(x + 12)(x - 5) = 0", "explanation": "Numbers $+12$ and $-5$ multiply to $-60$ and add to $+7$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "x = 5", "explanation": "A length must be positive, so $x = 5$ cm.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "sharing"],
    "questionText": "Three friends share some sweets. Beth gets $x$, Carl gets $5$ more than Beth, and Dan gets twice as many as Carl. Altogether there are $47$ sweets. How many does Beth get?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write each amount.", "workingLatex": "\\text{Beth } x,\\ \\text{Carl } x + 5,\\ \\text{Dan } 2(x + 5)", "explanation": "Express Carl and Dan in terms of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "x + (x + 5) + 2(x + 5) = 47", "explanation": "The three amounts total $47$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "x + x + 5 + 2x + 10 = 47", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Collect and solve.", "workingLatex": "4x + 15 = 47 \\Rightarrow x = 8", "explanation": "$4x = 32$, so $x = 8$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the shares.", "workingLatex": "8 + 13 + 26 = 47 \\ \\checkmark", "explanation": "Beth $8$, Carl $13$, Dan $26$ — these total $47$.", "diagram": null }
      ],
      "finalAnswer": "Beth gets $8$ sweets."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "perimeter"],
    "questionText": "The perimeter of a triangle with sides $x$, $(x + 3)$ and $(2x - 1)$ cm is $30$ cm. Find the length of the longest side.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x + (x + 3) + (2x - 1) = 30", "explanation": "Add the three sides.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "4x + 2 = 30", "explanation": "$x + x + 2x = 4x$ and $3 - 1 = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4x = 28 \\Rightarrow x = 7", "explanation": "Subtract $2$, then divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the longest side.", "workingLatex": "2x - 1 = 13", "explanation": "The sides are $7$, $10$ and $13$; the longest is $13$ cm.", "diagram": null }
      ],
      "finalAnswer": "The longest side is $13$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "two-step"],
    "questionText": "Seven more than three times a number is $28$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "3x + 7 = 28", "explanation": "\"Three times a number\" is $3x$; \"seven more\" gives $+7$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $7$.", "workingLatex": "3x = 21", "explanation": "Remove the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $3$.", "workingLatex": "x = 7", "explanation": "So the number is $7$.", "diagram": null }
      ],
      "finalAnswer": "The number is $7$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "simultaneous", "money"],
    "questionText": "At a cafe, $2$ teas and $1$ cake cost £7, while $1$ tea and $1$ cake cost £5. Find the cost of a tea and of a cake.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form two equations.", "workingLatex": "2t + c = 7,\\ t + c = 5", "explanation": "Let $t$ and $c$ be the prices in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the second.", "workingLatex": "(2t + c) - (t + c) = 7 - 5", "explanation": "Both have $+c$, so subtracting eliminates $c$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $t$.", "workingLatex": "t = 2", "explanation": "A tea costs £2.", "diagram": null },
        { "stepNumber": 4, "description": "Find $c$.", "workingLatex": "2 + c = 5 \\Rightarrow c = 3", "explanation": "A cake costs £3.", "diagram": null }
      ],
      "finalAnswer": "Tea £2, cake £3."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "isosceles"],
    "questionText": "In an isosceles triangle the two equal base angles are each $(2x + 5)$ degrees and the apex angle is $(x + 10)$ degrees. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the angle sum.", "workingLatex": "(2x + 5) + (2x + 5) + (x + 10) = 180", "explanation": "The two base angles are equal; all three sum to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "5x + 20 = 180", "explanation": "$2x + 2x + x = 5x$ and $5 + 5 + 10 = 20$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5x = 160 \\Rightarrow x = 32", "explanation": "Subtract $20$, then divide by $5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 32$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "number", "interpret"],
    "questionText": "The square of a number is $12$ more than the number itself. Find the possible values of the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x^2 = x + 12", "explanation": "\"Square is $12$ more than the number\".", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange.", "workingLatex": "x^2 - x - 12 = 0", "explanation": "Bring all terms to one side.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x - 4)(x + 3) = 0", "explanation": "Numbers $-4$ and $+3$ multiply to $-12$ and add to $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "x = 4 \\ \\text{ or } \\ x = -3", "explanation": "Both are valid since no positivity constraint is given.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ or $x = -3$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "Rida has $x$ pounds. Sam has £12 more than Rida. Together they have four times what Rida has. How much does Rida have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write Sam's amount.", "workingLatex": "\\text{Sam} = x + 12", "explanation": "Sam has £12 more.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "x + (x + 12) = 4x", "explanation": "Their total is four times Rida's amount.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the left.", "workingLatex": "2x + 12 = 4x", "explanation": "Collect like terms.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "12 = 2x \\Rightarrow x = 6", "explanation": "Subtract $2x$: $2x = 12$, so $x = 6$.", "diagram": null }
      ],
      "finalAnswer": "Rida has £6."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["forming and solving", "number", "unknowns both sides"],
    "questionText": "Adding $15$ to a number gives the same result as subtracting the number from $39$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x + 15 = 39 - x", "explanation": "\"Subtracting the number from $39$\" is $39 - x$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $x$ to both sides.", "workingLatex": "2x + 15 = 39", "explanation": "Collect the $x$ terms on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "2x = 24 \\Rightarrow x = 12", "explanation": "Subtract $15$, then divide by $2$.", "diagram": null }
      ],
      "finalAnswer": "The number is $12$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "area", "context"],
    "questionText": "A photo of width $x$ cm and height $(x + 2)$ cm is surrounded by a frame $2$ cm wide. The total area (photo and frame) is $80$ cm². Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the outer dimensions.", "workingLatex": "(x + 4) \\text{ by } (x + 6)", "explanation": "A $2$ cm frame adds $4$ cm to each dimension (two on each side).", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "(x + 4)(x + 6) = 80", "explanation": "The outer rectangle has area $80$ cm².", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "x^2 + 10x + 24 = 80", "explanation": "Multiply out the brackets.", "diagram": null },
        { "stepNumber": 4, "description": "Rearrange.", "workingLatex": "x^2 + 10x - 56 = 0", "explanation": "Subtract $80$.", "diagram": null },
        { "stepNumber": 5, "description": "Factorise.", "workingLatex": "(x + 14)(x - 4) = 0", "explanation": "Numbers $+14$ and $-4$ multiply to $-56$ and add to $+10$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "x = 4", "explanation": "A length must be positive, so $x = 4$ cm.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "perimeter", "square"],
    "questionText": "A square has side $(3x - 4)$ cm and perimeter $32$ cm. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "4(3x - 4) = 32", "explanation": "A square's perimeter is four times a side.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $4$.", "workingLatex": "3x - 4 = 8", "explanation": "Simplify first.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "3x = 12 \\Rightarrow x = 4", "explanation": "Add $4$, then divide by $3$.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "number", "unknowns both sides"],
    "questionText": "One number is $7$ less than three times another, and the two numbers add up to $29$. Find the two numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the numbers.", "workingLatex": "\\text{let one be } n,\\ \\text{other} = 3n - 7", "explanation": "\"$7$ less than three times another\" gives $3n - 7$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n + (3n - 7) = 29", "explanation": "Their sum is $29$.", "diagram": null },
        { "stepNumber": 3, "description": "Collect like terms.", "workingLatex": "4n - 7 = 29", "explanation": "$n + 3n = 4n$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "4n = 36 \\Rightarrow n = 9", "explanation": "Add $7$, then divide by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the other number.", "workingLatex": "3(9) - 7 = 20", "explanation": "The numbers are $9$ and $20$.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $9$ and $20$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "consecutive", "product"],
    "questionText": "The product of two consecutive integers is $132$. Find the two positive integers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the integers.", "workingLatex": "n \\text{ and } n + 1", "explanation": "Consecutive integers differ by $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Form and rearrange.", "workingLatex": "n^2 + n - 132 = 0", "explanation": "$n(n + 1) = 132$, then subtract $132$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(n + 12)(n - 11) = 0", "explanation": "Numbers $+12$ and $-11$ multiply to $-132$ and add to $+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret.", "workingLatex": "n = 11", "explanation": "Taking positive integers, they are $11$ and $12$.", "diagram": null }
      ],
      "finalAnswer": "The integers are $11$ and $12$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "A plumber charges a £$c$ call-out fee plus £40 per hour. A $3$-hour job costs £160. Find the call-out fee.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "c + 40 \\times 3 = 160", "explanation": "Total cost is the call-out fee plus the hourly charge.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "c + 120 = 160", "explanation": "$40 \\times 3 = 120$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "c = 40", "explanation": "Subtract $120$.", "diagram": null }
      ],
      "finalAnswer": "The call-out fee is £40."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "vertically opposite"],
    "questionText": "Two vertically opposite angles are $(4x - 10)$ and $(2x + 30)$ degrees. Find $x$ and the size of each angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the angles equal.", "workingLatex": "4x - 10 = 2x + 30", "explanation": "Vertically opposite angles are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Collect $x$ terms.", "workingLatex": "2x - 10 = 30", "explanation": "Subtract $2x$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "2x = 40 \\Rightarrow x = 20", "explanation": "Add $10$, then divide by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the angle.", "workingLatex": "4(20) - 10 = 70^\\circ", "explanation": "Each angle is $70^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$x = 20$; each angle is $70^\\circ$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number", "two-step"],
    "questionText": "Subtracting $4$ from twice a number gives $10$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "2x - 4 = 10", "explanation": "\"Twice a number\" is $2x$; \"subtracting $4$\" gives $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $4$.", "workingLatex": "2x = 14", "explanation": "Remove the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $2$.", "workingLatex": "x = 7", "explanation": "So the number is $7$.", "diagram": null }
      ],
      "finalAnswer": "The number is $7$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "simultaneous", "money", "scaling"],
    "questionText": "$3$ burgers and $2$ drinks cost £13. $2$ burgers and $4$ drinks cost £14. Find the cost of a burger and a drink.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form two equations.", "workingLatex": "3b + 2d = 13,\\ 2b + 4d = 14", "explanation": "Let $b$ and $d$ be the prices in pounds.", "diagram": null },
        { "stepNumber": 2, "description": "Scale the first equation.", "workingLatex": "6b + 4d = 26", "explanation": "Multiply the first by $2$ so both have $4d$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the second.", "workingLatex": "4b = 12 \\Rightarrow b = 3", "explanation": "$6b - 2b = 4b$ and $26 - 14 = 12$; a burger is £3.", "diagram": null },
        { "stepNumber": 4, "description": "Find $d$.", "workingLatex": "3(3) + 2d = 13 \\Rightarrow d = 2", "explanation": "$9 + 2d = 13$, so $2d = 4$ and a drink is £2.", "diagram": null }
      ],
      "finalAnswer": "Burger £3, drink £2."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "perimeter", "unknowns both sides"],
    "questionText": "A rectangle has perimeter $46$ cm. Its length is $(2x + 3)$ cm and its width is $(x - 1)$ cm. Find the length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "2[(2x + 3) + (x - 1)] = 46", "explanation": "Perimeter is twice the sum of length and width.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify inside.", "workingLatex": "2(3x + 2) = 46", "explanation": "$(2x + 3) + (x - 1) = 3x + 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand and solve.", "workingLatex": "6x + 4 = 46 \\Rightarrow x = 7", "explanation": "$6x = 42$, so $x = 7$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the length.", "workingLatex": "2(7) + 3 = 17", "explanation": "The length is $17$ cm.", "diagram": null }
      ],
      "finalAnswer": "The length is $17$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "number", "fraction equation"],
    "questionText": "Two fifths of a number is $16$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "\\dfrac{2}{5}x = 16", "explanation": "\"Two fifths of a number\" is $\\tfrac{2}{5}x$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the reciprocal.", "workingLatex": "x = 16 \\times \\dfrac{5}{2}", "explanation": "Multiplying by $\\tfrac{5}{2}$ undoes multiplying by $\\tfrac{2}{5}$.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "x = 40", "explanation": "$16 \\times 5 = 80$, then $\\div 2 = 40$.", "diagram": null }
      ],
      "finalAnswer": "The number is $40$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "area", "interpret"],
    "questionText": "The area of a rectangle is $x^2 + 5x$ and equals $50$. If the width is $x$, find the width and length.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "x^2 + 5x = 50", "explanation": "The area expression equals $50$.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange.", "workingLatex": "x^2 + 5x - 50 = 0", "explanation": "Subtract $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x + 10)(x - 5) = 0", "explanation": "Numbers $+10$ and $-5$ multiply to $-50$ and add to $+5$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret.", "workingLatex": "x = 5", "explanation": "A width must be positive, so $x = 5$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the length.", "workingLatex": "\\text{length} = x + 5 = 10", "explanation": "Since area $= x(x + 5)$, the length is $x + 5 = 10$.", "diagram": null }
      ],
      "finalAnswer": "Width $5$, length $10$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "ages", "unknowns both sides"],
    "questionText": "A father is $4$ times as old as his daughter. In $6$ years he will be only $2.5$ times as old. How old is the daughter now?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{daughter} = d,\\ \\text{father} = 4d", "explanation": "Express both present ages in terms of $d$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation for $6$ years' time.", "workingLatex": "4d + 6 = 2.5(d + 6)", "explanation": "Add $6$ to each age; the father is then $2.5$ times as old.", "diagram": null },
        { "stepNumber": 3, "description": "Expand.", "workingLatex": "4d + 6 = 2.5d + 15", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Collect terms.", "workingLatex": "1.5d = 9", "explanation": "Subtract $2.5d$ and $6$ from both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "d = 6", "explanation": "$9 \\div 1.5 = 6$.", "diagram": null }
      ],
      "finalAnswer": "The daughter is $6$ years old now."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "collecting"],
    "questionText": "At a stall, a hot dog costs £$h$ and a drink costs £2. A customer buys $3$ hot dogs and $2$ drinks for £13. Find the cost of a hot dog.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "3h + 2(2) = 13", "explanation": "Total is $3$ hot dogs plus $2$ drinks at £2 each.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "3h + 4 = 13", "explanation": "$2 \\times 2 = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "3h = 9 \\Rightarrow h = 3", "explanation": "Subtract $4$, then divide by $3$.", "diagram": null }
      ],
      "finalAnswer": "A hot dog costs £3."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "consecutive even", "interpret"],
    "questionText": "The product of two consecutive even numbers is $168$. Find the two positive numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the numbers.", "workingLatex": "n \\text{ and } n + 2", "explanation": "Consecutive even numbers differ by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Form and expand.", "workingLatex": "n^2 + 2n = 168", "explanation": "$n(n + 2) = 168$.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange.", "workingLatex": "n^2 + 2n - 168 = 0", "explanation": "Subtract $168$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 14)(n - 12) = 0", "explanation": "Numbers $+14$ and $-12$ multiply to $-168$ and add to $+2$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "n = 12", "explanation": "Taking positive numbers, they are $12$ and $14$.", "diagram": null }
      ],
      "finalAnswer": "The numbers are $12$ and $14$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "co-interior"],
    "questionText": "Two co-interior angles between parallel lines are $(3x)$ and $(x + 40)$ degrees. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the angle fact.", "workingLatex": "3x + (x + 40) = 180", "explanation": "Co-interior (allied) angles sum to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Collect like terms.", "workingLatex": "4x + 40 = 180", "explanation": "$3x + x = 4x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "4x = 140 \\Rightarrow x = 35", "explanation": "Subtract $40$, then divide by $4$.", "diagram": null }
      ],
      "finalAnswer": "$x = 35$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "sharing", "ratio"],
    "questionText": "£72 is shared between three people in the ratio $1 : 2 : 3$. How much does each receive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Represent the shares.", "workingLatex": "x,\\ 2x,\\ 3x", "explanation": "The ratio $1 : 2 : 3$ can be written using $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "x + 2x + 3x = 72", "explanation": "The three shares total £72.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "6x = 72 \\Rightarrow x = 12", "explanation": "$72 \\div 6 = 12$.", "diagram": null },
        { "stepNumber": 4, "description": "State the shares.", "workingLatex": "£12,\\ £24,\\ £36", "explanation": "Use $x$, $2x$, $3x$.", "diagram": null }
      ],
      "finalAnswer": "£12, £24 and £36."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["forming and solving", "number"],
    "questionText": "Half of a number is $14$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "\\dfrac{x}{2} = 14", "explanation": "\"Half of a number\" is $\\tfrac{x}{2}$.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by $2$.", "workingLatex": "x = 28", "explanation": "So the number is $28$.", "diagram": null }
      ],
      "finalAnswer": "The number is $28$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "geometry", "Pythagoras"],
    "questionText": "A right-angled triangle has legs $x$ cm and $(x + 1)$ cm and hypotenuse $5$ cm. Use Pythagoras to find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Apply Pythagoras.", "workingLatex": "x^2 + (x + 1)^2 = 5^2", "explanation": "The sum of the squares of the legs equals the square of the hypotenuse.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "x^2 + x^2 + 2x + 1 = 25", "explanation": "Expand $(x + 1)^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify and rearrange.", "workingLatex": "2x^2 + 2x - 24 = 0", "explanation": "Collect terms and subtract $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x^2 + x - 12 = 0", "explanation": "Simplify the quadratic.", "diagram": null },
        { "stepNumber": 5, "description": "Factorise.", "workingLatex": "(x + 4)(x - 3) = 0", "explanation": "Numbers $+4$ and $-3$ multiply to $-12$ and add to $+1$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "x = 3", "explanation": "A length must be positive, so $x = 3$ cm (a $3$–$4$–$5$ triangle).", "diagram": null }
      ],
      "finalAnswer": "$x = 3$ cm."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "money", "unknowns both sides"],
    "questionText": "A number of £5 notes and twice as many £10 notes are worth £100 in total. How many £5 notes are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the unknown.", "workingLatex": "\\text{let there be } n \\text{ £5 notes}", "explanation": "There are $2n$ £10 notes.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "5n + 10(2n) = 100", "explanation": "Value is £5 times the £5 notes plus £10 times the £10 notes.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "5n + 20n = 100", "explanation": "$10 \\times 2n = 20n$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "25n = 100 \\Rightarrow n = 4", "explanation": "$100 \\div 25 = 4$.", "diagram": null }
      ],
      "finalAnswer": "There are $4$ £5 notes."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "perimeter", "quadratic"],
    "questionText": "A rectangle has length $(x + 5)$ cm and width $x$ cm. Its perimeter is $26$ cm. Find its area.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the perimeter.", "workingLatex": "2[(x + 5) + x] = 26", "explanation": "Perimeter is twice the sum of length and width.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify and solve.", "workingLatex": "2(2x + 5) = 26 \\Rightarrow x = 4", "explanation": "$4x + 10 = 26$, so $4x = 16$ and $x = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the dimensions.", "workingLatex": "\\text{length } 9,\\ \\text{width } 4", "explanation": "Length $= 4 + 5 = 9$; width $= 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the area.", "workingLatex": "9 \\times 4 = 36", "explanation": "Area is length times width.", "diagram": null }
      ],
      "finalAnswer": "The area is $36$ cm²."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "number", "interpret"],
    "questionText": "A positive number is added to its square to give $56$. Find the number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Form the equation.", "workingLatex": "x + x^2 = 56", "explanation": "The number plus its square is $56$.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange.", "workingLatex": "x^2 + x - 56 = 0", "explanation": "Write in standard form.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise.", "workingLatex": "(x + 8)(x - 7) = 0", "explanation": "Numbers $+8$ and $-7$ multiply to $-56$ and add to $+1$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret.", "workingLatex": "x = 7", "explanation": "The number is positive, so $x = 7$.", "diagram": null }
      ],
      "finalAnswer": "The number is $7$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["forming and solving", "geometry", "angles", "exterior"],
    "questionText": "Each exterior angle of a regular polygon is $(2x + 4)$ degrees, and the polygon has $9$ sides. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the exterior angle.", "workingLatex": "\\dfrac{360}{9} = 40^\\circ", "explanation": "The exterior angles of a polygon sum to $360^\\circ$, shared equally.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "2x + 4 = 40", "explanation": "The given expression equals the exterior angle.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "2x = 36 \\Rightarrow x = 18", "explanation": "Subtract $4$, then divide by $2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 18$"
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "fraction", "interpret"],
    "questionText": "A number and the number increased by $3$ have a product of $54$. The number is positive. Find it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the number.", "workingLatex": "n \\text{ and } n + 3", "explanation": "Set up the two quantities.", "diagram": null },
        { "stepNumber": 2, "description": "Form the equation.", "workingLatex": "n(n + 3) = 54", "explanation": "Their product is $54$.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange.", "workingLatex": "n^2 + 3n - 54 = 0", "explanation": "Expand and subtract $54$.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(n + 9)(n - 6) = 0", "explanation": "Numbers $+9$ and $-6$ multiply to $-54$ and add to $+3$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "n = 6", "explanation": "The number is positive, so $n = 6$.", "diagram": null }
      ],
      "finalAnswer": "The number is $6$."
    }
  },
  {
    "id": "gcse.algebra.forming-equations.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Forming and solving",
    "subtopicId": "gcse.algebra.forming-equations",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["forming and solving", "quadratic", "area", "context", "interpret"],
    "questionText": "A garden is a rectangle $x$ m wide and $(2x + 3)$ m long. Its area is $90$ m². Find the width.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area.", "workingLatex": "x(2x + 3) = 90", "explanation": "Area is width times length.", "diagram": null },
        { "stepNumber": 2, "description": "Expand.", "workingLatex": "2x^2 + 3x = 90", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange.", "workingLatex": "2x^2 + 3x - 90 = 0", "explanation": "Subtract $90$ to get standard form.", "diagram": null },
        { "stepNumber": 4, "description": "Factorise.", "workingLatex": "(2x + 15)(x - 6) = 0", "explanation": "Expanding gives $2x^2 - 12x + 15x - 90 = 2x^2 + 3x - 90$, as required.", "diagram": null },
        { "stepNumber": 5, "description": "Solve.", "workingLatex": "x = -\\tfrac{15}{2} \\ \\text{ or } \\ x = 6", "explanation": "Set each factor to zero.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "x = 6", "explanation": "A width must be positive, so the width is $6$ m (length $15$ m, area $90$ m²).", "diagram": null }
      ],
      "finalAnswer": "The width is $6$ m."
    }
  }
];
