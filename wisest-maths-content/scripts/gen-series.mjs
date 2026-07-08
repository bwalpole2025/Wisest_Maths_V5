import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const LEVEL = "A-Level Further Maths";
const TOPIC = "Further Maths Year 1: Pure (Core Pure 1)";
const SUB = "Series";
const SID = "fm.y1.pure.series";

// ---- exact standard-result helpers -------------------------------------
const S1 = (n) => (n * (n + 1)) / 2;
const S2 = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
const S3 = (n) => ((n * (n + 1)) / 2) ** 2;

const questions = [];
let counter = 0;

function step(description, workingLatex, explanation) {
  return { description, workingLatex, explanation, diagram: null };
}

const RECALL = step(
  "Recall the standard results",
  "\\sum_{r=1}^{n} r = \\tfrac12 n(n+1),\\quad \\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1),\\quad \\sum_{r=1}^{n} r^{3} = \\tfrac14 n^{2}(n+1)^{2}",
  "These three closed forms, together with $\\sum_{r=1}^{n} c = cn$, let us evaluate any polynomial series without adding terms one by one."
);

function push({ difficulty, marks, tags, questionText, steps, finalAnswer }) {
  counter += 1;
  questions.push({
    level: LEVEL,
    topic: TOPIC,
    subtopic: SUB,
    subtopicId: SID,
    questionDiagram: null,
    id: `${SID}.q${String(counter).padStart(3, "0")}`,
    tags,
    difficulty,
    marks,
    answerType: "written",
    questionText,
    workedSolution: {
      steps: steps.map((s, i) => ({ stepNumber: i + 1, ...s })),
      finalAnswer,
    },
  });
}

// ======================================================================
// EASY (25) — evaluate the standard sums and sums of a constant
// ======================================================================

function easyS1(n) {
  const prod = n * (n + 1);
  const ans = S1(n);
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["standard-result", "sum-of-r"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} r$.`,
    steps: [
      step("Recall the standard result", "\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)", "The sum of the first $n$ positive integers has a known closed form, so there is no need to add the terms one at a time."),
      step("Identify the value of $n$", `n = ${n}`, "The upper limit of the sum tells us how many terms we are adding, which is the $n$ in the formula."),
      step("Substitute into the formula", `\\sum_{r=1}^{${n}} r = \\tfrac12\\times ${n}\\times(${n}+1)`, "Replacing $n$ with its value turns the general rule into a single arithmetic calculation."),
      step("Simplify the bracket", `= \\tfrac12\\times ${n}\\times ${n + 1}`, "Work out the contents of the bracket first, following the order of operations."),
      step("Multiply the whole numbers", `${n}\\times ${n + 1} = ${prod}`, "Multiplying before halving keeps the numbers as whole numbers for as long as possible."),
      step("Halve the product", `\\tfrac12\\times ${prod} = ${ans}`, "The factor of a half in the formula means the final step is simply to divide by two."),
      step("State the result", `\\sum_{r=1}^{${n}} r = ${ans}`, `This is the total of every whole number from $1$ up to $${n}$.`),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}} r = ${ans}$`,
  });
}

function easyS2(n) {
  const a = n, b = n + 1, c = 2 * n + 1;
  const prod = a * b * c;
  const ans = S2(n);
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["standard-result", "sum-of-r-squared"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} r^{2}$.`,
    steps: [
      step("Recall the standard result", "\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)", "The sum of the first $n$ square numbers also has a closed form, which is far quicker than squaring and adding each term."),
      step("Identify the value of $n$", `n = ${n}`, "The upper limit is the value we substitute for $n$."),
      step("Substitute into the formula", `\\sum_{r=1}^{${n}} r^{2} = \\tfrac16\\times ${n}\\times(${n}+1)\\times(2\\times ${n}+1)`, "Every $n$ in the formula is replaced by its value."),
      step("Simplify each bracket", `= \\tfrac16\\times ${a}\\times ${b}\\times ${c}`, `Evaluate the two brackets before multiplying, so $n+1=${b}$ and $2n+1=${c}$.`),
      step("Multiply the first two factors", `${a}\\times ${b} = ${a * b}`, "Building the product step by step reduces the chance of an arithmetic slip."),
      step("Multiply by the third factor", `${a * b}\\times ${c} = ${prod}`, "This completes the numerator before we divide."),
      step("Divide by six", `\\tfrac{${prod}}{6} = ${ans}`, "The formula's factor of one sixth is applied last."),
      step("State the result", `\\sum_{r=1}^{${n}} r^{2} = ${ans}`, `This is the total of the first $${n}$ square numbers.`),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}} r^{2} = ${ans}$`,
  });
}

function easyS3(n) {
  const half = S1(n);
  const ans = S3(n);
  push({
    difficulty: "Easy",
    marks: 3,
    tags: ["standard-result", "sum-of-r-cubed"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} r^{3}$.`,
    steps: [
      step("Recall the standard result", "\\sum_{r=1}^{n} r^{3} = \\tfrac14 n^{2}(n+1)^{2}", "The sum of the first $n$ cubes equals the square of the sum of the first $n$ integers, a neat and memorable pattern."),
      step("Identify the value of $n$", `n = ${n}`, "The upper limit gives the value of $n$ to substitute."),
      step("Use the square-of-a-sum form", `\\sum_{r=1}^{${n}} r^{3} = \\left(\\tfrac12\\times ${n}\\times(${n}+1)\\right)^{2}`, "Writing it as $\\left(\\tfrac12 n(n+1)\\right)^2$ lets us reuse the sum-of-$r$ result we already know."),
      step("Evaluate the inner sum", `\\tfrac12\\times ${n}\\times ${n + 1} = ${half}`, `The bracket is just $\\sum_{r=1}^{${n}} r = ${half}$.`),
      step("Square the inner value", `${half}^{2} = ${ans}`, "Squaring the sum of the integers gives the sum of the cubes."),
      step("State the result", `\\sum_{r=1}^{${n}} r^{3} = ${ans}`, `This is the total of the first $${n}$ cube numbers.`),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}} r^{3} = ${ans}$`,
  });
}

function easyConst(n, c) {
  const ans = n * c;
  push({
    difficulty: "Easy",
    marks: 2,
    tags: ["standard-result", "sum-of-constant"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}} ${c}$.`,
    steps: [
      step("Interpret the sum", `\\sum_{r=1}^{${n}} ${c} = \\underbrace{${c}+${c}+\\cdots+${c}}_{${n}\\text{ terms}}`, "The summand does not depend on $r$, so the same constant is added once for every value of $r$."),
      step("Use the constant rule", "\\sum_{r=1}^{n} c = cn", "Adding a constant $c$ a total of $n$ times is the same as multiplying $c$ by $n$."),
      step("Substitute the values", `= ${c}\\times ${n}`, `Here the constant is $${c}$ and there are $${n}$ terms.`),
      step("Multiply", `${c}\\times ${n} = ${ans}`, "A single multiplication gives the total."),
      step("Check with a small count", `\\sum_{r=1}^{3} ${c} = ${c}+${c}+${c} = ${3 * c}`, "Testing three terms confirms the rule behaves as expected before trusting it for many terms."),
      step("State the result", `\\sum_{r=1}^{${n}} ${c} = ${ans}`, "The constant contributes equally from each term."),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}} ${c} = ${ans}$`,
  });
}

[10, 20, 50, 100, 15, 25, 30, 40].forEach(easyS1);
[5, 6, 7, 9, 10, 12, 15, 20].forEach(easyS2);
[4, 5, 6, 7, 8, 10].forEach(easyS3);
easyConst(8, 3);
easyConst(12, 5);
easyConst(20, 7);

// ======================================================================
// INTERMEDIATE (30) — combinations in terms of n, and numeric evaluation
// ======================================================================

