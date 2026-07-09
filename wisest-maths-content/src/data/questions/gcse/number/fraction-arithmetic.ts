import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.fraction-arithmetic.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["adding fractions", "same denominator", "proper fractions"],
    "questionText": "Work out $\\frac{1}{5} + \\frac{2}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{5} + \\frac{2}{5}", "explanation": "We are adding two fractions that both count fifths, so we are combining pieces of the same size.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the denominators.", "workingLatex": "5 = 5", "explanation": "The denominators are equal, which means the whole is split into the same number of equal parts, so we can add straight away.", "diagram": null },
        { "stepNumber": 3, "description": "Keep the denominator and add the numerators.", "workingLatex": "\\frac{1+2}{5}", "explanation": "When the parts are the same size we simply count how many parts there are in total; the size of each part (the denominator) does not change.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the numerator.", "workingLatex": "\\frac{1+2}{5} = \\frac{3}{5}", "explanation": "One fifth plus two fifths gives three fifths.", "diagram": null },
        { "stepNumber": 5, "description": "Check whether it simplifies.", "workingLatex": "\\frac{3}{5}", "explanation": "The numbers $3$ and $5$ share no common factor other than $1$, so the fraction is already in its lowest terms.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{5} + \\frac{2}{5} = \\frac{3}{5}", "explanation": "The total is three fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["adding fractions", "same denominator", "simplifying"],
    "questionText": "Work out $\\frac{1}{8} + \\frac{3}{8}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{8} + \\frac{3}{8}", "explanation": "Both fractions are measured in eighths, so the parts are already the same size.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the denominators.", "workingLatex": "8 = 8", "explanation": "Equal denominators mean we can add the numerators directly.", "diagram": null },
        { "stepNumber": 3, "description": "Add the numerators over the common denominator.", "workingLatex": "\\frac{1+3}{8}", "explanation": "We count the total number of eighths while keeping each piece the same size.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the numerator.", "workingLatex": "\\frac{1+3}{8} = \\frac{4}{8}", "explanation": "One eighth plus three eighths makes four eighths.", "diagram": null },
        { "stepNumber": 5, "description": "Find a common factor of the top and bottom.", "workingLatex": "\\gcd(4, 8) = 4", "explanation": "Both $4$ and $8$ divide by $4$, so we can simplify the fraction.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the numerator and denominator by $4$.", "workingLatex": "\\frac{4 \\div 4}{8 \\div 4} = \\frac{1}{2}", "explanation": "Dividing top and bottom by the same number keeps the value the same but writes it more simply.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}", "explanation": "Four eighths is the same amount as one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["subtracting fractions", "same denominator", "simplifying"],
    "questionText": "Work out $\\frac{5}{9} - \\frac{2}{9}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{5}{9} - \\frac{2}{9}", "explanation": "Both fractions count ninths, so we are taking away pieces of the same size.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the denominators.", "workingLatex": "9 = 9", "explanation": "The denominators match, so we can subtract the numerators directly.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the numerators over the common denominator.", "workingLatex": "\\frac{5-2}{9}", "explanation": "We work out how many ninths are left after removing two of them; the size of each piece stays the same.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the numerator.", "workingLatex": "\\frac{5-2}{9} = \\frac{3}{9}", "explanation": "Five ninths take away two ninths leaves three ninths.", "diagram": null },
        { "stepNumber": 5, "description": "Find a common factor of the top and bottom.", "workingLatex": "\\gcd(3, 9) = 3", "explanation": "Both $3$ and $9$ divide by $3$, so the fraction can be simplified.", "diagram": null },
        { "stepNumber": 6, "description": "Divide the numerator and denominator by $3$.", "workingLatex": "\\frac{3 \\div 3}{9 \\div 3} = \\frac{1}{3}", "explanation": "Dividing top and bottom by $3$ keeps the value unchanged but in lowest terms.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{5}{9} - \\frac{2}{9} = \\frac{1}{3}", "explanation": "Three ninths is the same amount as one third.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["subtracting fractions", "same denominator", "proper fractions"],
    "questionText": "Work out $\\frac{6}{11} - \\frac{4}{11}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{6}{11} - \\frac{4}{11}", "explanation": "Both fractions are elevenths, so the parts are the same size and can be subtracted directly.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the denominators.", "workingLatex": "11 = 11", "explanation": "Equal denominators confirm the pieces match, so no adjustment is needed.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the numerators.", "workingLatex": "\\frac{6-4}{11}", "explanation": "We count how many elevenths remain after removing four of them.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the numerator.", "workingLatex": "\\frac{6-4}{11} = \\frac{2}{11}", "explanation": "Six elevenths take away four elevenths leaves two elevenths.", "diagram": null },
        { "stepNumber": 5, "description": "Check whether it simplifies.", "workingLatex": "\\frac{2}{11}", "explanation": "The numbers $2$ and $11$ share no common factor other than $1$, so it is already simplest.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{6}{11} - \\frac{4}{11} = \\frac{2}{11}", "explanation": "Two elevenths remain.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{11}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["adding fractions", "different denominators", "one is a multiple"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{4}", "explanation": "The denominators are different, so the pieces are not the same size yet and we cannot add them straight away.", "diagram": null },
        { "stepNumber": 2, "description": "Choose a common denominator.", "workingLatex": "4", "explanation": "Since $4$ is a multiple of $2$, we can rewrite both fractions in quarters, which is the smallest common choice.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction to quarters.", "workingLatex": "\\frac{1}{2} = \\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4}", "explanation": "Multiplying top and bottom by $2$ keeps the value the same while making the pieces quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation with a common denominator.", "workingLatex": "\\frac{2}{4} + \\frac{1}{4}", "explanation": "Now both fractions count quarters, so they can be added.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{2+1}{4} = \\frac{3}{4}", "explanation": "Two quarters plus one quarter makes three quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Check whether it simplifies.", "workingLatex": "\\frac{3}{4}", "explanation": "The numbers $3$ and $4$ have no common factor other than $1$, so this is the final form.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}", "explanation": "The total is three quarters.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["adding fractions", "different denominators", "simplifying"],
    "questionText": "Work out $\\frac{1}{3} + \\frac{1}{6}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{3} + \\frac{1}{6}", "explanation": "The denominators differ, so we first need pieces of a matching size.", "diagram": null },
        { "stepNumber": 2, "description": "Choose a common denominator.", "workingLatex": "6", "explanation": "Because $6$ is a multiple of $3$, sixths work as the common denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction to sixths.", "workingLatex": "\\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ turns thirds into sixths without changing the value.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{2}{6} + \\frac{1}{6}", "explanation": "Both fractions now count sixths, so we can add.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{2+1}{6} = \\frac{3}{6}", "explanation": "Two sixths plus one sixth makes three sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify by dividing by the common factor.", "workingLatex": "\\frac{3 \\div 3}{6 \\div 3} = \\frac{1}{2}", "explanation": "Both $3$ and $6$ divide by $3$, giving one half.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}", "explanation": "Three sixths is the same as one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["subtracting fractions", "different denominators", "one is a multiple"],
    "questionText": "Work out $\\frac{3}{4} - \\frac{1}{8}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{4} - \\frac{1}{8}", "explanation": "The denominators are different, so we need to write both fractions with the same size pieces before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Choose a common denominator.", "workingLatex": "8", "explanation": "Since $8$ is a multiple of $4$, eighths make a suitable common denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction to eighths.", "workingLatex": "\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}", "explanation": "Multiplying top and bottom by $2$ rewrites three quarters as six eighths.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{6}{8} - \\frac{1}{8}", "explanation": "Now both fractions are eighths and can be subtracted.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{6-1}{8} = \\frac{5}{8}", "explanation": "Six eighths take away one eighth leaves five eighths.", "diagram": null },
        { "stepNumber": 6, "description": "Check whether it simplifies.", "workingLatex": "\\frac{5}{8}", "explanation": "The numbers $5$ and $8$ share no common factor other than $1$, so it is already simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} - \\frac{1}{8} = \\frac{5}{8}", "explanation": "Five eighths remain.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{8}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["adding fractions", "different denominators", "lcm"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3}", "explanation": "Halves and thirds are different sizes, so we cannot add them until they match.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(2, 3) = 6", "explanation": "The smallest number that both $2$ and $3$ divide into is $6$, so we use sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}", "explanation": "Multiplying top and bottom by $3$ turns one half into three sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ turns one third into two sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6}", "explanation": "Both fractions now count sixths, so they can be added.", "diagram": null },
        { "stepNumber": 6, "description": "Add the numerators.", "workingLatex": "\\frac{3+2}{6} = \\frac{5}{6}", "explanation": "Three sixths plus two sixths makes five sixths.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}", "explanation": "Since $5$ and $6$ share no common factor, five sixths is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["adding fractions", "different denominators", "lcm"],
    "questionText": "Work out $\\frac{1}{4} + \\frac{2}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{4} + \\frac{2}{5}", "explanation": "Quarters and fifths are different sizes, so a common denominator is needed.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(4, 5) = 20", "explanation": "Because $4$ and $5$ share no common factor, their lowest common denominator is simply their product, $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{4} = \\frac{1 \\times 5}{4 \\times 5} = \\frac{5}{20}", "explanation": "Multiplying top and bottom by $5$ rewrites one quarter as five twentieths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{5} = \\frac{2 \\times 4}{5 \\times 4} = \\frac{8}{20}", "explanation": "Multiplying top and bottom by $4$ rewrites two fifths as eight twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\frac{5}{20} + \\frac{8}{20}", "explanation": "Both fractions now count twentieths, so they can be combined.", "diagram": null },
        { "stepNumber": 6, "description": "Add the numerators.", "workingLatex": "\\frac{5+8}{20} = \\frac{13}{20}", "explanation": "Five twentieths plus eight twentieths makes thirteen twentieths.", "diagram": null },
        { "stepNumber": 7, "description": "Check whether it simplifies.", "workingLatex": "\\frac{13}{20}", "explanation": "As $13$ is prime and does not divide $20$, the fraction is already in lowest terms.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{1}{4} + \\frac{2}{5} = \\frac{13}{20}", "explanation": "The total is thirteen twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{13}{20}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["subtracting fractions", "different denominators", "lcm"],
    "questionText": "Work out $\\frac{2}{3} - \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} - \\frac{1}{4}", "explanation": "Thirds and quarters are different sizes, so we must rewrite both over a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(3, 4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ rewrites two thirds as eight twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ rewrites one quarter as three twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\frac{8}{12} - \\frac{3}{12}", "explanation": "Both fractions now count twelfths, so they can be subtracted.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the numerators.", "workingLatex": "\\frac{8-3}{12} = \\frac{5}{12}", "explanation": "Eight twelfths take away three twelfths leaves five twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} - \\frac{1}{4} = \\frac{5}{12}", "explanation": "Since $5$ and $12$ share no common factor, five twelfths is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["simplifying", "lowest terms", "common factor"],
    "questionText": "Write $\\frac{8}{12}$ in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the fraction.", "workingLatex": "\\frac{8}{12}", "explanation": "To simplify a fraction we divide the numerator and denominator by the same number until no common factor is left.", "diagram": null },
        { "stepNumber": 2, "description": "List factors of the numerator.", "workingLatex": "8 = 1, 2, 4, 8", "explanation": "Knowing the factors of $8$ helps us find what the top and bottom share.", "diagram": null },
        { "stepNumber": 3, "description": "List factors of the denominator.", "workingLatex": "12 = 1, 2, 3, 4, 6, 12", "explanation": "Comparing this with the factors of $8$ shows the common factors.", "diagram": null },
        { "stepNumber": 4, "description": "Choose the highest common factor.", "workingLatex": "\\gcd(8, 12) = 4", "explanation": "The largest number in both lists is $4$, so dividing by $4$ simplifies in one step.", "diagram": null },
        { "stepNumber": 5, "description": "Divide top and bottom by $4$.", "workingLatex": "\\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}", "explanation": "Dividing both parts by the same number keeps the value the same but in smaller numbers.", "diagram": null },
        { "stepNumber": 6, "description": "Check the answer.", "workingLatex": "\\gcd(2, 3) = 1", "explanation": "The numbers $2$ and $3$ share no further common factor, so the fraction is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["simplifying", "lowest terms", "common factor"],
    "questionText": "Write $\\frac{15}{20}$ in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the fraction.", "workingLatex": "\\frac{15}{20}", "explanation": "We simplify by finding a number that divides exactly into both the top and the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Look for a common factor.", "workingLatex": "15 = 3 \\times 5, \\; 20 = 4 \\times 5", "explanation": "Both numbers contain a factor of $5$, so $5$ is a common factor.", "diagram": null },
        { "stepNumber": 3, "description": "Confirm it is the highest common factor.", "workingLatex": "\\gcd(15, 20) = 5", "explanation": "There is no larger number that divides both, so dividing by $5$ finishes in one step.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the numerator by $5$.", "workingLatex": "15 \\div 5 = 3", "explanation": "This gives the new numerator.", "diagram": null },
        { "stepNumber": 5, "description": "Divide the denominator by $5$.", "workingLatex": "20 \\div 5 = 4", "explanation": "This gives the new denominator.", "diagram": null },
        { "stepNumber": 6, "description": "State the simplified fraction.", "workingLatex": "\\frac{15}{20} = \\frac{3}{4}", "explanation": "Since $3$ and $4$ share no common factor, three quarters is the simplest form.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["improper fractions", "mixed numbers", "converting"],
    "questionText": "Write $\\frac{7}{3}$ as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the improper fraction.", "workingLatex": "\\frac{7}{3}", "explanation": "The numerator is larger than the denominator, so the fraction is worth more than one whole and can be written as a mixed number.", "diagram": null },
        { "stepNumber": 2, "description": "Decide what to divide.", "workingLatex": "7 \\div 3", "explanation": "A fraction means the numerator divided by the denominator, so we divide $7$ by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Find how many whole times $3$ fits into $7$.", "workingLatex": "3 \\times 2 = 6", "explanation": "Three fits into seven twice, using up $6$, which becomes the whole-number part.", "diagram": null },
        { "stepNumber": 4, "description": "Find the remainder.", "workingLatex": "7 - 6 = 1", "explanation": "After taking out two wholes there is $1$ left over.", "diagram": null },
        { "stepNumber": 5, "description": "Write the remainder as a fraction.", "workingLatex": "\\frac{1}{3}", "explanation": "The leftover $1$ is still measured in thirds, so it becomes one third.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the whole number and fraction.", "workingLatex": "\\frac{7}{3} = 2\\frac{1}{3}", "explanation": "Two wholes and one third together make the mixed number.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["improper fractions", "mixed numbers", "converting"],
    "questionText": "Write $\\frac{11}{4}$ as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the improper fraction.", "workingLatex": "\\frac{11}{4}", "explanation": "The top is bigger than the bottom, so this is more than one whole.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the division.", "workingLatex": "11 \\div 4", "explanation": "The fraction bar means divide the numerator by the denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Find how many whole fours are in eleven.", "workingLatex": "4 \\times 2 = 8", "explanation": "Four fits into eleven twice, giving the whole-number part $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the remainder.", "workingLatex": "11 - 8 = 3", "explanation": "After removing two wholes, $3$ quarters are left over.", "diagram": null },
        { "stepNumber": 5, "description": "Write the remainder as a fraction.", "workingLatex": "\\frac{3}{4}", "explanation": "The remaining $3$ pieces are still quarters, so this is three quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Combine the parts.", "workingLatex": "\\frac{11}{4} = 2\\frac{3}{4}", "explanation": "Two wholes and three quarters make the mixed number.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["mixed numbers", "improper fractions", "converting"],
    "questionText": "Write $2\\frac{1}{3}$ as an improper fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the mixed number.", "workingLatex": "2\\frac{1}{3}", "explanation": "This is two whole ones plus one third, and we want to write it as a single fraction in thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Decide the common denominator.", "workingLatex": "3", "explanation": "The fraction part is in thirds, so we express the whole number in thirds too.", "diagram": null },
        { "stepNumber": 3, "description": "Change the whole number into thirds.", "workingLatex": "2 = \\frac{2 \\times 3}{3} = \\frac{6}{3}", "explanation": "Each whole is $3$ thirds, so two wholes are $6$ thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Add on the fraction part.", "workingLatex": "\\frac{6}{3} + \\frac{1}{3}", "explanation": "We combine the whole part written as thirds with the extra one third.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{6+1}{3} = \\frac{7}{3}", "explanation": "Six thirds plus one third makes seven thirds.", "diagram": null },
        { "stepNumber": 6, "description": "State the improper fraction.", "workingLatex": "2\\frac{1}{3} = \\frac{7}{3}", "explanation": "The mixed number equals seven thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["mixed numbers", "improper fractions", "converting"],
    "questionText": "Write $3\\frac{2}{5}$ as an improper fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the mixed number.", "workingLatex": "3\\frac{2}{5}", "explanation": "This is three wholes plus two fifths, which we want as one fraction in fifths.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the whole number by the denominator.", "workingLatex": "3 \\times 5 = 15", "explanation": "Each whole contains $5$ fifths, so three wholes contain $15$ fifths.", "diagram": null },
        { "stepNumber": 3, "description": "Add the numerator of the fraction part.", "workingLatex": "15 + 2 = 17", "explanation": "Adding the extra two fifths gives the total number of fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Keep the denominator the same.", "workingLatex": "\\frac{17}{5}", "explanation": "We are still counting fifths, so the denominator stays as $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Check the size.", "workingLatex": "\\frac{17}{5} \\approx 3.4", "explanation": "Seventeen fifths is a little over $3$, which matches the original mixed number.", "diagram": null },
        { "stepNumber": 6, "description": "State the improper fraction.", "workingLatex": "3\\frac{2}{5} = \\frac{17}{5}", "explanation": "The mixed number equals seventeen fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{17}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["multiplying fractions", "whole number", "mixed number answer"],
    "questionText": "Work out $\\frac{2}{5} \\times 3$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{5} \\times 3", "explanation": "Multiplying a fraction by a whole number means adding that many copies of the fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Any whole number can be written over $1$, which makes the multiplication rule easy to apply.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "2 \\times 3 = 6", "explanation": "The new numerator is the product of the two top numbers.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "5 \\times 1 = 5", "explanation": "The new denominator is the product of the two bottom numbers.", "diagram": null },
        { "stepNumber": 5, "description": "Write the resulting fraction.", "workingLatex": "\\frac{2}{5} \\times 3 = \\frac{6}{5}", "explanation": "This is an improper fraction because the top is larger than the bottom.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{6}{5} = 1\\frac{1}{5}", "explanation": "Five fifths make one whole, leaving one fifth over.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{5} \\times 3 = 1\\frac{1}{5}", "explanation": "The product is one and one fifth.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "whole number", "simplifying"],
    "questionText": "Work out $\\frac{3}{8} \\times 4$, giving your answer as a mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{8} \\times 4", "explanation": "We are taking four lots of three eighths.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "4 = \\frac{4}{1}", "explanation": "Writing $4$ over $1$ lets us multiply tops and bottoms.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "3 \\times 4 = 12", "explanation": "This gives the numerator of the product.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "8 \\times 1 = 8", "explanation": "This gives the denominator of the product.", "diagram": null },
        { "stepNumber": 5, "description": "Write the resulting fraction.", "workingLatex": "\\frac{3}{8} \\times 4 = \\frac{12}{8}", "explanation": "This improper fraction can be simplified and then written as a mixed number.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the fraction.", "workingLatex": "\\frac{12 \\div 4}{8 \\div 4} = \\frac{3}{2}", "explanation": "Both $12$ and $8$ divide by $4$, giving three halves.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Two halves make one whole, leaving one half over.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{3}{8} \\times 4 = 1\\frac{1}{2}", "explanation": "The product is one and one half.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["multiplying fractions", "proper fractions"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{4}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} \\times \\frac{4}{5}", "explanation": "To multiply fractions we multiply the numerators together and the denominators together; no common denominator is needed.", "diagram": null },
        { "stepNumber": 2, "description": "Check for cancelling.", "workingLatex": "\\gcd(2,5)=1, \\; \\gcd(4,3)=1", "explanation": "No numerator shares a factor with a denominator, so there is nothing to cancel first.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "2 \\times 4 = 8", "explanation": "The tops multiply to give the new numerator.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "3 \\times 5 = 15", "explanation": "The bottoms multiply to give the new denominator.", "diagram": null },
        { "stepNumber": 5, "description": "Write the resulting fraction.", "workingLatex": "\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}", "explanation": "Combining the results gives eight fifteenths.", "diagram": null },
        { "stepNumber": 6, "description": "Check whether it simplifies.", "workingLatex": "\\gcd(8, 15) = 1", "explanation": "The numbers $8$ and $15$ share no common factor, so the fraction is already simplest.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{8}{15}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "simplifying", "proper fractions"],
    "questionText": "Work out $\\frac{3}{4} \\times \\frac{2}{9}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{4} \\times \\frac{2}{9}", "explanation": "We multiply the tops together and the bottoms together.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "3 \\times 2 = 6", "explanation": "This gives the numerator before simplifying.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "4 \\times 9 = 36", "explanation": "This gives the denominator before simplifying.", "diagram": null },
        { "stepNumber": 4, "description": "Write the resulting fraction.", "workingLatex": "\\frac{3}{4} \\times \\frac{2}{9} = \\frac{6}{36}", "explanation": "Combining the products gives six thirty-sixths, which is not yet in lowest terms.", "diagram": null },
        { "stepNumber": 5, "description": "Find the highest common factor.", "workingLatex": "\\gcd(6, 36) = 6", "explanation": "Both $6$ and $36$ divide by $6$, so we can simplify in one step.", "diagram": null },
        { "stepNumber": 6, "description": "Divide top and bottom by $6$.", "workingLatex": "\\frac{6 \\div 6}{36 \\div 6} = \\frac{1}{6}", "explanation": "Dividing both parts by $6$ leaves one sixth.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\times \\frac{2}{9} = \\frac{1}{6}", "explanation": "The product simplifies to one sixth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{3}{8}$, cancelling before you multiply.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{8}", "explanation": "Before multiplying we look for numbers on the top and bottom that share a factor, which keeps the numbers small.", "diagram": null },
        { "stepNumber": 2, "description": "Spot the matching $3$s.", "workingLatex": "\\frac{2}{\\cancel{3}} \\times \\frac{\\cancel{3}}{8}", "explanation": "The $3$ on the bottom of the first fraction and the $3$ on the top of the second cancel, since $3 \\div 3 = 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the common factor of $2$.", "workingLatex": "\\frac{\\cancel{2}}{1} \\times \\frac{1}{\\cancel{8}} \\rightarrow \\frac{1}{1} \\times \\frac{1}{4}", "explanation": "The $2$ on top and the $8$ on the bottom both divide by $2$, giving $1$ and $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the remaining numerators.", "workingLatex": "1 \\times 1 = 1", "explanation": "After cancelling, the tops multiply to $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the remaining denominators.", "workingLatex": "1 \\times 4 = 4", "explanation": "After cancelling, the bottoms multiply to $4$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{8} = \\frac{1}{4}", "explanation": "Cancelling first led straight to the simplest form, one quarter.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["dividing fractions", "reciprocal"],
    "questionText": "Work out $\\frac{1}{2} \\div \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} \\div \\frac{1}{4}", "explanation": "Dividing by a fraction asks how many of that fraction fit into the first one.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the rule for dividing fractions.", "workingLatex": "a \\div \\frac{c}{d} = a \\times \\frac{d}{c}", "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal (the fraction turned upside down).", "diagram": null },
        { "stepNumber": 3, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{1}{4} \\rightarrow \\frac{4}{1}", "explanation": "The reciprocal of one quarter is four, since one quarter multiplied by four gives one.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{1}{2} \\times \\frac{4}{1}", "explanation": "We change the division into multiplication using the reciprocal.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the fractions.", "workingLatex": "\\frac{1 \\times 4}{2 \\times 1} = \\frac{4}{2}", "explanation": "Multiplying tops and bottoms gives four halves.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify to a whole number.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four halves make two wholes, which makes sense as two quarters fit into a half twice.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["dividing fractions", "reciprocal", "mixed number answer"],
    "questionText": "Work out $\\frac{2}{3} \\div \\frac{4}{9}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{9}", "explanation": "We are dividing one fraction by another, so we will multiply by the reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{4}{9} \\rightarrow \\frac{9}{4}", "explanation": "The reciprocal of four ninths is nine quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{4}", "explanation": "Division by a fraction becomes multiplication by its reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel common factors.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{4} = \\frac{1}{1} \\times \\frac{3}{2}", "explanation": "The $2$ cancels with the $4$ to leave $1$ and $2$, and the $3$ cancels with the $9$ to leave $1$ and $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the results.", "workingLatex": "\\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2}", "explanation": "Multiplying the cancelled fractions gives three halves.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Two halves make one whole with one half left over.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{9} = 1\\frac{1}{2}", "explanation": "The quotient is one and one half.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["dividing fractions", "whole number", "reciprocal"],
    "questionText": "Work out $\\frac{3}{4} \\div 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{4} \\div 2", "explanation": "Dividing three quarters by $2$ means splitting it into two equal parts.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "2 = \\frac{2}{1}", "explanation": "Writing $2$ over $1$ lets us use the reciprocal rule.", "diagram": null },
        { "stepNumber": 3, "description": "Turn the divisor upside down.", "workingLatex": "\\frac{2}{1} \\rightarrow \\frac{1}{2}", "explanation": "The reciprocal of $2$ is one half.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{3}{4} \\times \\frac{1}{2}", "explanation": "Dividing by $2$ is the same as multiplying by one half.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the fractions.", "workingLatex": "\\frac{3 \\times 1}{4 \\times 2} = \\frac{3}{8}", "explanation": "Multiplying tops and bottoms gives three eighths.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\div 2 = \\frac{3}{8}", "explanation": "Half of three quarters is three eighths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{8}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["subtracting fractions", "different denominators", "lcm"],
    "questionText": "Work out $\\frac{5}{6} - \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{5}{6} - \\frac{1}{4}", "explanation": "Sixths and quarters are different sizes, so we need a common denominator first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(6, 4) = 12", "explanation": "The smallest number both $6$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{5}{6} = \\frac{5 \\times 2}{6 \\times 2} = \\frac{10}{12}", "explanation": "Multiplying top and bottom by $2$ writes five sixths as ten twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ writes one quarter as three twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\frac{10}{12} - \\frac{3}{12}", "explanation": "Both fractions are now twelfths, so they can be subtracted.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the numerators.", "workingLatex": "\\frac{10-3}{12} = \\frac{7}{12}", "explanation": "Ten twelfths take away three twelfths leaves seven twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} - \\frac{1}{4} = \\frac{7}{12}", "explanation": "Since $7$ and $12$ share no common factor, seven twelfths is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["adding fractions", "different denominators", "mixed number answer"],
    "questionText": "Work out $\\frac{3}{5} + \\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{5} + \\frac{1}{2}", "explanation": "Fifths and halves are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(5, 2) = 10", "explanation": "The smallest number both $5$ and $2$ divide into is $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}", "explanation": "Multiplying top and bottom by $2$ gives six tenths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{2} = \\frac{1 \\times 5}{2 \\times 5} = \\frac{5}{10}", "explanation": "Multiplying top and bottom by $5$ gives five tenths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{6}{10} + \\frac{5}{10} = \\frac{11}{10}", "explanation": "Six tenths plus five tenths makes eleven tenths, which is more than one whole.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{11}{10} = 1\\frac{1}{10}", "explanation": "Ten tenths make one whole, leaving one tenth over.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{5} + \\frac{1}{2} = 1\\frac{1}{10}", "explanation": "The total is one and one tenth.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{10}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["multiplying fractions", "whole number", "mixed number answer"],
    "questionText": "Work out $5 \\times \\frac{2}{7}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "5 \\times \\frac{2}{7}", "explanation": "This means five lots of two sevenths.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "5 = \\frac{5}{1}", "explanation": "Writing $5$ over $1$ lets us multiply tops and bottoms.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "5 \\times 2 = 10", "explanation": "The tops multiply to give the new numerator.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "1 \\times 7 = 7", "explanation": "The bottoms multiply to give the new denominator.", "diagram": null },
        { "stepNumber": 5, "description": "Write the resulting fraction.", "workingLatex": "5 \\times \\frac{2}{7} = \\frac{10}{7}", "explanation": "This improper fraction is more than one whole.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{10}{7} = 1\\frac{3}{7}", "explanation": "Seven sevenths make one whole, leaving three sevenths over.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{3}{7}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["dividing fractions", "reciprocal", "same denominator"],
    "questionText": "Work out $\\frac{4}{5} \\div \\frac{2}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{4}{5} \\div \\frac{2}{5}", "explanation": "We are finding how many lots of two fifths fit into four fifths.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{2}{5} \\rightarrow \\frac{5}{2}", "explanation": "The reciprocal of two fifths is five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{4}{5} \\times \\frac{5}{2}", "explanation": "Dividing by a fraction becomes multiplying by its reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel common factors.", "workingLatex": "\\frac{4}{\\cancel{5}} \\times \\frac{\\cancel{5}}{2} = \\frac{4}{2}", "explanation": "The $5$s cancel, leaving four over two.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify to a whole number.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four halves make two, so two fifths fit into four fifths exactly twice.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{4}{5} \\div \\frac{2}{5} = 2", "explanation": "The quotient is $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["mixed numbers", "adding", "same denominator", "simplifying"],
    "questionText": "Work out $1\\frac{1}{4} + 2\\frac{1}{4}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "1\\frac{1}{4} + 2\\frac{1}{4}", "explanation": "We are adding two mixed numbers, so it is neatest to deal with the whole parts and the fraction parts separately.", "diagram": null },
        { "stepNumber": 2, "description": "Add the whole-number parts.", "workingLatex": "1 + 2 = 3", "explanation": "The whole ones add straightforwardly to give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Check the fraction denominators.", "workingLatex": "4 = 4", "explanation": "Both fraction parts are quarters, so they are already the same size.", "diagram": null },
        { "stepNumber": 4, "description": "Add the fraction parts.", "workingLatex": "\\frac{1}{4} + \\frac{1}{4} = \\frac{2}{4}", "explanation": "One quarter plus one quarter makes two quarters.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the whole and fraction parts.", "workingLatex": "3 + \\frac{2}{4}", "explanation": "We bring the whole part and the fraction part back together.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the fraction part.", "workingLatex": "\\frac{2}{4} = \\frac{1}{2}", "explanation": "Two quarters is the same as one half.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "3\\frac{1}{2}", "explanation": "Three wholes and one half form the mixed number.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm it is in simplest form.", "workingLatex": "\\gcd(1, 2) = 1", "explanation": "The fraction part cannot be simplified further, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{1}{4} + 2\\frac{1}{4} = 3\\frac{1}{2}", "explanation": "The total is three and one half.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["mixed numbers", "adding", "different denominators", "lcm"],
    "questionText": "Work out $1\\frac{1}{2} + 2\\frac{1}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "1\\frac{1}{2} + 2\\frac{1}{3}", "explanation": "We add the whole parts and the fraction parts separately.", "diagram": null },
        { "stepNumber": 2, "description": "Add the whole-number parts.", "workingLatex": "1 + 2 = 3", "explanation": "The whole ones add to give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Look at the fraction parts.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3}", "explanation": "Halves and thirds are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(2, 3) = 6", "explanation": "The smallest number both $2$ and $3$ divide into is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}", "explanation": "Multiplying top and bottom by $3$ writes one half as three sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ writes one third as two sixths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the fraction parts.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}", "explanation": "Three sixths plus two sixths makes five sixths.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the whole and fraction parts.", "workingLatex": "3 + \\frac{5}{6} = 3\\frac{5}{6}", "explanation": "Three wholes and five sixths make the mixed number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{1}{2} + 2\\frac{1}{3} = 3\\frac{5}{6}", "explanation": "The total is three and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "adding", "regrouping", "carrying"],
    "questionText": "Work out $2\\frac{3}{4} + 1\\frac{3}{4}$, giving your answer as a mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\frac{3}{4} + 1\\frac{3}{4}", "explanation": "We add whole parts and fraction parts separately, watching in case the fractions add up to more than one whole.", "diagram": null },
        { "stepNumber": 2, "description": "Add the whole-number parts.", "workingLatex": "2 + 1 = 3", "explanation": "The whole ones add to give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the fraction parts.", "workingLatex": "\\frac{3}{4} + \\frac{3}{4} = \\frac{6}{4}", "explanation": "The denominators match, so we add the numerators to get six quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Notice the fraction is improper.", "workingLatex": "\\frac{6}{4} > 1", "explanation": "Six quarters is more than one whole, so it needs regrouping into a whole and a remaining fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the improper fraction to a mixed number.", "workingLatex": "\\frac{6}{4} = 1\\frac{2}{4}", "explanation": "Four quarters make one whole, leaving two quarters over.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the leftover fraction.", "workingLatex": "\\frac{2}{4} = \\frac{1}{2}", "explanation": "Two quarters is the same as one half.", "diagram": null },
        { "stepNumber": 7, "description": "Carry the extra whole into the whole-number part.", "workingLatex": "3 + 1 = 4", "explanation": "The extra whole from the fractions is added to the $3$ we already had.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the parts.", "workingLatex": "4 + \\frac{1}{2} = 4\\frac{1}{2}", "explanation": "Four wholes and one half make the final mixed number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2\\frac{3}{4} + 1\\frac{3}{4} = 4\\frac{1}{2}", "explanation": "The total is four and one half.", "diagram": null }
      ],
      "finalAnswer": "$4\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "same denominator", "simplifying"],
    "questionText": "Work out $3\\frac{3}{4} - 1\\frac{1}{4}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "3\\frac{3}{4} - 1\\frac{1}{4}", "explanation": "We subtract the whole parts and the fraction parts separately.", "diagram": null },
        { "stepNumber": 2, "description": "Check the fraction parts.", "workingLatex": "\\frac{3}{4} \\ge \\frac{1}{4}", "explanation": "The first fraction is larger than the second, so no borrowing is needed.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract the whole-number parts.", "workingLatex": "3 - 1 = 2", "explanation": "The whole ones subtract to give $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}", "explanation": "Three quarters take away one quarter leaves two quarters.", "diagram": null },
        { "stepNumber": 5, "description": "Combine the parts.", "workingLatex": "2 + \\frac{2}{4}", "explanation": "We bring the whole and fraction parts back together.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the fraction part.", "workingLatex": "\\frac{2}{4} = \\frac{1}{2}", "explanation": "Two quarters is one half.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "2\\frac{1}{2}", "explanation": "Two wholes and one half form the mixed number.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3\\frac{3}{4} - 1\\frac{1}{4} = 2\\frac{1}{2}", "explanation": "The difference is two and one half.", "diagram": null },
        { "stepNumber": 9, "description": "Check by adding back.", "workingLatex": "2\\frac{1}{2} + 1\\frac{1}{4} = 3\\frac{3}{4}", "explanation": "Adding the answer to what we subtracted returns the original number, confirming the result.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "different denominators", "lcm"],
    "questionText": "Work out $4\\frac{2}{3} - 1\\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "4\\frac{2}{3} - 1\\frac{1}{4}", "explanation": "We subtract whole parts and fraction parts separately, but the fractions have different denominators.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator for the fractions.", "workingLatex": "\\text{lcm}(3, 4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ writes two thirds as eight twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ writes one quarter as three twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Check whether borrowing is needed.", "workingLatex": "\\frac{8}{12} \\ge \\frac{3}{12}", "explanation": "The first fraction is larger, so we can subtract without borrowing.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the whole-number parts.", "workingLatex": "4 - 1 = 3", "explanation": "The whole ones subtract to give $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{8}{12} - \\frac{3}{12} = \\frac{5}{12}", "explanation": "Eight twelfths take away three twelfths leaves five twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the parts.", "workingLatex": "3 + \\frac{5}{12} = 3\\frac{5}{12}", "explanation": "Three wholes and five twelfths make the mixed number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4\\frac{2}{3} - 1\\frac{1}{4} = 3\\frac{5}{12}", "explanation": "The difference is three and five twelfths.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{5}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "borrowing", "regrouping"],
    "questionText": "Work out $3\\frac{1}{4} - 1\\frac{3}{4}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "3\\frac{1}{4} - 1\\frac{3}{4}", "explanation": "We plan to subtract the parts separately, but must first compare the fraction parts.", "diagram": null },
        { "stepNumber": 2, "description": "Compare the fraction parts.", "workingLatex": "\\frac{1}{4} < \\frac{3}{4}", "explanation": "The fraction we are taking away is bigger than the one we start with, so we must borrow one whole.", "diagram": null },
        { "stepNumber": 3, "description": "Borrow one whole and write it as quarters.", "workingLatex": "1 = \\frac{4}{4}", "explanation": "One whole is the same as four quarters, matching the denominator we are using.", "diagram": null },
        { "stepNumber": 4, "description": "Regroup the first mixed number.", "workingLatex": "3\\frac{1}{4} = 2 + \\frac{4}{4} + \\frac{1}{4} = 2\\frac{5}{4}", "explanation": "We take one whole from the $3$ and add it to the fraction, turning one quarter into five quarters.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "2\\frac{5}{4} - 1\\frac{3}{4}", "explanation": "Now the first fraction part is larger, so subtraction is possible.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the whole-number parts.", "workingLatex": "2 - 1 = 1", "explanation": "The whole ones subtract to give $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4}", "explanation": "Five quarters take away three quarters leaves two quarters.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify the fraction part.", "workingLatex": "\\frac{2}{4} = \\frac{1}{2}", "explanation": "Two quarters is one half.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the parts.", "workingLatex": "1 + \\frac{1}{2} = 1\\frac{1}{2}", "explanation": "One whole and one half make the mixed number.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "3\\frac{1}{4} - 1\\frac{3}{4} = 1\\frac{1}{2}", "explanation": "The difference is one and one half.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "borrowing", "different denominators"],
    "questionText": "Work out $5\\frac{1}{3} - 2\\frac{1}{2}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "5\\frac{1}{3} - 2\\frac{1}{2}", "explanation": "The fraction parts have different denominators, so we convert them before comparing.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(3, 2) = 6", "explanation": "The smallest number both $3$ and $2$ divide into is $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert both fraction parts.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}, \\; \\frac{1}{2} = \\frac{3}{6}", "explanation": "Rewriting both in sixths lets us compare and subtract them.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the fraction parts.", "workingLatex": "\\frac{2}{6} < \\frac{3}{6}", "explanation": "The starting fraction is smaller, so we must borrow one whole.", "diagram": null },
        { "stepNumber": 5, "description": "Regroup the first mixed number.", "workingLatex": "5\\frac{2}{6} = 4 + \\frac{6}{6} + \\frac{2}{6} = 4\\frac{8}{6}", "explanation": "Taking one whole (six sixths) from the $5$ turns two sixths into eight sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "4\\frac{8}{6} - 2\\frac{3}{6}", "explanation": "Now the first fraction part is larger, so we can subtract.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the whole-number parts.", "workingLatex": "4 - 2 = 2", "explanation": "The whole ones subtract to give $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{8}{6} - \\frac{3}{6} = \\frac{5}{6}", "explanation": "Eight sixths take away three sixths leaves five sixths.", "diagram": null },
        { "stepNumber": 9, "description": "Combine the parts.", "workingLatex": "2 + \\frac{5}{6} = 2\\frac{5}{6}", "explanation": "Two wholes and five sixths make the mixed number.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "5\\frac{1}{3} - 2\\frac{1}{2} = 2\\frac{5}{6}", "explanation": "The difference is two and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{4}{9} \\times \\frac{3}{8}$, cancelling before you multiply.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8}", "explanation": "Cancelling first keeps the numbers small and gives an answer that is already simplified.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $4$ and the $8$.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8} \\rightarrow \\frac{1}{9} \\times \\frac{3}{2}", "explanation": "The $4$ on top and the $8$ on the bottom both divide by $4$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $3$ and the $9$.", "workingLatex": "\\frac{1}{9} \\times \\frac{3}{2} \\rightarrow \\frac{1}{3} \\times \\frac{1}{2}", "explanation": "The $3$ on top and the $9$ on the bottom both divide by $3$, becoming $1$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "1 \\times 1 = 1", "explanation": "The tops multiply to $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "3 \\times 2 = 6", "explanation": "The bottoms multiply to $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the resulting fraction.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8} = \\frac{1}{6}", "explanation": "Combining the cancelled numbers gives one sixth.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm it is in simplest form.", "workingLatex": "\\gcd(1, 6) = 1", "explanation": "Because we cancelled first, the answer is already in lowest terms.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8} = \\frac{1}{6}", "explanation": "The product is one sixth.", "diagram": null },
        { "stepNumber": 9, "description": "Check without cancelling.", "workingLatex": "\\frac{4 \\times 3}{9 \\times 8} = \\frac{12}{72} = \\frac{1}{6}", "explanation": "Multiplying directly and simplifying gives the same answer, confirming our cancelling.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "multiplying", "improper fractions", "cancelling"],
    "questionText": "Work out $1\\frac{1}{2} \\times 2\\frac{1}{3}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "1\\frac{1}{2} \\times 2\\frac{1}{3}", "explanation": "To multiply mixed numbers we first turn each into an improper fraction; we cannot multiply the whole parts and fraction parts separately.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus the extra half makes three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{1}{3} = \\frac{7}{3}", "explanation": "Two wholes are six thirds, plus the extra third makes seven thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{2} \\times \\frac{7}{3}", "explanation": "Now we have two improper fractions to multiply.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{\\cancel{3}}{2} \\times \\frac{7}{\\cancel{3}} = \\frac{1}{2} \\times \\frac{7}{1}", "explanation": "The $3$ on the top of the first fraction cancels with the $3$ on the bottom of the second.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the numerators.", "workingLatex": "1 \\times 7 = 7", "explanation": "The tops multiply to $7$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the denominators.", "workingLatex": "2 \\times 1 = 2", "explanation": "The bottoms multiply to $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the resulting fraction.", "workingLatex": "\\frac{7}{2}", "explanation": "The product is seven halves, an improper fraction.", "diagram": null },
        { "stepNumber": 9, "description": "Convert to a mixed number.", "workingLatex": "\\frac{7}{2} = 3\\frac{1}{2}", "explanation": "Six halves make three wholes, leaving one half over.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "1\\frac{1}{2} \\times 2\\frac{1}{3} = 3\\frac{1}{2}", "explanation": "The product is three and one half.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "multiplying", "improper fractions", "cancelling"],
    "questionText": "Work out $2\\frac{1}{4} \\times 1\\frac{1}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\frac{1}{4} \\times 1\\frac{1}{3}", "explanation": "We convert each mixed number to an improper fraction before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes are eight quarters, plus the extra quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus the extra third makes four thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{9}{4} \\times \\frac{4}{3}", "explanation": "Now we multiply the two improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the common factor of $4$.", "workingLatex": "\\frac{9}{\\cancel{4}} \\times \\frac{\\cancel{4}}{3} = \\frac{9}{1} \\times \\frac{1}{3}", "explanation": "The $4$ on the bottom of the first fraction cancels with the $4$ on the top of the second.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{9}{1} \\times \\frac{1}{3} = \\frac{3}{1} \\times \\frac{1}{1}", "explanation": "The $9$ and the $3$ both divide by $3$, becoming $3$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the numerators and denominators.", "workingLatex": "\\frac{3 \\times 1}{1 \\times 1} = \\frac{3}{1}", "explanation": "The tops give $3$ and the bottoms give $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify to a whole number.", "workingLatex": "\\frac{3}{1} = 3", "explanation": "Three over one is simply $3$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2\\frac{1}{4} \\times 1\\frac{1}{3} = 3", "explanation": "The product is exactly $3$.", "diagram": null }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["dividing fractions", "reciprocal", "cancelling", "mixed number answer"],
    "questionText": "Work out $\\frac{5}{6} \\div \\frac{2}{3}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{5}{6} \\div \\frac{2}{3}", "explanation": "We divide by multiplying by the reciprocal of the second fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{2}{3} \\rightarrow \\frac{3}{2}", "explanation": "The reciprocal of two thirds is three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{5}{6} \\times \\frac{3}{2}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{5}{\\cancel{6}} \\times \\frac{\\cancel{3}}{2} = \\frac{5}{2} \\times \\frac{1}{2}", "explanation": "The $3$ on top and the $6$ on the bottom both divide by $3$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerators.", "workingLatex": "5 \\times 1 = 5", "explanation": "The tops multiply to $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the denominators.", "workingLatex": "2 \\times 2 = 4", "explanation": "The bottoms multiply to $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the resulting fraction.", "workingLatex": "\\frac{5}{4}", "explanation": "The result is five quarters, an improper fraction.", "diagram": null },
        { "stepNumber": 8, "description": "Convert to a mixed number.", "workingLatex": "\\frac{5}{4} = 1\\frac{1}{4}", "explanation": "Four quarters make one whole, leaving one quarter over.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} \\div \\frac{2}{3} = 1\\frac{1}{4}", "explanation": "The quotient is one and one quarter.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "dividing", "reciprocal", "cancelling"],
    "questionText": "Work out $2\\frac{1}{2} \\div 1\\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\frac{1}{2} \\div 1\\frac{1}{4}", "explanation": "To divide mixed numbers we first change each into an improper fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes are four halves, plus the extra half makes five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{4} = \\frac{5}{4}", "explanation": "One whole is four quarters, plus the extra quarter makes five quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{5}{2} \\div \\frac{5}{4}", "explanation": "Now we have a division of two improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{5}{4} \\rightarrow \\frac{4}{5}", "explanation": "The reciprocal of five quarters is four fifths.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{5}{2} \\times \\frac{4}{5}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the common factor of $5$.", "workingLatex": "\\frac{\\cancel{5}}{2} \\times \\frac{4}{\\cancel{5}} = \\frac{1}{2} \\times \\frac{4}{1}", "explanation": "The $5$ on top of the first and the $5$ on the bottom of the second cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the common factor of $2$.", "workingLatex": "\\frac{1}{\\cancel{2}} \\times \\frac{\\cancel{4}}{1} = \\frac{1}{1} \\times \\frac{2}{1}", "explanation": "The $4$ and the $2$ both divide by $2$, becoming $2$ and $1$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the remaining fractions.", "workingLatex": "\\frac{1 \\times 2}{1 \\times 1} = \\frac{2}{1}", "explanation": "The tops give $2$ and the bottoms give $1$.", "diagram": null },
        { "stepNumber": 10, "description": "Simplify to a whole number.", "workingLatex": "\\frac{2}{1} = 2", "explanation": "Two over one is simply $2$.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} \\div 1\\frac{1}{4} = 2", "explanation": "The quotient is exactly $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "dividing", "reciprocal", "mixed number answer"],
    "questionText": "Work out $3\\frac{3}{4} \\div 1\\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "3\\frac{3}{4} \\div 1\\frac{1}{2}", "explanation": "We change each mixed number into an improper fraction before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "3\\frac{3}{4} = \\frac{15}{4}", "explanation": "Three wholes are twelve quarters, plus three more quarters makes fifteen quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus the extra half makes three halves.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{15}{4} \\div \\frac{3}{2}", "explanation": "Now we divide two improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{3}{2} \\rightarrow \\frac{2}{3}", "explanation": "The reciprocal of three halves is two thirds.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{15}{4} \\times \\frac{2}{3}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{15}{4} \\times \\frac{2}{3} \\rightarrow \\frac{5}{4} \\times \\frac{2}{1}", "explanation": "The $15$ and the $3$ both divide by $3$, becoming $5$ and $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the common factor of $2$.", "workingLatex": "\\frac{5}{4} \\times \\frac{2}{1} \\rightarrow \\frac{5}{2} \\times \\frac{1}{1}", "explanation": "The $2$ and the $4$ both divide by $2$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the remaining fractions.", "workingLatex": "\\frac{5 \\times 1}{2 \\times 1} = \\frac{5}{2}", "explanation": "The tops give $5$ and the bottoms give $2$.", "diagram": null },
        { "stepNumber": 10, "description": "Convert to a mixed number.", "workingLatex": "\\frac{5}{2} = 2\\frac{1}{2}", "explanation": "Four halves make two wholes, leaving one half over.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "3\\frac{3}{4} \\div 1\\frac{1}{2} = 2\\frac{1}{2}", "explanation": "The quotient is two and one half.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["adding and subtracting", "three fractions", "lcm"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4}", "explanation": "With three fractions we still need a single common denominator that works for all of them.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(2, 3, 4) = 12", "explanation": "The smallest number that $2$, $3$ and $4$ all divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{6}{12}", "explanation": "Multiplying top and bottom by $6$ writes one half as six twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiplying top and bottom by $4$ writes one third as four twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the third fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ writes one quarter as three twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{6}{12} + \\frac{4}{12} - \\frac{3}{12}", "explanation": "All fractions now count twelfths, so we can work left to right.", "diagram": null },
        { "stepNumber": 7, "description": "Add the first two fractions.", "workingLatex": "\\frac{6}{12} + \\frac{4}{12} = \\frac{10}{12}", "explanation": "Six twelfths plus four twelfths makes ten twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the third fraction.", "workingLatex": "\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}", "explanation": "Ten twelfths take away three twelfths leaves seven twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} = \\frac{7}{12}", "explanation": "Since $7$ and $12$ share no common factor, seven twelfths is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["adding and subtracting", "three fractions", "lcm"],
    "questionText": "Work out $\\frac{3}{4} - \\frac{1}{6} + \\frac{1}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{4} - \\frac{1}{6} + \\frac{1}{3}", "explanation": "We need one common denominator that fits all three fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(4, 6, 3) = 12", "explanation": "The smallest number that $4$, $6$ and $3$ all divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{6} = \\frac{2}{12}", "explanation": "Multiplying top and bottom by $2$ gives two twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the third fraction.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiplying top and bottom by $4$ gives four twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{9}{12} - \\frac{2}{12} + \\frac{4}{12}", "explanation": "All fractions now count twelfths, so we work left to right.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the second fraction.", "workingLatex": "\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}", "explanation": "Nine twelfths take away two twelfths leaves seven twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Add the third fraction.", "workingLatex": "\\frac{7}{12} + \\frac{4}{12} = \\frac{11}{12}", "explanation": "Seven twelfths plus four twelfths makes eleven twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} - \\frac{1}{6} + \\frac{1}{3} = \\frac{11}{12}", "explanation": "Since $11$ and $12$ share no common factor, eleven twelfths is the final answer.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{11}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{6}{7} \\times \\frac{14}{15}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{6}{7} \\times \\frac{14}{15}", "explanation": "We look for factors to cancel between a numerator and a denominator before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $7$ and the $14$.", "workingLatex": "\\frac{6}{\\cancel{7}} \\times \\frac{\\cancel{14}}{15} = \\frac{6}{1} \\times \\frac{2}{15}", "explanation": "The $7$ on the bottom of the first fraction and the $14$ on the top of the second both divide by $7$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $6$ and the $15$.", "workingLatex": "\\frac{6}{1} \\times \\frac{2}{15} = \\frac{2}{1} \\times \\frac{2}{5}", "explanation": "The $6$ and the $15$ both divide by $3$, becoming $2$ and $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "2 \\times 2 = 4", "explanation": "The tops multiply to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "1 \\times 5 = 5", "explanation": "The bottoms multiply to $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the resulting fraction.", "workingLatex": "\\frac{6}{7} \\times \\frac{14}{15} = \\frac{4}{5}", "explanation": "Combining the cancelled numbers gives four fifths.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm it is in simplest form.", "workingLatex": "\\gcd(4, 5) = 1", "explanation": "The numbers $4$ and $5$ share no common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 8, "description": "Check by multiplying directly.", "workingLatex": "\\frac{6 \\times 14}{7 \\times 15} = \\frac{84}{105} = \\frac{4}{5}", "explanation": "Multiplying without cancelling and then simplifying gives the same result, confirming our working.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{6}{7} \\times \\frac{14}{15} = \\frac{4}{5}", "explanation": "The product is four fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{4}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["multiplying fractions", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{9}{10}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{10}", "explanation": "We cancel matching factors between the tops and bottoms first.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $3$ and the $9$.", "workingLatex": "\\frac{2}{\\cancel{3}} \\times \\frac{\\cancel{9}}{10} = \\frac{2}{1} \\times \\frac{3}{10}", "explanation": "The $3$ on the bottom of the first fraction and the $9$ on the top of the second both divide by $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $2$ and the $10$.", "workingLatex": "\\frac{2}{1} \\times \\frac{3}{10} = \\frac{1}{1} \\times \\frac{3}{5}", "explanation": "The $2$ and the $10$ both divide by $2$, becoming $1$ and $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "1 \\times 3 = 3", "explanation": "The tops multiply to $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "1 \\times 5 = 5", "explanation": "The bottoms multiply to $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the resulting fraction.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{10} = \\frac{3}{5}", "explanation": "Combining the cancelled numbers gives three fifths.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm it is in simplest form.", "workingLatex": "\\gcd(3, 5) = 1", "explanation": "The numbers $3$ and $5$ share no common factor, so the answer is complete.", "diagram": null },
        { "stepNumber": 8, "description": "Check by multiplying directly.", "workingLatex": "\\frac{2 \\times 9}{3 \\times 10} = \\frac{18}{30} = \\frac{3}{5}", "explanation": "Multiplying without cancelling and then simplifying gives the same result, confirming our working.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{10} = \\frac{3}{5}", "explanation": "The product is three fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["dividing fractions", "reciprocal", "cancelling", "mixed number answer"],
    "questionText": "Work out $\\frac{3}{5} \\div \\frac{6}{25}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{3}{5} \\div \\frac{6}{25}", "explanation": "We divide by multiplying by the reciprocal of the second fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{6}{25} \\rightarrow \\frac{25}{6}", "explanation": "The reciprocal of six twenty-fifths is twenty-five sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{3}{5} \\times \\frac{25}{6}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $5$ and the $25$.", "workingLatex": "\\frac{3}{\\cancel{5}} \\times \\frac{\\cancel{25}}{6} = \\frac{3}{1} \\times \\frac{5}{6}", "explanation": "The $5$ and the $25$ both divide by $5$, becoming $1$ and $5$.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $3$ and the $6$.", "workingLatex": "\\frac{3}{1} \\times \\frac{5}{6} = \\frac{1}{1} \\times \\frac{5}{2}", "explanation": "The $3$ and the $6$ both divide by $3$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the remaining fractions.", "workingLatex": "\\frac{1 \\times 5}{1 \\times 2} = \\frac{5}{2}", "explanation": "The tops give $5$ and the bottoms give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a mixed number.", "workingLatex": "\\frac{5}{2} = 2\\frac{1}{2}", "explanation": "Four halves make two wholes, leaving one half over.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{3}{5} \\div \\frac{6}{25} = 2\\frac{1}{2}", "explanation": "The quotient is two and one half.", "diagram": null },
        { "stepNumber": 9, "description": "Sense-check the size.", "workingLatex": "\\frac{6}{25} < \\frac{3}{5}", "explanation": "Since we are dividing by something smaller than the first fraction, an answer greater than $1$ is sensible.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["adding fractions", "three fractions", "lcm", "whole number answer"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}", "explanation": "We add three fractions, so we first put them over one common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(2, 3, 6) = 6", "explanation": "Since $6$ is a multiple of both $2$ and $3$, sixths work for all three fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}", "explanation": "Multiplying top and bottom by $3$ gives three sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ gives two sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the third fraction as it is.", "workingLatex": "\\frac{1}{6}", "explanation": "This fraction is already in sixths, so no change is needed.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6}", "explanation": "All three fractions now count sixths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the numerators.", "workingLatex": "\\frac{3+2+1}{6} = \\frac{6}{6}", "explanation": "Three plus two plus one gives six sixths.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{6}{6} = 1", "explanation": "Six sixths make one whole.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1", "explanation": "The three fractions add up to exactly one whole.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "value",
    "tags": ["subtracting fractions", "whole number", "mixed number answer"],
    "questionText": "Work out $3 - \\frac{2}{5}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "3 - \\frac{2}{5}", "explanation": "We are taking a fraction away from a whole number, so we rewrite the whole number as a fraction with the same denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Choose the common denominator.", "workingLatex": "5", "explanation": "The fraction is in fifths, so we express $3$ in fifths too.", "diagram": null },
        { "stepNumber": 3, "description": "Write the whole number as fifths.", "workingLatex": "3 = \\frac{15}{5}", "explanation": "Each whole is five fifths, so three wholes are fifteen fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{15}{5} - \\frac{2}{5}", "explanation": "Both terms are now in fifths, so they can be subtracted.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{15-2}{5} = \\frac{13}{5}", "explanation": "Fifteen fifths take away two fifths leaves thirteen fifths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{13}{5} = 2\\frac{3}{5}", "explanation": "Ten fifths make two wholes, leaving three fifths over.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm the fraction part is simplest.", "workingLatex": "\\gcd(3, 5) = 1", "explanation": "Three fifths cannot be simplified, so the mixed number is complete.", "diagram": null },
        { "stepNumber": 8, "description": "Check by adding back.", "workingLatex": "2\\frac{3}{5} + \\frac{2}{5} = 3", "explanation": "Adding the answer to what we subtracted returns the original $3$, confirming the result.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "3 - \\frac{2}{5} = 2\\frac{3}{5}", "explanation": "The result is two and three fifths.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "whole number", "borrowing"],
    "questionText": "Work out $4 - 1\\frac{2}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "4 - 1\\frac{2}{3}", "explanation": "We are subtracting a mixed number from a whole number, so we borrow one whole and write it as a fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Borrow one whole from the $4$.", "workingLatex": "4 = 3 + 1", "explanation": "Splitting off one whole leaves $3$ and gives us a whole to turn into thirds.", "diagram": null },
        { "stepNumber": 3, "description": "Write the borrowed whole as thirds.", "workingLatex": "1 = \\frac{3}{3}", "explanation": "One whole is three thirds, matching the denominator we need.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the first number.", "workingLatex": "4 = 3\\frac{3}{3}", "explanation": "Now the whole number is written as a mixed number ready for subtraction.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "3\\frac{3}{3} - 1\\frac{2}{3}", "explanation": "Both numbers now have a fraction part in thirds.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the whole-number parts.", "workingLatex": "3 - 1 = 2", "explanation": "The whole ones subtract to give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{3}{3} - \\frac{2}{3} = \\frac{1}{3}", "explanation": "Three thirds take away two thirds leaves one third.", "diagram": null },
        { "stepNumber": 8, "description": "Combine the parts.", "workingLatex": "2 + \\frac{1}{3} = 2\\frac{1}{3}", "explanation": "Two wholes and one third make the mixed number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4 - 1\\frac{2}{3} = 2\\frac{1}{3}", "explanation": "The difference is two and one third.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["mixed numbers", "multiplying", "whole number", "mixed number answer"],
    "questionText": "Work out $2\\frac{2}{5} \\times 3$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\frac{2}{5} \\times 3", "explanation": "To multiply a mixed number by a whole number we first change the mixed number into an improper fraction.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number.", "workingLatex": "2\\frac{2}{5} = \\frac{12}{5}", "explanation": "Two wholes are ten fifths, plus two more fifths makes twelve fifths.", "diagram": null },
        { "stepNumber": 3, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Writing $3$ over $1$ lets us multiply tops and bottoms.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{12}{5} \\times \\frac{3}{1}", "explanation": "Now we multiply the two fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerators.", "workingLatex": "12 \\times 3 = 36", "explanation": "The tops multiply to $36$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the denominators.", "workingLatex": "5 \\times 1 = 5", "explanation": "The bottoms multiply to $5$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the resulting fraction.", "workingLatex": "\\frac{36}{5}", "explanation": "The product is thirty-six fifths, an improper fraction.", "diagram": null },
        { "stepNumber": 8, "description": "Convert to a mixed number.", "workingLatex": "\\frac{36}{5} = 7\\frac{1}{5}", "explanation": "Thirty-five fifths make seven wholes, leaving one fifth over.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2\\frac{2}{5} \\times 3 = 7\\frac{1}{5}", "explanation": "The product is seven and one fifth.", "diagram": null }
      ],
      "finalAnswer": "$7\\frac{1}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "adding", "same denominator", "regrouping"],
    "questionText": "Work out $2\\frac{3}{5} + 1\\frac{4}{5}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\frac{3}{5} + 1\\frac{4}{5}", "explanation": "We add the whole parts and the fraction parts separately, watching for a fraction total over one whole.", "diagram": null },
        { "stepNumber": 2, "description": "Add the whole-number parts.", "workingLatex": "2 + 1 = 3", "explanation": "The whole ones add to give $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Add the fraction parts.", "workingLatex": "\\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}", "explanation": "The denominators match, so we add the numerators to get seven fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Notice the fraction is improper.", "workingLatex": "\\frac{7}{5} > 1", "explanation": "Seven fifths is more than one whole, so it needs regrouping.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the improper fraction.", "workingLatex": "\\frac{7}{5} = 1\\frac{2}{5}", "explanation": "Five fifths make one whole, leaving two fifths over.", "diagram": null },
        { "stepNumber": 6, "description": "Carry the extra whole.", "workingLatex": "3 + 1 = 4", "explanation": "The extra whole from the fractions joins the $3$ we already had.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the parts.", "workingLatex": "4 + \\frac{2}{5} = 4\\frac{2}{5}", "explanation": "Four wholes and two fifths make the mixed number.", "diagram": null },
        { "stepNumber": 8, "description": "Check the fraction is simplest.", "workingLatex": "\\gcd(2, 5) = 1", "explanation": "The fraction part cannot be simplified, so the answer is complete.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2\\frac{3}{5} + 1\\frac{4}{5} = 4\\frac{2}{5}", "explanation": "The total is four and two fifths.", "diagram": null }
      ],
      "finalAnswer": "$4\\frac{2}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["worded problem", "multiplying fractions", "recipe", "mixed number answer"],
    "questionText": "A recipe for one batch of pancakes uses $\\frac{3}{4}$ of a cup of flour. How many cups of flour are needed to make $3$ batches?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\frac{3}{4} \\times 3", "explanation": "Each batch uses three quarters of a cup, so for three batches we multiply this amount by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Writing $3$ over $1$ lets us apply the fraction multiplication rule.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "3 \\times 3 = 9", "explanation": "The tops multiply to $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "4 \\times 1 = 4", "explanation": "The bottoms multiply to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the resulting fraction.", "workingLatex": "\\frac{3}{4} \\times 3 = \\frac{9}{4}", "explanation": "Three batches need nine quarters of a cup in total.", "diagram": null },
        { "stepNumber": 6, "description": "Convert to a mixed number.", "workingLatex": "\\frac{9}{4} = 2\\frac{1}{4}", "explanation": "Eight quarters make two whole cups, leaving one quarter over.", "diagram": null },
        { "stepNumber": 7, "description": "Check the size is sensible.", "workingLatex": "3 \\times \\tfrac{3}{4} \\approx 3 \\times 0.75 = 2.25", "explanation": "Three lots of about three quarters of a cup should be a little over two cups, which matches our answer.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret with units.", "workingLatex": "2\\frac{1}{4} \\text{ cups}", "explanation": "The answer represents an amount of flour, so we attach the unit of cups.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\times 3 = 2\\frac{1}{4}", "explanation": "Three batches need two and one quarter cups of flour.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{4}$ cups"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["worded problem", "dividing fractions", "length", "mixed numbers"],
    "questionText": "A ribbon is $2\\frac{1}{2}$ metres long. It is cut into pieces each $\\frac{1}{4}$ of a metre long. How many pieces are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "2\\frac{1}{2} \\div \\frac{1}{4}", "explanation": "We want to know how many quarter-metre pieces fit into the ribbon, which is a division.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes are four halves, plus the extra half makes five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "\\frac{5}{2} \\div \\frac{1}{4}", "explanation": "Now the division uses an improper fraction and a proper fraction.", "diagram": null },
        { "stepNumber": 4, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{1}{4} \\rightarrow \\frac{4}{1}", "explanation": "The reciprocal of one quarter is $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{5}{2} \\times \\frac{4}{1}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the common factor of $2$.", "workingLatex": "\\frac{5}{\\cancel{2}} \\times \\frac{\\cancel{4}}{1} = \\frac{5}{1} \\times \\frac{2}{1}", "explanation": "The $4$ and the $2$ both divide by $2$, becoming $2$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the fractions.", "workingLatex": "\\frac{5 \\times 2}{1 \\times 1} = \\frac{10}{1}", "explanation": "The tops give $10$ and the bottoms give $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify to a whole number.", "workingLatex": "\\frac{10}{1} = 10", "explanation": "Ten over one is simply $10$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the answer.", "workingLatex": "10 \\text{ pieces}", "explanation": "The ribbon gives exactly ten quarter-metre pieces.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} \\div \\frac{1}{4} = 10", "explanation": "There are $10$ pieces of ribbon.", "diagram": null }
      ],
      "finalAnswer": "$10$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["worded problem", "dividing fractions", "sharing"],
    "questionText": "$\\frac{3}{4}$ of a pizza is shared equally between $3$ people. What fraction of a whole pizza does each person receive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\frac{3}{4} \\div 3", "explanation": "Sharing three quarters of a pizza equally between three people means dividing the amount by $3$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Writing $3$ over $1$ lets us use the reciprocal rule.", "diagram": null },
        { "stepNumber": 3, "description": "Turn the divisor upside down.", "workingLatex": "\\frac{3}{1} \\rightarrow \\frac{1}{3}", "explanation": "The reciprocal of $3$ is one third.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{3}{4} \\times \\frac{1}{3}", "explanation": "Dividing by $3$ is the same as multiplying by one third.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{\\cancel{3}}{4} \\times \\frac{1}{\\cancel{3}} = \\frac{1}{4} \\times \\frac{1}{1}", "explanation": "The $3$ on top of the first fraction cancels with the $3$ on the bottom of the second.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the remaining fractions.", "workingLatex": "\\frac{1 \\times 1}{4 \\times 1} = \\frac{1}{4}", "explanation": "The tops give $1$ and the bottoms give $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Check by multiplying back.", "workingLatex": "\\frac{1}{4} \\times 3 = \\frac{3}{4}", "explanation": "Three shares of one quarter rebuild the original three quarters, confirming the answer.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the answer.", "workingLatex": "\\frac{1}{4} \\text{ of a pizza}", "explanation": "Each person receives one quarter of a whole pizza.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\div 3 = \\frac{1}{4}", "explanation": "Each person gets one quarter of a pizza.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["order of operations", "multiplying", "adding", "lcm"],
    "questionText": "Work out $\\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan the order.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{4}", "explanation": "The order of operations tells us to complete the multiplication before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the first two fractions.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3} = \\frac{2}{6}", "explanation": "Multiplying the tops and bottoms gives two sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the product.", "workingLatex": "\\frac{2}{6} = \\frac{1}{3}", "explanation": "Two sixths simplifies to one third.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{1}{3} + \\frac{1}{4}", "explanation": "Now only the addition remains.", "diagram": null },
        { "stepNumber": 5, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(3, 4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiplying top and bottom by $4$ gives four twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Add the fractions.", "workingLatex": "\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}", "explanation": "Four twelfths plus three twelfths makes seven twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{4} = \\frac{7}{12}", "explanation": "The result is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["order of operations", "multiplying", "adding", "cancelling"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{3}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan the order.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} \\times \\frac{3}{4}", "explanation": "Multiplication is done before addition, so we work on the product first.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "\\frac{1}{3} \\times \\frac{3}{4}", "explanation": "We deal with these two fractions before touching the one half.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "1 \\times 3 = 3", "explanation": "The tops multiply to $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "3 \\times 4 = 12", "explanation": "The bottoms multiply to $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the product.", "workingLatex": "\\frac{3}{12} = \\frac{1}{4}", "explanation": "Three twelfths simplifies to one quarter.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{4}", "explanation": "Now only the addition remains.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a common denominator.", "workingLatex": "\\frac{1}{2} = \\frac{2}{4}", "explanation": "Since $4$ is a multiple of $2$, we write one half as two quarters.", "diagram": null },
        { "stepNumber": 8, "description": "Add the fractions.", "workingLatex": "\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}", "explanation": "Two quarters plus one quarter makes three quarters.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{4}", "explanation": "The result is three quarters.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["mixed numbers", "adding and subtracting", "multi-step", "lcm"],
    "questionText": "Work out $2\\frac{1}{2} + 1\\frac{2}{3} - \\frac{3}{4}$, giving your answer as a mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "2\\frac{1}{2} + 1\\frac{2}{3} - \\frac{3}{4}", "explanation": "Working with improper fractions keeps the regrouping tidy, so we convert the mixed numbers and work left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes are four halves, plus the extra half makes five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{2}{3} = \\frac{5}{3}", "explanation": "One whole is three thirds, plus two more thirds makes five thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Find a common denominator for the addition.", "workingLatex": "\\text{lcm}(2, 3) = 6", "explanation": "To add five halves and five thirds we use sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert both fractions to sixths.", "workingLatex": "\\frac{5}{2} = \\frac{15}{6}, \\; \\frac{5}{3} = \\frac{10}{6}", "explanation": "Rewriting each fraction in sixths lets us add them directly.", "diagram": null },
        { "stepNumber": 6, "description": "Add the first two fractions.", "workingLatex": "\\frac{15}{6} + \\frac{10}{6} = \\frac{25}{6}", "explanation": "Fifteen sixths plus ten sixths makes twenty-five sixths.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the subtraction.", "workingLatex": "\\frac{25}{6} - \\frac{3}{4}", "explanation": "Now we subtract three quarters from our running total.", "diagram": null },
        { "stepNumber": 8, "description": "Find a common denominator for the subtraction.", "workingLatex": "\\text{lcm}(6, 4) = 12", "explanation": "The smallest number both $6$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 9, "description": "Convert the running total.", "workingLatex": "\\frac{25}{6} = \\frac{50}{12}", "explanation": "Multiplying top and bottom by $2$ writes twenty-five sixths as fifty twelfths.", "diagram": null },
        { "stepNumber": 10, "description": "Convert the fraction being subtracted.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ writes three quarters as nine twelfths.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract.", "workingLatex": "\\frac{50}{12} - \\frac{9}{12} = \\frac{41}{12}", "explanation": "Fifty twelfths take away nine twelfths leaves forty-one twelfths.", "diagram": null },
        { "stepNumber": 12, "description": "Convert to a mixed number.", "workingLatex": "\\frac{41}{12} = 3\\frac{5}{12}", "explanation": "Thirty-six twelfths make three wholes, leaving five twelfths over.", "diagram": null },
        { "stepNumber": 13, "description": "Check the fraction is simplest.", "workingLatex": "\\gcd(5, 12) = 1", "explanation": "The fraction part cannot be simplified further.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} + 1\\frac{2}{3} - \\frac{3}{4} = 3\\frac{5}{12}", "explanation": "The result is three and five twelfths.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{5}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["worded problem", "recipe", "scaling", "multiplying fractions"],
    "questionText": "A recipe uses $2\\frac{1}{4}$ cups of flour to make $12$ cookies. How many cups of flour are needed to make $30$ cookies?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\text{flour} = 2\\frac{1}{4} \\times (\\text{scale factor})", "explanation": "The amount of flour scales in the same proportion as the number of cookies, so we first find how many times bigger the new batch is.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the scale factor.", "workingLatex": "30 \\div 12", "explanation": "We compare the new number of cookies with the original number.", "diagram": null },
        { "stepNumber": 3, "description": "Write the scale factor as a fraction.", "workingLatex": "\\frac{30}{12}", "explanation": "A division can be written as a fraction, which is easier to simplify.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify the scale factor.", "workingLatex": "\\frac{30}{12} = \\frac{5}{2}", "explanation": "Both numbers divide by $6$, so the new batch is five halves (two and a half) times the size.", "diagram": null },
        { "stepNumber": 5, "description": "Set up the flour calculation.", "workingLatex": "2\\frac{1}{4} \\times \\frac{5}{2}", "explanation": "We multiply the original flour by the scale factor.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes are eight quarters, plus the extra quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "\\frac{9}{4} \\times \\frac{5}{2}", "explanation": "Now we multiply two fractions.", "diagram": null },
        { "stepNumber": 8, "description": "Check for cancelling.", "workingLatex": "\\gcd(9, 2) = 1, \\; \\gcd(5, 4) = 1", "explanation": "No numerator shares a factor with a denominator, so there is nothing to cancel.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the numerators.", "workingLatex": "9 \\times 5 = 45", "explanation": "The tops multiply to $45$.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the denominators.", "workingLatex": "4 \\times 2 = 8", "explanation": "The bottoms multiply to $8$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the resulting fraction.", "workingLatex": "\\frac{45}{8}", "explanation": "The total flour is forty-five eighths of a cup.", "diagram": null },
        { "stepNumber": 12, "description": "Convert to a mixed number.", "workingLatex": "\\frac{45}{8} = 5\\frac{5}{8}", "explanation": "Forty eighths make five wholes, leaving five eighths over.", "diagram": null },
        { "stepNumber": 13, "description": "Check the fraction is simplest.", "workingLatex": "\\gcd(5, 8) = 1", "explanation": "The fraction part is already in lowest terms.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret with units.", "workingLatex": "5\\frac{5}{8} \\text{ cups}", "explanation": "The answer is an amount of flour, so we attach the unit of cups.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "2\\frac{1}{4} \\times \\frac{5}{2} = 5\\frac{5}{8}", "explanation": "Making $30$ cookies needs five and five eighths cups of flour.", "diagram": null }
      ],
      "finalAnswer": "$5\\frac{5}{8}$ cups"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["brackets", "adding fractions", "dividing fractions", "multi-step"],
    "questionText": "Work out $\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\div \\frac{5}{6}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\div \\frac{5}{6}", "explanation": "The brackets must be worked out first, then we carry out the division.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the addition inside the brackets.", "workingLatex": "\\frac{2}{3} + \\frac{1}{4}", "explanation": "Thirds and quarters are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(3, 4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ gives eight twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Add inside the brackets.", "workingLatex": "\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}", "explanation": "Eight twelfths plus three twelfths makes eleven twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "\\frac{11}{12} \\div \\frac{5}{6}", "explanation": "Now we divide the bracket result by five sixths.", "diagram": null },
        { "stepNumber": 8, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{5}{6} \\rightarrow \\frac{6}{5}", "explanation": "The reciprocal of five sixths is six fifths.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{11}{12} \\times \\frac{6}{5}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 10, "description": "Cancel the common factor of $6$.", "workingLatex": "\\frac{11}{\\cancel{12}} \\times \\frac{\\cancel{6}}{5} = \\frac{11}{2} \\times \\frac{1}{5}", "explanation": "The $6$ and the $12$ both divide by $6$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply the numerators.", "workingLatex": "11 \\times 1 = 11", "explanation": "The tops multiply to $11$.", "diagram": null },
        { "stepNumber": 12, "description": "Multiply the denominators.", "workingLatex": "2 \\times 5 = 10", "explanation": "The bottoms multiply to $10$.", "diagram": null },
        { "stepNumber": 13, "description": "Write the resulting fraction.", "workingLatex": "\\frac{11}{10}", "explanation": "The result is eleven tenths, an improper fraction.", "diagram": null },
        { "stepNumber": 14, "description": "Convert to a mixed number.", "workingLatex": "\\frac{11}{10} = 1\\frac{1}{10}", "explanation": "Ten tenths make one whole, leaving one tenth over.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\div \\frac{5}{6} = 1\\frac{1}{10}", "explanation": "The result is one and one tenth.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{10}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["mixed numbers", "multiplying", "dividing", "multi-step"],
    "questionText": "Work out $1\\frac{1}{3} \\times 2\\frac{1}{4} \\div \\frac{3}{5}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "1\\frac{1}{3} \\times 2\\frac{1}{4} \\div \\frac{3}{5}", "explanation": "Multiplication and division have equal priority, so we work left to right after converting the mixed numbers.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus the extra third makes four thirds.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes are eight quarters, plus the extra quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the first multiplication.", "workingLatex": "\\frac{4}{3} \\times \\frac{9}{4}", "explanation": "We deal with the multiplication before the division.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the common factor of $4$.", "workingLatex": "\\frac{\\cancel{4}}{3} \\times \\frac{9}{\\cancel{4}} = \\frac{1}{3} \\times \\frac{9}{1}", "explanation": "The $4$ on top of the first fraction cancels with the $4$ on the bottom of the second.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{1}{3} \\times \\frac{9}{1} = \\frac{1}{1} \\times \\frac{3}{1}", "explanation": "The $9$ and the $3$ both divide by $3$, becoming $3$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Complete the multiplication.", "workingLatex": "\\frac{1 \\times 3}{1 \\times 1} = 3", "explanation": "The product of the mixed numbers is $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the division.", "workingLatex": "3 \\div \\frac{3}{5}", "explanation": "Now we divide the result by three fifths.", "diagram": null },
        { "stepNumber": 9, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Writing $3$ over $1$ prepares it for the reciprocal rule.", "diagram": null },
        { "stepNumber": 10, "description": "Turn the divisor upside down.", "workingLatex": "\\frac{3}{5} \\rightarrow \\frac{5}{3}", "explanation": "The reciprocal of three fifths is five thirds.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{3}{1} \\times \\frac{5}{3}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 12, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{\\cancel{3}}{1} \\times \\frac{5}{\\cancel{3}} = \\frac{1}{1} \\times \\frac{5}{1}", "explanation": "The $3$s cancel, leaving five over one.", "diagram": null },
        { "stepNumber": 13, "description": "Complete the calculation.", "workingLatex": "\\frac{5}{1} = 5", "explanation": "Five over one is simply $5$.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "1\\frac{1}{3} \\times 2\\frac{1}{4} \\div \\frac{3}{5} = 5", "explanation": "The result is exactly $5$.", "diagram": null }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["worded problem", "length", "subtracting", "dividing", "mixed numbers"],
    "questionText": "A plank of wood is $3\\frac{3}{4}$ metres long. A piece of $1\\frac{1}{2}$ metres is cut off, and the remaining wood is cut into $3$ equal pieces. How long is each of these pieces?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "(3\\frac{3}{4} - 1\\frac{1}{2}) \\div 3", "explanation": "First we find how much wood is left after the cut, then we share that length into three equal pieces.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the plank length.", "workingLatex": "3\\frac{3}{4} = \\frac{15}{4}", "explanation": "Three wholes are twelve quarters, plus three more quarters makes fifteen quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the cut length.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus the extra half makes three halves.", "diagram": null },
        { "stepNumber": 4, "description": "Find a common denominator for the subtraction.", "workingLatex": "\\text{lcm}(4, 2) = 4", "explanation": "Since $4$ is a multiple of $2$, quarters work for both lengths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the cut length to quarters.", "workingLatex": "\\frac{3}{2} = \\frac{6}{4}", "explanation": "Multiplying top and bottom by $2$ writes three halves as six quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract to find the remaining length.", "workingLatex": "\\frac{15}{4} - \\frac{6}{4} = \\frac{9}{4}", "explanation": "Fifteen quarters take away six quarters leaves nine quarters of a metre.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the remaining length.", "workingLatex": "\\frac{9}{4} = 2\\frac{1}{4} \\text{ m}", "explanation": "Nine quarters is two and a quarter metres, which is the wood still to be shared.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the division.", "workingLatex": "\\frac{9}{4} \\div 3", "explanation": "We split the remaining length into three equal pieces.", "diagram": null },
        { "stepNumber": 9, "description": "Write the whole number as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "Writing $3$ over $1$ prepares it for the reciprocal rule.", "diagram": null },
        { "stepNumber": 10, "description": "Turn the divisor upside down.", "workingLatex": "\\frac{3}{1} \\rightarrow \\frac{1}{3}", "explanation": "The reciprocal of $3$ is one third.", "diagram": null },
        { "stepNumber": 11, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{9}{4} \\times \\frac{1}{3}", "explanation": "Dividing by $3$ is the same as multiplying by one third.", "diagram": null },
        { "stepNumber": 12, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{\\cancel{9}}{4} \\times \\frac{1}{\\cancel{3}} = \\frac{3}{4} \\times \\frac{1}{1}", "explanation": "The $9$ and the $3$ both divide by $3$, becoming $3$ and $1$.", "diagram": null },
        { "stepNumber": 13, "description": "Complete the multiplication.", "workingLatex": "\\frac{3 \\times 1}{4 \\times 1} = \\frac{3}{4}", "explanation": "Each piece is three quarters of a metre.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "(3\\frac{3}{4} - 1\\frac{1}{2}) \\div 3 = \\frac{3}{4} \\text{ m}", "explanation": "Each of the three pieces is three quarters of a metre long.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$ m"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["worded problem", "fraction of remainder", "multi-step", "subtracting"],
    "questionText": "A water tank is full. First $\\frac{1}{3}$ of the water is used. Then $\\frac{1}{4}$ of the water that remains is used. What fraction of the tank's water is left?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "1 - \\frac{1}{3} - \\left(\\tfrac{1}{4} \\text{ of the remainder}\\right)", "explanation": "The second amount used is a fraction of what is left, not of the whole tank, so we must track the remainder carefully.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the full tank.", "workingLatex": "1", "explanation": "A full tank represents one whole.", "diagram": null },
        { "stepNumber": 3, "description": "Note the first amount used.", "workingLatex": "\\frac{1}{3}", "explanation": "One third of the whole tank is used first.", "diagram": null },
        { "stepNumber": 4, "description": "Find the water remaining after the first use.", "workingLatex": "1 - \\frac{1}{3} = \\frac{2}{3}", "explanation": "Taking one third from the whole leaves two thirds.", "diagram": null },
        { "stepNumber": 5, "description": "Set up the second amount used.", "workingLatex": "\\frac{1}{4} \\times \\frac{2}{3}", "explanation": "The second use is one quarter of the two thirds that remain.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the fractions.", "workingLatex": "\\frac{1 \\times 2}{4 \\times 3} = \\frac{2}{12}", "explanation": "Multiplying the tops and bottoms gives two twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify the second amount used.", "workingLatex": "\\frac{2}{12} = \\frac{1}{6}", "explanation": "Two twelfths simplifies to one sixth of the whole tank.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the final subtraction.", "workingLatex": "\\frac{2}{3} - \\frac{1}{6}", "explanation": "We remove the second amount used from the two thirds that remained.", "diagram": null },
        { "stepNumber": 9, "description": "Find a common denominator.", "workingLatex": "\\text{lcm}(3, 6) = 6", "explanation": "Since $6$ is a multiple of $3$, sixths work for both fractions.", "diagram": null },
        { "stepNumber": 10, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{4}{6}", "explanation": "Multiplying top and bottom by $2$ writes two thirds as four sixths.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract.", "workingLatex": "\\frac{4}{6} - \\frac{1}{6} = \\frac{3}{6}", "explanation": "Four sixths take away one sixth leaves three sixths.", "diagram": null },
        { "stepNumber": 12, "description": "Simplify the result.", "workingLatex": "\\frac{3}{6} = \\frac{1}{2}", "explanation": "Three sixths simplifies to one half.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret the answer.", "workingLatex": "\\frac{1}{2} \\text{ of the tank}", "explanation": "Half of the tank's water is left.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\text{fraction left} = \\frac{1}{2}", "explanation": "One half of the water remains.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["order of operations", "brackets", "multiplying", "subtracting"],
    "questionText": "Work out $\\frac{3}{4} - \\frac{1}{2} \\times \\left(\\frac{2}{3} + \\frac{1}{6}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "\\frac{3}{4} - \\frac{1}{2} \\times \\left(\\frac{2}{3} + \\frac{1}{6}\\right)", "explanation": "We follow the order of operations: brackets first, then multiplication, then the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the addition inside the brackets.", "workingLatex": "\\frac{2}{3} + \\frac{1}{6}", "explanation": "Thirds and sixths are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common denominator.", "workingLatex": "\\text{lcm}(3, 6) = 6", "explanation": "Since $6$ is a multiple of $3$, sixths work for both.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{4}{6}", "explanation": "Multiplying top and bottom by $2$ gives four sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Add inside the brackets.", "workingLatex": "\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}", "explanation": "Four sixths plus one sixth makes five sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Set up the multiplication.", "workingLatex": "\\frac{1}{2} \\times \\frac{5}{6}", "explanation": "Next we multiply one half by the bracket result.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the numerators.", "workingLatex": "1 \\times 5 = 5", "explanation": "The tops multiply to $5$.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the denominators.", "workingLatex": "2 \\times 6 = 12", "explanation": "The bottoms multiply to $12$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the product.", "workingLatex": "\\frac{1}{2} \\times \\frac{5}{6} = \\frac{5}{12}", "explanation": "The multiplication gives five twelfths.", "diagram": null },
        { "stepNumber": 10, "description": "Set up the subtraction.", "workingLatex": "\\frac{3}{4} - \\frac{5}{12}", "explanation": "Finally we subtract the product from three quarters.", "diagram": null },
        { "stepNumber": 11, "description": "Find the common denominator.", "workingLatex": "\\text{lcm}(4, 12) = 12", "explanation": "Since $12$ is a multiple of $4$, twelfths work for both.", "diagram": null },
        { "stepNumber": 12, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 13, "description": "Subtract.", "workingLatex": "\\frac{9}{12} - \\frac{5}{12} = \\frac{4}{12}", "explanation": "Nine twelfths take away five twelfths leaves four twelfths.", "diagram": null },
        { "stepNumber": 14, "description": "Simplify the result.", "workingLatex": "\\frac{4}{12} = \\frac{1}{3}", "explanation": "Four twelfths simplifies to one third.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} - \\frac{1}{2} \\times \\left(\\frac{2}{3} + \\frac{1}{6}\\right) = \\frac{1}{3}", "explanation": "The result is one third.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["mixed numbers", "subtracting", "borrowing", "different denominators"],
    "questionText": "Work out $5\\frac{1}{6} - 2\\frac{3}{4}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "5\\frac{1}{6} - 2\\frac{3}{4}", "explanation": "The fraction parts have different denominators, so we convert them before deciding whether to borrow.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(6, 4) = 12", "explanation": "The smallest number both $6$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction part.", "workingLatex": "\\frac{1}{6} = \\frac{2}{12}", "explanation": "Multiplying top and bottom by $2$ writes one sixth as two twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction part.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ writes three quarters as nine twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "5\\frac{2}{12} - 2\\frac{9}{12}", "explanation": "Both fraction parts are now in twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the fraction parts.", "workingLatex": "\\frac{2}{12} < \\frac{9}{12}", "explanation": "The starting fraction is smaller, so we must borrow one whole.", "diagram": null },
        { "stepNumber": 7, "description": "Write one whole as twelfths.", "workingLatex": "1 = \\frac{12}{12}", "explanation": "One whole is twelve twelfths, matching our denominator.", "diagram": null },
        { "stepNumber": 8, "description": "Regroup the first mixed number.", "workingLatex": "5\\frac{2}{12} = 4 + \\frac{12}{12} + \\frac{2}{12} = 4\\frac{14}{12}", "explanation": "Taking one whole from the $5$ turns two twelfths into fourteen twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "Rewrite ready to subtract.", "workingLatex": "4\\frac{14}{12} - 2\\frac{9}{12}", "explanation": "Now the first fraction part is larger, so subtraction is possible.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the whole-number parts.", "workingLatex": "4 - 2 = 2", "explanation": "The whole ones subtract to give $2$.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{14}{12} - \\frac{9}{12} = \\frac{5}{12}", "explanation": "Fourteen twelfths take away nine twelfths leaves five twelfths.", "diagram": null },
        { "stepNumber": 12, "description": "Combine the parts.", "workingLatex": "2 + \\frac{5}{12} = 2\\frac{5}{12}", "explanation": "Two wholes and five twelfths make the mixed number.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "5\\frac{1}{6} - 2\\frac{3}{4} = 2\\frac{5}{12}", "explanation": "Since $5$ and $12$ share no common factor, the answer is two and five twelfths.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{5}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["worded problem", "sharing", "dividing", "mixed numbers"],
    "questionText": "$4\\frac{1}{2}$ pizzas are shared equally between $6$ people. What fraction of a whole pizza does each person receive?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "4\\frac{1}{2} \\div 6", "explanation": "Sharing the pizzas equally between six people means dividing the total amount by $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number.", "workingLatex": "4\\frac{1}{2} = \\frac{9}{2}", "explanation": "Four wholes are eight halves, plus the extra half makes nine halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "\\frac{9}{2} \\div 6", "explanation": "Now we divide an improper fraction by a whole number.", "diagram": null },
        { "stepNumber": 4, "description": "Write the whole number as a fraction.", "workingLatex": "6 = \\frac{6}{1}", "explanation": "Writing $6$ over $1$ prepares it for the reciprocal rule.", "diagram": null },
        { "stepNumber": 5, "description": "Turn the divisor upside down.", "workingLatex": "\\frac{6}{1} \\rightarrow \\frac{1}{6}", "explanation": "The reciprocal of $6$ is one sixth.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{9}{2} \\times \\frac{1}{6}", "explanation": "Dividing by $6$ is the same as multiplying by one sixth.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the common factor of $3$.", "workingLatex": "\\frac{\\cancel{9}}{2} \\times \\frac{1}{\\cancel{6}} = \\frac{3}{2} \\times \\frac{1}{2}", "explanation": "The $9$ and the $6$ both divide by $3$, becoming $3$ and $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the numerators.", "workingLatex": "3 \\times 1 = 3", "explanation": "The tops multiply to $3$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the denominators.", "workingLatex": "2 \\times 2 = 4", "explanation": "The bottoms multiply to $4$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the resulting fraction.", "workingLatex": "\\frac{9}{2} \\div 6 = \\frac{3}{4}", "explanation": "Each share works out to three quarters.", "diagram": null },
        { "stepNumber": 11, "description": "Check the fraction is simplest.", "workingLatex": "\\gcd(3, 4) = 1", "explanation": "Three quarters is already in lowest terms.", "diagram": null },
        { "stepNumber": 12, "description": "Interpret the answer.", "workingLatex": "\\frac{3}{4} \\text{ of a pizza}", "explanation": "Each person receives three quarters of a whole pizza.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "4\\frac{1}{2} \\div 6 = \\frac{3}{4}", "explanation": "Each person gets three quarters of a pizza.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["brackets", "adding", "multiplying", "mixed number answer"],
    "questionText": "Work out $\\left(\\frac{2}{3} + \\frac{3}{4}\\right) \\times 2$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{3}{4}\\right) \\times 2", "explanation": "We work out the bracket first, then multiply the result by $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the addition inside the brackets.", "workingLatex": "\\frac{2}{3} + \\frac{3}{4}", "explanation": "Thirds and quarters need a common denominator before adding.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{lcm}(3, 4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ gives eight twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Add inside the brackets.", "workingLatex": "\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}", "explanation": "Eight twelfths plus nine twelfths makes seventeen twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Set up the multiplication.", "workingLatex": "\\frac{17}{12} \\times 2", "explanation": "Now we multiply the bracket result by $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the whole number as a fraction.", "workingLatex": "2 = \\frac{2}{1}", "explanation": "Writing $2$ over $1$ lets us multiply the fractions.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the numerators.", "workingLatex": "17 \\times 2 = 34", "explanation": "The tops multiply to $34$.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the denominators.", "workingLatex": "12 \\times 1 = 12", "explanation": "The bottoms multiply to $12$.", "diagram": null },
        { "stepNumber": 11, "description": "Write the resulting fraction.", "workingLatex": "\\frac{34}{12}", "explanation": "The product is thirty-four twelfths, which is not yet simplified.", "diagram": null },
        { "stepNumber": 12, "description": "Simplify the fraction.", "workingLatex": "\\frac{34}{12} = \\frac{17}{6}", "explanation": "Both $34$ and $12$ divide by $2$, giving seventeen sixths.", "diagram": null },
        { "stepNumber": 13, "description": "Convert to a mixed number.", "workingLatex": "\\frac{17}{6} = 2\\frac{5}{6}", "explanation": "Twelve sixths make two wholes, leaving five sixths over.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{3}{4}\\right) \\times 2 = 2\\frac{5}{6}", "explanation": "The result is two and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["brackets", "mixed numbers", "dividing", "multi-step"],
    "questionText": "Work out $\\left(1\\frac{1}{2} + \\frac{2}{3}\\right) \\div \\left(2 - \\frac{1}{4}\\right)$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "\\left(1\\frac{1}{2} + \\frac{2}{3}\\right) \\div \\left(2 - \\frac{1}{4}\\right)", "explanation": "We evaluate each bracket separately, then divide the first result by the second.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number in the first bracket.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus the extra half makes three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Find a common denominator for the first bracket.", "workingLatex": "\\text{lcm}(2, 3) = 6", "explanation": "To add three halves and two thirds we use sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert both fractions to sixths.", "workingLatex": "\\frac{3}{2} = \\frac{9}{6}, \\; \\frac{2}{3} = \\frac{4}{6}", "explanation": "Rewriting each in sixths lets us add them.", "diagram": null },
        { "stepNumber": 5, "description": "Add inside the first bracket.", "workingLatex": "\\frac{9}{6} + \\frac{4}{6} = \\frac{13}{6}", "explanation": "Nine sixths plus four sixths makes thirteen sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Write the whole number in the second bracket as a fraction.", "workingLatex": "2 = \\frac{8}{4}", "explanation": "Two wholes are eight quarters, matching the denominator we need.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract inside the second bracket.", "workingLatex": "\\frac{8}{4} - \\frac{1}{4} = \\frac{7}{4}", "explanation": "Eight quarters take away one quarter leaves seven quarters.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the calculation.", "workingLatex": "\\frac{13}{6} \\div \\frac{7}{4}", "explanation": "Now we divide the first bracket result by the second.", "diagram": null },
        { "stepNumber": 9, "description": "Turn the second fraction upside down.", "workingLatex": "\\frac{7}{4} \\rightarrow \\frac{4}{7}", "explanation": "The reciprocal of seven quarters is four sevenths.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite as a multiplication.", "workingLatex": "\\frac{13}{6} \\times \\frac{4}{7}", "explanation": "Dividing becomes multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 11, "description": "Cancel the common factor of $2$.", "workingLatex": "\\frac{13}{\\cancel{6}} \\times \\frac{\\cancel{4}}{7} = \\frac{13}{3} \\times \\frac{2}{7}", "explanation": "The $4$ and the $6$ both divide by $2$, becoming $2$ and $3$.", "diagram": null },
        { "stepNumber": 12, "description": "Multiply the numerators.", "workingLatex": "13 \\times 2 = 26", "explanation": "The tops multiply to $26$.", "diagram": null },
        { "stepNumber": 13, "description": "Multiply the denominators.", "workingLatex": "3 \\times 7 = 21", "explanation": "The bottoms multiply to $21$.", "diagram": null },
        { "stepNumber": 14, "description": "Write the resulting fraction.", "workingLatex": "\\frac{26}{21}", "explanation": "The result is twenty-six twenty-firsts, an improper fraction.", "diagram": null },
        { "stepNumber": 15, "description": "Convert to a mixed number.", "workingLatex": "\\frac{26}{21} = 1\\frac{5}{21}", "explanation": "Twenty-one twenty-firsts make one whole, leaving five twenty-firsts over.", "diagram": null },
        { "stepNumber": 16, "description": "Check the fraction is simplest.", "workingLatex": "\\gcd(5, 21) = 1", "explanation": "The fraction part cannot be simplified further.", "diagram": null },
        { "stepNumber": 17, "description": "State the final answer.", "workingLatex": "\\left(1\\frac{1}{2} + \\frac{2}{3}\\right) \\div \\left(2 - \\frac{1}{4}\\right) = 1\\frac{5}{21}", "explanation": "The result is one and five twenty-firsts.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{5}{21}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["fraction of an amount", "multiplying", "adding", "multi-step"],
    "questionText": "Work out $\\frac{2}{5}$ of $3\\frac{3}{4}$, then add $\\frac{1}{2}$ to the result.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the problem and plan.", "workingLatex": "\\frac{2}{5} \\times 3\\frac{3}{4} + \\frac{1}{2}", "explanation": "The word \\\"of\\\" means multiply, so we first find two fifths of the mixed number, then add one half.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number.", "workingLatex": "3\\frac{3}{4} = \\frac{15}{4}", "explanation": "Three wholes are twelve quarters, plus three more quarters makes fifteen quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the multiplication.", "workingLatex": "\\frac{2}{5} \\times \\frac{15}{4}", "explanation": "We multiply two fifths by fifteen quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $5$ and the $15$.", "workingLatex": "\\frac{2}{\\cancel{5}} \\times \\frac{\\cancel{15}}{4} = \\frac{2}{1} \\times \\frac{3}{4}", "explanation": "The $5$ and the $15$ both divide by $5$, becoming $1$ and $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $2$ and the $4$.", "workingLatex": "\\frac{2}{1} \\times \\frac{3}{4} = \\frac{1}{1} \\times \\frac{3}{2}", "explanation": "The $2$ and the $4$ both divide by $2$, becoming $1$ and $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the numerators.", "workingLatex": "1 \\times 3 = 3", "explanation": "The tops multiply to $3$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the denominators.", "workingLatex": "1 \\times 2 = 2", "explanation": "The bottoms multiply to $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Write the fraction-of result.", "workingLatex": "\\frac{2}{5} \\times 3\\frac{3}{4} = \\frac{3}{2}", "explanation": "Two fifths of the mixed number is three halves, which is one and a half.", "diagram": null },
        { "stepNumber": 9, "description": "Set up the addition.", "workingLatex": "\\frac{3}{2} + \\frac{1}{2}", "explanation": "Now we add one half to the result.", "diagram": null },
        { "stepNumber": 10, "description": "Check the denominators.", "workingLatex": "2 = 2", "explanation": "Both fractions are halves, so they can be added directly.", "diagram": null },
        { "stepNumber": 11, "description": "Add the numerators.", "workingLatex": "\\frac{3+1}{2} = \\frac{4}{2}", "explanation": "Three halves plus one half makes four halves.", "diagram": null },
        { "stepNumber": 12, "description": "Simplify to a whole number.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four halves make two wholes.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "\\frac{2}{5} \\times 3\\frac{3}{4} + \\frac{1}{2} = 2", "explanation": "The result is exactly $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["worded problem", "fraction of an amount", "adding", "subtracting"],
    "questionText": "On a journey of $18$ km, Priya travels $\\frac{1}{2}$ of the distance by bus and $\\frac{1}{3}$ by train, and walks the rest. How many kilometres does she walk?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Understand the problem.", "workingLatex": "\\text{walk fraction} = 1 - \\frac{1}{2} - \\frac{1}{3}", "explanation": "The whole journey is one, so the fraction walked is what is left after the bus and train fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the bus and train fractions.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3}", "explanation": "First we combine the two travelled fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Find the common denominator.", "workingLatex": "\\text{lcm}(2, 3) = 6", "explanation": "The smallest number both $2$ and $3$ divide into is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}", "explanation": "Multiplying top and bottom by $3$ gives three sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ gives two sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Add the travelled fractions.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}", "explanation": "Three sixths plus two sixths makes five sixths of the journey by bus and train.", "diagram": null },
        { "stepNumber": 7, "description": "Write the whole journey as sixths.", "workingLatex": "1 = \\frac{6}{6}", "explanation": "Writing the whole as six sixths lets us subtract the travelled part.", "diagram": null },
        { "stepNumber": 8, "description": "Find the fraction walked.", "workingLatex": "\\frac{6}{6} - \\frac{5}{6} = \\frac{1}{6}", "explanation": "The remaining one sixth of the journey is walked.", "diagram": null },
        { "stepNumber": 9, "description": "Set up the distance calculation.", "workingLatex": "\\frac{1}{6} \\times 18", "explanation": "To find the distance walked we take one sixth of the total $18$ km.", "diagram": null },
        { "stepNumber": 10, "description": "Write the distance as a fraction.", "workingLatex": "\\frac{1}{6} \\times \\frac{18}{1}", "explanation": "Writing $18$ over $1$ lets us multiply the fractions.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply the fractions.", "workingLatex": "\\frac{1 \\times 18}{6 \\times 1} = \\frac{18}{6}", "explanation": "Multiplying tops and bottoms gives eighteen sixths.", "diagram": null },
        { "stepNumber": 12, "description": "Simplify to a whole number.", "workingLatex": "\\frac{18}{6} = 3", "explanation": "Eighteen divided by six is $3$.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret with units.", "workingLatex": "3 \\text{ km}", "explanation": "The distance walked is measured in kilometres.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\frac{1}{6} \\times 18 = 3", "explanation": "Priya walks $3$ km.", "diagram": null }
      ],
      "finalAnswer": "$3$ km"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["order of operations", "mixed numbers", "multiplying", "adding and subtracting"],
    "questionText": "Work out $3\\frac{1}{2} - 1\\frac{1}{4} + \\frac{2}{3} \\times \\frac{3}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation and plan.", "workingLatex": "3\\frac{1}{2} - 1\\frac{1}{4} + \\frac{2}{3} \\times \\frac{3}{4}", "explanation": "The order of operations tells us to do the multiplication first, then the addition and subtraction from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{4}", "explanation": "We evaluate the product before combining it with the mixed numbers.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "2 \\times 3 = 6", "explanation": "The tops multiply to $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "3 \\times 4 = 12", "explanation": "The bottoms multiply to $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the product.", "workingLatex": "\\frac{6}{12} = \\frac{1}{2}", "explanation": "Six twelfths simplifies to one half.", "diagram": null },
        { "stepNumber": 6, "description": "Handle the mixed-number subtraction.", "workingLatex": "3\\frac{1}{2} - 1\\frac{1}{4}", "explanation": "We now work on the subtraction that comes first from the left.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the whole-number parts.", "workingLatex": "3 - 1 = 2", "explanation": "The whole ones subtract to give $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Convert the fraction parts.", "workingLatex": "\\frac{1}{2} = \\frac{2}{4}", "explanation": "Since $4$ is a multiple of $2$, we write one half as two quarters to match.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract the fraction parts.", "workingLatex": "\\frac{2}{4} - \\frac{1}{4} = \\frac{1}{4}", "explanation": "Two quarters take away one quarter leaves one quarter.", "diagram": null },
        { "stepNumber": 10, "description": "Combine the subtraction result.", "workingLatex": "2 + \\frac{1}{4} = 2\\frac{1}{4}", "explanation": "The subtraction gives two and one quarter.", "diagram": null },
        { "stepNumber": 11, "description": "Set up the final addition.", "workingLatex": "2\\frac{1}{4} + \\frac{1}{2}", "explanation": "Now we add the product from step 5 to this result.", "diagram": null },
        { "stepNumber": 12, "description": "Convert one half to quarters.", "workingLatex": "\\frac{1}{2} = \\frac{2}{4}", "explanation": "Matching denominators lets us add the fraction parts.", "diagram": null },
        { "stepNumber": 13, "description": "Add the fraction parts.", "workingLatex": "\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}", "explanation": "One quarter plus two quarters makes three quarters.", "diagram": null },
        { "stepNumber": 14, "description": "Combine with the whole part.", "workingLatex": "2 + \\frac{3}{4} = 2\\frac{3}{4}", "explanation": "Two wholes and three quarters make the mixed number.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "3\\frac{1}{2} - 1\\frac{1}{4} + \\frac{2}{3} \\times \\frac{3}{4} = 2\\frac{3}{4}", "explanation": "The result is two and three quarters.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{3}{4}$"
    }
  }
];
