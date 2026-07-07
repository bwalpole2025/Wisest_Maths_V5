#!/usr/bin/env python3
"""Generate all 70 questions for Hypothesis testing (normal) subtopic."""
import json
from math import sqrt, ceil
from scipy.stats import norm

OUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-stats/hypothesis-testing-normal.ts"

Z_CRIT = {
    (0.10, "upper"): 1.2816,
    (0.10, "lower"): -1.2816,
    (0.10, "two"): 1.6449,
    (0.05, "upper"): 1.6449,
    (0.05, "lower"): -1.6449,
    (0.05, "two"): 1.96,
    (0.01, "upper"): 2.3263,
    (0.01, "lower"): -2.3263,
    (0.01, "two"): 2.5758,
}


def phi(z):
    return norm.cdf(z)


def fmt4(x):
    return f"{x:.4g}"


def step(n, desc, work, expl):
    return {"stepNumber": n, "description": desc, "workingLatex": work, "explanation": expl, "diagram": None}


def make_q(suffix, difficulty, marks, answer_type, tags, text, steps, final):
    return {
        "id": f"al.y2.stats.hypothesis-normal.{suffix}",
        "level": "A-Level Maths",
        "topic": "Year 2 Statistics",
        "subtopic": "Hypothesis testing (normal)",
        "subtopicId": "al.y2.stats.hypothesis-normal",
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": text,
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": final},
    }


def z_stat(xbar, mu0, sigma, n):
    return (xbar - mu0) / (sigma / sqrt(n))


def se(sigma, n):
    return sigma / sqrt(n)


def decision_label(reject):
    return "Reject" if reject else "Do not reject"


questions = []

# ── q001 Easy: hypotheses setup (higher mean) ────────────────────────────────
questions.append(make_q(
    "q001", "Easy", 3, "written",
    ["hypothesis-test", "null-hypothesis", "population-mean", "one-tailed"],
    "A coffee machine is set to dispense a mean of $200\\,\\text{ml}$ per cup. A barista believes the true mean volume is greater than this. A random sample of cups will be taken and the sample mean volume $\\bar{X}$ recorded. Let $\\mu$ be the population mean volume. Write down suitable null and alternative hypotheses for the barista's test.",
    [
        step(1, "Identify the parameter", "\\mu = \\text{population mean volume per cup (ml)}",
             "A test about the machine's average output is always a test about the unknown population mean $\\mu$."),
        step(2, "State the claimed value under no change", "\\mu_0 = 200",
             "The machine's current setting of $200\\,\\text{ml}$ is the value we assume true unless the data suggest otherwise."),
        step(3, "Write the null hypothesis", "H_0\\colon\\ \\mu = 200",
             "The null hypothesis keeps the manufacturer's setting; we begin by assuming the machine is correctly calibrated."),
        step(4, "Interpret the barista's suspicion", "\\text{Barista believes } \\mu > 200",
             "The barista suspects cups are being over-filled, so the true mean should exceed the set value."),
        step(5, "Write the alternative hypothesis", "H_1\\colon\\ \\mu > 200",
             "A one-tailed alternative on the right captures the belief that the mean volume has increased."),
        step(6, "State the completed pair", "H_0\\colon\\ \\mu = 200, \\qquad H_1\\colon\\ \\mu > 200",
             "These hypotheses set up a one-tailed test looking for evidence that the mean volume exceeds $200\\,\\text{ml}$."),
    ],
    "$H_0\\colon\\ \\mu = 200$, $H_1\\colon\\ \\mu > 200$ (one-tailed upper test).",
))

# ── q002 Easy: lower-tail hypotheses ───────────────────────────────────────
questions.append(make_q(
    "q002", "Easy", 3, "written",
    ["hypothesis-test", "null-hypothesis", "population-mean", "one-tailed"],
    "A battery manufacturer claims that the mean lifetime of its AA batteries is $48$ hours. A consumer group suspects the true mean lifetime is less than $48$ hours. State suitable null and alternative hypotheses, and say whether the test is one-tailed or two-tailed.",
    [
        step(1, "Define the parameter", "\\mu = \\text{mean lifetime of AA batteries (hours)}",
             "The manufacturer's claim and the consumer group's doubt both concern the average lifetime across all batteries."),
        step(2, "Identify the claimed value", "\\mu_0 = 48",
             "The stated claim of $48$ hours is the benchmark value used in $H_0$."),
        step(3, "Write the null hypothesis", "H_0\\colon\\ \\mu = 48",
             "We assume the manufacturer's claim is correct until the sample provides convincing evidence against it."),
        step(4, "Write the alternative hypothesis", "H_1\\colon\\ \\mu < 48",
             "Suspecting a shorter lifetime means we look for evidence that $\\mu$ has dropped below $48$."),
        step(5, "Classify the test", "\\text{One-tailed (lower tail)}",
             "Because $H_1$ uses a single inequality ($<$), only unusually small sample means count as evidence against $H_0$."),
        step(6, "State the final answer", "H_0\\colon\\ \\mu = 48, \\qquad H_1\\colon\\ \\mu < 48",
             "This is a one-tailed lower test: we reject $H_0$ only if the sample mean is significantly below $48$ hours."),
    ],
    "$H_0\\colon\\ \\mu = 48$, $H_1\\colon\\ \\mu < 48$; one-tailed lower test.",
))

# ── q003 Easy: two-tailed hypotheses ─────────────────────────────────────────
questions.append(make_q(
    "q003", "Easy", 3, "written",
    ["hypothesis-test", "null-hypothesis", "population-mean", "two-tailed"],
    "A school uses a standardised test where the national mean score is $62$. The headteacher wonders whether pupils at her school have a mean score different from $62$. State suitable hypotheses for a test of the population mean score $\\mu$.",
    [
        step(1, "Define the parameter", "\\mu = \\text{mean score of pupils at the school}",
             "The question is whether this school's average differs from the national figure, so $\\mu$ is the school population mean."),
        step(2, "State the national benchmark", "\\mu_0 = 62",
             "The national mean of $62$ is the reference value assumed under $H_0$."),
        step(3, "Write the null hypothesis", "H_0\\colon\\ \\mu = 62",
             "With no prior direction, we assume the school matches the national average."),
        step(4, "Write the two-tailed alternative", "H_1\\colon\\ \\mu \\ne 62",
             "'Different from' means the mean could be higher or lower, so we use a two-sided alternative."),
        step(5, "Explain why both tails matter", "\\text{Evidence in either direction can reject } H_0",
             "An unusually high or unusually low sample mean would both suggest the school mean is not $62$."),
        step(6, "State the completed hypotheses", "H_0\\colon\\ \\mu = 62, \\qquad H_1\\colon\\ \\mu \\ne 62",
             "This two-tailed setup examines both upper and lower tails of the sampling distribution."),
    ],
    "$H_0\\colon\\ \\mu = 62$, $H_1\\colon\\ \\mu \\ne 62$ (two-tailed test).",
))

