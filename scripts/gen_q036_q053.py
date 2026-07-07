#!/usr/bin/env python3
"""Generate normal-approximation q036-q053 TypeScript batch."""
import json
import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-stats/normal-approximation-q036-q053.ts"

def phi(x):
    return 0.5 * (1 + math.erf(x / math.sqrt(2)))

def invphi(p):
    lo, hi = -10, 10
    for _ in range(100):
        mid = (lo + hi) / 2
        if phi(mid) < p:
            lo = mid
        else:
            hi = mid
    return (lo + hi) / 2

def sig4(x):
    return f"{x:.4g}"

def sig3(x):
    return f"{x:.3g}"

def cc(n, p, kind, k1, k2=None):
    mu = n * p
    sig = math.sqrt(n * p * (1 - p))
    if kind == "le":
        z = (k1 + 0.5 - mu) / sig
        return phi(z), mu, sig, z
    if kind == "ge":
        z = (k1 - 0.5 - mu) / sig
        return 1 - phi(z), mu, sig, z
    if kind == "between":
        z1 = (k1 - 0.5 - mu) / sig
        z2 = (k2 + 0.5 - mu) / sig
        return phi(z2) - phi(z1), mu, sig, (z1, z2)
    if kind == "eq":
        z1 = (k1 - 0.5 - mu) / sig
        z2 = (k1 + 0.5 - mu) / sig
        return phi(z2) - phi(z1), mu, sig, (z1, z2)
    raise ValueError(kind)

BASE = {
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Normal approximation to binomial",
    "subtopicId": "al.y2.stats.normal-approximation",
    "questionDiagram": None,
}

def step(n, desc, work, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": work,
        "explanation": expl,
        "diagram": None,
    }

def make_q(qid, difficulty, marks, answer_type, tags, question_text, steps, final_answer):
    return {
        **BASE,
        "id": f"al.y2.stats.normal-approximation.{qid}",
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": question_text,
        "workedSolution": {"steps": steps, "finalAnswer": final_answer},
    }

questions = []

# q036
pr, mu, sig, z = cc(80, 0.4, "le", 25)
questions.append(make_q(
    "q036", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "cumulative probability"],
    r"In a survey, $80$ people are asked a yes/no question and each person independently answers yes with probability $0.4$. Let $X$ be the number of yes responses. Use a normal approximation, with a continuity correction, to estimate $P(X \leqslant 25)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(80,\ 0.4)", "Each person is an independent trial with fixed success probability $0.4$, and we count successes. That is the standard binomial setup."),
        step(2, "Check whether a normal approximation is appropriate", r"np = 80 \times 0.4 = 32, \qquad n(1-p) = 80 \times 0.6 = 48", "Both $np$ and $n(1-p)$ exceed $5$, so the distribution is sufficiently symmetric and spread out for a normal approximation."),
        step(3, "Find the mean and standard deviation", r"\mu = np = 32, \qquad \sigma = \sqrt{np(1-p)} = \sqrt{19.2} \approx 4.382", "The binomial mean is $np$ and the variance is $np(1-p)$. The square root of the variance is the standard deviation."),
        step(4, "Write the approximating normal distribution", r"X \approx Y \sim N(32,\ 19.2)", "We replace the discrete binomial by a continuous normal with the same mean and variance."),
        step(5, "Apply the continuity correction for 'at most'", r"P(X \leqslant 25) \approx P(Y < 25.5)", "The event $X \leqslant 25$ includes the integer $25$. On the continuous scale, values strictly below $25.5$ represent those integers."),
        step(6, "Standardise the corrected boundary", rf"z = \dfrac{{25.5 - 32}}{{4.382}} \approx {sig4(z)}", "The $z$-score counts how many standard deviations the boundary lies from the mean. A negative value confirms we are in the lower tail."),
        step(7, "Rewrite using the standard normal", rf"P(Y < 25.5) = P(Z < {sig4(z)}) = \Phi({sig4(z)})", "Standardising turns the problem into a cumulative area under the standard normal curve."),
        step(8, "Evaluate the standard normal probability", rf"\Phi({sig4(z)}) = {sig4(pr)}", "A calculator or tables give the lower-tail area to four significant figures."),
        step(9, "Interpret in context", rf"P(X \leqslant 25) \approx {sig4(pr)}", "At most $25$ yes responses is quite unlikely because $25$ sits noticeably below the expected value of $32$."),
        step(10, "State the final answer", rf"P(X \leqslant 25) \approx {sig4(pr)}", "The normal approximation with continuity correction gives the estimated probability."),
    ],
    rf"$P(X \leqslant 25) \approx {sig4(pr)}$.",
))

# q037
pr, mu, sig, z = cc(150, 0.35, "ge", 60)
questions.append(make_q(
    "q037", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "upper-tail probability"],
    r"A quality inspector checks $150$ items from a production line. Each item independently passes inspection with probability $0.35$. Let $X$ be the number that pass. Use a normal approximation, with a continuity correction, to estimate $P(X \geqslant 60)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(150,\ 0.35)", "There are $150$ independent trials, each with success probability $0.35$, and $X$ counts the number of passes."),
        step(2, "Verify the approximation conditions", r"np = 150 \times 0.35 = 52.5, \qquad n(1-p) = 150 \times 0.65 = 97.5", "Both $np$ and $n(1-p)$ are well above $5$, so the binomial distribution is close enough to normal for the approximation to work well."),
        step(3, "Calculate the mean and standard deviation", r"\mu = 52.5, \qquad \sigma = \sqrt{52.5 \times 0.65} = \sqrt{34.125} \approx 5.842", "The mean is $np$ and the standard deviation is the square root of $np(1-p)$."),
        step(4, "State the approximating normal", r"X \approx Y \sim N(52.5,\ 34.125)", "The continuous normal shares the same centre and spread as the binomial."),
        step(5, "Apply the continuity correction for 'at least'", r"P(X \geqslant 60) \approx P(Y > 59.5)", "The event $X \geqslant 60$ includes the integer $60$. On the continuous scale, values strictly above $59.5$ represent those integers."),
        step(6, "Standardise the corrected boundary", rf"z = \dfrac{{59.5 - 52.5}}{{5.842}} \approx {sig4(z)}", "The boundary $59.5$ lies above the mean, giving a positive $z$-score in the upper tail."),
        step(7, "Convert to a lower-tail calculation", rf"P(Y > 59.5) = 1 - P(Z < {sig4(z)}) = 1 - \Phi({sig4(z)})", "Calculators and tables usually give lower-tail areas, so we subtract from $1$ to obtain the upper-tail probability."),
        step(8, "Evaluate the probability", rf"1 - \Phi({sig4(z)}) = {sig4(pr)}", "Subtracting the lower-tail area from $1$ gives the required upper-tail probability to four significant figures."),
        step(9, "Interpret the result", rf"P(X \geqslant 60) \approx {sig4(pr)}", "About $11.5\%$ of samples would have at least $60$ passes. This is plausible because $60$ is only slightly above the expected $52.5$."),
        step(10, "State the final answer", rf"P(X \geqslant 60) \approx {sig4(pr)}", "The estimated probability is obtained from the normal approximation with continuity correction."),
    ],
    rf"$P(X \geqslant 60) \approx {sig4(pr)}$.",
))

