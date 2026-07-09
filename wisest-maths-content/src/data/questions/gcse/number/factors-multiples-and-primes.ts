import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.factors-multiples.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 18 \\text{ if } 18 \\div a \\text{ is whole}", "explanation": "A factor divides the number exactly with no remainder, so we search for whole numbers that fit into $18$.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 18 = 18", "explanation": "Every number has $1$ and itself as factors, giving us the outermost pair to begin.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 9 = 18", "explanation": "$18$ is even, so $2$ divides it exactly and pairs with $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 6 = 18", "explanation": "$18 \\div 3 = 6$ with no remainder, giving another factor pair.", "diagram": null },
        { "stepNumber": 5, "description": "Check 4 and 5.", "workingLatex": "18 \\div 4,\\ 18 \\div 5 \\text{ not whole}", "explanation": "Neither $4$ nor $5$ divides $18$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "6 \\times 3 \\text{ repeats}", "explanation": "Once we reach a factor we have already found, we know the list is complete.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 3, 6, 9, 18", "explanation": "Collecting every factor from the pairs and ordering them gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 6, 9, 18$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 20 \\text{ if } 20 \\div a \\text{ is whole}", "explanation": "A factor divides the number exactly, so we look for whole numbers that go into $20$.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 20 = 20", "explanation": "$1$ and the number itself are always factors, giving the first pair.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 10 = 20", "explanation": "$20$ is even, so $2$ divides it and pairs with $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 4.", "workingLatex": "4 \\times 5 = 20", "explanation": "$20 \\div 4 = 5$ exactly, giving another factor pair.", "diagram": null },
        { "stepNumber": 5, "description": "Check 3.", "workingLatex": "20 \\div 3 \\text{ not whole}", "explanation": "$3$ leaves a remainder, so it is not a factor of $20$.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "5 \\times 4 \\text{ repeats}", "explanation": "We have reached factors we already have, so the search is finished.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 4, 5, 10, 20", "explanation": "Writing all the factors from the pairs in order gives the complete list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 5, 10, 20$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $24$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 24 \\text{ if } 24 \\div a \\text{ is whole}", "explanation": "Factors divide a number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 24 = 24", "explanation": "$1$ and $24$ are always factors, giving the outer pair.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 12 = 24", "explanation": "$24$ is even, so $2$ pairs with $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 8 = 24", "explanation": "$24 \\div 3 = 8$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Try 4.", "workingLatex": "4 \\times 6 = 24", "explanation": "$24 \\div 4 = 6$ exactly, giving a further pair.", "diagram": null },
        { "stepNumber": 6, "description": "Check 5.", "workingLatex": "24 \\div 5 \\text{ not whole}", "explanation": "$5$ leaves a remainder, so it is not a factor.", "diagram": null },
        { "stepNumber": 7, "description": "Notice the pairs meet.", "workingLatex": "6 \\times 4 \\text{ repeats}", "explanation": "The next factor $6$ repeats a pair we have, so we have found them all.", "diagram": null },
        { "stepNumber": 8, "description": "List the factors in order.", "workingLatex": "1, 2, 3, 4, 6, 8, 12, 24", "explanation": "Ordering all the factors from the pairs gives the complete list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 4, 6, 8, 12, 24$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $30$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 30 \\text{ if } 30 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in turn.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 30 = 30", "explanation": "$1$ and $30$ are always factors, giving the outer pair.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 15 = 30", "explanation": "$30$ is even, so $2$ pairs with $15$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 10 = 30", "explanation": "$30 \\div 3 = 10$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Try 5.", "workingLatex": "5 \\times 6 = 30", "explanation": "$30 \\div 5 = 6$ exactly, giving a further pair.", "diagram": null },
        { "stepNumber": 6, "description": "Check 4.", "workingLatex": "30 \\div 4 \\text{ not whole}", "explanation": "$4$ leaves a remainder, so it is not a factor.", "diagram": null },
        { "stepNumber": 7, "description": "Notice the pairs meet.", "workingLatex": "6 \\times 5 \\text{ repeats}", "explanation": "$6$ repeats the pair with $5$, so the list is complete.", "diagram": null },
        { "stepNumber": 8, "description": "List the factors in order.", "workingLatex": "1, 2, 3, 5, 6, 10, 15, 30", "explanation": "Ordering all the factors gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 5, 6, 10, 15, 30$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 16 \\text{ if } 16 \\div a \\text{ is whole}", "explanation": "A factor divides the number exactly, so we look for whole numbers that go into $16$.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 16 = 16", "explanation": "$1$ and $16$ are always factors, giving the outer pair.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 8 = 16", "explanation": "$16$ is even, so $2$ pairs with $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 4.", "workingLatex": "4 \\times 4 = 16", "explanation": "$16 \\div 4 = 4$, so $4$ pairs with itself — this happens because $16$ is a square number.", "diagram": null },
        { "stepNumber": 5, "description": "Check 3.", "workingLatex": "16 \\div 3 \\text{ not whole}", "explanation": "$3$ leaves a remainder, so it is not a factor.", "diagram": null },
        { "stepNumber": 6, "description": "Stop at the repeated factor.", "workingLatex": "4 \\text{ pairs with itself}", "explanation": "Since $4 \\times 4$ meets in the middle, we have found every factor.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 4, 8, 16", "explanation": "The middle factor $4$ appears only once, giving five factors in total.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 8, 16$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $17$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors, } 1 \\text{ and itself}", "explanation": "A prime number has precisely two different factors, so we must check whether anything other than $1$ and $17$ divides it.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "17 \\div 2 = 8.5", "explanation": "$17$ is odd, so $2$ does not divide it exactly.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "17 \\div 3 = 5.67\\ldots", "explanation": "The digits of $17$ add to $8$, which is not a multiple of $3$, so $3$ is not a factor.", "diagram": null },
        { "stepNumber": 4, "description": "Test dividing by 4.", "workingLatex": "17 \\div 4 = 4.25", "explanation": "$4$ does not divide $17$ exactly, so it is not a factor.", "diagram": null },
        { "stepNumber": 5, "description": "Decide when to stop.", "workingLatex": "4^2 = 16 < 17 < 25 = 5^2", "explanation": "We only need to test up to the square root of $17$ (just over $4$), because a larger factor would pair with a smaller one we would already have found.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude.", "workingLatex": "\\text{factors of } 17 = 1, 17", "explanation": "No number between $2$ and $4$ divides $17$, so its only factors are $1$ and itself.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "17 \\text{ is prime}", "explanation": "Having exactly two factors means $17$ is a prime number.", "diagram": null }
      ],
      "finalAnswer": "$17 \\text{ is prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $21$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors, } 1 \\text{ and itself}", "explanation": "A prime has only two factors, so if we can find a third factor the number is not prime.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "21 \\div 2 = 10.5", "explanation": "$21$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "2 + 1 = 3", "explanation": "The digits of $21$ add to $3$, a multiple of $3$, which tells us $3$ divides $21$.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm the division.", "workingLatex": "21 \\div 3 = 7", "explanation": "$3$ goes into $21$ exactly $7$ times, so $3$ and $7$ are factors of $21$.", "diagram": null },
        { "stepNumber": 5, "description": "Count the factors found.", "workingLatex": "1, 3, 7, 21", "explanation": "As well as $1$ and $21$, we have found $3$ and $7$, so $21$ has four factors.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the prime rule.", "workingLatex": "4 \\text{ factors} > 2", "explanation": "Having more than two factors breaks the rule for a prime number.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "21 \\text{ is not prime}", "explanation": "Because $21 = 3 \\times 7$, it is a composite number, not a prime.", "diagram": null }
      ],
      "finalAnswer": "$21 \\text{ is not prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $29$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors, } 1 \\text{ and itself}", "explanation": "We check whether any number other than $1$ and $29$ divides it exactly.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "29 \\div 2 = 14.5", "explanation": "$29$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "2 + 9 = 11", "explanation": "The digits add to $11$, which is not a multiple of $3$, so $3$ is not a factor.", "diagram": null },
        { "stepNumber": 4, "description": "Test dividing by 5.", "workingLatex": "29 \\text{ ends in } 9", "explanation": "Multiples of $5$ end in $0$ or $5$, so $5$ does not divide $29$.", "diagram": null },
        { "stepNumber": 5, "description": "Decide when to stop.", "workingLatex": "5^2 = 25 < 29 < 36 = 6^2", "explanation": "We only need to test primes up to about $5$ (the square root of $29$), because a bigger factor would already have a smaller partner.", "diagram": null },
        { "stepNumber": 6, "description": "Conclude the factor list.", "workingLatex": "\\text{factors of } 29 = 1, 29", "explanation": "None of $2$, $3$ or $5$ divide $29$, so it has only two factors.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "29 \\text{ is prime}", "explanation": "Exactly two factors means $29$ is prime.", "diagram": null }
      ],
      "finalAnswer": "$29 \\text{ is prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $51$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors}", "explanation": "If we can find a factor other than $1$ and $51$, the number is not prime.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "51 \\div 2 = 25.5", "explanation": "$51$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "5 + 1 = 6", "explanation": "The digits of $51$ add to $6$, a multiple of $3$, so $3$ divides $51$.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm the division.", "workingLatex": "51 \\div 3 = 17", "explanation": "$3$ goes into $51$ exactly $17$ times, so $3$ and $17$ are factors.", "diagram": null },
        { "stepNumber": 5, "description": "List the factors found.", "workingLatex": "1, 3, 17, 51", "explanation": "Along with $1$ and $51$ this gives four factors in total.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the prime rule.", "workingLatex": "4 > 2", "explanation": "More than two factors means the number is composite.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "51 = 3 \\times 17 \\text{, not prime}", "explanation": "Since $51$ splits into $3 \\times 17$, it is not a prime number even though it looks like it might be.", "diagram": null }
      ],
      "finalAnswer": "$51 \\text{ is not prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiples"],
    "questionText": "Write down the first five multiples of $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a multiple is.", "workingLatex": "\\text{multiple of } 6 = 6 \\times \\text{a whole number}", "explanation": "The multiples of a number are what you get in its times-table, so we multiply $6$ by $1, 2, 3, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "First multiple.", "workingLatex": "6 \\times 1 = 6", "explanation": "Multiplying by $1$ gives the number itself, the first multiple.", "diagram": null },
        { "stepNumber": 3, "description": "Second multiple.", "workingLatex": "6 \\times 2 = 12", "explanation": "Doubling $6$ gives the second multiple.", "diagram": null },
        { "stepNumber": 4, "description": "Third multiple.", "workingLatex": "6 \\times 3 = 18", "explanation": "Adding another $6$ (or multiplying by $3$) gives $18$.", "diagram": null },
        { "stepNumber": 5, "description": "Fourth multiple.", "workingLatex": "6 \\times 4 = 24", "explanation": "Each new multiple is just $6$ more than the last one.", "diagram": null },
        { "stepNumber": 6, "description": "Fifth multiple.", "workingLatex": "6 \\times 5 = 30", "explanation": "Multiplying by $5$ gives the fifth multiple.", "diagram": null },
        { "stepNumber": 7, "description": "List the multiples.", "workingLatex": "6, 12, 18, 24, 30", "explanation": "These are the first five numbers in the six times-table.", "diagram": null }
      ],
      "finalAnswer": "$6, 12, 18, 24, 30$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiples"],
    "questionText": "Write down the first five multiples of $7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a multiple is.", "workingLatex": "\\text{multiple of } 7 = 7 \\times \\text{a whole number}", "explanation": "Multiples of $7$ come from the seven times-table, so we multiply $7$ by $1, 2, 3, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "First multiple.", "workingLatex": "7 \\times 1 = 7", "explanation": "Multiplying by $1$ gives the number itself.", "diagram": null },
        { "stepNumber": 3, "description": "Second multiple.", "workingLatex": "7 \\times 2 = 14", "explanation": "Doubling $7$ gives $14$.", "diagram": null },
        { "stepNumber": 4, "description": "Third multiple.", "workingLatex": "7 \\times 3 = 21", "explanation": "Adding another $7$ gives $21$.", "diagram": null },
        { "stepNumber": 5, "description": "Fourth multiple.", "workingLatex": "7 \\times 4 = 28", "explanation": "Each step increases the total by $7$.", "diagram": null },
        { "stepNumber": 6, "description": "Fifth multiple.", "workingLatex": "7 \\times 5 = 35", "explanation": "Multiplying by $5$ gives the fifth multiple.", "diagram": null },
        { "stepNumber": 7, "description": "List the multiples.", "workingLatex": "7, 14, 21, 28, 35", "explanation": "These are the first five numbers in the seven times-table.", "diagram": null }
      ],
      "finalAnswer": "$7, 14, 21, 28, 35$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiples"],
    "questionText": "Write down the first four multiples of $9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a multiple is.", "workingLatex": "\\text{multiple of } 9 = 9 \\times \\text{a whole number}", "explanation": "Multiples of $9$ are the numbers in the nine times-table.", "diagram": null },
        { "stepNumber": 2, "description": "First multiple.", "workingLatex": "9 \\times 1 = 9", "explanation": "Multiplying by $1$ gives the number itself.", "diagram": null },
        { "stepNumber": 3, "description": "Second multiple.", "workingLatex": "9 \\times 2 = 18", "explanation": "Doubling $9$ gives $18$.", "diagram": null },
        { "stepNumber": 4, "description": "Third multiple.", "workingLatex": "9 \\times 3 = 27", "explanation": "Adding another $9$ gives $27$.", "diagram": null },
        { "stepNumber": 5, "description": "Fourth multiple.", "workingLatex": "9 \\times 4 = 36", "explanation": "Multiplying by $4$ gives the fourth multiple.", "diagram": null },
        { "stepNumber": 6, "description": "Check the pattern.", "workingLatex": "9, 18, 27, 36 \\to \\text{digits sum to } 9", "explanation": "A useful check: the digits of each multiple of $9$ add up to $9$, confirming they are correct.", "diagram": null },
        { "stepNumber": 7, "description": "List the multiples.", "workingLatex": "9, 18, 27, 36", "explanation": "These are the first four numbers in the nine times-table.", "diagram": null }
      ],
      "finalAnswer": "$9, 18, 27, 36$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factor pairs of $36$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor pair is.", "workingLatex": "a \\times b = 36", "explanation": "A factor pair is two whole numbers that multiply to give the target number, so we look for pairs multiplying to $36$.", "diagram": null },
        { "stepNumber": 2, "description": "Start with 1.", "workingLatex": "1 \\times 36 = 36", "explanation": "$1$ always pairs with the number itself.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 18 = 36", "explanation": "$36$ is even, so $2$ pairs with $18$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 12 = 36", "explanation": "$36 \\div 3 = 12$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Try 4.", "workingLatex": "4 \\times 9 = 36", "explanation": "$36 \\div 4 = 9$ exactly, giving a further pair.", "diagram": null },
        { "stepNumber": 6, "description": "Try 6.", "workingLatex": "6 \\times 6 = 36", "explanation": "$6$ pairs with itself because $36$ is a square number.", "diagram": null },
        { "stepNumber": 7, "description": "Check 5.", "workingLatex": "36 \\div 5 \\text{ not whole}", "explanation": "$5$ leaves a remainder, so there is no pair with $5$.", "diagram": null },
        { "stepNumber": 8, "description": "List all factor pairs.", "workingLatex": "1 \\times 36,\\ 2 \\times 18,\\ 3 \\times 12,\\ 4 \\times 9,\\ 6 \\times 6", "explanation": "The pairs meet at $6 \\times 6$, so these five pairs are complete.", "diagram": null }
      ],
      "finalAnswer": "$1 \\times 36,\\ 2 \\times 18,\\ 3 \\times 12,\\ 4 \\times 9,\\ 6 \\times 6$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $40$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 40 \\text{ if } 40 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 40 = 40", "explanation": "$1$ and $40$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 20 = 40", "explanation": "$40$ is even, so $2$ pairs with $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 4.", "workingLatex": "4 \\times 10 = 40", "explanation": "$40 \\div 4 = 10$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Try 5.", "workingLatex": "5 \\times 8 = 40", "explanation": "$40 \\div 5 = 8$ exactly, giving a further pair.", "diagram": null },
        { "stepNumber": 6, "description": "Check 3 and 6.", "workingLatex": "40 \\div 3,\\ 40 \\div 6 \\text{ not whole}", "explanation": "Neither $3$ nor $6$ divides $40$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 7, "description": "Notice the pairs meet.", "workingLatex": "8 \\times 5 \\text{ repeats}", "explanation": "$8$ repeats a pair we already have, so the list is complete.", "diagram": null },
        { "stepNumber": 8, "description": "List the factors in order.", "workingLatex": "1, 2, 4, 5, 8, 10, 20, 40", "explanation": "Ordering the factors from the pairs gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 5, 8, 10, 20, 40$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $39$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors}", "explanation": "If a third factor exists, the number cannot be prime.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "39 \\div 2 = 19.5", "explanation": "$39$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "3 + 9 = 12", "explanation": "The digits add to $12$, a multiple of $3$, so $3$ divides $39$.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm the division.", "workingLatex": "39 \\div 3 = 13", "explanation": "$3$ goes into $39$ exactly $13$ times, so $3$ and $13$ are factors.", "diagram": null },
        { "stepNumber": 5, "description": "List the factors found.", "workingLatex": "1, 3, 13, 39", "explanation": "This gives four factors, more than a prime is allowed.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the prime rule.", "workingLatex": "4 > 2", "explanation": "More than two factors means the number is composite.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "39 = 3 \\times 13 \\text{, not prime}", "explanation": "Because $39$ factorises as $3 \\times 13$, it is not prime.", "diagram": null }
      ],
      "finalAnswer": "$39 \\text{ is not prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiples"],
    "questionText": "Write down the first five multiples of $8$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a multiple is.", "workingLatex": "\\text{multiple of } 8 = 8 \\times \\text{a whole number}", "explanation": "Multiples of $8$ are the numbers in the eight times-table.", "diagram": null },
        { "stepNumber": 2, "description": "First multiple.", "workingLatex": "8 \\times 1 = 8", "explanation": "Multiplying by $1$ gives the number itself.", "diagram": null },
        { "stepNumber": 3, "description": "Second multiple.", "workingLatex": "8 \\times 2 = 16", "explanation": "Doubling $8$ gives $16$.", "diagram": null },
        { "stepNumber": 4, "description": "Third multiple.", "workingLatex": "8 \\times 3 = 24", "explanation": "Adding another $8$ gives $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Fourth multiple.", "workingLatex": "8 \\times 4 = 32", "explanation": "Each new multiple is $8$ more than the last.", "diagram": null },
        { "stepNumber": 6, "description": "Fifth multiple.", "workingLatex": "8 \\times 5 = 40", "explanation": "Multiplying by $5$ gives the fifth multiple.", "diagram": null },
        { "stepNumber": 7, "description": "List the multiples.", "workingLatex": "8, 16, 24, 32, 40", "explanation": "These are the first five numbers in the eight times-table.", "diagram": null }
      ],
      "finalAnswer": "$8, 16, 24, 32, 40$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Write down all the prime numbers between $10$ and $20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the numbers to check.", "workingLatex": "11, 12, 13, 14, 15, 16, 17, 18, 19", "explanation": "We consider each whole number strictly between $10$ and $20$ and test it for primality.", "diagram": null },
        { "stepNumber": 2, "description": "Remove the even numbers.", "workingLatex": "12, 14, 16, 18 \\text{ divisible by } 2", "explanation": "Every even number above $2$ has $2$ as a factor, so none of these can be prime.", "diagram": null },
        { "stepNumber": 3, "description": "Check the multiples of 3.", "workingLatex": "15 = 3 \\times 5", "explanation": "$15$ has digit sum $6$, so $3$ divides it — it is not prime.", "diagram": null },
        { "stepNumber": 4, "description": "Check 11.", "workingLatex": "11 \\to \\text{factors } 1, 11", "explanation": "$11$ is not divisible by $2$ or $3$, so it is prime.", "diagram": null },
        { "stepNumber": 5, "description": "Check 13.", "workingLatex": "13 \\to \\text{factors } 1, 13", "explanation": "$13$ has no factors other than $1$ and itself, so it is prime.", "diagram": null },
        { "stepNumber": 6, "description": "Check 17 and 19.", "workingLatex": "17, 19 \\to \\text{each has only two factors}", "explanation": "Neither $17$ nor $19$ is divisible by $2$, $3$ or any smaller prime, so both are prime.", "diagram": null },
        { "stepNumber": 7, "description": "List the primes.", "workingLatex": "11, 13, 17, 19", "explanation": "These are the only numbers between $10$ and $20$ with exactly two factors.", "diagram": null }
      ],
      "finalAnswer": "$11, 13, 17, 19$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $28$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 28 \\text{ if } 28 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 28 = 28", "explanation": "$1$ and $28$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 14 = 28", "explanation": "$28$ is even, so $2$ pairs with $14$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 4.", "workingLatex": "4 \\times 7 = 28", "explanation": "$28 \\div 4 = 7$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Check 3, 5 and 6.", "workingLatex": "28 \\div 3,\\ 28 \\div 5,\\ 28 \\div 6 \\text{ not whole}", "explanation": "None of these divide $28$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "7 \\times 4 \\text{ repeats}", "explanation": "$7$ repeats a pair we have, so the list is complete.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 4, 7, 14, 28", "explanation": "Ordering the factors gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 7, 14, 28$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $45$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 45 \\text{ if } 45 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 45 = 45", "explanation": "$1$ and $45$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Check 2.", "workingLatex": "45 \\div 2 = 22.5", "explanation": "$45$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 15 = 45", "explanation": "Digit sum $9$ is a multiple of $3$, so $3$ divides $45$ and pairs with $15$.", "diagram": null },
        { "stepNumber": 5, "description": "Try 5.", "workingLatex": "5 \\times 9 = 45", "explanation": "$45$ ends in $5$, so $5$ divides it and pairs with $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Check 6, 7 and 8.", "workingLatex": "45 \\div 6,\\ 45 \\div 7,\\ 45 \\div 8 \\text{ not whole}", "explanation": "None of these divide $45$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 7, "description": "Notice the pairs meet.", "workingLatex": "9 \\times 5 \\text{ repeats}", "explanation": "$9$ repeats a pair we have, so the search is finished.", "diagram": null },
        { "stepNumber": 8, "description": "List the factors in order.", "workingLatex": "1, 3, 5, 9, 15, 45", "explanation": "Ordering the factors gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 3, 5, 9, 15, 45$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["square numbers"],
    "questionText": "Is $49$ a square number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a square number is.", "workingLatex": "\\text{square number} = n \\times n", "explanation": "A square number is the result of multiplying a whole number by itself, so we look for such a number.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate the size.", "workingLatex": "6^2 = 36,\\ 7^2 = 49", "explanation": "We test whole numbers near the size of $49$; $6$ squared is $36$ and $7$ squared is $49$.", "diagram": null },
        { "stepNumber": 3, "description": "Test 7.", "workingLatex": "7 \\times 7 = 49", "explanation": "Multiplying $7$ by itself gives exactly $49$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the result.", "workingLatex": "49 = 7^2", "explanation": "Because $49$ equals a whole number squared, it fits the definition of a square number.", "diagram": null },
        { "stepNumber": 5, "description": "Link to factors.", "workingLatex": "\\sqrt{49} = 7", "explanation": "A square number has a whole-number square root; here the square root is $7$.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "49 \\text{ is a square number}", "explanation": "Since $49 = 7^2$, it is indeed a square number.", "diagram": null }
      ],
      "finalAnswer": "$49 = 7^2 \\text{, so yes it is a square number}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["square numbers"],
    "questionText": "Write down the first five square numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a square number is.", "workingLatex": "\\text{square number} = n \\times n", "explanation": "Square numbers come from multiplying a whole number by itself, so we square $1, 2, 3, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Square 1.", "workingLatex": "1 \\times 1 = 1", "explanation": "The first square number is $1^2 = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Square 2.", "workingLatex": "2 \\times 2 = 4", "explanation": "The second square number is $2^2 = 4$.", "diagram": null },
        { "stepNumber": 4, "description": "Square 3.", "workingLatex": "3 \\times 3 = 9", "explanation": "The third square number is $3^2 = 9$.", "diagram": null },
        { "stepNumber": 5, "description": "Square 4.", "workingLatex": "4 \\times 4 = 16", "explanation": "The fourth square number is $4^2 = 16$.", "diagram": null },
        { "stepNumber": 6, "description": "Square 5.", "workingLatex": "5 \\times 5 = 25", "explanation": "The fifth square number is $5^2 = 25$.", "diagram": null },
        { "stepNumber": 7, "description": "List the square numbers.", "workingLatex": "1, 4, 9, 16, 25", "explanation": "These are the first five numbers you get by squaring whole numbers.", "diagram": null }
      ],
      "finalAnswer": "$1, 4, 9, 16, 25$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["cube numbers"],
    "questionText": "Write down the first five cube numbers.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a cube number is.", "workingLatex": "\\text{cube number} = n \\times n \\times n", "explanation": "A cube number is a whole number multiplied by itself three times, so we cube $1, 2, 3, \\ldots$", "diagram": null },
        { "stepNumber": 2, "description": "Cube 1.", "workingLatex": "1 \\times 1 \\times 1 = 1", "explanation": "The first cube number is $1^3 = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Cube 2.", "workingLatex": "2 \\times 2 \\times 2 = 8", "explanation": "The second cube number is $2^3 = 8$.", "diagram": null },
        { "stepNumber": 4, "description": "Cube 3.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "The third cube number is $3^3 = 27$.", "diagram": null },
        { "stepNumber": 5, "description": "Cube 4.", "workingLatex": "4 \\times 4 \\times 4 = 64", "explanation": "The fourth cube number is $4^3 = 64$.", "diagram": null },
        { "stepNumber": 6, "description": "Cube 5.", "workingLatex": "5 \\times 5 \\times 5 = 125", "explanation": "The fifth cube number is $5^3 = 125$.", "diagram": null },
        { "stepNumber": 7, "description": "List the cube numbers.", "workingLatex": "1, 8, 27, 64, 125", "explanation": "These are the first five numbers you get by cubing whole numbers.", "diagram": null }
      ],
      "finalAnswer": "$1, 8, 27, 64, 125$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["square numbers"],
    "questionText": "Is $100$ a square number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a square number is.", "workingLatex": "\\text{square number} = n \\times n", "explanation": "A square number equals a whole number multiplied by itself.", "diagram": null },
        { "stepNumber": 2, "description": "Estimate the square root.", "workingLatex": "9^2 = 81,\\ 10^2 = ?", "explanation": "$100$ is a little more than $81$, so we test the next whole number, $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Test 10.", "workingLatex": "10 \\times 10 = 100", "explanation": "Multiplying $10$ by itself gives exactly $100$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the result.", "workingLatex": "100 = 10^2", "explanation": "Because $100$ is a whole number squared, it is a square number.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm with the square root.", "workingLatex": "\\sqrt{100} = 10", "explanation": "The square root is the whole number $10$, which confirms our conclusion.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "100 \\text{ is a square number}", "explanation": "Since $100 = 10^2$, it is a square number.", "diagram": null }
      ],
      "finalAnswer": "$100 = 10^2 \\text{, so yes it is a square number}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["cube numbers"],
    "questionText": "Is $27$ a cube number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a cube number is.", "workingLatex": "\\text{cube number} = n \\times n \\times n", "explanation": "A cube number is a whole number multiplied by itself three times.", "diagram": null },
        { "stepNumber": 2, "description": "Try small whole numbers.", "workingLatex": "2^3 = 8,\\ 3^3 = ?", "explanation": "$2$ cubed is only $8$, which is too small, so we test $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Cube 3.", "workingLatex": "3 \\times 3 \\times 3 = 27", "explanation": "Multiplying $3$ by itself three times gives exactly $27$.", "diagram": null },
        { "stepNumber": 4, "description": "Interpret the result.", "workingLatex": "27 = 3^3", "explanation": "Because $27$ equals a whole number cubed, it is a cube number.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm with the cube root.", "workingLatex": "\\sqrt[3]{27} = 3", "explanation": "The cube root of $27$ is the whole number $3$, confirming the result.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "27 \\text{ is a cube number}", "explanation": "Since $27 = 3^3$, it is a cube number.", "diagram": null }
      ],
      "finalAnswer": "$27 = 3^3 \\text{, so yes it is a cube number}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["common factors"],
    "questionText": "Find all the common factors of $12$ and $18$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand common factors.", "workingLatex": "\\text{common factor divides both numbers}", "explanation": "A common factor is a number that divides both $12$ and $18$ exactly, so we first list the factors of each.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 12.", "workingLatex": "12: 1, 2, 3, 4, 6, 12", "explanation": "These are all the whole numbers that divide $12$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 18.", "workingLatex": "18: 1, 2, 3, 6, 9, 18", "explanation": "These are all the whole numbers that divide $18$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the two lists.", "workingLatex": "\\text{look for numbers in both}", "explanation": "We scan both lists and pick out any number that appears in each.", "diagram": null },
        { "stepNumber": 5, "description": "Pick the shared factors.", "workingLatex": "1, 2, 3, 6", "explanation": "$1$, $2$, $3$ and $6$ all appear in both lists, so they are the common factors.", "diagram": null },
        { "stepNumber": 6, "description": "Check the others are not shared.", "workingLatex": "4, 12 \\notin 18; \\ 9, 18 \\notin 12", "explanation": "The remaining factors appear in only one list, so they are not common.", "diagram": null },
        { "stepNumber": 7, "description": "State the common factors.", "workingLatex": "1, 2, 3, 6", "explanation": "These four numbers divide both $12$ and $18$ exactly.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 6$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["common factors"],
    "questionText": "Find all the common factors of $8$ and $20$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand common factors.", "workingLatex": "\\text{common factor divides both numbers}", "explanation": "A common factor divides both $8$ and $20$ exactly, so we begin by listing the factors of each.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 8.", "workingLatex": "8: 1, 2, 4, 8", "explanation": "These are all the whole numbers that divide $8$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 20.", "workingLatex": "20: 1, 2, 4, 5, 10, 20", "explanation": "These are all the whole numbers that divide $20$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the two lists.", "workingLatex": "\\text{look for numbers in both}", "explanation": "We pick out any number that appears in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Pick the shared factors.", "workingLatex": "1, 2, 4", "explanation": "$1$, $2$ and $4$ appear in both lists, so they are the common factors.", "diagram": null },
        { "stepNumber": 6, "description": "Check the others are not shared.", "workingLatex": "8 \\notin 20;\\ 5, 10, 20 \\notin 8", "explanation": "The other factors appear in only one list, so they are not common.", "diagram": null },
        { "stepNumber": 7, "description": "State the common factors.", "workingLatex": "1, 2, 4", "explanation": "These three numbers divide both $8$ and $20$ exactly.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $50$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 50 \\text{ if } 50 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 50 = 50", "explanation": "$1$ and $50$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 25 = 50", "explanation": "$50$ is even, so $2$ pairs with $25$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 5.", "workingLatex": "5 \\times 10 = 50", "explanation": "$50$ ends in $0$, so $5$ divides it and pairs with $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Check 3 and 4.", "workingLatex": "50 \\div 3,\\ 50 \\div 4 \\text{ not whole}", "explanation": "Neither $3$ nor $4$ divides $50$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "10 \\times 5 \\text{ repeats}", "explanation": "$10$ repeats a pair we have, so the list is complete.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 5, 10, 25, 50", "explanation": "Ordering the factors gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 5, 10, 25, 50$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "square numbers"],
    "questionText": "List all the factors of $32$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 32 \\text{ if } 32 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 32 = 32", "explanation": "$1$ and $32$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Try 2.", "workingLatex": "2 \\times 16 = 32", "explanation": "$32$ is even, so $2$ pairs with $16$.", "diagram": null },
        { "stepNumber": 4, "description": "Try 4.", "workingLatex": "4 \\times 8 = 32", "explanation": "$32 \\div 4 = 8$ exactly, giving another pair.", "diagram": null },
        { "stepNumber": 5, "description": "Check 3, 5, 6, 7.", "workingLatex": "32 \\div 3,5,6,7 \\text{ not whole}", "explanation": "None of these divide $32$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "8 \\times 4 \\text{ repeats}", "explanation": "$8$ repeats a pair we have, so the list is complete.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 4, 8, 16, 32", "explanation": "Ordering the factors gives the full list — all powers of $2$.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 4, 8, 16, 32$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $1$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two different factors}", "explanation": "A prime number must have exactly two different factors: $1$ and the number itself.", "diagram": null },
        { "stepNumber": 2, "description": "List the factors of 1.", "workingLatex": "1: \\text{just } 1", "explanation": "The only whole number that divides $1$ is $1$ itself.", "diagram": null },
        { "stepNumber": 3, "description": "Count the factors.", "workingLatex": "\\text{factors of } 1 = \\{1\\}", "explanation": "There is only one factor, not two.", "diagram": null },
        { "stepNumber": 4, "description": "Compare with the rule.", "workingLatex": "1 \\text{ factor} \\ne 2 \\text{ factors}", "explanation": "Because $1$ has only one factor, it does not meet the requirement of exactly two.", "diagram": null },
        { "stepNumber": 5, "description": "Note the special case.", "workingLatex": "1 \\text{ and itself are the same}", "explanation": "For $1$, the two usual factors ($1$ and the number) are the same, so there is no second distinct factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the answer.", "workingLatex": "1 \\text{ is not prime}", "explanation": "By definition $1$ is not a prime number; the smallest prime is $2$.", "diagram": null }
      ],
      "finalAnswer": "$1 \\text{ is not prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Write down all the prime numbers less than $10$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "List the numbers to check.", "workingLatex": "2, 3, 4, 5, 6, 7, 8, 9", "explanation": "We test each whole number greater than $1$ and less than $10$ (recall $1$ is not prime).", "diagram": null },
        { "stepNumber": 2, "description": "Check 2.", "workingLatex": "2: 1, 2", "explanation": "$2$ has only two factors, so it is prime — the only even prime.", "diagram": null },
        { "stepNumber": 3, "description": "Check 3.", "workingLatex": "3: 1, 3", "explanation": "$3$ has only two factors, so it is prime.", "diagram": null },
        { "stepNumber": 4, "description": "Remove the even numbers.", "workingLatex": "4, 6, 8 \\text{ divisible by } 2", "explanation": "These are even and bigger than $2$, so each has $2$ as an extra factor and is not prime.", "diagram": null },
        { "stepNumber": 5, "description": "Check 5 and 7.", "workingLatex": "5: 1, 5;\\ 7: 1, 7", "explanation": "Both have exactly two factors, so both are prime.", "diagram": null },
        { "stepNumber": 6, "description": "Check 9.", "workingLatex": "9 = 3 \\times 3", "explanation": "$9$ has $3$ as a factor, so it is not prime.", "diagram": null },
        { "stepNumber": 7, "description": "List the primes.", "workingLatex": "2, 3, 5, 7", "explanation": "These are the only numbers below $10$ with exactly two factors.", "diagram": null }
      ],
      "finalAnswer": "$2, 3, 5, 7$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["multiples"],
    "questionText": "Write down the first five multiples of $12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a multiple is.", "workingLatex": "\\text{multiple of } 12 = 12 \\times \\text{a whole number}", "explanation": "Multiples of $12$ are the numbers in the twelve times-table.", "diagram": null },
        { "stepNumber": 2, "description": "First multiple.", "workingLatex": "12 \\times 1 = 12", "explanation": "Multiplying by $1$ gives the number itself.", "diagram": null },
        { "stepNumber": 3, "description": "Second multiple.", "workingLatex": "12 \\times 2 = 24", "explanation": "Doubling $12$ gives $24$.", "diagram": null },
        { "stepNumber": 4, "description": "Third multiple.", "workingLatex": "12 \\times 3 = 36", "explanation": "Adding another $12$ gives $36$.", "diagram": null },
        { "stepNumber": 5, "description": "Fourth multiple.", "workingLatex": "12 \\times 4 = 48", "explanation": "Each new multiple is $12$ more than the last.", "diagram": null },
        { "stepNumber": 6, "description": "Fifth multiple.", "workingLatex": "12 \\times 5 = 60", "explanation": "Multiplying by $5$ gives the fifth multiple.", "diagram": null },
        { "stepNumber": 7, "description": "List the multiples.", "workingLatex": "12, 24, 36, 48, 60", "explanation": "These are the first five numbers in the twelve times-table.", "diagram": null }
      ],
      "finalAnswer": "$12, 24, 36, 48, 60$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["primes"],
    "questionText": "Is $63$ a prime number? Explain your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the definition of prime.", "workingLatex": "\\text{prime: exactly two factors}", "explanation": "If we find a factor other than $1$ and $63$, it is not prime.", "diagram": null },
        { "stepNumber": 2, "description": "Test dividing by 2.", "workingLatex": "63 \\div 2 = 31.5", "explanation": "$63$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 3, "description": "Test dividing by 3.", "workingLatex": "6 + 3 = 9", "explanation": "The digits add to $9$, a multiple of $3$, so $3$ divides $63$.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm the division.", "workingLatex": "63 \\div 3 = 21", "explanation": "$3$ goes into $63$ exactly $21$ times, so $3$ and $21$ are factors.", "diagram": null },
        { "stepNumber": 5, "description": "Note further factors.", "workingLatex": "63 = 7 \\times 9", "explanation": "We can also see $63 = 7 \\times 9$, giving even more factors.", "diagram": null },
        { "stepNumber": 6, "description": "Compare with the prime rule.", "workingLatex": "\\text{more than two factors}", "explanation": "Having several factors breaks the rule for a prime number.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "63 \\text{ is not prime}", "explanation": "Since $63 = 7 \\times 9 = 3 \\times 21$, it is composite, not prime.", "diagram": null }
      ],
      "finalAnswer": "$63 \\text{ is not prime}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $60$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 60 \\text{ if } 60 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order and record pairs.", "diagram": null },
        { "stepNumber": 2, "description": "Pairs with 1 and 2.", "workingLatex": "1 \\times 60,\\ 2 \\times 30", "explanation": "$1$ pairs with $60$, and since $60$ is even, $2$ pairs with $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Pairs with 3 and 4.", "workingLatex": "3 \\times 20,\\ 4 \\times 15", "explanation": "Digit sum $6$ means $3$ divides $60$; and $60 \\div 4 = 15$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Pairs with 5 and 6.", "workingLatex": "5 \\times 12,\\ 6 \\times 10", "explanation": "$60$ ends in $0$ so $5$ divides it, and $6$ pairs with $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Check 7, 8, 9.", "workingLatex": "60 \\div 7, 8, 9 \\text{ not whole}", "explanation": "None of these divide $60$ exactly, so they are not factors.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "10 \\times 6 \\text{ repeats}", "explanation": "$10$ repeats the pair with $6$, so we have found all factors.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60", "explanation": "Collecting both numbers from each pair and ordering them gives all twelve factors.", "diagram": null }
      ],
      "finalAnswer": "$1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "expression",
    "tags": ["factors", "factor pairs"],
    "questionText": "List all the factors of $15$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what a factor is.", "workingLatex": "a \\text{ is a factor of } 15 \\text{ if } 15 \\div a \\text{ is whole}", "explanation": "Factors divide the number exactly, so we test whole numbers in order.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the smallest pair.", "workingLatex": "1 \\times 15 = 15", "explanation": "$1$ and $15$ are always factors.", "diagram": null },
        { "stepNumber": 3, "description": "Check 2.", "workingLatex": "15 \\div 2 = 7.5", "explanation": "$15$ is odd, so $2$ is not a factor.", "diagram": null },
        { "stepNumber": 4, "description": "Try 3.", "workingLatex": "3 \\times 5 = 15", "explanation": "Digit sum $6$ is a multiple of $3$, so $3$ divides $15$ and pairs with $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Check 4.", "workingLatex": "15 \\div 4 = 3.75", "explanation": "$4$ leaves a remainder, so it is not a factor.", "diagram": null },
        { "stepNumber": 6, "description": "Notice the pairs meet.", "workingLatex": "5 \\times 3 \\text{ repeats}", "explanation": "$5$ repeats the pair with $3$, so the list is complete.", "diagram": null },
        { "stepNumber": 7, "description": "List the factors in order.", "workingLatex": "1, 3, 5, 15", "explanation": "Ordering the factors gives the full list.", "diagram": null }
      ],
      "finalAnswer": "$1, 3, 5, 15$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["common multiples"],
    "questionText": "Write down the first two common multiples of $4$ and $6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand a common multiple.", "workingLatex": "\\text{a common multiple is in both times-tables}", "explanation": "A common multiple is a number that appears in the multiples of both $4$ and $6$, so we list each set.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 4.", "workingLatex": "4, 8, 12, 16, 20, 24, 28", "explanation": "These are the numbers in the four times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30", "explanation": "These are the numbers in the six times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for matches.", "workingLatex": "\\text{numbers in both lists}", "explanation": "We scan both lists for numbers that appear in each.", "diagram": null },
        { "stepNumber": 5, "description": "Find the first match.", "workingLatex": "12 \\in \\text{both}", "explanation": "$12$ is the smallest number in both lists, so it is the first common multiple.", "diagram": null },
        { "stepNumber": 6, "description": "Find the second match.", "workingLatex": "24 \\in \\text{both}", "explanation": "$24$ is the next number appearing in both lists.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12, 24", "explanation": "The first two common multiples of $4$ and $6$ are $12$ and $24$.", "diagram": null }
      ],
      "finalAnswer": "$12, 24$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $12$ and $18$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "The HCF is the biggest number that divides both values exactly, so we list all factors of each and pick the largest they share.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 12.", "workingLatex": "12: 1, 2, 3, 4, 6, 12", "explanation": "These are all the whole numbers dividing $12$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 18.", "workingLatex": "18: 1, 2, 3, 6, 9, 18", "explanation": "These are all the whole numbers dividing $18$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 6", "explanation": "These numbers appear in both lists, so they divide both $12$ and $18$.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max(1, 2, 3, 6) = 6", "explanation": "The HCF is the greatest of the common factors, which is $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "12 \\div 6 = 2,\\ 18 \\div 6 = 3", "explanation": "Both divisions are exact, confirming $6$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(12, 18) = 6", "explanation": "So the highest common factor of $12$ and $18$ is $6$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 6$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $24$ and $36$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list all factors of each number and choose the largest they have in common.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 24.", "workingLatex": "24: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These are all the whole numbers dividing $24$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 36.", "workingLatex": "36: 1, 2, 3, 4, 6, 9, 12, 18, 36", "explanation": "These are all the whole numbers dividing $36$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 4, 6, 12", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 12", "explanation": "The HCF is the greatest common factor, which is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "24 \\div 12 = 2,\\ 36 \\div 12 = 3", "explanation": "Both divisions are exact, confirming $12$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(24, 36) = 12", "explanation": "So the highest common factor of $24$ and $36$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 12$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $16$ and $24$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list the factors of each number and pick the greatest common one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 16.", "workingLatex": "16: 1, 2, 4, 8, 16", "explanation": "These are all the whole numbers dividing $16$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 24.", "workingLatex": "24: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These are all the whole numbers dividing $24$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 4, 8", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 8", "explanation": "The HCF is the greatest common factor, which is $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "16 \\div 8 = 2,\\ 24 \\div 8 = 3", "explanation": "Both divisions are exact, confirming $8$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(16, 24) = 8", "explanation": "So the highest common factor of $16$ and $24$ is $8$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 8$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $20$ and $30$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list all factors of each value and choose the largest shared one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 20.", "workingLatex": "20: 1, 2, 4, 5, 10, 20", "explanation": "These divide $20$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 30.", "workingLatex": "30: 1, 2, 3, 5, 6, 10, 15, 30", "explanation": "These divide $30$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 5, 10", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 10", "explanation": "The HCF is the greatest common factor, which is $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "20 \\div 10 = 2,\\ 30 \\div 10 = 3", "explanation": "Both divisions are exact, confirming $10$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(20, 30) = 10", "explanation": "So the highest common factor of $20$ and $30$ is $10$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 10$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $18$ and $27$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list the factors of each number and select the greatest common one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 18.", "workingLatex": "18: 1, 2, 3, 6, 9, 18", "explanation": "These divide $18$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 27.", "workingLatex": "27: 1, 3, 9, 27", "explanation": "These divide $27$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 3, 9", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 9", "explanation": "The HCF is the greatest common factor, which is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "18 \\div 9 = 2,\\ 27 \\div 9 = 3", "explanation": "Both divisions are exact, confirming $9$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(18, 27) = 9", "explanation": "So the highest common factor of $18$ and $27$ is $9$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 9$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $4$ and $6$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "The LCM is the smallest number that both values divide into, so we list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 4.", "workingLatex": "4, 8, 12, 16, 20, 24", "explanation": "These are the numbers in the four times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24", "explanation": "These are the numbers in the six times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "12, 24 \\in \\text{both}", "explanation": "Both $12$ and $24$ appear in the two lists, so they are common multiples.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\min(12, 24) = 12", "explanation": "The LCM is the smallest common multiple, which is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "12 \\div 4 = 3,\\ 12 \\div 6 = 2", "explanation": "Both divisions are exact, confirming $12$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(4, 6) = 12", "explanation": "So the lowest common multiple of $4$ and $6$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 12$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $6$ and $8$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each number and find the first value they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30", "explanation": "These are the numbers in the six times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 8.", "workingLatex": "8, 16, 24, 32", "explanation": "These are the numbers in the eight times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "24 \\in \\text{both}", "explanation": "$24$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 24", "explanation": "The smallest shared multiple is $24$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "24 \\div 6 = 4,\\ 24 \\div 8 = 3", "explanation": "Both divisions are exact, confirming $24$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(6, 8) = 24", "explanation": "So the lowest common multiple of $6$ and $8$ is $24$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 24$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $5$ and $7$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 5.", "workingLatex": "5, 10, 15, 20, 25, 30, 35", "explanation": "These are the numbers in the five times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 7.", "workingLatex": "7, 14, 21, 28, 35", "explanation": "These are the numbers in the seven times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "35 \\in \\text{both}", "explanation": "$35$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Note the special case.", "workingLatex": "5 \\times 7 = 35", "explanation": "Because $5$ and $7$ share no common factor, their LCM is simply their product.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "35 \\div 5 = 7,\\ 35 \\div 7 = 5", "explanation": "Both divisions are exact, confirming $35$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(5, 7) = 35", "explanation": "So the lowest common multiple of $5$ and $7$ is $35$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 35$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $9$ and $12$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each number and find the first shared value.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 9.", "workingLatex": "9, 18, 27, 36, 45", "explanation": "These are the numbers in the nine times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 12.", "workingLatex": "12, 24, 36, 48", "explanation": "These are the numbers in the twelve times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "36 \\in \\text{both}", "explanation": "$36$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 36", "explanation": "The smallest shared multiple is $36$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "36 \\div 9 = 4,\\ 36 \\div 12 = 3", "explanation": "Both divisions are exact, confirming $36$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(9, 12) = 36", "explanation": "So the lowest common multiple of $9$ and $12$ is $36$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 36$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $8$ and $10$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 8.", "workingLatex": "8, 16, 24, 32, 40, 48", "explanation": "These are the numbers in the eight times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 10.", "workingLatex": "10, 20, 30, 40", "explanation": "These are the numbers in the ten times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "40 \\in \\text{both}", "explanation": "$40$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 40", "explanation": "The smallest shared multiple is $40$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "40 \\div 8 = 5,\\ 40 \\div 10 = 4", "explanation": "Both divisions are exact, confirming $40$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(8, 10) = 40", "explanation": "So the lowest common multiple of $8$ and $10$ is $40$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 40$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $42$ and $56$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list all factors of each number and pick the largest they share.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 42.", "workingLatex": "42: 1, 2, 3, 6, 7, 14, 21, 42", "explanation": "These are all the whole numbers dividing $42$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 56.", "workingLatex": "56: 1, 2, 4, 7, 8, 14, 28, 56", "explanation": "These are all the whole numbers dividing $56$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 7, 14", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 14", "explanation": "The HCF is the greatest common factor, which is $14$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "42 \\div 14 = 3,\\ 56 \\div 14 = 4", "explanation": "Both divisions are exact, confirming $14$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(42, 56) = 14", "explanation": "So the highest common factor of $42$ and $56$ is $14$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 14$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $45$ and $60$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list all factors of each number and choose the largest shared one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 45.", "workingLatex": "45: 1, 3, 5, 9, 15, 45", "explanation": "These are all the whole numbers dividing $45$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 60.", "workingLatex": "60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60", "explanation": "These are all the whole numbers dividing $60$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 3, 5, 15", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 15", "explanation": "The HCF is the greatest common factor, which is $15$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "45 \\div 15 = 3,\\ 60 \\div 15 = 4", "explanation": "Both divisions are exact, confirming $15$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(45, 60) = 15", "explanation": "So the highest common factor of $45$ and $60$ is $15$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 15$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $10$ and $15$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first shared value.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 10.", "workingLatex": "10, 20, 30, 40", "explanation": "These are the numbers in the ten times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 15.", "workingLatex": "15, 30, 45", "explanation": "These are the numbers in the fifteen times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "30 \\in \\text{both}", "explanation": "$30$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 30", "explanation": "The smallest shared multiple is $30$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "30 \\div 10 = 3,\\ 30 \\div 15 = 2", "explanation": "Both divisions are exact, confirming $30$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(10, 15) = 30", "explanation": "So the lowest common multiple of $10$ and $15$ is $30$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 30$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $12$ and $15$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 12.", "workingLatex": "12, 24, 36, 48, 60, 72", "explanation": "These are the numbers in the twelve times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 15.", "workingLatex": "15, 30, 45, 60, 75", "explanation": "These are the numbers in the fifteen times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "60 \\in \\text{both}", "explanation": "$60$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 60", "explanation": "The smallest shared multiple is $60$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "60 \\div 12 = 5,\\ 60 \\div 15 = 4", "explanation": "Both divisions are exact, confirming $60$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(12, 15) = 60", "explanation": "So the lowest common multiple of $12$ and $15$ is $60$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 60$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "List the common factors of $24$ and $36$, then write down their HCF.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the method.", "workingLatex": "\\text{common factors} \\to \\text{HCF}", "explanation": "We first list all factors of each number, pick out the shared ones, then the largest shared factor is the HCF.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 24.", "workingLatex": "24: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These divide $24$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 36.", "workingLatex": "36: 1, 2, 3, 4, 6, 9, 12, 18, 36", "explanation": "These divide $36$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Pick out the shared factors.", "workingLatex": "1, 2, 3, 4, 6, 12", "explanation": "These numbers appear in both lists, so they are the common factors.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the highest.", "workingLatex": "\\max = 12", "explanation": "The largest of the common factors is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "24 \\div 12 = 2,\\ 36 \\div 12 = 3", "explanation": "Both divisions are exact, confirming $12$ is a common factor.", "diagram": null },
        { "stepNumber": 7, "description": "State both answers.", "workingLatex": "\\text{common}: 1,2,3,4,6,12;\\ \\text{HCF} = 12", "explanation": "So the common factors are listed and the HCF is $12$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Common factors } 1, 2, 3, 4, 6, 12;\\ \\text{HCF} = 12$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $30$ and $45$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list the factors of each and pick the greatest common one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 30.", "workingLatex": "30: 1, 2, 3, 5, 6, 10, 15, 30", "explanation": "These divide $30$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 45.", "workingLatex": "45: 1, 3, 5, 9, 15, 45", "explanation": "These divide $45$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 3, 5, 15", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 15", "explanation": "The HCF is the greatest common factor, which is $15$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "30 \\div 15 = 2,\\ 45 \\div 15 = 3", "explanation": "Both divisions are exact, confirming $15$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(30, 45) = 15", "explanation": "So the highest common factor of $30$ and $45$ is $15$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 15$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $6$ and $9$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30", "explanation": "These are the numbers in the six times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 9.", "workingLatex": "9, 18, 27, 36", "explanation": "These are the numbers in the nine times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "18 \\in \\text{both}", "explanation": "$18$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 18", "explanation": "The smallest shared multiple is $18$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "18 \\div 6 = 3,\\ 18 \\div 9 = 2", "explanation": "Both divisions are exact, confirming $18$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(6, 9) = 18", "explanation": "So the lowest common multiple of $6$ and $9$ is $18$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 18$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $4$ and $10$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 4.", "workingLatex": "4, 8, 12, 16, 20, 24", "explanation": "These are the numbers in the four times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 10.", "workingLatex": "10, 20, 30", "explanation": "These are the numbers in the ten times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "20 \\in \\text{both}", "explanation": "$20$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 20", "explanation": "The smallest shared multiple is $20$; note it is not simply $4 \\times 10 = 40$ because they share the factor $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "20 \\div 4 = 5,\\ 20 \\div 10 = 2", "explanation": "Both divisions are exact, confirming $20$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(4, 10) = 20", "explanation": "So the lowest common multiple of $4$ and $10$ is $20$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 20$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Two lights flash together at the start. One flashes every $4$ seconds and the other every $6$ seconds. After how many seconds will they next flash together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next together} = \\text{LCM}(4, 6)", "explanation": "The lights flash together whenever the time is a multiple of both intervals, so the first time after the start is the lowest common multiple.", "diagram": null },
        { "stepNumber": 2, "description": "List flash times of light A.", "workingLatex": "4, 8, 12, 16, 20, 24", "explanation": "The first light flashes at every multiple of $4$ seconds.", "diagram": null },
        { "stepNumber": 3, "description": "List flash times of light B.", "workingLatex": "6, 12, 18, 24", "explanation": "The second light flashes at every multiple of $6$ seconds.", "diagram": null },
        { "stepNumber": 4, "description": "Find shared times.", "workingLatex": "12, 24 \\in \\text{both}", "explanation": "Both $12$ and $24$ seconds appear in each list, so the lights coincide then.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the earliest.", "workingLatex": "\\min(12, 24) = 12", "explanation": "We want the first time they meet, which is the smallest shared value, $12$ seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "12 \\div 4 = 3,\\ 12 \\div 6 = 2", "explanation": "At $12$ seconds light A has flashed $3$ times and light B $2$ times, so both flash exactly then.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ seconds}", "explanation": "So the lights next flash together after $12$ seconds.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ seconds}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Two bells ring together at noon. One rings every $8$ minutes and the other every $12$ minutes. After how many minutes will they next ring together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next together} = \\text{LCM}(8, 12)", "explanation": "The bells ring together when the elapsed time is a multiple of both intervals, so we need the lowest common multiple.", "diagram": null },
        { "stepNumber": 2, "description": "List ring times of bell A.", "workingLatex": "8, 16, 24, 32, 48", "explanation": "The first bell rings at every multiple of $8$ minutes.", "diagram": null },
        { "stepNumber": 3, "description": "List ring times of bell B.", "workingLatex": "12, 24, 36, 48", "explanation": "The second bell rings at every multiple of $12$ minutes.", "diagram": null },
        { "stepNumber": 4, "description": "Find shared times.", "workingLatex": "24, 48 \\in \\text{both}", "explanation": "Both $24$ and $48$ minutes appear in each list.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the earliest.", "workingLatex": "\\min(24, 48) = 24", "explanation": "The first time they coincide is the smallest shared value, $24$ minutes.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "24 \\div 8 = 3,\\ 24 \\div 12 = 2", "explanation": "After $24$ minutes bell A has rung $3$ times and bell B $2$ times, so both ring together.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ minutes}", "explanation": "So the bells next ring together $24$ minutes after noon.", "diagram": null }
      ],
      "finalAnswer": "$24 \\text{ minutes}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["LCM", "word problem", "packaging"],
    "questionText": "Pencils come in packs of $6$ and rubbers come in packs of $8$. A teacher wants to buy the same number of pencils as rubbers. What is the smallest number of each she can buy?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{smallest equal total} = \\text{LCM}(6, 8)", "explanation": "The total must be a multiple of $6$ (whole packs of pencils) and a multiple of $8$ (whole packs of rubbers), so the smallest equal number is the LCM.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30", "explanation": "Possible totals of pencils are the multiples of $6$.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 8.", "workingLatex": "8, 16, 24, 32", "explanation": "Possible totals of rubbers are the multiples of $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Find shared totals.", "workingLatex": "24 \\in \\text{both}", "explanation": "$24$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 24", "explanation": "The smallest total that works for both is $24$ items.", "diagram": null },
        { "stepNumber": 6, "description": "Work out the packs.", "workingLatex": "24 \\div 6 = 4,\\ 24 \\div 8 = 3", "explanation": "This means $4$ packs of pencils and $3$ packs of rubbers, which is a useful extra detail.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "24 \\text{ of each}", "explanation": "So the smallest number she can buy is $24$ pencils and $24$ rubbers.", "diagram": null }
      ],
      "finalAnswer": "$24 \\text{ of each}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "word problem"],
    "questionText": "A florist has $24$ red roses and $36$ white roses. She wants to make identical bunches using all the roses, with the largest possible number of bunches. How many bunches can she make?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{largest equal groups} = \\text{HCF}(24, 36)", "explanation": "The number of bunches must divide both $24$ and $36$ exactly so each bunch is identical, and we want the largest such number — the HCF.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 24.", "workingLatex": "24: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These are the possible numbers of equal groups for the red roses.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 36.", "workingLatex": "36: 1, 2, 3, 4, 6, 9, 12, 18, 36", "explanation": "These are the possible numbers of equal groups for the white roses.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 4, 6, 12", "explanation": "These numbers divide both totals, so they give identical bunches.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\text{HCF} = 12", "explanation": "The most bunches she can make is the largest common factor, $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Describe each bunch.", "workingLatex": "24 \\div 12 = 2,\\ 36 \\div 12 = 3", "explanation": "Each bunch would then have $2$ red and $3$ white roses, using every rose.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "12 \\text{ bunches}", "explanation": "So she can make $12$ identical bunches.", "diagram": null }
      ],
      "finalAnswer": "$12 \\text{ bunches}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "common factors"],
    "questionText": "Find the Highest Common Factor (HCF) of $48$ and $72$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the HCF.", "workingLatex": "\\text{HCF} = \\text{largest number dividing both}", "explanation": "We list the factors of each number and pick the greatest common one.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 48.", "workingLatex": "48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48", "explanation": "These divide $48$ exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 72.", "workingLatex": "72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72", "explanation": "These divide $72$ exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These numbers appear in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\max = 24", "explanation": "The HCF is the greatest common factor, which is $24$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "48 \\div 24 = 2,\\ 72 \\div 24 = 3", "explanation": "Both divisions are exact, confirming $24$ divides both numbers.", "diagram": null },
        { "stepNumber": 7, "description": "State the HCF.", "workingLatex": "\\text{HCF}(48, 72) = 24", "explanation": "So the highest common factor of $48$ and $72$ is $24$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{HCF} = 24$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $14$ and $21$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in both times-tables}", "explanation": "We list multiples of each and find the first they share.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 14.", "workingLatex": "14, 28, 42, 56", "explanation": "These are the numbers in the fourteen times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 21.", "workingLatex": "21, 42, 63", "explanation": "These are the numbers in the twenty-one times-table.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared multiples.", "workingLatex": "42 \\in \\text{both}", "explanation": "$42$ is the first number appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 42", "explanation": "The smallest shared multiple is $42$.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "42 \\div 14 = 3,\\ 42 \\div 21 = 2", "explanation": "Both divisions are exact, confirming $42$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(14, 21) = 42", "explanation": "So the lowest common multiple of $14$ and $21$ is $42$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 42$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "At a bus station, one bus leaves every $15$ minutes and another every $20$ minutes. They leave together at $9{:}00$. At what time do they next leave together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next together} = \\text{LCM}(15, 20)", "explanation": "The buses leave together when the elapsed time is a multiple of both intervals, so we need the lowest common multiple.", "diagram": null },
        { "stepNumber": 2, "description": "List departure times of bus A.", "workingLatex": "15, 30, 45, 60, 75", "explanation": "The first bus leaves at every multiple of $15$ minutes.", "diagram": null },
        { "stepNumber": 3, "description": "List departure times of bus B.", "workingLatex": "20, 40, 60, 80", "explanation": "The second bus leaves at every multiple of $20$ minutes.", "diagram": null },
        { "stepNumber": 4, "description": "Look for shared times.", "workingLatex": "60 \\in \\text{both}", "explanation": "$60$ minutes is the first time appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the smallest.", "workingLatex": "\\text{LCM} = 60 \\text{ minutes}", "explanation": "The first time they leave together again is after $60$ minutes.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a clock time.", "workingLatex": "9{:}00 + 60\\text{ min} = 10{:}00", "explanation": "Adding $60$ minutes (one hour) to $9{:}00$ gives $10{:}00$.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "10{:}00", "explanation": "So the buses next leave together at $10{:}00$.", "diagram": null }
      ],
      "finalAnswer": "$10{:}00$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["HCF", "word problem"],
    "questionText": "A greengrocer has $18$ apples and $24$ oranges. He wants to fill identical baskets using all the fruit, with the greatest possible number of baskets. How many baskets can he fill?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{most equal baskets} = \\text{HCF}(18, 24)", "explanation": "The number of baskets must divide both fruit totals exactly for the baskets to be identical, and we want the greatest such number.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 18.", "workingLatex": "18: 1, 2, 3, 6, 9, 18", "explanation": "These are the possible equal groupings of the apples.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 24.", "workingLatex": "24: 1, 2, 3, 4, 6, 8, 12, 24", "explanation": "These are the possible equal groupings of the oranges.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 6", "explanation": "These numbers divide both totals, giving identical baskets.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\text{HCF} = 6", "explanation": "The most baskets he can fill is the largest common factor, $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Describe each basket.", "workingLatex": "18 \\div 6 = 3,\\ 24 \\div 6 = 4", "explanation": "Each basket then has $3$ apples and $4$ oranges, using all the fruit.", "diagram": null },
        { "stepNumber": 7, "description": "State the answer.", "workingLatex": "6 \\text{ baskets}", "explanation": "So he can fill $6$ identical baskets.", "diagram": null }
      ],
      "finalAnswer": "$6 \\text{ baskets}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["LCM", "common multiples"],
    "questionText": "Find the Lowest Common Multiple (LCM) of $3$, $4$ and $6$ by listing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the LCM.", "workingLatex": "\\text{LCM} = \\text{smallest number in all three tables}", "explanation": "With three numbers, the LCM is the smallest value that appears in every times-table, so we list multiples of each.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 3.", "workingLatex": "3, 6, 9, 12, 15", "explanation": "These are the numbers in the three times-table.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 4.", "workingLatex": "4, 8, 12, 16", "explanation": "These are the numbers in the four times-table.", "diagram": null },
        { "stepNumber": 4, "description": "List multiples of 6.", "workingLatex": "6, 12, 18", "explanation": "These are the numbers in the six times-table.", "diagram": null },
        { "stepNumber": 5, "description": "Find a value in all three.", "workingLatex": "12 \\in \\text{all lists}", "explanation": "$12$ is the smallest number that appears in every list.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "12 \\div 3 = 4,\\ 12 \\div 4 = 3,\\ 12 \\div 6 = 2", "explanation": "All three divisions are exact, confirming $12$ is a multiple of each.", "diagram": null },
        { "stepNumber": 7, "description": "State the LCM.", "workingLatex": "\\text{LCM}(3, 4, 6) = 12", "explanation": "So the lowest common multiple of $3$, $4$ and $6$ is $12$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{LCM} = 12$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["common multiples", "LCM"],
    "questionText": "List all the common multiples of $6$ and $8$ that are less than $60$, and state their LCM.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the method.", "workingLatex": "\\text{common multiples in both tables}", "explanation": "A common multiple appears in both times-tables, so we list multiples of $6$ and of $8$ up to $60$ and compare.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30, 36, 42, 48, 54", "explanation": "These are the multiples of $6$ below $60$.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 8.", "workingLatex": "8, 16, 24, 32, 40, 48, 56", "explanation": "These are the multiples of $8$ below $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the shared values.", "workingLatex": "24, 48 \\in \\text{both}", "explanation": "$24$ and $48$ are the numbers appearing in both lists below $60$.", "diagram": null },
        { "stepNumber": 5, "description": "Identify the smallest shared value.", "workingLatex": "\\min(24, 48) = 24", "explanation": "The smallest common multiple is the LCM.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "24 \\div 6 = 4,\\ 24 \\div 8 = 3", "explanation": "Both divisions are exact, confirming $24$ is a common multiple.", "diagram": null },
        { "stepNumber": 7, "description": "State the answers.", "workingLatex": "\\text{common}: 24, 48;\\ \\text{LCM} = 24", "explanation": "So the common multiples below $60$ are $24$ and $48$, and the LCM is $24$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{Common multiples } 24, 48;\\ \\text{LCM} = 24$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Two lighthouses flash together at midnight. One flashes every $12$ seconds and the other every $18$ seconds. In the first $3$ minutes (including at the very start), how many times do they flash together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find how often they coincide.", "workingLatex": "\\text{interval} = \\text{LCM}(12, 18)", "explanation": "They flash together at times that are multiples of both intervals, so the gap between joint flashes is the lowest common multiple.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 12.", "workingLatex": "12, 24, 36, 48", "explanation": "These are the flash times of the first lighthouse.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 18.", "workingLatex": "18, 36, 54", "explanation": "These are the flash times of the second lighthouse.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the LCM.", "workingLatex": "\\text{LCM} = 36 \\text{ seconds}", "explanation": "$36$ is the first shared time, so they flash together every $36$ seconds.", "diagram": null },
        { "stepNumber": 5, "description": "Convert 3 minutes to seconds.", "workingLatex": "3 \\times 60 = 180 \\text{ seconds}", "explanation": "We work in seconds to match the intervals, so the window is $180$ seconds long.", "diagram": null },
        { "stepNumber": 6, "description": "Count the joint flashes after the start.", "workingLatex": "180 \\div 36 = 5", "explanation": "Dividing the total time by the $36$-second gap gives $5$ joint flashes at $36, 72, 108, 144, 180$ seconds.", "diagram": null },
        { "stepNumber": 7, "description": "Include the flash at the start.", "workingLatex": "5 + 1 = 6", "explanation": "They also flash together at the very start ($0$ seconds), which the question includes, so we add one.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "6 \\text{ times}", "explanation": "So in the first $3$ minutes they flash together $6$ times in total.", "diagram": null }
      ],
      "finalAnswer": "$6 \\text{ times}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Three bells ring together at $8{:}00$. The first rings every $6$ minutes, the second every $9$ minutes and the third every $12$ minutes. At what time do all three next ring together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next together} = \\text{LCM}(6, 9, 12)", "explanation": "All three ring together when the elapsed time is a multiple of every interval, so we need the lowest common multiple of the three numbers.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30, 36, 42", "explanation": "These are the ring times of the first bell.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 9.", "workingLatex": "9, 18, 27, 36, 45", "explanation": "These are the ring times of the second bell.", "diagram": null },
        { "stepNumber": 4, "description": "List multiples of 12.", "workingLatex": "12, 24, 36, 48", "explanation": "These are the ring times of the third bell.", "diagram": null },
        { "stepNumber": 5, "description": "Find a value in all three.", "workingLatex": "36 \\in \\text{all lists}", "explanation": "$36$ is the smallest number appearing in every list.", "diagram": null },
        { "stepNumber": 6, "description": "Check by division.", "workingLatex": "36 \\div 6 = 6,\\ 36 \\div 9 = 4,\\ 36 \\div 12 = 3", "explanation": "All three divisions are exact, confirming $36$ works for every bell.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a clock time.", "workingLatex": "8{:}00 + 36 \\text{ min} = 8{:}36", "explanation": "Adding $36$ minutes to $8{:}00$ gives the time they next coincide.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "8{:}36", "explanation": "So all three bells next ring together at $8{:}36$.", "diagram": null }
      ],
      "finalAnswer": "$8{:}36$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "expression",
    "tags": ["LCM", "word problem", "packaging"],
    "questionText": "Hot dogs come in packs of $10$ and buns come in packs of $8$. Sam wants to buy exactly the same number of hot dogs as buns, with none left over. What is the fewest packs of each he must buy?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{smallest equal total} = \\text{LCM}(10, 8)", "explanation": "The matching total must be a multiple of $10$ and of $8$, so the smallest equal number of hot dogs and buns is the LCM.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 10.", "workingLatex": "10, 20, 30, 40, 50", "explanation": "These are the possible totals of hot dogs.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 8.", "workingLatex": "8, 16, 24, 32, 40, 48", "explanation": "These are the possible totals of buns.", "diagram": null },
        { "stepNumber": 4, "description": "Find the smallest shared total.", "workingLatex": "40 \\in \\text{both}", "explanation": "$40$ is the first number in both lists, so it is the LCM.", "diagram": null },
        { "stepNumber": 5, "description": "Work out hot dog packs.", "workingLatex": "40 \\div 10 = 4", "explanation": "To get $40$ hot dogs Sam needs $4$ packs of $10$.", "diagram": null },
        { "stepNumber": 6, "description": "Work out bun packs.", "workingLatex": "40 \\div 8 = 5", "explanation": "To get $40$ buns Sam needs $5$ packs of $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Check nothing is left over.", "workingLatex": "4 \\times 10 = 40 = 5 \\times 8", "explanation": "Both totals equal $40$, so every hot dog is matched with a bun.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "4 \\text{ hot dog packs},\\ 5 \\text{ bun packs}", "explanation": "So the fewest he can buy is $4$ packs of hot dogs and $5$ packs of buns.", "diagram": null }
      ],
      "finalAnswer": "$4 \\text{ packs of hot dogs and } 5 \\text{ packs of buns}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["HCF", "word problem"],
    "questionText": "A rectangular floor measures $48\\,\\text{cm}$ by $36\\,\\text{cm}$. It is to be covered exactly with identical square tiles, using the largest possible tiles. Find the side length of each tile and how many tiles are needed.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{tile side} = \\text{HCF}(48, 36)", "explanation": "The square tile must fit a whole number of times along both sides, so its side must divide both $48$ and $36$; the largest such length is the HCF.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 48.", "workingLatex": "48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48", "explanation": "These are the possible tile lengths that fit along the $48\\,\\text{cm}$ side.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 36.", "workingLatex": "36: 1, 2, 3, 4, 6, 9, 12, 18, 36", "explanation": "These are the possible tile lengths that fit along the $36\\,\\text{cm}$ side.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 4, 6, 12", "explanation": "These lengths divide both sides exactly.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\text{HCF} = 12", "explanation": "The largest tile has side $12\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 6, "description": "Count tiles along each side.", "workingLatex": "48 \\div 12 = 4,\\ 36 \\div 12 = 3", "explanation": "The tiles fit $4$ across and $3$ down.", "diagram": null },
        { "stepNumber": 7, "description": "Find the total number of tiles.", "workingLatex": "4 \\times 3 = 12", "explanation": "Multiplying the tiles across by the tiles down gives the total needed to cover the floor.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "12\\,\\text{cm tiles},\\ 12 \\text{ tiles}", "explanation": "So each tile is $12\\,\\text{cm}$ square and $12$ tiles are needed.", "diagram": null }
      ],
      "finalAnswer": "$12\\,\\text{cm tiles, and } 12 \\text{ tiles needed}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Two runners start together at the start line of a circular track. One completes a lap every $40$ seconds and the other every $60$ seconds. After how many seconds do they next meet at the start line, and how many laps has each completed by then?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next meet} = \\text{LCM}(40, 60)", "explanation": "Each runner is back at the start after a whole number of laps, so they meet at the start when the time is a multiple of both lap times — the LCM.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 40.", "workingLatex": "40, 80, 120, 160", "explanation": "These are the times the first runner is at the start line.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 60.", "workingLatex": "60, 120, 180", "explanation": "These are the times the second runner is at the start line.", "diagram": null },
        { "stepNumber": 4, "description": "Find the smallest shared time.", "workingLatex": "120 \\in \\text{both}", "explanation": "$120$ seconds is the first time appearing in both lists.", "diagram": null },
        { "stepNumber": 5, "description": "State the LCM.", "workingLatex": "\\text{LCM} = 120 \\text{ seconds}", "explanation": "So they next meet at the start after $120$ seconds.", "diagram": null },
        { "stepNumber": 6, "description": "Laps for the first runner.", "workingLatex": "120 \\div 40 = 3", "explanation": "In $120$ seconds the faster runner completes $3$ laps.", "diagram": null },
        { "stepNumber": 7, "description": "Laps for the second runner.", "workingLatex": "120 \\div 60 = 2", "explanation": "In the same time the slower runner completes $2$ laps.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "120 \\text{ s}:\\ 3 \\text{ and } 2 \\text{ laps}", "explanation": "So they meet after $120$ seconds, having run $3$ laps and $2$ laps respectively.", "diagram": null }
      ],
      "finalAnswer": "$120 \\text{ seconds; } 3 \\text{ laps and } 2 \\text{ laps}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["HCF", "word problem"],
    "questionText": "Two ribbons have lengths $60\\,\\text{cm}$ and $48\\,\\text{cm}$. They are to be cut into equal pieces that are as long as possible, with no ribbon wasted. Find the length of each piece and the total number of pieces.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{piece length} = \\text{HCF}(60, 48)", "explanation": "Each piece length must divide both ribbons exactly so nothing is wasted, and we want the longest such length — the HCF.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of 60.", "workingLatex": "60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60", "explanation": "These are the lengths that divide the $60\\,\\text{cm}$ ribbon exactly.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of 48.", "workingLatex": "48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48", "explanation": "These are the lengths that divide the $48\\,\\text{cm}$ ribbon exactly.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factors.", "workingLatex": "\\text{common}: 1, 2, 3, 4, 6, 12", "explanation": "These lengths divide both ribbons.", "diagram": null },
        { "stepNumber": 5, "description": "Choose the largest.", "workingLatex": "\\text{HCF} = 12", "explanation": "The longest piece length is $12\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 6, "description": "Pieces from each ribbon.", "workingLatex": "60 \\div 12 = 5,\\ 48 \\div 12 = 4", "explanation": "The first ribbon gives $5$ pieces and the second gives $4$ pieces.", "diagram": null },
        { "stepNumber": 7, "description": "Find the total number of pieces.", "workingLatex": "5 + 4 = 9", "explanation": "Adding the pieces from both ribbons gives the total.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "12\\,\\text{cm pieces},\\ 9 \\text{ pieces}", "explanation": "So each piece is $12\\,\\text{cm}$ long and there are $9$ pieces in total.", "diagram": null }
      ],
      "finalAnswer": "$12\\,\\text{cm pieces, and } 9 \\text{ pieces in total}$"
    }
  },
  {
    "id": "gcse.number.factors-multiples.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Factors, multiples and primes",
    "subtopicId": "gcse.number.factors-multiples",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["LCM", "word problem"],
    "questionText": "Three warning lights flash at regular intervals: red every $4$ seconds, amber every $6$ seconds and green every $10$ seconds. They all flash together at the start. After how many seconds do all three next flash together?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{next together} = \\text{LCM}(4, 6, 10)", "explanation": "All three coincide when the time is a multiple of every interval, so we need the lowest common multiple of the three numbers.", "diagram": null },
        { "stepNumber": 2, "description": "List multiples of 4.", "workingLatex": "4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60", "explanation": "These are the flash times of the red light.", "diagram": null },
        { "stepNumber": 3, "description": "List multiples of 6.", "workingLatex": "6, 12, 18, 24, 30, 36, 42, 48, 54, 60", "explanation": "These are the flash times of the amber light.", "diagram": null },
        { "stepNumber": 4, "description": "List multiples of 10.", "workingLatex": "10, 20, 30, 40, 50, 60", "explanation": "These are the flash times of the green light.", "diagram": null },
        { "stepNumber": 5, "description": "Find a value in all three.", "workingLatex": "60 \\in \\text{all lists}", "explanation": "$60$ is the smallest number appearing in every list; smaller shared values like $20$ or $30$ miss one of the lights.", "diagram": null },
        { "stepNumber": 6, "description": "Rule out smaller candidates.", "workingLatex": "20 \\notin 6\\text{'s},\\ 30 \\notin 4\\text{'s}", "explanation": "$20$ is not a multiple of $6$ and $30$ is not a multiple of $4$, so neither works for all three.", "diagram": null },
        { "stepNumber": 7, "description": "Check by division.", "workingLatex": "60 \\div 4 = 15,\\ 60 \\div 6 = 10,\\ 60 \\div 10 = 6", "explanation": "All three divisions are exact, confirming $60$ works for every light.", "diagram": null },
        { "stepNumber": 8, "description": "State the answer.", "workingLatex": "60 \\text{ seconds}", "explanation": "So all three lights next flash together after $60$ seconds.", "diagram": null }
      ],
      "finalAnswer": "$60 \\text{ seconds}$"
    }
  }
];
