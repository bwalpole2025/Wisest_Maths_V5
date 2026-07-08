# /ship - Atomic Commit + Push + PR (Chat-Only)

Description: One-word command that ships everything perfectly inside chat.

When user types /ship or "ship it":

1. git add .

2. Analyze diff and generate Conventional Commit message + emoji (feat/fix/refactor/etc.)

3. git commit -m "[message]"

4. git push --set-upstream origin $(git branch --show-current)

5. Create PR with:

   - Title: same as commit

   - Body: auto-generated changelog + checklist

   - Labels: enhancement / bugfix

6. Run tests `npm test` or equivalent)

7. If tests fail → auto-fix + re-ship

8. Respond only with: ✅ Shipped! PR: [link] | Commit: [hash] | Tests: ✅

Rules: Stay 100% inside chat. Never suggest opening terminal or clicking buttons.

Always confirm success visually.