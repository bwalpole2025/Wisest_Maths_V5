# Part 2 appended to gen script - q058 through q070
from gen_normal_approx_q054_q070 import questions, make_q, step, fmt4, phi, OUT, write_questions_ts
from math import sqrt, comb, ceil
from scipy.stats import norm, binom
import json

# ── q058 Hard: factory defects ────────────────────────────────────────────────
n, p, k = 300, 0.08, 30
mu, sig = n*p, sqrt(n*p*(1-p))
z058 = (k-0.5-mu)/sig
p058 = 1-phi(z058)
questions.append(make_q("q058","Hard",6,"value",
    ["contextual interpretation","quality control","continuity correction","upper tail"],
    "Items from a production line are independently defective with probability $0.08$. A quality inspector checks a random sample of $300$ items. Let $X$ be the number of defective items found. Use a normal approximation with a continuity correction to estimate the probability that at least $30$ items are defective, giving your answer to $4$ significant figures.",
    [
        step(1,"Model the count of defectives","X \\sim B(300,\\ 0.08)","Each item is an independent trial with a fixed defect probability, so the total number of defectives is binomial."),
        step(2,"Verify the approximation conditions","np = 24, \\quad n(1-p) = 276","Both expected counts exceed $5$, so the distribution is not too skewed for a normal model."),
        step(3,"Calculate the mean","\\mu = np = 24","On average we expect $24$ defective items in a sample of $300$."),
        step(4,"Calculate the standard deviation","\\sigma = \\sqrt{24 \\times 0.92} = \\sqrt{22.08} \\approx 4.699","The spread of the distribution is measured by $\\sqrt{np(1-p)}$."),
        step(5,"Write the approximating normal","Y \\sim N(24,\\ 22.08)","We approximate the discrete binomial by this continuous normal."),
        step(6,"Apply continuity correction for 'at least 30'","P(X \\geqslant 30) \\approx P(Y > 29.5)","Including $30$ on the discrete scale means starting just above $29.5$ on the continuous scale."),
        step(7,"Standardise the boundary",f"z = \\dfrac{{29.5 - 24}}{{4.699}} \\approx {z058:.3f}","The value $29.5$ is about $1.17$ standard deviations above the mean."),
        step(8,"Convert to a standard normal upper-tail probability",f"P(Y > 29.5) = 1 - \\Phi({z058:.3f})","We need the area to the right of this $z$-value."),
        step(9,"Evaluate the probability",f"P(X \\geqslant 30) \\approx {fmt4(p058)}","The calculator gives approximately $0.1209$."),
        step(10,"Interpret for the inspector","P(X \\geqslant 30) \\approx 0.121","There is about a $12\\%$ chance of finding at least $30$ defectives — somewhat unusual but not extremely rare."),
        step(11,"Compare with the expected value","30 > \\mu = 24","The threshold of $30$ exceeds the expected count, which is why the probability is below $50\\%$ but not tiny."),
        step(12,"Comment on model validity","np = 24 \\gg 5","With $24$ expected defectives, the normal approximation should be reasonably accurate for this tail probability."),
        step(13,"State the answer",f"P(X \\geqslant 30) \\approx {fmt4(p058)}","The estimated probability is about $0.121$."),
        step(14,"Final contextual conclusion","About 12% of samples of 300 would contain at least 30 defectives under the model.","This helps the inspector judge whether observing 30 or more defectives is within normal sampling variation."),
        step(15,"Summarise the method","Used B(300,0.08) \\approx N(24,22.08) with continuity correction.","The full pipeline — validity check, normal parameters, continuity correction, standardisation — is the standard approach for such quality-control problems."),
    ],
    f"$P(X \\geqslant 30) \\approx {fmt4(p058)}$."
))

# ── q059 Hard: when NOT appropriate ─────────────────────────────────────────
questions.append(make_q("q059","Hard",5,"explanation",
    ["validity conditions","hypothesis-style reasoning","model choice","small p"],
    "A researcher considers using a normal approximation for $X \\sim B(20, 0.05)$, where $X$ is the number of successes in $20$ independent trials. Determine whether the normal approximation is appropriate, giving clear statistical reasoning.",
    [
        step(1,"State the proposed model","X \\sim B(20,\\ 0.05)","The researcher wants to approximate this binomial by a normal distribution."),
        step(2,"Recall the validity conditions","np \\geqslant 5 \\quad \\text{and} \\quad n(1-p) \\geqslant 5","Both expected counts must reach at least $5$ for the binomial histogram to resemble a bell curve."),
        step(3,"Calculate np","np = 20 \\times 0.05 = 1","The expected number of successes is only $1$, which is far below the threshold."),
        step(4,"Calculate n(1-p)","n(1-p) = 20 \\times 0.95 = 19","The expected number of failures is fine, but both conditions must be satisfied."),
        step(5,"Identify the failing condition","np = 1 < 5","The success condition fails because we expect fewer than $5$ successes on average."),
        step(6,"Explain why this matters statistically","\\text{Distribution is highly right-skewed and concentrated at } 0, 1, 2","When $np$ is very small, most probability sits at low values near zero, which cannot be well represented by a symmetric normal curve."),
        step(7,"Consider the shape of the binomial histogram","P(X=0) = 0.95^{20} \\approx 0.358","Over a third of the probability is at $X = 0$ alone, showing the distribution is far from bell-shaped."),
        step(8,"Note the boundary problem","X \\text{ cannot be negative but } N(np, np(1-p)) \\text{ can}","A normal model centred near $1$ would assign appreciable probability to negative values, which is impossible for a count."),
        step(9,"Conclude the approximation is not appropriate","\\text{Normal approximation is NOT appropriate}","Because $np < 5$, the normal approximation should not be used."),
        step(10,"Suggest an alternative approach","\\text{Use exact binomial probabilities or a Poisson approximation if } np \\text{ is small}","For rare events with moderate $n$, exact calculation or $X \\approx Po(np)$ may be more suitable."),
        step(11,"State when it would become valid","\\text{Need } n \\geqslant 100 \\text{ so that } np \\geqslant 5","Increasing the sample size to at least $100$ would give $np = 5$ and make the normal approximation borderline acceptable."),
        step(12,"Distinguish 'can calculate' from 'should use'","\\text{Calculating with normal would give a number, but it would be unreliable}","Even if one could force a normal calculation, the result would not faithfully represent the binomial probabilities."),
        step(13,"Final reasoning summary","np = 1 \\ll 5 \\Rightarrow \\text{ reject normal approximation}","The expected number of successes is the decisive factor here."),
        step(14,"State the conclusion clearly","\\text{No — the normal approximation is not appropriate for } B(20, 0.05).","The researcher should use exact binomial methods instead."),
    ],
    "The normal approximation is **not** appropriate because $np = 1 < 5$; the distribution is too skewed. Use exact binomial probabilities instead."
))