# ── q004 Easy: significance level meaning ──────────────────────────────────────
questions.append(make_q(
    "q004", "Easy", 3, "written",
    ["significance-level", "type-I-error", "hypothesis-test"],
    "A quality controller carries out a hypothesis test on the mean weight of chocolate bars at the $5\\%$ significance level. Explain what is meant by the significance level of the test.",
    [
        step(1, "Identify what the level controls", "\\alpha = 0.05",
             "The significance level $\\alpha$ is the threshold that governs how much evidence is needed before we reject $H_0$."),
        step(2, "Define the significance level formally",
             "\\text{significance level} = P(\\text{reject } H_0 \\mid H_0 \\text{ is true})",
             "It is the probability of making a Type I error — rejecting a null hypothesis that is actually correct."),
        step(3, "Interpret at 5%", "P(\\text{reject } H_0 \\mid H_0 \\text{ true}) = 0.05",
             "If the null hypothesis really is true, there is a $5\\%$ chance the sample will be extreme enough to make us wrongly reject it."),
        step(4, "Explain the practical meaning",
             "\\text{We accept a } 5\\% \\text{ risk of a false alarm}",
             "The controller is willing to flag a problem when there isn't one at most one time in twenty, on average."),
        step(5, "Link to the critical region", "P(\\bar{X} \\in \\text{critical region} \\mid H_0) = 0.05",
             "The critical region is chosen so that its probability under $H_0$ equals the significance level."),
        step(6, "State the conclusion in context",
             "\\text{At the } 5\\% \\text{ level, there is a } 5\\% \\text{ chance of concluding the mean weight has changed when it has not.}",
             "This frames the abstract probability in terms of the chocolate-bar quality check."),
    ],
    "The significance level is the probability of rejecting $H_0$ when $H_0$ is actually true. At the $5\\%$ level this probability is $0.05$.",
))

# ── q005 Easy: sampling distribution ─────────────────────────────────────────
mu, sigma, n = 50, 8, 25
questions.append(make_q(
    "q005", "Easy", 4, "written",
    ["sampling-distribution", "sample-mean", "standard-error"],
    "The weights of items produced by a machine are normally distributed with mean $\\mu = 50\\,\\text{g}$ and standard deviation $\\sigma = 8\\,\\text{g}$. Random samples of size $n = 25$ are taken. State the distribution of the sample mean $\\bar{X}$.",
    [
        step(1, "Identify the population distribution", "X \\sim N(50,\\ 8^2)",
             "Individual item weights follow a normal distribution with the given mean and standard deviation."),
        step(2, "Recall the sampling distribution result",
             "\\bar{X} \\sim N\\!\\left(\\mu,\\ \\dfrac{\\sigma^2}{n}\\right)",
             "When the population is normal, the sample mean is also normally distributed with the same mean but reduced variance."),
        step(3, "Substitute the population parameters", "\\bar{X} \\sim N\\!\\left(50,\\ \\dfrac{64}{25}\\right)",
             "The variance of $\\bar{X}$ is $\\sigma^2/n = 64/25$, which is much smaller than the population variance because averaging smooths out variation."),
        step(4, "Calculate the standard error", "\\text{SE} = \\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{8}{5} = 1.6",
             "The standard error measures how much sample means typically vary around the population mean."),
        step(5, "Write the distribution in standard form", "\\bar{X} \\sim N(50,\\ 1.6^2)",
             "Expressing the distribution with the standard error as the standard deviation is the most useful form for hypothesis tests."),
        step(6, "Interpret the result", "\\text{Sample means cluster tightly around } 50\\,\\text{g}",
             "With $n = 25$, sample means will typically lie within about $1.6\\,\\text{g}$ of $50\\,\\text{g}$, much closer than individual items (which vary by $8\\,\\text{g}$)."),
    ],
    "$\\bar{X} \\sim N\\!\\left(50,\\ \\left(\\dfrac{8}{\\sqrt{25}}\\right)^2\\right) = N(50,\\ 1.6^2)$.",
))

# ── q006 Easy: standard error calculation ──────────────────────────────────────
sigma, n = 12, 36
se_val = se(sigma, n)
questions.append(make_q(
    "q006", "Easy", 3, "value",
    ["standard-error", "sample-mean"],
    "The reaction times of drivers are normally distributed with standard deviation $\\sigma = 12\\,\\text{ms}$. Find the standard error of the mean for random samples of size $n = 36$.",
    [
        step(1, "State the standard error formula", "\\text{SE} = \\dfrac{\\sigma}{\\sqrt{n}}",
             "The standard error is the standard deviation of the sampling distribution of $\\bar{X}$."),
        step(2, "Substitute the values", "\\text{SE} = \\dfrac{12}{\\sqrt{36}}",
             "We divide the population standard deviation by the square root of the sample size."),
        step(3, "Evaluate the square root", "\\sqrt{36} = 6",
             "A sample of $36$ reduces the variability of the mean by a factor of $6$ compared with individual observations."),
        step(4, "Calculate the standard error", f"\\text{{SE}} = \\dfrac{{12}}{{6}} = {se_val:.0f}",
             f"The standard error is ${se_val:.0f}\\,\\text{{ms}}$, meaning sample means typically vary by about $2\\,\\text{{ms}}$ around the true mean."),
        step(5, "Interpret the result", "\\text{Sample means are much less spread out than individual times}",
             "Individual reaction times vary by $12\\,\\text{ms}$, but the mean of $36$ observations varies by only $2\\,\\text{ms}$."),
        step(6, "State the answer", f"\\text{{SE}} = {se_val:.0f}\\,\\text{{ms}}",
             f"The standard error of the mean is ${se_val:.0f}\\,\\text{{ms}}$."),
    ],
    f"$\\text{{SE}} = {se_val:.0f}\\,\\text{{ms}}$.",
))

# ── q007-q018: test statistic and critical value questions ─────────────────────
test_cases_easy = [
    ("q007", "Easy", 4, "value", 52.3, 50, 6, 20, "upper", 0.05,
     "A packaging firm claims cartons have mean mass $50\\,\\text{g}$. A sample of $20$ cartons has mean mass $52.3\\,\\text{g}$. The population standard deviation is $\\sigma = 6\\,\\text{g}$ and masses are normally distributed. Calculate the test statistic for $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu > 50$."),
    ("q008", "Easy", 4, "value", 47.1, 50, 5, 25, "lower", 0.05,
     "A water company states the mean daily consumption per household is $50$ litres. A sample of $25$ households gives $\\bar{x} = 47.1$ litres. Given $\\sigma = 5$ litres, calculate the test statistic for testing $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu < 50$."),
    ("q009", "Easy", 4, "value", 63.8, 60, 10, 16, "upper", 0.05,
     "Exam scores are normally distributed with $\\sigma = 10$. A class of $16$ students has mean score $63.8$. The college benchmark is $\\mu_0 = 60$. Find the test statistic for $H_1\\colon\\ \\mu > 60$."),
    ("q010", "Easy", 4, "value", 28.4, 30, 4, 49, "lower", 0.05,
     "A sprinter's coach sets a target mean lap time of $30\\,\\text{s}$. In $49$ timed laps the sample mean is $28.4\\,\\text{s}$ with $\\sigma = 4\\,\\text{s}$. Calculate the test statistic for $H_0\\colon\\ \\mu = 30$ against $H_1\\colon\\ \\mu < 30$."),
    ("q011", "Easy", 3, "value", None, 100, 15, 25, "two", 0.05,
     "For a two-tailed test at the $5\\%$ significance level on a population mean, state the critical values of the test statistic $Z$."),
    ("q012", "Easy", 3, "value", None, 0, 1, 1, "upper", 0.05,
     "For a one-tailed test at the $5\\%$ significance level with $H_1\\colon\\ \\mu > \\mu_0$, state the critical value of $Z$."),
    ("q013", "Easy", 3, "value", None, 0, 1, 1, "lower", 0.01,
     "For a one-tailed test at the $1\\%$ significance level with $H_1\\colon\\ \\mu < \\mu_0$, state the critical value of $Z$."),
    ("q014", "Easy", 4, "value", 105.2, 100, 8, 64, "two", 0.05,
     "Heights of adult males are normally distributed with $\\sigma = 8\\,\\text{cm}$. A sample of $64$ men has mean height $105.2\\,\\text{cm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu \\ne 100$ by calculating the test statistic."),
    ("q015", "Easy", 4, "value", 18.7, 20, 3, 36, "lower", 0.10,
     "A machine fills bottles to a target mean of $20\\,\\text{ml}$. A sample of $36$ bottles has $\\bar{x} = 18.7\\,\\text{ml}$ and $\\sigma = 3\\,\\text{ml}$. Calculate the test statistic for $H_1\\colon\\ \\mu < 20$."),
    ("q016", "Easy", 3, "written", None, 0, 1, 1, "two", 0.10,
     "State the critical values for a two-tailed hypothesis test on a population mean at the $10\\%$ significance level."),
    ("q017", "Easy", 4, "value", 74.5, 72, 6, 30, "upper", 0.05,
     "Blood pressure readings are normally distributed with $\\sigma = 6\\,\\text{mmHg}$. A sample of $30$ patients on a new diet has mean $74.5\\,\\text{mmHg}$. The usual mean is $72\\,\\text{mmHg}$. Find the test statistic for $H_0\\colon\\ \\mu = 72$ against $H_1\\colon\\ \\mu > 72$."),
    ("q018", "Easy", 4, "value", 41.2, 42, 5, 40, "two", 0.05,
     "A sample of $40$ items has mean $41.2$ with $\\sigma = 5$. Test whether the population mean differs from $42$ by calculating the test statistic."),
]

