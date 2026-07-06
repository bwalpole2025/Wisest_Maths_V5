# Wisest Maths

This repository contains two distinct things:

1. **`wisest-maths-content/`** — the actual product: a **Next.js 15 (App Router) + React 19 + Tailwind** web app that presents a GCSE / A-Level maths question bank with step-by-step worked solutions (KaTeX-rendered). This is the app you run and test.
2. **Repo root** — content-authoring assets: curriculum PDFs, `scripts/parse_curriculum_pdf.py`, and Claude agent/skill definitions used to *generate* question data. These are not a runnable service.

## Cursor Cloud specific instructions

- **The dev server auto-starts.** `.cursor/environment.json` runs `npm install --prefix wisest-maths-content` on setup and launches the app in a background terminal via `cd wisest-maths-content && npm run dev -- --hostname 0.0.0.0 --port 3000`. This is what makes the app reachable from the user's browser (port 3000). Do not rely on ad-hoc tmux sessions for exposing the app — those do not persist across sessions. If you change the run command, update `.cursor/environment.json`, not just a terminal.
- Binding to `--hostname 0.0.0.0` is required so the forwarded port is reachable outside the VM; `localhost`-only binding is not enough for the browser preview.
- **All app work happens inside `wisest-maths-content/`.** Run `npm` commands from that directory, not the repo root.
- Package manager is **npm** (there is a `package-lock.json`). Node 18+ works; the environment ships Node 22.
- Dev server: `npm run dev` (Next.js on http://localhost:3000). Standard scripts are in `wisest-maths-content/package.json` (`dev`, `build`, `start`).
- **There is no lint script and ESLint is not installed.** `next.config.mjs` sets `eslint.ignoreDuringBuilds: true`. Use `npx tsc --noEmit` (TypeScript strict mode) as the type/lint check.
- There are **no automated tests** in this repo; validate changes by running the dev server and exercising the UI, plus `npx tsc --noEmit`.
- Question data lives in `src/data/questions/**/*.ts` and is aggregated through `src/lib/questions.ts`. Pages use `generateStaticParams`, so adding/removing question files changes which routes exist.
- Core user flow to smoke-test: `/` → `/questions` (question bank) → a subtopic → `/solve/<id>` (worked solution with intuitive step explanations).
- The Python script at the repo root (`scripts/parse_curriculum_pdf.py`) is an optional authoring tool and is not needed to run the web app.
