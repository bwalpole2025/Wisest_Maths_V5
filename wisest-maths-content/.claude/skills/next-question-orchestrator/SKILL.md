---
name: next-question-orchestrator
description: Master orchestrator that coordinates the full pipeline and forces output as ready-to-copy TypeScript code.
---

# Next Question Orchestrator

## Purpose
This skill runs the entire pipeline and **always outputs valid TypeScript code** ready to paste into the frontend.

## Mandatory Output Rule
- Final response must be **only** a TypeScript code block containing the full `questions: Question[]` array.
- Include the import line `import { Question } from "@/lib/types";`.
- Never output JSON or plain text explanations outside the code block.
- **All question bank files must be `.ts` files** — never save intermediate batches as `.json`.

## File conventions

### Final subtopic file
Path: `wisest-maths-content/src/data/questions/<level>/<strand>/<subtopic-slug>.ts`

```ts
import { Question } from "@/lib/types";

export const questions: Question[] = [
  // 70 Question objects
];
```

### Intermediate batch files (during generation)
Path: `.../<subtopic-slug>-q001-q018.ts` (etc.)

```ts
import type { Question } from "@/lib/types";

/** Subtopic name q001–q018 */
export const batch: Question[] = [
  // partial Question objects
];
```

Combine batches with:
```bash
node scripts/combine_questions_to_ts.mjs <output.ts> <batch1.ts> <batch2.ts> ...
```

Delete batch `.ts` files after combining into the final subtopic file.

## Command Handling
When the user says:
- "resume a-level maths subtopic" or "continue current subtopic" → keep adding questions to the current subtopic until it reaches 70.
- "Create the next subtopic" → finish current (if needed) and start the next one.
- "Generate X questions" → generate that many and output as TypeScript.

## Pipeline
1. topic-planner
2. question-creator
3. solution-architect
4. worked-solution-writer + intuitive-explanation
5. quality-reviewer-agent
6. If passes → collect the question and add it to the TypeScript array
7. Update progress.json
8. Register in `index.ts` if new subtopic; run `npm run sync:questions` in `wisest-maths-content`
9. At the end, output the complete TypeScript code block.

## Final Output Instruction
Always end with a single, clean TypeScript code block containing all generated questions in this session. No extra text outside the code block.
