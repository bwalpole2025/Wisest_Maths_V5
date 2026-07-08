#!/usr/bin/env node
/**
 * Starts Next.js dev with a clean cache when .next is corrupted.
 * A partial/corrupt .next folder causes webpack runtime errors and missing CSS.
 */

import { existsSync, rmSync } from "node:fs";
import { createServer } from "node:net";
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
const isProductionBuild =
  hasNextDir &&
  (existsSync(resolve(nextDir, "BUILD_ID")) ||
    existsSync(resolve(nextDir, "export-marker.json")));

if (isCorrupt || isProductionBuild) {
  console.log("Removing stale .next cache…");
  rmSync(nextDir, { recursive: true, force: true });
}

function portFree(port) {
  return new Promise((resolvePort) => {
    const server = createServer();
    server.once("error", () => resolvePort(false));
    server.once("listening", () => {
      server.close(() => resolvePort(true));
    });
    server.listen(port, "127.0.0.1");
  });
}

async function pickPort(preferred) {
  const candidates = [preferred, 3001, 3002, 3000, 3003, 3004];
  const seen = new Set();
  for (const port of candidates) {
    if (seen.has(port)) continue;
    seen.add(port);
    if (await portFree(port)) return port;
  }
  throw new Error("No free port found between 3000–3004");
}

const preferred = Number(process.env.PORT ?? "3001");
const port = await pickPort(preferred);

if (port !== preferred) {
  console.log(`Port ${preferred} is busy — using ${port} instead.`);
}

console.log(`\n  Wisest Maths dev → http://127.0.0.1:${port}\n`);

const child = spawn("npx", ["next", "dev", "-H", "127.0.0.1", "-p", String(port)], {
  cwd: root,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