# q038
n, p = 100, 0.25
mu, sig = n * p, math.sqrt(n * p * (1 - p))
z_crit = invphi(0.90)
k_star = 32
pr32 = cc(n, p, "ge", 32)[0]
pr31 = cc(n, p, "ge", 31)[0]
questions.append(make_q(
    "q038", "Intermediate", 6, "value",
    ["normal approximation", "continuity correction", "finding k", "inverse normal"],
    r"A multiple-choice test has $100$ questions. A student guesses every answer, so each question is correct independently with probability $0.25$. Let $X$ be the number of correct answers. Using a normal approximation with a continuity correction, find the smallest integer $k$ such that $P(X \geqslant k) \leqslant 0.10$.",
    [
        step(1, "Identify the binomial model", r"X \sim B(100,\ 0.25)", "Each question is an independent Bernoulli trial with success probability $0.25$, so the total number correct is binomial."),
        step(2, "Check the validity conditions", r"np = 25, \qquad n(1-p) = 75", "Both values exceed $5$, so a normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 25, \qquad \sigma = \sqrt{25 \times 0.75} = \sqrt{18.75} \approx 4.330", "These parameters define the approximating normal distribution."),
        step(4, "Translate the inequality using a continuity correction", r"P(X \geqslant k) \approx P(Y > k - 0.5) \leqslant 0.10", "For the discrete event $X \geqslant k$, the continuous counterpart uses the boundary $k - 0.5$."),
        step(5, "Rewrite as a lower-tail statement", r"P(Y \leqslant k - 0.5) \geqslant 0.90", "The complement of an upper-tail area of $0.10$ is a lower-tail area of $0.90$."),
        step(6, "Set up the standardised equation", rf"\dfrac{{k - 0.5 - 25}}{{4.330}} = z, \qquad \Phi(z) = 0.90", "We need the $z$-value with $90\%$ of the standard normal area below it."),
        step(7, "Find the critical z-value", rf"z = \Phi^{{-1}}(0.90) \approx {sig4(z_crit)}", "The inverse normal gives the standardised value with lower-tail probability $0.90$."),
        step(8, "Solve for the continuous boundary", rf"k - 0.5 = 25 + {sig4(z_crit)} \times 4.330 \approx 30.55, \qquad k \approx 31.05", "Rearranging the standardisation formula gives the continuous boundary corresponding to the $90$th percentile."),
        step(9, "Choose the smallest integer k", rf"P(X \geqslant 31) \approx {sig4(pr31)} > 0.10, \qquad P(X \geqslant 32) \approx {sig4(pr32)} \leqslant 0.10", "We test consecutive integers: $k = 31$ gives an upper-tail probability just above $0.10$, while $k = 32$ gives one at or below $0.10$."),
        step(10, "Verify k = 32", rf"P(X \geqslant 32) \approx P(Y > 31.5), \quad z = \dfrac{{31.5 - 25}}{{4.330}} \approx 1.501, \quad 1 - \Phi(1.501) \approx {sig4(pr32)}", "Direct calculation confirms that $k = 32$ satisfies the inequality."),
        step(11, "State the final answer", r"k = 32", "The smallest integer $k$ with estimated upper-tail probability at most $0.10$ is $32$."),
    ],
    r"$k = 32$.",
))

# q039 Hard multi-part
pr18, mu, sig, z18 = cc(200, 0.12, "le", 18)
pr_bet, _, _, (z1, z2) = cc(200, 0.12, "between", 20, 30)
questions.append(make_q(
    "q039", "Hard", 8, "value",
    ["normal approximation", "validity conditions", "continuity correction", "multi-part"],
    r"A factory produces items of which $12\%$ are defective. A random sample of $200$ items is taken and $X$ denotes the number of defective items. (a) State, with a reason, whether a normal approximation to $X$ is appropriate. (b) Use a normal approximation, with a continuity correction, to estimate $P(X \leqslant 18)$. (c) Hence estimate $P(20 \leqslant X \leqslant 30)$. Give all probabilities to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(200,\ 0.12)", "Each item in the sample is an independent trial with defect probability $0.12$."),
        step(2, "Check validity for part (a)", r"np = 200 \times 0.12 = 24, \qquad n(1-p) = 200 \times 0.88 = 176", "Both $np$ and $n(1-p)$ exceed $5$, which is the standard requirement for using a normal approximation."),
        step(3, "Answer part (a)", r"\text{Yes: } np = 24 \geqslant 5 \text{ and } n(1-p) = 176 \geqslant 5", "Because both expected counts of successes and failures are at least $5$, the binomial is sufficiently symmetric and the normal model is appropriate."),
        step(4, "Find the mean and standard deviation for parts (b) and (c)", r"\mu = 24, \qquad \sigma = \sqrt{24 \times 0.88} = \sqrt{21.12} \approx 4.596", "These parameters define the approximating normal $Y \sim N(24, 21.12)$."),
        step(5, "Apply continuity correction for part (b)", r"P(X \leqslant 18) \approx P(Y < 18.5)", "The discrete event 'at most $18$' uses the upper boundary $18.5$ on the continuous scale."),
        step(6, "Standardise for part (b)", rf"z = \dfrac{{18.5 - 24}}{{4.596}} \approx {sig4(z18)}", "The boundary lies below the mean, giving a negative $z$-score."),
        step(7, "Evaluate part (b)", rf"P(X \leqslant 18) \approx \Phi({sig4(z18)}) = {sig4(pr18)}", "The lower-tail area gives the estimated probability for part (b)."),
        step(8, "Set up part (c) with continuity correction", r"P(20 \leqslant X \leqslant 30) \approx P(19.5 < Y < 30.5)", "A discrete inclusive interval extends half a unit beyond each endpoint on the continuous scale."),
        step(9, "Standardise both boundaries", rf"z_1 = \dfrac{{19.5 - 24}}{{4.596}} \approx {sig4(z1)}, \qquad z_2 = \dfrac{{30.5 - 24}}{{4.596}} \approx {sig4(z2)}", "Each endpoint is converted to a $z$-score relative to the mean $24$."),
        step(10, "Evaluate part (c)", rf"P(19.5 < Y < 30.5) = \Phi({sig4(z2)}) - \Phi({sig4(z1)}) = {sig4(pr_bet)}", "The probability of lying between two values equals the difference of two cumulative normal probabilities."),
        step(11, "Interpret part (c)", rf"P(20 \leqslant X \leqslant 30) \approx {sig4(pr_bet)}", "About $75.8\%$ of samples would contain between $20$ and $30$ defectives, centred around the expected $24$."),
        step(12, "Summarise all parts", rf"\text{{(a) Appropriate. (b) }} P(X \leqslant 18) \approx {sig4(pr18)}. \text{{ (c) }} P(20 \leqslant X \leqslant 30) \approx {sig4(pr_bet)}", "All three parts use the same normal model with appropriate continuity corrections."),
        step(13, "Check part (b) is plausible", rf"P(X \leqslant 18) \approx {sig4(pr18)}", "About $11.6\%$ is reasonable because $18$ is noticeably below the expected $24$ defectives."),
        step(14, "Check part (c) covers the central region", rf"P(20 \leqslant X \leqslant 30) \approx {sig4(pr_bet)}", "A probability near $0.76$ is expected because the interval spans the mean and captures most typical sample counts."),
        step(15, "State the final answers", rf"\text{{(a) Yes. (b) }} {sig4(pr18)}. \text{{ (c) }} {sig4(pr_bet)}", "All probabilities are obtained from the same normal approximation with continuity corrections."),
    ],
    rf"(a) A normal approximation is appropriate because $np = 24 \geqslant 5$ and $n(1-p) = 176 \geqslant 5$. (b) $P(X \leqslant 18) \approx {sig4(pr18)}$. (c) $P(20 \leqslant X \leqslant 30) \approx {sig4(pr_bet)}$.",
))

