#!/usr/bin/env python3
"""Generate q054-q070 for normal approximation subtopic."""
import json
import sys
from math import sqrt, comb, ceil
from pathlib import Path
from scipy.stats import norm, binom

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

def phi(z):
    return norm.cdf(z)

def make_q(id_suffix, difficulty, marks, answerType, tags, questionText, steps, finalAnswer):
    return {
        "id": f"al.y2.stats.normal-approximation.{id_suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Statistics",
        "subtopic": "Normal approximation to binomial",
        "subtopicId": "al.y2.stats.normal-approximation",
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answerType,
        "tags": tags,
        "questionText": questionText,
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": finalAnswer},
    }

def step(n, desc, work, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": work,
        "explanation": expl,
        "diagram": None,
    }

def fmt4(x):
    return f"{x:.4g}"

questions = []

# ── q054 Intermediate ─────────────────────────────────────────────────────────
questions.append(make_q(
    "q054", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "cumulative probability", "validity conditions"],
    "A gardener plants $200$ seeds and each seed has an independent probability of $0.4$ of germinating. Let $X$ be the number of seeds that germinate. Use a normal approximation, with a continuity correction, to estimate $P(X \\leqslant 70)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the underlying binomial model", "X \\sim B(200,\\ 0.4)",
             "There is a fixed number of $200$ independent trials, each with the same success probability $0.4$, and we count the number of successes. That is exactly the setup for a binomial distribution."),
        step(2, "Check whether a normal approximation is appropriate",
             "np = 200 \\times 0.4 = 80, \\qquad n(1-p) = 200 \\times 0.6 = 120",
             "A normal approximation is reliable when both $np$ and $n(1-p)$ are at least $5$, because then the binomial distribution is sufficiently symmetric and spread out. Here both values are much larger than $5$, so the approximation is appropriate."),
        step(3, "Find the mean and standard deviation of the approximating normal",
             "\\mu = np = 80, \\qquad \\sigma = \\sqrt{np(1-p)} = \\sqrt{80 \\times 0.6} = \\sqrt{48} \\approx 6.928",
             "The binomial mean is $np$ and its variance is $np(1-p)$. We take the square root of the variance to obtain the standard deviation used in the normal model."),
        step(4, "Write the approximating normal distribution", "X \\approx Y \\sim N(80,\\ 48)",
             "We replace the discrete binomial by a continuous normal with the same mean and variance. The continuous variable $Y$ is the vehicle for calculating approximate probabilities."),
        step(5, "Apply the continuity correction for a 'less than or equal' event",
             "P(X \\leqslant 70) \\approx P(Y < 70.5)",
             "The discrete event $X \\leqslant 70$ includes the integer $70$. On the continuous scale, all values up to but not including $70.5$ correspond to those integers, so we use $70.5$ as the upper boundary."),
        step(6, "Standardise the corrected boundary",
             "z = \\dfrac{70.5 - 80}{\\sqrt{48}} = \\dfrac{-9.5}{6.928} \\approx -1.371",
             "We convert the boundary $70.5$ into a $z$-score by measuring how many standard deviations it lies below the mean. A negative value confirms we are in the lower tail."),
        step(7, "Rewrite the probability using the standard normal",
             "P(Y < 70.5) = P(Z < -1.371) = \\Phi(-1.371)",
             "Standardising turns the problem into finding an area under the standard normal curve to the left of $z = -1.371$."),
        step(8, "Evaluate the standard normal probability", "\\Phi(-1.371) = 0.0852",
             "Using a calculator or tables, the cumulative probability at $z = -1.371$ is $0.0852$ to four significant figures."),
        step(9, "Interpret the result in context", "P(X \\leqslant 70) \\approx 0.0852",
             "There is roughly an $8.5\\%$ chance that at most $70$ of the $200$ seeds germinate. This is plausible because $70$ is noticeably below the expected value of $80$."),
        step(10, "State the final answer", "P(X \\leqslant 70) \\approx 0.0852",
             "The normal approximation with continuity correction gives an estimated probability of about $0.0852$."),
    ],
    "$P(X \\leqslant 70) \\approx 0.0852$.",
))

