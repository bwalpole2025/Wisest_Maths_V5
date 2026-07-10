import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.gradient-intercept.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "y=mx+c", "reading coefficients"],
    "questionText": "The cost $£C$ of hiring a bike for $h$ hours is given by $C = 4h + 2$. Write down the gradient and the $y$-intercept of this line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the general form.", "workingLatex": "y = mx + c", "explanation": "Here $C$ plays the role of $y$ and $h$ plays the role of $x$, so we compare the equation with $y = mx + c$.", "diagram": null },
        { "stepNumber": 2, "description": "Match the equation.", "workingLatex": "C = 4h + 2 \\ \\leftrightarrow\\ y = mx + c", "explanation": "The number multiplying $h$ is the gradient and the number on its own is the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = 4", "explanation": "The coefficient of $h$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the intercept.", "workingLatex": "c = 2", "explanation": "The constant term is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } 4,\\ \\text{intercept } 2", "explanation": "These describe how the cost changes and its starting value.", "diagram": null },
        { "stepNumber": 6, "description": "Check with $h = 0$.", "workingLatex": "C = 4(0) + 2 = 2", "explanation": "At $h = 0$ the cost is $2$, confirming the intercept.", "diagram": null }
      ],
      "finalAnswer": "Gradient $4$, $y$-intercept $2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "rate of change"],
    "questionText": "The cost $£C$ of hiring a bike for $h$ hours is $C = 4h + 2$. Explain what the gradient $4$ represents in this context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a gradient measures.", "workingLatex": "m = \\dfrac{\\text{change in } C}{\\text{change in } h}", "explanation": "The gradient is the change in the output ($C$) for each unit increase in the input ($h$).", "diagram": null },
        { "stepNumber": 2, "description": "Apply it to this context.", "workingLatex": "\\Delta h = 1 \\Rightarrow \\Delta C = 4", "explanation": "Each extra hour increases $h$ by $1$, and the equation adds another $4$ to the cost.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the units.", "workingLatex": "£4 \\text{ per hour}", "explanation": "Since $C$ is in pounds and $h$ is in hours, the gradient is measured in pounds per hour.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{hourly hire rate} = £4", "explanation": "So the gradient is the cost of each additional hour of hire.", "diagram": null }
      ],
      "finalAnswer": "The gradient $4$ is the cost per hour: it costs an extra $£4$ for each hour hired."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "fixed charge"],
    "questionText": "The cost $£C$ of hiring a bike for $h$ hours is $C = 4h + 2$. Explain what the $y$-intercept $2$ represents in this context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the intercept means.", "workingLatex": "h = 0 \\Rightarrow C = c", "explanation": "The intercept is the value of the output when the input is zero.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $h = 0$.", "workingLatex": "C = 4(0) + 2 = 2", "explanation": "With no hours of hire, the cost is still $£2$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret this value.", "workingLatex": "£2 \\text{ before any time}", "explanation": "A charge that applies even for zero hours is a fixed, one-off fee.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{fixed charge} = £2", "explanation": "So the intercept is the fixed booking or deposit charge added regardless of time.", "diagram": null }
      ],
      "finalAnswer": "The intercept $2$ is the fixed charge of $£2$ that applies before any hours are counted."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "gradient"],
    "questionText": "The straight line shown passes through $(0, 1)$ and $(3, 7)$. Find its gradient.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 5, "yMin": -1, "yMax": 9,
      "curves": [{ "points": [{ "x": -0.5, "y": 0 }, { "x": 4, "y": 9 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 1, "label": "(0,1)", "color": "ink" },
        { "x": 3, "y": 7, "label": "(3,7)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,1) and (3,7)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}}", "explanation": "We use two clear points on the line and compare the vertical change with the horizontal change.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rise.", "workingLatex": "7 - 1 = 6", "explanation": "The line goes up $6$ units between the two marked points.", "diagram": null },
        { "stepNumber": 3, "description": "Find the run.", "workingLatex": "3 - 0 = 3", "explanation": "The line moves $3$ units across between them.", "diagram": null },
        { "stepNumber": 4, "description": "Divide.", "workingLatex": "m = \\dfrac{6}{3} = 2", "explanation": "Rise over run gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = 2", "explanation": "So the line has gradient $2$.", "diagram": null }
      ],
      "finalAnswer": "$m = 2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "comparing gradients", "steepness"],
    "questionText": "Two lines have equations $y = 2x + 1$ and $y = 5x - 3$. Which line is steeper?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what controls steepness.", "workingLatex": "\\text{steepness} \\leftrightarrow |m|", "explanation": "The larger the size of the gradient, the steeper the line; the intercept has no effect on steepness.", "diagram": null },
        { "stepNumber": 2, "description": "Read the first gradient.", "workingLatex": "m_1 = 2", "explanation": "The first line rises $2$ for every $1$ across.", "diagram": null },
        { "stepNumber": 3, "description": "Read the second gradient.", "workingLatex": "m_2 = 5", "explanation": "The second line rises $5$ for every $1$ across.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the sizes.", "workingLatex": "5 > 2", "explanation": "A gradient of $5$ is larger than a gradient of $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = 5x - 3 \\text{ is steeper}", "explanation": "So the line $y = 5x - 3$ rises more sharply and is the steeper of the two.", "diagram": null }
      ],
      "finalAnswer": "$y = 5x - 3$ (gradient $5 > 2$)"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "intercept"],
    "questionText": "A straight line crosses the $y$-axis at $(0, -3)$. Write down its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the $y$-intercept is.", "workingLatex": "\\text{where the line meets the } y\\text{-axis}", "explanation": "The $y$-intercept is the $y$-value at the point where the line crosses the $y$-axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read the crossing point.", "workingLatex": "(0, -3)", "explanation": "The line meets the $y$-axis at height $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Take the $y$-coordinate.", "workingLatex": "c = -3", "explanation": "The intercept is just the $y$-value there.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "y\\text{-intercept} = -3", "explanation": "So the $y$-intercept is $-3$.", "diagram": null }
      ],
      "finalAnswer": "$-3$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "rate of change"],
    "questionText": "A phone plan costs $£C$ for $m$ minutes of calls, where $C = 0.1m + 15$. Interpret both the gradient and the $y$-intercept in this context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match the equation to $y = mx + c$.", "workingLatex": "C = 0.1m + 15", "explanation": "The coefficient of $m$ is the gradient; the constant is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = 0.1", "explanation": "Each extra minute adds $£0.1$ to the bill.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the gradient.", "workingLatex": "£0.10 \\text{ per minute}", "explanation": "So calls are charged at $10$ pence per minute — the cost per unit of calling.", "diagram": null },
        { "stepNumber": 4, "description": "Read the intercept.", "workingLatex": "c = 15", "explanation": "When $m = 0$, the cost is still $£15$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the intercept.", "workingLatex": "£15 \\text{ fixed}", "explanation": "A charge that applies with zero minutes is the fixed monthly line rental.", "diagram": null },
        { "stepNumber": 6, "description": "State both meanings.", "workingLatex": "\\text{rate } £0.10/\\text{min},\\ \\text{fixed } £15", "explanation": "Together these describe a plan with a $£15$ standing charge plus $10$p per minute.", "diagram": null }
      ],
      "finalAnswer": "Gradient: $£0.10$ per minute of calls. Intercept: a fixed $£15$ monthly charge."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "substitution"],
    "questionText": "A taxi fare $£F$ for a journey of $d$ miles is $F = 1.5d + 3$. Find the fare for a $10$-mile journey.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the parts of the formula.", "workingLatex": "F = 1.5d + 3", "explanation": "The $1.5d$ is the mileage cost and the $3$ is the fixed hire charge.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $d = 10$.", "workingLatex": "F = 1.5(10) + 3", "explanation": "We replace $d$ with the journey length of $10$ miles.", "diagram": null },
        { "stepNumber": 3, "description": "Do the multiplication.", "workingLatex": "1.5 \\times 10 = 15", "explanation": "The mileage cost for $10$ miles is $£15$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the fixed charge.", "workingLatex": "F = 15 + 3 = 18", "explanation": "Adding the $£3$ fixed charge gives the total fare.", "diagram": null },
        { "stepNumber": 5, "description": "State the fare.", "workingLatex": "F = £18", "explanation": "So a $10$-mile journey costs $£18$.", "diagram": null }
      ],
      "finalAnswer": "$£18$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "negative gradient", "real context"],
    "questionText": "A tank holds $V$ litres of water after $t$ minutes, where $V = 200 - 5t$. Interpret the gradient and the $y$-intercept in this context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match to $y = mx + c$.", "workingLatex": "V = -5t + 200", "explanation": "Reordering shows the gradient is $-5$ and the intercept is $200$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the intercept.", "workingLatex": "t = 0 \\Rightarrow V = 200", "explanation": "At the start, before any time passes, the tank holds $200$ litres.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the intercept.", "workingLatex": "\\text{initial volume} = 200\\,\\text{L}", "explanation": "So the intercept is the amount of water in the tank at the start.", "diagram": null },
        { "stepNumber": 4, "description": "Read the gradient.", "workingLatex": "m = -5", "explanation": "Each extra minute changes the volume by $-5$ litres.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the gradient.", "workingLatex": "\\text{draining } 5\\,\\text{L per minute}", "explanation": "The negative sign shows the water level is falling, at a rate of $5$ litres each minute.", "diagram": null }
      ],
      "finalAnswer": "Intercept: the tank starts with $200$ litres. Gradient: the water drains at $5$ litres per minute (falling)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "rearranging", "gradient", "intercept"],
    "questionText": "The line $2y = 6x + 8$ can be written as $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the goal.", "workingLatex": "\\text{make } y \\text{ the subject}", "explanation": "The equation has $2y$, so we divide to reach the standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Divide every term by $2$.", "workingLatex": "y = \\dfrac{6x}{2} + \\dfrac{8}{2}", "explanation": "Dividing each term by $2$ makes $y$ the subject.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = 3x + 4", "explanation": "The $x$-term becomes $3x$ and the constant becomes $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the gradient.", "workingLatex": "m = 3", "explanation": "The coefficient of $x$ is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the intercept.", "workingLatex": "c = 4", "explanation": "The constant term is $4$.", "diagram": null },
        { "stepNumber": 6, "description": "State both values.", "workingLatex": "\\text{gradient } 3,\\ \\text{intercept } 4", "explanation": "These are read straight from the rearranged equation.", "diagram": null }
      ],
      "finalAnswer": "Gradient $3$, $y$-intercept $4$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "comparing intercepts"],
    "questionText": "Two lines have equations $y = 3x + 2$ and $y = 3x + 7$. Which line has the greater $y$-intercept, and what does this tell you about the two lines?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the two intercepts.", "workingLatex": "c_1 = 2,\\ c_2 = 7", "explanation": "The constant term of each equation is its $y$-intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Compare them.", "workingLatex": "7 > 2", "explanation": "The second line crosses the $y$-axis higher up.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the gradients.", "workingLatex": "m_1 = m_2 = 3", "explanation": "Both lines have the same gradient, so they have the same steepness and direction.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret together.", "workingLatex": "\\text{same slope, shifted up}", "explanation": "Equal gradients but different intercepts means the lines are parallel, with the second sitting $5$ units above the first.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = 3x + 7 \\text{ higher}", "explanation": "So $y = 3x + 7$ has the greater intercept, and the two lines are parallel.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x + 7$ has the greater intercept; the lines are parallel (equal gradients)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "finding the gradient", "intercept and a point"],
    "questionText": "A straight line has $y$-intercept $3$ and passes through the point $(4, 11)$. Find its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = mx + 3", "explanation": "We already know the intercept, so only the gradient $m$ is unknown.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the point.", "workingLatex": "11 = m(4) + 3", "explanation": "The point $(4,11)$ lies on the line, so its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $3$ from both sides.", "workingLatex": "8 = 4m", "explanation": "Removing the intercept isolates the term in $m$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "m = 2", "explanation": "Dividing both sides by $4$ gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "Check the point.", "workingLatex": "2(4) + 3 = 11 \\checkmark", "explanation": "At $x = 4$ the line gives $y = 11$, confirming the gradient.", "diagram": null }
      ],
      "finalAnswer": "$m = 2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "coordinate",
    "tags": ["gradient and intercepts", "sketching", "gradient", "intercept"],
    "questionText": "A line has equation $y = -2x + 7$. Write down the coordinates of its $y$-intercept and the coordinates of one further point found by using the gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = 7 \\Rightarrow (0, 7)", "explanation": "The constant term gives the $y$-axis crossing at $(0,7)$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = -2", "explanation": "A gradient of $-2$ means going $1$ unit right, we go $2$ units down.", "diagram": null },
        { "stepNumber": 3, "description": "Step from the intercept.", "workingLatex": "(0,7) \\to (0+1,\\ 7-2)", "explanation": "Starting at the intercept we apply the gradient once: right $1$, down $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the new point.", "workingLatex": "(1, 5)", "explanation": "This gives a second point on the line.", "diagram": null },
        { "stepNumber": 5, "description": "Check with the equation.", "workingLatex": "-2(1) + 7 = 5 \\checkmark", "explanation": "Substituting $x = 1$ gives $y = 5$, confirming the point.", "diagram": null },
        { "stepNumber": 6, "description": "State the points.", "workingLatex": "(0,7)\\ \\text{and}\\ (1,5)", "explanation": "These two points are enough to sketch the line.", "diagram": null }
      ],
      "finalAnswer": "Intercept $(0, 7)$; a further point $(1, 5)$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["gradient and intercepts", "table of values", "rate of change"],
    "questionText": "A plant's height $h$ cm after $w$ weeks is recorded: at $w = 0$, $h = 4$; at $w = 1$, $h = 7$; at $w = 2$, $h = 10$. Assuming the growth is linear, find the gradient and $y$-intercept, and state what each represents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the height changes.", "workingLatex": "4 \\to 7 \\to 10", "explanation": "Each week the recorded height rises by the same amount, which is what makes the growth linear.", "diagram": null },
        { "stepNumber": 2, "description": "Find the weekly increase.", "workingLatex": "7 - 4 = 3,\\ 10 - 7 = 3", "explanation": "The constant increase of $3$ cm per week is the gradient.", "diagram": null },
        { "stepNumber": 3, "description": "State the gradient.", "workingLatex": "m = 3", "explanation": "The gradient is $3$ cm per week.", "diagram": null },
        { "stepNumber": 4, "description": "Read the intercept.", "workingLatex": "w = 0 \\Rightarrow h = 4", "explanation": "At week $0$ the height is $4$ cm, which is the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "State the intercept.", "workingLatex": "c = 4", "explanation": "The intercept is $4$ cm.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret both.", "workingLatex": "h = 3w + 4", "explanation": "The plant started at $4$ cm (intercept) and grows $3$ cm each week (gradient).", "diagram": null }
      ],
      "finalAnswer": "Gradient $3$ (grows $3$ cm/week); intercept $4$ (starting height $4$ cm), so $h = 3w + 4$."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "prediction", "multi-step"],
    "questionText": "A plumber charges using $C = 40h + 60$, where $£C$ is the total cost for $h$ hours of work. Find the cost of a $3$-hour job, and state the meaning of the $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts of the formula.", "workingLatex": "C = 40h + 60", "explanation": "The $40h$ is the labour cost and the $60$ is a fixed charge.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $h = 3$.", "workingLatex": "C = 40(3) + 60", "explanation": "We replace $h$ with the $3$ hours worked.", "diagram": null },
        { "stepNumber": 3, "description": "Do the multiplication.", "workingLatex": "40 \\times 3 = 120", "explanation": "The labour for $3$ hours costs $£120$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the fixed charge.", "workingLatex": "C = 120 + 60 = 180", "explanation": "Adding the $£60$ fixed charge gives the total.", "diagram": null },
        { "stepNumber": 5, "description": "State the cost.", "workingLatex": "C = £180", "explanation": "So a $3$-hour job costs $£180$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret the $60$.", "workingLatex": "h = 0 \\Rightarrow C = 60", "explanation": "The $60$ is charged even for zero hours, so it is the fixed call-out fee.", "diagram": null }
      ],
      "finalAnswer": "$£180$; the $60$ is the fixed call-out charge (cost when $h = 0$)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["gradient and intercepts", "reading a graph", "forming an equation"],
    "questionText": "The straight line shown crosses the $y$-axis at $(0, -1)$ and passes through $(2, 5)$. Find its equation.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -2, "xMax": 4, "yMin": -5, "yMax": 8,
      "curves": [{ "points": [{ "x": -1, "y": -4 }, { "x": 3, "y": 8 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": -1, "label": "(0,-1)", "color": "ink" },
        { "x": 2, "y": 5, "label": "(2,5)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,-1) and (2,5)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = -1", "explanation": "The line crosses the $y$-axis at $(0,-1)$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient from the two points.", "workingLatex": "m = \\dfrac{5 - (-1)}{2 - 0} = \\dfrac{6}{2} = 3", "explanation": "The rise is $6$ over a run of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the general form.", "workingLatex": "y = 3x - 1", "explanation": "Combining the gradient and intercept gives the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Check the second point.", "workingLatex": "3(2) - 1 = 5 \\checkmark", "explanation": "At $x = 2$ the equation gives $y = 5$, matching the graph.", "diagram": null },
        { "stepNumber": 5, "description": "State the equation.", "workingLatex": "y = 3x - 1", "explanation": "This is the equation of the line shown.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x - 1$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "scaled axes", "gradient"],
    "questionText": "On a graph the $y$-axis is scaled so each square is $2$ units and the $x$-axis so each square is $1$ unit. A line rises $3$ squares vertically for every $2$ squares across. Find the gradient of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the vertical squares to units.", "workingLatex": "3 \\text{ squares} \\times 2 = 6 \\text{ units}", "explanation": "Because each vertical square is worth $2$ units, we must scale up the rise; reading squares alone would give the wrong gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the horizontal squares to units.", "workingLatex": "2 \\text{ squares} \\times 1 = 2 \\text{ units}", "explanation": "Each horizontal square is worth $1$ unit, so the run is $2$ units.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}} = \\dfrac{6}{2}", "explanation": "We use the true units, not the number of squares.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "m = 3", "explanation": "Dividing gives a gradient of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the common error.", "workingLatex": "\\tfrac{3}{2} \\text{ would be wrong}", "explanation": "Counting squares without using the scale would wrongly give $\\tfrac{3}{2}$, so reading the axis scale matters.", "diagram": null }
      ],
      "finalAnswer": "$m = 3$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "gradient meaning"],
    "questionText": "A car's distance $D$ km from home after $t$ hours is $D = 60t + 20$. State the meaning of the gradient $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a gradient measures.", "workingLatex": "m = \\dfrac{\\Delta D}{\\Delta t}", "explanation": "The gradient is the change in distance per unit of time.", "diagram": null },
        { "stepNumber": 2, "description": "Apply to this context.", "workingLatex": "\\Delta t = 1 \\Rightarrow \\Delta D = 60", "explanation": "Each extra hour adds $60$ km to the distance from home.", "diagram": null },
        { "stepNumber": 3, "description": "Attach the units.", "workingLatex": "60 \\text{ km per hour}", "explanation": "Distance in km over time in hours gives km/h — a speed.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{speed} = 60\\,\\text{km/h}", "explanation": "So the gradient is the car's steady speed of $60$ km/h.", "diagram": null }
      ],
      "finalAnswer": "The gradient $60$ is the car's speed: $60$ km per hour."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading coefficients", "constant first"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = 7 - 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = -2x + 7", "explanation": "Writing the $x$-term first, with its sign, avoids confusing the constant with the gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the gradient.", "workingLatex": "m = -2", "explanation": "The coefficient of $x$ is $-2$; the minus sign belongs to it.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the intercept.", "workingLatex": "c = 7", "explanation": "The constant term is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "State both values.", "workingLatex": "\\text{gradient } -2,\\ \\text{intercept } 7", "explanation": "A common slip is to read the gradient as $7$; reordering prevents this.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-2$, $y$-intercept $7$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "finding the intercept", "gradient and a point"],
    "questionText": "A straight line has gradient $3$ and passes through $(2, 10)$. Find its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = 3x + c", "explanation": "The gradient is known, so only the intercept $c$ is unknown.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the point.", "workingLatex": "10 = 3(2) + c", "explanation": "The point lies on the line, so its coordinates satisfy the equation.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "10 = 6 + c", "explanation": "Working out $3 \\times 2 = 6$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "c = 4", "explanation": "Subtracting $6$ from both sides gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "State the intercept.", "workingLatex": "y\\text{-intercept} = 4", "explanation": "So the line crosses the $y$-axis at $(0,4)$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "negative gradient", "real context"],
    "questionText": "The temperature $T\\,°\\text{C}$ of a cooling drink after $t$ minutes is $T = 20 - 2t$. Interpret the gradient in this context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reorder into $mx + c$ form.", "workingLatex": "T = -2t + 20", "explanation": "This shows the gradient is $-2$ and the intercept is $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = -2", "explanation": "Each extra minute changes the temperature by $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Attach units.", "workingLatex": "-2\\,°\\text{C per minute}", "explanation": "Temperature in $°\\text{C}$ over time in minutes gives degrees per minute.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the sign.", "workingLatex": "\\text{falling}", "explanation": "The negative sign shows the drink is cooling, not warming.", "diagram": null },
        { "stepNumber": 5, "description": "State the meaning.", "workingLatex": "\\text{cools } 2\\,°\\text{C/min}", "explanation": "So the gradient tells us the drink cools by $2\\,°\\text{C}$ every minute.", "diagram": null }
      ],
      "finalAnswer": "The gradient $-2$ means the drink cools at $2\\,°\\text{C}$ per minute."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["gradient and intercepts", "two points", "rate of change", "real context"],
    "questionText": "A candle's height is $18$ cm after $1$ hour and $12$ cm after $4$ hours. Assuming linear burning, find how many cm per hour the candle burns.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the two data points.", "workingLatex": "(1, 18)\\ \\text{and}\\ (4, 12)", "explanation": "We treat time as $x$ and height as $y$, then the burning rate is the gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in height.", "workingLatex": "12 - 18 = -6", "explanation": "The height drops by $6$ cm between the two readings.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in time.", "workingLatex": "4 - 1 = 3", "explanation": "This happens over $3$ hours.", "diagram": null },
        { "stepNumber": 4, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{-6}{3} = -2", "explanation": "The negative gradient shows the height is decreasing.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret the size.", "workingLatex": "|{-2}| = 2", "explanation": "The size of the gradient is the burning rate, ignoring the direction.", "diagram": null },
        { "stepNumber": 6, "description": "State the rate.", "workingLatex": "2 \\text{ cm per hour}", "explanation": "So the candle burns down $2$ cm each hour.", "diagram": null }
      ],
      "finalAnswer": "$2$ cm per hour"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "comparing gradients", "steepness", "negative gradient"],
    "questionText": "Two lines have equations $y = -4x + 1$ and $y = 3x$. Which line is steeper?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what controls steepness.", "workingLatex": "\\text{steepness} \\leftrightarrow |m|", "explanation": "Steepness depends on the size of the gradient, not its sign.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradients.", "workingLatex": "m_1 = -4,\\ m_2 = 3", "explanation": "One line slopes down and the other up, but we compare their sizes.", "diagram": null },
        { "stepNumber": 3, "description": "Take the sizes.", "workingLatex": "|-4| = 4,\\ |3| = 3", "explanation": "Ignoring the signs, the magnitudes are $4$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare.", "workingLatex": "4 > 3", "explanation": "The first line has the larger magnitude.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = -4x + 1 \\text{ is steeper}", "explanation": "So $y = -4x + 1$ is the steeper line, even though it slopes downwards.", "diagram": null }
      ],
      "finalAnswer": "$y = -4x + 1$ (magnitude $4 > 3$)"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "through the origin", "proportion", "interpretation"],
    "questionText": "The cost $£C$ of $n$ identical pens is $C = 0.8n$. Explain why there is no fixed charge, and state the cost per pen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match to $y = mx + c$.", "workingLatex": "C = 0.8n + 0", "explanation": "There is no constant written, so the intercept $c$ is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the zero intercept.", "workingLatex": "n = 0 \\Rightarrow C = 0", "explanation": "Buying zero pens costs nothing, so there is no fixed or standing charge.", "diagram": null },
        { "stepNumber": 3, "description": "Note the proportional relationship.", "workingLatex": "\\text{line through the origin}", "explanation": "A zero intercept means cost is directly proportional to the number of pens.", "diagram": null },
        { "stepNumber": 4, "description": "Read the gradient.", "workingLatex": "m = 0.8", "explanation": "The coefficient of $n$ is the cost per pen.", "diagram": null },
        { "stepNumber": 5, "description": "State both facts.", "workingLatex": "£0.80 \\text{ per pen, no fixed charge}", "explanation": "Each pen costs $80$p and there is no additional fixed cost.", "diagram": null }
      ],
      "finalAnswer": "No fixed charge (intercept $0$), and each pen costs $£0.80$ (the gradient)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "comparing plans", "solving"],
    "questionText": "Plan A costs $£C = 0.1m + 15$ and Plan B costs $£C = 0.25m$, where $m$ is the number of minutes. Find the number of minutes for which the two plans cost the same.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the two costs equal.", "workingLatex": "0.1m + 15 = 0.25m", "explanation": "The plans cost the same when their two expressions for $C$ are equal.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $0.1m$ from both sides.", "workingLatex": "15 = 0.15m", "explanation": "Gathering the $m$-terms on one side leaves a simple equation.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $0.15$.", "workingLatex": "m = \\dfrac{15}{0.15}", "explanation": "Dividing isolates $m$.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate.", "workingLatex": "m = 100", "explanation": "Since $0.15 \\times 100 = 15$, the two plans match at $100$ minutes.", "diagram": null },
        { "stepNumber": 5, "description": "Check both costs.", "workingLatex": "0.1(100)+15 = 25,\\ 0.25(100) = 25 \\checkmark", "explanation": "Both plans cost $£25$ at $100$ minutes, confirming the answer.", "diagram": null },
        { "stepNumber": 6, "description": "State the result.", "workingLatex": "m = 100 \\text{ minutes}", "explanation": "So at $100$ minutes the two plans cost exactly the same.", "diagram": null }
      ],
      "finalAnswer": "$100$ minutes (both cost $£25$)"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "negative gradient"],
    "questionText": "The straight line shown passes through $(0, 6)$ and $(3, 0)$. Find its gradient.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 5, "yMin": -3, "yMax": 8,
      "curves": [{ "points": [{ "x": -0.5, "y": 7 }, { "x": 4, "y": -2 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 6, "label": "(0,6)", "color": "ink" },
        { "x": 3, "y": 0, "label": "(3,0)", "color": "ink" }
      ],
      "alt": "A straight line falling through (0,6) and (3,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}}", "explanation": "We use the two marked points and compare the change in $y$ with the change in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "0 - 6 = -6", "explanation": "The line drops $6$ units, so the change in $y$ is negative.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "3 - 0 = 3", "explanation": "The line moves $3$ units across.", "diagram": null },
        { "stepNumber": 4, "description": "Divide.", "workingLatex": "m = \\dfrac{-6}{3} = -2", "explanation": "A falling line gives a negative gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = -2", "explanation": "So the line has gradient $-2$.", "diagram": null }
      ],
      "finalAnswer": "$m = -2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "rearranging", "fraction"],
    "questionText": "The line $x + 3y = 9$ is written as $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Subtract $x$ from both sides.", "workingLatex": "3y = 9 - x", "explanation": "This isolates the $y$-term on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Divide every term by $3$.", "workingLatex": "y = \\dfrac{9}{3} - \\dfrac{x}{3}", "explanation": "Dividing by the coefficient of $y$ makes $y$ the subject.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = 3 - \\dfrac{1}{3}x", "explanation": "The constant becomes $3$ and the $x$-term becomes $-\\tfrac{1}{3}x$.", "diagram": null },
        { "stepNumber": 4, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = -\\dfrac{1}{3}x + 3", "explanation": "Writing the $x$-term first shows the gradient clearly.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the values.", "workingLatex": "m = -\\dfrac{1}{3},\\ c = 3", "explanation": "The gradient is $-\\tfrac{1}{3}$ and the intercept is $3$.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-\\tfrac{1}{3}$, $y$-intercept $3$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["gradient and intercepts", "distance-time", "speed", "reading a graph"],
    "questionText": "On a distance–time graph a car's line passes through $(0, 0)$ and $(4, 240)$, where distance is in km and time in hours. Find the car's speed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the link on a distance–time graph.", "workingLatex": "\\text{gradient} = \\text{speed}", "explanation": "On a distance–time graph the gradient (distance change per time) is exactly the speed.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in distance.", "workingLatex": "240 - 0 = 240 \\text{ km}", "explanation": "The car travels $240$ km over the interval shown.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in time.", "workingLatex": "4 - 0 = 4 \\text{ hours}", "explanation": "This journey takes $4$ hours.", "diagram": null },
        { "stepNumber": 4, "description": "Divide to find the gradient.", "workingLatex": "m = \\dfrac{240}{4} = 60", "explanation": "Distance over time gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "Attach the units.", "workingLatex": "60 \\text{ km/h}", "explanation": "km divided by hours gives km per hour.", "diagram": null },
        { "stepNumber": 6, "description": "State the speed.", "workingLatex": "\\text{speed} = 60\\,\\text{km/h}", "explanation": "So the car travels at a steady $60$ km/h.", "diagram": null }
      ],
      "finalAnswer": "$60$ km/h"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading coefficients", "constant first"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = 8 - x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reorder into $mx + c$ form.", "workingLatex": "y = -x + 8", "explanation": "Writing the $x$-term first, we see the coefficient of $x$ clearly.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the $x$-term.", "workingLatex": "y = -1x + 8", "explanation": "The term $-x$ means $-1$ times $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = -1", "explanation": "The coefficient of $x$ is $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the intercept.", "workingLatex": "c = 8", "explanation": "The constant term is $8$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } -1,\\ \\text{intercept } 8", "explanation": "These describe the line's slope and starting height.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-1$, $y$-intercept $8$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["gradient and intercepts", "reading a graph", "forming an equation", "negative gradient"],
    "questionText": "The straight line shown crosses the $y$-axis at $(0, 5)$ and passes through $(5, 0)$. Find its equation.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 7, "yMin": -2, "yMax": 7,
      "curves": [{ "points": [{ "x": -0.5, "y": 5.5 }, { "x": 6, "y": -1 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 5, "label": "(0,5)", "color": "ink" },
        { "x": 5, "y": 0, "label": "(5,0)", "color": "ink" }
      ],
      "alt": "A straight line falling through (0,5) and (5,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = 5", "explanation": "The line crosses the $y$-axis at $(0,5)$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{0 - 5}{5 - 0} = \\dfrac{-5}{5} = -1", "explanation": "Using the two crossings, the rise is $-5$ over a run of $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute into the general form.", "workingLatex": "y = -x + 5", "explanation": "Combining the gradient and intercept gives the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Check the second point.", "workingLatex": "-(5) + 5 = 0 \\checkmark", "explanation": "At $x = 5$ the equation gives $y = 0$, matching the graph.", "diagram": null },
        { "stepNumber": 5, "description": "State the equation.", "workingLatex": "y = -x + 5", "explanation": "This is the equation of the line shown.", "diagram": null }
      ],
      "finalAnswer": "$y = -x + 5$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "distance-time", "interpretation", "steepness"],
    "questionText": "On a distance–time graph, one section of a journey is steeper than another. Explain what the steeper section tells you about the motion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of gradient here.", "workingLatex": "\\text{gradient} = \\text{speed}", "explanation": "On a distance–time graph, the gradient of each section is the speed during that section.", "diagram": null },
        { "stepNumber": 2, "description": "Link steepness to gradient.", "workingLatex": "\\text{steeper} \\Rightarrow \\text{larger gradient}", "explanation": "A steeper line has a bigger gradient, meaning more distance is covered per unit of time.", "diagram": null },
        { "stepNumber": 3, "description": "Translate to speed.", "workingLatex": "\\text{larger gradient} \\Rightarrow \\text{faster}", "explanation": "Covering more distance each second means moving faster.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "\\text{steeper} = \\text{faster}", "explanation": "So the steeper section shows the object travelling at a greater speed.", "diagram": null }
      ],
      "finalAnswer": "The steeper section has a larger gradient, so the object is travelling faster there."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "finding the intercept", "negative gradient"],
    "questionText": "A straight line has gradient $-2$ and passes through $(3, -1)$. Find its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = -2x + c", "explanation": "The gradient is known, so only the intercept remains.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the point.", "workingLatex": "-1 = -2(3) + c", "explanation": "The point $(3,-1)$ lies on the line.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "-1 = -6 + c", "explanation": "Working out $-2 \\times 3 = -6$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "c = -1 + 6 = 5", "explanation": "Adding $6$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "State the intercept.", "workingLatex": "y\\text{-intercept} = 5", "explanation": "So the line crosses the $y$-axis at $(0,5)$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["gradient and intercepts", "horizontal line", "zero gradient"],
    "questionText": "Write down the gradient of the line $y = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the line.", "workingLatex": "y = 4 \\text{ for all } x", "explanation": "Whatever the value of $x$, the $y$-value stays at $4$, so the line is horizontal.", "diagram": null },
        { "stepNumber": 2, "description": "Think about rise and run.", "workingLatex": "\\text{rise} = 0", "explanation": "Moving along the line, the height never changes, so the rise is always zero.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient formula.", "workingLatex": "m = \\dfrac{0}{\\text{run}} = 0", "explanation": "Zero divided by any run is zero.", "diagram": null },
        { "stepNumber": 4, "description": "State the gradient.", "workingLatex": "m = 0", "explanation": "So a horizontal line has gradient $0$.", "diagram": null }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "vertical line", "undefined gradient"],
    "questionText": "Explain why the line $x = 2$ has an undefined gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the line.", "workingLatex": "x = 2 \\text{ for all } y", "explanation": "The $x$-value is fixed at $2$ while $y$ can be anything, so the line is vertical.", "diagram": null },
        { "stepNumber": 2, "description": "Think about rise and run.", "workingLatex": "\\text{run} = 0", "explanation": "Moving up the line, $x$ never changes, so the horizontal change (run) is zero.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{0}", "explanation": "The gradient would require dividing by zero.", "diagram": null },
        { "stepNumber": 4, "description": "Explain the problem.", "workingLatex": "\\div 0 \\text{ is undefined}", "explanation": "Division by zero has no value, so the gradient cannot be defined.", "diagram": null }
      ],
      "finalAnswer": "The run is $0$, so the gradient formula divides by zero, which is undefined."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "through the origin", "interpretation", "real context"],
    "questionText": "A worker's earnings $£E$ for $h$ hours are $E = 8h$. Interpret the gradient and the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match to $y = mx + c$.", "workingLatex": "E = 8h + 0", "explanation": "There is no constant, so the intercept is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the intercept.", "workingLatex": "h = 0 \\Rightarrow E = 0", "explanation": "With zero hours worked, earnings are zero — there is no fixed payment.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = 8", "explanation": "Each extra hour adds $£8$ to the earnings.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the gradient.", "workingLatex": "£8 \\text{ per hour}", "explanation": "Pounds per hour is the hourly pay rate.", "diagram": null },
        { "stepNumber": 5, "description": "State both meanings.", "workingLatex": "\\text{rate } £8/\\text{h, no base pay}", "explanation": "So the worker earns $£8$ per hour with no fixed amount.", "diagram": null }
      ],
      "finalAnswer": "Gradient: $£8$ per hour (pay rate). Intercept: $0$, meaning no fixed base pay."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "rearranging"],
    "questionText": "The line $4x - 2y = 10$ is written as $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move the $x$-term across.", "workingLatex": "-2y = 10 - 4x", "explanation": "Subtracting $4x$ from both sides leaves the $y$-term alone on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Divide every term by $-2$.", "workingLatex": "y = \\dfrac{10}{-2} - \\dfrac{4x}{-2}", "explanation": "Dividing by the coefficient of $y$ makes $y$ the subject; watch the signs.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "y = -5 + 2x", "explanation": "Each division changes sign because we divided by a negative.", "diagram": null },
        { "stepNumber": 4, "description": "Reorder.", "workingLatex": "y = 2x - 5", "explanation": "Writing the $x$-term first gives the standard form.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the values.", "workingLatex": "m = 2,\\ c = -5", "explanation": "The gradient is $2$ and the intercept is $-5$.", "diagram": null }
      ],
      "finalAnswer": "Gradient $2$, $y$-intercept $-5$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["gradient and intercepts", "two points", "real context", "intercept meaning"],
    "questionText": "A gym had $50$ members in week $2$ and $90$ members in week $6$. Assuming linear growth, find the number of members it started with in week $0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the two data points.", "workingLatex": "(2, 50)\\ \\text{and}\\ (6, 90)", "explanation": "Week number is $x$ and membership is $y$; week $0$ is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{90 - 50}{6 - 2} = \\dfrac{40}{4} = 10", "explanation": "Membership rises by $40$ over $4$ weeks, so $10$ members per week.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = 10x + c", "explanation": "We know the gradient; the intercept $c$ is the week-$0$ membership.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute a known point.", "workingLatex": "50 = 10(2) + c", "explanation": "Using $(2, 50)$ lets us find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "50 = 20 + c \\Rightarrow c = 30", "explanation": "Subtracting $20$ gives the starting membership.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{week } 0:\\ 30 \\text{ members}", "explanation": "So the gym started with $30$ members in week $0$.", "diagram": null }
      ],
      "finalAnswer": "$30$ members"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "scaled axes", "gradient"],
    "questionText": "On a graph the $y$-axis is scaled so each square is $5$ units and the $x$-axis so each square is $1$ unit. A line rises $2$ squares up for every $1$ square across. Find the gradient of the line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the rise to units.", "workingLatex": "2 \\text{ squares} \\times 5 = 10 \\text{ units}", "explanation": "Each vertical square is worth $5$ units, so the true rise is $10$, not $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the run to units.", "workingLatex": "1 \\text{ square} \\times 1 = 1 \\text{ unit}", "explanation": "Each horizontal square is worth $1$ unit, so the run is $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient formula.", "workingLatex": "m = \\dfrac{10}{1}", "explanation": "We use the true units read from the scale.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "m = 10", "explanation": "So the gradient is $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the common error.", "workingLatex": "2 \\text{ would be wrong}", "explanation": "Just counting squares would give $2$; the scale must be applied.", "diagram": null }
      ],
      "finalAnswer": "$m = 10$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "negative intercept", "interpretation", "real context"],
    "questionText": "A savings account balance is $£B$ after $t$ weeks, where $B = 25t - 100$. Interpret the $y$-intercept $-100$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the intercept means.", "workingLatex": "t = 0 \\Rightarrow B = c", "explanation": "The intercept is the balance at the start, when $t = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $t = 0$.", "workingLatex": "B = 25(0) - 100 = -100", "explanation": "At week $0$ the balance is $-£100$.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the negative sign.", "workingLatex": "B < 0 \\Rightarrow \\text{owed}", "explanation": "A negative balance means money is owed rather than saved.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{starting debt} = £100", "explanation": "So the intercept shows the account started $£100$ overdrawn (a $£100$ debt).", "diagram": null }
      ],
      "finalAnswer": "The intercept $-100$ means the account started with a debt of $£100$ (a balance of $-£100$ at week $0$)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "two points", "zero gradient"],
    "questionText": "Find the gradient of the line joining $(1, 2)$ and $(4, 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "We compare the change in $y$ with the change in $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "2 - 2 = 0", "explanation": "Both points have the same $y$-value, so there is no vertical change.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "4 - 1 = 3", "explanation": "The points are $3$ apart horizontally.", "diagram": null },
        { "stepNumber": 4, "description": "Divide.", "workingLatex": "m = \\dfrac{0}{3} = 0", "explanation": "Zero rise gives a gradient of zero.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = 0", "explanation": "The line is horizontal, so its gradient is $0$.", "diagram": null }
      ],
      "finalAnswer": "$0$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "forming an equation", "prediction"],
    "questionText": "A courier charges a fixed fee plus a rate per km. A $10$ km delivery costs $£11$ and a $30$ km delivery costs $£23$. Find the fixed fee and the rate per km, then find the cost of a $50$ km delivery.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the data points.", "workingLatex": "(10, 11)\\ \\text{and}\\ (30, 23)", "explanation": "Distance is $x$ and cost is $y$; the rate is the gradient and the fixed fee is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient (rate).", "workingLatex": "m = \\dfrac{23 - 11}{30 - 10} = \\dfrac{12}{20} = 0.6", "explanation": "Cost rises $£12$ over $20$ km, so $£0.60$ per km.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "C = 0.6d + c", "explanation": "We know the rate; the fixed fee $c$ is still to find.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute a known point.", "workingLatex": "11 = 0.6(10) + c", "explanation": "Using $(10, 11)$ lets us find the fixed fee.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "11 = 6 + c \\Rightarrow c = 5", "explanation": "The fixed fee is $£5$.", "diagram": null },
        { "stepNumber": 6, "description": "Predict the $50$ km cost.", "workingLatex": "C = 0.6(50) + 5 = 35", "explanation": "Substituting $d = 50$ into the full equation gives the cost.", "diagram": null }
      ],
      "finalAnswer": "Fixed fee $£5$, rate $£0.60$/km; a $50$ km delivery costs $£35$."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading coefficients", "fraction gradient"],
    "questionText": "Write down the $y$-intercept of the line $y = \\tfrac{1}{2}x - 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare with the general form.", "workingLatex": "y = \\tfrac{1}{2}x - 4 \\ \\leftrightarrow\\ y = mx + c", "explanation": "The constant term is the $y$-intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the constant.", "workingLatex": "c = -4", "explanation": "The term without $x$ is $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "y\\text{-intercept} = -4", "explanation": "So the line crosses the $y$-axis at $(0, -4)$.", "diagram": null }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "conversion graph", "interpretation", "gradient units"],
    "questionText": "A conversion graph converts miles $x$ to kilometres $y$ using $y = 1.6x$. Explain what the gradient $1.6$ tells you.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of gradient.", "workingLatex": "m = \\dfrac{\\Delta y}{\\Delta x}", "explanation": "It is the change in kilometres for each extra mile.", "diagram": null },
        { "stepNumber": 2, "description": "Apply to this context.", "workingLatex": "\\Delta x = 1 \\Rightarrow \\Delta y = 1.6", "explanation": "Increasing the distance by $1$ mile increases it by $1.6$ km.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the value.", "workingLatex": "1 \\text{ mile} = 1.6 \\text{ km}", "explanation": "So the gradient is the conversion factor between the two units.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{km per mile} = 1.6", "explanation": "Each mile is equivalent to $1.6$ kilometres.", "diagram": null }
      ],
      "finalAnswer": "The gradient $1.6$ is the number of kilometres per mile: $1$ mile $= 1.6$ km."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "commission", "interpretation", "real context"],
    "questionText": "A salesperson's weekly pay $£P$ is $P = 300 + 0.05s$, where $s$ is total sales in pounds. Interpret both the gradient and the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match to $y = mx + c$.", "workingLatex": "P = 0.05s + 300", "explanation": "The coefficient of $s$ is the gradient and $300$ is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the intercept.", "workingLatex": "s = 0 \\Rightarrow P = 300", "explanation": "With no sales, the pay is still $£300$ — a guaranteed base salary.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = 0.05", "explanation": "Each extra $£1$ of sales adds $£0.05$ to the pay.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the gradient.", "workingLatex": "5\\% \\text{ commission}", "explanation": "Since $0.05 = 5\\%$, the gradient is the commission rate on sales.", "diagram": null },
        { "stepNumber": 5, "description": "State both meanings.", "workingLatex": "£300 \\text{ base} + 5\\% \\text{ of sales}", "explanation": "So the pay is a fixed $£300$ plus $5\\%$ commission on total sales.", "diagram": null }
      ],
      "finalAnswer": "Intercept $300$: a fixed base pay of $£300$. Gradient $0.05$: $5\\%$ commission per pound of sales."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["gradient and intercepts", "two points", "fraction gradient"],
    "questionText": "Find the gradient of the line joining $(-2, 1)$ and $(4, 5)$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "We use the two given points, keeping the order consistent top and bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "5 - 1 = 4", "explanation": "The vertical change from the first point to the second is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "4 - (-2) = 6", "explanation": "Subtracting a negative adds, giving a run of $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Form the fraction.", "workingLatex": "m = \\dfrac{4}{6}", "explanation": "Rise over run gives this fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "m = \\dfrac{2}{3}", "explanation": "Dividing top and bottom by $2$ gives the simplest form.", "diagram": null }
      ],
      "finalAnswer": "$m = \\tfrac{2}{3}$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "gradient", "intercept"],
    "questionText": "A line passes through $(0, -2)$ and $(4, 6)$. Find its gradient and $y$-intercept.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 6, "yMin": -4, "yMax": 8,
      "curves": [{ "points": [{ "x": -0.5, "y": -3 }, { "x": 5, "y": 8 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": -2, "label": "(0,-2)", "color": "ink" },
        { "x": 4, "y": 6, "label": "(4,6)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,-2) and (4,6)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = -2", "explanation": "The line crosses the $y$-axis at $(0, -2)$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rise.", "workingLatex": "6 - (-2) = 8", "explanation": "The line rises $8$ units between the two points.", "diagram": null },
        { "stepNumber": 3, "description": "Find the run.", "workingLatex": "4 - 0 = 4", "explanation": "The horizontal change is $4$ units.", "diagram": null },
        { "stepNumber": 4, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{8}{4} = 2", "explanation": "Rise over run gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "m = 2,\\ c = -2", "explanation": "So the line has gradient $2$ and intercept $-2$.", "diagram": null }
      ],
      "finalAnswer": "Gradient $2$, $y$-intercept $-2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "through the origin", "reading coefficients"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = 5x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write in full $mx + c$ form.", "workingLatex": "y = 5x + 0", "explanation": "There is no constant shown, so the intercept term is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the gradient.", "workingLatex": "m = 5", "explanation": "The coefficient of $x$ is $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the intercept.", "workingLatex": "c = 0", "explanation": "The line passes through the origin, so the intercept is $0$.", "diagram": null },
        { "stepNumber": 4, "description": "State both values.", "workingLatex": "\\text{gradient } 5,\\ \\text{intercept } 0", "explanation": "A zero intercept means the line goes through $(0,0)$.", "diagram": null }
      ],
      "finalAnswer": "Gradient $5$, $y$-intercept $0$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "filling"],
    "questionText": "A tank is being filled so that its volume $V$ litres after $t$ minutes is $V = 3t + 2$. Interpret both the gradient and the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Match to $y = mx + c$.", "workingLatex": "V = 3t + 2", "explanation": "The coefficient of $t$ is the gradient; the constant is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the intercept.", "workingLatex": "t = 0 \\Rightarrow V = 2", "explanation": "At the start, the tank already holds $2$ litres.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = 3", "explanation": "Each extra minute adds $3$ litres.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the gradient.", "workingLatex": "3 \\text{ L per minute}", "explanation": "The positive gradient shows water is flowing in at $3$ litres per minute.", "diagram": null },
        { "stepNumber": 5, "description": "State both meanings.", "workingLatex": "\\text{start } 2\\,\\text{L, fill } 3\\,\\text{L/min}", "explanation": "So the tank begins with $2$ litres and fills at $3$ litres per minute.", "diagram": null }
      ],
      "finalAnswer": "Intercept $2$: the tank starts with $2$ litres. Gradient $3$: it fills at $3$ litres per minute."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "x-intercept", "solving"],
    "questionText": "Find the coordinates of the point where the line $y = 2x - 6$ crosses the $x$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the condition on the $x$-axis.", "workingLatex": "y = 0", "explanation": "Every point on the $x$-axis has $y = 0$, so we set $y$ to zero.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute into the equation.", "workingLatex": "0 = 2x - 6", "explanation": "This gives an equation to solve for $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Add $6$ to both sides.", "workingLatex": "6 = 2x", "explanation": "Moving the constant across isolates the $x$-term.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = 3", "explanation": "Solving gives the $x$-coordinate of the crossing.", "diagram": null },
        { "stepNumber": 5, "description": "State the coordinates.", "workingLatex": "(3, 0)", "explanation": "The line crosses the $x$-axis at $(3, 0)$.", "diagram": null }
      ],
      "finalAnswer": "$(3, 0)$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "sign of gradient", "interpretation"],
    "questionText": "A straight line slopes downwards from left to right. State whether its gradient is positive, negative, or zero, and explain why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Picture moving along the line.", "workingLatex": "x \\uparrow", "explanation": "Reading left to right means the $x$-value is increasing.", "diagram": null },
        { "stepNumber": 2, "description": "See what happens to $y$.", "workingLatex": "y \\downarrow", "explanation": "As we move right the line goes down, so the $y$-value decreases.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the gradient idea.", "workingLatex": "m = \\dfrac{\\text{negative}}{\\text{positive}}", "explanation": "A negative change in $y$ over a positive change in $x$ is negative.", "diagram": null },
        { "stepNumber": 4, "description": "State the sign.", "workingLatex": "m < 0", "explanation": "So a line sloping downwards has a negative gradient.", "diagram": null }
      ],
      "finalAnswer": "Negative: as $x$ increases $y$ decreases, so the gradient is below zero."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "substitution", "prediction"],
    "questionText": "A line has equation $y = -\\tfrac{1}{2}x + 6$. Find the value of $y$ when $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the equation.", "workingLatex": "y = -\\tfrac{1}{2}x + 6", "explanation": "We substitute the given $x$-value into this equation.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $x = 10$.", "workingLatex": "y = -\\tfrac{1}{2}(10) + 6", "explanation": "Replacing $x$ with $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the product.", "workingLatex": "-\\tfrac{1}{2} \\times 10 = -5", "explanation": "Half of $10$ is $5$, and the sign is negative.", "diagram": null },
        { "stepNumber": 4, "description": "Add the intercept.", "workingLatex": "y = -5 + 6 = 1", "explanation": "Adding $6$ gives the value of $y$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "y = 1", "explanation": "So when $x = 10$, $y = 1$.", "diagram": null }
      ],
      "finalAnswer": "$y = 1$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["gradient and intercepts", "comparing gradients", "fraction gradient"],
    "questionText": "Two lines have gradients $\\tfrac{1}{2}$ and $\\tfrac{1}{4}$. Which line is steeper?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what controls steepness.", "workingLatex": "\\text{steepness} \\leftrightarrow |m|", "explanation": "The line with the larger gradient is steeper.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the fractions.", "workingLatex": "\\tfrac{1}{2} = \\tfrac{2}{4}", "explanation": "Writing both over a common denominator makes the comparison clear.", "diagram": null },
        { "stepNumber": 3, "description": "Decide which is bigger.", "workingLatex": "\\tfrac{2}{4} > \\tfrac{1}{4}", "explanation": "So $\\tfrac{1}{2}$ is the larger gradient.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "m = \\tfrac{1}{2} \\text{ is steeper}", "explanation": "The line with gradient $\\tfrac{1}{2}$ rises more sharply.", "diagram": null }
      ],
      "finalAnswer": "The line with gradient $\\tfrac{1}{2}$ (since $\\tfrac{1}{2} > \\tfrac{1}{4}$)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "two points", "prediction"],
    "questionText": "A phone battery falls at a constant rate. After $2$ hours it is at $80\\%$ and after $5$ hours it is at $50\\%$. Find the rate of discharge per hour, the starting percentage, and the time when the battery reaches $0\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the data points.", "workingLatex": "(2, 80)\\ \\text{and}\\ (5, 50)", "explanation": "Time is $x$ and battery percentage is $y$; the discharge rate is the gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{50 - 80}{5 - 2} = \\dfrac{-30}{3} = -10", "explanation": "The battery falls $30\\%$ over $3$ hours, so $-10\\%$ per hour.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = -10x + c", "explanation": "The intercept $c$ is the starting percentage at $x = 0$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute a point.", "workingLatex": "80 = -10(2) + c \\Rightarrow c = 100", "explanation": "Using $(2, 80)$ gives a starting charge of $100\\%$.", "diagram": null },
        { "stepNumber": 5, "description": "Set $y = 0$ for empty.", "workingLatex": "0 = -10x + 100", "explanation": "The battery is empty when the percentage reaches $0$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for the time.", "workingLatex": "10x = 100 \\Rightarrow x = 10", "explanation": "So the battery reaches $0\\%$ after $10$ hours.", "diagram": null }
      ],
      "finalAnswer": "Discharge $10\\%$ per hour; starts at $100\\%$; empty after $10$ hours."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "x-intercept", "y-intercept"],
    "questionText": "The line shown crosses the $y$-axis at $(0, 4)$ and the $x$-axis at $(8, 0)$. Find its gradient.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 10, "yMin": -2, "yMax": 6,
      "curves": [{ "points": [{ "x": -0.5, "y": 4.25 }, { "x": 9, "y": -0.5 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 4, "label": "(0,4)", "color": "ink" },
        { "x": 8, "y": 0, "label": "(8,0)", "color": "ink" }
      ],
      "alt": "A straight line falling gently through (0,4) and (8,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}}", "explanation": "We use the two axis crossings as our points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rise.", "workingLatex": "0 - 4 = -4", "explanation": "The line falls $4$ units, so the change in $y$ is $-4$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the run.", "workingLatex": "8 - 0 = 8", "explanation": "The horizontal change is $8$ units.", "diagram": null },
        { "stepNumber": 4, "description": "Divide and simplify.", "workingLatex": "m = \\dfrac{-4}{8} = -\\tfrac{1}{2}", "explanation": "Simplifying the fraction gives the gradient.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = -\\tfrac{1}{2}", "explanation": "So the line has a gentle negative gradient of $-\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$m = -\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "solving", "prediction"],
    "questionText": "The value $£V$ of a machine after $t$ years is $V = 8000 - 750t$. After how many years is the machine worth $£2000$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the value to $2000$.", "workingLatex": "2000 = 8000 - 750t", "explanation": "We want the time when $V = 2000$, so we substitute it in.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $8000$ from both sides.", "workingLatex": "-6000 = -750t", "explanation": "Moving the constant across isolates the $t$-term.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $-750$.", "workingLatex": "t = \\dfrac{-6000}{-750}", "explanation": "Dividing gives $t$; two negatives make a positive.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate.", "workingLatex": "t = 8", "explanation": "So it takes $8$ years to fall to $£2000$.", "diagram": null },
        { "stepNumber": 5, "description": "Check.", "workingLatex": "8000 - 750(8) = 2000 \\checkmark", "explanation": "Substituting back confirms the value.", "diagram": null }
      ],
      "finalAnswer": "$8$ years"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "real context", "unit price"],
    "questionText": "A shop's sales graph plots total revenue $£R$ against number of items $n$ as a straight line through the origin with gradient $12$. Explain what the gradient tells you.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the relationship.", "workingLatex": "R = 12n", "explanation": "A line through the origin with gradient $12$ has this equation.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the meaning of gradient.", "workingLatex": "m = \\dfrac{\\Delta R}{\\Delta n}", "explanation": "It is the change in revenue for each extra item sold.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to this context.", "workingLatex": "\\Delta n = 1 \\Rightarrow \\Delta R = 12", "explanation": "Selling one more item raises revenue by $£12$.", "diagram": null },
        { "stepNumber": 4, "description": "State the meaning.", "workingLatex": "\\text{price per item} = £12", "explanation": "So the gradient is the selling price of each item.", "diagram": null }
      ],
      "finalAnswer": "The gradient $12$ is the selling price per item: each item sold adds $£12$ of revenue."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["gradient and intercepts", "forming an equation", "gradient and a point"],
    "questionText": "A line has gradient $4$ and passes through $(1, 9)$. Find its equation in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start with the known gradient.", "workingLatex": "y = 4x + c", "explanation": "The gradient is $4$, so only the intercept is unknown.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the point.", "workingLatex": "9 = 4(1) + c", "explanation": "The point $(1,9)$ lies on the line.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "9 = 4 + c", "explanation": "Working out $4 \\times 1 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "c = 5", "explanation": "Subtracting $4$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 4x + 5", "explanation": "Putting the gradient and intercept together gives the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = 4x + 5$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["gradient and intercepts", "distance-time", "interpretation", "piecewise"],
    "questionText": "On a distance–time graph, a runner covers $400$ m in the first $100$ seconds, then stops for $50$ seconds, then covers a further $600$ m in the next $100$ seconds. Find the speed of each moving section and describe the middle section.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the key idea.", "workingLatex": "\\text{gradient} = \\text{speed}", "explanation": "On a distance–time graph the gradient of each straight section is the speed there.", "diagram": null },
        { "stepNumber": 2, "description": "Find the first speed.", "workingLatex": "\\dfrac{400}{100} = 4", "explanation": "$400$ m over $100$ s gives $4$ m/s in the first section.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the middle section.", "workingLatex": "\\Delta d = 0 \\Rightarrow m = 0", "explanation": "The distance does not change, so the gradient is zero and the runner is stationary.", "diagram": null },
        { "stepNumber": 4, "description": "Find the third speed.", "workingLatex": "\\dfrac{600}{100} = 6", "explanation": "$600$ m over $100$ s gives $6$ m/s in the last section.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the sections.", "workingLatex": "6 > 4", "explanation": "The steeper final section means the runner sped up after resting.", "diagram": null },
        { "stepNumber": 6, "description": "State the description.", "workingLatex": "4\\,\\text{m/s},\\ \\text{stop},\\ 6\\,\\text{m/s}", "explanation": "So the runner ran at $4$ m/s, stood still (zero gradient), then ran faster at $6$ m/s.", "diagram": null }
      ],
      "finalAnswer": "First section $4$ m/s; middle section gradient $0$, so the runner is stopped; final section $6$ m/s (faster)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading coefficients", "negative gradient"],
    "questionText": "Write down the gradient and $y$-intercept of the line $y = -3x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare with the general form.", "workingLatex": "y = -3x + 2 \\ \\leftrightarrow\\ y = mx + c", "explanation": "The coefficient of $x$ is the gradient and the constant is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the gradient.", "workingLatex": "m = -3", "explanation": "The coefficient of $x$ is $-3$, including its minus sign.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the intercept.", "workingLatex": "c = 2", "explanation": "The constant term is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "State both values.", "workingLatex": "\\text{gradient } -3,\\ \\text{intercept } 2", "explanation": "The negative gradient means the line slopes downwards.", "diagram": null }
      ],
      "finalAnswer": "Gradient $-3$, $y$-intercept $2$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["gradient and intercepts", "two points", "forming an equation"],
    "questionText": "A straight line passes through $(2, 7)$ and $(5, 16)$. Find its equation in the form $y = mx + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{16 - 7}{5 - 2} = \\dfrac{9}{3} = 3", "explanation": "The rise is $9$ over a run of $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = 3x + c", "explanation": "We now use a point to find the intercept.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute a point.", "workingLatex": "7 = 3(2) + c", "explanation": "Using $(2, 7)$ gives an equation for $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "7 = 6 + c \\Rightarrow c = 1", "explanation": "Subtracting $6$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 3x + 1", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null },
        { "stepNumber": 6, "description": "Check the other point.", "workingLatex": "3(5) + 1 = 16 \\checkmark", "explanation": "At $x = 5$ the equation gives $y = 16$, confirming the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x + 1$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["gradient and intercepts", "reading a graph", "real context", "interpretation"],
    "questionText": "A taxi's charge graph is a straight line crossing the $y$-axis at $£3$ and passing through $(4, 11)$, where the $x$-axis is distance in miles. Find the cost per mile and the fixed charge.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 6, "yMin": -1, "yMax": 14,
      "curves": [{ "points": [{ "x": -0.5, "y": 2 }, { "x": 5, "y": 13 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 3, "label": "(0,3)", "color": "ink" },
        { "x": 4, "y": 11, "label": "(4,11)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,3) and (4,11) for a taxi fare graph."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the intercept.", "workingLatex": "c = 3", "explanation": "The line crosses the $y$-axis at $£3$, which is the charge for zero distance.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the intercept.", "workingLatex": "\\text{fixed charge} = £3", "explanation": "A charge that applies at zero miles is the fixed hire fee.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{11 - 3}{4 - 0} = \\dfrac{8}{4} = 2", "explanation": "The cost rises $£8$ over $4$ miles.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the gradient.", "workingLatex": "£2 \\text{ per mile}", "explanation": "Pounds per mile is the cost of each additional mile.", "diagram": null },
        { "stepNumber": 5, "description": "State both facts.", "workingLatex": "\\text{fixed } £3,\\ £2/\\text{mile}", "explanation": "So the taxi charges a $£3$ fixed fee plus $£2$ per mile.", "diagram": null }
      ],
      "finalAnswer": "Fixed charge $£3$ (intercept); cost per mile $£2$ (gradient)."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["gradient and intercepts", "collinear", "two points", "reasoning"],
    "questionText": "Show that the points $A(1, 3)$, $B(3, 7)$ and $C(6, 13)$ all lie on the same straight line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "m_{AB} = m_{BC}", "explanation": "Points lie on one line if the gradient between each pair is the same; equal gradients from a common point force them to be collinear.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{7 - 3}{3 - 1} = \\dfrac{4}{2} = 2", "explanation": "Using points $A$ and $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $BC$.", "workingLatex": "m_{BC} = \\dfrac{13 - 7}{6 - 3} = \\dfrac{6}{3} = 2", "explanation": "Using points $B$ and $C$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the gradients.", "workingLatex": "m_{AB} = m_{BC} = 2", "explanation": "The gradients are equal and both segments share point $B$.", "diagram": null },
        { "stepNumber": 5, "description": "Conclude.", "workingLatex": "A, B, C \\text{ collinear}", "explanation": "Since the segments have the same gradient and a common point, all three points lie on one straight line.", "diagram": null }
      ],
      "finalAnswer": "Gradients $AB = BC = 2$ with common point $B$, so $A$, $B$ and $C$ are collinear."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "rearranging"],
    "questionText": "The line $\\dfrac{y}{2} = x + 3$ is written as $y = mx + c$. Find its gradient and $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "y = 2(x + 3)", "explanation": "Multiplying both sides by $2$ removes the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the bracket.", "workingLatex": "y = 2x + 6", "explanation": "Multiplying out gives the standard form.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the gradient.", "workingLatex": "m = 2", "explanation": "The coefficient of $x$ is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the intercept.", "workingLatex": "c = 6", "explanation": "The constant term is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "State both values.", "workingLatex": "\\text{gradient } 2,\\ \\text{intercept } 6", "explanation": "These come straight from the rearranged equation.", "diagram": null }
      ],
      "finalAnswer": "Gradient $2$, $y$-intercept $6$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "two points", "negative fraction gradient"],
    "questionText": "Find the gradient of the line joining $(-1, 5)$ and $(3, -1)$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{y_2 - y_1}{x_2 - x_1}", "explanation": "We keep the points in a consistent order for numerator and denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the change in $y$.", "workingLatex": "-1 - 5 = -6", "explanation": "The $y$-value drops by $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the change in $x$.", "workingLatex": "3 - (-1) = 4", "explanation": "Subtracting a negative gives a run of $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Form the fraction.", "workingLatex": "m = \\dfrac{-6}{4}", "explanation": "Rise over run gives this fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "m = -\\tfrac{3}{2}", "explanation": "Dividing top and bottom by $2$ gives the simplest form.", "diagram": null }
      ],
      "finalAnswer": "$m = -\\tfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading coefficients"],
    "questionText": "Write down the $y$-intercept of the line $y = 6x - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare with the general form.", "workingLatex": "y = 6x - 1 \\ \\leftrightarrow\\ y = mx + c", "explanation": "The constant term is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the constant.", "workingLatex": "c = -1", "explanation": "The term without $x$ is $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "State the intercept.", "workingLatex": "(0, -1)", "explanation": "So the line crosses the $y$-axis at $(0, -1)$.", "diagram": null }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["gradient and intercepts", "interpretation", "negative gradient", "real context"],
    "questionText": "The number of tickets $N$ left for a concert after $t$ days is $N = 500 - 40t$. Interpret both the gradient and the $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reorder into $mx + c$ form.", "workingLatex": "N = -40t + 500", "explanation": "This shows the gradient is $-40$ and the intercept is $500$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the intercept.", "workingLatex": "t = 0 \\Rightarrow N = 500", "explanation": "At the start, $500$ tickets are available.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradient.", "workingLatex": "m = -40", "explanation": "Each day the number of remaining tickets changes by $-40$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the gradient.", "workingLatex": "40 \\text{ sold per day}", "explanation": "The negative sign shows tickets are being used up, at $40$ per day.", "diagram": null },
        { "stepNumber": 5, "description": "State both meanings.", "workingLatex": "\\text{start } 500,\\ -40/\\text{day}", "explanation": "So there were $500$ tickets to begin with, and $40$ are sold each day.", "diagram": null }
      ],
      "finalAnswer": "Intercept $500$: $500$ tickets available at the start. Gradient $-40$: $40$ tickets are sold each day."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "forming an equation", "prediction"],
    "questionText": "A broadband deal charges a fixed monthly fee plus an amount per GB of extra data. Using $20$ GB costs $£35$ and using $50$ GB costs $£50$. Find the fixed fee and the cost per GB, then find the cost of using $80$ GB.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the data points.", "workingLatex": "(20, 35)\\ \\text{and}\\ (50, 50)", "explanation": "Data used is $x$ and cost is $y$; cost per GB is the gradient and the fixed fee is the intercept.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient.", "workingLatex": "m = \\dfrac{50 - 35}{50 - 20} = \\dfrac{15}{30} = 0.5", "explanation": "Cost rises $£15$ over $30$ GB, so $£0.50$ per GB.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "C = 0.5g + c", "explanation": "We know the rate; the fixed fee $c$ remains.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute a point.", "workingLatex": "35 = 0.5(20) + c", "explanation": "Using $(20, 35)$ lets us find the fixed fee.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "35 = 10 + c \\Rightarrow c = 25", "explanation": "The fixed monthly fee is $£25$.", "diagram": null },
        { "stepNumber": 6, "description": "Predict the $80$ GB cost.", "workingLatex": "C = 0.5(80) + 25 = 65", "explanation": "Substituting $g = 80$ into the full equation gives the cost.", "diagram": null }
      ],
      "finalAnswer": "Fixed fee $£25$, cost per GB $£0.50$; $80$ GB costs $£65$."
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "reading a graph", "fraction gradient"],
    "questionText": "The straight line shown passes through $(0, 1)$ and $(6, 4)$. Find its gradient as a fraction in its simplest form.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -1, "xMax": 8, "yMin": -1, "yMax": 6,
      "curves": [{ "points": [{ "x": -0.5, "y": 0.75 }, { "x": 7, "y": 4.5 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 1, "label": "(0,1)", "color": "ink" },
        { "x": 6, "y": 4, "label": "(6,4)", "color": "ink" }
      ],
      "alt": "A straight line rising gently through (0,1) and (6,4)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the gradient formula.", "workingLatex": "m = \\dfrac{\\text{rise}}{\\text{run}}", "explanation": "We use the two marked points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the rise.", "workingLatex": "4 - 1 = 3", "explanation": "The line rises $3$ units between the points.", "diagram": null },
        { "stepNumber": 3, "description": "Find the run.", "workingLatex": "6 - 0 = 6", "explanation": "The horizontal change is $6$ units.", "diagram": null },
        { "stepNumber": 4, "description": "Form and simplify the fraction.", "workingLatex": "m = \\dfrac{3}{6} = \\tfrac{1}{2}", "explanation": "Dividing top and bottom by $3$ gives the simplest form.", "diagram": null },
        { "stepNumber": 5, "description": "State the gradient.", "workingLatex": "m = \\tfrac{1}{2}", "explanation": "So the line has a shallow gradient of $\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$m = \\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["gradient and intercepts", "finding the intercept", "fraction gradient"],
    "questionText": "A line has gradient $\\tfrac{1}{3}$ and passes through $(6, 5)$. Find its $y$-intercept.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start from the general form.", "workingLatex": "y = \\tfrac{1}{3}x + c", "explanation": "The gradient is known, so only the intercept remains.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the point.", "workingLatex": "5 = \\tfrac{1}{3}(6) + c", "explanation": "The point $(6, 5)$ lies on the line.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the product.", "workingLatex": "\\tfrac{1}{3} \\times 6 = 2", "explanation": "A third of $6$ is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "5 = 2 + c \\Rightarrow c = 3", "explanation": "Subtracting $2$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "State the intercept.", "workingLatex": "y\\text{-intercept} = 3", "explanation": "So the line crosses the $y$-axis at $(0, 3)$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.algebra.gradient-intercept.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Gradient and intercepts",
    "subtopicId": "gcse.algebra.gradient-intercept",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["gradient and intercepts", "real context", "interpretation", "prediction", "solving"],
    "questionText": "A hot oven cools according to $T = 220 - 8t$, where $T$ is the temperature in $°\\text{C}$ and $t$ is the time in minutes. State the cooling rate, find the temperature after $15$ minutes, and find how long until the oven reaches $60°\\text{C}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Reorder into $mx + c$ form.", "workingLatex": "T = -8t + 220", "explanation": "This shows the gradient is $-8$ and the intercept is $220$.", "diagram": null },
        { "stepNumber": 2, "description": "State the cooling rate.", "workingLatex": "|m| = 8\\,°\\text{C/min}", "explanation": "The size of the gradient is the cooling rate; the negative sign shows it is falling.", "diagram": null },
        { "stepNumber": 3, "description": "Find the temperature at $t = 15$.", "workingLatex": "T = 220 - 8(15)", "explanation": "Substituting $t = 15$ into the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Evaluate.", "workingLatex": "T = 220 - 120 = 100", "explanation": "So after $15$ minutes the oven is at $100°\\text{C}$.", "diagram": null },
        { "stepNumber": 5, "description": "Set $T = 60$ for the last part.", "workingLatex": "60 = 220 - 8t", "explanation": "We want the time when the temperature reaches $60°\\text{C}$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $t$.", "workingLatex": "8t = 160 \\Rightarrow t = 20", "explanation": "Rearranging and dividing gives $t = 20$ minutes.", "diagram": null }
      ],
      "finalAnswer": "Cooling rate $8°\\text{C}$ per minute; $100°\\text{C}$ after $15$ minutes; reaches $60°\\text{C}$ after $20$ minutes."
    }
  }
];
