import type { Question } from "@/lib/types";

/**
 * A-Level Maths · Year 1 Statistics · Hypothesis testing
 * Binomial hypothesis tests: null/alternative hypotheses, one- and two-tailed
 * tests, the p-value and critical-region methods, actual significance level,
 * and conclusions in context. 70 questions with full worked solutions.
 */
export const questions: Question[] = [
  {
    "id": "al.y1.stats.hypothesis-testing.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "null-hypothesis",
      "coin"
    ],
    "questionText": "A student wants to test whether a coin is biased towards heads. She will flip the coin $20$ times and record the number of heads. Let $p$ be the probability that the coin lands on heads. (a) Explain what is meant by a null hypothesis and an alternative hypothesis. (b) Write down suitable hypotheses $H_0$ and $H_1$ for her test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parameter being tested",
          "workingLatex": "p = P(\\text{coin lands heads})",
          "explanation": "A hypothesis test about a binomial situation is always a test about the unknown proportion $p$, so we first name exactly what $p$ stands for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the null hypothesis",
          "workingLatex": "H_0{:}\\ \\text{the assumed (no-change) value of } p",
          "explanation": "The null hypothesis is the 'nothing unusual' starting point that we assume to be true; here it is the value $p$ would take if the coin were fair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Explain the alternative hypothesis",
          "workingLatex": "H_1{:}\\ \\text{what we suspect is true instead}",
          "explanation": "The alternative hypothesis states the change we are looking for evidence of. We only abandon $H_0$ in its favour if the data are surprising enough.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the fair-coin value",
          "workingLatex": "\\text{A fair coin has } p = 0.5",
          "explanation": "'Fair' means heads and tails are equally likely, which fixes the assumed value used in $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.5",
          "explanation": "We assume the coin is fair unless the evidence forces us to think otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p > 0.5",
          "explanation": "'Biased towards heads' means heads should appear more often than for a fair coin, so we suspect $p$ is greater than $0.5$ — a one-tailed alternative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the completed hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p > 0.5",
          "explanation": "These two statements set up the whole test: assume fairness, and look for evidence of a bias towards heads.",
          "diagram": null
        }
      ],
      "finalAnswer": "The null hypothesis $H_0$ is the assumed 'no change' value we test, and the alternative $H_1$ is the change we seek evidence for. Here $H_0{:}\\ p = 0.5$ and $H_1{:}\\ p > 0.5$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "germination"
    ],
    "questionText": "A seed supplier states that $45\\%$ of its wildflower seeds germinate. A gardener believes the true germination rate is lower than this. He plants a random sample of $30$ seeds and records how many germinate. State suitable null and alternative hypotheses for a test of the gardener's belief, and state whether the test is one-tailed or two-tailed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of seeds that germinate}",
          "explanation": "The claim and the gardener's doubt are both about the overall germination rate, so $p$ is the population proportion the test concerns.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the claimed value",
          "workingLatex": "p_0 = 0.45",
          "explanation": "The supplier's stated figure of $45\\%$ is the value we assume true unless the data suggest otherwise.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.45",
          "explanation": "The null keeps the supplier's claim; a test always begins by assuming the stated value holds.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the gardener's belief",
          "workingLatex": "\\text{'lower than' } \\Rightarrow p < 0.45",
          "explanation": "The gardener suspects the rate is below the claim, and 'lower' points in one direction only.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p < 0.45",
          "explanation": "The alternative captures exactly what he suspects: a germination proportion smaller than $0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed test (lower tail)}",
          "explanation": "Because $H_1$ specifies a single direction ($p < 0.45$), we only look for evidence in the lower tail, making this a one-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "H_0{:}\\ p = 0.45,\\quad H_1{:}\\ p < 0.45 \\quad (\\text{one-tailed})",
          "explanation": "These hypotheses and the one-tailed direction fully set up the gardener's test.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.45$ and $H_1{:}\\ p < 0.45$. Since $H_1$ specifies a single direction (lower), the test is one-tailed."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "defect-rate"
    ],
    "questionText": "A machine produces electronic components, and in the past $8\\%$ have been defective. After the machine is serviced, a quality manager takes a random sample of $50$ components to test whether the proportion of defective components has changed. (a) State, with a reason, whether the manager should use a one-tailed or a two-tailed test. (b) Write down suitable null and alternative hypotheses.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of defective components}",
          "explanation": "The test is about the defect rate produced by the machine, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the key word in the question",
          "workingLatex": "\\text{key word: 'changed'}",
          "explanation": "The direction of the test comes entirely from the wording. 'Changed' is the crucial word to notice here.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Interpret the direction",
          "workingLatex": "\\text{'changed'} \\Rightarrow p \\text{ could be higher or lower}",
          "explanation": "'Changed' does not say increased or decreased, so a difference in either direction counts as evidence.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide the type of test",
          "workingLatex": "\\text{Two-tailed test}",
          "explanation": "Because we care about departures in both directions, we must examine both tails, which makes the test two-tailed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.08",
          "explanation": "The null assumes the defect rate is unchanged from its past value of $8\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p \\ne 0.08",
          "explanation": "'Not equal to' allows the true rate to be either above or below $0.08$, matching a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "\\text{Two-tailed: } H_0{:}\\ p = 0.08,\\ H_1{:}\\ p \\ne 0.08",
          "explanation": "The word 'changed' with no direction is what makes this a two-tailed test with a $\\ne$ alternative.",
          "diagram": null
        }
      ],
      "finalAnswer": "A two-tailed test is needed, because 'changed' allows the defect rate to increase or decrease. The hypotheses are $H_0{:}\\ p = 0.08$ and $H_1{:}\\ p \\ne 0.08$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "critical-region",
      "one-tailed"
    ],
    "questionText": "A basketball player has historically made $60\\%$ of her free throws. After extra practice, her coach believes she now makes a greater proportion. To test this at the $5\\%$ significance level, she takes $10$ free throws, and $X$ is the number she makes. (a) Write down the distribution of $X$ assuming the null hypothesis is true. (b) Find the critical region for the test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.6 \\qquad H_1{:}\\ p > 0.6",
          "explanation": "Here $p$ is the proportion of free throws she makes. The coach suspects an improvement, so this is a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.6)",
          "explanation": "Assuming $H_0$ is true, the number made out of $10$ independent throws, each with success probability $0.6$, is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify which tail to use",
          "workingLatex": "\\text{Upper tail: reject } H_0 \\text{ for large } x",
          "explanation": "Because $H_1$ is 'greater', only an unusually large number of successes counts as evidence against $H_0$, so we build the critical region in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the rule for the critical region",
          "workingLatex": "\\text{Find the smallest } c \\text{ with } P(X \\ge c) \\le 0.05",
          "explanation": "The critical region is the largest block of high values whose total probability under $H_0$ does not exceed the $5\\%$ significance level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the value x = 9",
          "workingLatex": "P(X \\ge 9) = 0.0464",
          "explanation": "The probability of $9$ or more successes is $0.0464$, which is below $5\\%$, so $9$ can be included in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the value x = 8",
          "workingLatex": "P(X \\ge 8) = 0.1673",
          "explanation": "Extending down to $8$ gives $0.1673$, which is far above $5\\%$, so $8$ is too likely to belong in the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "\\text{Critical region: } X \\ge 9",
          "explanation": "The largest tail with probability at most $5\\%$ is $\\{9, 10\\}$, so the critical value is $9$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0001"
              },
              {
                "x": 1,
                "p": "0.0016"
              },
              {
                "x": 2,
                "p": "0.0106"
              },
              {
                "x": 3,
                "p": "0.0425"
              },
              {
                "x": 4,
                "p": "0.1115"
              },
              {
                "x": 5,
                "p": "0.2007"
              },
              {
                "x": 6,
                "p": "0.2508"
              },
              {
                "x": 7,
                "p": "0.2150"
              },
              {
                "x": 8,
                "p": "0.1209"
              },
              {
                "x": 9,
                "p": "0.0403"
              },
              {
                "x": 10,
                "p": "0.0060"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              9,
              10
            ],
            "caption": "B(10, 0.6): the upper-tail critical region for a 5% one-tailed test",
            "alt": "Bar chart of the binomial distribution B(10, 0.6). The bars rise to a peak near x = 6 and fall away towards the right. The bars at x = 9 and x = 10 are shaded to show the upper-tail critical region."
          }
        },
        {
          "stepNumber": 8,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 9) = 0.0464 \\ (4.64\\%)",
          "explanation": "The true probability of landing in the critical region is $0.0464$, a little below the nominal $5\\%$ because the binomial takes only whole-number values.",
          "diagram": null
        }
      ],
      "finalAnswer": "Under $H_0$, $X \\sim B(10, 0.6)$. The critical region is $X \\ge 9$ (critical value $9$), with actual significance level $P(X \\ge 9) = 0.0464$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "significance-level",
      "two-tailed"
    ],
    "questionText": "In a large town it is claimed that $30\\%$ of adults cycle to work. A councillor suspects the true proportion is different from this and carries out a hypothesis test at the $10\\%$ significance level using a random sample of $25$ adults. (a) State what is meant by the significance level of a test. (b) State suitable hypotheses and say which tail or tails of the distribution should be examined.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of adults who cycle to work}",
          "explanation": "The claim is about the proportion of the town's adults who cycle, so this is what $p$ represents.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the significance level",
          "workingLatex": "\\text{significance level} = P(\\text{reject } H_0 \\mid H_0 \\text{ true})",
          "explanation": "The significance level is the probability of rejecting a true null hypothesis; it is the threshold of 'how surprising' the data must be before we act against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.3",
          "explanation": "The null keeps the claimed value of $30\\%$ as the starting assumption.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret 'different'",
          "workingLatex": "\\text{'different'} \\Rightarrow p \\ne 0.3",
          "explanation": "The councillor allows for the proportion being either higher or lower, so the alternative uses 'not equal to'.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p \\ne 0.3",
          "explanation": "A $\\ne$ alternative signals that evidence could appear in either direction — a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State which tails to examine",
          "workingLatex": "\\text{Both tails, each with } \\tfrac{10\\%}{2} = 5\\%",
          "explanation": "For a two-tailed test the significance level is split equally between the tails, so we examine both, using $5\\%$ in each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "\\text{Two-tailed: } H_0{:}\\ p = 0.3,\\ H_1{:}\\ p \\ne 0.3",
          "explanation": "The word 'different' makes this two-tailed, so both the lower and upper tails are examined at $5\\%$ each.",
          "diagram": null
        }
      ],
      "finalAnswer": "The significance level is the probability of rejecting $H_0$ when it is actually true. The hypotheses are $H_0{:}\\ p = 0.3$, $H_1{:}\\ p \\ne 0.3$; both tails are examined, with $5\\%$ in each."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "critical-region",
      "critical-value"
    ],
    "questionText": "A quality inspector is carrying out a one-tailed binomial hypothesis test at the $5\\%$ significance level, using a test statistic $X \\sim B(n, p_0)$. Explain what is meant by (a) the critical region, (b) the critical value, and (c) the acceptance region.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the set-up",
          "workingLatex": "X \\sim B(n,\\ p_0) \\text{ assuming } H_0 \\text{ is true}",
          "explanation": "Every one of these definitions describes part of the distribution of the test statistic under the null hypothesis, so we start from that model.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Define the critical region",
          "workingLatex": "\\text{Critical region} = \\text{outcomes that lead to rejecting } H_0",
          "explanation": "The critical region is the set of results that would make us reject $H_0$ — the outcomes treated as 'too extreme to be a coincidence'.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Link the critical region to probability",
          "workingLatex": "P(X \\in \\text{critical region} \\mid H_0) \\le 5\\%",
          "explanation": "The region is chosen so that, if $H_0$ really is true, the chance of landing in it is at most the significance level, keeping false rejections rare.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Define the critical value",
          "workingLatex": "\\text{Critical value} = \\text{boundary of the critical region}",
          "explanation": "The critical value is the first value that lies inside the critical region; it marks the cut-off between rejecting and not rejecting $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Define the acceptance region",
          "workingLatex": "\\text{Acceptance region} = \\text{outcomes that do NOT reject } H_0",
          "explanation": "The acceptance region contains the results considered consistent with $H_0$, so an observation there leaves the null hypothesis standing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the two regions are complementary",
          "workingLatex": "\\text{Acceptance region} = \\text{all values not in the critical region}",
          "explanation": "Together the two regions cover every possible value of $X$, so each outcome leads to exactly one decision.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summarise the definitions",
          "workingLatex": "\\text{critical region} \\to \\text{reject}, \\quad \\text{acceptance region} \\to \\text{do not reject}",
          "explanation": "The critical value separates the region where we reject $H_0$ from the region where we do not.",
          "diagram": null
        }
      ],
      "finalAnswer": "The critical region is the set of values of $X$ that lead to rejecting $H_0$ (with total probability under $H_0$ of at most $5\\%$). The critical value is its boundary value, and the acceptance region is all remaining values, which do not lead to rejecting $H_0$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "test-statistic"
    ],
    "questionText": "A gambler suspects that a coin used in a game is biased so that it shows heads more often than it should. He plans to flip it $10$ times and count the number of heads, $X$. Using a $5\\%$ significance level, (a) state suitable null and alternative hypotheses, (b) write down the distribution of $X$ assuming $H_0$ is true, and (c) state which tail of the distribution gives evidence against $H_0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = P(\\text{coin shows heads})",
          "explanation": "The test is about how likely the coin is to land heads, so $p$ is that probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the fair-coin value",
          "workingLatex": "\\text{Fair coin: } p = 0.5",
          "explanation": "A fair coin gives heads half the time, which fixes the value assumed under the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.5",
          "explanation": "We start by assuming the coin is fair and only reject this if the data are surprising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p > 0.5",
          "explanation": "'Heads more often than it should' means the gambler suspects $p$ is larger than $0.5$, giving a one-tailed alternative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "Under $H_0$, the number of heads in $10$ independent flips, each with probability $0.5$, follows this binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the tail giving evidence",
          "workingLatex": "\\text{Upper tail: large values of } X",
          "explanation": "Because $H_1$ is 'greater', only an unusually high number of heads argues against fairness, so we examine the upper tail. The shaded bars show the $5\\%$ upper-tail region.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0010"
              },
              {
                "x": 1,
                "p": "0.0098"
              },
              {
                "x": 2,
                "p": "0.0439"
              },
              {
                "x": 3,
                "p": "0.1172"
              },
              {
                "x": 4,
                "p": "0.2051"
              },
              {
                "x": 5,
                "p": "0.2461"
              },
              {
                "x": 6,
                "p": "0.2051"
              },
              {
                "x": 7,
                "p": "0.1172"
              },
              {
                "x": 8,
                "p": "0.0439"
              },
              {
                "x": 9,
                "p": "0.0098"
              },
              {
                "x": 10,
                "p": "0.0010"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              9,
              10
            ],
            "caption": "B(10, 0.5): the upper-tail region examined in a 5% one-tailed test",
            "alt": "Symmetric bar chart of the binomial distribution B(10, 0.5), peaking at x = 5. The bars at x = 9 and x = 10 are shaded to show the upper-tail region that gives evidence against the null hypothesis."
          }
        },
        {
          "stepNumber": 7,
          "description": "Summarise the set-up",
          "workingLatex": "H_0{:}\\ p = 0.5,\\ H_1{:}\\ p > 0.5,\\ X \\sim B(10, 0.5)",
          "explanation": "With the hypotheses, the test statistic and the upper tail identified, the test is fully set up.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.5$ and $H_1{:}\\ p > 0.5$. Assuming $H_0$, $X \\sim B(10, 0.5)$, and evidence against $H_0$ comes from the upper tail (large numbers of heads)."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "coin"
    ],
    "questionText": "To test whether a coin is fair, a scientist flips it $12$ times and records the number of heads, $X$. She carries out a two-tailed test at the $5\\%$ significance level. (a) State suitable hypotheses. (b) Write down the distribution of $X$ assuming $H_0$ is true. (c) State the significance level used in each tail of the distribution.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = P(\\text{coin shows heads})",
          "explanation": "The question of fairness is a question about the probability of heads, which we call $p$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.5",
          "explanation": "The null assumes the coin is fair, so heads and tails are equally likely.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p \\ne 0.5",
          "explanation": "'Fair or not' means a bias in either direction matters, so the alternative is two-sided ($\\ne$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(12,\\ 0.5)",
          "explanation": "Under $H_0$, the number of heads in $12$ independent fair flips is binomial with $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the significance level",
          "workingLatex": "\\tfrac{5\\%}{2} = 2.5\\% \\text{ in each tail}",
          "explanation": "For a two-tailed test the $5\\%$ is shared equally between the two tails, so each tail is tested at $2.5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify both tails",
          "workingLatex": "\\text{Reject for very small or very large } X",
          "explanation": "Too few heads or too many heads both suggest an unfair coin, so evidence can come from either tail. The shaded bars show both $2.5\\%$ tails.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0002"
              },
              {
                "x": 1,
                "p": "0.0029"
              },
              {
                "x": 2,
                "p": "0.0161"
              },
              {
                "x": 3,
                "p": "0.0537"
              },
              {
                "x": 4,
                "p": "0.1208"
              },
              {
                "x": 5,
                "p": "0.1934"
              },
              {
                "x": 6,
                "p": "0.2256"
              },
              {
                "x": 7,
                "p": "0.1934"
              },
              {
                "x": 8,
                "p": "0.1208"
              },
              {
                "x": 9,
                "p": "0.0537"
              },
              {
                "x": 10,
                "p": "0.0161"
              },
              {
                "x": 11,
                "p": "0.0029"
              },
              {
                "x": 12,
                "p": "0.0002"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1,
              2,
              10,
              11,
              12
            ],
            "caption": "B(12, 0.5): both 2.5% tails examined in a two-tailed test",
            "alt": "Symmetric bar chart of the binomial distribution B(12, 0.5), peaking at x = 6. The bars at x = 0, 1, 2 on the left and x = 10, 11, 12 on the right are shaded to show the two critical tails."
          }
        },
        {
          "stepNumber": 7,
          "description": "Summarise the set-up",
          "workingLatex": "H_0{:}\\ p = 0.5,\\ H_1{:}\\ p \\ne 0.5,\\ 2.5\\% \\text{ per tail}",
          "explanation": "The hypotheses, the binomial model and the split significance level together define the two-tailed test.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.5$ and $H_1{:}\\ p \\ne 0.5$. Assuming $H_0$, $X \\sim B(12, 0.5)$. Each tail is tested at $\\tfrac{5\\%}{2} = 2.5\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "test-statistic",
      "germination"
    ],
    "questionText": "A biologist reads that $70\\%$ of a certain type of frog egg hatches. She wants to test this claim using a random sample of $15$ eggs, letting $X$ be the number that hatch. (a) State what is meant by the test statistic in a hypothesis test. (b) Write down the distribution of the test statistic assuming the null hypothesis is true, explaining why this distribution is used.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of eggs that hatch}",
          "explanation": "The claim is about the hatching rate, so $p$ is the population proportion that hatch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain the test statistic",
          "workingLatex": "X = \\text{number of eggs that hatch in the sample}",
          "explanation": "The test statistic is the quantity we calculate from the sample and then judge for surprise; here it is simply the count of eggs that hatch.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the value assumed by H_0",
          "workingLatex": "H_0{:}\\ p = 0.7",
          "explanation": "To find the distribution of $X$ we must assume a value for $p$, and the null hypothesis supplies the claimed value of $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the distribution under H_0",
          "workingLatex": "X \\sim B(15,\\ 0.7)",
          "explanation": "With $p$ fixed at $0.7$ and $15$ eggs, the count of hatchings follows this binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Justify the binomial model",
          "workingLatex": "n = 15,\\ \\text{two outcomes, independent, constant } p",
          "explanation": "A binomial is appropriate because there is a fixed number of eggs, each either hatches or does not, the eggs are independent, and each has the same probability of hatching.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain 'assuming H_0 is true'",
          "workingLatex": "\\text{assume } H_0 \\Rightarrow \\text{exact distribution known}",
          "explanation": "We deliberately assume $H_0$ so that the probabilities are fully known; we can then check whether the observed data would be surprising under that assumption.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Summarise",
          "workingLatex": "X \\sim B(15, 0.7) \\text{ under } H_0",
          "explanation": "The test statistic $X$ has this known distribution only because we assume the null hypothesis, which is what makes a test possible.",
          "diagram": null
        }
      ],
      "finalAnswer": "The test statistic is the quantity computed from the sample used to make the decision — here $X$, the number of eggs that hatch. Assuming $H_0$ is true ($p = 0.7$), $X \\sim B(15, 0.7)$; this binomial is used because there is a fixed number of independent eggs each with the same hatching probability, and assuming $H_0$ fixes that probability."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "critical-region",
      "one-tailed"
    ],
    "questionText": "At a small pottery, $40\\%$ of hand-finished mugs have historically had a minor glaze flaw. A new glazing method is introduced, and the owner believes it has reduced the proportion of flawed mugs. She inspects a random sample of $10$ mugs, where $X$ is the number with a flaw, and tests at the $5\\%$ significance level. (a) State suitable hypotheses. (b) Find the critical region for the test.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of mugs with a flaw}",
          "explanation": "The test concerns the flaw rate among mugs, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The owner believes the flaw rate has been 'reduced', which points in one direction only, giving a one-tailed lower alternative.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.4)",
          "explanation": "Assuming $H_0$, the number of flawed mugs among $10$ independent mugs, each with flaw probability $0.4$, is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify which tail to use",
          "workingLatex": "\\text{Lower tail: reject } H_0 \\text{ for small } x",
          "explanation": "A reduced flaw rate should show up as an unusually small number of flawed mugs, so the critical region sits in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the rule for the critical region",
          "workingLatex": "\\text{Find the largest } c \\text{ with } P(X \\le c) \\le 0.05",
          "explanation": "The critical region is the biggest block of low values whose combined probability under $H_0$ stays within the $5\\%$ significance level.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the value x = 1",
          "workingLatex": "P(X \\le 1) = 0.0464",
          "explanation": "The probability of at most $1$ flawed mug is $0.0464$, just under $5\\%$, so $\\{0, 1\\}$ can form the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the value x = 2",
          "workingLatex": "P(X \\le 2) = 0.1673",
          "explanation": "Including $2$ raises the total to $0.1673$, well above $5\\%$, so $2$ is too likely to be part of the critical region.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0060"
              },
              {
                "x": 1,
                "p": "0.0403"
              },
              {
                "x": 2,
                "p": "0.1209"
              },
              {
                "x": 3,
                "p": "0.2150"
              },
              {
                "x": 4,
                "p": "0.2508"
              },
              {
                "x": 5,
                "p": "0.2007"
              },
              {
                "x": 6,
                "p": "0.1115"
              },
              {
                "x": 7,
                "p": "0.0425"
              },
              {
                "x": 8,
                "p": "0.0106"
              },
              {
                "x": 9,
                "p": "0.0016"
              },
              {
                "x": 10,
                "p": "0.0001"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1
            ],
            "caption": "B(10, 0.4): the lower-tail critical region for a 5% one-tailed test",
            "alt": "Bar chart of the binomial distribution B(10, 0.4), peaking near x = 4. The bars at x = 0 and x = 1 are shaded to show the lower-tail critical region."
          }
        },
        {
          "stepNumber": 8,
          "description": "State the critical region and actual significance level",
          "workingLatex": "X \\le 1,\\quad P(X \\le 1) = 0.0464",
          "explanation": "The critical region is $\\{0, 1\\}$ with critical value $1$; its true probability, the actual significance level, is $0.0464$ — just below the nominal $5\\%$ because $X$ is discrete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.4$ and $H_1{:}\\ p < 0.4$; under $H_0$, $X \\sim B(10, 0.4)$. The critical region is $X \\le 1$ (critical value $1$), with actual significance level $P(X \\le 1) = 0.0464$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "written",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "significance-level"
    ],
    "questionText": "A national survey reported that $20\\%$ of households own an electric vehicle. A researcher in one city believes the proportion there is not the same as the national figure. She samples $50$ households and carries out a two-tailed test at the $4\\%$ significance level. (a) Write down suitable hypotheses. (b) State the significance level she should use in each tail. (c) If she observes a proportion higher than $20\\%$, state which tail she should examine.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of households owning an electric vehicle}",
          "explanation": "The comparison with the national figure is about the city's ownership proportion, so this is what $p$ means.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the null hypothesis",
          "workingLatex": "H_0{:}\\ p = 0.2",
          "explanation": "The null assumes the city matches the national figure of $20\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the alternative hypothesis",
          "workingLatex": "H_1{:}\\ p \\ne 0.2",
          "explanation": "'Not the same' allows the city proportion to be higher or lower, so the alternative is two-sided.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level",
          "workingLatex": "\\tfrac{4\\%}{2} = 2\\% \\text{ in each tail}",
          "explanation": "For a two-tailed test the $4\\%$ is divided equally, so each tail is tested at $2\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which tail the observation falls in",
          "workingLatex": "\\text{observed proportion} > 0.2 \\Rightarrow \\text{upper tail}",
          "explanation": "A proportion above $0.2$ corresponds to an unusually large count, which lives in the upper tail of the distribution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the comparison to make",
          "workingLatex": "\\text{Compare } P(X \\ge x) \\text{ with } 2\\%",
          "explanation": "Because the result is high, she checks the upper tail: she compares the probability of a count at least as large as observed with the $2\\%$ allocated to that tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "H_0{:}\\ p = 0.2,\\ H_1{:}\\ p \\ne 0.2,\\ 2\\% \\text{ per tail, upper tail}",
          "explanation": "The two-tailed test uses $2\\%$ in each tail, and a high observed proportion means she examines the upper tail.",
          "diagram": null
        }
      ],
      "finalAnswer": "$H_0{:}\\ p = 0.2$ and $H_1{:}\\ p \\ne 0.2$. Each tail is tested at $\\tfrac{4\\%}{2} = 2\\%$. Since the observed proportion is higher than $20\\%$, she examines the upper tail."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "A student suspects that a coin is biased towards heads. She tosses it $10$ times and it lands on heads $8$ times. Test, at the $5\\%$ significance level, whether there is evidence that the coin lands on heads more than half of the time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of tosses that land on heads}",
          "explanation": "The claim is about the coin in general, so $p$ stands for the long-run proportion of tosses that land on heads — the quantity the whole test is about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p > 0.5",
          "explanation": "A fair coin would give $p = 0.5$, which we keep as $H_0$. The student suspects heads is favoured, so the alternative is $p > 0.5$: this makes it a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "If $H_0$ is true, each of the $10$ tosses independently lands on heads with probability $0.5$, so the number of heads follows $B(10,\\ 0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 8",
          "explanation": "We observed $8$ heads. Because $H_1$ points to a large number of heads, evidence against $H_0$ lives in the upper tail, so we work out $P(X \\ge 8)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 8) = 1 - P(X \\le 7)",
          "explanation": "'At least $8$' is the complement of 'at most $7$', and cumulative binomial tables list $P(X \\le 7)$ directly, so this rearrangement is the quick route.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 8) = 1 - 0.9453 = 0.0547",
          "explanation": "Reading $P(X \\le 7) = 0.9453$ from the $B(10,\\ 0.5)$ tables gives the probability of a result at least as extreme as $8$ heads — this probability is the $p$-value.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0010"
              },
              {
                "x": 1,
                "p": "0.0098"
              },
              {
                "x": 2,
                "p": "0.0439"
              },
              {
                "x": 3,
                "p": "0.1172"
              },
              {
                "x": 4,
                "p": "0.2051"
              },
              {
                "x": 5,
                "p": "0.2461"
              },
              {
                "x": 6,
                "p": "0.2051"
              },
              {
                "x": 7,
                "p": "0.1172"
              },
              {
                "x": 8,
                "p": "0.0439"
              },
              {
                "x": 9,
                "p": "0.0098"
              },
              {
                "x": 10,
                "p": "0.0010"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              8,
              9,
              10
            ],
            "caption": "Number of heads under H0; the upper tail from 8 upwards is shaded.",
            "alt": "Bar chart of the binomial distribution B(10, 0.5). The bars for x = 8, 9 and 10 are highlighted, showing the upper-tail region for at least 8 heads."
          }
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.0547 > 0.05",
          "explanation": "The $p$-value $0.0547$ is larger than the $5\\%$ significance level, so a result like this is not surprising when $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: we cannot conclude that the coin lands on heads more than half of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 8) = 0.0547 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the coin lands on heads more than half of the time."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "lower-tail"
    ],
    "questionText": "A cereal company states that $40\\%$ of its boxes contain a collectible token. A shopper believes the true proportion is lower. She buys $12$ boxes and only $1$ contains a token. Test, at the $5\\%$ significance level, whether there is evidence that the proportion of boxes containing a token is less than $40\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of boxes containing a token}",
          "explanation": "The company's claim concerns all of its boxes, so we let $p$ be the proportion of boxes that contain a token — the population proportion under test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The company's figure of $p = 0.4$ becomes $H_0$. The shopper suspects fewer tokens, so the alternative is $p < 0.4$: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.4)",
          "explanation": "Assuming $H_0$, each of the $12$ boxes independently contains a token with probability $0.4$, so the number with tokens follows $B(12,\\ 0.4)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 1",
          "explanation": "We observed just $1$ box with a token. Because $H_1$ points to a small number, the evidence against $H_0$ is in the lower tail, so we find $P(X \\le 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 1) = 0.0196",
          "explanation": "From cumulative tables for $B(12,\\ 0.4)$, $P(X \\le 1) = 0.0196$. This is the probability of a result as low as, or lower than, the one observed — the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the significance level",
          "workingLatex": "0.0196 < 0.05",
          "explanation": "The $p$-value $0.0196$ is smaller than the $5\\%$ significance level, so getting so few tokens would be unlikely if $H_0$ were true.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: fewer than $40\\%$ of the boxes appear to contain a token.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 1) = 0.0196 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that fewer than $40\\%$ of boxes contain a token."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "An archer normally hits the bullseye on $30\\%$ of her shots. After changing her technique she believes she now hits it more often. In her next $8$ shots she hits the bullseye $5$ times. Test, at the $5\\%$ significance level, whether there is evidence that she now hits the bullseye more than $30\\%$ of the time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of shots that hit the bullseye}",
          "explanation": "Her ability is described by a proportion, so let $p$ be the proportion of shots that hit the bullseye — the value the test is about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p > 0.3",
          "explanation": "Her established rate $p = 0.3$ is the null hypothesis. She believes the new technique raises it, so $H_1{:}\\ p > 0.3$: a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(8,\\ 0.3)",
          "explanation": "If $H_0$ holds, each of the $8$ shots hits the bullseye independently with probability $0.3$, so the number of bullseyes follows $B(8,\\ 0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 5",
          "explanation": "She hit $5$ bullseyes. As $H_1$ suggests a higher rate, strong evidence is a large count, so we look at the upper tail $P(X \\ge 5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4)",
          "explanation": "Rewriting 'at least $5$' as $1 - P(X \\le 4)$ lets us use the tabulated cumulative value $P(X \\le 4)$ instead of adding several terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 5) = 1 - 0.9420 = 0.0580",
          "explanation": "With $P(X \\le 4) = 0.9420$ for $B(8,\\ 0.3)$, the upper tail is $0.0580$ — the probability of doing at least as well as observed, i.e. the $p$-value.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0576"
              },
              {
                "x": 1,
                "p": "0.1977"
              },
              {
                "x": 2,
                "p": "0.2965"
              },
              {
                "x": 3,
                "p": "0.2541"
              },
              {
                "x": 4,
                "p": "0.1361"
              },
              {
                "x": 5,
                "p": "0.0467"
              },
              {
                "x": 6,
                "p": "0.0100"
              },
              {
                "x": 7,
                "p": "0.0012"
              },
              {
                "x": 8,
                "p": "0.0001"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              5,
              6,
              7,
              8
            ],
            "caption": "Number of bullseyes under H0; the upper tail from 5 upwards is shaded.",
            "alt": "Bar chart of the binomial distribution B(8, 0.3). The bars for x = 5, 6, 7 and 8 are highlighted, showing the upper-tail region for at least 5 bullseyes."
          }
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.0580 > 0.05",
          "explanation": "The $p$-value $0.0580$ is greater than the $5\\%$ significance level, so a result this good is still reasonably likely if her true rate were only $30\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: we cannot conclude that her bullseye rate has increased above $30\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 5) = 0.0580 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the archer now hits the bullseye more than $30\\%$ of the time."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "lower-tail"
    ],
    "questionText": "A basketball player usually makes $50\\%$ of her free throws. Her coach worries that a recent wrist injury has reduced this. In her next $10$ free throws she makes only $1$. Test, at the $5\\%$ significance level, whether there is evidence that her success rate is now less than $50\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of free throws she makes}",
          "explanation": "Her shooting is summarised by a proportion, so let $p$ be the proportion of free throws she makes — the quantity being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p < 0.5",
          "explanation": "Her usual rate $p = 0.5$ is the null hypothesis. The coach fears the injury has lowered it, so $H_1{:}\\ p < 0.5$: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "Under $H_0$, each of the $10$ free throws is made independently with probability $0.5$, so the number made follows $B(10,\\ 0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 1",
          "explanation": "She made only $1$. Since $H_1$ points to a small number of successes, the evidence against $H_0$ sits in the lower tail $P(X \\le 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 1) = 0.0107",
          "explanation": "From the $B(10,\\ 0.5)$ tables, $P(X \\le 1) = 0.0107$. This is the chance of doing as badly as, or worse than, observed if $H_0$ were true — the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the significance level",
          "workingLatex": "0.0107 < 0.05",
          "explanation": "The $p$-value $0.0107$ is well below the $5\\%$ significance level, so making just $1$ free throw would be very unlikely if her rate were still $50\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: her free-throw success rate appears to have dropped below $50\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 1) = 0.0107 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that the player now makes fewer than $50\\%$ of her free throws."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "In a multiple-choice quiz each question has four options, so a student guessing at random would expect to get $25\\%$ correct. A teacher believes one particular student is doing better than guessing. The student answers $6$ of $12$ questions correctly. Test, at the $5\\%$ significance level, whether there is evidence that the student's success rate is greater than $25\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of questions answered correctly}",
          "explanation": "The student's performance is captured by a proportion, so let $p$ be the proportion of questions answered correctly — the value under test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p > 0.25",
          "explanation": "Pure guessing gives $p = 0.25$, which we keep as $H_0$. The teacher thinks the student does better, so $H_1{:}\\ p > 0.25$: a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.25)",
          "explanation": "If the student were just guessing, each of the $12$ questions is correct independently with probability $0.25$, so the number correct follows $B(12,\\ 0.25)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 6",
          "explanation": "The student got $6$ correct. Because $H_1$ suggests a higher rate, evidence against $H_0$ is a large score, so we examine $P(X \\ge 6)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5)",
          "explanation": "Writing 'at least $6$' as $1 - P(X \\le 5)$ turns the tail into a single tabulated cumulative value, which is far quicker to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 6) = 1 - 0.9456 = 0.0544",
          "explanation": "Using $P(X \\le 5) = 0.9456$ for $B(12,\\ 0.25)$ gives an upper tail of $0.0544$ — the probability of scoring at least $6$ by guessing, i.e. the $p$-value.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0317"
              },
              {
                "x": 1,
                "p": "0.1267"
              },
              {
                "x": 2,
                "p": "0.2323"
              },
              {
                "x": 3,
                "p": "0.2581"
              },
              {
                "x": 4,
                "p": "0.1936"
              },
              {
                "x": 5,
                "p": "0.1032"
              },
              {
                "x": 6,
                "p": "0.0401"
              },
              {
                "x": 7,
                "p": "0.0115"
              },
              {
                "x": 8,
                "p": "0.0024"
              },
              {
                "x": 9,
                "p": "0.0004"
              },
              {
                "x": 10,
                "p": "0.0000"
              },
              {
                "x": 11,
                "p": "0.0000"
              },
              {
                "x": 12,
                "p": "0.0000"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "caption": "Number correct under H0; the upper tail from 6 upwards is shaded.",
            "alt": "Bar chart of the binomial distribution B(12, 0.25). The bars from x = 6 up to x = 12 are highlighted, showing the upper-tail region for at least 6 correct answers."
          }
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.0544 > 0.05",
          "explanation": "The $p$-value $0.0544$ is just above the $5\\%$ significance level, so a score of $6$ is not quite unusual enough to rule out lucky guessing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: we cannot conclude that the student is performing better than random guessing.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 6) = 0.0544 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the student performs better than random guessing."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "lower-tail"
    ],
    "questionText": "A bus company claims that $60\\%$ of its buses arrive on time. A commuter thinks the true proportion is lower. Of the next $9$ buses, only $2$ arrive on time. Test, at the $5\\%$ significance level, whether there is evidence that fewer than $60\\%$ of buses arrive on time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of buses that arrive on time}",
          "explanation": "Punctuality is described by a proportion, so let $p$ be the proportion of buses that arrive on time — the population proportion being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.6 \\qquad H_1{:}\\ p < 0.6",
          "explanation": "The company's claim $p = 0.6$ is the null hypothesis. The commuter suspects it is lower, so $H_1{:}\\ p < 0.6$: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(9,\\ 0.6)",
          "explanation": "Under $H_0$, each of the $9$ buses arrives on time independently with probability $0.6$, so the number on time follows $B(9,\\ 0.6)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 2",
          "explanation": "Only $2$ buses were on time. As $H_1$ points to a small count, the evidence against $H_0$ lies in the lower tail $P(X \\le 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 2) = 0.0250",
          "explanation": "From the $B(9,\\ 0.6)$ tables, $P(X \\le 2) = 0.0250$. This is the probability of seeing as few as, or fewer than, $2$ on-time buses if $H_0$ were true — the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the significance level",
          "workingLatex": "0.0250 < 0.05",
          "explanation": "The $p$-value $0.0250$ is smaller than the $5\\%$ significance level, so only $2$ on-time buses would be unlikely if the true rate were $60\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: fewer than $60\\%$ of the buses appear to arrive on time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 2) = 0.0250 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that fewer than $60\\%$ of the buses arrive on time."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "An email provider claims that $20\\%$ of the messages reaching a user's inbox are spam. The user believes the proportion is higher. Of the next $10$ messages, $5$ are spam. Test, at the $5\\%$ significance level, whether there is evidence that more than $20\\%$ of inbox messages are spam.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of inbox messages that are spam}",
          "explanation": "The claim is about inbox messages in general, so let $p$ be the proportion of inbox messages that are spam — the quantity under test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p > 0.2",
          "explanation": "The provider's figure $p = 0.2$ becomes $H_0$. The user thinks it is higher, so $H_1{:}\\ p > 0.2$: a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "If $H_0$ is true, each of the $10$ messages is spam independently with probability $0.2$, so the number of spam messages follows $B(10,\\ 0.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 5",
          "explanation": "The user found $5$ spam messages. Because $H_1$ points to a higher rate, evidence against $H_0$ is a large count, so we examine $P(X \\ge 5)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4)",
          "explanation": "Rewriting 'at least $5$' as $1 - P(X \\le 4)$ lets us use one tabulated cumulative value rather than summing several probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 5) = 1 - 0.9672 = 0.0328",
          "explanation": "With $P(X \\le 4) = 0.9672$ for $B(10,\\ 0.2)$, the upper tail is $0.0328$ — the probability of at least $5$ spam messages under $H_0$, i.e. the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.0328 < 0.05",
          "explanation": "The $p$-value $0.0328$ is smaller than the $5\\%$ significance level, so seeing $5$ spam messages would be unlikely if the true rate were only $20\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: more than $20\\%$ of the user's inbox messages appear to be spam.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 5) = 0.0328 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that more than $20\\%$ of inbox messages are spam."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "lower-tail"
    ],
    "questionText": "A common cold normally clears within a week for $50\\%$ of patients. A researcher suspects that a new strain clears within a week for a smaller proportion. In a sample of $11$ patients with the new strain, $2$ recover within a week. Test, at the $1\\%$ significance level, whether there is evidence that the proportion recovering within a week is less than $50\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of patients who recover within a week}",
          "explanation": "Recovery is measured by a proportion, so let $p$ be the proportion of patients who recover within a week — the population proportion being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p < 0.5",
          "explanation": "The usual rate $p = 0.5$ is the null hypothesis. The researcher suspects the new strain is worse, so $H_1{:}\\ p < 0.5$: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(11,\\ 0.5)",
          "explanation": "Under $H_0$, each of the $11$ patients recovers within a week independently with probability $0.5$, so the number recovering follows $B(11,\\ 0.5)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 2",
          "explanation": "Only $2$ patients recovered. As $H_1$ points to a small count, the evidence against $H_0$ is in the lower tail $P(X \\le 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 2) = 0.0327",
          "explanation": "From the $B(11,\\ 0.5)$ tables, $P(X \\le 2) = 0.0327$. This is the probability of $2$ or fewer recoveries under $H_0$ — the $p$-value, which we now judge against the strict $1\\%$ level.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0005"
              },
              {
                "x": 1,
                "p": "0.0054"
              },
              {
                "x": 2,
                "p": "0.0269"
              },
              {
                "x": 3,
                "p": "0.0806"
              },
              {
                "x": 4,
                "p": "0.1611"
              },
              {
                "x": 5,
                "p": "0.2256"
              },
              {
                "x": 6,
                "p": "0.2256"
              },
              {
                "x": 7,
                "p": "0.1611"
              },
              {
                "x": 8,
                "p": "0.0806"
              },
              {
                "x": 9,
                "p": "0.0269"
              },
              {
                "x": 10,
                "p": "0.0054"
              },
              {
                "x": 11,
                "p": "0.0005"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1,
              2
            ],
            "caption": "Number recovering under H0; the lower tail up to 2 is shaded.",
            "alt": "Bar chart of the binomial distribution B(11, 0.5). The bars for x = 0, 1 and 2 are highlighted, showing the lower-tail region for at most 2 recoveries."
          }
        },
        {
          "stepNumber": 6,
          "description": "Compare with the significance level",
          "workingLatex": "0.0327 > 0.01",
          "explanation": "The $p$-value $0.0327$ is greater than the $1\\%$ significance level; although it would beat a $5\\%$ test, it is not extreme enough at $1\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $1\\%$ level to reject $H_0$: we cannot conclude that the recovery proportion for the new strain is below $50\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 2) = 0.0327 > 0.01$, so do not reject $H_0$. There is insufficient evidence at the $1\\%$ level that fewer than $50\\%$ of patients with the new strain recover within a week."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "A game spinner is designed to land on red on $40\\%$ of spins. A player suspects it lands on red more often than it should. In $8$ spins it lands on red $6$ times. Test, at the $5\\%$ significance level, whether there is evidence that the spinner lands on red more than $40\\%$ of the time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of spins that land on red}",
          "explanation": "The spinner's behaviour is described by a proportion, so let $p$ be the proportion of spins that land on red — the quantity being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p > 0.4",
          "explanation": "The design value $p = 0.4$ is the null hypothesis. The player suspects red comes up more often, so $H_1{:}\\ p > 0.4$: a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(8,\\ 0.4)",
          "explanation": "If $H_0$ is true, each of the $8$ spins lands on red independently with probability $0.4$, so the number of reds follows $B(8,\\ 0.4)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 6",
          "explanation": "Red appeared $6$ times. Because $H_1$ points to a high count, evidence against $H_0$ is in the upper tail $P(X \\ge 6)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5)",
          "explanation": "Writing 'at least $6$' as $1 - P(X \\le 5)$ replaces a sum of terms with a single tabulated cumulative value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 6) = 1 - 0.9502 = 0.0498",
          "explanation": "With $P(X \\le 5) = 0.9502$ for $B(8,\\ 0.4)$, the upper tail is $0.0498$ — the probability of at least $6$ reds under $H_0$, i.e. the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.0498 < 0.05",
          "explanation": "The $p$-value $0.0498$ is just below the $5\\%$ significance level, so this many reds is (only just) too unlikely to be put down to chance.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the spinner appears to land on red more than $40\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 6) = 0.0498 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that the spinner lands on red more than $40\\%$ of the time."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "lower-tail"
    ],
    "questionText": "A supplier states that $30\\%$ of a certain type of light bulb fail within a year. A shop that has switched to a new supplier believes its failure proportion is lower. In a sample of $10$ bulbs from the new supplier, none fail within a year. Test, at the $5\\%$ significance level, whether there is evidence that fewer than $30\\%$ of the new bulbs fail within a year.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of bulbs that fail within a year}",
          "explanation": "Reliability is described by a proportion, so let $p$ be the proportion of bulbs that fail within a year — the population proportion being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p < 0.3",
          "explanation": "The stated failure rate $p = 0.3$ is the null hypothesis. The shop hopes the new bulbs are better, so $H_1{:}\\ p < 0.3$: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.3)",
          "explanation": "Under $H_0$, each of the $10$ bulbs fails independently with probability $0.3$, so the number failing follows $B(10,\\ 0.3)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 0",
          "explanation": "No bulbs failed, so $x = 0$. As $H_1$ points to few failures, the evidence against $H_0$ is the lower tail, which here is simply $P(X \\le 0) = P(X = 0)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 0) = 0.7^{10} = 0.0282",
          "explanation": "With one term only, $P(X = 0) = 0.7^{10} = 0.0282$ — the probability of seeing zero failures if the true rate were still $30\\%$, i.e. the $p$-value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare with the significance level",
          "workingLatex": "0.0282 < 0.05",
          "explanation": "The $p$-value $0.0282$ is smaller than the $5\\%$ significance level, so getting no failures at all would be unlikely under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: fewer than $30\\%$ of the new supplier's bulbs appear to fail within a year.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 0) = 0.7^{10} = 0.0282 < 0.05$, so reject $H_0$. There is evidence at the $5\\%$ level that fewer than $30\\%$ of the new supplier's bulbs fail within a year."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "upper-tail"
    ],
    "questionText": "A call centre resolves $20\\%$ of customer queries on the first call. After a training course, a manager hopes this proportion has increased. In the next $12$ calls, $4$ are resolved on the first call. Test, at the $10\\%$ significance level, whether there is evidence that the proportion resolved on the first call has increased.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of queries resolved on the first call}",
          "explanation": "Performance is measured by a proportion, so let $p$ be the proportion of queries resolved on the first call — the quantity being tested.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p > 0.2",
          "explanation": "The current rate $p = 0.2$ is the null hypothesis. The manager hopes training raised it, so $H_1{:}\\ p > 0.2$: a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.2)",
          "explanation": "If $H_0$ is true, each of the $12$ calls is resolved first time independently with probability $0.2$, so the number resolved follows $B(12,\\ 0.2)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 4",
          "explanation": "There were $4$ first-call resolutions. Because $H_1$ points to a higher rate, evidence against $H_0$ is in the upper tail $P(X \\ge 4)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 4) = 1 - P(X \\le 3)",
          "explanation": "Writing 'at least $4$' as $1 - P(X \\le 3)$ lets us read a single cumulative value from the tables rather than summing many terms.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 4) = 1 - 0.7946 = 0.2054",
          "explanation": "With $P(X \\le 3) = 0.7946$ for $B(12,\\ 0.2)$, the upper tail is $0.2054$ — the probability of at least $4$ resolutions under $H_0$, i.e. the $p$-value.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0687"
              },
              {
                "x": 1,
                "p": "0.2062"
              },
              {
                "x": 2,
                "p": "0.2835"
              },
              {
                "x": 3,
                "p": "0.2362"
              },
              {
                "x": 4,
                "p": "0.1329"
              },
              {
                "x": 5,
                "p": "0.0532"
              },
              {
                "x": 6,
                "p": "0.0155"
              },
              {
                "x": 7,
                "p": "0.0033"
              },
              {
                "x": 8,
                "p": "0.0005"
              },
              {
                "x": 9,
                "p": "0.0001"
              },
              {
                "x": 10,
                "p": "0.0000"
              },
              {
                "x": 11,
                "p": "0.0000"
              },
              {
                "x": 12,
                "p": "0.0000"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "caption": "Number resolved first time under H0; the upper tail from 4 upwards is shaded.",
            "alt": "Bar chart of the binomial distribution B(12, 0.2). The bars from x = 4 up to x = 12 are highlighted, showing the upper-tail region for at least 4 first-call resolutions."
          }
        },
        {
          "stepNumber": 7,
          "description": "Compare with the significance level",
          "workingLatex": "0.2054 > 0.10",
          "explanation": "The $p$-value $0.2054$ is far greater than the $10\\%$ significance level, so $4$ resolutions is an entirely ordinary result when $H_0$ is true.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level to reject $H_0$: we cannot conclude that the first-call resolution rate has increased.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 4) = 0.2054 > 0.10$, so do not reject $H_0$. There is insufficient evidence at the $10\\%$ level that the first-call resolution rate has increased."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "upper-tail",
      "p-value"
    ],
    "questionText": "An email marketing platform has a long-run click-through rate of $15\\%$. After redesigning its templates, a manager believes the click-through rate has increased. In a random sample of $12$ emails sent with the new template, $5$ were clicked. Test, at the $5\\%$ significance level, whether there is evidence that the click-through rate has increased.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of emails that are clicked}",
          "explanation": "The claim concerns the overall click-through rate, so $p$ is the population proportion of emails that get clicked. Naming it clearly keeps the whole test anchored to one quantity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.15 \\qquad H_1{:}\\ p > 0.15",
          "explanation": "The null hypothesis keeps the established rate of $0.15$. The manager only suspects an increase, so the alternative points one way ($p > 0.15$), making this a one-tailed upper test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.15)",
          "explanation": "Let $X$ be the number of clicked emails out of $12$. If $H_0$ is true and each email is clicked independently with probability $0.15$, then $X$ follows a binomial distribution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{upper tail})",
          "explanation": "We test at the $5\\%$ level. Because $H_1$ says 'greater', evidence against $H_0$ shows up as an unusually large value of $X$, so we look in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 5",
          "explanation": "We observed $5$ clicks. To weigh this against $H_0$ we ask how likely a result this large, or larger, would be if the true rate were still $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4)",
          "explanation": "'At least $5$' is the complement of 'at most $4$'. Rewriting it this way lets us read a single cumulative value straight from the binomial tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 5) = 1 - 0.9761 = 0.0239",
          "explanation": "From cumulative binomial tables for $B(12, 0.15)$, $P(X \\le 4) = 0.9761$. Subtracting from $1$ gives the probability of a result at least as extreme as the one observed.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.1422"
              },
              {
                "x": 1,
                "p": "0.3012"
              },
              {
                "x": 2,
                "p": "0.2924"
              },
              {
                "x": 3,
                "p": "0.1720"
              },
              {
                "x": 4,
                "p": "0.0683"
              },
              {
                "x": 5,
                "p": "0.0193"
              },
              {
                "x": 6,
                "p": "0.0040"
              },
              {
                "x": 7,
                "p": "0.0006"
              },
              {
                "x": 8,
                "p": "0.0001"
              },
              {
                "x": 9,
                "p": "0.0000"
              },
              {
                "x": 10,
                "p": "0.0000"
              },
              {
                "x": 11,
                "p": "0.0000"
              },
              {
                "x": 12,
                "p": "0.0000"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "caption": "Distribution of $X \\sim B(12,\\ 0.15)$ under $H_0$, with the tail $X \\ge 5$ (observed or more extreme) shaded; its total probability is $0.0239$.",
            "alt": "Bar chart of the binomial distribution B(12, 0.15). The bars are tallest at x = 1 and x = 2 and fall away quickly. The bars from x = 5 upward are shaded to mark the upper tail, whose total probability is 0.0239."
          }
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0239 < 0.05",
          "explanation": "The p-value is smaller than the $5\\%$ significance level, meaning a result this high would be surprisingly unlikely if the click-through rate were really only $15\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Because the observed outcome falls in the unlikely region under $H_0$, we reject the null hypothesis in favour of the alternative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p > 0.15 \\ \\text{(evidence of an increase)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude that the redesigned templates have increased the click-through rate above $15\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 5) = 1 - 0.9761 = 0.0239 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the click-through rate has increased above $15\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "lower-tail",
      "p-value"
    ],
    "questionText": "In the past, $40\\%$ of customers at a café ordered a pastry with their coffee. Since raising its prices, the owner fears this proportion has fallen. In a random sample of $10$ customers, only $1$ ordered a pastry. Test, at the $5\\%$ significance level, whether there is evidence that the proportion of customers ordering a pastry has decreased.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of customers who order a pastry}",
          "explanation": "The concern is about all customers, so $p$ represents the population proportion who order a pastry. This is the quantity the hypotheses will be about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The null keeps the historic value $0.4$. The owner suspects a fall, so the alternative points downward ($p < 0.4$): a one-tailed lower test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.4)",
          "explanation": "Let $X$ be the number of the $10$ customers who order a pastry. Assuming $H_0$ and independent customers, $X$ is binomial with $n = 10$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{lower tail})",
          "explanation": "We test at the $5\\%$ level. Since $H_1$ says 'less than', evidence against $H_0$ is an unusually small value of $X$, so we examine the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 1",
          "explanation": "Only $1$ of the $10$ customers ordered a pastry. We now ask how likely it is to see a result this low, or lower, if the true proportion were still $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value as a lower-tail probability",
          "workingLatex": "P(X \\le 1)",
          "explanation": "'At most $1$' captures the observed outcome and everything more extreme in the lower direction, which is exactly what we compare against $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 1) = 0.0464",
          "explanation": "Reading the cumulative binomial tables for $B(10, 0.4)$ gives $P(X \\le 1) = 0.0464$: the chance of $1$ or fewer pastry orders when the rate is genuinely $40\\%$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0060"
              },
              {
                "x": 1,
                "p": "0.0403"
              },
              {
                "x": 2,
                "p": "0.1209"
              },
              {
                "x": 3,
                "p": "0.2150"
              },
              {
                "x": 4,
                "p": "0.2508"
              },
              {
                "x": 5,
                "p": "0.2007"
              },
              {
                "x": 6,
                "p": "0.1115"
              },
              {
                "x": 7,
                "p": "0.0425"
              },
              {
                "x": 8,
                "p": "0.0106"
              },
              {
                "x": 9,
                "p": "0.0016"
              },
              {
                "x": 10,
                "p": "0.0001"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1
            ],
            "caption": "Distribution of $X \\sim B(10,\\ 0.4)$ under $H_0$, with the lower tail $X \\le 1$ shaded; its total probability is $0.0464$.",
            "alt": "Bar chart of the binomial distribution B(10, 0.4), peaking around x = 4. The bars at x = 0 and x = 1 are shaded to mark the lower tail, whose total probability is 0.0464."
          }
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0464 < 0.05",
          "explanation": "The p-value is below the $5\\%$ level, so a result this low would be unusually unlikely if the proportion ordering a pastry were still $40\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The observed result lies in the unlikely lower region under $H_0$, so we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p < 0.4 \\ \\text{(evidence of a decrease)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level to support the owner's fear: the proportion of customers ordering a pastry has decreased since the price rise.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 1) = 0.0464 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the proportion of customers ordering a pastry has fallen below $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "upper-tail",
      "p-value"
    ],
    "questionText": "A standard rehabilitation programme allows $50\\%$ of patients to regain full mobility within six weeks. A physiotherapist trials a new programme on $10$ patients, and $8$ of them regain full mobility within six weeks. Test, at the $5\\%$ significance level, whether the new programme gives a higher success rate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of patients who regain full mobility}",
          "explanation": "The success rate is a population proportion, so $p$ stands for the proportion of all patients on the new programme who regain full mobility.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p > 0.5",
          "explanation": "The null keeps the standard programme's rate of $0.5$. We are asked whether the new programme does better, so the alternative is one-tailed upper ($p > 0.5$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "Let $X$ be the number of the $10$ patients who recover fully. If $H_0$ holds and patients respond independently, $X$ is binomial with $n = 10$, $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{upper tail})",
          "explanation": "Testing at $5\\%$, and because $H_1$ claims an improvement, strong evidence is a large $X$, so we work in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 8",
          "explanation": "We saw $8$ successes out of $10$. We now measure how likely $8$ or more would be if the true recovery rate were still $50\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 8) = 1 - P(X \\le 7)",
          "explanation": "'At least $8$' is the complement of 'at most $7$', which turns the calculation into one lookup in the cumulative table.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 8) = 1 - 0.9453 = 0.0547",
          "explanation": "For $B(10, 0.5)$ the tables give $P(X \\le 7) = 0.9453$, so the probability of $8$ or more successes under $H_0$ is $0.0547$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0010"
              },
              {
                "x": 1,
                "p": "0.0098"
              },
              {
                "x": 2,
                "p": "0.0439"
              },
              {
                "x": 3,
                "p": "0.1172"
              },
              {
                "x": 4,
                "p": "0.2051"
              },
              {
                "x": 5,
                "p": "0.2461"
              },
              {
                "x": 6,
                "p": "0.2051"
              },
              {
                "x": 7,
                "p": "0.1172"
              },
              {
                "x": 8,
                "p": "0.0439"
              },
              {
                "x": 9,
                "p": "0.0098"
              },
              {
                "x": 10,
                "p": "0.0010"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              8,
              9,
              10
            ],
            "caption": "Distribution of $X \\sim B(10,\\ 0.5)$ under $H_0$, symmetric about $x = 5$, with the upper tail $X \\ge 8$ shaded; its total probability is $0.0547$.",
            "alt": "Symmetric bar chart of the binomial distribution B(10, 0.5), peaking at x = 5. The bars at x = 8, 9 and 10 are shaded to mark the upper tail, whose total probability is 0.0547."
          }
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0547 > 0.05",
          "explanation": "The p-value is just above the $5\\%$ level, so a result this high is not quite unusual enough to count as strong evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Since the observed outcome does not fall in the unlikely region, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note how close the result is",
          "workingLatex": "0.0547 \\approx 0.05",
          "explanation": "The p-value only narrowly exceeds $5\\%$; the result is suggestive but falls short of the threshold, so further data would help settle the question.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No sufficient evidence that } p > 0.5",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that the new programme has a higher success rate than the standard one.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 8) = 1 - 0.9453 = 0.0547 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ significance level that the new programme gives a higher recovery rate than $50\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "lower-tail",
      "p-value"
    ],
    "questionText": "A darts player normally hits the bullseye on $50\\%$ of his attempts. After an injury, his coach suspects his success rate has dropped. In a sequence of $12$ attempts he hits the bullseye $2$ times. Test, at the $5\\%$ significance level, whether there is evidence that his success rate has fallen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of attempts that hit the bullseye}",
          "explanation": "The player's success rate is a proportion, so $p$ is the long-run proportion of his attempts that hit the bullseye.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p < 0.5",
          "explanation": "The null keeps the usual rate $0.5$. The coach suspects a drop, so the alternative points downward ($p < 0.5$): a one-tailed lower test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.5)",
          "explanation": "Let $X$ be the number of bullseyes in $12$ attempts. Assuming $H_0$ and independent throws, $X$ is binomial with $n = 12$, $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{lower tail})",
          "explanation": "We test at $5\\%$. Because $H_1$ says 'less than', evidence against $H_0$ is a small number of bullseyes, so we look in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 2",
          "explanation": "The player hit only $2$ bullseyes. We assess how likely a result this low, or lower, would be if his rate were still $50\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value as a lower-tail probability",
          "workingLatex": "P(X \\le 2)",
          "explanation": "'At most $2$' collects the observed value and every more extreme outcome below it, which is what we compare with the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 2) = 0.0193",
          "explanation": "From the cumulative tables for $B(12, 0.5)$, $P(X \\le 2) = 0.0193$: the chance of $2$ or fewer bullseyes if the true rate were $50\\%$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0002"
              },
              {
                "x": 1,
                "p": "0.0029"
              },
              {
                "x": 2,
                "p": "0.0161"
              },
              {
                "x": 3,
                "p": "0.0537"
              },
              {
                "x": 4,
                "p": "0.1208"
              },
              {
                "x": 5,
                "p": "0.1934"
              },
              {
                "x": 6,
                "p": "0.2256"
              },
              {
                "x": 7,
                "p": "0.1934"
              },
              {
                "x": 8,
                "p": "0.1208"
              },
              {
                "x": 9,
                "p": "0.0537"
              },
              {
                "x": 10,
                "p": "0.0161"
              },
              {
                "x": 11,
                "p": "0.0029"
              },
              {
                "x": 12,
                "p": "0.0002"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              0,
              1,
              2
            ],
            "caption": "Distribution of $X \\sim B(12,\\ 0.5)$ under $H_0$, symmetric about $x = 6$, with the lower tail $X \\le 2$ shaded; its total probability is $0.0193$.",
            "alt": "Symmetric bar chart of the binomial distribution B(12, 0.5), peaking at x = 6. The bars at x = 0, 1 and 2 are shaded to mark the lower tail, whose total probability is 0.0193."
          }
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0193 < 0.05",
          "explanation": "The p-value is well below the $5\\%$ level, so scoring only $2$ bullseyes would be surprisingly unlikely if the player were still on form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The observed result lies deep in the unlikely lower tail under $H_0$, so we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p < 0.5 \\ \\text{(evidence of a decline)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the player's bullseye success rate has fallen below $50\\%$ since the injury.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 2) = 0.0193 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the player's success rate has dropped below $50\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "upper-tail",
      "p-value"
    ],
    "questionText": "In a board game, a spinner is designed to land on the star on $25\\%$ of spins. A player suspects the spinner lands on the star more often than it should. In $10$ spins it lands on the star $5$ times. Test, at the $5\\%$ significance level, whether there is evidence that the spinner lands on the star more often than $25\\%$ of the time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of spins landing on the star}",
          "explanation": "The design specification is a proportion, so $p$ is the true probability that any single spin lands on the star.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p > 0.25",
          "explanation": "The null keeps the design value $0.25$. The player suspects the star comes up too often, so the alternative is one-tailed upper ($p > 0.25$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.25)",
          "explanation": "Let $X$ be the number of star results in $10$ spins. Assuming $H_0$ and independent spins, $X$ is binomial with $n = 10$, $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{upper tail})",
          "explanation": "We test at $5\\%$. Because $H_1$ says 'more often', strong evidence is a large number of stars, so we examine the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 5",
          "explanation": "The spinner landed on the star $5$ times. We check how likely $5$ or more stars would be if the true rate were still $25\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4)",
          "explanation": "'At least $5$' is the complement of 'at most $4$', so a single cumulative value from the tables gives the answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 5) = 1 - 0.9219 = 0.0781",
          "explanation": "For $B(10, 0.25)$ the tables give $P(X \\le 4) = 0.9219$, so the probability of $5$ or more stars under $H_0$ is $0.0781$.",
          "diagram": {
            "kind": "probDist",
            "values": [
              {
                "x": 0,
                "p": "0.0563"
              },
              {
                "x": 1,
                "p": "0.1877"
              },
              {
                "x": 2,
                "p": "0.2816"
              },
              {
                "x": 3,
                "p": "0.2503"
              },
              {
                "x": 4,
                "p": "0.1460"
              },
              {
                "x": 5,
                "p": "0.0584"
              },
              {
                "x": 6,
                "p": "0.0162"
              },
              {
                "x": 7,
                "p": "0.0031"
              },
              {
                "x": 8,
                "p": "0.0004"
              },
              {
                "x": 9,
                "p": "0.0000"
              },
              {
                "x": 10,
                "p": "0.0000"
              }
            ],
            "xAxisLabel": "x",
            "yAxisLabel": "P(X = x)",
            "highlight": [
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "caption": "Distribution of $X \\sim B(10,\\ 0.25)$ under $H_0$, peaking near $x = 2$, with the upper tail $X \\ge 5$ shaded; its total probability is $0.0781$.",
            "alt": "Bar chart of the binomial distribution B(10, 0.25), tallest around x = 2 and x = 3. The bars from x = 5 upward are shaded to mark the upper tail, whose total probability is 0.0781."
          }
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0781 > 0.05",
          "explanation": "The p-value is larger than the $5\\%$ level, so a result of $5$ stars is not rare enough to cast serious doubt on the design rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Because the observed outcome sits outside the unlikely region under $H_0$, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the comparison",
          "workingLatex": "5 \\text{ stars is plausible under } B(10, 0.25)",
          "explanation": "Although $5$ out of $10$ looks high, results like this happen roughly $8\\%$ of the time by chance alone when the rate is $25\\%$, so they are not convincing evidence.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No sufficient evidence that } p > 0.25",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that the spinner lands on the star more often than $25\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 5) = 1 - 0.9219 = 0.0781 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ significance level that the spinner favours the star."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "upper-tail",
      "p-value"
    ],
    "questionText": "A horticultural supplier states that $20\\%$ of a certain type of bulb flowers in its first year. A gardener treats a new batch with a special fertiliser, plants $30$ bulbs, and finds that $11$ flower in the first year. Test, at the $5\\%$ significance level, whether the fertiliser has increased the proportion of bulbs that flower in their first year.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of bulbs flowering in the first year}",
          "explanation": "The claim is about the overall flowering rate, so $p$ is the population proportion of treated bulbs that flower in their first year.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p > 0.2",
          "explanation": "The null keeps the supplier's stated rate $0.2$. The gardener wants to know if the fertiliser raises it, so the alternative is one-tailed upper ($p > 0.2$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(30,\\ 0.2)",
          "explanation": "Let $X$ be the number of the $30$ bulbs that flower. Under $H_0$, with bulbs flowering independently at rate $0.2$, $X$ is binomial with $n = 30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{upper tail})",
          "explanation": "Testing at $5\\%$; since $H_1$ claims an increase, evidence against $H_0$ is a large number of flowering bulbs, so we use the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 11",
          "explanation": "We observed $11$ flowering bulbs. Under $H_0$ we would expect around $30 \\times 0.2 = 6$, so $11$ is notably high; we quantify how surprising it is.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 11) = 1 - P(X \\le 10)",
          "explanation": "'At least $11$' is the complement of 'at most $10$', so we only need one cumulative value from the $B(30, 0.2)$ table.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 11) = 1 - 0.9744 = 0.0256",
          "explanation": "The cumulative tables for $B(30, 0.2)$ give $P(X \\le 10) = 0.9744$, so the probability of $11$ or more flowering bulbs under $H_0$ is $0.0256$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0256 < 0.05",
          "explanation": "The p-value is below the $5\\%$ level, so seeing $11$ or more flowering bulbs would be unlikely if the fertiliser made no difference.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The observed result falls in the unlikely upper region under $H_0$, so we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p > 0.2 \\ \\text{(evidence of an increase)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the fertiliser has increased the proportion of bulbs flowering in their first year above $20\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 11) = 1 - 0.9744 = 0.0256 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the fertiliser has increased the first-year flowering rate above $20\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "lower-tail",
      "p-value"
    ],
    "questionText": "A local newspaper claims that $40\\%$ of adults in a town read it every day. A newly appointed editor fears daily readership has fallen. In a random sample of $20$ adults, $3$ say they read the newspaper every day. Test, at the $5\\%$ significance level, whether there is evidence that the proportion of daily readers has decreased.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of adults who read the paper daily}",
          "explanation": "The claim is about all adults in the town, so $p$ is the population proportion who read the newspaper every day.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The null keeps the claimed value $0.4$. The editor fears a fall, so the alternative points downward ($p < 0.4$): a one-tailed lower test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.4)",
          "explanation": "Let $X$ be the number of daily readers among $20$ adults. Under $H_0$, with independent respondents at rate $0.4$, $X$ is binomial with $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{lower tail})",
          "explanation": "We test at $5\\%$. Because $H_1$ says 'less than', evidence against $H_0$ is a small number of daily readers, so we look in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 3",
          "explanation": "Only $3$ of the $20$ adults read it daily, against an expected $20 \\times 0.4 = 8$. We measure how unlikely a value this low would be under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value as a lower-tail probability",
          "workingLatex": "P(X \\le 3)",
          "explanation": "'At most $3$' gathers the observed count and every smaller one, which is exactly the tail we compare with the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 3) = 0.0160",
          "explanation": "The cumulative tables for $B(20, 0.4)$ give $P(X \\le 3) = 0.0160$: the chance of $3$ or fewer daily readers if the true rate were still $40\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0160 < 0.05",
          "explanation": "The p-value is well under the $5\\%$ level, so a result this low would be very unlikely if readership were unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The observed count lies deep in the unlikely lower tail under $H_0$, so we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p < 0.4 \\ \\text{(evidence of a decrease)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that daily readership of the newspaper has fallen below $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 3) = 0.0160 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the proportion of daily readers has decreased below $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "lower-tail",
      "p-value"
    ],
    "questionText": "An online revision service advertises that $60\\%$ of students who use it pass their final exam. A teacher believes the true pass rate for users is lower than advertised. Of a random sample of $20$ students who used the service, $7$ passed their exam. Test, at the $5\\%$ significance level, whether there is evidence that the pass rate is lower than $60\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of users who pass the exam}",
          "explanation": "The advertised figure is a proportion, so $p$ represents the population proportion of service users who pass their final exam.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.6 \\qquad H_1{:}\\ p < 0.6",
          "explanation": "The null keeps the advertised rate $0.6$. The teacher suspects it is lower, so the alternative points downward ($p < 0.6$): a one-tailed lower test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.6)",
          "explanation": "Let $X$ be the number of the $20$ users who pass. Under $H_0$, with independent students at rate $0.6$, $X$ is binomial with $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{lower tail})",
          "explanation": "We test at $5\\%$. Because $H_1$ says 'less than', evidence against $H_0$ is a small number of passes, so we examine the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 7",
          "explanation": "Only $7$ of the $20$ users passed, against an expected $20 \\times 0.6 = 12$. We test how unlikely a result this low is under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value as a lower-tail probability",
          "workingLatex": "P(X \\le 7)",
          "explanation": "'At most $7$' captures the observed value and every more extreme one below it, which is the tail we weigh against $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 7) = 0.0210",
          "explanation": "From the cumulative tables for $B(20, 0.6)$, $P(X \\le 7) = 0.0210$: the probability of $7$ or fewer passes if the true rate were still $60\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0210 < 0.05",
          "explanation": "The p-value is below the $5\\%$ level, so a pass count this low would be unlikely if the advertised rate were accurate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Because the observed result lies in the unlikely lower tail under $H_0$, we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the comparison",
          "workingLatex": "0.0210 \\text{ is well below } 0.05",
          "explanation": "The evidence is fairly strong: a result this extreme would arise only about $2\\%$ of the time by chance if the advertised rate were true.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion in context",
          "workingLatex": "p < 0.6 \\ \\text{(evidence pass rate is lower)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the true pass rate for users of the service is lower than the advertised $60\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 7) = 0.0210 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the pass rate is lower than the advertised $60\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "upper-tail",
      "p-value"
    ],
    "questionText": "A chocolatier states that $15\\%$ of the chocolates in a large box have a soft centre. A customer thinks a particular box contains a higher proportion of soft centres than usual. She checks $20$ chocolates from the box and finds $6$ with a soft centre. Test, at the $5\\%$ significance level, whether there is evidence that the proportion of soft-centred chocolates is greater than $15\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of chocolates with a soft centre}",
          "explanation": "The stated figure is a proportion, so $p$ is the true proportion of chocolates in the box that have a soft centre.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.15 \\qquad H_1{:}\\ p > 0.15",
          "explanation": "The null keeps the stated value $0.15$. The customer suspects more soft centres, so the alternative is one-tailed upper ($p > 0.15$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.15)",
          "explanation": "Let $X$ be the number of soft-centred chocolates among the $20$ checked. Under $H_0$, with independent chocolates at rate $0.15$, $X$ is binomial with $n = 20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{upper tail})",
          "explanation": "We test at $5\\%$; because $H_1$ claims a higher proportion, evidence against $H_0$ is a large count, so we use the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 6",
          "explanation": "She found $6$ soft centres, against an expected $20 \\times 0.15 = 3$. We measure how likely $6$ or more would be under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value using the complement",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5)",
          "explanation": "'At least $6$' is the complement of 'at most $5$', so a single cumulative value from the $B(20, 0.15)$ table is all we need.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 6) = 1 - 0.9327 = 0.0673",
          "explanation": "The cumulative tables for $B(20, 0.15)$ give $P(X \\le 5) = 0.9327$, so the probability of $6$ or more soft centres under $H_0$ is $0.0673$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0673 > 0.05",
          "explanation": "The p-value exceeds the $5\\%$ level, so a result of $6$ soft centres is not rare enough to be convincing evidence against the stated rate.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Since the observed count does not fall in the unlikely upper region under $H_0$, we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the comparison",
          "workingLatex": "6 \\text{ soft centres is plausible under } B(20, 0.15)",
          "explanation": "Even though $6$ is double the expected number, a batch this rich in soft centres happens about $7\\%$ of the time by chance, which is not unusual enough at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclusion in context",
          "workingLatex": "\\text{No sufficient evidence that } p > 0.15",
          "explanation": "There is insufficient evidence at the $5\\%$ level that this box has a greater proportion of soft-centred chocolates than the usual $15\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 6) = 1 - 0.9327 = 0.0673 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ significance level that the proportion of soft centres exceeds $15\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "lower-tail",
      "p-value"
    ],
    "questionText": "A train operator's records show that $20\\%$ of its trains on a route arrive late. After introducing a new timetable, a manager believes fewer trains are now late. On a random sample of $25$ trains, only $1$ arrives late. Test, at the $5\\%$ significance level, whether there is evidence that the proportion of late trains has decreased.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of trains that arrive late}",
          "explanation": "Lateness rate is a proportion, so $p$ is the population proportion of trains on the route that arrive late under the new timetable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p < 0.2",
          "explanation": "The null keeps the old rate $0.2$. The manager believes lateness has fallen, so the alternative points downward ($p < 0.2$): a one-tailed lower test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(25,\\ 0.2)",
          "explanation": "Let $X$ be the number of late trains out of $25$. Under $H_0$, with trains running late independently at rate $0.2$, $X$ is binomial with $n = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the significance level and tail",
          "workingLatex": "\\alpha = 0.05 \\quad (\\text{lower tail})",
          "explanation": "We test at $5\\%$. Because $H_1$ says 'less than', evidence against $H_0$ is a small number of late trains, so we look in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value",
          "workingLatex": "x = 1",
          "explanation": "Only $1$ train was late, against an expected $25 \\times 0.2 = 5$. We measure how unlikely a value this low is under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value as a lower-tail probability",
          "workingLatex": "P(X \\le 1)",
          "explanation": "'At most $1$' collects the observed value and the only more extreme outcome ($0$), giving the tail we compare with $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 1) = 0.0274",
          "explanation": "The cumulative tables for $B(25, 0.2)$ give $P(X \\le 1) = 0.0274$: the chance of $1$ or fewer late trains if the rate were still $20\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0274 < 0.05",
          "explanation": "The p-value is below the $5\\%$ level, so seeing only $1$ late train would be unlikely if the timetable made no difference.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The observed count lies in the unlikely lower tail under $H_0$, so we reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion in context",
          "workingLatex": "p < 0.2 \\ \\text{(evidence of fewer late trains)}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the new timetable has reduced the proportion of late trains below $20\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\le 1) = 0.0274 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ significance level that the proportion of late trains has decreased below $20\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q033",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A biscuit manufacturer states that $20\\%$ of the biscuits in each batch are cream-filled. A shopkeeper believes the proportion of cream-filled biscuits is greater than $20\\%$. She takes a random sample of $10$ biscuits from a batch. Using a $5\\%$ significance level, find the critical region for a test of the shopkeeper's belief, state the actual significance level, and hence decide whether her belief is supported if the sample contains $6$ cream-filled biscuits.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.1074"
        },
        {
          "x": 1,
          "p": "0.2684"
        },
        {
          "x": 2,
          "p": "0.3020"
        },
        {
          "x": 3,
          "p": "0.2013"
        },
        {
          "x": 4,
          "p": "0.0881"
        },
        {
          "x": 5,
          "p": "0.0264"
        },
        {
          "x": 6,
          "p": "0.0055"
        },
        {
          "x": 7,
          "p": "0.0008"
        },
        {
          "x": 8,
          "p": "0.0001"
        },
        {
          "x": 9,
          "p": "0.0000"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "alt": "Bar chart of the binomial distribution B(10, 0.2). The bars for x = 5 up to x = 10 are highlighted as the critical region in the upper tail.",
      "caption": "Distribution of the test statistic under H_0 with the upper-tail critical region shaded."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of biscuits that are cream-filled}",
          "explanation": "The test is about the overall proportion of cream-filled biscuits, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p > 0.2",
          "explanation": "The null keeps the stated value; the shopkeeper suspects a higher proportion, so this is a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(10,\\ 0.2)",
          "explanation": "If $H_0$ is true, the number of cream-filled biscuits among $10$ independent biscuits is binomial with $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\ge c) \\le 0.05",
          "explanation": "For an upper-tail test the critical region is the largest set of high values $X \\ge c$ whose total probability stays at or below the $5\\%$ level, so we look for the smallest such $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4) = 1 - 0.9672 = 0.0328",
          "explanation": "Reading the cumulative value $P(X \\le 4) = 0.9672$ for $B(10, 0.2)$ gives $P(X \\ge 5) = 0.0328$, which is at or below $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value below fails",
          "workingLatex": "P(X \\ge 4) = 1 - P(X \\le 3) = 1 - 0.8791 = 0.1209 > 0.05",
          "explanation": "Including $x = 4$ pushes the tail probability above $5\\%$, so $4$ cannot be in the region; this confirms $5$ is the smallest usable critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\ge 5",
          "explanation": "The critical region is the tail from the critical value $5$ upwards, i.e. reject $H_0$ if $5$ or more biscuits are cream-filled.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "0 \\le X \\le 4",
          "explanation": "Anything up to $4$ is consistent with $H_0$ at this level, so this is the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 5) = 0.0328 = 3.28\\%",
          "explanation": "The true probability of landing in the critical region under $H_0$ is $3.28\\%$, below the nominal $5\\%$ because the binomial distribution is discrete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 6 \\ge 5 \\Rightarrow \\text{in critical region}",
          "explanation": "The observed $6$ cream-filled biscuits lies inside the critical region $X \\ge 5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the shopkeeper's belief is supported, and the proportion of cream-filled biscuits appears greater than $20\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\ge 5$ (acceptance region $0 \\le X \\le 4$), with actual significance level $P(X \\ge 5) = 0.0328 = 3.28\\%$. Since $x = 6$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that more than $20\\%$ of biscuits are cream-filled."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q034",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "lower-tail"
    ],
    "questionText": "A bus company's records show that $35\\%$ of its buses on a route are late. After introducing a new timetable, a manager believes the proportion of late buses has decreased. He monitors a random sample of $12$ bus journeys. Find the critical region for a test at the $5\\%$ significance level, and determine whether there is evidence of a decrease if $2$ of the $12$ buses are late.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0057"
        },
        {
          "x": 1,
          "p": "0.0368"
        },
        {
          "x": 2,
          "p": "0.1088"
        },
        {
          "x": 3,
          "p": "0.1954"
        },
        {
          "x": 4,
          "p": "0.2367"
        },
        {
          "x": 5,
          "p": "0.2039"
        },
        {
          "x": 6,
          "p": "0.1281"
        },
        {
          "x": 7,
          "p": "0.0591"
        },
        {
          "x": 8,
          "p": "0.0199"
        },
        {
          "x": 9,
          "p": "0.0048"
        },
        {
          "x": 10,
          "p": "0.0008"
        },
        {
          "x": 11,
          "p": "0.0001"
        },
        {
          "x": 12,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1
      ],
      "alt": "Bar chart of the binomial distribution B(12, 0.35). The bars for x = 0 and x = 1 are highlighted as the critical region in the lower tail.",
      "caption": "Distribution of the test statistic under H_0 with the lower-tail critical region shaded."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of buses that are late}",
          "explanation": "The claim concerns the proportion of late buses, so $p$ is the population proportion the test targets.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.35 \\qquad H_1{:}\\ p < 0.35",
          "explanation": "The manager suspects a fall in the proportion of late buses, so the alternative points downward: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(12,\\ 0.35)",
          "explanation": "Assuming $H_0$, the number of late buses among $12$ independent journeys is binomial with $p = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\le c) \\le 0.05",
          "explanation": "For a lower-tail test the critical region is the largest block of small values $X \\le c$ whose total probability is at or below $5\\%$, so we want the largest such $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\le 1) = 0.0424 \\le 0.05",
          "explanation": "The cumulative value $P(X \\le 1) = 0.0424$ for $B(12, 0.35)$ is at or below $0.05$, so $x = 1$ can be included in the region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value above fails",
          "workingLatex": "P(X \\le 2) = 0.1513 > 0.05",
          "explanation": "Adding $x = 2$ takes the lower-tail probability above $5\\%$, so $2$ cannot be in the region; the largest usable critical value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\le 1",
          "explanation": "The critical region is $\\{0, 1\\}$: reject $H_0$ only if at most $1$ of the $12$ buses is late.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "2 \\le X \\le 12",
          "explanation": "Any count of $2$ or more late buses is consistent with $H_0$ at this level, giving the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\le 1) = 0.0424 = 4.24\\%",
          "explanation": "The genuine probability of the test statistic falling in the critical region under $H_0$ is $4.24\\%$, a little under the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 2 \\notin \\{0,1\\} \\Rightarrow \\text{not in critical region}",
          "explanation": "The observed $2$ late buses lies in the acceptance region, not the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: the data do not show that the proportion of late buses has decreased below $35\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ (acceptance region $2 \\le X \\le 12$), with actual significance level $P(X \\le 1) = 0.0424 = 4.24\\%$. Since $x = 2$ is not in the critical region, do not reject $H_0$: there is no evidence at the $5\\%$ level that the proportion of late buses has fallen."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q035",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "upper-tail"
    ],
    "questionText": "A board game uses a spinner that is supposed to land on the green sector with probability $0.5$. A player suspects the spinner is biased towards green, so that green comes up more often than half the time. The spinner is spun $10$ times. Find the critical region for a test at the $5\\%$ significance level and its actual significance level, then decide whether there is evidence of bias if green appears $9$ times.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0010"
        },
        {
          "x": 1,
          "p": "0.0098"
        },
        {
          "x": 2,
          "p": "0.0439"
        },
        {
          "x": 3,
          "p": "0.1172"
        },
        {
          "x": 4,
          "p": "0.2051"
        },
        {
          "x": 5,
          "p": "0.2461"
        },
        {
          "x": 6,
          "p": "0.2051"
        },
        {
          "x": 7,
          "p": "0.1172"
        },
        {
          "x": 8,
          "p": "0.0439"
        },
        {
          "x": 9,
          "p": "0.0098"
        },
        {
          "x": 10,
          "p": "0.0010"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        9,
        10
      ],
      "alt": "Bar chart of the symmetric binomial distribution B(10, 0.5). The bars for x = 9 and x = 10 are highlighted as the critical region in the upper tail.",
      "caption": "Distribution of the test statistic under H_0 with the upper-tail critical region shaded."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{probability the spinner lands on green}",
          "explanation": "The test concerns how often the spinner lands on green, so $p$ is that probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p > 0.5",
          "explanation": "The player suspects green is favoured, so the alternative is one-tailed upwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "Under $H_0$, the number of greens in $10$ independent spins is binomial with $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\ge c) \\le 0.05",
          "explanation": "We need the smallest $c$ so that the upper tail $X \\ge c$ has total probability no more than the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\ge 9) = 1 - P(X \\le 8) = 1 - 0.9893 = 0.0107",
          "explanation": "From $B(10, 0.5)$, $P(X \\le 8) = 0.9893$ gives $P(X \\ge 9) = 0.0107$, comfortably at or below $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value below fails",
          "workingLatex": "P(X \\ge 8) = 1 - P(X \\le 7) = 1 - 0.9453 = 0.0547 > 0.05",
          "explanation": "Bringing $x = 8$ into the tail lifts the probability to $0.0547$, above $5\\%$, so $8$ is excluded and $9$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\ge 9",
          "explanation": "Reject $H_0$ only if green appears $9$ or $10$ times out of $10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "0 \\le X \\le 8",
          "explanation": "Up to $8$ greens is consistent with a fair spinner at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 9) = 0.0107 = 1.07\\%",
          "explanation": "Because the distribution is discrete and symmetric, the smallest available tail is only $1.07\\%$, well below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 9 \\ge 9 \\Rightarrow \\text{in critical region}",
          "explanation": "Observing $9$ greens lands exactly on the critical value, which is inside the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the spinner does appear biased towards green.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\ge 9$ (acceptance region $0 \\le X \\le 8$), with actual significance level $P(X \\ge 9) = 0.0107 = 1.07\\%$. Since $x = 9$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that the spinner is biased towards green."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q036",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "At a gym, $25\\%$ of members usually attend the Saturday spin class. After a promotion, an instructor believes a higher proportion of members now attend. She records whether each of a random sample of $12$ members attends. Using a $10\\%$ significance level, find the critical region and the actual significance level, then decide whether the promotion appears effective if $5$ of the $12$ members attend.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0317"
        },
        {
          "x": 1,
          "p": "0.1267"
        },
        {
          "x": 2,
          "p": "0.2323"
        },
        {
          "x": 3,
          "p": "0.2581"
        },
        {
          "x": 4,
          "p": "0.1936"
        },
        {
          "x": 5,
          "p": "0.1032"
        },
        {
          "x": 6,
          "p": "0.0401"
        },
        {
          "x": 7,
          "p": "0.0115"
        },
        {
          "x": 8,
          "p": "0.0024"
        },
        {
          "x": 9,
          "p": "0.0004"
        },
        {
          "x": 10,
          "p": "0.0000"
        },
        {
          "x": 11,
          "p": "0.0000"
        },
        {
          "x": 12,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "alt": "Bar chart of the binomial distribution B(12, 0.25). The bars for x = 6 up to x = 12 are highlighted as the critical region in the upper tail.",
      "caption": "Distribution of the test statistic under H_0 with the upper-tail critical region shaded."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of members who attend the class}",
          "explanation": "The test is about how many members attend, so $p$ is the population proportion attending.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p > 0.25",
          "explanation": "The instructor expects attendance to have risen, so the alternative is one-tailed upwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(12,\\ 0.25)",
          "explanation": "Under $H_0$, the number attending among $12$ independent members is binomial with $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\ge c) \\le 0.10",
          "explanation": "The significance level is $10\\%$ here, so we seek the smallest $c$ with upper-tail probability at or below $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5) = 1 - 0.9456 = 0.0544",
          "explanation": "Using $P(X \\le 5) = 0.9456$ for $B(12, 0.25)$ gives $P(X \\ge 6) = 0.0544$, which is at or below $0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value below fails",
          "workingLatex": "P(X \\ge 5) = 1 - P(X \\le 4) = 1 - 0.8424 = 0.1576 > 0.10",
          "explanation": "Including $x = 5$ raises the tail to $0.1576$, above the $10\\%$ level, so $5$ is excluded and $6$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\ge 6",
          "explanation": "Reject $H_0$ if $6$ or more of the $12$ sampled members attend.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "0 \\le X \\le 5",
          "explanation": "Attendance of $5$ or fewer is consistent with the original $25\\%$ rate at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 6) = 0.0544 = 5.44\\%",
          "explanation": "The real chance of a Type I error here is $5.44\\%$, noticeably below the nominal $10\\%$ because whole numbers of members jump the tail probability in steps.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 5 < 6 \\Rightarrow \\text{not in critical region}",
          "explanation": "The observed $5$ attenders falls just short of the critical value, so it lies in the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level to reject $H_0$: the promotion has not been shown to increase attendance above $25\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\ge 6$ (acceptance region $0 \\le X \\le 5$), with actual significance level $P(X \\ge 6) = 0.0544 = 5.44\\%$. Since $x = 5$ is not in the critical region, do not reject $H_0$: there is no evidence at the $10\\%$ level that attendance has increased above $25\\%$."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q037",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "lower-tail"
    ],
    "questionText": "A phone app's data show that $40\\%$ of users enable push notifications. After a redesign of the sign-up screen, a developer thinks a smaller proportion of users now enable notifications. She checks a random sample of $10$ new users. Find the critical region for a test at the $5\\%$ significance level and its actual significance level, then decide whether the data support the developer's belief if just $1$ user enables notifications.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0060"
        },
        {
          "x": 1,
          "p": "0.0403"
        },
        {
          "x": 2,
          "p": "0.1209"
        },
        {
          "x": 3,
          "p": "0.2150"
        },
        {
          "x": 4,
          "p": "0.2508"
        },
        {
          "x": 5,
          "p": "0.2007"
        },
        {
          "x": 6,
          "p": "0.1115"
        },
        {
          "x": 7,
          "p": "0.0425"
        },
        {
          "x": 8,
          "p": "0.0106"
        },
        {
          "x": 9,
          "p": "0.0016"
        },
        {
          "x": 10,
          "p": "0.0001"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1
      ],
      "alt": "Bar chart of the binomial distribution B(10, 0.4). The bars for x = 0 and x = 1 are highlighted as the critical region in the lower tail.",
      "caption": "Distribution of the test statistic under H_0 with the lower-tail critical region shaded."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of users who enable notifications}",
          "explanation": "The test concerns the proportion enabling notifications, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The developer suspects the proportion has dropped, so the alternative points downward: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(10,\\ 0.4)",
          "explanation": "Under $H_0$, the number of the $10$ users enabling notifications is binomial with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\le c) \\le 0.05",
          "explanation": "For a lower-tail test we want the largest $c$ whose cumulative probability $P(X \\le c)$ stays at or below $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\le 1) = 0.0464 \\le 0.05",
          "explanation": "From $B(10, 0.4)$, $P(X \\le 1) = 0.0464$ is at or below $0.05$, so $x = 1$ can be part of the region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value above fails",
          "workingLatex": "P(X \\le 2) = 0.1673 > 0.05",
          "explanation": "Adding $x = 2$ pushes the lower tail to $0.1673$, over $5\\%$, so $2$ is excluded and $1$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\le 1",
          "explanation": "Reject $H_0$ only if at most $1$ of the $10$ users enables notifications.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "2 \\le X \\le 10",
          "explanation": "Two or more users enabling notifications is consistent with the original $40\\%$ rate at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\le 1) = 0.0464 = 4.64\\%",
          "explanation": "The true probability of the critical region under $H_0$ is $4.64\\%$, just below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 1 \\le 1 \\Rightarrow \\text{in critical region}",
          "explanation": "Only $1$ user enabled notifications, which sits inside the critical region $X \\le 1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion of users enabling notifications appears to have fallen below $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ (acceptance region $2 \\le X \\le 10$), with actual significance level $P(X \\le 1) = 0.0464 = 4.64\\%$. Since $x = 1$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that fewer than $40\\%$ of users now enable notifications."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q038",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "upper-tail"
    ],
    "questionText": "Records at a dental practice show that $30\\%$ of children have at least one filling. A dentist suspects that in a particular town the proportion is higher. She examines a random sample of $20$ children from the town. Using a $5\\%$ significance level, find the critical region and the actual significance level for this test, and decide whether the dentist's suspicion is supported if $9$ of the children have a filling.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of children with a filling}",
          "explanation": "The test is about the proportion of children with a filling, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p > 0.3",
          "explanation": "The dentist suspects a higher proportion in the town, so this is a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(20,\\ 0.3)",
          "explanation": "Under $H_0$, the number with a filling among $20$ independent children is binomial with $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\ge c) \\le 0.05",
          "explanation": "We need the smallest $c$ so the upper tail $X \\ge c$ has probability at or below the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9) = 1 - 0.9520 = 0.0480",
          "explanation": "Using the cumulative value $P(X \\le 9) = 0.9520$ for $B(20, 0.3)$ gives $P(X \\ge 10) = 0.0480 \\le 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value below fails",
          "workingLatex": "P(X \\ge 9) = 1 - P(X \\le 8) = 1 - 0.8867 = 0.1133 > 0.05",
          "explanation": "Including $x = 9$ raises the tail to $0.1133$, above $5\\%$, so $9$ is excluded and $10$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\ge 10",
          "explanation": "Reject $H_0$ if $10$ or more of the $20$ children have a filling.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "0 \\le X \\le 9",
          "explanation": "Up to $9$ children with a filling is consistent with the $30\\%$ figure at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 10) = 0.0480 = 4.80\\%",
          "explanation": "The genuine probability of the critical region under $H_0$ is $4.80\\%$, close to but under the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 9 < 10 \\Rightarrow \\text{not in critical region}",
          "explanation": "The observed $9$ children falls one short of the critical value, so it lies in the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: the data do not support a higher proportion of children with fillings in the town.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\ge 10$ (acceptance region $0 \\le X \\le 9$), with actual significance level $P(X \\ge 10) = 0.0480 = 4.80\\%$. Since $x = 9$ is not in the critical region, do not reject $H_0$: there is no evidence at the $5\\%$ level that more than $30\\%$ of the town's children have a filling."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q039",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "lower-tail"
    ],
    "questionText": "A cafe's past data show that $40\\%$ of customers order an oat-milk drink. Following a price rise on plant milks, the owner believes the proportion ordering oat milk has decreased. She records the choices of a random sample of $25$ customers. Find the critical region for a test at the $5\\%$ significance level and its actual significance level, then decide whether the owner's belief is supported if $4$ customers order oat milk.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of customers ordering oat milk}",
          "explanation": "The test concerns the proportion ordering oat milk, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p < 0.4",
          "explanation": "The owner suspects a decrease, so the alternative points downward: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(25,\\ 0.4)",
          "explanation": "Under $H_0$, the number ordering oat milk among $25$ independent customers is binomial with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\le c) \\le 0.05",
          "explanation": "For a lower-tail test we want the largest $c$ whose cumulative probability $P(X \\le c)$ is at or below $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\le 5) = 0.0294 \\le 0.05",
          "explanation": "From $B(25, 0.4)$, $P(X \\le 5) = 0.0294$ is at or below $0.05$, so $x = 5$ can be included in the region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value above fails",
          "workingLatex": "P(X \\le 6) = 0.0736 > 0.05",
          "explanation": "Adding $x = 6$ takes the lower tail to $0.0736$, above $5\\%$, so $6$ is excluded and $5$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\le 5",
          "explanation": "Reject $H_0$ if $5$ or fewer of the $25$ customers order oat milk.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "6 \\le X \\le 25",
          "explanation": "Six or more oat-milk orders is consistent with the original $40\\%$ rate at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\le 5) = 0.0294 = 2.94\\%",
          "explanation": "The true probability of the critical region under $H_0$ is only $2.94\\%$, well below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 4 \\le 5 \\Rightarrow \\text{in critical region}",
          "explanation": "The observed $4$ oat-milk orders is smaller than the critical value $5$, so it lies inside the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion of customers ordering oat milk appears to have decreased below $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 5$ (acceptance region $6 \\le X \\le 25$), with actual significance level $P(X \\le 5) = 0.0294 = 2.94\\%$. Since $x = 4$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that fewer than $40\\%$ of customers now order oat milk."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q040",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A courier company advertises that only $15\\%$ of its parcels arrive late. A retailer suspects the true late rate is higher. He tracks a random sample of $20$ parcels. Using a $5\\%$ significance level, find the critical region and the actual significance level for a test of the retailer's suspicion, and decide whether it is supported if $8$ of the $20$ parcels arrive late.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of parcels that arrive late}",
          "explanation": "The test is about the proportion of late parcels, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.15 \\qquad H_1{:}\\ p > 0.15",
          "explanation": "The retailer suspects the late rate is higher than advertised, so this is a one-tailed (upper) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(20,\\ 0.15)",
          "explanation": "Under $H_0$, the number of late parcels among $20$ independent parcels is binomial with $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\ge c) \\le 0.05",
          "explanation": "We need the smallest $c$ so the upper tail $X \\ge c$ has probability at or below the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\ge 7) = 1 - P(X \\le 6) = 1 - 0.9781 = 0.0219",
          "explanation": "Using $P(X \\le 6) = 0.9781$ for $B(20, 0.15)$ gives $P(X \\ge 7) = 0.0219 \\le 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value below fails",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5) = 1 - 0.9327 = 0.0673 > 0.05",
          "explanation": "Including $x = 6$ raises the tail to $0.0673$, above $5\\%$, so $6$ is excluded and $7$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\ge 7",
          "explanation": "Reject $H_0$ if $7$ or more of the $20$ parcels arrive late.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "0 \\le X \\le 6",
          "explanation": "Up to $6$ late parcels is consistent with the advertised $15\\%$ rate at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\ge 7) = 0.0219 = 2.19\\%",
          "explanation": "The genuine probability of a Type I error here is $2.19\\%$, well under the nominal $5\\%$ because of the discrete jumps.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 8 \\ge 7 \\Rightarrow \\text{in critical region}",
          "explanation": "The observed $8$ late parcels exceeds the critical value $7$, so it lies inside the critical region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion of parcels arriving late appears greater than $15\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\ge 7$ (acceptance region $0 \\le X \\le 6$), with actual significance level $P(X \\ge 7) = 0.0219 = 2.19\\%$. Since $x = 8$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that more than $15\\%$ of parcels arrive late."
    }
  },
  {
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "id": "al.y1.stats.hypothesis-testing.q041",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "lower-tail"
    ],
    "questionText": "A school's travel survey suggests that $20\\%$ of students cycle to school. A teacher believes that, after nearby roadworks began, a smaller proportion now cycle. She asks a random sample of $30$ students. Using a $10\\%$ significance level, find the critical region and the actual significance level for this test, and decide whether the teacher's belief is supported if $4$ of the $30$ students cycle to school.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of students who cycle to school}",
          "explanation": "The test concerns the proportion who cycle, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p < 0.2",
          "explanation": "The teacher suspects fewer students cycle now, so the alternative points downward: a one-tailed (lower) test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic",
          "workingLatex": "X \\sim B(30,\\ 0.2)",
          "explanation": "Under $H_0$, the number cycling among $30$ independent students is binomial with $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the critical-region condition",
          "workingLatex": "P(X \\le c) \\le 0.10",
          "explanation": "The level is $10\\%$ here, so for a lower-tail test we want the largest $c$ with $P(X \\le c) \\le 0.10$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the boundary value",
          "workingLatex": "P(X \\le 2) = 0.0442 \\le 0.10",
          "explanation": "From $B(30, 0.2)$, $P(X \\le 2) = 0.0442$ is at or below $0.10$, so $x = 2$ can be included in the region.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value above fails",
          "workingLatex": "P(X \\le 3) = 0.1227 > 0.10",
          "explanation": "Adding $x = 3$ takes the lower tail to $0.1227$, above the $10\\%$ level, so $3$ is excluded and $2$ is the critical value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the critical region",
          "workingLatex": "X \\le 2",
          "explanation": "Reject $H_0$ only if at most $2$ of the $30$ students cycle to school.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the acceptance region",
          "workingLatex": "3 \\le X \\le 30",
          "explanation": "Three or more cyclists is consistent with the original $20\\%$ rate at this level.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "P(X \\le 2) = 0.0442 = 4.42\\%",
          "explanation": "The true probability of the critical region under $H_0$ is $4.42\\%$, far below the nominal $10\\%$ because the next value overshoots the level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value",
          "workingLatex": "x = 4 > 2 \\Rightarrow \\text{not in critical region}",
          "explanation": "The observed $4$ cyclists lies in the acceptance region, above the critical value $2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level to reject $H_0$: the data do not show that fewer than $20\\%$ of students cycle to school.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 2$ (acceptance region $3 \\le X \\le 30$), with actual significance level $P(X \\le 2) = 0.0442 = 4.42\\%$. Since $x = 4$ is not in the critical region, do not reject $H_0$: there is no evidence at the $10\\%$ level that the proportion of students cycling has fallen."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value"
    ],
    "questionText": "A magician claims that a particular coin is fair. To investigate, the coin is spun $10$ times and lands on heads $9$ times. Test, at the $5\\%$ significance level, whether there is evidence that the coin is biased.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0010"
        },
        {
          "x": 1,
          "p": "0.0098"
        },
        {
          "x": 2,
          "p": "0.0439"
        },
        {
          "x": 3,
          "p": "0.1172"
        },
        {
          "x": 4,
          "p": "0.2051"
        },
        {
          "x": 5,
          "p": "0.2461"
        },
        {
          "x": 6,
          "p": "0.2051"
        },
        {
          "x": 7,
          "p": "0.1172"
        },
        {
          "x": 8,
          "p": "0.0439"
        },
        {
          "x": 9,
          "p": "0.0098"
        },
        {
          "x": 10,
          "p": "0.0010"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        9,
        10
      ],
      "caption": "Distribution of the number of heads under H0, with both critical tails highlighted.",
      "alt": "Bar chart of the binomial distribution B(10, 0.5) for x = 0 to 10; it is symmetric and peaks at x = 5. The two-tailed 5% critical region, the bars at x = 0, 1 and at x = 9, 10, is highlighted in both tails."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{probability the coin lands on heads}",
          "explanation": "The claim is about whether the coin is fair, so $p$ is the chance of a head on a single spin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "\"Fair\" means $p = 0.5$; \"biased\" allows the probability to be higher or lower, so we test $p \\ne 0.5$ — a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "If $H_0$ is true, the $10$ spins are independent with a constant head probability of $0.5$, so the number of heads $X$ is binomial.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\alpha = 0.05 \\ \\Rightarrow\\ \\tfrac{\\alpha}{2} = 0.025 \\text{ in each tail}",
          "explanation": "A two-tailed test shares the $5\\%$ between two tails, so each tail is judged against $\\tfrac{\\alpha}{2} = 0.025$, not $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 9 > 5 \\ \\Rightarrow\\ \\text{upper tail } P(X \\ge 9)",
          "explanation": "With $p = 0.5$ the results cluster around the middle value $5$; $9$ heads is unusually high, so the evidence lies in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tail probability using the complement",
          "workingLatex": "P(X \\ge 9) = 1 - P(X \\le 8)",
          "explanation": "\"At least $9$\" is the complement of \"at most $8$\", which can be read directly from cumulative binomial tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 9) = 1 - 0.9893 = 0.0107",
          "explanation": "Using $P(X \\le 8) = 0.9893$ for $B(10, 0.5)$ gives the probability of a result at least as extreme as $9$ in this tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the tail with the per-tail level",
          "workingLatex": "0.0107 < 0.025",
          "explanation": "All of the observed evidence sits in one tail, so we compare that single tail with the per-tail level $\\tfrac{\\alpha}{2} = 0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "The tail probability is smaller than $2.5\\%$, so a result this extreme is unlikely if the coin were fair.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude in context",
          "workingLatex": "\\text{Sufficient evidence at } 5\\% \\text{ that } p \\ne 0.5",
          "explanation": "There is sufficient evidence at the $5\\%$ level to conclude the coin is biased — it appears to favour heads.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 9) = 0.0107 < 0.025 = \\tfrac{\\alpha}{2}$, so reject $H_0$. There is sufficient evidence at the $5\\%$ level that the coin is biased."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A confectioner claims that $25\\%$ of the chocolates in its luxury tins are dark chocolate. A quality inspector suspects the true proportion is different and examines a random sample of $12$ chocolates, finding $6$ dark chocolates. Using the critical region method, test at the $10\\%$ significance level whether the proportion of dark chocolates differs from $25\\%$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0317"
        },
        {
          "x": 1,
          "p": "0.1267"
        },
        {
          "x": 2,
          "p": "0.2323"
        },
        {
          "x": 3,
          "p": "0.2581"
        },
        {
          "x": 4,
          "p": "0.1936"
        },
        {
          "x": 5,
          "p": "0.1032"
        },
        {
          "x": 6,
          "p": "0.0401"
        },
        {
          "x": 7,
          "p": "0.0115"
        },
        {
          "x": 8,
          "p": "0.0024"
        },
        {
          "x": 9,
          "p": "0.0004"
        },
        {
          "x": 10,
          "p": "0.0000"
        },
        {
          "x": 11,
          "p": "0.0000"
        },
        {
          "x": 12,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "caption": "Distribution of the number of dark chocolates under H0, with both critical tails highlighted.",
      "alt": "Bar chart of the binomial distribution B(12, 0.25) for x = 0 to 12, right-skewed and peaking near x = 3. The two-tailed 10% critical region, the bar at x = 0 and the bars from x = 7 to x = 12, is highlighted in both tails."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of chocolates that are dark}",
          "explanation": "The claim concerns the overall make-up of the tins, so $p$ is the population proportion of dark chocolates.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p \\ne 0.25",
          "explanation": "The inspector only suspects the proportion is \"different\", not specifically higher or lower, so this is a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.25)",
          "explanation": "If $H_0$ is true, the number of dark chocolates among $12$ independent selections is binomial with $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05 \\text{ per tail}",
          "explanation": "For a two-tailed test at $10\\%$, each critical region may have probability at most $\\tfrac{\\alpha}{2} = 0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower critical value",
          "workingLatex": "P(X \\le 0) = 0.0317 \\le 0.05, \\qquad P(X \\le 1) = 0.1584 > 0.05",
          "explanation": "The lower critical region is the largest block of small values whose total probability stays at or below $0.05$. Adding $X = 1$ would exceed it, so only $X = 0$ qualifies.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower: } X = 0",
          "explanation": "Just the single value $0$ is extreme enough in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper critical value",
          "workingLatex": "P(X \\ge 7) = 0.0143 \\le 0.05, \\qquad P(X \\ge 6) = 0.0544 > 0.05",
          "explanation": "Working down from the top, we include values until the tail would pass $0.05$; $X \\ge 7$ fits but including $6$ would push the tail over.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper: } X \\ge 7",
          "explanation": "Values of $7$ or more form the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "0.0317 + 0.0143 = 0.0459 \\ (4.59\\%)",
          "explanation": "Because the distribution is discrete, the true chance of rejecting a correct $H_0$ is $4.59\\%$, comfortably below the nominal $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observation with the critical region",
          "workingLatex": "x = 6 \\ \\text{is not in}\\ \\{0\\} \\cup \\{7,8,\\ldots,12\\}",
          "explanation": "The observed $6$ lies in the acceptance region $1 \\le X \\le 6$, so it is not extreme enough to reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level; the proportion of dark chocolates may still be $25\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region is $X = 0$ or $X \\ge 7$, with an actual significance level of $0.0459 = 4.59\\%$. Since $x = 6$ is not in the critical region, do not reject $H_0$: there is insufficient evidence at the $10\\%$ level that the proportion of dark chocolates differs from $25\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value"
    ],
    "questionText": "At a fairground, a spinner is claimed to land on red on $40\\%$ of spins. A visitor doubts this and spins it $10$ times, getting red just $1$ time. Test, at the $5\\%$ significance level, whether the proportion of red spins differs from $40\\%$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0060"
        },
        {
          "x": 1,
          "p": "0.0403"
        },
        {
          "x": 2,
          "p": "0.1209"
        },
        {
          "x": 3,
          "p": "0.2150"
        },
        {
          "x": 4,
          "p": "0.2508"
        },
        {
          "x": 5,
          "p": "0.2007"
        },
        {
          "x": 6,
          "p": "0.1115"
        },
        {
          "x": 7,
          "p": "0.0425"
        },
        {
          "x": 8,
          "p": "0.0106"
        },
        {
          "x": 9,
          "p": "0.0016"
        },
        {
          "x": 10,
          "p": "0.0001"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        8,
        9,
        10
      ],
      "caption": "Distribution of the number of red spins under H0, with both critical tails highlighted.",
      "alt": "Bar chart of the binomial distribution B(10, 0.4) for x = 0 to 10, peaking near x = 4. The two-tailed 5% critical region, the bar at x = 0 and the bars at x = 8, 9, 10, is highlighted in both tails."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{probability the spinner lands on red}",
          "explanation": "The claim is about the chance of red on any spin, so $p$ is that single-spin probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p \\ne 0.4",
          "explanation": "The visitor only doubts the value, without predicting a direction, so we test whether $p$ \"differs\" — a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.4)",
          "explanation": "If $H_0$ holds, the number of red results in $10$ independent spins is binomial with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the two-tailed comparison",
          "workingLatex": "\\text{Double the observed tail, then compare with } \\alpha = 0.05",
          "explanation": "An equivalent way to run a two-tailed test is to find the observed tail probability, double it, and compare with the full $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 1 < 4 \\ \\Rightarrow\\ \\text{lower tail } P(X \\le 1)",
          "explanation": "With $p = 0.4$ the results centre near $4$; getting red only $1$ time is low, so the evidence is in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\le 1) = 0.0464",
          "explanation": "Reading the cumulative value for $B(10, 0.4)$ gives the chance of a result at least as low as $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Double the tail for the two-tailed p-value",
          "workingLatex": "2 \\times 0.0464 = 0.0927",
          "explanation": "Doubling reflects that an equally extreme result could instead have appeared in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the significance level",
          "workingLatex": "0.0927 > 0.05",
          "explanation": "The doubled tail exceeds $5\\%$; equivalently the single tail $0.0464 > \\tfrac{\\alpha}{2} = 0.025$, so the result is not extreme enough.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "The observed result is consistent with $p = 0.4$ once we allow that low counts are fairly likely.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude in context",
          "workingLatex": "\\text{Insufficient evidence at } 5\\%",
          "explanation": "There is insufficient evidence at the $5\\%$ level that the proportion of red spins differs from $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 \\times P(X \\le 1) = 2 \\times 0.0464 = 0.0927 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the proportion of red spins differs from $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A student claims that a certain drawing pin is equally likely to land point-up or point-down when dropped. A teacher thinks it is not equally likely and drops the pin $12$ times; it lands point-up $10$ times. Using the critical region method, test at the $5\\%$ significance level whether the pin lands point-up with a probability different from $\\tfrac{1}{2}$.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0002"
        },
        {
          "x": 1,
          "p": "0.0029"
        },
        {
          "x": 2,
          "p": "0.0161"
        },
        {
          "x": 3,
          "p": "0.0537"
        },
        {
          "x": 4,
          "p": "0.1208"
        },
        {
          "x": 5,
          "p": "0.1934"
        },
        {
          "x": 6,
          "p": "0.2256"
        },
        {
          "x": 7,
          "p": "0.1934"
        },
        {
          "x": 8,
          "p": "0.1208"
        },
        {
          "x": 9,
          "p": "0.0537"
        },
        {
          "x": 10,
          "p": "0.0161"
        },
        {
          "x": 11,
          "p": "0.0029"
        },
        {
          "x": 12,
          "p": "0.0002"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        2,
        10,
        11,
        12
      ],
      "caption": "Distribution of the number of point-up landings under H0, with both critical tails highlighted.",
      "alt": "Bar chart of the binomial distribution B(12, 0.5) for x = 0 to 12; it is symmetric and peaks at x = 6. The two-tailed 5% critical region, the bars at x = 0, 1, 2 and at x = 10, 11, 12, is highlighted in both tails."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{probability the pin lands point-up}",
          "explanation": "The claim concerns how the pin lands, so $p$ is the probability of point-up on a single drop.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "\"Equally likely\" means $p = 0.5$; \"not equally likely\" allows either direction, giving a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.5)",
          "explanation": "If $H_0$ is true, the number of point-up landings in $12$ independent drops is binomial with $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025 \\text{ per tail}",
          "explanation": "For a two-tailed test at $5\\%$, each critical region can have probability at most $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower critical value",
          "workingLatex": "P(X \\le 2) = 0.0193 \\le 0.025, \\qquad P(X \\le 3) = 0.0730 > 0.025",
          "explanation": "The lower critical region is the largest block of small values keeping the tail at or below $0.025$; $X \\le 2$ fits but $X \\le 3$ is too big.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower: } X \\le 2",
          "explanation": "Values of $0$, $1$ or $2$ are extreme in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper critical value",
          "workingLatex": "P(X \\ge 10) = 0.0193 \\le 0.025, \\qquad P(X \\ge 9) = 0.0730 > 0.025",
          "explanation": "By the symmetry of $B(12, 0.5)$ the upper tail mirrors the lower one; $X \\ge 10$ stays under $0.025$ but $X \\ge 9$ does not.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper: } X \\ge 10",
          "explanation": "Values of $10$ or more are extreme in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "0.0193 + 0.0193 = 0.0386 \\ (3.86\\%)",
          "explanation": "Adding the two tail probabilities gives the true chance of rejecting a correct $H_0$: $3.86\\%$, below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observation with the critical region",
          "workingLatex": "x = 10 \\ \\text{lies in}\\ X \\ge 10",
          "explanation": "The observed $10$ falls inside the upper critical region, so it is extreme enough to reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the pin does not land point-up with probability $\\tfrac{1}{2}$ — it appears to favour point-up.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region is $X \\le 2$ or $X \\ge 10$, with an actual significance level of $0.0386 = 3.86\\%$. Since $x = 10$ is in the critical region, reject $H_0$: there is sufficient evidence at the $5\\%$ level that the pin does not land point-up with probability $\\tfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value"
    ],
    "questionText": "A political analyst states that $30\\%$ of voters in a region support a new policy. A campaigner believes the level of support is different. In a random sample of $20$ voters, $10$ say they support the policy. Test, at the $5\\%$ significance level, whether the proportion of supporters differs from $30\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of voters who support the policy}",
          "explanation": "The claim is about support across the whole region, so $p$ is the population proportion of supporters.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p \\ne 0.3",
          "explanation": "The campaigner thinks support is merely \"different\", not specifically up or down, so this is a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.3)",
          "explanation": "If $H_0$ is true, the number of supporters among $20$ independent voters is binomial with $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025 \\text{ per tail}",
          "explanation": "A two-tailed test at $5\\%$ allows only $0.025$ in each tail, so the observed tail must be compared with $0.025$, not $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 10 > 6 \\ \\Rightarrow\\ \\text{upper tail } P(X \\ge 10)",
          "explanation": "With $p = 0.3$ the counts centre near $6$; $10$ is above that, so the evidence is in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tail probability using the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "\"At least $10$\" is the complement of \"at most $9$\", which is the cumulative value in the tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 10) = 1 - 0.9520 = 0.0480",
          "explanation": "Using $P(X \\le 9) = 0.9520$ for $B(20, 0.3)$ gives the probability of a result at least as high as $10$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the per-tail level",
          "workingLatex": "0.0480 > 0.025",
          "explanation": "Here the recompute matters: although $0.0480 < 0.05$, the correct comparison in a two-tailed test is with $\\tfrac{\\alpha}{2} = 0.025$, and $0.0480$ is larger than that.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "The tail is not small enough once we correctly halve the significance level, so the result is not sufficiently extreme.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude in context",
          "workingLatex": "\\text{Insufficient evidence at } 5\\%",
          "explanation": "There is insufficient evidence at the $5\\%$ level that the proportion of supporters differs from $30\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(X \\ge 10) = 0.0480 > 0.025 = \\tfrac{\\alpha}{2}$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the proportion of supporters differs from $30\\%$ (note the comparison is with $0.025$, not $0.05$)."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A manufacturer claims that $20\\%$ of the mugs it produces are graded 'premium'. A retailer suspects the true proportion is not $20\\%$ and inspects a random sample of $25$ mugs, finding $9$ premium mugs. Using the critical region method, test at the $10\\%$ significance level whether the proportion of premium mugs differs from $20\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of mugs graded premium}",
          "explanation": "The claim is about the production process as a whole, so $p$ is the population proportion of premium mugs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p \\ne 0.2",
          "explanation": "The retailer suspects the proportion is simply \"not $20\\%$\", so both directions matter — a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(25,\\ 0.2)",
          "explanation": "If $H_0$ is true, the number of premium mugs in $25$ independent items is binomial with $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05 \\text{ per tail}",
          "explanation": "For a two-tailed test at $10\\%$, each critical region can carry probability at most $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower critical value",
          "workingLatex": "P(X \\le 1) = 0.0274 \\le 0.05, \\qquad P(X \\le 2) = 0.0982 > 0.05",
          "explanation": "Building the lower tail up from $0$, we can include $X \\le 1$ but adding $2$ would take the tail past $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower: } X \\le 1",
          "explanation": "Only $0$ or $1$ premium mugs are extreme enough in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper critical value",
          "workingLatex": "P(X \\ge 9) = 0.0468 \\le 0.05, \\qquad P(X \\ge 8) = 0.1091 > 0.05",
          "explanation": "Working down from the top, $X \\ge 9$ keeps the tail under $0.05$, but including $8$ would exceed it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper: } X \\ge 9",
          "explanation": "Values of $9$ or more form the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "0.0274 + 0.0468 = 0.0742 \\ (7.42\\%)",
          "explanation": "The two tails together give a true rejection probability of $7.42\\%$, below the nominal $10\\%$ because the counts are discrete.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observation with the critical region",
          "workingLatex": "x = 9 \\ \\text{lies in}\\ X \\ge 9",
          "explanation": "The observed $9$ is the smallest value of the upper critical region, so it does fall inside it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $10\\%$ level that the proportion of premium mugs differs from $20\\%$ — it appears higher.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region is $X \\le 1$ or $X \\ge 9$, with an actual significance level of $0.0742 = 7.42\\%$. Since $x = 9$ is in the critical region, reject $H_0$: there is sufficient evidence at the $10\\%$ level that the proportion of premium mugs differs from $20\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value"
    ],
    "questionText": "A restaurant manager believes that $40\\%$ of diners choose the vegetarian option. A new chef thinks the proportion has changed. Among a random sample of $20$ diners, $12$ choose the vegetarian option. Test, at the $5\\%$ significance level, whether the proportion choosing the vegetarian option differs from $40\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{proportion of diners choosing the vegetarian option}",
          "explanation": "The claim is about diners in general, so $p$ is the population proportion who choose vegetarian.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p \\ne 0.4",
          "explanation": "The chef only thinks the proportion has \"changed\", without saying which way, so this is a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.4)",
          "explanation": "If $H_0$ is true, the number choosing vegetarian among $20$ independent diners is binomial with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the two-tailed comparison",
          "workingLatex": "\\text{Double the observed tail, then compare with } \\alpha = 0.05",
          "explanation": "For a two-tailed test we may double the observed tail probability and compare the result with the full $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 12 > 8 \\ \\Rightarrow\\ \\text{upper tail } P(X \\ge 12)",
          "explanation": "With $p = 0.4$ the counts centre near $8$; $12$ is above that, so the evidence lies in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tail probability using the complement",
          "workingLatex": "P(X \\ge 12) = 1 - P(X \\le 11)",
          "explanation": "\"At least $12$\" is the complement of \"at most $11$\", read from the cumulative tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 12) = 1 - 0.9435 = 0.0565",
          "explanation": "Using $P(X \\le 11) = 0.9435$ for $B(20, 0.4)$ gives the upper-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Double it and compare with the level",
          "workingLatex": "2 \\times 0.0565 = 0.1131 > 0.05",
          "explanation": "The doubled tail is well above $5\\%$; equivalently the single tail $0.0565 > \\tfrac{\\alpha}{2} = 0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "The result is not extreme enough once the level is correctly split, so it is consistent with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude in context",
          "workingLatex": "\\text{Insufficient evidence at } 5\\%",
          "explanation": "There is insufficient evidence at the $5\\%$ level that the proportion choosing the vegetarian option differs from $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 \\times P(X \\ge 12) = 2 \\times 0.0565 = 0.1131 > 0.05$, so do not reject $H_0$. There is insufficient evidence at the $5\\%$ level that the proportion choosing the vegetarian option differs from $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A game designer claims that a new two-player game is perfectly balanced, so that Player A wins any given game with probability $\\tfrac{1}{2}$. A reviewer doubts this and records $15$ games, in which Player A wins $12$. Using the critical region method, test at the $5\\%$ significance level whether Player A's win probability differs from $\\tfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{probability that Player A wins a game}",
          "explanation": "The claim is about how often Player A wins, so $p$ is the win probability in a single game.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "\"Perfectly balanced\" means $p = 0.5$; the reviewer only doubts this, in either direction, so it is a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(15,\\ 0.5)",
          "explanation": "If $H_0$ is true, the number of games Player A wins out of $15$ independent games is binomial with $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025 \\text{ per tail}",
          "explanation": "A two-tailed test at $5\\%$ permits at most $0.025$ of probability in each critical tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the lower critical value",
          "workingLatex": "P(X \\le 3) = 0.0176 \\le 0.025, \\qquad P(X \\le 4) = 0.0592 > 0.025",
          "explanation": "Building up the lower tail, $X \\le 3$ stays under $0.025$ but $X \\le 4$ would exceed it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower: } X \\le 3",
          "explanation": "Player A winning $3$ or fewer games is extreme in the lower tail.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the upper critical value",
          "workingLatex": "P(X \\ge 12) = 0.0176 \\le 0.025, \\qquad P(X \\ge 11) = 0.0592 > 0.025",
          "explanation": "By symmetry the upper tail mirrors the lower one; $X \\ge 12$ stays under $0.025$ but $X \\ge 11$ does not.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper: } X \\ge 12",
          "explanation": "Player A winning $12$ or more games is extreme in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "0.0176 + 0.0176 = 0.0352 \\ (3.52\\%)",
          "explanation": "The combined tails give a true rejection probability of $3.52\\%$, below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observation with the critical region",
          "workingLatex": "x = 12 \\ \\text{lies in}\\ X \\ge 12",
          "explanation": "The observed $12$ is the boundary of the upper critical region, so it lies inside it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Conclude in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level that Player A's win probability differs from $\\tfrac{1}{2}$ — the game appears to favour Player A.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region is $X \\le 3$ or $X \\ge 12$, with an actual significance level of $0.0352 = 3.52\\%$. Since $x = 12$ is in the critical region, reject $H_0$: there is sufficient evidence at the $5\\%$ level that the game is not balanced."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value"
    ],
    "questionText": "A food scientist claims that people cannot distinguish a well-known cola from a cheaper brand, so that a taster identifies the well-known cola correctly with probability $\\tfrac{1}{2}$ (pure guessing). In a trial, $30$ tasters each take the test and $21$ identify it correctly. Test, at the $5\\%$ significance level, whether the probability of a correct identification differs from $\\tfrac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion being tested",
          "workingLatex": "p = \\text{probability a taster identifies the cola correctly}",
          "explanation": "The claim is about a typical taster, so $p$ is the probability of a correct identification on one test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "Pure guessing means $p = 0.5$; we test whether the true probability \"differs\" from this in either direction — a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(30,\\ 0.5)",
          "explanation": "If $H_0$ is true, the number of correct identifications among $30$ independent tasters is binomial with $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the two-tailed comparison",
          "workingLatex": "\\text{Double the observed tail, then compare with } \\alpha = 0.05",
          "explanation": "For a two-tailed test we can double the observed tail probability and compare it with the full $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 21 > 15 \\ \\Rightarrow\\ \\text{upper tail } P(X \\ge 21)",
          "explanation": "With $p = 0.5$ the counts centre near $15$; $21$ correct is above that, so the evidence lies in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tail probability using the complement",
          "workingLatex": "P(X \\ge 21) = 1 - P(X \\le 20)",
          "explanation": "\"At least $21$\" is the complement of \"at most $20$\", taken from the cumulative tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 21) = 1 - 0.9786 = 0.0214",
          "explanation": "Using $P(X \\le 20) = 0.9786$ for $B(30, 0.5)$ gives the upper-tail probability.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Double it and compare with the level",
          "workingLatex": "2 \\times 0.0214 = 0.0428 < 0.05",
          "explanation": "The doubled tail is below $5\\%$; equivalently the single tail $0.0214 < \\tfrac{\\alpha}{2} = 0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "A result this far from the centre is unlikely under pure guessing, so we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclude in context",
          "workingLatex": "\\text{Sufficient evidence at } 5\\%",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the probability of a correct identification differs from $\\tfrac{1}{2}$ — tasters can tell the colas apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2 \\times P(X \\ge 21) = 2 \\times 0.0214 = 0.0428 < 0.05$, so reject $H_0$. There is sufficient evidence at the $5\\%$ level that the probability of a correct identification differs from $\\tfrac{1}{2}$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A market research firm reports that $45\\%$ of shoppers in a city recognise a particular logo. A brand manager suspects the true proportion is different from $45\\%$ and surveys a random sample of $20$ shoppers, of whom $14$ recognise the logo. Using a $5\\%$ significance level, find both critical regions for a two-tailed test, state the acceptance region and the actual significance level, and determine whether there is evidence that the proportion differs from $45\\%$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of shoppers who recognise the logo}",
          "explanation": "The claim concerns the overall recognition rate, so $p$ is the population proportion our test is about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.45 \\qquad H_1{:}\\ p \\ne 0.45",
          "explanation": "The manager only suspects the proportion is different, not specifically higher or lower, so this is a two-tailed test with $H_1{:}\\ p \\ne 0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.45)",
          "explanation": "If $H_0$ is true, the number of the $20$ independent shoppers who recognise the logo is binomial with $n=20$ and $p=0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "A two-tailed test looks for evidence in both tails, so we allow at most $0.025$ of probability in each tail rather than the whole $5\\%$ in one.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 4) = 0.0189",
          "explanation": "We want the largest $c$ with $P(X \\le c) \\le 0.025$. Here $P(X \\le 4) = 0.0189$, comfortably within the $0.025$ allowance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 5) = 0.0553 > 0.025",
          "explanation": "Including $5$ pushes the tail past $0.025$, so $5$ cannot join the lower region; the boundary is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 4",
          "explanation": "The largest lower tail staying within $0.025$ is $\\{0,1,2,3,4\\}$, so the lower critical value is $4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 14) = 1 - P(X \\le 13)",
          "explanation": "Cumulative tables give 'at most' probabilities, so we rewrite 'at least $14$' as $1 - P(X \\le 13)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 14) = 1 - 0.9786 = 0.0214",
          "explanation": "This is $\\le 0.025$, so $14$ can be included in the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 13) = 0.0580 > 0.025",
          "explanation": "Including $13$ would take the upper tail above $0.025$, so $13$ stays out; the upper boundary is $14$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 14",
          "explanation": "The smallest upper tail within $0.025$ starts at $14$, so the upper critical value is $14$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 4 \\ \\text{or}\\ X \\ge 14; \\quad \\text{accept } 5 \\le X \\le 13",
          "explanation": "We reject $H_0$ for a very small or very large count; any value from $5$ to $13$ inclusive is consistent with $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 4) + P(X \\ge 14) = 0.0189 + 0.0214 = 0.0403",
          "explanation": "The actual significance level is the true probability of landing in the critical region under $H_0$, so we add the two tail probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0403 < 0.05",
          "explanation": "Because $X$ is discrete we cannot make each tail exactly $2.5\\%$, so the real level ($4.03\\%$) sits below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 14 \\ \\Rightarrow\\ X \\ge 14",
          "explanation": "The sample gave $14$, which equals the upper critical value and so is the least extreme value still inside the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion of shoppers recognising the logo appears to differ from $45\\%$ (the data suggest it is higher).",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 4$ or $X \\ge 14$; acceptance region $5 \\le X \\le 13$. Actual significance level $= 0.0189 + 0.0214 = 0.0403$ ($4.03\\%$). Since $x = 14$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that the proportion differs from $45\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "An entomologist believes that $35\\%$ of a beetle species in a woodland carry a distinctive wing marking. She is concerned that the proportion in a newly surveyed area is different. In a random sample of $10$ beetles, $7$ carry the marking. Test at the $10\\%$ significance level whether the proportion differs from $35\\%$: find both critical regions, state the acceptance region and actual significance level, and reach a conclusion in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0135"
        },
        {
          "x": 1,
          "p": "0.0725"
        },
        {
          "x": 2,
          "p": "0.1757"
        },
        {
          "x": 3,
          "p": "0.2522"
        },
        {
          "x": 4,
          "p": "0.2377"
        },
        {
          "x": 5,
          "p": "0.1536"
        },
        {
          "x": 6,
          "p": "0.0689"
        },
        {
          "x": 7,
          "p": "0.0212"
        },
        {
          "x": 8,
          "p": "0.0043"
        },
        {
          "x": 9,
          "p": "0.0005"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        7,
        8,
        9,
        10
      ],
      "caption": "B(10, 0.35) with both critical tails highlighted",
      "alt": "Bar chart of the binomial distribution B(10, 0.35). Bars rise to a peak around x = 3 and 4 then fall away. The bar at x = 0 and the bars from x = 7 to x = 10 are highlighted as the two critical regions."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of beetles carrying the wing marking}",
          "explanation": "The test is about the overall marking rate in the new area, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.35 \\qquad H_1{:}\\ p \\ne 0.35",
          "explanation": "She only suspects a difference in either direction, so the alternative is $p \\ne 0.35$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.35)",
          "explanation": "Assuming $H_0$, the number carrying the marking out of $10$ independent beetles is binomial with $n=10$, $p=0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05",
          "explanation": "With a two-tailed test we share the $10\\%$ equally, allowing at most $0.05$ in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 0) = 0.0135",
          "explanation": "We look for the largest $c$ with $P(X \\le c) \\le 0.05$. Just $P(X \\le 0) = 0.0135$ fits within $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 1) = 0.0860 > 0.05",
          "explanation": "Adding $1$ takes the lower tail above $0.05$, so only $0$ survives in the lower region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X = 0",
          "explanation": "Only the single outcome $0$ keeps the lower tail within $0.05$, so the lower critical value is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 7) = 1 - P(X \\le 6)",
          "explanation": "We rewrite 'at least $7$' using the cumulative value up to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 7) = 1 - 0.9740 = 0.0260",
          "explanation": "This is $\\le 0.05$, so $7$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 6) = 0.0949 > 0.05",
          "explanation": "Including $6$ would exceed $0.05$, so $6$ is excluded; the upper boundary is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 7",
          "explanation": "The smallest upper tail within $0.05$ starts at $7$, so the upper critical value is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X = 0 \\ \\text{or}\\ X \\ge 7; \\quad \\text{accept } 1 \\le X \\le 6",
          "explanation": "Extreme low ($0$) or high ($\\ge 7$) counts reject $H_0$; values $1$ to $6$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 0) + P(X \\ge 7) = 0.0135 + 0.0260 = 0.0395",
          "explanation": "Adding the true probabilities of the two tails gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0395 < 0.10",
          "explanation": "Discreteness means neither tail reaches its full $0.05$, so the real level ($3.95\\%$) is well under the nominal $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 7 \\ \\Rightarrow\\ X \\ge 7",
          "explanation": "The observed $7$ equals the upper critical value, so it is just inside the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $10\\%$ level to reject $H_0$: the proportion of beetles carrying the marking appears to differ from $35\\%$ (it seems higher).",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X = 0$ or $X \\ge 7$; acceptance region $1 \\le X \\le 6$. Actual significance level $= 0.0135 + 0.0260 = 0.0395$ ($3.95\\%$). Since $x = 7$ lies in the critical region, reject $H_0$: there is evidence at the $10\\%$ level that the proportion differs from $35\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "acceptance-region"
    ],
    "questionText": "A factory's moulding process historically produces $20\\%$ of items with a minor blemish ('seconds'). After adjusting the machine, the manager wants to know whether the proportion of seconds has changed. In a random sample of $25$ items, $9$ are seconds. Test at the $5\\%$ significance level, finding both critical regions, the acceptance region, the actual significance level, and a conclusion in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of items that are seconds}",
          "explanation": "The test concerns the overall rate of blemished items, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.20 \\qquad H_1{:}\\ p \\ne 0.20",
          "explanation": "'Changed' allows either an increase or a decrease, so the alternative is $p \\ne 0.20$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(25,\\ 0.20)",
          "explanation": "Assuming $H_0$, the number of seconds among $25$ independent items is binomial with $n=25$, $p=0.20$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "Sharing the $5\\%$ equally allows at most $0.025$ of probability in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 0) = 0.0038",
          "explanation": "We seek the largest $c$ with $P(X \\le c) \\le 0.025$. Only $P(X \\le 0) = 0.0038$ is within $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 1) = 0.0274 > 0.025",
          "explanation": "Adding $1$ takes the lower tail just above $0.025$, so $1$ is excluded; the boundary is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X = 0",
          "explanation": "Only the outcome $0$ keeps the lower tail within $0.025$, so the lower critical value is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "We rewrite 'at least $10$' using the cumulative value up to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 10) = 1 - 0.9827 = 0.0173",
          "explanation": "This is $\\le 0.025$, so $10$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 9) = 0.0468 > 0.025",
          "explanation": "Including $9$ would push the upper tail above $0.025$, so $9$ is excluded; the upper boundary is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 10",
          "explanation": "The smallest upper tail within $0.025$ starts at $10$, so the upper critical value is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X = 0 \\ \\text{or}\\ X \\ge 10; \\quad \\text{accept } 1 \\le X \\le 9",
          "explanation": "We reject $H_0$ only for $0$ seconds or for $10$ or more; counts from $1$ to $9$ are consistent with $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 0) + P(X \\ge 10) = 0.0038 + 0.0173 = 0.0211",
          "explanation": "Adding the two tail probabilities gives the true chance of rejecting $H_0$ when it is in fact true.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0211 < 0.05",
          "explanation": "The discreteness of $X$ leaves both tails short of $0.025$, so the actual level ($2.11\\%$) is well below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the observed value directly",
          "workingLatex": "P(X \\ge 9) = 0.0468 > 0.025",
          "explanation": "Measured directly, a result of $9$ or more has probability $4.68\\%$, above the per-tail limit, so $9$ is not extreme enough to reject.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Locate the observed value",
          "workingLatex": "x = 9 \\ \\Rightarrow\\ 1 \\le X \\le 9",
          "explanation": "The observed $9$ sits just inside the acceptance region, one short of the upper critical value $10$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: no significant change in the proportion of seconds from $20\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X = 0$ or $X \\ge 10$; acceptance region $1 \\le X \\le 9$. Actual significance level $= 0.0038 + 0.0173 = 0.0211$ ($2.11\\%$). Since $x = 9$ lies in the acceptance region (just below the critical value $10$), do not reject $H_0$: no evidence at the $5\\%$ level that the proportion of seconds has changed from $20\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "In a taste test, a company claims tasters cannot tell its cola from a rival's, so the proportion $p$ correctly identifying the company's cola should be $0.5$. A researcher wants to test whether $p$ differs from $0.5$. Of $12$ randomly chosen tasters, $10$ correctly identify the cola. Test at the $5\\%$ significance level: give both critical regions, the acceptance region, the actual significance level and your conclusion.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0002"
        },
        {
          "x": 1,
          "p": "0.0029"
        },
        {
          "x": 2,
          "p": "0.0161"
        },
        {
          "x": 3,
          "p": "0.0537"
        },
        {
          "x": 4,
          "p": "0.1208"
        },
        {
          "x": 5,
          "p": "0.1934"
        },
        {
          "x": 6,
          "p": "0.2256"
        },
        {
          "x": 7,
          "p": "0.1934"
        },
        {
          "x": 8,
          "p": "0.1208"
        },
        {
          "x": 9,
          "p": "0.0537"
        },
        {
          "x": 10,
          "p": "0.0161"
        },
        {
          "x": 11,
          "p": "0.0029"
        },
        {
          "x": 12,
          "p": "0.0002"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        2,
        10,
        11,
        12
      ],
      "caption": "B(12, 0.5) with both critical tails highlighted",
      "alt": "Bar chart of the symmetric binomial distribution B(12, 0.5), peaking at x = 6. The bars from x = 0 to x = 2 and from x = 10 to x = 12 are highlighted as the two critical regions."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of tasters who correctly identify the cola}",
          "explanation": "The claim is about the overall success rate, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "We test whether $p$ differs from $0.5$ in either direction, so the alternative is $p \\ne 0.5$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.5)",
          "explanation": "Assuming $H_0$, the number of correct identifications out of $12$ independent tasters is binomial with $n=12$, $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "With a two-tailed test each tail is allowed at most $0.025$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 2) = 0.0193",
          "explanation": "We want the largest $c$ with $P(X \\le c) \\le 0.025$. Here $P(X \\le 2) = 0.0193$ fits within $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 3) = 0.0730 > 0.025",
          "explanation": "Adding $3$ takes the lower tail past $0.025$, so $3$ is excluded; the boundary is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 2",
          "explanation": "The largest lower tail within $0.025$ is $\\{0,1,2\\}$, so the lower critical value is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "We rewrite 'at least $10$' using the cumulative value up to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 10) = 1 - 0.9807 = 0.0193",
          "explanation": "This equals the lower tail (the distribution is symmetric) and is $\\le 0.025$, so $10$ is in the upper region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 9) = 0.0730 > 0.025",
          "explanation": "Including $9$ would exceed $0.025$, so $9$ is excluded; the upper boundary is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 10",
          "explanation": "The smallest upper tail within $0.025$ starts at $10$, so the upper critical value is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 2 \\ \\text{or}\\ X \\ge 10; \\quad \\text{accept } 3 \\le X \\le 9",
          "explanation": "Very few or very many correct identifications reject $H_0$; counts from $3$ to $9$ are consistent with guessing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 2) + P(X \\ge 10) = 0.0193 + 0.0193 = 0.0386",
          "explanation": "Adding the two equal tails gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0386 < 0.05",
          "explanation": "Even though the distribution is symmetric, discreteness keeps each tail below $0.025$, so the real level ($3.86\\%$) is under the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 10 \\ \\Rightarrow\\ X \\ge 10",
          "explanation": "The observed $10$ equals the upper critical value, so it is just inside the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion correctly identifying the cola differs from $0.5$, so tasters can tell the colas apart.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 2$ or $X \\ge 10$; acceptance region $3 \\le X \\le 9$. Actual significance level $= 0.0193 + 0.0193 = 0.0386$ ($3.86\\%$). Since $x = 10$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that $p$ differs from $0.5$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A council report states that $40\\%$ of residents support a new parking scheme. A councillor believes the level of support has changed. In a random sample of $30$ residents, $6$ support the scheme. Test, at the $5\\%$ significance level, whether the proportion differs from $40\\%$: find both critical regions, the acceptance region, the actual significance level, and conclude in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of residents who support the scheme}",
          "explanation": "The report is about the overall level of support, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.40 \\qquad H_1{:}\\ p \\ne 0.40",
          "explanation": "'Changed' means higher or lower, so the alternative is $p \\ne 0.40$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(30,\\ 0.40)",
          "explanation": "Assuming $H_0$, the number supporting out of $30$ independent residents is binomial with $n=30$, $p=0.40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "Each tail of the two-tailed test is allowed at most $0.025$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 6) = 0.0172",
          "explanation": "We seek the largest $c$ with $P(X \\le c) \\le 0.025$. Here $P(X \\le 6) = 0.0172$ is within $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 7) = 0.0435 > 0.025",
          "explanation": "Adding $7$ takes the lower tail above $0.025$, so $7$ is excluded; the boundary is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 6",
          "explanation": "The largest lower tail within $0.025$ is $\\{0,\\dots,6\\}$, so the lower critical value is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 18) = 1 - P(X \\le 17)",
          "explanation": "We rewrite 'at least $18$' using the cumulative value up to $17$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 18) = 1 - 0.9788 = 0.0212",
          "explanation": "This is $\\le 0.025$, so $18$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 17) = 0.0481 > 0.025",
          "explanation": "Including $17$ would exceed $0.025$, so $17$ is excluded; the upper boundary is $18$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 18",
          "explanation": "The smallest upper tail within $0.025$ starts at $18$, so the upper critical value is $18$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 6 \\ \\text{or}\\ X \\ge 18; \\quad \\text{accept } 7 \\le X \\le 17",
          "explanation": "Very low ($\\le 6$) or very high ($\\ge 18$) support rejects $H_0$; counts from $7$ to $17$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 6) + P(X \\ge 18) = 0.0172 + 0.0212 = 0.0384",
          "explanation": "The actual significance level is the total probability of the critical region under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0384 < 0.05",
          "explanation": "Discreteness stops each tail reaching $0.025$, so the actual level ($3.84\\%$) is below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 6 \\ \\Rightarrow\\ X \\le 6",
          "explanation": "The observed $6$ equals the lower critical value, so it is just inside the lower critical region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: support for the scheme appears to differ from $40\\%$ (it seems to have fallen).",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 6$ or $X \\ge 18$; acceptance region $7 \\le X \\le 17$. Actual significance level $= 0.0172 + 0.0212 = 0.0384$ ($3.84\\%$). Since $x = 6$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that support differs from $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "acceptance-region"
    ],
    "questionText": "An online game advertises that players win $40\\%$ of rounds. A player suspects the true win rate is not $40\\%$. In a random sample of $10$ rounds she wins $2$. Test at the $10\\%$ significance level whether the win rate differs from $40\\%$: find both critical regions, the acceptance region, the actual significance level, and give your conclusion.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0060"
        },
        {
          "x": 1,
          "p": "0.0403"
        },
        {
          "x": 2,
          "p": "0.1209"
        },
        {
          "x": 3,
          "p": "0.2150"
        },
        {
          "x": 4,
          "p": "0.2508"
        },
        {
          "x": 5,
          "p": "0.2007"
        },
        {
          "x": 6,
          "p": "0.1115"
        },
        {
          "x": 7,
          "p": "0.0425"
        },
        {
          "x": 8,
          "p": "0.0106"
        },
        {
          "x": 9,
          "p": "0.0016"
        },
        {
          "x": 10,
          "p": "0.0001"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        8,
        9,
        10
      ],
      "caption": "B(10, 0.4) with both critical tails highlighted",
      "alt": "Bar chart of the binomial distribution B(10, 0.4), peaking at x = 4. The bars at x = 0 and 1 and the bars from x = 8 to x = 10 are highlighted as the two critical regions."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of rounds that are won}",
          "explanation": "The advertised claim is about the overall win rate, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.40 \\qquad H_1{:}\\ p \\ne 0.40",
          "explanation": "She suspects the rate is not $40\\%$, in either direction, so the alternative is $p \\ne 0.40$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.40)",
          "explanation": "Assuming $H_0$, the number of wins in $10$ independent rounds is binomial with $n=10$, $p=0.40$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05",
          "explanation": "The $10\\%$ is shared equally, allowing at most $0.05$ of probability in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 1) = 0.0464",
          "explanation": "We want the largest $c$ with $P(X \\le c) \\le 0.05$. Here $P(X \\le 1) = 0.0464$, just within $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 2) = 0.1673 > 0.05",
          "explanation": "Adding $2$ jumps the lower tail well above $0.05$, so $2$ is excluded; the boundary is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 1",
          "explanation": "The largest lower tail within $0.05$ is $\\{0,1\\}$, so the lower critical value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 8) = 1 - P(X \\le 7)",
          "explanation": "We rewrite 'at least $8$' using the cumulative value up to $7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 8) = 1 - 0.9877 = 0.0123",
          "explanation": "This is comfortably $\\le 0.05$, so $8$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 7) = 0.0548 > 0.05",
          "explanation": "Including $7$ would exceed $0.05$, so $7$ is excluded; the upper boundary is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 8",
          "explanation": "The smallest upper tail within $0.05$ starts at $8$, so the upper critical value is $8$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 1 \\ \\text{or}\\ X \\ge 8; \\quad \\text{accept } 2 \\le X \\le 7",
          "explanation": "Very few ($\\le 1$) or very many ($\\ge 8$) wins reject $H_0$; counts from $2$ to $7$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 1) + P(X \\ge 8) = 0.0464 + 0.0123 = 0.0587",
          "explanation": "Adding the two tail probabilities gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0587 < 0.10",
          "explanation": "The lower tail nearly fills its $0.05$ but the upper tail is small, so the actual level ($5.87\\%$) falls short of the nominal $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the observed value directly",
          "workingLatex": "P(X \\le 2) = 0.1673 > 0.05",
          "explanation": "Measured directly, a result of $2$ or fewer has probability $16.73\\%$, far above the per-tail limit, so $2$ is not extreme.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Locate the observed value",
          "workingLatex": "x = 2 \\ \\Rightarrow\\ 2 \\le X \\le 7",
          "explanation": "The observed $2$ lies just inside the acceptance region, one above the lower critical value $1$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level to reject $H_0$: no significant evidence that the win rate differs from $40\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ or $X \\ge 8$; acceptance region $2 \\le X \\le 7$. Actual significance level $= 0.0464 + 0.0123 = 0.0587$ ($5.87\\%$). Since $x = 2$ lies in the acceptance region (just above the critical value $1$), do not reject $H_0$: no evidence at the $10\\%$ level that the win rate differs from $40\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A local authority states that $30\\%$ of pupils walk to a school. The head teacher thinks this proportion has changed since a new road opened. In a random sample of $20$ pupils, $1$ walks to school. Test at the $5\\%$ significance level whether the proportion differs from $30\\%$: find both critical regions, the acceptance region, the actual significance level and a conclusion in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of pupils who walk to school}",
          "explanation": "The authority's figure is the overall walking rate, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.30 \\qquad H_1{:}\\ p \\ne 0.30",
          "explanation": "'Changed' allows an increase or decrease, so the alternative is $p \\ne 0.30$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.30)",
          "explanation": "Assuming $H_0$, the number who walk out of $20$ independent pupils is binomial with $n=20$, $p=0.30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "Each tail of the two-tailed test is allowed at most $0.025$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 1) = 0.0076",
          "explanation": "We seek the largest $c$ with $P(X \\le c) \\le 0.025$. Here $P(X \\le 1) = 0.0076$ is within $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 2) = 0.0355 > 0.025",
          "explanation": "Adding $2$ takes the lower tail above $0.025$, so $2$ is excluded; the boundary is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 1",
          "explanation": "The largest lower tail within $0.025$ is $\\{0,1\\}$, so the lower critical value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 11) = 1 - P(X \\le 10)",
          "explanation": "We rewrite 'at least $11$' using the cumulative value up to $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 11) = 1 - 0.9829 = 0.0171",
          "explanation": "This is $\\le 0.025$, so $11$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 10) = 0.0480 > 0.025",
          "explanation": "Including $10$ would exceed $0.025$, so $10$ is excluded; the upper boundary is $11$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 11",
          "explanation": "The smallest upper tail within $0.025$ starts at $11$, so the upper critical value is $11$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 1 \\ \\text{or}\\ X \\ge 11; \\quad \\text{accept } 2 \\le X \\le 10",
          "explanation": "Very few ($\\le 1$) or very many ($\\ge 11$) walkers reject $H_0$; counts from $2$ to $10$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 1) + P(X \\ge 11) = 0.0076 + 0.0171 = 0.0247",
          "explanation": "Adding the two tail probabilities gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0247 < 0.05",
          "explanation": "Discreteness keeps both tails under $0.025$, so the actual level ($2.47\\%$) is below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 1 \\ \\Rightarrow\\ X \\le 1",
          "explanation": "The observed $1$ equals the lower critical value, so it is just inside the lower critical region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $5\\%$ level to reject $H_0$: the proportion of pupils walking to school appears to differ from $30\\%$ (it seems to have fallen).",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ or $X \\ge 11$; acceptance region $2 \\le X \\le 10$. Actual significance level $= 0.0076 + 0.0171 = 0.0247$ ($2.47\\%$). Since $x = 1$ lies in the critical region, reject $H_0$: there is evidence at the $5\\%$ level that the proportion differs from $30\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A short quiz has $8$ true/false questions. A teacher suspects a particular pupil is not simply guessing (pure guessing would give probability $0.5$ of a correct answer on each question). The pupil answers $7$ correctly. Test, at the $10\\%$ significance level, whether the probability of a correct answer differs from $0.5$: find both critical regions, the acceptance region, the actual significance level and conclude.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0039"
        },
        {
          "x": 1,
          "p": "0.0312"
        },
        {
          "x": 2,
          "p": "0.1094"
        },
        {
          "x": 3,
          "p": "0.2188"
        },
        {
          "x": 4,
          "p": "0.2734"
        },
        {
          "x": 5,
          "p": "0.2188"
        },
        {
          "x": 6,
          "p": "0.1094"
        },
        {
          "x": 7,
          "p": "0.0312"
        },
        {
          "x": 8,
          "p": "0.0039"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        7,
        8
      ],
      "caption": "B(8, 0.5) with both critical tails highlighted",
      "alt": "Bar chart of the symmetric binomial distribution B(8, 0.5), peaking at x = 4. The bars at x = 0 and 1 and the bars at x = 7 and 8 are highlighted as the two critical regions."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the probability",
          "workingLatex": "p = \\text{probability of a correct answer on a question}",
          "explanation": "Guessing gives $p = 0.5$; the test is about whether this pupil's true success probability is different.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "'Not simply guessing' allows better or worse than chance, so the alternative is $p \\ne 0.5$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(8,\\ 0.5)",
          "explanation": "Assuming $H_0$, the number correct out of $8$ independent questions is binomial with $n=8$, $p=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05",
          "explanation": "With a two-tailed test each tail is allowed at most $0.05$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 1) = 0.0352",
          "explanation": "We want the largest $c$ with $P(X \\le c) \\le 0.05$. Here $P(X \\le 1) = 0.0352$ fits within $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 2) = 0.1445 > 0.05",
          "explanation": "Adding $2$ takes the lower tail well above $0.05$, so $2$ is excluded; the boundary is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 1",
          "explanation": "The largest lower tail within $0.05$ is $\\{0,1\\}$, so the lower critical value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 7) = 1 - P(X \\le 6)",
          "explanation": "We rewrite 'at least $7$' using the cumulative value up to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 7) = 1 - 0.9648 = 0.0352",
          "explanation": "By symmetry this equals the lower tail and is $\\le 0.05$, so $7$ belongs to the upper region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 6) = 0.1445 > 0.05",
          "explanation": "Including $6$ would exceed $0.05$, so $6$ is excluded; the upper boundary is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 7",
          "explanation": "The smallest upper tail within $0.05$ starts at $7$, so the upper critical value is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 1 \\ \\text{or}\\ X \\ge 7; \\quad \\text{accept } 2 \\le X \\le 6",
          "explanation": "Very few ($\\le 1$) or very many ($\\ge 7$) correct answers reject $H_0$; counts from $2$ to $6$ look like guessing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 1) + P(X \\ge 7) = 0.03516 + 0.03516 = 0.0703",
          "explanation": "Adding the two equal tails gives the actual significance level. Keeping an extra figure in each tail ($0.03516$) makes the total round cleanly to $0.0703$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0703 < 0.10",
          "explanation": "With only $8$ trials the steps are coarse, so even the symmetric tails leave the actual level ($7.03\\%$) below the nominal $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Test the observed value",
          "workingLatex": "x = 7 \\ \\Rightarrow\\ X \\ge 7",
          "explanation": "The observed $7$ equals the upper critical value, so it is just inside the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "There is sufficient evidence at the $10\\%$ level to reject $H_0$: the pupil's success probability appears to differ from $0.5$, so they are probably not simply guessing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ or $X \\ge 7$; acceptance region $2 \\le X \\le 6$. Actual significance level $= 0.03516 + 0.03516 = 0.0703$ ($7.03\\%$). Since $x = 7$ lies in the critical region, reject $H_0$: there is evidence at the $10\\%$ level that $p$ differs from $0.5$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "acceptance-region"
    ],
    "questionText": "A seed supplier states that $15\\%$ of a batch of seeds fail to germinate. After a change in storage conditions, a grower wants to know whether the failure rate has changed. In a random sample of $40$ seeds, $10$ fail to germinate. Test at the $10\\%$ significance level: find both critical regions, the acceptance region, the actual significance level, and reach a conclusion in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of seeds that fail to germinate}",
          "explanation": "The supplier's figure is the overall failure rate, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.15 \\qquad H_1{:}\\ p \\ne 0.15",
          "explanation": "'Changed' means higher or lower, so the alternative is $p \\ne 0.15$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(40,\\ 0.15)",
          "explanation": "Assuming $H_0$, the number of failures among $40$ independent seeds is binomial with $n=40$, $p=0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.10}{2} = 0.05",
          "explanation": "The $10\\%$ is shared equally, allowing at most $0.05$ of probability in each tail.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 2) = 0.0486",
          "explanation": "We seek the largest $c$ with $P(X \\le c) \\le 0.05$. Here $P(X \\le 2) = 0.0486$, just within $0.05$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 3) = 0.1302 > 0.05",
          "explanation": "Adding $3$ jumps the lower tail above $0.05$, so $3$ is excluded; the boundary is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 2",
          "explanation": "The largest lower tail within $0.05$ is $\\{0,1,2\\}$, so the lower critical value is $2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 11) = 1 - P(X \\le 10)",
          "explanation": "We rewrite 'at least $11$' using the cumulative value up to $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 11) = 1 - 0.9701 = 0.0299",
          "explanation": "This is $\\le 0.05$, so $11$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 10) = 0.0672 > 0.05",
          "explanation": "Including $10$ would exceed $0.05$, so $10$ is excluded; the upper boundary is $11$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 11",
          "explanation": "The smallest upper tail within $0.05$ starts at $11$, so the upper critical value is $11$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 2 \\ \\text{or}\\ X \\ge 11; \\quad \\text{accept } 3 \\le X \\le 10",
          "explanation": "Very few ($\\le 2$) or very many ($\\ge 11$) failures reject $H_0$; counts from $3$ to $10$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 2) + P(X \\ge 11) = 0.0486 + 0.0299 = 0.0785",
          "explanation": "Adding the two tail probabilities gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0785 < 0.10",
          "explanation": "The lower tail almost fills its $0.05$ but the upper tail is smaller, so the actual level ($7.85\\%$) stays below the nominal $10\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the observed value directly",
          "workingLatex": "P(X \\ge 10) = 0.0672 > 0.05",
          "explanation": "Measured directly, a result of $10$ or more has probability $6.72\\%$, above the per-tail limit, so $10$ is not extreme enough to reject.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Locate the observed value",
          "workingLatex": "x = 10 \\ \\Rightarrow\\ 3 \\le X \\le 10",
          "explanation": "The observed $10$ lies just inside the acceptance region, one short of the upper critical value $11$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $10\\%$ level to reject $H_0$: no significant change in the failure rate from $15\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 2$ or $X \\ge 11$; acceptance region $3 \\le X \\le 10$. Actual significance level $= 0.0486 + 0.0299 = 0.0785$ ($7.85\\%$). Since $x = 10$ lies in the acceptance region (just below the critical value $11$), do not reject $H_0$: no evidence at the $10\\%$ level that the failure rate has changed from $15\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "acceptance-region"
    ],
    "questionText": "A wildlife survey states that $25\\%$ of foxes in a region are melanistic (dark-coated). A researcher tests whether the proportion is different. In a random sample of $20$ foxes, $2$ are melanistic. Test at the $5\\%$ significance level: find both critical regions, the acceptance region, the actual significance level, and conclude in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the proportion",
          "workingLatex": "p = \\text{proportion of foxes that are melanistic}",
          "explanation": "The survey figure is the overall proportion of dark-coated foxes, so $p$ is that population proportion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p \\ne 0.25",
          "explanation": "'Different' allows higher or lower, so the alternative is $p \\ne 0.25$: a two-tailed test.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.25)",
          "explanation": "Assuming $H_0$, the number of melanistic foxes among $20$ independent foxes is binomial with $n=20$, $p=0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the significance level between the tails",
          "workingLatex": "\\tfrac{\\alpha}{2} = \\tfrac{0.05}{2} = 0.025",
          "explanation": "Each tail of the two-tailed test is allowed at most $0.025$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Search the lower tail",
          "workingLatex": "P(X \\le 1) = 0.0243",
          "explanation": "We seek the largest $c$ with $P(X \\le c) \\le 0.025$. Here $P(X \\le 1) = 0.0243$, only just within $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the next value up",
          "workingLatex": "P(X \\le 2) = 0.0913 > 0.025",
          "explanation": "Adding $2$ jumps the lower tail above $0.025$, so $2$ is excluded; the boundary is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical region",
          "workingLatex": "\\text{Lower critical region: } X \\le 1",
          "explanation": "The largest lower tail within $0.025$ is $\\{0,1\\}$, so the lower critical value is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the upper tail with the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "We rewrite 'at least $10$' using the cumulative value up to $9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the upper tail",
          "workingLatex": "P(X \\ge 10) = 1 - 0.9861 = 0.0139",
          "explanation": "This is $\\le 0.025$, so $10$ belongs to the upper critical region.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check one value lower",
          "workingLatex": "P(X \\ge 9) = 0.0409 > 0.025",
          "explanation": "Including $9$ would exceed $0.025$, so $9$ is excluded; the upper boundary is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the upper critical region",
          "workingLatex": "\\text{Upper critical region: } X \\ge 10",
          "explanation": "The smallest upper tail within $0.025$ starts at $10$, so the upper critical value is $10$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the critical and acceptance regions",
          "workingLatex": "\\text{CR: } X \\le 1 \\ \\text{or}\\ X \\ge 10; \\quad \\text{accept } 2 \\le X \\le 9",
          "explanation": "Very few ($\\le 1$) or very many ($\\ge 10$) melanistic foxes reject $H_0$; counts from $2$ to $9$ are consistent with it.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the actual significance level",
          "workingLatex": "P(X \\le 1) + P(X \\ge 10) = 0.0243 + 0.0139 = 0.0382",
          "explanation": "Adding the two tail probabilities gives the actual significance level of the test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare with the nominal level",
          "workingLatex": "0.0382 < 0.05",
          "explanation": "The lower tail almost fills its $0.025$ but the upper is smaller, so the actual level ($3.82\\%$) is below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Check the observed value directly",
          "workingLatex": "P(X \\le 2) = 0.0913 > 0.025",
          "explanation": "Measured directly, a result of $2$ or fewer has probability $9.13\\%$, above the per-tail limit, so $2$ is not extreme enough to reject.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Locate the observed value",
          "workingLatex": "x = 2 \\ \\Rightarrow\\ 2 \\le X \\le 9",
          "explanation": "The observed $2$ lies just inside the acceptance region, one above the lower critical value $1$.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Conclusion in context",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "There is insufficient evidence at the $5\\%$ level to reject $H_0$: no significant evidence that the proportion of melanistic foxes differs from $25\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Critical region $X \\le 1$ or $X \\ge 10$; acceptance region $2 \\le X \\le 9$. Actual significance level $= 0.0243 + 0.0139 = 0.0382$ ($3.82\\%$). Since $x = 2$ lies in the acceptance region (just above the critical value $1$), do not reject $H_0$: no evidence at the $5\\%$ level that the proportion differs from $25\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "An online retailer historically delivers $40\\%$ of its parcels on the next day. After introducing a new dispatch system, the operations manager believes the proportion of parcels delivered next-day has increased. She inspects a random sample of $12$ parcels. (a) Define the parameter $p$ and state suitable hypotheses. (b) State the distribution of the test statistic assuming $H_0$ is true. (c) Find the critical region for a test at the $5\\%$ significance level. (d) State the actual significance level of this test. (e) Given that $9$ of the $12$ parcels were delivered next-day, complete the test and interpret your conclusion in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0022"
        },
        {
          "x": 1,
          "p": "0.0174"
        },
        {
          "x": 2,
          "p": "0.0639"
        },
        {
          "x": 3,
          "p": "0.1419"
        },
        {
          "x": 4,
          "p": "0.2128"
        },
        {
          "x": 5,
          "p": "0.2270"
        },
        {
          "x": 6,
          "p": "0.1766"
        },
        {
          "x": 7,
          "p": "0.1009"
        },
        {
          "x": 8,
          "p": "0.0420"
        },
        {
          "x": 9,
          "p": "0.0125"
        },
        {
          "x": 10,
          "p": "0.0025"
        },
        {
          "x": 11,
          "p": "0.0003"
        },
        {
          "x": 12,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        9,
        10,
        11,
        12
      ],
      "caption": "Distribution of X ~ B(12, 0.4) under H0, with the critical region X >= 9 shaded",
      "alt": "Bar chart of the binomial distribution B(12, 0.4) for x from 0 to 12. Bars rise to a peak of about 0.227 at x = 5 then fall away; the bars for x = 9, 10, 11 and 12 are shaded to show the upper-tail critical region."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of all parcels delivered next-day}",
          "explanation": "The claim concerns the retailer's overall delivery performance, so $p$ is the population proportion of parcels delivered next-day, not just the figure in this one sample.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.4 \\qquad H_1{:}\\ p > 0.4",
          "explanation": "The null keeps the historical value $0.4$. The manager suspects an increase, so the alternative points one way, above $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (upper) test}",
          "explanation": "Because $H_1$ specifies a direction ('increased'), we only look for evidence in the upper tail, so the whole $5\\%$ sits in one tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.4)",
          "explanation": "Assuming $H_0$ is true, the number of next-day parcels among $12$ independent parcels is binomial with $n = 12$ and $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the critical-region condition",
          "workingLatex": "\\text{Smallest } c \\text{ with } P(X \\ge c) \\le 0.05",
          "explanation": "The critical region is the block of high values whose total probability under $H_0$ is at most $5\\%$; we search inward from the top for the smallest value that still keeps the tail under the limit.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the boundary at c = 8",
          "workingLatex": "P(X \\ge 8) = 1 - P(X \\le 7) = 1 - 0.9427 = 0.0573",
          "explanation": "Starting the region at $8$ gives a tail of $0.0573$, which is bigger than $0.05$. That is too much probability, so $8$ cannot be included.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the boundary at c = 9",
          "workingLatex": "P(X \\ge 9) = 1 - P(X \\le 8) = 1 - 0.9847 = 0.0153",
          "explanation": "Moving the boundary up to $9$ shrinks the tail to $0.0153$, which is now safely at or below $0.05$, so $9$ is the first value that qualifies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the critical region",
          "workingLatex": "\\text{Critical region: } X \\ge 9 \\quad(\\text{accept } H_0 \\text{ if } X \\le 8)",
          "explanation": "The rejection region is $X \\ge 9$; everything from $0$ to $8$ is the acceptance region where the result is consistent with $p = 0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "\\text{Actual significance level} = P(X \\ge 9) = 0.0153 = 1.53\\%",
          "explanation": "The true chance of landing in the critical region when $H_0$ is correct is $0.0153$. This is the real risk of a wrong rejection, and it sits below the nominal $5\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why the actual level is below 5%",
          "workingLatex": "P(X \\ge 8) = 0.0573 > 0.05 > 0.0153 = P(X \\ge 9)",
          "explanation": "Because $X$ is discrete we cannot fine-tune the tail to exactly $5\\%$: including $8$ overshoots, so we must stop at $9$, which undershoots. That gap is why the actual level is only $1.53\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the observed value with the critical region",
          "workingLatex": "x = 9 \\ge 9",
          "explanation": "The observed count $9$ lies inside the critical region, so it is one of the results we agreed would count as strong evidence against $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Since the observation falls in the rejection region, we reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "9 \\text{ of } 12 \\Rightarrow \\text{evidence of an increase}",
          "explanation": "There is sufficient evidence at the $5\\%$ level to say that the proportion of parcels delivered next-day has increased above $40\\%$, so the new dispatch system does appear to help.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of parcels delivered next-day; $H_0{:}\\ p = 0.4$, $H_1{:}\\ p > 0.4$. (b) $X \\sim B(12, 0.4)$. (c) Critical region $X \\ge 9$. (d) Actual significance level $P(X \\ge 9) = 0.0153 = 1.53\\%$. (e) $x = 9$ lies in the critical region, so reject $H_0$: there is evidence at the $5\\%$ level that the proportion delivered next-day has increased."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "At a fairground a spinner is supposed to land on red exactly half of the time. A visitor suspects the spinner is biased, in either direction. She spins it $10$ times and records the number of reds, $X$. A test is carried out at the $5\\%$ significance level. (a) State suitable hypotheses. (b) State the distribution of the test statistic assuming $H_0$ is true. (c) Find the critical region, giving both critical values. (d) State the actual significance level of the test. (e) Given that the spinner landed on red $2$ times, complete the test and interpret the result in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0010"
        },
        {
          "x": 1,
          "p": "0.0098"
        },
        {
          "x": 2,
          "p": "0.0439"
        },
        {
          "x": 3,
          "p": "0.1172"
        },
        {
          "x": 4,
          "p": "0.2051"
        },
        {
          "x": 5,
          "p": "0.2461"
        },
        {
          "x": 6,
          "p": "0.2051"
        },
        {
          "x": 7,
          "p": "0.1172"
        },
        {
          "x": 8,
          "p": "0.0439"
        },
        {
          "x": 9,
          "p": "0.0098"
        },
        {
          "x": 10,
          "p": "0.0010"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        9,
        10
      ],
      "caption": "Distribution of X ~ B(10, 0.5) under H0, with the two-tailed critical region X <= 1 or X >= 9 shaded",
      "alt": "Symmetric bar chart of the binomial distribution B(10, 0.5) for x from 0 to 10, peaking at 0.246 at x = 5. The two outer bars at each end, x = 0, 1, 9 and 10, are shaded to show the two-tailed critical region."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of spins landing on red}",
          "explanation": "The claim is about the spinner's long-run behaviour, so $p$ is the true probability of red on any single spin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.5 \\qquad H_1{:}\\ p \\ne 0.5",
          "explanation": "The null keeps the fair value $0.5$. 'Biased in either direction' does not pick a side, so the alternative is $p \\ne 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a two-tailed test and split the level",
          "workingLatex": "\\tfrac{1}{2}\\times 5\\% = 2.5\\% \\text{ in each tail}",
          "explanation": "A two-tailed test shares the $5\\%$ equally between the low and high ends, so each tail is allowed at most $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.5)",
          "explanation": "Assuming $H_0$ is true, the number of reds in $10$ independent spins is binomial with $n = 10$ and $p = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the lower tail",
          "workingLatex": "\\text{Largest } a \\text{ with } P(X \\le a) \\le 0.025",
          "explanation": "The lower part of the critical region is the block of small values whose combined probability stays within $0.025$; we work up from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the lower boundary",
          "workingLatex": "P(X \\le 2) = 0.0547 > 0.025, \\quad P(X \\le 1) = 0.0107 \\le 0.025",
          "explanation": "Including $2$ pushes the lower tail to $0.0547$, over the limit, so the lower region stops at $1$, where the tail is only $0.0107$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical value",
          "workingLatex": "\\text{Lower region: } X \\le 1",
          "explanation": "So any result of $1$ or fewer reds is unusually low if the spinner were fair.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the upper tail",
          "workingLatex": "\\text{Smallest } b \\text{ with } P(X \\ge b) \\le 0.025",
          "explanation": "By symmetry we now look for the high block whose probability is within $0.025$, searching downward from $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the upper boundary",
          "workingLatex": "P(X \\ge 8) = 0.0547 > 0.025, \\quad P(X \\ge 9) = 0.0107 \\le 0.025",
          "explanation": "Starting at $8$ gives $0.0547$, too large, so the upper region begins at $9$, where the tail is $0.0107$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full critical region",
          "workingLatex": "\\text{Critical region: } X \\le 1 \\ \\text{or}\\ X \\ge 9",
          "explanation": "The rejection region is the two outer blocks together; the acceptance region is $2 \\le X \\le 8$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the actual significance level",
          "workingLatex": "0.0107 + 0.0107 = 0.0214 = 2.14\\%",
          "explanation": "Adding the true probabilities of the two tails gives the real chance of a wrong rejection, $2.14\\%$, comfortably below the nominal $5\\%$ because the distribution is discrete.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the observed value",
          "workingLatex": "x = 2, \\quad 2 \\notin \\{X \\le 1\\}\\cup\\{X \\ge 9\\}",
          "explanation": "Two reds sits inside the acceptance region $2 \\le X \\le 8$; it is just outside the lower critical value of $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "The observation is not in the critical region, so we do not reject the null hypothesis.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Spinner not shown to be biased}",
          "explanation": "There is insufficient evidence at the $5\\%$ level to say the spinner is biased; $2$ reds, while low, is not extreme enough to rule out a fair spinner.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ p = 0.5$, $H_1{:}\\ p \\ne 0.5$. (b) $X \\sim B(10, 0.5)$. (c) Critical region $X \\le 1$ or $X \\ge 9$. (d) Actual significance level $0.0107 + 0.0107 = 0.0214 = 2.14\\%$. (e) $x = 2$ is not in the critical region, so do not reject $H_0$: there is insufficient evidence at the $5\\%$ level that the spinner is biased."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "significance-comparison"
    ],
    "questionText": "A charity states that $30\\%$ of the people who visit its website go on to donate. A fundraiser fears that a recent website redesign has reduced this proportion. In a random sample of $20$ visitors, only $2$ donate. (a) Define $p$ and state suitable hypotheses. (b) State the test statistic assuming $H_0$ is true and write down the probability needed. (c) Evaluate this $p$-value. (d) Test the fundraiser's claim at the $5\\%$ significance level. (e) Repeat the test at the $1\\%$ significance level and comment on how your conclusion depends on the level chosen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of visitors who donate}",
          "explanation": "The claim is about all website visitors, so $p$ is the population proportion who donate, which our test is about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p < 0.3",
          "explanation": "The null keeps the stated value $0.3$. The fundraiser fears a fall, so the alternative points downward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (lower) test}",
          "explanation": "Because $H_1$ says 'reduced', evidence against $H_0$ is an unusually small count, so we work in the lower tail only.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.3)",
          "explanation": "Assuming $H_0$ is true, the number of donors among $20$ independent visitors is binomial with $n = 20$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 2 \\Rightarrow \\text{use } P(X \\le 2)",
          "explanation": "We observed $2$ donors. For a lower-tailed test the $p$-value is the probability of a result this small or smaller, $P(X \\le 2)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\le 2) = 0.0355",
          "explanation": "Reading the cumulative binomial value for $B(20, 0.3)$ at $x = 2$ gives $0.0355$: the chance of $2$ or fewer donors if the true rate really were $30\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Interpret the p-value",
          "workingLatex": "P(X \\le 2) = 0.0355",
          "explanation": "A result this low would happen only about $3.55\\%$ of the time if nothing had changed, so the observation is fairly unusual under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the 5% level",
          "workingLatex": "0.0355 < 0.05",
          "explanation": "At the $5\\%$ level the $p$-value is smaller than the threshold, so the result counts as significant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision at 5%",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 5\\%",
          "explanation": "Since $0.0355 < 0.05$ we reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion at 5% in context",
          "workingLatex": "\\text{Evidence the donation rate has fallen}",
          "explanation": "At $5\\%$ there is sufficient evidence that the proportion of visitors who donate has dropped below $30\\%$ since the redesign.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the 1% level",
          "workingLatex": "0.0355 > 0.01",
          "explanation": "At the stricter $1\\%$ level the same $p$-value now sits above the threshold, so it is no longer small enough to be significant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision at 1%",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at } 1\\%",
          "explanation": "Because $0.0355 > 0.01$ we do not reject $H_0$ at the $1\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the comparison",
          "workingLatex": "0.01 < 0.0355 < 0.05",
          "explanation": "The $p$-value lies between the two thresholds, so the very same data leads to opposite conclusions: significant at $5\\%$ but not at $1\\%$. A stricter level demands stronger evidence before rejecting $H_0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of visitors who donate; $H_0{:}\\ p = 0.3$, $H_1{:}\\ p < 0.3$. (b)-(c) $X \\sim B(20, 0.3)$, $P(X \\le 2) = 0.0355$. (d) $0.0355 < 0.05$, so reject $H_0$ at $5\\%$: evidence the donation rate has fallen. (e) $0.0355 > 0.01$, so do not reject at $1\\%$; the conclusion depends on the level because a stricter test needs stronger evidence."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "interpretation"
    ],
    "questionText": "A factory grades its ceramic tiles, and normally $25\\%$ are classed as 'premium'. A buyer suspects that a new batch contains a higher proportion of premium tiles. He inspects a random sample of $12$ tiles and finds $6$ premium ones. (a) Define $p$ and state suitable hypotheses. (b) State the test statistic assuming $H_0$ is true. (c) Find the critical region for a test at the $5\\%$ significance level. (d) State whether the observed value lies in the critical region. (e) State and interpret the conclusion of the test in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of premium tiles in the batch}",
          "explanation": "The buyer's concern is the whole new batch, so $p$ is the population proportion of premium tiles, which the test is about.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.25 \\qquad H_1{:}\\ p > 0.25",
          "explanation": "The null keeps the usual value $0.25$. The buyer suspects a higher proportion, so the alternative points upward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (upper) test}",
          "explanation": "Since $H_1$ specifies 'higher', all $5\\%$ of the significance sits in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.25)",
          "explanation": "Assuming $H_0$ is true, the number of premium tiles among $12$ independent tiles is binomial with $n = 12$ and $p = 0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the critical-region condition",
          "workingLatex": "\\text{Smallest } c \\text{ with } P(X \\ge c) \\le 0.05",
          "explanation": "The critical region is the top block of values whose total probability under $H_0$ is at most $5\\%$; we search inward from the top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the boundary at c = 6",
          "workingLatex": "P(X \\ge 6) = 1 - P(X \\le 5) = 1 - 0.9456 = 0.0544",
          "explanation": "Starting the region at $6$ gives a tail of $0.0544$, just above $0.05$, so $6$ carries slightly too much probability to include.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the boundary at c = 7",
          "workingLatex": "P(X \\ge 7) = 1 - P(X \\le 6) = 1 - 0.9857 = 0.0143",
          "explanation": "Moving the boundary to $7$ drops the tail to $0.0143$, now within $0.05$, so $7$ is the first value that qualifies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the critical region",
          "workingLatex": "\\text{Critical region: } X \\ge 7 \\quad(\\text{accept } H_0 \\text{ if } X \\le 6)",
          "explanation": "The rejection region is $X \\ge 7$; the acceptance region runs from $0$ to $6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "\\text{Actual significance level} = P(X \\ge 7) = 0.0143 = 1.43\\%",
          "explanation": "The true probability of landing in the critical region under $H_0$ is $0.0143$, the real risk of a wrong rejection; it is below the nominal $5\\%$ because including $6$ would overshoot to $0.0544$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the observed value with the critical region",
          "workingLatex": "x = 6, \\quad 6 < 7 \\Rightarrow 6 \\notin \\text{critical region}",
          "explanation": "Six premium tiles falls just short of the critical value $7$, so it lies in the acceptance region rather than the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Because the observation is not in the critical region, we do not reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the borderline result",
          "workingLatex": "\\tfrac{6}{12} = 0.5 \\text{, yet still not significant}",
          "explanation": "Even though half the sampled tiles were premium, with only $12$ tiles this could still arise by chance about $5.4\\%$ of the time under $H_0$, which is not rare enough at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{No evidence of a higher premium rate}",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that the new batch has a higher proportion of premium tiles than the usual $25\\%$.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of premium tiles; $H_0{:}\\ p = 0.25$, $H_1{:}\\ p > 0.25$. (b) $X \\sim B(12, 0.25)$. (c) Critical region $X \\ge 7$ (since $P(X \\ge 7) = 0.0143 \\le 0.05$ but $P(X \\ge 6) = 0.0544 > 0.05$). (d) $x = 6$ is not in the critical region. (e) Do not reject $H_0$: there is insufficient evidence at the $5\\%$ level that the batch has more premium tiles than usual."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value",
      "interpretation"
    ],
    "questionText": "In a large woodland, $15\\%$ of a species of beetle are known to carry a particular genetic marker. An ecologist believes that pollution has changed the proportion carrying the marker, though she is unsure in which direction. She examines a random sample of $20$ beetles and finds that $7$ carry the marker. Test her belief at the $5\\%$ significance level, working with the $p$-value. Your answer should: (a) state suitable hypotheses; (b) state the test statistic under $H_0$; (c) decide which tail to use and find the relevant $p$-value; (d) carry out the comparison for the two-tailed test; (e) state and interpret the conclusion in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of beetles carrying the marker}",
          "explanation": "The claim is about the whole beetle population, so $p$ is the true proportion carrying the marker.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.15 \\qquad H_1{:}\\ p \\ne 0.15",
          "explanation": "The null keeps the known value $0.15$. 'Changed, direction unknown' does not pick a side, so the alternative is $p \\ne 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a two-tailed test",
          "workingLatex": "\\tfrac{1}{2}\\times 5\\% = 2.5\\% \\text{ in each tail}",
          "explanation": "For a two-tailed test the $5\\%$ is split into $2.5\\%$ per tail, so we compare the relevant tail probability with $0.025$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.15)",
          "explanation": "Assuming $H_0$ is true, the number of marked beetles among $20$ independent beetles is binomial with $n = 20$ and $p = 0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State a modelling assumption",
          "workingLatex": "\\text{Beetles independent, constant } p \\text{ within the sample}",
          "explanation": "For the binomial model to hold we assume the beetles are sampled independently and each has the same chance of carrying the marker; a random sample from a large woodland makes this reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Decide which tail to use",
          "workingLatex": "\\dfrac{7}{20} = 0.35 > 0.15 = p_0",
          "explanation": "The observed proportion $0.35$ is above the hypothesised $0.15$, so the result is on the high side; for a two-tailed test we examine the upper tail here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the p-value with the complement",
          "workingLatex": "P(X \\ge 7) = 1 - P(X \\le 6)",
          "explanation": "'At least $7$' is the complement of 'at most $6$', which is quicker to read from cumulative tables.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 7) = 1 - 0.9781 = 0.0219",
          "explanation": "Using $P(X \\le 6) = 0.9781$ for $B(20, 0.15)$ gives an upper-tail probability of $0.0219$: the chance of $7$ or more marked beetles if nothing had changed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the tail probability",
          "workingLatex": "P(X \\ge 7) = 0.0219",
          "explanation": "A result this high or higher would occur only about $2.19\\%$ of the time if the marker rate were still $15\\%$, so the observation is fairly unusual under $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the per-tail level",
          "workingLatex": "0.0219 < 0.025",
          "explanation": "For a two-tailed test the upper tail must be compared with $\\alpha/2 = 0.025$; here $0.0219$ is below it, so the result is significant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm using the doubled tail",
          "workingLatex": "2 \\times 0.0219 = 0.0438 < 0.05",
          "explanation": "Equivalently, the two-tailed $p$-value is double the smaller tail, $0.0438$, which is still below the full $5\\%$. Both viewpoints agree.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Because the observed tail is smaller than $2.5\\%$, we reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Evidence the marker proportion has changed}",
          "explanation": "There is sufficient evidence at the $5\\%$ level that the proportion of beetles carrying the marker has changed from $15\\%$; the sample points to an increase.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ p = 0.15$, $H_1{:}\\ p \\ne 0.15$. (b) $X \\sim B(20, 0.15)$. (c) Since $x = 7 > np = 3$, use the upper tail: $P(X \\ge 7) = 0.0219$. (d) $0.0219 < 0.025$ (equivalently $2 \\times 0.0219 = 0.0438 < 0.05$). (e) Reject $H_0$: there is evidence at the $5\\%$ level that the proportion carrying the marker has changed (increased)."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A cereal manufacturer claims that $55\\%$ of children prefer its brand to any other. A rival firm believes the true proportion who prefer the brand is lower than this. It surveys a random sample of $12$ children and records the number who prefer the brand, $X$. A test is carried out at the $5\\%$ significance level. (a) Define $p$ and state suitable hypotheses. (b) State the test statistic assuming $H_0$ is true. (c) Find the critical region. (d) State the actual significance level. (e) Given that $3$ of the $12$ children prefer the brand, complete the test and interpret the result in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0001"
        },
        {
          "x": 1,
          "p": "0.0010"
        },
        {
          "x": 2,
          "p": "0.0068"
        },
        {
          "x": 3,
          "p": "0.0277"
        },
        {
          "x": 4,
          "p": "0.0762"
        },
        {
          "x": 5,
          "p": "0.1489"
        },
        {
          "x": 6,
          "p": "0.2124"
        },
        {
          "x": 7,
          "p": "0.2225"
        },
        {
          "x": 8,
          "p": "0.1700"
        },
        {
          "x": 9,
          "p": "0.0923"
        },
        {
          "x": 10,
          "p": "0.0339"
        },
        {
          "x": 11,
          "p": "0.0075"
        },
        {
          "x": 12,
          "p": "0.0008"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        1,
        2,
        3
      ],
      "caption": "Distribution of X ~ B(12, 0.55) under H0, with the lower-tail critical region X <= 3 shaded",
      "alt": "Bar chart of the binomial distribution B(12, 0.55) for x from 0 to 12, peaking at about 0.222 at x = 7. The four bars at x = 0, 1, 2 and 3 are shaded to show the lower-tail critical region."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of children who prefer the brand}",
          "explanation": "The claim is about children in general, so $p$ is the population proportion who prefer the brand.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.55 \\qquad H_1{:}\\ p < 0.55",
          "explanation": "The null keeps the manufacturer's claim $0.55$. The rival believes the figure is lower, so the alternative points downward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (lower) test}",
          "explanation": "Because $H_1$ specifies 'lower', the whole $5\\%$ sits in the lower tail and evidence against $H_0$ is an unusually small count.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.55)",
          "explanation": "Assuming $H_0$ is true, the number of children preferring the brand among $12$ is binomial with $n = 12$ and $p = 0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the critical-region condition",
          "workingLatex": "\\text{Largest } c \\text{ with } P(X \\le c) \\le 0.05",
          "explanation": "The critical region is the bottom block of values whose total probability under $H_0$ is at most $5\\%$; we search upward from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the boundary at c = 4",
          "workingLatex": "P(X \\le 4) = 0.1117 > 0.05",
          "explanation": "Including everything up to $4$ gives a lower tail of $0.1117$, far above $0.05$, so $4$ cannot be in the region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the boundary at c = 3",
          "workingLatex": "P(X \\le 3) = 0.0356 \\le 0.05",
          "explanation": "Stopping at $3$ gives a lower tail of $0.0356$, now within $0.05$, so $3$ is the largest value that qualifies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the critical region",
          "workingLatex": "\\text{Critical region: } X \\le 3 \\quad(\\text{accept } H_0 \\text{ if } X \\ge 4)",
          "explanation": "The rejection region is $X \\le 3$; the acceptance region runs from $4$ to $12$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "\\text{Actual significance level} = P(X \\le 3) = 0.0356 = 3.56\\%",
          "explanation": "The real chance of landing in the critical region under $H_0$ is $0.0356$, the true risk of a wrong rejection here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why the actual level is below 5%",
          "workingLatex": "P(X \\le 4) = 0.1117 > 0.05 > 0.0356 = P(X \\le 3)",
          "explanation": "Because $X$ is discrete the tail jumps from $0.0356$ to $0.1117$ when $4$ is added, so no region gives exactly $5\\%$; we must stop at $3$, leaving the actual level at $3.56\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the observed value with the critical region",
          "workingLatex": "x = 3 \\le 3",
          "explanation": "Three children preferring the brand is exactly on the critical boundary, so it lies inside the rejection region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Because the observation is in the critical region, we reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Evidence fewer than } 55\\% \\text{ prefer the brand}",
          "explanation": "There is sufficient evidence at the $5\\%$ level to support the rival's belief that fewer than $55\\%$ of children prefer the brand.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of children who prefer the brand; $H_0{:}\\ p = 0.55$, $H_1{:}\\ p < 0.55$. (b) $X \\sim B(12, 0.55)$. (c) Critical region $X \\le 3$. (d) Actual significance level $P(X \\le 3) = 0.0356 = 3.56\\%$. (e) $x = 3$ lies in the critical region, so reject $H_0$: there is evidence at the $5\\%$ level that fewer than $55\\%$ of children prefer the brand."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "critical-region",
      "actual-significance-level"
    ],
    "questionText": "A dental practice states that $35\\%$ of its check-up patients need at least one filling. A researcher thinks the true proportion is different from this. She reviews the records of a random sample of $10$ check-up patients and records the number, $X$, needing a filling. A two-tailed test is carried out at the $10\\%$ significance level. (a) State suitable hypotheses. (b) State the test statistic assuming $H_0$ is true. (c) Find the critical region, giving both critical values. (d) State the actual significance level. (e) Given that $7$ of the $10$ patients needed a filling, complete the test and interpret the result in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0135"
        },
        {
          "x": 1,
          "p": "0.0725"
        },
        {
          "x": 2,
          "p": "0.1757"
        },
        {
          "x": 3,
          "p": "0.2522"
        },
        {
          "x": 4,
          "p": "0.2377"
        },
        {
          "x": 5,
          "p": "0.1536"
        },
        {
          "x": 6,
          "p": "0.0689"
        },
        {
          "x": 7,
          "p": "0.0212"
        },
        {
          "x": 8,
          "p": "0.0043"
        },
        {
          "x": 9,
          "p": "0.0005"
        },
        {
          "x": 10,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0,
        7,
        8,
        9,
        10
      ],
      "caption": "Distribution of X ~ B(10, 0.35) under H0, with the two-tailed critical region X <= 0 or X >= 7 shaded",
      "alt": "Bar chart of the binomial distribution B(10, 0.35) for x from 0 to 10, peaking at about 0.252 at x = 3. The single bar at x = 0 and the bars from x = 7 to 10 are shaded to show the asymmetric two-tailed critical region."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of check-up patients needing a filling}",
          "explanation": "The statement concerns all check-up patients, so $p$ is the population proportion needing at least one filling.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.35 \\qquad H_1{:}\\ p \\ne 0.35",
          "explanation": "The null keeps the stated value $0.35$. 'Different from', with no direction, gives the two-sided alternative $p \\ne 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a two-tailed test and split the level",
          "workingLatex": "\\tfrac{1}{2}\\times 10\\% = 5\\% \\text{ in each tail}",
          "explanation": "The $10\\%$ is shared equally, so each tail may hold at most $0.05$ of probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(10,\\ 0.35)",
          "explanation": "Assuming $H_0$ is true, the number needing a filling among $10$ independent patients is binomial with $n = 10$ and $p = 0.35$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the lower tail",
          "workingLatex": "\\text{Largest } a \\text{ with } P(X \\le a) \\le 0.05",
          "explanation": "The lower part of the critical region is the small-value block whose probability stays within $0.05$; we work up from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the lower boundary",
          "workingLatex": "P(X \\le 1) = 0.0860 > 0.05, \\quad P(X \\le 0) = 0.0135 \\le 0.05",
          "explanation": "Including $1$ overshoots to $0.0860$, so the lower region can only be $X \\le 0$, with tail $0.0135$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the lower critical value",
          "workingLatex": "\\text{Lower region: } X \\le 0",
          "explanation": "Only the single value $0$ is extreme enough on the low side at this level; the discrete jumps make the lower region very small.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the upper tail",
          "workingLatex": "\\text{Smallest } b \\text{ with } P(X \\ge b) \\le 0.05",
          "explanation": "We now find the high block whose probability is within $0.05$, searching downward from $10$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test the upper boundary",
          "workingLatex": "P(X \\ge 6) = 0.0949 > 0.05, \\quad P(X \\ge 7) = 0.0260 \\le 0.05",
          "explanation": "Starting at $6$ gives $0.0949$, too large, so the upper region begins at $7$, where the tail is $0.0260$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the full critical region",
          "workingLatex": "\\text{Critical region: } X \\le 0 \\ \\text{or}\\ X \\ge 7",
          "explanation": "The rejection region is the two outer blocks; the acceptance region is $1 \\le X \\le 6$. Notice the two tails are not symmetric because $p \\ne 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the actual significance level",
          "workingLatex": "0.0135 + 0.0260 = 0.0395 = 3.95\\%",
          "explanation": "Adding the true tail probabilities gives $0.0395$, the real chance of a wrong rejection, comfortably below the nominal $10\\%$ because of the discrete jumps.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the observed value",
          "workingLatex": "x = 7 \\ge 7",
          "explanation": "Seven patients needing a filling lands in the upper critical region, so it is one of the extreme results.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Make the decision",
          "workingLatex": "\\text{Reject } H_0",
          "explanation": "Because the observation is in the critical region, we reject the null hypothesis at the $10\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Evidence the filling rate differs from } 35\\%",
          "explanation": "There is sufficient evidence at the $10\\%$ level that the proportion of check-up patients needing a filling is different from $35\\%$; the sample suggests it is higher.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ p = 0.35$, $H_1{:}\\ p \\ne 0.35$. (b) $X \\sim B(10, 0.35)$. (c) Critical region $X \\le 0$ or $X \\ge 7$. (d) Actual significance level $0.0135 + 0.0260 = 0.0395 = 3.95\\%$. (e) $x = 7$ lies in the critical region, so reject $H_0$: there is evidence at the $10\\%$ level that the proportion needing a filling differs from $35\\%$ (it appears higher)."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "p-value",
      "significance-comparison"
    ],
    "questionText": "A council leader claims that $45\\%$ of residents support a new cycle lane. A campaigner believes support has grown beyond this. In a random sample of $20$ residents, $13$ say they support the scheme. (a) Define $p$ and state suitable hypotheses. (b) State the test statistic under $H_0$ and write down the required probability. (c) Evaluate this $p$-value. (d) Test the claim at the $5\\%$ significance level. (e) Test the claim again at the $10\\%$ significance level and comment on how the conclusion depends on the level chosen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of residents who support the cycle lane}",
          "explanation": "The claim is about all residents, so $p$ is the population proportion in favour of the scheme.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.45 \\qquad H_1{:}\\ p > 0.45",
          "explanation": "The null keeps the leader's figure $0.45$. The campaigner believes support has grown, so the alternative points upward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (upper) test}",
          "explanation": "Because $H_1$ specifies 'grown', evidence against $H_0$ is a large count, placing the whole significance in the upper tail.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(20,\\ 0.45)",
          "explanation": "Assuming $H_0$ is true, the number of supporters among $20$ residents is binomial with $n = 20$ and $p = 0.45$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the observed value and the tail",
          "workingLatex": "x = 13 \\Rightarrow \\text{use } P(X \\ge 13)",
          "explanation": "We observed $13$ supporters. For an upper-tailed test the $p$-value is the probability of a result this large or larger, $P(X \\ge 13)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the p-value with the complement",
          "workingLatex": "P(X \\ge 13) = 1 - P(X \\le 12)",
          "explanation": "'At least $13$' is the complement of 'at most $12$', which is easier to read from cumulative tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the p-value",
          "workingLatex": "P(X \\ge 13) = 1 - 0.9420 = 0.0580",
          "explanation": "Using $P(X \\le 12) = 0.9420$ for $B(20, 0.45)$ gives a $p$-value of $0.0580$: the chance of $13$ or more supporters if support really were $45\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the 5% level",
          "workingLatex": "0.0580 > 0.05",
          "explanation": "At the $5\\%$ level the $p$-value is just above the threshold, so the result is not quite significant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision at 5%",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at } 5\\%",
          "explanation": "Since $0.0580 > 0.05$ we do not reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare with the 10% level",
          "workingLatex": "0.0580 < 0.10",
          "explanation": "At the more lenient $10\\%$ level the same $p$-value now sits below the threshold, so the result becomes significant.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Decision at 10%",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 10\\%",
          "explanation": "Because $0.0580 < 0.10$ we reject $H_0$ at the $10\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Comment on the comparison",
          "workingLatex": "0.05 < 0.0580 < 0.10",
          "explanation": "The $p$-value lies between the two thresholds, so the same evidence is significant at $10\\%$ but not at $5\\%$. A more lenient level rejects $H_0$ more readily, which is exactly why the level should be fixed before seeing the data.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{Borderline evidence of growing support}",
          "explanation": "At $10\\%$ there is evidence that support has grown above $45\\%$, but at $5\\%$ there is not; the evidence for the campaigner's claim is only borderline.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of residents supporting the scheme; $H_0{:}\\ p = 0.45$, $H_1{:}\\ p > 0.45$. (b)-(c) $X \\sim B(20, 0.45)$, $P(X \\ge 13) = 1 - 0.9420 = 0.0580$. (d) $0.0580 > 0.05$, so do not reject $H_0$ at $5\\%$. (e) $0.0580 < 0.10$, so reject $H_0$ at $10\\%$; the conclusion depends on the level chosen, so the evidence of growing support is only borderline."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "one-tailed",
      "critical-region",
      "discreteness"
    ],
    "questionText": "A health survey reports that $30\\%$ of adults in a country meet the recommended weekly exercise guidelines. A local council fears that in its area the proportion is lower. It takes a random sample of $12$ adults from the area and records the number, $X$, who meet the guidelines. A test is carried out at the $5\\%$ significance level. (a) Define $p$ and state suitable hypotheses. (b) State the test statistic assuming $H_0$ is true. (c) Find the critical region. (d) State the actual significance level and explain why it is well below $5\\%$. (e) Given that $1$ of the $12$ adults met the guidelines, complete the test and interpret the result in context.",
    "questionDiagram": {
      "kind": "probDist",
      "values": [
        {
          "x": 0,
          "p": "0.0138"
        },
        {
          "x": 1,
          "p": "0.0712"
        },
        {
          "x": 2,
          "p": "0.1678"
        },
        {
          "x": 3,
          "p": "0.2397"
        },
        {
          "x": 4,
          "p": "0.2311"
        },
        {
          "x": 5,
          "p": "0.1585"
        },
        {
          "x": 6,
          "p": "0.0792"
        },
        {
          "x": 7,
          "p": "0.0291"
        },
        {
          "x": 8,
          "p": "0.0078"
        },
        {
          "x": 9,
          "p": "0.0015"
        },
        {
          "x": 10,
          "p": "0.0002"
        },
        {
          "x": 11,
          "p": "0.0000"
        },
        {
          "x": 12,
          "p": "0.0000"
        }
      ],
      "xAxisLabel": "x",
      "yAxisLabel": "P(X = x)",
      "highlight": [
        0
      ],
      "caption": "Distribution of X ~ B(12, 0.3) under H0, with the lower-tail critical region X <= 0 shaded",
      "alt": "Bar chart of the binomial distribution B(12, 0.3) for x from 0 to 12, peaking at about 0.240 at x = 3. Only the single bar at x = 0 is shaded, showing that the lower-tail critical region contains just one value."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of local adults meeting the guidelines}",
          "explanation": "The council's concern is its own area, so $p$ is the population proportion of adults there who meet the exercise guidelines.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.3 \\qquad H_1{:}\\ p < 0.3",
          "explanation": "The null keeps the national value $0.3$. The council fears a lower local figure, so the alternative points downward.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose one-tailed or two-tailed",
          "workingLatex": "\\text{One-tailed (lower) test}",
          "explanation": "Because $H_1$ says 'lower', the whole $5\\%$ sits in the lower tail and evidence against $H_0$ is a small count.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(12,\\ 0.3)",
          "explanation": "Assuming $H_0$ is true, the number of adults meeting the guidelines among $12$ is binomial with $n = 12$ and $p = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the critical-region condition",
          "workingLatex": "\\text{Largest } c \\text{ with } P(X \\le c) \\le 0.05",
          "explanation": "The critical region is the bottom block of values whose total probability under $H_0$ is at most $5\\%$; we search upward from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the boundary at c = 1",
          "workingLatex": "P(X \\le 1) = 0.0850 > 0.05",
          "explanation": "Including everything up to $1$ gives a lower tail of $0.0850$, above $0.05$, so $1$ cannot be part of the region.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the boundary at c = 0",
          "workingLatex": "P(X \\le 0) = P(X = 0) = 0.0138 \\le 0.05",
          "explanation": "Stopping at $0$ gives a tail of $0.0138$, within $0.05$, so the region contains only the single value $0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the critical region",
          "workingLatex": "\\text{Critical region: } X \\le 0 \\quad(\\text{accept } H_0 \\text{ if } X \\ge 1)",
          "explanation": "The rejection region is just $X = 0$; every other outcome from $1$ to $12$ is in the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the actual significance level",
          "workingLatex": "\\text{Actual significance level} = P(X = 0) = 0.0138 = 1.38\\%",
          "explanation": "The true chance of landing in the critical region under $H_0$ is only $0.0138$, the real risk of a wrong rejection here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Explain why the actual level is far below 5%",
          "workingLatex": "P(X \\le 1) = 0.0850 > 0.05 > 0.0138 = P(X \\le 0)",
          "explanation": "Because $X$ is discrete, the tail jumps from $0.0138$ straight to $0.0850$ when we add $x = 1$. There is no value giving exactly $5\\%$, so the region must stop at $0$, leaving the actual level at just $1.38\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the observed value with the critical region",
          "workingLatex": "x = 1, \\quad 1 > 0 \\Rightarrow 1 \\notin \\text{critical region}",
          "explanation": "One adult meeting the guidelines is not in the region $X \\le 0$; it sits just inside the acceptance region.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Make the decision",
          "workingLatex": "\\text{Do not reject } H_0",
          "explanation": "Because the observation is not in the critical region, we do not reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion in context",
          "workingLatex": "\\text{No evidence the local rate is lower}",
          "explanation": "There is insufficient evidence at the $5\\%$ level to conclude that fewer than $30\\%$ of adults in the area meet the guidelines; only a sample result of $0$ would have been extreme enough here.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $p$ = proportion of local adults meeting the guidelines; $H_0{:}\\ p = 0.3$, $H_1{:}\\ p < 0.3$. (b) $X \\sim B(12, 0.3)$. (c) Critical region $X \\le 0$. (d) Actual significance level $P(X = 0) = 0.0138 = 1.38\\%$, well below $5\\%$ because the discrete tail jumps to $0.0850$ once $x = 1$ is added, so the region must stop at $0$. (e) $x = 1$ is not in the critical region, so do not reject $H_0$: there is insufficient evidence at the $5\\%$ level that the local rate is lower than $30\\%$."
    }
  },
  {
    "id": "al.y1.stats.hypothesis-testing.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Statistics",
    "subtopic": "Hypothesis testing",
    "subtopicId": "al.y1.stats.hypothesis-testing",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": [
      "hypothesis-test",
      "binomial",
      "two-tailed",
      "p-value",
      "significance-comparison"
    ],
    "questionText": "A streaming service reports that $20\\%$ of users on a free trial convert to a paid subscription. After changing its sign-up page, an analyst thinks the conversion rate has changed, in either direction. In a random sample of $25$ trial users, $10$ convert to a paid subscription. Working with the $p$-value: (a) state suitable hypotheses; (b) state the test statistic under $H_0$; (c) decide which tail to use and evaluate the relevant probability; (d) carry out the two-tailed test at the $5\\%$ significance level; (e) repeat the test at the $2\\%$ significance level and comment on how the conclusion depends on the level chosen.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the parameter p",
          "workingLatex": "p = \\text{proportion of trial users who convert to paid}",
          "explanation": "The report is about all trial users, so $p$ is the population proportion who convert after the change.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the hypotheses",
          "workingLatex": "H_0{:}\\ p = 0.2 \\qquad H_1{:}\\ p \\ne 0.2",
          "explanation": "The null keeps the reported value $0.2$. 'Changed, either direction' gives the two-sided alternative $p \\ne 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recognise a two-tailed test",
          "workingLatex": "\\text{Two-tailed: compare each tail with } \\tfrac{\\alpha}{2}",
          "explanation": "For a two-tailed test the significance is split between the tails, so the relevant tail is compared with $\\alpha/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the test statistic under H_0",
          "workingLatex": "X \\sim B(25,\\ 0.2)",
          "explanation": "Assuming $H_0$ is true, the number of conversions among $25$ independent users is binomial with $n = 25$ and $p = 0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Decide which tail to use",
          "workingLatex": "\\dfrac{10}{25} = 0.4 > 0.2 = p_0",
          "explanation": "The observed proportion $0.4$ is above the hypothesised $0.2$, so the result is on the high side; for a two-tailed test we examine the upper tail here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the tail probability with the complement",
          "workingLatex": "P(X \\ge 10) = 1 - P(X \\le 9)",
          "explanation": "'At least $10$' is the complement of 'at most $9$', which is quicker to read from cumulative tables.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the tail probability",
          "workingLatex": "P(X \\ge 10) = 1 - 0.9827 = 0.0173",
          "explanation": "Using $P(X \\le 9) = 0.9827$ for $B(25, 0.2)$ gives an upper-tail probability of $0.0173$: the chance of $10$ or more conversions if the rate were still $20\\%$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the per-tail level at 5%",
          "workingLatex": "0.0173 < 0.025",
          "explanation": "For the $5\\%$ two-tailed test the upper tail is compared with $\\alpha/2 = 0.025$; here $0.0173$ is below it, so the result is significant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Decision at 5%",
          "workingLatex": "\\text{Reject } H_0 \\text{ at } 5\\%",
          "explanation": "Since the observed tail is smaller than $0.025$ we reject the null hypothesis at the $5\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Conclusion at 5% in context",
          "workingLatex": "\\text{Evidence the conversion rate has changed}",
          "explanation": "At $5\\%$ there is evidence that the conversion rate has changed from $20\\%$; the sample points to an increase.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the per-tail level at 2%",
          "workingLatex": "0.0173 > 0.01",
          "explanation": "For a $2\\%$ two-tailed test each tail is allowed only $\\alpha/2 = 0.01$; now $0.0173$ is above the threshold, so the result is not significant.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Decision at 2%",
          "workingLatex": "\\text{Do not reject } H_0 \\text{ at } 2\\%",
          "explanation": "Because $0.0173 > 0.01$ we do not reject $H_0$ at the $2\\%$ level.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Comment on the comparison",
          "workingLatex": "0.01 < 0.0173 < 0.025",
          "explanation": "The observed tail lies between the two per-tail thresholds, so the same data is significant at $5\\%$ but not at $2\\%$: a stricter level demands stronger evidence before we reject $H_0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the overall conclusion in context",
          "workingLatex": "\\text{Significant at } 5\\%, \\text{ not at } 2\\%",
          "explanation": "There is evidence at the $5\\%$ level that the conversion rate has changed (increased), but this evidence is not strong enough to reject $H_0$ at the tighter $2\\%$ level.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $H_0{:}\\ p = 0.2$, $H_1{:}\\ p \\ne 0.2$. (b) $X \\sim B(25, 0.2)$. (c) Since $x = 10 > np = 5$, use the upper tail: $P(X \\ge 10) = 1 - 0.9827 = 0.0173$. (d) $0.0173 < 0.025$, so reject $H_0$ at $5\\%$: evidence the conversion rate has changed. (e) $0.0173 > 0.01$, so do not reject at $2\\%$; the conclusion depends on the level because a stricter test needs stronger evidence."
    }
  }
];