# q040 find p
pr, mu, sig, z = cc(100, 0.33, "le", 25)
questions.append(make_q(
    "q040", "Intermediate", 6, "value",
    ["normal approximation", "continuity correction", "finding p"],
    r"In $100$ independent trials the number of successes $X$ is modelled by $B(100, p)$. Using a normal approximation with a continuity correction, it is found that $P(X \leqslant 25) \approx 0.0554$. Find the value of $p$, giving your answer to $2$ decimal places.",
    [
        step(1, "State the model and the given information", r"X \sim B(100, p), \qquad P(X \leqslant 25) \approx 0.0554", "We have a binomial with unknown $p$ and a probability statement linking $p$ to a tail area."),
        step(2, "Write the normal approximation with continuity correction", r"P(X \leqslant 25) \approx P(Y < 25.5) = \Phi\!\left(\dfrac{25.5 - 100p}{\sqrt{100p(1-p)}}\right)", "The approximating normal has mean $100p$ and standard deviation $\sqrt{100p(1-p)}$. The continuity correction uses $25.5$."),
        step(3, "Equate to the given probability", r"\Phi\!\left(\dfrac{25.5 - 100p}{\sqrt{100p(1-p)}}\right) = 0.0554", "The cumulative probability is specified, so we can find the corresponding $z$-score."),
        step(4, "Find the standardised value", r"z = \Phi^{-1}(0.0554) \approx -1.59", "A lower-tail probability of about $5.5\%$ corresponds to a $z$-score roughly $1.6$ standard deviations below the mean."),
        step(5, "Set up the equation in p", r"\dfrac{25.5 - 100p}{\sqrt{100p(1-p)}} = -1.59", "The standardised boundary must equal this critical $z$-value."),
        step(6, "Test a value near the expected p", r"p = 0.33 \Rightarrow \mu = 33, \quad \sigma = \sqrt{21.78} \approx 4.667", "If $p = 0.33$, the mean is $33$ and the standard deviation is about $4.67$."),
        step(7, "Verify p = 0.33", rf"z = \dfrac{{25.5 - 33}}{{4.667}} \approx {sig4((25.5-33)/4.667)}, \qquad \Phi(z) \approx {sig4(pr)}", "Substituting $p = 0.33$ reproduces the given probability $0.0554$ to four significant figures."),
        step(8, "Check validity for p = 0.33", r"np = 33, \qquad n(1-p) = 67", "Both exceed $5$, confirming the normal approximation was appropriate for this $p$."),
        step(9, "Consider nearby values", r"p = 0.32 \Rightarrow P(X \leqslant 25) \approx 0.0817; \quad p = 0.34 \Rightarrow P(X \leqslant 25) \approx 0.0364", "Nearby values give noticeably different tail probabilities, confirming $p = 0.33$ is the correct solution."),
        step(10, "State the answer", r"p = 0.33", "The success probability that produces the stated tail area is $0.33$."),
    ],
    r"$p = 0.33$.",
))

# q041 find n
pr105 = cc(105, 0.1, "ge", 15)[0]
questions.append(make_q(
    "q041", "Hard", 7, "value",
    ["normal approximation", "continuity correction", "finding n", "inverse normal"],
    r"A rare condition affects $10\%$ of a population. A researcher samples $n$ people and lets $X$ be the number with the condition. Using a normal approximation with a continuity correction, find the smallest integer $n$ such that the approximation is valid and $P(X \geqslant 15) \approx 0.10$. Give $n$ as your answer.",
    [
        step(1, "Identify the binomial model", r"X \sim B(n,\ 0.1)", "Each person is an independent trial with success probability $0.1$."),
        step(2, "State the validity requirement", r"np \geqslant 5 \text{ and } n(1-p) \geqslant 5 \Rightarrow 0.1n \geqslant 5 \Rightarrow n \geqslant 50", "For a normal approximation we need at least $5$ expected successes and failures, giving $n \geqslant 50$."),
        step(3, "Write the approximated probability", r"P(X \geqslant 15) \approx P(Y > 14.5) = 1 - \Phi\!\left(\dfrac{14.5 - 0.1n}{\sqrt{0.09n}}\right)", "The mean is $0.1n$ and the standard deviation is $\sqrt{0.09n} = 0.3\sqrt{n}$. The continuity correction uses $14.5$."),
        step(4, "Set the probability equal to 0.10", r"1 - \Phi\!\left(\dfrac{14.5 - 0.1n}{0.3\sqrt{n}}\right) = 0.10", "We want the upper-tail area to be approximately $0.10$."),
        step(5, "Find the critical z-value", r"\Phi\!\left(\dfrac{14.5 - 0.1n}{0.3\sqrt{n}}\right) = 0.90, \qquad z = \Phi^{-1}(0.90) \approx 1.282", r"An upper-tail of $0.10$ means a lower-tail of $0.90$, corresponding to $z \approx 1.282$."),
        step(6, "Set up the equation for n", r"\dfrac{14.5 - 0.1n}{0.3\sqrt{n}} = 1.282", "The standardised boundary must equal the critical $z$-value."),
        step(7, "Test n = 104", rf"n = 104 \Rightarrow \mu = 10.4, \quad z = \dfrac{{14.5 - 10.4}}{{0.3\sqrt{{104}}}} \approx 1.34, \quad P(X \geqslant 15) \approx 0.090", "For $n = 104$ the estimated upper-tail probability is just below $0.10$."),
        step(8, "Test n = 105", rf"n = 105 \Rightarrow \mu = 10.5, \quad z = \dfrac{{14.5 - 10.5}}{{0.3\sqrt{{105}}}} \approx 1.30, \quad P(X \geqslant 15) \approx {sig4(pr105)}", "For $n = 105$ the estimated probability is closest to $0.10$."),
        step(9, "Test n = 106", r"n = 106 \Rightarrow P(X \geqslant 15) \approx 0.103", "For $n = 106$ the probability rises above $0.10$, so $n = 105$ is the best match."),
        step(10, "Confirm validity at n = 105", r"np = 10.5, \qquad n(1-p) = 94.5", "Both exceed $5$, so the normal approximation is valid at $n = 105$."),
        step(11, "Check n = 104 vs n = 105", r"|P(X \geqslant 15) - 0.10| \text{ is smallest at } n = 105", "Comparing $n = 104$ and $n = 105$, the value $105$ gives an upper-tail probability nearest to $0.10$."),
        step(12, "State the answer", r"n = 105", "The smallest integer $n$ satisfying both conditions is $105$."),
        step(13, "Verify n(1-p) at n = 105", r"n(1-p) = 94.5 \geqslant 5", "The expected number of people without the condition is also well above the threshold."),
        step(14, "Confirm n = 104 is too small for the target probability", r"n = 104 \Rightarrow P(X \geqslant 15) \approx 0.090 < 0.10", "Although $n = 104$ gives a valid approximation, its upper-tail probability is further from $0.10$ than at $n = 105$."),
    ],
    r"$n = 105$.",
))