for case in test_cases_easy:
    qid, diff, marks, atype, xbar, mu0, sigma, n, tail, alpha, text = case
    if xbar is None and tail in ("two", "upper", "lower"):
        if tail == "two":
            zc = Z_CRIT[(alpha, "two")]
            steps = [
                step(1, "Identify the test type", "\\text{Two-tailed test at } \\alpha = " + str(int(alpha*100)) + "\\%",
                     "In a two-tailed test the significance level is split equally between the two tails."),
                step(2, "Find the upper-tail probability", f"P(Z > z) = \\dfrac{{{int(alpha*100)}}}{{2}} = {alpha/2}",
                     f"Each tail carries half the significance level, so we need the $z$-value with upper-tail probability ${alpha/2}$."),
                step(3, "Look up the critical value", f"z_{{\\text{{crit}}}} = \\pm {zc}",
                     f"From standard normal tables, the critical values are $\\pm {zc}$."),
                step(4, "State the rejection rule", f"\\text{{Reject }} H_0 \\text{{ if }} |z| > {zc}",
                     f"Values of the test statistic beyond $\\pm {zc}$ fall in the critical region."),
                step(5, "Interpret symmetrically", f"\\text{{Lower critical value}} = -{zc}, \\quad \\text{{Upper critical value}} = {zc}",
                     "The two-tailed critical region consists of both extreme tails."),
                step(6, "State the answer", f"z_{{\\text{{crit}}}} = \\pm {zc}",
                     f"The critical values are $\\pm {zc}$."),
            ]
            final = f"$z_{{\\text{{crit}}}} = \\pm {zc}$."
            tags = ["critical-value", "two-tailed", "significance-level"]
        elif tail == "upper":
            zc = Z_CRIT[(alpha, "upper")]
            steps = [
                step(1, "Identify the test type", f"\\text{{One-tailed upper test at }} {int(alpha*100)}\\%",
                     "We reject $H_0$ only if the test statistic is unusually large."),
                step(2, "State the rejection condition", f"P(Z > z_{{\\text{{crit}}}}) = {alpha}",
                     f"The entire significance level ${alpha}$ lies in the upper tail."),
                step(3, "Look up the critical value", f"z_{{\\text{{crit}}}} = {zc}",
                     f"From tables, the $z$-value with upper-tail area ${alpha}$ is ${zc}$."),
                step(4, "State the rejection rule", f"\\text{{Reject }} H_0 \\text{{ if }} z > {zc}",
                     "Only test statistics above this value are considered significant."),
                step(5, "Interpret", f"\\text{{Values above }} {zc} \\text{{ occur only }} {int(alpha*100)}\\% \\text{{ of the time under }} H_0",
                     "This is the cut-off between 'not surprising' and 'surprising enough to reject'."),
                step(6, "State the answer", f"z_{{\\text{{crit}}}} = {zc}",
                     f"The critical value is ${zc}$."),
            ]
            final = f"$z_{{\\text{{crit}}}} = {zc}$."
            tags = ["critical-value", "one-tailed", "significance-level"]
        else:
            zc = Z_CRIT[(alpha, "lower")]
            steps = [
                step(1, "Identify the test type", f"\\text{{One-tailed lower test at }} {int(alpha*100)}\\%",
                     "We reject $H_0$ only if the test statistic is unusually small."),
                step(2, "State the rejection condition", f"P(Z < z_{{\\text{{crit}}}}) = {alpha}",
                     f"The entire significance level ${alpha}$ lies in the lower tail."),
                step(3, "Look up the critical value", f"z_{{\\text{{crit}}}} = {zc}",
                     f"From tables, the $z$-value with lower-tail area ${alpha}$ is ${zc}$."),
                step(4, "State the rejection rule", f"\\text{{Reject }} H_0 \\text{{ if }} z < {zc}",
                     "Only test statistics below this value are considered significant."),
                step(5, "Interpret", f"\\text{{Values below }} {zc} \\text{{ are rare under }} H_0",
                     f"Only ${int(alpha*100)}\\%$ of the distribution lies below this point when $H_0$ is true."),
                step(6, "State the answer", f"z_{{\\text{{crit}}}} = {zc}",
                     f"The critical value is ${zc}$."),
            ]
            final = f"$z_{{\\text{{crit}}}} = {zc}$."
            tags = ["critical-value", "one-tailed", "significance-level"]
        questions.append(make_q(qid, diff, marks, atype, tags, text, steps, final))
    else:
        z = z_stat(xbar, mu0, sigma, n)
        se_v = se(sigma, n)
        steps = [
            step(1, "State the test statistic formula", "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
                 "The test statistic measures how many standard errors the sample mean lies from the hypothesised mean."),
            step(2, "Identify the values", f"\\bar{{x}} = {xbar}, \\quad \\mu_0 = {mu0}, \\quad \\sigma = {sigma}, \\quad n = {n}",
                 "Substitute the sample mean, hypothesised mean, known population SD, and sample size."),
            step(3, "Calculate the standard error", f"\\dfrac{{\\sigma}}{{\\sqrt{{n}}}} = \\dfrac{{{sigma}}}{{\\sqrt{{{n}}}}} = {se_v:.4g}",
                 f"The standard error is ${se_v:.4g}$, the typical spread of sample means."),
            step(4, "Calculate the numerator", f"\\bar{{x}} - \\mu_0 = {xbar} - {mu0} = {xbar - mu0:.4g}",
                 f"The sample mean differs from $\\mu_0$ by ${xbar - mu0:.4g}$."),
            step(5, "Evaluate the test statistic", f"z = \\dfrac{{{xbar - mu0:.4g}}}{{{se_v:.4g}}} = {z:.4f}",
                 f"Dividing by the standard error gives $z = {z:.4f}$."),
            step(6, "Interpret the sign and magnitude", f"z = {z:.4f}",
                 f"A $z$-value of ${z:.4f}$ means the sample mean is ${abs(z):.2f}$ standard errors {'above' if z > 0 else 'below'} $\\mu_0$."),
        ]
        final = f"$z = {fmt4(z)}$."
        questions.append(make_q(qid, diff, marks, atype, ["test-statistic", "z-test", tail + "-tailed"], text, steps, final))