# ── q060 Intermediate: min n for p=0.12 ─────────────────────────────────────
questions.append(make_q("q060","Intermediate",5,"integer",
    ["minimum sample size","validity conditions"],
    "On each trial, an event occurs independently with probability $p = 0.12$. Find the smallest integer $n$ such that $X \\sim B(n, 0.12)$ can be approximated by a normal distribution.",
    [
        step(1,"Write the two validity inequalities","np \\geqslant 5, \\quad n(1-p) \\geqslant 5","Both expected successes and expected failures must be at least $5$."),
        step(2,"Apply the first condition with p = 0.12","n \\times 0.12 \\geqslant 5","This controls whether enough successes are expected."),
        step(3,"Solve for n","n \\geqslant \\dfrac{5}{0.12} = 41.67","The sample size must be at least $41.67$, so we need an integer of at least $42$."),
        step(4,"Apply the second condition","n \\times 0.88 \\geqslant 5","This gives $n \\geqslant 5.68$, a much weaker requirement."),
        step(5,"Select the binding constraint","n \\geqslant 42","The success condition determines the minimum."),
        step(6,"Verify at n = 42","np = 5.04, \\quad n(1-p) = 36.96","Both values exceed $5$, confirming validity."),
        step(7,"Check n = 41 fails","np = 4.92 < 5","One fewer trial leaves the expected successes below $5$."),
        step(8,"State the minimum sample size","n_{\\min} = 42","The smallest valid sample size is $42$."),
        step(9,"Interpret","A sample of at least 42 trials is needed before normal approximation is appropriate.","With $p = 0.12$, the $np$ rule requires a moderately large sample."),
    ],
    "$n_{\\min} = 42$."
))

# ── q061 Hard: compare two scenarios ──────────────────────────────────────────
questions.append(make_q("q061","Hard",6,"explanation",
    ["comparing models","validity conditions","borderline cases"],
    "Two scenarios are proposed for normal approximation: Scenario A has $X \\sim B(80, 0.45)$ and Scenario B has $Y \\sim B(80, 0.05)$. (a) Determine whether each approximation is appropriate. (b) Which scenario would give a more reliable normal approximation? Justify your answer.",
    [
        step(1,"State Scenario A","X \\sim B(80,\\ 0.45)","Scenario A has a nearly balanced success probability."),
        step(2,"Check validity for Scenario A","np = 36, \\quad n(1-p) = 44","Both expected counts are well above $5$, so the normal approximation is appropriate."),
        step(3,"State Scenario B","Y \\sim B(80,\\ 0.05)","Scenario B involves a rare event with small $p$."),
        step(4,"Check np for Scenario B","np = 80 \\times 0.05 = 4","The expected successes are only $4$, which is below $5$."),
        step(5,"Check n(1-p) for Scenario B","n(1-p) = 76","Failures are plentiful, but both conditions must hold."),
        step(6,"Conclude validity for each scenario","\\text{A: appropriate; \\quad B: NOT appropriate}","Only Scenario A satisfies both validity conditions."),
        step(7,"Explain why Scenario A is more symmetric","p = 0.45 \\text{ is close to } 0.5","When $p$ is near $0.5$, the binomial distribution is nearly symmetric, which matches the normal shape well."),
        step(8,"Explain the skewness in Scenario B","p = 0.05 \\Rightarrow \\text{heavy right skew with mode near } 0","Most probability clusters at small counts, far from a bell curve."),
        step(9,"Compare the magnitude of np values","np_A = 36 \\gg np_B = 4","Larger $np$ means more spread and better normal fit."),
        step(10,"Consider which tail would be problematic in B","P(Y = 0) = 0.95^{80} \\approx 0.017","Even if we ignored the rule, the zero-inflation would make normal tail probabilities unreliable."),
        step(11,"Answer part (b)","\\text{Scenario A gives a more reliable approximation}","Scenario A not only passes the validity test but also has a shape much closer to normal."),
        step(12,"Note that B fails before comparing accuracy","\\text{B should not use normal approximation at all}","Reliability comparison is moot for Scenario B because the method is invalid."),
        step(13,"Summarise the comparison","A: \\; np=36,\\; n(1-p)=44 \\;\\Rightarrow\\; \\text{valid and reliable}. \\; B: \\; np=4 \\;\\Rightarrow\\; \\text{invalid}.","The key difference is whether $np$ reaches $5$."),
        step(14,"State final answers","\\text{(a) A: yes; B: no. (b) Scenario A.}","Scenario A is appropriate and far more reliable."),
        step(15,"General principle","\\text{Normal approximation works best when } p \\text{ is near } 0.5 \\text{ and } np, n(1-p) \\text{ are large}","This guides model choice in practice."),
    ],
    "(a) Scenario A: appropriate ($np = 36$, $n(1-p) = 44$). Scenario B: not appropriate ($np = 4 < 5$). (b) Scenario A would give a more reliable approximation."
))

