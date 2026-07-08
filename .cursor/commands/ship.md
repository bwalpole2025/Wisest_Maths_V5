---
name: ship
description: Instant commit, push, PR. On /ship only.
model: claude-sonnet-5-thinking-high
fast: true
---

# /ship

**Model:** `claude-sonnet-5-thinking-high` or fastest Haiku. No thinking, no subagents, no file reads, no repo scan.

**Timer:** `T0` = first token. **One** `Shell` call for all git/gh. **Reply:** exactly one line:

`✅ Shipped in {X}ms | {PR_URL} | {SHORT_HASH}`

Nothing else — no summary, no questions, no status blocks.

---

## Project map (pre-loaded — do NOT re-read CLAUDE.md or scan)

| Path | Role |
|------|------|
| `wisest-maths-content/progress.json` | Subtopic progress, 70-q target |
| `wisest-maths-content/src/data/questions/` | `Question[]` TS per subtopic |
| `wisest-maths-content/src/lib/questions.ts` | Question registry |
| `wisest-curriculum.json` | Curriculum source |
| `skills/`, `.claude/agents/` | Content-gen pipeline |

Infer commit message + PR title/body from **chat context only** (already in window). Skip `.env`, credentials, `.cursor/mcp.json` secrets.

---

## Single shell (copy, fill `COMMIT`, `TITLE`, `BODY`, run once)

```bash
T0=$(python3 -c 'import time;print(int(time.time()*1000))')
git add -A
git diff --cached --name-only | grep -qE '(^|/)\.env$|credentials|secrets' && { echo "BLOCKED:secrets"; exit 1; }
git diff --cached --quiet && { echo "BLOCKED:nothing-to-ship"; exit 1; }
git commit -m "$(cat <<'EOF'
COMMIT
EOF
)"
git push -u origin HEAD
PR=$(gh pr create --title "TITLE" --body "$(cat <<'EOF'
BODY
EOF
)" 2>/dev/null || gh pr view --json url -q .url)
HASH=$(git rev-parse --short HEAD)
T1=$(python3 -c 'import time;print(int(time.time()*1000))')
echo "MS:$((T1-T0))|PR:$PR|HASH:$HASH"
```

`required_permissions: ["all"]` · `description: "Ship commit push PR"`

---

## Parse → reply

| Shell output | Your reply |
|--------------|------------|
| `MS:N\|PR:url\|HASH:abc` | `✅ Shipped in Nms \| url \| abc` |
| `BLOCKED:nothing-to-ship` | `✅ Shipped in Xms \| (no changes) \| —` |
| `BLOCKED:secrets` | `✅ Shipped in Xms \| (blocked: secrets staged) \| —` |
| other error | `✅ Shipped in Xms \| (failed) \| —` |

`X` = elapsed since `T0`. No follow-up text.