# ── q019-q035 Intermediate: critical region & p-value tests ──────────────────
intermediate_tests = [
    # (id, xbar, mu0, sigma, n, tail, alpha, context, reject?)
    ("q019", 53.2, 50, 6, 20, "upper", 0.05,
     "Cartons are claimed to have mean mass $50\\,\\text{g}$. A sample of $20$ gives $\\bar{x} = 53.2\\,\\text{g}$ with $\\sigma = 6\\,\\text{g}$. Test $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu > 50$ at the $5\\%$ level using the critical value method."),
    ("q020", 47.1, 50, 5, 25, "lower", 0.05,
     "Household water consumption is claimed to be $50$ litres per day. A sample of $25$ gives $\\bar{x} = 47.1$ litres with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 50$ against $H_1\\colon\\ \\mu < 50$ at the $5\\%$ level."),
    ("q021", 63.8, 60, 10, 16, "upper", 0.05,
     "A class of $16$ students has mean exam score $63.8$ with $\\sigma = 10$. Test whether the mean exceeds the benchmark of $60$ at the $5\\%$ level."),
    ("q022", 105.2, 100, 8, 64, "two", 0.05,
     "A sample of $64$ men has mean height $105.2\\,\\text{cm}$ with $\\sigma = 8\\,\\text{cm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu \\ne 100$ at the $5\\%$ level."),
    ("q023", 18.7, 20, 3, 36, "lower", 0.10,
     "A bottling machine targets $\\mu = 20\\,\\text{ml}$. A sample of $36$ gives $\\bar{x} = 18.7\\,\\text{ml}$ with $\\sigma = 3\\,\\text{ml}$. Test $H_1\\colon\\ \\mu < 20$ at the $10\\%$ level."),
    ("q024", 74.5, 72, 6, 30, "upper", 0.05,
     "A diet study: $30$ patients have mean blood pressure $74.5\\,\\text{mmHg}$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 72$ against $H_1\\colon\\ \\mu > 72$ at $5\\%$."),
    ("q025", 41.2, 42, 5, 40, "two", 0.05,
     "A sample of $40$ items has $\\bar{x} = 41.2$ with $\\sigma = 5$. Test whether $\\mu \\ne 42$ at the $5\\%$ level."),
    ("q026", 98.5, 100, 4, 49, "lower", 0.01,
     "A sample of $49$ components has mean length $98.5\\,\\text{mm}$ with $\\sigma = 4\\,\\text{mm}$. Test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu < 100$ at the $1\\%$ level."),
    ("q027", 55.8, 52, 7, 24, "upper", 0.05,
     "A sample of $24$ readings has mean $55.8$ with $\\sigma = 7$. Test $H_0\\colon\\ \\mu = 52$ against $H_1\\colon\\ \\mu > 52$ at $5\\%$."),
    ("q028", 29.1, 30, 2.5, 64, "lower", 0.05,
     "Lap times: $64$ laps give $\\bar{x} = 29.1\\,\\text{s}$ with $\\sigma = 2.5\\,\\text{s}$. Test $H_0\\colon\\ \\mu = 30$ against $H_1\\colon\\ \\mu < 30$ at $5\\%$."),
    ("q029", 112.3, 110, 9, 25, "two", 0.01,
     "A sample of $25$ has $\\bar{x} = 112.3$ with $\\sigma = 9$. Test $H_0\\colon\\ \\mu = 110$ against $H_1\\colon\\ \\mu \\ne 110$ at the $1\\%$ level."),
    ("q030", 8.4, 8, 1.2, 30, "upper", 0.05,
     "A sample of $30$ pH readings has mean $8.4$ with $\\sigma = 1.2$. Test $H_0\\colon\\ \\mu = 8$ against $H_1\\colon\\ \\mu > 8$ at $5\\%$."),
    ("q031", 46.8, 48, 3.5, 20, "lower", 0.05,
     "Fuel economy: $20$ cars give mean $46.8\\,\\text{mpg}$ with $\\sigma = 3.5$. Test $H_0\\colon\\ \\mu = 48$ against $H_1\\colon\\ \\mu < 48$ at $5\\%$."),
    ("q032", 156.2, 150, 12, 36, "upper", 0.01,
     "A sample of $36$ has $\\bar{x} = 156.2$ with $\\sigma = 12$. Test $H_0\\colon\\ \\mu = 150$ against $H_1\\colon\\ \\mu > 150$ at the $1\\%$ level."),
    ("q033", 22.1, 24, 4, 16, "two", 0.10,
     "A sample of $16$ has $\\bar{x} = 22.1$ with $\\sigma = 4$. Test $H_0\\colon\\ \\mu = 24$ against $H_1\\colon\\ \\mu \\ne 24$ at the $10\\%$ level."),
    ("q034", 67.3, 65, 5, 50, "upper", 0.05,
     "A sample of $50$ has $\\bar{x} = 67.3$ with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 65$ against $H_1\\colon\\ \\mu > 65$ at $5\\%$."),
    ("q035", 33.6, 35, 6, 25, "lower", 0.05,
     "A sample of $25$ has $\\bar{x} = 33.6$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 35$ against $H_1\\colon\\ \\mu < 35$ at $5\\%$."),
]