// -- (a) "express in terms of n" ---------------------------------------
function comboInN({ marks = 5, tags, summand, expand, decompose, substituted, factorSteps, check, answerLatex }) {
  const steps = [
    step("Write the sum", `\\sum_{r=1}^{n}\\left(${summand}\\right)`, "We want a formula in terms of $n$, so the upper limit stays general."),
    ...(expand ? [step(expand.desc, expand.work, expand.expl)] : []),
    RECALL,
    step("Split using the linearity of $\\sum$", decompose, "A sum of terms separates into separate sums, and any constant multiplier can be taken outside its sum."),
    step("Insert the standard results", substituted, "Replace each basic sum with its closed form."),
    ...factorSteps.map((f) => step(f.desc, f.work, f.expl)),
    step("Check with a small value of $n$", check, "Substituting a small $n$ into both the original sum and the formula confirms the algebra."),
    step("State the result", `\\sum_{r=1}^{n}\\left(${summand}\\right) = ${answerLatex}`, "The expression is fully factorised, which is the tidiest form and the easiest to evaluate for any $n$."),
  ];
  push({
    difficulty: "Intermediate",
    marks,
    tags,
    questionText: `Show that $\\displaystyle\\sum_{r=1}^{n}\\left(${summand}\\right)$ can be written in terms of $n$, giving your answer in a fully factorised form.`,
    steps,
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{n}\\left(${summand}\\right) = ${answerLatex}$`,
  });
}

// 1
comboInN({
  tags: ["linear-combination", "factorising"],
  summand: "r^{2}+r",
  decompose: "\\sum_{r=1}^{n} r^{2} + \\sum_{r=1}^{n} r",
  substituted: "\\tfrac16 n(n+1)(2n+1) + \\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Take out the common factor", work: "n(n+1)\\left[\\tfrac16(2n+1) + \\tfrac12\\right]", expl: "Both terms share $n(n+1)$, so pulling it out leaves a simple bracket to tidy." },
    { desc: "Combine the fractions", work: "n(n+1)\\cdot\\tfrac{(2n+1)+3}{6} = n(n+1)\\cdot\\tfrac{2n+4}{6}", expl: "Writing over a common denominator of $6$ turns the bracket into a single fraction." },
    { desc: "Simplify the fraction", work: "n(n+1)\\cdot\\tfrac{2(n+2)}{6} = \\tfrac{n(n+1)(n+2)}{3}", expl: "Factor $2$ out of the numerator and cancel with the $6$." },
  ],
  check: "n=2:\\;(1+1)+(4+2)=8,\\quad \\tfrac13(2)(3)(4)=8",
  answerLatex: "\\tfrac{1}{3}n(n+1)(n+2)",
});

// 2
comboInN({
  tags: ["linear-combination", "factorising"],
  summand: "r^{2}-r",
  decompose: "\\sum_{r=1}^{n} r^{2} - \\sum_{r=1}^{n} r",
  substituted: "\\tfrac16 n(n+1)(2n+1) - \\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Take out the common factor", work: "n(n+1)\\left[\\tfrac16(2n+1) - \\tfrac12\\right]", expl: "Again $n(n+1)$ is common to both terms." },
    { desc: "Combine the fractions", work: "n(n+1)\\cdot\\tfrac{(2n+1)-3}{6} = n(n+1)\\cdot\\tfrac{2n-2}{6}", expl: "Use the common denominator $6$ and subtract the numerators." },
    { desc: "Simplify the fraction", work: "n(n+1)\\cdot\\tfrac{2(n-1)}{6} = \\tfrac{(n-1)n(n+1)}{3}", expl: "Factor $2$ from $2n-2$ and cancel with the denominator." },
  ],
  check: "n=2:\\;(1-1)+(4-2)=2,\\quad \\tfrac13(1)(2)(3)=2",
  answerLatex: "\\tfrac{1}{3}(n-1)n(n+1)",
});

// 3
comboInN({
  tags: ["linear-combination"],
  summand: "2r+1",
  decompose: "2\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 1",
  substituted: "2\\cdot\\tfrac12 n(n+1) + n",
  factorSteps: [
    { desc: "Simplify each piece", work: "n(n+1) + n", expl: "The $2$ cancels the half, and the sum of $n$ ones is simply $n$." },
    { desc: "Expand", work: "n^{2}+n+n", expl: "Expanding lets us collect the like terms." },
    { desc: "Collect like terms", work: "n^{2}+2n", expl: "Add the two $n$ terms together." },
    { desc: "Factorise", work: "n(n+2)", expl: "Taking out the common factor $n$ gives the tidy product form." },
  ],
  check: "n=2:\\;3+5=8,\\quad 2(4)=8",
  answerLatex: "n(n+2)",
});

// 4
comboInN({
  tags: ["linear-combination", "odd-numbers"],
  summand: "2r-1",
  decompose: "2\\sum_{r=1}^{n} r - \\sum_{r=1}^{n} 1",
  substituted: "2\\cdot\\tfrac12 n(n+1) - n",
  factorSteps: [
    { desc: "Simplify each piece", work: "n(n+1) - n", expl: "This is the sum of the first $n$ odd numbers, which we expect to be a perfect square." },
    { desc: "Expand", work: "n^{2}+n-n", expl: "Expanding the product prepares the terms for cancelling." },
    { desc: "Collect like terms", work: "n^{2}", expl: "The $+n$ and $-n$ cancel, leaving a single term." },
  ],
  check: "n=3:\\;1+3+5=9,\\quad 3^{2}=9",
  answerLatex: "n^{2}",
});

// 5
comboInN({
  tags: ["linear-combination", "factorising"],
  summand: "3r^{2}+2r",
  decompose: "3\\sum_{r=1}^{n} r^{2} + 2\\sum_{r=1}^{n} r",
  substituted: "3\\cdot\\tfrac16 n(n+1)(2n+1) + 2\\cdot\\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Simplify the multipliers", work: "\\tfrac12 n(n+1)(2n+1) + n(n+1)", expl: "The $3$ over $6$ becomes a half, and the $2$ over $2$ becomes $1$." },
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac12(2n+1)+1\\right]", expl: "Both terms contain $n(n+1)$." },
    { desc: "Combine inside the bracket", work: "n(n+1)\\cdot\\tfrac{(2n+1)+2}{2} = \\tfrac{n(n+1)(2n+3)}{2}", expl: "Over a denominator of $2$ the bracket simplifies to $2n+3$." },
  ],
  check: "n=2:\\;(3+2)+(12+4)=21,\\quad \\tfrac12(2)(3)(7)=21",
  answerLatex: "\\tfrac{1}{2}n(n+1)(2n+3)",
});

// 6
comboInN({
  tags: ["linear-combination", "factorising"],
  summand: "6r^{2}+4r",
  decompose: "6\\sum_{r=1}^{n} r^{2} + 4\\sum_{r=1}^{n} r",
  substituted: "6\\cdot\\tfrac16 n(n+1)(2n+1) + 4\\cdot\\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Simplify the multipliers", work: "n(n+1)(2n+1) + 2n(n+1)", expl: "The $6$ cancels the sixth, and $4$ over $2$ gives $2$." },
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[(2n+1)+2\\right]", expl: "Removing the common factor leaves a linear bracket." },
    { desc: "Tidy the bracket", work: "n(n+1)(2n+3)", expl: "Adding the constants inside gives $2n+3$." },
  ],
  check: "n=2:\\;(24+8)+(6+4)=42,\\quad (2)(3)(7)=42",
  answerLatex: "n(n+1)(2n+3)",
});

// 7
comboInN({
  tags: ["linear-combination", "factorising"],
  summand: "3r^{2}+3r",
  decompose: "3\\sum_{r=1}^{n} r^{2} + 3\\sum_{r=1}^{n} r",
  substituted: "3\\cdot\\tfrac16 n(n+1)(2n+1) + 3\\cdot\\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Simplify the multipliers", work: "\\tfrac12 n(n+1)(2n+1) + \\tfrac32 n(n+1)", expl: "Cancel each $3$ against its denominator." },
    { desc: "Take out $\\tfrac12 n(n+1)$", work: "\\tfrac12 n(n+1)\\left[(2n+1)+3\\right]", expl: "A factor of $\\tfrac12 n(n+1)$ is common to both terms." },
    { desc: "Tidy the bracket", work: "\\tfrac12 n(n+1)(2n+4) = n(n+1)(n+2)", expl: "The bracket $2n+4=2(n+2)$ cancels the half." },
  ],
  check: "n=2:\\;(3+3)+(12+6)=24,\\quad (2)(3)(4)=24",
  answerLatex: "n(n+1)(n+2)",
});

// 8
comboInN({
  tags: ["product-expansion", "factorising"],
  summand: "r(r+2)",
  expand: { desc: "Expand the product first", work: "r(r+2)=r^{2}+2r", expl: "Expanding turns the product into a combination of standard powers of $r$." },
  decompose: "\\sum_{r=1}^{n} r^{2} + 2\\sum_{r=1}^{n} r",
  substituted: "\\tfrac16 n(n+1)(2n+1) + 2\\cdot\\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Simplify the second term", work: "\\tfrac16 n(n+1)(2n+1) + n(n+1)", expl: "The $2$ cancels the half in the sum of $r$." },
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac16(2n+1)+1\\right]", expl: "The common factor $n(n+1)$ can be removed." },
    { desc: "Combine over a denominator of $6$", work: "n(n+1)\\cdot\\tfrac{(2n+1)+6}{6} = \\tfrac{n(n+1)(2n+7)}{6}", expl: "Adding the numerators gives $2n+7$." },
  ],
  check: "n=2:\\;(1\\cdot3)+(2\\cdot4)=11,\\quad \\tfrac16(2)(3)(11)=11",
  answerLatex: "\\tfrac{1}{6}n(n+1)(2n+7)",
});

// 9
comboInN({
  tags: ["product-expansion", "factorising"],
  summand: "r(r+1)",
  expand: { desc: "Expand the product first", work: "r(r+1)=r^{2}+r", expl: "Expanding gives standard powers of $r$." },
  decompose: "\\sum_{r=1}^{n} r^{2} + \\sum_{r=1}^{n} r",
  substituted: "\\tfrac16 n(n+1)(2n+1) + \\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac16(2n+1)+\\tfrac12\\right]", expl: "Both terms share the factor $n(n+1)$." },
    { desc: "Combine over $6$", work: "n(n+1)\\cdot\\tfrac{(2n+1)+3}{6} = n(n+1)\\cdot\\tfrac{2n+4}{6}", expl: "Use a common denominator of $6$." },
    { desc: "Simplify", work: "\\tfrac{n(n+1)(n+2)}{3}", expl: "Cancel the $2$ in $2n+4$ against the $6$." },
  ],
  check: "n=3:\\;2+6+12=20,\\quad \\tfrac13(3)(4)(5)=20",
  answerLatex: "\\tfrac{1}{3}n(n+1)(n+2)",
});

// 10
comboInN({
  tags: ["linear-combination", "factorising", "sum-of-r-cubed"],
  summand: "r^{3}-r",
  decompose: "\\sum_{r=1}^{n} r^{3} - \\sum_{r=1}^{n} r",
  substituted: "\\tfrac14 n^{2}(n+1)^{2} - \\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac14 n(n+1) - \\tfrac12\\right]", expl: "Each term contains a factor of $n(n+1)$." },
    { desc: "Combine over a denominator of $4$", work: "n(n+1)\\cdot\\tfrac{n(n+1)-2}{4} = n(n+1)\\cdot\\tfrac{n^{2}+n-2}{4}", expl: "Bring the bracket to a single fraction and expand $n(n+1)$." },
    { desc: "Factorise the quadratic", work: "n^{2}+n-2=(n+2)(n-1)", expl: "The quadratic factorises, revealing two more linear factors." },
    { desc: "Assemble the factors", work: "\\tfrac{(n-1)n(n+1)(n+2)}{4}", expl: "This is a product of four consecutive integers over $4$." },
  ],
  check: "n=2:\\;(1-1)+(8-2)=6,\\quad \\tfrac14(1)(2)(3)(4)=6",
  answerLatex: "\\tfrac{1}{4}(n-1)n(n+1)(n+2)",
});

// 11
comboInN({
  tags: ["linear-combination", "factorising", "sum-of-r-cubed"],
  summand: "r^{3}+r^{2}",
  decompose: "\\sum_{r=1}^{n} r^{3} + \\sum_{r=1}^{n} r^{2}",
  substituted: "\\tfrac14 n^{2}(n+1)^{2} + \\tfrac16 n(n+1)(2n+1)",
  factorSteps: [
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac14 n(n+1) + \\tfrac16(2n+1)\\right]", expl: "Both closed forms contain the factor $n(n+1)$." },
    { desc: "Use a common denominator of $12$", work: "n(n+1)\\cdot\\tfrac{3n(n+1)+2(2n+1)}{12}", expl: "The lowest common denominator of $4$ and $6$ is $12$." },
    { desc: "Expand the numerator", work: "3n^{2}+3n+4n+2 = 3n^{2}+7n+2", expl: "Collecting like terms tidies the numerator into a quadratic." },
    { desc: "Factorise the quadratic", work: "3n^{2}+7n+2=(3n+1)(n+2)", expl: "Factorising exposes the final linear factors." },
    { desc: "Assemble the factors", work: "\\tfrac{n(n+1)(n+2)(3n+1)}{12}", expl: "Collecting everything gives the fully factorised answer." },
  ],
  check: "n=2:\\;(1+1)+(8+4)=14,\\quad \\tfrac{1}{12}(2)(3)(4)(7)=14",
  answerLatex: "\\tfrac{1}{12}n(n+1)(n+2)(3n+1)",
});

// 12
comboInN({
  tags: ["linear-combination", "factorising", "sum-of-r-cubed"],
  summand: "r^{3}+r",
  decompose: "\\sum_{r=1}^{n} r^{3} + \\sum_{r=1}^{n} r",
  substituted: "\\tfrac14 n^{2}(n+1)^{2} + \\tfrac12 n(n+1)",
  factorSteps: [
    { desc: "Take out $n(n+1)$", work: "n(n+1)\\left[\\tfrac14 n(n+1) + \\tfrac12\\right]", expl: "Both terms contain $n(n+1)$." },
    { desc: "Combine over a denominator of $4$", work: "n(n+1)\\cdot\\tfrac{n(n+1)+2}{4}", expl: "Write the bracket as a single fraction over $4$." },
    { desc: "Expand the numerator", work: "n(n+1)+2 = n^{2}+n+2", expl: "Expanding prepares the quadratic for inspection." },
    { desc: "Note it does not factorise", work: "\\tfrac{n(n+1)(n^{2}+n+2)}{4}", expl: "The quadratic $n^2+n+2$ has no real roots, so this is the simplest factorised form." },
  ],
  check: "n=2:\\;(1+1)+(8+2)=12,\\quad \\tfrac14(2)(3)(8)=12",
  answerLatex: "\\tfrac{1}{4}n(n+1)(n^{2}+n+2)",
});

// 13
comboInN({
  marks: 6,
  tags: ["odd-numbers", "factorising"],
  summand: "(2r-1)^{2}",
  expand: { desc: "Expand the square first", work: "(2r-1)^{2}=4r^{2}-4r+1", expl: "Expanding gives a combination of the standard powers of $r$." },
  decompose: "4\\sum_{r=1}^{n} r^{2} - 4\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 1",
  substituted: "4\\cdot\\tfrac16 n(n+1)(2n+1) - 4\\cdot\\tfrac12 n(n+1) + n",
  factorSteps: [
    { desc: "Simplify the multipliers", work: "\\tfrac23 n(n+1)(2n+1) - 2n(n+1) + n", expl: "Cancel the coefficients against the formula denominators." },
    { desc: "Take out $\\tfrac13 n$", work: "\\tfrac13 n\\left[2(n+1)(2n+1) - 6(n+1) + 3\\right]", expl: "A factor of $\\tfrac13 n$ is common once everything is over $3$." },
    { desc: "Expand inside the bracket", work: "2(2n^{2}+3n+1) - 6n - 6 + 3 = 4n^{2}-1", expl: "Careful expansion collapses the bracket to a difference of two squares." },
    { desc: "Factorise the difference of squares", work: "\\tfrac13 n(4n^{2}-1) = \\tfrac{n(2n-1)(2n+1)}{3}", expl: "$4n^2-1=(2n-1)(2n+1)$ gives the fully factorised form." },
  ],
  check: "n=2:\\;1+9=10,\\quad \\tfrac13(2)(3)(5)=10",
  answerLatex: "\\tfrac{1}{3}n(2n-1)(2n+1)",
});

// 14
comboInN({
  tags: ["even-numbers", "factorising"],
  summand: "(2r)^{2}",
  expand: { desc: "Expand the square first", work: "(2r)^{2}=4r^{2}", expl: "The constant $2$ is squared and comes outside the sum." },
  decompose: "4\\sum_{r=1}^{n} r^{2}",
  substituted: "4\\cdot\\tfrac16 n(n+1)(2n+1)",
  factorSteps: [
    { desc: "Simplify the fraction", work: "\\tfrac46 n(n+1)(2n+1)", expl: "Multiply the coefficient into the closed form." },
    { desc: "Reduce the fraction", work: "\\tfrac23 n(n+1)(2n+1)", expl: "Cancel $\\tfrac46$ to $\\tfrac23$." },
  ],
  check: "n=2:\\;4+16=20,\\quad \\tfrac23(2)(3)(5)=20",
  answerLatex: "\\tfrac{2}{3}n(n+1)(2n+1)",
});

// 15
comboInN({
  marks: 6,
  tags: ["product-expansion", "factorising"],
  summand: "(r-1)(r-2)",
  expand: { desc: "Expand the product first", work: "(r-1)(r-2)=r^{2}-3r+2", expl: "Expanding gives standard powers of $r$ plus a constant." },
  decompose: "\\sum_{r=1}^{n} r^{2} - 3\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 2",
  substituted: "\\tfrac16 n(n+1)(2n+1) - 3\\cdot\\tfrac12 n(n+1) + 2n",
  factorSteps: [
    { desc: "Take out $\\tfrac16 n$", work: "\\tfrac16 n\\left[(n+1)(2n+1) - 9(n+1) + 12\\right]", expl: "Express everything over $6$ so that $\\tfrac16 n$ is a common factor." },
    { desc: "Combine the $(n+1)$ terms", work: "\\tfrac16 n\\left[(n+1)(2n-8) + 12\\right]", expl: "Group the two $(n+1)$ terms: $(2n+1)-9 = 2n-8$." },
    { desc: "Expand and collect", work: "(n+1)(2n-8)+12 = 2n^{2}-6n+4", expl: "Multiply out and simplify the bracket." },
    { desc: "Factorise", work: "\\tfrac16 n\\cdot 2(n^{2}-3n+2) = \\tfrac{n(n-1)(n-2)}{3}", expl: "Factor out $2$ and factorise $n^2-3n+2=(n-1)(n-2)$." },
  ],
  check: "n=3:\\;0+0+2=2,\\quad \\tfrac13(3)(2)(1)=2",
  answerLatex: "\\tfrac{1}{3}n(n-1)(n-2)",
});

// 16
comboInN({
  marks: 6,
  tags: ["linear-combination", "factorising"],
  summand: "5r^{2}-2r+3",
  decompose: "5\\sum_{r=1}^{n} r^{2} - 2\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 3",
  substituted: "5\\cdot\\tfrac16 n(n+1)(2n+1) - 2\\cdot\\tfrac12 n(n+1) + 3n",
  factorSteps: [
    { desc: "Simplify each term", work: "\\tfrac56 n(n+1)(2n+1) - n(n+1) + 3n", expl: "Cancel the multipliers against the denominators." },
    { desc: "Take out $\\tfrac16 n$", work: "\\tfrac16 n\\left[5(n+1)(2n+1) - 6(n+1) + 18\\right]", expl: "Express everything over $6$ so $\\tfrac16 n$ is common." },
    { desc: "Expand inside the bracket", work: "5(2n^{2}+3n+1) - 6n - 6 + 18 = 10n^{2}+9n+17", expl: "Careful expansion and collection gives a quadratic." },
    { desc: "Write the tidy result", work: "\\tfrac16 n(10n^{2}+9n+17)", expl: "The quadratic has no rational roots, so this factor-of-$n$ form is simplest." },
  ],
  check: "n=2:\\;6+19=25,\\quad \\tfrac16(2)(40+18+17)=25",
  answerLatex: "\\tfrac{1}{6}n(10n^{2}+9n+17)",
});

// 17
comboInN({
  tags: ["linear-combination", "telescoping-link"],
  summand: "3r^{2}-3r+1",
  decompose: "3\\sum_{r=1}^{n} r^{2} - 3\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 1",
  substituted: "3\\cdot\\tfrac16 n(n+1)(2n+1) - 3\\cdot\\tfrac12 n(n+1) + n",
  factorSteps: [
    { desc: "Simplify each term", work: "\\tfrac12 n(n+1)(2n+1) - \\tfrac32 n(n+1) + n", expl: "Cancel the numerical multipliers against the denominators." },
    { desc: "Group the first two terms", work: "\\tfrac12 n(n+1)\\left[(2n+1)-3\\right] + n", expl: "Factor $\\tfrac12 n(n+1)$ from the first two terms." },
    { desc: "Simplify the bracket", work: "\\tfrac12 n(n+1)(2n-2) + n = n(n+1)(n-1) + n", expl: "Since $2n-2=2(n-1)$, the half cancels." },
    { desc: "Expand and collect", work: "n(n^{2}-1) + n = n^{3}-n+n = n^{3}", expl: "The linear terms cancel (this mirrors $3r^2-3r+1=r^3-(r-1)^3$)." },
  ],
  check: "n=2:\\;1+7=8,\\quad 2^{3}=8",
  answerLatex: "n^{3}",
});

// -- (b) numeric evaluation --------------------------------------------
function partialEval({ lo, hi, kind, marks = 5 }) {
  const F = kind === "r" ? S1 : kind === "r2" ? S2 : S3;
  const powLatex = kind === "r" ? "r" : kind === "r2" ? "r^{2}" : "r^{3}";
  const formulaLatex = kind === "r" ? "\\tfrac12 n(n+1)" : kind === "r2" ? "\\tfrac16 n(n+1)(2n+1)" : "\\tfrac14 n^{2}(n+1)^{2}";
  const subUpper = kind === "r" ? `\\tfrac12\\times ${hi}\\times ${hi + 1}` : kind === "r2" ? `\\tfrac16\\times ${hi}\\times ${hi + 1}\\times ${2 * hi + 1}` : `\\left(\\tfrac12\\times ${hi}\\times ${hi + 1}\\right)^{2}`;
  const lowN = lo - 1;
  const subLower = kind === "r" ? `\\tfrac12\\times ${lowN}\\times ${lowN + 1}` : kind === "r2" ? `\\tfrac16\\times ${lowN}\\times ${lowN + 1}\\times ${2 * lowN + 1}` : `\\left(\\tfrac12\\times ${lowN}\\times ${lowN + 1}\\right)^{2}`;
  const upper = F(hi);
  const lowerVal = F(lowN);
  const ans = upper - lowerVal;
  const nTerms = hi - lo + 1;
  push({
    difficulty: "Intermediate",
    marks,
    tags: ["partial-sum", "difference-of-sums"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=${lo}}^{${hi}} ${powLatex}$.`,
    steps: [
      step("Rewrite as a difference of two full sums", `\\sum_{r=${lo}}^{${hi}} ${powLatex} = \\sum_{r=1}^{${hi}} ${powLatex} - \\sum_{r=1}^{${lowN}} ${powLatex}`, `A sum that starts at $r=${lo}$ is the sum up to $${hi}$ with the first $${lowN}$ terms removed.`),
      step("State the standard result", `\\sum_{r=1}^{n} ${powLatex} = ${formulaLatex}`, "We apply the same closed form twice, once for each limit."),
      step(`Substitute the upper limit $n=${hi}$`, `\\sum_{r=1}^{${hi}} ${powLatex} = ${subUpper}`, "Put the larger limit into the formula."),
      step("Evaluate the upper sum", `= ${upper}`, "This is the total of all terms up to the top of the range."),
      step(`Substitute the lower limit $n=${lowN}$`, `\\sum_{r=1}^{${lowN}} ${powLatex} = ${subLower}`, `This is the block of terms we must remove.`),
      step("Evaluate the lower sum", `= ${lowerVal}`, "This is the part of the sum that lies below the required range."),
      step("Subtract", `${upper} - ${lowerVal} = ${ans}`, "The difference leaves exactly the terms from the required range."),
      step("Check the number of terms", `${hi} - ${lo} + 1 = ${nTerms}\\text{ terms}`, "Confirming the count of terms is a quick guard against an off-by-one error."),
      step("State the result", `\\sum_{r=${lo}}^{${hi}} ${powLatex} = ${ans}`, "This is the total of the requested block of terms."),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=${lo}}^{${hi}} ${powLatex} = ${ans}$`,
  });
}

partialEval({ lo: 11, hi: 30, kind: "r" });
partialEval({ lo: 6, hi: 20, kind: "r2" });
partialEval({ lo: 5, hi: 15, kind: "r3" });
partialEval({ lo: 21, hi: 40, kind: "r2", marks: 6 });

function polyLatex({ c3 = 0, c2 = 0, c1 = 0, c0 = 0 }) {
  const pieces = [];
  const emit = (coef, sym) => {
    if (coef === 0) return;
    const mag = Math.abs(coef);
    const body = sym === "" ? `${mag}` : mag === 1 ? sym : `${mag}${sym}`;
    const sign = coef < 0 ? "-" : pieces.length ? "+" : "";
    pieces.push(sign + body);
  };
  emit(c3, "r^{3}");
  emit(c2, "r^{2}");
  emit(c1, "r");
  emit(c0, "");
  return pieces.join("");
}

function evalPoly({ n, c3 = 0, c2 = 0, c1 = 0, c0 = 0, marks = 5 }) {
  const summand = polyLatex({ c3, c2, c1, c0 });
  const ans = c3 * S3(n) + c2 * S2(n) + c1 * S1(n) + c0 * n;
  const steps = [];
  // split
  const splitParts = [];
  if (c3) splitParts.push(`${c3 === 1 ? "" : c3 === -1 ? "-" : c3}\\sum_{r=1}^{${n}} r^{3}`);
  if (c2) splitParts.push(`${c2 === 1 ? (splitParts.length ? "+" : "") : c2 > 0 && splitParts.length ? "+" + c2 : c2}\\sum_{r=1}^{${n}} r^{2}`);
  if (c1) splitParts.push(`${c1 === 1 ? (splitParts.length ? "+" : "") : c1 > 0 && splitParts.length ? "+" + c1 : c1 === -1 ? "-" : c1}\\sum_{r=1}^{${n}} r`);
  if (c0) splitParts.push(`${c0 > 0 && splitParts.length ? "+" : ""}\\sum_{r=1}^{${n}} ${c0}`);
  steps.push(step("Split the sum using linearity", splitParts.join(" "), "Separate into standard sums and take each constant multiplier outside its sum."));
  steps.push(RECALL);
  const pows = [
    { coef: c3, f: S3, name: "cubes", latex: "r^{3}", sub: `\\left(\\tfrac12\\times ${n}\\times ${n + 1}\\right)^{2} = ${S1(n)}^{2}` },
    { coef: c2, f: S2, name: "squares", latex: "r^{2}", sub: `\\tfrac16\\times ${n}\\times ${n + 1}\\times ${2 * n + 1}` },
    { coef: c1, f: S1, name: "$r$", latex: "r", sub: `\\tfrac12\\times ${n}\\times ${n + 1}` },
  ];
  const scaledParts = [];
  for (const p of pows) {
    if (!p.coef) continue;
    const raw = p.f(n);
    steps.push(step(`Evaluate the sum of ${p.name}`, `\\sum_{r=1}^{${n}} ${p.latex} = ${p.sub} = ${raw}`, `Substitute $n=${n}$ into the closed form.`));
    const scaled = p.coef * raw;
    steps.push(step(`Multiply by the coefficient ${p.coef}`, `${p.coef}\\times ${raw} = ${scaled}`, p.coef === 1 ? "The coefficient is $1$, so this term is unchanged." : "Scale the standard sum by its coefficient."));
    scaledParts.push(scaled);
  }
  if (c0) {
    const cval = c0 * n;
    steps.push(step("Evaluate the constant sum", `\\sum_{r=1}^{${n}} ${c0} = ${c0}\\times ${n} = ${cval}`, `Adding $${c0}$ a total of $${n}$ times gives $${cval}$.`));
    scaledParts.push(cval);
  }
  const sumExpr = scaledParts.map((v, i) => (i === 0 ? `${v}` : (v < 0 ? ` - ${Math.abs(v)}` : ` + ${v}`))).join("");
  steps.push(step("Add the parts", `${sumExpr} = ${ans}`, "Combining the contributions gives the total."));
  const dominant = c3 ? "cubes" : c2 ? "squares" : "linear term";
  steps.push(step("Sense-check the size", `\\text{the } ${dominant} \\text{ term dominates the total } ${ans}`, "The highest power contributes most of the value, which is a useful reasonableness check."));
  steps.push(step("State the result", `\\sum_{r=1}^{${n}}\\left(${summand}\\right) = ${ans}`, "This is the required value of the series."));
  push({
    difficulty: "Intermediate",
    marks,
    tags: ["linear-combination", "evaluate"],
    questionText: `Evaluate $\\displaystyle\\sum_{r=1}^{${n}}\\left(${summand}\\right)$.`,
    steps,
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}}\\left(${summand}\\right) = ${ans}$`,
  });
}

