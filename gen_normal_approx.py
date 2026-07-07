#!/usr/bin/env python3
"""Generate q019-q035 for Normal approximation to binomial subtopic."""
import json
from math import sqrt, comb, ceil
from scipy.stats import norm

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/normal-approx-q019-q035.txt"


def phi(z):
    return norm.cdf(z)


def fmt4(x):
    return f"{x:.4g}"


def step(n, desc, work, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": work,
        "explanation": expl,
        "diagram": None,
    }


def make_q(id_suffix, difficulty, marks, answer_type, tags, question_text, steps, final_answer):
    return {
        "id": f"al.y2.stats.normal-approximation.{id_suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Statistics",
        "subtopic": "Normal approximation to binomial",
        "subtopicId": "al.y2.stats.normal-approximation",
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": question_text,
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": final_answer},
    }


def approx_leq(n, p, k):
    mu, sig = n * p, sqrt(n * p * (1 - p))
    z = (k + 0.5 - mu) / sig
    return phi(z), mu, sig, z


def approx_geq(n, p, k):
    mu, sig = n * p, sqrt(n * p * (1 - p))
    z = (k - 0.5 - mu) / sig
    return 1 - phi(z), mu, sig, z


def approx_between(n, p, a, b):
    mu, sig = n * p, sqrt(n * p * (1 - p))
    z1 = (a - 0.5 - mu) / sig
    z2 = (b + 0.5 - mu) / sig
    return phi(z2) - phi(z1), mu, sig, z1, z2


def exact_leq(n, p, k):
    return sum(comb(n, i) * p**i * (1 - p) ** (n - i) for i in range(k + 1))


def exact_between(n, p, a, b):
    return sum(comb(n, i) * p**i * (1 - p) ** (n - i) for i in range(a, b + 1))


def min_n(p):
    return max(ceil(5 / p), ceil(5 / (1 - p)))


questions = []

# ── q019 Easy: B(200,0.05) P(X≤8) ───────────────────────────────────────────
n, p, k = 200, 0.05, 8
prob, mu, sig, z = approx_leq(n, p, k)
questions.append(make_q(
    "q019", "Easy", 4, "value",
    ["normal approximation", "continuity correction", "cumulative probability"],
    "A factory inspects $200$ items from a large batch. Each item independently has a probability of $0.05$ of being defective. Let $X$ be the number of defective items found. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 8)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(200,\\ 0.05)",
             "There are $200$ independent trials, each with the same small success probability $0.05$, and we count how many defects occur. That is a binomial setup."),
        step(2, "Check the validity of a normal approximation",
             "np = 200 \\times 0.05 = 10, \\qquad n(1-p) = 200 \\times 0.95 = 190",
             "A normal approximation is reliable when both $np$ and $n(1-p)$ are at least $5$. Here both are well above $5$, so the distribution is spread out enough to be bell-shaped."),
        step(3, "Find the mean and standard deviation",
             f"\\mu = np = 10, \\qquad \\sigma = \\sqrt{{np(1-p)}} = \\sqrt{{10 \\times 0.95}} = \\sqrt{{9.5}} \\approx {sig:.3f}",
             "The binomial mean is $np$ and the variance is $np(1-p)$. Taking the square root gives the standard deviation for the normal model."),
        step(4, "Write the approximating normal distribution", "X \\approx Y \\sim N(10,\\ 9.5)",
             "We replace the discrete binomial by a continuous normal with the same mean and variance, which lets us use standard normal tables."),
        step(5, "Apply the continuity correction for a 'less than or equal' event",
             "P(X \\leqslant 8) \\approx P(Y < 8.5)",
             "The discrete event $X \\leqslant 8$ includes the integer $8$. On the continuous scale, all values strictly below $8.5$ correspond to those integers."),
        step(6, "Standardise the corrected boundary",
             f"z = \\dfrac{{8.5 - 10}}{{{sig:.3f}}} \\approx {z:.3f}",
             "We convert $8.5$ into a $z$-score by measuring how many standard deviations it lies below the mean. The negative value places us in the lower tail."),
        step(7, "Evaluate the standard normal probability and state the answer",
             f"P(X \\leqslant 8) \\approx \\Phi({z:.3f}) = {fmt4(prob)}",
             f"The cumulative probability at $z = {z:.3f}$ is ${prob:.4f}$ to four significant figures. So there is roughly a $31\\%$ chance of finding at most $8$ defects, which is plausible because $8$ is close to the expected value of $10$."),
    ],
    f"$P(X \\leqslant 8) \\approx {fmt4(prob)}$.",
))

# ── q020 Easy: B(40,0.55) P(X≥21) ───────────────────────────────────────────
n, p, k = 40, 0.55, 21
prob, mu, sig, z = approx_geq(n, p, k)
questions.append(make_q(
    "q020", "Easy", 4, "value",
    ["normal approximation", "continuity correction", "upper-tail probability"],
    "In a survey, $40$ people are asked a yes/no question and each person independently has a probability of $0.55$ of answering yes. Let $X$ be the number of yes responses. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 21)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(40,\\ 0.55)",
             "Each of the $40$ people is an independent trial with success probability $0.55$ of saying yes, and $X$ counts the successes."),
        step(2, "Check the validity of a normal approximation",
             "np = 40 \\times 0.55 = 22, \\qquad n(1-p) = 40 \\times 0.45 = 18",
             "Both expected counts exceed $5$, so the binomial distribution is sufficiently symmetric for a normal approximation."),
        step(3, "Find the mean and standard deviation",
             f"\\mu = 22, \\qquad \\sigma = \\sqrt{{22 \\times 0.45}} = \\sqrt{{9.9}} \\approx {sig:.3f}",
             "The mean is $np = 22$ and the standard deviation is the square root of the variance $np(1-p)$."),
        step(4, "Apply the continuity correction for a 'greater than or equal' event",
             "P(X \\geqslant 21) \\approx P(Y > 20.5)",
             "The discrete event 'at least $21$' begins at the integer $21$, which on the continuous scale starts just above $20.5$."),
        step(5, "Standardise the corrected boundary",
             f"z = \\dfrac{{20.5 - 22}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary $20.5$ lies slightly below the mean, giving a small negative $z$-score."),
        step(6, "Rewrite as an upper-tail standard normal probability",
             f"P(Y > 20.5) = P(Z > {z:.3f}) = 1 - \\Phi({z:.3f})",
             "Calculators give lower-tail areas $\\Phi$, so we subtract from $1$ to obtain the upper tail."),
        step(7, "Evaluate and state the answer",
             f"P(X \\geqslant 21) \\approx 1 - \\Phi({z:.3f}) = {fmt4(prob)}",
             f"The estimated probability is ${prob:.4f}$. Because $21$ is near the mean of $22$, the probability of at least $21$ yes responses is reasonably high at about $68\\%$."),
    ],
    f"$P(X \\geqslant 21) \\approx {fmt4(prob)}$.",
))

