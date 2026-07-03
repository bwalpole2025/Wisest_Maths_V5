---
name: next-question-orchestrator
description: Master orchestrator that coordinates the full question generation pipeline. Handles commands like "Create the next subtopic", "resume a-level maths subtopic", or "generate next question". Manages progression through the curriculum and updates progress.json.
---

# Next Question Orchestrator

## Purpose
This is the **main control skill** for the content generation system. It decides what to do when the user gives a high-level instruction and coordinates the other agents.

## When to Use This Skill
Use this skill when the user says any of the following:
- "Create the next subtopic for A-Level Maths"
- "resume a-level maths subtopic"
- "Generate the next question"
- "Continue with the current subtopic"
- "Next question"

## Core Responsibilities

### 1. Read Current State
- Read `progress.json` to understand the current level, topic, subtopic, and how many questions have already been generated.
- Read `wisest-curriculum.json` if needed to understand the full curriculum structure.

### 2. Decide the Action
Determine whether to:
- **Continue** generating questions for the current subtopic, or
- **Move to the next subtopic** in sequence.

Use this logic:
- If `questionsGenerated < 70`, continue with the current subtopic.
- If `questionsGenerated >= 70`, mark the current subtopic as complete and move to the next one in `wisest-curriculum.json`.

### 3. Coordinate the Agent Pipeline
When generating a new question, follow this exact sequence:

1. **topic-planner** → Confirm or select the current/next subtopic
2. **question-creator** → Generate the question text, difficulty, diagram spec, etc.
3. **solution-architect** → Plan the number of steps and solution structure
4. **step-writer-agent** → Write the individual steps (loop until all steps are complete)
5. **quality-reviewer-agent** → Review the full question + solution
6. If review passes → Save the question and update `progress.json`
7. If review fails → Send feedback to `step-writer-agent` and retry (max 2 attempts)

### 4. Update Progress
After successfully generating a question:
- Increment `questionsGenerated` in `progress.json`
- Update `lastUpdated`
- If a subtopic reaches 70 questions, add it to `completedSubtopics`

### 5. Output Behaviour
- For most commands, generate **one complete question** at a time.
- After generating a question, show a short summary:
  - Which subtopic was worked on
  - How many questions now exist for that subtopic
  - Whether the subtopic is now complete

## Command Handling Examples

| User Command                        | Expected Behaviour                              |
|-------------------------------------|-------------------------------------------------|
| "Create the next subtopic"          | Move to next subtopic if current is complete    |
| "resume a-level maths subtopic"     | Continue generating for the current subtopic    |
| "Generate next question"            | Create one new question for current subtopic    |
| "Create 5 more questions"           | Generate 5 questions in sequence                |

## Rules

- Never generate more than one question per user command unless specifically asked.
- Always respect the 70-question target per subtopic.
- Only move to a new subtopic when the current one has reached 70 questions (or the user explicitly asks to move on).
- Keep `progress.json` updated after every successful question generation.
- If the quality reviewer fails twice, stop and report the issues to the user.

## Output Style
After completing a question, respond with:
- The full `Question` object (ready to copy)
- A short status update (e.g. "Subtopic now has 24/70 questions")

## Important Notes
- This skill acts as the "brain" of the system.
- It should delegate detailed work to the specialised agents rather than doing everything itself.
- Prioritise consistency and quality over speed.