# ── q055 Hard: minimum n for p=0.08 ─────────────────────────────────────────
questions.append(make_q(
    "q055", "Hard", 6, "integer",
    ["minimum sample size", "validity conditions", "np rule"],
    "In a large population, an event of interest occurs with probability $p = 0.08$ on each independent trial. Find the smallest integer $n$ such that a normal approximation to $X \\sim B(n, p)$ would be considered appropriate.",
    [
        step(1, "State the validity conditions for a normal approximation",
             "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
             "The binomial can be approximated by a normal distribution when both the expected number of successes and the expected number of failures are at least $5$. This ensures the distribution is not too skewed or concentrated at the boundaries."),
        step(2, "Substitute p = 0.08 into the first condition",
             "np \\geqslant 5 \\Rightarrow n \\times 0.08 \\geqslant 5",
             "The success condition links the sample size $n$ directly to the success probability. Because $p$ is small, we expect this inequality to demand a relatively large $n$."),
        step(3, "Solve the first inequality for n", "n \\geqslant \\dfrac{5}{0.08} = 62.5",
             "Dividing $5$ by $0.08$ shows that $n$ must be at least $62.5$. Since $n$ counts trials, it must be an integer."),
        step(4, "Round up to the smallest integer satisfying the first condition", "n \\geqslant 63",
             "The smallest integer at least $62.5$ is $63$. Any smaller $n$ would give $np < 5$."),
        step(5, "Substitute into the second condition",
             "n(1-p) \\geqslant 5 \\Rightarrow n \\times 0.92 \\geqslant 5",
             "We also need enough expected failures. With $p = 0.08$, failures are plentiful, so this condition is usually easier to satisfy."),
        step(6, "Solve the second inequality", "n \\geqslant \\dfrac{5}{0.92} = 5.43\\ldots",
             "This requires only $n \\geqslant 6$, which is far weaker than the success condition when $p$ is small."),
        step(7, "Identify the binding constraint", "n \\geqslant 63 \\quad \\text{(from } np \\geqslant 5\\text{)}",
             "Both conditions must hold simultaneously, so we take the larger lower bound. Here the success condition is the limiting one."),
        step(8, "Verify np at n = 63", "np = 63 \\times 0.08 = 5.04 \\geqslant 5",
             "At $n = 63$ the expected number of successes just exceeds $5$, confirming the first condition is met."),
        step(9, "Verify n(1-p) at n = 63", "n(1-p) = 63 \\times 0.92 = 57.96 \\geqslant 5",
             "The expected number of failures is also well above $5$, so the distribution is not squeezed against either boundary."),
        step(10, "Check that n = 62 fails", "np = 62 \\times 0.08 = 4.96 < 5",
             "Reducing $n$ by $1$ drops the expected successes below $5$, which is why $62$ is too small."),
        step(11, "State the minimum sample size", "n_{\\min} = 63",
             "The smallest integer sample size for which both validity conditions hold is $63$."),
        step(12, "Interpret in context",
             "At least 63 independent trials are needed before a normal approximation to B(n, 0.08) is appropriate.",
             "When the success rate is only $8\\%$, you need a fairly large sample so that enough successes are expected on average for the bell-shaped approximation to work."),
        step(13, "Note the asymmetry when p is small", "n(1-p) \\gg np \\text{ when } p = 0.08",
             "For small $p$, failures dominate and the $np \\geqslant 5$ rule is always the stricter requirement. This is a common pattern in rare-event settings."),
        step(14, "Final answer", "n_{\\min} = 63",
             "The minimum sample size is $63$ trials."),
    ],
    "$n_{\\min} = 63$.",
))

