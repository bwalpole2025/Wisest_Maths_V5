import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.stats.sampling.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["population", "sample", "definitions", "identify"],
  "questionText": "A supermarket has $8000$ loyalty-card customers. The manager asks $250$ of them to complete a survey about a new product. Identify (a) the population and (b) the sample in this study.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what a population is.",
        "workingLatex": "\\text{Population} = \\text{the whole group of interest}",
        "explanation": "In statistics the population is every member of the group you actually want to draw conclusions about, not just the people you speak to.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the whole group here.",
        "workingLatex": "\\text{all } 8000 \\text{ loyalty-card customers}",
        "explanation": "The manager wants to know about the views of all the loyalty-card customers, so they are the group of interest.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the population.",
        "workingLatex": "\\text{Population} = 8000 \\text{ loyalty-card customers}",
        "explanation": "This is the complete collection the study is really about.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall what a sample is.",
        "workingLatex": "\\text{Sample} = \\text{the part actually studied}",
        "explanation": "A sample is the subset of the population that is actually observed or questioned.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Identify the subset here.",
        "workingLatex": "\\text{the } 250 \\text{ surveyed customers}",
        "explanation": "Only $250$ of the $8000$ are actually asked, so these form the sample.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the sample.",
        "workingLatex": "\\text{Sample} = 250 \\text{ customers}",
        "explanation": "The manager will use the responses of these $250$ to draw conclusions about all $8000$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State both answers.",
        "workingLatex": "\\text{(a) } 8000 \\text{ customers}, \\ \\text{(b) } 250 \\text{ customers}",
        "explanation": "The sample is drawn from the population, so it is always the smaller group.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) The population is all $8000$ loyalty-card customers. (b) The sample is the $250$ customers surveyed."
  }
},
{
  "id": "al.y1.stats.sampling.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["census", "definition", "example"],
  "questionText": "Explain what is meant by a census, and give one example of a situation where a census is used.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the key idea of a census.",
        "workingLatex": "\\text{Census} = \\text{observe every member}",
        "explanation": "A census collects information from every single member of the population, leaving nobody out.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Contrast with a sample.",
        "workingLatex": "\\text{census: all} \\quad vs \\quad \\text{sample: some}",
        "explanation": "This is the defining difference: a census looks at the whole population, whereas a sample looks at only a part.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the consequence for accuracy.",
        "workingLatex": "\\text{complete, unbiased information}",
        "explanation": "Because nobody is left out, a census gives a fully accurate picture of the population with no sampling error.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Choose a real example.",
        "workingLatex": "\\text{UK national census}",
        "explanation": "The government census, carried out every ten years, aims to record information about every household in the country.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give the reason it is a census.",
        "workingLatex": "\\text{every household included}",
        "explanation": "Since every household is required to respond, the whole population is covered — that is what makes it a census.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note a smaller everyday example.",
        "workingLatex": "\\text{a teacher's class register}",
        "explanation": "Taking a register records every pupil in the class, so it is a census of that small population.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the full answer.",
        "workingLatex": "\\text{census} = \\text{whole population; e.g. UK census}",
        "explanation": "A census observes the entire population; the national census is a clear real-world example.",
        "diagram": null
      }
    ],
    "finalAnswer": "A census is a survey of every member of the population. Example: the UK national census, which records information about every household."
  }
},
{
  "id": "al.y1.stats.sampling.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["sampling-units", "sampling-frame", "identify"],
  "questionText": "A researcher studies the $1500$ trees in a forest, using a numbered list of all the trees. State (a) the sampling units and (b) the sampling frame.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the meaning of a sampling unit.",
        "workingLatex": "\\text{sampling unit} = \\text{one member that can be sampled}",
        "explanation": "A sampling unit is a single individual of the population that could be selected for the sample.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the units in this context.",
        "workingLatex": "\\text{each individual tree}",
        "explanation": "The study is about trees, so each single tree is one thing that could be chosen.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the sampling units.",
        "workingLatex": "\\text{sampling units} = \\text{the individual trees}",
        "explanation": "Every one of the $1500$ trees is a sampling unit.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the meaning of a sampling frame.",
        "workingLatex": "\\text{sampling frame} = \\text{list of all units}",
        "explanation": "A sampling frame is a complete list (or numbering) of every sampling unit, from which the sample is chosen.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Identify the frame here.",
        "workingLatex": "\\text{the numbered list of } 1500 \\text{ trees}",
        "explanation": "The numbered list names every tree, so it is exactly the sampling frame.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State both answers.",
        "workingLatex": "\\text{(a) trees}, \\ \\text{(b) numbered list of trees}",
        "explanation": "The units are the individual trees; the frame is the list that lets us identify and select them.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) The sampling units are the individual trees. (b) The sampling frame is the numbered list of all $1500$ trees."
  }
},
{
  "id": "al.y1.stats.sampling.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["census", "advantages", "disadvantages", "compare"],
  "questionText": "Give two advantages and two disadvantages of using a census rather than a sample.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what a census does.",
        "workingLatex": "\\text{census} = \\text{every member of the population}",
        "explanation": "Keeping in mind that a census covers everyone helps us reason about its strengths and weaknesses.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: fully accurate}",
        "explanation": "Because every member is counted, the result is completely accurate with no sampling error.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the first advantage.",
        "workingLatex": "\\text{no sampling error}",
        "explanation": "There is no risk of an unrepresentative sample, since nobody is left out of the count.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: every subgroup represented}",
        "explanation": "Every part of the population is included, so no group can accidentally be missed.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: time-consuming and costly}",
        "explanation": "Observing every member takes a great deal of time and money, especially for large populations.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the first disadvantage.",
        "workingLatex": "\\text{large populations} \\Rightarrow \\text{high cost}",
        "explanation": "For millions of people the effort of reaching everyone becomes very expensive.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: hard to process}",
        "explanation": "The huge amount of data is difficult and slow to organise, and may be out of date by the time it is analysed.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the trade-off.",
        "workingLatex": "\\text{accuracy} \\ vs \\ \\text{cost and effort}",
        "explanation": "A census buys complete accuracy at the price of much greater time, cost and effort than a sample.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the four points clearly.",
        "workingLatex": "+\\text{accurate}, +\\text{all included}; \\ -\\text{costly}, -\\text{slow to process}",
        "explanation": "Two advantages (accuracy, full coverage) are balanced against two disadvantages (cost/time, difficult processing).",
        "diagram": null
      }
    ],
    "finalAnswer": "Advantages: completely accurate (no sampling error); every member/subgroup included. Disadvantages: time-consuming and expensive; large amount of data is hard to process and may be out of date."
  }
},
{
  "id": "al.y1.stats.sampling.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["sample", "advantages", "disadvantages", "compare"],
  "questionText": "Give two advantages and two disadvantages of using a sample rather than a census.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what a sample is.",
        "workingLatex": "\\text{sample} = \\text{part of the population}",
        "explanation": "A sample studies only some members, then uses them to estimate facts about the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: cheaper and quicker}",
        "explanation": "Studying fewer members costs less money and takes less time than reaching everyone.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: less data to process}",
        "explanation": "With fewer responses the data is easier and faster to collect and analyse.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add a further benefit where relevant.",
        "workingLatex": "\\text{allows destructive testing}",
        "explanation": "If testing destroys items (like fireworks), a sample is the only sensible option, since a census would destroy everything.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: may be unrepresentative}",
        "explanation": "A sample might not reflect the whole population well, leading to biased or misleading conclusions.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the first disadvantage.",
        "workingLatex": "\\text{sampling error possible}",
        "explanation": "Different samples give different results, so there is always some uncertainty (sampling error).",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: natural variability}",
        "explanation": "A small sample can be strongly affected by a few unusual members, distorting the estimate.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the trade-off.",
        "workingLatex": "\\text{cheap and fast} \\ vs \\ \\text{some uncertainty}",
        "explanation": "A sample saves time and money but at the cost of some uncertainty about the population.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the four points clearly.",
        "workingLatex": "+\\text{cheap}, +\\text{fast}; \\ -\\text{may be biased}, -\\text{sampling error}",
        "explanation": "Two advantages (cost, speed) balance against two disadvantages (possible bias, sampling error).",
        "diagram": null
      }
    ],
    "finalAnswer": "Advantages: cheaper and quicker; less data to collect and process. Disadvantages: the sample may not represent the population (bias); there is sampling error/uncertainty."
  }
},
{
  "id": "al.y1.stats.sampling.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["destructive-testing", "census-inappropriate", "sample", "reasoning"],
  "questionText": "A company manufactures fireworks and wants to estimate the proportion that fail to ignite. Explain why the company should use a sample rather than a census.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe how a firework is tested.",
        "workingLatex": "\\text{test} = \\text{set the firework off}",
        "explanation": "To find out whether a firework ignites, you have to try to light it — the test uses up the firework.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State what testing does to the item.",
        "workingLatex": "\\text{testing destroys the item}",
        "explanation": "Once a firework is set off it cannot be sold, so the test is destructive.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Consider what a census would require.",
        "workingLatex": "\\text{census} = \\text{test every firework}",
        "explanation": "A census would mean setting off every single firework the company has made.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the consequence of a census.",
        "workingLatex": "\\text{whole stock destroyed}",
        "explanation": "That would destroy the entire stock, leaving nothing to sell — clearly pointless.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Conclude the census is unsuitable.",
        "workingLatex": "\\text{census impossible here}",
        "explanation": "Because it would ruin all the goods, a census cannot sensibly be used for destructive testing.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Describe what a sample does instead.",
        "workingLatex": "\\text{sample} = \\text{test only some}",
        "explanation": "A sample tests just a portion of the fireworks.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the benefit of a sample.",
        "workingLatex": "\\text{rest of the stock preserved}",
        "explanation": "The untested fireworks remain intact and can still be sold.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Explain what the sample gives.",
        "workingLatex": "\\text{estimate of the failure rate}",
        "explanation": "The proportion that fail in the sample gives an estimate of the failure proportion for the whole stock.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the conclusion.",
        "workingLatex": "\\text{use a sample}",
        "explanation": "Because the testing is destructive, only a sample keeps most of the stock while still estimating the failure rate.",
        "diagram": null
      }
    ],
    "finalAnswer": "Testing a firework destroys it, so a census would destroy the entire stock. A sample tests only some fireworks, leaving the rest to sell while still estimating the failure proportion."
  }
},
{
  "id": "al.y1.stats.sampling.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["sampling-frame", "definition", "example"],
  "questionText": "Explain what is meant by a sampling frame, and give an example.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the purpose of a sampling frame.",
        "workingLatex": "\\text{used to choose the sample}",
        "explanation": "Before you can pick a sample you need something that lists everyone you could pick from.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the definition.",
        "workingLatex": "\\text{sampling frame} = \\text{list of all sampling units}",
        "explanation": "A sampling frame is a complete list (often numbered) of every member of the population that could be sampled.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain why it matters.",
        "workingLatex": "\\text{lets each unit be identified}",
        "explanation": "Having every unit listed and numbered lets us select members fairly, for example by random numbers.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Choose an example.",
        "workingLatex": "\\text{a school's register of pupils}",
        "explanation": "A list of all pupils in a school names every possible person to sample, so it is a sampling frame.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give another example.",
        "workingLatex": "\\text{a list of employees / the electoral roll}",
        "explanation": "A company's list of employees, or the electoral roll of voters, are other common sampling frames.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "\\text{frame} = \\text{complete list; e.g. class register}",
        "explanation": "A sampling frame is a complete list of the population's members, such as a class register or list of employees.",
        "diagram": null
      }
    ],
    "finalAnswer": "A sampling frame is a complete list of all the sampling units (members of the population), such as a school register or a list of employees."
  }
},
{
  "id": "al.y1.stats.sampling.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["population", "sample", "sampling-unit", "identify"],
  "questionText": "A factory produces $20\\,000$ tins of soup each day. A quality inspector selects $80$ tins and checks their weight. For this study identify (a) the population, (b) the sample, and (c) a sampling unit.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify what the study is about.",
        "workingLatex": "\\text{interested in the day's tins of soup}",
        "explanation": "The inspector wants to know about the weights of the tins produced that day, so the tins are the focus.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the population.",
        "workingLatex": "\\text{Population} = 20\\,000 \\text{ tins}",
        "explanation": "The whole group of interest is all the tins made that day.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify what is actually checked.",
        "workingLatex": "\\text{only } 80 \\text{ tins checked}",
        "explanation": "The inspector examines just $80$ tins out of the $20\\,000$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the sample.",
        "workingLatex": "\\text{Sample} = 80 \\text{ tins}",
        "explanation": "These $80$ tins are the subset actually observed, so they are the sample.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall what a sampling unit is.",
        "workingLatex": "\\text{sampling unit} = \\text{one member}",
        "explanation": "A sampling unit is a single item that could be selected.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State a sampling unit.",
        "workingLatex": "\\text{one tin of soup}",
        "explanation": "Each individual tin is a sampling unit here.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compare the sizes of population and sample.",
        "workingLatex": "\\dfrac{80}{20\\,000} = 0.004",
        "explanation": "The sample is only $0.4\\%$ of the population, yet it is used to judge the whole day's production.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Distinguish a sampling unit from the sample.",
        "workingLatex": "\\text{unit} = \\text{one tin}, \\ \\text{sample} = 80 \\text{ tins}",
        "explanation": "A sampling unit is a single tin; the sample is the whole collection of $80$ tins chosen.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State all three answers.",
        "workingLatex": "20\\,000 \\text{ tins}; \\ 80 \\text{ tins}; \\ \\text{one tin}",
        "explanation": "Population, sample and sampling unit fit together: the sample of tins is drawn from the population, and each tin is a unit.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Population: all $20\\,000$ tins made that day. (b) Sample: the $80$ tins checked. (c) A sampling unit: a single tin of soup."
  }
},
{
  "id": "al.y1.stats.sampling.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["census", "when-suitable", "small-population", "reasoning"],
  "questionText": "A teacher wants to know the favourite subject of each of the $30$ pupils in her class. Explain why a census is suitable here.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the population size.",
        "workingLatex": "N = 30 \\text{ pupils}",
        "explanation": "The population is small — just the $30$ pupils in the class.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall what a census involves.",
        "workingLatex": "\\text{census} = \\text{ask every pupil}",
        "explanation": "A census would mean asking all $30$ pupils their favourite subject.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Consider the effort needed.",
        "workingLatex": "30 \\text{ is quick to ask}",
        "explanation": "Asking $30$ pupils takes very little time and costs nothing, unlike surveying millions of people.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note the testing is not destructive.",
        "workingLatex": "\\text{asking does no harm}",
        "explanation": "Recording a pupil's answer does not use them up, so there is no reason to avoid asking everyone.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the benefit of a census here.",
        "workingLatex": "\\text{complete, accurate result}",
        "explanation": "Because it is easy to reach everyone, the census gives a fully accurate answer with no sampling error.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the conclusion.",
        "workingLatex": "\\text{small population} \\Rightarrow \\text{census suitable}",
        "explanation": "With such a small, easily reached population, a census is cheap, quick and completely accurate, so it is the sensible choice.",
        "diagram": null
      }
    ],
    "finalAnswer": "The population is small ($30$ pupils) and easy to reach, so a census is quick, cheap and gives a completely accurate result with no sampling error."
  }
},
{
  "id": "al.y1.stats.sampling.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["sampling-frame", "bias", "limitations", "reasoning"],
  "questionText": "A researcher uses last year's list of gym members as the sampling frame for a survey of current members. Explain how this sampling frame could lead to a biased sample.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what the frame should contain.",
        "workingLatex": "\\text{frame should} = \\text{all current members}",
        "explanation": "For an accurate survey the sampling frame should list exactly the people we want to study — the current members.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the frame is out of date.",
        "workingLatex": "\\text{list is from last year}",
        "explanation": "Using last year's list means it may no longer match this year's membership.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify people wrongly included.",
        "workingLatex": "\\text{ex-members still listed}",
        "explanation": "Some people on the old list have since left the gym, yet they could still be selected.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Identify people wrongly excluded.",
        "workingLatex": "\\text{new members missing}",
        "explanation": "People who joined this year are not on last year's list, so they can never be chosen.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain the effect on the sample.",
        "workingLatex": "\\text{frame} \\ne \\text{population}",
        "explanation": "Because the frame does not match the current membership, the sample cannot fully represent current members.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Link this to bias.",
        "workingLatex": "\\text{new members under-represented}",
        "explanation": "New members are systematically left out, so their views are missing — this is a source of bias.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Suggest the effect on conclusions.",
        "workingLatex": "\\text{results may be misleading}",
        "explanation": "If newer members differ from older ones, the survey's conclusions about current members could be distorted.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Suggest how to avoid the bias.",
        "workingLatex": "\\text{use an up-to-date list}",
        "explanation": "Using this year's current membership list as the frame would include all current members and exclude those who have left, removing the bias.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the conclusion.",
        "workingLatex": "\\text{out-of-date frame} \\Rightarrow \\text{bias}",
        "explanation": "An outdated frame includes ex-members and omits new members, producing a biased, unrepresentative sample.",
        "diagram": null
      }
    ],
    "finalAnswer": "The old list is out of date: it includes members who have left and omits members who have joined this year. New members can never be chosen, so they are under-represented, making the sample biased and unrepresentative of current members."
  }
},
{
  "id": "al.y1.stats.sampling.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["simple-random-sampling", "definition"],
  "questionText": "Explain what is meant by simple random sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the type of method.",
        "workingLatex": "\\text{a random sampling method}",
        "explanation": "Simple random sampling is a random method, meaning chance decides who is chosen rather than a person's judgement.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the key property.",
        "workingLatex": "\\text{every member: equal chance}",
        "explanation": "In simple random sampling every member of the population has an equal chance of being selected.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the stronger property.",
        "workingLatex": "\\text{every sample of size } n \\text{ equally likely}",
        "explanation": "More than that, every possible group of size $n$ is equally likely to be the sample chosen.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note what is required.",
        "workingLatex": "\\text{need a sampling frame}",
        "explanation": "To do this you must have a complete numbered list of the population to select from.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State how selection is made.",
        "workingLatex": "\\text{random numbers or lottery}",
        "explanation": "Members are picked using random numbers or a lottery-style draw, so no personal choice is involved.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the definition.",
        "workingLatex": "\\text{SRS: each member equally likely, chosen at random}",
        "explanation": "Simple random sampling gives every member an equal chance and every sample of size $n$ an equal chance, using a random selection from a sampling frame.",
        "diagram": null
      }
    ],
    "finalAnswer": "Simple random sampling is a method in which every member of the population has an equal chance of selection, and every possible sample of size $n$ is equally likely, chosen at random from a sampling frame."
  }
},
{
  "id": "al.y1.stats.sampling.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["simple-random-sampling", "method", "random-numbers", "procedure"],
  "questionText": "Describe how you would use random numbers to take a simple random sample of size $50$ from a population of $800$ people.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Obtain the sampling frame.",
        "workingLatex": "\\text{list all } 800 \\text{ people}",
        "explanation": "First you need a complete list of everyone in the population — the sampling frame.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Number the members.",
        "workingLatex": "001, 002, \\ldots, 800",
        "explanation": "Give each person a unique number, using three digits so that every number has the same length.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Fix the sample size.",
        "workingLatex": "n = 50",
        "explanation": "We want $50$ people, so we will keep selecting until we have $50$ different ones.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Generate random numbers.",
        "workingLatex": "\\text{random 3-digit numbers}",
        "explanation": "Use a random number table or a calculator/computer to produce random three-digit numbers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Match numbers to people.",
        "workingLatex": "\\text{number} \\to \\text{person}",
        "explanation": "Each random number that lies in range identifies the person with that number on the list.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Reject numbers that are out of range.",
        "workingLatex": "> 800 \\Rightarrow \\text{ignore}",
        "explanation": "Numbers above $800$ (and $000$) do not correspond to anyone, so they are discarded.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Reject repeats.",
        "workingLatex": "\\text{already chosen} \\Rightarrow \\text{ignore}",
        "explanation": "If a number comes up that has already been selected, ignore it so nobody is chosen twice.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Continue until the sample is complete.",
        "workingLatex": "\\text{repeat until } 50 \\text{ chosen}",
        "explanation": "Keep reading random numbers until $50$ different people have been selected.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the resulting sample.",
        "workingLatex": "\\text{those } 50 \\text{ people} = \\text{sample}",
        "explanation": "The $50$ people identified form the simple random sample, each chosen purely by chance.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Summarise the method.",
        "workingLatex": "\\text{list} \\to \\text{number} \\to \\text{random select}",
        "explanation": "List and number the population, then use random numbers (ignoring out-of-range values and repeats) until the sample is full.",
        "diagram": null
      }
    ],
    "finalAnswer": "List and number all $800$ people $001$–$800$. Generate random three-digit numbers; each in-range, non-repeated number selects that person. Ignore numbers over $800$ and any repeats, continuing until $50$ different people are chosen."
  }
},
{
  "id": "al.y1.stats.sampling.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["simple-random-sampling", "random-numbers", "worked-selection"],
  "questionText": "A club has $500$ members, numbered $001$ to $500$. A simple random sample of $4$ members is taken using the random numbers: $349, 872, 015, 349, 226, 481$. List the members selected, explaining any numbers you reject.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the valid range.",
        "workingLatex": "001 \\le \\text{number} \\le 500",
        "explanation": "Only numbers from $001$ to $500$ correspond to a member; anything else is rejected.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read the numbers in order.",
        "workingLatex": "349, 872, 015, 349, 226, 481",
        "explanation": "We take each random number in turn and decide whether to accept it.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the first number.",
        "workingLatex": "349 \\le 500 \\Rightarrow \\text{select}",
        "explanation": "$349$ is in range and not yet used, so member $349$ is selected.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the second number.",
        "workingLatex": "872 > 500 \\Rightarrow \\text{reject}",
        "explanation": "$872$ is larger than $500$, so it matches no member and is rejected.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the third number.",
        "workingLatex": "015 \\le 500 \\Rightarrow \\text{select}",
        "explanation": "$015$ is in range and new, so member $015$ is selected.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the fourth number.",
        "workingLatex": "349 \\ \\text{already chosen} \\Rightarrow \\text{reject}",
        "explanation": "$349$ has already been selected, and nobody may be chosen twice, so this repeat is rejected.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the fifth number.",
        "workingLatex": "226 \\le 500 \\Rightarrow \\text{select}",
        "explanation": "$226$ is in range and new, so member $226$ is selected.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the sixth number.",
        "workingLatex": "481 \\le 500 \\Rightarrow \\text{select}",
        "explanation": "$481$ is in range and new, giving the fourth member.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Confirm the sample is complete.",
        "workingLatex": "4 \\text{ members chosen}",
        "explanation": "We now have four different members, so we stop.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "List the selected members.",
        "workingLatex": "\\{349, 015, 226, 481\\}",
        "explanation": "These four are the simple random sample; $872$ was rejected (out of range) and the second $349$ was rejected (repeat).",
        "diagram": null
      }
    ],
    "finalAnswer": "Members $349, 015, 226, 481$. Reject $872$ (out of range) and the repeated $349$ (already chosen)."
  }
},
{
  "id": "al.y1.stats.sampling.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["simple-random-sampling", "advantages"],
  "questionText": "Give two advantages of simple random sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the key feature of SRS.",
        "workingLatex": "\\text{every member equally likely}",
        "explanation": "Because chance alone decides, the method has some clear strengths.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: free from bias}",
        "explanation": "Since every member has an equal chance, no group is favoured, so the method is unbiased.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the first advantage.",
        "workingLatex": "\\text{no personal choice}",
        "explanation": "The selector's opinions cannot influence who is picked, removing a common source of bias.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: simple and cheap}",
        "explanation": "For a small population it is easy and inexpensive to number people and pick random numbers.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add a further strength.",
        "workingLatex": "\\text{easy to understand}",
        "explanation": "The method is straightforward to explain and justify, which adds to its appeal.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the two advantages.",
        "workingLatex": "+\\text{unbiased}, \\ +\\text{simple/cheap}",
        "explanation": "The main advantages are that it is free from bias and that it is simple and cheap for small populations.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is free from bias (every member has an equal chance, no personal choice), and it is simple and cheap to carry out for small populations."
  }
},
{
  "id": "al.y1.stats.sampling.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["simple-random-sampling", "disadvantages"],
  "questionText": "Give two disadvantages of simple random sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what SRS requires.",
        "workingLatex": "\\text{needs a full sampling frame}",
        "explanation": "To number everyone you must first have a complete list of the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: frame needed}",
        "explanation": "A complete, up-to-date list of the population is required, which is not always available.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain when this is a problem.",
        "workingLatex": "\\text{large population} \\Rightarrow \\text{hard}",
        "explanation": "For a very large population, building and numbering a full list is difficult, slow and costly.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: not for large populations}",
        "explanation": "The method is unwieldy for large populations, both to list and to reach the scattered members chosen.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain the reaching problem.",
        "workingLatex": "\\text{chosen members may be spread out}",
        "explanation": "Randomly chosen members could be geographically scattered, making them expensive and slow to contact.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add a further weakness.",
        "workingLatex": "\\text{could still be unrepresentative}",
        "explanation": "By chance a random sample might happen to over-represent one subgroup, though this is not bias.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note it ignores known structure.",
        "workingLatex": "\\text{doesn't use subgroup information}",
        "explanation": "Unlike stratified sampling, it makes no use of known subgroups (such as age or gender), so it misses the chance to guarantee they are represented.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the time and cost.",
        "workingLatex": "\\text{time-consuming to organise}",
        "explanation": "Compiling the frame and contacting the selected members can be slow and expensive.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Summarise the disadvantages.",
        "workingLatex": "-\\text{frame needed}, \\ -\\text{poor for large populations}",
        "explanation": "The two main drawbacks are the need for a full sampling frame and the difficulty of using it for large populations.",
        "diagram": null
      }
    ],
    "finalAnswer": "It requires a complete sampling frame (a full list of the population), and it is impractical for large populations — both to list everyone and to reach the scattered members selected."
  }
},
{
  "id": "al.y1.stats.sampling.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["simple-random-sampling", "lottery-method", "procedure"],
  "questionText": "Describe the 'lottery' method of taking a simple random sample of $5$ pupils from a class of $30$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State that this is a form of SRS.",
        "workingLatex": "\\text{lottery} = \\text{simple random sampling}",
        "explanation": "The lottery method is a hands-on way of giving every pupil an equal chance.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Prepare identical tickets.",
        "workingLatex": "\\text{write each name on an identical slip}",
        "explanation": "Write each of the $30$ pupils' names on slips of paper that are exactly the same size and shape.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Place them in a container.",
        "workingLatex": "\\text{put all slips in a bag/hat}",
        "explanation": "All $30$ slips go into a container so they are together.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Mix thoroughly.",
        "workingLatex": "\\text{shake to mix}",
        "explanation": "Mixing well makes sure the draw is fair and no slip is easier to reach.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Draw without looking.",
        "workingLatex": "\\text{draw } 5 \\text{ slips, no peeking}",
        "explanation": "Remove five slips without looking, so the selection is purely by chance.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify the sample.",
        "workingLatex": "\\text{those } 5 \\text{ pupils} = \\text{sample}",
        "explanation": "The five names drawn form the simple random sample.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Explain why it is fair.",
        "workingLatex": "\\text{identical slips} \\Rightarrow \\text{equal chance}",
        "explanation": "Because the slips are identical and well mixed, every pupil has an equal chance, which is what makes it a simple random sample.",
        "diagram": null
      }
    ],
    "finalAnswer": "Write each pupil's name on an identical slip, place all $30$ in a container, mix well, and draw $5$ slips without looking. Identical, well-mixed slips give every pupil an equal chance."
  }
},
{
  "id": "al.y1.stats.sampling.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["simple-random-sampling", "bias", "reasoning"],
  "questionText": "Explain why simple random sampling is described as being free from bias.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what bias means.",
        "workingLatex": "\\text{bias} = \\text{systematic favouring of some members}",
        "explanation": "Bias means the method tends to over- or under-represent certain members in a consistent way.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the equal-chance property.",
        "workingLatex": "\\text{every member: equal chance}",
        "explanation": "In simple random sampling each member has exactly the same probability of being chosen.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Deduce no member is favoured.",
        "workingLatex": "\\text{no member preferred}",
        "explanation": "Since chances are equal, no individual or group is systematically more likely to appear.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note selection avoids human choice.",
        "workingLatex": "\\text{random numbers, not opinion}",
        "explanation": "Members are picked by random numbers, so the selector's preferences cannot creep in.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine these facts.",
        "workingLatex": "\\text{equal chance} + \\text{no human choice}",
        "explanation": "Equal probabilities and the absence of personal judgement together remove any systematic favouring.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Conclude the method is unbiased.",
        "workingLatex": "\\Rightarrow \\text{free from bias}",
        "explanation": "With nothing tilting the selection, the method is free from bias.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Contrast with a biased method.",
        "workingLatex": "\\text{e.g. asking only friends} \\to \\text{biased}",
        "explanation": "If a selector chose only people they knew, some members could never be picked — that would be biased, which random selection avoids.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Reinforce with the equal-sample property.",
        "workingLatex": "\\text{every sample of size } n \\text{ equally likely}",
        "explanation": "Because all samples of the chosen size are equally likely, there is no built-in tendency toward any particular kind of sample.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Add an important caveat.",
        "workingLatex": "\\text{but could still be unrepresentative by chance}",
        "explanation": "Being unbiased does not guarantee a representative sample; a particular random sample could still happen to be unusual — that is chance variation, not bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "Every member has an equal chance of selection and members are chosen by random numbers, not human judgement, so no member or group is systematically favoured — hence it is free from bias (though an individual sample can still be unrepresentative by chance)."
  }
},
{
  "id": "al.y1.stats.sampling.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["simple-random-sampling", "random-numbers", "worked-selection"],
  "questionText": "A list of $200$ people is numbered $001$ to $200$. A simple random sample of $3$ is taken using the random numbers: $156, 203, 087, 156, 040$. List the people selected, explaining any rejections.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the valid range.",
        "workingLatex": "001 \\le \\text{number} \\le 200",
        "explanation": "Only numbers from $001$ to $200$ correspond to a person on the list.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Check the first number.",
        "workingLatex": "156 \\le 200 \\Rightarrow \\text{select}",
        "explanation": "$156$ is in range and new, so person $156$ is selected.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the second number.",
        "workingLatex": "203 > 200 \\Rightarrow \\text{reject}",
        "explanation": "$203$ exceeds $200$, so it matches no one and is rejected.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the third number.",
        "workingLatex": "087 \\le 200 \\Rightarrow \\text{select}",
        "explanation": "$087$ is in range and new, so person $087$ is selected.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the fourth number.",
        "workingLatex": "156 \\ \\text{already chosen} \\Rightarrow \\text{reject}",
        "explanation": "$156$ has already been selected; repeats are not allowed, so it is rejected.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the fifth number.",
        "workingLatex": "040 \\le 200 \\Rightarrow \\text{select}",
        "explanation": "$040$ is in range and new, giving the third person.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm the sample is complete.",
        "workingLatex": "3 \\text{ people chosen}",
        "explanation": "We now have three different people, so we stop.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "List the selected people.",
        "workingLatex": "\\{156, 087, 040\\}",
        "explanation": "These three form the simple random sample.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the rejections.",
        "workingLatex": "203 \\text{ (out of range)}, \\ 156 \\text{ (repeat)}",
        "explanation": "$203$ was rejected as out of range and the second $156$ as a repeat.",
        "diagram": null
      }
    ],
    "finalAnswer": "People $156, 087, 040$. Reject $203$ (out of range) and the repeated $156$ (already chosen)."
  }
},
{
  "id": "al.y1.stats.sampling.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["simple-random-sampling", "requirement", "sampling-frame"],
  "questionText": "State what must be available before a simple random sample can be taken, and explain why.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the requirement.",
        "workingLatex": "\\text{a sampling frame}",
        "explanation": "You need a complete list of the whole population — a sampling frame — before you can begin.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall how SRS selects.",
        "workingLatex": "\\text{select by number}",
        "explanation": "Simple random sampling works by numbering members and choosing numbers at random.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain why a list is needed.",
        "workingLatex": "\\text{can't number without a list}",
        "explanation": "You cannot give everyone a unique number unless you already have a complete list of them.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Explain the consequence of no frame.",
        "workingLatex": "\\text{no frame} \\Rightarrow \\text{cannot guarantee equal chances}",
        "explanation": "Without a full list, some members could be left out entirely, so equal chances could not be guaranteed.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give an example where it fails.",
        "workingLatex": "\\text{e.g. no list of all wild birds}",
        "explanation": "For something like all the birds in a country there is no complete list, so simple random sampling is impossible.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "\\text{need a sampling frame}",
        "explanation": "A complete sampling frame is essential, because SRS relies on numbering and randomly selecting from the full list.",
        "diagram": null
      }
    ],
    "finalAnswer": "A complete sampling frame (a full list of the population) is needed, because simple random sampling numbers every member and selects at random — impossible without a complete list."
  }
},
{
  "id": "al.y1.stats.sampling.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["simple-random-sampling", "large-population", "impractical", "reasoning"],
  "questionText": "Explain why simple random sampling is often impractical for a large national survey.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what SRS needs.",
        "workingLatex": "\\text{full frame} + \\text{reach chosen members}",
        "explanation": "Simple random sampling needs a complete list and then requires you to contact whoever is randomly chosen.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Consider building the frame.",
        "workingLatex": "\\text{national population} \\Rightarrow \\text{huge list}",
        "explanation": "For a whole country the list would contain millions of names, which is very hard to compile and keep up to date.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Consider where members are.",
        "workingLatex": "\\text{people spread across the country}",
        "explanation": "The chosen people could live anywhere, scattered over a large area.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Explain the cost of reaching them.",
        "workingLatex": "\\text{scattered} \\Rightarrow \\text{expensive to reach}",
        "explanation": "Travelling to or contacting randomly scattered individuals is slow and costly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Combine the difficulties.",
        "workingLatex": "\\text{huge frame} + \\text{scattered members}",
        "explanation": "Both the size of the list and the spread of the people make the method very demanding.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the consequence.",
        "workingLatex": "\\text{impractical for national surveys}",
        "explanation": "Together these make simple random sampling impractical on a national scale.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the alternative.",
        "workingLatex": "\\text{use systematic / stratified instead}",
        "explanation": "In practice, methods such as systematic or stratified sampling are used because they are easier to organise for large populations.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note a further practical issue.",
        "workingLatex": "\\text{updating the frame is hard}",
        "explanation": "A national list also changes constantly as people are born, die or move, so keeping the frame accurate is a further burden.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the conclusion.",
        "workingLatex": "\\text{large + spread} \\Rightarrow \\text{SRS impractical}",
        "explanation": "A huge sampling frame and geographically scattered members make simple random sampling impractical for large national surveys.",
        "diagram": null
      }
    ],
    "finalAnswer": "A national survey would need a huge, complete list (hard to compile) and would select people scattered across the country who are expensive and slow to reach, so simple random sampling is impractical; systematic or stratified sampling is used instead."
  }
},
{
  "id": "al.y1.stats.sampling.q021",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["systematic-sampling", "definition"],
  "questionText": "Explain what is meant by systematic sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the type of method.",
        "workingLatex": "\\text{select at regular intervals}",
        "explanation": "Systematic sampling chooses members from a list at fixed, regular intervals rather than purely at random.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Introduce the interval.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "The interval $k$ is the population size $N$ divided by the required sample size $n$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Describe the random start.",
        "workingLatex": "\\text{random start between } 1 \\text{ and } k",
        "explanation": "You pick a random starting point among the first $k$ members to keep an element of chance.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Describe the rest of the selection.",
        "workingLatex": "\\text{then every } k\\text{th member}",
        "explanation": "After the start, you select every $k$th member down the list.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give a quick example.",
        "workingLatex": "k = 10 \\Rightarrow 3, 13, 23, \\ldots",
        "explanation": "For example, if $k = 10$ and the start is $3$, you take members $3, 13, 23,$ and so on.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the definition.",
        "workingLatex": "\\text{systematic: every } k\\text{th from a random start}",
        "explanation": "Systematic sampling selects every $k$th member from an ordered list, beginning at a randomly chosen start point.",
        "diagram": null
      }
    ],
    "finalAnswer": "Systematic sampling selects members from an ordered list at regular intervals of $k = \\tfrac{N}{n}$, starting from a randomly chosen point among the first $k$ members and then taking every $k$th member."
  }
},
{
  "id": "al.y1.stats.sampling.q022",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "interval", "method"],
  "questionText": "Describe how to take a systematic sample of $50$ people from a population of $800$, stating the interval used.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the interval formula.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "The sampling interval is the population size divided by the sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the values.",
        "workingLatex": "N = 800, \\ n = 50",
        "explanation": "There are $800$ people and we want a sample of $50$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute.",
        "workingLatex": "k = \\dfrac{800}{50}",
        "explanation": "Insert the two values into the interval formula.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the interval.",
        "workingLatex": "k = 16",
        "explanation": "So we will take every $16$th person from the list.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "List the population in order.",
        "workingLatex": "\\text{number people } 1 \\text{ to } 800",
        "explanation": "The people must be in some fixed order so 'every 16th' is well defined.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Choose a random start.",
        "workingLatex": "\\text{random start between } 1 \\text{ and } 16",
        "explanation": "Pick a random number from $1$ to $16$ to decide the first person; this adds the element of chance.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Illustrate with a start value.",
        "workingLatex": "\\text{say start} = 5",
        "explanation": "Suppose the random start is $5$; then the first person selected is number $5$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Select every kth person after.",
        "workingLatex": "5, 21, 37, 53, \\ldots",
        "explanation": "Add $16$ each time: $5, 21, 37, 53,$ and so on.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Continue to the required size.",
        "workingLatex": "\\text{until } 50 \\text{ chosen}",
        "explanation": "Keep going down the list until all $50$ people are selected.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the method.",
        "workingLatex": "k = 16, \\ \\text{every } 16\\text{th from a random start}",
        "explanation": "Use interval $16$: pick a random start in $1$–$16$, then take every $16$th person until $50$ are chosen.",
        "diagram": null
      }
    ],
    "finalAnswer": "Interval $k = \\tfrac{800}{50} = 16$. Number the people $1$–$800$, pick a random start between $1$ and $16$, then select every $16$th person until $50$ are chosen."
  }
},
{
  "id": "al.y1.stats.sampling.q023",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "interval", "calculation"],
  "questionText": "A systematic sample of $40$ is to be taken from a population of $1200$. Find the sampling interval and explain how the starting point is chosen.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the interval formula.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "The interval is population size divided by sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the values.",
        "workingLatex": "N = 1200, \\ n = 40",
        "explanation": "The population is $1200$ and the sample size is $40$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute.",
        "workingLatex": "k = \\dfrac{1200}{40}",
        "explanation": "Insert the values.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the interval.",
        "workingLatex": "k = 30",
        "explanation": "Every $30$th member will be selected.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State how the start is chosen.",
        "workingLatex": "\\text{random number from } 1 \\text{ to } 30",
        "explanation": "Choose the starting member by picking a random number between $1$ and $30$ (that is, between $1$ and $k$).",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain why 1 to k.",
        "workingLatex": "\\text{so every member can be reached}",
        "explanation": "Starting anywhere in the first interval guarantees the selections spread evenly across the whole list.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the continuation.",
        "workingLatex": "\\text{then add } 30 \\text{ repeatedly}",
        "explanation": "From the random start, add $30$ each time to pick the remaining members.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the total selected.",
        "workingLatex": "40 \\text{ members in total}",
        "explanation": "Doing this across the $1200$ names produces exactly $40$ members.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "k = 30, \\ \\text{start random in } 1\\text{–}30",
        "explanation": "The interval is $30$ and the start is a random number from $1$ to $30$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Interval $k = \\tfrac{1200}{40} = 30$. Choose the starting member by picking a random number between $1$ and $30$, then select every $30$th member."
  }
},
{
  "id": "al.y1.stats.sampling.q024",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "worked-selection", "interval"],
  "questionText": "A systematic sample of $20$ is taken from $500$ members. The random starting number is $7$. Find the interval and list the first four members selected.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the interval.",
        "workingLatex": "k = \\dfrac{500}{20}",
        "explanation": "The interval is population size divided by sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Evaluate the interval.",
        "workingLatex": "k = 25",
        "explanation": "So we select every $25$th member.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the start is valid.",
        "workingLatex": "1 \\le 7 \\le 25",
        "explanation": "The start $7$ lies in the first interval $1$–$25$, so it is a valid starting point.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Select the first member.",
        "workingLatex": "7",
        "explanation": "The first person chosen is number $7$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Select the second member.",
        "workingLatex": "7 + 25 = 32",
        "explanation": "Add the interval to get the next member.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Select the third member.",
        "workingLatex": "32 + 25 = 57",
        "explanation": "Add $25$ again.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Select the fourth member.",
        "workingLatex": "57 + 25 = 82",
        "explanation": "Add $25$ once more.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the pattern.",
        "workingLatex": "7, 32, 57, 82, \\ldots",
        "explanation": "The selection continues by adding $25$ each time until $20$ members are chosen.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "k = 25; \\ 7, 32, 57, 82",
        "explanation": "With interval $25$ and start $7$, the first four members are $7, 32, 57$ and $82$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Interval $k = 25$; first four members: $7, 32, 57, 82$."
  }
},
{
  "id": "al.y1.stats.sampling.q025",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["systematic-sampling", "advantages"],
  "questionText": "Give two advantages of systematic sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how systematic sampling works.",
        "workingLatex": "\\text{every } k\\text{th member}",
        "explanation": "Because it just steps through a list at a fixed interval, it has some practical strengths.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: simple and quick}",
        "explanation": "It is easy and fast to carry out — you only need one random start, then count in steps.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the first advantage.",
        "workingLatex": "\\text{one random number needed}",
        "explanation": "Unlike simple random sampling, you do not need a fresh random number for every selection.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: even coverage}",
        "explanation": "The sample is spread evenly through the whole population, so all parts of the list are represented.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note a practical benefit.",
        "workingLatex": "\\text{good for production lines}",
        "explanation": "It works well for items coming off a production line, where you can simply take every $k$th item.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the two advantages.",
        "workingLatex": "+\\text{quick}, \\ +\\text{even spread}",
        "explanation": "The main advantages are that it is simple and quick and that it spreads the sample evenly across the population.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is simple and quick (only one random start needed), and it spreads the sample evenly through the whole population, which is convenient for ordered lists or production lines."
  }
},
{
  "id": "al.y1.stats.sampling.q026",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["systematic-sampling", "disadvantages", "periodic-bias"],
  "questionText": "Give two disadvantages of systematic sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what it needs.",
        "workingLatex": "\\text{needs an ordered list}",
        "explanation": "Systematic sampling still requires a sampling frame arranged in some order.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: only quasi-random}",
        "explanation": "Only the start is random; once it is chosen, the rest of the sample is fixed, so not every sample is equally likely.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the consequence.",
        "workingLatex": "\\text{not every sample possible}",
        "explanation": "Many groups of members can never occur together, so it is not a true simple random sample.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: periodic bias}",
        "explanation": "If the list has a repeating pattern whose period matches the interval, the sample can become badly biased.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give an example of periodic bias.",
        "workingLatex": "\\text{every } 10\\text{th house a corner house}",
        "explanation": "If every $10$th house is a corner house and $k = 10$, the sample could be all corner houses.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the effect.",
        "workingLatex": "\\text{one type over-represented}",
        "explanation": "Such a coincidence over-represents one kind of member and under-represents the rest.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the requirement to avoid it.",
        "workingLatex": "\\text{check the list for patterns}",
        "explanation": "You should make sure the list has no cyclic pattern matching the interval.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note it still needs a frame.",
        "workingLatex": "\\text{sampling frame required}",
        "explanation": "As with simple random sampling, a full ordered list of the population is needed.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the two disadvantages.",
        "workingLatex": "-\\text{quasi-random}, \\ -\\text{periodic bias risk}",
        "explanation": "The main drawbacks are that it is only quasi-random and that a periodic pattern in the list can cause bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is only quasi-random (once the start is fixed the rest is determined, so not every sample is possible), and if the list has a repeating pattern matching the interval the sample can be badly biased."
  }
},
{
  "id": "al.y1.stats.sampling.q027",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "multi-part", "interval", "advantages-disadvantages"],
  "questionText": "A systematic sample of $80$ is to be taken from a population of $2000$. (a) Find the sampling interval. (b) Explain how the starting member is chosen. (c) If the random start is $11$, list the first four members selected. (d) Give one advantage and one disadvantage of this method.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the interval formula.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "The interval is population size divided by sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the values.",
        "workingLatex": "k = \\dfrac{2000}{80}",
        "explanation": "Here $N = 2000$ and $n = 80$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the interval (part a).",
        "workingLatex": "k = 25",
        "explanation": "Every $25$th member will be selected.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State how the start is chosen (part b).",
        "workingLatex": "\\text{random number } 1 \\text{ to } 25",
        "explanation": "Pick a random number between $1$ and $k = 25$ to fix the first member.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain why the range is 1 to k.",
        "workingLatex": "\\text{ensures even spread}",
        "explanation": "Starting within the first interval means the selections then spread evenly across the whole list.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the given start (part c).",
        "workingLatex": "1 \\le 11 \\le 25",
        "explanation": "The start $11$ is valid because it lies in the first interval.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "First member.",
        "workingLatex": "11",
        "explanation": "The first selected member is number $11$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Second member.",
        "workingLatex": "11 + 25 = 36",
        "explanation": "Add the interval $25$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Third member.",
        "workingLatex": "36 + 25 = 61",
        "explanation": "Add $25$ again.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Fourth member.",
        "workingLatex": "61 + 25 = 86",
        "explanation": "Add $25$ once more.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "List the first four.",
        "workingLatex": "11, 36, 61, 86",
        "explanation": "These are the first four members; the pattern continues to $80$ members.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State an advantage (part d).",
        "workingLatex": "+\\text{quick, even spread}",
        "explanation": "Advantage: it is simple and quick, and spreads the sample evenly through the population.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State a disadvantage (part d).",
        "workingLatex": "-\\text{periodic bias risk}",
        "explanation": "Disadvantage: if the list has a repeating pattern with period $25$, the sample could be biased.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Collect the answers.",
        "workingLatex": "k = 25; \\ 11, 36, 61, 86",
        "explanation": "Interval $25$; start chosen randomly in $1$–$25$; first four members $11, 36, 61, 86$; plus one advantage and one disadvantage.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) $k = 25$. (b) Random number from $1$ to $25$. (c) $11, 36, 61, 86$. (d) Advantage: quick with even spread; Disadvantage: risk of periodic bias."
  }
},
{
  "id": "al.y1.stats.sampling.q028",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["systematic-sampling", "periodic-bias", "reasoning"],
  "questionText": "Explain how a repeating pattern in a list can make systematic sampling biased, using an example.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the selection rule.",
        "workingLatex": "\\text{take every } k\\text{th member}",
        "explanation": "Systematic sampling always picks members a fixed distance $k$ apart in the list.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Introduce a repeating pattern.",
        "workingLatex": "\\text{list repeats every } k \\text{ places}",
        "explanation": "Suppose the list has some feature that recurs every $k$ positions — the same period as the interval.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Give a concrete example.",
        "workingLatex": "k = 4, \\ \\text{every } 4\\text{th flat is top-floor}",
        "explanation": "Imagine a list of flats where every $4$th flat is a top-floor flat, and the interval is also $4$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Follow the selections.",
        "workingLatex": "\\text{start on a top-floor flat}",
        "explanation": "If the random start happens to land on a top-floor flat, every selection after it is also top-floor.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Describe the resulting sample.",
        "workingLatex": "\\text{all top-floor flats}",
        "explanation": "The whole sample would then consist of top-floor flats.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the imbalance.",
        "workingLatex": "\\text{one type over-represented}",
        "explanation": "Top-floor flats are hugely over-represented and all other flats are missed entirely.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Link to bias.",
        "workingLatex": "\\Rightarrow \\text{biased sample}",
        "explanation": "Because one group is systematically favoured, the sample is biased and unrepresentative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Suggest how to avoid it.",
        "workingLatex": "\\text{reorder list / change } k",
        "explanation": "Checking the list for such patterns, reordering it, or choosing a different interval removes the problem.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the conclusion.",
        "workingLatex": "\\text{pattern period} = k \\Rightarrow \\text{bias}",
        "explanation": "When a repeating pattern in the list matches the sampling interval, systematic sampling can select only one kind of member, causing bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "If the list has a feature repeating every $k$ positions (the same as the interval), every selection can land on the same type of member — e.g. all top-floor flats — over-representing that group and biasing the sample."
  }
},
{
  "id": "al.y1.stats.sampling.q029",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "worked-selection", "interval"],
  "questionText": "A systematic sample of $60$ is taken from $960$ employees, with random start $5$. Find the interval and list the first four employees selected.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the interval.",
        "workingLatex": "k = \\dfrac{960}{60}",
        "explanation": "The interval is population divided by sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Evaluate the interval.",
        "workingLatex": "k = 16",
        "explanation": "Every $16$th employee will be chosen.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the start is valid.",
        "workingLatex": "1 \\le 5 \\le 16",
        "explanation": "The start $5$ lies in the first interval, so it is valid.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "First employee.",
        "workingLatex": "5",
        "explanation": "The first selected employee is number $5$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Second employee.",
        "workingLatex": "5 + 16 = 21",
        "explanation": "Add the interval $16$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Third employee.",
        "workingLatex": "21 + 16 = 37",
        "explanation": "Add $16$ again.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Fourth employee.",
        "workingLatex": "37 + 16 = 53",
        "explanation": "Add $16$ once more.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the pattern.",
        "workingLatex": "5, 21, 37, 53, \\ldots",
        "explanation": "The selection continues by adding $16$ each time until $60$ employees are chosen.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "k = 16; \\ 5, 21, 37, 53",
        "explanation": "With interval $16$ and start $5$, the first four employees are $5, 21, 37$ and $53$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Interval $k = 16$; first four employees: $5, 21, 37, 53$."
  }
},
{
  "id": "al.y1.stats.sampling.q030",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "interval", "calculation"],
  "questionText": "A systematic sample of $30$ is to be taken from $300$ items. Find the sampling interval.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the interval formula.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "The interval is the population size divided by the sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the values.",
        "workingLatex": "N = 300, \\ n = 30",
        "explanation": "There are $300$ items and we want $30$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute.",
        "workingLatex": "k = \\dfrac{300}{30}",
        "explanation": "Insert the values into the formula.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate.",
        "workingLatex": "k = 10",
        "explanation": "The interval is $10$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Interpret the interval.",
        "workingLatex": "\\text{every } 10\\text{th item}",
        "explanation": "We select every $10$th item, starting from a random number between $1$ and $10$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "k = 10",
        "explanation": "The sampling interval is $10$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$k = \\tfrac{300}{30} = 10$."
  }
},
{
  "id": "al.y1.stats.sampling.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["systematic-sampling", "nth-term", "calculation"],
  "questionText": "In a systematic sample the interval is $20$ and the random start is $8$. Find the $5$th member selected.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write the pattern of selections.",
        "workingLatex": "\\text{start}, \\ \\text{start} + k, \\ \\text{start} + 2k, \\ldots",
        "explanation": "The selected members form an arithmetic sequence: the start, then add the interval each time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write a formula for the mth member.",
        "workingLatex": "m\\text{th} = \\text{start} + (m - 1)k",
        "explanation": "The first member uses no additions, the second one addition, and so on, so the $m$th uses $(m-1)$ intervals.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify the values.",
        "workingLatex": "\\text{start} = 8, \\ k = 20, \\ m = 5",
        "explanation": "The start is $8$, the interval is $20$, and we want the $5$th member.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute.",
        "workingLatex": "5\\text{th} = 8 + (5 - 1) \\times 20",
        "explanation": "Insert the values into the formula.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the bracket.",
        "workingLatex": "= 8 + 4 \\times 20",
        "explanation": "There are four intervals between the $1$st and $5$th members.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate.",
        "workingLatex": "= 8 + 80 = 88",
        "explanation": "The fifth member selected is number $88$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check by listing.",
        "workingLatex": "8, 28, 48, 68, 88",
        "explanation": "Listing the first five confirms the fifth is $88$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Confirm it lies in the population.",
        "workingLatex": "88 \\text{ is a valid member number}",
        "explanation": "As long as the population has at least $88$ members, this selection is valid.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "88",
        "explanation": "The $5$th member selected is number $88$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The $5$th member is $8 + 4 \\times 20 = 88$."
  }
},
{
  "id": "al.y1.stats.sampling.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["systematic-sampling", "production-line", "compare", "reasoning"],
  "questionText": "A factory inspects items coming off a production line by taking every $50$th item. (a) Explain why systematic sampling is convenient here rather than simple random sampling. (b) Describe a situation in which this systematic sample could become biased.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the setting.",
        "workingLatex": "\\text{items arrive one after another}",
        "explanation": "On a production line items come past the inspector in a continuous stream.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State how systematic sampling works here.",
        "workingLatex": "\\text{take every } 50\\text{th item}",
        "explanation": "The inspector simply counts and picks out every $50$th item as it passes.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain why no full frame is needed in advance.",
        "workingLatex": "\\text{no need to list all items first}",
        "explanation": "You do not need a complete numbered list before starting, which suits an endless stream of items.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Contrast with simple random sampling.",
        "workingLatex": "\\text{SRS needs the whole list}",
        "explanation": "Simple random sampling would require numbering every item first, which is impossible while the line is running.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the convenience conclusion (part a).",
        "workingLatex": "\\text{systematic is quick and practical}",
        "explanation": "So systematic sampling is quick, needs no advance list, and gives an even spread across the production run.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Introduce a possible pattern (part b).",
        "workingLatex": "\\text{a machine fault every } 50 \\text{ items}",
        "explanation": "Suppose a fault in one machine affects, say, every $50$th item produced.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Match the pattern to the interval.",
        "workingLatex": "\\text{period} = 50 = k",
        "explanation": "If that faulty cycle has the same period as the sampling interval, the two line up.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe the biased outcome.",
        "workingLatex": "\\text{always (or never) the faulty item}",
        "explanation": "The inspector could then pick only faulty items (overstating the fault rate) or always miss them (understating it).",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Link to bias.",
        "workingLatex": "\\Rightarrow \\text{biased estimate}",
        "explanation": "Either way the estimate of the fault rate is systematically wrong, so the sample is biased.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Suggest a safeguard.",
        "workingLatex": "\\text{vary the interval / start}",
        "explanation": "Changing the interval or randomising the start avoids the coincidence and removes the bias.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Note the even-coverage benefit.",
        "workingLatex": "\\text{sample spread across the whole run}",
        "explanation": "Taking every $50$th item also spreads the sample evenly over the entire production run, catching items made throughout the shift.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Explain how to detect the risk.",
        "workingLatex": "\\text{check the machine cycle length}",
        "explanation": "In practice you would compare the sampling interval with any known repeating cycle in the machinery to spot a possible clash.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the conclusion.",
        "workingLatex": "\\text{convenient, but watch for periodicity}",
        "explanation": "Systematic sampling is convenient on a production line, but bias arises if a periodic fault matches the sampling interval.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Items arrive in a stream, so taking every $50$th is quick and needs no advance list, unlike SRS which would require numbering every item first. (b) If a machine fault recurs every $50$ items (matching the interval), the inspector could always hit — or always miss — the faulty items, biasing the fault-rate estimate."
  }
},
{
  "id": "al.y1.stats.sampling.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["stratified-sampling", "definition"],
  "questionText": "Explain what is meant by stratified sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Introduce the idea of strata.",
        "workingLatex": "\\text{split population into groups (strata)}",
        "explanation": "Stratified sampling first divides the population into distinct groups called strata.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Say what defines a stratum.",
        "workingLatex": "\\text{each stratum shares a characteristic}",
        "explanation": "Members of a stratum share some feature, such as age group, gender or department.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Describe sampling from each stratum.",
        "workingLatex": "\\text{sample from every stratum}",
        "explanation": "A sample is then taken from each stratum, so no group is left out.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the proportional rule.",
        "workingLatex": "n_i = \\dfrac{\\text{stratum size}}{N} \\times n",
        "explanation": "The number taken from a stratum is proportional to its size, so larger groups contribute more.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Describe selection within a stratum.",
        "workingLatex": "\\text{use SRS within each stratum}",
        "explanation": "Within each stratum the members are then chosen by simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the benefit.",
        "workingLatex": "\\text{each group represented in proportion}",
        "explanation": "This guarantees that every group appears in the sample in proportion to its size in the population.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the definition.",
        "workingLatex": "\\text{stratified: proportional sample from each stratum}",
        "explanation": "Stratified sampling divides the population into strata and randomly samples from each in proportion to its size.",
        "diagram": null
      }
    ],
    "finalAnswer": "Stratified sampling divides the population into groups (strata) sharing a characteristic, then takes a random sample from each stratum with the number proportional to the stratum's size."
  }
},
{
  "id": "al.y1.stats.sampling.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "two-strata"],
  "questionText": "A school has $600$ boys and $400$ girls. A stratified sample of $50$ students is taken. Find how many boys and how many girls should be in the sample.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the strata and sizes.",
        "workingLatex": "\\text{boys} = 600, \\ \\text{girls} = 400",
        "explanation": "The two strata are boys and girls, with $600$ and $400$ members.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the total population.",
        "workingLatex": "N = 600 + 400 = 1000",
        "explanation": "Adding the strata gives the whole population of $1000$ students.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the allocation rule.",
        "workingLatex": "n_i = \\dfrac{\\text{stratum size}}{N} \\times n",
        "explanation": "The number from each stratum is its share of the population times the sample size.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the number of boys.",
        "workingLatex": "\\dfrac{600}{1000} \\times 50",
        "explanation": "Boys make up $\\tfrac{600}{1000}$ of the school, so they take that share of the $50$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the boys.",
        "workingLatex": "= 30",
        "explanation": "This gives $30$ boys in the sample.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Compute the number of girls.",
        "workingLatex": "\\dfrac{400}{1000} \\times 50",
        "explanation": "Girls make up $\\tfrac{400}{1000}$ of the school.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the girls.",
        "workingLatex": "= 20",
        "explanation": "This gives $20$ girls in the sample.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the total.",
        "workingLatex": "30 + 20 = 50\\ \\checkmark",
        "explanation": "The two parts add up to the required sample size, confirming the allocation.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Describe selection within strata.",
        "workingLatex": "\\text{SRS within each group}",
        "explanation": "The $30$ boys and $20$ girls would then be chosen randomly from within their groups.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "30 \\text{ boys}, \\ 20 \\text{ girls}",
        "explanation": "The sample should contain $30$ boys and $20$ girls, matching their proportions in the school.",
        "diagram": null
      }
    ],
    "finalAnswer": "$30$ boys and $20$ girls."
  }
},
{
  "id": "al.y1.stats.sampling.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "three-strata"],
  "questionText": "A company has three departments with $300$, $180$ and $120$ employees. A stratified sample of $40$ is taken. Find how many employees should be sampled from each department.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total number of employees.",
        "workingLatex": "N = 300 + 180 + 120 = 600",
        "explanation": "Adding the three departments gives a workforce of $600$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{n}{N} = \\dfrac{40}{600} = \\dfrac{1}{15}",
        "explanation": "Every department contributes the same fraction $\\tfrac{1}{15}$ of its members.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate the first department.",
        "workingLatex": "\\dfrac{300}{600} \\times 40 = 20",
        "explanation": "The largest department of $300$ contributes $20$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate the second department.",
        "workingLatex": "\\dfrac{180}{600} \\times 40 = 12",
        "explanation": "The department of $180$ contributes $12$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Allocate the third department.",
        "workingLatex": "\\dfrac{120}{600} \\times 40 = 8",
        "explanation": "The department of $120$ contributes $8$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the total.",
        "workingLatex": "20 + 12 + 8 = 40\\ \\checkmark",
        "explanation": "The three parts add to the required sample size.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm the proportions.",
        "workingLatex": "\\tfrac{1}{15} \\text{ of each department}",
        "explanation": "Each result is $\\tfrac{1}{15}$ of its department, showing the allocation is proportional.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe selection within strata.",
        "workingLatex": "\\text{SRS within each department}",
        "explanation": "Within each department the required number is then chosen by simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "20, \\ 12, \\ 8",
        "explanation": "Sample $20$, $12$ and $8$ employees from the three departments.",
        "diagram": null
      }
    ],
    "finalAnswer": "$20$ from the first, $12$ from the second and $8$ from the third department."
  }
},
{
  "id": "al.y1.stats.sampling.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["stratified-sampling", "reasoning", "representative"],
  "questionText": "Explain why stratified sampling might be preferred to simple random sampling when a population contains distinct subgroups.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the population structure.",
        "workingLatex": "\\text{population has distinct subgroups}",
        "explanation": "Suppose the population splits into clear groups, such as age bands or departments.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the subgroups may differ.",
        "workingLatex": "\\text{groups may respond differently}",
        "explanation": "These groups might have quite different views or values, so it matters that each is represented.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Point out a weakness of SRS.",
        "workingLatex": "\\text{SRS could miss a group}",
        "explanation": "A simple random sample might, by chance, contain few or none of a particular group.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State what stratified sampling guarantees.",
        "workingLatex": "\\text{each stratum is represented}",
        "explanation": "Stratified sampling deliberately takes members from every stratum, so none can be missed.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the proportional feature.",
        "workingLatex": "\\text{in proportion to size}",
        "explanation": "Each group appears in the sample in the same proportion as in the population.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Deduce the sample reflects the population.",
        "workingLatex": "\\text{sample mirrors the population structure}",
        "explanation": "The sample therefore mirrors the makeup of the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the benefit.",
        "workingLatex": "\\Rightarrow \\text{more representative}",
        "explanation": "This makes the sample more representative and the estimates more reliable.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note when it helps most.",
        "workingLatex": "\\text{best when groups differ a lot}",
        "explanation": "The advantage is greatest when the subgroups are quite different from one another.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the conclusion.",
        "workingLatex": "\\text{guarantees balanced representation}",
        "explanation": "Stratified sampling is preferred because it guarantees each subgroup is represented in proportion, giving a more representative sample.",
        "diagram": null
      }
    ],
    "finalAnswer": "Because a simple random sample could, by chance, under-represent or miss a subgroup, whereas stratified sampling deliberately takes each subgroup in proportion to its size, guaranteeing a representative sample — especially valuable when the subgroups differ."
  }
},
{
  "id": "al.y1.stats.sampling.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "multi-part", "four-strata"],
  "questionText": "A town's residents fall into four age groups: under 18 ($250$), 18–30 ($400$), 31–50 ($500$) and over 50 ($350$). A stratified sample of $60$ is taken. (a) Find the number sampled from each group. (b) Describe how members are chosen within a group. (c) State one advantage of using stratified sampling here.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total population.",
        "workingLatex": "N = 250 + 400 + 500 + 350 = 1500",
        "explanation": "Adding the four age groups gives $1500$ residents.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{60}{1500} = \\dfrac{1}{25}",
        "explanation": "Each group contributes $\\tfrac{1}{25}$ of its members.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate the under-18 group.",
        "workingLatex": "\\dfrac{250}{1500} \\times 60 = 10",
        "explanation": "The $250$ under-18s contribute $10$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate the 18–30 group.",
        "workingLatex": "\\dfrac{400}{1500} \\times 60 = 16",
        "explanation": "The $400$ aged 18–30 contribute $16$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Allocate the 31–50 group.",
        "workingLatex": "\\dfrac{500}{1500} \\times 60 = 20",
        "explanation": "The $500$ aged 31–50 contribute $20$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Allocate the over-50 group.",
        "workingLatex": "\\dfrac{350}{1500} \\times 60 = 14",
        "explanation": "The $350$ over-50s contribute $14$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the total (part a).",
        "workingLatex": "10 + 16 + 20 + 14 = 60\\ \\checkmark",
        "explanation": "The four parts add up to the required $60$, confirming the allocation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe within-group selection (part b).",
        "workingLatex": "\\text{number the group, use random numbers}",
        "explanation": "Within each age group, list and number the members and use simple random sampling to pick the required number.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Explain why this keeps it random.",
        "workingLatex": "\\text{random within each stratum}",
        "explanation": "Using random selection inside each stratum keeps chance in the method while guaranteeing group representation.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State an advantage (part c).",
        "workingLatex": "\\text{all age groups represented}",
        "explanation": "Every age group is guaranteed to appear in proportion, so the sample reflects the town's age structure.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain why that matters.",
        "workingLatex": "\\text{ages may differ in opinion}",
        "explanation": "Since different ages may have different views, capturing them all makes the results more reliable.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note the improvement over SRS.",
        "workingLatex": "\\text{no group missed by chance}",
        "explanation": "Unlike a simple random sample, no age group can be accidentally under-represented.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Collect the answers.",
        "workingLatex": "10, 16, 20, 14",
        "explanation": "Sample $10$, $16$, $20$ and $14$ from the four groups, chosen randomly within each, giving a representative sample.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) $10$, $16$, $20$, $14$. (b) Within each age group, number the members and use simple random sampling. (c) It guarantees every age group is represented in proportion, so the sample reflects the town's age structure."
  }
},
{
  "id": "al.y1.stats.sampling.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "rounding"],
  "questionText": "A population of $500$ is split into three strata of sizes $173$, $227$ and $100$. A stratified sample of $45$ is taken. Find the number sampled from each stratum, rounding to whole numbers.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{45}{500} = 0.09",
        "explanation": "Each stratum contributes $0.09$ (that is, $9\\%$) of its members.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Allocate the first stratum.",
        "workingLatex": "173 \\times 0.09 = 15.57",
        "explanation": "The first stratum gives $15.57$, which is not a whole number.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Round the first stratum.",
        "workingLatex": "15.57 \\to 16",
        "explanation": "We must sample whole people, so round to the nearest integer, $16$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate the second stratum.",
        "workingLatex": "227 \\times 0.09 = 20.43",
        "explanation": "The second stratum gives $20.43$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Round the second stratum.",
        "workingLatex": "20.43 \\to 20",
        "explanation": "Rounding to the nearest integer gives $20$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Allocate the third stratum.",
        "workingLatex": "100 \\times 0.09 = 9",
        "explanation": "The third stratum gives exactly $9$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the total.",
        "workingLatex": "16 + 20 + 9 = 45\\ \\checkmark",
        "explanation": "The rounded numbers still add to $45$, so no further adjustment is needed.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the importance of the check.",
        "workingLatex": "\\text{rounding can change the total}",
        "explanation": "Always check the total after rounding, since sometimes rounding would make it too big or too small.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Describe within-stratum selection.",
        "workingLatex": "\\text{SRS within each stratum}",
        "explanation": "The required number in each stratum is then chosen by simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "16, \\ 20, \\ 9",
        "explanation": "Sample $16$, $20$ and $9$ from the three strata.",
        "diagram": null
      }
    ],
    "finalAnswer": "$16$, $20$ and $9$ (which add to $45$)."
  }
},
{
  "id": "al.y1.stats.sampling.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "single-stratum"],
  "questionText": "A stratified sample of $100$ is taken from a population of $800$. One stratum contains $240$ members. How many should be sampled from that stratum?",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the allocation rule.",
        "workingLatex": "n_i = \\dfrac{\\text{stratum size}}{N} \\times n",
        "explanation": "The number from a stratum is its share of the population times the sample size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the values.",
        "workingLatex": "\\text{stratum} = 240, \\ N = 800, \\ n = 100",
        "explanation": "The stratum has $240$ members out of $800$, and the sample size is $100$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute.",
        "workingLatex": "\\dfrac{240}{800} \\times 100",
        "explanation": "Insert the values into the rule.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the fraction.",
        "workingLatex": "\\dfrac{240}{800} = 0.3",
        "explanation": "The stratum is $30\\%$ of the population.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Multiply.",
        "workingLatex": "0.3 \\times 100 = 30",
        "explanation": "So $30$ of the $100$ come from this stratum.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "30",
        "explanation": "Sample $30$ members from that stratum.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\tfrac{240}{800} \\times 100 = 30$ members."
  }
},
{
  "id": "al.y1.stats.sampling.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "reverse-problem", "sampling-fraction"],
  "questionText": "In a stratified sample, a stratum of $350$ members (from a population of $1400$) contributes $25$ members to the sample. Find the total sample size.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall that the sampling fraction is constant.",
        "workingLatex": "\\text{same fraction for every stratum}",
        "explanation": "In proportional stratified sampling, every stratum is sampled at the same fraction, and so is the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the fraction from the given stratum.",
        "workingLatex": "f = \\dfrac{25}{350}",
        "explanation": "The fraction sampled is the allocation divided by the stratum size.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Simplify the fraction.",
        "workingLatex": "f = \\dfrac{1}{14}",
        "explanation": "So $\\tfrac{1}{14}$ of the members are sampled.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the fraction to the whole population.",
        "workingLatex": "n = f \\times N",
        "explanation": "The total sample size is the same fraction of the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute.",
        "workingLatex": "n = \\dfrac{1}{14} \\times 1400",
        "explanation": "Insert the fraction and the population size.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate.",
        "workingLatex": "n = 100",
        "explanation": "The total sample size is $100$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check with the stratum.",
        "workingLatex": "\\dfrac{350}{1400} \\times 100 = 25\\ \\checkmark",
        "explanation": "Putting the sample size back gives $25$ for the stratum, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the sampling fraction.",
        "workingLatex": "\\tfrac{1}{14} \\text{ of everyone is sampled}",
        "explanation": "Because $\\tfrac{1}{14}$ of the stratum was taken, $\\tfrac{1}{14}$ of the whole population is taken too — this is what makes the allocation proportional.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "n = 100",
        "explanation": "The full stratified sample contains $100$ members.",
        "diagram": null
      }
    ],
    "finalAnswer": "The sampling fraction is $\\tfrac{25}{350} = \\tfrac{1}{14}$, so the total sample size is $\\tfrac{1}{14} \\times 1400 = 100$."
  }
},
{
  "id": "al.y1.stats.sampling.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "multi-part", "school-years"],
  "questionText": "A school has year groups of sizes $220$ (Y7), $200$ (Y8), $180$ (Y9) and $200$ (Y10). A stratified sample of $40$ pupils is taken. (a) Find the number from each year. (b) Describe how pupils are chosen within a year. (c) Give one advantage and (d) one disadvantage of stratified sampling here.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total number of pupils.",
        "workingLatex": "N = 220 + 200 + 180 + 200 = 800",
        "explanation": "Adding the four year groups gives $800$ pupils.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{40}{800} = \\dfrac{1}{20}",
        "explanation": "Each year contributes $\\tfrac{1}{20}$ of its pupils.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate Year 7.",
        "workingLatex": "\\dfrac{220}{800} \\times 40 = 11",
        "explanation": "Year 7 contributes $11$ pupils.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate Year 8.",
        "workingLatex": "\\dfrac{200}{800} \\times 40 = 10",
        "explanation": "Year 8 contributes $10$ pupils.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Allocate Year 9.",
        "workingLatex": "\\dfrac{180}{800} \\times 40 = 9",
        "explanation": "Year 9 contributes $9$ pupils.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Allocate Year 10.",
        "workingLatex": "\\dfrac{200}{800} \\times 40 = 10",
        "explanation": "Year 10 contributes $10$ pupils.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the total (part a).",
        "workingLatex": "11 + 10 + 9 + 10 = 40\\ \\checkmark",
        "explanation": "The four parts add to the required $40$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe within-year selection (part b).",
        "workingLatex": "\\text{number the year, use SRS}",
        "explanation": "Within each year group, list and number the pupils and select the required number using simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Explain why this keeps chance.",
        "workingLatex": "\\text{random within each stratum}",
        "explanation": "Random selection inside each year keeps the method fair while guaranteeing representation.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State an advantage (part c).",
        "workingLatex": "\\text{every year represented in proportion}",
        "explanation": "Advantage: each year group appears in proportion, so the sample reflects the school's structure.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain the advantage.",
        "workingLatex": "\\text{no year missed by chance}",
        "explanation": "Unlike a simple random sample, no year can be accidentally under-represented.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State a disadvantage (part d).",
        "workingLatex": "\\text{must know each year's size}",
        "explanation": "Disadvantage: you must know which year each pupil is in and the size of every year.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Explain the disadvantage.",
        "workingLatex": "\\text{more work to organise}",
        "explanation": "Gathering that information and sampling each stratum makes the method more complex than a single random sample.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Collect the answers.",
        "workingLatex": "11, 10, 9, 10",
        "explanation": "Sample $11, 10, 9, 10$ from Y7–Y10, chosen randomly within each year.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) $11, 10, 9, 10$. (b) Number each year group and use simple random sampling within it. (c) Advantage: every year is represented in proportion. (d) Disadvantage: you must know each pupil's year and each year's size, making it more work than SRS."
  }
},
{
  "id": "al.y1.stats.sampling.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["stratified-sampling", "advantages"],
  "questionText": "Give two advantages of stratified sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how stratified sampling works.",
        "workingLatex": "\\text{sample each stratum in proportion}",
        "explanation": "Because it deliberately samples every group, it has some clear strengths.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: representative}",
        "explanation": "Every subgroup is guaranteed to appear in proportion to its size, so the sample reflects the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the first advantage.",
        "workingLatex": "\\text{no group missed}",
        "explanation": "No subgroup can be accidentally under-represented, as could happen with simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: more accurate estimates}",
        "explanation": "Because it mirrors the population structure, estimates from the sample tend to be more accurate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain the accuracy point.",
        "workingLatex": "\\text{reduces sampling error when groups differ}",
        "explanation": "When the strata differ from one another, forcing proportional representation reduces the sampling error.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note a further benefit.",
        "workingLatex": "\\text{allows comparison of strata}",
        "explanation": "It also lets you compare the subgroups (for example, different age groups) directly.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the random element remains.",
        "workingLatex": "\\text{still random within strata}",
        "explanation": "Selection within each stratum is still random, so bias is avoided there too.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two advantages.",
        "workingLatex": "+\\text{representative}, \\ +\\text{accurate}",
        "explanation": "The main advantages are that it guarantees proportional representation and gives more accurate estimates.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{representative and accurate}",
        "explanation": "Stratified sampling reflects the population's structure and produces more reliable estimates.",
        "diagram": null
      }
    ],
    "finalAnswer": "It guarantees every subgroup is represented in proportion (more representative than SRS), and it gives more accurate estimates because the sample mirrors the population's structure."
  }
},
{
  "id": "al.y1.stats.sampling.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["stratified-sampling", "disadvantages"],
  "questionText": "Give two disadvantages of stratified sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what stratified sampling requires.",
        "workingLatex": "\\text{must know the strata}",
        "explanation": "You have to know how the population divides into groups and how big each group is.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: need group information}",
        "explanation": "You must know which stratum each member belongs to and the size of every stratum, which is not always available.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain when this is a problem.",
        "workingLatex": "\\text{info may be unavailable}",
        "explanation": "If the group sizes or memberships are unknown, the method cannot be used.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: more complex}",
        "explanation": "It is more time-consuming and complicated to organise than a single simple random sample.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain the complexity.",
        "workingLatex": "\\text{sample every stratum separately}",
        "explanation": "You have to build a frame and sample within each stratum, multiplying the work.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note a practical issue.",
        "workingLatex": "\\text{rounding may not sum to } n",
        "explanation": "Rounding the allocations to whole numbers can make them add up to slightly more or fewer than the required sample size.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note the strata must be clear.",
        "workingLatex": "\\text{needs well-defined groups}",
        "explanation": "It only works if the population splits cleanly into non-overlapping groups.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two disadvantages.",
        "workingLatex": "-\\text{need group data}, \\ -\\text{more complex}",
        "explanation": "The main drawbacks are needing detailed group information and the extra complexity of organising the sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{information-heavy and complex}",
        "explanation": "Stratified sampling requires knowing the strata sizes and is more complex to carry out than simple random sampling.",
        "diagram": null
      }
    ],
    "finalAnswer": "You must know which stratum each member is in and the size of each stratum (not always available), and it is more complex and time-consuming to organise than simple random sampling."
  }
},
{
  "id": "al.y1.stats.sampling.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "three-strata"],
  "questionText": "A company's staff work in three regions of sizes $480$, $420$ and $300$. A stratified sample of $80$ is taken. Find the number sampled from each region.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the allocation rule.",
        "workingLatex": "n_i = \\dfrac{\\text{region size}}{N} \\times n",
        "explanation": "Each region contributes a share proportional to its size.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the total.",
        "workingLatex": "N = 480 + 420 + 300 = 1200",
        "explanation": "Adding the regions gives $1200$ staff.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{80}{1200} = \\dfrac{1}{15}",
        "explanation": "Each region contributes $\\tfrac{1}{15}$ of its members.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate the first region.",
        "workingLatex": "\\dfrac{480}{1200} \\times 80 = 32",
        "explanation": "The region of $480$ contributes $32$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Allocate the second region.",
        "workingLatex": "\\dfrac{420}{1200} \\times 80 = 28",
        "explanation": "The region of $420$ contributes $28$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Allocate the third region.",
        "workingLatex": "\\dfrac{300}{1200} \\times 80 = 20",
        "explanation": "The region of $300$ contributes $20$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the total.",
        "workingLatex": "32 + 28 + 20 = 80\\ \\checkmark",
        "explanation": "The three parts add to the required $80$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe within-region selection.",
        "workingLatex": "\\text{SRS within each region}",
        "explanation": "The required number in each region is then chosen by simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "32, \\ 28, \\ 20",
        "explanation": "Sample $32$, $28$ and $20$ from the three regions.",
        "diagram": null
      }
    ],
    "finalAnswer": "$32$, $28$ and $20$ from the three regions."
  }
},
{
  "id": "al.y1.stats.sampling.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "multi-part", "four-strata"],
  "questionText": "A sports club has members in four sections: football ($240$), tennis ($160$), swimming ($120$) and athletics ($80$). A stratified sample of $45$ is taken. (a) Find the number from each section. (b) Describe how members are selected within a section. (c) Give one advantage and (d) one disadvantage of this method.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total membership.",
        "workingLatex": "N = 240 + 160 + 120 + 80 = 600",
        "explanation": "Adding the four sections gives $600$ members.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{45}{600} = 0.075",
        "explanation": "Each section contributes $0.075$ (that is, $7.5\\%$) of its members.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate football.",
        "workingLatex": "\\dfrac{240}{600} \\times 45 = 18",
        "explanation": "Football contributes $18$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate tennis.",
        "workingLatex": "\\dfrac{160}{600} \\times 45 = 12",
        "explanation": "Tennis contributes $12$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Allocate swimming.",
        "workingLatex": "\\dfrac{120}{600} \\times 45 = 9",
        "explanation": "Swimming contributes $9$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Allocate athletics.",
        "workingLatex": "\\dfrac{80}{600} \\times 45 = 6",
        "explanation": "Athletics contributes $6$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the total (part a).",
        "workingLatex": "18 + 12 + 9 + 6 = 45\\ \\checkmark",
        "explanation": "The four parts add to the required $45$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe within-section selection (part b).",
        "workingLatex": "\\text{number the section, use SRS}",
        "explanation": "Within each section, list and number the members and pick the required number using simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Explain why this keeps chance.",
        "workingLatex": "\\text{random within each section}",
        "explanation": "Random selection inside each section keeps the method fair.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State an advantage (part c).",
        "workingLatex": "\\text{each sport represented in proportion}",
        "explanation": "Advantage: every section is represented in proportion, so the sample reflects the club.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain the advantage.",
        "workingLatex": "\\text{no section missed}",
        "explanation": "No section can be missed by chance, unlike in a simple random sample.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State a disadvantage (part d).",
        "workingLatex": "\\text{must know each member's section}",
        "explanation": "Disadvantage: you must know which section each member belongs to and the size of each section.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Explain the disadvantage.",
        "workingLatex": "\\text{more work to organise}",
        "explanation": "Building a frame and sampling within each section takes more effort than a single random sample.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Note members in two sections.",
        "workingLatex": "\\text{overlap causes problems}",
        "explanation": "If a member plays two sports the strata overlap, which complicates the method — another practical drawback.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Collect the answers.",
        "workingLatex": "18, 12, 9, 6",
        "explanation": "Sample $18, 12, 9, 6$ from the four sections, chosen randomly within each.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) $18, 12, 9, 6$. (b) Number the members of each section and use simple random sampling within it. (c) Advantage: every section is represented in proportion. (d) Disadvantage: you must know each member's section and section sizes (and overlaps cause problems), making it more work than SRS."
  }
},
{
  "id": "al.y1.stats.sampling.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "reverse-problem", "find-stratum-size"],
  "questionText": "A stratified sample of $60$ is taken from a population of $900$. One stratum contributes $24$ members to the sample. Find the number of members in that stratum.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the sampling fraction.",
        "workingLatex": "f = \\dfrac{60}{900} = \\dfrac{1}{15}",
        "explanation": "Every stratum is sampled at the fraction $\\tfrac{1}{15}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Relate the allocation to the stratum size.",
        "workingLatex": "\\text{allocation} = f \\times \\text{stratum size}",
        "explanation": "The number taken from a stratum is the fraction times its size.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known allocation.",
        "workingLatex": "24 = \\dfrac{1}{15} \\times \\text{stratum size}",
        "explanation": "The stratum contributes $24$, so this equals $\\tfrac{1}{15}$ of its size.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rearrange for the stratum size.",
        "workingLatex": "\\text{stratum size} = 24 \\times 15",
        "explanation": "Multiply both sides by $15$ to undo the fraction.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "= 360",
        "explanation": "The stratum has $360$ members.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the size is plausible.",
        "workingLatex": "360 < 900",
        "explanation": "The stratum is smaller than the whole population, as it must be.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Verify the allocation.",
        "workingLatex": "\\dfrac{360}{900} \\times 60 = 24\\ \\checkmark",
        "explanation": "Putting the size back gives $24$, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Interpret the result.",
        "workingLatex": "360 = 40\\% \\text{ of } 900",
        "explanation": "The stratum is $\\tfrac{360}{900} = 40\\%$ of the population, so it contributes $40\\%$ of the sample ($24$ of $60$) — consistent with proportional sampling.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "360 \\text{ members}",
        "explanation": "The stratum contains $360$ members.",
        "diagram": null
      }
    ],
    "finalAnswer": "The sampling fraction is $\\tfrac{60}{900} = \\tfrac{1}{15}$, so the stratum size is $24 \\times 15 = 360$."
  }
},
{
  "id": "al.y1.stats.sampling.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "two-strata"],
  "questionText": "A population has $700$ men and $300$ women. A stratified sample of $20$ is taken. Find the number of men and women sampled.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total population.",
        "workingLatex": "N = 700 + 300 = 1000",
        "explanation": "There are $1000$ people in total.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the allocation rule.",
        "workingLatex": "n_i = \\dfrac{\\text{group size}}{N} \\times n",
        "explanation": "Each group's share of the sample is proportional to its size.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate the men.",
        "workingLatex": "\\dfrac{700}{1000} \\times 20 = 14",
        "explanation": "Men make up $70\\%$ of the population, so they take $14$ of the $20$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate the women.",
        "workingLatex": "\\dfrac{300}{1000} \\times 20 = 6",
        "explanation": "Women make up $30\\%$, so they take $6$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the total.",
        "workingLatex": "14 + 6 = 20\\ \\checkmark",
        "explanation": "The two parts add to the required $20$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "14 \\text{ men}, \\ 6 \\text{ women}",
        "explanation": "Sample $14$ men and $6$ women.",
        "diagram": null
      }
    ],
    "finalAnswer": "$14$ men and $6$ women."
  }
},
{
  "id": "al.y1.stats.sampling.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "rounding-adjustment"],
  "questionText": "A population of $600$ is split into three strata of sizes $250$, $250$ and $100$. A stratified sample of $25$ is taken. Find a suitable allocation, explaining how you deal with the rounding.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{25}{600} \\approx 0.04167",
        "explanation": "Each stratum contributes this fraction of its members.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the first stratum.",
        "workingLatex": "\\dfrac{250}{600} \\times 25 = 10.4167",
        "explanation": "The first stratum of $250$ gives about $10.42$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the second stratum.",
        "workingLatex": "\\dfrac{250}{600} \\times 25 = 10.4167",
        "explanation": "The second stratum of $250$ also gives about $10.42$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the third stratum.",
        "workingLatex": "\\dfrac{100}{600} \\times 25 = 4.1667",
        "explanation": "The third stratum of $100$ gives about $4.17$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Round each to the nearest whole number.",
        "workingLatex": "10, \\ 10, \\ 4",
        "explanation": "Rounding each value to the nearest integer gives $10$, $10$ and $4$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the rounded values.",
        "workingLatex": "10 + 10 + 4 = 24",
        "explanation": "These add to $24$, one short of the required $25$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Identify the shortfall.",
        "workingLatex": "25 - 24 = 1 \\text{ short}",
        "explanation": "Rounding down has lost one member, so we must add one back somewhere.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Decide where to add it.",
        "workingLatex": "\\text{largest fractional part: } 0.42",
        "explanation": "The two large strata each had the biggest fractional part ($0.42$), so one of them is rounded up instead.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Adjust the allocation.",
        "workingLatex": "11, \\ 10, \\ 4",
        "explanation": "Rounding one of the $250$-strata up to $11$ gives an allocation that now totals $25$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check the new total.",
        "workingLatex": "11 + 10 + 4 = 25\\ \\checkmark",
        "explanation": "The adjusted numbers add to the required $25$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Note the choice is not unique.",
        "workingLatex": "10, 11, 4 \\text{ also valid}",
        "explanation": "Because the two large strata are equal, giving the extra one to either is acceptable.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Describe within-stratum selection.",
        "workingLatex": "\\text{SRS within each stratum}",
        "explanation": "Once the numbers are fixed, each stratum's members are chosen by simple random sampling.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answer.",
        "workingLatex": "11, 10, 4 \\ (\\text{or } 10, 11, 4)",
        "explanation": "A suitable allocation is $11$, $10$ and $4$: round to nearest, then add the missing member to a stratum with a large fractional part.",
        "diagram": null
      }
    ],
    "finalAnswer": "Proportions give $10.42, 10.42, 4.17$; rounding gives $10,10,4 = 24$, one short. Round one of the equal large strata up: a suitable allocation is $11, 10, 4$ (or $10, 11, 4$), totalling $25$."
  }
},
{
  "id": "al.y1.stats.sampling.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["quota-sampling", "definition", "non-random"],
  "questionText": "Explain what is meant by quota sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the type of method.",
        "workingLatex": "\\text{a non-random method}",
        "explanation": "Quota sampling is a non-random method: the interviewer, not chance, decides who is included.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Divide the population into groups.",
        "workingLatex": "\\text{split into categories}",
        "explanation": "The population is split into groups (for example by age or gender), rather like strata.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set a quota for each group.",
        "workingLatex": "\\text{a target number per group}",
        "explanation": "Each group is given a quota — the number of people to be sampled from it.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Describe how the quota is filled.",
        "workingLatex": "\\text{interviewer selects until quota met}",
        "explanation": "An interviewer approaches people and includes them until each quota is filled.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Emphasise the non-random choice.",
        "workingLatex": "\\text{no random selection, no frame}",
        "explanation": "The interviewer chooses whom to approach, so there is no random selection and no sampling frame is needed.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the definition.",
        "workingLatex": "\\text{quota: fill group targets non-randomly}",
        "explanation": "Quota sampling divides the population into groups and has interviewers fill a target number in each, choosing people themselves.",
        "diagram": null
      }
    ],
    "finalAnswer": "Quota sampling divides the population into groups and sets a target (quota) for each; an interviewer then selects people non-randomly until each quota is filled, with no sampling frame."
  }
},
{
  "id": "al.y1.stats.sampling.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["quota-sampling", "method", "procedure"],
  "questionText": "Describe how an interviewer would carry out quota sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Divide the population into categories.",
        "workingLatex": "\\text{groups by age, gender, etc.}",
        "explanation": "First the population is divided into categories thought to matter, such as age and gender.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Fix the total sample size.",
        "workingLatex": "\\text{choose } n",
        "explanation": "Decide how many people are needed in total.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set the quotas.",
        "workingLatex": "\\text{quota per group} \\propto \\text{group size}",
        "explanation": "Give each category a quota, usually proportional to its share of the population.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Send out interviewers.",
        "workingLatex": "\\text{interviewers approach people}",
        "explanation": "Interviewers go out and approach members of the public.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Classify each person.",
        "workingLatex": "\\text{decide the person's category}",
        "explanation": "For each person approached, the interviewer judges (or asks) which category they belong to.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Include if the quota is open.",
        "workingLatex": "\\text{quota not full} \\Rightarrow \\text{include}",
        "explanation": "If that category's quota is not yet filled, the person is added to the sample.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Skip if the quota is full.",
        "workingLatex": "\\text{quota full} \\Rightarrow \\text{move on}",
        "explanation": "Once a category's quota is met, further people in it are turned away.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Continue until all quotas met.",
        "workingLatex": "\\text{repeat until all full}",
        "explanation": "Interviewing continues until every category's quota has been filled.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note no frame is used.",
        "workingLatex": "\\text{no sampling frame needed}",
        "explanation": "At no point is a list of the population required, unlike random methods.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Summarise the method.",
        "workingLatex": "\\text{fill each group's quota by approach}",
        "explanation": "Set quotas per group, then approach people and include them until each quota is filled.",
        "diagram": null
      }
    ],
    "finalAnswer": "Divide the population into categories and set a quota for each (often proportional to size). Interviewers approach people, classify each one, and include them until each category's quota is filled — no sampling frame is needed."
  }
},
{
  "id": "al.y1.stats.sampling.q051",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["quota-sampling", "quota-calculation", "proportional"],
  "questionText": "A town is $52\\%$ female and $48\\%$ male. An interviewer must take a quota sample of $250$ people. Find the quota for each gender.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the quota rule.",
        "workingLatex": "\\text{quota} = \\text{percentage} \\times \\text{sample size}",
        "explanation": "Each group's quota is its share of the population applied to the total sample.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Compute the female quota.",
        "workingLatex": "0.52 \\times 250",
        "explanation": "Females are $52\\%$ of the town, so they take $52\\%$ of the $250$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Evaluate the female quota.",
        "workingLatex": "= 130",
        "explanation": "The female quota is $130$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the male quota.",
        "workingLatex": "0.48 \\times 250",
        "explanation": "Males are $48\\%$ of the town.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the male quota.",
        "workingLatex": "= 120",
        "explanation": "The male quota is $120$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the total.",
        "workingLatex": "130 + 120 = 250\\ \\checkmark",
        "explanation": "The two quotas add to the required sample size.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the interviewer's task.",
        "workingLatex": "\\text{find } 130 \\text{ women}, 120 \\text{ men}",
        "explanation": "The interviewer keeps approaching people until $130$ women and $120$ men have been included.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the method is still non-random.",
        "workingLatex": "\\text{who fills the quota is not random}",
        "explanation": "The numbers are fixed, but the interviewer still chooses which particular women and men to include — so this remains a non-random method.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "130 \\text{ female}, \\ 120 \\text{ male}",
        "explanation": "The quotas are $130$ females and $120$ males.",
        "diagram": null
      }
    ],
    "finalAnswer": "Female quota $0.52 \\times 250 = 130$; male quota $0.48 \\times 250 = 120$."
  }
},
{
  "id": "al.y1.stats.sampling.q052",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["quota-sampling", "advantages"],
  "questionText": "Give two advantages of quota sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall a key feature.",
        "workingLatex": "\\text{no sampling frame used}",
        "explanation": "Quota sampling never needs a list of the population, which gives it practical strengths.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: no frame needed}",
        "explanation": "It can be used even when no sampling frame is available, unlike random methods.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain when this helps.",
        "workingLatex": "\\text{useful when no list exists}",
        "explanation": "For a survey of shoppers in a street, where no list exists, this is a big advantage.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: quick and cheap}",
        "explanation": "It is fast and inexpensive to carry out, as interviewers simply approach people.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add a further benefit.",
        "workingLatex": "\\text{groups are represented}",
        "explanation": "Because quotas are set per group, each group still appears in the sample, giving some representation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note it works for small samples.",
        "workingLatex": "\\text{easy to administer}",
        "explanation": "It is simple to organise and manage, even for modest sample sizes.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note non-response is less of an issue.",
        "workingLatex": "\\text{just approach someone else}",
        "explanation": "If someone refuses, the interviewer simply asks another person in the same category.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two advantages.",
        "workingLatex": "+\\text{no frame}, \\ +\\text{quick/cheap}",
        "explanation": "The main advantages are that no sampling frame is needed and that it is quick and cheap.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{no frame, cheap and fast}",
        "explanation": "Quota sampling needs no sampling frame and is quick and inexpensive to carry out.",
        "diagram": null
      }
    ],
    "finalAnswer": "No sampling frame is needed (useful when no list exists), and it is quick and cheap to carry out. Groups are still represented, and non-response is easily handled by approaching someone else."
  }
},
{
  "id": "al.y1.stats.sampling.q053",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["quota-sampling", "disadvantages", "bias"],
  "questionText": "Give two disadvantages of quota sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the non-random nature.",
        "workingLatex": "\\text{interviewer chooses people}",
        "explanation": "Because the interviewer picks who to approach, the method is not random.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: not random}",
        "explanation": "It is non-random, so not every member has a known chance of selection.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain the consequence.",
        "workingLatex": "\\text{cannot measure sampling error}",
        "explanation": "Without known probabilities, you cannot calculate the reliability (sampling error) of the results.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: interviewer bias}",
        "explanation": "The interviewer may (consciously or not) avoid certain people, introducing bias.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give an example of the bias.",
        "workingLatex": "\\text{e.g. only approachable people}",
        "explanation": "An interviewer might approach only friendly-looking people, or those in one location, distorting the sample.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note who gets missed.",
        "workingLatex": "\\text{busy / unavailable people excluded}",
        "explanation": "People who are unavailable (for example at work) are systematically left out.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the effect on representativeness.",
        "workingLatex": "\\text{may be unrepresentative within a group}",
        "explanation": "Even though each group is present, the people chosen within it may not be typical of that group.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two disadvantages.",
        "workingLatex": "-\\text{non-random}, \\ -\\text{interviewer bias}",
        "explanation": "The main drawbacks are that it is non-random (no sampling error) and open to interviewer bias.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{non-random and biasable}",
        "explanation": "Quota sampling is non-random, so sampling error cannot be measured, and it is open to interviewer bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is non-random, so you cannot measure the sampling error, and it is open to interviewer bias — the interviewer may avoid certain people, so the sample can be unrepresentative even within each group."
  }
},
{
  "id": "al.y1.stats.sampling.q054",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["quota-sampling", "cross-classified", "multi-part"],
  "questionText": "A quota sample of $400$ is to represent age and gender. The population is $60\\%$ under 40 and $40\\%$ aged 40 or over; within each age group it is split $50\\%$ male and $50\\%$ female. (a) Find the four quotas. (b) Give one advantage and (c) one disadvantage of quota sampling here.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the number under 40.",
        "workingLatex": "0.60 \\times 400 = 240",
        "explanation": "$60\\%$ of the $400$ are under 40.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the number aged 40 or over.",
        "workingLatex": "0.40 \\times 400 = 160",
        "explanation": "$40\\%$ of the $400$ are 40 or over.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split the under-40 group by gender.",
        "workingLatex": "0.5 \\times 240 = 120 \\text{ each}",
        "explanation": "Half of the $240$ under-40s are male and half female, giving $120$ each.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Split the over-40 group by gender.",
        "workingLatex": "0.5 \\times 160 = 80 \\text{ each}",
        "explanation": "Half of the $160$ over-40s are male and half female, giving $80$ each.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "List the four quotas (part a).",
        "workingLatex": "120, 120, 80, 80",
        "explanation": "Under-40 male $120$, under-40 female $120$, over-40 male $80$, over-40 female $80$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the total.",
        "workingLatex": "120 + 120 + 80 + 80 = 400\\ \\checkmark",
        "explanation": "The four quotas add to the required $400$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe how the interviewer works.",
        "workingLatex": "\\text{classify by age and gender, fill each cell}",
        "explanation": "The interviewer approaches people, classifies each by age and gender, and includes them until each of the four quotas is filled.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State an advantage (part b).",
        "workingLatex": "\\text{no frame; quick and cheap}",
        "explanation": "Advantage: no sampling frame is needed and the survey is quick and cheap, while still representing each age–gender group.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Explain the advantage.",
        "workingLatex": "\\text{groups still represented}",
        "explanation": "The quotas ensure all four age–gender combinations appear in the sample.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State a disadvantage (part c).",
        "workingLatex": "\\text{non-random} \\Rightarrow \\text{interviewer bias}",
        "explanation": "Disadvantage: within each cell the interviewer chooses whom to approach, so bias can enter.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain the disadvantage.",
        "workingLatex": "\\text{cannot measure sampling error}",
        "explanation": "Because selection is not random, the reliability of the estimates cannot be measured.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note a practical difficulty.",
        "workingLatex": "\\text{judging age can be tricky}",
        "explanation": "The interviewer may misjudge someone's age group, adding further error.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "120, 120, 80, 80",
        "explanation": "The four quotas are $120, 120, 80, 80$; the method is cheap and frame-free but non-random and open to bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Under-40 male $120$, under-40 female $120$, over-40 male $80$, over-40 female $80$. (b) Advantage: no frame needed, quick and cheap, all groups represented. (c) Disadvantage: non-random (interviewer bias; sampling error cannot be measured)."
  }
},
{
  "id": "al.y1.stats.sampling.q055",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["quota-sampling", "non-random", "bias", "reasoning"],
  "questionText": "Explain why quota sampling is not a random sampling method and how this can lead to bias.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how members are chosen.",
        "workingLatex": "\\text{interviewer selects individuals}",
        "explanation": "In quota sampling the interviewer personally decides whom to approach.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Contrast with random methods.",
        "workingLatex": "\\text{no random numbers used}",
        "explanation": "Members are not chosen by random numbers or a lottery, so chance does not drive the selection.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the consequence for probabilities.",
        "workingLatex": "\\text{no known chance of selection}",
        "explanation": "Because a person's inclusion depends on the interviewer, members do not have a known or equal chance of being chosen.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Conclude it is non-random.",
        "workingLatex": "\\Rightarrow \\text{non-random}",
        "explanation": "This lack of known probabilities is exactly what makes the method non-random.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain how bias can enter.",
        "workingLatex": "\\text{interviewer approaches certain people}",
        "explanation": "The interviewer might tend to approach people who look approachable, or who are in one particular place.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify who gets excluded.",
        "workingLatex": "\\text{unavailable people missed}",
        "explanation": "People who are busy, at work, or elsewhere are systematically left out.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Explain the effect on the sample.",
        "workingLatex": "\\text{sample skewed}",
        "explanation": "If those left out differ from those included, the sample is skewed and unrepresentative.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Link to bias.",
        "workingLatex": "\\Rightarrow \\text{bias}",
        "explanation": "This systematic difference between who is and is not chosen is a source of bias.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Contrast with stratified sampling.",
        "workingLatex": "\\text{stratified: random within groups}",
        "explanation": "Stratified sampling also uses groups but selects randomly within them, which avoids this interviewer bias.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the conclusion.",
        "workingLatex": "\\text{non-random} \\Rightarrow \\text{possible bias}",
        "explanation": "Because the interviewer chooses individuals, quota sampling is non-random and open to bias from who is (and is not) approached.",
        "diagram": null
      }
    ],
    "finalAnswer": "The interviewer chooses whom to approach, so members have no known or equal chance of selection — making it non-random. Because the interviewer may favour approachable or available people and miss others, the sample can be systematically skewed, i.e. biased."
  }
},
{
  "id": "al.y1.stats.sampling.q056",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["quota-sampling", "stratified-sampling", "compare", "reasoning"],
  "questionText": "Compare quota sampling with stratified sampling, giving two similarities and two differences.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the first similarity.",
        "workingLatex": "\\text{both use groups}",
        "explanation": "Both methods start by dividing the population into groups (strata or categories).",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the second similarity.",
        "workingLatex": "\\text{numbers per group} \\propto \\text{group size}",
        "explanation": "In both, the number taken from each group is usually made proportional to that group's size.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Introduce the key difference.",
        "workingLatex": "\\text{difference: how members are chosen}",
        "explanation": "The methods differ crucially in how individuals within each group are selected.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State selection in stratified sampling.",
        "workingLatex": "\\text{stratified: random within strata}",
        "explanation": "Stratified sampling selects members randomly within each stratum.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State selection in quota sampling.",
        "workingLatex": "\\text{quota: interviewer chooses}",
        "explanation": "Quota sampling lets the interviewer choose individuals, which is non-random.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the first difference clearly.",
        "workingLatex": "\\text{random vs non-random}",
        "explanation": "So the first difference is that stratified sampling is random while quota sampling is non-random.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Consider the sampling frame.",
        "workingLatex": "\\text{stratified needs a frame; quota does not}",
        "explanation": "Stratified sampling needs a sampling frame for each stratum; quota sampling needs none.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the second difference.",
        "workingLatex": "\\text{frame required vs not}",
        "explanation": "The second difference is that stratified sampling requires a sampling frame whereas quota sampling does not.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the consequence for bias.",
        "workingLatex": "\\text{stratified unbiased; quota biasable}",
        "explanation": "Because stratified sampling is random, it avoids selection bias, while quota sampling can suffer interviewer bias.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Note the consequence for cost.",
        "workingLatex": "\\text{quota cheaper and faster}",
        "explanation": "In return, quota sampling is usually quicker and cheaper, since no frame is needed.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the overall comparison.",
        "workingLatex": "\\text{same structure, different selection}",
        "explanation": "In short, both use proportional groups, but stratified sampling is random (needs a frame, avoids bias) while quota sampling is non-random (no frame, cheaper, biasable).",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note the effect on sampling error.",
        "workingLatex": "\\text{stratified: error measurable; quota: not}",
        "explanation": "A further consequence is that stratified sampling lets you measure the sampling error, while quota sampling does not.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answer.",
        "workingLatex": "\\text{2 similarities, 2 differences}",
        "explanation": "Similarities: both use groups and proportional numbers. Differences: random vs non-random, and frame required vs not.",
        "diagram": null
      }
    ],
    "finalAnswer": "Similarities: both split the population into groups, and both take numbers proportional to group size. Differences: stratified sampling selects randomly within groups (needs a sampling frame, avoids bias), whereas quota sampling lets the interviewer choose (no frame needed, cheaper, but open to bias)."
  }
},
{
  "id": "al.y1.stats.sampling.q057",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["opportunity-sampling", "convenience-sampling", "definition"],
  "questionText": "Explain what is meant by opportunity (convenience) sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the basic idea.",
        "workingLatex": "\\text{sample whoever is available}",
        "explanation": "Opportunity sampling simply takes members of the population who are available and convenient to reach at the time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the other name.",
        "workingLatex": "\\text{also called convenience sampling}",
        "explanation": "It is also known as convenience sampling, because you sample whoever is convenient.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State how members are chosen.",
        "workingLatex": "\\text{no random selection}",
        "explanation": "There is no random selection; you just take the people who happen to be there.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note no frame is used.",
        "workingLatex": "\\text{no sampling frame}",
        "explanation": "No list of the population is needed, since you are not selecting from one.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give an example.",
        "workingLatex": "\\text{e.g. ask passers-by in the street}",
        "explanation": "For instance, asking the first people who walk past you in a street is opportunity sampling.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the definition.",
        "workingLatex": "\\text{take available members}",
        "explanation": "Opportunity sampling takes members of the population who are available at the time, with no random selection or frame.",
        "diagram": null
      }
    ],
    "finalAnswer": "Opportunity (convenience) sampling takes members of the population who happen to be available and convenient at the time — with no random selection and no sampling frame."
  }
},
{
  "id": "al.y1.stats.sampling.q058",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["opportunity-sampling", "example", "reasoning"],
  "questionText": "A researcher wants opinions on a new bus service. Describe how they might collect an opportunity sample, and state one limitation of doing so.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose a convenient location.",
        "workingLatex": "\\text{stand at the bus station}",
        "explanation": "The researcher picks a convenient spot, such as the bus station, where people are easy to find.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Approach available people.",
        "workingLatex": "\\text{ask people who are there}",
        "explanation": "They ask whoever happens to be there at that time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Continue until enough responses.",
        "workingLatex": "\\text{until sample size reached}",
        "explanation": "They keep asking passers-by until they have collected enough responses.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note the lack of randomness.",
        "workingLatex": "\\text{no random selection, no frame}",
        "explanation": "No random numbers or list are used; the sample is just those who were available.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State why it is easy.",
        "workingLatex": "\\text{quick and cheap}",
        "explanation": "This makes the survey very quick and cheap to run.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify who is captured.",
        "workingLatex": "\\text{only those at that place/time}",
        "explanation": "But it only captures people at that place and time — here, mostly bus users.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the limitation.",
        "workingLatex": "\\text{unrepresentative}",
        "explanation": "So the sample is unrepresentative: it over-represents bus users and misses people who never use buses.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Link to bias.",
        "workingLatex": "\\Rightarrow \\text{biased results}",
        "explanation": "Their opinions may differ from the wider public, so the results are biased.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Summarise.",
        "workingLatex": "\\text{easy but biased}",
        "explanation": "Opportunity sampling here is easy but its dependence on who is present makes it biased.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "\\text{ask people at the station; limitation: unrepresentative}",
        "explanation": "Method: ask available people at the bus station; limitation: the sample is unrepresentative of the whole public.",
        "diagram": null
      }
    ],
    "finalAnswer": "The researcher asks whoever is available (e.g. people at the bus station) until they have enough responses. Limitation: it only captures people present at that time and place (mostly bus users), so the sample is unrepresentative and biased."
  }
},
{
  "id": "al.y1.stats.sampling.q059",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["opportunity-sampling", "advantages"],
  "questionText": "Give two advantages of opportunity sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the basic idea.",
        "workingLatex": "\\text{sample who is available}",
        "explanation": "Because you just take whoever is convenient, the method has some practical strengths.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first advantage.",
        "workingLatex": "\\text{Advantage 1: easy and quick}",
        "explanation": "It is very easy and quick to carry out, since you simply approach available people.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the second advantage.",
        "workingLatex": "\\text{Advantage 2: cheap}",
        "explanation": "It is inexpensive, needing little time or organisation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note no frame is needed.",
        "workingLatex": "\\text{no sampling frame required}",
        "explanation": "You do not need a list of the population, so it works even when none exists.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note minimal planning.",
        "workingLatex": "\\text{little planning needed}",
        "explanation": "It needs almost no advance planning, so it can be done on the spot.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Give a good use case.",
        "workingLatex": "\\text{useful for a pilot study}",
        "explanation": "It is handy for a quick pilot study to test questions before a proper survey.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note it suits tight budgets.",
        "workingLatex": "\\text{good when time/money limited}",
        "explanation": "It is a reasonable choice when time or money is very limited.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two advantages.",
        "workingLatex": "+\\text{quick/easy}, \\ +\\text{cheap}",
        "explanation": "The main advantages are that it is quick and easy and that it is cheap.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{easy, cheap, no frame}",
        "explanation": "Opportunity sampling is quick, easy and cheap, and needs no sampling frame.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is very quick and easy to carry out and is cheap, needing little planning and no sampling frame — making it useful for a quick pilot study or when time and money are limited."
  }
},
{
  "id": "al.y1.stats.sampling.q060",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["opportunity-sampling", "disadvantages", "bias"],
  "questionText": "Give two disadvantages of opportunity sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the basic idea.",
        "workingLatex": "\\text{take who is available}",
        "explanation": "Because it depends entirely on who is present, it has serious weaknesses.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the first disadvantage.",
        "workingLatex": "\\text{Disadvantage 1: unrepresentative}",
        "explanation": "The sample is very likely to be unrepresentative of the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Explain why.",
        "workingLatex": "\\text{depends on time and place}",
        "explanation": "It captures only those at a particular time and place, who may differ from everyone else.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Give an example.",
        "workingLatex": "\\text{daytime shoppers} \\ne \\text{whole public}",
        "explanation": "For example, people shopping on a weekday morning are not typical of the whole public.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the second disadvantage.",
        "workingLatex": "\\text{Disadvantage 2: highly biased}",
        "explanation": "Because selection is non-random and depends on the researcher, the results are open to strong bias.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Note the effect on error.",
        "workingLatex": "\\text{cannot measure sampling error}",
        "explanation": "As with other non-random methods, you cannot measure how reliable the results are.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Note results are not generalisable.",
        "workingLatex": "\\text{cannot generalise}",
        "explanation": "The findings cannot safely be generalised to the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the two disadvantages.",
        "workingLatex": "-\\text{unrepresentative}, \\ -\\text{biased}",
        "explanation": "The main drawbacks are that it is unrepresentative and highly open to bias.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{unrepresentative and biased}",
        "explanation": "Opportunity sampling is unrepresentative (it depends on time and place) and highly open to bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "It is very likely to be unrepresentative (it depends entirely on who is present at that time and place) and is highly open to bias, so the results cannot safely be generalised to the whole population."
  }
},
{
  "id": "al.y1.stats.sampling.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["opportunity-sampling", "bias", "improve-method", "multi-part"],
  "questionText": "To find out whether students support a new uniform policy, a student asks $30$ of their friends and finds most agree, concluding that most students at the school support it. (a) Name the sampling method used. (b) Explain why the conclusion may be unreliable. (c) Suggest a better sampling method.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify how the sample was chosen.",
        "workingLatex": "\\text{asked available friends}",
        "explanation": "The student simply asked friends who were convenient to reach.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Name the method (part a).",
        "workingLatex": "\\text{opportunity (convenience) sampling}",
        "explanation": "Sampling whoever is convenient — here, friends — is opportunity (convenience) sampling.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note the friends are not random.",
        "workingLatex": "\\text{friends not randomly chosen}",
        "explanation": "The friends were not selected at random from all students.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Explain why friends are unrepresentative.",
        "workingLatex": "\\text{friends may share views}",
        "explanation": "Friends often share similar backgrounds and opinions, so they may not reflect the whole school.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Identify who is missed.",
        "workingLatex": "\\text{other year groups excluded}",
        "explanation": "Students in other year groups or friendship circles are unlikely to be asked at all.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Comment on the sample size.",
        "workingLatex": "30 \\text{ is small}",
        "explanation": "Thirty students is also a small fraction of the school, adding uncertainty.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the reliability conclusion (part b).",
        "workingLatex": "\\text{biased, cannot generalise}",
        "explanation": "Because the sample is biased and small, the conclusion about the whole school is unreliable.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Introduce a better approach (part c).",
        "workingLatex": "\\text{use a random method}",
        "explanation": "A random method that covers the whole school would be far better.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Suggest stratified sampling.",
        "workingLatex": "\\text{stratify by year group}",
        "explanation": "Divide the school into year groups (strata) and sample each in proportion to its size.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Describe selection within strata.",
        "workingLatex": "\\text{SRS within each year}",
        "explanation": "Within each year group, use simple random sampling from the register.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain why this is better.",
        "workingLatex": "\\text{representative of whole school}",
        "explanation": "This guarantees every year group is represented in proportion, giving a representative sample.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note the improvement in reliability.",
        "workingLatex": "\\text{conclusion more trustworthy}",
        "explanation": "The conclusion would then be far more trustworthy for the whole school.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Note an alternative.",
        "workingLatex": "\\text{or SRS from the register}",
        "explanation": "A simple random sample from the whole school register would also be a big improvement.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the answers.",
        "workingLatex": "\\text{opportunity; biased; use stratified/SRS}",
        "explanation": "The method is opportunity sampling; the conclusion is unreliable because it is biased and small; a stratified (or simple random) sample of the school would be better.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Opportunity (convenience) sampling. (b) Friends are not randomly chosen and may share the student's views, other groups are missed, and $30$ is small — so the sample is biased and the conclusion cannot be generalised. (c) Use stratified sampling by year group (random within each), or a simple random sample from the school register."
  }
},
{
  "id": "al.y1.stats.sampling.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["opportunity-sampling", "identify"],
  "questionText": "A reporter interviews the first $10$ people who leave a cinema. Name the sampling method used and give a reason.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note how the people are chosen.",
        "workingLatex": "\\text{first } 10 \\text{ leaving}",
        "explanation": "The reporter takes whoever happens to leave first — the most convenient people.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Check for randomness.",
        "workingLatex": "\\text{no random selection}",
        "explanation": "No random numbers or list are used to choose them.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check for a frame.",
        "workingLatex": "\\text{no sampling frame}",
        "explanation": "There is no list of cinema-goers to select from.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rule out systematic sampling.",
        "workingLatex": "\\text{no fixed interval}",
        "explanation": "There is no interval $k$ being used, so it is not systematic sampling.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Match to the method.",
        "workingLatex": "\\text{available people} \\Rightarrow \\text{opportunity}",
        "explanation": "Taking simply the available people is opportunity (convenience) sampling.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer.",
        "workingLatex": "\\text{opportunity sampling}",
        "explanation": "The method is opportunity sampling, because the reporter takes whoever is conveniently available.",
        "diagram": null
      }
    ],
    "finalAnswer": "Opportunity (convenience) sampling — the reporter simply takes the people who are conveniently available (the first to leave), with no random selection or sampling frame."
  }
},
{
  "id": "al.y1.stats.sampling.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["self-selection", "opportunity-sampling", "bias", "multi-part"],
  "questionText": "A radio show asks listeners to phone in to vote on a local issue, and $500$ people call. The presenter claims the result represents public opinion. (a) Explain why the sample is likely to be biased. (b) Suggest a better method.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify who can take part.",
        "workingLatex": "\\text{only listeners of the show}",
        "explanation": "Only people who happen to be listening to that show can even hear the request to vote.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note listeners are a special group.",
        "workingLatex": "\\text{listeners} \\ne \\text{whole public}",
        "explanation": "The show's listeners are a particular slice of the public (a certain age or interest group), not everyone.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify who chooses to respond.",
        "workingLatex": "\\text{only those who choose to call}",
        "explanation": "Among listeners, only those who decide to phone in are counted — this is self-selection.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Name the sampling type.",
        "workingLatex": "\\text{self-selected (volunteer) sample}",
        "explanation": "A sample of volunteers who opt in is a self-selected sample, a form of non-random opportunity sampling.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Explain who volunteers.",
        "workingLatex": "\\text{people with strong views}",
        "explanation": "People who feel strongly about the issue are far more likely to bother phoning in.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain who is missed.",
        "workingLatex": "\\text{indifferent people don't call}",
        "explanation": "Those who are indifferent, or who cannot call, are left out.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the resulting distortion.",
        "workingLatex": "\\text{strong opinions over-represented}",
        "explanation": "So strong opinions are over-represented and moderate views under-represented.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the bias conclusion (part a).",
        "workingLatex": "\\Rightarrow \\text{biased}",
        "explanation": "Both the listener base and the self-selection make the sample biased, so it does not represent the public.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the error cannot be measured.",
        "workingLatex": "\\text{non-random} \\Rightarrow \\text{no error estimate}",
        "explanation": "Being non-random, the reliability of the result cannot be measured either.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Introduce a better method (part b).",
        "workingLatex": "\\text{use a random sample of the public}",
        "explanation": "A random sample drawn from the whole public would be far better.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Suggest a specific approach.",
        "workingLatex": "\\text{stratified / simple random}",
        "explanation": "For example, a stratified sample of local residents (random within each group), or a simple random sample from the electoral roll.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Explain why it is better.",
        "workingLatex": "\\text{everyone can be selected}",
        "explanation": "This gives everyone a chance of selection, not just self-selecting listeners, so it represents the public.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answers.",
        "workingLatex": "\\text{self-selected} \\Rightarrow \\text{biased; use random sample}",
        "explanation": "The phone-in is a biased self-selected sample; a random (stratified or simple random) sample of the public would be far more representative.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Only listeners can respond, and only those who choose to call — a self-selected sample. People with strong views are over-represented, so it is biased and does not represent the public. (b) Use a random sample of the whole public, e.g. a stratified or simple random sample from the electoral roll."
  }
},
{
  "id": "al.y1.stats.sampling.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["identify-method", "systematic-sampling", "reasoning"],
  "questionText": "A manager selects every $20$th name from an alphabetical staff list, starting from a randomly chosen position among the first $20$. Name the sampling method and give one advantage and one disadvantage.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the fixed interval.",
        "workingLatex": "\\text{every } 20\\text{th name}",
        "explanation": "Selections are taken a fixed distance apart in the list.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the random start.",
        "workingLatex": "\\text{random start in } 1\\text{–}20",
        "explanation": "The first name is chosen randomly within the first interval.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Match to a method.",
        "workingLatex": "\\text{regular interval + random start}",
        "explanation": "A fixed interval with a random start is the signature of systematic sampling.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rule out simple random sampling.",
        "workingLatex": "\\text{not every sample possible}",
        "explanation": "It is not simple random sampling, since once the start is fixed the whole sample is determined.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rule out stratified sampling.",
        "workingLatex": "\\text{no groups used}",
        "explanation": "It is not stratified, because the population is not divided into groups.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Name the method.",
        "workingLatex": "\\text{systematic sampling}",
        "explanation": "So the method is systematic sampling, with interval $k = 20$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State an advantage.",
        "workingLatex": "+\\text{quick, even spread}",
        "explanation": "Advantage: it is quick and simple and spreads the sample evenly through the list.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State a disadvantage.",
        "workingLatex": "-\\text{periodic bias risk}",
        "explanation": "Disadvantage: if the list has a repeating pattern with period $20$, the sample could be biased.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note it is only quasi-random.",
        "workingLatex": "\\text{only the start is random}",
        "explanation": "It is only quasi-random, since chance enters only through the starting point.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the answer.",
        "workingLatex": "\\text{systematic; quick but periodic-bias risk}",
        "explanation": "The method is systematic sampling: quick with an even spread, but at risk of periodic bias.",
        "diagram": null
      }
    ],
    "finalAnswer": "Systematic sampling (interval $20$, random start). Advantage: quick and spreads the sample evenly. Disadvantage: risk of periodic bias if the list has a pattern with period $20$."
  }
},
{
  "id": "al.y1.stats.sampling.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Intermediate",
  "marks": 3,
  "answerType": "written",
  "tags": ["identify-method", "stratified-sampling", "reasoning"],
  "questionText": "A researcher divides a company into its departments and randomly selects a number of employees from each department in proportion to the department's size. Name the sampling method and justify your answer.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the population is grouped.",
        "workingLatex": "\\text{split into departments}",
        "explanation": "The population is first divided into groups (departments).",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note proportional numbers.",
        "workingLatex": "\\text{number} \\propto \\text{department size}",
        "explanation": "The number taken from each department is proportional to its size.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Note the random selection.",
        "workingLatex": "\\text{randomly within each department}",
        "explanation": "Members within each department are chosen at random.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Match to a method.",
        "workingLatex": "\\text{groups + proportional + random}",
        "explanation": "Dividing into groups, allocating proportionally, and sampling randomly within is stratified sampling.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rule out quota sampling.",
        "workingLatex": "\\text{quota is non-random}",
        "explanation": "It is not quota sampling, because selection within each group is random, not by an interviewer's choice.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rule out systematic sampling.",
        "workingLatex": "\\text{no fixed interval}",
        "explanation": "It is not systematic, since no fixed interval is used.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Name the method.",
        "workingLatex": "\\text{stratified sampling}",
        "explanation": "So the method is stratified sampling.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "State the benefit.",
        "workingLatex": "\\text{each department represented, random within}",
        "explanation": "It guarantees each department is represented in proportion while keeping random (unbiased) selection within each.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the answer.",
        "workingLatex": "\\text{stratified sampling}",
        "explanation": "The method is stratified sampling: proportional groups with random selection within each.",
        "diagram": null
      }
    ],
    "finalAnswer": "Stratified sampling — the population is divided into groups (departments), a proportional number is taken from each, and members are chosen randomly within each group."
  }
},
{
  "id": "al.y1.stats.sampling.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["choose-method", "systematic-sampling", "reasoning", "multi-part"],
  "questionText": "A factory produces thousands of bottles a day on a continuous production line and wants to monitor their quality. (a) Recommend a suitable sampling method and justify it. (b) Give one advantage and one disadvantage of your choice.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the situation.",
        "workingLatex": "\\text{continuous line, thousands/day}",
        "explanation": "Bottles come past continuously in huge numbers throughout the day.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Consider a full list.",
        "workingLatex": "\\text{no advance list of all bottles}",
        "explanation": "You cannot list and number every bottle before it is made, so there is no ready sampling frame.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rule out simple random sampling.",
        "workingLatex": "\\text{SRS needs a full frame}",
        "explanation": "Simple random sampling is impractical, because it would require numbering all the bottles first.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Note the items are ordered in time.",
        "workingLatex": "\\text{bottles arrive in sequence}",
        "explanation": "The bottles naturally come in a sequence as they pass the inspection point.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recommend a method (part a).",
        "workingLatex": "\\text{use systematic sampling}",
        "explanation": "Systematic sampling suits this: take every $k$th bottle as it passes.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Describe the interval.",
        "workingLatex": "k = \\dfrac{N}{n}",
        "explanation": "Choose the interval $k$ from the number produced and the sample size wanted.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Describe the start.",
        "workingLatex": "\\text{random start in } 1\\text{–}k",
        "explanation": "Pick a random starting bottle within the first interval, then take every $k$th one.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Justify the choice.",
        "workingLatex": "\\text{no advance frame needed}",
        "explanation": "This works without an advance list and spreads the checks evenly across the day's production.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State an advantage (part b).",
        "workingLatex": "+\\text{quick, even coverage}",
        "explanation": "Advantage: it is quick, easy on a moving line, and gives even coverage of the run.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State a disadvantage (part b).",
        "workingLatex": "-\\text{periodic fault could bias}",
        "explanation": "Disadvantage: if a machine fault recurs with the same period as $k$, the sample could be biased.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Suggest a safeguard.",
        "workingLatex": "\\text{vary the interval / start}",
        "explanation": "Varying the interval or start avoids clashing with any repeating machine cycle.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note why a sample (not a census) fits.",
        "workingLatex": "\\text{quality test may damage the bottle}",
        "explanation": "If testing a bottle spoils it, only a sample can be tested anyway, so checking every $k$th bottle is exactly the sensible approach.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the recommendation.",
        "workingLatex": "\\text{systematic: every } k\\text{th bottle}",
        "explanation": "Systematic sampling (every $k$th bottle from a random start) is the practical, even-coverage choice for a production line.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Systematic sampling — take every $k$th bottle (with $k = \\tfrac{N}{n}$) from a random start; this needs no advance list and gives even coverage, unlike SRS. (b) Advantage: quick with even coverage; disadvantage: risk of periodic bias if a fault recurs with period $k$."
  }
},
{
  "id": "al.y1.stats.sampling.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 6,
  "answerType": "written",
  "tags": ["bias", "sources-of-bias", "non-response", "reasoning"],
  "questionText": "Describe three different sources of bias that can affect the results of a survey, giving an example of each.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Define bias.",
        "workingLatex": "\\text{bias} = \\text{systematic error}",
        "explanation": "Bias is a systematic tendency for results to be wrong in a particular direction.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Introduce the first source.",
        "workingLatex": "\\text{(1) selection bias}",
        "explanation": "Selection bias arises when the way the sample is chosen leaves some members with no or reduced chance of selection.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Give an example of selection bias.",
        "workingLatex": "\\text{out-of-date frame misses new members}",
        "explanation": "For example, using an old membership list omits recent joiners, so they are never sampled.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Introduce the second source.",
        "workingLatex": "\\text{(2) non-response bias}",
        "explanation": "Non-response bias occurs when those who do not reply differ from those who do.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Give an example of non-response bias.",
        "workingLatex": "\\text{busy people don't return the form}",
        "explanation": "If busy people rarely return a postal survey, the results over-represent those with more free time.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain the effect.",
        "workingLatex": "\\text{respondents unrepresentative}",
        "explanation": "The people who do respond are then unrepresentative of the whole population.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Introduce the third source.",
        "workingLatex": "\\text{(3) self-selection bias}",
        "explanation": "Self-selection (volunteer) bias occurs when people choose whether to take part.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Give an example of self-selection bias.",
        "workingLatex": "\\text{only strong opinions phone in}",
        "explanation": "In a phone-in vote, only people with strong views bother to respond, so their views dominate.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Mention a further source.",
        "workingLatex": "\\text{(4) question wording}",
        "explanation": "Leading or loaded question wording can also push respondents toward a particular answer.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Explain the wording effect.",
        "workingLatex": "\\text{loaded question} \\Rightarrow \\text{skewed answers}",
        "explanation": "A question phrased to suggest an answer distorts the responses.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Suggest how to reduce bias.",
        "workingLatex": "\\text{random sample, follow up, neutral wording}",
        "explanation": "Using a random sample, following up non-responders, and asking neutral questions all reduce bias.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Summarise.",
        "workingLatex": "\\text{selection, non-response, self-selection}",
        "explanation": "Three key sources are selection bias, non-response bias and self-selection bias.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the answer.",
        "workingLatex": "\\text{3 sources with examples}",
        "explanation": "Selection bias (out-of-date frame), non-response bias (busy people don't reply) and self-selection bias (only strong views respond) are three sources, each making the sample unrepresentative.",
        "diagram": null
      }
    ],
    "finalAnswer": "(1) Selection bias — an out-of-date frame misses new members. (2) Non-response bias — busy people fail to reply, so respondents differ from non-respondents. (3) Self-selection bias — in a phone-in, only those with strong views respond. Each makes the sample systematically unrepresentative."
  }
},
{
  "id": "al.y1.stats.sampling.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["stratified-sampling", "allocation", "compare-srs", "multi-part"],
  "questionText": "A sixth-form college has $480$ students in Year 12 and $320$ in Year 13. A stratified sample of $50$ is taken. (a) Find the number from each year. (b) Describe how students are chosen within a year. (c) Explain why stratified sampling is better than simple random sampling here. (d) Give one disadvantage of stratified sampling.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the total number of students.",
        "workingLatex": "N = 480 + 320 = 800",
        "explanation": "Adding the two years gives $800$ students.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the sampling fraction.",
        "workingLatex": "\\dfrac{50}{800} = \\dfrac{1}{16}",
        "explanation": "Each year contributes $\\tfrac{1}{16}$ of its students.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Allocate Year 12.",
        "workingLatex": "\\dfrac{480}{800} \\times 50 = 30",
        "explanation": "Year 12 contributes $30$ students.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Allocate Year 13.",
        "workingLatex": "\\dfrac{320}{800} \\times 50 = 20",
        "explanation": "Year 13 contributes $20$ students.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the total (part a).",
        "workingLatex": "30 + 20 = 50\\ \\checkmark",
        "explanation": "The two parts add to the required $50$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Describe within-year selection (part b).",
        "workingLatex": "\\text{number the year, use SRS}",
        "explanation": "Within each year, list and number the students and use simple random sampling to pick the required number.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Keep chance in the method.",
        "workingLatex": "\\text{random within each stratum}",
        "explanation": "Random selection inside each year keeps the method fair and unbiased there.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Explain the SRS risk (part c).",
        "workingLatex": "\\text{SRS could over-represent one year}",
        "explanation": "A simple random sample of $50$ might, by chance, take mostly Year 12 or mostly Year 13.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State what stratified guarantees.",
        "workingLatex": "\\text{both years in proportion}",
        "explanation": "Stratified sampling guarantees both years appear in proportion ($30$ and $20$).",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Explain why this matters.",
        "workingLatex": "\\text{years may differ}",
        "explanation": "Since the two years may hold different views, representing both properly gives more reliable results.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the comparison conclusion.",
        "workingLatex": "\\text{stratified more representative}",
        "explanation": "So stratified sampling is more representative and more accurate than SRS here.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State a disadvantage (part d).",
        "workingLatex": "\\text{must know each student's year}",
        "explanation": "Disadvantage: you must know which year each student is in and the size of each year.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Explain the disadvantage.",
        "workingLatex": "\\text{more work than SRS}",
        "explanation": "This makes it more complex and time-consuming to organise than a single random sample.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Collect the answers.",
        "workingLatex": "30, 20",
        "explanation": "Sample $30$ from Year 12 and $20$ from Year 13, randomly within each year.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) $30$ from Year 12, $20$ from Year 13. (b) Number each year and use SRS within it. (c) SRS could by chance over-represent one year, whereas stratified guarantees both years in proportion — more representative if the years differ. (d) You must know each student's year and the year sizes, making it more work than SRS."
  }
},
{
  "id": "al.y1.stats.sampling.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 5,
  "answerType": "written",
  "tags": ["quota-sampling", "opportunity-sampling", "compare", "reliability"],
  "questionText": "Explain the difference between quota sampling and opportunity sampling, and state, with a reason, which is likely to give more reliable results.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State a shared feature.",
        "workingLatex": "\\text{both non-random, no frame}",
        "explanation": "Both are non-random methods that need no sampling frame.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Describe quota sampling.",
        "workingLatex": "\\text{quota: set targets per group}",
        "explanation": "Quota sampling divides the population into groups and sets a target number for each.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Describe opportunity sampling.",
        "workingLatex": "\\text{opportunity: take whoever is available}",
        "explanation": "Opportunity sampling has no targets; it simply takes whoever is available.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the key difference.",
        "workingLatex": "\\text{quota controls group proportions}",
        "explanation": "The key difference is that quota sampling controls how many come from each group, whereas opportunity sampling does not control this at all.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note the consequence for representation.",
        "workingLatex": "\\text{quota ensures groups represented}",
        "explanation": "Quota sampling therefore guarantees each group appears, while an opportunity sample might contain almost none of some group.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Acknowledge both can be biased.",
        "workingLatex": "\\text{both open to bias}",
        "explanation": "Both remain open to bias — quota through interviewer choice, opportunity through who happens to be present.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Give an example of each.",
        "workingLatex": "\\text{quota: } 60 \\text{ men, } 40 \\text{ women; opp: first } 100 \\text{ passers-by}",
        "explanation": "A quota sampler seeks fixed numbers per group; an opportunity sampler just takes the first people who pass, whatever their group.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Note the risk in opportunity sampling.",
        "workingLatex": "\\text{opportunity may miss a group}",
        "explanation": "An opportunity sample could easily contain almost no members of some group, badly distorting the results.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Compare their reliability.",
        "workingLatex": "\\text{quota more structured}",
        "explanation": "Because quota sampling at least controls the group proportions, it is usually more structured and reliable than pure opportunity sampling.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Give the reason.",
        "workingLatex": "\\text{group balance reduces distortion}",
        "explanation": "Controlling the group balance stops one group from dominating, which is the main weakness of opportunity sampling.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Acknowledge quota's own weakness.",
        "workingLatex": "\\text{quota still has interviewer bias}",
        "explanation": "Quota sampling is not perfect, since the interviewer still chooses individuals within each group.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Add the caveat.",
        "workingLatex": "\\text{neither gives sampling error}",
        "explanation": "Neither is random, so neither lets you measure the sampling error; a random method would still be better than both.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the conclusion.",
        "workingLatex": "\\text{quota more reliable}",
        "explanation": "Quota sampling is likely to be more reliable than opportunity sampling because it guarantees each group is represented in proportion.",
        "diagram": null
      }
    ],
    "finalAnswer": "Both are non-random and need no frame, but quota sampling sets and fills a target for each group, whereas opportunity sampling just takes whoever is available. Quota sampling is likely more reliable, because controlling the group proportions prevents one group from dominating (though neither is random)."
  }
},
{
  "id": "al.y1.stats.sampling.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Statistics",
  "subtopic": "Sampling",
  "subtopicId": "al.y1.stats.sampling",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "written",
  "tags": ["choose-method", "compare", "opinion-poll", "capstone"],
  "questionText": "A polling company wants to predict the result of a national election. Discuss which sampling method it should use, referring to at least two methods and their drawbacks, and give a recommendation.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the population.",
        "workingLatex": "\\text{millions of voters, spread out}",
        "explanation": "The population is huge — millions of voters spread across the whole country.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the goal.",
        "workingLatex": "\\text{representative of all voters}",
        "explanation": "The poll must represent all voters accurately to predict the result.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Consider simple random sampling.",
        "workingLatex": "\\text{SRS: unbiased but needs full frame}",
        "explanation": "Simple random sampling is unbiased, but it needs a complete national list of voters.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the SRS drawback.",
        "workingLatex": "\\text{huge frame, scattered people}",
        "explanation": "Compiling that frame and reaching scattered voters is impractical and expensive.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Consider opportunity/quota sampling.",
        "workingLatex": "\\text{cheap but non-random}",
        "explanation": "Opportunity and quota sampling are cheap and need no frame, but they are non-random.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State their drawback.",
        "workingLatex": "\\text{interviewer / availability bias}",
        "explanation": "They are open to bias and do not let you measure the reliability of the prediction.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Introduce stratified sampling.",
        "workingLatex": "\\text{stratify by region, age, etc.}",
        "explanation": "Stratified sampling divides voters into groups such as region and age band.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe the allocation.",
        "workingLatex": "\\text{proportional numbers per stratum}",
        "explanation": "It then takes a number from each group in proportion to its size.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Describe within-stratum selection.",
        "workingLatex": "\\text{random within each stratum}",
        "explanation": "Within each group, voters are chosen randomly.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the benefit.",
        "workingLatex": "\\text{all key groups represented}",
        "explanation": "This guarantees every key group (region, age, etc.) is represented in proportion, which matters when groups vote differently.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compare with the alternatives.",
        "workingLatex": "\\text{more representative than opportunity/quota}",
        "explanation": "It is far more representative than opportunity or quota sampling and more practical than SRS on a national scale.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note a remaining risk.",
        "workingLatex": "\\text{watch for non-response bias}",
        "explanation": "Even so, the company must guard against non-response bias by following up people who do not reply.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Give the recommendation.",
        "workingLatex": "\\text{recommend stratified sampling}",
        "explanation": "The company should use stratified sampling (possibly in stages), balancing representativeness and practicality.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the reasoning.",
        "workingLatex": "\\text{representative + feasible}",
        "explanation": "Stratified sampling gives a representative sample of a divided electorate while remaining feasible for a large population.",
        "diagram": null
      }
    ],
    "finalAnswer": "SRS is unbiased but needs an impractical national frame; opportunity/quota sampling are cheap but non-random and biased. Stratified sampling — dividing voters by region, age, etc., sampling each in proportion and randomly within — is the best balance of representativeness and practicality. Recommendation: use stratified sampling and guard against non-response bias."
  }
},
];