for qid, xbar, mu0, sigma, n, tail, alpha, text in intermediate_tests:
    z = z_stat(xbar, mu0, sigma, n)
    se_v = se(sigma, n)
    if tail == "upper":
        zc = Z_CRIT[(alpha, "upper")]
        reject = z > zc
        crit_rule = f"z > {zc}"
        pval = 1 - phi(z)
    elif tail == "lower":
        zc = Z_CRIT[(alpha, "lower")]
        reject = z < zc
        crit_rule = f"z < {zc}"
        pval = phi(z)
    else:
        zc = Z_CRIT[(alpha, "two")]
        reject = abs(z) > zc
        crit_rule = f"|z| > {zc}"
        pval = 2 * (1 - phi(abs(z)))

    steps = [
        step(1, "State the hypotheses from the question",
             f"H_0\\colon\\ \\mu = {mu0}" + (f", \\quad H_1\\colon\\ \\mu > {mu0}" if tail == "upper" else f", \\quad H_1\\colon\\ \\mu < {mu0}" if tail == "lower" else f", \\quad H_1\\colon\\ \\mu \\ne {mu0}"),
             "We write the null and alternative hypotheses directly from the test description."),
        step(2, "State the test statistic formula", "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
             "Under $H_0$, with known $\\sigma$, the sample mean is normally distributed and we standardise to $Z$."),
        step(3, "Calculate the standard error", f"\\dfrac{{\\sigma}}{{\\sqrt{{n}}}} = \\dfrac{{{sigma}}}{{\\sqrt{{{n}}}}} = {se_v:.4g}",
             f"The standard error is ${se_v:.4g}$."),
        step(4, "Calculate the test statistic", f"z = \\dfrac{{{xbar} - {mu0}}}{{{se_v:.4g}}} = {z:.4f}",
             f"The sample mean is ${abs(z):.2f}$ standard errors {'above' if z > 0 else 'below'} the hypothesised mean."),
        step(5, "State the critical value", f"z_{{\\text{{crit}}}} = {zc}" + (" \\text{ (upper tail)}" if tail == "upper" else " \\text{ (lower tail)}" if tail == "lower" else f" \\Rightarrow \\text{{reject if }} |z| > {zc}"),
             f"At the ${int(alpha*100)}\\%$ significance level, the critical value is ${zc}$."),
        step(6, "Compare the test statistic with the critical value",
             f"z = {z:.4f}" + (f" > {zc}" if (tail == "upper" and reject) else f" < {zc}" if (tail == "lower" and reject) else f",\\ |z| = {abs(z):.4f}" + (f" > {zc}" if reject else f" \\leqslant {zc}")),
             f"The test statistic {'falls in' if reject else 'does not fall in'} the critical region."),
        step(7, "Calculate the p-value", f"p = {fmt4(pval)}",
             f"The p-value is the probability, under $H_0$, of obtaining a result at least as extreme as $z = {z:.4f}$."),
        step(8, "Compare p-value with significance level", f"p = {fmt4(pval)}" + (f" < {alpha}" if reject else f" > {alpha}"),
             f"Since $p$ is {'less' if reject else 'greater'} than $\\alpha = {alpha}$, we {'reject' if reject else 'do not reject'} $H_0$."),
        step(9, "State the statistical decision", f"\\text{{{decision_label(reject)}}}\\ H_0",
             f"At the ${int(alpha*100)}\\%$ level, there is {'sufficient' if reject else 'insufficient'} evidence against $H_0$."),
        step(10, "Write the conclusion in context",
             f"\\text{{At the {int(alpha*100)}\\% level, there is {'sufficient' if reject else 'insufficient'} evidence that }} \\mu" +
             (f" > {mu0}" if tail == "upper" and reject else f" \\leqslant {mu0}" if tail == "upper" else
              f" < {mu0}" if tail == "lower" and reject else f" \\geqslant {mu0}" if tail == "lower" else
              f" \\ne {mu0}" if reject else f" = {mu0}"),
             "The conclusion must refer to the population mean in the context of the problem, not just 'reject $H_0$'."),
    ]
    decision = "Reject" if reject else "Do not reject"
    tail_word = {"upper": "greater than", "lower": "less than", "two": "different from"}[tail]
    if reject:
        ctx = f"there is sufficient evidence that $\\mu$ is {tail_word} ${mu0}$"
    else:
        ctx = f"there is insufficient evidence that $\\mu$ is {tail_word} ${mu0}$"
    final = f"${decision}$ $H_0$ at the ${int(alpha*100)}\\%$ level; {ctx}."
    questions.append(make_q(qid, "Intermediate", 5, "written",
        ["hypothesis-test", "critical-region", tail + "-tailed", "conclusion"], text, steps, final))

# ── q036-q052 Intermediate: p-value method & conceptual ─────────────────────
pvalue_tests = [
    ("q036", 51.8, 48, 5, 30, "upper", 0.05, "A sample of $30$ gives $\\bar{x} = 51.8$ with $\\sigma = 5$. For $H_0\\colon\\ \\mu = 48$ against $H_1\\colon\\ \\mu > 48$, find the p-value and state your conclusion at the $5\\%$ level."),
    ("q037", 44.2, 46, 4, 25, "lower", 0.05, "A sample of $25$ gives $\\bar{x} = 44.2$ with $\\sigma = 4$. For $H_0\\colon\\ \\mu = 46$ against $H_1\\colon\\ \\mu < 46$, find the p-value and state your conclusion at the $5\\%$ level."),
    ("q038", 57.3, 55, 6, 20, "two", 0.05, "A sample of $20$ gives $\\bar{x} = 57.3$ with $\\sigma = 6$. For $H_0\\colon\\ \\mu = 55$ against $H_1\\colon\\ \\mu \\ne 55$, find the p-value at the $5\\%$ level."),
    ("q039", 102.1, 100, 8, 49, "upper", 0.01, "A sample of $49$ gives $\\bar{x} = 102.1$ with $\\sigma = 8$. For $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu > 100$, find the p-value and conclude at the $1\\%$ level."),
    ("q040", 38.5, 40, 5, 16, "lower", 0.10, "A sample of $16$ gives $\\bar{x} = 38.5$ with $\\sigma = 5$. For $H_0\\colon\\ \\mu = 40$ against $H_1\\colon\\ \\mu < 40$, find the p-value and conclude at the $10\\%$ level."),
    ("q041", 71.2, 70, 3, 64, "two", 0.01, "A sample of $64$ gives $\\bar{x} = 71.2$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 70$ against $H_1\\colon\\ \\mu \\ne 70$ at the $1\\%$ level using the p-value method."),
    ("q042", 26.8, 25, 2, 36, "upper", 0.05, "A sample of $36$ gives $\\bar{x} = 26.8$ with $\\sigma = 2$. For $H_1\\colon\\ \\mu > 25$, find the p-value and conclude at $5\\%$."),
    ("q043", 89.4, 92, 7, 25, "lower", 0.05, "A sample of $25$ gives $\\bar{x} = 89.4$ with $\\sigma = 7$. For $H_1\\colon\\ \\mu < 92$, find the p-value and conclude at $5\\%$."),
    ("q044", 15.3, 15, 1.5, 40, "two", 0.05, "A sample of $40$ gives $\\bar{x} = 15.3$ with $\\sigma = 1.5$. Test $H_0\\colon\\ \\mu = 15$ against $H_1\\colon\\ \\mu \\ne 15$ using p-values at $5\\%$."),
    ("q045", 203.5, 200, 10, 20, "upper", 0.05, "A sample of $20$ gives $\\bar{x} = 203.5$ with $\\sigma = 10$. Test $H_0\\colon\\ \\mu = 200$ against $H_1\\colon\\ \\mu > 200$ at $5\\%$ using the p-value."),
    ("q046", 58.1, 60, 4, 49, "lower", 0.01, "A sample of $49$ gives $\\bar{x} = 58.1$ with $\\sigma = 4$. Test $H_0\\colon\\ \\mu = 60$ against $H_1\\colon\\ \\mu < 60$ at $1\\%$ using p-values."),
    ("q047", 44.7, 45, 3, 30, "two", 0.10, "A sample of $30$ gives $\\bar{x} = 44.7$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 45$ against $H_1\\colon\\ \\mu \\ne 45$ at $10\\%$ using p-values."),
    ("q048", 82.6, 80, 5, 25, "upper", 0.05, "A sample of $25$ gives $\\bar{x} = 82.6$ with $\\sigma = 5$. For $H_1\\colon\\ \\mu > 80$, find the p-value and conclude at $5\\%$."),
    ("q049", 31.2, 32, 2.5, 50, "lower", 0.05, "A sample of $50$ gives $\\bar{x} = 31.2$ with $\\sigma = 2.5$. For $H_1\\colon\\ \\mu < 32$, find the p-value and conclude at $5\\%$."),
    ("q050", 76.8, 75, 6, 36, "two", 0.05, "A sample of $36$ gives $\\bar{x} = 76.8$ with $\\sigma = 6$. Test $H_0\\colon\\ \\mu = 75$ against $H_1\\colon\\ \\mu \\ne 75$ at $5\\%$ using p-values."),
    ("q051", 54.5, 52, 8, 16, "upper", 0.10, "A sample of $16$ gives $\\bar{x} = 54.5$ with $\\sigma = 8$. Test $H_0\\colon\\ \\mu = 52$ against $H_1\\colon\\ \\mu > 52$ at $10\\%$ using p-values."),
    ("q052", 19.8, 20, 1.8, 64, "lower", 0.05, "A sample of $64$ gives $\\bar{x} = 19.8$ with $\\sigma = 1.8$. Test $H_0\\colon\\ \\mu = 20$ against $H_1\\colon\\ \\mu < 20$ at $5\\%$ using p-values."),
]

