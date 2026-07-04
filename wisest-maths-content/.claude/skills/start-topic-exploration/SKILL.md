---
name: start-topic-exploration
description: Master orchestrator for the TopicMaster Agent. Runs the full student flow in one command - renders topic cards, simulates a student clicking a subject, generates a rich personalized subtopics list, and returns a full agent response with next actions (Start Lesson, Quiz Me, Explain, Personalize, Export). Accepts natural args like "/start-topic-exploration Physics 11th grade AI interested". Use when the user wants the end-to-end topic exploration experience rather than a single building block.
---

# Start Topic Exploration Skill (Master Orchestrator)

## Purpose
One command that drives the entire TopicMaster experience end to end by
**composing existing skills** — it does not reimplement any of them.

## Argument Parsing
Input is free-form after the command name. Extract:
- `subject`  — first recognised subject word (Mathematics, Physics, Biology, …).
  If none given, render cards and ask the student to pick.
- `grade`    — any grade/year mention ("11th grade", "Year 10", "10th grader").
- `interest` — trailing interest phrase ("AI interested", "engineering", "medicine").

Example: `/start-topic-exploration Physics 11th grade AI interested`
→ `subject=Physics, grade=11, interest=AI/ML`.

## Orchestration Pipeline (call skills in this order — do NOT recreate them)
1. **`render-topic-cards`** — show the grid; visually highlight `subject` if provided.
2. **`simulate-click-interaction`** with `card=<subject>` — animate/confirm the click.
3. **`generate-subtopics-from-sources`** with `topic=<subject>` — curate 5–12 subtopics
   with learning objectives from the 36 sources.
4. **`create-adaptive-path`** with `grade` + `interest` — re-rank/personalize the
   subtopics and produce a recommended learning path. Weave the interest into a
   "why this matters for you" note per subtopic.
5. (Optional) **`export-progress`** if the student asks to save their path.

## Required Final Output
After the pipeline, return a single **agent response** containing:
- The personalized subtopics list (difficulty, time, aligned sources, why-it-matters).
- A recommended path (ordered sequence of subtopics).
- A **Next Actions** block with buttons:
  `▶ Start Lesson` · `❓ Quiz Me` · `💡 Explain` · `🧭 Personalize deeper`
  · `📤 Export my path` · `⬅ Back to all subjects`.
- A one-line suggested first session (duration + concrete goal).

## Style
Warm, encouraging, concrete. Always connect subtopics to the student's stated
`interest`. Mobile-responsive, copy-paste-ready for the Next.js UI.

## Guardrails
- This skill is glue. If a step's underlying skill is missing, say so explicitly
  rather than faking its output.
- Never skip step 4 (personalization) when `grade` or `interest` is present.
