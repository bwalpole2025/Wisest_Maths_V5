---
name: worked-solution-writer
description: Generates the complete workedSolution object (steps array + finalAnswer) for a given question. Works independently without needing solution-architect. Uses intuitive-explanation skill and enforces step count rules.
---

# Worked Solution Writer Skill

## Purpose
This skill takes a question and its difficulty and produces a full, high-quality `workedSolution` object ready for the `Question`.

## Input
You will receive the question text and difficulty level.

## Responsibilities

### 1. Determine Step Count
- Easy: 6–9 steps
- Intermediate: 9–13 steps
- Hard: 13–18 steps (max 18)

### 2. Generate Full Solution
Create the exact structure:

```json
{
  "steps": [
    {
      "stepNumber": number,
      "description": "string",
      "workingLatex": "string",
      "explanation": "string (use intuitive-explanation skill)",
      "diagram": { ... } | null
    }
  ],
  "finalAnswer": "string in LaTeX"
}