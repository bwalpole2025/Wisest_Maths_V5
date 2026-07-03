---
name: next-question-orchestrator
description: Master orchestrator skill that coordinates the full question generation pipeline. Handles high-level user commands such as "Create the next subtopic", "resume a-level maths subtopic", or "Generate the next question". Manages progression through the curriculum using wisest-curriculum.json and progress.json.
---

# Next Question Orchestrator

## Purpose
This is the **central control skill** for the entire content generation system. It interprets high-level user commands, decides whether to continue or move to the next subtopic, coordinates all agents and skills, and ensures consistent progress tracking.

## When to Use This Skill
Use this skill when the user gives any of the following commands:
- "Create the next subtopic for A-Level Maths"
- "resume a-level maths subtopic"
- "Generate the next question"
- "Continue with the current subtopic"
- "Next question"

## Core Responsibilities

### 1. Read Current State
- Read `progress.json` to check the current level, topic, subtopic, and number of questions already generated.
- Read `wisest-curriculum.json` when needed to determine the next subtopic in sequence.
- If `progress.json` does not exist or is empty, create it with default values and begin from the start of the curriculum.

### 2. Decide the Next Action
Use this logic:
- If the current subtopic has **fewer than 70 questions** → Continue generating for the current subtopic.
- If the current subtopic has **70 or more questions** → Mark it as complete and move to the next subtopic in `wisest-curriculum.json`.

### 3. Coordinate the Generation Pipeline
When creating a new question, follow this exact sequence:

1. **topic-planner** — Confirm or select the appropriate subtopic.
2. **question-creator** — Generate the question text, difficulty, marks, tags, and `questionDiagram` (if needed).
3. **solution-architect** — Plan the solution structure and number of steps.
4. **worked-solution-writer** — Generate the full `workedSolution` object (including all steps and `finalAnswer`), using the `intuitive-explanation` skill to write clear explanations for each step.
5. **quality-reviewer-agent** — Review the complete question and worked solution.
6. **If the review passes**:
   - Save the generated question into the appropriate folder under `output/` (e.g. `output/a-level-maths/vectors/`).
   - Update `progress.json` (increment `questionsGenerated` and update `lastUpdated`).
7. **If the review fails**:
   - Send specific feedback to `worked-solution-writer`.
   - Retry **once** (maximum of 2 attempts total). 
   - If it still fails after the second attempt, stop and report the issues to the user.

### 4. Update Progress
After successfully generating a question:
- Increment `questionsGenerated` in `progress.json`.
- If a subtopic reaches 70 questions, add it to the `completedSubtopics` array.
- Update the `lastUpdated` field.

### 5. Output Behaviour
After generating a question, respond with:
- The complete `Question` object (ready to copy into your frontend).
- A short status update, for example:  
  `"Subtopic 'Position vectors and midpoints' now has 24/70 questions."`

## Command Handling

| User Command                        | Expected Behaviour                                          |
|-------------------------------------|-------------------------------------------------------------|
| "Create the next subtopic"          | Move to the next subtopic if the current one is complete    |
| "resume a-level maths subtopic"     | Continue generating for the current subtopic                |
| "Generate the next question"        | Create one new question for the current subtopic            |
| "Create 5 more questions"           | Generate 5 questions in sequence for the current subtopic   |

## Important Rules

- Never generate more than one question per command unless the user explicitly asks for multiple.
- Always respect the **70-question target** per subtopic.
- Only move to a new subtopic when the current one has reached 70 questions (unless the user specifically requests otherwise).
- Always keep `progress.json` updated after every successful generation.
- Prioritise **quality and consistency** over speed.
- Delegate detailed content generation to the specialised skills (`worked-solution-writer`, `intuitive-explanation`, etc.).

## Notes
- This skill acts as the **"brain"** of the system — it should focus on coordination rather than generating content itself.
- Use the `worked-solution-writer` skill for creating full solutions.
- Use the `intuitive-explanation` skill when writing explanations for individual steps.