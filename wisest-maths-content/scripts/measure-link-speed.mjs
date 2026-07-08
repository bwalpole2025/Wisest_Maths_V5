#!/usr/bin/env node
/**
 * Measures navigation response times for all primary routes.
 * Run against a production server: npm run build && npm run start
 * Then: node scripts/measure-link-speed.mjs
 */

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";

const ROUTES = [
  "/",
  "/curriculum",
  "/curriculum/a-level-maths",
  "/curriculum/a-level-maths/year-2/mechanics",
  "/questions",
  "/questions/moments",
  "/solve/al.y2.mech.moments.q001",
  "/dashboard",
];

async function measure(path) {
  const url = `${BASE}${path}`;
  const start = performance.now();
  const res = await fetch(url, { headers: { Accept: "text/html" } });
  const ms = Math.round(performance.now() - start);
  return { path, status: res.status, ms };
}

async function main() {
  console.log(`Measuring link speeds against ${BASE}\n`);
  const results = [];

  for (const path of ROUTES) {
    try {
      const r = await measure(path);
      results.push(r);
      const ok = r.status < 400 && r.ms < 2000 ? "✓" : r.ms < 2000 ? "~" : "✗";
      console.log(`${ok} ${path.padEnd(50)} ${r.ms}ms (${r.status})`);
    } catch (err) {
      console.log(`✗ ${path.padEnd(50)} FAILED`);
      results.push({ path, status: 0, ms: 9999 });
    }
  }

  const times = results.map((r) => r.ms).filter((m) => m < 9000);
  const avg = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
  const max = Math.max(...times);
  const under2s = times.every((m) => m < 2000);

  console.log(`\nAverage: ${avg}ms | Max: ${max}ms | All <2s: ${under2s ? "YES" : "NO"}`);
  process.exit(under2s ? 0 : 1);
}

main();