# q042 two-tail
pr_low, _, _, zl = cc(120, 0.5, "le", 45)
pr_up, _, _, zu = cc(120, 0.5, "ge", 75)
pr_tot = pr_low + pr_up
questions.append(make_q(
    "q042", "Intermediate", 6, "value",
    ["normal approximation", "continuity correction", "two-tail probability"],
    r"A fair coin is tossed $120$ times and $X$ is the number of heads. Use a normal approximation, with a continuity correction, to estimate the probability of obtaining at most $45$ heads or at least $75$ heads. Give your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(120,\ 0.5)", "Each toss is independent with success probability $0.5$, so the number of heads is binomial."),
        step(2, "Check validity", r"np = 60, \qquad n(1-p) = 60", "Both expected counts equal $60$, well above $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 60, \qquad \sigma = \sqrt{120 \times 0.25} = \sqrt{30} \approx 5.477", "With $p = 0.5$ the distribution is symmetric about $60$."),
        step(4, "Split into two disjoint events", r"P(X \leqslant 45 \text{ or } X \geqslant 75) = P(X \leqslant 45) + P(X \geqslant 75)", "The events 'at most $45$' and 'at least $75$' cannot both occur, so their probabilities add."),
        step(5, "Apply continuity corrections", r"P(X \leqslant 45) \approx P(Y < 45.5), \qquad P(X \geqslant 75) \approx P(Y > 74.5)", "Each discrete tail event is converted to a continuous boundary half a unit beyond the endpoint."),
        step(6, "Standardise the lower tail", rf"z_L = \dfrac{{45.5 - 60}}{{5.477}} \approx {sig4(zl)}", "The lower boundary lies well below the mean."),
        step(7, "Standardise the upper tail", rf"z_U = \dfrac{{74.5 - 60}}{{5.477}} \approx {sig4(zu)}", "By symmetry, the upper boundary is the same distance above the mean."),
        step(8, "Evaluate the lower-tail probability", rf"P(X \leqslant 45) \approx \Phi({sig4(zl)}) = {sig4(pr_low)}", "This is a small lower-tail area."),
        step(9, "Evaluate the upper-tail probability", rf"P(X \geqslant 75) \approx 1 - \Phi({sig4(zu)}) = {sig4(pr_up)}", "By symmetry of the binomial with $p = 0.5$, the two tail probabilities are equal."),
        step(10, "Add the two tail probabilities", rf"P(X \leqslant 45 \text{{ or }} X \geqslant 75) \approx {sig4(pr_low)} + {sig4(pr_up)} = {sig4(pr_tot)}", "The combined two-tail probability is the sum of the two separate tail areas."),
        step(11, "Interpret the result", rf"P \approx {sig4(pr_tot)}", "Only about $0.81\%$ of samples fall in either extreme tail, which is expected for outcomes far from the mean of $60$."),
    ],
    rf"$P(X \leqslant 45 \text{{ or }} X \geqslant 75) \approx {sig4(pr_tot)}$.",
))

# q043 between
pr, mu, sig, (z1, z2) = cc(80, 0.45, "between", 30, 50)
questions.append(make_q(
    "q043", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "interval probability"],
    r"A basketball player attempts $80$ free throws. Each attempt is independent and succeeds with probability $0.45$. Let $X$ be the number of successes. Use a normal approximation, with a continuity correction, to estimate $P(30 \leqslant X \leqslant 50)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(80,\ 0.45)", "Each free throw is an independent trial with success probability $0.45$."),
        step(2, "Check validity", r"np = 36, \qquad n(1-p) = 44", "Both exceed $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 36, \qquad \sigma = \sqrt{36 \times 0.55} = \sqrt{19.8} \approx 4.452", "These define the approximating normal distribution."),
        step(4, "Apply the continuity correction for an inclusive interval", r"P(30 \leqslant X \leqslant 50) \approx P(29.5 < Y < 50.5)", "Extend half a unit below the lower endpoint and half a unit above the upper endpoint."),
        step(5, "Standardise the lower boundary", rf"z_1 = \dfrac{{29.5 - 36}}{{4.452}} \approx {sig4(z1)}", "The lower boundary lies below the mean."),
        step(6, "Standardise the upper boundary", rf"z_2 = \dfrac{{50.5 - 36}}{{4.452}} \approx {sig4(z2)}", "The upper boundary lies above the mean."),
        step(7, "Write as a difference of cumulative probabilities", rf"P(29.5 < Y < 50.5) = \Phi({sig4(z2)}) - \Phi({sig4(z1)})", "The area between two points equals the cumulative probability at the upper end minus that at the lower end."),
        step(8, "Evaluate", rf"\Phi({sig4(z2)}) - \Phi({sig4(z1)}) = {sig4(pr)}", "Using a calculator gives the interval probability to four significant figures."),
        step(9, "Interpret", rf"P(30 \leqslant X \leqslant 50) \approx {sig4(pr)}", "About $92.7\%$ of the time the player scores between $30$ and $50$ successes, covering most outcomes near the expected $36$."),
        step(10, "State the final answer", rf"P(30 \leqslant X \leqslant 50) \approx {sig4(pr)}", "The normal approximation with continuity correction gives the estimated interval probability."),
    ],
    rf"$P(30 \leqslant X \leqslant 50) \approx {sig4(pr)}$.",
))

# q044 Hard justify + two-tail
pr_low, _, _, zl = cc(180, 0.22, "le", 25)
pr_up, _, _, zu = cc(180, 0.22, "ge", 55)
pr_tot = pr_low + pr_up
questions.append(make_q(
    "q044", "Hard", 7, "value",
    ["normal approximation", "validity conditions", "two-tail probability", "continuity correction"],
    r"In a large population, $22\%$ of individuals have a particular gene variant. A sample of $180$ people is taken and $X$ is the number with the variant. (a) Explain whether a normal approximation to $X$ is justified. (b) Use a normal approximation, with a continuity correction, to estimate the probability that $X$ is at most $25$ or at least $55$. Give your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(180,\ 0.22)", "Each person in the sample is an independent trial with success probability $0.22$."),
        step(2, "Calculate np and n(1-p) for part (a)", r"np = 180 \times 0.22 = 39.6, \qquad n(1-p) = 180 \times 0.78 = 140.4", "These expected counts determine whether the binomial is well approximated by a normal."),
        step(3, "Answer part (a)", r"\text{Yes: both } np = 39.6 \geqslant 5 \text{ and } n(1-p) = 140.4 \geqslant 5", "Both expected counts of successes and failures exceed $5$, so the distribution is sufficiently spread and symmetric for a normal model."),
        step(4, "Find the mean and standard deviation", r"\mu = 39.6, \qquad \sigma = \sqrt{39.6 \times 0.78} = \sqrt{30.888} \approx 5.558", "These parameters define $Y \sim N(39.6, 30.888)$."),
        step(5, "Split the two-tail event in part (b)", r"P(X \leqslant 25 \text{ or } X \geqslant 55) = P(X \leqslant 25) + P(X \geqslant 55)", "The two events are mutually exclusive, so their probabilities add."),
        step(6, "Apply continuity corrections", r"P(X \leqslant 25) \approx P(Y < 25.5), \qquad P(X \geqslant 55) \approx P(Y > 54.5)", "Each discrete tail is converted to a continuous boundary half a unit beyond the endpoint."),
        step(7, "Standardise the lower tail", rf"z_L = \dfrac{{25.5 - 39.6}}{{5.558}} \approx {sig4(zl)}", "The lower boundary is well below the mean."),
        step(8, "Standardise the upper tail", rf"z_U = \dfrac{{54.5 - 39.6}}{{5.558}} \approx {sig4(zu)}", "The upper boundary is well above the mean."),
        step(9, "Evaluate the lower-tail probability", rf"P(X \leqslant 25) \approx \Phi({sig4(zl)}) = {sig4(pr_low)}", "This is a small left-tail area."),
        step(10, "Evaluate the upper-tail probability", rf"P(X \geqslant 55) \approx 1 - \Phi({sig4(zu)}) = {sig4(pr_up)}", "Subtracting the lower-tail area from $1$ gives the right-tail probability."),
        step(11, "Add the tail probabilities", rf"P \approx {sig4(pr_low)} + {sig4(pr_up)} = {sig4(pr_tot)}", "The combined two-tail probability is the sum of both tail areas."),
        step(12, "Interpret part (b)", rf"P(X \leqslant 25 \text{{ or }} X \geqslant 55) \approx {sig4(pr_tot)}", "Only about $0.93\%$ of samples fall in either extreme tail, consistent with outcomes far from the expected $39.6$."),
        step(13, "Note the asymmetry of the tails", rf"P(X \leqslant 25) \approx {sig4(pr_low)}, \qquad P(X \geqslant 55) \approx {sig4(pr_up)}", "Because $p = 0.22 \neq 0.5$, the two tail probabilities are not equal, even though both boundaries are roughly the same distance from the mean."),
        step(14, "State the final answers", rf"\text{{(a) Justified. (b) }} {sig4(pr_tot)}", "The normal model is valid and the combined two-tail probability is about $0.0093$."),
    ],
    rf"(a) A normal approximation is justified because $np = 39.6 \geqslant 5$ and $n(1-p) = 140.4 \geqslant 5$. (b) $P(X \leqslant 25 \text{{ or }} X \geqslant 55) \approx {sig4(pr_tot)}$.",
))

