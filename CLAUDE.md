# Wisest Maths — Content Generation Project

## Project Goal
Build a high-quality bank of questions with full worked solutions for GCSE, A-Level Maths, and A-Level Further Maths.  
Target: Up to **70 questions per subtopic**, each with detailed worked solutions containing intuitive explanations and the correct number of steps.

## Core Rules

### Step Count Rules (Strict)
- Easy/Foundation: 6–9 steps
- Intermediate: 9–13 steps
- Hard/Challenge: 13–18 steps (maximum 18)

### Explanation Rules
- Every step must include a clear **intuitive explanation** (the "why").
- Use the `intuitive-explanation` skill when writing explanations.
- Explanations must be calm, clear, and educational — never Socratic.

### Output Format
All generated questions must follow the exact `Question` TypeScript interface used in the frontend (including `workedSolution.steps[]`, `questionDiagram`, `finalAnswer`, etc.).

## Architecture

This project uses a **multi-agent + skill** system:

### Agents (in `.claude/agents/`)
- `topic-planner` — Decides the current/next subtopic using `wisest-curriculum.json` and `progress.json`
- `question-creator` — Generates the question text, difficulty, marks, tags, and diagram spec
- `solution-architect` — Plans the solution structure and number of steps
- `step-writer-agent` — Writes individual high-quality steps
- `quality-reviewer-agent` — Final quality gate (step count, explanations, accuracy)
- `intuitive-explainer` — (Legacy) — Prefer using the `intuitive-explanation` skill instead

### Skills (in `skills/`)
- `next-question-orchestrator` — **Master skill**. Handles high-level commands and coordinates all agents.
- `worked-solution-writer` — Generates the full `workedSolution` object.
- `intuitive-explanation` — Writes clear intuitive explanations for steps.
- `question-generator` — Creates individual questions.
- `step-controller` — Helps enforce correct step counts.

## How to Use (Recommended Commands)

Use the `next-question-orchestrator` skill with natural language:

- `"Create the next subtopic for A-Level Maths"`
- `"resume a-level maths subtopic"`
- `"Generate the next question"`
- `"Create 5 more questions for the current subtopic"`

The orchestrator will:
1. Check `progress.json`
2. Decide whether to continue or move to the next subtopic
3. Run the full pipeline: `topic-planner` → `question-creator` → `solution-architect` → `step-writer-agent` → `quality-reviewer-agent`
4. Update `progress.json` after successful generation

## Progress Tracking

- Use `progress.json` to track:
  - Current level, topic, and subtopic
  - Number of questions generated for the current subtopic
  - Target of 70 questions per subtopic
  - List of completed subtopics
- The `topic-planner` agent is responsible for reading and updating this file.
- Only move to a new subtopic when the current one has reached (or exceeded) 70 questions, unless the user explicitly asks to move on.

## Quality Standards

Before accepting any question:
- Step count must match the difficulty level.
- Every step must have a meaningful intuitive explanation.
- All mathematics must be correct.
- The solution must feel like a high-quality model answer.
- If the `quality-reviewer-agent` fails a question twice, stop and report the issues.

## File Locations

- Curriculum: `wisest-curriculum.json`
- Progress: `progress.json`
- Generated questions: `output/` folder (organised by level)
- Agents: `.claude/agents/`
- Skills: `skills/`

## Important Notes

- Always work **sequentially** through `wisest-curriculum.json`.
- Prioritise quality and depth over speed.
- Never generate questions for a subtopic that is not in the curriculum file.
- Keep `progress.json` updated after every successful question.