# ── q021 Easy: B(50,0.8) P(X≤35) ────────────────────────────────────────────
n, p, k = 50, 0.8, 35
prob, mu, sig, z = approx_leq(n, p, k)
questions.append(make_q(
    "q021", "Easy", 4, "value",
    ["normal approximation", "continuity correction", "cumulative probability"],
    "A student answers $50$ multiple-choice questions, each with an independent probability of $0.8$ of being correct. Let $X$ be the number of correct answers. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 35)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(50,\\ 0.8)",
             "There are $50$ independent trials with success probability $0.8$, counting the number of correct answers."),
        step(2, "Check the validity of a normal approximation",
             "np = 50 \\times 0.8 = 40, \\qquad n(1-p) = 50 \\times 0.2 = 10",
             "Both $np$ and $n(1-p)$ are at least $5$, so the binomial is not too skewed for a bell-shaped approximation."),
        step(3, "Find the mean and standard deviation",
             f"\\mu = 40, \\qquad \\sigma = \\sqrt{{40 \\times 0.2}} = \\sqrt{{8}} \\approx {sig:.3f}",
             "The mean is $40$ correct answers on average, with standard deviation $\\sqrt{8}$."),
        step(4, "Apply the continuity correction", "P(X \\leqslant 35) \\approx P(Y < 35.5)",
             "Including the integer $35$ in a 'less than or equal' event means using $35.5$ as the upper boundary on the continuous scale."),
        step(5, "Standardise the corrected boundary",
             f"z = \\dfrac{{35.5 - 40}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The value $35.5$ is well below the mean, about $1.6$ standard deviations lower, placing us deep in the lower tail."),
        step(6, "Evaluate the standard normal probability",
             f"P(X \\leqslant 35) \\approx \\Phi({z:.3f}) = {fmt4(prob)}",
             f"The lower-tail area at $z = {z:.3f}$ is ${prob:.4f}$ to four significant figures."),
        step(7, "Interpret the result", "P(X \\leqslant 35) \\approx 0.05581",
             "Scoring at most $35$ out of $50$ is quite unlikely (about $5.6\\%$) because the expected score is $40$. This fits the fact that $35$ is noticeably below average."),
    ],
    f"$P(X \\leqslant 35) \\approx {fmt4(prob)}$.",
))

# ── q022 Easy: B(120,0.3) μ, σ, validity ────────────────────────────────────
n, p = 120, 0.3
mu, sig = n * p, sqrt(n * p * (1 - p))
questions.append(make_q(
    "q022", "Easy", 3, "value",
    ["mean and variance", "validity conditions", "normal approximation"],
    "A quality controller samples $120$ items from a production line. Each item independently has a probability of $0.3$ of passing inspection. Let $X$ be the number of items that pass. Find the mean and standard deviation of $X$, and state whether a normal approximation to this binomial distribution would be appropriate.",
    [
        step(1, "Identify the binomial model", "X \\sim B(120,\\ 0.3)",
             "We have $120$ independent trials with success probability $0.3$, counting passes."),
        step(2, "Calculate the mean", f"\\mu = E(X) = np = 120 \\times 0.3 = {mu:.0f}",
             "The expected number of passes is the number of trials multiplied by the success probability on each trial."),
        step(3, "Calculate the variance and standard deviation",
             f"\\text{{Var}}(X) = np(1-p) = 120 \\times 0.3 \\times 0.7 = {n*p*(1-p):.0f}, \\qquad \\sigma = \\sqrt{{{n*p*(1-p):.0f}}} \\approx {sig:.3f}",
             "Binomial variance is $np(1-p)$. The standard deviation is the square root of this variance and measures the typical spread around the mean."),
        step(4, "State the validity conditions",
             "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
             "A normal approximation requires enough expected successes and failures so the distribution is not squeezed against $0$ or $n$."),
        step(5, "Check both conditions",
             f"np = {mu:.0f} \\geqslant 5, \\qquad n(1-p) = {n*(1-p):.0f} \\geqslant 5",
             f"Both expected counts are far above $5$ ($np = {mu:.0f}$ and $n(1-p) = {n*(1-p):.0f}$), so the distribution is well spread."),
        step(6, "Conclude on the appropriateness of the normal approximation",
             "\\text{Normal approximation is appropriate.}",
             "Because both validity conditions are satisfied comfortably, the binomial histogram will be close to a bell curve centred at $\\mu = 36$ with standard deviation about $5.02$."),
    ],
    f"$\\mu = {mu:.0f}$, $\\sigma \\approx {sig:.3f}$; a normal approximation is appropriate.",
))

