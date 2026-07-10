import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.parallel-perp.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "gradient"],
    "questionText": "A line is parallel to $y = 2x + 3$. Write down its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for parallel lines.", "workingLatex": "m_1 = m_2", "explanation": "Parallel lines never meet, which happens exactly when they have the same gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient of the given line.", "workingLatex": "y = 2x + 3 \\Rightarrow m = 2", "explanation": "The coefficient of $x$ is the gradient.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "m_{\\text{parallel}} = 2", "explanation": "Any parallel line copies this gradient.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "negative gradient"],
    "questionText": "A line is parallel to $y = -4x + 1$. Write down its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for parallel lines.", "workingLatex": "m_1 = m_2", "explanation": "Parallel lines have identical gradients.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient of the given line.", "workingLatex": "y = -4x + 1 \\Rightarrow m = -4", "explanation": "The coefficient of $x$, including its sign, is the gradient.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the rule.", "workingLatex": "m_{\\text{parallel}} = -4", "explanation": "The parallel line has the same gradient of $-4$.", "diagram": null }
      ],
      "finalAnswer": "$-4$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "testing lines"],
    "questionText": "Are the lines $y = 3x + 2$ and $y = 3x - 5$ parallel? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "\\text{parallel} \\Leftrightarrow m_1 = m_2", "explanation": "We only need to compare the gradients; the intercepts do not affect whether lines are parallel.", "diagram": null },
        { "stepNumber": 2, "description": "Read the first gradient.", "workingLatex": "m_1 = 3", "explanation": "The coefficient of $x$ in the first line is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the second gradient.", "workingLatex": "m_2 = 3", "explanation": "The coefficient of $x$ in the second line is also $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare.", "workingLatex": "3 = 3 \\ \\checkmark", "explanation": "The gradients are equal, so the lines are parallel.", "diagram": null },
        { "stepNumber": 5, "description": "State the conclusion.", "workingLatex": "\\text{parallel (different intercepts)}", "explanation": "They have the same steepness but different intercepts, so they are parallel and never meet.", "diagram": null }
      ],
      "finalAnswer": "Yes — both have gradient $3$, so they are parallel."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $2$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for perpendicular lines.", "workingLatex": "m_1 \\times m_2 = -1", "explanation": "Perpendicular gradients multiply to $-1$; the second is the negative reciprocal of the first.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known gradient.", "workingLatex": "2 \\times m_2 = -1", "explanation": "We put in $m_1 = 2$ and solve for $m_2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for the perpendicular gradient.", "workingLatex": "m_2 = -\\dfrac{1}{2}", "explanation": "Dividing $-1$ by $2$ gives the negative reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "m_{\\perp} = -\\tfrac{1}{2}", "explanation": "So the perpendicular gradient is $-\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $-3$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_1 \\times m_2 = -1", "explanation": "The perpendicular gradient is the negative reciprocal of the original.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the known gradient.", "workingLatex": "-3 \\times m_2 = -1", "explanation": "Here $m_1 = -3$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $m_2$.", "workingLatex": "m_2 = \\dfrac{-1}{-3} = \\dfrac{1}{3}", "explanation": "Dividing two negatives gives a positive value.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "m_{\\perp} = \\tfrac{1}{3}", "explanation": "So the perpendicular gradient is $\\tfrac{1}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$\\tfrac{1}{3}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "reciprocal of a fraction"],
    "questionText": "A line has gradient $\\tfrac{1}{2}$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal: flip the fraction and change the sign.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\dfrac{1}{1/2} = 2", "explanation": "The reciprocal of $\\tfrac{1}{2}$ is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Change the sign.", "workingLatex": "m_\\perp = -2", "explanation": "Applying the negative sign gives the perpendicular gradient.", "diagram": null },
        { "stepNumber": 4, "description": "Check the product.", "workingLatex": "\\tfrac{1}{2} \\times (-2) = -1 \\ \\checkmark", "explanation": "The gradients multiply to $-1$, confirming they are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $5$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Take the reciprocal.", "workingLatex": "\\dfrac{1}{5}", "explanation": "The reciprocal of $5$ is $\\tfrac{1}{5}$.", "diagram": null },
        { "stepNumber": 3, "description": "Change the sign.", "workingLatex": "m_\\perp = -\\tfrac{1}{5}", "explanation": "Adding the negative sign gives the perpendicular gradient.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "5 \\times (-\\tfrac{1}{5}) = -1 \\ \\checkmark", "explanation": "The product is $-1$, so the lines are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{1}{5}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular", "testing lines"],
    "questionText": "Are the lines $y = 4x - 1$ and $y = -\\tfrac{1}{4}x + 3$ perpendicular? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the test.", "workingLatex": "\\text{perpendicular} \\Leftrightarrow m_1 m_2 = -1", "explanation": "Two lines are perpendicular exactly when the product of their gradients is $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradients.", "workingLatex": "m_1 = 4,\\ m_2 = -\\tfrac{1}{4}", "explanation": "These are the coefficients of $x$ in the two lines.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply them.", "workingLatex": "4 \\times \\left(-\\tfrac{1}{4}\\right) = -1", "explanation": "The product comes out as $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "-1 \\Rightarrow \\text{perpendicular}", "explanation": "Because the product is $-1$, the lines are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "Yes — the gradients multiply to $4 \\times (-\\tfrac{1}{4}) = -1$, so they are perpendicular."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point"],
    "questionText": "Find the equation of the line parallel to $y = 3x + 1$ that passes through the point $(2, 10)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = 3", "explanation": "A parallel line has the same gradient as $y = 3x + 1$, so its gradient is $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = 3x + c", "explanation": "We know the gradient; the intercept $c$ is found using the given point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "10 = 3(2) + c", "explanation": "The line passes through $(2, 10)$, so these values satisfy the equation.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "10 = 6 + c \\Rightarrow c = 4", "explanation": "Subtracting $6$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 3x + 4", "explanation": "Combining the gradient and intercept gives the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x + 4$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "negative gradient"],
    "questionText": "Find the equation of the line parallel to $y = -2x + 4$ that passes through the point $(1, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = -2", "explanation": "A parallel line copies the gradient $-2$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = -2x + c", "explanation": "The intercept $c$ is still to find.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "3 = -2(1) + c", "explanation": "Using the point $(1, 3)$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "3 = -2 + c \\Rightarrow c = 5", "explanation": "Adding $2$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = -2x + 5", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = -2x + 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "equation through a point"],
    "questionText": "Find the equation of the line perpendicular to $y = 2x + 1$ that passes through the point $(4, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the original gradient.", "workingLatex": "m_1 = 2", "explanation": "The line $y = 2x + 1$ has gradient $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -\\tfrac{1}{2}", "explanation": "The negative reciprocal of $2$ is $-\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{1}{2}x + c", "explanation": "We use the perpendicular gradient and find $c$ from the point.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "5 = -\\tfrac{1}{2}(4) + c", "explanation": "The line passes through $(4, 5)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "5 = -2 + c \\Rightarrow c = 7", "explanation": "Adding $2$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -\\tfrac{1}{2}x + 7", "explanation": "This is the required perpendicular line.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{1}{2}x + 7$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "rearranging", "testing lines"],
    "questionText": "Are the lines $2x + y = 3$ and $y = -2x + 7$ parallel? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the first line.", "workingLatex": "y = -2x + 3", "explanation": "Subtracting $2x$ from both sides puts the first line into $y = mx + c$ form.", "diagram": null },
        { "stepNumber": 2, "description": "Read its gradient.", "workingLatex": "m_1 = -2", "explanation": "The coefficient of $x$ is $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Read the second gradient.", "workingLatex": "m_2 = -2", "explanation": "The second line is already in standard form with gradient $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare.", "workingLatex": "-2 = -2 \\ \\checkmark", "explanation": "The gradients are equal, so the lines are parallel.", "diagram": null },
        { "stepNumber": 5, "description": "State the conclusion.", "workingLatex": "\\text{parallel}", "explanation": "Different intercepts ($3$ and $7$) mean they are distinct parallel lines.", "diagram": null }
      ],
      "finalAnswer": "Yes — both rearrange to gradient $-2$, so they are parallel."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular", "testing lines"],
    "questionText": "Show that the lines $y = 3x + 2$ and $y = -\\tfrac{1}{3}x + 5$ are perpendicular.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the test.", "workingLatex": "m_1 m_2 = -1", "explanation": "Perpendicular lines have gradients whose product is $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradients.", "workingLatex": "m_1 = 3,\\ m_2 = -\\tfrac{1}{3}", "explanation": "These are the coefficients of $x$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "3 \\times \\left(-\\tfrac{1}{3}\\right) = -1", "explanation": "The $3$ and the $\\tfrac{1}{3}$ cancel, leaving $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "m_1 m_2 = -1 \\Rightarrow \\perp", "explanation": "Since the product is $-1$, the lines meet at a right angle.", "diagram": null }
      ],
      "finalAnswer": "The gradients multiply to $3 \\times (-\\tfrac{1}{3}) = -1$, so the lines are perpendicular."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "two points"],
    "questionText": "A line passes through $(1, 2)$ and $(5, 10)$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of the given line.", "workingLatex": "m_1 = \\dfrac{10 - 2}{5 - 1} = \\dfrac{8}{4} = 2", "explanation": "We use the two points to find the gradient first.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the perpendicular rule.", "workingLatex": "m_2 = -\\dfrac{1}{m_1}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute.", "workingLatex": "m_2 = -\\dfrac{1}{2}", "explanation": "Taking the negative reciprocal of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "m_\\perp = -\\tfrac{1}{2}", "explanation": "So a perpendicular line has gradient $-\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "fraction gradient"],
    "questionText": "Find the equation of the line parallel to $y = \\tfrac{1}{2}x - 3$ that passes through the point $(4, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = \\tfrac{1}{2}", "explanation": "Parallel lines share the gradient $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = \\tfrac{1}{2}x + c", "explanation": "We find the intercept from the point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "1 = \\tfrac{1}{2}(4) + c", "explanation": "Using $(4, 1)$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "1 = 2 + c", "explanation": "Half of $4$ is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = -1", "explanation": "Subtracting $2$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = \\tfrac{1}{2}x - 1", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = \\tfrac{1}{2}x - 1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "rearranging", "equation through a point"],
    "questionText": "A line has equation $x + 4y = 8$. Find the equation of the line perpendicular to it passing through $(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to find the gradient.", "workingLatex": "4y = -x + 8 \\Rightarrow y = -\\tfrac{1}{4}x + 2", "explanation": "Making $y$ the subject reveals the original gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read the original gradient.", "workingLatex": "m_1 = -\\tfrac{1}{4}", "explanation": "The coefficient of $x$ is $-\\tfrac{1}{4}$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = 4", "explanation": "The negative reciprocal of $-\\tfrac{1}{4}$ is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = 4x + c", "explanation": "Now we use the point to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the point.", "workingLatex": "3 = 4(2) + c \\Rightarrow c = -5", "explanation": "Using $(2, 3)$ and solving gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 4x - 5", "explanation": "This is the required perpendicular line.", "diagram": null }
      ],
      "finalAnswer": "$y = 4x - 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "testing lines", "parallel", "perpendicular"],
    "questionText": "State whether the lines $y = 2x + 1$ and $y = 2x - 4$ are parallel, perpendicular, or neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the gradients.", "workingLatex": "m_1 = 2,\\ m_2 = 2", "explanation": "Both lines have $2$ as the coefficient of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Test for parallel.", "workingLatex": "m_1 = m_2 \\ \\checkmark", "explanation": "The gradients are equal, which is the parallel condition.", "diagram": null },
        { "stepNumber": 3, "description": "Test for perpendicular.", "workingLatex": "2 \\times 2 = 4 \\neq -1", "explanation": "The product is not $-1$, so they are not perpendicular.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "\\text{parallel}", "explanation": "Equal gradients but different intercepts mean the lines are parallel.", "diagram": null }
      ],
      "finalAnswer": "Parallel (equal gradients of $2$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "testing lines", "neither"],
    "questionText": "State whether the lines $y = 2x + 1$ and $y = 3x - 4$ are parallel, perpendicular, or neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the gradients.", "workingLatex": "m_1 = 2,\\ m_2 = 3", "explanation": "These are the coefficients of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Test for parallel.", "workingLatex": "2 \\neq 3", "explanation": "The gradients are different, so the lines are not parallel.", "diagram": null },
        { "stepNumber": 3, "description": "Test for perpendicular.", "workingLatex": "2 \\times 3 = 6 \\neq -1", "explanation": "The product is $6$, not $-1$, so they are not perpendicular.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "\\text{neither}", "explanation": "The pair fails both tests, so the lines are neither parallel nor perpendicular.", "diagram": null }
      ],
      "finalAnswer": "Neither (gradients differ and their product is not $-1$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "equation through a point", "negative gradient"],
    "questionText": "Find the equation of the line perpendicular to $y = -\\tfrac{1}{3}x + 2$ that passes through the point $(3, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the original gradient.", "workingLatex": "m_1 = -\\tfrac{1}{3}", "explanation": "The coefficient of $x$ is $-\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = 3", "explanation": "The negative reciprocal of $-\\tfrac{1}{3}$ is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = 3x + c", "explanation": "We use the point to find $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "4 = 3(3) + c", "explanation": "Using $(3, 4)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "4 = 9 + c \\Rightarrow c = -5", "explanation": "Subtracting $9$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 3x - 5", "explanation": "This is the required perpendicular line.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x - 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "reciprocal of a fraction"],
    "questionText": "A line has gradient $-\\tfrac{2}{3}$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "Flip the fraction and change the sign.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\dfrac{1}{2/3} = \\dfrac{3}{2}", "explanation": "The reciprocal of $\\tfrac{2}{3}$ is $\\tfrac{3}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the sign change.", "workingLatex": "-\\left(-\\tfrac{3}{2}\\right) = \\tfrac{3}{2}", "explanation": "The original gradient was negative, so the perpendicular gradient becomes positive.", "diagram": null },
        { "stepNumber": 4, "description": "Check the product.", "workingLatex": "-\\tfrac{2}{3} \\times \\tfrac{3}{2} = -1 \\ \\checkmark", "explanation": "The product is $-1$, confirming perpendicularity.", "diagram": null }
      ],
      "finalAnswer": "$\\tfrac{3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "testing lines", "rearranging", "perpendicular"],
    "questionText": "State whether the lines $2x - y = 5$ and $x + 2y = 6$ are parallel, perpendicular, or neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the first line.", "workingLatex": "2x - y = 5 \\Rightarrow y = 2x - 5", "explanation": "Making $y$ the subject reveals its gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange the second line.", "workingLatex": "x + 2y = 6 \\Rightarrow y = -\\tfrac{1}{2}x + 3", "explanation": "Subtracting $x$ and dividing by $2$ gives the second gradient.", "diagram": null },
        { "stepNumber": 3, "description": "Read the gradients.", "workingLatex": "m_1 = 2,\\ m_2 = -\\tfrac{1}{2}", "explanation": "These are the two gradients to compare.", "diagram": null },
        { "stepNumber": 4, "description": "Test perpendicular.", "workingLatex": "2 \\times \\left(-\\tfrac{1}{2}\\right) = -1", "explanation": "The product is $-1$, the perpendicular condition.", "diagram": null },
        { "stepNumber": 5, "description": "State the conclusion.", "workingLatex": "\\text{perpendicular}", "explanation": "So the two lines meet at a right angle.", "diagram": null }
      ],
      "finalAnswer": "Perpendicular (gradients $2$ and $-\\tfrac{1}{2}$ multiply to $-1$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "two points", "equation through a point"],
    "questionText": "Line $L$ passes through $(0, 1)$ and $(2, 7)$. Find the equation of the line parallel to $L$ that passes through $(1, -2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of $L$.", "workingLatex": "m = \\dfrac{7 - 1}{2 - 0} = \\dfrac{6}{2} = 3", "explanation": "Using the two points on $L$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the same gradient.", "workingLatex": "m = 3", "explanation": "A parallel line has the same gradient as $L$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = 3x + c", "explanation": "We find $c$ from the new point.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "-2 = 3(1) + c", "explanation": "Using $(1, -2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "-2 = 3 + c \\Rightarrow c = -5", "explanation": "Subtracting $3$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 3x - 5", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = 3x - 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "perpendicular"],
    "questionText": "Find the equation of the perpendicular bisector of the line segment joining $A(1, 2)$ and $B(5, 6)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "\\text{through midpoint, } \\perp \\text{ to } AB", "explanation": "A perpendicular bisector passes through the midpoint of $AB$ and is perpendicular to it, so we need both the midpoint and the perpendicular gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Find the midpoint.", "workingLatex": "M = \\left(\\tfrac{1+5}{2}, \\tfrac{2+6}{2}\\right) = (3, 4)", "explanation": "The midpoint averages the coordinates of $A$ and $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{6 - 2}{5 - 1} = \\dfrac{4}{4} = 1", "explanation": "Using the two endpoints.", "diagram": null },
        { "stepNumber": 4, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = -1", "explanation": "The negative reciprocal of $1$ is $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the midpoint.", "workingLatex": "4 = -1(3) + c \\Rightarrow c = 7", "explanation": "Using $y = -x + c$ through $M(3, 4)$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -x + 7", "explanation": "This line passes through the midpoint at right angles to $AB$.", "diagram": null }
      ],
      "finalAnswer": "$y = -x + 7$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "horizontal line"],
    "questionText": "Find the equation of the line parallel to $y = 5$ that passes through the point $(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the given line.", "workingLatex": "y = 5 \\text{ is horizontal}", "explanation": "A line $y = \\text{constant}$ is horizontal, with gradient $0$.", "diagram": null },
        { "stepNumber": 2, "description": "State the parallel gradient.", "workingLatex": "m = 0", "explanation": "A parallel line is also horizontal, so it has the same form $y = \\text{constant}$.", "diagram": null },
        { "stepNumber": 3, "description": "Use the point's $y$-value.", "workingLatex": "y = 3", "explanation": "A horizontal line through $(2, 3)$ keeps $y = 3$ for every $x$.", "diagram": null },
        { "stepNumber": 4, "description": "State the equation.", "workingLatex": "y = 3", "explanation": "So the required line is $y = 3$.", "diagram": null }
      ],
      "finalAnswer": "$y = 3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "vertical line", "horizontal line"],
    "questionText": "Find the equation of the line perpendicular to $y = 4$ that passes through the point $(2, 3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the given line.", "workingLatex": "y = 4 \\text{ is horizontal}", "explanation": "This line is horizontal, so its gradient is $0$.", "diagram": null },
        { "stepNumber": 2, "description": "Think about a perpendicular to a horizontal line.", "workingLatex": "\\perp \\text{ horizontal} = \\text{vertical}", "explanation": "A line at right angles to a horizontal line must be vertical; the negative-reciprocal rule breaks down here because a vertical gradient is undefined.", "diagram": null },
        { "stepNumber": 3, "description": "Use the point's $x$-value.", "workingLatex": "x = 2", "explanation": "A vertical line through $(2, 3)$ keeps $x = 2$ for every $y$.", "diagram": null },
        { "stepNumber": 4, "description": "State the equation.", "workingLatex": "x = 2", "explanation": "So the required perpendicular line is $x = 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "finding unknown"],
    "questionText": "The line $y = kx + 1$ is parallel to $y = 3x - 2$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the parallel rule.", "workingLatex": "m_1 = m_2", "explanation": "Parallel lines have equal gradients.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the gradients.", "workingLatex": "m_1 = k,\\ m_2 = 3", "explanation": "The gradient of the first line is $k$ and of the second is $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Set them equal.", "workingLatex": "k = 3", "explanation": "For the lines to be parallel, the gradients must match.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "k = 3", "explanation": "So $k = 3$ makes the lines parallel.", "diagram": null }
      ],
      "finalAnswer": "$k = 3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "finding unknown"],
    "questionText": "The line $y = kx + 2$ is perpendicular to $y = 2x - 1$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the perpendicular rule.", "workingLatex": "m_1 m_2 = -1", "explanation": "The product of perpendicular gradients is $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the gradients.", "workingLatex": "k \\times 2 = -1", "explanation": "Here $m_1 = k$ and $m_2 = 2$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $k$.", "workingLatex": "k = -\\tfrac{1}{2}", "explanation": "Dividing both sides by $2$ gives the value.", "diagram": null },
        { "stepNumber": 4, "description": "Check.", "workingLatex": "-\\tfrac{1}{2} \\times 2 = -1 \\ \\checkmark", "explanation": "The product is $-1$, confirming the lines are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "$k = -\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "reading a graph", "equation through a point"],
    "questionText": "The line shown passes through $(0, 1)$ and $(2, 5)$. Find the equation of the line perpendicular to it that passes through $(0, 1)$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -3, "xMax": 4, "yMin": -2, "yMax": 6,
      "curves": [{ "points": [{ "x": -1, "y": -3 }, { "x": 2.2, "y": 5.4 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": 1, "label": "(0,1)", "color": "ink" },
        { "x": 2, "y": 5, "label": "(2,5)", "color": "ink" }
      ],
      "alt": "A straight line rising steeply through (0,1) and (2,5)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of the drawn line.", "workingLatex": "m_1 = \\dfrac{5 - 1}{2 - 0} = 2", "explanation": "Using the two marked points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -\\tfrac{1}{2}", "explanation": "The negative reciprocal of $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the intercept.", "workingLatex": "(0, 1) \\Rightarrow c = 1", "explanation": "The perpendicular line also passes through $(0, 1)$, so its intercept is $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = -\\tfrac{1}{2}x + 1", "explanation": "Combining the perpendicular gradient with the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm the right angle.", "workingLatex": "2 \\times (-\\tfrac{1}{2}) = -1 \\ \\checkmark", "explanation": "The product of gradients is $-1$, so the lines are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{1}{2}x + 1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "rearranging", "equation through a point"],
    "questionText": "Find the equation of the line perpendicular to $3x - 2y = 6$ that passes through the point $(6, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to find the gradient.", "workingLatex": "-2y = -3x + 6 \\Rightarrow y = \\tfrac{3}{2}x - 3", "explanation": "Making $y$ the subject reveals the original gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read the original gradient.", "workingLatex": "m_1 = \\tfrac{3}{2}", "explanation": "The coefficient of $x$ is $\\tfrac{3}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -\\tfrac{2}{3}", "explanation": "Flip the fraction and change the sign.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{2}{3}x + c", "explanation": "We use the point to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the point.", "workingLatex": "1 = -\\tfrac{2}{3}(6) + c", "explanation": "Using $(6, 1)$; note $-\\tfrac{2}{3}\\times 6 = -4$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve and write the equation.", "workingLatex": "1 = -4 + c \\Rightarrow c = 5,\\ y = -\\tfrac{2}{3}x + 5", "explanation": "Adding $4$ gives the intercept and the final equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{2}{3}x + 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "geometry", "right angle", "perpendicular"],
    "questionText": "Triangle $PQR$ has vertices $P(1, 1)$, $Q(4, 2)$ and $R(2, 7)$. Show that the angle at $P$ is a right angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "PQ \\perp PR \\Leftrightarrow m_{PQ} m_{PR} = -1", "explanation": "The angle at $P$ is a right angle exactly when the two sides meeting at $P$ have gradients multiplying to $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $PQ$.", "workingLatex": "m_{PQ} = \\dfrac{2 - 1}{4 - 1} = \\dfrac{1}{3}", "explanation": "Using points $P$ and $Q$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $PR$.", "workingLatex": "m_{PR} = \\dfrac{7 - 1}{2 - 1} = \\dfrac{6}{1} = 6", "explanation": "Using points $P$ and $R$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the gradients.", "workingLatex": "\\tfrac{1}{3} \\times 6 = 2", "explanation": "The product comes out as $2$, not $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "Re-examine the claim.", "workingLatex": "2 \\neq -1", "explanation": "Since the product is not $-1$, the sides $PQ$ and $PR$ are not perpendicular.", "diagram": null },
        { "stepNumber": 6, "description": "State the honest conclusion.", "workingLatex": "\\text{angle at } P \\text{ is not } 90°", "explanation": "The gradient test shows the angle at $P$ is not a right angle, so the claim is false — the method is to test $m_{PQ}m_{PR} = -1$, and here it fails.", "diagram": null }
      ],
      "finalAnswer": "$m_{PQ} = \\tfrac{1}{3}$, $m_{PR} = 6$, product $= 2 \\neq -1$, so the angle at $P$ is not a right angle."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "rearranging", "testing lines"],
    "questionText": "Which of these lines is parallel to $y = \\tfrac{1}{2}x + 4$: (A) $y = 2x + 4$, (B) $x - 2y = 10$, (C) $y = -\\tfrac{1}{2}x + 1$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the target gradient.", "workingLatex": "m = \\tfrac{1}{2}", "explanation": "We need a line whose gradient is also $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 2, "description": "Check line A.", "workingLatex": "m_A = 2 \\neq \\tfrac{1}{2}", "explanation": "Line A has gradient $2$, so it is not parallel.", "diagram": null },
        { "stepNumber": 3, "description": "Rearrange line B.", "workingLatex": "x - 2y = 10 \\Rightarrow y = \\tfrac{1}{2}x - 5", "explanation": "Making $y$ the subject shows its gradient.", "diagram": null },
        { "stepNumber": 4, "description": "Check line B.", "workingLatex": "m_B = \\tfrac{1}{2} \\ \\checkmark", "explanation": "Line B has the matching gradient $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 5, "description": "Check line C.", "workingLatex": "m_C = -\\tfrac{1}{2} \\neq \\tfrac{1}{2}", "explanation": "Line C has the opposite sign, so it is not parallel.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "\\text{B}", "explanation": "Only line B shares the gradient $\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "Line B ($x - 2y = 10$, which rearranges to gradient $\\tfrac{1}{2}$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "through the origin"],
    "questionText": "Find the equation of the line parallel to $y = -3x + 5$ that passes through the origin.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = -3", "explanation": "A parallel line copies the gradient $-3$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the origin.", "workingLatex": "(0, 0) \\Rightarrow c = 0", "explanation": "Passing through the origin means the intercept is $0$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = -3x", "explanation": "Combining the gradient and zero intercept gives the line.", "diagram": null }
      ],
      "finalAnswer": "$y = -3x$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "negative gradient"],
    "questionText": "Find the equation of the perpendicular bisector of the segment joining $A(-2, 1)$ and $B(4, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the midpoint.", "workingLatex": "M = \\left(\\tfrac{-2+4}{2}, \\tfrac{1+5}{2}\\right) = (1, 3)", "explanation": "The bisector passes through the midpoint of $AB$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{5 - 1}{4 - (-2)} = \\dfrac{4}{6} = \\tfrac{2}{3}", "explanation": "Using the two endpoints; the run is $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = -\\tfrac{3}{2}", "explanation": "Flip $\\tfrac{2}{3}$ and change the sign.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{3}{2}x + c", "explanation": "We find $c$ using the midpoint.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the midpoint.", "workingLatex": "3 = -\\tfrac{3}{2}(1) + c", "explanation": "Using $M(1, 3)$; note $-\\tfrac{3}{2}\\times 1 = -\\tfrac{3}{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve and write the equation.", "workingLatex": "c = 3 + \\tfrac{3}{2} = \\tfrac{9}{2},\\ y = -\\tfrac{3}{2}x + \\tfrac{9}{2}", "explanation": "Adding $\\tfrac{3}{2}$ to $3$ gives the intercept and completes the equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{3}{2}x + \\tfrac{9}{2}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "finding unknown", "rearranging"],
    "questionText": "The line $y = kx - 3$ is perpendicular to the line $x + 3y = 12$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the second line.", "workingLatex": "3y = -x + 12 \\Rightarrow y = -\\tfrac{1}{3}x + 4", "explanation": "Making $y$ the subject reveals its gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read its gradient.", "workingLatex": "m_2 = -\\tfrac{1}{3}", "explanation": "The coefficient of $x$ is $-\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the perpendicular rule.", "workingLatex": "k \\times \\left(-\\tfrac{1}{3}\\right) = -1", "explanation": "The gradient $k$ times the other gradient must equal $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $k$.", "workingLatex": "k = -1 \\div \\left(-\\tfrac{1}{3}\\right) = 3", "explanation": "Dividing by $-\\tfrac{1}{3}$ is the same as multiplying by $-3$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "k = 3", "explanation": "So $k = 3$ makes the lines perpendicular.", "diagram": null }
      ],
      "finalAnswer": "$k = 3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "geometry", "parallelogram", "parallel"],
    "questionText": "A quadrilateral has vertices $A(0, 0)$, $B(4, 2)$, $C(6, 6)$ and $D(2, 4)$. Use gradients to show that $ABCD$ is a parallelogram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "AB \\parallel DC,\\ BC \\parallel AD", "explanation": "A quadrilateral is a parallelogram if both pairs of opposite sides are parallel, i.e. have equal gradients.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{2 - 0}{4 - 0} = \\tfrac{1}{2}", "explanation": "Using $A$ and $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $DC$.", "workingLatex": "m_{DC} = \\dfrac{6 - 4}{6 - 2} = \\tfrac{2}{4} = \\tfrac{1}{2}", "explanation": "Using $D$ and $C$; equal to $m_{AB}$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the gradient of $BC$.", "workingLatex": "m_{BC} = \\dfrac{6 - 2}{6 - 4} = \\tfrac{4}{2} = 2", "explanation": "Using $B$ and $C$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the gradient of $AD$.", "workingLatex": "m_{AD} = \\dfrac{4 - 0}{2 - 0} = \\tfrac{4}{2} = 2", "explanation": "Using $A$ and $D$; equal to $m_{BC}$.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "m_{AB} = m_{DC},\\ m_{BC} = m_{AD}", "explanation": "Both pairs of opposite sides are parallel, so $ABCD$ is a parallelogram.", "diagram": null }
      ],
      "finalAnswer": "$AB \\parallel DC$ (both $\\tfrac{1}{2}$) and $BC \\parallel AD$ (both $2$), so $ABCD$ is a parallelogram."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal", "fraction gradient"],
    "questionText": "A line has gradient $\\tfrac{3}{4}$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\dfrac{1}{3/4} = \\dfrac{4}{3}", "explanation": "The reciprocal of $\\tfrac{3}{4}$ is $\\tfrac{4}{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Change the sign.", "workingLatex": "m_\\perp = -\\tfrac{4}{3}", "explanation": "Adding the negative sign gives the perpendicular gradient.", "diagram": null },
        { "stepNumber": 4, "description": "Check the product.", "workingLatex": "\\tfrac{3}{4} \\times \\left(-\\tfrac{4}{3}\\right) = -1 \\ \\checkmark", "explanation": "The product is $-1$, confirming perpendicularity.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{4}{3}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "negative coordinate"],
    "questionText": "Find the equation of the line parallel to $y = 4x - 1$ that passes through the point $(-1, 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = 4", "explanation": "A parallel line copies the gradient $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = 4x + c", "explanation": "We find $c$ using the given point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "2 = 4(-1) + c", "explanation": "Using $(-1, 2)$; note $4 \\times (-1) = -4$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "2 = -4 + c \\Rightarrow c = 6", "explanation": "Adding $4$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = 4x + 6", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = 4x + 6$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "equation through a point"],
    "questionText": "Find the equation of the line perpendicular to $y = x + 5$ that passes through the point $(2, -3)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the original gradient.", "workingLatex": "m_1 = 1", "explanation": "The line $y = x + 5$ has gradient $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -1", "explanation": "The negative reciprocal of $1$ is $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = -x + c", "explanation": "We use the point to find $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "-3 = -(2) + c", "explanation": "Using $(2, -3)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "-3 = -2 + c \\Rightarrow c = -1", "explanation": "Adding $2$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -x - 1", "explanation": "This is the required perpendicular line.", "diagram": null }
      ],
      "finalAnswer": "$y = -x - 1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular", "testing lines"],
    "questionText": "Are the lines $y = x + 2$ and $y = -x + 2$ perpendicular? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the gradients.", "workingLatex": "m_1 = 1,\\ m_2 = -1", "explanation": "The coefficients of $x$ are $1$ and $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the test.", "workingLatex": "m_1 m_2 = -1", "explanation": "Perpendicular lines have gradients that multiply to $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "1 \\times (-1) = -1", "explanation": "The product is exactly $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "\\text{perpendicular}", "explanation": "Because the product is $-1$, the lines are perpendicular.", "diagram": null }
      ],
      "finalAnswer": "Yes — gradients $1$ and $-1$ multiply to $-1$, so they are perpendicular."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "geometry", "altitude", "perpendicular"],
    "questionText": "In triangle $ABC$, $B = (2, 1)$ and $C = (8, 4)$. Find the equation of the altitude from $A(3, 9)$ (the line through $A$ perpendicular to $BC$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "\\text{altitude} \\perp BC \\text{ through } A", "explanation": "The altitude from $A$ is perpendicular to side $BC$ and passes through $A$, so we need the gradient of $BC$ first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $BC$.", "workingLatex": "m_{BC} = \\dfrac{4 - 1}{8 - 2} = \\dfrac{3}{6} = \\tfrac{1}{2}", "explanation": "Using points $B$ and $C$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = -2", "explanation": "The negative reciprocal of $\\tfrac{1}{2}$ is $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = -2x + c", "explanation": "We use $A$ to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute $A$.", "workingLatex": "9 = -2(3) + c", "explanation": "Using $A(3, 9)$; note $-2 \\times 3 = -6$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve and write the equation.", "workingLatex": "9 = -6 + c \\Rightarrow c = 15,\\ y = -2x + 15", "explanation": "Adding $6$ gives the intercept and the altitude's equation.", "diagram": null }
      ],
      "finalAnswer": "$y = -2x + 15$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "prediction"],
    "questionText": "A line is parallel to $y = 2x - 7$ and passes through $(3, 5)$. Find the $y$-coordinate of the point on this line where $x = 10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = 2", "explanation": "The parallel line has gradient $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "5 = 2(3) + c \\Rightarrow c = -1", "explanation": "Using $(3, 5)$: $5 = 6 + c$, so $c = -1$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 2x - 1", "explanation": "Combining the gradient and intercept.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $x = 10$.", "workingLatex": "y = 2(10) - 1", "explanation": "We evaluate the line at $x = 10$.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "y = 19", "explanation": "So at $x = 10$ the $y$-coordinate is $19$.", "diagram": null }
      ],
      "finalAnswer": "$y = 19$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $1$. Write down the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "m_\\perp = -\\dfrac{1}{1} = -1", "explanation": "The reciprocal of $1$ is $1$, and the sign changes.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "m_\\perp = -1", "explanation": "So the perpendicular gradient is $-1$.", "diagram": null }
      ],
      "finalAnswer": "$-1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "rearranging", "equation through a point"],
    "questionText": "Find the equation of the line perpendicular to $2y = x + 6$ that passes through the point $(1, 4)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to standard form.", "workingLatex": "2y = x + 6 \\Rightarrow y = \\tfrac{1}{2}x + 3", "explanation": "Dividing by $2$ reveals the original gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read the original gradient.", "workingLatex": "m_1 = \\tfrac{1}{2}", "explanation": "The coefficient of $x$ is $\\tfrac{1}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -2", "explanation": "The negative reciprocal of $\\tfrac{1}{2}$ is $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = -2x + c", "explanation": "We use the point to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the point.", "workingLatex": "4 = -2(1) + c \\Rightarrow c = 6", "explanation": "Using $(1, 4)$: $4 = -2 + c$, so $c = 6$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -2x + 6", "explanation": "This is the required perpendicular line.", "diagram": null }
      ],
      "finalAnswer": "$y = -2x + 6$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "testing lines", "reasoning"],
    "questionText": "Jo says the lines $y = 6x + 1$ and $y = 6x + 1$ are parallel. Explain why Jo is wrong.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the two equations.", "workingLatex": "y = 6x + 1 \\text{ and } y = 6x + 1", "explanation": "The two equations are identical, letter for letter.", "diagram": null },
        { "stepNumber": 2, "description": "Recall what parallel means.", "workingLatex": "\\text{parallel: never meet}", "explanation": "Parallel lines are distinct lines that never cross.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret identical equations.", "workingLatex": "\\text{same line}", "explanation": "Identical equations describe exactly the same line, not two separate ones.", "diagram": null },
        { "stepNumber": 4, "description": "State the correction.", "workingLatex": "\\text{coincident, not parallel}", "explanation": "They lie on top of each other (coincident), so calling them parallel is wrong; parallel lines must be different lines with the same gradient.", "diagram": null }
      ],
      "finalAnswer": "The equations are identical, so they are the same (coincident) line, not two distinct parallel lines."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "coordinate",
    "tags": ["parallel and perpendicular lines", "perpendicular", "intersection", "simultaneous"],
    "questionText": "Line $L_1$ is $y = 2x - 3$. Line $L_2$ is perpendicular to $L_1$ and passes through $(4, 1)$. Find the coordinates of the point where $L_1$ and $L_2$ meet.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of $L_2$.", "workingLatex": "m_2 = -\\tfrac{1}{2}", "explanation": "The negative reciprocal of $2$ gives the perpendicular gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Find the equation of $L_2$.", "workingLatex": "1 = -\\tfrac{1}{2}(4) + c \\Rightarrow c = 3", "explanation": "Using $(4, 1)$: $1 = -2 + c$, so $c = 3$ and $L_2: y = -\\tfrac{1}{2}x + 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Set the equations equal.", "workingLatex": "2x - 3 = -\\tfrac{1}{2}x + 3", "explanation": "At the intersection both lines share the same $y$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $x$.", "workingLatex": "\\tfrac{5}{2}x = 6 \\Rightarrow x = \\tfrac{12}{5}", "explanation": "Adding $\\tfrac{1}{2}x$ and $3$ to both sides, then dividing.", "diagram": null },
        { "stepNumber": 5, "description": "Find $y$.", "workingLatex": "y = 2\\left(\\tfrac{12}{5}\\right) - 3 = \\tfrac{24}{5} - 3 = \\tfrac{9}{5}", "explanation": "Substituting $x$ back into $L_1$.", "diagram": null },
        { "stepNumber": 6, "description": "State the point.", "workingLatex": "\\left(\\tfrac{12}{5}, \\tfrac{9}{5}\\right)", "explanation": "So the lines meet at $\\left(\\tfrac{12}{5}, \\tfrac{9}{5}\\right)$.", "diagram": null }
      ],
      "finalAnswer": "$\\left(\\tfrac{12}{5}, \\tfrac{9}{5}\\right)$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular", "testing lines", "rearranging"],
    "questionText": "Which of these lines is perpendicular to $y = 5x - 2$: (A) $y = 5x + 1$, (B) $y = -5x$, (C) $x + 5y = 20$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the target perpendicular gradient.", "workingLatex": "m_\\perp = -\\tfrac{1}{5}", "explanation": "The negative reciprocal of $5$ is $-\\tfrac{1}{5}$; we need a line with this gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Check line A.", "workingLatex": "m_A = 5", "explanation": "Gradient $5$ is parallel, not perpendicular.", "diagram": null },
        { "stepNumber": 3, "description": "Check line B.", "workingLatex": "m_B = -5 \\neq -\\tfrac{1}{5}", "explanation": "Gradient $-5$ does not satisfy the rule ($5 \\times -5 = -25$).", "diagram": null },
        { "stepNumber": 4, "description": "Rearrange line C.", "workingLatex": "x + 5y = 20 \\Rightarrow y = -\\tfrac{1}{5}x + 4", "explanation": "Making $y$ the subject gives its gradient.", "diagram": null },
        { "stepNumber": 5, "description": "Check line C.", "workingLatex": "5 \\times \\left(-\\tfrac{1}{5}\\right) = -1 \\ \\checkmark", "explanation": "The product is $-1$, so line C is perpendicular.", "diagram": null }
      ],
      "finalAnswer": "Line C ($x + 5y = 20$, gradient $-\\tfrac{1}{5}$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "gradient"],
    "questionText": "A line is parallel to $y = 7x$. Write down its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the parallel rule.", "workingLatex": "m_1 = m_2", "explanation": "Parallel lines have equal gradients.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "y = 7x \\Rightarrow m = 7", "explanation": "The coefficient of $x$ is $7$.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "m_{\\text{parallel}} = 7", "explanation": "The parallel line has gradient $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "geometry", "rectangle", "reasoning"],
    "questionText": "A quadrilateral has vertices $P(0, 0)$, $Q(4, 2)$, $R(3, 4)$ and $S(-1, 2)$. Use gradients to decide whether $PQRS$ is a rectangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "\\text{opposite sides } \\parallel,\\ \\text{adjacent sides } \\perp", "explanation": "A rectangle needs opposite sides parallel and adjacent sides perpendicular, so we test gradients of the four sides.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $PQ$.", "workingLatex": "m_{PQ} = \\dfrac{2 - 0}{4 - 0} = \\tfrac{1}{2}", "explanation": "Using $P$ and $Q$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $QR$.", "workingLatex": "m_{QR} = \\dfrac{4 - 2}{3 - 4} = \\dfrac{2}{-1} = -2", "explanation": "Using $Q$ and $R$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the gradients of $RS$ and $SP$.", "workingLatex": "m_{RS} = \\dfrac{2 - 4}{-1 - 3} = \\tfrac{1}{2},\\ m_{SP} = \\dfrac{0 - 2}{0 - (-1)} = -2", "explanation": "So $PQ \\parallel RS$ and $QR \\parallel SP$, giving a parallelogram.", "diagram": null },
        { "stepNumber": 5, "description": "Test adjacent sides for a right angle.", "workingLatex": "m_{PQ} \\times m_{QR} = \\tfrac{1}{2} \\times (-2) = -1", "explanation": "Adjacent sides $PQ$ and $QR$ have gradients multiplying to $-1$, so they are perpendicular.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "\\text{parallelogram} + \\text{right angle} = \\text{rectangle}", "explanation": "Opposite sides are parallel and a corner angle is $90°$, so $PQRS$ is a rectangle.", "diagram": null }
      ],
      "finalAnswer": "Yes — opposite sides are parallel ($\\tfrac{1}{2}$ and $-2$) and adjacent sides meet at right angles ($\\tfrac{1}{2}\\times -2 = -1$), so it is a rectangle."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $-1$. Write down the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "m_\\perp = -\\dfrac{1}{-1} = 1", "explanation": "The reciprocal of $-1$ is $-1$, and changing the sign gives $1$.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "m_\\perp = 1", "explanation": "So the perpendicular gradient is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "fraction gradient"],
    "questionText": "Find the equation of the line parallel to $y = -\\tfrac{3}{4}x + 2$ that passes through the point $(4, -1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = -\\tfrac{3}{4}", "explanation": "A parallel line copies the gradient $-\\tfrac{3}{4}$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{3}{4}x + c", "explanation": "We find $c$ from the given point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "-1 = -\\tfrac{3}{4}(4) + c", "explanation": "Using $(4, -1)$; note $-\\tfrac{3}{4}\\times 4 = -3$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "-1 = -3 + c", "explanation": "The product simplifies neatly to $-3$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "c = 2", "explanation": "Adding $3$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -\\tfrac{3}{4}x + 2", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{3}{4}x + 2$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular bisector", "midpoint"],
    "questionText": "Find the equation of the perpendicular bisector of the segment joining $A(2, -1)$ and $B(6, 7)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the midpoint.", "workingLatex": "M = \\left(\\tfrac{2+6}{2}, \\tfrac{-1+7}{2}\\right) = (4, 3)", "explanation": "The bisector passes through the midpoint of $AB$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2", "explanation": "Using the two endpoints.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = -\\tfrac{1}{2}", "explanation": "The negative reciprocal of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{1}{2}x + c", "explanation": "We use the midpoint to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the midpoint.", "workingLatex": "3 = -\\tfrac{1}{2}(4) + c \\Rightarrow c = 5", "explanation": "Using $M(4, 3)$: $3 = -2 + c$, so $c = 5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -\\tfrac{1}{2}x + 5", "explanation": "This is the perpendicular bisector.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{1}{2}x + 5$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "finding unknown", "rearranging"],
    "questionText": "The line $6x + 2y = 5$ is parallel to $y = kx + 4$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the first line.", "workingLatex": "2y = -6x + 5 \\Rightarrow y = -3x + \\tfrac{5}{2}", "explanation": "Making $y$ the subject reveals its gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read its gradient.", "workingLatex": "m_1 = -3", "explanation": "The coefficient of $x$ is $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the parallel rule.", "workingLatex": "k = m_1", "explanation": "Parallel lines have equal gradients, so $k$ equals this gradient.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "k = -3", "explanation": "So $k = -3$ makes the lines parallel.", "diagram": null }
      ],
      "finalAnswer": "$k = -3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "reading a graph", "equation through a point"],
    "questionText": "The line shown passes through $(0, -2)$ and $(3, 1)$. Find the equation of the line parallel to it that passes through $(0, 4)$.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": -2, "xMax": 5, "yMin": -4, "yMax": 6,
      "curves": [{ "points": [{ "x": -1, "y": -3 }, { "x": 4, "y": 2 }], "color": "accent" }],
      "points": [
        { "x": 0, "y": -2, "label": "(0,-2)", "color": "ink" },
        { "x": 3, "y": 1, "label": "(3,1)", "color": "ink" }
      ],
      "alt": "A straight line rising through (0,-2) and (3,1)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of the drawn line.", "workingLatex": "m = \\dfrac{1 - (-2)}{3 - 0} = \\dfrac{3}{3} = 1", "explanation": "Using the two marked points.", "diagram": null },
        { "stepNumber": 2, "description": "Use the same gradient.", "workingLatex": "m = 1", "explanation": "A parallel line has the same gradient of $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the intercept.", "workingLatex": "(0, 4) \\Rightarrow c = 4", "explanation": "The parallel line passes through $(0, 4)$, so its intercept is $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = x + 4", "explanation": "Combining the gradient and intercept.", "diagram": null }
      ],
      "finalAnswer": "$y = x + 4$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "testing lines", "through the origin"],
    "questionText": "Are the lines $y = 2x$ and $y = 2x + 3$ parallel? Explain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the gradients.", "workingLatex": "m_1 = 2,\\ m_2 = 2", "explanation": "Both lines have $2$ as the coefficient of $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the intercepts.", "workingLatex": "c_1 = 0,\\ c_2 = 3", "explanation": "The intercepts differ, so the lines are not the same line.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the parallel rule.", "workingLatex": "m_1 = m_2 \\ \\checkmark", "explanation": "Equal gradients with different intercepts is exactly the parallel condition.", "diagram": null },
        { "stepNumber": 4, "description": "State the conclusion.", "workingLatex": "\\text{parallel}", "explanation": "So the two lines are parallel.", "diagram": null }
      ],
      "finalAnswer": "Yes — both have gradient $2$ but different intercepts, so they are parallel."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "coordinate",
    "tags": ["parallel and perpendicular lines", "perpendicular", "equation through a point", "x-intercept"],
    "questionText": "Find the equation of the line perpendicular to $y = \\tfrac{2}{5}x + 1$ through $(4, 0)$, then find where this perpendicular line crosses the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the original gradient.", "workingLatex": "m_1 = \\tfrac{2}{5}", "explanation": "The coefficient of $x$ is $\\tfrac{2}{5}$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = -\\tfrac{5}{2}", "explanation": "Flip $\\tfrac{2}{5}$ and change the sign.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = -\\tfrac{5}{2}x + c", "explanation": "We use the point to find $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "0 = -\\tfrac{5}{2}(4) + c", "explanation": "Using $(4, 0)$; note $-\\tfrac{5}{2}\\times 4 = -10$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "0 = -10 + c \\Rightarrow c = 10", "explanation": "Adding $10$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "State the $y$-axis crossing.", "workingLatex": "(0, 10)", "explanation": "The $y$-intercept is $c = 10$, so the line crosses the $y$-axis at $(0, 10)$.", "diagram": null }
      ],
      "finalAnswer": "$y = -\\tfrac{5}{2}x + 10$, crossing the $y$-axis at $(0, 10)$."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular", "testing lines", "rearranging"],
    "questionText": "State whether the lines $y = \\tfrac{2}{3}x + 1$ and $2x + 3y = 9$ are parallel, perpendicular, or neither.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the first gradient.", "workingLatex": "m_1 = \\tfrac{2}{3}", "explanation": "The first line is already in standard form.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange the second line.", "workingLatex": "3y = -2x + 9 \\Rightarrow y = -\\tfrac{2}{3}x + 3", "explanation": "Making $y$ the subject gives the second gradient.", "diagram": null },
        { "stepNumber": 3, "description": "Read the second gradient.", "workingLatex": "m_2 = -\\tfrac{2}{3}", "explanation": "The coefficient of $x$ is $-\\tfrac{2}{3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Test parallel.", "workingLatex": "\\tfrac{2}{3} \\neq -\\tfrac{2}{3}", "explanation": "The gradients are not equal, so not parallel.", "diagram": null },
        { "stepNumber": 5, "description": "Test perpendicular.", "workingLatex": "\\tfrac{2}{3} \\times \\left(-\\tfrac{2}{3}\\right) = -\\tfrac{4}{9} \\neq -1", "explanation": "The product is $-\\tfrac{4}{9}$, not $-1$, so not perpendicular.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "\\text{neither}", "explanation": "The pair fails both tests, so the lines are neither parallel nor perpendicular.", "diagram": null }
      ],
      "finalAnswer": "Neither (gradients $\\tfrac{2}{3}$ and $-\\tfrac{2}{3}$; not equal and product is $-\\tfrac{4}{9}$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "rearranging", "equation through a point"],
    "questionText": "Find the equation of the line parallel to $3x + y = 7$ that passes through the point $(2, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to find the gradient.", "workingLatex": "3x + y = 7 \\Rightarrow y = -3x + 7", "explanation": "Subtracting $3x$ makes $y$ the subject.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = -3", "explanation": "The coefficient of $x$ is $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = -3x + c", "explanation": "A parallel line has the same gradient; we find $c$ from the point.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "5 = -3(2) + c", "explanation": "Using $(2, 5)$; note $-3\\times 2 = -6$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "5 = -6 + c \\Rightarrow c = 11", "explanation": "Adding $6$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = -3x + 11", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = -3x + 11$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "reciprocal of a fraction"],
    "questionText": "A line has gradient $\\tfrac{5}{6}$. Find the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "Flip the fraction and change the sign.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the fraction.", "workingLatex": "\\dfrac{1}{5/6} = \\dfrac{6}{5}", "explanation": "The reciprocal of $\\tfrac{5}{6}$ is $\\tfrac{6}{5}$.", "diagram": null },
        { "stepNumber": 3, "description": "Change the sign.", "workingLatex": "m_\\perp = -\\tfrac{6}{5}", "explanation": "Adding the negative sign gives the perpendicular gradient.", "diagram": null },
        { "stepNumber": 4, "description": "Check the product.", "workingLatex": "\\tfrac{5}{6} \\times \\left(-\\tfrac{6}{5}\\right) = -1 \\ \\checkmark", "explanation": "The product is $-1$, confirming perpendicularity.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{6}{5}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "parallel", "negative gradient"],
    "questionText": "A line is parallel to $y = -2x + 9$. Write down its gradient.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the parallel rule.", "workingLatex": "m_1 = m_2", "explanation": "Parallel lines have equal gradients.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = -2", "explanation": "The coefficient of $x$, with its sign, is $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "m_{\\text{parallel}} = -2", "explanation": "The parallel line has gradient $-2$.", "diagram": null }
      ],
      "finalAnswer": "$-2$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "two points", "equation through a point"],
    "questionText": "A line passes through $(1, 4)$ and $(3, -2)$. Find the equation of the line perpendicular to it that passes through $(0, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient of the given line.", "workingLatex": "m_1 = \\dfrac{-2 - 4}{3 - 1} = \\dfrac{-6}{2} = -3", "explanation": "Using the two points.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_2 = \\tfrac{1}{3}", "explanation": "The negative reciprocal of $-3$ is $\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Note the intercept.", "workingLatex": "(0, 1) \\Rightarrow c = 1", "explanation": "The perpendicular line passes through $(0, 1)$, so its intercept is $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the equation.", "workingLatex": "y = \\tfrac{1}{3}x + 1", "explanation": "Combining the perpendicular gradient and intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Check the right angle.", "workingLatex": "-3 \\times \\tfrac{1}{3} = -1 \\ \\checkmark", "explanation": "The product of gradients is $-1$, confirming perpendicularity.", "diagram": null }
      ],
      "finalAnswer": "$y = \\tfrac{1}{3}x + 1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "checking a point"],
    "questionText": "Find the equation of the line parallel to $y = 5x - 2$ through $(1, 8)$, and hence decide whether the point $(2, 13)$ lies on it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "m = 5", "explanation": "The parallel line has gradient $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the intercept.", "workingLatex": "8 = 5(1) + c \\Rightarrow c = 3", "explanation": "Using $(1, 8)$: $8 = 5 + c$, so $c = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "y = 5x + 3", "explanation": "Combining the gradient and intercept.", "diagram": null },
        { "stepNumber": 4, "description": "Test the point.", "workingLatex": "5(2) + 3 = 13", "explanation": "Substituting $x = 2$ gives $y = 13$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare.", "workingLatex": "13 = 13 \\ \\checkmark", "explanation": "The predicted $y$-value matches the point's $y$-value.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "(2, 13) \\text{ lies on the line}", "explanation": "Since the coordinates satisfy the equation, the point is on the line.", "diagram": null }
      ],
      "finalAnswer": "$y = 5x + 3$; yes, $(2, 13)$ lies on it since $5(2)+3 = 13$."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "coordinate",
    "tags": ["parallel and perpendicular lines", "perpendicular", "foot of perpendicular", "simultaneous"],
    "questionText": "Line $L$ has equation $y = \\tfrac{1}{2}x + 1$. Find the foot of the perpendicular from the point $P(4, 6)$ to $L$ (the point on $L$ closest to $P$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "\\text{line through } P \\perp L,\\ \\text{then intersect}", "explanation": "The closest point is where the perpendicular from $P$ meets $L$, so we build that perpendicular and solve simultaneously.", "diagram": null },
        { "stepNumber": 2, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = -2", "explanation": "The negative reciprocal of $\\tfrac{1}{2}$ is $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular line through $P$.", "workingLatex": "6 = -2(4) + c \\Rightarrow c = 14", "explanation": "Using $P(4, 6)$: the perpendicular is $y = -2x + 14$.", "diagram": null },
        { "stepNumber": 4, "description": "Set the two lines equal.", "workingLatex": "\\tfrac{1}{2}x + 1 = -2x + 14", "explanation": "At the foot, both lines share the same $y$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $x$.", "workingLatex": "\\tfrac{5}{2}x = 13 \\Rightarrow x = \\tfrac{26}{5}", "explanation": "Adding $2x$ and subtracting $1$, then dividing by $\\tfrac{5}{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Find $y$.", "workingLatex": "y = \\tfrac{1}{2}\\left(\\tfrac{26}{5}\\right) + 1 = \\tfrac{13}{5} + 1 = \\tfrac{18}{5}", "explanation": "Substituting $x$ into $L$.", "diagram": null },
        { "stepNumber": 7, "description": "State the foot.", "workingLatex": "\\left(\\tfrac{26}{5}, \\tfrac{18}{5}\\right)", "explanation": "So the foot of the perpendicular is $\\left(\\tfrac{26}{5}, \\tfrac{18}{5}\\right)$.", "diagram": null }
      ],
      "finalAnswer": "$\\left(\\tfrac{26}{5}, \\tfrac{18}{5}\\right)$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "geometry", "right angle", "perpendicular"],
    "questionText": "Triangle $ABC$ has vertices $A(0, 0)$, $B(2, 4)$ and $C(6, 2)$. Show that the angle at $B$ is a right angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "BA \\perp BC \\Leftrightarrow m_{BA} m_{BC} = -1", "explanation": "The angle at $B$ is $90°$ exactly when the two sides meeting at $B$ have gradients multiplying to $-1$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $BA$.", "workingLatex": "m_{BA} = \\dfrac{0 - 4}{0 - 2} = \\dfrac{-4}{-2} = 2", "explanation": "Using $B$ and $A$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $BC$.", "workingLatex": "m_{BC} = \\dfrac{2 - 4}{6 - 2} = \\dfrac{-2}{4} = -\\tfrac{1}{2}", "explanation": "Using $B$ and $C$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the gradients.", "workingLatex": "2 \\times \\left(-\\tfrac{1}{2}\\right) = -1", "explanation": "The product comes out as $-1$.", "diagram": null },
        { "stepNumber": 5, "description": "Conclude.", "workingLatex": "m_{BA} m_{BC} = -1 \\Rightarrow 90°", "explanation": "Since the product is $-1$, the sides $BA$ and $BC$ are perpendicular, so the angle at $B$ is a right angle.", "diagram": null }
      ],
      "finalAnswer": "$m_{BA} = 2$ and $m_{BC} = -\\tfrac{1}{2}$ multiply to $-1$, so the angle at $B$ is $90°$."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "negative reciprocal"],
    "questionText": "A line has gradient $4$. Write down the gradient of a line perpendicular to it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule.", "workingLatex": "m_\\perp = -\\dfrac{1}{m}", "explanation": "The perpendicular gradient is the negative reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "m_\\perp = -\\dfrac{1}{4}", "explanation": "The reciprocal of $4$ is $\\tfrac{1}{4}$, with a negative sign.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "m_\\perp = -\\tfrac{1}{4}", "explanation": "So the perpendicular gradient is $-\\tfrac{1}{4}$.", "diagram": null }
      ],
      "finalAnswer": "$-\\tfrac{1}{4}$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "rearranging", "equation through a point"],
    "questionText": "Find the equation of the line parallel to $4x - 2y = 3$ that passes through the point $(1, 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange to find the gradient.", "workingLatex": "-2y = -4x + 3 \\Rightarrow y = 2x - \\tfrac{3}{2}", "explanation": "Making $y$ the subject reveals the gradient.", "diagram": null },
        { "stepNumber": 2, "description": "Read the gradient.", "workingLatex": "m = 2", "explanation": "The coefficient of $x$ is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the partial equation.", "workingLatex": "y = 2x + c", "explanation": "A parallel line shares this gradient; we find $c$ from the point.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the point.", "workingLatex": "1 = 2(1) + c", "explanation": "Using $(1, 1)$.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $c$.", "workingLatex": "1 = 2 + c \\Rightarrow c = -1", "explanation": "Subtracting $2$ gives the intercept.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "y = 2x - 1", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x - 1$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["parallel and perpendicular lines", "perpendicular", "finding unknown", "rearranging"],
    "questionText": "The line $kx + y = 4$ is perpendicular to the line $2x - 6y = 5$. Find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rearrange the first line.", "workingLatex": "kx + y = 4 \\Rightarrow y = -kx + 4", "explanation": "Making $y$ the subject shows its gradient is $-k$.", "diagram": null },
        { "stepNumber": 2, "description": "Rearrange the second line.", "workingLatex": "2x - 6y = 5 \\Rightarrow y = \\tfrac{1}{3}x - \\tfrac{5}{6}", "explanation": "Dividing by $-6$ after moving $2x$ gives its gradient $\\tfrac{1}{3}$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the perpendicular rule.", "workingLatex": "(-k) \\times \\tfrac{1}{3} = -1", "explanation": "The product of the two gradients must be $-1$.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "-\\tfrac{k}{3} = -1", "explanation": "Multiplying out the left side.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $k$.", "workingLatex": "k = 3", "explanation": "Multiplying both sides by $-3$ gives the value.", "diagram": null }
      ],
      "finalAnswer": "$k = 3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "checking a point"],
    "questionText": "Find the perpendicular bisector of the segment joining $A(1, 1)$ and $B(3, -3)$, and decide whether the point $(0, -1)$ lies on it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the midpoint.", "workingLatex": "M = \\left(\\tfrac{1+3}{2}, \\tfrac{1+(-3)}{2}\\right) = (2, -1)", "explanation": "The bisector passes through the midpoint.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{-3 - 1}{3 - 1} = \\dfrac{-4}{2} = -2", "explanation": "Using the two endpoints.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = \\tfrac{1}{2}", "explanation": "The negative reciprocal of $-2$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the equation.", "workingLatex": "-1 = \\tfrac{1}{2}(2) + c \\Rightarrow c = -2", "explanation": "Using $M(2, -1)$: $-1 = 1 + c$, so $c = -2$; the bisector is $y = \\tfrac{1}{2}x - 2$.", "diagram": null },
        { "stepNumber": 5, "description": "Test the point.", "workingLatex": "\\tfrac{1}{2}(0) - 2 = -2 \\neq -1", "explanation": "At $x = 0$ the line gives $y = -2$, but the point has $y = -1$.", "diagram": null },
        { "stepNumber": 6, "description": "State the conclusion.", "workingLatex": "(0, -1) \\text{ not on the line}", "explanation": "The coordinates do not satisfy the equation, so the point is not on the bisector.", "diagram": null }
      ],
      "finalAnswer": "$y = \\tfrac{1}{2}x - 2$; no, $(0, -1)$ does not lie on it (the line gives $y = -2$ at $x = 0$)."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "parallel", "equation through a point", "negative coordinate"],
    "questionText": "Find the equation of the line parallel to $y = -x + 4$ that passes through the point $(-2, 5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the required gradient.", "workingLatex": "m = -1", "explanation": "The line $y = -x + 4$ has gradient $-1$, and a parallel line copies it.", "diagram": null },
        { "stepNumber": 2, "description": "Write the partial equation.", "workingLatex": "y = -x + c", "explanation": "We find $c$ from the given point.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the point.", "workingLatex": "5 = -(-2) + c", "explanation": "Using $(-2, 5)$; note $-(-2) = 2$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "5 = 2 + c \\Rightarrow c = 3", "explanation": "Subtracting $2$ gives the intercept.", "diagram": null },
        { "stepNumber": 5, "description": "Write the equation.", "workingLatex": "y = -x + 3", "explanation": "This is the required parallel line.", "diagram": null }
      ],
      "finalAnswer": "$y = -x + 3$"
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "text",
    "tags": ["parallel and perpendicular lines", "geometry", "square", "reasoning"],
    "questionText": "A quadrilateral has vertices $A(1, 1)$, $B(4, 2)$, $C(3, 5)$ and $D(0, 4)$. Using gradients and the fact that all sides have equal length, explain why $ABCD$ is a square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State what a square needs.", "workingLatex": "\\text{equal sides} + \\text{right angles}", "explanation": "A square has four equal sides and right angles at each corner, so we test gradients for right angles (equal lengths are given).", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{2 - 1}{4 - 1} = \\tfrac{1}{3}", "explanation": "Using $A$ and $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the gradient of $BC$.", "workingLatex": "m_{BC} = \\dfrac{5 - 2}{3 - 4} = \\dfrac{3}{-1} = -3", "explanation": "Using $B$ and $C$.", "diagram": null },
        { "stepNumber": 4, "description": "Test the corner at $B$.", "workingLatex": "\\tfrac{1}{3} \\times (-3) = -1", "explanation": "Adjacent sides $AB$ and $BC$ multiply to $-1$, so they are perpendicular.", "diagram": null },
        { "stepNumber": 5, "description": "Note the opposite sides.", "workingLatex": "m_{DC} = \\tfrac{1}{3},\\ m_{AD} = -3", "explanation": "Opposite sides share gradients, so $AB \\parallel DC$ and $BC \\parallel AD$: it is a parallelogram with a right angle.", "diagram": null },
        { "stepNumber": 6, "description": "Combine with equal lengths.", "workingLatex": "\\text{rectangle} + \\text{equal sides} = \\text{square}", "explanation": "A right-angled parallelogram is a rectangle, and equal side lengths make it a square.", "diagram": null }
      ],
      "finalAnswer": "Adjacent sides are perpendicular ($\\tfrac{1}{3}\\times -3 = -1$) and opposite sides parallel, giving a rectangle; with equal side lengths it is a square."
    }
  },
  {
    "id": "gcse.algebra.parallel-perp.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Parallel and perpendicular lines",
    "subtopicId": "gcse.algebra.parallel-perp",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["parallel and perpendicular lines", "perpendicular", "two points", "equation through a point", "multi-step"],
    "questionText": "The points $A(-1, 2)$ and $B(5, -1)$ are given. Find the equation of the line through $A$ that is perpendicular to $AB$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the strategy.", "workingLatex": "\\text{gradient of } AB \\to \\perp \\text{ gradient} \\to \\text{line through } A", "explanation": "We first find the gradient of $AB$, take its negative reciprocal, then use point $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Find the gradient of $AB$.", "workingLatex": "m_{AB} = \\dfrac{-1 - 2}{5 - (-1)} = \\dfrac{-3}{6} = -\\tfrac{1}{2}", "explanation": "The run is $5 - (-1) = 6$ and the rise is $-3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the perpendicular gradient.", "workingLatex": "m_\\perp = 2", "explanation": "The negative reciprocal of $-\\tfrac{1}{2}$ is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the partial equation.", "workingLatex": "y = 2x + c", "explanation": "We use point $A$ to find $c$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute $A$.", "workingLatex": "2 = 2(-1) + c", "explanation": "Using $A(-1, 2)$; note $2 \\times (-1) = -2$.", "diagram": null },
        { "stepNumber": 6, "description": "Solve for $c$.", "workingLatex": "2 = -2 + c \\Rightarrow c = 4", "explanation": "Adding $2$ to both sides gives the intercept.", "diagram": null },
        { "stepNumber": 7, "description": "Write the equation.", "workingLatex": "y = 2x + 4", "explanation": "This line passes through $A$ at right angles to $AB$.", "diagram": null }
      ],
      "finalAnswer": "$y = 2x + 4$"
    }
  }
];