# ── q056 Hard: compare exact vs approximate ───────────────────────────────────
n, p, k = 400, 0.5, 200
mu, sig = n * p, sqrt(n * p * (1 - p))
z1, z2 = (k - 0.5 - mu) / sig, (k + 0.5 - mu) / sig
approx056 = phi(z2) - phi(z1)
exact056 = comb(n, k) * p**k * (1 - p) ** (n - k)
err056 = abs(exact056 - approx056)
questions.append(make_q(
    "q056", "Hard", 7, "value",
    ["comparing models", "continuity correction", "approximation error", "exact binomial"],
    "For $X \\sim B(400, 0.5)$, find the exact value of $P(X = 200)$ and the normal approximation with continuity correction. Hence find the absolute error of the approximation, giving all probabilities to $4$ significant figures.",
    [
        step(1, "State the binomial model", "X \\sim B(400,\\ 0.5)",
             "We have $400$ independent trials each with success probability $0.5$, counting the number of successes."),
        step(2, "Confirm the normal approximation is valid", "np = 200, \\quad n(1-p) = 200",
             "Both expected counts equal $200$, far exceeding $5$, so the binomial is symmetric and well suited to a normal approximation."),
        step(3, "Write the exact binomial probability formula",
             "P(X = 200) = \\binom{400}{200}(0.5)^{200}(0.5)^{200} = \\binom{400}{200}(0.5)^{400}",
             "Exactly $200$ successes means exactly $200$ failures. Because $p = 0.5$, both factors contribute equally."),
        step(4, "Evaluate the exact probability", f"P(X = 200) = {fmt4(exact056)}",
             f"Evaluating the binomial coefficient and power gives $P(X = 200) = {exact056:.4f}$ to four significant figures."),
        step(5, "Set up the approximating normal", "\\mu = 200, \\quad \\sigma = \\sqrt{100} = 10",
             "The mean is $np = 200$ and the standard deviation is $\\sqrt{np(1-p)} = 10$."),
        step(6, "Apply continuity correction for P(X = 200)", "P(X = 200) \\approx P(199.5 < Y < 200.5)",
             "The single integer $200$ corresponds to the continuous interval from $199.5$ to $200.5$."),
        step(7, "Standardise the lower boundary", f"z_1 = \\dfrac{{199.5 - 200}}{{10}} = {z1:.3f}",
             "The lower boundary sits half a unit below the mean, giving a small negative $z$-score."),
        step(8, "Standardise the upper boundary", f"z_2 = \\dfrac{{200.5 - 200}}{{10}} = {z2:.3f}",
             "The upper boundary is the same distance above the mean, giving a symmetric pair of $z$-values."),
        step(9, "Evaluate the approximating probability",
             f"P(199.5 < Y < 200.5) = \\Phi({z2:.3f}) - \\Phi({z1:.3f}) = {fmt4(approx056)}",
             f"Subtracting the two cumulative normal values gives the approximate probability ${approx056:.4f}$."),
        step(10, "Compute the absolute error",
             f"|\\text{{exact}} - \\text{{approx}}| = |{fmt4(exact056)} - {fmt4(approx056)}| = {fmt4(err056)}",
             f"The absolute difference is ${err056:.4f}$, which is very small relative to the probability itself."),
        step(11, "Express the error as a percentage of the exact value",
             f"\\text{{Relative error}} \\approx {100 * err056 / exact056:.2f}\\%",
             "Dividing by the exact value shows the approximation is accurate to within about a quarter of a percent here."),
        step(12, "Explain why the error is small", "np = n(1-p) = 200 \\gg 5",
             "With a large, balanced sample, the binomial histogram is very close to a bell curve centred at the mean, so the normal model with continuity correction tracks the exact probability closely."),
        step(13, "Compare the two values side by side",
             f"\\text{{Exact}} = {fmt4(exact056)}, \\qquad \\text{{Approximate}} = {fmt4(approx056)}",
             "The two values agree to four significant figures, illustrating that the normal approximation is highly reliable in this setting."),
        step(14, "State the absolute error", f"\\text{{Absolute error}} \\approx {fmt4(err056)}",
             f"The absolute error of the normal approximation is approximately ${err056:.4f}$."),
        step(15, "Summarise the model comparison",
             "The normal approximation with continuity correction is excellent for B(400, 0.5) at the centre of the distribution.",
             "Comparing models at the peak (where $X = np$) is a stringent test; the small error here gives confidence in using the normal approximation for similar probabilities."),
        step(16, "Final answer",
             f"P(X = 200) = {fmt4(exact056)},\\; P_\\text{{approx}} = {fmt4(approx056)},\\; \\text{{error}} = {fmt4(err056)}",
             f"Exact probability ${exact056:.4f}$, approximate ${approx056:.4f}$, absolute error ${err056:.4f}$."),
    ],
    f"Exact: $P(X = 200) = {fmt4(exact056)}$; approximate: ${fmt4(approx056)}$; absolute error $\\approx {fmt4(err056)}$.",
))

