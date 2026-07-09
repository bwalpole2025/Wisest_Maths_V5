const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "src/data/questions/gcse/number");
const specs = [
  ["priority-of-operations.ts", "gcse.number.order-of-operations"],
  ["factors-multiples-and-primes.ts", "gcse.number.factors-multiples"],
  ["prime-factorisation.ts", "gcse.number.prime-factorisation"],
  ["systematic-listing.ts", "gcse.number.systematic-listing"],
  ["product-rule-for-counting.ts", "gcse.number.product-rule"],
];
let ok = true;
for (const [file, sid] of specs) {
  const f = path.join(base, file);
  if (!fs.existsSync(f)) { console.log("MISSING FILE:", file); ok = false; continue; }
  let s = fs.readFileSync(f, "utf8");
  const marker = "= [";
  const start = s.indexOf(marker) + marker.length - 1;
  const end = s.lastIndexOf("]");
  let arr;
  try { arr = JSON.parse(s.slice(start, end + 1)); }
  catch (e) { console.log(file, "JSON PARSE FAIL:", e.message); ok = false; continue; }
  const problems = [];
  if (arr.length !== 70) problems.push("count=" + arr.length);
  const ids = arr.map((q) => q.id);
  const dupes = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
  if (dupes.length) problems.push("dupes=" + dupes.join(","));
  arr.forEach((q, i) => {
    const n = String(i + 1).padStart(3, "0");
    if (q.id !== sid + ".q" + n) problems.push("idmismatch@" + i + ":" + q.id);
    if (q.subtopicId !== sid) problems.push("subtopicId@" + q.id);
    if (q.questionDiagram !== null) problems.push("qdiagram@" + q.id);
    const steps = q.workedSolution.steps;
    if (steps.length < 6) problems.push("steps<6@" + q.id + "=" + steps.length);
    steps.forEach((st, j) => {
      if (st.stepNumber !== j + 1) problems.push("stepnum@" + q.id);
      if (st.diagram !== null) problems.push("stepdiagram@" + q.id);
      if (!st.explanation || !st.explanation.trim()) problems.push("emptyexpl@" + q.id);
    });
    const req = ["id","level","topic","subtopic","subtopicId","difficulty","marks","answerType","tags","questionText","questionDiagram","workedSolution"];
    req.forEach((k) => { if (!(k in q)) problems.push("missing " + k + "@" + q.id); });
  });
  const byDiff = {};
  arr.forEach((q) => (byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1));
  const uniqProblems = [...new Set(problems)];
  console.log(file + ": count=" + arr.length + " diff=" + JSON.stringify(byDiff) + " problems=" + (uniqProblems.length ? uniqProblems.slice(0, 10).join(" | ") : "NONE"));
  if (uniqProblems.length) ok = false;
}
console.log(ok ? "\nALL FILES OK" : "\nISSUES FOUND");