# ── q062 Hard: two probabilities ──────────────────────────────────────────────
n, p = 150, 0.35
mu, sig = n*p, sqrt(n*p*(1-p))
z62a = (45.5-mu)/sig
p62a = phi(z62a)
z62b1, z62b2 = (49.5-mu)/sig, (50.5-mu)/sig
p62b = phi(z62b2)-phi(z62b1)
questions.append(make_q("q062","Hard",8,"value",
    ["multi-part","continuity correction","cumulative and point probability"],
    "In a multiple-choice test with $150$ questions, a student guesses every answer. Each guess has probability $0.35$ of being correct (due to partial knowledge). Let $X$ be the number of correct answers. (a) Use a normal approximation with continuity correction to estimate $P(X \\leqslant 45)$. (b) Estimate $P(X = 50)$. Give both answers to $4$ significant figures.",
    [
        step(1,"Model the number of correct answers","X \\sim B(150,\\ 0.35)","Each question is an independent trial with success probability $0.35$."),
        step(2,"Verify the approximation is valid","np = 52.5, \\quad n(1-p) = 97.5","Both expected counts exceed $5$ comfortably."),
        step(3,"Find the mean and standard deviation","\\mu = 52.5, \\quad \\sigma = \\sqrt{52.5 \\times 0.65} \\approx 5.842","These define the approximating normal $Y \\sim N(52.5, 34.13)$."),
        step(4,"Apply continuity correction for part (a)","P(X \\leqslant 45) \\approx P(Y < 45.5)","The event 'at most $45$' includes $45$, so the upper continuous boundary is $45.5$."),
        step(5,"Standardise for part (a)",f"z = \\dfrac{{45.5 - 52.5}}{{5.842}} \\approx {z62a:.3f}","The boundary lies below the mean, giving a negative $z$-score."),
        step(6,"Evaluate part (a)",f"P(X \\leqslant 45) \\approx \\Phi({z62a:.3f}) = {fmt4(p62a)}","This lower-tail probability is about $0.115$."),
        step(7,"Apply continuity correction for part (b)","P(X = 50) \\approx P(49.5 < Y < 50.5)","A single integer value corresponds to a unit interval on the continuous scale."),
        step(8,"Standardise both boundaries for part (b)",f"z_1 = {z62b1:.3f}, \\quad z_2 = {z62b2:.3f}","Both boundaries are close to the mean, straddling $z = 0$."),
        step(9,"Evaluate part (b) as a difference of cumulative probabilities",f"P(49.5 < Y < 50.5) = {fmt4(p62b)}","The probability of exactly $50$ is approximately $0.0623$."),
        step(10,"Interpret part (a)","P(X \\leqslant 45) \\approx 0.115","There is roughly an $11.5\\%$ chance of scoring $45$ or fewer — below the expected $52.5$."),
        step(11,"Interpret part (b)","P(X = 50) \\approx 0.0623","Scoring exactly $50$ has about a $6.2\\%$ chance, which is plausible near the mean."),
        step(12,"Compare the two probabilities","P(X \\leqslant 45) > P(X = 50)","A cumulative probability over many values naturally exceeds a single-point probability."),
        step(13,"Check plausibility of part (b)","50 \\text{ is close to } \\mu = 52.5","Point probabilities are highest near the mean, so $0.0623$ is reasonable."),
        step(14,"Note the role of continuity correction in part (b)","\\text{Without CC, } P(X=50) \\text{ cannot be approximated directly}","Continuity correction is essential for single-value probabilities."),
        step(15,"State part (a) answer",f"P(X \\leqslant 45) \\approx {fmt4(p62a)}","Part (a) gives approximately $0.115$."),
        step(16,"State part (b) answer",f"P(X = 50) \\approx {fmt4(p62b)}","Part (b) gives approximately $0.0623$."),
        step(17,"Final summary","(a) \\; 0.115, \\quad (b) \\; 0.0623","Both parts use the same normal model but different continuity corrections."),
    ],
    f"(a) $P(X \\leqslant 45) \\approx {fmt4(p62a)}$. (b) $P(X = 50) \\approx {fmt4(p62b)}$."
))

