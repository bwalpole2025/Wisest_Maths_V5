import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.systematic-listing.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers"],
    "questionText": "Using each of the digits $3$, $5$ and $7$ once, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "Working through the choices in a fixed order means we can be sure we neither miss any numbers nor repeat one.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 3.", "workingLatex": "35, \\ 37", "explanation": "With $3$ in the tens place, the remaining digits $5$ and $7$ each go in the units place.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 5.", "workingLatex": "53, \\ 57", "explanation": "Now $5$ leads, and the leftover digits $3$ and $7$ fill the units place.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 7.", "workingLatex": "73, \\ 75", "explanation": "Finally $7$ leads, with $3$ and $5$ in the units place.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "35, 37, 53, 57, 73, 75", "explanation": "Putting every case together gives all the possibilities in a tidy list.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "6 \\text{ numbers}", "explanation": "There are $3$ choices for the tens digit and $2$ left for the units, matching the six we listed.", "diagram": null }
      ],
      "finalAnswer": "$35, 37, 53, 57, 73, 75$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A caf\u00e9 lets you choose one sandwich (cheese or ham) and one drink (tea, coffee or juice). List all the possible sandwich-and-drink orders.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the sandwich, then run through the drinks}", "explanation": "Holding the sandwich still while cycling through every drink guarantees we cover each pairing exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Sandwich = cheese.", "workingLatex": "\\text{(cheese, tea), (cheese, coffee), (cheese, juice)}", "explanation": "With cheese chosen, each of the three drinks gives one valid order.", "diagram": null },
        { "stepNumber": 3, "description": "Sandwich = ham.", "workingLatex": "\\text{(ham, tea), (ham, coffee), (ham, juice)}", "explanation": "Now ham is fixed, and again each drink produces one order.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 orders in total}", "explanation": "Bringing both cases together lists every sandwich-and-drink combination.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "There are $2$ sandwiches and $3$ drinks, so $2 \\times 3 = 6$ orders, which matches our list.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ orders}", "explanation": "The complete, non-repeating list contains six orders.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(cheese, tea), (cheese, coffee), (cheese, juice), (ham, tea), (ham, coffee), (ham, juice)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "outcomes", "coins"],
    "questionText": "Two fair coins are tossed. Each can land heads ($H$) or tails ($T$). List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first coin, then vary the second}", "explanation": "Recording the first coin then the second in a set order stops us from missing or repeating any outcome.", "diagram": null },
        { "stepNumber": 2, "description": "First coin = H.", "workingLatex": "HH, \\ HT", "explanation": "If the first coin is heads, the second can be heads or tails.", "diagram": null },
        { "stepNumber": 3, "description": "First coin = T.", "workingLatex": "TH, \\ TT", "explanation": "If the first coin is tails, the second can again be heads or tails.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "HH, HT, TH, TT", "explanation": "Combining both cases gives every possible result of the two tosses.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 2 = 4", "explanation": "Each coin has $2$ outcomes, so $2 \\times 2 = 4$ outcomes in total.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4 \\text{ outcomes}", "explanation": "There are exactly four equally likely outcomes.", "diagram": null }
      ],
      "finalAnswer": "$HH, HT, TH, TT$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers"],
    "questionText": "Using each of the digits $2$, $4$ and $6$ once, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "Fixing the tens digit and cycling through the rest keeps the list complete and repeat-free.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 2.", "workingLatex": "24, \\ 26", "explanation": "With $2$ in the tens place, $4$ and $6$ take turns in the units place.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 4.", "workingLatex": "42, \\ 46", "explanation": "Now $4$ leads, so $2$ and $6$ fill the units place.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 6.", "workingLatex": "62, \\ 64", "explanation": "Finally $6$ leads, with $2$ and $4$ in the units place.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "24, 26, 42, 46, 62, 64", "explanation": "Gathering the cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three choices for the tens digit and two for the units give $6$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$24, 26, 42, 46, 62, 64$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs", "combinations"],
    "questionText": "Two monitors are to be chosen from four students: Amy, Ben, Cara and Dan. List all the possible pairs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each name with those listed after it}", "explanation": "A pair has no order, so to avoid repeats we only join each name to the ones that come later in the list.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with Amy.", "workingLatex": "\\text{Amy-Ben, Amy-Cara, Amy-Dan}", "explanation": "Amy can partner each of the three students who follow her.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with Ben.", "workingLatex": "\\text{Ben-Cara, Ben-Dan}", "explanation": "Ben pairs only with Cara and Dan; Ben-Amy is the same pair as Amy-Ben, already listed.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs starting with Cara.", "workingLatex": "\\text{Cara-Dan}", "explanation": "Cara only has Dan left after her, since earlier pairings are already counted.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 pairs}", "explanation": "Dan starts no new pair, so combining the cases gives every possible pair once.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 + 2 + 1 = 6", "explanation": "The counts $3, 2, 1$ add to $6$, confirming the list is complete.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Amy-Ben, Amy-Cara, Amy-Dan, Ben-Cara, Ben-Dan, Cara-Dan}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers", "repeats allowed"],
    "questionText": "Using the digits $1$, $2$ and $3$, and allowing a digit to be repeated, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "Because repeats are allowed, each units place may reuse the tens digit, so we still fix the tens digit and run through all three units.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 1.", "workingLatex": "11, \\ 12, \\ 13", "explanation": "With $1$ leading, the units digit can be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 2.", "workingLatex": "21, \\ 22, \\ 23", "explanation": "With $2$ leading, the units digit again runs through $1$, $2$, $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 3.", "workingLatex": "31, \\ 32, \\ 33", "explanation": "With $3$ leading, the units digit once more takes each value.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "11,12,13,21,22,23,31,32,33", "explanation": "Combining the three cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three choices for each digit give $3 \\times 3 = 9$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$11, 12, 13, 21, 22, 23, 31, 32, 33$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "outcomes", "coin and spinner"],
    "questionText": "A coin (heads $H$ or tails $T$) is tossed and a spinner numbered $1$, $2$, $3$ is spun. List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the coin, then run through the spinner}", "explanation": "Recording the coin first and cycling through the spinner numbers keeps every outcome listed exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Coin = H.", "workingLatex": "H1, \\ H2, \\ H3", "explanation": "With heads fixed, the spinner can land on $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Coin = T.", "workingLatex": "T1, \\ T2, \\ T3", "explanation": "With tails fixed, the spinner again gives $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "H1, H2, H3, T1, T2, T3", "explanation": "Putting both coin results together lists all outcomes.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two coin results and three spinner numbers give $2 \\times 3 = 6$ outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ outcomes}", "explanation": "The complete sample space has six outcomes.", "diagram": null }
      ],
      "finalAnswer": "$H1, H2, H3, T1, T2, T3$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "List all the different arrangements of the three letters $T$, $O$ and $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first letter, then arrange the other two}", "explanation": "Choosing the first letter and then ordering the remaining pair keeps the search organised and complete.", "diagram": null },
        { "stepNumber": 2, "description": "First letter T.", "workingLatex": "TOP, \\ TPO", "explanation": "With $T$ first, the letters $O$ and $P$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "First letter O.", "workingLatex": "OTP, \\ OPT", "explanation": "With $O$ first, the letters $T$ and $P$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "First letter P.", "workingLatex": "PTO, \\ POT", "explanation": "With $P$ first, the letters $T$ and $O$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "TOP, TPO, OTP, OPT, PTO, POT", "explanation": "Combining the three starting letters lists every arrangement.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "There are $3$ choices for the first letter, $2$ for the next and $1$ for the last, giving $6$.", "diagram": null }
      ],
      "finalAnswer": "$TOP, TPO, OTP, OPT, PTO, POT$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations"],
    "questionText": "A sundae is made by choosing one flavour (vanilla, chocolate or strawberry) and one sauce (toffee or raspberry). List all the possible sundaes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the flavour, then run through the sauces}", "explanation": "Fixing the flavour and pairing it with each sauce covers every sundae once.", "diagram": null },
        { "stepNumber": 2, "description": "Flavour = vanilla.", "workingLatex": "\\text{(vanilla, toffee), (vanilla, raspberry)}", "explanation": "Vanilla can be topped with either sauce.", "diagram": null },
        { "stepNumber": 3, "description": "Flavour = chocolate.", "workingLatex": "\\text{(chocolate, toffee), (chocolate, raspberry)}", "explanation": "Chocolate likewise pairs with each sauce.", "diagram": null },
        { "stepNumber": 4, "description": "Flavour = strawberry.", "workingLatex": "\\text{(strawberry, toffee), (strawberry, raspberry)}", "explanation": "Strawberry also gives two sundaes.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 sundaes}", "explanation": "Combining the three flavours lists all possible sundaes.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three flavours and two sauces give $3 \\times 2 = 6$ sundaes.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(vanilla, toffee), (vanilla, raspberry), (chocolate, toffee), (chocolate, raspberry), (strawberry, toffee), (strawberry, raspberry)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers"],
    "questionText": "Using each of the digits $1$, $5$ and $9$ once, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "A fixed tens digit with the others cycling through the units keeps the list orderly and complete.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 1.", "workingLatex": "15, \\ 19", "explanation": "With $1$ leading, $5$ and $9$ take the units place.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 5.", "workingLatex": "51, \\ 59", "explanation": "With $5$ leading, $1$ and $9$ take the units place.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 9.", "workingLatex": "91, \\ 95", "explanation": "With $9$ leading, $1$ and $5$ take the units place.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "15, 19, 51, 59, 91, 95", "explanation": "Gathering the cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three choices for the tens digit and two for the units give $6$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$15, 19, 51, 59, 91, 95$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "outfits"],
    "questionText": "An outfit is made from one top (red, blue or green) and one pair of trousers (black or grey). List all the possible outfits.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the top, then run through the trousers}", "explanation": "Holding the top steady and pairing it with each trouser colour covers every outfit exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Top = red.", "workingLatex": "\\text{(red, black), (red, grey)}", "explanation": "A red top can be worn with black or grey trousers.", "diagram": null },
        { "stepNumber": 3, "description": "Top = blue.", "workingLatex": "\\text{(blue, black), (blue, grey)}", "explanation": "A blue top gives the same two trouser choices.", "diagram": null },
        { "stepNumber": 4, "description": "Top = green.", "workingLatex": "\\text{(green, black), (green, grey)}", "explanation": "A green top also pairs with each colour of trousers.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 outfits}", "explanation": "Combining the three tops lists all possible outfits.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three tops and two trousers give $3 \\times 2 = 6$ outfits.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(red, black), (red, grey), (blue, black), (blue, grey), (green, black), (green, grey)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs"],
    "questionText": "Two fruits are to be picked from apple, banana and cherry to put in a lunchbox. List all the possible pairs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each fruit with those listed after it}", "explanation": "The order the fruits are picked does not matter, so we only join each fruit to the ones after it to avoid repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with apple.", "workingLatex": "\\text{apple-banana, apple-cherry}", "explanation": "Apple can be paired with each of the two fruits that follow it.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with banana.", "workingLatex": "\\text{banana-cherry}", "explanation": "Banana only has cherry left; banana-apple repeats apple-banana.", "diagram": null },
        { "stepNumber": 4, "description": "Cherry starts nothing new.", "workingLatex": "\\text{(no new pairs)}", "explanation": "Cherry has no fruit listed after it, so it begins no fresh pair.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{apple-banana, apple-cherry, banana-cherry}", "explanation": "Combining the cases lists every distinct pair.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "2 + 1 = 3", "explanation": "The counts $2$ and $1$ add to $3$, confirming three pairs.", "diagram": null }
      ],
      "finalAnswer": "$\\text{apple-banana, apple-cherry, banana-cherry}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers", "repeats allowed"],
    "questionText": "Using the digits $6$ and $7$, and allowing a digit to be repeated, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "With repeats allowed, each digit may appear twice, so we fix the tens digit and run through both units.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 6.", "workingLatex": "66, \\ 67", "explanation": "With $6$ leading, the units digit can be $6$ or $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 7.", "workingLatex": "76, \\ 77", "explanation": "With $7$ leading, the units digit can again be $6$ or $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "66, 67, 76, 77", "explanation": "Combining both cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two choices for each digit give $2 \\times 2 = 4$ numbers.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4 \\text{ numbers}", "explanation": "There are four two-digit numbers in the complete list.", "diagram": null }
      ],
      "finalAnswer": "$66, 67, 76, 77$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "outcomes", "spinners"],
    "questionText": "A colour spinner (red or blue) and a number spinner ($1$, $2$ or $3$) are each spun once. List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the colour, then run through the numbers}", "explanation": "Recording the colour first and cycling through the numbers keeps every outcome listed once.", "diagram": null },
        { "stepNumber": 2, "description": "Colour = red.", "workingLatex": "\\text{(red, 1), (red, 2), (red, 3)}", "explanation": "With red fixed, the number spinner can land on $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Colour = blue.", "workingLatex": "\\text{(blue, 1), (blue, 2), (blue, 3)}", "explanation": "With blue fixed, the number spinner again gives $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 outcomes}", "explanation": "Combining both colours lists all outcomes.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two colours and three numbers give $2 \\times 3 = 6$ outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ outcomes}", "explanation": "The complete sample space has six outcomes.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(red, 1), (red, 2), (red, 3), (blue, 1), (blue, 2), (blue, 3)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "Three books \u2014 Maths ($M$), English ($E$) and Science ($S$) \u2014 are placed in a row on a shelf. List all the possible orders.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first book, then arrange the other two}", "explanation": "Choosing which book goes on the left first, then ordering the rest, keeps the list complete.", "diagram": null },
        { "stepNumber": 2, "description": "First book M.", "workingLatex": "MES, \\ MSE", "explanation": "With $M$ first, $E$ and $S$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "First book E.", "workingLatex": "EMS, \\ ESM", "explanation": "With $E$ first, $M$ and $S$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "First book S.", "workingLatex": "SME, \\ SEM", "explanation": "With $S$ first, $M$ and $E$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "MES, MSE, EMS, ESM, SME, SEM", "explanation": "Combining the three starting books lists every order.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices, then two, then one give $6$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$MES, MSE, EMS, ESM, SME, SEM$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A pizza is made by choosing one base (thin or thick) and one topping (cheese, pepperoni or vegetable). List all the possible pizzas.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the base, then run through the toppings}", "explanation": "Fixing the base and pairing it with each topping guarantees every pizza is listed once.", "diagram": null },
        { "stepNumber": 2, "description": "Base = thin.", "workingLatex": "\\text{(thin, cheese), (thin, pepperoni), (thin, vegetable)}", "explanation": "A thin base can carry any of the three toppings.", "diagram": null },
        { "stepNumber": 3, "description": "Base = thick.", "workingLatex": "\\text{(thick, cheese), (thick, pepperoni), (thick, vegetable)}", "explanation": "A thick base gives the same three topping choices.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 pizzas}", "explanation": "Combining both bases lists all possible pizzas.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two bases and three toppings give $2 \\times 3 = 6$ pizzas.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ pizzas}", "explanation": "The complete list contains six pizzas.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(thin, cheese), (thin, pepperoni), (thin, vegetable), (thick, cheese), (thick, pepperoni), (thick, vegetable)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs"],
    "questionText": "A student must choose two option subjects from Art, Music, Drama and Dance. List all the possible pairs of subjects.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each subject with those listed after it}", "explanation": "A choice of two subjects has no order, so joining each subject only to later ones prevents repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with Art.", "workingLatex": "\\text{Art-Music, Art-Drama, Art-Dance}", "explanation": "Art can be paired with each of the three subjects that follow it.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with Music.", "workingLatex": "\\text{Music-Drama, Music-Dance}", "explanation": "Music pairs with Drama and Dance; Music-Art repeats Art-Music.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs starting with Drama.", "workingLatex": "\\text{Drama-Dance}", "explanation": "Drama has only Dance left after it.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 pairs}", "explanation": "Dance starts no new pair, so the cases together give every pair once.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 + 2 + 1 = 6", "explanation": "The counts $3, 2, 1$ add to $6$, confirming six pairs.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Art-Music, Art-Drama, Art-Dance, Music-Drama, Music-Dance, Drama-Dance}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "List all the different arrangements of the three letters $R$, $U$ and $N$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first letter, then arrange the other two}", "explanation": "Fixing the first letter and ordering the remaining pair keeps the search organised and complete.", "diagram": null },
        { "stepNumber": 2, "description": "First letter R.", "workingLatex": "RUN, \\ RNU", "explanation": "With $R$ first, $U$ and $N$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "First letter U.", "workingLatex": "URN, \\ UNR", "explanation": "With $U$ first, $R$ and $N$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "First letter N.", "workingLatex": "NRU, \\ NUR", "explanation": "With $N$ first, $R$ and $U$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "RUN, RNU, URN, UNR, NRU, NUR", "explanation": "Combining the three starting letters lists every arrangement.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices, then two, then one give $6$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$RUN, RNU, URN, UNR, NRU, NUR$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "For breakfast you choose one cereal (cornflakes or muesli) and one juice (orange, apple or mango). List all the possible breakfasts.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the cereal, then run through the juices}", "explanation": "Fixing the cereal and pairing it with each juice covers every breakfast once.", "diagram": null },
        { "stepNumber": 2, "description": "Cereal = cornflakes.", "workingLatex": "\\text{(cornflakes, orange), (cornflakes, apple), (cornflakes, mango)}", "explanation": "Cornflakes can go with any of the three juices.", "diagram": null },
        { "stepNumber": 3, "description": "Cereal = muesli.", "workingLatex": "\\text{(muesli, orange), (muesli, apple), (muesli, mango)}", "explanation": "Muesli gives the same three juice choices.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 breakfasts}", "explanation": "Combining both cereals lists all breakfasts.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two cereals and three juices give $2 \\times 3 = 6$ breakfasts.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ breakfasts}", "explanation": "The complete list contains six breakfasts.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(cornflakes, orange), (cornflakes, apple), (cornflakes, mango), (muesli, orange), (muesli, apple), (muesli, mango)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A meal deal offers one main (burger or wrap) and one side (fries or salad). List all the possible meals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the main, then run through the sides}", "explanation": "Fixing the main and pairing it with each side lists every meal once.", "diagram": null },
        { "stepNumber": 2, "description": "Main = burger.", "workingLatex": "\\text{(burger, fries), (burger, salad)}", "explanation": "A burger can come with fries or salad.", "diagram": null },
        { "stepNumber": 3, "description": "Main = wrap.", "workingLatex": "\\text{(wrap, fries), (wrap, salad)}", "explanation": "A wrap gives the same two side choices.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{4 meals}", "explanation": "Combining both mains lists all meals.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two mains and two sides give $2 \\times 2 = 4$ meals.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4 \\text{ meals}", "explanation": "The complete list contains four meals.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(burger, fries), (burger, salad), (wrap, fries), (wrap, salad)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "List all the different arrangements of the three letters $D$, $O$ and $G$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first letter, then arrange the other two}", "explanation": "Fixing the first letter, then ordering the remaining pair, keeps the list complete and repeat-free.", "diagram": null },
        { "stepNumber": 2, "description": "First letter D.", "workingLatex": "DOG, \\ DGO", "explanation": "With $D$ first, $O$ and $G$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "First letter O.", "workingLatex": "ODG, \\ OGD", "explanation": "With $O$ first, $D$ and $G$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "First letter G.", "workingLatex": "GDO, \\ GOD", "explanation": "With $G$ first, $D$ and $O$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "DOG, DGO, ODG, OGD, GDO, GOD", "explanation": "Combining the three starting letters lists every arrangement.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices, then two, then one give $6$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$DOG, DGO, ODG, OGD, GDO, GOD$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "ordered choices"],
    "questionText": "From tea, coffee and cola, a person names a first choice and a different second choice of drink. List all the possible (first, second) pairs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first choice, then vary the second}", "explanation": "Here order matters, so we fix the first drink and list each different second drink.", "diagram": null },
        { "stepNumber": 2, "description": "First = tea.", "workingLatex": "\\text{(tea, coffee), (tea, cola)}", "explanation": "After tea, the second choice can be coffee or cola (not tea again).", "diagram": null },
        { "stepNumber": 3, "description": "First = coffee.", "workingLatex": "\\text{(coffee, tea), (coffee, cola)}", "explanation": "After coffee, the second choice can be tea or cola.", "diagram": null },
        { "stepNumber": 4, "description": "First = cola.", "workingLatex": "\\text{(cola, tea), (cola, coffee)}", "explanation": "After cola, the second choice can be tea or coffee.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 ordered pairs}", "explanation": "Since order matters, (tea, coffee) and (coffee, tea) are both counted.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three first choices and two remaining second choices give $6$ pairs.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(tea, coffee), (tea, cola), (coffee, tea), (coffee, cola), (cola, tea), (cola, coffee)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs", "fixtures"],
    "questionText": "In a mini-league, each team plays every other team once. The teams are Lions, Tigers and Bears. List all the matches.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each team with those listed after it}", "explanation": "A match between two teams has no order, so joining each team only to later ones avoids listing a fixture twice.", "diagram": null },
        { "stepNumber": 2, "description": "Matches starting with Lions.", "workingLatex": "\\text{Lions v Tigers, Lions v Bears}", "explanation": "Lions play each of the two teams after them.", "diagram": null },
        { "stepNumber": 3, "description": "Matches starting with Tigers.", "workingLatex": "\\text{Tigers v Bears}", "explanation": "Tigers only have Bears left; Tigers v Lions is the same as Lions v Tigers.", "diagram": null },
        { "stepNumber": 4, "description": "Bears start nothing new.", "workingLatex": "\\text{(no new matches)}", "explanation": "Bears have no team after them, so they begin no fresh fixture.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{3 matches}", "explanation": "Combining the cases lists every match once.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "2 + 1 = 3", "explanation": "The counts $2$ and $1$ add to $3$ matches.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Lions v Tigers, Lions v Bears, Tigers v Bears}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs"],
    "questionText": "Two different toppings are chosen for a pizza from mushroom, onion, pepper and olive. List all the possible pairs of toppings.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each topping with those listed after it}", "explanation": "The two toppings are unordered, so we only join each topping to later ones to avoid repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with mushroom.", "workingLatex": "\\text{mushroom-onion, mushroom-pepper, mushroom-olive}", "explanation": "Mushroom can pair with each of the three toppings after it.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with onion.", "workingLatex": "\\text{onion-pepper, onion-olive}", "explanation": "Onion pairs with pepper and olive; onion-mushroom is already listed.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs starting with pepper.", "workingLatex": "\\text{pepper-olive}", "explanation": "Pepper only has olive left after it.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 pairs}", "explanation": "Olive starts no new pair, so the cases together give every pair once.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 + 2 + 1 = 6", "explanation": "The counts $3, 2, 1$ add to $6$ pairs.", "diagram": null }
      ],
      "finalAnswer": "$\\text{mushroom-onion, mushroom-pepper, mushroom-olive, onion-pepper, onion-olive, pepper-olive}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A snack is one packet of crisps (ready salted, cheese and onion, or salt and vinegar) and one drink (water or cola). List all the possible snacks.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the crisps, then run through the drinks}", "explanation": "Fixing the crisps and pairing them with each drink lists every snack exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Crisps = ready salted.", "workingLatex": "\\text{(ready salted, water), (ready salted, cola)}", "explanation": "Ready salted can go with water or cola.", "diagram": null },
        { "stepNumber": 3, "description": "Crisps = cheese and onion.", "workingLatex": "\\text{(cheese and onion, water), (cheese and onion, cola)}", "explanation": "Cheese and onion gives the same two drink choices.", "diagram": null },
        { "stepNumber": 4, "description": "Crisps = salt and vinegar.", "workingLatex": "\\text{(salt and vinegar, water), (salt and vinegar, cola)}", "explanation": "Salt and vinegar also pairs with each drink.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 snacks}", "explanation": "Combining the three crisp flavours lists all snacks.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three crisp flavours and two drinks give $3 \\times 2 = 6$ snacks.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(ready salted, water), (ready salted, cola), (cheese and onion, water), (cheese and onion, cola), (salt and vinegar, water), (salt and vinegar, cola)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "outcomes", "coin and spinner"],
    "questionText": "A coin (heads $H$ or tails $T$) is tossed and a spinner (red or blue) is spun. List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the coin, then run through the colours}", "explanation": "Recording the coin first and cycling through the colours lists each outcome once.", "diagram": null },
        { "stepNumber": 2, "description": "Coin = H.", "workingLatex": "\\text{(H, red), (H, blue)}", "explanation": "With heads fixed, the spinner can be red or blue.", "diagram": null },
        { "stepNumber": 3, "description": "Coin = T.", "workingLatex": "\\text{(T, red), (T, blue)}", "explanation": "With tails fixed, the spinner can again be red or blue.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{4 outcomes}", "explanation": "Combining both coin results lists all outcomes.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two coin results and two colours give $2 \\times 2 = 4$ outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "4 \\text{ outcomes}", "explanation": "The complete sample space has four outcomes.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(H, red), (H, blue), (T, red), (T, blue)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs"],
    "questionText": "Two different colours are chosen to paint a poster from red, green, blue and yellow. List all the possible pairs of colours.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each colour with those listed after it}", "explanation": "The pair of colours is unordered, so joining each colour only to later ones prevents repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with red.", "workingLatex": "\\text{red-green, red-blue, red-yellow}", "explanation": "Red can pair with each of the three colours after it.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with green.", "workingLatex": "\\text{green-blue, green-yellow}", "explanation": "Green pairs with blue and yellow; green-red repeats red-green.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs starting with blue.", "workingLatex": "\\text{blue-yellow}", "explanation": "Blue only has yellow left after it.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 pairs}", "explanation": "Yellow starts no new pair, so the cases together give every pair once.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 + 2 + 1 = 6", "explanation": "The counts $3, 2, 1$ add to $6$ pairs.", "diagram": null }
      ],
      "finalAnswer": "$\\text{red-green, red-blue, red-yellow, green-blue, green-yellow, blue-yellow}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "Three friends \u2014 Xanthe ($X$), Yusuf ($Y$) and Zo\u00eb ($Z$) \u2014 stand in a queue. List all the possible orders for the queue.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix who is first, then arrange the other two}", "explanation": "Choosing the person at the front first, then ordering the rest, keeps the list complete.", "diagram": null },
        { "stepNumber": 2, "description": "First X.", "workingLatex": "XYZ, \\ XZY", "explanation": "With $X$ at the front, $Y$ and $Z$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "First Y.", "workingLatex": "YXZ, \\ YZX", "explanation": "With $Y$ at the front, $X$ and $Z$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "First Z.", "workingLatex": "ZXY, \\ ZYX", "explanation": "With $Z$ at the front, $X$ and $Y$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "XYZ, XZY, YXZ, YZX, ZXY, ZYX", "explanation": "Combining the three front-runners lists every order.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices, then two, then one give $6$ orders.", "diagram": null }
      ],
      "finalAnswer": "$XYZ, XZY, YXZ, YZX, ZXY, ZYX$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A sandwich is made from one bread (white or brown) and one filling (ham, cheese or tuna). List all the possible sandwiches.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the bread, then run through the fillings}", "explanation": "Fixing the bread and pairing it with each filling lists every sandwich once.", "diagram": null },
        { "stepNumber": 2, "description": "Bread = white.", "workingLatex": "\\text{(white, ham), (white, cheese), (white, tuna)}", "explanation": "White bread can take any of the three fillings.", "diagram": null },
        { "stepNumber": 3, "description": "Bread = brown.", "workingLatex": "\\text{(brown, ham), (brown, cheese), (brown, tuna)}", "explanation": "Brown bread gives the same three fillings.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 sandwiches}", "explanation": "Combining both breads lists all sandwiches.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two breads and three fillings give $2 \\times 3 = 6$ sandwiches.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ sandwiches}", "explanation": "The complete list contains six sandwiches.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(white, ham), (white, cheese), (white, tuna), (brown, ham), (brown, cheese), (brown, tuna)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["systematic listing", "outcomes", "spinners"],
    "questionText": "A number spinner ($1$, $2$ or $3$) and a letter spinner ($A$ or $B$) are each spun once. List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the number, then run through the letters}", "explanation": "Recording the number first and cycling through the letters keeps every outcome listed once.", "diagram": null },
        { "stepNumber": 2, "description": "Number = 1.", "workingLatex": "1A, \\ 1B", "explanation": "With $1$ fixed, the letter spinner can give $A$ or $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Number = 2.", "workingLatex": "2A, \\ 2B", "explanation": "With $2$ fixed, the letter can again be $A$ or $B$.", "diagram": null },
        { "stepNumber": 4, "description": "Number = 3.", "workingLatex": "3A, \\ 3B", "explanation": "With $3$ fixed, the letter can once more be $A$ or $B$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "1A, 1B, 2A, 2B, 3A, 3B", "explanation": "Combining the three numbers lists all outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three numbers and two letters give $3 \\times 2 = 6$ outcomes.", "diagram": null }
      ],
      "finalAnswer": "$1A, 1B, 2A, 2B, 3A, 3B$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A two-course meal is one starter (soup or prawns) and one dessert (cake, ice cream or fruit). List all the possible meals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the starter, then run through the desserts}", "explanation": "Fixing the starter and pairing it with each dessert lists every meal exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Starter = soup.", "workingLatex": "\\text{(soup, cake), (soup, ice cream), (soup, fruit)}", "explanation": "Soup can be followed by any of the three desserts.", "diagram": null },
        { "stepNumber": 3, "description": "Starter = prawns.", "workingLatex": "\\text{(prawns, cake), (prawns, ice cream), (prawns, fruit)}", "explanation": "Prawns gives the same three dessert choices.", "diagram": null },
        { "stepNumber": 4, "description": "Collect the full list.", "workingLatex": "\\text{6 meals}", "explanation": "Combining both starters lists all meals.", "diagram": null },
        { "stepNumber": 5, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two starters and three desserts give $2 \\times 3 = 6$ meals.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "6 \\text{ meals}", "explanation": "The complete list contains six meals.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(soup, cake), (soup, ice cream), (soup, fruit), (prawns, cake), (prawns, ice cream), (prawns, fruit)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "ordered choices"],
    "questionText": "In a race between Ana, Bo and Cy, a gold medal is given for first place and a silver medal for second place. List all the possible (gold, silver) results.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the gold winner, then vary the silver}", "explanation": "Because gold and silver are different, order matters, so we fix the gold winner and list each possible silver winner.", "diagram": null },
        { "stepNumber": 2, "description": "Gold = Ana.", "workingLatex": "\\text{(Ana, Bo), (Ana, Cy)}", "explanation": "If Ana takes gold, silver can go to Bo or Cy.", "diagram": null },
        { "stepNumber": 3, "description": "Gold = Bo.", "workingLatex": "\\text{(Bo, Ana), (Bo, Cy)}", "explanation": "If Bo takes gold, silver can go to Ana or Cy.", "diagram": null },
        { "stepNumber": 4, "description": "Gold = Cy.", "workingLatex": "\\text{(Cy, Ana), (Cy, Bo)}", "explanation": "If Cy takes gold, silver can go to Ana or Bo.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 results}", "explanation": "As order matters, (Ana, Bo) and (Bo, Ana) are both valid results.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three gold winners and two remaining silver winners give $6$ results.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(Ana, Bo), (Ana, Cy), (Bo, Ana), (Bo, Cy), (Cy, Ana), (Cy, Bo)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers"],
    "questionText": "Using each of the digits $6$, $8$ and $9$ once, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "A fixed tens digit with the others cycling through the units keeps the list complete and repeat-free.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 6.", "workingLatex": "68, \\ 69", "explanation": "With $6$ leading, $8$ and $9$ take the units place.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 8.", "workingLatex": "86, \\ 89", "explanation": "With $8$ leading, $6$ and $9$ take the units place.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 9.", "workingLatex": "96, \\ 98", "explanation": "With $9$ leading, $6$ and $8$ take the units place.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "68, 69, 86, 89, 96, 98", "explanation": "Gathering the cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three choices for the tens digit and two for the units give $6$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$68, 69, 86, 89, 96, 98$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A lunch is one main (pizza, pasta or salad) and one drink (water or juice). List all the possible lunches.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the main, then run through the drinks}", "explanation": "Fixing the main and pairing it with each drink lists every lunch once.", "diagram": null },
        { "stepNumber": 2, "description": "Main = pizza.", "workingLatex": "\\text{(pizza, water), (pizza, juice)}", "explanation": "Pizza can come with water or juice.", "diagram": null },
        { "stepNumber": 3, "description": "Main = pasta.", "workingLatex": "\\text{(pasta, water), (pasta, juice)}", "explanation": "Pasta gives the same two drink choices.", "diagram": null },
        { "stepNumber": 4, "description": "Main = salad.", "workingLatex": "\\text{(salad, water), (salad, juice)}", "explanation": "Salad also pairs with each drink.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{6 lunches}", "explanation": "Combining the three mains lists all lunches.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three mains and two drinks give $3 \\times 2 = 6$ lunches.", "diagram": null }
      ],
      "finalAnswer": "$\\text{(pizza, water), (pizza, juice), (pasta, water), (pasta, juice), (salad, water), (salad, juice)}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers"],
    "questionText": "Using each of the digits $1$, $2$ and $3$ once, list all the three-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the hundreds digit, then arrange the other two}", "explanation": "Choosing the hundreds digit first, then ordering the remaining two, keeps the search organised so nothing is missed.", "diagram": null },
        { "stepNumber": 2, "description": "Hundreds digit 1.", "workingLatex": "123, \\ 132", "explanation": "With $1$ in the hundreds place, the digits $2$ and $3$ can fill the tens and units in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "Hundreds digit 2.", "workingLatex": "213, \\ 231", "explanation": "With $2$ leading, $1$ and $3$ can be arranged in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "Hundreds digit 3.", "workingLatex": "312, \\ 321", "explanation": "With $3$ leading, $1$ and $2$ can be arranged in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "123, 132, 213, 231, 312, 321", "explanation": "Combining the three cases lists every three-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices for the hundreds, two for the tens and one for the units give $6$ numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ numbers}", "explanation": "The complete list contains six three-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$123, 132, 213, 231, 312, 321$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "three choices"],
    "questionText": "A meal deal has one main (burger, wrap or salad), one side (fries or beans) and one drink (cola or water). List all the possible meal deals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the main, then the side, then the drink}", "explanation": "Working down the choices in a fixed order (main, then side, then drink) lets us list every combination without missing any.", "diagram": null },
        { "stepNumber": 2, "description": "Main = burger.", "workingLatex": "\\text{(burger, fries, cola), (burger, fries, water), (burger, beans, cola), (burger, beans, water)}", "explanation": "With burger fixed, each of the two sides pairs with each of the two drinks, giving four meals.", "diagram": null },
        { "stepNumber": 3, "description": "Main = wrap.", "workingLatex": "\\text{(wrap, fries, cola), (wrap, fries, water), (wrap, beans, cola), (wrap, beans, water)}", "explanation": "The wrap gives another four meals in the same way.", "diagram": null },
        { "stepNumber": 4, "description": "Main = salad.", "workingLatex": "\\text{(salad, fries, cola), (salad, fries, water), (salad, beans, cola), (salad, beans, water)}", "explanation": "The salad gives a further four meals.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{12 meal deals}", "explanation": "Combining the three mains lists all the meal deals.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying.", "workingLatex": "3 \\times 2 \\times 2 = 12", "explanation": "Three mains, two sides and two drinks give $3 \\times 2 \\times 2 = 12$ meals.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ meal deals}", "explanation": "The list and the multiplication agree: there are twelve meal deals.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ meal deals}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "sample space", "two dice"],
    "questionText": "A red dice numbered $1$ to $4$ and a blue dice numbered $1$ to $3$ are rolled. Writing each outcome as (red, blue), list all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up a systematic order.", "workingLatex": "\\text{fix the red score, then run through the blue scores}", "explanation": "Imagine a grid with red scores down the side and blue across the top; we fill it row by row so no cell is missed.", "diagram": null },
        { "stepNumber": 2, "description": "Red = 1.", "workingLatex": "(1,1), (1,2), (1,3)", "explanation": "With red showing $1$, the blue dice can show $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Red = 2.", "workingLatex": "(2,1), (2,2), (2,3)", "explanation": "With red showing $2$, blue again runs through $1$, $2$, $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Red = 3.", "workingLatex": "(3,1), (3,2), (3,3)", "explanation": "With red showing $3$, blue once more gives $1$, $2$, $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Red = 4.", "workingLatex": "(4,1), (4,2), (4,3)", "explanation": "With red showing $4$, blue gives the final three outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "\\text{12 outcomes}", "explanation": "The four rows together fill the whole grid of outcomes.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "4 \\times 3 = 12", "explanation": "Four red scores and three blue scores give $4 \\times 3 = 12$ outcomes.", "diagram": null }
      ],
      "finalAnswer": "$(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3),(4,1),(4,2),(4,3)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers", "leading zero"],
    "questionText": "Using each of the digits $0$, $3$ and $5$ once, list all the two-digit numbers that can be made. (A two-digit number cannot start with $0$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the restriction.", "workingLatex": "\\text{tens digit} \\neq 0", "explanation": "A number like $05$ is really just $5$, so the tens digit cannot be $0$; this rules some choices out.", "diagram": null },
        { "stepNumber": 2, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit (not 0), then vary the units}", "explanation": "Fixing an allowed tens digit and cycling through the remaining digits keeps the list complete.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 3.", "workingLatex": "30, \\ 35", "explanation": "With $3$ leading, the units digit can be $0$ or $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 5.", "workingLatex": "50, \\ 53", "explanation": "With $5$ leading, the units digit can be $0$ or $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Tens digit 0 is not allowed.", "workingLatex": "0\\_ \\ \\text{rejected}", "explanation": "Putting $0$ in the tens place gives $03$ or $05$, which are not two-digit numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "30, 35, 50, 53", "explanation": "Only the two allowed leading digits contribute, giving four numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two allowed tens digits, each with two units choices, give $4$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$30, 35, 50, 53$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers"],
    "questionText": "Using each of the digits $5$, $6$ and $7$ once, list all the three-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the hundreds digit, then arrange the other two}", "explanation": "Fixing the hundreds digit and ordering the rest keeps the list complete and repeat-free.", "diagram": null },
        { "stepNumber": 2, "description": "Hundreds digit 5.", "workingLatex": "567, \\ 576", "explanation": "With $5$ leading, $6$ and $7$ can go in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "Hundreds digit 6.", "workingLatex": "657, \\ 675", "explanation": "With $6$ leading, $5$ and $7$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "Hundreds digit 7.", "workingLatex": "756, \\ 765", "explanation": "With $7$ leading, $5$ and $6$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "567, 576, 657, 675, 756, 765", "explanation": "Combining the three cases lists every three-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "Three choices, then two, then one give $6$ numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ numbers}", "explanation": "The complete list contains six three-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$567, 576, 657, 675, 756, 765$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two four-sided dice, each numbered $1$ to $4$, are rolled. Writing each outcome as (first, second), list all the outcomes where the two scores add up to $5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,2,3,4\\}", "explanation": "Every outcome is an ordered pair of scores; there are $4 \\times 4 = 16$ in total, but we only want those summing to $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Fix the first score and work out the second.", "workingLatex": "b = 5 - a", "explanation": "If the first score is $a$, the second must be $5 - a$ to reach a total of $5$; we just check it stays between $1$ and $4$.", "diagram": null },
        { "stepNumber": 3, "description": "First score 1.", "workingLatex": "(1,4)", "explanation": "Since $5 - 1 = 4$, and $4$ is allowed, $(1,4)$ works.", "diagram": null },
        { "stepNumber": 4, "description": "First score 2.", "workingLatex": "(2,3)", "explanation": "Since $5 - 2 = 3$, the pair $(2,3)$ works.", "diagram": null },
        { "stepNumber": 5, "description": "First score 3.", "workingLatex": "(3,2)", "explanation": "Since $5 - 3 = 2$, the pair $(3,2)$ works.", "diagram": null },
        { "stepNumber": 6, "description": "First score 4.", "workingLatex": "(4,1)", "explanation": "Since $5 - 4 = 1$, the pair $(4,1)$ works.", "diagram": null },
        { "stepNumber": 7, "description": "Collect and count.", "workingLatex": "(1,4),(2,3),(3,2),(4,1) \\Rightarrow 4", "explanation": "Every first score from $1$ to $4$ gives exactly one valid pair, so there are four outcomes.", "diagram": null }
      ],
      "finalAnswer": "$(1,4), (2,3), (3,2), (4,1)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "three choices"],
    "questionText": "A breakfast has one cereal (porridge or granola), one fruit (banana, apple or berries) and one drink (tea or milk). How many different breakfasts are possible? List them systematically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the cereal, then the fruit, then the drink}", "explanation": "Working through cereal, then fruit, then drink in a set order lets us reach every breakfast exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Cereal = porridge, fruit = banana.", "workingLatex": "\\text{(porridge, banana, tea), (porridge, banana, milk)}", "explanation": "Holding porridge and banana fixed, the drink can be tea or milk.", "diagram": null },
        { "stepNumber": 3, "description": "Cereal = porridge, other fruits.", "workingLatex": "\\text{(porridge, apple, tea/milk), (porridge, berries, tea/milk)}", "explanation": "Apple and berries each give another two breakfasts, so porridge yields $3 \\times 2 = 6$ in all.", "diagram": null },
        { "stepNumber": 4, "description": "Cereal = granola.", "workingLatex": "\\text{(granola, banana/apple/berries, tea/milk)}", "explanation": "Granola works exactly like porridge, giving another $6$ breakfasts.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "6 + 6 = 12", "explanation": "The two cereals contribute six breakfasts each.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 \\times 2 = 12", "explanation": "Two cereals, three fruits and two drinks give $2 \\times 3 \\times 2 = 12$ breakfasts.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ breakfasts}", "explanation": "The list and the multiplication agree at twelve.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ breakfasts}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers"],
    "questionText": "Using each of the digits $2$, $3$, $5$ and $7$ at most once, list all the two-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the tens digit, then vary the units}", "explanation": "With four digits available, fixing the tens digit and cycling through the other three keeps the list orderly.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 2.", "workingLatex": "23, \\ 25, \\ 27", "explanation": "With $2$ leading, the units digit can be $3$, $5$ or $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 3.", "workingLatex": "32, \\ 35, \\ 37", "explanation": "With $3$ leading, the units digit can be $2$, $5$ or $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 5.", "workingLatex": "52, \\ 53, \\ 57", "explanation": "With $5$ leading, the units digit can be $2$, $3$ or $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Tens digit 7.", "workingLatex": "72, \\ 73, \\ 75", "explanation": "With $7$ leading, the units digit can be $2$, $3$ or $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "23,25,27,32,35,37,52,53,57,72,73,75", "explanation": "Combining the four cases lists every two-digit number.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "4 \\times 3 = 12", "explanation": "Four choices for the tens digit and three for the units give $12$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$23,25,27,32,35,37,52,53,57,72,73,75$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs", "handshakes"],
    "questionText": "Four people \u2014 $P$, $Q$, $R$ and $S$ \u2014 each shake hands once with every other person. List all the handshakes and state how many there are.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{join each person to those listed after them}", "explanation": "A handshake involves two people with no order, so joining each person only to those after them avoids counting a handshake twice.", "diagram": null },
        { "stepNumber": 2, "description": "Handshakes for P.", "workingLatex": "PQ, \\ PR, \\ PS", "explanation": "$P$ shakes hands with each of the three people after them.", "diagram": null },
        { "stepNumber": 3, "description": "Handshakes for Q.", "workingLatex": "QR, \\ QS", "explanation": "$Q$ shakes with $R$ and $S$; the handshake $QP$ is the same as $PQ$, already listed.", "diagram": null },
        { "stepNumber": 4, "description": "Handshakes for R.", "workingLatex": "RS", "explanation": "$R$ only has $S$ left after them.", "diagram": null },
        { "stepNumber": 5, "description": "S starts nothing new.", "workingLatex": "\\text{(no new handshakes)}", "explanation": "$S$ has no one listed after them, so begins no fresh handshake.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "PQ, PR, PS, QR, QS, RS", "explanation": "The cases together give every handshake exactly once.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "3 + 2 + 1 = 6", "explanation": "The counts $3, 2, 1$ add to $6$ handshakes.", "diagram": null }
      ],
      "finalAnswer": "$PQ, PR, PS, QR, QS, RS \\ (6 \\text{ handshakes})$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers", "odd"],
    "questionText": "Using each of the digits $1$, $2$ and $3$ once, list all the three-digit numbers that are odd.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the odd-number rule.", "workingLatex": "\\text{units digit} \\in \\{1, 3\\}", "explanation": "A number is odd exactly when its units digit is odd, so here the units digit must be $1$ or $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Units digit 1.", "workingLatex": "\\text{remaining } \\{2,3\\}: \\ 231, \\ 321", "explanation": "Fixing $1$ at the end, the digits $2$ and $3$ fill the hundreds and tens in two orders.", "diagram": null },
        { "stepNumber": 3, "description": "Units digit 3.", "workingLatex": "\\text{remaining } \\{1,2\\}: \\ 123, \\ 213", "explanation": "Fixing $3$ at the end, the digits $1$ and $2$ fill the first two places in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "Units digit 2 is rejected.", "workingLatex": "\\_\\_2 \\ \\text{is even}", "explanation": "If $2$ were at the end the number would be even, so those numbers are not counted.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "123, 213, 231, 321", "explanation": "Putting the two allowed endings together lists every odd number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two odd endings, each with two ways to arrange the front, give $4$ numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "4 \\text{ odd numbers}", "explanation": "There are four odd three-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$123, 213, 231, 321$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes that are 'doubles' (both dice show the same number).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "Each roll is an ordered pair; the full grid has $6 \\times 6 = 36$ outcomes, and we want just the doubles.", "diagram": null },
        { "stepNumber": 2, "description": "Write the condition.", "workingLatex": "a = b", "explanation": "A double means the second score equals the first, so the two numbers in the pair must match.", "diagram": null },
        { "stepNumber": 3, "description": "Run through each matching value.", "workingLatex": "(1,1), (2,2), (3,3)", "explanation": "Taking the first score as $1$, $2$, then $3$, the only matching second score is the same number.", "diagram": null },
        { "stepNumber": 4, "description": "Continue to the largest.", "workingLatex": "(4,4), (5,5), (6,6)", "explanation": "The same idea gives the doubles for $4$, $5$ and $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)", "explanation": "Each number from $1$ to $6$ gives exactly one double.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "6 \\text{ doubles}", "explanation": "There are six possible matching values, so six doubles.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6", "explanation": "The complete list of doubles has six outcomes.", "diagram": null }
      ],
      "finalAnswer": "$(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "sample space", "repeated event"],
    "questionText": "A spinner numbered $1$, $2$, $3$ is spun twice. Writing each outcome as (first, second), list all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first spin, then run through the second}", "explanation": "Recording the first spin then the second in a fixed order lists every outcome once.", "diagram": null },
        { "stepNumber": 2, "description": "First spin 1.", "workingLatex": "(1,1), (1,2), (1,3)", "explanation": "After a first spin of $1$, the second spin can be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 3, "description": "First spin 2.", "workingLatex": "(2,1), (2,2), (2,3)", "explanation": "After a first spin of $2$, the second spin again runs through $1$, $2$, $3$.", "diagram": null },
        { "stepNumber": 4, "description": "First spin 3.", "workingLatex": "(3,1), (3,2), (3,3)", "explanation": "After a first spin of $3$, the second spin once more gives $1$, $2$, $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3)", "explanation": "Combining the three first spins lists all outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three choices on each spin give $3 \\times 3 = 9$ outcomes.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9 \\text{ outcomes}", "explanation": "The complete sample space has nine outcomes.", "diagram": null }
      ],
      "finalAnswer": "$(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers", "even"],
    "questionText": "Using each of the digits $1$, $2$, $3$ and $4$ at most once, list all the two-digit numbers that are even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the even-number rule.", "workingLatex": "\\text{units digit} \\in \\{2, 4\\}", "explanation": "A number is even exactly when its units digit is even, so here the units digit must be $2$ or $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the units digit, then vary the tens}", "explanation": "Fixing an allowed units digit and cycling the tens through the leftover digits keeps the list complete.", "diagram": null },
        { "stepNumber": 3, "description": "Units digit 2.", "workingLatex": "12, \\ 32, \\ 42", "explanation": "With $2$ at the end, the tens digit can be $1$, $3$ or $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Units digit 4.", "workingLatex": "14, \\ 24, \\ 34", "explanation": "With $4$ at the end, the tens digit can be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "12, 14, 24, 32, 34, 42", "explanation": "Putting the two allowed endings together lists every even number.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "2 \\times 3 = 6", "explanation": "Two even endings, each with three tens choices, give $6$ numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ even numbers}", "explanation": "There are six even two-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$12, 14, 24, 32, 34, 42$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "three choices"],
    "questionText": "A coffee is chosen by size (small or large), flavour (vanilla, caramel or hazelnut) and milk (dairy or oat). How many different coffees are possible? Explain by listing systematically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the size, then the flavour, then the milk}", "explanation": "Choosing size, then flavour, then milk in a fixed order lets us reach every coffee exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Size = small, flavour = vanilla.", "workingLatex": "\\text{(small, vanilla, dairy), (small, vanilla, oat)}", "explanation": "Holding small and vanilla fixed, the milk can be dairy or oat.", "diagram": null },
        { "stepNumber": 3, "description": "Size = small, other flavours.", "workingLatex": "\\text{caramel and hazelnut give } 2 \\times 2 = 4 \\text{ more}", "explanation": "Each remaining flavour also gives two coffees, so small produces $3 \\times 2 = 6$ coffees.", "diagram": null },
        { "stepNumber": 4, "description": "Size = large.", "workingLatex": "\\text{large gives another } 6", "explanation": "The large size repeats the same pattern, giving six more coffees.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "6 + 6 = 12", "explanation": "Each size contributes six coffees.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying.", "workingLatex": "2 \\times 3 \\times 2 = 12", "explanation": "Two sizes, three flavours and two milks give $2 \\times 3 \\times 2 = 12$ coffees.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ coffees}", "explanation": "The list and the multiplication agree at twelve.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ coffees}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs"],
    "questionText": "Two people are chosen from five friends $A$, $B$, $C$, $D$ and $E$ to be a team. List all the possible pairs and state how many there are.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{pair each letter with those after it}", "explanation": "A pair is unordered, so joining each letter only to later letters lists every pair once with no repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs starting with A.", "workingLatex": "AB, AC, AD, AE", "explanation": "$A$ can pair with each of the four letters after it.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs starting with B.", "workingLatex": "BC, BD, BE", "explanation": "$B$ pairs with $C$, $D$, $E$; $BA$ repeats $AB$.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs starting with C.", "workingLatex": "CD, CE", "explanation": "$C$ pairs with $D$ and $E$ only.", "diagram": null },
        { "stepNumber": 5, "description": "Pairs starting with D.", "workingLatex": "DE", "explanation": "$D$ has only $E$ left after it.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "AB,AC,AD,AE,BC,BD,BE,CD,CE,DE", "explanation": "$E$ starts no new pair, so the cases give every pair once.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "4 + 3 + 2 + 1 = 10", "explanation": "The counts $4, 3, 2, 1$ add to $10$ pairs.", "diagram": null }
      ],
      "finalAnswer": "$AB,AC,AD,AE,BC,BD,BE,CD,CE,DE \\ (10 \\text{ pairs})$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers", "leading zero"],
    "questionText": "Using each of the digits $0$, $1$ and $2$ once, list all the three-digit numbers that can be made. (A three-digit number cannot start with $0$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the restriction.", "workingLatex": "\\text{hundreds digit} \\neq 0", "explanation": "If $0$ led, the number would really be two digits, so the hundreds digit must be $1$ or $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the hundreds digit, then arrange the rest}", "explanation": "Fixing an allowed hundreds digit and ordering the remaining two keeps the list complete.", "diagram": null },
        { "stepNumber": 3, "description": "Hundreds digit 1.", "workingLatex": "\\text{remaining } \\{0,2\\}: \\ 102, \\ 120", "explanation": "With $1$ leading, $0$ and $2$ can go in two orders.", "diagram": null },
        { "stepNumber": 4, "description": "Hundreds digit 2.", "workingLatex": "\\text{remaining } \\{0,1\\}: \\ 201, \\ 210", "explanation": "With $2$ leading, $0$ and $1$ can go in two orders.", "diagram": null },
        { "stepNumber": 5, "description": "Hundreds digit 0 is rejected.", "workingLatex": "0\\_\\_ \\ \\text{rejected}", "explanation": "Leading with $0$ gives numbers like $012$, which is not a three-digit number.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "102, 120, 201, 210", "explanation": "Only the two allowed leading digits contribute, giving four numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two allowed hundreds digits, each with two arrangements, give $4$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$102, 120, 201, 210$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where the two scores add up to $7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "Each roll is an ordered pair; there are $36$ in total, and we want those summing to $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Fix the first score.", "workingLatex": "b = 7 - a", "explanation": "For a total of $7$, the second score must be $7 - a$; we keep it only if it lies between $1$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "First score 1 and 2.", "workingLatex": "(1,6), \\ (2,5)", "explanation": "Since $7-1=6$ and $7-2=5$, both are valid.", "diagram": null },
        { "stepNumber": 4, "description": "First score 3 and 4.", "workingLatex": "(3,4), \\ (4,3)", "explanation": "Since $7-3=4$ and $7-4=3$, both are valid.", "diagram": null },
        { "stepNumber": 5, "description": "First score 5 and 6.", "workingLatex": "(5,2), \\ (6,1)", "explanation": "Since $7-5=2$ and $7-6=1$, both are valid.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)", "explanation": "Every first score from $1$ to $6$ gives exactly one valid second score.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "6 \\text{ outcomes}", "explanation": "There are six ways to make a total of $7$.", "diagram": null }
      ],
      "finalAnswer": "$(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "ordered choices"],
    "questionText": "From four club members $A$, $B$, $C$ and $D$, one is chosen as president and a different one as secretary. List all the possible (president, secretary) pairs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the president, then vary the secretary}", "explanation": "The two roles are different, so order matters; we fix the president and list each possible secretary.", "diagram": null },
        { "stepNumber": 2, "description": "President = A.", "workingLatex": "(A,B), (A,C), (A,D)", "explanation": "If $A$ is president, any of the other three can be secretary.", "diagram": null },
        { "stepNumber": 3, "description": "President = B.", "workingLatex": "(B,A), (B,C), (B,D)", "explanation": "If $B$ is president, the secretary is one of $A$, $C$, $D$.", "diagram": null },
        { "stepNumber": 4, "description": "President = C.", "workingLatex": "(C,A), (C,B), (C,D)", "explanation": "If $C$ is president, the secretary is one of $A$, $B$, $D$.", "diagram": null },
        { "stepNumber": 5, "description": "President = D.", "workingLatex": "(D,A), (D,B), (D,C)", "explanation": "If $D$ is president, the secretary is one of $A$, $B$, $C$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "\\text{12 ordered pairs}", "explanation": "Because order matters, $(A,B)$ and $(B,A)$ are both counted.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "4 \\times 3 = 12", "explanation": "Four presidents and three remaining secretaries give $12$ pairs.", "diagram": null }
      ],
      "finalAnswer": "$(A,B),(A,C),(A,D),(B,A),(B,C),(B,D),(C,A),(C,B),(C,D),(D,A),(D,B),(D,C)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "two spinners", "condition"],
    "questionText": "Two spinners, each numbered $1$, $2$, $3$, are spun. Writing each outcome as (first, second), list all the outcomes where the two numbers add up to an even total.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,2,3\\}", "explanation": "There are $3 \\times 3 = 9$ ordered pairs in total; we pick out those with an even sum.", "diagram": null },
        { "stepNumber": 2, "description": "Recall when a sum is even.", "workingLatex": "\\text{even} + \\text{even} \\ \\text{or} \\ \\text{odd} + \\text{odd}", "explanation": "A total is even only when both numbers are even or both are odd; here the odd numbers are $1$ and $3$ and the even number is $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Both numbers odd.", "workingLatex": "(1,1), (1,3), (3,1), (3,3)", "explanation": "Choosing each of the first score from $\\{1,3\\}$ with each second from $\\{1,3\\}$ gives four odd-odd pairs.", "diagram": null },
        { "stepNumber": 4, "description": "Both numbers even.", "workingLatex": "(2,2)", "explanation": "The only even number is $2$, so the single even-even pair is $(2,2)$.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "(1,1),(1,3),(2,2),(3,1),(3,3)", "explanation": "Putting the odd-odd and even-even pairs together gives every even-total outcome.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "4 + 1 = 5", "explanation": "Four odd-odd pairs plus one even-even pair make five outcomes.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "5 \\text{ outcomes}", "explanation": "There are five outcomes with an even total.", "diagram": null }
      ],
      "finalAnswer": "$(1,1),(1,3),(2,2),(3,1),(3,3)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers"],
    "questionText": "Using the digits $3$, $5$, $7$ and $9$, each at most once, list all the three-digit numbers that can be made.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the hundreds digit, then arrange two of the rest}", "explanation": "With four digits and three places, we fix the hundreds digit and then order two of the remaining three digits.", "diagram": null },
        { "stepNumber": 2, "description": "Hundreds digit 3.", "workingLatex": "357, 359, 375, 379, 395, 397", "explanation": "With $3$ leading, the tens and units come from $\\{5,7,9\\}$, giving $3 \\times 2 = 6$ numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Hundreds digit 5.", "workingLatex": "537, 539, 573, 579, 593, 597", "explanation": "With $5$ leading, the tens and units come from $\\{3,7,9\\}$, giving another six numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Hundreds digit 7.", "workingLatex": "735, 739, 753, 759, 793, 795", "explanation": "With $7$ leading, the tens and units come from $\\{3,5,9\\}$, giving another six.", "diagram": null },
        { "stepNumber": 5, "description": "Hundreds digit 9.", "workingLatex": "935, 937, 953, 957, 973, 975", "explanation": "With $9$ leading, the tens and units come from $\\{3,5,7\\}$, giving the last six.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "6 + 6 + 6 + 6 = 24", "explanation": "Each of the four leading digits contributes six numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Check by multiplying.", "workingLatex": "4 \\times 3 \\times 2 = 24", "explanation": "Four choices for the hundreds, three for the tens and two for the units give $24$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$24 \\text{ numbers}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "coins", "repeated event"],
    "questionText": "A fair coin is tossed three times. Each toss is heads ($H$) or tails ($T$). List all the possible outcomes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first toss, then the second, then the third}", "explanation": "Recording the tosses in order, first then second then third, lets us list every result once.", "diagram": null },
        { "stepNumber": 2, "description": "First = H, second = H.", "workingLatex": "HHH, \\ HHT", "explanation": "With the first two tosses heads, the third can be $H$ or $T$.", "diagram": null },
        { "stepNumber": 3, "description": "First = H, second = T.", "workingLatex": "HTH, \\ HTT", "explanation": "With heads then tails, the third toss gives two more outcomes.", "diagram": null },
        { "stepNumber": 4, "description": "First = T, second = H.", "workingLatex": "THH, \\ THT", "explanation": "With tails then heads, the third toss gives two outcomes.", "diagram": null },
        { "stepNumber": 5, "description": "First = T, second = T.", "workingLatex": "TTH, \\ TTT", "explanation": "With the first two tosses tails, the third can be $H$ or $T$.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "HHH,HHT,HTH,HTT,THH,THT,TTH,TTT", "explanation": "The four branches together list every possible result of three tosses.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "Two choices on each of three tosses give $2^3 = 8$ outcomes.", "diagram": null }
      ],
      "finalAnswer": "$HHH,HHT,HTH,HTT,THH,THT,TTH,TTT$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "menu"],
    "questionText": "A meal is one starter (soup, melon or p\u00e2t\u00e9) and one main (fish, beef or pasta). List all the possible meals.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the starter, then run through the mains}", "explanation": "Fixing the starter and pairing it with each main lists every meal exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Starter = soup.", "workingLatex": "\\text{(soup, fish), (soup, beef), (soup, pasta)}", "explanation": "Soup can be followed by any of the three mains.", "diagram": null },
        { "stepNumber": 3, "description": "Starter = melon.", "workingLatex": "\\text{(melon, fish), (melon, beef), (melon, pasta)}", "explanation": "Melon gives the same three mains.", "diagram": null },
        { "stepNumber": 4, "description": "Starter = p\u00e2t\u00e9.", "workingLatex": "\\text{(p\u00e2t\u00e9, fish), (p\u00e2t\u00e9, beef), (p\u00e2t\u00e9, pasta)}", "explanation": "P\u00e2t\u00e9 also pairs with each main.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "\\text{9 meals}", "explanation": "Combining the three starters lists all meals.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying.", "workingLatex": "3 \\times 3 = 9", "explanation": "Three starters and three mains give $3 \\times 3 = 9$ meals.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9 \\text{ meals}", "explanation": "The complete list contains nine meals.", "diagram": null }
      ],
      "finalAnswer": "$9 \\text{ meals}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where the two scores multiply to give $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "There are $36$ ordered pairs; we want those whose product is $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the condition.", "workingLatex": "a \\times b = 6 \\Rightarrow b = \\tfrac{6}{a}", "explanation": "For a product of $6$, the second score must be $6$ divided by the first, and it must be a whole number from $1$ to $6$.", "diagram": null },
        { "stepNumber": 3, "description": "First score 1 and 2.", "workingLatex": "(1,6), \\ (2,3)", "explanation": "Since $6/1 = 6$ and $6/2 = 3$, both give valid outcomes.", "diagram": null },
        { "stepNumber": 4, "description": "First score 3 and 6.", "workingLatex": "(3,2), \\ (6,1)", "explanation": "Since $6/3 = 2$ and $6/6 = 1$, both give valid outcomes.", "diagram": null },
        { "stepNumber": 5, "description": "Rule out the rest.", "workingLatex": "a = 4, 5 \\ \\text{rejected}", "explanation": "For $a = 4$ or $5$, $6/a$ is not a whole number, so no valid second score exists.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "(1,6),(2,3),(3,2),(6,1)", "explanation": "Putting the valid pairs together gives the complete list.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "4 \\text{ outcomes}", "explanation": "There are four ways for the product to be $6$.", "diagram": null }
      ],
      "finalAnswer": "$(1,6),(2,3),(3,2),(6,1)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "arrangements"],
    "questionText": "How many different arrangements are there of the four letters $A$, $B$, $C$ and $D$? List those beginning with $A$, then explain the total.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the first letter, then arrange the other three}", "explanation": "Fixing the first letter and arranging the remaining three keeps the search organised into clear groups.", "diagram": null },
        { "stepNumber": 2, "description": "Arrangements beginning with A.", "workingLatex": "ABCD, ABDC, ACBD, ACDB, ADBC, ADCB", "explanation": "With $A$ first, the letters $B$, $C$, $D$ can be arranged in $3 \\times 2 \\times 1 = 6$ ways.", "diagram": null },
        { "stepNumber": 3, "description": "Same count for each first letter.", "workingLatex": "B, C, D \\text{ first} \\Rightarrow 6 \\text{ each}", "explanation": "Choosing $B$, $C$ or $D$ first gives six arrangements each, exactly like the group starting with $A$.", "diagram": null },
        { "stepNumber": 4, "description": "Add the groups.", "workingLatex": "6 + 6 + 6 + 6 = 24", "explanation": "There are four possible first letters, each starting a group of six arrangements.", "diagram": null },
        { "stepNumber": 5, "description": "Check by the counting principle.", "workingLatex": "4 \\times 3 \\times 2 \\times 1 = 24", "explanation": "Four choices for the first place, then three, two and one for the rest, multiply to $24$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the methods.", "workingLatex": "24 = 24 \\ \\checkmark", "explanation": "Listing by first letter and multiplying give the same total, which is reassuring.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ arrangements}", "explanation": "There are twenty-four different arrangements in all.", "diagram": null }
      ],
      "finalAnswer": "$24 \\text{ arrangements}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "codes", "repeats allowed"],
    "questionText": "A code is made of two letters (each $A$ or $B$, repeats allowed) followed by one digit ($1$, $2$ or $3$). List all the possible codes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the two letters, then run through the digit}", "explanation": "Settling the letter pair first, then cycling through the digit, lets us reach every code once.", "diagram": null },
        { "stepNumber": 2, "description": "List the letter pairs.", "workingLatex": "AA, AB, BA, BB", "explanation": "As repeats are allowed and order matters, each of the two positions can be $A$ or $B$, giving four pairs.", "diagram": null },
        { "stepNumber": 3, "description": "Letters AA.", "workingLatex": "AA1, AA2, AA3", "explanation": "With letters $AA$ fixed, the digit can be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Letters AB and BA.", "workingLatex": "AB1, AB2, AB3, BA1, BA2, BA3", "explanation": "Each of these letter pairs also gives three codes.", "diagram": null },
        { "stepNumber": 5, "description": "Letters BB.", "workingLatex": "BB1, BB2, BB3", "explanation": "The final letter pair gives three more codes.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "\\text{12 codes}", "explanation": "The four letter pairs each contribute three codes.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "2 \\times 2 \\times 3 = 12", "explanation": "Two letter choices twice and three digit choices give $12$ codes.", "diagram": null }
      ],
      "finalAnswer": "$AA1,AA2,AA3,AB1,AB2,AB3,BA1,BA2,BA3,BB1,BB2,BB3$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where the two scores differ by exactly $1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "There are $36$ ordered pairs; we want those where the scores are one apart.", "diagram": null },
        { "stepNumber": 2, "description": "Write the condition.", "workingLatex": "b = a - 1 \\ \\text{or} \\ b = a + 1", "explanation": "Differing by $1$ means the second score is one less or one more than the first (staying between $1$ and $6$).", "diagram": null },
        { "stepNumber": 3, "description": "First score 1 and 2.", "workingLatex": "(1,2); \\ (2,1), (2,3)", "explanation": "From $1$ only $+1$ works; from $2$ both $-1$ and $+1$ work.", "diagram": null },
        { "stepNumber": 4, "description": "First score 3 and 4.", "workingLatex": "(3,2), (3,4); \\ (4,3), (4,5)", "explanation": "For $3$ and $4$, both neighbours are in range, giving two each.", "diagram": null },
        { "stepNumber": 5, "description": "First score 5 and 6.", "workingLatex": "(5,4), (5,6); \\ (6,5)", "explanation": "From $5$ both neighbours work; from $6$ only $-1$ works.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "(1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(4,5),(5,4),(5,6),(6,5)", "explanation": "Putting all cases together lists every outcome that differs by $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Count them.", "workingLatex": "1+2+2+2+2+1 = 10", "explanation": "Adding the counts for each first score gives ten outcomes.", "diagram": null }
      ],
      "finalAnswer": "$(1,2),(2,1),(2,3),(3,2),(3,4),(4,3),(4,5),(5,4),(5,6),(6,5)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "three choices"],
    "questionText": "A packed lunch has one sandwich (cheese, ham or egg), one fruit (apple or pear) and one drink (water or juice). How many different packed lunches are possible? Explain by listing systematically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the sandwich, then the fruit, then the drink}", "explanation": "Working through sandwich, then fruit, then drink lets us reach every lunch exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Sandwich = cheese, fruit = apple.", "workingLatex": "\\text{(cheese, apple, water), (cheese, apple, juice)}", "explanation": "Holding cheese and apple fixed, the drink can be water or juice.", "diagram": null },
        { "stepNumber": 3, "description": "Sandwich = cheese, fruit = pear.", "workingLatex": "\\text{(cheese, pear, water), (cheese, pear, juice)}", "explanation": "Cheese with pear gives two more lunches, so cheese produces $2 \\times 2 = 4$ in all.", "diagram": null },
        { "stepNumber": 4, "description": "Sandwich = ham.", "workingLatex": "\\text{ham gives another } 4", "explanation": "Ham repeats the same pattern of fruit and drink, giving four lunches.", "diagram": null },
        { "stepNumber": 5, "description": "Sandwich = egg.", "workingLatex": "\\text{egg gives another } 4", "explanation": "Egg likewise gives four lunches.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "4 + 4 + 4 = 12", "explanation": "Each of the three sandwiches contributes four lunches.", "diagram": null },
        { "stepNumber": 7, "description": "Check by multiplying.", "workingLatex": "3 \\times 2 \\times 2 = 12", "explanation": "Three sandwiches, two fruits and two drinks give $12$ lunches.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ packed lunches}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["systematic listing", "two-digit numbers", "condition"],
    "questionText": "Using each of the digits $3$, $5$ and $7$ once, list all the two-digit numbers that are greater than $50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Turn the condition into a rule on the tens digit.", "workingLatex": "\\text{number} > 50 \\Rightarrow \\text{tens digit} \\geq 5", "explanation": "A two-digit number is above $50$ when its tens digit is $5$ or more, so the tens digit here must be $5$ or $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Tens digit 5.", "workingLatex": "53, \\ 57", "explanation": "With $5$ leading, the units digit can be $3$ or $7$, and both $53$ and $57$ exceed $50$.", "diagram": null },
        { "stepNumber": 3, "description": "Tens digit 7.", "workingLatex": "73, \\ 75", "explanation": "With $7$ leading, the units digit can be $3$ or $5$, giving $73$ and $75$.", "diagram": null },
        { "stepNumber": 4, "description": "Tens digit 3 is rejected.", "workingLatex": "3\\_ < 50", "explanation": "Any number in the thirties is below $50$, so a tens digit of $3$ gives nothing valid.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "53, 57, 73, 75", "explanation": "Only the two allowed tens digits contribute, giving four numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "2 \\times 2 = 4", "explanation": "Two allowed tens digits, each with two units choices, give $4$ numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "4 \\text{ numbers}", "explanation": "There are four two-digit numbers greater than $50$.", "diagram": null }
      ],
      "finalAnswer": "$53, 57, 73, 75$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where at least one dice shows a $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "There are $36$ ordered pairs; we want those with a $6$ on the first dice, the second dice, or both.", "diagram": null },
        { "stepNumber": 2, "description": "First dice shows 6.", "workingLatex": "(6,1),(6,2),(6,3),(6,4),(6,5),(6,6)", "explanation": "Fixing the first score at $6$, the second can be anything from $1$ to $6$, giving six outcomes.", "diagram": null },
        { "stepNumber": 3, "description": "Second dice shows 6 (first not 6).", "workingLatex": "(1,6),(2,6),(3,6),(4,6),(5,6)", "explanation": "Now the second score is $6$ and the first runs from $1$ to $5$; we stop at $5$ to avoid repeating $(6,6)$.", "diagram": null },
        { "stepNumber": 4, "description": "Avoid double counting.", "workingLatex": "(6,6) \\ \\text{counted once}", "explanation": "The outcome $(6,6)$ has a $6$ on both dice but must be listed only once, which is why we kept it only in the first group.", "diagram": null },
        { "stepNumber": 5, "description": "Collect the full list.", "workingLatex": "(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(1,6),(2,6),(3,6),(4,6),(5,6)", "explanation": "Putting the two groups together lists every outcome with at least one $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Count them.", "workingLatex": "6 + 5 = 11", "explanation": "Six from the first group plus five from the second give eleven outcomes.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "11 \\text{ outcomes}", "explanation": "There are eleven outcomes showing at least one $6$.", "diagram": null }
      ],
      "finalAnswer": "$(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(1,6),(2,6),(3,6),(4,6),(5,6)$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "four-digit numbers", "even"],
    "questionText": "Using each of the digits $1$, $2$, $3$ and $4$ exactly once, list all the four-digit numbers that are even.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use the even-number rule.", "workingLatex": "\\text{units digit} \\in \\{2, 4\\}", "explanation": "A number is even exactly when it ends in an even digit, so the units digit must be $2$ or $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Set up a systematic order.", "workingLatex": "\\text{fix the units digit, then arrange the other three}", "explanation": "Fixing an even ending and arranging the remaining three digits at the front keeps the search organised.", "diagram": null },
        { "stepNumber": 3, "description": "Units digit 2.", "workingLatex": "1342, 1432, 3142, 3412, 4132, 4312", "explanation": "With $2$ fixed at the end, the digits $1$, $3$, $4$ fill the first three places in $3 \\times 2 \\times 1 = 6$ ways.", "diagram": null },
        { "stepNumber": 4, "description": "Units digit 4.", "workingLatex": "1234, 1324, 2134, 2314, 3124, 3214", "explanation": "With $4$ fixed at the end, the digits $1$, $2$, $3$ fill the front in another six ways.", "diagram": null },
        { "stepNumber": 5, "description": "Rule out odd endings.", "workingLatex": "\\_\\_\\_1, \\ \\_\\_\\_3 \\ \\text{rejected}", "explanation": "Ending in $1$ or $3$ would make the number odd, so those arrangements are not counted.", "diagram": null },
        { "stepNumber": 6, "description": "Collect the full list.", "workingLatex": "6 + 6 = 12", "explanation": "The two even endings each give six numbers.", "diagram": null },
        { "stepNumber": 7, "description": "Check by counting.", "workingLatex": "2 \\times (3 \\times 2 \\times 1) = 12", "explanation": "Two choices for the last digit, times $6$ arrangements of the rest, give $12$ numbers.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "12 \\text{ even numbers}", "explanation": "There are twelve even four-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$1234,1324,1342,1432,2134,2314,3124,3142,3214,3412,4132,4312$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "pairs", "handshakes"],
    "questionText": "Six people \u2014 $A$, $B$, $C$, $D$, $E$ and $F$ \u2014 each shake hands once with every other person. List all the handshakes and state how many there are.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{join each person to those listed after them}", "explanation": "A handshake is unordered, so joining each person only to those after them lists each handshake once.", "diagram": null },
        { "stepNumber": 2, "description": "Handshakes for A.", "workingLatex": "AB, AC, AD, AE, AF", "explanation": "$A$ shakes with the five people after them.", "diagram": null },
        { "stepNumber": 3, "description": "Handshakes for B.", "workingLatex": "BC, BD, BE, BF", "explanation": "$B$ shakes with the four people after them; $BA$ repeats $AB$.", "diagram": null },
        { "stepNumber": 4, "description": "Handshakes for C.", "workingLatex": "CD, CE, CF", "explanation": "$C$ shakes with the three people after them.", "diagram": null },
        { "stepNumber": 5, "description": "Handshakes for D.", "workingLatex": "DE, DF", "explanation": "$D$ shakes with the two people after them.", "diagram": null },
        { "stepNumber": 6, "description": "Handshakes for E.", "workingLatex": "EF", "explanation": "$E$ has only $F$ left after them.", "diagram": null },
        { "stepNumber": 7, "description": "F starts nothing new.", "workingLatex": "\\text{(no new handshakes)}", "explanation": "$F$ has no one listed after them, so begins no fresh handshake.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the full list.", "workingLatex": "AB,AC,AD,AE,AF,BC,BD,BE,BF,CD,CE,CF,DE,DF,EF", "explanation": "The cases together give every handshake exactly once.", "diagram": null },
        { "stepNumber": 9, "description": "Count them.", "workingLatex": "5 + 4 + 3 + 2 + 1 = 15", "explanation": "The counts $5,4,3,2,1$ add to $15$ handshakes.", "diagram": null }
      ],
      "finalAnswer": "$15 \\text{ handshakes}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where the total is a prime number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ \\text{total from } 2 \\text{ to } 12", "explanation": "The two scores add to a total between $2$ and $12$; we want the totals that are prime.", "diagram": null },
        { "stepNumber": 2, "description": "List the prime totals.", "workingLatex": "2, 3, 5, 7, 11", "explanation": "Among $2$ to $12$, the primes are $2, 3, 5, 7, 11$; totals like $4, 6, 8, 9, 10, 12$ are not prime.", "diagram": null },
        { "stepNumber": 3, "description": "Total 2.", "workingLatex": "(1,1)", "explanation": "The only way to total $2$ is a double one.", "diagram": null },
        { "stepNumber": 4, "description": "Total 3.", "workingLatex": "(1,2), (2,1)", "explanation": "A total of $3$ comes from $1$ and $2$ in either order.", "diagram": null },
        { "stepNumber": 5, "description": "Total 5.", "workingLatex": "(1,4),(2,3),(3,2),(4,1)", "explanation": "A total of $5$ has four ordered pairs.", "diagram": null },
        { "stepNumber": 6, "description": "Total 7.", "workingLatex": "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)", "explanation": "A total of $7$ has six ordered pairs.", "diagram": null },
        { "stepNumber": 7, "description": "Total 11.", "workingLatex": "(5,6),(6,5)", "explanation": "A total of $11$ comes from $5$ and $6$ in either order.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the full list.", "workingLatex": "\\text{all pairs above}", "explanation": "Putting the five prime-total groups together lists every winning outcome.", "diagram": null },
        { "stepNumber": 9, "description": "Count them.", "workingLatex": "1 + 2 + 4 + 6 + 2 = 15", "explanation": "Adding the group sizes gives fifteen outcomes with a prime total.", "diagram": null }
      ],
      "finalAnswer": "$15 \\text{ outcomes}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "committee"],
    "questionText": "A committee of three is chosen from five people $A$, $B$, $C$, $D$ and $E$. List all the possible committees and state how many there are.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note that order does not matter.", "workingLatex": "\\{A,B,C\\} = \\{B,A,C\\}", "explanation": "A committee is just a group, so the same three people count once however they are ordered.", "diagram": null },
        { "stepNumber": 2, "description": "Decide on a systematic order.", "workingLatex": "\\text{keep the letters in alphabetical order}", "explanation": "Always writing each committee with its letters in order stops us listing the same group twice.", "diagram": null },
        { "stepNumber": 3, "description": "Committees starting with A.", "workingLatex": "ABC, ABD, ABE, ACD, ACE, ADE", "explanation": "With $A$ included, the other two come from $\\{B,C,D,E\\}$, giving six committees.", "diagram": null },
        { "stepNumber": 4, "description": "Committees starting with B.", "workingLatex": "BCD, BCE, BDE", "explanation": "Without $A$, but with $B$, the other two come from $\\{C,D,E\\}$, giving three committees.", "diagram": null },
        { "stepNumber": 5, "description": "Committees starting with C.", "workingLatex": "CDE", "explanation": "Without $A$ or $B$, the only committee is $\\{C,D,E\\}$.", "diagram": null },
        { "stepNumber": 6, "description": "D or E cannot start one.", "workingLatex": "\\text{(too few letters after)}", "explanation": "Starting with $D$ or $E$ leaves fewer than two later letters, so no new committee begins there.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the full list.", "workingLatex": "ABC,ABD,ABE,ACD,ACE,ADE,BCD,BCE,BDE,CDE", "explanation": "The cases together list every committee once.", "diagram": null },
        { "stepNumber": 8, "description": "Count them.", "workingLatex": "6 + 3 + 1 = 10", "explanation": "The counts $6, 3, 1$ add to $10$ committees.", "diagram": null }
      ],
      "finalAnswer": "$10 \\text{ committees}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "three-digit numbers", "leading zero"],
    "questionText": "Using the digits $0$, $1$, $2$ and $3$, each at most once, how many three-digit numbers can be made? (A three-digit number cannot start with $0$.) Explain by listing systematically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the restriction.", "workingLatex": "\\text{hundreds digit} \\neq 0", "explanation": "If $0$ led, the number would only have two digits, so the hundreds digit must be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Set up a systematic order.", "workingLatex": "\\text{fix the hundreds digit, then arrange two of the rest}", "explanation": "Fixing an allowed hundreds digit, then ordering two of the remaining three digits, keeps the list complete.", "diagram": null },
        { "stepNumber": 3, "description": "Hundreds digit 1.", "workingLatex": "102, 103, 120, 123, 130, 132", "explanation": "With $1$ leading, the tens and units come from $\\{0,2,3\\}$, giving $3 \\times 2 = 6$ numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Hundreds digit 2.", "workingLatex": "201, 203, 210, 213, 230, 231", "explanation": "With $2$ leading, the tens and units come from $\\{0,1,3\\}$, giving six numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Hundreds digit 3.", "workingLatex": "301, 302, 310, 312, 320, 321", "explanation": "With $3$ leading, the tens and units come from $\\{0,1,2\\}$, giving six numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Hundreds digit 0 is rejected.", "workingLatex": "0\\_\\_ \\ \\text{rejected}", "explanation": "Leading with $0$ does not give a genuine three-digit number, so it is left out.", "diagram": null },
        { "stepNumber": 7, "description": "Collect the full list.", "workingLatex": "6 + 6 + 6 = 18", "explanation": "Each of the three allowed leading digits contributes six numbers.", "diagram": null },
        { "stepNumber": 8, "description": "Check by counting.", "workingLatex": "3 \\times 3 \\times 2 = 18", "explanation": "Three choices for the hundreds (not $0$), then three, then two for the remaining places give $18$ numbers.", "diagram": null }
      ],
      "finalAnswer": "$18 \\text{ numbers}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "two dice", "condition"],
    "questionText": "Two ordinary dice, each numbered $1$ to $6$, are rolled. Writing each outcome as (first, second), list all the outcomes where the first score is greater than the second score.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the sample space.", "workingLatex": "\\text{outcomes} = (a,b), \\ a,b \\in \\{1,\\dots,6\\}", "explanation": "There are $36$ ordered pairs; we want those where the first score beats the second, so $a > b$.", "diagram": null },
        { "stepNumber": 2, "description": "First score 1.", "workingLatex": "\\text{none}", "explanation": "No score is smaller than $1$, so a first score of $1$ can never be the greater one.", "diagram": null },
        { "stepNumber": 3, "description": "First score 2.", "workingLatex": "(2,1)", "explanation": "The second score must be below $2$, so only $(2,1)$ works.", "diagram": null },
        { "stepNumber": 4, "description": "First score 3.", "workingLatex": "(3,1), (3,2)", "explanation": "The second score can be $1$ or $2$.", "diagram": null },
        { "stepNumber": 5, "description": "First score 4.", "workingLatex": "(4,1), (4,2), (4,3)", "explanation": "The second score can be $1$, $2$ or $3$.", "diagram": null },
        { "stepNumber": 6, "description": "First score 5.", "workingLatex": "(5,1), (5,2), (5,3), (5,4)", "explanation": "The second score can be any of $1$ to $4$.", "diagram": null },
        { "stepNumber": 7, "description": "First score 6.", "workingLatex": "(6,1), (6,2), (6,3), (6,4), (6,5)", "explanation": "The second score can be any of $1$ to $5$.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the full list.", "workingLatex": "\\text{all pairs above}", "explanation": "The groups together list every outcome where the first score is larger.", "diagram": null },
        { "stepNumber": 9, "description": "Count them.", "workingLatex": "0 + 1 + 2 + 3 + 4 + 5 = 15", "explanation": "Adding the counts for each first score gives fifteen outcomes.", "diagram": null }
      ],
      "finalAnswer": "$15 \\text{ outcomes}$"
    }
  },
  {
    "id": "gcse.number.systematic-listing.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Systematic listing",
    "subtopicId": "gcse.number.systematic-listing",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["systematic listing", "combinations", "three choices"],
    "questionText": "A lunch deal has one sandwich (cheese, ham, tuna or egg), one snack (crisps, fruit or yoghurt) and one drink (water, juice or cola). How many different lunch deals are possible? Explain by listing systematically.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide on a systematic order.", "workingLatex": "\\text{fix the sandwich, then the snack, then the drink}", "explanation": "Working through sandwich, then snack, then drink in a set order lets us reach every deal exactly once.", "diagram": null },
        { "stepNumber": 2, "description": "Sandwich = cheese, snack = crisps.", "workingLatex": "\\text{(cheese, crisps, water), (cheese, crisps, juice), (cheese, crisps, cola)}", "explanation": "Holding cheese and crisps fixed, the drink can be any of the three.", "diagram": null },
        { "stepNumber": 3, "description": "Sandwich = cheese, other snacks.", "workingLatex": "\\text{fruit and yoghurt give } 2 \\times 3 = 6 \\text{ more}", "explanation": "Each remaining snack also gives three deals, so cheese produces $3 \\times 3 = 9$ deals in all.", "diagram": null },
        { "stepNumber": 4, "description": "Same count for each sandwich.", "workingLatex": "\\text{ham, tuna, egg} \\Rightarrow 9 \\text{ each}", "explanation": "Ham, tuna and egg each repeat the same pattern of snacks and drinks, giving nine deals apiece.", "diagram": null },
        { "stepNumber": 5, "description": "Add the sandwich groups.", "workingLatex": "9 + 9 + 9 + 9 = 36", "explanation": "There are four sandwiches, each starting a block of nine deals.", "diagram": null },
        { "stepNumber": 6, "description": "Check by multiplying.", "workingLatex": "4 \\times 3 \\times 3 = 36", "explanation": "Four sandwiches, three snacks and three drinks give $4 \\times 3 \\times 3 = 36$ deals.", "diagram": null },
        { "stepNumber": 7, "description": "Compare the methods.", "workingLatex": "36 = 36 \\ \\checkmark", "explanation": "Listing in blocks and multiplying give the same total.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "36 \\text{ lunch deals}", "explanation": "There are thirty-six different lunch deals.", "diagram": null }
      ],
      "finalAnswer": "$36 \\text{ lunch deals}$"
    }
  }
];
