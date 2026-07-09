import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.product-rule.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "A shop sells $5$ different T-shirts and $4$ different pairs of shorts. How many different outfits of one T-shirt and one pair of shorts can be made?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two independent choices.", "workingLatex": "\\text{choice 1: T-shirt}, \\ \\text{choice 2: shorts}", "explanation": "An outfit is built from two separate decisions, so we look at how many options each decision has.", "diagram": null },
        { "stepNumber": 2, "description": "Count the T-shirt options.", "workingLatex": "5 \\text{ T-shirts}", "explanation": "There are five ways to choose the T-shirt.", "diagram": null },
        { "stepNumber": 3, "description": "Count the shorts options.", "workingLatex": "4 \\text{ pairs of shorts}", "explanation": "For each T-shirt, there are four ways to choose the shorts.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "5 \\times 4", "explanation": "Because every T-shirt can go with every pair of shorts, we multiply the numbers of options instead of adding them.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "5 \\times 4 = 20", "explanation": "Multiplying gives the total number of different pairings.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "20 \\text{ outfits}", "explanation": "So there are $20$ possible outfits.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.product-rule.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "menu"],
    "questionText": "A menu has $3$ starters and $6$ main courses. How many different two-course meals of one starter and one main can be chosen?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: starter}, \\ \\text{choice 2: main}", "explanation": "A meal here means picking a starter and then a main, which are two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the starters.", "workingLatex": "3 \\text{ starters}", "explanation": "There are three possible starters.", "diagram": null },
        { "stepNumber": 3, "description": "Count the mains.", "workingLatex": "6 \\text{ mains}", "explanation": "Whichever starter is chosen, there are six mains to follow it.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "3 \\times 6", "explanation": "Each starter pairs with each main, so we multiply the two counts together.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "3 \\times 6 = 18", "explanation": "This is the total number of starter-and-main combinations.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "18 \\text{ meals}", "explanation": "So $18$ different two-course meals are possible.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.product-rule.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "An ice-cream stall offers $4$ flavours and $3$ toppings. How many different combinations of one flavour and one topping are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: flavour}, \\ \\text{choice 2: topping}", "explanation": "Each ice cream is made by choosing a flavour and a topping — two independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the flavours.", "workingLatex": "4 \\text{ flavours}", "explanation": "There are four flavours to pick from.", "diagram": null },
        { "stepNumber": 3, "description": "Count the toppings.", "workingLatex": "3 \\text{ toppings}", "explanation": "For each flavour there are three toppings available.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "4 \\times 3", "explanation": "Every flavour can be matched with every topping, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "4 \\times 3 = 12", "explanation": "Multiplying gives the total number of combinations.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "12 \\text{ combinations}", "explanation": "So there are $12$ flavour-and-topping combinations.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.product-rule.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "routes"],
    "questionText": "To travel from town $A$ to town $B$ there are $6$ roads, and from town $B$ to town $C$ there are $4$ roads. How many different routes are there from $A$ to $C$ passing through $B$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two stages of the journey.", "workingLatex": "\\text{stage 1: } A\\to B, \\ \\text{stage 2: } B\\to C", "explanation": "A full route is made of two parts, so we count the options for each part.", "diagram": null },
        { "stepNumber": 2, "description": "Count roads for the first stage.", "workingLatex": "6 \\text{ roads } (A\\to B)", "explanation": "There are six ways to get from $A$ to $B$.", "diagram": null },
        { "stepNumber": 3, "description": "Count roads for the second stage.", "workingLatex": "4 \\text{ roads } (B\\to C)", "explanation": "Whichever road reaches $B$, there are four roads onward to $C$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 4", "explanation": "Each first road can be followed by any second road, so we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "6 \\times 4 = 24", "explanation": "This is the total number of complete routes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "24 \\text{ routes}", "explanation": "So there are $24$ different routes from $A$ to $C$.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "A phone shop stocks $8$ models of phone case, each available in $5$ colours. How many different case-and-colour options are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: model}, \\ \\text{choice 2: colour}", "explanation": "Picking a case means choosing a model and then a colour, two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the models.", "workingLatex": "8 \\text{ models}", "explanation": "There are eight case models.", "diagram": null },
        { "stepNumber": 3, "description": "Count the colours.", "workingLatex": "5 \\text{ colours}", "explanation": "Each model comes in five colours.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "8 \\times 5", "explanation": "Because every model is available in every colour, we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "8 \\times 5 = 40", "explanation": "This gives all the possible case options.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "40 \\text{ options}", "explanation": "So there are $40$ different case-and-colour options.", "diagram": null }
      ],
      "finalAnswer": "$40$"
    }
  },
  {
    "id": "gcse.number.product-rule.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "sandwich"],
    "questionText": "A sandwich bar offers $2$ types of bread and $9$ fillings. How many different sandwiches of one bread and one filling can be made?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: bread}, \\ \\text{choice 2: filling}", "explanation": "A sandwich is built by choosing bread and then a filling — two independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the breads.", "workingLatex": "2 \\text{ breads}", "explanation": "There are two breads to choose from.", "diagram": null },
        { "stepNumber": 3, "description": "Count the fillings.", "workingLatex": "9 \\text{ fillings}", "explanation": "For each bread there are nine fillings.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "2 \\times 9", "explanation": "Each bread can hold any filling, so we multiply the two counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "2 \\times 9 = 18", "explanation": "This is the total number of sandwiches.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "18 \\text{ sandwiches}", "explanation": "So $18$ different sandwiches are possible.", "diagram": null }
      ],
      "finalAnswer": "$18$"
    }
  },
  {
    "id": "gcse.number.product-rule.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "A school uniform has $7$ possible shirts and $3$ possible ties. How many different shirt-and-tie combinations are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: shirt}, \\ \\text{choice 2: tie}", "explanation": "The uniform is chosen in two stages: the shirt and then the tie.", "diagram": null },
        { "stepNumber": 2, "description": "Count the shirts.", "workingLatex": "7 \\text{ shirts}", "explanation": "There are seven shirts available.", "diagram": null },
        { "stepNumber": 3, "description": "Count the ties.", "workingLatex": "3 \\text{ ties}", "explanation": "Each shirt can be worn with any of three ties.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "7 \\times 3", "explanation": "Since every shirt goes with every tie, we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "7 \\times 3 = 21", "explanation": "This gives the total number of combinations.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "21 \\text{ combinations}", "explanation": "So there are $21$ shirt-and-tie combinations.", "diagram": null }
      ],
      "finalAnswer": "$21$"
    }
  },
  {
    "id": "gcse.number.product-rule.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "dice and coin"],
    "questionText": "A fair dice is rolled and a fair coin is tossed. How many different outcomes (dice score paired with coin side) are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two experiments.", "workingLatex": "\\text{event 1: dice}, \\ \\text{event 2: coin}", "explanation": "An outcome records the dice result and the coin result, which happen independently.", "diagram": null },
        { "stepNumber": 2, "description": "Count the dice outcomes.", "workingLatex": "6 \\text{ scores}", "explanation": "A dice can land on any of six numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Count the coin outcomes.", "workingLatex": "2 \\text{ sides}", "explanation": "A coin can land heads or tails, giving two outcomes.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 2", "explanation": "Each dice score can pair with either coin side, so we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "6 \\times 2 = 12", "explanation": "This is the total number of combined outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "12 \\text{ outcomes}", "explanation": "So there are $12$ possible outcomes.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.product-rule.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "menu"],
    "questionText": "A cafe offers $5$ main dishes and $4$ desserts. How many different meals of one main and one dessert are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: main}, \\ \\text{choice 2: dessert}", "explanation": "A meal is a main followed by a dessert — two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the mains.", "workingLatex": "5 \\text{ mains}", "explanation": "There are five main dishes.", "diagram": null },
        { "stepNumber": 3, "description": "Count the desserts.", "workingLatex": "4 \\text{ desserts}", "explanation": "Each main can be followed by any of four desserts.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "5 \\times 4", "explanation": "Every main pairs with every dessert, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "5 \\times 4 = 20", "explanation": "This gives the total number of meals.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "20 \\text{ meals}", "explanation": "So there are $20$ different meals.", "diagram": null }
      ],
      "finalAnswer": "$20$"
    }
  },
  {
    "id": "gcse.number.product-rule.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "A market stall sells $3$ styles of hat and $5$ styles of scarf. How many different hat-and-scarf sets can be bought?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: hat}, \\ \\text{choice 2: scarf}", "explanation": "A set is made by choosing a hat and then a scarf.", "diagram": null },
        { "stepNumber": 2, "description": "Count the hats.", "workingLatex": "3 \\text{ hats}", "explanation": "There are three hat styles.", "diagram": null },
        { "stepNumber": 3, "description": "Count the scarves.", "workingLatex": "5 \\text{ scarves}", "explanation": "Each hat can be paired with any of five scarves.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "3 \\times 5", "explanation": "Each hat goes with each scarf, so we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "3 \\times 5 = 15", "explanation": "This is the total number of sets.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "15 \\text{ sets}", "explanation": "So there are $15$ hat-and-scarf sets.", "diagram": null }
      ],
      "finalAnswer": "$15$"
    }
  },
  {
    "id": "gcse.number.product-rule.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "A set menu has $3$ starters, $4$ main courses and $2$ desserts. How many different three-course meals can be chosen?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{starter, main, dessert}", "explanation": "A three-course meal is built from three separate decisions, one for each course.", "diagram": null },
        { "stepNumber": 2, "description": "Count the starters.", "workingLatex": "3 \\text{ starters}", "explanation": "There are three ways to choose the starter.", "diagram": null },
        { "stepNumber": 3, "description": "Count the mains.", "workingLatex": "4 \\text{ mains}", "explanation": "For each starter there are four mains.", "diagram": null },
        { "stepNumber": 4, "description": "Count the desserts.", "workingLatex": "2 \\text{ desserts}", "explanation": "For each starter-and-main choice there are two desserts.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "3 \\times 4 \\times 2", "explanation": "Because the choices are independent, we multiply all three counts together.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "3 \\times 4 \\times 2 = 24", "explanation": "Working left to right, $3 \\times 4 = 12$ and $12 \\times 2 = 24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ meals}", "explanation": "So there are $24$ different three-course meals.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "A lunch deal lets you pick $1$ of $2$ breads, $1$ of $3$ fillings and $1$ of $2$ drinks. How many different lunch deals are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{bread, filling, drink}", "explanation": "A lunch deal is made from three independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the breads.", "workingLatex": "2 \\text{ breads}", "explanation": "There are two breads.", "diagram": null },
        { "stepNumber": 3, "description": "Count the fillings.", "workingLatex": "3 \\text{ fillings}", "explanation": "For each bread there are three fillings.", "diagram": null },
        { "stepNumber": 4, "description": "Count the drinks.", "workingLatex": "2 \\text{ drinks}", "explanation": "For each bread-and-filling choice there are two drinks.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "2 \\times 3 \\times 2", "explanation": "The choices are independent, so we multiply the three counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "2 \\times 3 \\times 2 = 12", "explanation": "Here $2 \\times 3 = 6$ and $6 \\times 2 = 12$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ deals}", "explanation": "So there are $12$ different lunch deals.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.product-rule.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "An outfit is made from $1$ of $4$ tops, $1$ of $3$ pairs of trousers and $1$ of $2$ pairs of shoes. How many different outfits are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{top, trousers, shoes}", "explanation": "An outfit is built from three separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the tops.", "workingLatex": "4 \\text{ tops}", "explanation": "There are four tops to choose.", "diagram": null },
        { "stepNumber": 3, "description": "Count the trousers.", "workingLatex": "3 \\text{ trousers}", "explanation": "For each top there are three pairs of trousers.", "diagram": null },
        { "stepNumber": 4, "description": "Count the shoes.", "workingLatex": "2 \\text{ shoes}", "explanation": "For each top-and-trousers choice there are two pairs of shoes.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "4 \\times 3 \\times 2", "explanation": "Since the choices are independent, we multiply the three counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 2 = 24", "explanation": "Working through, $4 \\times 3 = 12$ and $12 \\times 2 = 24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ outfits}", "explanation": "So there are $24$ possible outfits.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "repetition"],
    "questionText": "A fair coin is tossed $3$ times, and the order of results is recorded. How many different sequences of heads and tails are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three positions.", "workingLatex": "\\text{toss 1}, \\ \\text{toss 2}, \\ \\text{toss 3}", "explanation": "Each toss is a separate slot in the sequence, so there are three positions to fill.", "diagram": null },
        { "stepNumber": 2, "description": "Count outcomes for each toss.", "workingLatex": "2 \\text{ outcomes each}", "explanation": "Every toss can be heads or tails, giving two possibilities regardless of previous tosses.", "diagram": null },
        { "stepNumber": 3, "description": "Note results can repeat.", "workingLatex": "2, \\ 2, \\ 2", "explanation": "The same result can appear on any toss, so each slot always has two options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "2 \\times 2 \\times 2", "explanation": "Each toss is independent, so we multiply the number of options for the three tosses.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "This equals $2^3 = 8$ sequences.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8 \\text{ sequences}", "explanation": "So there are $8$ possible sequences of heads and tails.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.product-rule.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "A bike can be ordered in $3$ frame colours, $2$ wheel sizes and $4$ handlebar styles. How many different bikes can be ordered?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{colour, wheel size, handlebars}", "explanation": "A bike order is made from three independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the frame colours.", "workingLatex": "3 \\text{ colours}", "explanation": "There are three colours.", "diagram": null },
        { "stepNumber": 3, "description": "Count the wheel sizes.", "workingLatex": "2 \\text{ sizes}", "explanation": "For each colour there are two wheel sizes.", "diagram": null },
        { "stepNumber": 4, "description": "Count the handlebar styles.", "workingLatex": "4 \\text{ styles}", "explanation": "For each colour-and-wheel choice there are four handlebar styles.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "3 \\times 2 \\times 4", "explanation": "The choices are independent, so we multiply all three counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "3 \\times 2 \\times 4 = 24", "explanation": "Here $3 \\times 2 = 6$ and $6 \\times 4 = 24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ bikes}", "explanation": "So $24$ different bikes can be ordered.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "A sundae is built from $1$ of $5$ ice-cream flavours, $1$ of $2$ sauces and $1$ of $3$ toppings. How many different sundaes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{flavour, sauce, topping}", "explanation": "A sundae is made from three separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the flavours.", "workingLatex": "5 \\text{ flavours}", "explanation": "There are five flavours.", "diagram": null },
        { "stepNumber": 3, "description": "Count the sauces.", "workingLatex": "2 \\text{ sauces}", "explanation": "For each flavour there are two sauces.", "diagram": null },
        { "stepNumber": 4, "description": "Count the toppings.", "workingLatex": "3 \\text{ toppings}", "explanation": "For each flavour-and-sauce choice there are three toppings.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "5 \\times 2 \\times 3", "explanation": "The choices are independent, so we multiply the three counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "5 \\times 2 \\times 3 = 30", "explanation": "Here $5 \\times 2 = 10$ and $10 \\times 3 = 30$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "30 \\text{ sundaes}", "explanation": "So there are $30$ different sundaes.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.product-rule.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "repetition"],
    "questionText": "A $2$-digit code is made using digits $0$ to $9$, and digits may repeat. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions to fill.", "workingLatex": "\\underline{\\phantom{0}}\\ \\underline{\\phantom{0}}", "explanation": "A $2$-digit code has two positions, and we choose a digit for each one.", "diagram": null },
        { "stepNumber": 2, "description": "Count digits for the first position.", "workingLatex": "10 \\text{ digits } (0\\text{–}9)", "explanation": "The digits $0$ to $9$ give ten options for the first slot.", "diagram": null },
        { "stepNumber": 3, "description": "Count digits for the second position.", "workingLatex": "10 \\text{ digits}", "explanation": "Because digits may repeat, the second slot still has all ten options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "10 \\times 10", "explanation": "Each first digit can be followed by any second digit, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "10 \\times 10 = 100", "explanation": "This equals $10^2 = 100$ codes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "100 \\text{ codes}", "explanation": "So there are $100$ possible codes (from $00$ to $99$).", "diagram": null }
      ],
      "finalAnswer": "$100$"
    }
  },
  {
    "id": "gcse.number.product-rule.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "dice", "repetition"],
    "questionText": "A fair dice is rolled twice and the ordered pair of scores is recorded. How many different outcomes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two rolls.", "workingLatex": "\\text{roll 1}, \\ \\text{roll 2}", "explanation": "Each roll is recorded in order, so there are two slots to fill.", "diagram": null },
        { "stepNumber": 2, "description": "Count outcomes for the first roll.", "workingLatex": "6 \\text{ scores}", "explanation": "The first roll can be any of six numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Count outcomes for the second roll.", "workingLatex": "6 \\text{ scores}", "explanation": "The second roll is independent and can also be any of six numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 6", "explanation": "Each first score pairs with each second score, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "6 \\times 6 = 36", "explanation": "This equals $6^2 = 36$ outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "36 \\text{ outcomes}", "explanation": "So there are $36$ possible ordered outcomes.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.product-rule.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "selection"],
    "questionText": "A class has $12$ boys and $15$ girls. One boy and one girl are chosen to be class captains. How many different pairs can be chosen?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: a boy}, \\ \\text{choice 2: a girl}", "explanation": "A pair is formed by choosing one boy and one girl — two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count ways to choose the boy.", "workingLatex": "12 \\text{ boys}", "explanation": "There are twelve boys to pick from.", "diagram": null },
        { "stepNumber": 3, "description": "Count ways to choose the girl.", "workingLatex": "15 \\text{ girls}", "explanation": "For each boy there are fifteen girls.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "12 \\times 15", "explanation": "Every boy can be paired with every girl, so we multiply the counts.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "12 \\times 15 = 180", "explanation": "This is the total number of captain pairs.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "180 \\text{ pairs}", "explanation": "So there are $180$ different pairs.", "diagram": null }
      ],
      "finalAnswer": "$180$"
    }
  },
  {
    "id": "gcse.number.product-rule.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "repetition"],
    "questionText": "A $2$-letter code is made using the letters $A$, $B$, $C$ and $D$, and letters may repeat. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\phantom{A}}\\ \\underline{\\phantom{A}}", "explanation": "There are two positions to fill, one letter each.", "diagram": null },
        { "stepNumber": 2, "description": "Count letters for the first position.", "workingLatex": "4 \\text{ letters}", "explanation": "Any of the four letters can go first.", "diagram": null },
        { "stepNumber": 3, "description": "Count letters for the second position.", "workingLatex": "4 \\text{ letters}", "explanation": "Because letters may repeat, the second position also has four options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "4 \\times 4", "explanation": "Each first letter can be followed by any second letter, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "4 \\times 4 = 16", "explanation": "This equals $4^2 = 16$ codes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "16 \\text{ codes}", "explanation": "So there are $16$ possible codes.", "diagram": null }
      ],
      "finalAnswer": "$16$"
    }
  },
  {
    "id": "gcse.number.product-rule.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "factorial"],
    "questionText": "In how many different orders can $3$ different books be arranged in a row on a shelf?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions to fill.", "workingLatex": "\\underline{\\phantom{0}}\\ \\underline{\\phantom{0}}\\ \\underline{\\phantom{0}}", "explanation": "Arranging the books means filling three positions in the row, one book per position.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for the first position.", "workingLatex": "3 \\text{ books}", "explanation": "Any of the three books can go first.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the second position.", "workingLatex": "2 \\text{ books}", "explanation": "One book is now placed, so two remain for the second position.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for the third position.", "workingLatex": "1 \\text{ book}", "explanation": "Only one book is left for the last position.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "3 \\times 2 \\times 1", "explanation": "We multiply the choices for each position; this product is written $3!$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "3 \\times 2 \\times 1 = 6", "explanation": "So $3! = 6$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ orders}", "explanation": "So the books can be arranged in $6$ different orders.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.product-rule.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "factorial"],
    "questionText": "In how many different orders can $4$ different people stand in a row for a photo?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions to fill.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are four positions in the row, and each is filled by one person.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for the first position.", "workingLatex": "4 \\text{ people}", "explanation": "Any of the four people can stand first.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the second position.", "workingLatex": "3 \\text{ people}", "explanation": "After one is placed, three remain.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for the third and fourth positions.", "workingLatex": "2 \\text{ then } 1", "explanation": "Two people remain for the third slot, and the last person fills the final slot.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "4 \\times 3 \\times 2 \\times 1", "explanation": "We multiply the choices for all four positions; this is $4!$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 2 \\times 1 = 24", "explanation": "So $4! = 24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ orders}", "explanation": "So there are $24$ possible orders.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "combinations of choices"],
    "questionText": "A vending machine offers $6$ snacks and $5$ drinks. How many different snack-and-drink combinations are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: snack}, \\ \\text{choice 2: drink}", "explanation": "A combination is a snack together with a drink, two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the snacks.", "workingLatex": "6 \\text{ snacks}", "explanation": "There are six snacks available.", "diagram": null },
        { "stepNumber": 3, "description": "Count the drinks.", "workingLatex": "5 \\text{ drinks}", "explanation": "Each snack can go with any of five drinks.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 5", "explanation": "Every snack pairs with every drink, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "6 \\times 5 = 30", "explanation": "This is the total number of combinations.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "30 \\text{ combinations}", "explanation": "So there are $30$ snack-and-drink combinations.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.product-rule.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "spinner and coin"],
    "questionText": "A spinner with $4$ equal sections is spun and a fair coin is tossed. How many different combined outcomes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two events.", "workingLatex": "\\text{event 1: spinner}, \\ \\text{event 2: coin}", "explanation": "A combined outcome records the spinner section and the coin side, independently.", "diagram": null },
        { "stepNumber": 2, "description": "Count spinner outcomes.", "workingLatex": "4 \\text{ sections}", "explanation": "The spinner can land on any of four sections.", "diagram": null },
        { "stepNumber": 3, "description": "Count coin outcomes.", "workingLatex": "2 \\text{ sides}", "explanation": "The coin can be heads or tails.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "4 \\times 2", "explanation": "Each spinner result can pair with either coin side, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "4 \\times 2 = 8", "explanation": "This is the total number of combined outcomes.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "8 \\text{ outcomes}", "explanation": "So there are $8$ possible outcomes.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.product-rule.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "three-stage"],
    "questionText": "A football kit is chosen from $3$ shirts, $4$ pairs of shorts and $5$ pairs of socks. How many different kits are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three choices.", "workingLatex": "\\text{shirt, shorts, socks}", "explanation": "A kit is built from three separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the shirts.", "workingLatex": "3 \\text{ shirts}", "explanation": "There are three shirts.", "diagram": null },
        { "stepNumber": 3, "description": "Count the shorts.", "workingLatex": "4 \\text{ shorts}", "explanation": "For each shirt there are four pairs of shorts.", "diagram": null },
        { "stepNumber": 4, "description": "Count the socks.", "workingLatex": "5 \\text{ socks}", "explanation": "For each shirt-and-shorts choice there are five pairs of socks.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "3 \\times 4 \\times 5", "explanation": "The choices are independent, so we multiply the three counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "3 \\times 4 \\times 5 = 60", "explanation": "Here $3 \\times 4 = 12$ and $12 \\times 5 = 60$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "60 \\text{ kits}", "explanation": "So there are $60$ different kits.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.number.product-rule.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["product rule", "counting", "menu"],
    "questionText": "A restaurant offers $7$ main courses and $4$ desserts. How many different two-course meals of one main and one dessert are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two choices.", "workingLatex": "\\text{choice 1: main}, \\ \\text{choice 2: dessert}", "explanation": "A meal is a main followed by a dessert — two separate decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the mains.", "workingLatex": "7 \\text{ mains}", "explanation": "There are seven main courses.", "diagram": null },
        { "stepNumber": 3, "description": "Count the desserts.", "workingLatex": "4 \\text{ desserts}", "explanation": "Each main can be followed by any of four desserts.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "7 \\times 4", "explanation": "Every main pairs with every dessert, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate.", "workingLatex": "7 \\times 4 = 28", "explanation": "This is the total number of meals.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "28 \\text{ meals}", "explanation": "So there are $28$ different two-course meals.", "diagram": null }
      ],
      "finalAnswer": "$28$"
    }
  },
  {
    "id": "gcse.number.product-rule.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "repetition"],
    "questionText": "A $4$-digit PIN is made using digits $0$ to $9$, and digits may repeat. How many different PINs are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions to fill.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "A PIN has four positions, and we choose a digit for each.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the first position.", "workingLatex": "10 \\text{ digits}", "explanation": "The digits $0$–$9$ give ten choices.", "diagram": null },
        { "stepNumber": 3, "description": "Note repetition is allowed.", "workingLatex": "10, \\ 10, \\ 10, \\ 10", "explanation": "Because a digit can be reused, every position keeps all ten options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "10 \\times 10 \\times 10 \\times 10", "explanation": "Each position is chosen independently, so we multiply the option counts.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "10^4", "explanation": "Four factors of $10$ can be written as $10^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "10^4 = 10000", "explanation": "This is the total number of PINs.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "10000 \\text{ PINs}", "explanation": "So there are $10\\,000$ possible PINs.", "diagram": null }
      ],
      "finalAnswer": "$10000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "no repetition"],
    "questionText": "A $4$-digit PIN is made using digits $0$ to $9$, but no digit may be repeated. How many different PINs are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions to fill.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are four positions, but now each digit used cannot appear again.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the first position.", "workingLatex": "10 \\text{ digits}", "explanation": "All ten digits are available for the first slot.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the second position.", "workingLatex": "9 \\text{ digits}", "explanation": "One digit is now used, so nine remain.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the third position.", "workingLatex": "8 \\text{ digits}", "explanation": "Two digits are used, leaving eight.", "diagram": null },
        { "stepNumber": 5, "description": "Count options for the fourth position.", "workingLatex": "7 \\text{ digits}", "explanation": "Three digits are used, leaving seven.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "10 \\times 9 \\times 8 \\times 7", "explanation": "We multiply the shrinking option counts for the four positions.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "10 \\times 9 \\times 8 \\times 7 = 5040", "explanation": "Here $10 \\times 9 = 90$, $90 \\times 8 = 720$, and $720 \\times 7 = 5040$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "5040 \\text{ PINs}", "explanation": "So there are $5040$ possible PINs with no repeats.", "diagram": null }
      ],
      "finalAnswer": "$5040$"
    }
  },
  {
    "id": "gcse.number.product-rule.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "repetition"],
    "questionText": "A $3$-letter code is made from the $26$ letters of the alphabet, and letters may repeat. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "The code has three positions, one letter each.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for each position.", "workingLatex": "26 \\text{ letters}", "explanation": "There are $26$ letters available for a position.", "diagram": null },
        { "stepNumber": 3, "description": "Note repetition is allowed.", "workingLatex": "26, \\ 26, \\ 26", "explanation": "Since letters may repeat, each of the three positions still has $26$ options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 26 \\times 26", "explanation": "The positions are independent, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "26^3", "explanation": "Three factors of $26$ give $26^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "26^3 = 17576", "explanation": "Here $26 \\times 26 = 676$ and $676 \\times 26 = 17576$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "17576 \\text{ codes}", "explanation": "So there are $17\\,576$ possible codes.", "diagram": null }
      ],
      "finalAnswer": "$17576$"
    }
  },
  {
    "id": "gcse.number.product-rule.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "no repetition"],
    "questionText": "A $3$-letter code is made from the $26$ letters of the alphabet, but no letter may be repeated. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are three positions, but a used letter cannot be repeated.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the first position.", "workingLatex": "26 \\text{ letters}", "explanation": "All $26$ letters are available at first.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the second position.", "workingLatex": "25 \\text{ letters}", "explanation": "One letter is used, leaving $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the third position.", "workingLatex": "24 \\text{ letters}", "explanation": "Two letters are used, leaving $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "26 \\times 25 \\times 24", "explanation": "We multiply the shrinking option counts for the three positions.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "26 \\times 25 \\times 24 = 15600", "explanation": "Here $26 \\times 25 = 650$ and $650 \\times 24 = 15600$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "15600 \\text{ codes}", "explanation": "So there are $15\\,600$ codes with no repeated letter.", "diagram": null }
      ],
      "finalAnswer": "$15600$"
    }
  },
  {
    "id": "gcse.number.product-rule.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "factorial"],
    "questionText": "In how many different orders can $5$ different books be arranged on a shelf?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are five positions to fill, one book each.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for the first position.", "workingLatex": "5 \\text{ books}", "explanation": "Any of the five books can go first.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the next positions.", "workingLatex": "4, \\ 3, \\ 2 \\text{ books}", "explanation": "Each time a book is placed, one fewer remains for the next slot.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for the last position.", "workingLatex": "1 \\text{ book}", "explanation": "The final position is forced by the one remaining book.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "5 \\times 4 \\times 3 \\times 2 \\times 1", "explanation": "Multiplying the choices for all positions gives $5!$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate step by step.", "workingLatex": "5 \\times 4 = 20, \\ 20 \\times 3 = 60, \\ 60 \\times 2 = 120", "explanation": "Building up the product carefully avoids mistakes; the final factor of $1$ does not change it.", "diagram": null },
        { "stepNumber": 7, "description": "State the factorial value.", "workingLatex": "5! = 120", "explanation": "So $5! = 120$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "120 \\text{ orders}", "explanation": "So there are $120$ different orders.", "diagram": null }
      ],
      "finalAnswer": "$120$"
    }
  },
  {
    "id": "gcse.number.product-rule.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "factorial"],
    "questionText": "In how many different orders can $6$ different runners finish a race (assuming no ties)?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise this as an arrangement.", "workingLatex": "\\text{order } 6 \\text{ distinct runners}", "explanation": "A finishing order is an arrangement of all six runners into first-to-sixth places.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for first place.", "workingLatex": "6 \\text{ runners}", "explanation": "Any of the six runners could come first.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the following places.", "workingLatex": "5, \\ 4, \\ 3, \\ 2, \\ 1", "explanation": "After each place is decided, one fewer runner remains for the next place.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1", "explanation": "Multiplying all the position choices gives $6!$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the first factors.", "workingLatex": "6 \\times 5 \\times 4 = 120", "explanation": "Building up: $6 \\times 5 = 30$ and $30 \\times 4 = 120$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the remaining factors.", "workingLatex": "120 \\times 3 \\times 2 \\times 1 = 720", "explanation": "Then $120 \\times 3 = 360$ and $360 \\times 2 = 720$.", "diagram": null },
        { "stepNumber": 7, "description": "State the factorial value.", "workingLatex": "6! = 720", "explanation": "So $6! = 720$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "720 \\text{ orders}", "explanation": "So there are $720$ possible finishing orders.", "diagram": null }
      ],
      "finalAnswer": "$720$"
    }
  },
  {
    "id": "gcse.number.product-rule.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "number plates", "repetition"],
    "questionText": "A simple number plate is made from $2$ letters followed by $3$ digits. Letters and digits may repeat. How many different plates are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L L D D D}", "explanation": "A plate has five positions: two letters then three digits.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for each letter.", "workingLatex": "26 \\text{ letters each}", "explanation": "Each letter position has $26$ choices, and repetition is allowed.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for each digit.", "workingLatex": "10 \\text{ digits each}", "explanation": "Each digit position has $10$ choices, with repetition allowed.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 26 \\times 10 \\times 10 \\times 10", "explanation": "All five positions are independent, so we multiply their option counts.", "diagram": null },
        { "stepNumber": 5, "description": "Group the letters and digits.", "workingLatex": "26^2 \\times 10^3", "explanation": "Grouping makes the arithmetic clearer: $26^2$ for the letters and $10^3$ for the digits.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate each part.", "workingLatex": "676 \\times 1000", "explanation": "Here $26^2 = 676$ and $10^3 = 1000$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "676 \\times 1000 = 676000", "explanation": "This gives the total number of plates.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "676000 \\text{ plates}", "explanation": "So there are $676\\,000$ possible plates.", "diagram": null }
      ],
      "finalAnswer": "$676000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "leading digit"],
    "questionText": "How many $3$-digit whole numbers are there? (A $3$-digit number cannot start with $0$; digits may repeat.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{H T U}", "explanation": "A $3$-digit number has a hundreds, tens and units position.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the restriction to the first digit.", "workingLatex": "\\text{hundreds} \\neq 0", "explanation": "The leading digit cannot be $0$, or the number would really have fewer than three digits.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the hundreds digit.", "workingLatex": "9 \\text{ options } (1\\text{–}9)", "explanation": "Excluding $0$ leaves the nine digits $1$ to $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the tens digit.", "workingLatex": "10 \\text{ options}", "explanation": "The tens digit has no restriction, so all ten digits are allowed.", "diagram": null },
        { "stepNumber": 5, "description": "Count options for the units digit.", "workingLatex": "10 \\text{ options}", "explanation": "The units digit also has all ten choices, and repetition is allowed.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "9 \\times 10 \\times 10", "explanation": "The positions are independent, so we multiply the option counts.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "9 \\times 10 \\times 10 = 900", "explanation": "This matches the fact that the $3$-digit numbers run from $100$ to $999$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "900 \\text{ numbers}", "explanation": "So there are $900$ three-digit whole numbers.", "diagram": null }
      ],
      "finalAnswer": "$900$"
    }
  },
  {
    "id": "gcse.number.product-rule.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "no repetition"],
    "questionText": "How many $3$-digit numbers have no repeated digit? (The first digit cannot be $0$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{H T U}", "explanation": "There are three positions, and no digit may appear twice.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the hundreds digit.", "workingLatex": "9 \\text{ options } (1\\text{–}9)", "explanation": "The leading digit cannot be $0$, leaving nine choices.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the tens digit.", "workingLatex": "9 \\text{ options}", "explanation": "The tens digit may be $0$ but must differ from the hundreds digit. That is $10$ digits minus the one used $= 9$.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the units digit.", "workingLatex": "8 \\text{ options}", "explanation": "Two different digits are now used, so $10 - 2 = 8$ remain.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "9 \\times 9 \\times 8", "explanation": "We multiply the option counts for the three positions.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the first two factors.", "workingLatex": "9 \\times 9 = 81", "explanation": "Work in stages to keep the arithmetic manageable.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply by the last factor.", "workingLatex": "81 \\times 8 = 648", "explanation": "This gives the total count.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "648 \\text{ numbers}", "explanation": "So there are $648$ three-digit numbers with no repeated digit.", "diagram": null }
      ],
      "finalAnswer": "$648$"
    }
  },
  {
    "id": "gcse.number.product-rule.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "even"],
    "questionText": "A $4$-digit code uses digits $0$ to $9$ and digits may repeat. How many of these codes are even?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "A code has four positions; being even depends only on the last digit.", "diagram": null },
        { "stepNumber": 2, "description": "State the even condition.", "workingLatex": "\\text{last digit} \\in \\{0,2,4,6,8\\}", "explanation": "A number is even exactly when its units digit is even.", "diagram": null },
        { "stepNumber": 3, "description": "Count the first three positions.", "workingLatex": "10, \\ 10, \\ 10", "explanation": "The first three digits are unrestricted, with repetition allowed, so each has ten options.", "diagram": null },
        { "stepNumber": 4, "description": "Count the last position.", "workingLatex": "5 \\text{ options}", "explanation": "There are five even digits to choose from for the units position.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "10 \\times 10 \\times 10 \\times 5", "explanation": "Multiplying the option counts across the four positions gives the total.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "1000 \\times 5 = 5000", "explanation": "Here $10 \\times 10 \\times 10 = 1000$ and $1000 \\times 5 = 5000$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "5000 \\text{ codes}", "explanation": "So $5000$ of the codes are even.", "diagram": null }
      ],
      "finalAnswer": "$5000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "passwords", "repetition"],
    "questionText": "A password is made from $1$ letter (A–Z) followed by $4$ digits (0–9). Letters and digits may repeat. How many different passwords are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L D D D D}", "explanation": "There are five positions: one letter then four digits.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the letter.", "workingLatex": "26 \\text{ letters}", "explanation": "Any of the $26$ letters can be used.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for each digit.", "workingLatex": "10 \\text{ each}", "explanation": "Each digit position has ten choices, and repetition is allowed.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 10 \\times 10 \\times 10 \\times 10", "explanation": "The positions are independent, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Group the digits.", "workingLatex": "26 \\times 10^4", "explanation": "The four digit positions give $10^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "26 \\times 10000 = 260000", "explanation": "Multiplying the letter count by $10\\,000$ gives the total.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "260000 \\text{ passwords}", "explanation": "So there are $260\\,000$ possible passwords.", "diagram": null }
      ],
      "finalAnswer": "$260000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "factorial"],
    "questionText": "How many different arrangements are there of the $5$ letters in the word MATHS (all letters are different)?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the letters are distinct.", "workingLatex": "\\text{M, A, T, H, S}", "explanation": "All five letters are different, so every rearrangement is unique.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are five positions to fill with the five letters.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the first position.", "workingLatex": "5 \\text{ letters}", "explanation": "Any of the five letters can go first.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for the remaining positions.", "workingLatex": "4, \\ 3, \\ 2, \\ 1", "explanation": "After each placement, one fewer letter is available.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "5 \\times 4 \\times 3 \\times 2 \\times 1 = 5!", "explanation": "Multiplying all the position choices gives $5!$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "5! = 120", "explanation": "Working up, $5 \\times 4 = 20$, $\\times 3 = 60$, $\\times 2 = 120$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "120 \\text{ arrangements}", "explanation": "So there are $120$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$120$"
    }
  },
  {
    "id": "gcse.number.product-rule.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition", "ordered selection"],
    "questionText": "In a race with $7$ runners, medals are given for gold, silver and bronze. In how many ways can the three medals be awarded?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the ordered positions.", "workingLatex": "\\text{gold, silver, bronze}", "explanation": "The three medals are distinct, so the order the runners are chosen in matters.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for gold.", "workingLatex": "7 \\text{ runners}", "explanation": "Any of the seven runners could win gold.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for silver.", "workingLatex": "6 \\text{ runners}", "explanation": "The gold winner cannot also get silver, so six remain.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for bronze.", "workingLatex": "5 \\text{ runners}", "explanation": "Two runners already have medals, leaving five for bronze.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "7 \\times 6 \\times 5", "explanation": "We multiply the choices for the three medal positions.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "7 \\times 6 \\times 5 = 210", "explanation": "Here $7 \\times 6 = 42$ and $42 \\times 5 = 210$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "210 \\text{ ways}", "explanation": "So the medals can be awarded in $210$ ways.", "diagram": null }
      ],
      "finalAnswer": "$210$"
    }
  },
  {
    "id": "gcse.number.product-rule.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition", "committee"],
    "questionText": "A club of $10$ members must choose a president, a vice-president and a secretary. No member can hold more than one post. In how many ways can this be done?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the three distinct roles.", "workingLatex": "\\text{president, vice, secretary}", "explanation": "The roles are different, so the order in which members are assigned matters.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for president.", "workingLatex": "10 \\text{ members}", "explanation": "Any of the ten members can be president.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for vice-president.", "workingLatex": "9 \\text{ members}", "explanation": "The president is taken, so nine members remain.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for secretary.", "workingLatex": "8 \\text{ members}", "explanation": "Two roles are filled, leaving eight members.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "10 \\times 9 \\times 8", "explanation": "We multiply the choices for the three roles.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "10 \\times 9 \\times 8 = 720", "explanation": "Here $10 \\times 9 = 90$ and $90 \\times 8 = 720$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "720 \\text{ ways}", "explanation": "So there are $720$ ways to fill the three posts.", "diagram": null }
      ],
      "finalAnswer": "$720$"
    }
  },
  {
    "id": "gcse.number.product-rule.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "Four different children sit in a row of $4$ chairs. If Amir must sit in the first chair, in how many ways can they be seated?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{chair 1, 2, 3, 4}", "explanation": "There are four chairs to fill, with a restriction on the first one.", "diagram": null },
        { "stepNumber": 2, "description": "Place Amir first.", "workingLatex": "\\text{chair 1} = \\text{Amir} \\ (1 \\text{ way})", "explanation": "Amir is fixed in the first chair, so this position has only one option.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for the second chair.", "workingLatex": "3 \\text{ children}", "explanation": "The remaining three children can go in the second chair.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for the third chair.", "workingLatex": "2 \\text{ children}", "explanation": "Two children remain after the second chair is filled.", "diagram": null },
        { "stepNumber": 5, "description": "Count choices for the fourth chair.", "workingLatex": "1 \\text{ child}", "explanation": "The last child fills the final chair.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "1 \\times 3 \\times 2 \\times 1", "explanation": "We multiply the choices across all four chairs.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "1 \\times 3 \\times 2 \\times 1 = 6", "explanation": "Once Amir is fixed, the other three arrange in $3! = 6$ ways.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "6 \\text{ ways}", "explanation": "So there are $6$ seatings.", "diagram": null }
      ],
      "finalAnswer": "$6$"
    }
  },
  {
    "id": "gcse.number.product-rule.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "Five different people stand in a row. If a particular person, Bea, must stand at the front, in how many ways can the row be arranged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{pos 1, 2, 3, 4, 5}", "explanation": "Five positions must be filled, with the front position fixed.", "diagram": null },
        { "stepNumber": 2, "description": "Fix Bea at the front.", "workingLatex": "\\text{pos 1} = \\text{Bea} \\ (1 \\text{ way})", "explanation": "Because Bea must be first, that position offers only one choice.", "diagram": null },
        { "stepNumber": 3, "description": "Count the remaining people.", "workingLatex": "4 \\text{ people left}", "explanation": "The other four people fill positions $2$ to $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices along the remaining positions.", "workingLatex": "4, \\ 3, \\ 2, \\ 1", "explanation": "These four positions are a straightforward arrangement of four people.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "1 \\times 4 \\times 3 \\times 2 \\times 1", "explanation": "Multiplying gives one option for Bea times $4!$ for the rest.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "4! = 24", "explanation": "So the total is $1 \\times 24 = 24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ ways}", "explanation": "So there are $24$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "odd"],
    "questionText": "How many $3$-digit numbers are odd? (The first digit cannot be $0$; digits may repeat.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{H T U}", "explanation": "There are three positions; being odd depends on the units digit.", "diagram": null },
        { "stepNumber": 2, "description": "State the odd condition.", "workingLatex": "\\text{units} \\in \\{1,3,5,7,9\\}", "explanation": "A number is odd exactly when its units digit is odd.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the hundreds digit.", "workingLatex": "9 \\text{ options}", "explanation": "The leading digit cannot be $0$, so there are nine choices $1$–$9$.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the tens digit.", "workingLatex": "10 \\text{ options}", "explanation": "The tens digit is unrestricted, giving all ten choices.", "diagram": null },
        { "stepNumber": 5, "description": "Count options for the units digit.", "workingLatex": "5 \\text{ options}", "explanation": "There are five odd digits to place in the units position.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "9 \\times 10 \\times 5", "explanation": "We multiply the option counts across the three positions.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "9 \\times 10 \\times 5 = 450", "explanation": "Here $9 \\times 10 = 90$ and $90 \\times 5 = 450$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "450 \\text{ numbers}", "explanation": "So there are $450$ odd three-digit numbers.", "diagram": null }
      ],
      "finalAnswer": "$450$"
    }
  },
  {
    "id": "gcse.number.product-rule.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "How many arrangements of the $5$ different letters in PRIME begin with the letter P?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note the letters are distinct.", "workingLatex": "\\text{P, R, I, M, E}", "explanation": "All five letters differ, so every arrangement is unique.", "diagram": null },
        { "stepNumber": 2, "description": "Fix P in the first position.", "workingLatex": "\\text{pos 1} = \\text{P} \\ (1 \\text{ way})", "explanation": "The restriction pins P to the front, giving only one choice there.", "diagram": null },
        { "stepNumber": 3, "description": "Count the remaining letters.", "workingLatex": "4 \\text{ letters left}", "explanation": "The letters R, I, M, E fill the remaining four positions.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices along the rest.", "workingLatex": "4, \\ 3, \\ 2, \\ 1", "explanation": "These positions form an arrangement of the four remaining letters.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "1 \\times 4 \\times 3 \\times 2 \\times 1", "explanation": "One choice for P times $4!$ for the rest.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "4! = 24", "explanation": "So the total is $24$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ arrangements}", "explanation": "So $24$ arrangements begin with P.", "diagram": null }
      ],
      "finalAnswer": "$24$"
    }
  },
  {
    "id": "gcse.number.product-rule.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition"],
    "questionText": "How many $4$-digit numbers can be made using the digits $1, 2, 3, 4, 5, 6$ if no digit is repeated?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are four positions, chosen from six available digits without repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the first digit.", "workingLatex": "6 \\text{ digits}", "explanation": "Any of the six digits can go first (none is $0$, so no leading-zero issue).", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the second digit.", "workingLatex": "5 \\text{ digits}", "explanation": "One digit is used, leaving five.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the third and fourth digits.", "workingLatex": "4 \\text{ then } 3", "explanation": "The available digits keep shrinking by one each time.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "6 \\times 5 \\times 4 \\times 3", "explanation": "We multiply the shrinking option counts.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "6 \\times 5 \\times 4 \\times 3 = 360", "explanation": "Here $6 \\times 5 = 30$, $30 \\times 4 = 120$, and $120 \\times 3 = 360$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "360 \\text{ numbers}", "explanation": "So there are $360$ such numbers.", "diagram": null }
      ],
      "finalAnswer": "$360$"
    }
  },
  {
    "id": "gcse.number.product-rule.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "codes", "repetition"],
    "questionText": "A $4$-symbol code is made using only the digits $1, 2, 3, 4, 5$, and digits may repeat. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "The code has four positions, chosen from five possible digits.", "diagram": null },
        { "stepNumber": 2, "description": "Count options per position.", "workingLatex": "5 \\text{ digits each}", "explanation": "Each position can be any of the five digits.", "diagram": null },
        { "stepNumber": 3, "description": "Note repetition is allowed.", "workingLatex": "5, \\ 5, \\ 5, \\ 5", "explanation": "Because digits may repeat, every position keeps all five options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "5 \\times 5 \\times 5 \\times 5", "explanation": "The positions are independent, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "5^4", "explanation": "Four factors of $5$ give $5^4$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "5^4 = 625", "explanation": "Here $5^2 = 25$ and $25 \\times 25 = 625$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "625 \\text{ codes}", "explanation": "So there are $625$ possible codes.", "diagram": null }
      ],
      "finalAnswer": "$625$"
    }
  },
  {
    "id": "gcse.number.product-rule.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition", "even"],
    "questionText": "Using the digits $1, 2, 3, 4, 5, 6, 7$ with no repeats, how many $3$-digit even numbers can be formed?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Spot the key restriction.", "workingLatex": "\\text{units must be even}", "explanation": "Whether a number is even is decided by its units digit, so we should choose that position first.", "diagram": null },
        { "stepNumber": 2, "description": "List the even digits available.", "workingLatex": "\\{2,4,6\\}", "explanation": "Among $1$–$7$ the even digits are $2$, $4$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the units digit.", "workingLatex": "3 \\text{ options}", "explanation": "There are three even digits to place in the units position.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the hundreds digit.", "workingLatex": "6 \\text{ options}", "explanation": "After using one digit, six of the seven remain (no leading-zero issue since $0$ is not available).", "diagram": null },
        { "stepNumber": 5, "description": "Count options for the tens digit.", "workingLatex": "5 \\text{ options}", "explanation": "Two digits are now used, leaving five.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "3 \\times 6 \\times 5", "explanation": "We multiply the option counts (units chosen first, then the other two positions).", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "3 \\times 6 \\times 5 = 90", "explanation": "Here $3 \\times 6 = 18$ and $18 \\times 5 = 90$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "90 \\text{ numbers}", "explanation": "So there are $90$ such even numbers.", "diagram": null }
      ],
      "finalAnswer": "$90$"
    }
  },
  {
    "id": "gcse.number.product-rule.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "four-stage"],
    "questionText": "A meal deal lets you choose $1$ of $4$ starters, $1$ of $5$ mains, $1$ of $3$ desserts and $1$ of $2$ drinks. How many different meal deals are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the four choices.", "workingLatex": "\\text{starter, main, dessert, drink}", "explanation": "The meal deal is built from four independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "Count the starters and mains.", "workingLatex": "4 \\text{ and } 5", "explanation": "There are four starters and, for each, five mains.", "diagram": null },
        { "stepNumber": 3, "description": "Count the desserts and drinks.", "workingLatex": "3 \\text{ and } 2", "explanation": "For each starter-and-main choice there are three desserts and then two drinks.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "4 \\times 5 \\times 3 \\times 2", "explanation": "Because the courses are independent, we multiply all four counts.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the first pair.", "workingLatex": "4 \\times 5 = 20", "explanation": "Work in stages to stay accurate.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the rest.", "workingLatex": "20 \\times 3 \\times 2 = 120", "explanation": "Then $20 \\times 3 = 60$ and $60 \\times 2 = 120$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "120 \\text{ deals}", "explanation": "So there are $120$ different meal deals.", "diagram": null }
      ],
      "finalAnswer": "$120$"
    }
  },
  {
    "id": "gcse.number.product-rule.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "passwords", "repetition"],
    "questionText": "A password is made of $2$ letters (A–Z) followed by $2$ digits (0–9). Repeats are allowed. How many different passwords are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L L D D}", "explanation": "There are four positions: two letters then two digits.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for each letter.", "workingLatex": "26 \\text{ each}", "explanation": "Each letter position has $26$ choices, with repeats allowed.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for each digit.", "workingLatex": "10 \\text{ each}", "explanation": "Each digit position has $10$ choices, with repeats allowed.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 26 \\times 10 \\times 10", "explanation": "The positions are independent, so we multiply the option counts.", "diagram": null },
        { "stepNumber": 5, "description": "Group into powers.", "workingLatex": "26^2 \\times 10^2", "explanation": "Grouping simplifies the arithmetic.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate each part.", "workingLatex": "676 \\times 100", "explanation": "Here $26^2 = 676$ and $10^2 = 100$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "676 \\times 100 = 67600", "explanation": "This gives the total number of passwords.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "67600 \\text{ passwords}", "explanation": "So there are $67\\,600$ possible passwords.", "diagram": null }
      ],
      "finalAnswer": "$67600$"
    }
  },
  {
    "id": "gcse.number.product-rule.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "repetition"],
    "questionText": "A $5$-digit code uses only odd digits ($1, 3, 5, 7, 9$), and digits may repeat. How many such codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ }", "explanation": "There are five positions, each to be filled with an odd digit.", "diagram": null },
        { "stepNumber": 2, "description": "Count the odd digits.", "workingLatex": "\\{1,3,5,7,9\\} \\Rightarrow 5", "explanation": "There are five odd digits available.", "diagram": null },
        { "stepNumber": 3, "description": "Note repetition is allowed.", "workingLatex": "5, \\ 5, \\ 5, \\ 5, \\ 5", "explanation": "Because digits may repeat, each position keeps all five options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "5 \\times 5 \\times 5 \\times 5 \\times 5", "explanation": "The positions are independent, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "5^5", "explanation": "Five factors of $5$ give $5^5$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "5^5 = 3125", "explanation": "Here $5^4 = 625$ and $625 \\times 5 = 3125$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "3125 \\text{ codes}", "explanation": "So there are $3125$ possible codes.", "diagram": null }
      ],
      "finalAnswer": "$3125$"
    }
  },
  {
    "id": "gcse.number.product-rule.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition", "ordered selection"],
    "questionText": "A streaming service asks a user to rank their top $3$ films from a list of $8$. In how many different ordered ways can this top $3$ be chosen?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the order matters.", "workingLatex": "\\text{1st, 2nd, 3rd}", "explanation": "Ranking means the three chosen films are placed in distinct ordered positions.", "diagram": null },
        { "stepNumber": 2, "description": "Count choices for first place.", "workingLatex": "8 \\text{ films}", "explanation": "Any of the eight films could be ranked first.", "diagram": null },
        { "stepNumber": 3, "description": "Count choices for second place.", "workingLatex": "7 \\text{ films}", "explanation": "The first film is used, leaving seven.", "diagram": null },
        { "stepNumber": 4, "description": "Count choices for third place.", "workingLatex": "6 \\text{ films}", "explanation": "Two films are ranked, leaving six.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "8 \\times 7 \\times 6", "explanation": "We multiply the choices for the three ranked positions.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "8 \\times 7 \\times 6 = 336", "explanation": "Here $8 \\times 7 = 56$ and $56 \\times 6 = 336$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "336 \\text{ ways}", "explanation": "So there are $336$ ordered top-$3$ lists.", "diagram": null }
      ],
      "finalAnswer": "$336$"
    }
  },
  {
    "id": "gcse.number.product-rule.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "Five different books are placed in a row. Two particular books must go at the two ends (in either order). In how many ways can the books be arranged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{end} \\ \\underline{\\ }\\ \\underline{\\ }\\ \\underline{\\ } \\ \\text{end}", "explanation": "There are five positions; the two ends are reserved for the two special books.", "diagram": null },
        { "stepNumber": 2, "description": "Arrange the two special books at the ends.", "workingLatex": "2 \\text{ ways}", "explanation": "The two special books can occupy the ends in two orders (each at the left or the right).", "diagram": null },
        { "stepNumber": 3, "description": "Identify the remaining books.", "workingLatex": "3 \\text{ books left}", "explanation": "The other three books fill the three middle positions.", "diagram": null },
        { "stepNumber": 4, "description": "Arrange the middle three.", "workingLatex": "3 \\times 2 \\times 1 = 3!", "explanation": "The three middle books can be arranged in $3!$ ways.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the middle arrangements.", "workingLatex": "3! = 6", "explanation": "There are six ways to order the middle books.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "2 \\times 6", "explanation": "For each way of placing the end books, there are six ways for the middle, so we multiply.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "2 \\times 6 = 12", "explanation": "This is the total number of arrangements.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "12 \\text{ arrangements}", "explanation": "So there are $12$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.product-rule.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["product rule", "counting", "no repetition", "codes"],
    "questionText": "A tag is made from $2$ letters (A–Z) followed by $2$ digits (0–9). No letter may repeat and no digit may repeat. How many different tags are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L L D D}", "explanation": "There are four positions: two letters then two digits, each part without repeats.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the letters.", "workingLatex": "26 \\text{ then } 25", "explanation": "The first letter has $26$ choices and the second has $25$ (the first cannot repeat).", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the digits.", "workingLatex": "10 \\text{ then } 9", "explanation": "The first digit has $10$ choices and the second has $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 25 \\times 10 \\times 9", "explanation": "We multiply the option counts for all four positions.", "diagram": null },
        { "stepNumber": 5, "description": "Evaluate the letter part.", "workingLatex": "26 \\times 25 = 650", "explanation": "There are $650$ ways to pick the two letters.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the digit part.", "workingLatex": "10 \\times 9 = 90", "explanation": "There are $90$ ways to pick the two digits.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the parts.", "workingLatex": "650 \\times 90 = 58500", "explanation": "Combining the two independent parts gives the total.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "58500 \\text{ tags}", "explanation": "So there are $58\\,500$ possible tags.", "diagram": null }
      ],
      "finalAnswer": "$58500$"
    }
  },
  {
    "id": "gcse.number.product-rule.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "dice", "repetition"],
    "questionText": "A fair dice is rolled $3$ times and the ordered sequence of scores is recorded. How many different sequences are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{roll 1, roll 2, roll 3}", "explanation": "Each roll is a separate slot in the ordered sequence.", "diagram": null },
        { "stepNumber": 2, "description": "Count outcomes per roll.", "workingLatex": "6 \\text{ each}", "explanation": "Each roll can be any of six scores.", "diagram": null },
        { "stepNumber": 3, "description": "Note repeats are possible.", "workingLatex": "6, \\ 6, \\ 6", "explanation": "The same score can appear again, so every roll keeps all six options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "6 \\times 6 \\times 6", "explanation": "The rolls are independent, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "6^3", "explanation": "Three factors of $6$ give $6^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "6^3 = 216", "explanation": "Here $6 \\times 6 = 36$ and $36 \\times 6 = 216$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "216 \\text{ sequences}", "explanation": "So there are $216$ possible sequences.", "diagram": null }
      ],
      "finalAnswer": "$216$"
    }
  },
  {
    "id": "gcse.number.product-rule.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "leading digit"],
    "questionText": "How many $4$-digit whole numbers are there? (A $4$-digit number cannot start with $0$; digits may repeat.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{Th H T U}", "explanation": "A $4$-digit number has thousands, hundreds, tens and units positions.", "diagram": null },
        { "stepNumber": 2, "description": "Apply the leading-digit restriction.", "workingLatex": "\\text{thousands} \\neq 0", "explanation": "The first digit cannot be $0$, or it would not be a genuine $4$-digit number.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the thousands digit.", "workingLatex": "9 \\text{ options}", "explanation": "Excluding $0$ leaves nine choices, $1$–$9$.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the other three digits.", "workingLatex": "10, \\ 10, \\ 10", "explanation": "These positions have no restriction and repeats are allowed, so ten options each.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "9 \\times 10 \\times 10 \\times 10", "explanation": "We multiply the option counts across the four positions.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "9 \\times 1000 = 9000", "explanation": "This matches that the $4$-digit numbers run from $1000$ to $9999$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "9000 \\text{ numbers}", "explanation": "So there are $9000$ four-digit whole numbers.", "diagram": null }
      ],
      "finalAnswer": "$9000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "repetition", "ordered"],
    "questionText": "An ice-cream cone has $3$ scoops, chosen in order from $8$ flavours. Flavours may repeat (e.g. all three the same). How many different ordered cones are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{scoop 1, scoop 2, scoop 3}", "explanation": "The scoops are stacked in order, so there are three ordered positions.", "diagram": null },
        { "stepNumber": 2, "description": "Count options per scoop.", "workingLatex": "8 \\text{ flavours each}", "explanation": "Each scoop can be any of the eight flavours.", "diagram": null },
        { "stepNumber": 3, "description": "Note repeats are allowed.", "workingLatex": "8, \\ 8, \\ 8", "explanation": "Because a flavour can be used again, each scoop keeps all eight options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "8 \\times 8 \\times 8", "explanation": "The scoops are independent choices, so we multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "8^3", "explanation": "Three factors of $8$ give $8^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "8^3 = 512", "explanation": "Here $8 \\times 8 = 64$ and $64 \\times 8 = 512$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "512 \\text{ cones}", "explanation": "So there are $512$ possible ordered cones.", "diagram": null }
      ],
      "finalAnswer": "$512$"
    }
  },
  {
    "id": "gcse.number.product-rule.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "four-stage"],
    "questionText": "An outfit consists of $1$ of $5$ shirts, $1$ of $4$ pairs of trousers, $1$ of $3$ jackets and $1$ of $2$ pairs of shoes. How many different outfits are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the four choices.", "workingLatex": "\\text{shirt, trousers, jacket, shoes}", "explanation": "The outfit is made from four independent decisions.", "diagram": null },
        { "stepNumber": 2, "description": "List the option counts.", "workingLatex": "5, \\ 4, \\ 3, \\ 2", "explanation": "These are the number of choices for each item.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the product rule.", "workingLatex": "5 \\times 4 \\times 3 \\times 2", "explanation": "Because every combination of items is allowed, we multiply the counts.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the first pair.", "workingLatex": "5 \\times 4 = 20", "explanation": "Work in stages to stay accurate.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply by the third count.", "workingLatex": "20 \\times 3 = 60", "explanation": "This is the running product.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the last count.", "workingLatex": "60 \\times 2 = 120", "explanation": "This gives the total number of outfits.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "120 \\text{ outfits}", "explanation": "So there are $120$ different outfits.", "diagram": null }
      ],
      "finalAnswer": "$120$"
    }
  },
  {
    "id": "gcse.number.product-rule.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["product rule", "counting", "repetition"],
    "questionText": "A quiz has $5$ true-or-false questions. In how many different ways can all $5$ questions be answered?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{Q1, Q2, Q3, Q4, Q5}", "explanation": "Each question is a separate slot needing an answer.", "diagram": null },
        { "stepNumber": 2, "description": "Count options per question.", "workingLatex": "2 \\text{ each (T or F)}", "explanation": "Every question can be answered true or false — two options.", "diagram": null },
        { "stepNumber": 3, "description": "Note answers are independent.", "workingLatex": "2, \\ 2, \\ 2, \\ 2, \\ 2", "explanation": "The answer to one question does not restrict the others, so each keeps two options.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 \\times 2", "explanation": "We multiply the option counts across all five questions.", "diagram": null },
        { "stepNumber": 5, "description": "Write as a power.", "workingLatex": "2^5", "explanation": "Five factors of $2$ give $2^5$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "2^5 = 32", "explanation": "Doubling five times: $2,4,8,16,32$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "32 \\text{ ways}", "explanation": "So there are $32$ ways to answer the quiz.", "diagram": null }
      ],
      "finalAnswer": "$32$"
    }
  },
  {
    "id": "gcse.number.product-rule.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "number plates", "no repetition"],
    "questionText": "A number plate is made from $2$ letters followed by $3$ digits. No letter may repeat and no digit may repeat. How many different plates are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L L D D D}", "explanation": "There are five positions, split into a letter part (no repeats) and a digit part (no repeats).", "diagram": null },
        { "stepNumber": 2, "description": "Count options for the first letter.", "workingLatex": "26", "explanation": "All $26$ letters are available for the first letter.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the second letter.", "workingLatex": "25", "explanation": "One letter is used and cannot repeat, so $25$ remain.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the digits.", "workingLatex": "10, \\ 9, \\ 8", "explanation": "The digits also cannot repeat, so the counts fall by one each position.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the product rule.", "workingLatex": "26 \\times 25 \\times 10 \\times 9 \\times 8", "explanation": "We multiply the option counts across all five positions.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the letter part.", "workingLatex": "26 \\times 25 = 650", "explanation": "There are $650$ ways to choose the two letters.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the digit part.", "workingLatex": "10 \\times 9 \\times 8 = 720", "explanation": "There are $720$ ways to choose the three digits.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the two parts.", "workingLatex": "650 \\times 720 = 468000", "explanation": "Combining the independent parts gives the total.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "468000 \\text{ plates}", "explanation": "So there are $468\\,000$ possible plates.", "diagram": null }
      ],
      "finalAnswer": "$468000$"
    }
  },
  {
    "id": "gcse.number.product-rule.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "case split"],
    "questionText": "How many $3$-digit even numbers have no repeated digit? (The first digit cannot be $0$.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the conditions.", "workingLatex": "\\text{3-digit, even, no repeats, H}\\neq 0", "explanation": "Being even fixes the units digit as even, while the hundreds digit must be non-zero, and all digits differ.", "diagram": null },
        { "stepNumber": 2, "description": "Split into cases by the units digit.", "workingLatex": "\\text{Case A: U}=0 \\ \\text{Case B: U}\\in\\{2,4,6,8\\}", "explanation": "Whether the units digit is $0$ changes how many non-zero digits remain for the hundreds place, so we handle the two situations separately.", "diagram": null },
        { "stepNumber": 3, "description": "Case A: fix the units digit as 0.", "workingLatex": "\\text{U}=0 \\ (1 \\text{ way})", "explanation": "There is exactly one way for the units digit to be $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Case A: count hundreds then tens.", "workingLatex": "9 \\times 8 = 72", "explanation": "Hundreds can be any of $1$–$9$ ($9$ ways); tens is any remaining digit except $0$ and the hundreds digit ($8$ ways).", "diagram": null },
        { "stepNumber": 5, "description": "Case B: choose the units digit.", "workingLatex": "\\text{U}\\in\\{2,4,6,8\\} \\ (4 \\text{ ways})", "explanation": "For an even number not ending in $0$, the units digit is one of four non-zero even digits.", "diagram": null },
        { "stepNumber": 6, "description": "Case B: count the hundreds digit.", "workingLatex": "8 \\text{ ways}", "explanation": "Hundreds must be non-zero and different from the units digit: $9$ non-zero digits minus the one used $= 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Case B: count the tens digit.", "workingLatex": "8 \\text{ ways}", "explanation": "Tens can be any digit except the two already used (it may be $0$): $10 - 2 = 8$.", "diagram": null },
        { "stepNumber": 8, "description": "Case B: multiply within the case.", "workingLatex": "4 \\times 8 \\times 8 = 256", "explanation": "Within a case the choices are independent, so we multiply them.", "diagram": null },
        { "stepNumber": 9, "description": "Add the separate cases.", "workingLatex": "72 + 256", "explanation": "Cases A and B cannot overlap, so we add their counts to cover all possibilities.", "diagram": null },
        { "stepNumber": 10, "description": "Evaluate and state the answer.", "workingLatex": "72 + 256 = 328", "explanation": "So there are $328$ such numbers.", "diagram": null }
      ],
      "finalAnswer": "$328$"
    }
  },
  {
    "id": "gcse.number.product-rule.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "multiples"],
    "questionText": "How many $4$-digit whole numbers are multiples of $5$? (The first digit cannot be $0$; digits may repeat.)",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{Th H T U}", "explanation": "There are four positions; being a multiple of $5$ depends on the units digit.", "diagram": null },
        { "stepNumber": 2, "description": "State the multiple-of-5 condition.", "workingLatex": "\\text{U}\\in\\{0,5\\}", "explanation": "A whole number is a multiple of $5$ exactly when it ends in $0$ or $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for the thousands digit.", "workingLatex": "9 \\text{ options}", "explanation": "The leading digit cannot be $0$, leaving nine choices.", "diagram": null },
        { "stepNumber": 4, "description": "Count options for the hundreds and tens digits.", "workingLatex": "10, \\ 10", "explanation": "These positions are unrestricted with repeats allowed, so ten options each.", "diagram": null },
        { "stepNumber": 5, "description": "Count options for the units digit.", "workingLatex": "2 \\text{ options}", "explanation": "The units digit must be $0$ or $5$, giving two choices.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "9 \\times 10 \\times 10 \\times 2", "explanation": "We multiply the option counts across the four positions.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "9 \\times 100 \\times 2 = 1800", "explanation": "Here $10 \\times 10 = 100$, then $9 \\times 100 = 900$ and $900 \\times 2 = 1800$.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "1800 \\text{ numbers}", "explanation": "So there are $1800$ four-digit multiples of $5$.", "diagram": null }
      ],
      "finalAnswer": "$1800$"
    }
  },
  {
    "id": "gcse.number.product-rule.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "How many arrangements of the $6$ different letters in ORANGE begin with a vowel?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the letters and vowels.", "workingLatex": "\\text{O, R, A, N, G, E}", "explanation": "All six letters differ; the vowels are O, A and E.", "diagram": null },
        { "stepNumber": 2, "description": "Count the vowels available for the first position.", "workingLatex": "3 \\text{ vowels}", "explanation": "The first letter must be one of the three vowels.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the first letter.", "workingLatex": "\\text{pos 1}: 3 \\text{ ways}", "explanation": "There are three ways to place a vowel first.", "diagram": null },
        { "stepNumber": 4, "description": "Count the remaining letters.", "workingLatex": "5 \\text{ letters left}", "explanation": "After using one letter, five distinct letters remain for the other positions.", "diagram": null },
        { "stepNumber": 5, "description": "Arrange the remaining five.", "workingLatex": "5! = 120", "explanation": "The five remaining letters can fill the last five positions in $5!$ ways.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "3 \\times 5!", "explanation": "For each vowel choice at the front there are $5!$ arrangements of the rest, so we multiply.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "3 \\times 120 = 360", "explanation": "This gives the total number of qualifying arrangements.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "360 \\text{ arrangements}", "explanation": "So $360$ arrangements begin with a vowel.", "diagram": null }
      ],
      "finalAnswer": "$360$"
    }
  },
  {
    "id": "gcse.number.product-rule.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "block method"],
    "questionText": "Five men and four women stand in a row of $9$. If all four women must stand together, in how many ways can the row be arranged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the restriction.", "workingLatex": "\\text{4 women together}", "explanation": "Because the women must stay together, it helps to treat them as one combined item for now.", "diagram": null },
        { "stepNumber": 2, "description": "Form the block.", "workingLatex": "[\\text{WWWW}] + 5 \\text{ men}", "explanation": "Tie the four women into a single block; this block plus the five men are the items to arrange.", "diagram": null },
        { "stepNumber": 3, "description": "Count the items to arrange.", "workingLatex": "5 + 1 = 6 \\text{ items}", "explanation": "The five men and the one women-block make six items in the row.", "diagram": null },
        { "stepNumber": 4, "description": "Arrange the six items.", "workingLatex": "6! = 720", "explanation": "Six distinct items can be arranged in $6!$ ways.", "diagram": null },
        { "stepNumber": 5, "description": "Arrange the women inside the block.", "workingLatex": "4! = 24", "explanation": "The four women can be ordered among themselves within the block in $4!$ ways.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "6! \\times 4!", "explanation": "For each arrangement of the six items, the women can be internally ordered $4!$ ways, so we multiply.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the values.", "workingLatex": "720 \\times 24", "explanation": "We now insert the two factorial values.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate.", "workingLatex": "720 \\times 24 = 17280", "explanation": "This gives the total number of valid arrangements.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "17280 \\text{ ways}", "explanation": "So there are $17\\,280$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$17280$"
    }
  },
  {
    "id": "gcse.number.product-rule.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "number plates", "repetition"],
    "questionText": "A code is made from $2$ letters, then $2$ digits, then $2$ more letters. Letters and digits may repeat. How many different codes are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the positions.", "workingLatex": "\\text{L L D D L L}", "explanation": "There are six positions: four letters and two digits in total.", "diagram": null },
        { "stepNumber": 2, "description": "Count options for each letter.", "workingLatex": "26 \\text{ each } (4 \\text{ letters})", "explanation": "Each of the four letter positions has $26$ choices, with repeats allowed.", "diagram": null },
        { "stepNumber": 3, "description": "Count options for each digit.", "workingLatex": "10 \\text{ each } (2 \\text{ digits})", "explanation": "Each of the two digit positions has $10$ choices, with repeats allowed.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the product rule.", "workingLatex": "26 \\times 26 \\times 10 \\times 10 \\times 26 \\times 26", "explanation": "All six positions are independent, so we multiply their option counts.", "diagram": null },
        { "stepNumber": 5, "description": "Group into powers.", "workingLatex": "26^4 \\times 10^2", "explanation": "There are four letters and two digits, giving $26^4$ and $10^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate each part.", "workingLatex": "456976 \\times 100", "explanation": "Here $26^2 = 676$ and $676^2 = 456976$, while $10^2 = 100$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply.", "workingLatex": "456976 \\times 100 = 45697600", "explanation": "This gives the total number of codes.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "45697600 \\text{ codes}", "explanation": "So there are $45\\,697\\,600$ possible codes.", "diagram": null }
      ],
      "finalAnswer": "$45697600$"
    }
  },
  {
    "id": "gcse.number.product-rule.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "case split", "addition"],
    "questionText": "A $3$-digit code uses digits $0$ to $9$ with repeats allowed. How many codes have all three digits odd or all three digits even?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the two separate cases.", "workingLatex": "\\text{all odd} \\ \\text{or} \\ \\text{all even}", "explanation": "A code cannot be both all-odd and all-even, so these are separate cases we will count and then add.", "diagram": null },
        { "stepNumber": 2, "description": "Count the odd digits.", "workingLatex": "\\{1,3,5,7,9\\}\\Rightarrow 5", "explanation": "There are five odd digits available for each position.", "diagram": null },
        { "stepNumber": 3, "description": "Count the all-odd codes.", "workingLatex": "5 \\times 5 \\times 5 = 125", "explanation": "Each of the three positions independently has five odd digits, so we multiply.", "diagram": null },
        { "stepNumber": 4, "description": "Count the even digits.", "workingLatex": "\\{0,2,4,6,8\\}\\Rightarrow 5", "explanation": "There are five even digits available (including $0$, which is allowed anywhere in a code).", "diagram": null },
        { "stepNumber": 5, "description": "Count the all-even codes.", "workingLatex": "5 \\times 5 \\times 5 = 125", "explanation": "Similarly each position has five even digits.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise the cases are exclusive.", "workingLatex": "\\text{no overlap}", "explanation": "A digit cannot be both odd and even, so no code is counted twice.", "diagram": null },
        { "stepNumber": 7, "description": "Add the cases.", "workingLatex": "125 + 125", "explanation": "Because the cases are separate, we add their counts.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate.", "workingLatex": "125 + 125 = 250", "explanation": "This gives the total number of qualifying codes.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "250 \\text{ codes}", "explanation": "So there are $250$ such codes.", "diagram": null }
      ],
      "finalAnswer": "$250$"
    }
  },
  {
    "id": "gcse.number.product-rule.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "block method"],
    "questionText": "Four boys and three girls stand in a row of $7$. If the three girls must stand together, in how many ways can the row be arranged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the restriction.", "workingLatex": "\\text{3 girls together}", "explanation": "Since the girls must stay together, we treat them as a single block to handle the restriction.", "diagram": null },
        { "stepNumber": 2, "description": "Form the block.", "workingLatex": "[\\text{GGG}] + 4 \\text{ boys}", "explanation": "The three girls become one block, joining the four boys as items to arrange.", "diagram": null },
        { "stepNumber": 3, "description": "Count the items.", "workingLatex": "4 + 1 = 5 \\text{ items}", "explanation": "Four boys plus the one girls-block make five items in the row.", "diagram": null },
        { "stepNumber": 4, "description": "Arrange the five items.", "workingLatex": "5! = 120", "explanation": "Five distinct items can be arranged in $5!$ ways.", "diagram": null },
        { "stepNumber": 5, "description": "Arrange the girls inside the block.", "workingLatex": "3! = 6", "explanation": "The three girls can be ordered among themselves in $3!$ ways.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "5! \\times 3!", "explanation": "For each item arrangement, the girls have $3!$ internal orders, so we multiply.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute and evaluate.", "workingLatex": "120 \\times 6 = 720", "explanation": "This gives the total number of valid arrangements.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "720 \\text{ ways}", "explanation": "So there are $720$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$720$"
    }
  },
  {
    "id": "gcse.number.product-rule.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "block method"],
    "questionText": "Five different people stand in a row. Two particular people insist on standing next to each other. In how many ways can the row be arranged?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the restriction.", "workingLatex": "\\text{2 people adjacent}", "explanation": "Because the two must be next to each other, we tie them into a single block.", "diagram": null },
        { "stepNumber": 2, "description": "Form the block.", "workingLatex": "[\\text{PP}] + 3 \\text{ others}", "explanation": "The pair becomes one block, joining the three other people.", "diagram": null },
        { "stepNumber": 3, "description": "Count the items.", "workingLatex": "3 + 1 = 4 \\text{ items}", "explanation": "The block and the three others make four items to arrange.", "diagram": null },
        { "stepNumber": 4, "description": "Arrange the four items.", "workingLatex": "4! = 24", "explanation": "Four distinct items can be arranged in $4!$ ways.", "diagram": null },
        { "stepNumber": 5, "description": "Order the pair inside the block.", "workingLatex": "2! = 2", "explanation": "The two people can swap places within the block, giving two internal orders.", "diagram": null },
        { "stepNumber": 6, "description": "Apply the product rule.", "workingLatex": "4! \\times 2! = 24 \\times 2", "explanation": "For each of the $24$ item arrangements there are $2$ internal orders, so we multiply.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "24 \\times 2 = 48", "explanation": "This gives the total number of valid arrangements.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "48 \\text{ ways}", "explanation": "So there are $48$ arrangements.", "diagram": null }
      ],
      "finalAnswer": "$48$"
    }
  },
  {
    "id": "gcse.number.product-rule.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "restrictions", "case split"],
    "questionText": "How many $4$-digit numbers (from $1000$ to $9999$) are even and have no repeated digit?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the conditions.", "workingLatex": "\\text{4-digit, even, no repeats, Th}\\neq 0", "explanation": "The units digit must be even, the thousands digit must be non-zero, and all four digits differ.", "diagram": null },
        { "stepNumber": 2, "description": "Split into cases by the units digit.", "workingLatex": "\\text{Case A: U}=0 \\ \\text{Case B: U}\\in\\{2,4,6,8\\}", "explanation": "If the units digit is $0$ it does not compete with the thousands digit for non-zero choices, so the two cases count differently.", "diagram": null },
        { "stepNumber": 3, "description": "Case A: units digit is 0.", "workingLatex": "\\text{U}=0 \\ (1 \\text{ way})", "explanation": "Exactly one way to end in $0$.", "diagram": null },
        { "stepNumber": 4, "description": "Case A: fill the other three positions.", "workingLatex": "9 \\times 8 \\times 7 = 504", "explanation": "Thousands can be $1$–$9$ ($9$); hundreds any remaining ($8$); tens any remaining ($7$).", "diagram": null },
        { "stepNumber": 5, "description": "Case B: choose the units digit.", "workingLatex": "4 \\text{ ways}", "explanation": "A non-zero even ending is one of $2,4,6,8$.", "diagram": null },
        { "stepNumber": 6, "description": "Case B: choose the thousands digit.", "workingLatex": "8 \\text{ ways}", "explanation": "Thousands is non-zero and not equal to the units digit: $9 - 1 = 8$.", "diagram": null },
        { "stepNumber": 7, "description": "Case B: choose the hundreds and tens digits.", "workingLatex": "8 \\times 7", "explanation": "Hundreds is any of the $8$ remaining digits (zero now allowed), then tens has $7$ left.", "diagram": null },
        { "stepNumber": 8, "description": "Case B: multiply within the case.", "workingLatex": "4 \\times 8 \\times 8 \\times 7 = 1792", "explanation": "Multiplying the independent choices: $4 \\times 8 = 32$, $32 \\times 8 = 256$, $256 \\times 7 = 1792$.", "diagram": null },
        { "stepNumber": 9, "description": "Add the two cases.", "workingLatex": "504 + 1792", "explanation": "The cases are mutually exclusive, so we add their totals.", "diagram": null },
        { "stepNumber": 10, "description": "Evaluate and state the answer.", "workingLatex": "504 + 1792 = 2296", "explanation": "So there are $2296$ such numbers.", "diagram": null }
      ],
      "finalAnswer": "$2296$"
    }
  },
  {
    "id": "gcse.number.product-rule.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["product rule", "counting", "case split", "addition"],
    "questionText": "A cafe has $3$ starters, $5$ mains and $4$ desserts. A customer orders exactly two courses that are next to each other on the menu: either a starter with a main, or a main with a dessert. How many different two-course orders are possible?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the two types of order.", "workingLatex": "\\text{(starter + main)} \\ \\text{or} \\ \\text{(main + dessert)}", "explanation": "There are two separate kinds of two-course order, and we will count each then combine.", "diagram": null },
        { "stepNumber": 2, "description": "Count starter choices for the first type.", "workingLatex": "3 \\text{ starters}", "explanation": "A starter-and-main order begins with one of three starters.", "diagram": null },
        { "stepNumber": 3, "description": "Count main choices and multiply.", "workingLatex": "3 \\times 5 = 15", "explanation": "Each starter can pair with any of five mains, so within this type we multiply.", "diagram": null },
        { "stepNumber": 4, "description": "Count main choices for the second type.", "workingLatex": "5 \\text{ mains}", "explanation": "A main-and-dessert order begins with one of five mains.", "diagram": null },
        { "stepNumber": 5, "description": "Count dessert choices and multiply.", "workingLatex": "5 \\times 4 = 20", "explanation": "Each main can pair with any of four desserts, so within this type we multiply.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise the types are separate.", "workingLatex": "\\text{different course pairs}", "explanation": "A starter-and-main order is a different kind of order from a main-and-dessert order, so they do not overlap.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two counts.", "workingLatex": "15 + 20 = 35", "explanation": "Because the two types are separate, we add: multiply within a case, add across cases.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "35 \\text{ orders}", "explanation": "So there are $35$ possible two-course orders.", "diagram": null }
      ],
      "finalAnswer": "$35$"
    }
  },
  {
    "id": "gcse.number.product-rule.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Product rule for counting",
    "subtopicId": "gcse.number.product-rule",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["product rule", "counting", "arrangements", "restrictions"],
    "questionText": "How many arrangements of the $7$ different letters in NUMBERS begin and end with a consonant?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the letters, vowels and consonants.", "workingLatex": "\\text{N,U,M,B,E,R,S}", "explanation": "All seven letters differ. The vowels are U and E; the consonants are N, M, B, R and S.", "diagram": null },
        { "stepNumber": 2, "description": "Count the consonants.", "workingLatex": "5 \\text{ consonants}", "explanation": "Both the first and last positions must be filled by consonants, and there are five of them.", "diagram": null },
        { "stepNumber": 3, "description": "Choose the first letter.", "workingLatex": "\\text{pos 1}: 5 \\text{ ways}", "explanation": "Any of the five consonants can start the word.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the last letter.", "workingLatex": "\\text{pos 7}: 4 \\text{ ways}", "explanation": "One consonant is used at the front, so four consonants remain for the end.", "diagram": null },
        { "stepNumber": 5, "description": "Count the remaining letters.", "workingLatex": "7 - 2 = 5 \\text{ left}", "explanation": "After fixing the two ends, five distinct letters remain for the middle.", "diagram": null },
        { "stepNumber": 6, "description": "Arrange the middle five.", "workingLatex": "5! = 120", "explanation": "The five middle positions are filled by the remaining letters in $5!$ ways.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the product rule.", "workingLatex": "5 \\times 4 \\times 5!", "explanation": "The end choices and the middle arrangement are independent, so we multiply them.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute the values.", "workingLatex": "5 \\times 4 \\times 120", "explanation": "Insert $5! = 120$ and the end counts.", "diagram": null },
        { "stepNumber": 9, "description": "Evaluate.", "workingLatex": "5 \\times 4 \\times 120 = 2400", "explanation": "Here $5 \\times 4 = 20$ and $20 \\times 120 = 2400$.", "diagram": null },
        { "stepNumber": 10, "description": "State the answer.", "workingLatex": "2400 \\text{ arrangements}", "explanation": "So $2400$ arrangements begin and end with a consonant.", "diagram": null }
      ],
      "finalAnswer": "$2400$"
    }
  }
];