# q045 find k for P(X<=k) >= 0.90
pr41 = cc(90, 0.4, "le", 41)[0]
pr42 = cc(90, 0.4, "le", 42)[0]
questions.append(make_q(
    "q045", "Intermediate", 6, "value",
    ["normal approximation", "continuity correction", "finding k", "inverse normal"],
    r"A bag contains many coloured beads of which $40\%$ are red. $90$ beads are drawn at random with replacement and $X$ is the number of red beads. Using a normal approximation with a continuity correction, find the smallest integer $k$ such that $P(X \leqslant k) \geqslant 0.90$.",
    [
        step(1, "Identify the binomial model", r"X \sim B(90,\ 0.4)", "Each draw is an independent trial with success probability $0.4$."),
        step(2, "Check validity", r"np = 36, \qquad n(1-p) = 54", "Both exceed $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 36, \qquad \sigma = \sqrt{36 \times 0.6} = \sqrt{21.6} \approx 4.648", "These define the approximating normal."),
        step(4, "Apply continuity correction to the inequality", r"P(X \leqslant k) \approx P(Y < k + 0.5) \geqslant 0.90", "The discrete event 'at most $k$' uses the continuous upper boundary $k + 0.5$."),
        step(5, "Set up the standardised equation", r"\Phi\!\left(\dfrac{k + 0.5 - 36}{4.648}\right) = 0.90", "We need the boundary whose lower-tail area is $0.90$."),
        step(6, "Find the critical z-value", r"z = \Phi^{-1}(0.90) \approx 1.282", "The $90$th percentile of the standard normal is about $1.282$."),
        step(7, "Solve for the continuous boundary", r"k + 0.5 = 36 + 1.282 \times 4.648 \approx 41.96, \qquad k \approx 41.46", "Rearranging gives the continuous boundary corresponding to the $90$th percentile."),
        step(8, "Test k = 41", rf"P(X \leqslant 41) \approx \Phi\!\left(\dfrac{{41.5 - 36}}{{4.648}}\right) \approx {sig4(pr41)} < 0.90", "At $k = 41$ the cumulative probability is still below $0.90$."),
        step(9, "Test k = 42", rf"P(X \leqslant 42) \approx \Phi\!\left(\dfrac{{42.5 - 36}}{{4.648}}\right) \approx {sig4(pr42)} \geqslant 0.90", "At $k = 42$ the cumulative probability reaches at least $0.90$."),
        step(10, "State the smallest integer k", r"k = 42", "The smallest integer satisfying the inequality is $42$."),
    ],
    r"$k = 42$.",
))

# q046 find p
pr, mu, sig, z = cc(80, 0.20, "le", 10)
questions.append(make_q(
    "q046", "Hard", 7, "value",
    ["normal approximation", "continuity correction", "finding p", "inverse normal"],
    r"$80$ plants are treated with a new fertiliser. The number that show a positive response, $X$, is modelled by $B(80, p)$. Using a normal approximation with a continuity correction, it is estimated that $P(X \leqslant 10) \approx 0.0621$. Find $p$, giving your answer to $2$ decimal places.",
    [
        step(1, "State the model and given information", r"X \sim B(80, p), \qquad P(X \leqslant 10) \approx 0.0621", "We need to find the success probability $p$ from a tail probability."),
        step(2, "Write the normal approximation", r"P(X \leqslant 10) \approx \Phi\!\left(\dfrac{10.5 - 80p}{\sqrt{80p(1-p)}}\right)", "The mean is $80p$ and the standard deviation is $\sqrt{80p(1-p)}$. The continuity correction uses $10.5$."),
        step(3, "Equate to the given probability", r"\Phi\!\left(\dfrac{10.5 - 80p}{\sqrt{80p(1-p)}}\right) = 0.0621", "The cumulative probability fixes the standardised boundary."),
        step(4, "Find the z-value", r"z = \Phi^{-1}(0.0621) \approx -1.54", "A lower-tail probability of about $6.2\%$ corresponds to a $z$-score roughly $1.5$ standard deviations below the mean."),
        step(5, "Set up the equation", r"\dfrac{10.5 - 80p}{\sqrt{80p(1-p)}} = -1.54", "The standardised boundary must equal this critical value."),
        step(6, "Test p = 0.20", r"\mu = 16, \qquad \sigma = \sqrt{80 \times 0.2 \times 0.8} = \sqrt{12.8} \approx 3.578", "If $p = 0.2$, the expected number of positive responses is $16$."),
        step(7, "Verify p = 0.20", rf"z = \dfrac{{10.5 - 16}}{{3.578}} \approx {sig4(z)}, \qquad \Phi(z) \approx {sig4(pr)}", "Substituting $p = 0.20$ reproduces the given probability $0.0621$."),
        step(8, "Test nearby values", r"p = 0.19 \Rightarrow P(X \leqslant 10) \approx 0.042; \quad p = 0.21 \Rightarrow P(X \leqslant 10) \approx 0.084", "Nearby values give different tail probabilities, confirming $p = 0.20$."),
        step(9, "Check validity for p = 0.20", r"np = 16, \qquad n(1-p) = 64", "Both exceed $5$, so the normal approximation is valid."),
        step(10, "Explain the approach", r"\text{The tail probability determines how far below the mean the boundary } 10.5 \text{ lies}", "A small lower-tail probability means the boundary is in the left tail, which requires a relatively large mean compared to $10.5$."),
        step(11, "Confirm uniqueness", r"p = 0.20 \text{ is the only value in } [0,1] \text{ matching the given probability to } 2 \text{ d.p.}", "The tail probability increases monotonically with $p$ for this setup, so the solution is unique."),
        step(12, "State the answer", r"p = 0.20", "The success probability is $0.20$."),
        step(13, "Relate p to the context", r"\text{About } 20\% \text{ of plants respond positively}", "The value $p = 0.20$ means roughly one plant in five shows the positive response on average."),
    ],
    r"$p = 0.20$.",
))