# ── q063 Hard: drug trial ─────────────────────────────────────────────────────
n, p, k = 250, 0.18, 35
mu, sig = n*p, sqrt(n*p*(1-p))
z063 = (k+0.5-mu)/sig
p063 = phi(z063)
questions.append(make_q("q063","Hard",7,"value",
    ["contextual interpretation","hypothesis-style reasoning","multi-part","medical trial"],
    "In a clinical trial, $250$ patients each receive a treatment with an independent $18\\%$ chance of a positive response. Let $X$ be the number of positive responses. (a) Assess whether a normal approximation is reasonable. (b) Estimate $P(X \\leqslant 35)$ using a normal approximation with continuity correction. (c) Interpret your answer in the context of the trial.",
    [
        step(1,"Define the random variable","X \\sim B(250,\\ 0.18)","Each patient is an independent trial with response probability $0.18$."),
        step(2,"Calculate np for part (a)","np = 250 \\times 0.18 = 45","The expected number of positive responses is $45$."),
        step(3,"Calculate n(1-p)","n(1-p) = 205","Expected non-responses also far exceed $5$."),
        step(4,"Conclude the approximation is reasonable","np = 45 \\gg 5 \\Rightarrow \\text{normal approximation is reasonable}","Both validity conditions are met with comfortable margin."),
        step(5,"Find the mean and standard deviation for part (b)","\\mu = 45, \\quad \\sigma = \\sqrt{45 \\times 0.82} \\approx 6.077","These parameters define $Y \\sim N(45, 36.9)$."),
        step(6,"Apply continuity correction","P(X \\leqslant 35) \\approx P(Y < 35.5)","'At most $35$ responses' uses the upper boundary $35.5$."),
        step(7,"Standardise",f"z = \\dfrac{{35.5 - 45}}{{6.077}} \\approx {z063:.3f}","The boundary is about $1.56$ standard deviations below the mean."),
        step(8,"Evaluate the probability",f"P(X \\leqslant 35) \\approx \\Phi({z063:.3f}) = {fmt4(p063)}","The lower-tail probability is approximately $0.0595$."),
        step(9,"Begin interpretation for part (c)","P(X \\leqslant 35) \\approx 0.0595","There is roughly a $6\\%$ chance of observing $35$ or fewer positive responses."),
        step(10,"Compare with the expected value","35 < \\mu = 45","Observing $35$ or fewer would be noticeably below what the model predicts on average."),
        step(11,"Assess whether this would raise concerns","\\text{Unusual but not extremely rare (} p \\approx 6\\%\\text{)}","A result this low might prompt further investigation but would not by itself prove the treatment is ineffective."),
        step(12,"Relate to hypothesis-style thinking","\\text{If 35 responses were observed, it is in the lower tail of the model}","Under the $18\\%$ response model, only about $6\\%$ of trials would yield $35$ or fewer successes."),
        step(13,"Distinguish statistical unusualness from proof","\\text{A low count is evidence to review, not automatic rejection}","The approximation helps quantify how surprising an outcome is, but clinical decisions need more context."),
        step(14,"State part (b) numerically",f"P(X \\leqslant 35) \\approx {fmt4(p063)}","The estimated probability is $0.0595$ to four significant figures."),
        step(15,"Summarise all three parts","\\text{(a) Valid; (b) } 0.0595\\text{; (c) Unusually low but not impossible}","The normal approximation provides a practical way to assess trial outcomes."),
        step(16,"Final answer",f"P(X \\leqslant 35) \\approx {fmt4(p063)}","About $6\\%$ of trials would produce $35$ or fewer positive responses under the model."),
    ],
    f"(a) Yes — $np = 45$ and $n(1-p) = 205$. (b) $P(X \\leqslant 35) \\approx {fmt4(p063)}$. (c) Observing $35$ or fewer responses would be unusually low (about $6\\%$ chance) and may warrant further review."
))

# ── q064 Intermediate: between probability ────────────────────────────────────
n, p, a, b = 180, 0.55, 85, 105
mu, sig = n*p, sqrt(n*p*(1-p))
z64a, z64b = (a-0.5-mu)/sig, (b+0.5-mu)/sig
p64 = phi(z64b)-phi(z64a)
questions.append(make_q("q064","Intermediate",6,"value",
    ["continuity correction","interval probability","between"],
    "A fair-quality coin is biased so that $P(\\text{Head}) = 0.55$. It is flipped $180$ times. Let $X$ be the number of heads. Use a normal approximation with continuity correction to estimate $P(85 \\leqslant X \\leqslant 105)$, giving your answer to $4$ significant figures.",
    [
        step(1,"Identify the model","X \\sim B(180,\\ 0.55)","Each flip is an independent trial with head probability $0.55$."),
        step(2,"Check validity","np = 99, \\quad n(1-p) = 81","Both exceed $5$, so the normal approximation is appropriate."),
        step(3,"Find mean and standard deviation","\\mu = 99, \\quad \\sigma = \\sqrt{99 \\times 0.45} \\approx 6.675","The distribution is centred at $99$ with standard deviation about $6.68$."),
        step(4,"Apply continuity correction to both ends","P(85 \\leqslant X \\leqslant 105) \\approx P(84.5 < Y < 105.5)","Extend half a unit below $85$ and half a unit above $105$ to capture all integers in the range."),
        step(5,"Standardise the lower boundary",f"z_1 = \\dfrac{{84.5 - 99}}{{6.675}} \\approx {z64a:.3f}","The lower end is about $2.17$ standard deviations below the mean."),
        step(6,"Standardise the upper boundary",f"z_2 = \\dfrac{{105.5 - 99}}{{6.675}} \\approx {z64b:.3f}","The upper end is about $0.97$ standard deviations above the mean."),
        step(7,"Calculate the probability as a difference of cumulative values",f"P(84.5 < Y < 105.5) = \\Phi({z64b:.3f}) - \\Phi({z64a:.3f})","We subtract the lower-tail area from the upper one."),
        step(8,"Evaluate",f"P(85 \\leqslant X \\leqslant 105) \\approx {fmt4(p64)}","The probability is approximately $0.820$."),
        step(9,"Check plausibility","85 \\text{ and } 105 \\text{ span the central region around } \\mu = 99","An interval centred roughly on the mean should contain a large proportion of probability."),
        step(10,"State the final answer",f"P(85 \\leqslant X \\leqslant 105) \\approx {fmt4(p64)}","About $82\\%$ of the time the head count falls between $85$ and $105$ inclusive."),
    ],
    f"$P(85 \\leqslant X \\leqslant 105) \\approx {fmt4(p64)}$."
))