# ── q023 Easy: B(60,0.75) P(40≤X≤50) ───────────────────────────────────────
n, p, a, b = 60, 0.75, 40, 50
prob, mu, sig, z1, z2 = approx_between(n, p, a, b)
questions.append(make_q(
    "q023", "Easy", 4, "value",
    ["normal approximation", "continuity correction", "interval probability"],
    "A hospital has $60$ beds and each day, independently, any given bed has a probability of $0.75$ of being occupied. Let $X$ be the number of occupied beds. Use a normal approximation with a continuity correction to estimate $P(40 \\leqslant X \\leqslant 50)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(60,\\ 0.75)",
             "Each of the $60$ beds is an independent trial with occupancy probability $0.75$."),
        step(2, "Check validity and find parameters",
             f"np = 45, \\quad n(1-p) = 15, \\quad \\mu = 45, \\quad \\sigma = \\sqrt{{45 \\times 0.25}} = \\sqrt{{11.25}} \\approx {sig:.3f}",
             "Both expected counts exceed $5$, so the approximation is valid. The mean is $45$ occupied beds with standard deviation about $3.354$."),
        step(3, "Apply the continuity correction for an inclusive interval",
             "P(40 \\leqslant X \\leqslant 50) \\approx P(39.5 < Y < 50.5)",
             "The integers from $40$ to $50$ inclusive correspond to the continuous interval from just above $39.5$ to just below $50.5$."),
        step(4, "Standardise the lower boundary",
             f"z_1 = \\dfrac{{39.5 - 45}}{{{sig:.3f}}} \\approx {z1:.3f}",
             "The lower boundary sits about $1.64$ standard deviations below the mean."),
        step(5, "Standardise the upper boundary",
             f"z_2 = \\dfrac{{50.5 - 45}}{{{sig:.3f}}} \\approx {z2:.3f}",
             "The upper boundary is the same distance above the mean, giving a symmetric pair of $z$-scores."),
        step(6, "Evaluate the probability between the two $z$-values",
             f"P(39.5 < Y < 50.5) = \\Phi({z2:.3f}) - \\Phi({z1:.3f}) = {fmt4(prob)}",
             f"Subtracting the two cumulative normal values gives ${prob:.4f}$ to four significant figures."),
        step(7, "Interpret the result", "P(40 \\leqslant X \\leqslant 50) \\approx 0.8989",
             "There is about an $90\\%$ chance that between $40$ and $50$ beds are occupied. This is high because the interval is centred near the mean of $45$."),
    ],
    f"$P(40 \\leqslant X \\leqslant 50) \\approx {fmt4(prob)}$.",
))

# ── q024 Easy: B(40,0.15) explain validity ──────────────────────────────────
n, p = 40, 0.15
questions.append(make_q(
    "q024", "Easy", 3, "reasoning",
    ["validity conditions", "np rule", "normal approximation"],
    "A researcher records whether $40$ volunteers show a particular response, with each volunteer having an independent probability of $0.15$ of responding. Let $X \\sim B(40, 0.15)$. Explain whether a normal approximation to $X$ would be considered appropriate, justifying your answer.",
    [
        step(1, "State the validity conditions for a normal approximation",
             "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
             "The binomial can be approximated by a normal when both the expected number of successes and failures are at least $5$, ensuring the distribution is not too skewed or concentrated at the boundaries."),
        step(2, "Calculate the expected number of successes",
             f"np = 40 \\times 0.15 = {n*p:.0f}",
             "On average we expect $6$ responses out of $40$ volunteers."),
        step(3, "Calculate the expected number of failures",
             f"n(1-p) = 40 \\times 0.85 = {n*(1-p):.0f}",
             "The expected number of non-responses is $34$, which is well above the threshold."),
        step(4, "Check the first condition", f"np = {n*p:.0f} \\geqslant 5 \\quad \\checkmark",
             f"The expected successes equal ${n*p:.0f}$, which just exceeds $5$. This is the tighter of the two conditions here because $p$ is small."),
        step(5, "Check the second condition", f"n(1-p) = {n*(1-p):.0f} \\geqslant 5 \\quad \\checkmark",
             "With plenty of expected failures, the distribution is not squeezed against $n$."),
        step(6, "State the conclusion",
             "\\text{A normal approximation is appropriate, though only just for } np.",
             "Both conditions are met. Because $np = 6$ is only slightly above $5$, the approximation will work but is less accurate than when $np$ is much larger. For small $p$, the $np \\geqslant 5$ rule is typically the binding constraint."),
    ],
    "A normal approximation is appropriate because $np = 6 \\geqslant 5$ and $n(1-p) = 34 \\geqslant 5$.",
))

# ── q025 Intermediate: B(30,0.3) exact vs approx P(X≤7) ───────────────────────
n, p, k = 30, 0.3, 7
exact, approx, mu, sig, z = exact_leq(n, p, k), *approx_leq(n, p, k)
err = abs(exact - approx)
questions.append(make_q(
    "q025", "Intermediate", 5, "value",
    ["comparing models", "exact binomial", "continuity correction", "approximation error"],
    "For $X \\sim B(30, 0.3)$, find the exact value of $P(X \\leqslant 7)$ and the normal approximation with continuity correction. Hence comment on the accuracy of the approximation, giving all probabilities to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(30,\\ 0.3)",
             "There are $30$ independent trials with success probability $0.3$."),
        step(2, "Check the validity of a normal approximation",
             "np = 9, \\qquad n(1-p) = 21",
             "Both expected counts exceed $5$, so a normal approximation is permitted, though $np = 9$ is modest."),
        step(3, "Set up the exact binomial probability",
             "P(X \\leqslant 7) = \\displaystyle\\sum_{r=0}^{7} \\binom{30}{r}(0.3)^r(0.7)^{30-r}",
             "The exact probability sums the binomial probabilities for every outcome from $0$ up to $7$ successes."),
        step(4, "Evaluate the exact probability",
             f"P(X \\leqslant 7) = {fmt4(exact)}",
             f"Summing the individual binomial terms gives $P(X \\leqslant 7) = {exact:.4f}$ to four significant figures."),
        step(5, "Find the mean and standard deviation for the normal model",
             f"\\mu = 9, \\qquad \\sigma = \\sqrt{{9 \\times 0.7}} = \\sqrt{{6.3}} \\approx {sig:.3f}",
             "The approximating normal has the same mean and variance as the binomial."),
        step(6, "Apply the continuity correction", "P(X \\leqslant 7) \\approx P(Y < 7.5)",
             "The discrete event includes the integer $7$, so we use $7.5$ on the continuous scale."),
        step(7, "Standardise the corrected boundary",
             f"z = \\dfrac{{7.5 - 9}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary $7.5$ lies below the mean, giving a negative $z$-score."),
        step(8, "Evaluate the approximating probability",
             f"P(X \\leqslant 7) \\approx \\Phi({z:.3f}) = {fmt4(approx)}",
             f"The normal approximation gives ${approx:.4f}$ to four significant figures."),
        step(9, "Compute the absolute difference",
             f"|\\text{{exact}} - \\text{{approx}}| = |{fmt4(exact)} - {fmt4(approx)}| = {fmt4(err)}",
             f"The absolute error is about ${err:.4f}$, which is small relative to the probabilities themselves."),
        step(10, "Comment on the accuracy",
             f"\\text{{Exact}} = {fmt4(exact)}, \\quad \\text{{Approximate}} = {fmt4(approx)}",
             "The two values agree to two decimal places. With $np = 9$ only modestly above $5$, the approximation is reasonable but not as precise as for larger $n$."),
    ],
    f"Exact: $P(X \\leqslant 7) = {fmt4(exact)}$; approximate: ${fmt4(approx)}$; the approximation is reasonable with absolute error $\\approx {fmt4(err)}$.",
))