# Continue in part 2 - write output at end
OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-stats/normal-approximation-q054-q070.ts"

# ── q057 Intermediate multi-part ──────────────────────────────────────────────
n, p = 120, 0.15
mu, sig = n * p, sqrt(n * p * (1 - p))
z057 = (24.5 - mu) / sig
p057 = 1 - phi(z057)
questions.append(make_q(
    "q057", "Intermediate", 6, "value",
    ["validity conditions", "continuity correction", "upper-tail probability", "multi-part"],
    "A biologist tags $120$ fish and releases them. On recapture, each fish has an independent probability of $0.15$ of being one of the tagged fish. Let $X$ be the number of tagged fish in the sample. (a) Show that a normal approximation is appropriate. (b) Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 25)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(120,\\ 0.15)",
             "Each of the $120$ recaptured fish is an independent trial with success probability $0.15$ of being tagged."),
        step(2, "Calculate np for the validity check", "np = 120 \\times 0.15 = 18",
             "The expected number of tagged fish is $18$, which exceeds the threshold of $5$."),
        step(3, "Calculate n(1-p)", "n(1-p) = 120 \\times 0.85 = 102",
             "The expected number of untagged fish is $102$, also well above $5$."),
        step(4, "Conclude that the approximation is valid",
             "np \\geqslant 5 \\text{ and } n(1-p) \\geqslant 5 \\Rightarrow \\text{normal approximation appropriate}",
             "Both conditions are satisfied comfortably, so the binomial distribution is spread out enough for a bell-shaped approximation."),
        step(5, "Find the mean and standard deviation", "\\mu = 18, \\quad \\sigma = \\sqrt{18 \\times 0.85} = \\sqrt{15.3} \\approx 3.912",
             "These parameters define the approximating normal distribution $Y \\sim N(18, 15.3)$."),
        step(6, "Apply continuity correction for P(X ≥ 25)", "P(X \\geqslant 25) \\approx P(Y > 24.5)",
             "The discrete event 'at least $25$' starts at the integer $25$, which on the continuous scale begins just above $24.5$."),
        step(7, "Standardise the corrected boundary",
             f"z = \\dfrac{{24.5 - 18}}{{3.912}} \\approx {z057:.3f}",
             "The boundary $24.5$ lies about $1.66$ standard deviations above the mean, placing us in the upper tail."),
        step(8, "Rewrite as an upper-tail standard normal probability",
             f"P(Y > 24.5) = P(Z > {z057:.3f}) = 1 - \\Phi({z057:.3f})",
             "The calculator gives lower-tail areas, so we subtract from $1$ to obtain the upper tail."),
        step(9, "Evaluate the probability", f"P(X \\geqslant 25) \\approx {fmt4(p057)}",
             f"The estimated probability is ${p057:.4f}$ to four significant figures."),
        step(10, "Interpret in context", "P(X \\geqslant 25) \\approx 0.0483",
             "There is roughly a $4.8\\%$ chance of finding at least $25$ tagged fish, which is unlikely because $25$ is well above the expected $18$."),
        step(11, "State part (b) answer", "P(X \\geqslant 25) \\approx 0.0483",
             "The normal approximation with continuity correction gives approximately $0.0483$."),
    ],
    "(a) $np = 18$ and $n(1-p) = 102$, so the normal approximation is appropriate. (b) $P(X \\geqslant 25) \\approx 0.0483$.",
))

# Save partial and continue - append rest via exec of part 2
write_questions_ts(
    OUT,
    questions,
    batch_label="Normal approximation to binomial q054–q070",
)
print(f"Wrote {len(questions)} questions to {OUT}")