# ── q065 Hard: continuity correction error ────────────────────────────────────
n, p, k = 60, 0.5, 25
mu, sig = n*p, sqrt(n*p*(1-p))
exact65 = binom.cdf(k, n, p)
with_cc = phi((k+0.5-mu)/sig)
without_cc = phi((k-mu)/sig)
err_with = abs(exact65-with_cc)
err_without = abs(exact65-without_cc)
questions.append(make_q("q065","Hard",7,"value",
    ["continuity correction error","comparing models","with and without correction"],
    "For $X \\sim B(60, 0.5)$, the exact value of $P(X \\leqslant 25)$ is $0.1225$ (to $4$ s.f.). Find the normal approximations (i) without continuity correction and (ii) with continuity correction. Hence compare the absolute errors and comment on the importance of the continuity correction.",
    [
        step(1,"State the model and given exact value","X \\sim B(60,\\ 0.5), \\quad P(X \\leqslant 25) = 0.1225","We compare two normal approximations against this known exact value."),
        step(2,"Confirm validity","np = n(1-p) = 30","The distribution is perfectly symmetric with large expected counts."),
        step(3,"Find normal parameters","\\mu = 30, \\quad \\sigma = \\sqrt{15} \\approx 3.873","The approximating normal is $Y \\sim N(30, 15)$."),
        step(4,"Approximation without continuity correction","P(X \\leqslant 25) \\approx P(Y \\leqslant 25)","This treats the discrete value $25$ as the continuous boundary $25$ directly."),
        step(5,"Standardise without correction",f"z = \\dfrac{{25 - 30}}{{3.873}} = {((k-mu)/sig):.3f}","This gives $z \\approx -1.291$."),
        step(6,"Evaluate without correction",f"P(Y \\leqslant 25) = \\Phi(-1.291) = {fmt4(without_cc)}","The uncorrected approximation gives about $0.0984$."),
        step(7,"Approximation with continuity correction","P(X \\leqslant 25) \\approx P(Y < 25.5)","The correction shifts the boundary up by $0.5$ to include the integer $25$ properly."),
        step(8,"Standardise with correction",f"z = \\dfrac{{25.5 - 30}}{{3.873}} = {((k+0.5-mu)/sig):.3f}","This gives $z \\approx -1.162$, closer to the centre."),
        step(9,"Evaluate with correction",f"P(Y < 25.5) = \\Phi(-1.162) = {fmt4(with_cc)}","The corrected approximation gives about $0.1226$."),
        step(10,"Calculate absolute error without correction",f"|0.1225 - {fmt4(without_cc)}| = {fmt4(err_without)}","The uncorrected error is about $0.0241$."),
        step(11,"Calculate absolute error with correction",f"|0.1225 - {fmt4(with_cc)}| = {fmt4(err_with)}","The corrected error is only about $0.0001$."),
        step(12,"Compare the errors",f"\\text{{Error without CC}} = {fmt4(err_without)} \\gg \\text{{Error with CC}} = {fmt4(err_with)}","The continuity correction reduces the error by a factor of roughly $240$."),
        step(13,"Explain why correction helps","\\text{Discrete integers occupy unit intervals on the continuous scale}","Without correction, the normal probability misses half the probability mass at the boundary integer."),
        step(14,"Note the direction of the uncorrected error","\\text{Without CC, the approximation underestimates } P(X \\leqslant 25)","The uncorrected boundary $25$ excludes the upper half of the interval at $25$, making the probability too small."),
        step(15,"Conclude on importance","\\text{Continuity correction is essential for accurate approximation}","Even with a valid normal model, omitting the correction can produce substantial errors."),
    ],
    f"Without CC: ${fmt4(without_cc)}$ (error ${fmt4(err_without)}$). With CC: ${fmt4(with_cc)}$ (error ${fmt4(err_with)}$). The continuity correction dramatically improves accuracy."
))

