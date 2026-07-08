# /mcp - One-command MCP Manager (Chat-Only)

When I type `/mcp` or "add mobbin" or "connect github supabase":
- Validate and fix any JSON syntax
- Add the requested server with correct format
- Save to `.cursor/mcp.json`
- Restart MCP connection
- Confirm with list of all connected tools + test one call

Always keep everything inside chat. Make it smart enough to handle multiple servers without duplicates.

---

## Triggers

Activate this command when the user:
- Types `/mcp` (with optional args: server names, `list`, `remove <name>`, `status`)
- Says "add/connect/install/enable MCP …" (e.g. `add mobbin`, `connect github supabase`)
- Asks to fix, update, or show `.cursor/mcp.json`

Parse **all** server names from one message (e.g. `connect github supabase` → add both).

---

## Workflow (execute in order — stay in chat)

```
Task Progress:
- [ ] 1. Parse intent and server names
- [ ] 2. Read existing .cursor/mcp.json (or create empty scaffold)
- [ ] 3. Validate / fix JSON
- [ ] 4. Merge servers (no duplicates)
- [ ] 5. Ask for missing secrets only when required
- [ ] 6. Write .cursor/mcp.json
- [ ] 7. Restart MCP connection
- [ ] 8. List all tools + test one call
- [ ] 9. Reply with summary + full file contents
```

### 1. Parse intent

| User says | Action |
|-----------|--------|
| `list` / `status` / bare `/mcp` | Show current config + connected tools (skip add) |
| `remove github` / `disconnect supabase` | Remove matching server(s), then steps 6–9 |
| `add X` / `connect X Y` | Add server(s) X, Y, … |
| `fix` / broken JSON mentioned | Repair syntax, preserve existing servers |

Normalize names to **lowercase kebab-case** keys (e.g. `GitHub MCP` → `github`).

### 2. Read config

- **Project scope (default):** `.cursor/mcp.json` in workspace root
- If missing, start with: `{ "mcpServers": {} }`
- If user says "global", use `~/.cursor/mcp.json` instead and say so in the reply

### 3. Validate and fix JSON

Before writing:
1. Parse with `python3 -c "import json; json.load(open('.cursor/mcp.json'))"` (or equivalent)
2. Auto-fix common issues: trailing commas, `//` comments (strip), single quotes → double, BOM, duplicate keys
3. Ensure top-level shape: `{ "mcpServers": { ... } }` — wrap bare server objects if needed
4. Re-validate after fixes; if still invalid, show the error and the corrected draft

### 4. Deduplication (critical)

Before adding, check existing `mcpServers` keys **and** semantic duplicates:

| Match rule | Treat as same server |
|------------|----------------------|
| Key alias | `github` ≈ `github-mcp` ≈ `gh` |
| `args` package | Same npm package (e.g. `@modelcontextprotocol/server-github`, `ghcr.io/github/github-mcp-server`) |
| `url` host | Same domain (e.g. `api.githubcopilot.com`) |