# ── q026 Intermediate: B(100,0.4) P(X≥48) ──────────────────────────────────
n, p, k = 100, 0.4, 48
prob, mu, sig, z = approx_geq(n, p, k)
questions.append(make_q(
    "q026", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "upper-tail probability"],
    "In an election poll, $100$ voters are surveyed and each voter independently has a probability of $0.4$ of supporting a particular candidate. Let $X$ be the number of supporters. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 48)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(100,\\ 0.4)",
             "Each of the $100$ voters is an independent trial with support probability $0.4$."),
        step(2, "Check validity and find parameters",
             f"np = 40, \\quad n(1-p) = 60, \\quad \\mu = 40, \\quad \\sigma = \\sqrt{{40 \\times 0.6}} = \\sqrt{{24}} \\approx {sig:.3f}",
             "Both expected counts exceed $5$, so the normal approximation is appropriate."),
        step(3, "Write the approximating normal", "X \\approx Y \\sim N(40,\\ 24)",
             "The continuous normal has the same mean $40$ and variance $24$ as the binomial."),
        step(4, "Apply the continuity correction", "P(X \\geqslant 48) \\approx P(Y > 47.5)",
             "The event 'at least $48$' starts at integer $48$, which on the continuous scale begins above $47.5$."),
        step(5, "Standardise the corrected boundary",
             f"z = \\dfrac{{47.5 - 40}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary is about $1.53$ standard deviations above the mean, placing us in the upper tail."),
        step(6, "Rewrite as an upper-tail probability",
             f"P(Y > 47.5) = 1 - \\Phi({z:.3f})",
             "We subtract the lower-tail area from $1$ to get the upper-tail probability."),
        step(7, "Evaluate the probability",
             f"P(X \\geqslant 48) \\approx {fmt4(prob)}",
             f"The estimated probability is ${prob:.4f}$ to four significant figures."),
        step(8, "Interpret in context", "P(X \\geqslant 48) \\approx 0.06289",
             "There is roughly a $6.3\\%$ chance of at least $48$ supporters in a sample of $100$, which is unlikely because $48$ is well above the expected $40$."),
        step(9, "State the final answer", "P(X \\geqslant 48) \\approx 0.06289",
             "The normal approximation with continuity correction gives approximately $0.06289$."),
    ],
    f"$P(X \\geqslant 48) \\approx {fmt4(prob)}$.",
))

# ── q027 Intermediate: B(80,0.25) P(15≤X≤25) ────────────────────────────────
n, p, a, b = 80, 0.25, 15, 25
prob, mu, sig, z1, z2 = approx_between(n, p, a, b)
questions.append(make_q(
    "q027", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "interval probability"],
    "A biologist observes $80$ seedlings and each seedling independently has a probability of $0.25$ of surviving. Let $X$ be the number that survive. Use a normal approximation with a continuity correction to estimate $P(15 \\leqslant X \\leqslant 25)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(80,\\ 0.25)",
             "Each seedling is an independent trial with survival probability $0.25$."),
        step(2, "Check validity and find parameters",
             f"np = 20, \\quad n(1-p) = 60, \\quad \\mu = 20, \\quad \\sigma = \\sqrt{{20 \\times 0.75}} = \\sqrt{{15}} \\approx {sig:.3f}",
             "Both expected counts are well above $5$, confirming the approximation is valid."),
        step(3, "Apply the continuity correction",
             "P(15 \\leqslant X \\leqslant 25) \\approx P(14.5 < Y < 25.5)",
             "The inclusive interval from $15$ to $25$ maps to the continuous range between $14.5$ and $25.5$."),
        step(4, "Standardise the lower boundary",
             f"z_1 = \\dfrac{{14.5 - 20}}{{{sig:.3f}}} \\approx {z1:.3f}",
             "The lower boundary lies about $1.42$ standard deviations below the mean."),
        step(5, "Standardise the upper boundary",
             f"z_2 = \\dfrac{{25.5 - 20}}{{{sig:.3f}}} \\approx {z2:.3f}",
             "The upper boundary is symmetrically placed above the mean."),
        step(6, "Evaluate the probability between the boundaries",
             f"P(14.5 < Y < 25.5) = \\Phi({z2:.3f}) - \\Phi({z1:.3f}) = {fmt4(prob)}",
             f"Subtracting cumulative values gives ${prob:.4f}$ to four significant figures."),
        step(7, "Verify the interval is centred near the mean",
             "\\text{Interval } [15, 25] \\text{ is symmetric about } \\mu = 20",
             "Because the interval is centred on the mean, we expect a high probability, which matches our result of about $84\\%$."),
        step(8, "Interpret the result", "P(15 \\leqslant X \\leqslant 25) \\approx 0.8444",
             "There is roughly an $84\\%$ chance that between $15$ and $25$ seedlings survive, which is plausible for an interval spanning one standard deviation on each side of the mean."),
        step(9, "State the final answer", "P(15 \\leqslant X \\leqslant 25) \\approx 0.8444",
             "The normal approximation gives approximately $0.8444$."),
    ],
    f"$P(15 \\leqslant X \\leqslant 25) \\approx {fmt4(prob)}$.",
))

