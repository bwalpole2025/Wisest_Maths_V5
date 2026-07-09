import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.rearranging.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $x$ the subject of $y = x + 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = x + 5", "explanation": "We want $x$ on its own, so we must undo what is done to it.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $x$.", "workingLatex": "x + 5", "explanation": "The variable $x$ has $5$ added to it.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{subtract } 5", "explanation": "The opposite of adding $5$ is subtracting $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "y - 5 = x + 5 - 5", "explanation": "Doing the same to both sides keeps the formula balanced.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "y - 5 = x", "explanation": "The $+5$ and $-5$ cancel, leaving $x$ alone.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = y - 5", "explanation": "Written with the subject first, $x = y - 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = y - 5$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $x$ the subject of $y = x - 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = x - 7", "explanation": "We want $x$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $x$.", "workingLatex": "x - 7", "explanation": "The variable $x$ has $7$ subtracted from it.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{add } 7", "explanation": "The opposite of subtracting $7$ is adding $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "y + 7 = x - 7 + 7", "explanation": "Add $7$ to both sides to keep balance.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "y + 7 = x", "explanation": "The $-7$ and $+7$ cancel, leaving $x$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = y + 7", "explanation": "Written subject first, $x = y + 7$.", "diagram": null }
      ],
      "finalAnswer": "$x = y + 7$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $x$ the subject of $y = 4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 4x", "explanation": "We want $x$ alone.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $x$.", "workingLatex": "4x = 4 \\times x", "explanation": "The variable $x$ is multiplied by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } 4", "explanation": "The opposite of multiplying by $4$ is dividing by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{y}{4} = \\frac{4x}{4}", "explanation": "Divide both sides by $4$ to keep balance.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "\\frac{y}{4} = x", "explanation": "The $4$'s cancel, leaving $x$ alone.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{y}{4}", "explanation": "Written subject first, $x = \\dfrac{y}{4}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y}{4}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = \\frac{x}{3}", "explanation": "We want $x$ alone.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $x$.", "workingLatex": "\\frac{x}{3}", "explanation": "The variable $x$ is divided by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{multiply by } 3", "explanation": "The opposite of dividing by $3$ is multiplying by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "3y = 3 \\times \\frac{x}{3}", "explanation": "Multiply both sides by $3$ to keep balance.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "3y = x", "explanation": "The multiply and divide by $3$ cancel, leaving $x$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = 3y", "explanation": "Written subject first, $x = 3y$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3y$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 2x + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 2x + 3", "explanation": "Two operations act on $x$: multiply by $2$, then add $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } 3", "explanation": "Reverse the last operation applied, which is the $+3$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y - 3 = 2x", "explanation": "Subtracting $3$ removes the constant term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 2", "explanation": "Now reverse the multiply by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{y - 3}{2} = x", "explanation": "Divide the whole side by $2$, keeping it as one fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{y - 3}{2}", "explanation": "Written subject first, $x = \\dfrac{y - 3}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y - 3}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 5x - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 5x - 2", "explanation": "Two operations act on $x$: multiply by $5$, then subtract $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the subtraction first.", "workingLatex": "\\text{add } 2", "explanation": "Reverse the last operation, the $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y + 2 = 5x", "explanation": "Adding $2$ removes the constant term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 5", "explanation": "Now reverse the multiply by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{y + 2}{5} = x", "explanation": "Divide the whole side by $5$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{y + 2}{5}", "explanation": "Written subject first, $x = \\dfrac{y + 2}{5}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y + 2}{5}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x}{2} + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = \\frac{x}{2} + 4", "explanation": "Two operations act on $x$: divide by $2$, then add $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } 4", "explanation": "Reverse the last operation, the $+4$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y - 4 = \\frac{x}{2}", "explanation": "Subtracting $4$ removes the constant term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the division.", "workingLatex": "\\text{multiply by } 2", "explanation": "Now reverse the divide by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "2(y - 4) = x", "explanation": "Multiply the whole side by $2$, keeping the bracket.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = 2(y - 4)", "explanation": "Written subject first, $x = 2(y - 4)$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2(y - 4)$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $a$ the subject of $v = u + a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "v = u + a", "explanation": "We want $a$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $a$.", "workingLatex": "u + a", "explanation": "The term $u$ is added to $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{subtract } u", "explanation": "The opposite of adding $u$ is subtracting $u$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "v - u = u + a - u", "explanation": "Subtract $u$ from both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "v - u = a", "explanation": "The $u$ terms cancel, leaving $a$ alone.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a = v - u", "explanation": "Written subject first, $a = v - u$.", "diagram": null }
      ],
      "finalAnswer": "$a = v - u$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "formula"],
    "questionText": "The perimeter of a square is $P = 4L$. Make $L$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "P = 4L", "explanation": "We want the side length $L$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $L$.", "workingLatex": "4L = 4 \\times L", "explanation": "The side $L$ is multiplied by $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } 4", "explanation": "The opposite of multiplying by $4$ is dividing by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{P}{4} = \\frac{4L}{4}", "explanation": "Divide both sides by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "\\frac{P}{4} = L", "explanation": "The $4$'s cancel, leaving $L$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "L = \\frac{P}{4}", "explanation": "So the side length is $L = \\dfrac{P}{4}$.", "diagram": null }
      ],
      "finalAnswer": "$L = \\dfrac{P}{4}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 3x - 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 3x - 1", "explanation": "Two operations act on $x$: multiply by $3$, then subtract $1$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the subtraction first.", "workingLatex": "\\text{add } 1", "explanation": "Reverse the last operation, the $-1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y + 1 = 3x", "explanation": "Adding $1$ removes the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 3", "explanation": "Now reverse the multiply by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{y + 1}{3} = x", "explanation": "Divide the whole side by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{y + 1}{3}", "explanation": "Written subject first, $x = \\dfrac{y + 1}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y + 1}{3}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $r$ the subject of $C = 2\\pi r$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "C = 2\\pi r", "explanation": "We want the radius $r$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $r$.", "workingLatex": "2\\pi r = 2\\pi \\times r", "explanation": "The radius is multiplied by the constant $2\\pi$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } 2\\pi", "explanation": "The opposite of multiplying by $2\\pi$ is dividing by $2\\pi$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{C}{2\\pi} = \\frac{2\\pi r}{2\\pi}", "explanation": "Divide both sides by $2\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "\\frac{C}{2\\pi} = r", "explanation": "The $2\\pi$'s cancel, leaving $r$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "r = \\frac{C}{2\\pi}", "explanation": "So the radius is $r = \\dfrac{C}{2\\pi}$.", "diagram": null }
      ],
      "finalAnswer": "$r = \\dfrac{C}{2\\pi}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 6 - x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 6 - x", "explanation": "Here $x$ is being subtracted, so we first move it to make it positive.", "diagram": null },
        { "stepNumber": 2, "description": "Add $x$ to both sides.", "workingLatex": "y + x = 6", "explanation": "This makes the $x$ term positive and easier to isolate.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $y$ from both sides.", "workingLatex": "x = 6 - y", "explanation": "Now move $y$ across to leave $x$ alone.", "diagram": null },
        { "stepNumber": 4, "description": "Check the result.", "workingLatex": "y = 6 - (6 - y) = y", "explanation": "Substituting back returns the original, confirming the rearrangement.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = 6 - y", "explanation": "So $x = 6 - y$.", "diagram": null }
      ],
      "finalAnswer": "$x = 6 - y$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "formula"],
    "questionText": "The formula for distance is $d = st$. Make $s$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "d = st", "explanation": "We want the speed $s$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $s$.", "workingLatex": "st = s \\times t", "explanation": "The speed $s$ is multiplied by the time $t$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } t", "explanation": "The opposite of multiplying by $t$ is dividing by $t$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{d}{t} = \\frac{st}{t}", "explanation": "Divide both sides by $t$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the right side.", "workingLatex": "\\frac{d}{t} = s", "explanation": "The $t$'s cancel, leaving $s$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "s = \\frac{d}{t}", "explanation": "So speed is $s = \\dfrac{d}{t}$.", "diagram": null }
      ],
      "finalAnswer": "$s = \\dfrac{d}{t}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x + 5}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = \\frac{x + 5}{2}", "explanation": "The whole expression $x+5$ is divided by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the division first.", "workingLatex": "\\text{multiply by } 2", "explanation": "Clear the fraction by multiplying both sides by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "2y = x + 5", "explanation": "The $2$ cancels the denominator on the right.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the addition.", "workingLatex": "\\text{subtract } 5", "explanation": "Now remove the $+5$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "2y - 5 = x", "explanation": "Subtracting $5$ leaves $x$ alone.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = 2y - 5", "explanation": "So $x = 2y - 5$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2y - 5$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $b$ the subject of $A = a + b + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "A = a + b + c", "explanation": "We want $b$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the extra terms.", "workingLatex": "a \\text{ and } c", "explanation": "Both $a$ and $c$ are added to $b$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $a$ from both sides.", "workingLatex": "A - a = b + c", "explanation": "Remove the first extra term.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $c$ from both sides.", "workingLatex": "A - a - c = b", "explanation": "Remove the second extra term.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "b = A - a - c", "explanation": "So $b = A - a - c$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "a + (A - a - c) + c = A", "explanation": "Adding the three terms back gives $A$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$b = A - a - c$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 10 - 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 10 - 2x", "explanation": "The $x$ term is negative, so we move it first.", "diagram": null },
        { "stepNumber": 2, "description": "Add $2x$ to both sides.", "workingLatex": "y + 2x = 10", "explanation": "This makes the $x$ term positive.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $y$ from both sides.", "workingLatex": "2x = 10 - y", "explanation": "Move $y$ across to isolate the $x$ term.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $2$.", "workingLatex": "x = \\frac{10 - y}{2}", "explanation": "Undo the multiply by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = \\frac{10 - y}{2}", "explanation": "So $x = \\dfrac{10 - y}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{10 - y}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "formula"],
    "questionText": "The area of a rectangle is $A = bh$. Make $h$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "A = bh", "explanation": "We want the height $h$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $h$.", "workingLatex": "bh = b \\times h", "explanation": "The height $h$ is multiplied by the base $b$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } b", "explanation": "The opposite of multiplying by $b$ is dividing by $b$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{A}{b} = h", "explanation": "Divide both sides by $b$; the $b$'s cancel on the right.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "h = \\frac{A}{b}", "explanation": "So the height is $h = \\dfrac{A}{b}$.", "diagram": null }
      ],
      "finalAnswer": "$h = \\dfrac{A}{b}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x}{5} - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = \\frac{x}{5} - 2", "explanation": "Two operations act on $x$: divide by $5$, then subtract $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the subtraction first.", "workingLatex": "\\text{add } 2", "explanation": "Reverse the last operation, the $-2$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y + 2 = \\frac{x}{5}", "explanation": "Adding $2$ removes the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the division.", "workingLatex": "\\text{multiply by } 5", "explanation": "Now reverse the divide by $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "5(y + 2) = x", "explanation": "Multiply the whole side by $5$, keeping the bracket.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = 5(y + 2)", "explanation": "So $x = 5(y + 2)$.", "diagram": null }
      ],
      "finalAnswer": "$x = 5(y + 2)$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "inverse operations"],
    "questionText": "Make $m$ the subject of $E = mc$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "E = mc", "explanation": "We want $m$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $m$.", "workingLatex": "mc = m \\times c", "explanation": "The variable $m$ is multiplied by $c$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } c", "explanation": "The opposite of multiplying by $c$ is dividing by $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{E}{c} = m", "explanation": "Divide both sides by $c$; the $c$'s cancel on the right.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "m = \\frac{E}{c}", "explanation": "So $m = \\dfrac{E}{c}$.", "diagram": null }
      ],
      "finalAnswer": "$m = \\dfrac{E}{c}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = 7x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = 7x + 4", "explanation": "Two operations act on $x$: multiply by $7$, then add $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } 4", "explanation": "Reverse the last operation, the $+4$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y - 4 = 7x", "explanation": "Subtracting $4$ removes the constant.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 7", "explanation": "Now reverse the multiply by $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{y - 4}{7} = x", "explanation": "Divide the whole side by $7$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{y - 4}{7}", "explanation": "So $x = \\dfrac{y - 4}{7}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y - 4}{7}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "formula"],
    "questionText": "The formula $V = IR$ links voltage, current and resistance. Make $R$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "V = IR", "explanation": "We want the resistance $R$ on its own.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $R$.", "workingLatex": "IR = I \\times R", "explanation": "The resistance $R$ is multiplied by the current $I$.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{divide by } I", "explanation": "The opposite of multiplying by $I$ is dividing by $I$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{V}{I} = R", "explanation": "Divide both sides by $I$; the $I$'s cancel on the right.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "R = \\frac{V}{I}", "explanation": "So resistance is $R = \\dfrac{V}{I}$.", "diagram": null }
      ],
      "finalAnswer": "$R = \\dfrac{V}{I}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $2y = x + 8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "2y = x + 8", "explanation": "The subject $x$ is on the right with $8$ added.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the operation on $x$.", "workingLatex": "x + 8", "explanation": "The variable $x$ has $8$ added to it.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the inverse.", "workingLatex": "\\text{subtract } 8", "explanation": "Undo the $+8$ by subtracting $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "2y - 8 = x", "explanation": "Subtract $8$ from both sides.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = 2y - 8", "explanation": "So $x = 2y - 8$.", "diagram": null }
      ],
      "finalAnswer": "$x = 2y - 8$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{2x}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "y = \\frac{2x}{3}", "explanation": "The variable $x$ is multiplied by $2$ then divided by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the fraction.", "workingLatex": "3y = 2x", "explanation": "Multiply both sides by $3$ to remove the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 2", "explanation": "Now reverse the multiply by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{3y}{2} = x", "explanation": "Divide both sides by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = \\frac{3y}{2}", "explanation": "So $x = \\dfrac{3y}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{3y}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "two steps"],
    "questionText": "Make $t$ the subject of $v = u + 10t$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "v = u + 10t", "explanation": "We want $t$ on its own; it is multiplied by $10$ and has $u$ added.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } u", "explanation": "Remove the added term $u$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "v - u = 10t", "explanation": "Subtracting $u$ isolates the $t$ term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 10", "explanation": "Now reverse the multiply by $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{v - u}{10} = t", "explanation": "Divide the whole side by $10$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "t = \\frac{v - u}{10}", "explanation": "So $t = \\dfrac{v - u}{10}$.", "diagram": null }
      ],
      "finalAnswer": "$t = \\dfrac{v - u}{10}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "brackets", "change of subject"],
    "questionText": "Make $x$ the subject of $y = 3(x + 2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the structure.", "workingLatex": "y = 3(x + 2)", "explanation": "The bracket $(x+2)$ is multiplied by $3$. There are two natural routes; we divide first.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $3$.", "workingLatex": "\\frac{y}{3} = x + 2", "explanation": "Undo the multiplication by $3$ to free the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the remaining operation.", "workingLatex": "x + 2", "explanation": "Now $x$ only has $2$ added to it.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $2$ from both sides.", "workingLatex": "\\frac{y}{3} - 2 = x", "explanation": "Undo the $+2$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the subject first.", "workingLatex": "x = \\frac{y}{3} - 2", "explanation": "State the rearranged formula.", "diagram": null },
        { "stepNumber": 6, "description": "Alternative single-fraction form.", "workingLatex": "x = \\frac{y - 6}{3}", "explanation": "Writing over a common denominator gives an equivalent tidy form.", "diagram": null },
        { "stepNumber": 7, "description": "Check by expanding.", "workingLatex": "3\\left(\\frac{y-6}{3} + 2\\right) = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{y - 6}{3}", "explanation": "So $x = \\dfrac{y-6}{3}$ (or equivalently $\\tfrac{y}{3}-2$).", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y - 6}{3}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{4}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note $x$ is in the denominator.", "workingLatex": "y = \\frac{4}{x}", "explanation": "The subject is underneath, so first bring it up by multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $x$.", "workingLatex": "xy = 4", "explanation": "This clears the fraction and puts $x$ on the top.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the operation on $x$.", "workingLatex": "xy = x \\times y", "explanation": "Now $x$ is multiplied by $y$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $y$.", "workingLatex": "x = \\frac{4}{y}", "explanation": "Undo the multiply by $y$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Observe the symmetry.", "workingLatex": "y = \\frac{4}{x} \\iff x = \\frac{4}{y}", "explanation": "The formula is symmetric, which is a nice sense check.", "diagram": null },
        { "stepNumber": 6, "description": "Check with numbers.", "workingLatex": "y = 2 \\Rightarrow x = 2", "explanation": "If $y=2$ then $x=2$, and indeed $\\tfrac{4}{2}=2$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{4}{y}", "explanation": "So $x = \\dfrac{4}{y}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{4}{y}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "change of subject"],
    "questionText": "Make $x$ the subject of $y = x^{2} + 1$ (for $x \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operations on $x$.", "workingLatex": "y = x^{2} + 1", "explanation": "The variable is squared, then $1$ is added.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } 1", "explanation": "Reverse the last operation, the $+1$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y - 1 = x^{2}", "explanation": "Subtracting $1$ isolates the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\sqrt{y - 1} = x", "explanation": "Root the whole side; since $x \\geq 0$ we take the positive root.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\sqrt{y - 1}", "explanation": "So $x = \\sqrt{y - 1}$.", "diagram": null },
        { "stepNumber": 7, "description": "Check by squaring.", "workingLatex": "(\\sqrt{y-1})^{2} + 1 = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{y - 1}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "roots", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\sqrt{x} + 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operations on $x$.", "workingLatex": "y = \\sqrt{x} + 3", "explanation": "The variable is square-rooted, then $3$ is added.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } 3", "explanation": "Reverse the last operation, the $+3$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "y - 3 = \\sqrt{x}", "explanation": "This isolates the square root term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the square root.", "workingLatex": "\\text{square both sides}", "explanation": "The inverse of a square root is squaring.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "(y - 3)^{2} = x", "explanation": "Square the whole left side, keeping it in a bracket.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = (y - 3)^{2}", "explanation": "So $x = (y - 3)^2$.", "diagram": null },
        { "stepNumber": 7, "description": "Check by rooting.", "workingLatex": "\\sqrt{(y-3)^{2}} + 3 = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = (y - 3)^{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "brackets", "change of subject"],
    "questionText": "Make $x$ the subject of $y = 2(x - 5) + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the outer addition.", "workingLatex": "y - 1 = 2(x - 5)", "explanation": "Subtract $1$ from both sides to peel off the constant.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the multiplication.", "workingLatex": "\\frac{y - 1}{2} = x - 5", "explanation": "Divide both sides by $2$ to free the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the last operation.", "workingLatex": "x - 5", "explanation": "Now $x$ only has $5$ subtracted.", "diagram": null },
        { "stepNumber": 4, "description": "Add $5$ to both sides.", "workingLatex": "\\frac{y - 1}{2} + 5 = x", "explanation": "Undo the $-5$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the subject first.", "workingLatex": "x = \\frac{y - 1}{2} + 5", "explanation": "State the rearranged formula.", "diagram": null },
        { "stepNumber": 6, "description": "Optional single fraction.", "workingLatex": "x = \\frac{y + 9}{2}", "explanation": "Combining over a common denominator gives an equivalent tidy form.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{y + 9}{2}", "explanation": "So $x = \\dfrac{y+9}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y + 9}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x + 1}{x}$... instead, make $r$ the subject of $A = \\pi r^{2}$ (for $r \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operations on $r$.", "workingLatex": "A = \\pi r^{2}", "explanation": "The radius is squared, then multiplied by $\\pi$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the multiplication first.", "workingLatex": "\\text{divide by } \\pi", "explanation": "Reverse the multiply by $\\pi$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "\\frac{A}{\\pi} = r^{2}", "explanation": "This isolates the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\sqrt{\\frac{A}{\\pi}} = r", "explanation": "Root the whole side; a radius is positive so we take the positive root.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "r = \\sqrt{\\frac{A}{\\pi}}", "explanation": "So $r = \\sqrt{\\dfrac{A}{\\pi}}$.", "diagram": null },
        { "stepNumber": 7, "description": "Check by squaring.", "workingLatex": "\\pi\\left(\\sqrt{\\tfrac{A}{\\pi}}\\right)^{2} = A", "explanation": "Substituting back returns $A$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$r = \\sqrt{\\dfrac{A}{\\pi}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{5}{x + 2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note $x$ is in the denominator.", "workingLatex": "y = \\frac{5}{x + 2}", "explanation": "First clear the fraction by multiplying up.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply both sides by $(x+2)$.", "workingLatex": "y(x + 2) = 5", "explanation": "This removes the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by $y$.", "workingLatex": "x + 2 = \\frac{5}{y}", "explanation": "Isolate the bracket by dividing by $y$.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the last operation.", "workingLatex": "x + 2", "explanation": "Now $x$ only has $2$ added.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract $2$ from both sides.", "workingLatex": "x = \\frac{5}{y} - 2", "explanation": "Undo the $+2$ to isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Optional single fraction.", "workingLatex": "x = \\frac{5 - 2y}{y}", "explanation": "Writing over the common denominator $y$ gives a tidy equivalent form.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{5 - 2y}{y}", "explanation": "So $x = \\dfrac{5 - 2y}{y}$ (or $\\tfrac{5}{y}-2$).", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{5 - 2y}{y}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "formula", "change of subject"],
    "questionText": "The formula $v = u + at$ gives final velocity. Make $a$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "v = u + at", "explanation": "We want $a$ on its own; it is multiplied by $t$ with $u$ added.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "\\text{subtract } u", "explanation": "Remove the added term $u$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "v - u = at", "explanation": "Subtracting $u$ isolates the $at$ term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } t", "explanation": "Now reverse the multiply by $t$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\frac{v - u}{t} = a", "explanation": "Divide the whole side by $t$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "a = \\frac{v - u}{t}", "explanation": "So acceleration is $a = \\dfrac{v - u}{t}$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check.", "workingLatex": "u + \\frac{v-u}{t}\\times t = v", "explanation": "Substituting back returns $v$, confirming the rearrangement.", "diagram": null }
      ],
      "finalAnswer": "$a = \\dfrac{v - u}{t}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "change of subject"],
    "questionText": "Make $x$ the subject of $y = 2x^{2}$ (for $x \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operations on $x$.", "workingLatex": "y = 2x^{2}", "explanation": "The variable is squared, then multiplied by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the multiplication first.", "workingLatex": "\\text{divide by } 2", "explanation": "Reverse the multiply by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "\\frac{y}{2} = x^{2}", "explanation": "This isolates the squared term.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "\\sqrt{\\frac{y}{2}} = x", "explanation": "Root the whole side; since $x \\geq 0$ take the positive root.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\sqrt{\\frac{y}{2}}", "explanation": "So $x = \\sqrt{\\dfrac{y}{2}}$.", "diagram": null },
        { "stepNumber": 7, "description": "Check by squaring.", "workingLatex": "2\\left(\\sqrt{\\tfrac{y}{2}}\\right)^{2} = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{\\dfrac{y}{2}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x - 4}{3} + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the outer addition.", "workingLatex": "y - 2 = \\frac{x - 4}{3}", "explanation": "Subtract $2$ from both sides to peel off the constant.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the fraction.", "workingLatex": "3(y - 2) = x - 4", "explanation": "Multiply both sides by $3$ to remove the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the last operation.", "workingLatex": "x - 4", "explanation": "Now $x$ only has $4$ subtracted.", "diagram": null },
        { "stepNumber": 4, "description": "Add $4$ to both sides.", "workingLatex": "3(y - 2) + 4 = x", "explanation": "Undo the $-4$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Expand the bracket.", "workingLatex": "3y - 6 + 4 = x", "explanation": "Multiply out to simplify.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the constants.", "workingLatex": "3y - 2 = x", "explanation": "Combine $-6 + 4 = -2$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = 3y - 2", "explanation": "So $x = 3y - 2$.", "diagram": null }
      ],
      "finalAnswer": "$x = 3y - 2$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "formula", "fractions"],
    "questionText": "The area of a triangle is $A = \\dfrac{1}{2}bh$. Make $h$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the subject.", "workingLatex": "A = \\frac{1}{2}bh", "explanation": "We want the height $h$; it is multiplied by $b$ and by $\\tfrac12$.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the fraction.", "workingLatex": "2A = bh", "explanation": "Multiply both sides by $2$ to remove the half.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the operation on $h$.", "workingLatex": "bh = b \\times h", "explanation": "The height is multiplied by the base $b$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide both sides by $b$.", "workingLatex": "\\frac{2A}{b} = h", "explanation": "Undo the multiply by $b$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "h = \\frac{2A}{b}", "explanation": "So the height is $h = \\dfrac{2A}{b}$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "\\frac{1}{2}b \\times \\frac{2A}{b} = A", "explanation": "Substituting back returns $A$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$h = \\dfrac{2A}{b}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "roots", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\sqrt{x + 1} - 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the subtraction first.", "workingLatex": "y + 2 = \\sqrt{x + 1}", "explanation": "Add $2$ to both sides to isolate the square root.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the square root.", "workingLatex": "\\text{square both sides}", "explanation": "The inverse of a square root is squaring.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "(y + 2)^{2} = x + 1", "explanation": "Square the left side, keeping it in a bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the last operation.", "workingLatex": "x + 1", "explanation": "Now $x$ only has $1$ added.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract $1$ from both sides.", "workingLatex": "(y + 2)^{2} - 1 = x", "explanation": "Undo the $+1$ to isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = (y + 2)^{2} - 1", "explanation": "So $x = (y+2)^2 - 1$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check.", "workingLatex": "\\sqrt{(y+2)^{2} - 1 + 1} - 2 = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = (y + 2)^{2} - 1$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "formula"],
    "questionText": "The formula $F = \\dfrac{9}{5}C + 32$ converts Celsius to Fahrenheit. Make $C$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the operations on $C$.", "workingLatex": "F = \\frac{9}{5}C + 32", "explanation": "$C$ is multiplied by $\\tfrac95$, then $32$ is added.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition first.", "workingLatex": "F - 32 = \\frac{9}{5}C", "explanation": "Subtract $32$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the multiplication.", "workingLatex": "\\text{multiply by } \\frac{5}{9}", "explanation": "The inverse of multiplying by $\\tfrac95$ is multiplying by $\\tfrac59$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{5}{9}(F - 32) = C", "explanation": "Multiply the whole side by $\\tfrac59$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the subject first.", "workingLatex": "C = \\frac{5}{9}(F - 32)", "explanation": "State the rearranged formula.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check with a value.", "workingLatex": "F = 32 \\Rightarrow C = 0", "explanation": "At $32^{\\circ}$F we get $0^{\\circ}$C, the freezing point, as expected.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "C = \\frac{5}{9}(F - 32)", "explanation": "So $C = \\dfrac{5}{9}(F - 32)$.", "diagram": null }
      ],
      "finalAnswer": "$C = \\dfrac{5}{9}(F - 32)$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{2x + 1}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "5y = 2x + 1", "explanation": "Multiply both sides by $5$ to remove the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the addition.", "workingLatex": "5y - 1 = 2x", "explanation": "Subtract $1$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the multiplication.", "workingLatex": "\\text{divide by } 2", "explanation": "Reverse the multiply by $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\frac{5y - 1}{2} = x", "explanation": "Divide the whole side by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = \\frac{5y - 1}{2}", "explanation": "So $x = \\dfrac{5y - 1}{2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "\\frac{2\\left(\\frac{5y-1}{2}\\right)+1}{5} = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{5y - 1}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "roots"],
    "questionText": "Make $r$ the subject of $V = \\dfrac{4}{3}\\pi r^{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "3V = 4\\pi r^{3}", "explanation": "Multiply both sides by $3$ to remove the third.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the multiplication by $4\\pi$.", "workingLatex": "\\frac{3V}{4\\pi} = r^{3}", "explanation": "Divide both sides by $4\\pi$ to isolate the cube.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the cube.", "workingLatex": "\\text{take the cube root}", "explanation": "The inverse of cubing is the cube root.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\sqrt[3]{\\frac{3V}{4\\pi}} = r", "explanation": "Cube-root the whole side.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "r = \\sqrt[3]{\\frac{3V}{4\\pi}}", "explanation": "So $r = \\sqrt[3]{\\dfrac{3V}{4\\pi}}$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check the structure.", "workingLatex": "\\frac{4}{3}\\pi r^{3} = V", "explanation": "Cubing the answer and substituting back returns $V$, confirming it.", "diagram": null }
      ],
      "finalAnswer": "$r = \\sqrt[3]{\\dfrac{3V}{4\\pi}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "brackets", "change of subject"],
    "questionText": "Make $x$ the subject of $y = a(x + b)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the structure.", "workingLatex": "y = a(x + b)", "explanation": "The bracket is multiplied by $a$; divide first to free it.", "diagram": null },
        { "stepNumber": 2, "description": "Divide both sides by $a$.", "workingLatex": "\\frac{y}{a} = x + b", "explanation": "Undo the multiplication by $a$.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the last operation.", "workingLatex": "x + b", "explanation": "Now $x$ only has $b$ added.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $b$ from both sides.", "workingLatex": "\\frac{y}{a} - b = x", "explanation": "Undo the $+b$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the subject first.", "workingLatex": "x = \\frac{y}{a} - b", "explanation": "State the rearranged formula.", "diagram": null },
        { "stepNumber": 6, "description": "Optional single fraction.", "workingLatex": "x = \\frac{y - ab}{a}", "explanation": "Combining over the common denominator $a$ gives a tidy equivalent form.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{y - ab}{a}", "explanation": "So $x = \\dfrac{y - ab}{a}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y - ab}{a}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $u$ the subject of $\\dfrac{1}{u} + \\dfrac{1}{v} = \\dfrac{1}{f}$... instead, make $x$ the subject of $y = \\dfrac{x}{x - 1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "y(x - 1) = x", "explanation": "Multiply both sides by $(x-1)$ to remove the denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the bracket.", "workingLatex": "yx - y = x", "explanation": "Multiply $y$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms.", "workingLatex": "yx - x = y", "explanation": "Move all terms containing $x$ to one side and the rest to the other.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(y - 1) = y", "explanation": "Take $x$ out as a common factor from the left.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(y - 1)$.", "workingLatex": "x = \\frac{y}{y - 1}", "explanation": "Isolate $x$ by dividing by its bracket.", "diagram": null },
        { "stepNumber": 6, "description": "Note the symmetry.", "workingLatex": "y = \\frac{x}{x-1} \\iff x = \\frac{y}{y-1}", "explanation": "The formula is self-inverse, a neat check.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{y}{y - 1}", "explanation": "So $x = \\dfrac{y}{y - 1}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y}{y - 1}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "formula", "squares"],
    "questionText": "The kinetic energy formula is $E = \\dfrac{1}{2}mv^{2}$. Make $v$ the subject (for $v \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "2E = mv^{2}", "explanation": "Multiply both sides by $2$ to remove the half.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the multiplication by $m$.", "workingLatex": "\\frac{2E}{m} = v^{2}", "explanation": "Divide both sides by $m$ to isolate the square.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "\\sqrt{\\frac{2E}{m}} = v", "explanation": "Root the whole side; speed is positive so take the positive root.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "v = \\sqrt{\\frac{2E}{m}}", "explanation": "So $v = \\sqrt{\\dfrac{2E}{m}}$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "\\frac{1}{2}m\\left(\\sqrt{\\tfrac{2E}{m}}\\right)^{2} = E", "explanation": "Substituting back returns $E$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$v = \\sqrt{\\dfrac{2E}{m}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "change of subject", "negative subject"],
    "questionText": "Make $x$ the subject of $2y - 3 = 5 - 4x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Move the $x$ term to be positive.", "workingLatex": "2y - 3 + 4x = 5", "explanation": "Add $4x$ to both sides so the $x$ term is positive.", "diagram": null },
        { "stepNumber": 2, "description": "Isolate the $x$ term.", "workingLatex": "4x = 5 - 2y + 3", "explanation": "Move the other terms to the right side.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the constants.", "workingLatex": "4x = 8 - 2y", "explanation": "Combine $5 + 3 = 8$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $4$.", "workingLatex": "x = \\frac{8 - 2y}{4}", "explanation": "Undo the multiply by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the fraction.", "workingLatex": "x = \\frac{4 - y}{2}", "explanation": "Divide numerator and denominator by the common factor $2$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{4 - y}{2}", "explanation": "So $x = \\dfrac{4 - y}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{4 - y}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "roots", "change of subject"],
    "questionText": "Make $x$ the subject of $y = 2\\sqrt{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the multiplication first.", "workingLatex": "\\frac{y}{2} = \\sqrt{x}", "explanation": "Divide both sides by $2$ to isolate the root.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the square root.", "workingLatex": "\\text{square both sides}", "explanation": "The inverse of a square root is squaring.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "\\left(\\frac{y}{2}\\right)^{2} = x", "explanation": "Square the whole left side.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the square.", "workingLatex": "\\frac{y^{2}}{4} = x", "explanation": "Squaring top and bottom gives $\\dfrac{y^2}{4}$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = \\frac{y^{2}}{4}", "explanation": "So $x = \\dfrac{y^2}{4}$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "2\\sqrt{\\tfrac{y^{2}}{4}} = 2 \\times \\tfrac{y}{2} = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y^{2}}{4}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "formula"],
    "questionText": "Make $b$ the subject of $A = \\dfrac{(a + b)}{2}h$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Rewrite clearly.", "workingLatex": "A = \\frac{(a + b)h}{2}", "explanation": "This is the trapezium area formula with parallel sides $a$ and $b$.", "diagram": null },
        { "stepNumber": 2, "description": "Clear the fraction.", "workingLatex": "2A = (a + b)h", "explanation": "Multiply both sides by $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $h$.", "workingLatex": "\\frac{2A}{h} = a + b", "explanation": "Undo the multiply by $h$ to free the bracket.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $a$.", "workingLatex": "\\frac{2A}{h} - a = b", "explanation": "Remove the $a$ to leave $b$ alone.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "b = \\frac{2A}{h} - a", "explanation": "So $b = \\dfrac{2A}{h} - a$.", "diagram": null },
        { "stepNumber": 6, "description": "Optional single fraction.", "workingLatex": "b = \\frac{2A - ah}{h}", "explanation": "Combining over $h$ gives an equivalent tidy form.", "diagram": null }
      ],
      "finalAnswer": "$b = \\dfrac{2A - ah}{h}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "change of subject"],
    "questionText": "Make $x$ the subject of $y = (x - 3)^{2}$ (for $x \\geq 3$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the outer operation.", "workingLatex": "y = (x - 3)^{2}", "explanation": "The bracket $(x-3)$ is squared.", "diagram": null },
        { "stepNumber": 2, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 3, "description": "Apply to both sides.", "workingLatex": "\\sqrt{y} = x - 3", "explanation": "Since $x \\geq 3$, the bracket is non-negative, so take the positive root.", "diagram": null },
        { "stepNumber": 4, "description": "Add $3$ to both sides.", "workingLatex": "\\sqrt{y} + 3 = x", "explanation": "Undo the $-3$ to isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "x = \\sqrt{y} + 3", "explanation": "So $x = \\sqrt{y} + 3$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "(\\sqrt{y} + 3 - 3)^{2} = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{y} + 3$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $\\dfrac{x}{4} + \\dfrac{y}{3} = 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Isolate the $x$ fraction.", "workingLatex": "\\frac{x}{4} = 1 - \\frac{y}{3}", "explanation": "Subtract $\\tfrac{y}{3}$ from both sides.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the right side.", "workingLatex": "\\frac{x}{4} = \\frac{3 - y}{3}", "explanation": "Write $1$ as $\\tfrac33$ and subtract to get a single fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Clear the denominator on the left.", "workingLatex": "\\text{multiply by } 4", "explanation": "Undo the divide by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "x = 4 \\times \\frac{3 - y}{3}", "explanation": "Multiply the whole right side by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "x = \\frac{4(3 - y)}{3}", "explanation": "Write as a single fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{4(3 - y)}{3}", "explanation": "So $x = \\dfrac{4(3 - y)}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{4(3 - y)}{3}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "formula", "roots"],
    "questionText": "The period of a pendulum is $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$. Make $L$ the subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Isolate the square root.", "workingLatex": "\\frac{T}{2\\pi} = \\sqrt{\\frac{L}{g}}", "explanation": "Divide both sides by $2\\pi$.", "diagram": null },
        { "stepNumber": 2, "description": "Square both sides.", "workingLatex": "\\left(\\frac{T}{2\\pi}\\right)^{2} = \\frac{L}{g}", "explanation": "The inverse of a square root is squaring.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the left side.", "workingLatex": "\\frac{T^{2}}{4\\pi^{2}} = \\frac{L}{g}", "explanation": "Square the numerator and denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by $g$.", "workingLatex": "g \\times \\frac{T^{2}}{4\\pi^{2}} = L", "explanation": "Undo the divide by $g$ to isolate $L$.", "diagram": null },
        { "stepNumber": 5, "description": "Write neatly.", "workingLatex": "L = \\frac{gT^{2}}{4\\pi^{2}}", "explanation": "Combine into a single fraction.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "L = \\frac{gT^{2}}{4\\pi^{2}}", "explanation": "So $L = \\dfrac{gT^2}{4\\pi^2}$.", "diagram": null }
      ],
      "finalAnswer": "$L = \\dfrac{gT^{2}}{4\\pi^{2}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "fractions", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{3x - 2}{x}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "xy = 3x - 2", "explanation": "Multiply both sides by $x$.", "diagram": null },
        { "stepNumber": 2, "description": "Gather the $x$ terms.", "workingLatex": "xy - 3x = -2", "explanation": "Move all terms with $x$ to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $x$.", "workingLatex": "x(y - 3) = -2", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $(y - 3)$.", "workingLatex": "x = \\frac{-2}{y - 3}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Tidy the signs.", "workingLatex": "x = \\frac{2}{3 - y}", "explanation": "Multiplying top and bottom by $-1$ gives a neater form.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{2}{3 - y}", "explanation": "So $x = \\dfrac{2}{3 - y}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{2}{3 - y}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["rearranging", "brackets", "change of subject"],
    "questionText": "Make $x$ the subject of $y = 4 - 3(x + 1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the bracket.", "workingLatex": "y = 4 - 3x - 3", "explanation": "Multiply $-3$ through $(x+1)$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify the constants.", "workingLatex": "y = 1 - 3x", "explanation": "Combine $4 - 3 = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Move the $x$ term to be positive.", "workingLatex": "y + 3x = 1", "explanation": "Add $3x$ to both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Isolate the $x$ term.", "workingLatex": "3x = 1 - y", "explanation": "Subtract $y$ from both sides.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $3$.", "workingLatex": "x = \\frac{1 - y}{3}", "explanation": "Undo the multiply by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{1 - y}{3}", "explanation": "So $x = \\dfrac{1 - y}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{1 - y}{3}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $ax + b = cx + d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot that $x$ appears twice.", "workingLatex": "ax + b = cx + d", "explanation": "The subject is on both sides, so we must gather the $x$ terms together.", "diagram": null },
        { "stepNumber": 2, "description": "Move $cx$ to the left.", "workingLatex": "ax - cx + b = d", "explanation": "Subtract $cx$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Move $b$ to the right.", "workingLatex": "ax - cx = d - b", "explanation": "Subtract $b$ from both sides so all $x$ terms are alone on the left.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(a - c) = d - b", "explanation": "Take $x$ out as a common factor; this is the key step.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(a - c)$.", "workingLatex": "x = \\frac{d - b}{a - c}", "explanation": "Isolate $x$ by dividing by the bracket.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "a \\neq c", "explanation": "Division is only valid when $a - c \\neq 0$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{d - b}{a - c}", "explanation": "So $x = \\dfrac{d - b}{a - c}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{d - b}{a - c}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $5x + 2 = 3x + y$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot that $x$ appears twice.", "workingLatex": "5x + 2 = 3x + y", "explanation": "Gather the $x$ terms on one side.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $3x$ from both sides.", "workingLatex": "5x - 3x + 2 = y", "explanation": "Move the smaller $x$ term across.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the $x$ terms.", "workingLatex": "2x + 2 = y", "explanation": "$5x - 3x = 2x$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract $2$ from both sides.", "workingLatex": "2x = y - 2", "explanation": "Remove the constant term.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $2$.", "workingLatex": "x = \\frac{y - 2}{2}", "explanation": "Undo the multiply by $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "5\\left(\\frac{y-2}{2}\\right)+2 = 3\\left(\\frac{y-2}{2}\\right)+y", "explanation": "Both sides agree when simplified, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{y - 2}{2}", "explanation": "So $x = \\dfrac{y - 2}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y - 2}{2}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "brackets", "factorising"],
    "questionText": "Make $x$ the subject of $y(x + 1) = 3x + 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the left bracket.", "workingLatex": "yx + y = 3x + 2", "explanation": "Multiply $y$ through $(x+1)$ so both $x$ terms are visible.", "diagram": null },
        { "stepNumber": 2, "description": "Gather the $x$ terms on the left.", "workingLatex": "yx - 3x + y = 2", "explanation": "Subtract $3x$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Move the constant $y$ to the right.", "workingLatex": "yx - 3x = 2 - y", "explanation": "Subtract $y$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(y - 3) = 2 - y", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(y - 3)$.", "workingLatex": "x = \\frac{2 - y}{y - 3}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "y \\neq 3", "explanation": "Division requires $y - 3 \\neq 0$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{2 - y}{y - 3}", "explanation": "So $x = \\dfrac{2 - y}{y - 3}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{2 - y}{y - 3}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x + 2}{x - 1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "y(x - 1) = x + 2", "explanation": "Multiply both sides by $(x-1)$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left side.", "workingLatex": "yx - y = x + 2", "explanation": "Multiply $y$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms.", "workingLatex": "yx - x = 2 + y", "explanation": "Move $x$ to the left and $-y$ to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(y - 1) = y + 2", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(y - 1)$.", "workingLatex": "x = \\frac{y + 2}{y - 1}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "y \\neq 1", "explanation": "Division requires $y - 1 \\neq 0$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check the structure.", "workingLatex": "\\frac{x+2}{x-1} = y", "explanation": "Substituting the answer back reproduces the original relation.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{y + 2}{y - 1}", "explanation": "So $x = \\dfrac{y + 2}{y - 1}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{y + 2}{y - 1}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $ax = b(x + c)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the right bracket.", "workingLatex": "ax = bx + bc", "explanation": "Multiply $b$ through $(x+c)$ so both $x$ terms show.", "diagram": null },
        { "stepNumber": 2, "description": "Gather the $x$ terms.", "workingLatex": "ax - bx = bc", "explanation": "Subtract $bx$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $x$.", "workingLatex": "x(a - b) = bc", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $(a - b)$.", "workingLatex": "x = \\frac{bc}{a - b}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the condition.", "workingLatex": "a \\neq b", "explanation": "Division requires $a - b \\neq 0$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "a\\times\\frac{bc}{a-b} = b\\left(\\frac{bc}{a-b}+c\\right)", "explanation": "Both sides simplify equally, confirming the rearrangement.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{bc}{a - b}", "explanation": "So $x = \\dfrac{bc}{a - b}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{bc}{a - b}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{f}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Isolate the $\\tfrac1x$ term.", "workingLatex": "\\frac{1}{x} = \\frac{1}{f} - \\frac{1}{y}", "explanation": "Subtract $\\tfrac1y$ from both sides so only the $x$ term remains on the left.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the right side.", "workingLatex": "\\frac{1}{x} = \\frac{y - f}{fy}", "explanation": "Use the common denominator $fy$: $\\tfrac{y}{fy} - \\tfrac{f}{fy}$.", "diagram": null },
        { "stepNumber": 3, "description": "Take reciprocals of both sides.", "workingLatex": "x = \\frac{fy}{y - f}", "explanation": "If $\\tfrac1x$ equals a fraction, then $x$ is its reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "Note the condition.", "workingLatex": "y \\neq f", "explanation": "The reciprocal requires $y - f \\neq 0$.", "diagram": null },
        { "stepNumber": 5, "description": "Sense check dimensionally.", "workingLatex": "\\frac{1}{x} = \\frac{y - f}{fy}", "explanation": "Reciprocating back gives the fraction we had, confirming consistency.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "x = \\frac{fy}{y - f}", "explanation": "So $x = \\dfrac{fy}{y - f}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{fy}{y - f}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $x + a = \\dfrac{bx}{c}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "c(x + a) = bx", "explanation": "Multiply both sides by $c$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left side.", "workingLatex": "cx + ca = bx", "explanation": "Multiply $c$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms.", "workingLatex": "cx - bx = -ca", "explanation": "Move $bx$ to the left and the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(c - b) = -ca", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(c - b)$.", "workingLatex": "x = \\frac{-ca}{c - b}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Tidy the signs.", "workingLatex": "x = \\frac{ca}{b - c}", "explanation": "Multiply top and bottom by $-1$ for a neater form.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "b \\neq c", "explanation": "Division requires $b - c \\neq 0$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{ca}{b - c}", "explanation": "So $x = \\dfrac{ca}{b - c}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{ca}{b - c}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "fractions"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{a}{x^{2}}$ (for $x > 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "yx^{2} = a", "explanation": "Multiply both sides by $x^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Isolate the squared term.", "workingLatex": "x^{2} = \\frac{a}{y}", "explanation": "Divide both sides by $y$.", "diagram": null },
        { "stepNumber": 3, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 4, "description": "Apply to both sides.", "workingLatex": "x = \\sqrt{\\frac{a}{y}}", "explanation": "Since $x > 0$ we take the positive root.", "diagram": null },
        { "stepNumber": 5, "description": "Note the condition.", "workingLatex": "y > 0", "explanation": "For a real positive root, $\\tfrac{a}{y}$ must be positive.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "\\frac{a}{\\left(\\sqrt{a/y}\\right)^{2}} = \\frac{a}{a/y} = y", "explanation": "Substituting back returns $y$, confirming the answer.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\sqrt{\\frac{a}{y}}", "explanation": "So $x = \\sqrt{\\dfrac{a}{y}}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{\\dfrac{a}{y}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "roots", "factorising"],
    "questionText": "Make $x$ the subject of $\\sqrt{x} + a = b\\sqrt{x}$ (for $x \\geq 0$, $b \\neq 1$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Treat $\\sqrt{x}$ as one object.", "workingLatex": "\\sqrt{x} + a = b\\sqrt{x}", "explanation": "The unknown $\\sqrt{x}$ appears on both sides, so gather those terms.", "diagram": null },
        { "stepNumber": 2, "description": "Move the $\\sqrt{x}$ terms together.", "workingLatex": "a = b\\sqrt{x} - \\sqrt{x}", "explanation": "Subtract $\\sqrt{x}$ from both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $\\sqrt{x}$.", "workingLatex": "a = \\sqrt{x}(b - 1)", "explanation": "Take the common factor $\\sqrt{x}$ out.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $(b - 1)$.", "workingLatex": "\\frac{a}{b - 1} = \\sqrt{x}", "explanation": "Isolate the square root.", "diagram": null },
        { "stepNumber": 5, "description": "Square both sides.", "workingLatex": "\\left(\\frac{a}{b - 1}\\right)^{2} = x", "explanation": "The inverse of a square root is squaring.", "diagram": null },
        { "stepNumber": 6, "description": "Write neatly.", "workingLatex": "x = \\frac{a^{2}}{(b - 1)^{2}}", "explanation": "Square numerator and denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "b \\neq 1", "explanation": "Division requires $b - 1 \\neq 0$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{a^{2}}{(b - 1)^{2}}", "explanation": "So $x = \\dfrac{a^2}{(b - 1)^2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{a^{2}}{(b - 1)^{2}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{2x - 3}{x + 4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "y(x + 4) = 2x - 3", "explanation": "Multiply both sides by $(x+4)$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left side.", "workingLatex": "yx + 4y = 2x - 3", "explanation": "Multiply $y$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms on the left.", "workingLatex": "yx - 2x = -3 - 4y", "explanation": "Move $2x$ left and $4y$ right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(y - 2) = -3 - 4y", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(y - 2)$.", "workingLatex": "x = \\frac{-3 - 4y}{y - 2}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Tidy the signs.", "workingLatex": "x = \\frac{-(4y + 3)}{y - 2} = \\frac{4y + 3}{2 - y}", "explanation": "Factor out $-1$ on top and absorb it into the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "y \\neq 2", "explanation": "Division requires $y - 2 \\neq 0$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{4y + 3}{2 - y}", "explanation": "So $x = \\dfrac{4y + 3}{2 - y}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{4y + 3}{2 - y}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $px - q = r - sx$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot $x$ on both sides.", "workingLatex": "px - q = r - sx", "explanation": "Gather the $x$ terms on one side.", "diagram": null },
        { "stepNumber": 2, "description": "Add $sx$ to both sides.", "workingLatex": "px + sx - q = r", "explanation": "This brings both $x$ terms to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Add $q$ to both sides.", "workingLatex": "px + sx = r + q", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(p + s) = r + q", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(p + s)$.", "workingLatex": "x = \\frac{r + q}{p + s}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "p + s \\neq 0", "explanation": "Division requires the bracket to be non-zero.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{r + q}{p + s}", "explanation": "So $x = \\dfrac{r + q}{p + s}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{r + q}{p + s}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $\\dfrac{x + a}{x - a} = k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "x + a = k(x - a)", "explanation": "Multiply both sides by $(x-a)$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the right side.", "workingLatex": "x + a = kx - ka", "explanation": "Multiply $k$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms.", "workingLatex": "x - kx = -ka - a", "explanation": "Move the $x$ terms left and the constants right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(1 - k) = -a(k + 1)", "explanation": "Take $x$ out on the left and $-a$ out on the right.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(1 - k)$.", "workingLatex": "x = \\frac{-a(k + 1)}{1 - k}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Tidy the signs.", "workingLatex": "x = \\frac{a(k + 1)}{k - 1}", "explanation": "Multiply top and bottom by $-1$ for a neater form.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "k \\neq 1", "explanation": "Division requires $k - 1 \\neq 0$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{a(k + 1)}{k - 1}", "explanation": "So $x = \\dfrac{a(k + 1)}{k - 1}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{a(k + 1)}{k - 1}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "roots", "change of subject"],
    "questionText": "Make $x$ the subject of $y = \\sqrt{a^{2} - x^{2}}$ (for $x \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Undo the square root.", "workingLatex": "y^{2} = a^{2} - x^{2}", "explanation": "Square both sides to remove the root.", "diagram": null },
        { "stepNumber": 2, "description": "Move $x^2$ to one side.", "workingLatex": "x^{2} + y^{2} = a^{2}", "explanation": "Add $x^2$ to both sides.", "diagram": null },
        { "stepNumber": 3, "description": "Isolate $x^2$.", "workingLatex": "x^{2} = a^{2} - y^{2}", "explanation": "Subtract $y^2$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 5, "description": "Apply to both sides.", "workingLatex": "x = \\sqrt{a^{2} - y^{2}}", "explanation": "Since $x \\geq 0$ take the positive root.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise the structure.", "workingLatex": "x^{2} + y^{2} = a^{2}", "explanation": "This is a circle of radius $a$; the rearrangement is consistent with it.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "a^{2} \\geq y^{2}", "explanation": "The value under the root must be non-negative.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\sqrt{a^{2} - y^{2}}", "explanation": "So $x = \\sqrt{a^2 - y^2}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{a^{2} - y^{2}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x}{a} + \\dfrac{x}{b}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot $x$ in both fractions.", "workingLatex": "y = \\frac{x}{a} + \\frac{x}{b}", "explanation": "The subject appears in two terms; we will factor it out.", "diagram": null },
        { "stepNumber": 2, "description": "Combine over a common denominator.", "workingLatex": "y = \\frac{bx + ax}{ab}", "explanation": "The common denominator is $ab$.", "diagram": null },
        { "stepNumber": 3, "description": "Factor $x$ in the numerator.", "workingLatex": "y = \\frac{x(a + b)}{ab}", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 4, "description": "Clear the fraction.", "workingLatex": "aby = x(a + b)", "explanation": "Multiply both sides by $ab$.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(a + b)$.", "workingLatex": "\\frac{aby}{a + b} = x", "explanation": "Isolate $x$ by dividing by its bracket.", "diagram": null },
        { "stepNumber": 6, "description": "Write the subject first.", "workingLatex": "x = \\frac{aby}{a + b}", "explanation": "State the rearranged formula.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "a + b \\neq 0", "explanation": "Division requires the bracket to be non-zero.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{aby}{a + b}", "explanation": "So $x = \\dfrac{aby}{a + b}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{aby}{a + b}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $ax + b = c(d - x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the right bracket.", "workingLatex": "ax + b = cd - cx", "explanation": "Multiply $c$ through $(d - x)$.", "diagram": null },
        { "stepNumber": 2, "description": "Add $cx$ to both sides.", "workingLatex": "ax + cx + b = cd", "explanation": "Bring both $x$ terms to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $b$ from both sides.", "workingLatex": "ax + cx = cd - b", "explanation": "Move the constant to the right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(a + c) = cd - b", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(a + c)$.", "workingLatex": "x = \\frac{cd - b}{a + c}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "a + c \\neq 0", "explanation": "Division requires the bracket to be non-zero.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check.", "workingLatex": "a x + b \\text{ vs } c(d - x)", "explanation": "Substituting the answer makes both sides equal, confirming it.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{cd - b}{a + c}", "explanation": "So $x = \\dfrac{cd - b}{a + c}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{cd - b}{a + c}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{ax + b}{cx + d}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Clear the fraction.", "workingLatex": "y(cx + d) = ax + b", "explanation": "Multiply both sides by $(cx + d)$.", "diagram": null },
        { "stepNumber": 2, "description": "Expand the left side.", "workingLatex": "cxy + dy = ax + b", "explanation": "Multiply $y$ through the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms on the left.", "workingLatex": "cxy - ax = b - dy", "explanation": "Move $ax$ left and $dy$ right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(cy - a) = b - dy", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(cy - a)$.", "workingLatex": "x = \\frac{b - dy}{cy - a}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "cy \\neq a", "explanation": "Division requires $cy - a \\neq 0$.", "diagram": null },
        { "stepNumber": 7, "description": "Recognise the general pattern.", "workingLatex": "y = \\frac{ax+b}{cx+d}", "explanation": "This is the standard technique for any linear-over-linear formula.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{b - dy}{cy - a}", "explanation": "So $x = \\dfrac{b - dy}{cy - a}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{b - dy}{cy - a}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "squares", "subject appears twice", "factorising"],
    "questionText": "Make $x$ the subject of $ax^{2} = b(x^{2} + c)$ (for $x \\geq 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the right side.", "workingLatex": "ax^{2} = bx^{2} + bc", "explanation": "Multiply $b$ through the bracket; note $x^2$ appears twice.", "diagram": null },
        { "stepNumber": 2, "description": "Gather the $x^2$ terms.", "workingLatex": "ax^{2} - bx^{2} = bc", "explanation": "Move $bx^2$ to the left.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $x^2$.", "workingLatex": "x^{2}(a - b) = bc", "explanation": "Take $x^2$ out as a common factor.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $(a - b)$.", "workingLatex": "x^{2} = \\frac{bc}{a - b}", "explanation": "Isolate the squared term.", "diagram": null },
        { "stepNumber": 5, "description": "Undo the square.", "workingLatex": "\\text{take the square root}", "explanation": "The inverse of squaring is the square root.", "diagram": null },
        { "stepNumber": 6, "description": "Apply to both sides.", "workingLatex": "x = \\sqrt{\\frac{bc}{a - b}}", "explanation": "Since $x \\geq 0$ we take the positive root.", "diagram": null },
        { "stepNumber": 7, "description": "Note the conditions.", "workingLatex": "a \\neq b, \\; \\frac{bc}{a-b} \\geq 0", "explanation": "The denominator must be non-zero and the radicand non-negative.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\sqrt{\\frac{bc}{a - b}}", "explanation": "So $x = \\sqrt{\\dfrac{bc}{a - b}}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\sqrt{\\dfrac{bc}{a - b}}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $\\dfrac{x + 3}{2} = \\dfrac{x - 1}{y}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Cross-multiply.", "workingLatex": "y(x + 3) = 2(x - 1)", "explanation": "Multiply both sides by $2y$ to clear the fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Expand both sides.", "workingLatex": "yx + 3y = 2x - 2", "explanation": "Multiply out each bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms on the left.", "workingLatex": "yx - 2x = -2 - 3y", "explanation": "Move $2x$ left and $3y$ right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(y - 2) = -2 - 3y", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(y - 2)$.", "workingLatex": "x = \\frac{-2 - 3y}{y - 2}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Tidy the signs.", "workingLatex": "x = \\frac{3y + 2}{2 - y}", "explanation": "Factor $-1$ from the top and absorb it into the denominator.", "diagram": null },
        { "stepNumber": 7, "description": "Note the condition.", "workingLatex": "y \\neq 2", "explanation": "Division requires $y - 2 \\neq 0$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{3y + 2}{2 - y}", "explanation": "So $x = \\dfrac{3y + 2}{2 - y}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{3y + 2}{2 - y}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "roots", "factorising"],
    "questionText": "Make $x$ the subject of $y = \\dfrac{x}{\\sqrt{x^{2} + 1}}$... instead, make $x$ the subject of $a(x - b) = x + c$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Expand the left bracket.", "workingLatex": "ax - ab = x + c", "explanation": "Multiply $a$ through $(x - b)$.", "diagram": null },
        { "stepNumber": 2, "description": "Gather the $x$ terms on the left.", "workingLatex": "ax - x = c + ab", "explanation": "Move $x$ left and $-ab$ right.", "diagram": null },
        { "stepNumber": 3, "description": "Factor out $x$.", "workingLatex": "x(a - 1) = c + ab", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $(a - 1)$.", "workingLatex": "x = \\frac{c + ab}{a - 1}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 5, "description": "Note the condition.", "workingLatex": "a \\neq 1", "explanation": "Division requires $a - 1 \\neq 0$.", "diagram": null },
        { "stepNumber": 6, "description": "Sense check.", "workingLatex": "a\\left(\\frac{c+ab}{a-1} - b\\right) = \\frac{c+ab}{a-1} + c", "explanation": "Both sides reduce to the same value, confirming the rearrangement.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "x = \\frac{c + ab}{a - 1}", "explanation": "So $x = \\dfrac{c + ab}{a - 1}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{c + ab}{a - 1}$"
    }
  },
  {
    "id": "gcse.algebra.rearranging.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Rearranging formulae",
    "subtopicId": "gcse.algebra.rearranging",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["rearranging", "subject appears twice", "fractions", "factorising"],
    "questionText": "Make $x$ the subject of $\\dfrac{a}{x} + b = \\dfrac{c}{x} + d$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot $x$ in two denominators.", "workingLatex": "\\frac{a}{x} + b = \\frac{c}{x} + d", "explanation": "Both fractions contain $x$ underneath, so we clear them first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply through by $x$.", "workingLatex": "a + bx = c + dx", "explanation": "Every term is multiplied by $x$ to remove the fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Gather the $x$ terms on one side.", "workingLatex": "bx - dx = c - a", "explanation": "Move $dx$ left and $a$ right.", "diagram": null },
        { "stepNumber": 4, "description": "Factor out $x$.", "workingLatex": "x(b - d) = c - a", "explanation": "Take $x$ out as a common factor.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by $(b - d)$.", "workingLatex": "x = \\frac{c - a}{b - d}", "explanation": "Isolate $x$.", "diagram": null },
        { "stepNumber": 6, "description": "Note the condition.", "workingLatex": "b \\neq d", "explanation": "Division requires $b - d \\neq 0$.", "diagram": null },
        { "stepNumber": 7, "description": "Reflect on the method.", "workingLatex": "\\text{clear fractions} \\to \\text{factor} \\to \\text{divide}", "explanation": "Clearing the fractions turned a tricky equation into a routine linear one.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "x = \\frac{c - a}{b - d}", "explanation": "So $x = \\dfrac{c - a}{b - d}$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{c - a}{b - d}$"
    }
  }
];
