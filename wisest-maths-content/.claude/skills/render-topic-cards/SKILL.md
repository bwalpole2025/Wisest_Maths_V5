---
name: render-topic-cards
description: Renders a beautiful, clickable grid of subject topic cards (Mathematics, Biology, Physics, Computer Science, History, Chemistry, and any subjects the user names). Each card shows emoji, title, short description, progress bar, topic count, and an Explore button. On click, delegates to the existing simulate-click-interaction and generate-subtopics-from-sources skills. Output is ready to copy into HTML/Next.js. Use whenever the user wants to browse subjects or start topic exploration.
---

# Render Topic Cards Skill

## Purpose
Display an inviting grid of subject topic cards that a student can browse and click.
This is the **entry screen** of the TopicMaster experience. It never generates
subtopics itself — clicking a card hands off to existing skills.

## Parameters
- `subjects` (optional) — list of subjects to show. Default set:
  Mathematics 📐, Biology 🧬, Physics ⚛️, Computer Science 💻, History 📜, Chemistry ⚗️.
  Add any extra subjects the user mentions.
- `grade` (optional) — used only to tune the copy/tone, not the layout.

## What to Output
1. A header banner ("Choose a subject").
2. A responsive grid of cards, **two per row**. Each card MUST include:
   - Emoji + SUBJECT NAME
   - One-line description
   - A progress bar (`▓`/`░`, 10 segments) + percentage (pull from `progress.json` if present, else 0%)
   - Topic count + difficulty range
   - An `〔 Explore ▸ 〕` button
3. A footer line noting the click affordance and the synced curriculum sources
   (Common Core, AP, Khan, CK-12, IB, + others from the 36 sources).

Render with box-drawing characters inside a code block so the cards stay aligned
in the terminal; the same structure maps 1:1 to flexbox/grid cards in Next.js.

## Click Behaviour (delegation — do NOT reimplement)
When the user clicks a card, or types a subject name, or you are told to simulate a click:
1. Call the existing **`simulate-click-interaction`** skill with `card=<subject>`.
2. That chains into the existing **`generate-subtopics-from-sources`** skill with `topic=<subject>`.
3. Present the returned subtopics list (difficulty, estimated time, aligned sources,
   and `▶ Start` / `❓ Quiz Me` / `💡 Explain` actions per row).

This skill's only job is the CARD GRID + handing off the click. It is a building
block for the `start-topic-exploration` orchestrator.

## Guardrails
- Never invent subtopics here — that is `generate-subtopics-from-sources`' job.
- Keep it mobile-friendly and copy-paste-ready for Tailwind/shadcn.