# ── q028 Intermediate: min n for B(n,0.08) = 63 ─────────────────────────────
p_val = 0.08
n_min = min_n(p_val)
questions.append(make_q(
    "q028", "Intermediate", 5, "integer",
    ["minimum sample size", "validity conditions", "np rule"],
    "On each of $n$ independent trials, an event occurs with probability $p = 0.08$. Let $X \\sim B(n, 0.08)$. Find the smallest integer $n$ for which a normal approximation to $X$ would be considered appropriate.",
    [
        step(1, "State the validity conditions",
             "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
             "Both expected successes and failures must be at least $5$ for the binomial to be sufficiently bell-shaped."),
        step(2, "Substitute $p = 0.08$ into the success condition",
             "n \\times 0.08 \\geqslant 5",
             "Because $p$ is small, we expect this inequality to require a relatively large $n$."),
        step(3, "Solve the success inequality", "n \\geqslant \\dfrac{5}{0.08} = 62.5",
             "Dividing gives $n \\geqslant 62.5$, so the smallest integer is at least $63$."),
        step(4, "Round up to the smallest integer", "n \\geqslant 63",
             "Since $n$ counts trials, we need the smallest whole number at least $62.5$, which is $63$."),
        step(5, "Check the failure condition",
             "n(1-p) = n \\times 0.92 \\geqslant 5 \\Rightarrow n \\geqslant 5.43\\ldots",
             "This only requires $n \\geqslant 6$, which is far weaker than the success condition."),
        step(6, "Identify the binding constraint", "n \\geqslant 63 \\text{ (from } np \\geqslant 5\\text{)}",
             "Both conditions must hold, so we take the larger lower bound."),
        step(7, "Verify at $n = 63$",
             f"np = 63 \\times 0.08 = {63*p_val:.2f} \\geqslant 5, \\qquad n(1-p) = 63 \\times 0.92 = {63*(1-p_val):.2f} \\geqslant 5",
             "At $n = 63$ both conditions are satisfied."),
        step(8, "Verify that $n = 62$ fails",
             "np = 62 \\times 0.08 = 4.96 < 5",
             "Reducing $n$ by $1$ drops the expected successes below $5$, so $62$ is too small."),
        step(9, "State the minimum sample size", f"n_{{\\min}} = {n_min}",
             f"The smallest integer $n$ for which a normal approximation is appropriate is ${n_min}$."),
    ],
    f"$n_{{\\min}} = {n_min}$.",
))

# ── q029 Intermediate: B(150,0.12) P(X≤14) ──────────────────────────────────
n, p, k = 150, 0.12, 14
prob, mu, sig, z = approx_leq(n, p, k)
questions.append(make_q(
    "q029", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "cumulative probability"],
    "A call centre handles $150$ calls and each call independently has a probability of $0.12$ of requiring a follow-up. Let $X$ be the number of follow-ups needed. Use a normal approximation with a continuity correction to estimate $P(X \\leqslant 14)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(150,\\ 0.12)",
             "Each call is an independent trial with follow-up probability $0.12$."),
        step(2, "Check validity and find parameters",
             f"np = 18, \\quad n(1-p) = 132, \\quad \\mu = 18, \\quad \\sigma = \\sqrt{{18 \\times 0.88}} \\approx {sig:.3f}",
             "Both expected counts exceed $5$, so the normal approximation is valid."),
        step(3, "Apply the continuity correction", "P(X \\leqslant 14) \\approx P(Y < 14.5)",
             "The discrete event includes the integer $14$, so we use $14.5$ as the upper boundary."),
        step(4, "Standardise the corrected boundary",
             f"z = \\dfrac{{14.5 - 18}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary lies below the mean, about $0.88$ standard deviations lower."),
        step(5, "Evaluate the standard normal probability",
             f"P(X \\leqslant 14) \\approx \\Phi({z:.3f}) = {fmt4(prob)}",
             f"The cumulative probability is ${prob:.4f}$ to four significant figures."),
        step(6, "Interpret in context", "P(X \\leqslant 14) \\approx 0.1896",
             "There is roughly a $19\\%$ chance of at most $14$ follow-ups, which is plausible because $14$ is below the expected $18$."),
        step(7, "Compare with the mean", "14 < \\mu = 18",
             "Since $14$ is below average, the probability is less than $0.5$, consistent with our answer."),
        step(8, "Note the role of continuity correction",
             "P(Y < 14.5) \\text{ rather than } P(Y < 14)",
             "Without the $+0.5$ correction, we would underestimate the probability by missing half the probability mass at $X = 14$."),
        step(9, "State the final answer", "P(X \\leqslant 14) \\approx 0.1896",
             "The normal approximation with continuity correction gives approximately $0.1896$."),
    ],
    f"$P(X \\leqslant 14) \\approx {fmt4(prob)}$.",
))

# ── q030 Intermediate: B(200,0.35) P(X≥80) ──────────────────────────────────
n, p, k = 200, 0.35, 80
prob, mu, sig, z = approx_geq(n, p, k)
questions.append(make_q(
    "q030", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "upper-tail probability"],
    "A manufacturer tests $200$ components and each component independently has a probability of $0.35$ of meeting a strict standard. Let $X$ be the number that meet the standard. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 80)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(200,\\ 0.35)",
             "Each component is an independent trial with success probability $0.35$."),
        step(2, "Check validity and find parameters",
             f"np = 70, \\quad n(1-p) = 130, \\quad \\mu = 70, \\quad \\sigma = \\sqrt{{70 \\times 0.65}} \\approx {sig:.3f}",
             "Both expected counts are well above $5$, so the approximation is appropriate."),
        step(3, "Apply the continuity correction", "P(X \\geqslant 80) \\approx P(Y > 79.5)",
             "The event 'at least $80$' begins at integer $80$, corresponding to values above $79.5$ on the continuous scale."),
        step(4, "Standardise the corrected boundary",
             f"z = \\dfrac{{79.5 - 70}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary is about $1.41$ standard deviations above the mean."),
        step(5, "Rewrite as an upper-tail probability",
             f"P(Y > 79.5) = 1 - \\Phi({z:.3f})",
             "We use the complement of the lower-tail area."),
        step(6, "Evaluate the probability",
             f"P(X \\geqslant 80) \\approx {fmt4(prob)}",
             f"The estimated probability is ${prob:.4f}$ to four significant figures."),
        step(7, "Interpret in context", "P(X \\geqslant 80) \\approx 0.07951",
             "There is roughly an $8\\%$ chance of at least $80$ components passing, which is unlikely because $80$ exceeds the expected $70$."),
        step(8, "Relate to the standard deviation",
             "80 - \\mu \\approx 1.4\\sigma",
             "Being $1.4$ standard deviations above the mean gives an upper-tail probability below $10\\%$, consistent with our result."),
        step(9, "State the final answer", "P(X \\geqslant 80) \\approx 0.07951",
             "The normal approximation gives approximately $0.07951$."),
    ],
    f"$P(X \\geqslant 80) \\approx {fmt4(prob)}$.",
))