for qid, xbar, mu0, sigma, n, tail, alpha, text in pvalue_tests:
    z = z_stat(xbar, mu0, sigma, n)
    se_v = se(sigma, n)
    if tail == "upper":
        pval = 1 - phi(z)
        reject = pval < alpha
    elif tail == "lower":
        pval = phi(z)
        reject = pval < alpha
    else:
        pval = 2 * (1 - phi(abs(z)))
        reject = pval < alpha

    steps = [
        step(1, "State the hypotheses", f"H_0\\colon\\ \\mu = {mu0}" + (f", \\quad H_1\\colon\\ \\mu > {mu0}" if tail == "upper" else f", \\quad H_1\\colon\\ \\mu < {mu0}" if tail == "lower" else f", \\quad H_1\\colon\\ \\mu \\ne {mu0}"),
             "The null and alternative hypotheses define what we are testing."),
        step(2, "Calculate the test statistic", f"z = \\dfrac{{{xbar} - {mu0}}}{{\\sigma/\\sqrt{{{n}}}}} = \\dfrac{{{xbar - mu0:.4g}}}{{{se_v:.4g}}} = {z:.4f}",
             f"Standardising gives $z = {z:.4f}$."),
        step(3, "Define the p-value", "p = P(\\text{obtaining a test statistic at least as extreme as the observed value} \\mid H_0)",
             "The p-value measures how surprising the observed result is if $H_0$ were true."),
        step(4, "Calculate the p-value",
             (f"p = P(Z > {z:.4f}) = 1 - \\Phi({z:.4f}) = {fmt4(pval)}" if tail == "upper" else
              f"p = P(Z < {z:.4f}) = \\Phi({z:.4f}) = {fmt4(pval)}" if tail == "lower" else
              f"p = 2 \\times P(Z > {abs(z):.4f}) = 2(1 - \\Phi({abs(z):.4f})) = {fmt4(pval)}"),
             f"The p-value is ${fmt4(pval)}$."),
        step(5, "State the decision rule", f"\\text{{Reject }} H_0 \\text{{ if }} p < \\alpha = {alpha}",
             f"We compare the p-value with the significance level $\\alpha = {alpha}$."),
        step(6, "Compare p-value with $\\alpha$", f"p = {fmt4(pval)}" + (f" < {alpha}" if reject else f" \\geqslant {alpha}"),
             f"Since $p$ is {'less' if reject else 'not less'} than $\\alpha$, we {'reject' if reject else 'do not reject'} $H_0$."),
        step(7, "State the decision", f"\\text{{{decision_label(reject)}}}\\ H_0",
             f"At the ${int(alpha*100)}\\%$ level, the evidence is {'strong enough' if reject else 'not strong enough'} to reject the null hypothesis."),
        step(8, "Write the conclusion in context",
             f"\\text{{p-value}} = {fmt4(pval)}",
             f"{'There is sufficient evidence' if reject else 'There is insufficient evidence'} at the ${int(alpha*100)}\\%$ level to conclude that $\\mu$ differs from the null value in the direction of $H_1$."),
        step(9, "Relate p-value to evidence strength",
             f"p = {fmt4(pval)}",
             f"A p-value of ${fmt4(pval)}$ means that if $H_0$ were true, results this extreme would occur about ${float(fmt4(pval))*100:.1f}\\%$ of the time."),
    ]
    decision = "Reject" if reject else "Do not reject"
    final = f"$p = {fmt4(pval)}$; ${decision}$ $H_0$ at the ${int(alpha*100)}\\%$ level."
    questions.append(make_q(qid, "Intermediate", 5, "written",
        ["p-value", "hypothesis-test", tail + "-tailed"], text, steps, final))

# ── q053-q070 Hard: multi-part, sample size, design ───────────────────────────
# q053 Hard: minimum n for detectable difference
questions.append(make_q(
    "q053", "Hard", 7, "integer",
    ["sample-size", "critical-value", "test-design"],
    "A quality engineer wants to test $H_0\\colon\\ \\mu = 100$ against $H_1\\colon\\ \\mu > 100$ at the $5\\%$ significance level. The population standard deviation is $\\sigma = 8$. She will reject $H_0$ if $z > 1.6449$. Find the smallest sample size $n$ such that a sample mean of $103$ would lead to rejection of $H_0$.",
    [
        step(1, "State the rejection condition", "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} > 1.6449",
             "Rejection occurs when the standardised sample mean exceeds the critical value $1.6449$."),
        step(2, "Substitute the boundary values", "\\dfrac{103 - 100}{8 / \\sqrt{n}} > 1.6449",
             "We use $\\bar{x} = 103$ as the smallest sample mean that would just trigger rejection."),
        step(3, "Simplify the numerator", "\\dfrac{3}{8 / \\sqrt{n}} > 1.6449",
             "The sample mean is $3$ units above the hypothesised mean."),
        step(4, "Rearrange to isolate $\\sqrt{n}$", "\\dfrac{3\\sqrt{n}}{8} > 1.6449",
             "Multiplying both sides by $\\sqrt{n}$ and dividing by $8$ isolates the sample size term."),
        step(5, "Solve for $\\sqrt{n}$", "\\sqrt{n} > \\dfrac{8 \\times 1.6449}{3} = 4.386\\ldots",
             "Dividing $8 \\times 1.6449$ by $3$ gives the minimum value of $\\sqrt{n}$."),
        step(6, "Square both sides", "n > (4.386\\ldots)^2 = 19.24\\ldots",
             "Squaring removes the square root, giving a lower bound on $n$."),
        step(7, "Round up to the smallest integer", "n = 20",
             "Since $n$ must be a whole number, we take the smallest integer strictly greater than $19.24$, which is $20$."),
        step(8, "Verify at n = 20", "z = \\dfrac{3}{8/\\sqrt{20}} = \\dfrac{3\\sqrt{20}}{8} \\approx 1.677 > 1.6449",
             "At $n = 20$, a sample mean of $103$ does produce a test statistic above the critical value."),
        step(9, "Check n = 19 fails", "z = \\dfrac{3\\sqrt{19}}{8} \\approx 1.634 < 1.6449",
             "With $n = 19$, the same sample mean would not quite reach the critical value."),
        step(10, "Interpret in context",
             "\\text{At least 20 observations are needed for } \\bar{x} = 103 \\text{ to be significant.}",
             "This tells the engineer how large a sample she needs for a $3$-unit excess to be detectable at the $5\\%$ level."),
        step(11, "Note the role of effect size", "\\text{Larger } n \\text{ makes smaller differences detectable}",
             "Sample size, significance level, and the size of the departure from $H_0$ are all linked in test design."),
        step(12, "State the answer", "n_{\\min} = 20",
             "The minimum sample size is $20$."),
        step(13, "Summarise the design requirement",
             "n \\geqslant 20 \\text{ with } \\sigma = 8, \\; \\alpha = 5\\%, \\; \\bar{x} = 103",
             "With these parameters, a mean of $103$ against $H_0\\colon\\ \\mu = 100$ will be statistically significant."),
    ],
    "$n_{\\min} = 20$.",
))

