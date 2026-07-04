---
name: topic-cards-flow
description: Renders the Wisest Maths curriculum navigator as an interactive Artifact — Qualification → Year/Tier → Topic → Subtopic → Wisest Tutor (Start Lesson / Quiz / Explain). Maths only. Driven by wisest-curriculum.json; routes each action to the existing content skills. Invoke with "topic cards flow", "show the curriculum cards", or "open cards for <GCSE|A-Level|Further>".
---

# Topic Cards Flow (Maths curriculum navigator)

## Purpose
A single skill that turns the whole maths curriculum into a browsable, clickable card journey
and demonstrates it visually as a self-contained, theme-aware **Artifact**. This is a **maths-only**
product — no other subjects.

## The hierarchy (5 levels)
1. **Qualification** — GCSE Maths · A-Level Maths · A-Level Further Maths.
2. **Year / Tier** — GCSE → Foundation / Higher · A-Level & Further → Year 1 / Year 2.
3. **Topic cards** — GCSE groups by the curriculum `topic` (e.g. "Graphs", "Probability"),
   badged with its strand; A-Level & Further group by `strand` → **Pure / Statistics / Mechanics**.
4. **Subtopic cards** — the individual `name` subtopics in that topic (GCSE filtered by tier;
   Higher includes all Foundation content plus higher-only, flagged "Higher only").
5. **Wisest Tutor** — a subtopic's response for the chosen action.

## Data source (single source of truth — never invent counts or names)
- Curriculum: `data/curriculum/wisest-curriculum.json` (fields: qualification `GCSE`/`ALEVEL_MATHS`/
  `ALEVEL_FM`, `year` y1/y2, `tier` F/H, `strand`, `topic`, `name`, `id`, `description`).
- Which subtopics are **live** (70 questions): the built set in
  `src/data/questions/a-level-maths/index.ts` (`SUBTOPICS` registry). Currently the 10 A-Level
  Maths Year 1 Pure subtopics. Mark live ones with a "70 Q" pill and enabled buttons; the rest
  render as "Soon" with disabled actions.
- Tier rule for GCSE: **Foundation** = subtopics with `tier === "F"`; **Higher** = all GCSE
  subtopics (F plus higher-only H).

## Reuse existing skills — DO NOT re-implement content
Each live subtopic's action delegates to a skill that already exists in this project:

| Action        | Delegates to                                        | Produces |
|---------------|-----------------------------------------------------|----------|
| Start Lesson  | `next-question-orchestrator`                        | Lesson plan + practice questions for the subtopic |
| Quiz          | `question-generator` (+ `worked-solution-writer`)   | A sample question with reveal + full solution |
| Explain       | `intuitive-explanation`                             | The "big idea" + why-it-works walkthrough |

## Pipeline
1. **Read the curriculum** and the built-subtopic set from the data sources above.
2. **Build DATA** — a compact `{ quals, subs }` object; derive topics/subtopics by filtering.
3. **Render the Artifact** — vanilla-JS view stack (quals → split → topics → subs → tutor) with
   breadcrumbs and Back at every level.
   - Self-contained: no external requests (Artifact CSP blocks CDNs/fonts).
   - Theme-aware via token `:root` palette + `prefers-color-scheme` **and** `:root[data-theme]`.
   - Colour encodes **strand** (Pure/Number = sky-indigo, Statistics = emerald, Mechanics/Ratio =
     amber, Algebra = violet, Probability = rose, …); topic tiles use a maths glyph (∫, x̄, ⇀, △, …).
   - Maths renders as Unicode (x², √, →, ½) — KaTeX cannot load under the CSP. Keep LaTeX out of
     plain-text title fields.
4. **Populate a live subtopic's action** by calling the delegated skill and dropping its output
   into the tutor-response view (authored content for built subtopics; conceptual, no-fabricated-
   numbers fallback otherwise).
5. **Publish** via the `Artifact` tool (favicon 📐). Re-editing the same file path redeploys to the
   same URL.
6. **Report** the Artifact link and the click-path to the requested state.

## Output contract
- Primary deliverable is the **Artifact** (the interactive navigator), not terminal code.
- If asked to put it in the app instead, scaffold a `/curriculum` (or `/learn`) route in the
  Next.js app using the existing design system (`SubtopicCard`, glass cards, gradient badges),
  reading the same curriculum + registry rather than duplicating data.

## Quality bar
- Every card, row and button is keyboard-focusable with a visible focus ring; both themes legible.
- Counts, names, descriptions and tiers match `wisest-curriculum.json` exactly — never invented.
- Live vs. Soon status matches the real `SUBTOPICS` registry.
- Progress meters use `tabular-nums`; strand colour is consistent across all levels.
