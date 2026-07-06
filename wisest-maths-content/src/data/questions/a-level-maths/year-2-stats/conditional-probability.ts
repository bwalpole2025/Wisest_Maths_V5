import { Question } from "@/lib/types";

export const questions: Question[] = [
{
    "id": "al.y2.stats.conditional-probability.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "A survey of $200$ adults records whether each person owns a car ($C$) and whether each holds a full driving licence ($L$). Of the $200$ adults: $90$ both own a car and hold a licence, $10$ own a car but hold no licence, $40$ hold a licence but own no car, and $60$ do neither. So $100$ own a car, $100$ do not, $130$ hold a licence and $70$ do not. One adult is chosen at random. Find $P(C\\mid L)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } L:\\ \\text{use only the } 130 \\text{ licence holders}",
          "explanation": "The bar in $P(C\\mid L)$ means we are told the person holds a licence, so the only people who matter are the $130$ licence holders. We ask what fraction of that group also own a car.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(C\\mid L)=\\dfrac{P(C\\cap L)}{P(L)}",
          "explanation": "Conditional probability compares the overlap $C\\cap L$ with the whole of the condition $L$. Dividing by $P(L)$ rescales things so that the licence holders become the new whole.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many hold a licence",
          "workingLatex": "n(L)=90+40=130",
          "explanation": "From the table the licence column totals $130$. This is the size of the group we are now working inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many own a car and hold a licence",
          "workingLatex": "n(C\\cap L)=90",
          "explanation": "These are the people who satisfy both conditions at once — the single overlap cell of the table.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(C\\mid L)=\\dfrac{n(C\\cap L)}{n(L)}=\\dfrac{90}{130}",
          "explanation": "Both counts share the same grand total of $200$, so the totals cancel and we may divide the two counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{90}{130}=\\dfrac{9}{13}",
          "explanation": "Dividing top and bottom by their common factor $10$ gives the fraction in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(C\\mid L)=\\dfrac{9}{13}\\approx 0.69",
          "explanation": "Among licence holders, about $69\\%$ also own a car, which is the probability we were asked for.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(C\\mid L)=\\dfrac{9}{13}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "A survey of $200$ adults records whether each person owns a car ($C$) and whether each holds a full driving licence ($L$). Of the $200$ adults: $90$ both own a car and hold a licence, $10$ own a car but hold no licence, $40$ hold a licence but own no car, and $60$ do neither. So $100$ own a car, $100$ do not, $130$ hold a licence and $70$ do not. One adult is chosen at random. Find $P(L\\mid C)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } C:\\ \\text{use only the } 100 \\text{ car owners}",
          "explanation": "Now we are told the person owns a car, so the relevant group shrinks to the $100$ car owners. We ask what fraction of them hold a licence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(L\\mid C)=\\dfrac{P(L\\cap C)}{P(C)}",
          "explanation": "The condition is now $C$, so we divide the overlap by the whole of $C$. This makes the car owners the new whole against which we measure.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many own a car",
          "workingLatex": "n(C)=90+10=100",
          "explanation": "The car row of the table totals $100$. This is the group we are conditioning inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many own a car and hold a licence",
          "workingLatex": "n(L\\cap C)=90",
          "explanation": "The overlap cell is the same $90$ people as before — those who satisfy both conditions.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(L\\mid C)=\\dfrac{n(L\\cap C)}{n(C)}=\\dfrac{90}{100}",
          "explanation": "With the same grand total on top and bottom, we can compare the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{90}{100}=\\dfrac{9}{10}",
          "explanation": "Dividing top and bottom by $10$ leaves the fraction in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(L\\mid C)=\\dfrac{9}{10}=0.9",
          "explanation": "Fully $90\\%$ of car owners hold a licence. Notice this differs from $P(C\\mid L)$ — swapping the condition changes the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(L\\mid C)=\\dfrac{9}{10}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "In a year group of $150$ students, each may study Spanish ($S$), French ($F$), both or neither. Of the $150$: $30$ study both languages, $45$ study Spanish but not French, $25$ study French but not Spanish, and $50$ study neither. Hence $75$ study Spanish, $75$ do not, $55$ study French and $95$ do not. A student is chosen at random. Find $P(S\\mid F)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } F:\\ \\text{use only the } 55 \\text{ French students}",
          "explanation": "We are told the student studies French, so only the $55$ French students are relevant. We ask what fraction of them also study Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(S\\mid F)=\\dfrac{P(S\\cap F)}{P(F)}",
          "explanation": "Conditioning on $F$ means we measure the overlap $S\\cap F$ against the whole of $F$, treating the French group as the new whole.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many study French",
          "workingLatex": "n(F)=30+25=55",
          "explanation": "The French column totals $55$, the size of the group we are conditioning inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many study both languages",
          "workingLatex": "n(S\\cap F)=30",
          "explanation": "These $30$ students satisfy both conditions and form the overlap cell.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(S\\mid F)=\\dfrac{30}{55}",
          "explanation": "Because both counts are out of the same $150$ students, the total cancels and we divide the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{30}{55}=\\dfrac{6}{11}",
          "explanation": "Dividing top and bottom by their common factor $5$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(S\\mid F)=\\dfrac{6}{11}\\approx 0.55",
          "explanation": "Just over half of the French students also study Spanish, which is the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S\\mid F)=\\dfrac{6}{11}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "In a year group of $150$ students, each may study Spanish ($S$), French ($F$), both or neither. Of the $150$: $30$ study both languages, $45$ study Spanish but not French, $25$ study French but not Spanish, and $50$ study neither. Hence $75$ study Spanish, $75$ do not, $55$ study French and $95$ do not. A student is chosen at random. Find $P(F\\mid S)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } S:\\ \\text{use only the } 75 \\text{ Spanish students}",
          "explanation": "This time we are told the student studies Spanish, so the relevant group is the $75$ Spanish students. We ask what fraction of them also study French.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(F\\mid S)=\\dfrac{P(F\\cap S)}{P(S)}",
          "explanation": "The condition is now $S$, so we compare the overlap against the whole of the Spanish group.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many study Spanish",
          "workingLatex": "n(S)=30+45=75",
          "explanation": "The Spanish row totals $75$, the size of the group we now work inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many study both languages",
          "workingLatex": "n(F\\cap S)=30",
          "explanation": "The overlap is the same $30$ students who study both Spanish and French.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(F\\mid S)=\\dfrac{30}{75}",
          "explanation": "Both counts share the same total of $150$, so we divide the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{30}{75}=\\dfrac{2}{5}",
          "explanation": "Dividing top and bottom by $15$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(F\\mid S)=\\dfrac{2}{5}=0.4",
          "explanation": "Two fifths of the Spanish students also study French. Note this is not the same as $P(S\\mid F)$ found earlier.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F\\mid S)=\\dfrac{2}{5}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "A gym records data on $80$ people. Each person is male ($M$) or female ($F$), and either a gym member ($G$) or not. Of the $80$: $24$ are male members, $16$ are male non-members, $18$ are female members, and $22$ are female non-members. So $40$ are male, $40$ are female, $42$ are members and $38$ are not. One person is chosen at random. Find $P(G\\mid M)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } M:\\ \\text{use only the } 40 \\text{ males}",
          "explanation": "We are told the person is male, so only the $40$ males matter. We ask what fraction of them are gym members.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(G\\mid M)=\\dfrac{P(G\\cap M)}{P(M)}",
          "explanation": "Conditioning on $M$ means we compare the overlap $G\\cap M$ against the whole male group.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many are male",
          "workingLatex": "n(M)=24+16=40",
          "explanation": "The male row totals $40$, the size of the group we are conditioning inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many are male members",
          "workingLatex": "n(G\\cap M)=24",
          "explanation": "These $24$ people are both male and members — the overlap cell.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(G\\mid M)=\\dfrac{24}{40}",
          "explanation": "Both counts are out of the same $80$, so we divide the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{24}{40}=\\dfrac{3}{5}",
          "explanation": "Dividing top and bottom by $8$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(G\\mid M)=\\dfrac{3}{5}=0.6",
          "explanation": "Three fifths of the males are gym members, which is the required probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(G\\mid M)=\\dfrac{3}{5}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table"],
    "questionText": "A gym records data on $80$ people. Each person is male ($M$) or female ($F$), and either a gym member ($G$) or not. Of the $80$: $24$ are male members, $16$ are male non-members, $18$ are female members, and $22$ are female non-members. So $40$ are male, $40$ are female, $42$ are members and $38$ are not. One person is chosen at random. Find $P(M\\mid G)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } G:\\ \\text{use only the } 42 \\text{ members}",
          "explanation": "Now we are told the person is a gym member, so only the $42$ members are relevant. We ask what fraction of them are male.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(M\\mid G)=\\dfrac{P(M\\cap G)}{P(G)}",
          "explanation": "The condition is now $G$, so we measure the overlap against the whole of the member group.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off how many are members",
          "workingLatex": "n(G)=24+18=42",
          "explanation": "The member column totals $42$, the group we are conditioning inside.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off how many are male members",
          "workingLatex": "n(M\\cap G)=24",
          "explanation": "The overlap is the same $24$ people who are both male and members.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability as a ratio of counts",
          "workingLatex": "P(M\\mid G)=\\dfrac{24}{42}",
          "explanation": "Both counts are out of the same total of $80$, so we can divide the counts directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{24}{42}=\\dfrac{4}{7}",
          "explanation": "Dividing top and bottom by their common factor $6$ gives the simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result in context",
          "workingLatex": "P(M\\mid G)=\\dfrac{4}{7}\\approx 0.57",
          "explanation": "About four sevenths of the members are male. Note this differs from $P(G\\mid M)$ — the two conditions are not interchangeable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(M\\mid G)=\\dfrac{4}{7}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table", "complement"],
    "questionText": "A survey of $200$ adults records whether each person owns a car ($C$) and whether each holds a full driving licence ($L$). Of the $200$ adults: $90$ both own a car and hold a licence, $10$ own a car but hold no licence, $40$ hold a licence but own no car, and $60$ do neither. So $100$ own a car, $100$ do not, $130$ hold a licence and $70$ do not. One adult is chosen at random. Find $P(C'\\mid L')$, the probability that the adult owns no car given that they hold no licence.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two complement events",
          "workingLatex": "C'=\\text{owns no car},\\quad L'=\\text{holds no licence}",
          "explanation": "A dash means the opposite of the event. So $C'$ is not owning a car and $L'$ is not holding a licence. We want the chance of $C'$ once we already know $L'$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide what the condition restricts us to",
          "workingLatex": "\\text{Given } L':\\ \\text{use only the } 70 \\text{ adults with no licence}",
          "explanation": "Conditioning on $L'$ means we look only at the non-licence column of the table. That column becomes the new whole.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(C'\\mid L')=\\dfrac{P(C'\\cap L')}{P(L')}",
          "explanation": "We compare the overlap of the two complement events against the whole of the condition $L'$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the adults with no licence",
          "workingLatex": "n(L')=10+60=70",
          "explanation": "The non-licence column contains the $10$ car owners with no licence and the $60$ with neither, giving $70$ in total.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Within that column, count those with no car",
          "workingLatex": "n(C'\\cap L')=60",
          "explanation": "Of the $70$ non-licence holders, the ones who also own no car are the $60$ in the neither cell.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the ratio of counts",
          "workingLatex": "P(C'\\mid L')=\\dfrac{60}{70}",
          "explanation": "We take the $C'$ share of the $L'$ column. As both counts are out of $200$, that total cancels.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{60}{70}=\\dfrac{6}{7}",
          "explanation": "Dividing top and bottom by $10$ gives the fraction in lowest terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the answer as a share of the column",
          "workingLatex": "\\dfrac{6}{7}\\approx 0.86",
          "explanation": "About $86\\%$ of adults without a licence also have no car, which fits the idea that the two tend to go together.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cross-check using complements within the condition",
          "workingLatex": "P(C\\mid L')+P(C'\\mid L')=\\dfrac{10}{70}+\\dfrac{60}{70}=\\dfrac{70}{70}=1",
          "explanation": "Inside the condition $L'$, every adult either owns a car or does not, so these two conditional probabilities must add to $1$. They do, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(C'\\mid L')=\\dfrac{6}{7}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table", "complement"],
    "questionText": "In a year group of $150$ students, each may study Spanish ($S$), French ($F$), both or neither. Of the $150$: $30$ study both languages, $45$ study Spanish but not French, $25$ study French but not Spanish, and $50$ study neither. Hence $75$ study Spanish, $75$ do not, $55$ study French and $95$ do not. A student is chosen at random. Given that the student does not study French, find $P(S\\mid F')$ and $P(S'\\mid F')$, and verify that they sum to $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the condition",
          "workingLatex": "F'=\\text{does not study French}",
          "explanation": "We are told the student does not study French, so we restrict to the non-French group. Within it we look at whether they study Spanish or not.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the students who do not study French",
          "workingLatex": "n(F')=45+50=95",
          "explanation": "The non-French column holds the $45$ who study Spanish only and the $50$ who study neither, giving $95$ students.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the formula for the first conditional probability",
          "workingLatex": "P(S\\mid F')=\\dfrac{P(S\\cap F')}{P(F')}",
          "explanation": "We compare students who study Spanish but not French against the whole non-French group.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count Spanish students within the non-French group",
          "workingLatex": "n(S\\cap F')=45",
          "explanation": "Of the $95$ non-French students, $45$ study Spanish (and only Spanish).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the first conditional probability",
          "workingLatex": "P(S\\mid F')=\\dfrac{45}{95}=\\dfrac{9}{19}",
          "explanation": "Dividing top and bottom by $5$ gives the simplest form, about $0.47$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count non-Spanish students within the non-French group",
          "workingLatex": "n(S'\\cap F')=50",
          "explanation": "The remaining students in the non-French column study neither language, and there are $50$ of them.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the second conditional probability",
          "workingLatex": "P(S'\\mid F')=\\dfrac{50}{95}=\\dfrac{10}{19}",
          "explanation": "Again dividing by $5$ gives the simplest form, about $0.53$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two conditional probabilities",
          "workingLatex": "\\dfrac{9}{19}+\\dfrac{10}{19}=\\dfrac{19}{19}=1",
          "explanation": "The two fractions share the same denominator $19$, and their numerators add to $19$, so the sum is exactly $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain why the sum must be 1",
          "workingLatex": "S \\text{ and } S' \\text{ partition } F'",
          "explanation": "Inside the condition $F'$, each student either studies Spanish or does not — there is no other option. Two possibilities that cover everything must have probabilities adding to $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S\\mid F')=\\dfrac{9}{19}$ and $P(S'\\mid F')=\\dfrac{10}{19}$, and $\\dfrac{9}{19}+\\dfrac{10}{19}=1$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": ["conditional probability", "two-way table", "independence"],
    "questionText": "A gym records data on $80$ people. Each person is male ($M$) or female ($F$), and either a gym member ($G$) or not. Of the $80$: $24$ are male members, $16$ are male non-members, $18$ are female members, and $22$ are female non-members. So $40$ are male, $40$ are female, $42$ are members and $38$ are not. Find $P(F\\mid G')$, the probability that a person is female given that they are not a member. Compare it with $P(F)$ and hence decide whether gender and gym membership are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the condition",
          "workingLatex": "G'=\\text{not a gym member}",
          "explanation": "We are told the person is not a member, so we restrict to the non-member group and ask what fraction are female.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the non-members",
          "workingLatex": "n(G')=16+22=38",
          "explanation": "The non-member column holds $16$ males and $22$ females, giving $38$ people in total.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the conditional probability formula",
          "workingLatex": "P(F\\mid G')=\\dfrac{P(F\\cap G')}{P(G')}",
          "explanation": "We compare the female non-members against the whole non-member group.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the female non-members",
          "workingLatex": "n(F\\cap G')=22",
          "explanation": "Of the $38$ non-members, $22$ are female.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the conditional probability",
          "workingLatex": "P(F\\mid G')=\\dfrac{22}{38}=\\dfrac{11}{19}",
          "explanation": "Dividing top and bottom by $2$ gives the simplest form, about $0.58$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the overall probability of being female",
          "workingLatex": "P(F)=\\dfrac{40}{80}=\\dfrac{1}{2}",
          "explanation": "Ignoring membership, $40$ of the $80$ people are female, giving a probability of one half.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two probabilities",
          "workingLatex": "P(F\\mid G')=\\dfrac{11}{19}\\approx 0.58 \\;\\ne\\; 0.5=P(F)",
          "explanation": "If the events were independent, knowing a person is not a member would leave the chance of being female unchanged. Here it rises from $0.5$ to about $0.58$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the independence test",
          "workingLatex": "\\text{Independent} \\iff P(F\\mid G')=P(F)",
          "explanation": "Independence means the condition tells us nothing new. Since the two values differ, that test fails.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Draw the conclusion",
          "workingLatex": "P(F\\mid G')\\ne P(F)\\;\\Rightarrow\\;\\text{dependent}",
          "explanation": "Gender and gym membership are not independent. Non-members are somewhat more likely to be female than the group as a whole, so the two characteristics are linked.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F\\mid G')=\\dfrac{11}{19}\\approx 0.58$, which differs from $P(F)=\\dfrac{1}{2}$, so gender and gym membership are dependent (not independent)."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table", "complement"],
    "questionText": "A survey of $200$ adults records whether each person owns a car ($C$) and whether each holds a full driving licence ($L$). Of the $200$ adults: $90$ both own a car and hold a licence, $10$ own a car but hold no licence, $40$ hold a licence but own no car, and $60$ do neither. So $100$ own a car, $100$ do not, $130$ hold a licence and $70$ do not. Find $P(C\\mid L')$ and $P(C'\\mid L)$. Given that $P(C\\mid L)=\\dfrac{9}{13}$, explain why $P(C\\mid L)$ and $P(C\\mid L')$ are different.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the two conditions",
          "workingLatex": "L'=\\text{no licence},\\quad L=\\text{holds a licence}",
          "explanation": "The first probability conditions on adults with no licence; the second conditions on adults with a licence. Each starts from a different group.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first conditional probability",
          "workingLatex": "P(C\\mid L')=\\dfrac{n(C\\cap L')}{n(L')}",
          "explanation": "Conditioning on $L'$, we compare car owners without a licence against all non-licence holders.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read off the counts and evaluate",
          "workingLatex": "P(C\\mid L')=\\dfrac{10}{70}=\\dfrac{1}{7}",
          "explanation": "There are $10$ car owners among the $70$ without a licence. Dividing by $10$ gives $\\dfrac{1}{7}\\approx 0.14$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second conditional probability",
          "workingLatex": "P(C'\\mid L)=\\dfrac{n(C'\\cap L)}{n(L)}",
          "explanation": "Conditioning on $L$, we compare licence holders who own no car against all licence holders.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the counts and evaluate",
          "workingLatex": "P(C'\\mid L)=\\dfrac{40}{130}=\\dfrac{4}{13}",
          "explanation": "There are $40$ non-car-owners among the $130$ licence holders. Dividing by $10$ gives $\\dfrac{4}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the given conditional probability",
          "workingLatex": "P(C\\mid L)=\\dfrac{9}{13}\\approx 0.69",
          "explanation": "Among licence holders, about $69\\%$ own a car. This is the value we are asked to compare with $P(C\\mid L')$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two probabilities of owning a car",
          "workingLatex": "P(C\\mid L)=\\dfrac{9}{13}\\approx 0.69 \\quad\\text{vs}\\quad P(C\\mid L')=\\dfrac{1}{7}\\approx 0.14",
          "explanation": "The chance of owning a car is very different depending on whether we condition on having a licence or not having one.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the two differ",
          "workingLatex": "L \\text{ and } L' \\text{ are different groups}",
          "explanation": "$P(C\\mid L)$ and $P(C\\mid L')$ look inside two completely separate groups. Most licence holders own a car, while very few non-licence holders do, so the condition genuinely changes the probability — car ownership and licence holding are related.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm with a complement check",
          "workingLatex": "P(C\\mid L)+P(C'\\mid L)=\\dfrac{9}{13}+\\dfrac{4}{13}=1",
          "explanation": "Inside the licence group everyone either owns a car or does not, so those two conditional probabilities add to $1$, confirming $P(C'\\mid L)=\\dfrac{4}{13}$ is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(C\\mid L')=\\dfrac{1}{7}$ and $P(C'\\mid L)=\\dfrac{4}{13}$. Because $L$ and $L'$ are different groups of people, and licence holders are far more likely to own a car than non-holders, $P(C\\mid L)=\\dfrac{9}{13}$ differs from $P(C\\mid L')=\\dfrac{1}{7}$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table", "asymmetry"],
    "questionText": "In a year group of $150$ students, each may study Spanish ($S$), French ($F$), both or neither. Of the $150$: $30$ study both languages, $45$ study Spanish but not French, $25$ study French but not Spanish, and $50$ study neither. Hence $75$ study Spanish, $75$ do not, $55$ study French and $95$ do not. Find $P(S\\mid F)$ and $P(F\\mid S)$. Explain why these two conditional probabilities are not equal, even though both involve the same $30$ students who study both languages.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the first conditional probability",
          "workingLatex": "P(S\\mid F)=\\dfrac{n(S\\cap F)}{n(F)}",
          "explanation": "Conditioning on French, we compare students studying both languages against all French students.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the counts for the French condition",
          "workingLatex": "n(S\\cap F)=30,\\quad n(F)=55",
          "explanation": "There are $30$ students studying both languages, sitting inside the $55$ who study French.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the first conditional probability",
          "workingLatex": "P(S\\mid F)=\\dfrac{30}{55}=\\dfrac{6}{11}",
          "explanation": "Dividing top and bottom by $5$ gives $\\dfrac{6}{11}\\approx 0.55$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second conditional probability",
          "workingLatex": "P(F\\mid S)=\\dfrac{n(F\\cap S)}{n(S)}",
          "explanation": "Conditioning on Spanish instead, we compare the same overlap against all Spanish students.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the counts for the Spanish condition",
          "workingLatex": "n(F\\cap S)=30,\\quad n(S)=75",
          "explanation": "The overlap is again $30$, but it now sits inside the $75$ who study Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the second conditional probability",
          "workingLatex": "P(F\\mid S)=\\dfrac{30}{75}=\\dfrac{2}{5}",
          "explanation": "Dividing top and bottom by $15$ gives $\\dfrac{2}{5}=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Notice the shared numerator",
          "workingLatex": "\\text{both use } n(S\\cap F)=30",
          "explanation": "Both conditional probabilities count the same $30$ students who study both languages on top. The numerators are identical.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Notice the different denominators",
          "workingLatex": "n(F)=55 \\;\\ne\\; 75=n(S)",
          "explanation": "The denominators differ because conditioning swaps which group is treated as the whole — the $55$ French students versus the $75$ Spanish students.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the asymmetry",
          "workingLatex": "\\dfrac{30}{55}\\ne\\dfrac{30}{75}\\;\\Rightarrow\\;P(S\\mid F)\\ne P(F\\mid S)",
          "explanation": "Dividing the same overlap by two different totals gives two different fractions. This is why the order of conditioning matters: $P(S\\mid F)$ and $P(F\\mid S)$ are generally not equal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(S\\mid F)=\\dfrac{6}{11}$ and $P(F\\mid S)=\\dfrac{2}{5}$. They are unequal because, although both count the same $30$ overlap students, they divide by different totals ($55$ French vs $75$ Spanish)."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["conditional probability", "two-way table", "independence"],
    "questionText": "A survey of $200$ adults records whether each person owns a car ($C$) and whether each holds a full driving licence ($L$). Of the $200$ adults: $90$ both own a car and hold a licence, $10$ own a car but hold no licence, $40$ hold a licence but own no car, and $60$ do neither. So $100$ own a car, $100$ do not, $130$ hold a licence and $70$ do not. Find $P(C\\mid L)$ and $P(L\\mid C)$, then test whether the events $C$ and $L$ are independent, interpreting your conclusion in context.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Find } P(C\\mid L),\\ P(L\\mid C),\\ \\text{then test independence}",
          "explanation": "We first compute the two conditional probabilities, then use the independence test to compare an overlap with the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first conditional probability",
          "workingLatex": "P(C\\mid L)=\\dfrac{n(C\\cap L)}{n(L)}",
          "explanation": "Conditioning on licence holders, we compare car-owning licence holders against all licence holders.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the first conditional probability",
          "workingLatex": "P(C\\mid L)=\\dfrac{90}{130}=\\dfrac{9}{13}",
          "explanation": "There are $90$ car owners among the $130$ licence holders. Dividing by $10$ gives $\\dfrac{9}{13}\\approx 0.69$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second conditional probability",
          "workingLatex": "P(L\\mid C)=\\dfrac{n(L\\cap C)}{n(C)}",
          "explanation": "Conditioning on car owners, we compare the same overlap against all car owners.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the second conditional probability",
          "workingLatex": "P(L\\mid C)=\\dfrac{90}{100}=\\dfrac{9}{10}",
          "explanation": "There are $90$ licence holders among the $100$ car owners, giving $\\dfrac{9}{10}=0.9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the independence test",
          "workingLatex": "C,\\ L \\text{ independent} \\iff P(C\\cap L)=P(C)\\,P(L)",
          "explanation": "Two events are independent exactly when the probability of both happening equals the product of their separate probabilities. We now compute each side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the probability of the overlap",
          "workingLatex": "P(C\\cap L)=\\dfrac{90}{200}=\\dfrac{9}{20}=0.45",
          "explanation": "There are $90$ adults who both own a car and hold a licence, out of $200$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the separate probability of owning a car",
          "workingLatex": "P(C)=\\dfrac{100}{200}=0.5",
          "explanation": "Half of the $200$ adults own a car, ignoring licence status.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the separate probability of holding a licence",
          "workingLatex": "P(L)=\\dfrac{130}{200}=0.65",
          "explanation": "$130$ of the $200$ adults hold a licence.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply the two separate probabilities",
          "workingLatex": "P(C)\\,P(L)=0.5\\times 0.65=0.325",
          "explanation": "This is what the overlap probability would have to equal if the two events were independent.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare the two sides of the test",
          "workingLatex": "P(C\\cap L)=0.45 \\;\\ne\\; 0.325=P(C)\\,P(L)",
          "explanation": "The actual overlap probability is larger than the product, so the two sides of the independence test do not match.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion",
          "workingLatex": "P(C\\cap L)\\ne P(C)\\,P(L)\\;\\Rightarrow\\;\\text{dependent}",
          "explanation": "Because the equality fails, car ownership and holding a licence are not independent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result in context",
          "workingLatex": "P(C\\mid L)=\\dfrac{9}{13}\\approx 0.69 \\;\\ne\\; 0.5=P(C)",
          "explanation": "Knowing that someone holds a licence raises the chance they own a car from $0.5$ to about $0.69$. The two go together, which is exactly what dependence means in everyday terms.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(C\\mid L)=\\dfrac{9}{13}$ and $P(L\\mid C)=\\dfrac{9}{10}$. Since $P(C\\cap L)=0.45\\ne P(C)\\,P(L)=0.5\\times 0.65=0.325$, the events $C$ and $L$ are dependent: holding a licence makes owning a car more likely."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["conditional probability", "two-way table", "independence"],
    "questionText": "A gym records data on $80$ people. Each person is male ($M$) or female ($F$), and either a gym member ($G$) or not. Of the $80$: $24$ are male members, $16$ are male non-members, $18$ are female members, and $22$ are female non-members. So $40$ are male, $40$ are female, $42$ are members and $38$ are not. Find $P(M\\mid G)$, $P(G\\mid M)$ and $P(G\\mid F)$, then decide whether gym membership is independent of gender, interpreting your conclusion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the plan",
          "workingLatex": "\\text{Find } P(M\\mid G),\\ P(G\\mid M),\\ P(G\\mid F),\\ \\text{then test independence}",
          "explanation": "We compute three conditional probabilities, then compare the membership rate for males with that for females to judge independence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the probability that a member is male",
          "workingLatex": "P(M\\mid G)=\\dfrac{n(M\\cap G)}{n(G)}",
          "explanation": "Conditioning on members, we compare male members against all members.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate that probability",
          "workingLatex": "P(M\\mid G)=\\dfrac{24}{42}=\\dfrac{4}{7}",
          "explanation": "There are $24$ male members among the $42$ members. Dividing by $6$ gives $\\dfrac{4}{7}\\approx 0.57$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the probability that a male is a member",
          "workingLatex": "P(G\\mid M)=\\dfrac{n(G\\cap M)}{n(M)}",
          "explanation": "Conditioning on males instead, we compare male members against all males.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate that probability",
          "workingLatex": "P(G\\mid M)=\\dfrac{24}{40}=\\dfrac{3}{5}=0.6",
          "explanation": "There are $24$ members among the $40$ males, giving a membership rate of $0.6$ for males.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the probability that a female is a member",
          "workingLatex": "P(G\\mid F)=\\dfrac{n(G\\cap F)}{n(F)}",
          "explanation": "We now find the membership rate for females, comparing female members against all females.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate that probability",
          "workingLatex": "P(G\\mid F)=\\dfrac{18}{40}=\\dfrac{9}{20}=0.45",
          "explanation": "There are $18$ members among the $40$ females, giving a membership rate of $0.45$ for females.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the independence test",
          "workingLatex": "G \\text{ independent of gender} \\iff P(G\\mid M)=P(G)=P(G\\mid F)",
          "explanation": "If membership did not depend on gender, the membership rate would be the same for males, for females and overall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the overall membership rate",
          "workingLatex": "P(G)=\\dfrac{42}{80}=\\dfrac{21}{40}=0.525",
          "explanation": "$42$ of the $80$ people are members, giving an overall rate of $0.525$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the membership rates",
          "workingLatex": "P(G\\mid M)=0.6 \\;\\ne\\; 0.45=P(G\\mid F)",
          "explanation": "Males join at a rate of $0.6$ but females at only $0.45$; neither matches the overall $0.525$. The rates clearly differ.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "P(G\\mid M)\\ne P(G\\mid F)\\;\\Rightarrow\\;\\text{dependent}",
          "explanation": "Because the membership rate changes with gender, gym membership is not independent of gender.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret the result in context",
          "workingLatex": "0.6 > 0.525 > 0.45",
          "explanation": "In this sample males are noticeably more likely to be members than females. Knowing a person's gender changes the chance they are a member, which is what dependence means here.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm using the member composition",
          "workingLatex": "P(M\\mid G)=\\dfrac{4}{7}\\approx 0.57 \\;\\ne\\; 0.5=P(M)",
          "explanation": "As a final check, members are more likely to be male ($\\approx 0.57$) than the population is overall ($0.5$), again showing gender and membership are linked.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(M\\mid G)=\\dfrac{4}{7}$, $P(G\\mid M)=\\dfrac{3}{5}=0.6$ and $P(G\\mid F)=\\dfrac{9}{20}=0.45$. Since $P(G\\mid M)\\ne P(G\\mid F)$ (and neither equals $P(G)=0.525$), gym membership is dependent on gender: males are more likely to be members."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["conditional probability", "two-way table", "union"],
    "questionText": "In a year group of $150$ students, each may study Spanish ($S$), French ($F$), both or neither. Of the $150$: $30$ study both languages, $45$ study Spanish but not French, $25$ study French but not Spanish, and $50$ study neither. Hence $75$ study Spanish, $75$ do not, $55$ study French and $95$ do not. A student is chosen at random. (a) Find the probability that the student studies at least one language. (b) Given that the student studies at least one language, find the probability that they study both. (c) Find $P(F\\mid S)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret at least one language",
          "workingLatex": "\\text{at least one} = S\\cup F",
          "explanation": "Studying at least one language means studying Spanish, or French, or both — that is the union $S\\cup F$. Only the students who study neither are excluded.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the students who study at least one language",
          "workingLatex": "n(S\\cup F)=30+45+25=100",
          "explanation": "Add the three language groups: $30$ study both, $45$ Spanish only and $25$ French only. The $50$ who study neither are left out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the probability for part (a)",
          "workingLatex": "P(S\\cup F)=\\dfrac{100}{150}",
          "explanation": "There are $100$ such students out of the $150$ in the year group.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the answer to part (a)",
          "workingLatex": "\\dfrac{100}{150}=\\dfrac{2}{3}",
          "explanation": "Dividing top and bottom by $50$ gives $\\dfrac{2}{3}$, the probability of studying at least one language.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up part (b) as a conditional probability",
          "workingLatex": "P(S\\cap F \\mid S\\cup F)=\\dfrac{P(S\\cap F)}{P(S\\cup F)}",
          "explanation": "We are told the student studies at least one language, so $S\\cup F$ is the new whole. Studying both, $S\\cap F$, lies entirely inside $S\\cup F$, so the overlap is just $S\\cap F$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read off the number who study both",
          "workingLatex": "n(S\\cap F)=30",
          "explanation": "The $30$ students who study both languages form the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Form the ratio of counts",
          "workingLatex": "P(S\\cap F \\mid S\\cup F)=\\dfrac{30}{100}",
          "explanation": "Out of the $100$ students who study at least one language, $30$ study both. As both are out of $150$, that total cancels.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the answer to part (b)",
          "workingLatex": "\\dfrac{30}{100}=\\dfrac{3}{10}",
          "explanation": "Dividing top and bottom by $10$ gives $\\dfrac{3}{10}=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up part (c) as a conditional probability",
          "workingLatex": "P(F\\mid S)=\\dfrac{n(F\\cap S)}{n(S)}",
          "explanation": "Now we condition on the Spanish students and ask what fraction of them also study French.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Read off the counts for part (c)",
          "workingLatex": "n(F\\cap S)=30,\\quad n(S)=75",
          "explanation": "The $30$ students who study both sit inside the $75$ who study Spanish.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Form and simplify the answer to part (c)",
          "workingLatex": "P(F\\mid S)=\\dfrac{30}{75}=\\dfrac{2}{5}",
          "explanation": "Dividing top and bottom by $15$ gives $\\dfrac{2}{5}=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check part (a) using the complement",
          "workingLatex": "P(S\\cup F)=1-P(\\text{neither})=1-\\dfrac{50}{150}=1-\\dfrac{1}{3}=\\dfrac{2}{3}",
          "explanation": "As a check, studying at least one language is the opposite of studying neither. Subtracting the $\\dfrac{1}{3}$ who study neither from $1$ gives $\\dfrac{2}{3}$, matching part (a).",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Collect the three results",
          "workingLatex": "\\text{(a) } \\dfrac{2}{3},\\quad \\text{(b) } \\dfrac{3}{10},\\quad \\text{(c) } \\dfrac{2}{5}",
          "explanation": "Bringing the answers together: two thirds study at least one language; of those, three tenths study both; and two fifths of Spanish students also study French.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $P(\\text{at least one language})=\\dfrac{2}{3}$; (b) $P(\\text{both}\\mid\\text{at least one})=\\dfrac{3}{10}$; (c) $P(F\\mid S)=\\dfrac{2}{5}$."
    }
  },
{
    "id": "al.y2.stats.conditional-probability.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "addition rule", "union"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. The whole of circle $A$ has probability $P(A)=0.6$, the whole of circle $B$ has probability $P(B)=0.5$, and the overlap where both events occur has probability $P(A\\cap B)=0.3$. Find $P(A\\cup B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise this needs the addition rule for two events",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "The union $A\\cup B$ means $A$ happens, or $B$ happens, or both. If we simply add $P(A)$ and $P(B)$ we count the overlap $A\\cap B$ twice, so we subtract it once to correct for the double-counting.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the probability of A from the Venn diagram",
          "workingLatex": "P(A) = 0.6",
          "explanation": "The whole of circle $A$ carries probability $0.6$, so $P(A)=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the probability of B from the Venn diagram",
          "workingLatex": "P(B) = 0.5",
          "explanation": "The whole of circle $B$ carries probability $0.5$, so $P(B)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read the probability of the overlap",
          "workingLatex": "P(A\\cap B) = 0.3",
          "explanation": "The lens-shaped overlap, where both events occur together, has probability $0.3$, so $P(A\\cap B)=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the three values into the addition rule",
          "workingLatex": "P(A\\cup B) = 0.6 + 0.5 - 0.3",
          "explanation": "We place each value into the formula, ready to combine them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two individual probabilities",
          "workingLatex": "0.6 + 0.5 = 1.1",
          "explanation": "Adding $P(A)$ and $P(B)$ first gives $1.1$; this total still contains the overlap twice, which is why it can exceed $1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract the overlap to remove the double-counting",
          "workingLatex": "P(A\\cup B) = 1.1 - 0.3 = 0.8",
          "explanation": "Removing the one extra copy of the overlap gives a valid probability of $0.8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the result and sanity-check it",
          "workingLatex": "P(A\\cup B) = 0.8",
          "explanation": "The answer $0.8$ lies between $0$ and $1$, and equals the three inner regions $0.3+0.3+0.2$, confirming it is sensible.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cup B) = 0.8$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. The overlap where both events occur has probability $P(A\\cap B)=0.3$, and the whole of circle $B$ has probability $P(B)=0.5$. Find $P(A\\mid B)$, the probability that $A$ occurs given that $B$ occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Conditioning on $B$ means we assume $B$ has happened, so we restrict our world to circle $B$ and ask what fraction of it also lies in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the condition and its probability",
          "workingLatex": "P(B) = 0.5",
          "explanation": "Because we are told $B$ has occurred, circle $B$ becomes the new whole; its probability $0.5$ is the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the overlap that sits inside the condition",
          "workingLatex": "P(A\\cap B) = 0.3",
          "explanation": "The part of circle $B$ that also lies in $A$ is the overlap, with probability $0.3$; this is the favourable region.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values into the formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.3}{0.5}",
          "explanation": "We compare the favourable overlap against the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Carry out the division",
          "workingLatex": "\\dfrac{0.3}{0.5} = \\dfrac{3}{5} = 0.6",
          "explanation": "Multiplying top and bottom by $10$ gives $\\tfrac{3}{5}$, which equals $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result and interpret it",
          "workingLatex": "P(A\\mid B) = 0.6",
          "explanation": "Given that $B$ has happened, there is a $0.6$ chance that $A$ also happens; $60\\%$ of circle $B$ lies inside $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = 0.6$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "addition rule", "intersection"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. It is known that $P(A)=0.45$, $P(B)=0.4$, and the probability that at least one of the events occurs is $P(A\\cup B)=0.7$. Find $P(A\\cap B)$, the probability of the overlap.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the addition rule for two events",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "The union counts everything in $A$ or $B$; because adding the circles counts the overlap twice, the overlap is subtracted once.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make the overlap the subject",
          "workingLatex": "P(A\\cap B) = P(A) + P(B) - P(A\\cup B)",
          "explanation": "We move $P(A\\cap B)$ to the left and $P(A\\cup B)$ to the right, so the unknown overlap is written in terms of the three known quantities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known probabilities from the diagram",
          "workingLatex": "P(A)=0.45,\\quad P(B)=0.4,\\quad P(A\\cup B)=0.7",
          "explanation": "These three values are given, so we can substitute directly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "P(A\\cap B) = 0.45 + 0.4 - 0.7",
          "explanation": "Placing the numbers into the rearranged formula prepares the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two single-event probabilities",
          "workingLatex": "0.45 + 0.4 = 0.85",
          "explanation": "The sum $0.85$ over-counts the overlap once, which the union will correct.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract the union probability",
          "workingLatex": "P(A\\cap B) = 0.85 - 0.7 = 0.15",
          "explanation": "The difference isolates the overlap that was double-counted, giving $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "P(A\\cap B) = 0.15",
          "explanation": "The overlap probability is $0.15$, a valid value between $0$ and the smaller circle $0.4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B) = 0.15$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. The overlap has probability $P(A\\cap B)=0.15$ and the whole of circle $B$ has probability $P(B)=0.4$. Find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Given $B$, we treat circle $B$ as the whole world and measure how much of it lies in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the condition probability",
          "workingLatex": "P(B) = 0.4",
          "explanation": "Circle $B$ is the new denominator because we are told $B$ has occurred.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the overlap inside the condition",
          "workingLatex": "P(A\\cap B) = 0.15",
          "explanation": "The part of $B$ that also lies in $A$ has probability $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.15}{0.4}",
          "explanation": "We compare the overlap against the whole of circle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the division as a decimal",
          "workingLatex": "\\dfrac{0.15}{0.4} = 0.375",
          "explanation": "Dividing $0.15$ by $0.4$ gives $0.375$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Express the answer as a simplified fraction",
          "workingLatex": "\\dfrac{0.15}{0.4} = \\dfrac{15}{40} = \\dfrac{3}{8}",
          "explanation": "Writing both numbers over $40$ and cancelling the common factor $5$ gives $\\tfrac{3}{8}$, which matches $0.375$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "P(A\\mid B) = \\dfrac{3}{8}",
          "explanation": "Given $B$, the probability of $A$ is $\\tfrac{3}{8}$; just under half of circle $B$ lies inside $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = \\dfrac{3}{8}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "three-set"],
    "questionText": "A Venn diagram for $50$ students shows three overlapping circles for the subjects Maths $M$, Physics $P$ and Chemistry $C$. The eight regions contain: Maths only $8$, Physics only $6$, Chemistry only $5$, Maths and Physics but not Chemistry $7$, Maths and Chemistry but not Physics $4$, Physics and Chemistry but not Maths $3$, all three subjects $2$, and none of the three $15$. Find $P(M\\mid P)$, the probability a student takes Maths given that they take Physics.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the conditional probability formula in terms of counts",
          "workingLatex": "P(M\\mid P) = \\dfrac{n(M\\cap P)}{n(P)}",
          "explanation": "Given that a student takes Physics, we restrict attention to the Physics circle and ask what fraction of those students also take Maths; counts work just as well as probabilities here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count all the students in the Physics circle",
          "workingLatex": "n(P) = 6 + 7 + 3 + 2 = 18",
          "explanation": "The Physics circle is made of four regions: Physics only, Physics with Maths, Physics with Chemistry, and all three; adding them gives the total taking Physics.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the students who take both Maths and Physics",
          "workingLatex": "n(M\\cap P) = 7 + 2 = 9",
          "explanation": "The Maths-and-Physics overlap is the region that is in both circles: those with just Maths and Physics ($7$) plus those with all three ($2$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the counts into the formula",
          "workingLatex": "P(M\\mid P) = \\dfrac{9}{18}",
          "explanation": "Of the $18$ Physics students, $9$ also take Maths, so the conditional probability is this ratio.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{9}{18} = \\dfrac{1}{2}",
          "explanation": "Both numbers share a factor of $9$, cancelling to $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result and interpret it",
          "workingLatex": "P(M\\mid P) = \\dfrac{1}{2}",
          "explanation": "Exactly half of the Physics students also study Maths, so given a student takes Physics the chance they also take Maths is $\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(M\\mid P) = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "description",
    "tags": ["conditional probability", "Venn diagram", "independence"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$, with $P(A)=0.6$, $P(B)=0.5$ and overlap $P(A\\cap B)=0.3$. (a) Find $P(A\\mid B)$ and $P(B\\mid A)$. (b) Show that $A$ and $B$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the formula for A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Conditioning on $B$ makes circle $B$ the whole world, so we divide the overlap by $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read the required probabilities from the Venn diagram",
          "workingLatex": "P(A)=0.6,\\quad P(B)=0.5,\\quad P(A\\cap B)=0.3",
          "explanation": "The two full circles and their overlap are given, which is everything we need.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the probability of A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.3}{0.5} = 0.6",
          "explanation": "The overlap $0.3$ is $60\\%$ of circle $B$, so given $B$ the chance of $A$ is $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the formula for B given A",
          "workingLatex": "P(B\\mid A) = \\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Now we condition on $A$ instead, so circle $A$ becomes the whole and $P(A)$ is the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the probability of B given A",
          "workingLatex": "P(B\\mid A) = \\dfrac{0.3}{0.6} = 0.5",
          "explanation": "The overlap $0.3$ is half of circle $A$, so given $A$ the chance of $B$ is $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the test for independence using conditional probability",
          "workingLatex": "A,\\ B \\text{ independent} \\iff P(A\\mid B) = P(A)",
          "explanation": "Independence means the condition carries no information: knowing $B$ happened leaves the probability of $A$ unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare A given B with A on its own",
          "workingLatex": "P(A\\mid B) = 0.6 = P(A)",
          "explanation": "Both are $0.6$, so learning that $B$ occurred does not change how likely $A$ is.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the mirror condition for consistency",
          "workingLatex": "P(B\\mid A) = 0.5 = P(B)",
          "explanation": "From the other direction, knowing $A$ occurred leaves $P(B)$ at $0.5$; the two views agree.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "\\therefore A \\text{ and } B \\text{ are independent}",
          "explanation": "Because conditioning changes neither probability, $A$ and $B$ are independent events.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = 0.6$, $P(B\\mid A) = 0.5$, and since $P(A\\mid B) = P(A) = 0.6$, events $A$ and $B$ are independent."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "regions"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. It is given that $P(A)=0.45$, $P(B)=0.4$ and $P(A\\cup B)=0.7$. (a) Find $P(B\\mid A)$. (b) Complete the Venn diagram by finding the probability of the 'only $A$', 'only $B$' and 'neither' regions.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the overlap is needed first",
          "workingLatex": "P(B\\mid A) = \\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "The conditional probability needs the overlap $P(A\\cap B)$, which is not given directly, so we must find it before anything else.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the addition rule and rearrange for the overlap",
          "workingLatex": "P(A\\cap B) = P(A) + P(B) - P(A\\cup B)",
          "explanation": "Rearranging the union formula lets us recover the overlap from the three known probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the overlap",
          "workingLatex": "P(A\\cap B) = 0.45 + 0.4 - 0.7 = 0.15",
          "explanation": "Adding the circles and subtracting the union removes the double-counting, giving an overlap of $0.15$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the conditional probability formula",
          "workingLatex": "P(B\\mid A) = \\dfrac{0.15}{0.45}",
          "explanation": "Given $A$, circle $A$ (probability $0.45$) is the whole, and the overlap $0.15$ is the favourable part.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{0.15}{0.45} = \\dfrac{15}{45} = \\dfrac{1}{3}",
          "explanation": "Both numbers share a factor of $15$, cancelling neatly to $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the part of A that lies outside B",
          "workingLatex": "P(\\text{only } A) = P(A) - P(A\\cap B) = 0.45 - 0.15 = 0.30",
          "explanation": "Removing the overlap from the whole of circle $A$ leaves the crescent that is in $A$ but not $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the part of B that lies outside A",
          "workingLatex": "P(\\text{only } B) = P(B) - P(A\\cap B) = 0.4 - 0.15 = 0.25",
          "explanation": "Similarly, subtracting the overlap from circle $B$ gives the crescent that is in $B$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the region outside both circles",
          "workingLatex": "P(\\text{neither}) = 1 - P(A\\cup B) = 1 - 0.7 = 0.30",
          "explanation": "Everything not in the union sits outside both circles, so it is the complement of $A\\cup B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the four regions sum to one",
          "workingLatex": "0.30 + 0.15 + 0.25 + 0.30 = 1",
          "explanation": "The whole probability space must total $1$; this confirms the four regions are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State all the results",
          "workingLatex": "P(B\\mid A) = \\dfrac{1}{3},\\quad \\text{only }A = 0.30,\\ \\text{only }B = 0.25,\\ \\text{neither} = 0.30",
          "explanation": "We now have the conditional probability and every region of the completed Venn diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B\\mid A) = \\dfrac{1}{3}$; only $A = 0.3$, only $B = 0.25$, neither $= 0.3$ (overlap $= 0.15$)."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "three-set"],
    "questionText": "A Venn diagram for $50$ students shows subjects Maths $M$, Physics $P$ and Chemistry $C$. The regions are: Maths only $8$, Physics only $6$, Chemistry only $5$, Maths and Physics only $7$, Maths and Chemistry only $4$, Physics and Chemistry only $3$, all three $2$, and none $15$. Find $P(P\\mid M)$ and $P(M\\mid P)$, and explain why they are different.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Count the students taking Maths",
          "workingLatex": "n(M) = 8 + 7 + 4 + 2 = 21",
          "explanation": "The Maths circle is built from four regions: Maths only, Maths with Physics, Maths with Chemistry, and all three.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Count the students taking Physics",
          "workingLatex": "n(P) = 6 + 7 + 3 + 2 = 18",
          "explanation": "The Physics circle likewise gathers its four regions to give the total number taking Physics.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Count the students taking both Maths and Physics",
          "workingLatex": "n(M\\cap P) = 7 + 2 = 9",
          "explanation": "The Maths-and-Physics overlap is the region inside both circles: the $7$ taking just those two plus the $2$ taking all three.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note both conditionals share the same overlap count",
          "workingLatex": "n(M\\cap P) = 9 \\text{ in both fractions}",
          "explanation": "The numerator is identical in each conditional because it counts the same overlap of students taking both subjects; only the denominators will change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write and evaluate P of Physics given Maths",
          "workingLatex": "P(P\\mid M) = \\dfrac{n(M\\cap P)}{n(M)} = \\dfrac{9}{21} = \\dfrac{3}{7}",
          "explanation": "Restricting to the $21$ Maths students, $9$ also take Physics, and $\\tfrac{9}{21}$ cancels by $3$ to $\\tfrac{3}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write and evaluate P of Maths given Physics",
          "workingLatex": "P(M\\mid P) = \\dfrac{n(M\\cap P)}{n(P)} = \\dfrac{9}{18} = \\dfrac{1}{2}",
          "explanation": "Restricting instead to the $18$ Physics students, the same $9$ overlap students give $\\tfrac{9}{18} = \\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two conditional probabilities",
          "workingLatex": "P(P\\mid M) = \\dfrac{3}{7} \\approx 0.43,\\quad P(M\\mid P) = \\dfrac{1}{2} = 0.5",
          "explanation": "Although both describe the same $9$ overlap students, the two answers differ.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the two differ",
          "workingLatex": "\\dfrac{9}{21} \\ne \\dfrac{9}{18} \\text{ because the denominators differ}",
          "explanation": "The overlap ($9$) is shared, but conditioning changes the whole we divide by: Maths has $21$ students and Physics only $18$. Dividing the same $9$ by the larger Maths group gives the smaller fraction, so the direction of conditioning matters.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results",
          "workingLatex": "P(P\\mid M) = \\dfrac{3}{7},\\qquad P(M\\mid P) = \\dfrac{1}{2}",
          "explanation": "Both conditionals are recorded, together with the reason they are not equal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(P\\mid M) = \\dfrac{3}{7}$ and $P(M\\mid P) = \\dfrac{1}{2}$; they differ because the shared overlap of $9$ is divided by different totals ($n(M)=21$ versus $n(P)=18$)."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "three-set"],
    "questionText": "A Venn diagram for $50$ students shows subjects Maths $M$, Physics $P$ and Chemistry $C$, with regions: Maths only $8$, Physics only $6$, Chemistry only $5$, Maths and Physics only $7$, Maths and Chemistry only $4$, Physics and Chemistry only $3$, all three $2$, and none $15$. Of the students taking both Maths and Physics, find the probability that they also take Chemistry, that is $P(C\\mid M\\cap P)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand what is being asked",
          "workingLatex": "M\\cap P \\to \\text{new sample space}",
          "explanation": "The phrase 'of the students taking both Maths and Physics' tells us the sample space is narrowed to the $M\\cap P$ group before we look at Chemistry.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the conditional probability formula",
          "workingLatex": "P(C\\mid M\\cap P) = \\dfrac{n(C\\cap M\\cap P)}{n(M\\cap P)}",
          "explanation": "We are told the students already take both Maths and Physics, so the $M\\cap P$ group becomes our whole world, and we ask how many of them also take Chemistry.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the regions making up the Maths-and-Physics group",
          "workingLatex": "M\\cap P:\\ (\\text{both only}) + (\\text{all three}) = 7 + 2",
          "explanation": "A student takes both Maths and Physics whether or not they also take Chemistry, so this group is the $7$ with just those two subjects plus the $2$ taking all three.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Count the Maths-and-Physics group",
          "workingLatex": "n(M\\cap P) = 7 + 2 = 9",
          "explanation": "There are $9$ students in total taking both Maths and Physics; this is the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Count how many of them also take Chemistry",
          "workingLatex": "n(C\\cap M\\cap P) = 2",
          "explanation": "Among those $9$, the only ones also doing Chemistry are the central region where all three circles meet, which holds $2$ students.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the counts into the formula",
          "workingLatex": "P(C\\mid M\\cap P) = \\dfrac{2}{9}",
          "explanation": "Two of the nine Maths-and-Physics students also take Chemistry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check whether the fraction simplifies",
          "workingLatex": "\\gcd(2,9) = 1 \\Rightarrow \\dfrac{2}{9}\\text{ is fully reduced}",
          "explanation": "Since $2$ and $9$ share no common factor, the fraction is already in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the result",
          "workingLatex": "\\dfrac{2}{9} \\approx 0.22",
          "explanation": "So roughly $22\\%$ of the students taking both Maths and Physics go on to take Chemistry as well.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(C\\mid M\\cap P) = \\dfrac{2}{9}",
          "explanation": "This is the required conditional probability of taking Chemistry given both Maths and Physics.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(C\\mid M\\cap P) = \\dfrac{2}{9}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "three-set"],
    "questionText": "A Venn diagram for $50$ students shows subjects Maths $M$, Physics $P$ and Chemistry $C$, with regions: Maths only $8$, Physics only $6$, Chemistry only $5$, Maths and Physics only $7$, Maths and Chemistry only $4$, Physics and Chemistry only $3$, all three $2$, and none $15$. (a) Find the probability that a randomly chosen student takes exactly one subject. (b) Find $P(M\\mid P)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify which regions mean exactly one subject",
          "workingLatex": "\\text{exactly one} = (\\text{Maths only}) + (\\text{Physics only}) + (\\text{Chemistry only})",
          "explanation": "'Exactly one subject' means a student sits in a single circle and none of the overlaps, so we use only the three outer single-subject regions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add the three single-subject counts",
          "workingLatex": "8 + 6 + 5 = 19",
          "explanation": "Summing Maths only, Physics only and Chemistry only counts every student taking precisely one of the three subjects.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide by the total number of students",
          "workingLatex": "P(\\text{exactly one}) = \\dfrac{19}{50}",
          "explanation": "There are $50$ students in total, so the probability is the favourable count over the whole group.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check the fraction is in simplest form",
          "workingLatex": "\\gcd(19,50) = 1 \\Rightarrow \\dfrac{19}{50}\\text{ is reduced}",
          "explanation": "As $19$ is prime and does not divide $50$, the fraction cannot be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Interpret the exactly-one probability",
          "workingLatex": "\\dfrac{19}{50} = 0.38",
          "explanation": "So $38\\%$ of the students take precisely one of the three subjects.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Move to part (b) and count the Physics students",
          "workingLatex": "n(P) = 6 + 7 + 3 + 2 = 18",
          "explanation": "For $P(M\\mid P)$ we condition on Physics, so we first total the four regions inside the Physics circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Count the Maths-and-Physics overlap",
          "workingLatex": "n(M\\cap P) = 7 + 2 = 9",
          "explanation": "The students taking both Maths and Physics are those in the two-subject region ($7$) and the all-three region ($2$).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Form and simplify the conditional probability",
          "workingLatex": "P(M\\mid P) = \\dfrac{9}{18} = \\dfrac{1}{2}",
          "explanation": "Of the $18$ Physics students, $9$ also take Maths, giving $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State both answers",
          "workingLatex": "P(\\text{exactly one}) = \\dfrac{19}{50},\\qquad P(M\\mid P) = \\dfrac{1}{2}",
          "explanation": "Both required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one subject}) = \\dfrac{19}{50}$ and $P(M\\mid P) = \\dfrac{1}{2}$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "complement"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$. The four regions have probabilities: only $A$ (in $A$ but not $B$) $=0.3$, the overlap $A\\cap B = 0.3$, only $B$ (in $B$ but not $A$) $=0.2$, and neither $=0.2$. Find $P(A\\mid B')$ and $P(A'\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand conditioning on the complement of B",
          "workingLatex": "P(A\\mid B') = \\dfrac{P(A\\cap B')}{P(B')}",
          "explanation": "The event $B'$ means $B$ does not happen, so we restrict to everything outside circle $B$ and ask what fraction of that also lies in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of not-B",
          "workingLatex": "P(B') = 0.3 + 0.2 = 0.5",
          "explanation": "The area outside circle $B$ consists of the only-$A$ region ($0.3$) and the neither region ($0.2$), giving $P(B')=0.5$; this also equals $1 - P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the part of A that lies outside B",
          "workingLatex": "P(A\\cap B') = 0.3",
          "explanation": "The piece of $A$ that avoids $B$ is exactly the only-$A$ region, with probability $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute A given not-B",
          "workingLatex": "P(A\\mid B') = \\dfrac{0.3}{0.5} = 0.6",
          "explanation": "Among the outcomes where $B$ does not happen, $60\\%$ still lie in $A$, so $P(A\\mid B')=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Understand conditioning on B for the second part",
          "workingLatex": "P(A'\\mid B) = \\dfrac{P(A'\\cap B)}{P(B)}",
          "explanation": "Now we assume $B$ has happened, so circle $B$ is the whole, and we want the fraction of it lying outside $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the probability of B",
          "workingLatex": "P(B) = 0.3 + 0.2 = 0.5",
          "explanation": "Circle $B$ is the overlap ($0.3$) together with the only-$B$ region ($0.2$), giving $P(B)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the part of B that lies outside A",
          "workingLatex": "P(A'\\cap B) = 0.2",
          "explanation": "The part of $B$ not shared with $A$ is the only-$B$ region, with probability $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute not-A given B",
          "workingLatex": "P(A'\\mid B) = \\dfrac{0.2}{0.5} = 0.4",
          "explanation": "Of the outcomes in $B$, $40\\%$ lie outside $A$, so $P(A'\\mid B)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Link the two complementary conditionals as a check",
          "workingLatex": "P(A\\mid B) + P(A'\\mid B) = 0.6 + 0.4 = 1",
          "explanation": "Given $B$, a point is either in $A$ or not, so $P(A\\mid B)$ and $P(A'\\mid B)$ must add to $1$; this confirms $P(A'\\mid B)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "P(A\\mid B') = 0.6,\\qquad P(A'\\mid B) = 0.4",
          "explanation": "Both complement-conditioned probabilities are found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B') = 0.6$ and $P(A'\\mid B) = 0.4$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "description",
    "tags": ["conditional probability", "Venn diagram", "independence"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$, with $P(A)=0.45$, $P(B)=0.4$ and $P(A\\cup B)=0.7$. (a) Find $P(A\\cap B)$ and complete the Venn diagram. (b) Find $P(A\\mid B)$ and $P(B\\mid A)$. (c) Determine whether $A$ and $B$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Outline the plan",
          "workingLatex": "\\text{Find } P(A\\cap B) \\to \\text{regions} \\to \\text{conditionals} \\to \\text{independence}",
          "explanation": "The overlap unlocks everything: it lets us complete the diagram, compute both conditional probabilities, and finally test independence.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the addition rule",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "The union counts $A$ or $B$; the overlap is subtracted once because adding the circles counts it twice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for the overlap",
          "workingLatex": "P(A\\cap B) = P(A) + P(B) - P(A\\cup B)",
          "explanation": "Making the overlap the subject expresses the unknown in terms of the three given values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the overlap",
          "workingLatex": "P(A\\cap B) = 0.45 + 0.4 - 0.7 = 0.15",
          "explanation": "The overlap probability is $0.15$; both events occur together $15\\%$ of the time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the only-A region",
          "workingLatex": "P(\\text{only } A) = 0.45 - 0.15 = 0.30",
          "explanation": "Subtracting the overlap from circle $A$ leaves the part of $A$ outside $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the only-B region",
          "workingLatex": "P(\\text{only } B) = 0.4 - 0.15 = 0.25",
          "explanation": "Subtracting the overlap from circle $B$ leaves the part of $B$ outside $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the neither region",
          "workingLatex": "P(\\text{neither}) = 1 - 0.7 = 0.30",
          "explanation": "Everything outside the union sits in neither circle, so it is $1 - P(A\\cup B)$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the completed diagram",
          "workingLatex": "0.30 + 0.15 + 0.25 + 0.30 = 1",
          "explanation": "The four regions cover the whole sample space and must total $1$, which they do.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the formula for A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Conditioning on $B$ makes circle $B$ the whole world; we measure the overlap against it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.15}{0.4} = \\dfrac{3}{8} = 0.375",
          "explanation": "The overlap is $\\tfrac{3}{8}$ of circle $B$, so given $B$ the chance of $A$ is $0.375$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the formula for B given A",
          "workingLatex": "P(B\\mid A) = \\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Now circle $A$ is the whole, so we divide the overlap by $P(A)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute B given A",
          "workingLatex": "P(B\\mid A) = \\dfrac{0.15}{0.45} = \\dfrac{1}{3}",
          "explanation": "The overlap is $\\tfrac{1}{3}$ of circle $A$, so given $A$ the chance of $B$ is $\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Recall the independence test",
          "workingLatex": "A,\\ B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "If the events were independent, the overlap would equal the product of the two single probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compute the product of the single probabilities",
          "workingLatex": "P(A)\\,P(B) = 0.45 \\times 0.4 = 0.18",
          "explanation": "This is what the overlap would have to be for independence to hold.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Compare with the actual overlap",
          "workingLatex": "P(A\\cap B) = 0.15 \\ne 0.18 = P(A)\\,P(B)",
          "explanation": "The real overlap $0.15$ is smaller than the independent value $0.18$, so the equality fails.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the conclusion",
          "workingLatex": "\\therefore A \\text{ and } B \\text{ are not independent (dependent)}",
          "explanation": "Since $P(A\\cap B) \\ne P(A)P(B)$, the events are dependent; equivalently $P(A\\mid B)=0.375 \\ne 0.45 = P(A)$, so knowing $B$ does change the chance of $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B) = 0.15$; only $A = 0.3$, only $B = 0.25$, neither $= 0.3$; $P(A\\mid B) = \\dfrac{3}{8}$, $P(B\\mid A) = \\dfrac{1}{3}$. Since $P(A)P(B) = 0.18 \\ne 0.15 = P(A\\cap B)$, events $A$ and $B$ are dependent."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["conditional probability", "Venn diagram", "three-set"],
    "questionText": "A Venn diagram for $50$ students shows three overlapping circles for Maths $M$, Physics $P$ and Chemistry $C$. The regions contain: Maths only $8$, Physics only $6$, Chemistry only $5$, Maths and Physics only $7$, Maths and Chemistry only $4$, Physics and Chemistry only $3$, all three subjects $2$, and none of the three $15$. Find (a) $P(P\\mid C)$, (b) $P(M\\mid P)$, (c) $P(M\\cap P\\cap C\\mid M\\cap P)$, and (d) the probability a student takes exactly one subject.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the region counts add to the total",
          "workingLatex": "8 + 6 + 5 + 7 + 4 + 3 + 2 + 15 = 50",
          "explanation": "Checking every region sums to $50$ confirms the diagram is complete before we use it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total taking Maths",
          "workingLatex": "n(M) = 8 + 7 + 4 + 2 = 21",
          "explanation": "The Maths circle collects its four regions: Maths only, the two Maths overlaps, and the centre.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total taking Physics",
          "workingLatex": "n(P) = 6 + 7 + 3 + 2 = 18",
          "explanation": "The Physics circle collects its four regions in the same way.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the total taking Chemistry",
          "workingLatex": "n(C) = 5 + 4 + 3 + 2 = 14",
          "explanation": "The Chemistry circle gathers Chemistry only, its two overlaps, and the centre.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the Physics-and-Chemistry overlap",
          "workingLatex": "n(P\\cap C) = 3 + 2 = 5",
          "explanation": "Students in both Physics and Chemistry are those in the Physics-Chemistry-only region ($3$) plus the all-three centre ($2$).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute P of Physics given Chemistry",
          "workingLatex": "P(P\\mid C) = \\dfrac{n(P\\cap C)}{n(C)} = \\dfrac{5}{14}",
          "explanation": "Conditioning on Chemistry restricts to its $14$ students, of whom $5$ also take Physics; $\\tfrac{5}{14}$ has no common factor.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the Maths-and-Physics overlap",
          "workingLatex": "n(M\\cap P) = 7 + 2 = 9",
          "explanation": "The Maths-and-Physics students are the $7$ in that pair-only region plus the $2$ in the centre.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute P of Maths given Physics",
          "workingLatex": "P(M\\mid P) = \\dfrac{n(M\\cap P)}{n(P)} = \\dfrac{9}{18} = \\dfrac{1}{2}",
          "explanation": "Restricting to the $18$ Physics students, $9$ also take Maths, giving $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the triple-overlap conditional",
          "workingLatex": "P(M\\cap P\\cap C \\mid M\\cap P) = \\dfrac{n(M\\cap P\\cap C)}{n(M\\cap P)}",
          "explanation": "Given a student already takes both Maths and Physics, we ask how many of those also take Chemistry, that is sit in all three circles.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Count the all-three region",
          "workingLatex": "n(M\\cap P\\cap C) = 2",
          "explanation": "Only the central region belongs to all three subjects, holding $2$ students.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the triple-overlap conditional",
          "workingLatex": "P(M\\cap P\\cap C \\mid M\\cap P) = \\dfrac{2}{9}",
          "explanation": "Two of the nine Maths-and-Physics students also take Chemistry, so the conditional probability is $\\tfrac{2}{9}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the exactly-one-subject regions",
          "workingLatex": "\\text{exactly one} = 8 + 6 + 5 = 19",
          "explanation": "Taking exactly one subject means lying in a single circle with no overlaps: Maths only, Physics only, or Chemistry only.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the probability of exactly one subject",
          "workingLatex": "P(\\text{exactly one}) = \\dfrac{19}{50}",
          "explanation": "There are $19$ single-subject students out of $50$, and $\\tfrac{19}{50}$ cannot be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Collect the four results",
          "workingLatex": "P(P\\mid C)=\\dfrac{5}{14},\\ P(M\\mid P)=\\dfrac{1}{2},\\ P(M\\cap P\\cap C\\mid M\\cap P)=\\dfrac{2}{9},\\ P(\\text{exactly one})=\\dfrac{19}{50}",
          "explanation": "All four required probabilities are now determined from the same completed Venn diagram.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(P\\mid C) = \\dfrac{5}{14}$, $P(M\\mid P) = \\dfrac{1}{2}$, $P(M\\cap P\\cap C\\mid M\\cap P) = \\dfrac{2}{9}$, and $P(\\text{exactly one subject}) = \\dfrac{19}{50}$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["conditional probability", "Venn diagram", "independence"],
    "questionText": "A Venn diagram shows two overlapping circles for events $A$ and $B$, with $P(A)=0.6$, $P(B)=0.5$ and overlap $P(A\\cap B)=0.3$. Verify in three equivalent ways that $A$ and $B$ are independent: (i) using $P(A\\cap B)=P(A)P(B)$, (ii) using $P(A\\mid B)=P(A)$, and (iii) using $P(B\\mid A)=P(B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Record the values from the Venn diagram",
          "workingLatex": "P(A)=0.6,\\quad P(B)=0.5,\\quad P(A\\cap B)=0.3",
          "explanation": "The two full circles and their overlap are all we need for every version of the independence test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State what independence means",
          "workingLatex": "A,\\ B \\text{ independent} \\iff \\text{knowing one leaves the other unchanged}",
          "explanation": "Independence says the occurrence of one event gives no information about the other; this idea can be written in three algebraically equivalent forms.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the first test using the multiplication form",
          "workingLatex": "\\text{Test 1:}\\quad P(A\\cap B) = P(A)\\,P(B)?",
          "explanation": "This is the definition: for independent events the overlap equals the product of the two probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the product of the two probabilities",
          "workingLatex": "P(A)\\,P(B) = 0.6 \\times 0.5 = 0.30",
          "explanation": "Multiplying the whole-circle probabilities gives what the overlap must be if the events are independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the actual overlap",
          "workingLatex": "P(A\\cap B) = 0.30 = P(A)\\,P(B)",
          "explanation": "The real overlap $0.30$ matches the product exactly, so Test 1 is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the second test using the conditional form for A",
          "workingLatex": "\\text{Test 2:}\\quad P(A\\mid B) = P(A)?",
          "explanation": "If $A$ is independent of $B$, then being told $B$ happened should not change the probability of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)} = \\dfrac{0.3}{0.5} = 0.6",
          "explanation": "Dividing the overlap by circle $B$ gives the probability of $A$ within the $B$ world.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the unconditional probability of A",
          "workingLatex": "P(A\\mid B) = 0.6 = P(A)",
          "explanation": "The conditional matches $P(A)=0.6$, so knowing $B$ occurred leaves $A$ unchanged; Test 2 is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the third test using the conditional form for B",
          "workingLatex": "\\text{Test 3:}\\quad P(B\\mid A) = P(B)?",
          "explanation": "Symmetrically, if $B$ is independent of $A$, being told $A$ happened should not change the probability of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute B given A",
          "workingLatex": "P(B\\mid A) = \\dfrac{P(A\\cap B)}{P(A)} = \\dfrac{0.3}{0.6} = 0.5",
          "explanation": "Dividing the overlap by circle $A$ gives the probability of $B$ within the $A$ world.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compare with the unconditional probability of B",
          "workingLatex": "P(B\\mid A) = 0.5 = P(B)",
          "explanation": "The conditional matches $P(B)=0.5$, so knowing $A$ occurred leaves $B$ unchanged; Test 3 is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note why the three tests agree",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=P(A) \\iff P(A\\cap B)=P(A)P(B)",
          "explanation": "Multiplying the conditional formula through by $P(B)$ turns Test 2 into Test 1, and similarly for Test 3, so the three conditions are algebraically the same statement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the overall conclusion",
          "workingLatex": "\\therefore A \\text{ and } B \\text{ are independent}",
          "explanation": "All three equivalent checks pass, so $A$ and $B$ are independent events.",
          "diagram": null
        }
      ],
      "finalAnswer": "All three tests agree: $P(A\\cap B)=0.3=P(A)P(B)$, $P(A\\mid B)=0.6=P(A)$, and $P(B\\mid A)=0.5=P(B)$. Therefore $A$ and $B$ are independent."
    }
  },
{
    "id": "al.y2.stats.conditional-probability.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ are such that $P(A\\cap B)=0.18$ and $P(B)=0.6$. Find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\cap B)=0.18, \\quad P(B)=0.6",
          "explanation": "$P(A\\cap B)$ is the chance that $A$ and $B$ both happen, while $P(B)$ is the chance that $B$ happens on its own. These are exactly the two ingredients the formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the conditional probability formula",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "The bar $\\mid$ means we assume $B$ has already happened, so we shrink our world down to $B$ and ask what fraction of it also lies in $A$. That is why we divide the overlap by $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\mid B)=\\dfrac{0.18}{0.6}",
          "explanation": "We drop in $P(A\\cap B)=0.18$ on the top and $P(B)=0.6$ on the bottom, leaving a single division to carry out.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the division",
          "workingLatex": "\\dfrac{0.18}{0.6}=0.3",
          "explanation": "Dividing $0.18$ by $0.6$ gives $0.3$. It can help to think of it as $\\dfrac{18}{60}$, which cancels to $\\dfrac{3}{10}=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the answer is a sensible probability",
          "workingLatex": "0 \\le 0.3 \\le 1",
          "explanation": "Any probability must sit between $0$ and $1$, and $0.3$ comfortably does, so the result is believable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(A\\mid B)=0.3",
          "explanation": "Restricting to the cases where $B$ occurs, event $A$ happens $30\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B)=0.3$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ satisfy $P(A\\mid B)=0.4$ and $P(B)=0.35$. Find $P(A\\cap B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\mid B)=0.4, \\quad P(B)=0.35",
          "explanation": "We are told the conditional probability of $A$ given $B$ and the probability of $B$; the target is the overlap $P(A\\cap B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the conditional probability formula",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "This is the definition of conditional probability. The overlap we want is hidden inside the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make the intersection the subject",
          "workingLatex": "P(A\\cap B)=P(A\\mid B)\\times P(B)",
          "explanation": "Multiplying both sides by $P(B)$ frees the overlap. This rearranged form is the multiplication rule: the overlap is the fraction of $B$ that is also $A$, scaled by how likely $B$ is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.4\\times 0.35",
          "explanation": "Put $P(A\\mid B)=0.4$ and $P(B)=0.35$ into the multiplication rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out",
          "workingLatex": "0.4\\times 0.35=0.14",
          "explanation": "Multiplying the decimals gives $0.14$; think of it as $4\\times 35=140$ and then place the decimal point.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the overlap is not too large",
          "workingLatex": "P(A\\cap B)=0.14 \\le P(B)=0.35",
          "explanation": "An intersection can never be bigger than either event it sits inside, and $0.14\\le 0.35$, so the answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(A\\cap B)=0.14",
          "explanation": "Both events occur together with probability $0.14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.14$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "For two events $A$ and $B$, $P(A)=0.4$ and $P(B\\mid A)=0.25$. Find $P(A\\cap B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A)=0.4, \\quad P(B\\mid A)=0.25",
          "explanation": "Here the condition is $A$, so we are told how likely $B$ is once $A$ has occurred, together with the plain probability of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the conditional probability formula with A as the condition",
          "workingLatex": "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Because we are conditioning on $A$ this time, the denominator is $P(A)$, not $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make the intersection the subject",
          "workingLatex": "P(A\\cap B)=P(B\\mid A)\\times P(A)",
          "explanation": "Multiplying through by $P(A)$ gives the multiplication rule: first $A$ must happen, then $B$ must follow given $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.25\\times 0.4",
          "explanation": "Insert $P(B\\mid A)=0.25$ and $P(A)=0.4$ into the rearranged formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out",
          "workingLatex": "0.25\\times 0.4=0.1",
          "explanation": "A quarter of $0.4$ is $0.1$, so the two events occur together with probability $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the overlap is not too large",
          "workingLatex": "P(A\\cap B)=0.1 \\le P(A)=0.4",
          "explanation": "The overlap sits inside $A$, so it must not exceed $P(A)=0.4$; $0.1$ passes this check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "P(A\\cap B)=0.1",
          "explanation": "The probability that $A$ and $B$ both happen is $0.1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.1$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["conditional probability", "definition"],
    "questionText": "Two events $A$ and $B$ are such that $P(A\\cap B)=0.2$ and $P(A)=0.5$. Find $P(B\\mid A)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\cap B)=0.2, \\quad P(A)=0.5",
          "explanation": "We know the overlap of the two events and the probability of $A$; we want the chance of $B$ once $A$ is known to have happened.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the conditional probability formula with A as the condition",
          "workingLatex": "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Conditioning on $A$ means we restrict to outcomes where $A$ occurs and measure how much of that is also $B$, so we divide the overlap by $P(A)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(B\\mid A)=\\dfrac{0.2}{0.5}",
          "explanation": "Place the overlap $0.2$ on top and the condition $P(A)=0.5$ on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the division",
          "workingLatex": "\\dfrac{0.2}{0.5}=0.4",
          "explanation": "Dividing $0.2$ by $0.5$ is the same as $\\dfrac{2}{5}=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check the answer is a sensible probability",
          "workingLatex": "0 \\le 0.4 \\le 1",
          "explanation": "The result lies between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(B\\mid A)=0.4",
          "explanation": "Given that $A$ has happened, event $B$ occurs $40\\%$ of the time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B\\mid A)=0.4$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ satisfy $P(A)=0.4$, $P(B\\mid A)=0.25$ and $P(B)=0.5$. (a) Find $P(A\\cap B)$. (b) Hence find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A)=0.4,\\quad P(B\\mid A)=0.25,\\quad P(B)=0.5",
          "explanation": "There are three facts here. Part (a) will need the first two, and part (b) will bring in $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a choose the multiplication rule conditioned on A",
          "workingLatex": "P(A\\cap B)=P(B\\mid A)\\times P(A)",
          "explanation": "We know $P(B\\mid A)$ and $P(A)$, so the version of the multiplication rule that pairs those two quantities is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.25\\times 0.4",
          "explanation": "Insert the two numbers we have for this part.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out to finish part a",
          "workingLatex": "P(A\\cap B)=0.1",
          "explanation": "A quarter of $0.4$ is $0.1$, so both events occur together with probability $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "For part b write the conditional formula for A given B",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Now we condition the other way round, on $B$, so the denominator switches to $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Reuse the intersection found in part a",
          "workingLatex": "P(A\\cap B)=0.1",
          "explanation": "The overlap is a fixed number for these events, so the same $0.1$ feeds straight into part (b).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\mid B)=\\dfrac{0.1}{0.5}",
          "explanation": "Divide the overlap by the probability of the new condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Work out the division",
          "workingLatex": "P(A\\mid B)=0.2",
          "explanation": "Dividing $0.1$ by $0.5$ gives $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the two conditional probabilities",
          "workingLatex": "P(B\\mid A)=0.25 \\ne P(A\\mid B)=0.2",
          "explanation": "The two conditionals are different because they answer different questions and divide by different denominators; conditioning is not symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.1,\\quad P(A\\mid B)=0.2",
          "explanation": "Both required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.1$ and $P(A\\mid B)=0.2$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ are such that $P(A\\mid B)=0.7$, $P(B)=0.4$ and $P(A)=0.5$. (a) Find $P(A\\cap B)$. (b) Hence find $P(B\\mid A)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\mid B)=0.7,\\quad P(B)=0.4,\\quad P(A)=0.5",
          "explanation": "Part (a) uses the first two facts to build the overlap; part (b) then uses $P(A)$ to flip the condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a rearrange the conditional formula for the intersection",
          "workingLatex": "P(A\\cap B)=P(A\\mid B)\\times P(B)",
          "explanation": "Since $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$, multiplying by $P(B)$ isolates the overlap we want.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.7\\times 0.4",
          "explanation": "Drop in $P(A\\mid B)=0.7$ and $P(B)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out to finish part a",
          "workingLatex": "P(A\\cap B)=0.28",
          "explanation": "The product of the two decimals is $0.28$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "For part b write the conditional formula for B given A",
          "workingLatex": "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "We now condition on $A$, so the same overlap is divided by $P(A)$ instead of $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "P(B\\mid A)=\\dfrac{0.28}{0.5}",
          "explanation": "Use the overlap $0.28$ from part (a) and the condition $P(A)=0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the division",
          "workingLatex": "P(B\\mid A)=0.56",
          "explanation": "Dividing $0.28$ by $0.5$ doubles it, giving $0.56$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer is a sensible probability",
          "workingLatex": "0 \\le 0.56 \\le 1",
          "explanation": "The value lies between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note the two conditionals differ",
          "workingLatex": "P(A\\mid B)=0.7 \\ne P(B\\mid A)=0.56",
          "explanation": "The direction of conditioning matters: dividing by the smaller $P(A)$ rather than $P(B)$ changes the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.28,\\quad P(B\\mid A)=0.56",
          "explanation": "Both parts are now complete.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.28$ and $P(B\\mid A)=0.56$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "addition rule"],
    "questionText": "For two events $A$ and $B$, $P(A)=0.6$, $P(B)=0.5$ and $P(A\\cup B)=0.8$. (a) Find $P(A\\cap B)$. (b) Hence find $P(A\\mid B)$ and $P(B\\mid A)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A)=0.6,\\quad P(B)=0.5,\\quad P(A\\cup B)=0.8",
          "explanation": "We are handed the two single probabilities and the probability of the union, which is enough to unlock the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the addition rule",
          "workingLatex": "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
          "explanation": "Adding $P(A)$ and $P(B)$ counts the overlap twice, so we subtract $P(A\\cap B)$ once to correct for the double count.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make the intersection the subject",
          "workingLatex": "P(A\\cap B)=P(A)+P(B)-P(A\\cup B)",
          "explanation": "Solving for the overlap turns the addition rule around, so the union we know now sits on the right.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.6+0.5-0.8",
          "explanation": "Insert the three given probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute to finish part a",
          "workingLatex": "P(A\\cap B)=0.3",
          "explanation": "$0.6+0.5=1.1$, and $1.1-0.8=0.3$, so the overlap is $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "For part b write the conditional formula for A given B",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Conditioning on $B$ means dividing the overlap by $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and divide",
          "workingLatex": "P(A\\mid B)=\\dfrac{0.3}{0.5}=0.6",
          "explanation": "Dividing $0.3$ by $0.5$ gives $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the conditional formula for B given A",
          "workingLatex": "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "For the reverse conditional we divide the same overlap by $P(A)$ instead.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and divide",
          "workingLatex": "P(B\\mid A)=\\dfrac{0.3}{0.6}=0.5",
          "explanation": "Dividing $0.3$ by $0.6$ gives $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.3,\\quad P(A\\mid B)=0.6,\\quad P(B\\mid A)=0.5",
          "explanation": "All three required probabilities have now been found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.3$, $P(A\\mid B)=0.6$ and $P(B\\mid A)=0.5$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ satisfy $P(A)=0.3$, $P(B\\mid A)=0.6$ and $P(B)=0.4$. (a) Find $P(A\\cap B)$. (b) Hence find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A)=0.3,\\quad P(B\\mid A)=0.6,\\quad P(B)=0.4",
          "explanation": "The first two facts build the overlap in part (a); $P(B)$ is held back for part (b).",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a choose the multiplication rule conditioned on A",
          "workingLatex": "P(A\\cap B)=P(B\\mid A)\\times P(A)",
          "explanation": "We know $P(B\\mid A)$ and $P(A)$, so this pairing of the multiplication rule uses exactly the numbers available.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.6\\times 0.3",
          "explanation": "Insert $P(B\\mid A)=0.6$ and $P(A)=0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out to finish part a",
          "workingLatex": "P(A\\cap B)=0.18",
          "explanation": "The product of the decimals is $0.18$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "For part b write the conditional formula for A given B",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Now the condition is $B$, so we divide the overlap by $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Bring in the intersection and the probability of B",
          "workingLatex": "P(A\\cap B)=0.18,\\quad P(B)=0.4",
          "explanation": "We reuse the overlap from part (a) and the given $P(B)$ ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\mid B)=\\dfrac{0.18}{0.4}",
          "explanation": "Place the overlap on top and the new condition on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Work out the division",
          "workingLatex": "P(A\\mid B)=0.45",
          "explanation": "Dividing $0.18$ by $0.4$ gives $0.45$; as a check, $0.45\\times 0.4=0.18$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compare the two conditional probabilities",
          "workingLatex": "P(B\\mid A)=0.6 \\ne P(A\\mid B)=0.45",
          "explanation": "The two conditionals differ because they divide the same overlap by different denominators.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.18,\\quad P(A\\mid B)=0.45",
          "explanation": "Both required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.18$ and $P(A\\mid B)=0.45$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "law of total probability"],
    "questionText": "Events $A$ and $B$ are such that $P(A)=0.6$, $P(B\\mid A)=0.5$ and $P(B\\mid A')=0.25$. (a) Use the law of total probability to find $P(B)$. (b) Hence find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the given information and find the complement of A",
          "workingLatex": "P(A)=0.6 \\Rightarrow P(A')=1-0.6=0.4",
          "explanation": "Since $A$ and $A'$ together cover every outcome, their probabilities add to $1$, giving $P(A')=0.4$. We need this for the second branch.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the law of total probability for B",
          "workingLatex": "P(B)=P(B\\mid A)\\,P(A)+P(B\\mid A')\\,P(A')",
          "explanation": "Event $B$ can arrive by one of two mutually exclusive routes: with $A$ or without $A$. We weight each conditional chance by how likely that route is, then add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(B)=0.5\\times 0.6+0.25\\times 0.4",
          "explanation": "Put the conditional probabilities and their branch weights into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each product",
          "workingLatex": "P(B)=0.3+0.1",
          "explanation": "The $A$ route contributes $0.3$ and the $A'$ route contributes $0.1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the two contributions to finish part a",
          "workingLatex": "P(B)=0.4",
          "explanation": "Summing the two exclusive routes gives the overall probability of $B$ as $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "For part b find the probability of A and B together",
          "workingLatex": "P(A\\cap B)=P(B\\mid A)\\,P(A)=0.5\\times 0.6=0.3",
          "explanation": "This is the $A$ route we already computed; it is exactly the overlap of $A$ and $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the conditional formula for A given B",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Now that $B$ is our condition, we compare the overlap against the whole of $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\mid B)=\\dfrac{0.3}{0.4}",
          "explanation": "Use the overlap $0.3$ and the total $P(B)=0.4$ from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Work out the division",
          "workingLatex": "P(A\\mid B)=0.75",
          "explanation": "Dividing $0.3$ by $0.4$ gives $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the answer is a sensible probability",
          "workingLatex": "0 \\le 0.75 \\le 1",
          "explanation": "The value lies between $0$ and $1$, so it is a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answers",
          "workingLatex": "P(B)=0.4,\\quad P(A\\mid B)=0.75",
          "explanation": "Both required probabilities have now been found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B)=0.4$ and $P(A\\mid B)=0.75$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule"],
    "questionText": "Two events $A$ and $B$ are such that $P(A\\mid B)=0.5$, $P(B)=0.6$ and $P(A)=0.4$. (a) Find $P(A\\cap B)$. (b) Find $P(B\\mid A)$ and state whether $P(A\\mid B)=P(B\\mid A)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\mid B)=0.5,\\quad P(B)=0.6,\\quad P(A)=0.4",
          "explanation": "Part (a) uses the first two to build the overlap; part (b) brings in $P(A)$ to reverse the condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a use the multiplication rule",
          "workingLatex": "P(A\\cap B)=P(A\\mid B)\\times P(B)",
          "explanation": "Rearranging the conditional formula gives the overlap as the conditional probability times the probability of the condition.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.5\\times 0.6",
          "explanation": "Insert $P(A\\mid B)=0.5$ and $P(B)=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out to finish part a",
          "workingLatex": "P(A\\cap B)=0.3",
          "explanation": "Half of $0.6$ is $0.3$, so the overlap is $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "For part b write the conditional formula for B given A",
          "workingLatex": "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Switching the condition to $A$ means dividing the same overlap by $P(A)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the known values",
          "workingLatex": "P(B\\mid A)=\\dfrac{0.3}{0.4}",
          "explanation": "Use the overlap $0.3$ from part (a) and the condition $P(A)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Work out the division",
          "workingLatex": "P(B\\mid A)=0.75",
          "explanation": "Dividing $0.3$ by $0.4$ gives $0.75$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the two conditional probabilities",
          "workingLatex": "P(A\\mid B)=0.5,\\quad P(B\\mid A)=0.75",
          "explanation": "Place the two results side by side to compare them directly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion about the two conditionals",
          "workingLatex": "0.5 \\ne 0.75 \\Rightarrow P(A\\mid B)\\ne P(B\\mid A)",
          "explanation": "In general the two are not equal, because they divide the shared overlap by different denominators. Only when $P(A)=P(B)$ would they match.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.3,\\quad P(B\\mid A)=0.75",
          "explanation": "Both required probabilities are found, and the conditionals are shown to differ.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.3$ and $P(B\\mid A)=0.75$; since $0.5\\ne 0.75$, $P(A\\mid B)\\ne P(B\\mid A)$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "law of total probability", "Bayes"],
    "questionText": "A factory has two machines. Machine $A$ produces $60\\%$ of the items, of which $5\\%$ are faulty. Machine $B$ produces the remaining $40\\%$ of the items, of which $8\\%$ are faulty. An item is chosen at random and $F$ denotes the event that it is faulty. (a) Find $P(F)$. (b) Given the item is faulty, find $P(A\\mid F)$ and $P(B\\mid F)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the events and list the given probabilities",
          "workingLatex": "P(A)=0.6,\\ P(B)=0.4,\\ P(F\\mid A)=0.05,\\ P(F\\mid B)=0.08",
          "explanation": "Let $A$ and $B$ be the machine that made the item and $F$ the event that it is faulty. The percentages translate directly into these probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the two machines cover every item",
          "workingLatex": "P(A)+P(B)=0.6+0.4=1",
          "explanation": "Every item comes from exactly one machine, so $A$ and $B$ split the whole sample space. This is what lets us use the law of total probability.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the chance an item is from A and faulty",
          "workingLatex": "P(A\\cap F)=P(F\\mid A)\\times P(A)=0.05\\times 0.6",
          "explanation": "First the item must come from machine $A$, then it must be faulty given that; multiplying the two chances follows the branch of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate that product",
          "workingLatex": "P(A\\cap F)=0.03",
          "explanation": "$5\\%$ of $60\\%$ is $3\\%$, so $0.03$ of all items are faulty items from machine $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the chance an item is from B and faulty",
          "workingLatex": "P(B\\cap F)=P(F\\mid B)\\times P(B)=0.08\\times 0.4",
          "explanation": "The same reasoning follows the machine $B$ branch of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate that product",
          "workingLatex": "P(B\\cap F)=0.032",
          "explanation": "$8\\%$ of $40\\%$ is $3.2\\%$, so $0.032$ of all items are faulty items from machine $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine the two routes using total probability",
          "workingLatex": "P(F)=P(A\\cap F)+P(B\\cap F)",
          "explanation": "A faulty item is either from $A$ or from $B$, and these are mutually exclusive and exhaustive, so we add the two faulty-item probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add to finish part a",
          "workingLatex": "P(F)=0.03+0.032=0.062",
          "explanation": "Overall, $6.2\\%$ of the factory's items are faulty.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "For part b write the conditional formula for A given faulty",
          "workingLatex": "P(A\\mid F)=\\dfrac{P(A\\cap F)}{P(F)}",
          "explanation": "Now we know the item is faulty, so we restrict attention to faulty items and ask what fraction of them came from machine $A$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\mid F)=\\dfrac{0.03}{0.062}",
          "explanation": "The numerator is the faulty-from-$A$ probability and the denominator is the total faulty probability.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{0.03}{0.062}=\\dfrac{30}{62}=\\dfrac{15}{31}",
          "explanation": "Multiplying top and bottom by $1000$ clears the decimals to $\\dfrac{30}{62}$, which cancels by $2$ to $\\dfrac{15}{31}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Write the conditional formula for B given faulty",
          "workingLatex": "P(B\\mid F)=\\dfrac{P(B\\cap F)}{P(F)}",
          "explanation": "The same idea applied to machine $B$: the fraction of faulty items that came from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute and simplify",
          "workingLatex": "P(B\\mid F)=\\dfrac{0.032}{0.062}=\\dfrac{32}{62}=\\dfrac{16}{31}",
          "explanation": "Clearing decimals gives $\\dfrac{32}{62}$, which cancels to $\\dfrac{16}{31}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check the two conditional probabilities are consistent",
          "workingLatex": "\\dfrac{15}{31}+\\dfrac{16}{31}=\\dfrac{31}{31}=1",
          "explanation": "A faulty item must have come from either $A$ or $B$, so these two conditionals should add to $1$; they do, confirming the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the final answers",
          "workingLatex": "P(F)=0.062,\\ P(A\\mid F)=\\dfrac{15}{31},\\ P(B\\mid F)=\\dfrac{16}{31}",
          "explanation": "All three required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F)=0.062$, $P(A\\mid F)=\\dfrac{15}{31}$ and $P(B\\mid F)=\\dfrac{16}{31}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["conditional probability", "independence"],
    "questionText": "Two events $A$ and $B$ are such that $P(A)=0.5$, $P(A\\cap B)=0.2$ and $P(A\\mid B)=0.5$. (a) Find $P(B)$. (b) Determine whether $A$ and $B$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A)=0.5,\\quad P(A\\cap B)=0.2,\\quad P(A\\mid B)=0.5",
          "explanation": "We know a single probability, the overlap and one conditional probability. Part (a) uses the conditional relation to recover $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a write the conditional probability formula",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "This links the three quantities in part (a), with the unknown $P(B)$ hidden in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make P of B the subject",
          "workingLatex": "P(B)=\\dfrac{P(A\\cap B)}{P(A\\mid B)}",
          "explanation": "Multiplying both sides by $P(B)$ and then dividing by $P(A\\mid B)$ isolates the unknown probability.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "P(B)=\\dfrac{0.2}{0.5}",
          "explanation": "Insert the overlap $0.2$ and the conditional probability $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute to finish part a",
          "workingLatex": "P(B)=0.4",
          "explanation": "Dividing $0.2$ by $0.5$ gives $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the value of the probability is valid",
          "workingLatex": "0 \\le P(B)=0.4 \\le 1",
          "explanation": "A probability must lie between $0$ and $1$, and $0.4$ does, so this value is safe to carry into the independence test.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the test for independence",
          "workingLatex": "A,\\,B \\text{ independent} \\iff P(A\\cap B)=P(A)\\times P(B)",
          "explanation": "Two events are independent when the chance of both is simply the product of the separate chances; knowing one gives no information about the other.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Work out the product of the separate probabilities",
          "workingLatex": "P(A)\\times P(B)=0.5\\times 0.4",
          "explanation": "Multiply the two individual probabilities to see what the overlap would be if the events were independent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the product",
          "workingLatex": "P(A)\\times P(B)=0.2",
          "explanation": "The product comes out as $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the product with the actual overlap",
          "workingLatex": "P(A)\\times P(B)=0.2=P(A\\cap B)",
          "explanation": "The predicted overlap matches the real overlap exactly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Draw the conclusion about independence",
          "workingLatex": "\\Rightarrow A \\text{ and } B \\text{ are independent}",
          "explanation": "Because the multiplication condition holds, the two events are independent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm with the conditional probability check",
          "workingLatex": "P(A\\mid B)=0.5=P(A)",
          "explanation": "Independence can also be spotted from $P(A\\mid B)=P(A)$: conditioning on $B$ leaves the chance of $A$ unchanged, which is the same story from a different angle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers",
          "workingLatex": "P(B)=0.4;\\quad A \\text{ and } B \\text{ independent}",
          "explanation": "We have found $P(B)$ and shown the two events are independent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B)=0.4$; since $P(A)\\times P(B)=0.2=P(A\\cap B)$, events $A$ and $B$ are independent."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "multiplication rule", "addition rule"],
    "questionText": "Two events $A$ and $B$ are such that $P(A\\mid B)=0.6$, $P(B\\mid A)=0.3$ and $P(A)=0.4$. (a) Find $P(A\\cap B)$. (b) Find $P(B)$. (c) Find $P(A\\cup B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the probabilities given in the question",
          "workingLatex": "P(A\\mid B)=0.6,\\quad P(B\\mid A)=0.3,\\quad P(A)=0.4",
          "explanation": "We have both conditional probabilities and one single probability, which is enough to unlock the overlap, then $P(B)$, then the union.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "For part a decide which multiplication rule to use",
          "workingLatex": "P(A\\cap B)=P(B\\mid A)\\times P(A)",
          "explanation": "We know $P(B\\mid A)$ and $P(A)$, so this pairing uses only quantities we already have, whereas the other form would need the unknown $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cap B)=0.3\\times 0.4",
          "explanation": "Insert $P(B\\mid A)=0.3$ and $P(A)=0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply out to finish part a",
          "workingLatex": "P(A\\cap B)=0.12",
          "explanation": "The product of the decimals is $0.12$, the probability that both events occur.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "For part b use the other conditional probability",
          "workingLatex": "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "This relation contains the unknown $P(B)$ in its denominator, so we can rearrange it now that the overlap is known.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange to make P of B the subject",
          "workingLatex": "P(B)=\\dfrac{P(A\\cap B)}{P(A\\mid B)}",
          "explanation": "Dividing the overlap by the conditional probability isolates $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the known values",
          "workingLatex": "P(B)=\\dfrac{0.12}{0.6}",
          "explanation": "Use the overlap $0.12$ from part (a) and $P(A\\mid B)=0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute to finish part b",
          "workingLatex": "P(B)=0.2",
          "explanation": "Dividing $0.12$ by $0.6$ gives $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "For part c write down the addition rule",
          "workingLatex": "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
          "explanation": "The union adds the two single probabilities and subtracts the overlap once so it is not double counted.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the known values",
          "workingLatex": "P(A\\cup B)=0.4+0.2-0.12",
          "explanation": "Insert $P(A)=0.4$, the $P(B)=0.2$ from part (b) and the overlap $0.12$ from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute to finish part c",
          "workingLatex": "P(A\\cup B)=0.48",
          "explanation": "$0.4+0.2=0.6$, and $0.6-0.12=0.48$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the union is a sensible probability",
          "workingLatex": "0 \\le 0.48 \\le 1",
          "explanation": "The union lies between $0$ and $1$ and is at least as big as either event, so the answer is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the final answers",
          "workingLatex": "P(A\\cap B)=0.12,\\ P(B)=0.2,\\ P(A\\cup B)=0.48",
          "explanation": "All three required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B)=0.12$, $P(B)=0.2$ and $P(A\\cup B)=0.48$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["conditional probability", "law of total probability", "Bayes"],
    "questionText": "$70\\%$ of commuters take the train, denoted $T$. Of those who take the train, $40\\%$ buy a coffee, denoted $K$. Of the $30\\%$ who do not take the train, $20\\%$ buy a coffee. A commuter is chosen at random. (a) Find $P(K)$. (b) Given the commuter buys a coffee, find $P(T\\mid K)$ and $P(T'\\mid K)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the events and list the given probabilities",
          "workingLatex": "P(T)=0.7,\\ P(T')=0.3,\\ P(K\\mid T)=0.4,\\ P(K\\mid T')=0.2",
          "explanation": "Let $T$ be taking the train and $K$ be buying a coffee. Since $30\\%$ do not take the train, $P(T')=0.3$. The percentages give the conditional coffee probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the chance of train and coffee together",
          "workingLatex": "P(T\\cap K)=P(K\\mid T)\\times P(T)=0.4\\times 0.7",
          "explanation": "Following the train branch, first the commuter takes the train, then buys a coffee given that; multiply the two chances.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate that product",
          "workingLatex": "P(T\\cap K)=0.28",
          "explanation": "$40\\%$ of $70\\%$ is $28\\%$, so $0.28$ of commuters both take the train and buy a coffee.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the chance of no train but coffee",
          "workingLatex": "P(T'\\cap K)=P(K\\mid T')\\times P(T')=0.2\\times 0.3",
          "explanation": "The same idea along the no-train branch: not taking the train, then buying a coffee given that.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate that product",
          "workingLatex": "P(T'\\cap K)=0.06",
          "explanation": "$20\\%$ of $30\\%$ is $6\\%$, so $0.06$ of commuters buy a coffee without taking the train.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the two routes using total probability",
          "workingLatex": "P(K)=P(T\\cap K)+P(T'\\cap K)",
          "explanation": "A coffee-buyer either took the train or did not, and these two cases are mutually exclusive and exhaustive, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add to finish part a",
          "workingLatex": "P(K)=0.28+0.06=0.34",
          "explanation": "Overall, $34\\%$ of commuters buy a coffee.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "For part b write the conditional formula for train given coffee",
          "workingLatex": "P(T\\mid K)=\\dfrac{P(T\\cap K)}{P(K)}",
          "explanation": "Now we know the commuter bought a coffee, so we restrict to coffee-buyers and ask what fraction of them took the train.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the known values",
          "workingLatex": "P(T\\mid K)=\\dfrac{0.28}{0.34}",
          "explanation": "The numerator is the train-and-coffee probability; the denominator is the total coffee probability.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{0.28}{0.34}=\\dfrac{28}{34}=\\dfrac{14}{17}",
          "explanation": "Multiplying top and bottom by $100$ clears the decimals to $\\dfrac{28}{34}$, which cancels by $2$ to $\\dfrac{14}{17}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the conditional formula for no train given coffee",
          "workingLatex": "P(T'\\mid K)=\\dfrac{P(T'\\cap K)}{P(K)}",
          "explanation": "The complementary question: of the coffee-buyers, what fraction did not take the train.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute and simplify",
          "workingLatex": "P(T'\\mid K)=\\dfrac{0.06}{0.34}=\\dfrac{6}{34}=\\dfrac{3}{17}",
          "explanation": "Clearing decimals gives $\\dfrac{6}{34}$, which cancels to $\\dfrac{3}{17}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the two conditional probabilities are consistent",
          "workingLatex": "\\dfrac{14}{17}+\\dfrac{3}{17}=\\dfrac{17}{17}=1",
          "explanation": "A coffee-buyer either took the train or did not, so these two conditionals must add to $1$; they do, confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the final answers",
          "workingLatex": "P(K)=0.34,\\ P(T\\mid K)=\\dfrac{14}{17},\\ P(T'\\mid K)=\\dfrac{3}{17}",
          "explanation": "All three required probabilities are now found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(K)=0.34$, $P(T\\mid K)=\\dfrac{14}{17}$ and $P(T'\\mid K)=\\dfrac{3}{17}$"
    }
  },
{
    "id": "al.y2.stats.conditional-probability.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "independent events"],
    "questionText": "A spinner lands on a winning section with probability $0.3$ on any single spin, and the spins are independent. A probability tree is drawn for two spins: each spin branches into 'win' $W$ with probability $0.3$ and 'lose' $L$ with probability $0.7$. Find $P(WW)$, the probability of winning on both spins.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two outcomes of a single spin",
          "workingLatex": "P(W) = 0.3, \\quad P(L) = 1 - 0.3 = 0.7",
          "explanation": "Every spin has only two outcomes, win or lose. Since $P(W) = 0.3$ is given, the losing branch must carry the remaining probability, $P(L) = 1 - 0.3 = 0.7$, because the two branches from any point on a tree add up to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note that the two spins are independent",
          "workingLatex": "P(W \\text{ on spin } 2 \\mid W \\text{ on spin } 1) = P(W) = 0.3",
          "explanation": "The spinner has no memory, so the result of the first spin does not change the second. This means the branch probabilities on the second set of branches are exactly the same as on the first, $0.3$ and $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the four complete paths through the tree",
          "workingLatex": "WW, \\; WL, \\; LW, \\; LL",
          "explanation": "Following one branch on each spin gives four possible journeys through the tree. We want the single path where both spins are wins, the $WW$ path along the top of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pick out the winning path",
          "workingLatex": "\\text{Path } W \\rightarrow W",
          "explanation": "Winning both times means taking the top branch $W$ on spin one and then the top branch $W$ on spin two, so we only need the probabilities on those two branches.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the probabilities along the path",
          "workingLatex": "P(WW) = P(W) \\times P(W) = 0.3 \\times 0.3",
          "explanation": "To find the chance of completing a whole route on a tree we multiply the branch probabilities we pass through, because the events happen one after another and are independent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Work out the product",
          "workingLatex": "P(WW) = 0.09",
          "explanation": "Multiplying $0.3 \\times 0.3$ gives $0.09$, a small probability, which fits our expectation that winning twice in a row is quite unlikely.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is reasonable",
          "workingLatex": "0.09 + 0.21 + 0.21 + 0.49 = 1",
          "explanation": "The four paths $WW, WL, LW, LL$ have probabilities $0.09, 0.21, 0.21, 0.49$ which add to $1$. Since the four ends of the tree cover every possibility, this total confirms our path calculation is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(WW) = 0.09$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "complement"],
    "questionText": "A spinner lands on a winning section with probability $0.3$ on any single spin, and the spins are independent. A probability tree is drawn for two spins, each branching into 'win' $W$ ($0.3$) and 'lose' $L$ ($0.7$). Find the probability of winning at least once in the two spins.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the branch probabilities",
          "workingLatex": "P(W) = 0.3, \\quad P(L) = 0.7",
          "explanation": "Each spin wins with probability $0.3$, so it loses with probability $1 - 0.3 = 0.7$. These same two numbers label both sets of branches because the spins are independent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite 'at least one win' using its opposite",
          "workingLatex": "P(\\text{at least one } W) = 1 - P(\\text{no wins})",
          "explanation": "'At least one win' covers three of the four paths, but its opposite, 'no wins at all', is a single path. It is far quicker to find that one path and subtract from $1$ than to add three separate paths.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the no-wins path on the tree",
          "workingLatex": "\\text{No wins} = LL",
          "explanation": "Not winning at all means losing on spin one and losing on spin two, which is the bottom path $L \\rightarrow L$ of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply along the no-wins path",
          "workingLatex": "P(LL) = 0.7 \\times 0.7",
          "explanation": "We multiply the two losing branch probabilities together, since the spins are independent and we need both losses to happen on this route.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the no-wins probability",
          "workingLatex": "P(LL) = 0.49",
          "explanation": "$0.7 \\times 0.7 = 0.49$, so just under half the time we lose both spins.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract from one to get at least one win",
          "workingLatex": "P(\\text{at least one } W) = 1 - 0.49 = 0.51",
          "explanation": "Taking the no-wins probability away from $1$ leaves the probability of everything else, which is exactly the event of winning at least once.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "P(\\text{at least one } W) = 0.51",
          "explanation": "So there is a $0.51$ chance of at least one win, slightly better than an even chance, which matches our intuition that two goes give a fair opportunity to win once.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one win}) = 0.51$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters, so $8$ in total. Two counters are drawn one after the other without replacement. A probability tree is drawn where the first draw branches into red $R$ and blue $B$, and each of these branches again for the second draw. Find $P(RR)$, the probability that both counters are red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the starting contents of the bag",
          "workingLatex": "5 \\text{ red}, \\; 3 \\text{ blue}, \\; 8 \\text{ total}",
          "explanation": "Before any draw the bag holds $8$ counters, $5$ of which are red. This gives us the probabilities for the first set of branches.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of red on the first draw",
          "workingLatex": "P(R_1) = \\dfrac{5}{8}",
          "explanation": "On the first draw all $8$ counters are available and $5$ are red, so the top branch of the tree carries probability $\\dfrac{5}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Update the bag after a red is removed",
          "workingLatex": "4 \\text{ red}, \\; 3 \\text{ blue}, \\; 7 \\text{ total}",
          "explanation": "Because we do not replace the first counter, taking a red one leaves only $4$ red out of $7$ remaining. The second-draw branches must use these smaller numbers.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the probability of red on the second draw",
          "workingLatex": "P(R_2 \\mid R_1) = \\dfrac{4}{7}",
          "explanation": "Given a red was taken first, $4$ of the $7$ counters left are red, so the second-stage red branch has probability $\\dfrac{4}{7}$. This is a conditional probability because it depends on the first outcome.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply along the red-red path",
          "workingLatex": "P(RR) = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56}",
          "explanation": "Following the top path of the tree, we multiply the two branch probabilities. Multiplying matches the multiplication rule $P(R_1 \\cap R_2) = P(R_1)\\,P(R_2 \\mid R_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "P(RR) = \\dfrac{20}{56} = \\dfrac{5}{14}",
          "explanation": "Dividing top and bottom by $4$ reduces $\\dfrac{20}{56}$ to $\\dfrac{5}{14}$, the simplest form of the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(RR) = \\dfrac{5}{14}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Two counters are drawn without replacement, and a probability tree is drawn for the two draws. Find $P(BB)$, the probability that both counters are blue.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the contents of the bag",
          "workingLatex": "5 \\text{ red}, \\; 3 \\text{ blue}, \\; 8 \\text{ total}",
          "explanation": "There are $8$ counters at the start, $3$ of them blue, which sets the probabilities for the first branch of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of blue on the first draw",
          "workingLatex": "P(B_1) = \\dfrac{3}{8}",
          "explanation": "With all $8$ counters present and $3$ blue, the first-draw blue branch has probability $\\dfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Update the bag after a blue is removed",
          "workingLatex": "5 \\text{ red}, \\; 2 \\text{ blue}, \\; 7 \\text{ total}",
          "explanation": "Since there is no replacement, drawing a blue leaves only $2$ blue among the $7$ counters that remain. The second-draw branches use these updated counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the probability of blue on the second draw",
          "workingLatex": "P(B_2 \\mid B_1) = \\dfrac{2}{7}",
          "explanation": "Given the first counter was blue, $2$ of the $7$ remaining are blue, so the second-stage blue branch carries probability $\\dfrac{2}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply along the blue-blue path",
          "workingLatex": "P(BB) = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}",
          "explanation": "We multiply the two branch probabilities along the bottom path of the tree, using the multiplication rule for a sequence of draws.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "P(BB) = \\dfrac{6}{56} = \\dfrac{3}{28}",
          "explanation": "Dividing numerator and denominator by $2$ gives the reduced answer $\\dfrac{3}{28}$, a small probability because there are only a few blue counters.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(BB) = \\dfrac{3}{28}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Two counters are drawn without replacement, and a probability tree is drawn for the two draws. Find the probability that both counters are the same colour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret same colour as two separate paths",
          "workingLatex": "P(\\text{same}) = P(RR) + P(BB)",
          "explanation": "Both counters matching happens in exactly two ways on the tree: both red or both blue. These paths cannot both occur, so we add their probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First-draw probabilities",
          "workingLatex": "P(R_1) = \\dfrac{5}{8}, \\quad P(B_1) = \\dfrac{3}{8}",
          "explanation": "At the start there are $8$ counters, $5$ red and $3$ blue, giving the first set of branch probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second-draw probability after a red",
          "workingLatex": "P(R_2 \\mid R_1) = \\dfrac{4}{7}",
          "explanation": "Removing a red without replacement leaves $4$ red out of $7$, so the red-then-red continuation has probability $\\dfrac{4}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the red-red path",
          "workingLatex": "P(RR) = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14}",
          "explanation": "Multiplying the two red branch probabilities gives the chance of drawing red twice, which simplifies to $\\dfrac{5}{14}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second-draw probability after a blue",
          "workingLatex": "P(B_2 \\mid B_1) = \\dfrac{2}{7}",
          "explanation": "Removing a blue leaves $2$ blue out of $7$, so the blue-then-blue continuation has probability $\\dfrac{2}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the blue-blue path",
          "workingLatex": "P(BB) = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56} = \\dfrac{3}{28}",
          "explanation": "Multiplying the two blue branch probabilities gives the chance of drawing blue twice, which simplifies to $\\dfrac{3}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Put both fractions over a common denominator",
          "workingLatex": "\\dfrac{5}{14} = \\dfrac{10}{28}, \\quad \\dfrac{3}{28} = \\dfrac{3}{28}",
          "explanation": "To add the two path probabilities we need the same denominator. Since $28$ is a multiple of $14$, we rewrite $\\dfrac{5}{14}$ as $\\dfrac{10}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two same-colour paths",
          "workingLatex": "P(\\text{same}) = \\dfrac{10}{28} + \\dfrac{3}{28} = \\dfrac{13}{28}",
          "explanation": "Adding the numerators over the shared denominator combines the two ways of matching into one probability, $\\dfrac{13}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "P(\\text{same colour}) = \\dfrac{13}{28}",
          "explanation": "So a little under half the time the two counters share a colour, which is reasonable given the mix of $5$ red and $3$ blue.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{same colour}) = \\dfrac{13}{28}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Two counters are drawn without replacement. Using a probability tree for the two draws, find the probability of drawing exactly one red counter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret exactly one red as two paths",
          "workingLatex": "P(\\text{exactly one } R) = P(RB) + P(BR)",
          "explanation": "Getting exactly one red means red then blue, or blue then red. These are two distinct paths through the tree, and since they cannot both happen we will add them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First-draw probabilities",
          "workingLatex": "P(R_1) = \\dfrac{5}{8}, \\quad P(B_1) = \\dfrac{3}{8}",
          "explanation": "At the start $5$ of $8$ counters are red and $3$ are blue, giving the first branch probabilities of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second-draw probability for red then blue",
          "workingLatex": "P(B_2 \\mid R_1) = \\dfrac{3}{7}",
          "explanation": "If the first counter is red, the bag still holds all $3$ blue among $7$ remaining, so drawing blue next has probability $\\dfrac{3}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the red-then-blue path",
          "workingLatex": "P(RB) = \\dfrac{5}{8} \\times \\dfrac{3}{7} = \\dfrac{15}{56}",
          "explanation": "Multiplying the red first branch by the blue second branch gives the probability of that route, $\\dfrac{15}{56}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second-draw probability for blue then red",
          "workingLatex": "P(R_2 \\mid B_1) = \\dfrac{5}{7}",
          "explanation": "If the first counter is blue, all $5$ red counters remain among $7$, so drawing red next has probability $\\dfrac{5}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the blue-then-red path",
          "workingLatex": "P(BR) = \\dfrac{3}{8} \\times \\dfrac{5}{7} = \\dfrac{15}{56}",
          "explanation": "Multiplying the blue first branch by the red second branch gives $\\dfrac{15}{56}$, the same value as the other order.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the two paths",
          "workingLatex": "P(\\text{exactly one } R) = \\dfrac{15}{56} + \\dfrac{15}{56} = \\dfrac{30}{56}",
          "explanation": "The two mixed-colour paths already share the denominator $56$, so we simply add their numerators to combine them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the fraction",
          "workingLatex": "P(\\text{exactly one } R) = \\dfrac{30}{56} = \\dfrac{15}{28}",
          "explanation": "Dividing top and bottom by $2$ reduces $\\dfrac{30}{56}$ to $\\dfrac{15}{28}$, the final probability of exactly one red.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check against the same-colour outcome",
          "workingLatex": "\\dfrac{15}{28} + \\dfrac{13}{28} = \\dfrac{28}{28} = 1",
          "explanation": "Any draw of two counters is either a colour match or exactly one red, and these two events cover all possibilities. Since the same-colour probability is $\\dfrac{13}{28}$, the two should add to $1$, which they do.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one red}) = \\dfrac{15}{28}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "complement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Two counters are drawn without replacement. Using a probability tree, find the probability of drawing at least one red counter.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite at least one red using the complement",
          "workingLatex": "P(\\text{at least one } R) = 1 - P(\\text{no reds})",
          "explanation": "'At least one red' spans three of the four tree paths, but its opposite, 'no reds at all', is the single blue-blue path. Subtracting the one easy path from $1$ is much faster than adding three.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise no reds as both blue",
          "workingLatex": "P(\\text{no reds}) = P(BB)",
          "explanation": "The only way to avoid drawing a red is to draw blue on both occasions, which is the bottom path $B \\rightarrow B$ of the tree.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "First-draw blue probability",
          "workingLatex": "P(B_1) = \\dfrac{3}{8}",
          "explanation": "There are $3$ blue counters among the $8$ present at the start, so the first blue branch has probability $\\dfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Update the bag after a blue is drawn",
          "workingLatex": "5 \\text{ red}, \\; 2 \\text{ blue}, \\; 7 \\text{ total}",
          "explanation": "Because there is no replacement, drawing a blue leaves $2$ blue out of $7$ remaining counters, which sets the second blue branch.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Second-draw blue probability",
          "workingLatex": "P(B_2 \\mid B_1) = \\dfrac{2}{7}",
          "explanation": "Given the first counter was blue, $2$ of the $7$ remaining are blue, so the continuation probability is $\\dfrac{2}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the blue-blue path",
          "workingLatex": "P(BB) = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56} = \\dfrac{3}{28}",
          "explanation": "Multiplying the two blue branch probabilities gives the chance of no reds, $\\dfrac{3}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Subtract from one",
          "workingLatex": "P(\\text{at least one } R) = 1 - \\dfrac{3}{28} = \\dfrac{28}{28} - \\dfrac{3}{28}",
          "explanation": "Writing $1$ as $\\dfrac{28}{28}$ lets us subtract the no-reds probability directly over a common denominator.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the final probability",
          "workingLatex": "P(\\text{at least one } R) = \\dfrac{25}{28}",
          "explanation": "The result $\\dfrac{25}{28}$ is close to $1$, which makes sense because with so many red counters it is very likely at least one appears.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by adding the three red-containing paths",
          "workingLatex": "P(RR) + P(RB) + P(BR) = \\dfrac{20}{56} + \\dfrac{15}{56} + \\dfrac{15}{56} = \\dfrac{50}{56} = \\dfrac{25}{28}",
          "explanation": "Adding the three tree paths that contain at least one red directly gives the same $\\dfrac{25}{28}$, confirming that the quicker complement method was correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{at least one red}) = \\dfrac{25}{28}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "independent events"],
    "questionText": "A spinner wins with probability $0.3$ on each independent spin. A probability tree is drawn for two spins, each branching into win $W$ ($0.3$) and lose $L$ ($0.7$). First find the probability of exactly one win. Then, given that at least one win occurred, find the probability that the first spin was a win.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the branch probabilities",
          "workingLatex": "P(W) = 0.3, \\quad P(L) = 0.7",
          "explanation": "Each spin wins with probability $0.3$ and loses with probability $0.7$, and independence means both sets of branches share these values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the exactly-one-win paths",
          "workingLatex": "P(\\text{exactly one } W) = P(WL) + P(LW)",
          "explanation": "Exactly one win happens as win then lose, or lose then win. These are two separate paths on the tree, so their probabilities add.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the two mixed paths",
          "workingLatex": "P(WL) = 0.3 \\times 0.7 = 0.21, \\quad P(LW) = 0.7 \\times 0.3 = 0.21",
          "explanation": "Multiplying along each path gives $0.21$ for both, since the same two numbers appear just in a different order.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add to get exactly one win",
          "workingLatex": "P(\\text{exactly one } W) = 0.21 + 0.21 = 0.42",
          "explanation": "Adding the two mixed paths gives $0.42$, the probability of exactly one win across the two spins.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the conditional probability required",
          "workingLatex": "P(W_1 \\mid \\text{at least one } W) = \\dfrac{P(W_1 \\cap \\text{at least one } W)}{P(\\text{at least one } W)}",
          "explanation": "Conditioning on 'at least one win' restricts attention to the outcomes where a win occurred, so we compare the overlap with 'first spin a win' against the whole 'at least one win' event.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "W_1 \\subseteq \\text{at least one } W \\; \\Rightarrow \\; P(W_1 \\cap \\text{at least one } W) = P(W_1)",
          "explanation": "If the first spin is a win then there is automatically at least one win, so the overlap is just the event 'first spin a win'. This makes the numerator simply $P(W_1)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the value of the numerator",
          "workingLatex": "P(W_1) = 0.3",
          "explanation": "The probability the first spin is a win is read straight off the first branch of the tree, $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the denominator, at least one win",
          "workingLatex": "P(\\text{at least one } W) = 1 - P(LL) = 1 - 0.49 = 0.51",
          "explanation": "The chance of at least one win is $1$ minus the no-wins path $LL = 0.7 \\times 0.7 = 0.49$, giving $0.51$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the conditional formula",
          "workingLatex": "P(W_1 \\mid \\text{at least one } W) = \\dfrac{0.3}{0.51}",
          "explanation": "Placing the numerator over the denominator gives the required conditional probability as a single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{0.3}{0.51} = \\dfrac{30}{51} = \\dfrac{10}{17}",
          "explanation": "Clearing decimals by multiplying top and bottom by $100$ gives $\\dfrac{30}{51}$, which divides by $3$ to reach $\\dfrac{10}{17}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(\\text{exactly one win}) = 0.42$ and $P(\\text{first spin win} \\mid \\text{at least one win}) = \\dfrac{10}{17}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A box contains $4$ white and $6$ black counters ($10$ in total). Two counters are drawn without replacement, and a probability tree is drawn for the two draws with branches white $W$ and black $Bk$. Find $P(WW)$, $P(\\text{both black})$, and the probability of drawing one of each colour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the starting contents",
          "workingLatex": "4 \\text{ white}, \\; 6 \\text{ black}, \\; 10 \\text{ total}",
          "explanation": "The box begins with $10$ counters, $4$ white and $6$ black, which fixes the probabilities on the first pair of branches.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First-draw probabilities",
          "workingLatex": "P(W_1) = \\dfrac{4}{10} = \\dfrac{2}{5}, \\quad P(Bk_1) = \\dfrac{6}{10} = \\dfrac{3}{5}",
          "explanation": "White has $4$ chances out of $10$ and black has $6$ out of $10$, which simplify to $\\dfrac{2}{5}$ and $\\dfrac{3}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the white-white path",
          "workingLatex": "P(WW) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90} = \\dfrac{2}{15}",
          "explanation": "After a white is removed, $3$ white remain out of $9$, so we multiply $\\dfrac{4}{10} \\times \\dfrac{3}{9}$ and simplify to $\\dfrac{2}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the black-black path",
          "workingLatex": "P(BkBk) = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90} = \\dfrac{1}{3}",
          "explanation": "After a black is removed, $5$ black remain out of $9$, so multiplying $\\dfrac{6}{10} \\times \\dfrac{5}{9}$ gives $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the two mixed paths",
          "workingLatex": "P(\\text{one of each}) = P(W\\,Bk) + P(Bk\\,W)",
          "explanation": "One of each colour occurs as white then black, or black then white, two separate paths that we add together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the white-then-black path",
          "workingLatex": "P(W\\,Bk) = \\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}",
          "explanation": "After a white is taken, all $6$ black remain out of $9$, so this path is $\\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the black-then-white path",
          "workingLatex": "P(Bk\\,W) = \\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}",
          "explanation": "After a black is taken, all $4$ white remain out of $9$, giving $\\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}$, the same as the other order.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the mixed paths",
          "workingLatex": "P(\\text{one of each}) = \\dfrac{24}{90} + \\dfrac{24}{90} = \\dfrac{48}{90} = \\dfrac{8}{15}",
          "explanation": "Adding the two equal paths gives $\\dfrac{48}{90}$, which reduces to $\\dfrac{8}{15}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the three results sum to one",
          "workingLatex": "\\dfrac{2}{15} + \\dfrac{1}{3} + \\dfrac{8}{15} = \\dfrac{2}{15} + \\dfrac{5}{15} + \\dfrac{8}{15} = 1",
          "explanation": "The three outcomes both white, both black, and one of each cover every possibility, so their probabilities should total $1$, which they do. This confirms our working.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(WW) = \\dfrac{2}{15}$, $P(\\text{both black}) = \\dfrac{1}{3}$, $P(\\text{one of each}) = \\dfrac{8}{15}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A box contains $4$ white and $6$ black counters ($10$ in total). Two counters are drawn without replacement. First find the probability that the second counter is white. Then, given that the second counter is white, find the probability that the first counter was also white.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the paths that end in a white second counter",
          "workingLatex": "P(W_2) = P(W_1 \\cap W_2) + P(Bk_1 \\cap W_2)",
          "explanation": "A white second counter can be reached two ways: white first then white, or black first then white. We add these two tree paths to get the total.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the white-then-white path",
          "workingLatex": "P(W_1 \\cap W_2) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}",
          "explanation": "The first white has probability $\\dfrac{4}{10}$, and after removing it $3$ white remain out of $9$, giving $\\dfrac{12}{90}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the black-then-white path",
          "workingLatex": "P(Bk_1 \\cap W_2) = \\dfrac{6}{10} \\times \\dfrac{4}{9} = \\dfrac{24}{90}",
          "explanation": "A first black has probability $\\dfrac{6}{10}$, and all $4$ white then remain out of $9$, giving $\\dfrac{24}{90}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add for the probability of a white second counter",
          "workingLatex": "P(W_2) = \\dfrac{12}{90} + \\dfrac{24}{90} = \\dfrac{36}{90} = \\dfrac{2}{5}",
          "explanation": "Summing the two paths gives $\\dfrac{36}{90} = \\dfrac{2}{5}$. Notice this equals the plain chance of white, which is a neat symmetry of drawing without replacement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the conditional probability formula",
          "workingLatex": "P(W_1 \\mid W_2) = \\dfrac{P(W_1 \\cap W_2)}{P(W_2)}",
          "explanation": "We are told the second counter is white and want the first to be white too, so we divide the overlap $W_1 \\cap W_2$ by the whole event $W_2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values found",
          "workingLatex": "P(W_1 \\mid W_2) = \\dfrac{12/90}{36/90}",
          "explanation": "The numerator is the white-then-white path $\\dfrac{12}{90}$ and the denominator is the total white-second probability $\\dfrac{36}{90}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the compound fraction",
          "workingLatex": "P(W_1 \\mid W_2) = \\dfrac{12}{36} = \\dfrac{1}{3}",
          "explanation": "The common denominator $90$ cancels, leaving $\\dfrac{12}{36}$, which reduces to $\\dfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State both results",
          "workingLatex": "P(W_2) = \\dfrac{2}{5}, \\quad P(W_1 \\mid W_2) = \\dfrac{1}{3}",
          "explanation": "So the second counter is white with probability $\\dfrac{2}{5}$, and among those cases the first was white one third of the time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Comment on whether the draws are independent",
          "workingLatex": "P(W_1 \\mid W_2) = \\dfrac{1}{3} \\neq \\dfrac{2}{5} = P(W_1)",
          "explanation": "Knowing the second counter is white lowers the chance the first was white from $\\dfrac{2}{5}$ down to $\\dfrac{1}{3}$. Because the conditioning changes the probability, the two draws are dependent, exactly as we expect when drawing without replacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(W_2) = \\dfrac{2}{5}$ and $P(W_1 \\mid W_2) = \\dfrac{1}{3}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement", "Bayes"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Two counters are drawn without replacement. Build the full probability tree, finding $P(RR)$, $P(RB)$, $P(BR)$ and $P(BB)$. Then, given that the second counter drawn is red, find the probability that the first counter was red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the starting contents",
          "workingLatex": "5 \\text{ red}, \\; 3 \\text{ blue}, \\; 8 \\text{ total}",
          "explanation": "The bag starts with $8$ counters, $5$ red and $3$ blue, which sets the first pair of branches on the tree.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First-draw probabilities",
          "workingLatex": "P(R_1) = \\dfrac{5}{8}, \\quad P(B_1) = \\dfrac{3}{8}",
          "explanation": "With all $8$ counters present, red has probability $\\dfrac{5}{8}$ and blue $\\dfrac{3}{8}$ on the first draw.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Second-draw probabilities after a red",
          "workingLatex": "P(R_2 \\mid R_1) = \\dfrac{4}{7}, \\quad P(B_2 \\mid R_1) = \\dfrac{3}{7}",
          "explanation": "Removing a red leaves $4$ red and $3$ blue among $7$, so the branches from the red node are $\\dfrac{4}{7}$ and $\\dfrac{3}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second-draw probabilities after a blue",
          "workingLatex": "P(R_2 \\mid B_1) = \\dfrac{5}{7}, \\quad P(B_2 \\mid B_1) = \\dfrac{2}{7}",
          "explanation": "Removing a blue leaves $5$ red and $2$ blue among $7$, so the branches from the blue node are $\\dfrac{5}{7}$ and $\\dfrac{2}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the red-red path",
          "workingLatex": "P(RR) = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14}",
          "explanation": "Multiplying along the top path gives $\\dfrac{20}{56}$, which simplifies to $\\dfrac{5}{14}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the red-blue path",
          "workingLatex": "P(RB) = \\dfrac{5}{8} \\times \\dfrac{3}{7} = \\dfrac{15}{56}",
          "explanation": "Multiplying red first by blue second gives $\\dfrac{15}{56}$ for this route.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the blue-red path",
          "workingLatex": "P(BR) = \\dfrac{3}{8} \\times \\dfrac{5}{7} = \\dfrac{15}{56}",
          "explanation": "Multiplying blue first by red second also gives $\\dfrac{15}{56}$, matching the other mixed path.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the blue-blue path",
          "workingLatex": "P(BB) = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56} = \\dfrac{3}{28}",
          "explanation": "Multiplying along the bottom path gives $\\dfrac{6}{56} = \\dfrac{3}{28}$, completing the tree.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the four paths total one",
          "workingLatex": "\\dfrac{20}{56} + \\dfrac{15}{56} + \\dfrac{15}{56} + \\dfrac{6}{56} = \\dfrac{56}{56} = 1",
          "explanation": "The four ends of the tree cover all outcomes, so their probabilities must add to $1$, which they do. This confirms the tree is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conditional probability we need",
          "workingLatex": "P(R_1 \\mid R_2) = \\dfrac{P(R_1 \\cap R_2)}{P(R_2)}",
          "explanation": "Being told the second counter is red, we compare the overlap 'both red' against the whole event 'second red'. This is a reverse-in-time conditional, a Bayes-style question.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the probability the second counter is red",
          "workingLatex": "P(R_2) = P(RR) + P(BR) = \\dfrac{20}{56} + \\dfrac{15}{56} = \\dfrac{35}{56} = \\dfrac{5}{8}",
          "explanation": "A red second draw arises from red-red or blue-red, so we add those two paths to get $\\dfrac{35}{56} = \\dfrac{5}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Identify the numerator",
          "workingLatex": "P(R_1 \\cap R_2) = P(RR) = \\dfrac{20}{56}",
          "explanation": "The overlap of first red and second red is exactly the red-red path, $\\dfrac{20}{56}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Substitute into the formula",
          "workingLatex": "P(R_1 \\mid R_2) = \\dfrac{20/56}{35/56} = \\dfrac{20}{35}",
          "explanation": "Dividing the two path probabilities, the common denominator $56$ cancels to leave $\\dfrac{20}{35}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify to the final answer",
          "workingLatex": "P(R_1 \\mid R_2) = \\dfrac{20}{35} = \\dfrac{4}{7}",
          "explanation": "Dividing top and bottom by $5$ reduces the fraction to $\\dfrac{4}{7}$, the probability the first counter was red given the second was red.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(R_1 \\mid R_2) = \\dfrac{4}{7}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "without replacement"],
    "questionText": "A bag contains $5$ red and $3$ blue counters ($8$ in total). Three counters are drawn one at a time without replacement, giving a three-stage probability tree. Find the probability that all three counters are red, and the probability that exactly two of the three are red.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the contents and the plan",
          "workingLatex": "5 \\text{ red}, \\; 3 \\text{ blue}, \\; 8 \\text{ total}",
          "explanation": "With $5$ red and $3$ blue, drawing three counters means a three-stage tree. Each draw shrinks the bag by one, so the branch probabilities change at every stage.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Red probability on the first draw",
          "workingLatex": "P(R_1) = \\dfrac{5}{8}",
          "explanation": "At the start $5$ of $8$ counters are red, giving the first red branch $\\dfrac{5}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Red probability on the second draw after a red",
          "workingLatex": "P(R_2 \\mid R_1) = \\dfrac{4}{7}",
          "explanation": "After one red is removed, $4$ red remain out of $7$, so the second red branch is $\\dfrac{4}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Red probability on the third draw after two reds",
          "workingLatex": "P(R_3 \\mid R_1 R_2) = \\dfrac{3}{6}",
          "explanation": "After two reds are removed, $3$ red remain out of $6$, so the third red branch is $\\dfrac{3}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply along the all-red path",
          "workingLatex": "P(RRR) = \\dfrac{5}{8} \\times \\dfrac{4}{7} \\times \\dfrac{3}{6} = \\dfrac{60}{336}",
          "explanation": "Multiplying the three red branch probabilities together gives the probability of the whole red-red-red route, $\\dfrac{60}{336}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the all-red probability",
          "workingLatex": "P(RRR) = \\dfrac{60}{336} = \\dfrac{5}{28}",
          "explanation": "Dividing top and bottom by $12$ reduces $\\dfrac{60}{336}$ to $\\dfrac{5}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the three exactly-two-red paths",
          "workingLatex": "P(\\text{exactly two } R) = P(RRB) + P(RBR) + P(BRR)",
          "explanation": "Exactly two reds means the single blue can fall on the first, second, or third draw. Each position is a distinct path, and we add all three.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the red-red-blue path",
          "workingLatex": "P(RRB) = \\dfrac{5}{8} \\times \\dfrac{4}{7} \\times \\dfrac{3}{6} = \\dfrac{60}{336}",
          "explanation": "After two reds are gone, all $3$ blue remain out of $6$, so the third blue branch is $\\dfrac{3}{6}$, giving $\\dfrac{60}{336}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the red-blue-red path",
          "workingLatex": "P(RBR) = \\dfrac{5}{8} \\times \\dfrac{3}{7} \\times \\dfrac{4}{6} = \\dfrac{60}{336}",
          "explanation": "Here blue is drawn second ($\\dfrac{3}{7}$), then $4$ red remain out of $6$ for the third draw, again giving $\\dfrac{60}{336}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the blue-red-red path",
          "workingLatex": "P(BRR) = \\dfrac{3}{8} \\times \\dfrac{5}{7} \\times \\dfrac{4}{6} = \\dfrac{60}{336}",
          "explanation": "Blue first ($\\dfrac{3}{8}$), then $5$ red out of $7$, then $4$ red out of $6$, which multiplies to $\\dfrac{60}{336}$ once more.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the three paths are equal",
          "workingLatex": "P(RRB) = P(RBR) = P(BRR) = \\dfrac{60}{336}",
          "explanation": "Each path uses the same set of factors $5, 4, 3$ over $8, 7, 6$ in some order, so the products are identical. This is why we can simply multiply one value by three.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the three paths",
          "workingLatex": "P(\\text{exactly two } R) = 3 \\times \\dfrac{60}{336} = \\dfrac{180}{336}",
          "explanation": "Multiplying the common path probability by $3$ combines the three equal routes into $\\dfrac{180}{336}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the exactly-two-red probability",
          "workingLatex": "P(\\text{exactly two } R) = \\dfrac{180}{336} = \\dfrac{15}{28}",
          "explanation": "Dividing top and bottom by $12$ reduces $\\dfrac{180}{336}$ to $\\dfrac{15}{28}$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both results",
          "workingLatex": "P(RRR) = \\dfrac{5}{28}, \\quad P(\\text{exactly two } R) = \\dfrac{15}{28}",
          "explanation": "So all three red has probability $\\dfrac{5}{28}$ and exactly two red has probability $\\dfrac{15}{28}$, the latter three times as likely because there are three positions for the blue.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(RRR) = \\dfrac{5}{28}$ and $P(\\text{exactly two red}) = \\dfrac{15}{28}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "Bayes", "law of total probability"],
    "questionText": "Of the students at a school, $55\\%$ travel by bus $B$ and the remaining $45\\%$ walk $Wk$. Of the bus travellers $10\\%$ are late, and of those who walk $20\\%$ are late. A probability tree branches first into bus or walk, then into late $L$ or on time. Find the probability that a randomly chosen student is late, then find the probability the student took the bus given they were late, and the probability they walked given they were late.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the first-stage probabilities",
          "workingLatex": "P(B) = 0.55, \\quad P(Wk) = 0.45",
          "explanation": "The first branches of the tree split students into bus travellers ($0.55$) and walkers ($0.45$), which together account for everyone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the lateness probabilities for each route",
          "workingLatex": "P(L \\mid B) = 0.10, \\quad P(L \\mid Wk) = 0.20",
          "explanation": "These are conditional probabilities: being late depends on how you travelled, so each first branch leads to its own late branch.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the bus-and-late path",
          "workingLatex": "P(B \\cap L) = 0.55 \\times 0.10 = 0.055",
          "explanation": "Multiplying along the bus route, first bus then late, gives the probability of a student who both took the bus and was late.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the walk-and-late path",
          "workingLatex": "P(Wk \\cap L) = 0.45 \\times 0.20 = 0.09",
          "explanation": "Multiplying along the walking route, first walk then late, gives the probability of a walker who was late.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the law of total probability",
          "workingLatex": "P(L) = P(B \\cap L) + P(Wk \\cap L)",
          "explanation": "A late student is either a late bus traveller or a late walker, and these do not overlap, so the total probability of lateness is the sum of the two late paths.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two late paths",
          "workingLatex": "P(L) = 0.055 + 0.09 = 0.145",
          "explanation": "Adding gives $P(L) = 0.145$, the overall chance a randomly chosen student is late.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the formula for bus given late",
          "workingLatex": "P(B \\mid L) = \\dfrac{P(B \\cap L)}{P(L)}",
          "explanation": "Now we know the student is late, so we restrict to the late students and ask what fraction of that lateness came from the bus path.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "P(B \\mid L) = \\dfrac{0.055}{0.145}",
          "explanation": "The bus-and-late path $0.055$ goes on top and the total lateness $0.145$ goes underneath.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the bus-given-late fraction",
          "workingLatex": "P(B \\mid L) = \\dfrac{55}{145} = \\dfrac{11}{29}",
          "explanation": "Multiplying top and bottom by $1000$ gives $\\dfrac{55}{145}$, which divides by $5$ to reach $\\dfrac{11}{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the formula for walk given late",
          "workingLatex": "P(Wk \\mid L) = \\dfrac{P(Wk \\cap L)}{P(L)} = \\dfrac{0.09}{0.145}",
          "explanation": "By the same reasoning, the chance a late student walked is the walk-and-late path over the total lateness.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the walk-given-late fraction",
          "workingLatex": "P(Wk \\mid L) = \\dfrac{90}{145} = \\dfrac{18}{29}",
          "explanation": "Clearing decimals gives $\\dfrac{90}{145}$, which divides by $5$ to give $\\dfrac{18}{29}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the two conditional probabilities add to one",
          "workingLatex": "\\dfrac{11}{29} + \\dfrac{18}{29} = \\dfrac{29}{29} = 1",
          "explanation": "A late student must have either taken the bus or walked, so these two conditional probabilities should sum to $1$, confirming the answers.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the reversed probabilities",
          "workingLatex": "P(Wk \\mid L) = \\dfrac{18}{29} > \\dfrac{11}{29} = P(B \\mid L)",
          "explanation": "Even though fewer students walk, walkers are twice as likely to be late, so among the late students walkers slightly outnumber bus travellers. Conditioning on lateness has flipped which group is the larger.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(L) = 0.145$, $P(B \\mid L) = \\dfrac{11}{29}$, $P(Wk \\mid L) = \\dfrac{18}{29}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["conditional probability", "tree diagram", "Bayes", "medical test"],
    "questionText": "A disease affects $2\\%$ of a population. A test gives a positive result for $95\\%$ of people who have the disease, and for $5\\%$ of people who do not. A probability tree branches first into has the disease $D$ or not $D'$, then into positive $+$ or negative. Find the probability that a randomly tested person tests positive, then find the probability that a person who tests positive actually has the disease.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the first-stage probabilities",
          "workingLatex": "P(D) = 0.02, \\quad P(D') = 0.98",
          "explanation": "The first branches split the population into those with the disease ($2\\%$) and those without ($98\\%$), which together make up everyone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the test probabilities for each group",
          "workingLatex": "P(+ \\mid D) = 0.95, \\quad P(+ \\mid D') = 0.05",
          "explanation": "The test detects $95\\%$ of true cases, and wrongly flags $5\\%$ of healthy people. These conditional probabilities form the second branches from each node.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the disease-and-positive path",
          "workingLatex": "P(D \\cap +) = 0.02 \\times 0.95 = 0.019",
          "explanation": "Multiplying along the top route, disease then positive, gives the probability of a genuine positive, a true detection.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the no-disease-and-positive path",
          "workingLatex": "P(D' \\cap +) = 0.98 \\times 0.05 = 0.049",
          "explanation": "Multiplying along the lower route, no disease then positive, gives the probability of a false positive, a healthy person the test wrongly flags.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the law of total probability",
          "workingLatex": "P(+) = P(D \\cap +) + P(D' \\cap +)",
          "explanation": "A positive result comes either from a true case or a false alarm, and these do not overlap, so the total positive probability is the sum of the two paths.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two positive paths",
          "workingLatex": "P(+) = 0.019 + 0.049 = 0.068",
          "explanation": "Adding gives $P(+) = 0.068$, the overall chance a randomly tested person tests positive.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the formula for disease given positive",
          "workingLatex": "P(D \\mid +) = \\dfrac{P(D \\cap +)}{P(+)}",
          "explanation": "We now know the result is positive, so we look only among positive tests and ask what share of them are genuine cases. This is the key Bayes step.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "P(D \\mid +) = \\dfrac{0.019}{0.068}",
          "explanation": "The true-positive path $0.019$ sits on top, and the total positive probability $0.068$ sits underneath.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Clear the decimals",
          "workingLatex": "P(D \\mid +) = \\dfrac{19}{68}",
          "explanation": "Multiplying numerator and denominator by $1000$ turns the decimals into the fraction $\\dfrac{19}{68}$, which has no common factor to cancel.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Interpret the value",
          "workingLatex": "\\dfrac{19}{68} \\approx 0.28",
          "explanation": "So only about $28\\%$ of positive tests are genuine. Because the disease is rare, false positives from the large healthy group outnumber true positives, a famous and counter-intuitive result.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm with the complement",
          "workingLatex": "P(D' \\mid +) = \\dfrac{0.049}{0.068} = \\dfrac{49}{68}, \\quad \\dfrac{19}{68} + \\dfrac{49}{68} = 1",
          "explanation": "The two conditional probabilities for a positive result, genuine and false, add to $1$ as they must, which checks our arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the results",
          "workingLatex": "P(+) = 0.068, \\quad P(D \\mid +) = \\dfrac{19}{68}",
          "explanation": "So a person tests positive with probability $0.068$, and given a positive result the chance they truly have the disease is $\\dfrac{19}{68}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Draw the practical conclusion",
          "workingLatex": "P(D \\mid +) = \\dfrac{19}{68} < P(+ \\mid D) = 0.95",
          "explanation": "The chance of disease given a positive result is far below the test's $95\\%$ detection rate, because the disease is rare and false positives from the large healthy group dominate. In practice a single positive would be followed by a second, more specific test before any diagnosis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(+) = 0.068$ and $P(D \\mid +) = \\dfrac{19}{68}$"
    }
  },
{
    "id": "al.y2.stats.conditional-probability.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["mutually exclusive", "addition rule"],
    "questionText": "Two events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.45$. Find $P(A\\cup B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret what mutually exclusive means",
          "workingLatex": "P(A\\cap B) = 0",
          "explanation": "Mutually exclusive events cannot both happen at the same time, so there is no overlap between them and $P(A\\cap B) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the general addition rule",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "The addition rule adds the two probabilities but subtracts the overlap once, because anything in $A\\cap B$ would otherwise be counted in both $P(A)$ and $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the rule using the zero overlap",
          "workingLatex": "P(A\\cup B) = P(A) + P(B)",
          "explanation": "Since $P(A\\cap B) = 0$, the subtracted term vanishes and we simply add the two separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the given probabilities",
          "workingLatex": "P(A\\cup B) = 0.3 + 0.45",
          "explanation": "We replace $P(A)$ with $0.3$ and $P(B)$ with $0.45$ from the information given.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add the probabilities together",
          "workingLatex": "P(A\\cup B) = 0.75",
          "explanation": "Adding $0.3$ and $0.45$ gives $0.75$, which is a valid probability because it lies between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(A\\cup B) = 0.75",
          "explanation": "The probability that at least one of $A$ or $B$ occurs is $0.75$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cup B) = 0.75$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["mutually exclusive", "conditional probability"],
    "questionText": "Two events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.45$. Find $P(A\\mid B)$ and explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "Conditioning on $B$ means we restrict attention to the cases where $B$ has happened, then ask what fraction of that also lies in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the fact that the events are mutually exclusive",
          "workingLatex": "P(A\\cap B) = 0",
          "explanation": "Because $A$ and $B$ cannot occur together, their overlap is empty, so $P(A\\cap B) = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values into the formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{0}{0.45}",
          "explanation": "We place the overlap $0$ on top and the condition $P(B) = 0.45$ on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the fraction",
          "workingLatex": "P(A\\mid B) = 0",
          "explanation": "Zero divided by any non-zero number is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Explain the meaning of the result",
          "workingLatex": "B \\text{ occurs} \\Rightarrow A \\text{ cannot occur}",
          "explanation": "Once we know $B$ has happened, $A$ is impossible, because the two events can never occur together. So the conditional probability is $0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "P(A\\mid B) = 0",
          "explanation": "For mutually exclusive events, learning that $B$ happened rules $A$ out completely, giving $P(A\\mid B) = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = 0$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["conditional probability", "dice", "sample space"],
    "questionText": "A fair six-sided die is rolled once. Let $A$ be the event that the score is even, so $A = \\{2,4,6\\}$, and let $B$ be the event that the score is greater than $3$, so $B = \\{4,5,6\\}$. Find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the outcomes that make up event B",
          "workingLatex": "B = \\{4,5,6\\}, \\quad n(B) = 3",
          "explanation": "Conditioning on $B$ means we only look at rolls that are greater than $3$, and there are three such outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the outcomes that make up event A",
          "workingLatex": "A = \\{2,4,6\\}",
          "explanation": "Event $A$ is the set of even scores, which we need so we can see which of the $B$ outcomes are also even.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the outcomes in both A and B",
          "workingLatex": "A\\cap B = \\{4,6\\}, \\quad n(A\\cap B) = 2",
          "explanation": "The scores that are both even and greater than $3$ are $4$ and $6$, so the overlap contains two outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the conditional probability by restricting to B",
          "workingLatex": "P(A\\mid B) = \\dfrac{n(A\\cap B)}{n(B)}",
          "explanation": "Given that $B$ has happened, the reduced sample space is just the three outcomes of $B$, and we count how many of those lie in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the counts",
          "workingLatex": "P(A\\mid B) = \\dfrac{2}{3}",
          "explanation": "Two of the three equally likely outcomes in $B$ are also in $A$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "P(A\\mid B) = \\dfrac{2}{3}",
          "explanation": "If we already know the score exceeded $3$, then it is even two times out of three.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = \\dfrac{2}{3}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": ["independence", "dice", "sample space"],
    "questionText": "A fair six-sided die is rolled once. Let $A = \\{2,4,6\\}$ be the event that the score is even and let $B = \\{4,5,6\\}$ be the event that the score is greater than $3$. Determine whether $A$ and $B$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the test for independence",
          "workingLatex": "A, B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "Two events are independent exactly when the probability of both equals the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of A",
          "workingLatex": "P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}",
          "explanation": "There are three even scores out of six equally likely outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the probability of B",
          "workingLatex": "P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}",
          "explanation": "There are three scores greater than $3$ out of six equally likely outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the outcomes in both events",
          "workingLatex": "A\\cap B = \\{4,6\\}",
          "explanation": "The scores that are both even and greater than $3$ are $4$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the probability of the overlap",
          "workingLatex": "P(A\\cap B) = \\dfrac{2}{6} = \\dfrac{1}{3}",
          "explanation": "Two of the six equally likely outcomes lie in both events.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the product of the separate probabilities",
          "workingLatex": "P(A)\\,P(B) = \\dfrac{1}{2}\\times\\dfrac{1}{2} = \\dfrac{1}{4}",
          "explanation": "This is what the overlap would have to equal if the events were independent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the overlap with the product",
          "workingLatex": "\\dfrac{1}{3} \\neq \\dfrac{1}{4}",
          "explanation": "The actual overlap $\\tfrac{1}{3}$ is not equal to the product $\\tfrac{1}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "A, B \\text{ are not independent}",
          "explanation": "Because the independence condition fails, the events are dependent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Explain the result intuitively",
          "workingLatex": "P(A\\mid B) = \\dfrac{2}{3} \\neq \\dfrac{1}{2} = P(A)",
          "explanation": "Knowing that the score exceeded $3$ raises the chance of it being even from $\\tfrac{1}{2}$ to $\\tfrac{2}{3}$, so $B$ changes the likelihood of $A$ and the events are dependent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$ and $B$ are not independent (they are dependent), because $P(A\\cap B) = \\dfrac{1}{3} \\neq P(A)\\,P(B) = \\dfrac{1}{4}$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["independence", "conditional probability", "Venn"],
    "questionText": "Two events $A$ and $B$ satisfy $P(A) = 0.6$, $P(B) = 0.5$ and $P(A\\cap B) = 0.3$. Show that $A$ and $B$ are independent, and hence write down $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the condition for independence",
          "workingLatex": "A, B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "Independence means the chance of both happening is exactly the product of the individual chances, so this is what we must test.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the product of the two probabilities",
          "workingLatex": "P(A)\\,P(B) = 0.6\\times 0.5 = 0.3",
          "explanation": "We multiply the given individual probabilities to find the value the overlap should have under independence.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compare the product with the given overlap",
          "workingLatex": "P(A\\cap B) = 0.3 = P(A)\\,P(B)",
          "explanation": "The given overlap $0.3$ matches the product $0.3$ exactly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State that the events are independent",
          "workingLatex": "A, B \\text{ are independent}",
          "explanation": "Since the independence condition holds, the two events are independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "To find $P(A\\mid B)$ we compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.3}{0.5}",
          "explanation": "The overlap is $0.3$ and the condition has probability $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the fraction",
          "workingLatex": "P(A\\mid B) = 0.6",
          "explanation": "Dividing $0.3$ by $0.5$ gives $0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm the answer is consistent with independence",
          "workingLatex": "P(A\\mid B) = 0.6 = P(A)",
          "explanation": "For independent events, conditioning on $B$ leaves the probability of $A$ unchanged, and indeed $P(A\\mid B) = P(A) = 0.6$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "A, B \\text{ independent}, \\quad P(A\\mid B) = 0.6",
          "explanation": "We have shown independence from $P(A\\cap B) = P(A)\\,P(B)$, and the required conditional probability is $0.6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$ and $B$ are independent since $P(A\\cap B) = P(A)\\,P(B) = 0.3$, and hence $P(A\\mid B) = 0.6$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "description",
    "tags": ["mutually exclusive", "independence", "concept"],
    "questionText": "Two events $A$ and $B$ are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.45$. Determine whether $A$ and $B$ are independent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the given information",
          "workingLatex": "P(A) = 0.3, \\quad P(B) = 0.45",
          "explanation": "We note the two individual probabilities so we can test the independence condition.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use mutual exclusivity to find the overlap",
          "workingLatex": "P(A\\cap B) = 0",
          "explanation": "Mutually exclusive events cannot happen together, so their overlap has probability $0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the condition for independence",
          "workingLatex": "A, B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "We compare the actual overlap with the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the product of the probabilities",
          "workingLatex": "P(A)\\,P(B) = 0.3\\times 0.45 = 0.135",
          "explanation": "This is what the overlap would need to equal if the events were independent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare the overlap with the product",
          "workingLatex": "0 \\neq 0.135",
          "explanation": "The real overlap is $0$, but independence would require it to be $0.135$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion",
          "workingLatex": "A, B \\text{ are not independent}",
          "explanation": "Because the condition fails, the events are dependent.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm using a conditional probability",
          "workingLatex": "P(A\\mid B) = 0 \\neq 0.3 = P(A)",
          "explanation": "Once $B$ has occurred, $A$ becomes impossible, so $P(A\\mid B) = 0$, which differs from $P(A)$ and again shows dependence.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain the intuition",
          "workingLatex": "B \\text{ occurs} \\Rightarrow A \\text{ cannot occur}",
          "explanation": "Knowing that $B$ happened tells us a great deal about $A$, namely that it did not happen, so the events strongly influence each other.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the general principle",
          "workingLatex": "P(A) > 0, \\ P(B) > 0, \\text{ mutually exclusive} \\Rightarrow \\text{dependent}",
          "explanation": "Any two mutually exclusive events with non-zero probability are always dependent, because the occurrence of one rules out the other.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A$ and $B$ are not independent, since $P(A\\cap B) = 0 \\neq P(A)\\,P(B) = 0.135$; mutually exclusive events with non-zero probability are always dependent."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["independence", "multiplication rule", "addition rule"],
    "questionText": "Two events $A$ and $B$ are independent with $P(A) = 0.7$ and $P(B) = 0.4$. Find $P(A\\cap B)$, $P(A\\cup B)$ and $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the multiplication rule for independent events",
          "workingLatex": "P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "When events are independent, the probability of both happening is simply the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Compute the overlap",
          "workingLatex": "P(A\\cap B) = 0.7\\times 0.4 = 0.28",
          "explanation": "Multiplying $0.7$ by $0.4$ gives the probability that both events occur.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the addition rule",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "To find the chance of at least one event, we add the two probabilities and remove the double-counted overlap.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "P(A\\cup B) = 0.7 + 0.4 - 0.28",
          "explanation": "We insert the two given probabilities and the overlap found in step 2.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the union",
          "workingLatex": "P(A\\cup B) = 0.82",
          "explanation": "Adding $0.7$ and $0.4$ gives $1.1$, and subtracting $0.28$ leaves $0.82$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "We compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.28}{0.4}",
          "explanation": "The overlap is $0.28$ and the condition has probability $0.4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the conditional probability",
          "workingLatex": "P(A\\mid B) = 0.7",
          "explanation": "Dividing $0.28$ by $0.4$ gives $0.7$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the conditional result",
          "workingLatex": "P(A\\mid B) = 0.7 = P(A)",
          "explanation": "Because the events are independent, conditioning on $B$ does not change the probability of $A$, so $P(A\\mid B) = P(A)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B) = 0.28$, $P(A\\cup B) = 0.82$ and $P(A\\mid B) = 0.7$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["independence", "addition rule", "solve equation"],
    "questionText": "Two events $A$ and $B$ are independent with $P(A) = 0.5$ and $P(A\\cup B) = 0.8$. Find $P(B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the addition rule",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "This links the union we know to the individual probabilities and the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use independence to rewrite the overlap",
          "workingLatex": "P(A\\cap B) = P(A)\\,P(B) = 0.5\\,P(B)",
          "explanation": "Since the events are independent, the overlap is the product of the probabilities, and $P(A) = 0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute everything into the addition rule",
          "workingLatex": "0.8 = 0.5 + P(B) - 0.5\\,P(B)",
          "explanation": "We replace the union with $0.8$, $P(A)$ with $0.5$, and the overlap with $0.5\\,P(B)$, leaving one unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the P(B) terms",
          "workingLatex": "P(B) - 0.5\\,P(B) = 0.5\\,P(B)",
          "explanation": "The two terms in $P(B)$ combine, since one full $P(B)$ minus half of it leaves half of it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "0.8 = 0.5 + 0.5\\,P(B)",
          "explanation": "The equation is now a simple linear equation in $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 0.5 from both sides",
          "workingLatex": "0.3 = 0.5\\,P(B)",
          "explanation": "Removing the constant $0.5$ isolates the term containing $P(B)$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide both sides by 0.5",
          "workingLatex": "P(B) = \\dfrac{0.3}{0.5}",
          "explanation": "Dividing by the coefficient of $P(B)$ leaves $P(B)$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the result",
          "workingLatex": "P(B) = 0.6",
          "explanation": "Dividing $0.3$ by $0.5$ gives $0.6$, a valid probability.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "P(B) = 0.6",
          "explanation": "The probability of event $B$ is $0.6$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(B) = 0.6$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["addition rule", "independence", "conditional probability"],
    "questionText": "Two events $A$ and $B$ satisfy $P(A) = 0.4$, $P(B) = 0.5$ and $P(A\\cup B) = 0.65$. Find $P(A\\cap B)$, determine whether $A$ and $B$ are independent, and find $P(A\\mid B)$ and $P(B\\mid A)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the addition rule rearranged for the overlap",
          "workingLatex": "P(A\\cap B) = P(A) + P(B) - P(A\\cup B)",
          "explanation": "Rearranging the addition rule lets us find the overlap from the three quantities we are given.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given values",
          "workingLatex": "P(A\\cap B) = 0.4 + 0.5 - 0.65",
          "explanation": "We insert the two individual probabilities and the union.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the overlap",
          "workingLatex": "P(A\\cap B) = 0.25",
          "explanation": "Adding $0.4$ and $0.5$ gives $0.9$, and subtracting $0.65$ leaves $0.25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the condition for independence",
          "workingLatex": "A, B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "To test independence we compare the actual overlap with the product of the individual probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the product of the probabilities",
          "workingLatex": "P(A)\\,P(B) = 0.4\\times 0.5 = 0.2",
          "explanation": "This is the overlap the events would have if they were independent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compare the two values",
          "workingLatex": "0.25 \\neq 0.2",
          "explanation": "The true overlap $0.25$ does not equal the product $0.2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the independence conclusion",
          "workingLatex": "A, B \\text{ are not independent}",
          "explanation": "Because the condition fails, the events are dependent.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write the formula for the first conditional probability",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "We compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and evaluate",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.25}{0.5} = 0.5",
          "explanation": "Dividing the overlap $0.25$ by $P(B) = 0.5$ gives $0.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the formula for the second conditional probability",
          "workingLatex": "P(B\\mid A) = \\dfrac{P(A\\cap B)}{P(A)}",
          "explanation": "Now we condition on $A$ instead, comparing the same overlap with the whole of $A$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute and evaluate",
          "workingLatex": "P(B\\mid A) = \\dfrac{0.25}{0.4} = 0.625",
          "explanation": "Dividing the overlap $0.25$ by $P(A) = 0.4$ gives $0.625$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the results are consistent with dependence",
          "workingLatex": "P(A\\mid B) = 0.5 \\neq 0.4 = P(A)",
          "explanation": "Since $P(A\\mid B)$ differs from $P(A)$, knowing $B$ changes the chance of $A$, confirming the events are dependent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the answers",
          "workingLatex": "P(A\\cap B) = 0.25, \\ P(A\\mid B) = 0.5, \\ P(B\\mid A) = 0.625",
          "explanation": "We collect the overlap and the two conditional probabilities as the final results.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\cap B) = 0.25$; $A$ and $B$ are not independent since $0.25 \\neq P(A)\\,P(B) = 0.2$; and $P(A\\mid B) = 0.5$, $P(B\\mid A) = 0.625$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["independence", "cards", "conditional probability"],
    "questionText": "A single card is drawn at random from a standard pack of $52$ playing cards. Let $A$ be the event that the card is a heart and let $B$ be the event that the card is a King. Find $P(A)$, $P(B)$ and $P(A\\cap B)$, show that $A$ and $B$ are independent, and hence find $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the probability of drawing a heart",
          "workingLatex": "P(A) = \\dfrac{13}{52} = \\dfrac{1}{4}",
          "explanation": "There are $13$ hearts among the $52$ equally likely cards, which simplifies to one quarter.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of drawing a King",
          "workingLatex": "P(B) = \\dfrac{4}{52} = \\dfrac{1}{13}",
          "explanation": "There are $4$ Kings among the $52$ cards, which simplifies to one thirteenth.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the outcome in both events",
          "workingLatex": "A\\cap B = \\{\\text{King of hearts}\\}",
          "explanation": "A card that is both a heart and a King is exactly the King of hearts, a single card.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the probability of the overlap",
          "workingLatex": "P(A\\cap B) = \\dfrac{1}{52}",
          "explanation": "Only one of the $52$ cards is the King of hearts.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the condition for independence",
          "workingLatex": "A, B \\text{ independent} \\iff P(A\\cap B) = P(A)\\,P(B)",
          "explanation": "We test whether the overlap equals the product of the separate probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the product of the probabilities",
          "workingLatex": "P(A)\\,P(B) = \\dfrac{1}{4}\\times\\dfrac{1}{13} = \\dfrac{1}{52}",
          "explanation": "Multiplying the two probabilities gives one fifty-second.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the overlap with the product",
          "workingLatex": "P(A\\cap B) = \\dfrac{1}{52} = P(A)\\,P(B)",
          "explanation": "The actual overlap equals the product exactly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State that the events are independent",
          "workingLatex": "A, B \\text{ are independent}",
          "explanation": "Because the condition holds, the events are independent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "We compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values",
          "workingLatex": "P(A\\mid B) = \\dfrac{1/52}{1/13}",
          "explanation": "The overlap is $\\tfrac{1}{52}$ and the probability of a King is $\\tfrac{1}{13}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the fraction",
          "workingLatex": "P(A\\mid B) = \\dfrac{1}{52}\\times\\dfrac{13}{1} = \\dfrac{1}{4}",
          "explanation": "Dividing by $\\tfrac{1}{13}$ is the same as multiplying by $13$, giving one quarter.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm consistency with independence",
          "workingLatex": "P(A\\mid B) = \\dfrac{1}{4} = P(A)",
          "explanation": "Conditioning on the card being a King does not change the chance it is a heart, exactly as expected for independent events.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the result",
          "workingLatex": "\\text{one suit in each rank} \\Rightarrow \\text{independence}",
          "explanation": "Because every rank contains exactly one heart, knowing the rank tells us nothing about the suit, which is why suit and rank are independent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A) = \\dfrac{1}{4}$, $P(B) = \\dfrac{1}{13}$, $P(A\\cap B) = \\dfrac{1}{52}$; since $P(A\\cap B) = P(A)\\,P(B)$ the events are independent, and $P(A\\mid B) = \\dfrac{1}{4}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["independence", "addition rule", "solve equation"],
    "questionText": "Two events $A$ and $B$ are independent with $P(B) = 0.6$ and $P(A\\cup B) = 0.72$. Let $P(A) = x$. Form an equation in $x$, solve it, and hence find $P(A\\cap B)$ and $P(A\\mid B)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the addition rule",
          "workingLatex": "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "explanation": "This connects the known union to the individual probabilities and the overlap.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use independence to express the overlap",
          "workingLatex": "P(A\\cap B) = P(A)\\,P(B) = 0.6x",
          "explanation": "Since the events are independent, the overlap is the product of the probabilities, and $P(A) = x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the addition rule",
          "workingLatex": "0.72 = x + 0.6 - 0.6x",
          "explanation": "We replace the union with $0.72$, $P(A)$ with $x$, $P(B)$ with $0.6$, and the overlap with $0.6x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Collect the x terms",
          "workingLatex": "x - 0.6x = 0.4x",
          "explanation": "One full $x$ minus $0.6$ of it leaves $0.4x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the equation",
          "workingLatex": "0.72 = 0.6 + 0.4x",
          "explanation": "The equation is now a simple linear equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 0.6 from both sides",
          "workingLatex": "0.12 = 0.4x",
          "explanation": "Removing the constant isolates the term containing $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{0.12}{0.4} = 0.3",
          "explanation": "Dividing by the coefficient $0.4$ gives $x = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the probability of A",
          "workingLatex": "P(A) = 0.3",
          "explanation": "The unknown probability of $A$ is $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the overlap",
          "workingLatex": "P(A\\cap B) = 0.6\\times 0.3 = 0.18",
          "explanation": "Using independence again, we multiply $P(B) = 0.6$ by $P(A) = 0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conditional probability formula",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "We compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute and evaluate",
          "workingLatex": "P(A\\mid B) = \\dfrac{0.18}{0.6} = 0.3",
          "explanation": "Dividing $0.18$ by $0.6$ gives $0.3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm consistency with independence",
          "workingLatex": "P(A\\mid B) = 0.3 = P(A)",
          "explanation": "Conditioning on $B$ leaves the probability of $A$ unchanged, exactly as expected for independent events.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Summarise the answers",
          "workingLatex": "x = 0.3, \\ P(A\\cap B) = 0.18, \\ P(A\\mid B) = 0.3",
          "explanation": "We collect the solved value of $x$, the overlap, and the conditional probability.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = P(A) = 0.3$, $P(A\\cap B) = 0.18$ and $P(A\\mid B) = 0.3$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["independence", "dice", "conditional probability", "contrast"],
    "questionText": "A fair six-sided die is rolled once. Let $A = \\{2,4,6\\}$ (even), $B = \\{4,5,6\\}$ (greater than $3$) and $C = \\{3,6\\}$ (a multiple of $3$). Find $P(A\\mid B)$ and determine whether $A$ and $B$ are independent. Then determine whether $A$ and $C$ are independent, and contrast the two pairs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sample space and the three events",
          "workingLatex": "S = \\{1,2,3,4,5,6\\}, \\ A = \\{2,4,6\\}, \\ B = \\{4,5,6\\}, \\ C = \\{3,6\\}",
          "explanation": "All six outcomes are equally likely, and we list each event as a set so we can count overlaps.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the probability of A",
          "workingLatex": "P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}",
          "explanation": "There are three even scores out of six outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the probability of B",
          "workingLatex": "P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}",
          "explanation": "There are three scores greater than $3$ out of six outcomes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the probability of C",
          "workingLatex": "P(C) = \\dfrac{2}{6} = \\dfrac{1}{3}",
          "explanation": "The multiples of $3$ are $3$ and $6$, giving two outcomes out of six.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the overlap of A and B",
          "workingLatex": "A\\cap B = \\{4,6\\}, \\quad P(A\\cap B) = \\dfrac{2}{6} = \\dfrac{1}{3}",
          "explanation": "The scores that are both even and greater than $3$ are $4$ and $6$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the conditional probability formula for A given B",
          "workingLatex": "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "explanation": "We compare the overlap with the whole of the condition $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the conditional probability",
          "workingLatex": "P(A\\mid B) = \\dfrac{1/3}{1/2} = \\dfrac{2}{3}",
          "explanation": "Dividing $\\tfrac{1}{3}$ by $\\tfrac{1}{2}$ gives $\\tfrac{2}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test A and B for independence",
          "workingLatex": "P(A)\\,P(B) = \\dfrac{1}{2}\\times\\dfrac{1}{2} = \\dfrac{1}{4}",
          "explanation": "For independence the overlap would have to equal this product.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Conclude for the pair A and B",
          "workingLatex": "\\dfrac{1}{3} \\neq \\dfrac{1}{4} \\Rightarrow A, B \\text{ dependent}",
          "explanation": "The overlap $\\tfrac{1}{3}$ does not equal the product $\\tfrac{1}{4}$, so $A$ and $B$ are dependent, which matches $P(A\\mid B) = \\tfrac{2}{3} \\neq P(A)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the overlap of A and C",
          "workingLatex": "A\\cap C = \\{6\\}, \\quad P(A\\cap C) = \\dfrac{1}{6}",
          "explanation": "The only score that is both even and a multiple of $3$ is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the product for A and C",
          "workingLatex": "P(A)\\,P(C) = \\dfrac{1}{2}\\times\\dfrac{1}{3} = \\dfrac{1}{6}",
          "explanation": "This is the overlap the events would have if they were independent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Conclude for the pair A and C",
          "workingLatex": "\\dfrac{1}{6} = \\dfrac{1}{6} \\Rightarrow A, C \\text{ independent}",
          "explanation": "The overlap equals the product, so $A$ and $C$ are independent.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Contrast the two pairs",
          "workingLatex": "A, B \\text{ dependent}; \\quad A, C \\text{ independent}",
          "explanation": "Even though all three events come from the same die, $A$ and $B$ influence each other while $A$ and $C$ do not; independence depends on the actual overlap, not on the events looking similar.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(A\\mid B) = \\dfrac{2}{3}$; $A$ and $B$ are dependent since $P(A\\cap B) = \\dfrac{1}{3} \\neq \\dfrac{1}{4}$, but $A$ and $C$ are independent since $P(A\\cap C) = \\dfrac{1}{6} = P(A)\\,P(C)$."
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["two-way table", "conditional probability", "independence"],
    "questionText": "In a survey of $100$ people, each was asked whether they own a smartphone and whether they use a certain app. Let $S$ be the event that a person owns a smartphone and $D$ the event that they use the app. The results were: $48$ people are in both $S$ and $D$; $12$ are in $S$ but not $D$; $8$ are in $D$ but not $S$; and $32$ are in neither. Find $P(D\\mid S)$, compare it with $P(D)$ to decide whether $S$ and $D$ are independent, and find $P(S\\mid D)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Organise the four categories from the survey",
          "workingLatex": "48 \\text{ both}, \\ 12 \\ (S \\text{ only}), \\ 8 \\ (D \\text{ only}), \\ 32 \\text{ neither}",
          "explanation": "Setting the counts out clearly lets us build the totals we need for each probability.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the total who own a smartphone",
          "workingLatex": "n(S) = 48 + 12 = 60",
          "explanation": "Everyone in $S$ either uses the app or does not, so we add those two counts.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the total who use the app",
          "workingLatex": "n(D) = 48 + 8 = 56",
          "explanation": "Everyone in $D$ either owns a smartphone or does not, so we add those two counts.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the conditional probability formula for D given S",
          "workingLatex": "P(D\\mid S) = \\dfrac{n(D\\cap S)}{n(S)}",
          "explanation": "Given that a person owns a smartphone, we restrict to the $60$ smartphone owners and see how many use the app.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the counts",
          "workingLatex": "P(D\\mid S) = \\dfrac{48}{60}",
          "explanation": "Of the $60$ smartphone owners, $48$ use the app.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "P(D\\mid S) = \\dfrac{4}{5}",
          "explanation": "Dividing numerator and denominator by $12$ reduces $\\tfrac{48}{60}$ to $\\tfrac{4}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the unconditional probability of using the app",
          "workingLatex": "P(D) = \\dfrac{56}{100} = 0.56",
          "explanation": "Across all $100$ people, $56$ use the app.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare the conditional and unconditional probabilities",
          "workingLatex": "P(D\\mid S) = \\dfrac{4}{5} = 0.8 \\neq 0.56 = P(D)",
          "explanation": "If the events were independent these two would be equal; here $0.8$ is much larger than $0.56$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the independence conclusion",
          "workingLatex": "S, D \\text{ are not independent}",
          "explanation": "Because knowing someone owns a smartphone raises the chance they use the app, the events are dependent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the conditional probability formula for S given D",
          "workingLatex": "P(S\\mid D) = \\dfrac{n(S\\cap D)}{n(D)}",
          "explanation": "Now we restrict to the $56$ app users and see how many own a smartphone.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the counts",
          "workingLatex": "P(S\\mid D) = \\dfrac{48}{56}",
          "explanation": "Of the $56$ app users, $48$ own a smartphone.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the fraction",
          "workingLatex": "P(S\\mid D) = \\dfrac{6}{7}",
          "explanation": "Dividing numerator and denominator by $8$ reduces $\\tfrac{48}{56}$ to $\\tfrac{6}{7}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the two results",
          "workingLatex": "P(D\\mid S) = \\dfrac{4}{5}, \\quad P(S\\mid D) = \\dfrac{6}{7}",
          "explanation": "Smartphone owners are very likely to use the app, and app users are even more likely to own a smartphone; the two events reinforce each other, confirming dependence.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(D\\mid S) = \\dfrac{4}{5}$, which differs from $P(D) = 0.56$, so $S$ and $D$ are not independent; and $P(S\\mid D) = \\dfrac{6}{7}$"
    }
  },
  {
    "id": "al.y2.stats.conditional-probability.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Statistics",
    "subtopic": "Conditional probability",
    "subtopicId": "al.y2.stats.conditional-probability",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["total probability", "Bayes", "conditional probability"],
    "questionText": "A factory has three machines. Machine $A$ makes $50\\%$ of all items, machine $B$ makes $30\\%$ and machine $C$ makes $20\\%$. Of the items made by $A$, $2\\%$ are faulty; for $B$ the figure is $4\\%$; and for $C$ it is $5\\%$. An item is chosen at random and $F$ is the event that it is faulty. Find $P(F)$, and given that an item is faulty, find the probability it was made by each of the three machines.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the two-stage structure of the problem",
          "workingLatex": "P(A) = 0.5, \\ P(B) = 0.3, \\ P(C) = 0.2",
          "explanation": "First a machine is chosen according to its share of production, then the item is faulty or not; this is a total-probability situation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the law of total probability for a faulty item",
          "workingLatex": "P(F) = P(A)P(F\\mid A) + P(B)P(F\\mid B) + P(C)P(F\\mid C)",
          "explanation": "A faulty item can come from any of the three machines, so we add the contribution from each branch.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute machine A's contribution",
          "workingLatex": "P(A)P(F\\mid A) = 0.5\\times 0.02 = 0.01",
          "explanation": "Half the items come from $A$ and $2\\%$ of those are faulty.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute machine B's contribution",
          "workingLatex": "P(B)P(F\\mid B) = 0.3\\times 0.04 = 0.012",
          "explanation": "Thirty percent of items come from $B$ and $4\\%$ of those are faulty.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute machine C's contribution",
          "workingLatex": "P(C)P(F\\mid C) = 0.2\\times 0.05 = 0.01",
          "explanation": "Twenty percent of items come from $C$ and $5\\%$ of those are faulty.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the contributions to find the probability of a fault",
          "workingLatex": "P(F) = 0.01 + 0.012 + 0.01 = 0.032",
          "explanation": "Summing the three branch probabilities gives the overall chance that a random item is faulty.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the conditional probability formula for machine A given a fault",
          "workingLatex": "P(A\\mid F) = \\dfrac{P(A)P(F\\mid A)}{P(F)}",
          "explanation": "Given that an item is faulty, we compare $A$'s faulty contribution with all faulty items.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the probability it came from A",
          "workingLatex": "P(A\\mid F) = \\dfrac{0.01}{0.032} = \\dfrac{5}{16}",
          "explanation": "Dividing $0.01$ by $0.032$ and simplifying gives $\\tfrac{5}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the probability it came from B",
          "workingLatex": "P(B\\mid F) = \\dfrac{0.012}{0.032} = \\dfrac{3}{8}",
          "explanation": "Dividing $0.012$ by $0.032$ and simplifying gives $\\tfrac{3}{8}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the probability it came from C",
          "workingLatex": "P(C\\mid F) = \\dfrac{0.01}{0.032} = \\dfrac{5}{16}",
          "explanation": "Dividing $0.01$ by $0.032$ and simplifying gives $\\tfrac{5}{16}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the three results over a common denominator",
          "workingLatex": "\\dfrac{5}{16} + \\dfrac{3}{8} + \\dfrac{5}{16} = \\dfrac{5}{16} + \\dfrac{6}{16} + \\dfrac{5}{16}",
          "explanation": "Rewriting $\\tfrac{3}{8}$ as $\\tfrac{6}{16}$ lets us add the three conditional probabilities.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check that the probabilities sum to one",
          "workingLatex": "\\dfrac{5 + 6 + 5}{16} = \\dfrac{16}{16} = 1",
          "explanation": "A faulty item must have come from exactly one machine, so the three conditional probabilities should add to $1$, which they do.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the results",
          "workingLatex": "P(B\\mid F) = \\dfrac{3}{8} > \\dfrac{5}{16} = P(A\\mid F) = P(C\\mid F)",
          "explanation": "Although $A$ makes the most items, its low fault rate means a faulty item is most likely to have come from $B$, whose higher fault rate outweighs its smaller share.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P(F) = 0.032$, $P(A\\mid F) = \\dfrac{5}{16}$, $P(B\\mid F) = \\dfrac{3}{8}$ and $P(C\\mid F) = \\dfrac{5}{16}$"
    }
  },
];