# ── q031 Intermediate: B(120,0.08) P(6≤X≤14) ────────────────────────────────
n, p, a, b = 120, 0.08, 6, 14
prob, mu, sig, z1, z2 = approx_between(n, p, a, b)
questions.append(make_q(
    "q031", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "interval probability"],
    "In a clinical trial, $120$ patients are treated and each patient independently has a probability of $0.08$ of experiencing a side effect. Let $X$ be the number of patients with side effects. Use a normal approximation with a continuity correction to estimate $P(6 \\leqslant X \\leqslant 14)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(120,\\ 0.08)",
             "Each patient is an independent trial with side-effect probability $0.08$."),
        step(2, "Check validity and find parameters",
             f"np = 9.6, \\quad n(1-p) = 110.4, \\quad \\mu = 9.6, \\quad \\sigma = \\sqrt{{9.6 \\times 0.92}} \\approx {sig:.3f}",
             "Both expected counts exceed $5$ (just for $np$), so the approximation is acceptable."),
        step(3, "Apply the continuity correction",
             "P(6 \\leqslant X \\leqslant 14) \\approx P(5.5 < Y < 14.5)",
             "The integers from $6$ to $14$ map to the continuous interval between $5.5$ and $14.5$."),
        step(4, "Standardise the lower boundary",
             f"z_1 = \\dfrac{{5.5 - 9.6}}{{{sig:.3f}}} \\approx {z1:.3f}",
             "The lower boundary lies about $1.38$ standard deviations below the mean."),
        step(5, "Standardise the upper boundary",
             f"z_2 = \\dfrac{{14.5 - 9.6}}{{{sig:.3f}}} \\approx {z2:.3f}",
             "The upper boundary is about $1.65$ standard deviations above the mean."),
        step(6, "Evaluate the probability between the boundaries",
             f"P(5.5 < Y < 14.5) = \\Phi({z2:.3f}) - \\Phi({z1:.3f}) = {fmt4(prob)}",
             f"Subtracting cumulative values gives ${prob:.4f}$ to four significant figures."),
        step(7, "Interpret the interval relative to the mean",
             "[6, 14] \\text{ spans roughly } \\mu \\pm 1.5\\sigma",
             "The interval covers outcomes near the expected $9.6$ side effects, so a high probability is expected."),
        step(8, "Interpret in context", "P(6 \\leqslant X \\leqslant 14) \\approx 0.8666",
             "There is roughly an $87\\%$ chance that between $6$ and $14$ patients experience side effects."),
        step(9, "State the final answer", "P(6 \\leqslant X \\leqslant 14) \\approx 0.8666",
             "The normal approximation gives approximately $0.8666$."),
    ],
    f"$P(6 \\leqslant X \\leqslant 14) \\approx {fmt4(prob)}$.",
))

# ── q032 Intermediate: B(90,0.6) inverse k for P(X≤k)≈0.10 ──────────────────
n, p = 90, 0.6
mu, sig = n * p, sqrt(n * p * (1 - p))
target = 0.10
z_inv = norm.ppf(target)
k_boundary = mu + z_inv * sig - 0.5
k_ans = int(k_boundary)  # greatest integer k
prob_k, _, _, z_k = approx_leq(n, p, k_ans)
questions.append(make_q(
    "q032", "Intermediate", 6, "integer",
    ["inverse normal", "continuity correction", "percentile"],
    "In a class of $90$ students, each student independently has a probability of $0.6$ of completing an assignment on time. Let $X$ be the number who complete on time. Using a normal approximation with a continuity correction, find the greatest integer $k$ such that $P(X \\leqslant k) \\approx 0.10$.",
    [
        step(1, "Identify the binomial model", "X \\sim B(90,\\ 0.6)",
             "Each student is an independent trial with on-time probability $0.6$."),
        step(2, "Check validity and find parameters",
             f"np = 54, \\quad n(1-p) = 36, \\quad \\mu = 54, \\quad \\sigma = \\sqrt{{54 \\times 0.4}} = \\sqrt{{21.6}} \\approx {sig:.3f}",
             "Both expected counts exceed $5$, so the normal approximation is valid."),
        step(3, "Set up the inverse problem with continuity correction",
             "P(X \\leqslant k) \\approx P(Y < k + 0.5) = 0.10",
             "We want the cumulative probability to equal $0.10$, using the continuity correction on the upper boundary."),
        step(4, "Standardise and find the required $z$-score",
             f"\\dfrac{{k + 0.5 - 54}}{{{sig:.3f}}} = z, \\qquad \\Phi(z) = 0.10",
             "The standardised value must have a lower-tail area of $0.10$, which is in the left tail below the mean."),
        step(5, "Find the $z$-value from the standard normal",
             f"z = \\Phi^{{-1}}(0.10) \\approx {z_inv:.3f}",
             f"The $z$-score with lower-tail probability $0.10$ is approximately ${z_inv:.3f}$."),
        step(6, "Solve for $k$",
             f"k + 0.5 = 54 + ({z_inv:.3f}) \\times {sig:.3f} \\approx {mu + z_inv*sig:.3f}",
             "Rearranging the standardisation formula gives the corrected boundary value."),
        step(7, "Calculate the boundary and round down",
             f"k + 0.5 \\approx {mu + z_inv*sig:.3f} \\Rightarrow k \\approx {k_boundary:.3f}",
             f"The continuous boundary is about ${mu + z_inv*sig:.2f}$, so the greatest integer $k$ is ${k_ans}$."),
        step(8, "Verify by checking the approximate probability at $k = 47$",
             f"P(X \\leqslant 47) \\approx \\Phi\\!\\left(\\dfrac{{47.5 - 54}}{{{sig:.3f}}}\\right) = \\Phi({z_k:.3f}) \\approx {fmt4(prob_k)}",
             f"At $k = 47$, the approximate cumulative probability is ${prob_k:.4f}$, which is close to the target of $0.10$."),
        step(9, "Confirm $k = 48$ gives a higher probability",
             "P(X \\leqslant 48) \\approx 0.118 > 0.10",
             "Increasing $k$ by $1$ pushes the cumulative probability above $0.10$, confirming $47$ is the greatest suitable integer."),
        step(10, "State the answer", f"k = {k_ans}",
             f"The greatest integer $k$ with $P(X \\leqslant k) \\approx 0.10$ is ${k_ans}$."),
    ],
    f"$k = {k_ans}$.",
))