# q047 model invalid
questions.append(make_q(
    "q047", "Intermediate", 4, "value",
    ["normal approximation", "validity conditions", "model choice"],
    r"A researcher records $X$, the number of successes in $30$ independent trials each with success probability $0.15$. A student proposes using a normal approximation to calculate probabilities for $X$. Explain whether this is appropriate, referring to the standard conditions.",
    [
        step(1, "Identify the binomial model", r"X \sim B(30,\ 0.15)", "The setup is binomial with $n = 30$ and $p = 0.15$."),
        step(2, "State the standard validity conditions", r"\text{A normal approximation requires } np \geqslant 5 \text{ and } n(1-p) \geqslant 5", "These conditions ensure enough expected successes and failures for the distribution to be roughly symmetric and bell-shaped."),
        step(3, "Calculate np", r"np = 30 \times 0.15 = 4.5", "The expected number of successes is only $4.5$."),
        step(4, "Calculate n(1-p)", r"n(1-p) = 30 \times 0.85 = 25.5", "The expected number of failures is $25.5$, which exceeds $5$."),
        step(5, "Compare np with the threshold", r"np = 4.5 < 5", "The expected count of successes falls below the minimum requirement of $5$."),
        step(6, "Explain the consequence", r"\text{With few expected successes, the binomial is noticeably right-skewed}", "When $np$ is small, the distribution piles up near zero and is not well approximated by a symmetric normal curve."),
        step(7, "State whether n(1-p) alone is sufficient", r"n(1-p) = 25.5 \geqslant 5 \text{ but this alone does not justify the approximation}", "Both conditions must be met; satisfying only one is not enough."),
        step(8, "Recommend the correct approach", r"\text{Use exact binomial probabilities or increase } n", "For small $np$, exact binomial calculations or a larger sample size should be used instead."),
        step(9, "Give the conclusion", r"\text{No — a normal approximation is not appropriate}", "Because $np = 4.5 < 5$, the standard conditions are not met and the normal model should not be used."),
    ],
    r"No. A normal approximation is not appropriate because $np = 30 \times 0.15 = 4.5 < 5$, even though $n(1-p) = 25.5 \geqslant 5$. Both $np$ and $n(1-p)$ must be at least $5$.",
))

# q048 find min n
questions.append(make_q(
    "q048", "Hard", 6, "value",
    ["normal approximation", "validity conditions", "finding n"],
    r"A survey question is answered 'yes' with probability $0.07$ on each of $n$ independent occasions. Let $X$ be the number of yes responses. Find the smallest integer $n$ for which a normal approximation to $X$ is valid. Show your reasoning.",
    [
        step(1, "Identify the binomial model", r"X \sim B(n,\ 0.07)", "Each response is an independent trial with success probability $0.07$."),
        step(2, "State both validity conditions", r"np \geqslant 5 \text{ and } n(1-p) \geqslant 5", "A normal approximation requires at least $5$ expected successes and at least $5$ expected failures."),
        step(3, "Apply the condition on np", r"0.07n \geqslant 5 \Rightarrow n \geqslant \dfrac{5}{0.07} \approx 71.43", "The expected number of yes responses must be at least $5$."),
        step(4, "Apply the condition on n(1-p)", r"0.93n \geqslant 5 \Rightarrow n \geqslant \dfrac{5}{0.93} \approx 5.38", "The expected number of no responses must also be at least $5$."),
        step(5, "Identify the binding constraint", r"n \geqslant 71.43 \text{ is stricter than } n \geqslant 5.38", "Because $p$ is small, the requirement on $np$ is much harder to satisfy than the requirement on $n(1-p)$."),
        step(6, "Round up to the smallest integer", r"n = 72", "Since $n$ must be a whole number, the smallest value satisfying $n \geqslant 71.43$ is $72$."),
        step(7, "Verify at n = 71", r"np = 71 \times 0.07 = 4.97 < 5", "At $n = 71$ the expected number of successes is still below $5$, so the approximation is not valid."),
        step(8, "Verify at n = 72", r"np = 72 \times 0.07 = 5.04 \geqslant 5, \qquad n(1-p) = 72 \times 0.93 = 66.96 \geqslant 5", "At $n = 72$ both conditions are satisfied for the first time."),
        step(9, "Explain why both checks matter", r"\text{Small } p \text{ makes the success condition the limiting factor}", "When $p$ is close to $0$, you need a large sample to accumulate enough expected successes."),
        step(10, "State the answer", r"n = 72", "The smallest integer $n$ for which the normal approximation is valid is $72$."),
        step(11, "Explain the practical meaning", r"\text{At least } 72 \text{ trials are needed before the binomial is bell-shaped enough}", "With only $7\%$ success rate, a fairly large sample is required to accumulate enough expected successes."),
        step(12, "Note what happens below the threshold", r"\text{At } n = 50, np = 3.5 \text{ — the distribution is still right-skewed}", "Even though $n = 50$ might seem large, the expected successes are still too few for a symmetric normal fit."),
        step(13, "Confirm no smaller n works", r"71 \text{ is the greatest integer failing the condition; } 72 \text{ is the first that passes}", "The answer $n = 72$ is the exact threshold where the validity condition on $np$ is first met."),
    ],
    r"$n = 72$.",
))

# q049 P(X=k)
pr, mu, sig, (z1, z2) = cc(60, 0.25, "eq", 15)
questions.append(make_q(
    "q049", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "single-value probability"],
    r"A student guesses on a $60$-question multiple-choice quiz where each question has probability $0.25$ of being answered correctly. Let $X$ be the number of correct answers. Use a normal approximation, with a continuity correction, to estimate $P(X = 15)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(60,\ 0.25)", "Each question is an independent trial with success probability $0.25$."),
        step(2, "Check validity", r"np = 15, \qquad n(1-p) = 45", "Both exceed $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 15, \qquad \sigma = \sqrt{15 \times 0.75} = \sqrt{11.25} \approx 3.354", "The mean equals $15$, the value we are interested in."),
        step(4, "Apply the continuity correction for a single value", r"P(X = 15) \approx P(14.5 < Y < 15.5)", "The single integer $15$ corresponds to the continuous interval from $14.5$ to $15.5$."),
        step(5, "Standardise both boundaries", rf"z_1 = \dfrac{{14.5 - 15}}{{3.354}} \approx {sig4(z1)}, \qquad z_2 = \dfrac{{15.5 - 15}}{{3.354}} \approx {sig4(z2)}", "Both boundaries are very close to the mean, giving small $z$-scores of opposite sign."),
        step(6, "Write as a difference of cumulative probabilities", rf"P(14.5 < Y < 15.5) = \Phi({sig4(z2)}) - \Phi({sig4(z1)})", "The probability of hitting a single value is approximated by a small strip of area under the normal curve."),
        step(7, "Evaluate the probability", rf"\Phi({sig4(z2)}) - \Phi({sig4(z1)}) = {sig4(pr)}", "The strip centred on the mean has area about $0.119$."),
        step(8, "Compare with intuition", r"P(X = 15) \approx 0.119", "This is the most likely individual outcome because $15$ equals the expected value."),
        step(9, "Note the approximation nature", r"\text{The exact binomial probability would differ slightly}", "The normal strip gives a good estimate but is not exact because the distribution is still discrete."),
        step(10, "State the final answer", rf"P(X = 15) \approx {sig4(pr)}", "The estimated probability of exactly $15$ correct answers is about $0.119$."),
    ],
    rf"$P(X = 15) \approx {sig4(pr)}$.",
))

