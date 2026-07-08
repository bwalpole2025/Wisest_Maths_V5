# Wisest Maths — Content Generation Project

## FORCE FULL SUBTOPIC RULE (Highest Priority)

When the user says anything containing "build next subtopic", "create the next subtopic", "complete subtopic", or "build subtopic":
- You MUST generate EXACTLY 70 questions for that subtopic.
- You are forbidden from stopping early.
- Keep looping the pipeline until 70 questions are done, even if it takes multiple responses.
- Only reply with progress updates or the final TypeScript when 70 is reached.

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

## Output Format Rule (Mandatory)

Every time a question or batch of questions is generated, the final output must be **valid TypeScript code** in this exact format:

```ts
import { Question } from "@/lib/types";

export const questions: Question[] = [
  // full Question objects here
];

## Full Subtopic Build Command

When the user says:
- "create subtopic [name] with build"
- "build subtopic [name]"
- "complete subtopic [name]"

You must:
- Treat it as a request to generate **all 70 questions** for that exact subtopic.
- Keep generating questions (one by one or in batches) until the subtopic has 70 questions with full worked solutions and diagrams where appropriate.
- Use the full pipeline each time.
- At the end, output the complete result as clean TypeScript code in the exact format the user wants (with the import line and `export const questions: Question[] = [...]`).
- Update `progress.json` as you go.
- Only stop when the subtopic reaches 70 questions or the user tells you to stop.

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

# TopicMaster Agent - Skill-Enabled Version
Priority: Always respect and execute any /skill command instantly.

Goal: Student sees topic cards. Clicking a card (or using /simulate-click) instantly returns a rich subtopics list. The agent draws from 36 curriculum sources for quality.

Available skills (register all below):
- /render-topic-cards
- /generate-subtopics
- /simulate-student-click
- /personalize-learning-path
- /create-agent-response

## Link Performance Rule (Frontend — mandatory)

Target: **every link loads in <2 seconds** (<800ms ideal). See `.cursor/rules/link-performance.mdc`.

- Use `AppLink` (server) / `FastLink` (client) — never raw `next/link` in app code
- Every route segment needs `loading.tsx` with skeletons
- Solve pages use `loadQuestionWithSiblings` — never `allQuestions` for navigation
- Run `npm run perf:links` after navigation or data-loading changes