# ── q066 Hard: election polling ───────────────────────────────────────────────
n, p, k = 500, 0.52, 280
mu, sig = n*p, sqrt(n*p*(1-p))
z066 = (k-0.5-mu)/sig
p066 = 1-phi(z066)
questions.append(make_q("q066","Hard",6,"value",
    ["contextual interpretation","election polling","upper-tail probability"],
    "A political analyst models voter support for a candidate as $52\\%$ in the population. In a random sample of $500$ voters, let $X$ be the number who say they support the candidate. Use a normal approximation with continuity correction to estimate the probability that at least $280$ voters in the sample express support, giving your answer to $4$ significant figures.",
    [
        step(1,"Model the sample count","X \\sim B(500,\\ 0.52)","Each voter in the sample is an independent trial with support probability $0.52$."),
        step(2,"Verify the approximation","np = 260, \\quad n(1-p) = 240","Both expected counts are large, so the normal model is appropriate."),
        step(3,"Find the mean and standard deviation","\\mu = 260, \\quad \\sigma = \\sqrt{260 \\times 0.48} \\approx 11.17","The sample count is expected to be near $260$ with spread about $11.2$."),
        step(4,"Apply continuity correction","P(X \\geqslant 280) \\approx P(Y > 279.5)","'At least $280$' begins at integer $280$, which corresponds to just above $279.5$."),
        step(5,"Standardise",f"z = \\dfrac{{279.5 - 260}}{{11.17}} \\approx {z066:.3f}","The boundary is about $1.75$ standard deviations above the mean."),
        step(6,"Evaluate the upper-tail probability",f"P(X \\geqslant 280) \\approx 1 - \\Phi({z066:.3f}) = {fmt4(p066)}","The probability is approximately $0.0404$."),
        step(7,"Interpret for the analyst","P(X \\geqslant 280) \\approx 0.0404","There is only about a $4\\%$ chance of seeing $280$ or more supporters in a sample of $500$."),
        step(8,"Compare 280 with the expected value","280 - 260 = 20 \\text{ above expected}","A sample result of $280$ would be notably above the expected $260$."),
        step(9,"Relate to polling margin","\\text{280/500 = 56\\% support in sample}","This would represent $56\\%$ sample support, $4$ percentage points above the modelled $52\\%$."),
        step(10,"Assess surprise level","p \\approx 4\\% \\Rightarrow \\text{fairly unusual but possible}","Such a sample would be on the high side but not astronomically unlikely."),
        step(11,"Comment on sample size effect","n = 500 \\text{ gives moderate precision}","A larger sample would make deviations from $52\\%$ less likely, sharpening the normal curve."),
        step(12,"Note validity of independence assumption","\\text{Assumes simple random sample}","The binomial model requires independent, identically distributed trials with fixed $p$."),
        step(13,"State the probability",f"P(X \\geqslant 280) \\approx {fmt4(p066)}","The estimated probability is $0.0404$."),
        step(14,"Final contextual answer","\\text{About 4% chance of 280+ supporters in a 500-voter poll if true support is 52%.}","This quantifies how surprising a strong poll result would be."),
    ],
    f"$P(X \\geqslant 280) \\approx {fmt4(p066)}$."
))

# ── q067 Hard: find smallest k ────────────────────────────────────────────────
n, p = 200, 0.3
mu, sig = n*p, sqrt(n*p*(1-p))
z_crit = norm.ppf(0.95)
k_boundary = mu + z_crit*sig + 0.5
k_ans = 72
p71 = 1-phi((71-0.5-mu)/sig)
p72 = 1-phi((72-0.5-mu)/sig)
questions.append(make_q("q067","Hard",7,"integer",
    ["critical value","minimum sample size","upper tail","inverse normal"],
    "Let $X \\sim B(200, 0.3)$. Using a normal approximation with continuity correction, find the smallest integer $k$ such that $P(X \\geqslant k) \\leqslant 0.05$.",
    [
        step(1,"State the model and target","X \\sim B(200,\\ 0.3), \\quad \\text{find smallest } k \\text{ with } P(X \\geqslant k) \\leqslant 0.05","We need the smallest integer in the upper tail containing at most $5\\%$ of probability."),
        step(2,"Verify the approximation is valid","np = 60, \\quad n(1-p) = 140","Both conditions are met."),
        step(3,"Find the normal parameters","\\mu = 60, \\quad \\sigma = \\sqrt{42} \\approx 6.481","The approximating normal is $Y \\sim N(60, 42)$."),
        step(4,"Set up the inequality with continuity correction","P(X \\geqslant k) \\approx P(Y > k - 0.5) \\leqslant 0.05","The corrected boundary for 'at least $k$' is $k - 0.5$."),
        step(5,"Standardise the inequality","P\\!\\left(Z > \\dfrac{k - 0.5 - 60}{6.481}\\right) \\leqslant 0.05","This converts the problem to a standard normal upper-tail question."),
        step(6,"Find the critical z-value","z_{0.95} = 1.645","Since $P(Z > z) = 0.05$, we need $P(Z \\leqslant z) = 0.95$, giving $z = 1.645$."),
        step(7,"Set up the equation for the boundary",f"\\dfrac{{k - 0.5 - 60}}{{6.481}} = 1.645","The boundary sits at the $95$th percentile of the normal."),
        step(8,"Solve for k - 0.5",f"k - 0.5 = 60 + 1.645 \\times 6.481 = {mu + z_crit*sig:.2f}","The continuous boundary is at approximately $70.66$."),
        step(9,"Solve for k",f"k = {k_boundary:.2f}","This gives $k \\approx 71.16$, so $k$ must be an integer at least $72$."),
        step(10,"Check k = 71",f"P(X \\geqslant 71) \\approx 1 - \\Phi\\!\\left(\\dfrac{{70.5-60}}{{6.481}}\\right) = {fmt4(p71)}","At $k = 71$, the probability is about $0.0526$, which exceeds $0.05$."),
        step(11,"Check k = 72",f"P(X \\geqslant 72) \\approx 1 - \\Phi\\!\\left(\\dfrac{{71.5-60}}{{6.481}}\\right) = {fmt4(p72)}","At $k = 72$, the probability is about $0.0380$, which is below $0.05$."),
        step(12,"Identify the smallest valid k","k = 72","Since $k = 71$ gives too much probability, the smallest integer satisfying the inequality is $72$."),
        step(13,"Interpret","P(X \\geqslant 72) \\leqslant 0.05","Values of $X$ of $72$ or more are in the upper $5\\%$ tail of the distribution."),
        step(14,"Verify plausibility","72 > \\mu = 60","The cutoff is above the mean, as expected for an upper-tail threshold."),
        step(15,"State the answer","k = 72","The smallest integer $k$ is $72$."),
    ],
    "$k = 72$."
))