If duplicate found: **update** the existing entry (merge `env`, prefer user's new tokens) — never add a second key.

**Alias map** (normalize user input → canonical key):

| User input | Canonical key |
|------------|---------------|
| mobbin | `mobbin` |
| github, gh | `github` |
| supabase, sb | `supabase` |
| playwright, pw | `playwright` |
| filesystem, fs | `filesystem` |
| postgres, postgresql, pg | `postgres` |
| linear | `linear` |
| sentry | `sentry` |
| notion | `notion` |
| slack | `slack` |
| brave, brave-search | `brave-search` |
| context7 | `context7` |
| cursor-app-control | `cursor-app-control` |

### 5. Server templates

Use these defaults. Replace `<PLACEHOLDER>` values; ask the user in chat only when a required secret is missing.

**mobbin** (session cookies — run `npx -y mobbin-mcp auth` first, or set cookie):
```json
"mobbin": {
  "command": "npx",
  "args": ["-y", "mobbin-mcp"]
}
```

**github** (stdio — official npm server):
```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "<GITHUB_PAT>"
  }
}
```

**github** (docker alternative — use only if user asks):
```json
"github": {
  "command": "docker",
  "args": [
    "run", "-i", "--rm",
    "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
    "ghcr.io/github/github-mcp-server"
  ],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "<GITHUB_PAT>"
  }
}
```

**supabase**:
```json
"supabase": {
  "command": "npx",
  "args": [
    "-y",
    "@supabase/mcp-server-supabase@latest",
    "--access-token",
    "<SUPABASE_PAT>"
  ]
}
```

**playwright**:
```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest"]
}
```

**filesystem** (ask user for allowed path if not given):
```json
"filesystem": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "<ABSOLUTE_PATH>"]
}
```

**postgres**:
```json
"postgres": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-postgres", "<POSTGRES_CONNECTION_STRING>"]
}
```

**linear** (remote HTTP):
```json
"linear": {
  "url": "https://mcp.linear.app/mcp",
  "headers": {
    "Authorization": "Bearer <LINEAR_API_KEY>"
  }
}
```

**brave-search**:
```json
"brave-search": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-brave-search"],
  "env": {
    "BRAVE_API_KEY": "<BRAVE_API_KEY>"
  }
}
```

**context7**:
```json
"context7": {
  "command": "npx",
  "args": ["-y", "@upstash/context7-mcp"]
}
```

For unknown servers: web-search the official MCP install docs, build `command`/`args` or `url`/`headers` entry, and add it.

**Secrets rule:** Never commit real tokens. Use placeholders in the saved file if the user hasn't provided a value; tell them which env var to set. Warn if `.cursor/mcp.json` contains secrets and suggest `.gitignore`.

### 6. Write file

- Pretty-print JSON (2-space indent)
- Write to `.cursor/mcp.json`
- **Always show the full final file** in the chat response inside a `json` code block

### 7. Restart MCP connection

Do all of the following in chat (no external tabs required):

1. After save, note: *"Cursor reloads MCP when `mcp.json` changes."*
2. Tell the user: if tools don't appear within ~10s, run **Developer: Reload Window** from the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`), or toggle the server off/on in **Settings → MCP**.
3. Re-read the MCP tool cache: `~/.cursor/projects/<workspace-slug>/mcps/<server>/tools/*.json`
4. If a `cursor-app-control` MCP is available, you may use it for in-IDE actions only — there is no MCP restart tool; reload window is the fallback.

### 8. Confirm: list tools + test one call

1. **List tools** — For each server in `mcpServers`, list tool names from the MCP filesystem cache (`mcps/<server>/tools/`) or from Settings. Format:

   ```
   ## Connected MCP Tools
   - **github** (12 tools): create_issue, search_repositories, …
   - **supabase** (8 tools): list_tables, execute_sql, …
   ```

2. **Test one call** — Pick the safest read-only tool on the newly added server (e.g. `search_repositories`, `list_tables`, `user_info`). Before calling:
   - Read the tool schema from `mcps/<server>/tools/<tool>.json`
   - Call via `CallMcpTool` with minimal valid args
   - Report success or the exact error (auth, spawn, not found)

3. If tools aren't in cache yet (post-reload), say so clearly and ask the user to reload window, then re-run step 8 in a follow-up message.

### 9. Reply format

```markdown
## MCP Update Complete

**Action:** Added `mobbin`, `github`, `supabase`  
**File:** `.cursor/mcp.json`  
**Duplicates skipped:** none

### Full config
\`\`\`json
{ ... entire file ... }
\`\`\`

### Connected tools
- **github**: tool1, tool2, …
- **supabase**: tool1, tool2, …

### Test call
- **Server:** github → **Tool:** search_repositories → **Result:** OK (or error details)

### Next steps (if needed)
- Set `GITHUB_PERSONAL_ACCESS_TOKEN` and reload if test failed with auth error
```

---

## Examples

**`/mcp add mobbin`**
→ Add `mobbin` template, save, list tools, test a read-only Mobbin tool.

**`connect github supabase`**
→ Add both in one pass, dedupe if either exists, ask only for missing PATs.

**`/mcp list`**
→ Print full `mcp.json` + all tool names; no file changes.

**`/mcp remove github`**
→ Remove `github` / `github-mcp` keys, save, confirm remaining servers.

---

## Constraints

- **Chat-only** — never open browser tabs or external docs unless fetching install instructions for an unknown server
- **No duplicate servers** — merge by alias and package name
- **Always output the full saved file** in the response
- **Validate JSON** before and after every write
- Prefer project `.cursor/mcp.json` over global unless user specifies global