# ── q033 Intermediate: B(250,0.02) P(X≥8) ───────────────────────────────────
n, p, k = 250, 0.02, 8
prob, mu, sig, z = approx_geq(n, p, k)
questions.append(make_q(
    "q033", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "rare events"],
    "A large warehouse processes $250$ packages per day and each package independently has a probability of $0.02$ of being damaged. Let $X$ be the number of damaged packages. Use a normal approximation with a continuity correction to estimate $P(X \\geqslant 8)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(250,\\ 0.02)",
             "Each package is an independent trial with damage probability $0.02$."),
        step(2, "Check validity and find parameters",
             f"np = 5, \\quad n(1-p) = 245, \\quad \\mu = 5, \\quad \\sigma = \\sqrt{{5 \\times 0.98}} \\approx {sig:.3f}",
             "$np = 5$ meets the threshold exactly, so the approximation is valid but at the boundary."),
        step(3, "Apply the continuity correction", "P(X \\geqslant 8) \\approx P(Y > 7.5)",
             "The event 'at least $8$' begins at integer $8$, corresponding to values above $7.5$."),
        step(4, "Standardise the corrected boundary",
             f"z = \\dfrac{{7.5 - 5}}{{{sig:.3f}}} \\approx {z:.3f}",
             "The boundary is about $1.13$ standard deviations above the mean."),
        step(5, "Rewrite as an upper-tail probability",
             f"P(Y > 7.5) = 1 - \\Phi({z:.3f})",
             "We subtract the lower-tail area from $1$."),
        step(6, "Evaluate the probability",
             f"P(X \\geqslant 8) \\approx {fmt4(prob)}",
             f"The estimated probability is ${prob:.4f}$ to four significant figures."),
        step(7, "Interpret in context", "P(X \\geqslant 8) \\approx 0.1294",
             "There is roughly a $13\\%$ chance of at least $8$ damaged packages, which is plausible for a rare event occurring more often than expected."),
        step(8, "Note the boundary validity", "np = 5 \\text{ exactly}",
             "With $np$ exactly at $5$, the approximation works but may be less accurate than when $np$ is much larger."),
        step(9, "State the final answer", "P(X \\geqslant 8) \\approx 0.1294",
             "The normal approximation gives approximately $0.1294$."),
    ],
    f"$P(X \\geqslant 8) \\approx {fmt4(prob)}$.",
))

# ── q034 Intermediate: B(100,0.45) exact vs approx P(38≤X≤52) ───────────────
n, p, a, b = 100, 0.45, 38, 52
exact = exact_between(n, p, a, b)
approx, mu, sig, z1, z2 = approx_between(n, p, a, b)
err = abs(exact - approx)
questions.append(make_q(
    "q034", "Intermediate", 6, "value",
    ["comparing models", "exact binomial", "continuity correction", "interval probability"],
    "For $X \\sim B(100, 0.45)$, find the exact value of $P(38 \\leqslant X \\leqslant 52)$ and the normal approximation with continuity correction. Hence find the absolute error, giving all probabilities to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", "X \\sim B(100,\\ 0.45)",
             "There are $100$ independent trials with success probability $0.45$."),
        step(2, "Check the validity of a normal approximation",
             "np = 45, \\qquad n(1-p) = 55",
             "Both expected counts exceed $5$, so the normal approximation is appropriate."),
        step(3, "Set up the exact binomial probability",
             "P(38 \\leqslant X \\leqslant 52) = \\displaystyle\\sum_{r=38}^{52} \\binom{100}{r}(0.45)^r(0.55)^{100-r}",
             "The exact probability sums binomial terms for every outcome from $38$ to $52$ inclusive."),
        step(4, "Evaluate the exact probability",
             f"P(38 \\leqslant X \\leqslant 52) = {fmt4(exact)}",
             f"Summing the terms gives $P(38 \\leqslant X \\leqslant 52) = {exact:.4f}$ to four significant figures."),
        step(5, "Find the mean and standard deviation",
             f"\\mu = 45, \\qquad \\sigma = \\sqrt{{45 \\times 0.55}} = \\sqrt{{24.75}} \\approx {sig:.3f}",
             "These define the approximating normal distribution."),
        step(6, "Apply the continuity correction",
             "P(38 \\leqslant X \\leqslant 52) \\approx P(37.5 < Y < 52.5)",
             "The inclusive interval maps to the continuous range between $37.5$ and $52.5$."),
        step(7, "Standardise both boundaries",
             f"z_1 = \\dfrac{{37.5 - 45}}{{{sig:.3f}}} \\approx {z1:.3f}, \\qquad z_2 = \\dfrac{{52.5 - 45}}{{{sig:.3f}}} \\approx {z2:.3f}",
             "Both boundaries are about $1.51$ standard deviations from the mean, giving a symmetric interval."),
        step(8, "Evaluate the approximating probability",
             f"P(37.5 < Y < 52.5) = \\Phi({z2:.3f}) - \\Phi({z1:.3f}) = {fmt4(approx)}",
             f"The normal approximation gives ${approx:.4f}$ to four significant figures."),
        step(9, "Compute the absolute error",
             f"|\\text{{exact}} - \\text{{approx}}| = |{fmt4(exact)} - {fmt4(approx)}| = {fmt4(err)}",
             f"The absolute error is only about ${err:.4f}$, showing excellent agreement."),
        step(10, "Comment on the accuracy",
             f"\\text{{Exact}} = {fmt4(exact)}, \\quad \\text{{Approximate}} = {fmt4(approx)}",
             "The two values agree to three decimal places. With $np = 45$ and a symmetric interval around the mean, the normal approximation is very accurate."),
    ],
    f"Exact: $P(38 \\leqslant X \\leqslant 52) = {fmt4(exact)}$; approximate: ${fmt4(approx)}$; absolute error $\\approx {fmt4(err)}$.",
))