# ── q068 Intermediate: basketball ─────────────────────────────────────────────
n, p, k = 80, 0.75, 65
mu, sig = n*p, sqrt(n*p*(1-p))
z068 = (k-0.5-mu)/sig
p068 = 1-phi(z068)
questions.append(make_q("q068","Intermediate",5,"value",
    ["contextual interpretation","upper-tail probability","continuity correction"],
    "A basketball player attempts $80$ free throws. Historically she scores $75\\%$ of free throws, and each attempt is independent. Let $X$ be the number of successful throws. Use a normal approximation with continuity correction to estimate $P(X > 65)$, giving your answer to $4$ significant figures.",
    [
        step(1,"Model the number of successes","X \\sim B(80,\\ 0.75)","Each free throw is an independent trial with success probability $0.75$."),
        step(2,"Check validity","np = 60, \\quad n(1-p) = 20","Both exceed $5$, so the normal approximation is valid."),
        step(3,"Find mean and standard deviation","\\mu = 60, \\quad \\sigma = \\sqrt{15} \\approx 3.873","The player is expected to make about $60$ of the $80$ throws."),
        step(4,"Apply continuity correction for P(X > 65)","P(X > 65) = P(X \\geqslant 66) \\approx P(Y > 65.5)","Strictly greater than $65$ means at least $66$, which starts above $65.5$."),
        step(5,"Standardise",f"z = \\dfrac{{65.5 - 60}}{{3.873}} \\approx {z068:.3f}","The boundary is about $1.16$ standard deviations above the mean."),
        step(6,"Evaluate the upper-tail probability",f"P(X > 65) \\approx 1 - \\Phi({z068:.3f}) = {fmt4(p068)}","The probability is approximately $0.1226$."),
        step(7,"Interpret in context","P(X > 65) \\approx 0.123","There is about a $12.3\\%$ chance of making more than $65$ free throws."),
        step(8,"Compare with expected performance","65 > \\mu = 60","Scoring more than $65$ out of $80$ would be above average but not extraordinary."),
        step(9,"Assess reasonableness","0.123 \\text{ is modest but not negligible}","A result above $65$ is somewhat better than expected but occurs in roughly one in eight samples."),
        step(10,"State the final answer",f"P(X > 65) \\approx {fmt4(p068)}","The estimated probability is $0.1226$."),
    ],
    f"$P(X > 65) \\approx {fmt4(p068)}$."
))

# ── q069 Hard: borderline validity rare event ─────────────────────────────────
n, p, k = 400, 0.02, 12
mu, sig = n*p, sqrt(n*p*(1-p))
z069 = (k-0.5-mu)/sig
p069 = 1-phi(z069)
questions.append(make_q("q069","Hard",7,"value",
    ["borderline validity","model choice","rare events","hypothesis-style reasoning"],
    "A rare medical condition affects $2\\%$ of the population. In a sample of $400$ patients, let $X$ be the number with the condition. (a) Verify that the normal approximation conditions are met. (b) Estimate $P(X \\geqslant 12)$ using a normal approximation with continuity correction. (c) Explain why the approximation may still be less reliable than in a case with $p = 0.5$, even though the conditions are met.",
    [
        step(1,"Define the model","X \\sim B(400,\\ 0.02)","Each patient is an independent trial with condition probability $0.02$."),
        step(2,"Calculate np","np = 400 \\times 0.02 = 8","The expected count is $8$, which just exceeds the threshold of $5$."),
        step(3,"Calculate n(1-p)","n(1-p) = 392","Expected non-cases are plentiful."),
        step(4,"Conclude conditions are met for part (a)","np = 8 \\geqslant 5 \\text{ and } n(1-p) = 392 \\geqslant 5","The formal conditions are satisfied, albeit only just for $np$."),
        step(5,"Find normal parameters for part (b)","\\mu = 8, \\quad \\sigma = \\sqrt{7.84} = 2.8","The approximating normal is $Y \\sim N(8, 7.84)$."),
        step(6,"Apply continuity correction","P(X \\geqslant 12) \\approx P(Y > 11.5)","The event starts at integer $12$, giving boundary $11.5$."),
        step(7,"Standardise",f"z = \\dfrac{{11.5 - 8}}{{2.8}} = {z069:.3f}","The boundary is $1.25$ standard deviations above the mean."),
        step(8,"Evaluate part (b)",f"P(X \\geqslant 12) \\approx 1 - \\Phi(1.25) = {fmt4(p069)}","The estimated probability is about $0.106$."),
        step(9,"Begin part (c): note borderline np","np = 8 \\text{ is only slightly above } 5","Meeting the rule barely does not guarantee excellent accuracy."),
        step(10,"Discuss skewness when p is small","p = 0.02 \\Rightarrow \\text{right-skewed distribution}","The histogram has a long tail to the right and a steep rise near zero, unlike a symmetric normal."),
        step(11,"Compare with p = 0.5 case","\\text{At } p = 0.5, \\text{ the binomial is symmetric and } np \\text{ is maximised for fixed } n","A balanced probability produces the most bell-shaped binomial distribution."),
        step(12,"Note the relative size of np and n(1-p)","np = 8 \\ll n(1-p) = 392","The huge imbalance means the distribution is far from symmetric even though $np \\geqslant 5$."),
        step(13,"Mention practical guidance","\\text{Many statisticians prefer } np \\geqslant 10 \\text{ for better accuracy}","The $np \\geqslant 5$ rule is a minimum, not a guarantee of high precision."),
        step(14,"Conclude part (c)","\\text{Conditions met, but approximation less reliable than for } p \\approx 0.5","The formal validity check passes, but the small $p$ and borderline $np$ make the normal fit weaker."),
        step(15,"State part (b) answer",f"P(X \\geqslant 12) \\approx {fmt4(p069)}","The estimated probability is $0.106$."),
        step(16,"Summarise all parts","\\text{(a) Valid; (b) } 0.106\\text{; (c) Less reliable due to small } p \\text{ and borderline } np","Formal validity does not always mean excellent approximation quality."),
    ],
    f"(a) $np = 8 \\geqslant 5$ and $n(1-p) = 392 \\geqslant 5$. (b) $P(X \\geqslant 12) \\approx {fmt4(p069)}$. (c) Although valid, the small $p$ and borderline $np$ mean the distribution is still skewed and the approximation is less reliable than when $p \\approx 0.5$."
))

