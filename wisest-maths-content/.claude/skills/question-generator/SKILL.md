---
name: question-generator
description: Generates high-quality, exam-style questions for a given subtopic and difficulty level. Creates the question text, difficulty, marks, tags, answer type, and question diagram specification when appropriate.
---

# Question Generator Skill

## Purpose
This skill creates the core question content (the question itself) for a specific subtopic. It is used early in the generation pipeline, after the `topic-planner` has selected a subtopic.

## When to Use This Skill
Use this skill when you need to generate:
- A new question for a given subtopic
- Questions of a specific difficulty level (Easy, Intermediate, or Hard)

## Core Responsibilities

### 1. Generate Exam-Style Questions
- Create original, well-scoped questions that feel like real exam questions.
- Match the requested difficulty level as closely as possible.
- Ensure the question can support a clear step-by-step solution with the correct number of steps.

### 2. Control Difficulty
Follow these guidelines:

| Difficulty    | Characteristics                              | Typical Marks | Expected Steps |
|---------------|----------------------------------------------|---------------|----------------|
| Easy          | Direct application of standard techniques    | 3–6           | 6–9            |
| Intermediate  | Requires multi-step thinking or connections  | 5–8           | 9–13           |
| Hard          | Non-routine, multi-concept, or proof-based   | 6–10          | 13–18          |

### 3. Generate Required Fields
You should produce:

- `questionText` — Clear question written with LaTeX where needed
- `difficulty` — "Easy", "Intermediate", or "Hard"
- `marks` — Appropriate number of marks
- `answerType` — Usually `"expression"` for A-Level style
- `tags` — Relevant topic tags (e.g. `["vectors", "midpoint", "collinear"]`)
- `questionDiagram` — JSON diagram spec **only** if the subtopic benefits from a diagram

### 4. Diagram Rules
- Only create a `questionDiagram` when it adds real value (vectors, geometry, graphs, kinematics, transformations, etc.).
- Use the standard diagram JSON format expected by the frontend.
- Keep diagrams clean and educational.

### 5. Output Format
Return the generated question data in this structure:

```json
{
  "questionText": "The full question text with LaTeX",
  "difficulty": "Easy" | "Intermediate" | "Hard",
  "marks": number,
  "answerType": "expression",
  "tags": ["tag1", "tag2"],
  "questionDiagram": { ... } | null,
  "reasoning": "Brief note explaining why this question was created and its difficulty level"
}