# q054 Hard: find significance level from critical value
questions.append(make_q(
    "q054", "Hard", 6, "value",
    ["significance-level", "critical-value", "two-tailed"],
    "In a two-tailed test on a population mean, the critical values are found to be $z = \\pm 2.326$. State the significance level of the test.",
    [
        step(1, "Identify the test type", "\\text{Two-tailed test, critical values } z = \\pm 2.326",
             "In a two-tailed test, the significance level is split equally between the two tails."),
        step(2, "Find the upper-tail probability", "P(Z > 2.326) = 1 - \\Phi(2.326)",
             "The upper critical value $2.326$ marks the boundary of the upper critical region."),
        step(3, "Evaluate the upper-tail area", "P(Z > 2.326) = 1 - 0.99 = 0.01",
             "From standard normal tables, $\\Phi(2.326) \\approx 0.99$, so the upper tail has area $0.01$."),
        step(4, "Double for the two-tailed test", "\\alpha = 2 \\times 0.01 = 0.02",
             "Both tails contribute equally, so the total significance level is twice the single-tail area."),
        step(5, "Express as a percentage", "\\alpha = 2\\%",
             "A significance level of $0.02$ corresponds to a $2\\%$ test."),
        step(6, "Verify using the lower tail", "P(Z < -2.326) = \\Phi(-2.326) = 0.01",
             "By symmetry, the lower tail also has area $0.01$, confirming $\\alpha = 0.02$."),
        step(7, "State the rejection rule", "\\text{Reject } H_0 \\text{ if } |z| > 2.326",
             "Values beyond $\\pm 2.326$ fall in the critical region with total probability $2\\%$."),
        step(8, "Interpret", "\\text{There is a } 2\\% \\text{ chance of a Type I error}",
             "If $H_0$ is true, we would wrongly reject it about $2$ times in every $100$ tests."),
        step(9, "Relate to common levels", "2\\% \\text{ is between the usual } 1\\% \\text{ and } 5\\% \\text{ levels}",
             "This is a moderately stringent test — stricter than $5\\%$ but less so than $1\\%$."),
        step(10, "State the rejection rule explicitly", "\\text{Reject } H_0 \\text{ if } z < -2.326 \\text{ or } z > 2.326",
             "The full critical region consists of both tails beyond $\\pm 2.326$."),
        step(11, "Confirm total critical probability", "0.01 + 0.01 = 0.02 = \\alpha",
             "Adding the lower- and upper-tail areas gives the total significance level."),
        step(12, "Link to the standard normal table", "\\Phi(2.326) \\approx 0.99",
             "The critical value $2.326$ is the standard $1\\%$ upper-tail point, which is why each tail carries probability $0.01$."),
        step(13, "State the answer", "\\alpha = 0.02 \\text{ (the } 2\\% \\text{ significance level)}",
             "The significance level is $2\\%$."),
    ],
    "$\\alpha = 0.02$ (the $2\\%$ significance level).",
))

# q055-q070: more hard multi-part tests
hard_tests = [
    ("q055", 52.8, 50, 5, 15, "upper", 0.05,
     "A new fertiliser is tested on $15$ plants. The mean height is $52.8\\,\\text{cm}$ with $\\sigma = 5\\,\\text{cm}$. The standard mean without fertiliser is $50\\,\\text{cm}$. (a) State suitable hypotheses. (b) Test at the $5\\%$ level. (c) Interpret your conclusion."),
    ("q056", 44.5, 46, 3, 20, "lower", 0.01,
     "A sample of $20$ light bulbs has mean lifetime $44.5$ hours with $\\sigma = 3$ hours. The claimed mean is $46$ hours. (a) State hypotheses. (b) Carry out a test at the $1\\%$ level. (c) What does your conclusion mean for the manufacturer's claim?"),
    ("q057", 108.3, 105, 7, 30, "two", 0.05,
     "Thirty athletes have mean performance score $108.3$ with $\\sigma = 7$. The population mean is thought to be $105$. (a) State hypotheses. (b) Test at $5\\%$. (c) Comment on whether the training programme appears effective."),
    ("q058", 19.2, 20, 2, 25, "lower", 0.05,
     "A sample of $25$ packets has mean mass $19.2\\,\\text{g}$ with $\\sigma = 2\\,\\text{g}$. The target is $20\\,\\text{g}$. (a) State hypotheses. (b) Test at $5\\%$. (c) Should the machine be recalibrated?"),
    ("q059", 85.7, 82, 6, 40, "upper", 0.01,
     "Forty students score mean $85.7$ with $\\sigma = 6$. The national mean is $82$. (a) State hypotheses. (b) Test at the $1\\%$ level. (c) Comment on the school's performance."),
    ("q060", 33.1, 35, 4, 36, "two", 0.10,
     "A sample of $36$ has mean $33.1$ with $\\sigma = 4$. Test whether $\\mu = 35$ at the $10\\%$ level. (a) State hypotheses. (b) Find the test statistic and p-value. (c) State your conclusion."),
    ("q061", 61.5, 58, 5, 18, "upper", 0.05,
     "Eighteen readings have mean $61.5$ with $\\sigma = 5$. Test $H_0\\colon\\ \\mu = 58$ against $H_1\\colon\\ \\mu > 58$ at $5\\%$. Include hypotheses, test statistic, critical value comparison, and a contextual conclusion."),
    ("q062", 27.4, 28, 1.5, 50, "lower", 0.01,
     "Fifty measurements give $\\bar{x} = 27.4$ with $\\sigma = 1.5$. Test $H_0\\colon\\ \\mu = 28$ against $H_1\\colon\\ \\mu < 28$ at the $1\\%$ level with full working."),
    ("q063", 94.8, 95, 3, 64, "two", 0.05,
     "Sixty-four items have mean $94.8$ with $\\sigma = 3$. Test $H_0\\colon\\ \\mu = 95$ against $H_1\\colon\\ \\mu \\ne 95$ at $5\\%$. Use both the critical value and p-value methods and confirm they agree."),
    ("q064", 72.3, 70, 4, 25, "upper", 0.10,
     "Twenty-five patients have mean recovery time $72.3$ days with $\\sigma = 4$ days. The standard treatment mean is $70$ days. Test at the $10\\%$ level whether the new treatment increases recovery time."),
    ("q065", 48.9, 50, 6, 20, "lower", 0.05,
     "A sample of $20$ gives $\\bar{x} = 48.9$ with $\\sigma = 6$. A manager claims the process mean is at least $50$. Test this claim at the $5\\%$ level."),
    ("q066", 115.2, 110, 10, 16, "upper", 0.05,
     "Sixteen samples have mean $115.2$ with $\\sigma = 10$. Test $H_0\\colon\\ \\mu = 110$ against $H_1\\colon\\ \\mu > 110$ at $5\\%$. Find the test statistic, critical value, p-value, and conclusion."),
    ("q067", 21.5, 22, 2.5, 30, "two", 0.01,
     "Thirty observations give $\\bar{x} = 21.5$ with $\\sigma = 2.5$. Test $H_0\\colon\\ \\mu = 22$ against $H_1\\colon\\ \\mu \\ne 22$ at the $1\\%$ level."),
    ("q068", 38.2, 40, 5, 49, "lower", 0.05,
     "Forty-nine trials give mean $38.2$ with $\\sigma = 5$. A coach claims athletes meet a target of $40$. Test at $5\\%$ whether the target is being met."),
    ("q069", 56.4, 54, 7, 24, "upper", 0.05,
     "Twenty-four readings have mean $56.4$ with $\\sigma = 7$. Test whether the population mean exceeds $54$ at the $5\\%$ level, stating all stages of the hypothesis test."),
    ("q070", 99.1, 100, 4, 100, "two", 0.05,
     "One hundred measurements give $\\bar{x} = 99.1$ with $\\sigma = 4$. (a) State the distribution of $\\bar{X}$ under $H_0\\colon\\ \\mu = 100$. (b) Test $H_1\\colon\\ \\mu \\ne 100$ at $5\\%$. (c) Explain why a large sample makes small departures from $H_0$ detectable."),
]