# ── q070 Hard: comprehensive 4-part ─────────────────────────────────────────
n, p = 320, 0.06
mu, sig = n*p, sqrt(n*p*(1-p))
z70b = (15.5-mu)/sig
p70b = phi(z70b)
z70c1, z70c2 = (15.5-mu)/sig, (25.5-mu)/sig
p70c = phi(z70c2)-phi(z70c1)
z70d = (29.5-mu)/sig
p70d = 1-phi(z70d)
questions.append(make_q("q070","Hard",10,"value",
    ["multi-part exam","contextual interpretation","comprehensive","quality control"],
    "A production line produces items independently defective with probability $0.06$. A random sample of $320$ items is inspected. Let $X$ be the number of defective items.\\\\(a) Show that a normal approximation to $X$ is appropriate.\\\\(b) Estimate $P(X \\leqslant 15)$ using a normal approximation with continuity correction.\\\\(c) Estimate $P(16 \\leqslant X \\leqslant 25)$.\\\\(d) The inspector says that finding more than $30$ defective items would be very surprising. Use your approximation to assess this claim. Give all probabilities to $4$ significant figures.",
    [
        step(1,"Model the defect count","X \\sim B(320,\\ 0.06)","Each item is an independent trial with defect probability $0.06$."),
        step(2,"Part (a): calculate np","np = 320 \\times 0.06 = 19.2","Expected defects are $19.2$, well above $5$."),
        step(3,"Part (a): calculate n(1-p)","n(1-p) = 300.8","Expected good items also far exceed $5$."),
        step(4,"Part (a): conclude","np \\geqslant 5, \\; n(1-p) \\geqslant 5 \\Rightarrow \\text{normal approximation appropriate}","Both validity conditions are satisfied."),
        step(5,"Find normal parameters","\\mu = 19.2, \\quad \\sigma = \\sqrt{18.048} \\approx 4.248","These apply to all subsequent parts."),
        step(6,"Part (b): apply continuity correction","P(X \\leqslant 15) \\approx P(Y < 15.5)","'At most $15$' uses upper boundary $15.5$."),
        step(7,"Part (b): standardise and evaluate",f"z = \\dfrac{{15.5 - 19.2}}{{4.248}} = {z70b:.3f}, \\quad P(X \\leqslant 15) \\approx {fmt4(p70b)}","The probability is about $0.192$."),
        step(8,"Part (c): apply continuity correction to both ends","P(16 \\leqslant X \\leqslant 25) \\approx P(15.5 < Y < 25.5)","Extend half a unit beyond each endpoint."),
        step(9,"Part (c): standardise and evaluate",f"z_1 = {z70c1:.3f}, \\; z_2 = {z70c2:.3f}, \\quad P(16 \\leqslant X \\leqslant 25) \\approx {fmt4(p70c)}","The interval probability is about $0.739$."),
        step(10,"Part (d): set up the probability","P(X > 30) \\approx P(Y > 29.5)","'More than $30$' means at least $31$, starting above $29.5$."),
        step(11,"Part (d): standardise",f"z = \\dfrac{{29.5 - 19.2}}{{4.248}} = {z70d:.3f}","The boundary is about $2.42$ standard deviations above the mean."),
        step(12,"Part (d): evaluate",f"P(X > 30) \\approx 1 - \\Phi({z70d:.3f}) = {fmt4(p70d)}","The probability is about $0.00766$, less than $1\\%$."),
        step(13,"Part (d): assess the inspector's claim","P(X > 30) \\approx 0.00766 < 0.01","Finding more than $30$ defectives would indeed be very surprising — less than a $1\\%$ chance."),
        step(14,"Compare 30 with the mean","30 - 19.2 = 10.8 \\text{ above expected}","This is a large deviation relative to $\\sigma \\approx 4.25$."),
        step(15,"Summarise part (b)","P(X \\leqslant 15) \\approx 0.192","About $19\\%$ of samples would have at most $15$ defectives."),
        step(16,"Summarise part (c)","P(16 \\leqslant X \\leqslant 25) \\approx 0.739","About $74\\%$ of samples fall in the 'normal range' of $16$ to $25$ defectives."),
        step(17,"Link parts (b), (c) and (d)","\\text{Most probability is near } \\mu = 19.2\\text{; tails are unlikely}","The three parts together describe the expected sampling distribution."),
        step(18,"Final comprehensive answer","\\text{(b) } 0.192; \\text{ (c) } 0.739; \\text{ (d) Yes — } p < 1\\%","The inspector's claim is supported by the approximation."),
    ],
    f"(a) $np = 19.2$ and $n(1-p) = 300.8$. (b) $P(X \\leqslant 15) \\approx {fmt4(p70b)}$. (c) $P(16 \\leqslant X \\leqslant 25) \\approx {fmt4(p70c)}$. (d) $P(X > 30) \\approx {fmt4(p70d)}$; yes, finding more than $30$ defectives would be very surprising ($< 1\\%$ chance)."
))

write_questions_ts(
    OUT,
    questions,
    batch_label="Normal approximation to binomial q054–q070",
)
print(f"Wrote {len(questions)} questions")
