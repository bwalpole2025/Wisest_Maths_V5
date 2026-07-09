import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.prime-factorisation.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $36$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "36 = 4 \\times 9", "explanation": "We split $36$ into any factor pair to begin; $4 \\times 9$ is convenient because both are easy to break down further.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ is not prime, so we split it into $2 \\times 2$; both are prime and end that branch.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ is not prime, so we split it into $3 \\times 3$; both are prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "36 = 2 \\times 2 \\times 3 \\times 3", "explanation": "The primes at the ends of every branch multiply back to $36$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2, \\ 3 \\times 3 = 3^2", "explanation": "Index form records how many times each prime appears, which is neater and required by the question.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "36 = 2^2 \\times 3^2", "explanation": "This is $36$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $60$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "60 = 6 \\times 10", "explanation": "We break $60$ into a friendly factor pair; $6 \\times 10$ works because both split easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "6 = 2 \\times 3", "explanation": "$6$ is not prime, so we split it into $2 \\times 3$; both of these are prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "$10$ is not prime, so we split it into $2 \\times 5$; both are prime and end their branches.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "60 = 2 \\times 3 \\times 2 \\times 5", "explanation": "Every branch now ends in a prime, and together they multiply back to $60$.", "diagram": null },
        { "stepNumber": 5, "description": "Order the primes.", "workingLatex": "60 = 2 \\times 2 \\times 3 \\times 5", "explanation": "Writing the primes in increasing order makes it easy to spot repeats.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, so we write it as $2^2$; the $3$ and $5$ each appear once.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "60 = 2^2 \\times 3 \\times 5", "explanation": "This is $60$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $48$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "48 = 6 \\times 8", "explanation": "We split $48$ into a convenient pair; $6 \\times 8$ is easy to break down.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "6 = 2 \\times 3", "explanation": "$6$ splits into the primes $2$ and $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "8 = 2 \\times 4", "explanation": "$8$ is not prime; we split it into $2 \\times 4$, and $4$ still needs breaking down.", "diagram": null },
        { "stepNumber": 4, "description": "Continue splitting.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into $2 \\times 2$, both prime, ending that branch.", "diagram": null },
        { "stepNumber": 5, "description": "Collect all the prime factors.", "workingLatex": "48 = 2 \\times 3 \\times 2 \\times 2 \\times 2", "explanation": "Gathering the primes at every branch end gives the full list.", "diagram": null },
        { "stepNumber": 6, "description": "Order the primes.", "workingLatex": "48 = 2 \\times 2 \\times 2 \\times 2 \\times 3", "explanation": "Ordering them makes the repeated $2$'s clear.", "diagram": null },
        { "stepNumber": 7, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 = 2^4", "explanation": "The prime $2$ appears four times, so it becomes $2^4$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the final product.", "workingLatex": "48 = 2^4 \\times 3", "explanation": "This is $48$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^4 \\times 3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $72$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "72 = 8 \\times 9", "explanation": "We split $72$ into $8 \\times 9$; both are simple to break down.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2$ cubed, so it splits fully into three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into $3 \\times 3$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "72 = 2 \\times 2 \\times 2 \\times 3 \\times 3", "explanation": "Bringing together the primes from both branches reconstructs $72$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3, \\ 3 \\times 3 = 3^2", "explanation": "Counting each prime gives three $2$'s and two $3$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "72 = 2^3 \\times 3^2", "explanation": "This is $72$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $90$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "90 = 9 \\times 10", "explanation": "We split $90$ into $9 \\times 10$, a pair that breaks down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "$10$ splits into $2 \\times 5$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "90 = 3 \\times 3 \\times 2 \\times 5", "explanation": "The primes at the branch ends multiply back to $90$.", "diagram": null },
        { "stepNumber": 5, "description": "Order the primes.", "workingLatex": "90 = 2 \\times 3 \\times 3 \\times 5", "explanation": "Ordering the primes highlights the repeated $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 = 3^2", "explanation": "The prime $3$ appears twice, giving $3^2$; the $2$ and $5$ appear once each.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "90 = 2 \\times 3^2 \\times 5", "explanation": "This is $90$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 3^2 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $100$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "100 = 10 \\times 10", "explanation": "We split $100$ into $10 \\times 10$, which is natural since $100$ is $10$ squared.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "The first $10$ splits into $2 \\times 5$, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "The second $10$ splits the same way into $2 \\times 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "100 = 2 \\times 5 \\times 2 \\times 5", "explanation": "Gathering the primes from both branches reconstructs $100$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2, \\ 5 \\times 5 = 5^2", "explanation": "There are two $2$'s and two $5$'s, so each becomes squared.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "100 = 2^2 \\times 5^2", "explanation": "This is $100$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $84$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "84 = 4 \\times 21", "explanation": "We split $84$ into $4 \\times 21$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "21 = 3 \\times 7", "explanation": "$21$ splits into $3 \\times 7$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "84 = 2 \\times 2 \\times 3 \\times 7", "explanation": "The four primes multiply back to $84$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, giving $2^2$; the $3$ and $7$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "84 = 2^2 \\times 3 \\times 7", "explanation": "This is $84$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $120$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "120 = 12 \\times 10", "explanation": "We split $120$ into $12 \\times 10$; both are easy to continue.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "12 = 4 \\times 3 = 2 \\times 2 \\times 3", "explanation": "$12$ splits into $4 \\times 3$, and $4$ splits into $2 \\times 2$, giving three primes.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "$10$ splits into $2 \\times 5$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "120 = 2 \\times 2 \\times 3 \\times 2 \\times 5", "explanation": "Combining both branches gives every prime factor of $120$.", "diagram": null },
        { "stepNumber": 5, "description": "Order the primes.", "workingLatex": "120 = 2 \\times 2 \\times 2 \\times 3 \\times 5", "explanation": "Ordering shows there are three $2$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3", "explanation": "The prime $2$ appears three times, giving $2^3$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "120 = 2^3 \\times 3 \\times 5", "explanation": "This is $120$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $45$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "45 = 9 \\times 5", "explanation": "We split $45$ into $9 \\times 5$; the $5$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "5 = 5", "explanation": "$5$ is prime, so this branch is finished.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "45 = 3 \\times 3 \\times 5", "explanation": "The primes multiply back to $45$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 = 3^2", "explanation": "The prime $3$ appears twice, giving $3^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "45 = 3^2 \\times 5", "explanation": "This is $45$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$3^2 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $50$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "50 = 2 \\times 25", "explanation": "We split $50$ into $2 \\times 25$; the $2$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "2 = 2", "explanation": "$2$ is prime, so this branch ends immediately.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "25 = 5 \\times 5", "explanation": "$25$ splits into two $5$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "50 = 2 \\times 5 \\times 5", "explanation": "The primes multiply back to $50$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "5 \\times 5 = 5^2", "explanation": "The prime $5$ appears twice, giving $5^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "50 = 2 \\times 5^2", "explanation": "This is $50$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $96$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "96 = 16 \\times 6", "explanation": "We split $96$ into $16 \\times 6$; both break into $2$'s and a $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "16 = 2 \\times 2 \\times 2 \\times 2", "explanation": "$16$ is $2^4$, so it splits into four $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "6 = 2 \\times 3", "explanation": "$6$ splits into $2 \\times 3$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "96 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 3", "explanation": "Combining both branches gives five $2$'s and one $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5", "explanation": "Five $2$'s multiplied together is $2^5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "96 = 2^5 \\times 3", "explanation": "This is $96$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^5 \\times 3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $75$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "75 = 3 \\times 25", "explanation": "We split $75$ into $3 \\times 25$; the $3$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "3 = 3", "explanation": "$3$ is prime, so this branch ends here.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "25 = 5 \\times 5", "explanation": "$25$ splits into two $5$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "75 = 3 \\times 5 \\times 5", "explanation": "The primes multiply back to $75$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "5 \\times 5 = 5^2", "explanation": "The prime $5$ appears twice, giving $5^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "75 = 3 \\times 5^2", "explanation": "This is $75$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$3 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $40$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "40 = 8 \\times 5", "explanation": "We split $40$ into $8 \\times 5$; the $5$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "5 = 5", "explanation": "$5$ is prime, so that branch is complete.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "40 = 2 \\times 2 \\times 2 \\times 5", "explanation": "The primes multiply back to $40$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3", "explanation": "Three $2$'s multiplied together is $2^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "40 = 2^3 \\times 5", "explanation": "This is $40$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $54$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "54 = 2 \\times 27", "explanation": "We split $54$ into $2 \\times 27$; the $2$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "2 = 2", "explanation": "$2$ is prime, so this branch ends immediately.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "27 = 3 \\times 9 = 3 \\times 3 \\times 3", "explanation": "$27$ is $3^3$: it splits into $3 \\times 9$, and $9$ splits into $3 \\times 3$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "54 = 2 \\times 3 \\times 3 \\times 3", "explanation": "The primes multiply back to $54$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 \\times 3 = 3^3", "explanation": "Three $3$'s multiplied together is $3^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "54 = 2 \\times 3^3", "explanation": "This is $54$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 3^3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $88$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "88 = 8 \\times 11", "explanation": "We split $88$ into $8 \\times 11$; the $11$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "11 = 11", "explanation": "$11$ is prime, so that branch is finished.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "88 = 2 \\times 2 \\times 2 \\times 11", "explanation": "The primes multiply back to $88$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3", "explanation": "Three $2$'s multiplied together is $2^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "88 = 2^3 \\times 11", "explanation": "This is $88$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 11$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $126$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "126 = 2 \\times 63", "explanation": "$126$ is even, so we take out a factor of $2$ first; the $2$ is prime.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the composite branch.", "workingLatex": "63 = 9 \\times 7", "explanation": "$63$ splits into $9 \\times 7$; the $7$ is prime.", "diagram": null },
        { "stepNumber": 3, "description": "Continue splitting.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "126 = 2 \\times 3 \\times 3 \\times 7", "explanation": "The primes at every branch end multiply back to $126$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 = 3^2", "explanation": "The prime $3$ appears twice, giving $3^2$; the $2$ and $7$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "126 = 2 \\times 3^2 \\times 7", "explanation": "This is $126$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 3^2 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $140$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "140 = 4 \\times 35", "explanation": "We split $140$ into $4 \\times 35$; both break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "35 = 5 \\times 7", "explanation": "$35$ splits into $5 \\times 7$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "140 = 2 \\times 2 \\times 5 \\times 7", "explanation": "The four primes multiply back to $140$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, giving $2^2$; the $5$ and $7$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "140 = 2^2 \\times 5 \\times 7", "explanation": "This is $140$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 5 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $150$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "150 = 2 \\times 75", "explanation": "$150$ is even, so we take out a factor of $2$ first.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the composite branch.", "workingLatex": "75 = 3 \\times 25", "explanation": "$75$ splits into $3 \\times 25$; the $3$ is prime.", "diagram": null },
        { "stepNumber": 3, "description": "Continue splitting.", "workingLatex": "25 = 5 \\times 5", "explanation": "$25$ splits into two $5$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "150 = 2 \\times 3 \\times 5 \\times 5", "explanation": "The primes multiply back to $150$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "5 \\times 5 = 5^2", "explanation": "The prime $5$ appears twice, giving $5^2$; the $2$ and $3$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "150 = 2 \\times 3 \\times 5^2", "explanation": "This is $150$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 3 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $200$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "200 = 8 \\times 25", "explanation": "We split $200$ into $8 \\times 25$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "25 = 5 \\times 5", "explanation": "$25$ splits into two $5$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "200 = 2 \\times 2 \\times 2 \\times 5 \\times 5", "explanation": "The primes multiply back to $200$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3, \\ 5 \\times 5 = 5^2", "explanation": "There are three $2$'s and two $5$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "200 = 2^3 \\times 5^2", "explanation": "This is $200$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $108$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "108 = 4 \\times 27", "explanation": "We split $108$ into $4 \\times 27$; both break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "27 = 3 \\times 3 \\times 3", "explanation": "$27$ is $3^3$, so it splits into three $3$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "108 = 2 \\times 2 \\times 3 \\times 3 \\times 3", "explanation": "The primes multiply back to $108$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2, \\ 3 \\times 3 \\times 3 = 3^3", "explanation": "There are two $2$'s and three $3$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "108 = 2^2 \\times 3^3", "explanation": "This is $108$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3^3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $132$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "132 = 4 \\times 33", "explanation": "We split $132$ into $4 \\times 33$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "33 = 3 \\times 11", "explanation": "$33$ splits into $3 \\times 11$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "132 = 2 \\times 2 \\times 3 \\times 11", "explanation": "The four primes multiply back to $132$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, giving $2^2$; the $3$ and $11$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "132 = 2^2 \\times 3 \\times 11", "explanation": "This is $132$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3 \\times 11$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $156$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "156 = 4 \\times 39", "explanation": "We split $156$ into $4 \\times 39$; both break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "39 = 3 \\times 13", "explanation": "$39$ splits into $3 \\times 13$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "156 = 2 \\times 2 \\times 3 \\times 13", "explanation": "The four primes multiply back to $156$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, giving $2^2$; the $3$ and $13$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "156 = 2^2 \\times 3 \\times 13", "explanation": "This is $156$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3 \\times 13$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $220$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "220 = 4 \\times 55", "explanation": "We split $220$ into $4 \\times 55$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "55 = 5 \\times 11", "explanation": "$55$ splits into $5 \\times 11$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "220 = 2 \\times 2 \\times 5 \\times 11", "explanation": "The four primes multiply back to $220$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2", "explanation": "The prime $2$ appears twice, giving $2^2$; the $5$ and $11$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "220 = 2^2 \\times 5 \\times 11", "explanation": "This is $220$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 5 \\times 11$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $240$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "240 = 16 \\times 15", "explanation": "We split $240$ into $16 \\times 15$; both are simple to break down.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "16 = 2 \\times 2 \\times 2 \\times 2", "explanation": "$16$ is $2^4$, so it splits into four $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "15 = 3 \\times 5", "explanation": "$15$ splits into $3 \\times 5$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "240 = 2 \\times 2 \\times 2 \\times 2 \\times 3 \\times 5", "explanation": "The primes multiply back to $240$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 \\times 2 = 2^4", "explanation": "Four $2$'s multiplied together is $2^4$; the $3$ and $5$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "240 = 2^4 \\times 3 \\times 5", "explanation": "This is $240$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^4 \\times 3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $168$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "168 = 8 \\times 21", "explanation": "We split $168$ into $8 \\times 21$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "21 = 3 \\times 7", "explanation": "$21$ splits into $3 \\times 7$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "168 = 2 \\times 2 \\times 2 \\times 3 \\times 7", "explanation": "The primes multiply back to $168$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 \\times 2 = 2^3", "explanation": "Three $2$'s multiplied together is $2^3$; the $3$ and $7$ appear once each.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "168 = 2^3 \\times 3 \\times 7", "explanation": "This is $168$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $189$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "189 = 27 \\times 7", "explanation": "We split $189$ into $27 \\times 7$; the $7$ is already prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "7 = 7", "explanation": "$7$ is prime, so that branch is finished.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "27 = 3 \\times 3 \\times 3", "explanation": "$27$ is $3^3$, so it splits into three $3$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "189 = 3 \\times 3 \\times 3 \\times 7", "explanation": "The primes multiply back to $189$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 \\times 3 = 3^3", "explanation": "Three $3$'s multiplied together is $3^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "189 = 3^3 \\times 7", "explanation": "This is $189$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$3^3 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $196$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "196 = 4 \\times 49", "explanation": "We split $196$ into $4 \\times 49$; both are perfect squares that break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "49 = 7 \\times 7", "explanation": "$49$ splits into two $7$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "196 = 2 \\times 2 \\times 7 \\times 7", "explanation": "The primes multiply back to $196$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "2 \\times 2 = 2^2, \\ 7 \\times 7 = 7^2", "explanation": "There are two $2$'s and two $7$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "196 = 2^2 \\times 7^2", "explanation": "This is $196$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 7^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $225$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "225 = 9 \\times 25", "explanation": "We split $225$ into $9 \\times 25$; both are perfect squares.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "25 = 5 \\times 5", "explanation": "$25$ splits into two $5$'s, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "225 = 3 \\times 3 \\times 5 \\times 5", "explanation": "The primes multiply back to $225$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 = 3^2, \\ 5 \\times 5 = 5^2", "explanation": "There are two $3$'s and two $5$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "225 = 3^2 \\times 5^2", "explanation": "This is $225$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$3^2 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $250$ as a product of its prime factors in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "250 = 2 \\times 125", "explanation": "$250$ is even, so we take out a factor of $2$ first.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "2 = 2", "explanation": "$2$ is prime, so this branch ends immediately.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "125 = 5 \\times 25 = 5 \\times 5 \\times 5", "explanation": "$125$ is $5^3$: it splits into $5 \\times 25$, and $25$ splits into $5 \\times 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "250 = 2 \\times 5 \\times 5 \\times 5", "explanation": "The primes multiply back to $250$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "5 \\times 5 \\times 5 = 5^3", "explanation": "Three $5$'s multiplied together is $5^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "250 = 2 \\times 5^3", "explanation": "This is $250$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2 \\times 5^3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Write $297$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "297 = 27 \\times 11", "explanation": "The digits of $297$ add to $18$, a multiple of $9$, so $27$ divides it; the $11$ is prime.", "diagram": null },
        { "stepNumber": 2, "description": "Note the prime branch.", "workingLatex": "11 = 11", "explanation": "$11$ is prime, so that branch is finished.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the other branch.", "workingLatex": "27 = 3 \\times 3 \\times 3", "explanation": "$27$ is $3^3$, so it splits into three $3$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "297 = 3 \\times 3 \\times 3 \\times 11", "explanation": "The primes multiply back to $297$.", "diagram": null },
        { "stepNumber": 5, "description": "Group repeated primes as powers.", "workingLatex": "3 \\times 3 \\times 3 = 3^3", "explanation": "Three $3$'s multiplied together is $3^3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the final product.", "workingLatex": "297 = 3^3 \\times 11", "explanation": "This is $297$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$3^3 \\times 11$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $24$ and $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "24 = 8 \\times 3 = 2 \\times 2 \\times 2 \\times 3", "explanation": "Breaking $24$ into primes gives us its building blocks to compare.", "diagram": null },
        { "stepNumber": 2, "description": "Write it in index form.", "workingLatex": "24 = 2^3 \\times 3", "explanation": "Index form makes it easy to see how many of each prime there are.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the second number.", "workingLatex": "60 = 4 \\times 15 = 2 \\times 2 \\times 3 \\times 5", "explanation": "We do the same for $60$ so both are expressed in the same language of primes.", "diagram": null },
        { "stepNumber": 4, "description": "Write it in index form.", "workingLatex": "60 = 2^2 \\times 3 \\times 5", "explanation": "Now both numbers are in index form and ready to compare.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^3, 2^2) = 2^2", "explanation": "The HCF must divide both numbers, so for each prime we take the lowest power present in both.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^1, 3^1) = 3", "explanation": "Both numbers have exactly one $3$, so a single $3$ goes into the HCF.", "diagram": null },
        { "stepNumber": 7, "description": "Deal with the prime $5$.", "workingLatex": "5 \\text{ only in } 60", "explanation": "The prime $5$ is missing from $24$, so it cannot be a common factor and is left out.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2^2 \\times 3 = 12", "explanation": "Multiplying the shared prime powers gives the largest number dividing both.", "diagram": null }
      ],
      "finalAnswer": "$12$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $45$ and $75$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "45 = 9 \\times 5 = 3 \\times 3 \\times 5", "explanation": "We break $45$ into primes to see its building blocks.", "diagram": null },
        { "stepNumber": 2, "description": "Write it in index form.", "workingLatex": "45 = 3^2 \\times 5", "explanation": "Index form shows two $3$'s and one $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the second number.", "workingLatex": "75 = 3 \\times 25 = 3 \\times 5 \\times 5", "explanation": "We factorise $75$ in the same way.", "diagram": null },
        { "stepNumber": 4, "description": "Write it in index form.", "workingLatex": "75 = 3 \\times 5^2", "explanation": "Index form shows one $3$ and two $5$'s.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^2, 3^1) = 3", "explanation": "For a common factor we take the lower power of $3$, which is a single $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the prime $5$.", "workingLatex": "\\min(5^1, 5^2) = 5", "explanation": "We take the lower power of $5$, which is a single $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 3 \\times 5 = 15", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null }
      ],
      "finalAnswer": "$15$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $56$ and $84$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "56 = 8 \\times 7 = 2 \\times 2 \\times 2 \\times 7", "explanation": "We break $56$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Write it in index form.", "workingLatex": "56 = 2^3 \\times 7", "explanation": "Index form shows three $2$'s and one $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the second number.", "workingLatex": "84 = 4 \\times 21 = 2 \\times 2 \\times 3 \\times 7", "explanation": "We factorise $84$ the same way.", "diagram": null },
        { "stepNumber": 4, "description": "Write it in index form.", "workingLatex": "84 = 2^2 \\times 3 \\times 7", "explanation": "Index form shows two $2$'s, one $3$ and one $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^3, 2^2) = 2^2", "explanation": "For the HCF we take the lower power of $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the prime $7$.", "workingLatex": "\\min(7^1, 7^1) = 7", "explanation": "Both numbers share exactly one $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Deal with the prime $3$.", "workingLatex": "3 \\text{ only in } 84", "explanation": "The prime $3$ is absent from $56$, so it cannot be common.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2^2 \\times 7 = 28", "explanation": "Multiplying the shared prime powers gives the HCF.", "diagram": null }
      ],
      "finalAnswer": "$28$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $72$ and $108$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "72 = 8 \\times 9 = 2^3 \\times 3^2", "explanation": "We break $72$ into primes and write it in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "108 = 4 \\times 27 = 2^2 \\times 3^3", "explanation": "We factorise $108$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "List the primes involved.", "workingLatex": "\\text{primes: } 2 \\text{ and } 3", "explanation": "Both numbers are built only from $2$'s and $3$'s, so we compare those two primes.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^3, 2^2) = 2^2", "explanation": "The HCF uses the lower power of $2$ that appears in both.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^2, 3^3) = 3^2", "explanation": "The HCF uses the lower power of $3$ that appears in both.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2^2 \\times 3^2", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "2^2 \\times 3^2 = 4 \\times 9 = 36", "explanation": "Working out the product gives the numerical value of the HCF.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $90$ and $120$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "90 = 9 \\times 10 = 2 \\times 3^2 \\times 5", "explanation": "We break $90$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "120 = 8 \\times 15 = 2^3 \\times 3 \\times 5", "explanation": "We factorise $120$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^1, 2^3) = 2", "explanation": "For the HCF we take the lower power of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^2, 3^1) = 3", "explanation": "We take the lower power of $3$, a single $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $5$.", "workingLatex": "\\min(5^1, 5^1) = 5", "explanation": "Both numbers share exactly one $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2 \\times 3 \\times 5", "explanation": "Multiplying the shared prime powers gives the HCF.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "2 \\times 3 \\times 5 = 30", "explanation": "Working out the product gives the numerical value of the HCF.", "diagram": null }
      ],
      "finalAnswer": "$30$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $18$ and $24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "18 = 2 \\times 9 = 2 \\times 3^2", "explanation": "We break $18$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "24 = 8 \\times 3 = 2^3 \\times 3", "explanation": "We factorise $24$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Recall the LCM rule.", "workingLatex": "\\text{LCM uses the } \\textbf{highest} \\text{ power of each prime}", "explanation": "The LCM must be a multiple of both numbers, so for each prime we take the highest power that appears in either.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^1, 2^3) = 2^3", "explanation": "We take the higher power of $2$ so the result is divisible by $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^2, 3^1) = 3^2", "explanation": "We take the higher power of $3$ so the result is divisible by $18$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^3 \\times 3^2", "explanation": "Multiplying the highest prime powers gives the smallest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "2^3 \\times 3^2 = 8 \\times 9 = 72", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$72$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $20$ and $30$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "20 = 4 \\times 5 = 2^2 \\times 5", "explanation": "We break $20$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "30 = 2 \\times 3 \\times 5", "explanation": "We factorise $30$ into primes.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^2, 2^1) = 2^2", "explanation": "For the LCM we take the higher power of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^0, 3^1) = 3", "explanation": "Only $30$ has a $3$, so the LCM must include that $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $5$.", "workingLatex": "\\max(5^1, 5^1) = 5", "explanation": "Both have a single $5$, so one $5$ is included.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^2 \\times 3 \\times 5", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 5 = 60", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $16$ and $24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "16 = 2^4", "explanation": "$16$ is a pure power of $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "24 = 8 \\times 3 = 2^3 \\times 3", "explanation": "We factorise $24$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^4, 2^3) = 2^4", "explanation": "For the LCM we take the higher power of $2$ so it is divisible by $16$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^0, 3^1) = 3", "explanation": "Only $24$ has a $3$, so the LCM must include it to be divisible by $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^4 \\times 3", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate.", "workingLatex": "16 \\times 3 = 48", "explanation": "Working out the product gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Check.", "workingLatex": "48 \\div 16 = 3, \\ 48 \\div 24 = 2", "explanation": "Both divisions are whole numbers, confirming $48$ is a common multiple.", "diagram": null }
      ],
      "finalAnswer": "$48$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $21$ and $28$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "21 = 3 \\times 7", "explanation": "We break $21$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "28 = 4 \\times 7 = 2^2 \\times 7", "explanation": "We factorise $28$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^0, 2^2) = 2^2", "explanation": "Only $28$ has $2$'s, so the LCM includes $2^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^1, 3^0) = 3", "explanation": "Only $21$ has a $3$, so the LCM includes it.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $7$.", "workingLatex": "\\max(7^1, 7^1) = 7", "explanation": "Both share a single $7$, so one $7$ is included.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^2 \\times 3 \\times 7", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 7 = 84", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$84$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $40$ and $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "40 = 8 \\times 5 = 2^3 \\times 5", "explanation": "We break $40$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "60 = 4 \\times 15 = 2^2 \\times 3 \\times 5", "explanation": "We factorise $60$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^3, 2^2) = 2^3", "explanation": "For the LCM we take the higher power of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^0, 3^1) = 3", "explanation": "Only $60$ has a $3$, so the LCM includes it.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $5$.", "workingLatex": "\\max(5^1, 5^1) = 5", "explanation": "Both share a single $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^3 \\times 3 \\times 5", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "8 \\times 3 \\times 5 = 120", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$120$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $12$ and $30$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "12 = 4 \\times 3 = 2^2 \\times 3", "explanation": "We break $12$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "30 = 2 \\times 3 \\times 5", "explanation": "We factorise $30$ into primes.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(2^2,2^1)=2, \\ \\min(3^1,3^1)=3", "explanation": "For the HCF we take the lowest power of each shared prime; $5$ is not shared.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2 \\times 3 = 6", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "\\max(2^2,2^1)=2^2, \\ \\max(3,3)=3, \\ \\max(5^0,5^1)=5", "explanation": "For the LCM we take the highest power of every prime that appears in either number.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^2 \\times 3 \\times 5 = 60", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the product rule.", "workingLatex": "\\text{HCF} \\times \\text{LCM} = 6 \\times 60 = 360 = 12 \\times 30", "explanation": "For two numbers, HCF times LCM equals their product, so this confirms both answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 6, \\ \\text{LCM} = 60$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $28$ and $42$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "28 = 4 \\times 7 = 2^2 \\times 7", "explanation": "We break $28$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "42 = 2 \\times 3 \\times 7", "explanation": "We factorise $42$ into primes.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(2^2,2^1)=2, \\ \\min(7,7)=7", "explanation": "For the HCF we take the lowest power of each shared prime; $3$ is not shared.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2 \\times 7 = 14", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "\\max(2^2,2)=2^2, \\ \\max(3^0,3)=3, \\ \\max(7,7)=7", "explanation": "For the LCM we take the highest power of every prime appearing in either number.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^2 \\times 3 \\times 7 = 84", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the product rule.", "workingLatex": "14 \\times 84 = 1176 = 28 \\times 42", "explanation": "HCF times LCM equals the product of the two numbers, confirming the answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 14, \\ \\text{LCM} = 84$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $36$ and $60$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "36 = 4 \\times 9 = 2^2 \\times 3^2", "explanation": "We break $36$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "60 = 4 \\times 15 = 2^2 \\times 3 \\times 5", "explanation": "We factorise $60$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(2^2,2^2)=2^2, \\ \\min(3^2,3^1)=3", "explanation": "For the HCF we take the lowest power of each shared prime; $5$ is not shared.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2^2 \\times 3 = 12", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "\\max(2^2,2^2)=2^2, \\ \\max(3^2,3)=3^2, \\ \\max(5^0,5)=5", "explanation": "For the LCM we take the highest power of every prime appearing in either number.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^2 \\times 3^2 \\times 5 = 180", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the product rule.", "workingLatex": "12 \\times 180 = 2160 = 36 \\times 60", "explanation": "HCF times LCM equals the product of the numbers, confirming both answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 12, \\ \\text{LCM} = 180$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $50$ and $75$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "50 = 2 \\times 25 = 2 \\times 5^2", "explanation": "We break $50$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "75 = 3 \\times 25 = 3 \\times 5^2", "explanation": "We factorise $75$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(5^2,5^2)=5^2", "explanation": "Only the prime $5$ is shared, and both have $5^2$, so the HCF is $5^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 5^2 = 25", "explanation": "The prime $2$ and $3$ are not shared, so the HCF is just $25$.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "\\max(2,2^0)=2, \\ \\max(3^0,3)=3, \\ \\max(5^2,5^2)=5^2", "explanation": "For the LCM we take the highest power of every prime appearing in either number.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2 \\times 3 \\times 5^2 = 150", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the product rule.", "workingLatex": "25 \\times 150 = 3750 = 50 \\times 75", "explanation": "HCF times LCM equals the product of the numbers, confirming both answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 25, \\ \\text{LCM} = 150$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $48$ and $72$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "48 = 16 \\times 3 = 2^4 \\times 3", "explanation": "We break $48$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "72 = 8 \\times 9 = 2^3 \\times 3^2", "explanation": "We factorise $72$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(2^4,2^3)=2^3, \\ \\min(3^1,3^2)=3", "explanation": "For the HCF we take the lowest power of each shared prime.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2^3 \\times 3 = 24", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "\\max(2^4,2^3)=2^4, \\ \\max(3^1,3^2)=3^2", "explanation": "For the LCM we take the highest power of each prime.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^4 \\times 3^2 = 16 \\times 9 = 144", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the product rule.", "workingLatex": "24 \\times 144 = 3456 = 48 \\times 72", "explanation": "HCF times LCM equals the product of the numbers, confirming both answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 24, \\ \\text{LCM} = 144$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $66$ and $99$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "66 = 2 \\times 33 = 2 \\times 3 \\times 11", "explanation": "We break $66$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "99 = 9 \\times 11 = 3^2 \\times 11", "explanation": "We factorise $99$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^1, 3^2) = 3", "explanation": "For the HCF we take the lower power of $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $11$.", "workingLatex": "\\min(11, 11) = 11", "explanation": "Both numbers share a single $11$.", "diagram": null },
        { "stepNumber": 5, "description": "Deal with the prime $2$.", "workingLatex": "2 \\text{ only in } 66", "explanation": "The prime $2$ is not in $99$, so it cannot be common.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 3 \\times 11 = 33", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null }
      ],
      "finalAnswer": "$33$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $33$ and $44$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "33 = 3 \\times 11", "explanation": "We break $33$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "44 = 4 \\times 11 = 2^2 \\times 11", "explanation": "We factorise $44$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^0, 2^2) = 2^2", "explanation": "Only $44$ has $2$'s, so the LCM includes $2^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^1, 3^0) = 3", "explanation": "Only $33$ has a $3$, so the LCM includes it.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $11$.", "workingLatex": "\\max(11, 11) = 11", "explanation": "Both share a single $11$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^2 \\times 3 \\times 11", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 11 = 132", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$132$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $78$ and $104$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "78 = 2 \\times 39 = 2 \\times 3 \\times 13", "explanation": "We break $78$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "104 = 8 \\times 13 = 2^3 \\times 13", "explanation": "We factorise $104$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^1, 2^3) = 2", "explanation": "For the HCF we take the lower power of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $13$.", "workingLatex": "\\min(13, 13) = 13", "explanation": "Both numbers share a single $13$.", "diagram": null },
        { "stepNumber": 5, "description": "Deal with the prime $3$.", "workingLatex": "3 \\text{ only in } 78", "explanation": "The prime $3$ is not in $104$, so it cannot be common.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2 \\times 13 = 26", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null }
      ],
      "finalAnswer": "$26$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $26$ and $39$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "26 = 2 \\times 13", "explanation": "We break $26$ into primes.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "39 = 3 \\times 13", "explanation": "We factorise $39$ into primes.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^1, 2^0) = 2", "explanation": "Only $26$ has a $2$, so the LCM includes it.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^0, 3^1) = 3", "explanation": "Only $39$ has a $3$, so the LCM includes it.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $13$.", "workingLatex": "\\max(13, 13) = 13", "explanation": "Both share a single $13$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2 \\times 3 \\times 13", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "2 \\times 3 \\times 13 = 78", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$78$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor test", "divisibility"],
    "questionText": "The number $360$ has prime factorisation $2^3 \\times 3^2 \\times 5$. Use this to decide whether $12$ is a factor of $360$, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the given factorisation.", "workingLatex": "360 = 2^3 \\times 3^2 \\times 5", "explanation": "The prime factorisation lists exactly how many of each prime $360$ is built from.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the test number.", "workingLatex": "12 = 2^2 \\times 3", "explanation": "To see if $12$ divides $360$, express $12$ in the same prime language.", "diagram": null },
        { "stepNumber": 3, "description": "State the divisibility rule.", "workingLatex": "a \\mid b \\iff \\text{each prime power in } a \\le \\text{that in } b", "explanation": "One number divides another exactly when every prime it needs is available in at least the same quantity.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $2$.", "workingLatex": "2^2 \\le 2^3 \\ \\checkmark", "explanation": "$12$ needs two $2$'s; $360$ has three, so there are enough.", "diagram": null },
        { "stepNumber": 5, "description": "Check the prime $3$.", "workingLatex": "3^1 \\le 3^2 \\ \\checkmark", "explanation": "$12$ needs one $3$; $360$ has two, so there are enough.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "12 = 2^2 \\times 3 \\text{ fits inside } 2^3 \\times 3^2 \\times 5", "explanation": "Every prime $12$ requires is present in sufficient quantity, so $12$ divides $360$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm numerically.", "workingLatex": "360 \\div 12 = 30", "explanation": "The division gives a whole number, confirming $12$ is a factor of $360$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Yes, } 12 \\text{ is a factor since } 2^2 \\times 3 \\text{ fits inside } 2^3 \\times 3^2 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor test", "divisibility"],
    "questionText": "The number $540$ has prime factorisation $2^2 \\times 3^3 \\times 5$. Use this to decide whether $45$ is a factor of $540$, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the given factorisation.", "workingLatex": "540 = 2^2 \\times 3^3 \\times 5", "explanation": "This tells us the exact prime make-up of $540$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the test number.", "workingLatex": "45 = 9 \\times 5 = 3^2 \\times 5", "explanation": "We express $45$ in prime form to compare like with like.", "diagram": null },
        { "stepNumber": 3, "description": "State the divisibility rule.", "workingLatex": "45 \\mid 540 \\iff \\text{each prime power of } 45 \\le \\text{that of } 540", "explanation": "$45$ divides $540$ only if $540$ contains at least as many of each needed prime.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $3$.", "workingLatex": "3^2 \\le 3^3 \\ \\checkmark", "explanation": "$45$ needs two $3$'s; $540$ has three, so there are enough.", "diagram": null },
        { "stepNumber": 5, "description": "Check the prime $5$.", "workingLatex": "5^1 \\le 5^1 \\ \\checkmark", "explanation": "$45$ needs one $5$; $540$ has exactly one, which is enough.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "3^2 \\times 5 \\text{ fits inside } 2^2 \\times 3^3 \\times 5", "explanation": "All required primes are present in sufficient quantity, so $45$ divides $540$.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm numerically.", "workingLatex": "540 \\div 45 = 12", "explanation": "The division is exact, confirming $45$ is a factor of $540$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Yes, } 45 \\text{ is a factor since } 3^2 \\times 5 \\text{ fits inside } 2^2 \\times 3^3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor test", "divisibility"],
    "questionText": "The number $180$ has prime factorisation $2^2 \\times 3^2 \\times 5$. Use this to decide whether $8$ is a factor of $180$, giving a reason.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the given factorisation.", "workingLatex": "180 = 2^2 \\times 3^2 \\times 5", "explanation": "This is the exact prime make-up of $180$.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the test number.", "workingLatex": "8 = 2^3", "explanation": "We express $8$ in prime form; it needs three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "State the divisibility rule.", "workingLatex": "8 \\mid 180 \\iff 2^3 \\le \\text{power of } 2 \\text{ in } 180", "explanation": "$8$ divides $180$ only if $180$ contains at least three factors of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $2$.", "workingLatex": "2^3 \\le 2^2 \\ ? \\quad \\text{No}", "explanation": "$8$ needs three $2$'s but $180$ only supplies two, so there are not enough.", "diagram": null },
        { "stepNumber": 5, "description": "Conclude.", "workingLatex": "2^3 \\nleq 2^2", "explanation": "Because $180$ is short of one factor of $2$, $8$ cannot divide it exactly.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm numerically.", "workingLatex": "180 \\div 8 = 22.5", "explanation": "The division is not a whole number, confirming $8$ is not a factor of $180$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{No, } 8 \\text{ is not a factor since } 180 \\text{ has only } 2^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $540$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "540 = 4 \\times 135", "explanation": "We take out an easy factor of $4$ to begin.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "4 = 2 \\times 2", "explanation": "$4$ splits into two $2$'s, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "135 = 27 \\times 5", "explanation": "$135$ splits into $27 \\times 5$; the $5$ is prime.", "diagram": null },
        { "stepNumber": 4, "description": "Continue splitting.", "workingLatex": "27 = 3 \\times 3 \\times 3", "explanation": "$27$ is $3^3$, so it splits into three $3$'s.", "diagram": null },
        { "stepNumber": 5, "description": "Collect all the prime factors.", "workingLatex": "540 = 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 5", "explanation": "The primes at every branch end multiply back to $540$.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2^2, \\ 3^3, \\ 5", "explanation": "There are two $2$'s, three $3$'s and one $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "540 = 2^2 \\times 3^3 \\times 5", "explanation": "This is $540$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^2 \\times 3^3 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $600$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "600 = 6 \\times 100", "explanation": "We split $600$ into $6 \\times 100$; both break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "6 = 2 \\times 3", "explanation": "$6$ splits into $2 \\times 3$, both prime.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "100 = 4 \\times 25 = 2 \\times 2 \\times 5 \\times 5", "explanation": "$100$ splits into $4 \\times 25$, then into two $2$'s and two $5$'s.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "600 = 2 \\times 3 \\times 2 \\times 2 \\times 5 \\times 5", "explanation": "Combining both branches gives all the primes.", "diagram": null },
        { "stepNumber": 5, "description": "Order the primes.", "workingLatex": "600 = 2 \\times 2 \\times 2 \\times 3 \\times 5 \\times 5", "explanation": "Ordering makes the repeats easy to count: three $2$'s, one $3$, two $5$'s.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2^3, \\ 3, \\ 5^2", "explanation": "We write each prime with its correct power.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "600 = 2^3 \\times 3 \\times 5^2", "explanation": "This is $600$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3 \\times 5^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $720$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "720 = 72 \\times 10", "explanation": "We split $720$ into $72 \\times 10$; both are familiar and break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "72 = 8 \\times 9 = 2^3 \\times 3^2", "explanation": "$72$ splits into $8 \\times 9$, giving three $2$'s and two $3$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "10 = 2 \\times 5", "explanation": "$10$ splits into $2 \\times 5$, both prime.", "diagram": null },
        { "stepNumber": 4, "description": "Collect all the prime factors.", "workingLatex": "720 = 2^3 \\times 3^2 \\times 2 \\times 5", "explanation": "We bring together the primes from both branches.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the $2$'s.", "workingLatex": "2^3 \\times 2 = 2^4", "explanation": "Adding the extra $2$ from the second branch gives four $2$'s in total.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2^4, \\ 3^2, \\ 5", "explanation": "The primes are four $2$'s, two $3$'s and one $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "720 = 2^4 \\times 3^2 \\times 5", "explanation": "This is $720$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^4 \\times 3^2 \\times 5$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $504$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "504 = 8 \\times 63", "explanation": "We split $504$ into $8 \\times 63$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "63 = 9 \\times 7", "explanation": "$63$ splits into $9 \\times 7$; the $7$ is prime.", "diagram": null },
        { "stepNumber": 4, "description": "Continue splitting.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 5, "description": "Collect all the prime factors.", "workingLatex": "504 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 7", "explanation": "The primes at every branch end multiply back to $504$.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2^3, \\ 3^2, \\ 7", "explanation": "There are three $2$'s, two $3$'s and one $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "504 = 2^3 \\times 3^2 \\times 7", "explanation": "This is $504$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3^2 \\times 7$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "factor tree", "index form"],
    "questionText": "Express $792$ as a product of its prime factors, giving your answer in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "792 = 8 \\times 99", "explanation": "We split $792$ into $8 \\times 99$; both break down neatly.", "diagram": null },
        { "stepNumber": 2, "description": "Break down the first branch.", "workingLatex": "8 = 2 \\times 2 \\times 2", "explanation": "$8$ is $2^3$, so it splits into three $2$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Break down the second branch.", "workingLatex": "99 = 9 \\times 11", "explanation": "$99$ splits into $9 \\times 11$; the $11$ is prime.", "diagram": null },
        { "stepNumber": 4, "description": "Continue splitting.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ splits into two $3$'s, both prime.", "diagram": null },
        { "stepNumber": 5, "description": "Collect all the prime factors.", "workingLatex": "792 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 11", "explanation": "The primes at every branch end multiply back to $792$.", "diagram": null },
        { "stepNumber": 6, "description": "Group repeated primes as powers.", "workingLatex": "2^3, \\ 3^2, \\ 11", "explanation": "There are three $2$'s, two $3$'s and one $11$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the final product.", "workingLatex": "792 = 2^3 \\times 3^2 \\times 11", "explanation": "This is $792$ as a product of primes in index form.", "diagram": null }
      ],
      "finalAnswer": "$2^3 \\times 3^2 \\times 11$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find both the HCF and the LCM of $84$ and $90$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "84 = 4 \\times 21 = 2^2 \\times 3 \\times 7", "explanation": "We break $84$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "90 = 9 \\times 10 = 2 \\times 3^2 \\times 5", "explanation": "We factorise $90$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "HCF: take lowest powers.", "workingLatex": "\\min(2^2,2)=2, \\ \\min(3,3^2)=3", "explanation": "For the HCF we take the lowest power of each shared prime; $5$ and $7$ are not shared.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2 \\times 3 = 6", "explanation": "Multiplying the shared prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 5, "description": "LCM: take highest powers.", "workingLatex": "2^2, \\ 3^2, \\ 5, \\ 7", "explanation": "For the LCM we take the highest power of every prime appearing in either number.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^2 \\times 3^2 \\times 5 \\times 7", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate the LCM.", "workingLatex": "4 \\times 9 \\times 5 \\times 7 = 1260", "explanation": "Working out the product gives the numerical value of the LCM.", "diagram": null },
        { "stepNumber": 8, "description": "Check with the product rule.", "workingLatex": "6 \\times 1260 = 7560 = 84 \\times 90", "explanation": "HCF times LCM equals the product of the numbers, confirming both answers.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 6, \\ \\text{LCM} = 1260$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "index form"],
    "questionText": "Use prime factorisation to find the highest common factor (HCF) of $120$ and $180$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "120 = 8 \\times 15 = 2^3 \\times 3 \\times 5", "explanation": "We break $120$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "180 = 4 \\times 45 = 2^2 \\times 3^2 \\times 5", "explanation": "We factorise $180$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^3, 2^2) = 2^2", "explanation": "For the HCF we take the lower power of $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\min(3^1, 3^2) = 3", "explanation": "We take the lower power of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $5$.", "workingLatex": "\\min(5, 5) = 5", "explanation": "Both share a single $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the common primes.", "workingLatex": "\\text{HCF} = 2^2 \\times 3 \\times 5", "explanation": "Multiplying the shared prime powers gives the HCF.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "4 \\times 3 \\times 5 = 60", "explanation": "Working out the product gives the HCF.", "diagram": null }
      ],
      "finalAnswer": "$60$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "index form"],
    "questionText": "Use prime factorisation to find the lowest common multiple (LCM) of $45$ and $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "45 = 9 \\times 5 = 3^2 \\times 5", "explanation": "We break $45$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "60 = 4 \\times 15 = 2^2 \\times 3 \\times 5", "explanation": "We factorise $60$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^0, 2^2) = 2^2", "explanation": "Only $60$ has $2$'s, so the LCM includes $2^2$.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^2, 3^1) = 3^2", "explanation": "For the LCM we take the higher power of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $5$.", "workingLatex": "\\max(5, 5) = 5", "explanation": "Both share a single $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^2 \\times 3^2 \\times 5", "explanation": "Multiplying the highest prime powers gives the LCM.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "4 \\times 9 \\times 5 = 180", "explanation": "Working out the product gives the LCM.", "diagram": null }
      ],
      "finalAnswer": "$180$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "problem solving"],
    "questionText": "Two lighthouses flash together at midnight. One flashes every $24$ seconds and the other every $36$ seconds. Using prime factorisation, find how many seconds later they next flash at the same instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify what is needed.", "workingLatex": "\\text{time} = \\text{LCM}(24, 36)", "explanation": "They flash together at each common multiple of their periods, so the next time is the lowest common multiple.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the first period.", "workingLatex": "24 = 8 \\times 3 = 2^3 \\times 3", "explanation": "We break $24$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the second period.", "workingLatex": "36 = 4 \\times 9 = 2^2 \\times 3^2", "explanation": "We factorise $36$ into primes in index form.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $2$.", "workingLatex": "\\max(2^3, 2^2) = 2^3", "explanation": "For the LCM we take the higher power of $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $3$.", "workingLatex": "\\max(3^1, 3^2) = 3^2", "explanation": "For the LCM we take the higher power of $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the highest powers.", "workingLatex": "\\text{LCM} = 2^3 \\times 3^2", "explanation": "Multiplying the highest prime powers gives the smallest common period.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "8 \\times 9 = 72", "explanation": "The LCM works out to $72$ seconds.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret in context.", "workingLatex": "72 \\div 24 = 3, \\ 72 \\div 36 = 2", "explanation": "After $72$ seconds the first has flashed $3$ times and the second $2$ times, so they coincide, confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$72 \\text{ seconds}$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "square numbers", "problem solving"],
    "questionText": "The number $720 = 2^4 \\times 3^2 \\times 5$. Find the smallest positive integer by which $720$ must be multiplied to make a perfect square, and state the resulting square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the factorisation.", "workingLatex": "720 = 2^4 \\times 3^2 \\times 5", "explanation": "We start from the prime factorisation so we can look at the power of each prime.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the square condition.", "workingLatex": "\\text{perfect square} \\iff \\text{every prime power is even}", "explanation": "A perfect square is a number times itself, which doubles every prime's exponent, so all exponents must be even.", "diagram": null },
        { "stepNumber": 3, "description": "Check the prime $2$.", "workingLatex": "2^4 \\ \\text{(even)}", "explanation": "The power of $2$ is $4$, which is already even, so no extra $2$'s are needed.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $3$.", "workingLatex": "3^2 \\ \\text{(even)}", "explanation": "The power of $3$ is $2$, already even, so no extra $3$'s are needed.", "diagram": null },
        { "stepNumber": 5, "description": "Check the prime $5$.", "workingLatex": "5^1 \\ \\text{(odd)}", "explanation": "The power of $5$ is $1$, which is odd, so this is the prime that spoils the square.", "diagram": null },
        { "stepNumber": 6, "description": "Choose the multiplier.", "workingLatex": "\\text{multiply by } 5", "explanation": "Multiplying by one more $5$ raises its power to $5^2$, making every exponent even.", "diagram": null },
        { "stepNumber": 7, "description": "Form the new number.", "workingLatex": "720 \\times 5 = 2^4 \\times 3^2 \\times 5^2 = 3600", "explanation": "All powers are now even, so the product is a perfect square.", "diagram": null },
        { "stepNumber": 8, "description": "State the square root.", "workingLatex": "\\sqrt{3600} = 2^2 \\times 3 \\times 5 = 60", "explanation": "Halving each exponent gives the root, confirming $3600 = 60^2$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Multiply by } 5 \\text{ to get } 3600 = 60^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "cube numbers", "problem solving"],
    "questionText": "The number $108 = 2^2 \\times 3^3$. Find the smallest positive integer by which $108$ must be multiplied to make a perfect cube, and state the resulting cube.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down the factorisation.", "workingLatex": "108 = 2^2 \\times 3^3", "explanation": "We start from the prime factorisation to examine each prime's power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the cube condition.", "workingLatex": "\\text{perfect cube} \\iff \\text{every prime power is a multiple of } 3", "explanation": "A perfect cube triples every prime's exponent, so all exponents must be multiples of $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the prime $3$.", "workingLatex": "3^3 \\ \\text{(multiple of 3)}", "explanation": "The power of $3$ is $3$, already a multiple of $3$, so no extra $3$'s are needed.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $2$.", "workingLatex": "2^2 \\ \\text{(not a multiple of 3)}", "explanation": "The power of $2$ is $2$; the next multiple of $3$ is $3$, so we are one $2$ short.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the multiplier.", "workingLatex": "\\text{multiply by } 2", "explanation": "Multiplying by one more $2$ raises its power to $2^3$, making both exponents multiples of $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Form the new number.", "workingLatex": "108 \\times 2 = 2^3 \\times 3^3 = 216", "explanation": "Now every exponent is a multiple of $3$, so the product is a perfect cube.", "diagram": null },
        { "stepNumber": 7, "description": "State the cube root.", "workingLatex": "\\sqrt[3]{216} = 2 \\times 3 = 6", "explanation": "Dividing each exponent by $3$ gives the root, confirming $216 = 6^3$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Multiply by } 2 \\text{ to get } 216 = 6^3$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "square numbers", "problem solving"],
    "questionText": "Express $200$ as a product of prime factors, then find the smallest positive integer by which $200$ must be multiplied to make a perfect square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the number.", "workingLatex": "200 = 8 \\times 25 = 2^3 \\times 5^2", "explanation": "We break $200$ into primes so we can study each power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the square condition.", "workingLatex": "\\text{square} \\iff \\text{all prime powers even}", "explanation": "A perfect square has every prime raised to an even power.", "diagram": null },
        { "stepNumber": 3, "description": "Check the prime $5$.", "workingLatex": "5^2 \\ \\text{(even)}", "explanation": "The power of $5$ is $2$, already even, so no extra $5$'s are needed.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $2$.", "workingLatex": "2^3 \\ \\text{(odd)}", "explanation": "The power of $2$ is $3$, which is odd, so this prime prevents a square.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the multiplier.", "workingLatex": "\\text{multiply by } 2", "explanation": "One more $2$ raises the power to $2^4$, making every exponent even.", "diagram": null },
        { "stepNumber": 6, "description": "Form the new number.", "workingLatex": "200 \\times 2 = 2^4 \\times 5^2 = 400", "explanation": "All powers are now even, so the product is a perfect square.", "diagram": null },
        { "stepNumber": 7, "description": "State the square root.", "workingLatex": "\\sqrt{400} = 2^2 \\times 5 = 20", "explanation": "Halving each exponent gives the root, confirming $400 = 20^2$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Multiply by } 2 \\text{ to get } 400 = 20^2$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "Find the HCF and the LCM of the three numbers $12$, $18$ and $30$ using prime factorisation.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the first number.", "workingLatex": "12 = 2^2 \\times 3", "explanation": "We break $12$ into primes in index form.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the second number.", "workingLatex": "18 = 2 \\times 3^2", "explanation": "We factorise $18$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the third number.", "workingLatex": "30 = 2 \\times 3 \\times 5", "explanation": "We factorise $30$ into primes.", "diagram": null },
        { "stepNumber": 4, "description": "HCF: lowest power of each shared prime.", "workingLatex": "\\min(2^2,2,2)=2, \\ \\min(3,3^2,3)=3", "explanation": "The HCF must divide all three, so for each prime present in every number we take the lowest power; $5$ is missing from two of them.", "diagram": null },
        { "stepNumber": 5, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2 \\times 3 = 6", "explanation": "Multiplying the common prime powers gives the highest common factor.", "diagram": null },
        { "stepNumber": 6, "description": "LCM: highest power of each prime.", "workingLatex": "\\max(2^2,2,2)=2^2, \\ \\max(3,3^2,3)=3^2, \\ \\max 5 = 5", "explanation": "The LCM must be divisible by all three, so we take the highest power of every prime that appears anywhere.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the LCM.", "workingLatex": "\\text{LCM} = 2^2 \\times 3^2 \\times 5", "explanation": "Multiplying the highest prime powers gives the lowest common multiple.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the LCM.", "workingLatex": "4 \\times 9 \\times 5 = 180", "explanation": "Working out the product gives the numerical value of the LCM.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 6, \\ \\text{LCM} = 180$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "LCM"],
    "questionText": "The HCF of two numbers is $2^2 \\times 3 = 12$ and their LCM is $2^4 \\times 3^2 = 144$. One of the numbers is $48$. Use prime factorisation reasoning to find the other number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the product rule.", "workingLatex": "\\text{HCF} \\times \\text{LCM} = \\text{product of the two numbers}", "explanation": "For any two numbers, the product of their HCF and LCM equals the product of the numbers themselves, because together HCF and LCM use each prime's lowest and highest power.", "diagram": null },
        { "stepNumber": 2, "description": "Compute the product of HCF and LCM.", "workingLatex": "12 \\times 144 = 1728", "explanation": "This must equal the product of the two numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the equation.", "workingLatex": "48 \\times n = 1728", "explanation": "Letting $n$ be the unknown number, its product with $48$ is $1728$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for the other number.", "workingLatex": "n = \\frac{1728}{48} = 36", "explanation": "Dividing gives the unknown number.", "diagram": null },
        { "stepNumber": 5, "description": "Factorise both to check.", "workingLatex": "48 = 2^4 \\times 3, \\ 36 = 2^2 \\times 3^2", "explanation": "We write both numbers in prime form to verify the HCF and LCM.", "diagram": null },
        { "stepNumber": 6, "description": "Check the HCF.", "workingLatex": "\\min(2^4,2^2)=2^2, \\ \\min(3,3^2)=3 \\Rightarrow 12", "explanation": "Taking the lowest power of each shared prime gives $12$, matching the given HCF.", "diagram": null },
        { "stepNumber": 7, "description": "Check the LCM.", "workingLatex": "\\max(2^4,2^2)=2^4, \\ \\max(3,3^2)=3^2 \\Rightarrow 144", "explanation": "Taking the highest power of each prime gives $144$, matching the given LCM, so the answer is confirmed.", "diagram": null }
      ],
      "finalAnswer": "$36$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "HCF", "problem solving"],
    "questionText": "Two ribbons of length $84$ cm and $120$ cm are each cut into equal pieces, with no ribbon wasted and all pieces the same length. Using prime factorisation, find the greatest possible length of each piece.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify what is needed.", "workingLatex": "\\text{piece length} = \\text{HCF}(84, 120)", "explanation": "The piece length must divide both ribbon lengths exactly, and we want the greatest such length, which is the HCF.", "diagram": null },
        { "stepNumber": 2, "description": "Factorise the first length.", "workingLatex": "84 = 4 \\times 21 = 2^2 \\times 3 \\times 7", "explanation": "We break $84$ into primes in index form.", "diagram": null },
        { "stepNumber": 3, "description": "Factorise the second length.", "workingLatex": "120 = 8 \\times 15 = 2^3 \\times 3 \\times 5", "explanation": "We factorise $120$ into primes in index form.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the prime $2$.", "workingLatex": "\\min(2^2, 2^3) = 2^2", "explanation": "For the HCF we take the lower power of $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Compare the prime $3$.", "workingLatex": "\\min(3, 3) = 3", "explanation": "Both share a single $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Deal with primes $5$ and $7$.", "workingLatex": "5 \\text{ only in } 120, \\ 7 \\text{ only in } 84", "explanation": "These primes are not shared, so they cannot appear in the HCF.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the HCF.", "workingLatex": "\\text{HCF} = 2^2 \\times 3 = 12", "explanation": "Multiplying the shared prime powers gives the greatest common length.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret in context.", "workingLatex": "84 \\div 12 = 7, \\ 120 \\div 12 = 10", "explanation": "Each ribbon divides exactly into $12$ cm pieces ($7$ and $10$ pieces), confirming the answer.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ cm}$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["prime factors", "LCM", "square numbers"],
    "questionText": "Using prime factorisation, find the smallest square number that is divisible by both $8$ and $12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Factorise the two numbers.", "workingLatex": "8 = 2^3, \\ 12 = 2^2 \\times 3", "explanation": "Any multiple of both must contain enough of each prime, so we start from their prime forms.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM} = 2^3 \\times 3 = 24", "explanation": "The smallest number divisible by both is the LCM, taking the highest power of each prime.", "diagram": null },
        { "stepNumber": 3, "description": "State the requirement.", "workingLatex": "\\text{answer is a multiple of } 2^3 \\times 3 \\text{ and a perfect square}", "explanation": "The square we want must be divisible by $24$, so it must contain at least $2^3$ and $3^1$, while also having all even prime powers.", "diagram": null },
        { "stepNumber": 4, "description": "Fix the power of $2$.", "workingLatex": "2^3 \\to 2^4", "explanation": "We need at least $2^3$, but a square needs an even power, so we round up to the next even power, $2^4$.", "diagram": null },
        { "stepNumber": 5, "description": "Fix the power of $3$.", "workingLatex": "3^1 \\to 3^2", "explanation": "We need at least $3^1$, but a square needs an even power, so we round up to $3^2$.", "diagram": null },
        { "stepNumber": 6, "description": "Build the number.", "workingLatex": "2^4 \\times 3^2", "explanation": "These are the smallest even powers that still meet the divisibility requirement.", "diagram": null },
        { "stepNumber": 7, "description": "Evaluate.", "workingLatex": "16 \\times 9 = 144", "explanation": "Multiplying gives the smallest qualifying square.", "diagram": null },
        { "stepNumber": 8, "description": "Check the conditions.", "workingLatex": "144 = 12^2, \\ 144 \\div 8 = 18, \\ 144 \\div 12 = 12", "explanation": "$144$ is a perfect square and divides exactly by both $8$ and $12$, confirming it is the smallest such square.", "diagram": null }
      ],
      "finalAnswer": "$144$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["prime factors", "square numbers", "cube numbers"],
    "questionText": "Express $675$ as a product of prime factors and hence decide whether $675$ is a perfect square, a perfect cube, or neither. Justify your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Start the factor tree.", "workingLatex": "675 = 27 \\times 25", "explanation": "We split $675$ into $27 \\times 25$, both of which break down easily.", "diagram": null },
        { "stepNumber": 2, "description": "Break down each branch.", "workingLatex": "27 = 3^3, \\ 25 = 5^2", "explanation": "$27$ is three $3$'s and $25$ is two $5$'s.", "diagram": null },
        { "stepNumber": 3, "description": "Write the factorisation.", "workingLatex": "675 = 3^3 \\times 5^2", "explanation": "Combining the branches gives $675$ in index form.", "diagram": null },
        { "stepNumber": 4, "description": "Recall the square test.", "workingLatex": "\\text{square} \\iff \\text{all powers even}", "explanation": "A perfect square needs every prime exponent to be even.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the square test.", "workingLatex": "3^3 \\ \\text{(odd)}", "explanation": "The power of $3$ is $3$, which is odd, so $675$ is not a perfect square.", "diagram": null },
        { "stepNumber": 6, "description": "Recall the cube test.", "workingLatex": "\\text{cube} \\iff \\text{all powers multiples of } 3", "explanation": "A perfect cube needs every prime exponent to be a multiple of $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Apply the cube test.", "workingLatex": "5^2 \\ \\text{(not a multiple of 3)}", "explanation": "The power of $5$ is $2$, which is not a multiple of $3$, so $675$ is not a perfect cube.", "diagram": null },
        { "stepNumber": 8, "description": "Conclude.", "workingLatex": "675 = 3^3 \\times 5^2 \\Rightarrow \\text{neither}", "explanation": "Since the powers are neither all even nor all multiples of $3$, $675$ is neither a perfect square nor a perfect cube.", "diagram": null }
      ],
      "finalAnswer": "$675 = 3^3 \\times 5^2, \\text{ so it is neither a perfect square nor a perfect cube}$"
    }
  },
  {
    "id": "gcse.number.prime-factorisation.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Prime factorisation",
    "subtopicId": "gcse.number.prime-factorisation",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["prime factors", "cube numbers", "problem solving"],
    "questionText": "A number is given by $N = 2^3 \\times 3^2 \\times 5$. Find the smallest positive integer $k$ such that $kN$ is a perfect cube, and state $kN$ in index form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write down N.", "workingLatex": "N = 2^3 \\times 3^2 \\times 5", "explanation": "We start from the given prime factorisation to inspect each power.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the cube condition.", "workingLatex": "\\text{cube} \\iff \\text{every prime power is a multiple of } 3", "explanation": "Cubing triples each exponent, so a perfect cube has all exponents that are multiples of $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the prime $2$.", "workingLatex": "2^3 \\ \\text{(multiple of 3)}", "explanation": "The power of $2$ is $3$, already a multiple of $3$, so no extra $2$'s are needed.", "diagram": null },
        { "stepNumber": 4, "description": "Check the prime $3$.", "workingLatex": "3^2 \\to 3^3 \\ \\text{needs } 3^1", "explanation": "The power of $3$ is $2$; the next multiple of $3$ is $3$, so we need one more factor of $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the prime $5$.", "workingLatex": "5^1 \\to 5^3 \\ \\text{needs } 5^2", "explanation": "The power of $5$ is $1$; the next multiple of $3$ is $3$, so we need two more factors of $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Form the multiplier.", "workingLatex": "k = 3^1 \\times 5^2 = 3 \\times 25 = 75", "explanation": "Multiplying the missing prime factors together gives the smallest $k$ that fixes every exponent.", "diagram": null },
        { "stepNumber": 7, "description": "Form the cube.", "workingLatex": "kN = 2^3 \\times 3^3 \\times 5^3", "explanation": "Every exponent is now $3$, so $kN$ is a perfect cube.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm the cube root.", "workingLatex": "\\sqrt[3]{kN} = 2 \\times 3 \\times 5 = 30, \\ kN = 27000", "explanation": "Dividing each exponent by $3$ gives the root $30$, so $kN = 30^3 = 27000$, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$k = 75, \\ kN = 2^3 \\times 3^3 \\times 5^3$"
    }
  }
];