# q050 Hard multi-part
pr20, mu, sig, z20 = cc(160, 0.18, "le", 20)
pr38 = cc(160, 0.18, "ge", 38)[0]
pr37 = cc(160, 0.18, "ge", 37)[0]
questions.append(make_q(
    "q050", "Hard", 9, "value",
    ["normal approximation", "validity conditions", "continuity correction", "finding k", "multi-part"],
    r"In a clinical study, each of $160$ participants has an independent $18\%$ chance of showing a particular side effect. Let $X$ be the number affected. (a) Verify that a normal approximation is appropriate. (b) Use a normal approximation, with a continuity correction, to estimate $P(X \leqslant 20)$. (c) Find the smallest integer $k$ such that $P(X \geqslant k) \leqslant 0.05$. Give probabilities to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(160,\ 0.18)", "Each participant is an independent trial with success probability $0.18$."),
        step(2, "Answer part (a)", r"np = 160 \times 0.18 = 28.8, \qquad n(1-p) = 160 \times 0.82 = 131.2", "Both expected counts exceed $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 28.8, \qquad \sigma = \sqrt{28.8 \times 0.82} = \sqrt{23.616} \approx 4.859", "These parameters are used in parts (b) and (c)."),
        step(4, "Apply continuity correction for part (b)", r"P(X \leqslant 20) \approx P(Y < 20.5)", "The event 'at most $20$' uses the upper boundary $20.5$."),
        step(5, "Standardise for part (b)", rf"z = \dfrac{{20.5 - 28.8}}{{4.859}} \approx {sig4(z20)}", "The boundary lies below the mean."),
        step(6, "Evaluate part (b)", rf"P(X \leqslant 20) \approx \Phi({sig4(z20)}) = {sig4(pr20)}", "The lower-tail area gives the answer to part (b)."),
        step(7, "Set up part (c)", r"P(X \geqslant k) \approx P(Y > k - 0.5) \leqslant 0.05", "The inequality requires an upper-tail area of at most $0.05$."),
        step(8, "Convert to a lower-tail statement", r"P(Y \leqslant k - 0.5) \geqslant 0.95", "An upper-tail of $0.05$ corresponds to a lower-tail of $0.95$."),
        step(9, "Find the critical z-value", r"z = \Phi^{-1}(0.95) \approx 1.645", "The $95$th percentile of the standard normal is about $1.645$."),
        step(10, "Solve for the continuous boundary", r"k - 0.5 = 28.8 + 1.645 \times 4.859 \approx 36.79, \qquad k \approx 37.29", "Rearranging the standardisation gives the continuous boundary."),
        step(11, "Test k = 37 and k = 38", rf"P(X \geqslant 37) \approx {sig4(pr37)} > 0.05, \qquad P(X \geqslant 38) \approx {sig4(pr38)} \leqslant 0.05", "At $k = 37$ the upper tail is still above $0.05$; at $k = 38$ it drops to at most $0.05$."),
        step(12, "Answer part (c)", r"k = 38", "The smallest integer $k$ satisfying the inequality is $38$."),
        step(13, "Summarise all parts", rf"\text{{(a) Valid. (b) }} P(X \leqslant 20) \approx {sig4(pr20)}. \text{{ (c) }} k = 38", "All three parts follow from the same normal model."),
        step(14, "Interpret part (b)", rf"P(X \leqslant 20) \approx {sig4(pr20)}", "Only about $4.4\%$ of studies would see at most $20$ side effects, which is plausible since $20$ is well below the expected $28.8$."),
        step(15, "Interpret part (c)", r"k = 38", "At least $38$ side effects would occur in only about $5\%$ of studies, marking an unusually high incidence."),
    ],
    rf"(a) Valid: $np = 28.8 \geqslant 5$ and $n(1-p) = 131.2 \geqslant 5$. (b) $P(X \leqslant 20) \approx {sig4(pr20)}$. (c) $k = 38$.",
))

# q051 between
pr, mu, sig, (z1, z2) = cc(110, 0.55, "between", 55, 70)
questions.append(make_q(
    "q051", "Intermediate", 5, "value",
    ["normal approximation", "continuity correction", "interval probability"],
    r"A machine produces items of which $55\%$ meet a quality standard. In a batch of $110$ items, $X$ is the number meeting the standard. Use a normal approximation, with a continuity correction, to estimate $P(55 \leqslant X \leqslant 70)$, giving your answer to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(110,\ 0.55)", "Each item is an independent trial with success probability $0.55$."),
        step(2, "Check validity", r"np = 60.5, \qquad n(1-p) = 49.5", "Both exceed $5$, so the normal approximation is appropriate."),
        step(3, "Find the mean and standard deviation", r"\mu = 60.5, \qquad \sigma = \sqrt{60.5 \times 0.45} = \sqrt{27.225} \approx 5.217", "These define the approximating normal."),
        step(4, "Apply the continuity correction", r"P(55 \leqslant X \leqslant 70) \approx P(54.5 < Y < 70.5)", "Extend half a unit beyond each endpoint of the inclusive discrete interval."),
        step(5, "Standardise the lower boundary", rf"z_1 = \dfrac{{54.5 - 60.5}}{{5.217}} \approx {sig4(z1)}", "The lower boundary lies below the mean."),
        step(6, "Standardise the upper boundary", rf"z_2 = \dfrac{{70.5 - 60.5}}{{5.217}} \approx {sig4(z2)}", "The upper boundary lies above the mean."),
        step(7, "Evaluate the interval probability", rf"P(54.5 < Y < 70.5) = \Phi({sig4(z2)}) - \Phi({sig4(z1)}) = {sig4(pr)}", "The area between the two boundaries is the difference of cumulative normal probabilities."),
        step(8, "Interpret the result", rf"P(55 \leqslant X \leqslant 70) \approx {sig4(pr)}", "About $84.7\%$ of batches have between $55$ and $70$ items meeting the standard."),
        step(9, "Check plausibility", r"0.847 \text{ is reasonable as the interval spans the mean}", "The interval is centred near the expected value of $60.5$, so a high probability is expected."),
        step(10, "State the final answer", rf"P(55 \leqslant X \leqslant 70) \approx {sig4(pr)}", "The normal approximation with continuity correction gives the estimated probability."),
    ],
    rf"$P(55 \leqslant X \leqslant 70) \approx {sig4(pr)}$.",
))