evalPoly({ n: 20, c2: 3, c1: 2, marks: 5 });
evalPoly({ n: 15, c2: 1, c1: 1, marks: 5 });
evalPoly({ n: 10, c3: 4, c2: 3, marks: 6 });
evalPoly({ n: 10, c3: 2, c1: -1, marks: 6 });
evalPoly({ n: 12, c2: 2, c1: 3, c0: 1, marks: 6 });
evalPoly({ n: 6, c3: 2, c2: 3, marks: 6 });
evalPoly({ n: 15, c2: 3, c1: -2, c0: 1, marks: 6 });
evalPoly({ n: 8, c3: 1, c2: 1, c1: 1, marks: 6 });

// inline: evaluate r(r+1) via a given closed form (n=20)
(function () {
  const n = 20;
  const ans = (n * (n + 1) * (n + 2)) / 3;
  push({
    difficulty: "Intermediate",
    marks: 5,
    tags: ["product-expansion", "evaluate"],
    questionText: `Given that $\\displaystyle\\sum_{r=1}^{n} r(r+1) = \\tfrac13 n(n+1)(n+2)$, evaluate $\\displaystyle\\sum_{r=1}^{${n}} r(r+1)$.`,
    steps: [
      step("Quote the given closed form", "\\sum_{r=1}^{n} r(r+1) = \\tfrac13 n(n+1)(n+2)", "The result is provided, so the task is careful substitution."),
      step("Confirm the form by expanding", "r(r+1) = r^{2}+r", "Expanding shows the sum is $\\sum r^2 + \\sum r$, which is consistent with the given formula."),
      step("Substitute the value of $n$", `= \\tfrac13\\times ${n}\\times ${n + 1}\\times ${n + 2}`, `Replace $n$ with $${n}$.`),
      step("Multiply the first two factors", `${n}\\times ${n + 1} = ${n * (n + 1)}`, "Build the product one step at a time."),
      step("Multiply by the third factor", `${n * (n + 1)}\\times ${n + 2} = ${n * (n + 1) * (n + 2)}`, "This completes the numerator."),
      step("Divide by three", `\\tfrac{${n * (n + 1) * (n + 2)}}{3} = ${ans}`, "Applying the factor of a third gives the total."),
      step("Cross-check using standard sums", `\\sum_{r=1}^{${n}} r^{2} + \\sum_{r=1}^{${n}} r = ${S2(n)} + ${S1(n)} = ${S2(n) + S1(n)}`, "Evaluating the expanded form independently should give the same answer."),
      step("Confirm the two methods agree", `${S2(n) + S1(n)} = ${ans}`, "Both routes give the same value, confirming the result."),
      step("State the result", `\\sum_{r=1}^{${n}} r(r+1) = ${ans}`, "This is the sum of the products of consecutive integers up to this point."),
    ],
    finalAnswer: `$\\displaystyle\\sum_{r=1}^{${n}} r(r+1) = ${ans}$`,
  });
})();