for qid, xbar, mu0, sigma, n, tail, alpha, text in hard_tests:
    z = z_stat(xbar, mu0, sigma, n)
    se_v = se(sigma, n)
    if tail == "upper":
        zc = Z_CRIT[(alpha, "upper")]
        reject = z > zc
        pval = 1 - phi(z)
        h1 = f"H_1\\colon\\ \\mu > {mu0}"
    elif tail == "lower":
        zc = Z_CRIT[(alpha, "lower")]
        reject = z < zc
        pval = phi(z)
        h1 = f"H_1\\colon\\ \\mu < {mu0}"
    else:
        zc = Z_CRIT[(alpha, "two")]
        reject = abs(z) > zc
        pval = 2 * (1 - phi(abs(z)))
        h1 = f"H_1\\colon\\ \\mu \\ne {mu0}"

    if tail == "upper":
        crit_text = f"z_{{\\text{{crit}}}} = {zc} \\text{{ (reject if }} z > z_{{\\text{{crit}}}})"
    elif tail == "lower":
        crit_text = f"z_{{\\text{{crit}}}} = {zc} \\text{{ (reject if }} z < z_{{\\text{{crit}}}})"
    else:
        crit_text = f"z_{{\\text{{crit}}}} = \\pm {zc} \\text{{ (reject if }} |z| > {zc})"

    sigma_sq = sigma ** 2
    dist_latex = f"\\bar{{X}} \\sim N\\!\\left({mu0},\\ \\dfrac{{{sigma_sq}}}{{{n}}}\\right) \\Rightarrow \\bar{{X}} \\sim N({mu0},\\ {se_v:.4g}^2)"

    steps = [
        step(1, "Define the parameter and state the hypotheses",
             f"\\mu = \\text{{population mean}}; \\quad H_0\\colon\\ \\mu = {mu0}, \\quad {h1}",
             "We begin by naming the parameter and writing the null and alternative hypotheses."),
        step(2, "State the distribution of $\\bar{X}$ under $H_0$", dist_latex,
             f"Under $H_0$, the sample mean is normally distributed with mean ${mu0}$ and standard error ${se_v:.4g}$."),
        step(3, "State the test statistic", "z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}",
             "We standardise the sample mean to compare with tabulated critical values."),
        step(4, "Calculate the test statistic", f"z = \\dfrac{{{xbar} - {mu0}}}{{{se_v:.4g}}} = {z:.4f}",
             f"The observed sample mean gives $z = {z:.4f}$."),
        step(5, "State the critical value at the given significance level", crit_text,
             f"At the ${int(alpha*100)}\\%$ level, the critical value is ${zc}$."),
        step(6, "Compare with the critical value",
             f"z = {z:.4f}" + (f" {'>' if reject else '≤'} {zc}" if tail != "two" else f",\\ |z| = {abs(z):.4f} {'>' if reject else '≤'} {zc}"),
             f"The test statistic {'is' if reject else 'is not'} in the critical region."),
        step(7, "Calculate the p-value", f"p = {fmt4(pval)}",
             f"The p-value is ${fmt4(pval)}$."),
        step(8, "Compare p-value with $\\alpha$", f"p = {fmt4(pval)} {'<' if reject else '≥'} {alpha}",
             f"Both methods {'agree' if True else 'disagree'}: we {'reject' if reject else 'do not reject'} $H_0$."),
        step(9, "State the statistical decision", f"\\text{{{decision_label(reject)}}}\\ H_0 \\text{{ at the {int(alpha*100)}\\% level}}",
             f"At the ${int(alpha*100)}\\%$ significance level, we {'reject' if reject else 'do not reject'} the null hypothesis."),
        step(10, "Write the conclusion in context",
             f"\\text{{There is {'sufficient' if reject else 'insufficient'} evidence at the {int(alpha*100)}\\% level}}",
             f"{'The data suggest the population mean differs from the claimed value in the direction of $H_1$.' if reject else 'The data do not provide enough evidence to overturn the null hypothesis.'}"),
        step(11, "Interpret the practical significance",
             f"\\bar{{x}} = {xbar}, \\quad \\mu_0 = {mu0}, \\quad \\text{{difference}} = {xbar - mu0:.4g}",
             f"The sample mean differs from $\\mu_0$ by ${abs(xbar - mu0):.4g}$, which is ${abs(z):.2f}$ standard errors — {'statistically significant' if reject else 'not statistically significant'} at this level."),
        step(12, "Summarise the test outcome",
             f"z = {z:.4f}, \\quad p = {fmt4(pval)}, \\quad \\text{{decision: {'reject' if reject else 'do not reject'}}}\\ H_0",
             "The test statistic, p-value, and decision together provide a complete account of the evidence."),
        step(13, "Note the assumptions", "\\sigma \\text{ known, population normal (or } n \\text{ large)}",
             "This $z$-test requires a known population standard deviation and either a normal population or a large sample."),
    ]
    if qid == "q070":
        steps.append(step(14, "Explain the effect of large $n$",
             f"n = {n} \\Rightarrow \\text{{SE}} = {se_v:.4g}",
             f"With $n = {n}$, the standard error is only ${se_v:.4g}$, so even a small departure of ${abs(xbar - mu0):.4g}$ from $\\mu_0$ can produce a significant result because averaging over many observations reduces random variation."))
        steps.append(step(15, "Connect sample size to test power",
             "\\text{Large } n \\text{ shrinks the standard error, making the test more sensitive}",
             "Larger samples can detect smaller real differences — but this also means trivially small differences may become 'statistically significant' even when practically unimportant."))
        steps.append(step(16, "Final summary",
             f"\\bar{{X}} \\sim N(100,\\ {se_v:.4g}^2);\\ z = {z:.4f};\\ p = {fmt4(pval)};\\ \\text{{{decision_label(reject)}}}\\ H_0",
             "The large sample makes the test sensitive to even small departures from the hypothesised mean."))

    decision = "Reject" if reject else "Do not reject"
    final = f"$z = {fmt4(z)}$, $p = {fmt4(pval)}$; ${decision}$ $H_0$ at the ${int(alpha*100)}\\%$ level."
    questions.append(make_q(qid, "Hard", 7, "written",
        ["hypothesis-test", "full-test", tail + "-tailed", "conclusion"], text, steps, final))

# ── Write TypeScript output ───────────────────────────────────────────────────
assert len(questions) == 70, f"Expected 70 questions, got {len(questions)}"

header = '''import { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 2 Statistics · Hypothesis testing (normal)
 * Tests for the population mean using the sampling distribution of $\\bar{X}$
 * when $\\sigma$ is known: hypotheses, test statistics, critical regions,
 * p-values, and conclusions in context. 70 questions with full worked solutions.
 */
export const questions: Question[] = 
'''

with open(OUT, "w") as f:
    f.write(header)
    f.write(json.dumps(questions, indent=2, ensure_ascii=False))
    f.write(";\n")

# Count difficulties
from collections import Counter
diffs = Counter(q["difficulty"] for q in questions)
print(f"Wrote {len(questions)} questions to {OUT}")
print(f"Difficulties: {dict(diffs)}")