# q052 Hard find p from two tails
pr20 = cc(100, 0.30, "le", 20)[0]
pr40 = cc(100, 0.30, "ge", 40)[0]
questions.append(make_q(
    "q052", "Hard", 8, "value",
    ["normal approximation", "continuity correction", "finding p", "symmetric tails"],
    r"$100$ independent trials are conducted, each with unknown success probability $p$. Let $X$ be the number of successes. Using a normal approximation with a continuity correction, it is found that $P(X \leqslant 20) \approx 0.0191$ and $P(X \geqslant 40) \approx 0.0191$. Find $p$, giving your answer to $2$ decimal places.",
    [
        step(1, "State the model and given information", r"X \sim B(100, p), \qquad P(X \leqslant 20) \approx 0.0191, \qquad P(X \geqslant 40) \approx 0.0191", "Two tail probabilities of equal size suggest symmetry about the mean."),
        step(2, "Observe the symmetry", r"20 \text{ and } 40 \text{ are equidistant from } 30 = \dfrac{100p}{?}", "The boundaries $20$ and $40$ are symmetric about $30$, suggesting the mean $100p = 30$."),
        step(3, "Deduce the mean from symmetry", r"100p = 30 \Rightarrow p = 0.30", "Equal tail probabilities at equidistant points imply the mean lies midway between $20$ and $40$, at $30$."),
        step(4, "Write the lower-tail approximation", r"P(X \leqslant 20) \approx \Phi\!\left(\dfrac{20.5 - 100p}{\sqrt{100p(1-p)}}\right)", "The continuity correction uses $20.5$ for the event $X \leqslant 20$."),
        step(5, "Find the z-value for the lower tail", r"z = \Phi^{-1}(0.0191) \approx -2.08", "A lower-tail probability of about $1.9\%$ corresponds to a $z$-score roughly $2.1$ standard deviations below the mean."),
        step(6, "Set up the equation with p = 0.30", r"\dfrac{20.5 - 30}{\sigma} = -2.08, \qquad \sigma = \sqrt{100 \times 0.3 \times 0.7} = \sqrt{21} \approx 4.583", "With $p = 0.30$ the mean is $30$ and the standard deviation is about $4.58$."),
        step(7, "Verify the lower tail", rf"z = \dfrac{{20.5 - 30}}{{4.583}} \approx -2.07, \qquad \Phi(z) \approx {sig4(pr20)}", "This matches the given lower-tail probability $0.0191$."),
        step(8, "Verify the upper tail", r"P(X \geqslant 40) \approx P(Y > 39.5)", "By symmetry, the upper tail at $40$ should equal the lower tail at $20$."),
        step(9, "Calculate the upper tail for p = 0.30", rf"z = \dfrac{{39.5 - 30}}{{4.583}} \approx 2.07, \qquad 1 - \Phi(z) \approx {sig4(pr40)}", "The upper-tail probability also equals $0.0191$, confirming $p = 0.30$."),
        step(10, "Check validity", r"np = 30, \qquad n(1-p) = 70", "Both exceed $5$, so the normal approximation is appropriate."),
        step(11, "Explain why the two conditions are consistent", r"\text{Equal tail areas at symmetric points force } p = 0.30", "The symmetry of the two given probabilities uniquely determines the mean, and the tail area then fixes the spread."),
        step(12, "State the answer", r"p = 0.30", "The success probability is $0.30$."),
        step(13, "Verify using the z-score equation directly", rf"\dfrac{{20.5 - 30}}{{4.583}} \approx -2.07 \approx \Phi^{{-1}}(0.0191)", "The standardised boundary matches the inverse normal value, providing an independent check on $p = 0.30$."),
    ],
    r"$p = 0.30$.",
))

# q053 Hard comprehensive
pr45, mu, sig, z45 = cc(200, 0.28, "le", 45)
pr_bet, _, _, (zb1, zb2) = cc(200, 0.28, "between", 50, 70)
pr67 = cc(200, 0.28, "ge", 67)[0]
questions.append(make_q(
    "q053", "Hard", 9, "value",
    ["normal approximation", "validity conditions", "continuity correction", "multi-part", "finding k"],
    r"A gene variant is present in $28\%$ of a population. A sample of $200$ individuals is tested and $X$ is the number carrying the variant. (a) State, with justification, whether $X$ can be modelled by a normal distribution. (b) Estimate $P(50 \leqslant X \leqslant 70)$ using a normal approximation with a continuity correction. (c) Find the smallest integer $k$ such that $P(X \geqslant k) \leqslant 0.05$. Give all probabilities to $4$ significant figures.",
    [
        step(1, "Identify the binomial model", r"X \sim B(200,\ 0.28)", "Each individual is an independent trial with success probability $0.28$."),
        step(2, "Answer part (a)", r"np = 200 \times 0.28 = 56, \qquad n(1-p) = 200 \times 0.72 = 144", "Both expected counts exceed $5$, satisfying the standard conditions."),
        step(3, "Justify the normal model for part (a)", r"X \approx Y \sim N(56,\ 200 \times 0.28 \times 0.72)", "Because both $np$ and $n(1-p)$ are at least $5$, the binomial is well approximated by a normal with matching mean and variance."),
        step(4, "Find the standard deviation", r"\sigma = \sqrt{56 \times 0.72} = \sqrt{40.32} \approx 6.350", "This is used in parts (b) and (c)."),
        step(5, "Apply continuity correction for part (b)", r"P(50 \leqslant X \leqslant 70) \approx P(49.5 < Y < 70.5)", "Extend half a unit beyond each endpoint of the inclusive interval."),
        step(6, "Standardise both boundaries for part (b)", rf"z_1 = \dfrac{{49.5 - 56}}{{6.350}} \approx {sig4(zb1)}, \qquad z_2 = \dfrac{{70.5 - 56}}{{6.350}} \approx {sig4(zb2)}", "Both boundaries are converted to $z$-scores."),
        step(7, "Evaluate part (b)", rf"P(49.5 < Y < 70.5) = \Phi({sig4(zb2)}) - \Phi({sig4(zb1)}) = {sig4(pr_bet)}", "The interval probability is the difference of two cumulative areas."),
        step(8, "Set up part (c)", r"P(X \geqslant k) \approx P(Y > k - 0.5) \leqslant 0.05", "We need an upper-tail area of at most $0.05$."),
        step(9, "Find the critical z-value", r"z = \Phi^{-1}(0.95) \approx 1.645", "An upper-tail of $0.05$ means a lower-tail of $0.95$."),
        step(10, "Solve for the continuous boundary", r"k - 0.5 = 56 + 1.645 \times 6.350 \approx 66.45, \qquad k \approx 66.95", "Rearranging gives the continuous boundary near the $95$th percentile."),
        step(11, "Test consecutive integers", rf"P(X \geqslant 66) \approx 0.067 > 0.05, \qquad P(X \geqslant 67) \approx {sig4(pr67)} \leqslant 0.05", "At $k = 66$ the upper tail exceeds $0.05$; at $k = 67$ it falls to at most $0.05$."),
        step(12, "Answer part (c)", r"k = 67", "The smallest integer satisfying the inequality is $67$."),
        step(13, "Summarise all parts", rf"\text{{(a) Appropriate: }} np = 56, n(1-p) = 144. \text{{ (b) }} P(50 \leqslant X \leqslant 70) \approx {sig4(pr_bet)}. \text{{ (c) }} k = 67", "All three parts use the normal model $N(56, 40.32)$ with continuity corrections."),
        step(14, "Interpret part (b)", rf"P(50 \leqslant X \leqslant 70) \approx {sig4(pr_bet)}", "About $83.6\%$ of samples would contain between $50$ and $70$ carriers, covering the central bulk of the distribution."),
        step(15, "Interpret part (c)", r"k = 67", "Seeing at least $67$ carriers in a sample of $200$ would be unusual, occurring in only about $5\%$ of samples."),
        step(16, "State the final answers", rf"\text{{(a) Yes. (b) }} {sig4(pr_bet)}. \text{{ (c) }} k = 67", "All results follow from the normal approximation with appropriate continuity corrections."),
    ],
    rf"(a) A normal approximation is appropriate because $np = 56 \geqslant 5$ and $n(1-p) = 144 \geqslant 5$. (b) $P(50 \leqslant X \leqslant 70) \approx {sig4(pr_bet)}$. (c) $k = 67$.",
))

assert len(questions) == 18, len(questions)

write_questions_ts(
    OUT,
    questions,
    batch_label="Normal approximation to binomial q036–q053",
)
print(f"Wrote {len(questions)} questions to {OUT}")
