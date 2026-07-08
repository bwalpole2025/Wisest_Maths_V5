#!/usr/bin/env node
/**
 * Starts Next.js dev with a clean cache when .next is corrupted.
 * A partial/corrupt .next folder causes webpack runtime errors.
 */

import { existsSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const nextDir = resolve(root, ".next");

const markers = ["routes-manifest.json", "build-manifest.json"];
const hasNextDir = existsSync(nextDir);
const isCorrupt =
  hasNextDir && markers.some((name) => !existsSync(resolve(nextDir, name)));

if (isCorrupt) {
  console.log("Removing corrupt .next cache…");
  rmSync(nextDir, { recursive: true, force: true });
}

const port = process.env.PORT ?? "3001";

const child = spawn("npx", ["next", "dev", "-H", "127.0.0.1", "-p", port], {
  cwd: root,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