// ======================================================================
// HARD (15) — proofs, derivations, variable limits, solving for n
// ======================================================================

// H1 Gauss proof of sum r
push({
  difficulty: "Hard",
  marks: 6,
  tags: ["proof", "sum-of-r"],
  questionText: "Prove, by writing the sum forwards and backwards, that $\\displaystyle\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)$.",
  steps: [
    step("Name the sum", "S = 1 + 2 + 3 + \\cdots + n", "Giving the quantity a label lets us manipulate it algebraically."),
    step("Write the sum in reverse", "S = n + (n-1) + (n-2) + \\cdots + 1", "The same total is obtained whichever order we add the terms in."),
    step("Line the two versions up", "\\begin{aligned}S &= 1 + 2 + \\cdots + n\\\\ S &= n + (n-1) + \\cdots + 1\\end{aligned}", "Stacking the forwards and backwards sums prepares us to add columns."),
    step("Add the two lines", "2S = (1+n) + (2+(n-1)) + \\cdots + (n+1)", "Adding term by term pairs the first with the last, the second with the second-last, and so on."),
    step("Evaluate a general pair", "2 + (n-1) = n+1", "In every pair one part rises and the other falls by one, so each pair sums to $n+1$."),
    step("Observe every pair is equal", "\\text{each of the pairs} = n+1", "This constant pair-sum is the key idea behind the proof."),
    step("Count the pairs", "\\text{there are } n \\text{ pairs}", "There is one pair for each of the $n$ original terms."),
    step("Form the product", "2S = n(n+1)", "Adding $n$ copies of $(n+1)$ is the same as multiplying."),
    step("Divide by two", "S = \\tfrac12 n(n+1)", "Halving both sides isolates $S$."),
    step("Check with $n=3$", "1+2+3 = 6,\\quad \\tfrac12(3)(4) = 6", "A small case confirms the formula."),
    step("Check with $n=4$", "1+2+3+4 = 10,\\quad \\tfrac12(4)(5) = 10", "A second case adds confidence."),
    step("Check with $n=5$", "1+2+3+4+5 = 15,\\quad \\tfrac12(5)(6) = 15", "A third case is consistent with the closed form."),
    step("Conclude", "\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)\\;\\blacksquare", "The closed form holds for all positive integers $n$."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)$, as required.",
});

// H2 variable-limit sum of r
push({
  difficulty: "Hard",
  marks: 7,
  tags: ["variable-limit", "difference-of-sums", "factorising"],
  questionText: "Show that $\\displaystyle\\sum_{r=n+1}^{2n} r = \\tfrac12 n(3n+1)$.",
  steps: [
    step("Split the range at $n$", "\\sum_{r=n+1}^{2n} r = \\sum_{r=1}^{2n} r - \\sum_{r=1}^{n} r", "A sum starting at $r=n+1$ is the full sum to $2n$ with the first $n$ terms removed."),
    step("State the standard result", "\\sum_{r=1}^{m} r = \\tfrac12 m(m+1)", "We will apply this closed form with two different upper limits."),
    step("Substitute the upper limit $m=2n$", "\\sum_{r=1}^{2n} r = \\tfrac12(2n)(2n+1)", "Replace $m$ with $2n$."),
    step("Simplify the upper sum", "= n(2n+1)", "The factor $2n$ cancels the half."),
    step("Substitute the lower block $m=n$", "\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)", "This is the ordinary sum of the first $n$ integers."),
    step("Subtract the two sums", "n(2n+1) - \\tfrac12 n(n+1)", "Removing the first block leaves the required range."),
    step("Take out $\\tfrac12 n$", "\\tfrac12 n\\left[2(2n+1) - (n+1)\\right]", "Factor $\\tfrac12 n$ from both terms."),
    step("Expand inside the bracket", "2(2n+1) - (n+1) = 4n+2-n-1", "Multiply out both parts carefully."),
    step("Collect like terms", "= 3n+1", "Combining leaves a single linear factor."),
    step("Assemble the result", "\\tfrac12 n(3n+1)", "This matches the required expression."),
    step("Check with $n=2$", "3+4 = 7,\\quad \\tfrac12(2)(7) = 7", "The block $r=3,4$ sums to $7$, confirming the formula."),
    step("Check with $n=3$", "4+5+6 = 15,\\quad \\tfrac12(3)(10) = 15", "The block $r=4,5,6$ gives $15$, a second confirming case."),
    step("Conclude", "\\sum_{r=n+1}^{2n} r = \\tfrac12 n(3n+1)\\;\\blacksquare", "The identity holds for all positive integers $n$."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=n+1}^{2n} r = \\tfrac12 n(3n+1)$, as required.",
});

// H3 variable-limit sum of r^2
push({
  difficulty: "Hard",
  marks: 8,
  tags: ["variable-limit", "difference-of-sums", "factorising", "sum-of-r-squared"],
  questionText: "Show that $\\displaystyle\\sum_{r=n+1}^{2n} r^{2} = \\tfrac16 n(2n+1)(7n+1)$.",
  steps: [
    step("Split the range at $n$", "\\sum_{r=n+1}^{2n} r^{2} = \\sum_{r=1}^{2n} r^{2} - \\sum_{r=1}^{n} r^{2}", "Write the block as a difference of two full sums of squares."),
    step("State the standard result", "\\sum_{r=1}^{m} r^{2} = \\tfrac16 m(m+1)(2m+1)", "We apply this with $m=2n$ and $m=n$."),
    step("Substitute $m=2n$", "\\sum_{r=1}^{2n} r^{2} = \\tfrac16(2n)(2n+1)(4n+1)", "Replace $m$ with $2n$."),
    step("Simplify the upper sum", "= \\tfrac13 n(2n+1)(4n+1)", "The factor $2n$ reduces the sixth to a third."),
    step("Substitute $m=n$", "\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)", "The ordinary sum of the first $n$ squares."),
    step("Write the difference over $6$", "\\tfrac16 n(2n+1)\\left[2(4n+1) - (n+1)\\right]", "Both parts share $\\tfrac16 n(2n+1)$ once the upper sum is put over $6$."),
    step("Expand inside the bracket", "2(4n+1) - (n+1) = 8n+2-n-1", "Multiply out carefully."),
    step("Collect like terms", "= 7n+1", "This collapses the bracket to a linear factor."),
    step("Assemble the result", "\\tfrac16 n(2n+1)(7n+1)", "This is the required factorised form."),
    step("Check with $n=1$", "2^{2} = 4,\\quad \\tfrac16(1)(3)(8) = 4", "The single term $r=2$ gives $4$."),
    step("Check with $n=2$", "3^{2}+4^{2} = 25,\\quad \\tfrac16(2)(5)(15) = 25", "The block $r=3,4$ gives $25$."),
    step("Check with $n=3$", "4^{2}+5^{2}+6^{2} = 77,\\quad \\tfrac16(3)(7)(22) = 77", "The block $r=4,5,6$ gives $77$, a third confirming case."),
    step("Conclude", "\\sum_{r=n+1}^{2n} r^{2} = \\tfrac16 n(2n+1)(7n+1)\\;\\blacksquare", "The identity is proved."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=n+1}^{2n} r^{2} = \\tfrac16 n(2n+1)(7n+1)$, as required.",
});

// H4 method of differences -> n^3
push({
  difficulty: "Hard",
  marks: 7,
  tags: ["method-of-differences", "telescoping", "proof"],
  questionText: "By considering $r^{3}-(r-1)^{3}$, prove that $\\displaystyle\\sum_{r=1}^{n}\\left(3r^{2}-3r+1\\right) = n^{3}$.",
  steps: [
    step("Recognise the method", "r^{3}-(r-1)^{3} \\;\\text{is a difference of consecutive cubes}", "The hint points to a telescoping (method of differences) argument, where consecutive terms cancel."),
    step("Expand $(r-1)^{3}$", "(r-1)^{3} = r^{3}-3r^{2}+3r-1", "Use the binomial expansion of a cube."),
    step("Form the difference", "r^{3}-(r-1)^{3} = 3r^{2}-3r+1", "The $r^3$ terms cancel, leaving exactly the summand."),
    step("Rewrite the sum as a telescoping sum", "\\sum_{r=1}^{n}\\left(3r^{2}-3r+1\\right) = \\sum_{r=1}^{n}\\left[r^{3}-(r-1)^{3}\\right]", "Replacing the summand sets up a difference of consecutive cubes."),
    step("Write out the first terms", "(1^{3}-0^{3}) + (2^{3}-1^{3}) + (3^{3}-2^{3}) + \\cdots", "Listing terms reveals how consecutive parts cancel."),
    step("Write out the last terms", "\\cdots + \\left((n-1)^{3}-(n-2)^{3}\\right) + \\left(n^{3}-(n-1)^{3}\\right)", "Every negative part cancels the positive part of the previous term."),
    step("Identify the cancellation", "\\text{all interior terms cancel in pairs}", "This is the essence of the method of differences."),
    step("Keep the survivors", "= n^{3} - 0^{3}", "Only the last positive part and the first negative part remain."),
    step("Simplify", "= n^{3}", "Since $0^3=0$."),
    step("Check with $n=1$", "3-3+1 = 1 = 1^{3}", "The single-term case is consistent."),
    step("Check with $n=2$", "(3-3+1)+(12-6+1) = 8 = 2^{3}", "A small case confirms the result."),
    step("Check with $n=3$", "1+7+19 = 27 = 3^{3}", "A second case is consistent."),
    step("Conclude", "\\sum_{r=1}^{n}\\left(3r^{2}-3r+1\\right) = n^{3}\\;\\blacksquare", "The result is proved by the method of differences."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n}\\left(3r^{2}-3r+1\\right) = n^{3}$, as required.",
});

// H5 solve sum r = 780
push({
  difficulty: "Hard",
  marks: 6,
  tags: ["solving-for-n", "sum-of-r"],
  questionText: "The sum of the first $n$ positive integers is $780$. Find the value of $n$.",
  steps: [
    step("Identify the relevant formula", "\\sum_{r=1}^{n} r = \\tfrac12 n(n+1)", "The total given is the sum of the first $n$ integers, so we use the triangular-number formula."),
    step("Write the equation", "\\tfrac12 n(n+1) = 780", "Set the closed form for $\\sum r$ equal to the given total."),
    step("Clear the fraction", "n(n+1) = 1560", "Multiply both sides by $2$ to remove the denominator."),
    step("Expand", "n^{2}+n = 1560", "Expanding gives a standard quadratic."),
    step("Form a quadratic equation", "n^{2}+n-1560 = 0", "Move everything to one side ready to solve."),
    step("Estimate the size of $n$", "n \\approx \\sqrt{1560} \\approx 39.5", "Since $n(n+1)\\approx n^2$, the root is near $39$."),
    step("Look for a factor pair", "39\\times 40 = 1560", "We seek two numbers multiplying to $-1560$ and adding to $1$: these are $-39$ and $40$."),
    step("Factorise", "(n-39)(n+40) = 0", "The factor pair gives the factorisation."),
    step("Solve", "n = 39 \\;\\text{or}\\; n = -40", "Set each factor to zero."),
    step("Reject the invalid root", "n = 39", "A count of terms must be a positive integer, so $n=-40$ is rejected."),
    step("Check", "\\tfrac12(39)(40) = 780", "Substituting back confirms the total."),
    step("Interpret the result", "780 \\text{ is the } 39\\text{th triangular number}", "The answer says $780$ is exactly the running total after $39$ terms."),
    step("Conclude", "n = 39", "This is the required number of terms."),
  ],
  finalAnswer: "$n = 39$",
});

// H6 solve sum r^2 = 506
push({
  difficulty: "Hard",
  marks: 6,
  tags: ["solving-for-n", "sum-of-r-squared"],
  questionText: "The sum of the first $n$ square numbers is $506$. Find the value of $n$.",
  steps: [
    step("Identify the relevant formula", "\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)", "The total given is the sum of the first $n$ squares, so we use the sum-of-squares formula."),
    step("Write the equation", "\\tfrac16 n(n+1)(2n+1) = 506", "Set the closed form equal to the given total."),
    step("Clear the fraction", "n(n+1)(2n+1) = 3036", "Multiply both sides by $6$."),
    step("Expand to a cubic", "n(n+1)(2n+1) = 2n^{3}+3n^{2}+n", "Expanding shows the dominant term is $2n^3$."),
    step("Estimate the size of $n$", "2n^{3} \\approx 3036 \\Rightarrow n^{3}\\approx 1518", "Since $11^3=1331$ and $12^3=1728$, we expect $n=11$."),
    step("Test $n=11$", "11\\times 12\\times 23 = 3036", "Substituting $n=11$ reproduces the required product exactly."),
    step("Confirm the original equation", "\\tfrac16\\times 3036 = 506", "Dividing by $6$ returns the given sum."),
    step("Test the neighbour $n=10$", "\\tfrac16(10)(11)(21) = 385", "The value below is too small."),
    step("Test the neighbour $n=12$", "\\tfrac16(12)(13)(25) = 650", "The value above is too large."),
    step("Argue uniqueness", "\\text{the partial sums strictly increase with } n", "Because the running total only grows, at most one $n$ can work."),
    step("Restrict to valid solutions", "n \\in \\{1,2,3,\\ldots\\}", "As $n$ counts how many squares are added, only positive integers are admissible."),
    step("Interpret the result", "506 \\text{ is the sum of the first } 11 \\text{ squares}", "The answer identifies exactly how many square numbers were added."),
    step("Conclude", "n = 11", "Only $n=11$ satisfies the equation with a positive integer."),
  ],
  finalAnswer: "$n = 11$",
});

// H7 prove sum (r^3 - r)
push({
  difficulty: "Hard",
  marks: 7,
  tags: ["proof", "factorising", "sum-of-r-cubed"],
  questionText: "Prove that $\\displaystyle\\sum_{r=1}^{n}\\left(r^{3}-r\\right) = \\tfrac14 (n-1)n(n+1)(n+2)$.",
  steps: [
    step("State the strategy", "\\text{Use } \\textstyle\\sum r^{3} \\text{ and } \\sum r \\text{ then factorise.}", "The summand is a combination of standard powers, so we substitute their closed forms and simplify."),
    step("Split the sum", "\\sum_{r=1}^{n} r^{3} - \\sum_{r=1}^{n} r", "Use linearity to separate the two standard sums."),
    step("Recall the two results", "\\sum r^{3} = \\tfrac14 n^{2}(n+1)^{2},\\quad \\sum r = \\tfrac12 n(n+1)", "State the closed forms we will substitute."),
    step("Insert the closed forms", "\\tfrac14 n^{2}(n+1)^{2} - \\tfrac12 n(n+1)", "Substitute both standard sums."),
    step("Take out $\\tfrac14 n(n+1)$", "\\tfrac14 n(n+1)\\left[n(n+1) - 2\\right]", "A factor of $\\tfrac14 n(n+1)$ is common once the second term is written over $4$."),
    step("Expand the bracket", "n(n+1)-2 = n^{2}+n-2", "Expand to prepare for factorising."),
    step("Factorise the quadratic", "n^{2}+n-2 = (n+2)(n-1)", "The quadratic factorises into two linear terms."),
    step("Assemble the factors", "\\tfrac14 n(n+1)(n-1)(n+2)", "Collect all factors together."),
    step("Order the factors", "\\tfrac14 (n-1)n(n+1)(n+2)", "Writing them in increasing order shows four consecutive integers."),
    step("Check with $n=1$", "1-1 = 0,\\quad \\tfrac14(0)(1)(2)(3) = 0", "The single-term case vanishes, as the factor $(n-1)$ predicts."),
    step("Check with $n=2$", "(1-1)+(8-2) = 6,\\quad \\tfrac14(1)(2)(3)(4) = 6", "A numerical check confirms the identity."),
    step("Check with $n=3$", "0+6+24 = 30,\\quad \\tfrac14(2)(3)(4)(5) = 30", "A second case is consistent."),
    step("Conclude", "\\sum_{r=1}^{n}\\left(r^{3}-r\\right)=\\tfrac14(n-1)n(n+1)(n+2)\\;\\blacksquare", "The result is proved."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n}\\left(r^{3}-r\\right)=\\tfrac14(n-1)n(n+1)(n+2)$, as required.",
});

// H8 sum r(r+1)(r+2)
push({
  difficulty: "Hard",
  marks: 8,
  tags: ["product-expansion", "factorising", "proof"],
  questionText: "Show that $\\displaystyle\\sum_{r=1}^{n} r(r+1)(r+2) = \\tfrac14 n(n+1)(n+2)(n+3)$.",
  steps: [
    step("State the strategy", "\\text{Expand, then use the standard sums and factorise.}", "The summand is a product, so we expand it into powers of $r$ before summing."),
    step("Expand the product", "r(r+1)(r+2) = r^{3}+3r^{2}+2r", "Multiplying out turns the product into standard powers of $r$."),
    step("Split the sum", "\\sum_{r=1}^{n} r^{3} + 3\\sum_{r=1}^{n} r^{2} + 2\\sum_{r=1}^{n} r", "Apply linearity to the expanded form."),
    step("Recall the standard results", "\\sum r^{3}=\\tfrac14 n^{2}(n+1)^{2},\\;\\sum r^{2}=\\tfrac16 n(n+1)(2n+1),\\;\\sum r=\\tfrac12 n(n+1)", "State each closed form before substituting."),
    step("Insert the closed forms", "\\tfrac14 n^{2}(n+1)^{2} + 3\\cdot\\tfrac16 n(n+1)(2n+1) + 2\\cdot\\tfrac12 n(n+1)", "Substitute all three results."),
    step("Simplify the multipliers", "\\tfrac14 n^{2}(n+1)^{2} + \\tfrac12 n(n+1)(2n+1) + n(n+1)", "Cancel the coefficients against the denominators."),
    step("Take out $\\tfrac14 n(n+1)$", "\\tfrac14 n(n+1)\\left[n(n+1) + 2(2n+1) + 4\\right]", "Write each term over $4$ and remove the common factor."),
    step("Expand inside the bracket", "n^{2}+n + 4n+2 + 4 = n^{2}+5n+6", "Collect the terms into a single quadratic."),
    step("Factorise the quadratic", "n^{2}+5n+6 = (n+2)(n+3)", "The quadratic splits into two linear factors."),
    step("Assemble the factors", "\\tfrac14 n(n+1)(n+2)(n+3)", "This is a product of four consecutive integers over $4$."),
    step("Check with $n=1$", "1\\cdot2\\cdot3 = 6,\\quad \\tfrac14(1)(2)(3)(4)=6", "The single-term case agrees."),
    step("Check with $n=2$", "1\\cdot2\\cdot3 + 2\\cdot3\\cdot4 = 30,\\quad \\tfrac14(2)(3)(4)(5)=30", "The numerical check confirms the identity."),
    step("Conclude", "\\sum_{r=1}^{n} r(r+1)(r+2) = \\tfrac14 n(n+1)(n+2)(n+3)\\;\\blacksquare", "The result is proved."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n} r(r+1)(r+2) = \\tfrac14 n(n+1)(n+2)(n+3)$, as required.",
});

// H9 telescoping (r+1)^4 - r^4
push({
  difficulty: "Hard",
  marks: 8,
  tags: ["method-of-differences", "telescoping", "proof"],
  questionText: "By considering $(r+1)^{4}-r^{4}$, show that $\\displaystyle\\sum_{r=1}^{n}\\left(4r^{3}+6r^{2}+4r+1\\right) = (n+1)^{4}-1$.",
  steps: [
    step("Recognise the method", "(r+1)^{4}-r^{4} \\;\\text{is a difference of consecutive fourth powers}", "The hint sets up a telescoping (method of differences) argument."),
    step("Expand $(r+1)^{4}$", "(r+1)^{4} = r^{4}+4r^{3}+6r^{2}+4r+1", "Use the binomial expansion of the fourth power."),
    step("Form the difference", "(r+1)^{4}-r^{4} = 4r^{3}+6r^{2}+4r+1", "The $r^4$ terms cancel, leaving exactly the summand."),
    step("Rewrite the sum", "\\sum_{r=1}^{n}\\left(4r^{3}+6r^{2}+4r+1\\right) = \\sum_{r=1}^{n}\\left[(r+1)^{4}-r^{4}\\right]", "Substituting sets up a telescoping sum."),
    step("List the first terms", "(2^{4}-1^{4}) + (3^{4}-2^{4}) + (4^{4}-3^{4}) + \\cdots", "Writing out terms shows the internal cancellation."),
    step("List the last term", "\\cdots + \\left((n+1)^{4}-n^{4}\\right)", "Each subtracted part cancels the added part of the next term."),
    step("Identify the cancellation", "\\text{all interior powers cancel}", "This is the method of differences at work."),
    step("Keep the survivors", "= (n+1)^{4} - 1^{4}", "Only the last positive part and the first negative part remain."),
    step("Simplify", "= (n+1)^{4} - 1", "Since $1^4=1$."),
    step("Check with $n=1$", "4+6+4+1 = 15,\\quad 2^{4}-1 = 15", "A small case confirms the telescoping."),
    step("Check with $n=2$", "15 + (32+24+8+1) = 80,\\quad 3^{4}-1 = 80", "A second case is consistent."),
    step("Note the wider pattern", "\\text{the same idea proves } \\textstyle\\sum r^{3},\\;\\sum r^{2},\\;\\sum r", "Telescoping a difference of $(k{+}1)$th powers is the standard route to every sum-of-powers formula."),
    step("Conclude", "\\sum_{r=1}^{n}\\left(4r^{3}+6r^{2}+4r+1\\right) = (n+1)^{4}-1\\;\\blacksquare", "The identity is established."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n}\\left(4r^{3}+6r^{2}+4r+1\\right) = (n+1)^{4}-1$, as required.",
});

// H10 sum of cubes of odd numbers
push({
  difficulty: "Hard",
  marks: 9,
  tags: ["odd-numbers", "factorising", "proof", "sum-of-r-cubed"],
  questionText: "Show that $\\displaystyle\\sum_{r=1}^{n}(2r-1)^{3} = n^{2}\\left(2n^{2}-1\\right)$.",
  steps: [
    step("State the strategy", "\\text{Expand } (2r-1)^{3}, \\text{ then use the standard sums.}", "Expanding turns the cube of an odd number into standard powers of $r$."),
    step("Expand the cube", "(2r-1)^{3} = 8r^{3}-12r^{2}+6r-1", "Use the binomial expansion of $(2r-1)^3$."),
    step("Split the sum", "8\\sum r^{3} - 12\\sum r^{2} + 6\\sum r - \\sum 1", "Apply linearity term by term (limits $1$ to $n$)."),
    step("Insert the closed forms", "8\\cdot\\tfrac14 n^{2}(n+1)^{2} - 12\\cdot\\tfrac16 n(n+1)(2n+1) + 6\\cdot\\tfrac12 n(n+1) - n", "Substitute all four standard results."),
    step("Simplify the multipliers", "2n^{2}(n+1)^{2} - 2n(n+1)(2n+1) + 3n(n+1) - n", "Cancel each coefficient against its denominator."),
    step("Expand the first term", "2n^{2}(n+1)^{2} = 2n^{4}+4n^{3}+2n^{2}", "Expand $2n^2(n+1)^2$."),
    step("Expand the second term", "2n(n+1)(2n+1) = 4n^{3}+6n^{2}+2n", "This term is subtracted."),
    step("Expand the third term", "3n(n+1) = 3n^{2}+3n", "This term is added."),
    step("Combine all terms", "2n^{4}+4n^{3}+2n^{2} - (4n^{3}+6n^{2}+2n) + 3n^{2}+3n - n", "Bring every expanded piece together."),
    step("Collect like terms", "2n^{4} - n^{2}", "The cubic and linear terms cancel completely."),
    step("Factorise", "n^{2}(2n^{2}-1)", "Take out the common factor $n^2$."),
    step("Check with $n=2$", "1^{3}+3^{3} = 28,\\quad 4(8-1) = 28", "A numerical check confirms the result."),
    step("Conclude", "\\sum_{r=1}^{n}(2r-1)^{3} = n^{2}(2n^{2}-1)\\;\\blacksquare", "The identity is proved."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n}(2r-1)^{3} = n^{2}\\left(2n^{2}-1\\right)$, as required.",
});

// H11 derive sum r^2 by method of differences
push({
  difficulty: "Hard",
  marks: 9,
  tags: ["method-of-differences", "proof", "sum-of-r-squared"],
  questionText: "By using the identity $r^{3}-(r-1)^{3} = 3r^{2}-3r+1$, prove that $\\displaystyle\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)$.",
  steps: [
    step("State the strategy", "\\text{Telescope the left side; match against } \\textstyle\\sum r^{2}", "Summing a known difference gives a telescoping total we can equate to the powers of $r$ we want."),
    step("Sum the identity over $r$", "\\sum_{r=1}^{n}\\left[r^{3}-(r-1)^{3}\\right] = \\sum_{r=1}^{n}\\left(3r^{2}-3r+1\\right)", "Summing both sides links a telescoping sum to the powers of $r$."),
    step("Telescope the left side", "\\sum_{r=1}^{n}\\left[r^{3}-(r-1)^{3}\\right] = n^{3}", "All intermediate terms cancel, leaving $n^3-0^3$."),
    step("Expand the right side", "\\sum\\left(3r^{2}-3r+1\\right) = 3\\sum r^{2} - 3\\sum r + \\sum 1", "Apply linearity to the right-hand sum."),
    step("Substitute the known sums", "= 3\\sum r^{2} - 3\\cdot\\tfrac12 n(n+1) + n", "We already know $\\sum r$ and $\\sum 1$; the unknown is $\\sum r^2$."),
    step("Equate the two sides", "n^{3} = 3\\sum r^{2} - \\tfrac32 n(n+1) + n", "Set the telescoped left side equal to the expanded right side."),
    step("Isolate the sum of squares", "3\\sum r^{2} = n^{3} + \\tfrac32 n(n+1) - n", "Rearrange to make $3\\sum r^2$ the subject."),
    step("Combine over $2$", "3\\sum r^{2} = \\tfrac{2n^{3} + 3n(n+1) - 2n}{2} = \\tfrac{2n^{3}+3n^{2}+n}{2}", "Put the right side over a common denominator and collect like terms."),
    step("Factorise the numerator", "2n^{3}+3n^{2}+n = n(2n^{2}+3n+1) = n(n+1)(2n+1)", "Factor out $n$, then factorise the quadratic."),
    step("Divide by $3$", "\\sum r^{2} = \\tfrac{n(n+1)(2n+1)}{6}", "Dividing both sides by $3$ gives the closed form."),
    step("Check with $n=1$", "1 = \\tfrac16(1)(2)(3) = 1", "The single-term case agrees."),
    step("Check with $n=3$", "1+4+9 = 14,\\quad \\tfrac16(3)(4)(7) = 14", "A small case confirms the derivation."),
    step("Conclude", "\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)\\;\\blacksquare", "The standard result is derived from the telescoping identity."),
  ],
  finalAnswer: "$\\displaystyle\\sum_{r=1}^{n} r^{2} = \\tfrac16 n(n+1)(2n+1)$, as required.",
});

// H12 application: stacked tins
(function () {
  const n = 12;
  const ans = S2(n);
  push({
    difficulty: "Hard",
    marks: 6,
    tags: ["application", "modelling", "sum-of-r-squared"],
    questionText: `A display of tins is built in $${n}$ square layers. The top layer is a $1\\times1$ square (one tin), the next a $2\\times2$ square, and so on, so that the $k$th layer from the top holds $k^{2}$ tins. Find the total number of tins.`,
    steps: [
      step("Read the structure of the display", "\\text{layer } k \\text{ is a } k\\times k \\text{ square of tins}", "Each square layer $k\\times k$ holds $k^2$ tins, which is the key to modelling the total."),
      step("Model the total as a sum", "T = \\sum_{k=1}^{12} k^{2}", "Each layer contributes $k^2$ tins, so the total is the sum of the first $12$ square numbers."),
      step("List the first few layers", "1, 4, 9, 16, 25, \\ldots", "Writing out early layer counts confirms the model matches the description."),
      step("Recognise the standard sum", "\\sum_{k=1}^{n} k^{2} = \\tfrac16 n(n+1)(2n+1)", "This closed form avoids adding twelve squares by hand."),
      step("Substitute $n=12$", "T = \\tfrac16\\times 12\\times 13\\times 25", "Replace $n$ with the number of layers."),
      step("Multiply the first two factors", "12\\times 13 = 156", "Build the product step by step."),
      step("Multiply by the third factor", "156\\times 25 = 3900", "This completes the numerator."),
      step("Divide by six", `\\tfrac{3900}{6} = ${ans}`, "Apply the factor of one sixth."),
      step("Partial check of the first five layers", "1+4+9+16+25 = 55", "The running total of the top five layers is easy to verify by hand."),
      step("Note the bottom layer dominates", "12^{2} = 144", "The largest single layer is $144$ tins, so a total of $${ans}$ across twelve layers is reasonable."),
      step("Interpret the answer", `T = ${ans}\\text{ tins}`, "The closed form gives the physical total directly."),
      step("Name the number", `${ans} \\text{ is the 12th square pyramidal number}`, "Sums of consecutive squares count the tins in a square-based pyramid, which is exactly this display."),
      step("State the conclusion", `\\text{The display contains } ${ans} \\text{ tins.}`, "This answers the question in context."),
    ],
    finalAnswer: `$T = ${ans}$ tins.`,
  });
})();

// H13 (r+1)(r+2) general + evaluate
(function () {
  const n = 10;
  const ans = (n * (n * n + 6 * n + 11)) / 3;
  push({
    difficulty: "Hard",
    marks: 7,
    tags: ["product-expansion", "factorising", "evaluate"],
    questionText: `Find $\\displaystyle\\sum_{r=1}^{n}(r+1)(r+2)$ in terms of $n$, and hence evaluate the sum when $n=${n}$.`,
    steps: [
      step("State the strategy", "\\text{Expand, sum using standard results, factorise, then substitute.}", "A general formula first, then a single substitution, is more reliable than adding ten terms directly."),
      step("Expand the product", "(r+1)(r+2) = r^{2}+3r+2", "Expanding gives a combination of standard powers of $r$."),
      step("Split the sum", "\\sum_{r=1}^{n} r^{2} + 3\\sum_{r=1}^{n} r + \\sum_{r=1}^{n} 2", "Apply linearity to the expanded expression."),
      step("Recall the standard results", "\\sum r^{2}=\\tfrac16 n(n+1)(2n+1),\\;\\sum r=\\tfrac12 n(n+1),\\;\\sum 2 = 2n", "State the closed forms before substituting."),
      step("Insert the closed forms", "\\tfrac16 n(n+1)(2n+1) + 3\\cdot\\tfrac12 n(n+1) + 2n", "Substitute the standard sums."),
      step("Take out $\\tfrac16 n$", "\\tfrac16 n\\left[(n+1)(2n+1) + 9(n+1) + 12\\right]", "Write everything over $6$ and remove the common factor $\\tfrac16 n$."),
      step("Combine the $(n+1)$ terms", "\\tfrac16 n\\left[(n+1)(2n+10) + 12\\right]", "Group the two $(n+1)$ terms: $(2n+1)+9=2n+10$."),
      step("Expand and collect", "(n+1)(2n+10)+12 = 2n^{2}+12n+22", "Multiply out and simplify."),
      step("Simplify to the closed form", "\\tfrac16 n(2n^{2}+12n+22) = \\tfrac13 n(n^{2}+6n+11)", "Factor $2$ from the bracket and cancel with the $6$."),
      step("Check with $n=1$", "(2)(3) = 6,\\quad \\tfrac13(1)(1+6+11) = 6", "A small case confirms the general formula."),
      step("Substitute $n=10$", "\\tfrac13\\times 10\\times(100+60+11) = \\tfrac{10\\times 171}{3}", "Evaluate the closed form at the required value."),
      step("Compute the value", `\\tfrac{1710}{3} = ${ans}`, "A single division completes the calculation."),
      step("State both results", `\\sum_{r=1}^{n}(r+1)(r+2) = \\tfrac13 n(n^{2}+6n+11),\\quad \\sum_{r=1}^{${n}} = ${ans}`, "We give the general formula and the specific value."),
    ],
    finalAnswer: `In terms of $n$: $\\tfrac13 n(n^{2}+6n+11)$; when $n=${n}$ the sum is $${ans}$.`,
  });
})();

// H14 solve sum 4r^3 = 44100
push({
  difficulty: "Hard",
  marks: 7,
  tags: ["solving-for-n", "sum-of-r-cubed", "factorising"],
  questionText: "Given that $\\displaystyle\\sum_{r=1}^{n} 4r^{3} = 44100$, find the value of $n$.",
  steps: [
    step("State the strategy", "\\text{Simplify the sum to a perfect square, then solve.}", "Recognising a perfect square lets us take a square root and reduce to a quadratic."),
    step("Use the standard result", "\\sum_{r=1}^{n} 4r^{3} = 4\\cdot\\tfrac14 n^{2}(n+1)^{2}", "Pull the constant $4$ into the cube formula."),
    step("Simplify", "= n^{2}(n+1)^{2}", "The factor $4$ cancels the quarter, giving the neat form $n^2(n+1)^2$."),
    step("Recognise a perfect square", "n^{2}(n+1)^{2} = \\left[n(n+1)\\right]^{2}", "The expression is the square of $n(n+1)$."),
    step("Set up the equation", "\\left[n(n+1)\\right]^{2} = 44100", "Equate to the given total."),
    step("Square-root both sides", "n(n+1) = \\sqrt{44100} = 210", "Take the positive root, since $n(n+1)>0$."),
    step("Form a quadratic", "n^{2}+n-210 = 0", "Expand and move everything to one side."),
    step("Look for a factor pair", "14\\times 15 = 210", "Two numbers multiplying to $-210$ and adding to $1$ are $-14$ and $15$."),
    step("Factorise", "(n-14)(n+15) = 0", "The factor pair gives the factorisation."),
    step("Select the valid root", "n = 14", "Reject $n=-15$ as $n$ must be a positive integer."),
    step("Check", "14^{2}\\times 15^{2} = 196\\times 225 = 44100", "Substituting back confirms the solution."),
    step("Interpret the result", "\\sum_{r=1}^{14} r^{3} = \\tfrac14(44100) = 11025 = 105^{2}", "Since $\\sum r^3=(\\sum r)^2$, the underlying sum of cubes is itself the perfect square $105^2$."),
    step("Conclude", "n = 14", "This is the required number of terms."),
  ],
  finalAnswer: "$n = 14$",
});

// H15 sum (r^3 - r^2) show + evaluate
(function () {
  const n = 20;
  const ans = S3(n) - S2(n);
  const prod = 19 * 20 * 21 * 62;
  push({
    difficulty: "Hard",
    marks: 8,
    tags: ["linear-combination", "factorising", "evaluate", "sum-of-r-cubed"],
    questionText: `Show that $\\displaystyle\\sum_{r=1}^{n}\\left(r^{3}-r^{2}\\right) = \\tfrac{1}{12}(n-1)n(n+1)(3n+2)$, and hence evaluate the sum when $n=${n}$.`,
    steps: [
      step("State the strategy", "\\text{Substitute } \\textstyle\\sum r^{3} \\text{ and } \\sum r^{2}, \\text{ factorise, then evaluate.}", "Prove the general identity first, then substitute the specific value of $n$."),
      step("Split the sum", "\\sum_{r=1}^{n} r^{3} - \\sum_{r=1}^{n} r^{2}", "Use linearity to separate the two standard sums."),
      step("Recall the two results", "\\sum r^{3}=\\tfrac14 n^{2}(n+1)^{2},\\quad \\sum r^{2}=\\tfrac16 n(n+1)(2n+1)", "State the closed forms before substituting."),
      step("Insert the closed forms", "\\tfrac14 n^{2}(n+1)^{2} - \\tfrac16 n(n+1)(2n+1)", "Substitute $\\sum r^3$ and $\\sum r^2$."),
      step("Take out $\\tfrac{n(n+1)}{12}$", "\\tfrac{n(n+1)}{12}\\left[3n(n+1) - 2(2n+1)\\right]", "The common denominator of $4$ and $6$ is $12$."),
      step("Expand inside the bracket", "3n^{2}+3n - 4n - 2 = 3n^{2}-n-2", "Expand and collect like terms into a quadratic."),
      step("Factorise the quadratic", "3n^{2}-n-2 = (3n+2)(n-1)", "The quadratic factorises into two linear factors."),
      step("Assemble the closed form", "\\tfrac{1}{12}(n-1)n(n+1)(3n+2)", "Collecting the factors proves the required identity."),
      step("Check with $n=2$", "(1+8)-(1+4) = 4,\\quad \\tfrac{1}{12}(1)(2)(3)(8) = 4", "A small case confirms the identity."),
      step("Substitute $n=20$", "\\tfrac{1}{12}\\times 19\\times 20\\times 21\\times 62", "Insert the four factors for the specific value."),
      step("Multiply the factors", `19\\times 20\\times 21\\times 62 = ${prod}`, "Build the product carefully."),
      step("Divide by twelve", `\\tfrac{${prod}}{12} = ${ans}`, "Apply the factor of one twelfth."),
      step("State both results", `\\sum_{r=1}^{n}(r^{3}-r^{2}) = \\tfrac{1}{12}(n-1)n(n+1)(3n+2),\\quad \\sum_{r=1}^{${n}} = ${ans}`, "We give the general identity and the required value."),
    ],
    finalAnswer: `Identity shown; when $n=${n}$ the sum is $${ans}$.`,
  });
})();

// ---- validate ----------------------------------------------------------
const ranges = { Easy: [6, 9], Intermediate: [9, 13], Hard: [13, 18] };
const tally = { Easy: 0, Intermediate: 0, Hard: 0 };
for (const q of questions) {
  const nSteps = q.workedSolution.steps.length;
  const [lo, hi] = ranges[q.difficulty];
  if (nSteps < lo || nSteps > hi) {
    throw new Error(`${q.id} (${q.difficulty}) has ${nSteps} steps; expected ${lo}-${hi}`);
  }
  tally[q.difficulty] += 1;
  // stepNumbers sequential
  q.workedSolution.steps.forEach((s, i) => {
    if (s.stepNumber !== i + 1) throw new Error(`${q.id} step numbering broken at ${i}`);
  });
}
const ids = new Set(questions.map((q) => q.id));
if (ids.size !== questions.length) throw new Error("Duplicate ids detected");
if (questions.length !== 70) throw new Error(`Expected 70 questions, generated ${questions.length}`);

const body = questions.map((q) => JSON.stringify(q, null, 2)).join(",\n");
const out = `import { Question } from "@/lib/types";\n\nexport const questions: Question[] = [\n${body},\n];\n`;

const target = join(__dirname, "..", "src", "data", "questions", "a-level-further-maths", "year-1-pure", "series.ts");
writeFileSync(target, out, "utf8");
console.log(`Wrote ${questions.length} questions (Easy ${tally.Easy}, Intermediate ${tally.Intermediate}, Hard ${tally.Hard}) to ${target}`);