# ── q035 Intermediate: min n for B(n,0.35) = 15 ─────────────────────────────
p_val = 0.35
n_min = min_n(p_val)
questions.append(make_q(
    "q035", "Intermediate", 5, "integer",
    ["minimum sample size", "validity conditions", "np rule"],
    "On each of $n$ independent trials, an event occurs with probability $p = 0.35$. Let $X \\sim B(n, 0.35)$. Find the smallest integer $n$ for which a normal approximation to $X$ would be considered appropriate.",
    [
        step(1, "State the validity conditions",
             "np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5",
             "Both expected successes and failures must be at least $5$."),
        step(2, "Substitute $p = 0.35$ into the success condition",
             "n \\times 0.35 \\geqslant 5",
             "This links the required sample size to the success probability."),
        step(3, "Solve the success inequality", "n \\geqslant \\dfrac{5}{0.35} = 14.28\\ldots",
             "Dividing gives $n \\geqslant 14.28\\ldots$, so the smallest integer is at least $15$."),
        step(4, "Round up to the smallest integer", "n \\geqslant 15",
             "The smallest whole number at least $14.28\\ldots$ is $15$."),
        step(5, "Check the failure condition",
             "n(1-p) = n \\times 0.65 \\geqslant 5 \\Rightarrow n \\geqslant 7.69\\ldots",
             "This only requires $n \\geqslant 8$, which is weaker than the success condition."),
        step(6, "Identify the binding constraint", "n \\geqslant 15 \\text{ (from } np \\geqslant 5\\text{)}",
             "The success condition is the limiting one when $p = 0.35$."),
        step(7, "Verify at $n = 15$",
             f"np = 15 \\times 0.35 = {15*p_val:.2f} \\geqslant 5, \\qquad n(1-p) = 15 \\times 0.65 = {15*(1-p_val):.2f} \\geqslant 5",
             "At $n = 15$ both conditions are satisfied."),
        step(8, "Verify that $n = 14$ fails",
             "np = 14 \\times 0.35 = 4.9 < 5",
             "Reducing $n$ by $1$ drops the expected successes below $5$."),
        step(9, "State the minimum sample size", f"n_{{\\min}} = {n_min}",
             f"The smallest integer $n$ is ${n_min}$."),
    ],
    f"$n_{{\\min}} = {n_min}$.",
))


def verify_all():
    """Verify all planned probabilities match expected values."""
    checks = [
        ("q019", approx_leq(200, 0.05, 8)[0], 0.3132),
        ("q020", approx_geq(40, 0.55, 21)[0], 0.6832),
        ("q021", approx_leq(50, 0.8, 35)[0], 0.0558),
        ("q023", approx_between(60, 0.75, 40, 50)[0], 0.8989),
        ("q025a", exact_leq(30, 0.3, 7), 0.2814),
        ("q025b", approx_leq(30, 0.3, 7)[0], 0.2750),
        ("q026", approx_geq(100, 0.4, 48)[0], 0.0629),
        ("q027", approx_between(80, 0.25, 15, 25)[0], 0.8444),
        ("q028", min_n(0.08), 63),
        ("q029", approx_leq(150, 0.12, 14)[0], 0.1896),
        ("q030", approx_geq(200, 0.35, 80)[0], 0.0795),
        ("q031", approx_between(120, 0.08, 6, 14)[0], 0.8666),
        ("q033", approx_geq(250, 0.02, 8)[0], 0.1294),
        ("q034a", exact_between(100, 0.45, 38, 52), 0.8688),
        ("q034b", approx_between(100, 0.45, 38, 52)[0], 0.8683),
        ("q035", min_n(0.35), 15),
    ]
    for name, got, expected in checks:
        if isinstance(expected, int):
            assert got == expected, f"{name}: got {got}, expected {expected}"
        else:
            assert abs(got - expected) < 0.00015, f"{name}: got {got:.6f}, expected {expected}"
    print("All probability checks passed.")


def main():
    verify_all()
    assert len(questions) == 17, f"Expected 17 questions, got {len(questions)}"

    # Validate step counts
    for q in questions:
        n_steps = len(q["workedSolution"]["steps"])
        diff = q["difficulty"]
        qid = q["id"].split(".")[-1]
        if diff == "Easy":
            assert 6 <= n_steps <= 9, f"{qid}: Easy needs 6-9 steps, got {n_steps}"
        else:
            assert 9 <= n_steps <= 13, f"{qid}: Intermediate needs 9-13 steps, got {n_steps}"

    parts = [json.dumps(q, indent=2, ensure_ascii=False) for q in questions]
    content = ",\n".join(parts)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(content)

    line_count = content.count("\n") + 1
    print(f"Wrote {len(questions)} questions to {OUT}")
    print(f"Line count: {line_count}")
    ids = [q["id"].split(".")[-1] for q in questions]
    print(f"Question IDs: {', '.join(ids)}")


if __name__ == "__main__":
    main()
