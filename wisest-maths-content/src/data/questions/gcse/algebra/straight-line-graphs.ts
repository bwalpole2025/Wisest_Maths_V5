import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.straight-line-graphs.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient", "intercept"],
    "questionText": "A line has equation $y = 3x + 2$. Write down its gradient and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form of a straight line.", "workingLatex": "y = mx + c", "explanation": "In this standard form the number multiplying $x$ is the gradient $m$, and the number on its own is the $y$-intercept $c$.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the equation with the general form.", "workingLatex": "y = 3x + 2 \\ \\leftrightarrow\\ y = mx + c", "explanation": "Matching the two lines up lets us read off the values of $m$ and $c$ directly.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = 3", "explanation": "The coefficient of $x$ is $3$, so the line rises $3$ units for every $1$ unit across.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the $y$-intercept.", "workingLatex": "c = 2", "explanation": "The constant term is $2$, so the line crosses the $y$-axis at $(0, 2)$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } 3,\\ y\\text{-intercept } 2", "explanation": "These two numbers completely describe the line's steepness and starting height.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a point.", "workingLatex": "x = 0 \\Rightarrow y = 3(0)+2 = 2", "explanation": "Substituting $x = 0$ gives $y = 2$, confirming the $y$-intercept.", "diagram": null }
      ],
      "finalAnswer": "Gradient $3$, $y$-intercept $2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient", "negative gradient"],
    "questionText": "A line has equation $y = -2x + 5$. Write down its gradient and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form of a straight line.", "workingLatex": "y = mx + c", "explanation": "The coefficient of $x$ is the gradient and the constant is the $y$-intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Compare with the general form.", "workingLatex": "y = -2x + 5 \\ \\leftrightarrow\\ y = mx + c", "explanation": "We read off $m$ and $c$, keeping the sign attached to the coefficient of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = -2", "explanation": "The coefficient of $x$ is $-2$; the negative sign means the line slopes downwards.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the $y$-intercept.", "workingLatex": "c = 5", "explanation": "The constant term is $5$, so the line crosses the $y$-axis at $(0, 5)$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } -2,\\ y\\text{-intercept } 5", "explanation": "A negative gradient of $-2$ means the line falls $2$ units for every $1$ unit across.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a point.", "workingLatex": "x = 0 \\Rightarrow y = -2(0)+5 = 5", "explanation": "Substituting $x = 0$ gives $y = 5$, confirming the $y$-intercept.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-2$, $y$-intercept $5$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "y=mx+c", "forming an equation"],
    "questionText": "Write down the equation of the straight line with gradient $4$ and $y$-intercept $-1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form of a straight line.", "workingLatex": "y = mx + c", "explanation": "To build an equation we just place the gradient in the $m$ position and the intercept in the $c$ position.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the given values.", "workingLatex": "m = 4,\\ c = -1", "explanation": "The gradient is $4$ and the $y$-intercept is $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the gradient.", "workingLatex": "y = 4x + c", "explanation": "Placing $m = 4$ gives the $x$-term of the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the intercept.", "workingLatex": "y = 4x + (-1)", "explanation": "Placing $c = -1$ adds the constant term.", "diagram": null },
        { "stepNumber": 5, "description": "Tidy the signs.", "workingLatex": "y = 4x - 1", "explanation": "Adding a negative is the same as subtracting, so we write $-1$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the intercept.", "workingLatex": "x = 0 \\Rightarrow y = -1", "explanation": "At $x = 0$ the line gives $y = -1$, matching the required $y$-intercept.", "diagram": null }
      ],
      "finalAnswer": "$y = 4x - 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "substitution", "finding y"],
    "questionText": "A line has equation $y = 2x + 1$. Find the value of $y$ when $x = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand what is being asked.", "workingLatex": "\\text{find } y \\text{ at } x = 3", "explanation": "We substitute the given $x$-value into the equation to find the matching $y$-value on the line.", "diagram": null },
        { "stepNumber": 2, "description": "Write down the equation.", "workingLatex": "y = 2x + 1", "explanation": "This tells us how to turn any $x$-value into its $y$-value.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 3$.", "workingLatex": "y = 2(3) + 1", "explanation": "We replace $x$ with $3$ everywhere it appears.", "diagram": null },
        { "stepNumber": 4, "description": "Do the multiplication.", "workingLatex": "2 \\times 3 = 6", "explanation": "Under the order of operations, multiply before adding.", "diagram": null },
        { "stepNumber": 5, "description": "Do the addition.", "workingLatex": "y = 6 + 1 = 7", "explanation": "Adding the constant gives the final $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "y = 7", "explanation": "So the point $(3, 7)$ lies on the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 7$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["straight-line graphs", "point on a line", "substitution"],
    "questionText": "Does the point $(2, 7)$ lie on the line $y = 3x + 1$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the test.", "workingLatex": "\\text{substitute the point into the equation}", "explanation": "A point lies on a line exactly when its coordinates make the equation true, so we test them.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the coordinates.", "workingLatex": "x = 2,\\ y = 7", "explanation": "The first number is the $x$-value and the second is the $y$-value to check.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 2$ into the right-hand side.", "workingLatex": "3(2) + 1", "explanation": "We work out what $y$ the line gives when $x = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate.", "workingLatex": "6 + 1 = 7", "explanation": "The line predicts $y = 7$ at $x = 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare with the point's $y$-value.", "workingLatex": "7 = 7", "explanation": "The predicted $y$ matches the point's $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\text{yes, } (2,7) \\text{ is on the line}", "explanation": "Because the coordinates satisfy the equation, the point lies on the line.", "diagram": null }
      ],
      "finalAnswer": "Yes, since $3(2)+1 = 7$."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "two points"],
    "questionText": "Find the gradient of the line passing through the points $A(1, 2)$ and $B(3, 8)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "The gradient is the change in $y$ divided by the change in $x$ — how much the line rises for each step across.", "diagram": null },
        { "stepNumber": 2, "description": "Label the points.", "workingLatex": "A(1,2),\\ B(3,8)", "explanation": "Taking $A$ as point $1$ and $B$ as point $2$ keeps the substitution consistent.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $y$.", "workingLatex": "y_2 - y_1 = 8 - 2 = 6", "explanation": "This is how far the line rises between the two points.", "diagram": null },
        { "stepNumber": 4, "description": "Find the change in $x$.", "workingLatex": "x_2 - x_1 = 3 - 1 = 2", "explanation": "This is how far the line moves across between the two points.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{6}{2} = 3", "explanation": "Dividing the rise by the run gives the gradient.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = 3", "explanation": "So the line goes up $3$ units for every $1$ unit across.", "diagram": null }
      ],
      "finalAnswer": "$m = 3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "two points", "origin"],
    "questionText": "Find the gradient of the line passing through the origin $O(0, 0)$ and $P(4, 12)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "The gradient is the rise divided by the run between two points on the line.", "diagram": null },
        { "stepNumber": 2, "description": "Label the points.", "workingLatex": "O(0,0),\\ P(4,12)", "explanation": "Using the origin makes the differences simple, as we subtract zeros.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $y$.", "workingLatex": "12 - 0 = 12", "explanation": "The line rises $12$ units from $O$ to $P$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the change in $x$.", "workingLatex": "4 - 0 = 4", "explanation": "The line moves $4$ units across from $O$ to $P$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{12}{4} = 3", "explanation": "Dividing rise by run gives the gradient.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = 3", "explanation": "So the line has gradient $3$.", "diagram": null }
      ],
      "finalAnswer": "$m = 3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient", "intercept"],
    "questionText": "A line has equation $y = x - 4$. Write down its gradient and its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form of a straight line.", "workingLatex": "y = mx + c", "explanation": "The coefficient of $x$ is the gradient and the constant is the $y$-intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the equation to show the coefficient.", "workingLatex": "y = 1x + (-4)", "explanation": "Although no number is written in front of $x$, it is understood to be $1$; the constant is $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = 1", "explanation": "A gradient of $1$ means the line rises $1$ unit for every $1$ unit across.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the $y$-intercept.", "workingLatex": "c = -4", "explanation": "The line crosses the $y$-axis at $(0, -4)$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } 1,\\ y\\text{-intercept } -4", "explanation": "These describe the line's steepness and where it meets the $y$-axis.", "diagram": null },
        { "stepNumber": 6, "description": "Check with a point.", "workingLatex": "x = 0 \\Rightarrow y = 0 - 4 = -4", "explanation": "At $x = 0$ we get $y = -4$, confirming the intercept.", "diagram": null }
      ],
      "finalAnswer": "Gradient $1$, $y$-intercept $-4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "horizontal line", "equation of a line"],
    "questionText": "Write down the equation of the horizontal line that passes through the point $(0, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a horizontal line looks like.", "workingLatex": "y = c", "explanation": "On a horizontal line every point has the same height, so the $y$-value is fixed while $x$ can be anything.", "diagram": null },
        { "stepNumber": 2, "description": "Note the gradient.", "workingLatex": "m = 0", "explanation": "A horizontal line has no rise, so its gradient is zero and there is no $x$-term.", "diagram": null },
        { "stepNumber": 3, "description": "Read the fixed $y$-value.", "workingLatex": "y = 3", "explanation": "The line passes through height $3$, so every point on it has $y = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = 3", "explanation": "This states that $y$ is always $3$, whatever $x$ is.", "diagram": null },
        { "stepNumber": 5, "description": "Check another point.", "workingLatex": "(5, 3): y = 3 \\checkmark", "explanation": "A different point at the same height also satisfies $y = 3$, as expected for a horizontal line.", "diagram": null }
      ],
      "finalAnswer": "$y = 3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "vertical line", "equation of a line"],
    "questionText": "Write down the equation of the vertical line that passes through the point $(5, 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a vertical line looks like.", "workingLatex": "x = k", "explanation": "On a vertical line every point has the same $x$-value, while the $y$-value can be anything.", "diagram": null },
        { "stepNumber": 2, "description": "Read the fixed $x$-value.", "workingLatex": "x = 5", "explanation": "The line passes through $x = 5$, so every point on it has $x = 5$.", "diagram": null },
        { "stepNumber": 3, "description": "Note why there is no $y = mx+c$ form.", "workingLatex": "\\text{gradient undefined}", "explanation": "A vertical line has no run, so its gradient cannot be written as a number and it is described by $x = k$ instead.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "x = 5", "explanation": "This states that $x$ is always $5$, whatever $y$ is.", "diagram": null },
        { "stepNumber": 5, "description": "Check another point.", "workingLatex": "(5, -1): x = 5 \\checkmark", "explanation": "A different point with the same $x$-value also satisfies $x = 5$, as expected.", "diagram": null }
      ],
      "finalAnswer": "$x = 5$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient"],
    "questionText": "State the gradient of the line $y = 5x - 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "The gradient is the number multiplying $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Locate the coefficient of $x$.", "workingLatex": "y = \\mathbf{5}x - 7", "explanation": "The bold $5$ is the number in the $m$ position.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = 5", "explanation": "So the gradient is $5$; the constant $-7$ does not affect the steepness.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the value.", "workingLatex": "\\text{up } 5 \\text{ for every } 1 \\text{ across}", "explanation": "A gradient of $5$ is a steep upward slope.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "m = 5", "explanation": "The gradient of the line is $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["straight-line graphs", "point on a line", "substitution"],
    "questionText": "Does the point $(1, 4)$ lie on the line $y = 2x + 1$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the test.", "workingLatex": "\\text{substitute the point into the equation}", "explanation": "The point lies on the line only if its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the coordinates.", "workingLatex": "x = 1,\\ y = 4", "explanation": "We will check whether the line gives $y = 4$ when $x = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 1$.", "workingLatex": "2(1) + 1", "explanation": "We work out the line's $y$-value at $x = 1$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate.", "workingLatex": "2 + 1 = 3", "explanation": "The line gives $y = 3$ when $x = 1$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare.", "workingLatex": "3 \\ne 4", "explanation": "The line's value $3$ does not equal the point's $y$-value $4$.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\text{no, } (1,4) \\text{ is not on the line}", "explanation": "Because the coordinates do not satisfy the equation, the point is not on the line.", "diagram": null }
      ],
      "finalAnswer": "No, since $2(1)+1 = 3 \\ne 4$."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "rearranging", "gradient", "intercept"],
    "questionText": "The line $2x + y = 6$ is written in the form $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "To read off the gradient and intercept we first rearrange into the form $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the equation.", "workingLatex": "2x + y = 6", "explanation": "We need to isolate $y$ on one side.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $2x$ from both sides.", "workingLatex": "y = 6 - 2x", "explanation": "Removing the $2x$ from the left leaves $y$ by itself.", "diagram": null },
        { "stepNumber": 4, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = -2x + 6", "explanation": "Writing the $x$-term first makes the gradient and intercept easy to read.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the gradient.", "workingLatex": "m = -2", "explanation": "The coefficient of $x$ is $-2$.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the $y$-intercept.", "workingLatex": "c = 6", "explanation": "The constant term is $6$, so the line crosses the $y$-axis at $(0, 6)$.", "diagram": null },
        { "stepNumber": 7, "description": "State both values.", "workingLatex": "\\text{gradient } -2,\\ y\\text{-intercept } 6", "explanation": "These come straight from the rearranged equation.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-2$, $y$-intercept $6$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "rearranging", "gradient", "fraction"],
    "questionText": "The line $3x + 2y = 12$ is written in the form $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "We rearrange into $y = mx + c$ to read off the gradient and intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3x$ from both sides.", "workingLatex": "2y = 12 - 3x", "explanation": "This isolates the $y$-term on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Divide every term by $2$.", "workingLatex": "y = \\dfrac{12}{2} - \\dfrac{3x}{2}", "explanation": "Dividing throughout by the coefficient of $y$ makes $y$ the subject.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "y = 6 - \\dfrac{3}{2}x", "explanation": "The constant becomes $6$ and the $x$-coefficient becomes $\\tfrac{3}{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = -\\dfrac{3}{2}x + 6", "explanation": "Writing the $x$-term first shows the gradient clearly.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the values.", "workingLatex": "m = -\\dfrac{3}{2},\\ c = 6", "explanation": "The gradient is $-\\tfrac{3}{2}$ and the $y$-intercept is $6$.", "diagram": null },
        { "stepNumber": 7, "description": "State both values.", "workingLatex": "\\text{gradient } -\\tfrac{3}{2},\\ y\\text{-intercept } 6", "explanation": "A fractional gradient is perfectly acceptable.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-\\tfrac{3}{2}$, $y$-intercept $6$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "forming an equation", "gradient and a point"],
    "questionText": "A straight line has gradient $2$ and passes through the point $(3, 5)$. Find the equation of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = mx + c", "explanation": "We know the gradient, so we can fill in $m$ and then use the point to find $c$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the gradient.", "workingLatex": "y = 2x + c", "explanation": "Placing $m = 2$ leaves only the intercept $c$ unknown.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "5 = 2(3) + c", "explanation": "Since $(3,5)$ is on the line, its coordinates must satisfy the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "5 = 6 + c", "explanation": "Working out $2 \\times 3 = 6$ leaves a simple equation for $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 5 - 6 = -1", "explanation": "Subtracting $6$ from both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 2x - 1", "explanation": "Putting the gradient and intercept together gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check the point.", "workingLatex": "2(3) - 1 = 5 \\checkmark", "explanation": "Substituting $(3,5)$ back gives a true statement, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "forming an equation", "negative gradient"],
    "questionText": "A straight line has gradient $-3$ and passes through the point $(2, 4)$. Find the equation of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = mx + c", "explanation": "We fill in the gradient and then use the point to find the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the gradient.", "workingLatex": "y = -3x + c", "explanation": "Placing $m = -3$ leaves the intercept $c$ to find.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "4 = -3(2) + c", "explanation": "The point $(2,4)$ lies on the line, so it satisfies the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "4 = -6 + c", "explanation": "Working out $-3 \\times 2 = -6$ leaves an equation for $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 4 + 6 = 10", "explanation": "Adding $6$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -3x + 10", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check the point.", "workingLatex": "-3(2) + 10 = 4 \\checkmark", "explanation": "Substituting $(2,4)$ back gives a true statement, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -3x + 10$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "forming an equation"],
    "questionText": "Find the equation of the straight line passing through $A(1, 3)$ and $B(4, 9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient first.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "With two points we begin by measuring the slope of the line.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the coordinates.", "workingLatex": "m = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2", "explanation": "The rise is $6$ and the run is $3$, giving a gradient of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = 2x + c", "explanation": "We insert the gradient and now need the intercept $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute one of the points.", "workingLatex": "3 = 2(1) + c", "explanation": "Using $A(1,3)$ (either point works) gives an equation for $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "3 = 2 + c \\Rightarrow c = 1", "explanation": "Subtracting $2$ from both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 2x + 1", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the other point.", "workingLatex": "2(4) + 1 = 9 \\checkmark", "explanation": "Substituting $B(4,9)$ gives a true statement, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["straight-line graphs", "intercepts", "axes"],
    "questionText": "A line has equation $y = 2x - 6$. Find the coordinates of the points where it crosses the $x$-axis and the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how each axis is described.", "workingLatex": "y\\text{-axis}: x = 0,\\quad x\\text{-axis}: y = 0", "explanation": "A graph crosses the $y$-axis where $x = 0$ and the $x$-axis where $y = 0$, so we set each in turn.", "diagram": null },
        { "stepNumber": 2, "description": "Find the $y$-intercept by setting $x = 0$.", "workingLatex": "y = 2(0) - 6 = -6", "explanation": "With $x = 0$ the $x$-term disappears, leaving the constant.", "diagram": null },
        { "stepNumber": 3, "description": "Write the $y$-axis crossing.", "workingLatex": "(0, -6)", "explanation": "The line meets the $y$-axis at $(0,-6)$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the $x$-intercept by setting $y = 0$.", "workingLatex": "0 = 2x - 6", "explanation": "On the $x$-axis the height is zero, so we solve this equation for $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $x$.", "workingLatex": "2x = 6 \\Rightarrow x = 3", "explanation": "Adding $6$ then dividing by $2$ gives $x = 3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the $x$-axis crossing.", "workingLatex": "(3, 0)", "explanation": "The line meets the $x$-axis at $(3,0)$.", "diagram": null },
        { "stepNumber": 7, "description": "State both intercepts.", "workingLatex": "(0,-6)\\ \\text{and}\\ (3,0)", "explanation": "These are the two axis crossings of the line.", "diagram": null }
      ],
      "finalAnswer": "$x$-axis at $(3, 0)$ and $y$-axis at $(0, -6)$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["straight-line graphs", "horizontal line", "gradient"],
    "questionText": "State the gradient of the line $y = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the type of line.", "workingLatex": "y = 4 \\text{ is horizontal}", "explanation": "Since $y$ is fixed at $4$ for every $x$, the line is flat and horizontal.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the gradient of a flat line.", "workingLatex": "\\text{no rise}", "explanation": "A horizontal line never goes up or down as $x$ changes, so its rise is always zero.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient idea.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}} = \\dfrac{0}{\\text{run}}", "explanation": "With zero rise, the gradient is zero no matter how far we move across.", "diagram": null },
        { "stepNumber": 4, "description": "State the gradient.", "workingLatex": "m = 0", "explanation": "So the line $y = 4$ has gradient $0$.", "diagram": null }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "substitution", "negative x"],
    "questionText": "A line has equation $y = 3x - 1$. Find the value of $y$ when $x = -2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the equation.", "workingLatex": "y = 3x - 1", "explanation": "We substitute the given $x$-value to find the matching $y$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -2$.", "workingLatex": "y = 3(-2) - 1", "explanation": "We replace $x$ with $-2$, keeping the brackets to handle the sign carefully.", "diagram": null },
        { "stepNumber": 3, "description": "Do the multiplication.", "workingLatex": "3 \\times (-2) = -6", "explanation": "A positive times a negative gives a negative, so this term is $-6$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the subtraction.", "workingLatex": "y = -6 - 1 = -7", "explanation": "Subtracting $1$ from $-6$ makes the value more negative.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "y = -7", "explanation": "So the point $(-2, -7)$ lies on the line.", "diagram": null }
      ],
      "finalAnswer": "$y = -7$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "two points", "negative gradient"],
    "questionText": "Find the gradient of the line passing through $A(-1, 2)$ and $B(3, -6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "The gradient is the change in $y$ over the change in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Label the points.", "workingLatex": "A(-1,2),\\ B(3,-6)", "explanation": "Taking $A$ as point $1$ and $B$ as point $2$ keeps the order consistent.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $y$.", "workingLatex": "-6 - 2 = -8", "explanation": "The line falls $8$ units, so the change in $y$ is negative.", "diagram": null },
        { "stepNumber": 4, "description": "Find the change in $x$.", "workingLatex": "3 - (-1) = 4", "explanation": "Subtracting the negative gives a run of $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{-8}{4} = -2", "explanation": "A negative rise over a positive run gives a negative gradient.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = -2", "explanation": "So the line slopes downwards with gradient $-2$.", "diagram": null }
      ],
      "finalAnswer": "$m = -2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "two points", "fraction"],
    "questionText": "Find the gradient of the line passing through $A(2, 1)$ and $B(6, 4)$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "The gradient is the rise divided by the run; it need not be a whole number.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "4 - 1 = 3", "explanation": "The line rises $3$ units.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "6 - 2 = 4", "explanation": "The line moves $4$ units across.", "diagram": null },
        { "stepNumber": 4, "description": "Form the fraction.", "workingLatex": "m = \\dfrac{3}{4}", "explanation": "The rise over the run gives the gradient as a fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Check it cannot simplify.", "workingLatex": "\\gcd(3,4) = 1", "explanation": "As $3$ and $4$ share no common factor, the fraction is already in its simplest form.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = \\dfrac{3}{4}", "explanation": "So the line rises $3$ units for every $4$ across.", "diagram": null }
      ],
      "finalAnswer": "$m = \\dfrac{3}{4}$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "forming an equation", "negative gradient"],
    "questionText": "Find the equation of the straight line passing through $A(0, 5)$ and $B(2, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{1 - 5}{2 - 0} = \\dfrac{-4}{2} = -2", "explanation": "The line falls $4$ units over a run of $2$, giving a gradient of $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the $y$-intercept directly.", "workingLatex": "A = (0, 5)", "explanation": "Because $A$ has $x = 0$, it is exactly where the line crosses the $y$-axis, so $c = 5$.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "c = 5", "explanation": "No further calculation is needed for the intercept here.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = -2x + 5", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 5, "description": "Check with the other point.", "workingLatex": "-2(2) + 5 = 1 \\checkmark", "explanation": "Substituting $B(2,1)$ gives a true statement, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -2x + 5$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "forming an equation", "fraction"],
    "questionText": "Find the equation of the straight line passing through $A(1, 1)$ and $B(5, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{4 - 1}{5 - 1} = \\dfrac{3}{4}", "explanation": "The rise is $3$ and the run is $4$, giving a fractional gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = \\dfrac{3}{4}x + c", "explanation": "We insert the gradient and now find the intercept using a point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute point $A(1,1)$.", "workingLatex": "1 = \\dfrac{3}{4}(1) + c", "explanation": "The point lies on the line, so its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "1 = \\dfrac{3}{4} + c", "explanation": "The $x$-term becomes $\\tfrac{3}{4}$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 1 - \\dfrac{3}{4} = \\dfrac{1}{4}", "explanation": "Subtracting $\\tfrac{3}{4}$ from $1$ leaves $\\tfrac{1}{4}$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = \\dfrac{3}{4}x + \\dfrac{1}{4}", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the other point.", "workingLatex": "\\dfrac{3}{4}(5) + \\dfrac{1}{4} = \\dfrac{15}{4} + \\dfrac{1}{4} = 4 \\checkmark", "explanation": "Substituting $B(5,4)$ gives $4$, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = \\dfrac{3}{4}x + \\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "point on a line", "unknown coordinate"],
    "questionText": "The point $(a, 10)$ lies on the line $y = 2x + 4$. Find the value of $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the fact that the point is on the line.", "workingLatex": "y = 2x + 4", "explanation": "If the point lies on the line, its coordinates must satisfy the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known $y$-value.", "workingLatex": "10 = 2a + 4", "explanation": "We put $y = 10$ and $x = a$ into the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $4$ from both sides.", "workingLatex": "6 = 2a", "explanation": "Removing the constant isolates the term in $a$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "a = 3", "explanation": "Dividing both sides by $2$ gives the value of $a$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the point.", "workingLatex": "2(3) + 4 = 10 \\checkmark", "explanation": "At $x = 3$ the line gives $y = 10$, matching the point.", "diagram": null }
      ],
      "finalAnswer": "$a = 3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "point on a line", "unknown coordinate"],
    "questionText": "The point $(5, b)$ lies on the line $y = 3x - 2$. Find the value of $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the fact that the point is on the line.", "workingLatex": "y = 3x - 2", "explanation": "The coordinates of a point on the line satisfy its equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known $x$-value.", "workingLatex": "b = 3(5) - 2", "explanation": "We put $x = 5$ into the equation to find $y = b$.", "diagram": null },
        { "stepNumber": 3, "description": "Do the multiplication.", "workingLatex": "3 \\times 5 = 15", "explanation": "Multiplication comes before subtraction.", "diagram": null },
        { "stepNumber": 4, "description": "Do the subtraction.", "workingLatex": "b = 15 - 2 = 13", "explanation": "Subtracting $2$ gives the value of $b$.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "b = 13", "explanation": "So the point $(5, 13)$ lies on the line.", "diagram": null }
      ],
      "finalAnswer": "$b = 13$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "forming an equation", "fractional gradient"],
    "questionText": "A straight line has gradient $\\tfrac{1}{2}$ and crosses the $y$-axis at $(0, -2)$. Find the equation of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "We can place the gradient and intercept straight into this form.", "diagram": null },
        { "stepNumber": 2, "description": "Read off the intercept.", "workingLatex": "c = -2", "explanation": "The line crosses the $y$-axis at $(0,-2)$, so the intercept is $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the gradient.", "workingLatex": "y = \\dfrac{1}{2}x + c", "explanation": "Placing $m = \\tfrac{1}{2}$ gives the $x$-term.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the intercept.", "workingLatex": "y = \\dfrac{1}{2}x - 2", "explanation": "Adding the constant $-2$ completes the equation.", "diagram": null },
        { "stepNumber": 5, "description": "Check the intercept.", "workingLatex": "x = 0 \\Rightarrow y = -2 \\checkmark", "explanation": "At $x = 0$ the line gives $y = -2$, matching the given crossing point.", "diagram": null }
      ],
      "finalAnswer": "$y = \\dfrac{1}{2}x - 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "reading a graph", "gradient", "intercept"],
    "questionText": "The straight line shown passes through $(0, 1)$ and $(1, 3)$. Find its equation.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 3, "yMin": -6, "yMax": 8,
      "curves": [{ "points": [{ "x": -3, "y": -5 }, { "x": 3, "y": 7 }], "color": "accent", "label": "L" }],
      "points": [
        { "x": 0, "y": 1, "label": "(0,1)", "color": "ink" },
        { "x": 1, "y": 3, "label": "(1,3)", "color": "ink" }
      ],
      "alt": "A straight line crossing the y-axis at (0,1) and passing through (1,3)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the $y$-intercept from the graph.", "workingLatex": "c = 1", "explanation": "The line crosses the $y$-axis at $(0,1)$, so the intercept is $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the two given points for the gradient.", "workingLatex": "m = \\dfrac{3 - 1}{1 - 0}", "explanation": "We measure the rise and run between the two marked points.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate the gradient.", "workingLatex": "m = \\dfrac{2}{1} = 2", "explanation": "The line rises $2$ for every $1$ across.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute into the general form.", "workingLatex": "y = 2x + 1", "explanation": "Combining the gradient $2$ and intercept $1$ gives the equation.", "diagram": null },
        { "stepNumber": 5, "description": "Check with the second point.", "workingLatex": "2(1) + 1 = 3 \\checkmark", "explanation": "At $x = 1$ the equation gives $y = 3$, matching the graph.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient", "negative gradient"],
    "questionText": "State the gradient of the line $y = -x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "The gradient is the coefficient of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite to show the coefficient.", "workingLatex": "y = -1x + 3", "explanation": "The term $-x$ means $-1$ times $x$, so the hidden coefficient is $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = -1", "explanation": "A gradient of $-1$ means the line falls $1$ unit for every $1$ across.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "m = -1", "explanation": "The gradient of the line is $-1$.", "diagram": null }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "rearranging", "make y the subject"],
    "questionText": "Rearrange $x - y = 4$ into the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "We want $y$ alone on the left in the form $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $x$ from both sides.", "workingLatex": "-y = 4 - x", "explanation": "This moves the $x$-term to the right, leaving $-y$ on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply both sides by $-1$.", "workingLatex": "y = -4 + x", "explanation": "Multiplying through by $-1$ turns $-y$ into $y$ and flips the sign of each term on the right.", "diagram": null },
        { "stepNumber": 4, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = x - 4", "explanation": "Writing the $x$-term first gives the standard form.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the values as a check.", "workingLatex": "m = 1,\\ c = -4", "explanation": "The gradient is $1$ and the intercept is $-4$, both sensible for this line.", "diagram": null }
      ],
      "finalAnswer": "$y = x - 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "rearranging", "make y the subject"],
    "questionText": "Rearrange $4x - 2y = 8$ into the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "We isolate $y$ to reach the form $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $4x$ from both sides.", "workingLatex": "-2y = 8 - 4x", "explanation": "This leaves the $y$-term by itself on the left.", "diagram": null },
        { "stepNumber": 3, "description": "Divide every term by $-2$.", "workingLatex": "y = \\dfrac{8}{-2} - \\dfrac{4x}{-2}", "explanation": "Dividing by the coefficient of $y$ makes $y$ the subject; remember each term is divided.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify each term.", "workingLatex": "y = -4 + 2x", "explanation": "The constant gives $-4$ and the $x$-term gives $+2x$ because a negative divided by a negative is positive.", "diagram": null },
        { "stepNumber": 5, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = 2x - 4", "explanation": "Writing the $x$-term first gives the standard form.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the values as a check.", "workingLatex": "m = 2,\\ c = -4", "explanation": "The gradient is $2$ and the intercept is $-4$.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["straight-line graphs", "two points", "forming an equation", "x-intercept"],
    "questionText": "A straight line passes through $A(2, 7)$ and $B(5, 16)$. Find its equation, and hence the coordinates of the point where it crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{16 - 7}{5 - 2} = \\dfrac{9}{3} = 3", "explanation": "The rise is $9$ over a run of $3$, giving a gradient of $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = 3x + c", "explanation": "We insert the gradient and find the intercept next.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute point $A(2,7)$.", "workingLatex": "7 = 3(2) + c", "explanation": "The point lies on the line, so its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "7 = 6 + c \\Rightarrow c = 1", "explanation": "Subtracting $6$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 3x + 1", "explanation": "This is the equation of the line.", "diagram": null },
        { "stepNumber": 6, "description": "Set $y = 0$ for the $x$-axis crossing.", "workingLatex": "0 = 3x + 1", "explanation": "The line meets the $x$-axis where the height is zero.", "diagram": null },
        { "stepNumber": 7, "description": "Solve for $x$.", "workingLatex": "3x = -1 \\Rightarrow x = -\\dfrac{1}{3}", "explanation": "Subtracting $1$ and dividing by $3$ gives the crossing point.", "diagram": null },
        { "stepNumber": 8, "description": "State the crossing point.", "workingLatex": "\\left(-\\dfrac{1}{3}, 0\\right)", "explanation": "So the line crosses the $x$-axis at $\\left(-\\tfrac{1}{3}, 0\\right)$.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x + 1$; crosses the $x$-axis at $\\left(-\\tfrac{1}{3}, 0\\right)$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "intercept", "through the origin"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = -4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "Even when there is no visible constant, the equation still fits this form.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite to show the missing constant.", "workingLatex": "y = -4x + 0", "explanation": "There is no number added on, so the constant term is $0$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = -4", "explanation": "The coefficient of $x$ is $-4$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the $y$-intercept.", "workingLatex": "c = 0", "explanation": "The line passes through the origin, so it crosses the $y$-axis at $(0,0)$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } -4,\\ y\\text{-intercept } 0", "explanation": "A zero intercept always means the line goes through the origin.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-4$, $y$-intercept $0$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["straight-line graphs", "vertical line", "undefined gradient"],
    "questionText": "Explain why the gradient of the line $x = 3$ is undefined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the line.", "workingLatex": "x = 3 \\text{ is vertical}", "explanation": "Every point on this line has $x = 3$, so the line runs straight up and down.", "diagram": null },
        { "stepNumber": 2, "description": "Pick two points on it.", "workingLatex": "(3, 1)\\ \\text{and}\\ (3, 5)", "explanation": "Any two points on the line share the same $x$-value.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the change in $x$.", "workingLatex": "x_2 - x_1 = 3 - 3 = 0", "explanation": "There is no horizontal movement, so the run is zero.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute into the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{0}", "explanation": "The gradient formula would require us to divide by the run, which is zero.", "diagram": null },
        { "stepNumber": 5, "description": "Explain the problem.", "workingLatex": "\\text{division by } 0 \\text{ is undefined}", "explanation": "Dividing by zero has no meaning in mathematics, so the gradient cannot be given a value.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\therefore m \\text{ is undefined}", "explanation": "A vertical line is infinitely steep, which is why its gradient is undefined.", "diagram": null }
      ],
      "finalAnswer": "The run is zero, so $m = \\tfrac{\\Delta y}{0}$ requires dividing by zero, which is undefined."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "table of values", "substitution"],
    "questionText": "Complete the table of values for $y = 2x - 3$ at $x = 0$, $x = 1$ and $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the rule.", "workingLatex": "y = 2x - 3", "explanation": "We substitute each $x$-value in turn to find its matching $y$-value.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 0$.", "workingLatex": "y = 2(0) - 3 = -3", "explanation": "At $x = 0$ the $x$-term vanishes, leaving $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $x = 1$.", "workingLatex": "y = 2(1) - 3 = -1", "explanation": "At $x = 1$ we get $2 - 3 = -1$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 2$.", "workingLatex": "y = 2(2) - 3 = 1", "explanation": "At $x = 2$ we get $4 - 3 = 1$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the results.", "workingLatex": "(0,-3),\\ (1,-1),\\ (2,1)", "explanation": "These are the three points from the table.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the constant step.", "workingLatex": "-3 \\to -1 \\to 1 \\ (+2 \\text{ each time})", "explanation": "The $y$-values go up by $2$ each time $x$ increases by $1$, matching the gradient of $2$ — a good check that the line is straight.", "diagram": null }
      ],
      "finalAnswer": "$y = -3, -1, 1$ (at $x = 0, 1, 2$)"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["straight-line graphs", "point on a line", "negative coordinates"],
    "questionText": "Does the point $(-2, -5)$ lie on the line $y = 2x - 1$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the test.", "workingLatex": "\\text{substitute the point into the equation}", "explanation": "The point lies on the line only if its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = -2$.", "workingLatex": "2(-2) - 1", "explanation": "We find the line's $y$-value at $x = -2$, using brackets for the negative.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "-4 - 1 = -5", "explanation": "The line gives $y = -5$ at $x = -2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare with the point's $y$-value.", "workingLatex": "-5 = -5", "explanation": "The predicted $y$ matches the point's $y$-value.", "diagram": null },
        { "stepNumber": 5, "description": "State the conclusion.", "workingLatex": "\\text{yes, on the line}", "explanation": "Because the coordinates satisfy the equation, the point lies on the line.", "diagram": null }
      ],
      "finalAnswer": "Yes, since $2(-2)-1 = -5$."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "through the origin", "forming an equation"],
    "questionText": "A straight line has gradient $5$ and passes through the origin. Find the equation of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "We place the gradient and use the origin to find the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Use the origin for the intercept.", "workingLatex": "\\text{through }(0,0) \\Rightarrow c = 0", "explanation": "A line through the origin crosses the $y$-axis at $0$, so $c = 0$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the gradient.", "workingLatex": "y = 5x + 0", "explanation": "Placing $m = 5$ with $c = 0$ gives the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "y = 5x", "explanation": "The zero constant can be dropped.", "diagram": null },
        { "stepNumber": 5, "description": "Check the origin.", "workingLatex": "x = 0 \\Rightarrow y = 0 \\checkmark", "explanation": "The line passes through $(0,0)$ as required.", "diagram": null }
      ],
      "finalAnswer": "$y = 5x$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "two points", "negative coordinates"],
    "questionText": "Find the gradient of the line passing through $A(-3, -2)$ and $B(1, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "The gradient is the change in $y$ over the change in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "6 - (-2) = 8", "explanation": "Subtracting the negative gives a rise of $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "1 - (-3) = 4", "explanation": "Subtracting the negative gives a run of $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{8}{4} = 2", "explanation": "Rise over run gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = 2", "explanation": "So the line has gradient $2$.", "diagram": null }
      ],
      "finalAnswer": "$m = 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "forming an equation", "negative fraction gradient"],
    "questionText": "Find the equation of the straight line passing through $A(2, 3)$ and $B(6, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{1 - 3}{6 - 2} = \\dfrac{-2}{4} = -\\dfrac{1}{2}", "explanation": "The line falls $2$ over a run of $4$, giving a gradient of $-\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = -\\dfrac{1}{2}x + c", "explanation": "We insert the gradient and find the intercept with a point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute point $A(2,3)$.", "workingLatex": "3 = -\\dfrac{1}{2}(2) + c", "explanation": "The point lies on the line, so it satisfies the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "3 = -1 + c", "explanation": "Working out $-\\tfrac{1}{2} \\times 2 = -1$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 4", "explanation": "Adding $1$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -\\dfrac{1}{2}x + 4", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the other point.", "workingLatex": "-\\dfrac{1}{2}(6) + 4 = -3 + 4 = 1 \\checkmark", "explanation": "Substituting $B(6,1)$ gives $1$, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\dfrac{1}{2}x + 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["straight-line graphs", "collinear", "equation of a line", "reasoning"],
    "questionText": "Show that the points $A(1, 4)$, $B(3, 10)$ and $C(5, 16)$ all lie on the same straight line, and state its equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the equation of the line through $A$ and $B$.", "workingLatex": "m = \\dfrac{10 - 4}{3 - 1} = \\dfrac{6}{2} = 3", "explanation": "We first fix a line using two of the points, then test the third against it.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "4 = 3(1) + c \\Rightarrow c = 1", "explanation": "Substituting $A(1,4)$ gives the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 3x + 1", "explanation": "This is the line through $A$ and $B$.", "diagram": null },
        { "stepNumber": 4, "description": "Test point $C(5,16)$.", "workingLatex": "3(5) + 1 = 16", "explanation": "We substitute $x = 5$ to see whether the line predicts $y = 16$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare.", "workingLatex": "16 = 16 \\checkmark", "explanation": "The line gives exactly $16$, matching $C$'s $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "\\therefore A, B, C \\text{ collinear}", "explanation": "All three points satisfy $y = 3x + 1$, so they lie on the same straight line.", "diagram": null }
      ],
      "finalAnswer": "All three satisfy $y = 3x + 1$, so they are collinear."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "vertical line", "two points"],
    "questionText": "Find the equation of the straight line passing through $(2, 5)$ and $(2, 9)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the coordinates.", "workingLatex": "x = 2 \\text{ for both points}", "explanation": "Both points have the same $x$-value, which is the signature of a vertical line.", "diagram": null },
        { "stepNumber": 2, "description": "Note what happens to the gradient.", "workingLatex": "\\Delta x = 2 - 2 = 0", "explanation": "The run is zero, so the line cannot be written as $y = mx + c$ and is vertical instead.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the form of a vertical line.", "workingLatex": "x = k", "explanation": "A vertical line is described by fixing $x$ at a constant value.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "x = 2", "explanation": "Every point on the line has $x = 2$, whatever the $y$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Check both points.", "workingLatex": "(2,5),(2,9): x = 2 \\checkmark", "explanation": "Both given points satisfy $x = 2$, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "horizontal line", "two points"],
    "questionText": "Find the equation of the straight line passing through $(1, 4)$ and $(6, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the coordinates.", "workingLatex": "y = 4 \\text{ for both points}", "explanation": "Both points have the same $y$-value, which is the signature of a horizontal line.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{4 - 4}{6 - 1} = \\dfrac{0}{5} = 0", "explanation": "There is no rise, so the gradient is zero and there is no $x$-term.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the form of a horizontal line.", "workingLatex": "y = c", "explanation": "A horizontal line fixes $y$ at a constant value.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = 4", "explanation": "Every point on the line has $y = 4$, whatever the $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Check both points.", "workingLatex": "(1,4),(6,4): y = 4 \\checkmark", "explanation": "Both given points satisfy $y = 4$, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["straight-line graphs", "point-gradient form", "rearranging"],
    "questionText": "A line is given by $y - 3 = 2(x - 1)$. Write this in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{expand and make } y \\text{ the subject}", "explanation": "This is the point–gradient form; expanding the bracket and tidying up gives $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the bracket.", "workingLatex": "y - 3 = 2x - 2", "explanation": "Multiplying $2$ by each term inside the bracket gives $2x - 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $3$ to both sides.", "workingLatex": "y = 2x - 2 + 3", "explanation": "This isolates $y$ on the left.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the constants.", "workingLatex": "y = 2x + 1", "explanation": "Combining $-2 + 3$ gives $+1$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the values as a check.", "workingLatex": "m = 2,\\ c = 1", "explanation": "The gradient $2$ matches the number in the original bracket, as expected.", "diagram": null },
        { "stepNumber": 6, "description": "Verify the given point.", "workingLatex": "x = 1 \\Rightarrow y = 3 \\checkmark", "explanation": "The point–gradient form was built from $(1,3)$, and the final equation passes through it.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["straight-line graphs", "intercepts", "distance", "multi-step"],
    "questionText": "The line $3x + 4y = 12$ crosses the $x$-axis at $P$ and the $y$-axis at $Q$. Find the length $PQ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $P$ by setting $y = 0$.", "workingLatex": "3x = 12 \\Rightarrow x = 4", "explanation": "On the $x$-axis the height is zero, so we solve for $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Write $P$.", "workingLatex": "P = (4, 0)", "explanation": "This is the $x$-axis crossing.", "diagram": null },
        { "stepNumber": 3, "description": "Find $Q$ by setting $x = 0$.", "workingLatex": "4y = 12 \\Rightarrow y = 3", "explanation": "On the $y$-axis $x$ is zero, so we solve for $y$.", "diagram": null },
        { "stepNumber": 4, "description": "Write $Q$.", "workingLatex": "Q = (0, 3)", "explanation": "This is the $y$-axis crossing.", "diagram": null },
        { "stepNumber": 5, "description": "Use the distance formula.", "workingLatex": "PQ = \\sqrt{(4-0)^2 + (0-3)^2}", "explanation": "The distance between the two intercepts is the hypotenuse of a right-angled triangle.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "PQ = \\sqrt{16 + 9} = \\sqrt{25} = 5", "explanation": "The squared gaps add to $25$, giving a length of $5$.", "diagram": null },
        { "stepNumber": 7, "description": "State the length.", "workingLatex": "PQ = 5 \\text{ units}", "explanation": "So the segment joining the two intercepts is $5$ units long.", "diagram": null }
      ],
      "finalAnswer": "$PQ = 5$ units"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "real context", "rise over run"],
    "questionText": "A straight ramp rises $2\\,\\text{m}$ vertically over a horizontal distance of $8\\,\\text{m}$. Find the gradient of the ramp.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what gradient measures.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}}", "explanation": "Gradient compares the vertical rise to the horizontal distance travelled.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the rise.", "workingLatex": "\\text{rise} = 2\\,\\text{m}", "explanation": "The ramp goes up $2$ metres.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the run.", "workingLatex": "\\text{run} = 8\\,\\text{m}", "explanation": "The ramp covers $8$ metres horizontally.", "diagram": null },
        { "stepNumber": 4, "description": "Form the fraction.", "workingLatex": "m = \\dfrac{2}{8}", "explanation": "Rise over run gives the gradient before simplifying.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "m = \\dfrac{1}{4}", "explanation": "Dividing top and bottom by $2$ gives the simplest form.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = \\dfrac{1}{4}", "explanation": "So the ramp rises $1$ metre for every $4$ metres travelled horizontally.", "diagram": null }
      ],
      "finalAnswer": "$m = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "forming an equation", "gradient and a point", "negative coordinates"],
    "questionText": "A straight line has gradient $-1$ and passes through the point $(-3, 2)$. Find the equation of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = mx + c", "explanation": "We insert the gradient and use the point to find the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the gradient.", "workingLatex": "y = -x + c", "explanation": "A gradient of $-1$ gives the term $-x$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "2 = -(-3) + c", "explanation": "The point $(-3,2)$ satisfies the equation; note $-(-3) = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "2 = 3 + c", "explanation": "The $x$-term becomes $+3$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 2 - 3 = -1", "explanation": "Subtracting $3$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -x - 1", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 7, "description": "Check the point.", "workingLatex": "-(-3) - 1 = 2 \\checkmark", "explanation": "Substituting $(-3,2)$ back gives a true statement.", "diagram": null }
      ],
      "finalAnswer": "$y = -x - 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "intercept"],
    "questionText": "State the $y$-intercept of the line $y = 7x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "The $y$-intercept is the constant term $c$.", "diagram": null },
        { "stepNumber": 2, "description": "Locate the constant.", "workingLatex": "y = 7x + \\mathbf{3}", "explanation": "The bold $3$ is the number on its own, in the $c$ position.", "diagram": null },
        { "stepNumber": 3, "description": "Read the intercept.", "workingLatex": "c = 3", "explanation": "The line crosses the $y$-axis at $(0, 3)$.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y\\text{-intercept} = 3", "explanation": "So the $y$-intercept is $3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "solving", "finding x"],
    "questionText": "A line has equation $y = 2x + 3$. Find the value of $x$ when $y = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the equation.", "workingLatex": "y = 2x + 3", "explanation": "This time we know $y$ and must work backwards to find $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known $y$-value.", "workingLatex": "11 = 2x + 3", "explanation": "Putting $y = 11$ turns the equation into one we can solve for $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3$ from both sides.", "workingLatex": "8 = 2x", "explanation": "Removing the constant isolates the term in $x$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = 4", "explanation": "Dividing both sides by $2$ gives the value of $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the answer.", "workingLatex": "2(4) + 3 = 11 \\checkmark", "explanation": "At $x = 4$ the line gives $y = 11$, confirming the solution.", "diagram": null }
      ],
      "finalAnswer": "$x = 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["straight-line graphs", "gradient", "increasing"],
    "questionText": "State whether the line $y = 3x + 2$ slopes upwards or downwards from left to right.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the gradient.", "workingLatex": "m = 3", "explanation": "The coefficient of $x$ tells us the slope's direction.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign.", "workingLatex": "m = 3 > 0", "explanation": "A positive gradient means the line rises as $x$ increases.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the sign.", "workingLatex": "\\text{rises left to right}", "explanation": "As we read the graph from left to right, the line goes up.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "\\text{upwards}", "explanation": "So the line slopes upwards from left to right.", "diagram": null }
      ],
      "finalAnswer": "Upwards (positive gradient)"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "reading a graph", "gradient"],
    "questionText": "The straight line shown passes through $(0, -2)$ and $(2, 2)$. Find its gradient.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 3, "yMin": -6, "yMax": 6,
      "curves": [{ "points": [{ "x": -1, "y": -4 }, { "x": 3, "y": 4 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": -2, "label": "(0,-2)", "color": "ink" },
        { "x": 2, "y": 2, "label": "(2,2)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,-2) and (2,2)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "We read two clear points off the graph and use the rise over run.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "2 - (-2) = 4", "explanation": "The line rises $4$ units between the two marked points.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "2 - 0 = 2", "explanation": "The line moves $2$ units across between them.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{4}{2} = 2", "explanation": "Rise over run gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = 2", "explanation": "So the line has gradient $2$.", "diagram": null }
      ],
      "finalAnswer": "$m = 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "reading a graph", "forming an equation", "negative gradient"],
    "questionText": "The straight line shown passes through $(0, 4)$ and $(2, 0)$. Find its equation.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -2, "xMax": 5, "yMin": -3, "yMax": 6,
      "curves": [{ "points": [{ "x": -1, "y": 6 }, { "x": 3, "y": -2 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 4, "label": "(0,4)", "color": "ink" },
        { "x": 2, "y": 0, "label": "(2,0)", "color": "ink" }
      ],
      "alt": "A straight line falling through (0,4) and (2,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the $y$-intercept.", "workingLatex": "c = 4", "explanation": "The line crosses the $y$-axis at $(0,4)$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient from the two points.", "workingLatex": "m = \\dfrac{0 - 4}{2 - 0} = \\dfrac{-4}{2} = -2", "explanation": "The line falls $4$ over a run of $2$, giving a negative gradient.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the general form.", "workingLatex": "y = -2x + 4", "explanation": "Combining the gradient and intercept gives the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Check the second point.", "workingLatex": "-2(2) + 4 = 0 \\checkmark", "explanation": "At $x = 2$ the equation gives $y = 0$, matching the graph.", "diagram": null },
        { "stepNumber": 5, "description": "State the equation.", "workingLatex": "y = -2x + 4", "explanation": "This is the equation of the line shown.", "diagram": null }
      ],
      "finalAnswer": "$y = -2x + 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "text",
    "tags": ["straight-line graphs", "point on a line", "fractional gradient"],
    "questionText": "Does the point $(4, 5)$ lie on the line $y = \\tfrac{1}{2}x + 3$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the test.", "workingLatex": "\\text{substitute the point into the equation}", "explanation": "The point is on the line only if its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 4$.", "workingLatex": "\\dfrac{1}{2}(4) + 3", "explanation": "We find the line's $y$-value at $x = 4$.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the $x$-term.", "workingLatex": "\\dfrac{1}{2}(4) = 2", "explanation": "Half of $4$ is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the constant.", "workingLatex": "2 + 3 = 5", "explanation": "The line gives $y = 5$ at $x = 4$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare.", "workingLatex": "5 = 5", "explanation": "The predicted $y$ matches the point's $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\text{yes, on the line}", "explanation": "Because the coordinates satisfy the equation, the point lies on the line.", "diagram": null }
      ],
      "finalAnswer": "Yes, since $\\tfrac{1}{2}(4)+3 = 5$."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "intercepts", "forming an equation"],
    "questionText": "A straight line crosses the $x$-axis at $(2, 0)$ and the $y$-axis at $(0, -4)$. Find its equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the $y$-intercept.", "workingLatex": "c = -4", "explanation": "The crossing of the $y$-axis is at $(0,-4)$, so the intercept is $-4$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient from the two crossings.", "workingLatex": "m = \\dfrac{0 - (-4)}{2 - 0} = \\dfrac{4}{2} = 2", "explanation": "Using the two intercept points, the rise is $4$ over a run of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the general form.", "workingLatex": "y = 2x - 4", "explanation": "Combining the gradient and intercept gives the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Check the $x$-intercept.", "workingLatex": "0 = 2(2) - 4 \\checkmark", "explanation": "At $x = 2$ the equation gives $y = 0$, matching the given crossing.", "diagram": null },
        { "stepNumber": 5, "description": "State the equation.", "workingLatex": "y = 2x - 4", "explanation": "This is the equation of the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["straight-line graphs", "linear", "recognising a line"],
    "questionText": "Which of these is the equation of a straight line: $y = 2x + 1$, $y = x^2$, or $y = \\tfrac{3}{x}$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the form of a straight line.", "workingLatex": "y = mx + c", "explanation": "A straight-line equation has $x$ only to the power $1$, with no squares, roots or $x$ in a denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Test $y = x^2$.", "workingLatex": "x^2 \\text{ is a square}", "explanation": "The power $2$ makes this a curve (a parabola), not a straight line.", "diagram": null },
        { "stepNumber": 3, "description": "Test $y = \\tfrac{3}{x}$.", "workingLatex": "\\tfrac{3}{x} \\text{ has } x \\text{ underneath}", "explanation": "Dividing by $x$ gives a reciprocal curve, not a straight line.", "diagram": null },
        { "stepNumber": 4, "description": "Test $y = 2x + 1$.", "workingLatex": "y = 2x + 1 \\ \\leftrightarrow\\ y = mx + c", "explanation": "This fits the straight-line form exactly, with $m = 2$ and $c = 1$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = 2x + 1", "explanation": "Only $y = 2x + 1$ is a straight line.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 1$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "through the origin"],
    "questionText": "Find the equation of the straight line passing through $(0, 0)$ and $(3, 12)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the line goes through the origin.", "workingLatex": "(0,0) \\Rightarrow c = 0", "explanation": "Passing through the origin means the $y$-intercept is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{12 - 0}{3 - 0} = 4", "explanation": "The rise is $12$ over a run of $3$, giving a gradient of $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the general form.", "workingLatex": "y = 4x + 0", "explanation": "With $m = 4$ and $c = 0$ the equation is quickly built.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "y = 4x", "explanation": "The zero constant is dropped.", "diagram": null },
        { "stepNumber": 5, "description": "Check the second point.", "workingLatex": "4(3) = 12 \\checkmark", "explanation": "At $x = 3$ the equation gives $y = 12$, matching the point.", "diagram": null }
      ],
      "finalAnswer": "$y = 4x$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["straight-line graphs", "point on a line", "unknown", "forming an equation"],
    "questionText": "The point $(k, 2k)$ lies on the line $y = 3x - 4$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the fact that the point is on the line.", "workingLatex": "y = 3x - 4", "explanation": "The coordinates $x = k$ and $y = 2k$ must satisfy the equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the coordinates.", "workingLatex": "2k = 3k - 4", "explanation": "We replace $y$ with $2k$ and $x$ with $k$.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $k$ terms.", "workingLatex": "2k - 3k = -4", "explanation": "Subtracting $3k$ from both sides brings the unknowns together.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "-k = -4", "explanation": "Combining $2k - 3k$ gives $-k$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $k$.", "workingLatex": "k = 4", "explanation": "Multiplying both sides by $-1$ gives $k = 4$.", "diagram": null },
        { "stepNumber": 6, "description": "Check the point.", "workingLatex": "(4, 8): 3(4) - 4 = 8 \\checkmark", "explanation": "The point $(4, 8)$ satisfies the line, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$k = 4$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["straight-line graphs", "rearranging", "make y the subject"],
    "questionText": "Rearrange $\\dfrac{y}{2} = x + 1$ into the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "We need $y$ on its own, so we clear the fraction first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $2$.", "workingLatex": "y = 2(x + 1)", "explanation": "Multiplying removes the denominator under $y$.", "diagram": null },
        { "stepNumber": 3, "description": "Expand the bracket.", "workingLatex": "y = 2x + 2", "explanation": "Multiplying $2$ by each term inside the bracket gives $2x + 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the values as a check.", "workingLatex": "m = 2,\\ c = 2", "explanation": "The gradient is $2$ and the intercept is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the equation.", "workingLatex": "y = 2x + 2", "explanation": "This is the required form.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["straight-line graphs", "gradient", "decreasing"],
    "questionText": "State whether the line $y = -5x + 1$ slopes upwards or downwards from left to right.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the gradient.", "workingLatex": "m = -5", "explanation": "The coefficient of $x$ tells us the direction of the slope.", "diagram": null },
        { "stepNumber": 2, "description": "Check the sign.", "workingLatex": "m = -5 < 0", "explanation": "A negative gradient means the line falls as $x$ increases.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the sign.", "workingLatex": "\\text{falls left to right}", "explanation": "Reading from left to right, the line goes down.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "\\text{downwards}", "explanation": "So the line slopes downwards from left to right.", "diagram": null }
      ],
      "finalAnswer": "Downwards (negative gradient)"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "y=mx+c", "gradient", "intercept"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = -x/3 + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "The coefficient of $x$ is the gradient; the constant is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the $x$-term as a coefficient.", "workingLatex": "y = -\\dfrac{1}{3}x + 2", "explanation": "Writing $-x/3$ as $-\\tfrac{1}{3}x$ makes the coefficient of $x$ clear.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = -\\dfrac{1}{3}", "explanation": "The number multiplying $x$ is $-\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the $y$-intercept.", "workingLatex": "c = 2", "explanation": "The constant term is $2$, so the line crosses the $y$-axis at $(0,2)$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } -\\tfrac{1}{3},\\ y\\text{-intercept } 2", "explanation": "A shallow negative gradient means the line falls slowly.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-\\tfrac{1}{3}$, $y$-intercept $2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "unknown coordinate"],
    "questionText": "The line through $A(1, 5)$ and $B(4, k)$ has gradient $2$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the gradient formula.", "workingLatex": "m = \\dfrac{k - 5}{4 - 1}", "explanation": "The gradient between the two points must equal the given value of $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the denominator.", "workingLatex": "\\dfrac{k - 5}{3} = 2", "explanation": "The run is $4 - 1 = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply both sides by $3$.", "workingLatex": "k - 5 = 6", "explanation": "Clearing the fraction removes the denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $k$.", "workingLatex": "k = 11", "explanation": "Adding $5$ to both sides gives $k$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the gradient.", "workingLatex": "\\dfrac{11 - 5}{4 - 1} = \\dfrac{6}{3} = 2 \\checkmark", "explanation": "The gradient comes out as $2$, confirming the value of $k$.", "diagram": null }
      ],
      "finalAnswer": "$k = 11$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["straight-line graphs", "two points", "forming an equation", "negative coordinates"],
    "questionText": "Find the equation of the straight line passing through $A(-2, -1)$ and $B(2, 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{7 - (-1)}{2 - (-2)} = \\dfrac{8}{4} = 2", "explanation": "The rise is $8$ over a run of $4$, giving a gradient of $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = 2x + c", "explanation": "We insert the gradient and find the intercept with a point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute point $B(2,7)$.", "workingLatex": "7 = 2(2) + c", "explanation": "The point lies on the line, so it satisfies the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "7 = 4 + c \\Rightarrow c = 3", "explanation": "Subtracting $4$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 2x + 3", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 6, "description": "Check with the other point.", "workingLatex": "2(-2) + 3 = -1 \\checkmark", "explanation": "Substituting $A(-2,-1)$ gives a true statement, confirming the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 3$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "expression",
    "tags": ["straight-line graphs", "x-intercept", "forming an equation"],
    "questionText": "A straight line has gradient $2$ and crosses the $x$-axis at $(3, 0)$. Find its equation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = 2x + c", "explanation": "We know the gradient, so only the intercept $c$ remains to be found.", "diagram": null },
        { "stepNumber": 2, "description": "Use the $x$-intercept as a point.", "workingLatex": "(3, 0) \\text{ is on the line}", "explanation": "The $x$-intercept is a genuine point on the line, so its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "0 = 2(3) + c", "explanation": "Putting $x = 3$ and $y = 0$ gives an equation for $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "0 = 6 + c \\Rightarrow c = -6", "explanation": "Subtracting $6$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 2x - 6", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 6, "description": "Check the $x$-intercept.", "workingLatex": "0 = 2(3) - 6 \\checkmark", "explanation": "At $x = 3$ the line gives $y = 0$, matching the given crossing.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 6$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "coordinate",
    "tags": ["straight-line graphs", "x-intercept", "solving"],
    "questionText": "Find the coordinates of the point where the line $y = 4x - 8$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the condition for the $x$-axis.", "workingLatex": "y = 0", "explanation": "A graph crosses the $x$-axis where its height is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Set $y = 0$.", "workingLatex": "0 = 4x - 8", "explanation": "We substitute $y = 0$ into the equation and solve for $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $8$ to both sides.", "workingLatex": "8 = 4x", "explanation": "This moves the constant to the other side.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "x = 2", "explanation": "Dividing both sides by $4$ gives the $x$-value.", "diagram": null },
        { "stepNumber": 5, "description": "Write the coordinates.", "workingLatex": "(2, 0)", "explanation": "The crossing point has $y = 0$, so it is $(2,0)$.", "diagram": null },
        { "stepNumber": 6, "description": "Check.", "workingLatex": "4(2) - 8 = 0 \\checkmark", "explanation": "At $x = 2$ the line gives $y = 0$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$(2, 0)$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["straight-line graphs", "substitution", "decimal"],
    "questionText": "A line has equation $y = 2x + 1$. Find the value of $y$ when $x = 2.5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the equation.", "workingLatex": "y = 2x + 1", "explanation": "We substitute the decimal $x$-value in the usual way.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 2.5$.", "workingLatex": "y = 2(2.5) + 1", "explanation": "Working with decimals follows the same rules as whole numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Do the multiplication.", "workingLatex": "2 \\times 2.5 = 5", "explanation": "Doubling $2.5$ gives $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Do the addition.", "workingLatex": "y = 5 + 1 = 6", "explanation": "Adding the constant gives the final value.", "diagram": null },
        { "stepNumber": 5, "description": "State the result.", "workingLatex": "y = 6", "explanation": "So the point $(2.5, 6)$ lies on the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 6$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["straight-line graphs", "two points", "point on a line", "reasoning"],
    "questionText": "A straight line passes through $A(1, -4)$ and $B(4, 5)$. Show that the point $C(10, 23)$ also lies on this line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of $AB$.", "workingLatex": "m = \\dfrac{5 - (-4)}{4 - 1} = \\dfrac{9}{3} = 3", "explanation": "We first find the equation of the line through the two known points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "-4 = 3(1) + c \\Rightarrow c = -7", "explanation": "Substituting $A(1,-4)$ gives the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 3x - 7", "explanation": "This is the line through $A$ and $B$.", "diagram": null },
        { "stepNumber": 4, "description": "Test point $C(10,23)$.", "workingLatex": "3(10) - 7", "explanation": "We substitute $x = 10$ to see what $y$ the line predicts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "30 - 7 = 23", "explanation": "The line gives $y = 23$ at $x = 10$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare and conclude.", "workingLatex": "23 = 23 \\Rightarrow C \\text{ on the line}", "explanation": "The predicted $y$ matches $C$'s $y$-value, so $C$ lies on the line.", "diagram": null }
      ],
      "finalAnswer": "The line is $y = 3x - 7$, and $3(10) - 7 = 23$, so $C$ lies on it."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "expression",
    "tags": ["straight-line graphs", "rearranging", "make y the subject"],
    "questionText": "Rearrange $5x - y + 2 = 0$ into the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "We isolate $y$ to reach the form $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $y$ to both sides.", "workingLatex": "5x + 2 = y", "explanation": "Moving $y$ to the right makes it positive and clears it from the left.", "diagram": null },
        { "stepNumber": 3, "description": "Write $y$ on the left.", "workingLatex": "y = 5x + 2", "explanation": "Swapping sides gives the standard form.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the values as a check.", "workingLatex": "m = 5,\\ c = 2", "explanation": "The gradient is $5$ and the intercept is $2$.", "diagram": null }
      ],
      "finalAnswer": "$y = 5x + 2$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["straight-line graphs", "two points", "forming an equation", "prediction"],
    "questionText": "A straight line $L$ passes through $(0, 3)$ and $(4, 11)$. Find the value of $y$ on $L$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = 3", "explanation": "The point $(0,3)$ is on the $y$-axis, so the intercept is $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{11 - 3}{4 - 0} = \\dfrac{8}{4} = 2", "explanation": "The rise is $8$ over a run of $4$, giving a gradient of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 2x + 3", "explanation": "Combining the gradient and intercept gives the line $L$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 10$.", "workingLatex": "y = 2(10) + 3", "explanation": "We use the equation to predict the $y$-value at $x = 10$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "y = 20 + 3 = 23", "explanation": "The multiplication then addition give the value.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "y = 23", "explanation": "So when $x = 10$, the line $L$ gives $y = 23$.", "diagram": null }
      ],
      "finalAnswer": "$y = 23$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["straight-line graphs", "point on a line", "two points"],
    "questionText": "A line passes through $(1, -1)$ and $(2, 1)$. Does the point $(3, 3)$ lie on this line?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{1 - (-1)}{2 - 1} = \\dfrac{2}{1} = 2", "explanation": "We first find the equation of the line through the two given points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "-1 = 2(1) + c \\Rightarrow c = -3", "explanation": "Substituting $(1,-1)$ gives the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 2x - 3", "explanation": "This is the line through the two points.", "diagram": null },
        { "stepNumber": 4, "description": "Test $(3, 3)$.", "workingLatex": "2(3) - 3 = 3", "explanation": "We substitute $x = 3$ to see if the line gives $y = 3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare.", "workingLatex": "3 = 3", "explanation": "The line gives exactly $3$, matching the point's $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\text{yes, on the line}", "explanation": "Because the coordinates satisfy $y = 2x - 3$, the point lies on the line.", "diagram": null }
      ],
      "finalAnswer": "Yes; the line is $y = 2x - 3$ and $2(3)-3 = 3$."
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["straight-line graphs", "gradient", "horizontal line", "two points"],
    "questionText": "Find the gradient of the line passing through $(5, 3)$ and $(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "We compare the change in $y$ with the change in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "3 - 3 = 0", "explanation": "Both points are at the same height, so there is no rise.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "2 - 5 = -3", "explanation": "The run is $-3$, but its size does not matter once the rise is zero.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the changes.", "workingLatex": "m = \\dfrac{0}{-3} = 0", "explanation": "Zero divided by any non-zero number is zero.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the result.", "workingLatex": "\\text{horizontal line}", "explanation": "A gradient of $0$ means the line is flat, which fits two points at the same height.", "diagram": null },
        { "stepNumber": 6, "description": "State the gradient.", "workingLatex": "m = 0", "explanation": "So the gradient of the line is $0$.", "diagram": null }
      ],
      "finalAnswer": "$m = 0$"
    }
  },
  {
    "id": "gcse.algebra.straight-line-graphs.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Straight-line graphs",
    "subtopicId": "gcse.algebra.straight-line-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["straight-line graphs", "two points", "forming an equation", "midpoint", "multi-step"],
    "questionText": "A straight line passes through $A(-1, -3)$ and $B(3, 5)$. Find the equation of the line, the midpoint $M$ of $AB$, and show that $M$ lies on the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{5 - (-3)}{3 - (-1)} = \\dfrac{8}{4} = 2", "explanation": "The rise is $8$ over a run of $4$, giving a gradient of $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "5 = 2(3) + c \\Rightarrow c = -1", "explanation": "Substituting $B(3,5)$ gives the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 2x - 1", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 4, "description": "Find the midpoint of $AB$.", "workingLatex": "M = \\left(\\dfrac{-1+3}{2}, \\dfrac{-3+5}{2}\\right) = (1, 1)", "explanation": "The midpoint averages the coordinates of $A$ and $B$.", "diagram": null },
        { "stepNumber": 5, "description": "Test $M$ on the line.", "workingLatex": "2(1) - 1 = 1", "explanation": "We substitute $x = 1$ into the equation to find the predicted $y$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare.", "workingLatex": "1 = 1", "explanation": "The line gives $y = 1$ at $x = 1$, matching $M$.", "diagram": null },
        { "stepNumber": 7, "description": "Conclude.", "workingLatex": "M \\text{ lies on } y = 2x - 1", "explanation": "The midpoint of a chord always lies on the same straight line, and the check confirms it here.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 1$; $M = (1, 1)$, and $2(1) - 1 = 1$ so $M$ lies on the line."
    }
  }
];
