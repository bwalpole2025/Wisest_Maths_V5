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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "same denominator"],
    "questionText": "Work out $\\frac{1}{7} + \\frac{3}{7}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the denominators.", "workingLatex": "\\frac{1}{7} + \\frac{3}{7}", "explanation": "Both fractions are cut into sevenths, so the pieces are the same size and can be combined directly.", "diagram": null },
        { "stepNumber": 2, "description": "Add the numerators.", "workingLatex": "\\frac{1 + 3}{7}", "explanation": "Because the denominators match, we just count how many sevenths there are in total.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the numerator.", "workingLatex": "\\frac{4}{7}", "explanation": "One seventh plus three sevenths makes four sevenths.", "diagram": null },
        { "stepNumber": 4, "description": "Check for simplification.", "workingLatex": "\\gcd(4,7) = 1", "explanation": "Four and seven share no common factor, so the fraction is already in its simplest form.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{1}{7} + \\frac{3}{7} = \\frac{4}{7}", "explanation": "The total is four sevenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{4}{7}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "same denominator", "simplifying"],
    "questionText": "Work out $\\frac{5}{8} - \\frac{1}{8}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the denominators.", "workingLatex": "\\frac{5}{8} - \\frac{1}{8}", "explanation": "Both are eighths, so the pieces match and can be subtracted directly.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the numerators.", "workingLatex": "\\frac{5 - 1}{8}", "explanation": "With equal denominators we simply take one eighth away from five eighths.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the numerator.", "workingLatex": "\\frac{4}{8}", "explanation": "Five eighths minus one eighth leaves four eighths.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factor.", "workingLatex": "\\gcd(4,8) = 4", "explanation": "Both four and eight divide by four, so the fraction can be simplified.", "diagram": null },
        { "stepNumber": 5, "description": "Divide top and bottom by 4.", "workingLatex": "\\frac{4 \\div 4}{8 \\div 4} = \\frac{1}{2}", "explanation": "Dividing numerator and denominator by their common factor keeps the value the same but writes it more simply.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{5}{8} - \\frac{1}{8} = \\frac{1}{2}", "explanation": "Four eighths is the same as one half.", "diagram": null }
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "simplifying"],
    "questionText": "Work out $\\frac{1}{3} + \\frac{1}{6}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{1}{3} + \\frac{1}{6}", "explanation": "Thirds and sixths are different-sized pieces, so we must rewrite them with a common denominator first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(3,6) = 6", "explanation": "Six is the smallest number both $3$ and $6$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ rewrites one third as two sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Add the sixths.", "workingLatex": "\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}", "explanation": "Now the pieces match, so we add the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{3}{6} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $3$ gives one half.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}", "explanation": "The total is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{3}{4} - \\frac{1}{2}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{3}{4} - \\frac{1}{2}", "explanation": "Quarters and halves are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,2) = 4", "explanation": "Both denominators divide into $4$, so quarters are the natural common unit.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{2} = \\frac{2}{4}", "explanation": "Multiplying top and bottom by $2$ rewrites one half as two quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the quarters.", "workingLatex": "\\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Check for simplification.", "workingLatex": "\\gcd(1,4) = 1", "explanation": "One and four share no common factor, so the fraction is already simplest.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} - \\frac{1}{2} = \\frac{1}{4}", "explanation": "The difference is one quarter.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator"],
    "questionText": "Work out $\\frac{2}{5} + \\frac{1}{4}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{2}{5} + \\frac{1}{4}", "explanation": "Fifths and quarters are different sizes and need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(5,4) = 20", "explanation": "As $5$ and $4$ share no factors, the smallest common denominator is their product, $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{5} = \\frac{8}{20}", "explanation": "Multiplying top and bottom by $4$ rewrites two fifths as eight twentieths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{5}{20}", "explanation": "Multiplying top and bottom by $5$ rewrites one quarter as five twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the twentieths.", "workingLatex": "\\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}", "explanation": "Now the pieces match, so we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(13,20) = 1", "explanation": "Thirteen and twenty share no common factor, so this is simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{5} + \\frac{1}{4} = \\frac{13}{20}", "explanation": "The total is thirteen twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{13}{20}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication"],
    "questionText": "Work out $\\frac{1}{2} \\times \\frac{1}{3}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how to multiply fractions.", "workingLatex": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}", "explanation": "To multiply fractions we multiply the numerators together and the denominators together — no common denominator is needed.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "1 \\times 1 = 1", "explanation": "The new numerator is the product of the two tops.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "2 \\times 3 = 6", "explanation": "The new denominator is the product of the two bottoms.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "\\frac{1}{6}", "explanation": "Taking one half of one third gives one sixth.", "diagram": null },
        { "stepNumber": 5, "description": "Check for simplification.", "workingLatex": "\\gcd(1,6) = 1", "explanation": "The fraction is already in its simplest form.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}", "explanation": "The result is one sixth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "simplifying"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{3}{5}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how to multiply fractions.", "workingLatex": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}", "explanation": "Multiply the tops together and the bottoms together.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "2 \\times 3 = 6", "explanation": "The new numerator is $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "3 \\times 5 = 15", "explanation": "The new denominator is $15$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "\\frac{6}{15}", "explanation": "This is the answer before simplifying.", "diagram": null },
        { "stepNumber": 5, "description": "Find the common factor.", "workingLatex": "\\gcd(6,15) = 3", "explanation": "Both $6$ and $15$ divide by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{6 \\div 3}{15 \\div 3} = \\frac{2}{5}", "explanation": "Dividing top and bottom by $3$ gives the simplest form.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{5} = \\frac{2}{5}", "explanation": "The result is two fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "division", "reciprocal"],
    "questionText": "Work out $\\frac{3}{4} \\div \\frac{1}{2}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for dividing fractions.", "workingLatex": "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}", "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal (its flip).", "diagram": null },
        { "stepNumber": 2, "description": "Flip the second fraction.", "workingLatex": "\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1}", "explanation": "The reciprocal of $\\frac{1}{2}$ is $\\frac{2}{1}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "3 \\times 2 = 6", "explanation": "The new numerator is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "4 \\times 1 = 4", "explanation": "The new denominator is $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "\\frac{6}{4}", "explanation": "This improper fraction can be simplified.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{6}{4} = \\frac{3}{2}", "explanation": "Dividing top and bottom by $2$ gives three halves.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{2}", "explanation": "The result is $\\frac{3}{2}$, or $1\\frac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{2}$ (or $1\\frac{1}{2}$)"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "division", "dividing by an integer"],
    "questionText": "Work out $\\frac{2}{3} \\div 4$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the integer as a fraction.", "workingLatex": "4 = \\frac{4}{1}", "explanation": "Any whole number can be written over $1$, which lets us use the fraction rules.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the division.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{1}", "explanation": "Now it is a division of two fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by the reciprocal.", "workingLatex": "= \\frac{2}{3} \\times \\frac{1}{4}", "explanation": "Dividing by $\\frac{4}{1}$ is the same as multiplying by $\\frac{1}{4}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{2 \\times 1}{3 \\times 4} = \\frac{2}{12}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{2}{12} = \\frac{1}{6}", "explanation": "Dividing top and bottom by $2$ gives one sixth.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\div 4 = \\frac{1}{6}", "explanation": "Sharing two thirds into four equal parts gives one sixth each.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "simplifying"],
    "questionText": "Write $\\frac{8}{12}$ in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look for a common factor.", "workingLatex": "\\frac{8}{12}", "explanation": "To simplify, we find the largest number that divides both the top and the bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\gcd(8,12) = 4", "explanation": "Four is the biggest number dividing into both $8$ and $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the numerator by 4.", "workingLatex": "8 \\div 4 = 2", "explanation": "The new numerator is $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the denominator by 4.", "workingLatex": "12 \\div 4 = 3", "explanation": "The new denominator is $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the simplified fraction.", "workingLatex": "\\frac{8}{12} = \\frac{2}{3}", "explanation": "Two thirds is the same value written with the smallest whole numbers.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{3}", "explanation": "As $\\gcd(2,3) = 1$, this cannot be simplified further.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator", "simplifying"],
    "questionText": "Work out $\\frac{5}{6} - \\frac{1}{3}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{5}{6} - \\frac{1}{3}", "explanation": "Sixths and thirds need a common denominator before subtracting.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,3) = 6", "explanation": "Six is the smallest number both denominators divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ rewrites one third as two sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the sixths.", "workingLatex": "\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{3}{6} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $3$ gives one half.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} - \\frac{1}{3} = \\frac{1}{2}", "explanation": "The difference is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator"],
    "questionText": "Work out $\\frac{1}{4} + \\frac{2}{3}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{1}{4} + \\frac{2}{3}", "explanation": "Quarters and thirds need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,3) = 12", "explanation": "As $4$ and $3$ share no factors, the common denominator is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ gives eight twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the twelfths.", "workingLatex": "\\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(11,12) = 1", "explanation": "Eleven and twelve share no common factor, so this is simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{4} + \\frac{2}{3} = \\frac{11}{12}", "explanation": "The total is eleven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{11}{12}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{7}{10} - \\frac{2}{5}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{7}{10} - \\frac{2}{5}", "explanation": "Tenths and fifths need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(10,5) = 10", "explanation": "Both denominators divide into $10$, so tenths are the common unit.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{5} = \\frac{4}{10}", "explanation": "Multiplying top and bottom by $2$ gives four tenths.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the tenths.", "workingLatex": "\\frac{7}{10} - \\frac{4}{10} = \\frac{3}{10}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Check for simplification.", "workingLatex": "\\gcd(3,10) = 1", "explanation": "Three and ten share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{7}{10} - \\frac{2}{5} = \\frac{3}{10}", "explanation": "The difference is three tenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{10}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator"],
    "questionText": "Work out $\\frac{3}{8} + \\frac{1}{4}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{3}{8} + \\frac{1}{4}", "explanation": "Eighths and quarters need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(8,4) = 8", "explanation": "Both denominators divide into $8$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{2}{8}", "explanation": "Multiplying top and bottom by $2$ gives two eighths.", "diagram": null },
        { "stepNumber": 4, "description": "Add the eighths.", "workingLatex": "\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Check for simplification.", "workingLatex": "\\gcd(5,8) = 1", "explanation": "Five and eight share no common factor.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{3}{8} + \\frac{1}{4} = \\frac{5}{8}", "explanation": "The total is five eighths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{8}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "simplifying"],
    "questionText": "Work out $\\frac{4}{5} \\times \\frac{1}{2}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how to multiply fractions.", "workingLatex": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "4 \\times 1 = 4", "explanation": "The new numerator is $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "5 \\times 2 = 10", "explanation": "The new denominator is $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "\\frac{4}{10}", "explanation": "This can be simplified.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{4}{10} = \\frac{2}{5}", "explanation": "Dividing top and bottom by $2$ gives two fifths.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{4}{5} \\times \\frac{1}{2} = \\frac{2}{5}", "explanation": "Half of four fifths is two fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "division", "dividing by an integer", "simplifying"],
    "questionText": "Work out $\\frac{5}{6} \\div 5$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the integer as a fraction.", "workingLatex": "5 = \\frac{5}{1}", "explanation": "Writing $5$ over $1$ lets us use the fraction division rule.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{5}{6} \\div \\frac{5}{1} = \\frac{5}{6} \\times \\frac{1}{5}", "explanation": "Dividing by $\\frac{5}{1}$ is multiplying by $\\frac{1}{5}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply across.", "workingLatex": "\\frac{5 \\times 1}{6 \\times 5} = \\frac{5}{30}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{5}{30} = \\frac{1}{6}", "explanation": "Dividing top and bottom by $5$ gives one sixth.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} \\div 5 = \\frac{1}{6}", "explanation": "Sharing five sixths into five equal parts gives one sixth each.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "same denominator", "simplifying"],
    "questionText": "Work out $\\frac{2}{9} + \\frac{4}{9}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Compare the denominators.", "workingLatex": "\\frac{2}{9} + \\frac{4}{9}", "explanation": "Both are ninths, so we can add directly.", "diagram": null },
        { "stepNumber": 2, "description": "Add the numerators.", "workingLatex": "\\frac{2 + 4}{9}", "explanation": "Count how many ninths there are in total.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the numerator.", "workingLatex": "\\frac{6}{9}", "explanation": "Two ninths plus four ninths is six ninths.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factor.", "workingLatex": "\\gcd(6,9) = 3", "explanation": "Both $6$ and $9$ divide by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{6}{9} = \\frac{2}{3}", "explanation": "Dividing top and bottom by $3$ gives two thirds.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{9} + \\frac{4}{9} = \\frac{2}{3}", "explanation": "The total simplifies to two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "multiplying by an integer"],
    "questionText": "Work out $\\frac{3}{7} \\times 2$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the integer as a fraction.", "workingLatex": "2 = \\frac{2}{1}", "explanation": "Writing $2$ over $1$ lets us multiply as fractions.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "\\frac{3}{7} \\times \\frac{2}{1}", "explanation": "Now both are fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numerators.", "workingLatex": "3 \\times 2 = 6", "explanation": "The new numerator is $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the denominators.", "workingLatex": "7 \\times 1 = 7", "explanation": "The denominator stays as $7$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the product.", "workingLatex": "\\frac{6}{7}", "explanation": "Two lots of three sevenths make six sevenths.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{3}{7} \\times 2 = \\frac{6}{7}", "explanation": "As $\\gcd(6,7) = 1$, this is already simplest.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{6}{7}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{1}{2} - \\frac{1}{5}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{1}{2} - \\frac{1}{5}", "explanation": "Halves and fifths need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,5) = 10", "explanation": "As $2$ and $5$ share no factors, the common denominator is $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{5}{10}", "explanation": "Multiplying top and bottom by $5$ gives five tenths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{5} = \\frac{2}{10}", "explanation": "Multiplying top and bottom by $2$ gives two tenths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the tenths.", "workingLatex": "\\frac{5}{10} - \\frac{2}{10} = \\frac{3}{10}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} - \\frac{1}{5} = \\frac{3}{10}", "explanation": "The difference is three tenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{10}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "simplifying"],
    "questionText": "Work out $\\frac{3}{10} + \\frac{1}{2}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{3}{10} + \\frac{1}{2}", "explanation": "Tenths and halves need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(10,2) = 10", "explanation": "Both denominators divide into $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{2} = \\frac{5}{10}", "explanation": "Multiplying top and bottom by $5$ gives five tenths.", "diagram": null },
        { "stepNumber": 4, "description": "Add the tenths.", "workingLatex": "\\frac{3}{10} + \\frac{5}{10} = \\frac{8}{10}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{8}{10} = \\frac{4}{5}", "explanation": "Dividing top and bottom by $2$ gives four fifths.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{3}{10} + \\frac{1}{2} = \\frac{4}{5}", "explanation": "The total simplifies to four fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{4}{5}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator", "simplifying"],
    "questionText": "Work out $\\frac{5}{12} - \\frac{1}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{5}{12} - \\frac{1}{4}", "explanation": "Twelfths and quarters need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(12,4) = 12", "explanation": "Both denominators divide into $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Subtract the twelfths.", "workingLatex": "\\frac{5}{12} - \\frac{3}{12} = \\frac{2}{12}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{2}{12} = \\frac{1}{6}", "explanation": "Dividing top and bottom by $2$ gives one sixth.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{5}{12} - \\frac{1}{4} = \\frac{1}{6}", "explanation": "The difference simplifies to one sixth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "simplifying"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{3}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall how to multiply fractions.", "workingLatex": "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "2 \\times 3 = 6", "explanation": "The new numerator is $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "3 \\times 4 = 12", "explanation": "The new denominator is $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "\\frac{6}{12}", "explanation": "This can be simplified.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{6}{12} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $6$ gives one half.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2}", "explanation": "The result is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "division", "reciprocal", "simplifying"],
    "questionText": "Work out $\\frac{4}{9} \\div \\frac{2}{3}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for dividing fractions.", "workingLatex": "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}", "explanation": "Dividing by a fraction means multiplying by its reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the second fraction.", "workingLatex": "\\frac{4}{9} \\div \\frac{2}{3} = \\frac{4}{9} \\times \\frac{3}{2}", "explanation": "The reciprocal of $\\frac{2}{3}$ is $\\frac{3}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply across.", "workingLatex": "\\frac{4 \\times 3}{9 \\times 2} = \\frac{12}{18}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 4, "description": "Find the common factor.", "workingLatex": "\\gcd(12,18) = 6", "explanation": "Both $12$ and $18$ divide by $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "\\frac{12}{18} = \\frac{2}{3}", "explanation": "Dividing top and bottom by $6$ gives two thirds.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{4}{9} \\div \\frac{2}{3} = \\frac{2}{3}", "explanation": "The result is two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator"],
    "questionText": "Work out $\\frac{1}{6} + \\frac{3}{4}$, giving your answer as a fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{1}{6} + \\frac{3}{4}", "explanation": "Sixths and quarters need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,4) = 12", "explanation": "Twelve is the smallest number both $6$ and $4$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{6} = \\frac{2}{12}", "explanation": "Multiplying top and bottom by $2$ gives two twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the twelfths.", "workingLatex": "\\frac{2}{12} + \\frac{9}{12} = \\frac{11}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(11,12) = 1", "explanation": "Eleven and twelve share no common factor.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{6} + \\frac{3}{4} = \\frac{11}{12}", "explanation": "The total is eleven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{11}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "improper fractions"],
    "questionText": "Work out $2\\frac{1}{2} + 1\\frac{1}{3}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes is four halves, plus one half makes five halves; improper fractions are easier to add.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus one third makes four thirds.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the sum.", "workingLatex": "\\frac{5}{2} + \\frac{4}{3}", "explanation": "Now we add two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,3) = 6", "explanation": "Six is the smallest number both $2$ and $3$ divide into.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{5}{2} = \\frac{15}{6}", "explanation": "Multiplying top and bottom by $3$ gives fifteen sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the second fraction.", "workingLatex": "\\frac{4}{3} = \\frac{8}{6}", "explanation": "Multiplying top and bottom by $2$ gives eight sixths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the sixths.", "workingLatex": "\\frac{15}{6} + \\frac{8}{6} = \\frac{23}{6}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Divide to convert back.", "workingLatex": "23 \\div 6 = 3 \\text{ r } 5", "explanation": "Six goes into twenty-three three times with five left over.", "diagram": null },
        { "stepNumber": 9, "description": "Write as a mixed number.", "workingLatex": "\\frac{23}{6} = 3\\frac{5}{6}", "explanation": "The three whole sixes and the remaining five sixths give the mixed number.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} + 1\\frac{1}{3} = 3\\frac{5}{6}", "explanation": "The total is three and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "subtraction", "improper fractions"],
    "questionText": "Work out $3\\frac{1}{4} - 1\\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "3\\frac{1}{4} = \\frac{13}{4}", "explanation": "Three wholes is twelve quarters, plus one quarter makes thirteen quarters.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus one half makes three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the subtraction.", "workingLatex": "\\frac{13}{4} - \\frac{3}{2}", "explanation": "Now we subtract two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,2) = 4", "explanation": "Both denominators divide into $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{3}{2} = \\frac{6}{4}", "explanation": "Multiplying top and bottom by $2$ gives six quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the quarters.", "workingLatex": "\\frac{13}{4} - \\frac{6}{4} = \\frac{7}{4}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to convert back.", "workingLatex": "7 \\div 4 = 1 \\text{ r } 3", "explanation": "Four goes into seven once with three left over.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a mixed number.", "workingLatex": "\\frac{7}{4} = 1\\frac{3}{4}", "explanation": "One whole and three quarters remain.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "3\\frac{1}{4} - 1\\frac{1}{2} = 1\\frac{3}{4}", "explanation": "The difference is one and three quarters.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "multiplication", "improper fractions"],
    "questionText": "Work out $1\\frac{2}{3} \\times 2\\frac{1}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "1\\frac{2}{3} = \\frac{5}{3}", "explanation": "Mixed numbers must be made improper before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes is eight quarters, plus one quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the product.", "workingLatex": "\\frac{5}{3} \\times \\frac{9}{4}", "explanation": "Now we multiply two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "5 \\times 9 = 45", "explanation": "The new numerator is $45$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "3 \\times 4 = 12", "explanation": "The new denominator is $12$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the product.", "workingLatex": "\\frac{45}{12}", "explanation": "This improper fraction can be simplified.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "\\frac{45}{12} = \\frac{15}{4}", "explanation": "Dividing top and bottom by $3$ gives fifteen quarters.", "diagram": null },
        { "stepNumber": 8, "description": "Divide to convert back.", "workingLatex": "15 \\div 4 = 3 \\text{ r } 3", "explanation": "Four goes into fifteen three times with three left over.", "diagram": null },
        { "stepNumber": 9, "description": "Write as a mixed number.", "workingLatex": "\\frac{15}{4} = 3\\frac{3}{4}", "explanation": "Three wholes and three quarters remain.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "1\\frac{2}{3} \\times 2\\frac{1}{4} = 3\\frac{3}{4}", "explanation": "The product is three and three quarters.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fractions", "mixed numbers", "division", "reciprocal"],
    "questionText": "Work out $2\\frac{1}{2} \\div 1\\frac{1}{4}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Improper fractions are needed before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{4} = \\frac{5}{4}", "explanation": "One whole is four quarters, plus one quarter makes five quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the division.", "workingLatex": "\\frac{5}{2} \\div \\frac{5}{4}", "explanation": "Now we divide two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply by the reciprocal.", "workingLatex": "= \\frac{5}{2} \\times \\frac{4}{5}", "explanation": "Dividing by $\\frac{5}{4}$ means multiplying by $\\frac{4}{5}$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerators.", "workingLatex": "5 \\times 4 = 20", "explanation": "The new numerator is $20$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the denominators.", "workingLatex": "2 \\times 5 = 10", "explanation": "The new denominator is $10$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "\\frac{20}{10}", "explanation": "This simplifies to a whole number.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{20}{10} = 2", "explanation": "Twenty tenths is exactly two.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} \\div 1\\frac{1}{4} = 2", "explanation": "The result is $2$.", "diagram": null }
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
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "improper fractions"],
    "questionText": "Work out $\\frac{5}{6} + \\frac{3}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{5}{6} + \\frac{3}{4}", "explanation": "Sixths and quarters need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,4) = 12", "explanation": "Twelve is the smallest number both divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{5}{6} = \\frac{10}{12}", "explanation": "Multiplying top and bottom by $2$ gives ten twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the twelfths.", "workingLatex": "\\frac{10}{12} + \\frac{9}{12} = \\frac{19}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise it is top-heavy.", "workingLatex": "19 > 12", "explanation": "The numerator is bigger than the denominator, so the answer is more than one whole.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to convert back.", "workingLatex": "19 \\div 12 = 1 \\text{ r } 7", "explanation": "Twelve goes into nineteen once with seven left over.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a mixed number.", "workingLatex": "\\frac{19}{12} = 1\\frac{7}{12}", "explanation": "One whole and seven twelfths remain.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} + \\frac{3}{4} = 1\\frac{7}{12}", "explanation": "The total is one and seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{7}{12}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{7}{8} - \\frac{2}{3}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{7}{8} - \\frac{2}{3}", "explanation": "Eighths and thirds need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(8,3) = 24", "explanation": "As $8$ and $3$ share no factors, the common denominator is $24$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{7}{8} = \\frac{21}{24}", "explanation": "Multiplying top and bottom by $3$ gives twenty-one twenty-fourths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{3} = \\frac{16}{24}", "explanation": "Multiplying top and bottom by $8$ gives sixteen twenty-fourths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the twenty-fourths.", "workingLatex": "\\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(5,24) = 1", "explanation": "Five and twenty-four share no common factor.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{7}{8} - \\frac{2}{3} = \\frac{5}{24}", "explanation": "The difference is five twenty-fourths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{24}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{3}{4} \\times \\frac{8}{9}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{3}{4} \\times \\frac{8}{9}", "explanation": "We can cancel common factors before multiplying to keep numbers small.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $4$ and the $8$.", "workingLatex": "\\frac{3}{1} \\times \\frac{2}{9}", "explanation": "Both $4$ and $8$ divide by $4$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $3$ and the $9$.", "workingLatex": "\\frac{1}{1} \\times \\frac{2}{3}", "explanation": "Both $3$ and $9$ divide by $3$, giving $1$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "1 \\times 2 = 2", "explanation": "The new numerator is $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "1 \\times 3 = 3", "explanation": "The new denominator is $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the product.", "workingLatex": "\\frac{2}{3}", "explanation": "Cancelling first means no simplifying is needed at the end.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}", "explanation": "The result is two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "division", "reciprocal", "simplifying"],
    "questionText": "Work out $\\frac{5}{8} \\div \\frac{15}{16}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the rule for dividing fractions.", "workingLatex": "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}", "explanation": "Divide by multiplying by the reciprocal.", "diagram": null },
        { "stepNumber": 2, "description": "Flip the second fraction.", "workingLatex": "\\frac{5}{8} \\div \\frac{15}{16} = \\frac{5}{8} \\times \\frac{16}{15}", "explanation": "The reciprocal of $\\frac{15}{16}$ is $\\frac{16}{15}$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $8$ and the $16$.", "workingLatex": "\\frac{5}{1} \\times \\frac{2}{15}", "explanation": "Both divide by $8$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $5$ and the $15$.", "workingLatex": "\\frac{1}{1} \\times \\frac{2}{3}", "explanation": "Both divide by $5$, giving $1$ and $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply across.", "workingLatex": "\\frac{1 \\times 2}{1 \\times 3} = \\frac{2}{3}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{5}{8} \\div \\frac{15}{16} = \\frac{2}{3}", "explanation": "The result is two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "common denominator"],
    "questionText": "Work out $2\\frac{2}{5} + 3\\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{2}{5} = \\frac{12}{5}", "explanation": "Two wholes is ten fifths, plus two fifths makes twelve fifths.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "3\\frac{1}{2} = \\frac{7}{2}", "explanation": "Three wholes is six halves, plus one half makes seven halves.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the sum.", "workingLatex": "\\frac{12}{5} + \\frac{7}{2}", "explanation": "Now we add two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(5,2) = 10", "explanation": "As $5$ and $2$ share no factors, the common denominator is $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{12}{5} = \\frac{24}{10}", "explanation": "Multiplying top and bottom by $2$ gives twenty-four tenths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the second fraction.", "workingLatex": "\\frac{7}{2} = \\frac{35}{10}", "explanation": "Multiplying top and bottom by $5$ gives thirty-five tenths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the tenths.", "workingLatex": "\\frac{24}{10} + \\frac{35}{10} = \\frac{59}{10}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Divide to convert back.", "workingLatex": "59 \\div 10 = 5 \\text{ r } 9", "explanation": "Ten goes into fifty-nine five times with nine left over.", "diagram": null },
        { "stepNumber": 9, "description": "Write as a mixed number.", "workingLatex": "\\frac{59}{10} = 5\\frac{9}{10}", "explanation": "Five wholes and nine tenths remain.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\frac{2}{5} + 3\\frac{1}{2} = 5\\frac{9}{10}", "explanation": "The total is five and nine tenths.", "diagram": null }
      ],
      "finalAnswer": "$5\\frac{9}{10}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "subtraction", "simplifying"],
    "questionText": "Work out $4\\frac{1}{3} - 2\\frac{5}{6}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "4\\frac{1}{3} = \\frac{13}{3}", "explanation": "Four wholes is twelve thirds, plus one third makes thirteen thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{5}{6} = \\frac{17}{6}", "explanation": "Two wholes is twelve sixths, plus five sixths makes seventeen sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the subtraction.", "workingLatex": "\\frac{13}{3} - \\frac{17}{6}", "explanation": "Now we subtract two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(3,6) = 6", "explanation": "Both denominators divide into $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{13}{3} = \\frac{26}{6}", "explanation": "Multiplying top and bottom by $2$ gives twenty-six sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the sixths.", "workingLatex": "\\frac{26}{6} - \\frac{17}{6} = \\frac{9}{6}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "\\frac{9}{6} = \\frac{3}{2}", "explanation": "Dividing top and bottom by $3$ gives three halves.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Three halves is one whole and one half.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "4\\frac{1}{3} - 2\\frac{5}{6} = 1\\frac{1}{2}", "explanation": "The difference is one and a half.", "diagram": null }
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
    "marks": 3,
    "answerType": "value",
    "tags": ["fractions", "mixed numbers", "multiplication", "cancelling"],
    "questionText": "Work out $3\\frac{1}{3} \\times \\frac{3}{5}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the mixed number.", "workingLatex": "3\\frac{1}{3} = \\frac{10}{3}", "explanation": "Three wholes is nine thirds, plus one third makes ten thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the product.", "workingLatex": "\\frac{10}{3} \\times \\frac{3}{5}", "explanation": "Now we multiply two fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $3$s.", "workingLatex": "\\frac{10}{1} \\times \\frac{1}{5}", "explanation": "The $3$ on the bottom and the $3$ on the top both divide by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $10$ and the $5$.", "workingLatex": "\\frac{2}{1} \\times \\frac{1}{1}", "explanation": "Both divide by $5$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply across.", "workingLatex": "\\frac{2 \\times 1}{1 \\times 1} = \\frac{2}{1}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 6, "description": "Write as a whole number.", "workingLatex": "\\frac{2}{1} = 2", "explanation": "Two over one is just two.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "3\\frac{1}{3} \\times \\frac{3}{5} = 2", "explanation": "The result is $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "division", "dividing by an integer"],
    "questionText": "Work out $4\\frac{1}{2} \\div 3$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the mixed number.", "workingLatex": "4\\frac{1}{2} = \\frac{9}{2}", "explanation": "Four wholes is eight halves, plus one half makes nine halves.", "diagram": null },
        { "stepNumber": 2, "description": "Write the integer as a fraction.", "workingLatex": "3 = \\frac{3}{1}", "explanation": "This lets us use the fraction division rule.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{9}{2} \\div \\frac{3}{1} = \\frac{9}{2} \\times \\frac{1}{3}", "explanation": "Dividing by $\\frac{3}{1}$ means multiplying by $\\frac{1}{3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $9$ and the $3$.", "workingLatex": "\\frac{3}{2} \\times \\frac{1}{1}", "explanation": "Both divide by $3$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply across.", "workingLatex": "\\frac{3 \\times 1}{2 \\times 1} = \\frac{3}{2}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 6, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Three halves is one whole and one half.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "4\\frac{1}{2} \\div 3 = 1\\frac{1}{2}", "explanation": "Sharing four and a half into three equal parts gives one and a half each.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "improper fractions"],
    "questionText": "Work out $\\frac{5}{6} + \\frac{7}{9}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{5}{6} + \\frac{7}{9}", "explanation": "Sixths and ninths need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,9) = 18", "explanation": "Eighteen is the smallest number both $6$ and $9$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{5}{6} = \\frac{15}{18}", "explanation": "Multiplying top and bottom by $3$ gives fifteen eighteenths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{7}{9} = \\frac{14}{18}", "explanation": "Multiplying top and bottom by $2$ gives fourteen eighteenths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the eighteenths.", "workingLatex": "\\frac{15}{18} + \\frac{14}{18} = \\frac{29}{18}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Divide to convert back.", "workingLatex": "29 \\div 18 = 1 \\text{ r } 11", "explanation": "Eighteen goes into twenty-nine once with eleven left over.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "\\frac{29}{18} = 1\\frac{11}{18}", "explanation": "One whole and eleven eighteenths remain.", "diagram": null },
        { "stepNumber": 8, "description": "Check for simplification.", "workingLatex": "\\gcd(11,18) = 1", "explanation": "Eleven and eighteen share no common factor.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} + \\frac{7}{9} = 1\\frac{11}{18}", "explanation": "The total is one and eleven eighteenths.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{11}{18}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{11}{12} - \\frac{5}{8}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{11}{12} - \\frac{5}{8}", "explanation": "Twelfths and eighths need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(12,8) = 24", "explanation": "Twenty-four is the smallest number both $12$ and $8$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{11}{12} = \\frac{22}{24}", "explanation": "Multiplying top and bottom by $2$ gives twenty-two twenty-fourths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{5}{8} = \\frac{15}{24}", "explanation": "Multiplying top and bottom by $3$ gives fifteen twenty-fourths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the twenty-fourths.", "workingLatex": "\\frac{22}{24} - \\frac{15}{24} = \\frac{7}{24}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(7,24) = 1", "explanation": "Seven and twenty-four share no common factor.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{11}{12} - \\frac{5}{8} = \\frac{7}{24}", "explanation": "The difference is seven twenty-fourths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{24}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "multiplication", "cancelling"],
    "questionText": "Work out $2\\frac{3}{4} \\times 1\\frac{1}{3}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{3}{4} = \\frac{11}{4}", "explanation": "Two wholes is eight quarters, plus three quarters makes eleven quarters.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus one third makes four thirds.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the product.", "workingLatex": "\\frac{11}{4} \\times \\frac{4}{3}", "explanation": "Now we multiply two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $4$s.", "workingLatex": "\\frac{11}{1} \\times \\frac{1}{3}", "explanation": "The $4$ on the bottom and the $4$ on the top cancel.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply across.", "workingLatex": "\\frac{11 \\times 1}{1 \\times 3} = \\frac{11}{3}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 6, "description": "Divide to convert back.", "workingLatex": "11 \\div 3 = 3 \\text{ r } 2", "explanation": "Three goes into eleven three times with two left over.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "\\frac{11}{3} = 3\\frac{2}{3}", "explanation": "Three wholes and two thirds remain.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "2\\frac{3}{4} \\times 1\\frac{1}{3} = 3\\frac{2}{3}", "explanation": "The product is three and two thirds.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "division", "cancelling"],
    "questionText": "Work out $3\\frac{3}{4} \\div 1\\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "3\\frac{3}{4} = \\frac{15}{4}", "explanation": "Three wholes is twelve quarters, plus three quarters makes fifteen quarters.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus one half makes three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{15}{4} \\div \\frac{3}{2} = \\frac{15}{4} \\times \\frac{2}{3}", "explanation": "Dividing by $\\frac{3}{2}$ means multiplying by $\\frac{2}{3}$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $2$ and the $4$.", "workingLatex": "\\frac{15}{2} \\times \\frac{1}{3}", "explanation": "Both divide by $2$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $15$ and the $3$.", "workingLatex": "\\frac{5}{2} \\times \\frac{1}{1}", "explanation": "Both divide by $3$, giving $5$ and $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply across.", "workingLatex": "\\frac{5 \\times 1}{2 \\times 1} = \\frac{5}{2}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 7, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{5}{2} = 2\\frac{1}{2}", "explanation": "Five halves is two wholes and one half.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3\\frac{3}{4} \\div 1\\frac{1}{2} = 2\\frac{1}{2}", "explanation": "The result is two and a half.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "common denominator"],
    "questionText": "Work out $1\\frac{1}{2} + \\frac{2}{3}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the mixed number.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, plus one half makes three halves.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the sum.", "workingLatex": "\\frac{3}{2} + \\frac{2}{3}", "explanation": "Now we add two fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,3) = 6", "explanation": "Six is the smallest number both denominators divide into.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{2} = \\frac{9}{6}", "explanation": "Multiplying top and bottom by $3$ gives nine sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{3} = \\frac{4}{6}", "explanation": "Multiplying top and bottom by $2$ gives four sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Add the sixths.", "workingLatex": "\\frac{9}{6} + \\frac{4}{6} = \\frac{13}{6}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to convert back.", "workingLatex": "13 \\div 6 = 2 \\text{ r } 1", "explanation": "Six goes into thirteen twice with one left over.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a mixed number.", "workingLatex": "\\frac{13}{6} = 2\\frac{1}{6}", "explanation": "Two wholes and one sixth remain.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{1}{2} + \\frac{2}{3} = 2\\frac{1}{6}", "explanation": "The total is two and one sixth.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{1}{6}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator"],
    "questionText": "Work out $\\frac{7}{10} - \\frac{1}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{7}{10} - \\frac{1}{4}", "explanation": "Tenths and quarters need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(10,4) = 20", "explanation": "Twenty is the smallest number both $10$ and $4$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{7}{10} = \\frac{14}{20}", "explanation": "Multiplying top and bottom by $2$ gives fourteen twentieths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{5}{20}", "explanation": "Multiplying top and bottom by $5$ gives five twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the twentieths.", "workingLatex": "\\frac{14}{20} - \\frac{5}{20} = \\frac{9}{20}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplification.", "workingLatex": "\\gcd(9,20) = 1", "explanation": "Nine and twenty share no common factor.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{7}{10} - \\frac{1}{4} = \\frac{9}{20}", "explanation": "The difference is nine twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{9}{20}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{4}{5} \\times \\frac{5}{6}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{4}{5} \\times \\frac{5}{6}", "explanation": "Look for common factors to cancel before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $5$s.", "workingLatex": "\\frac{4}{1} \\times \\frac{1}{6}", "explanation": "The $5$ on the bottom and the $5$ on the top cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $4$ and the $6$.", "workingLatex": "\\frac{2}{1} \\times \\frac{1}{3}", "explanation": "Both divide by $2$, giving $2$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{2 \\times 1}{1 \\times 3} = \\frac{2}{3}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{4}{5} \\times \\frac{5}{6} = \\frac{2}{3}", "explanation": "The result is two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "division", "reciprocal", "cancelling"],
    "questionText": "Work out $\\frac{9}{10} \\div \\frac{3}{5}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{9}{10} \\div \\frac{3}{5} = \\frac{9}{10} \\times \\frac{5}{3}", "explanation": "Dividing by $\\frac{3}{5}$ means multiplying by $\\frac{5}{3}$.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $5$ and the $10$.", "workingLatex": "\\frac{9}{2} \\times \\frac{1}{3}", "explanation": "Both divide by $5$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $9$ and the $3$.", "workingLatex": "\\frac{3}{2} \\times \\frac{1}{1}", "explanation": "Both divide by $3$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{3 \\times 1}{2 \\times 1} = \\frac{3}{2}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 5, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\frac{1}{2}", "explanation": "Three halves is one whole and one half.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{9}{10} \\div \\frac{3}{5} = 1\\frac{1}{2}", "explanation": "The result is one and a half.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "common denominator"],
    "questionText": "Work out $2\\frac{1}{6} + 1\\frac{3}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{6} = \\frac{13}{6}", "explanation": "Two wholes is twelve sixths, plus one sixth makes thirteen sixths.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{3}{4} = \\frac{7}{4}", "explanation": "One whole is four quarters, plus three quarters makes seven quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the sum.", "workingLatex": "\\frac{13}{6} + \\frac{7}{4}", "explanation": "Now we add two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,4) = 12", "explanation": "Twelve is the smallest number both $6$ and $4$ divide into.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{13}{6} = \\frac{26}{12}", "explanation": "Multiplying top and bottom by $2$ gives twenty-six twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the second fraction.", "workingLatex": "\\frac{7}{4} = \\frac{21}{12}", "explanation": "Multiplying top and bottom by $3$ gives twenty-one twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the twelfths.", "workingLatex": "\\frac{26}{12} + \\frac{21}{12} = \\frac{47}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Divide to convert back.", "workingLatex": "47 \\div 12 = 3 \\text{ r } 11", "explanation": "Twelve goes into forty-seven three times with eleven left over.", "diagram": null },
        { "stepNumber": 9, "description": "Write as a mixed number.", "workingLatex": "\\frac{47}{12} = 3\\frac{11}{12}", "explanation": "Three wholes and eleven twelfths remain.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\frac{1}{6} + 1\\frac{3}{4} = 3\\frac{11}{12}", "explanation": "The total is three and eleven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{11}{12}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "subtraction", "common denominator"],
    "questionText": "Work out $5\\frac{1}{2} - 2\\frac{3}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "5\\frac{1}{2} = \\frac{11}{2}", "explanation": "Five wholes is ten halves, plus one half makes eleven halves.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{3}{4} = \\frac{11}{4}", "explanation": "Two wholes is eight quarters, plus three quarters makes eleven quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the subtraction.", "workingLatex": "\\frac{11}{2} - \\frac{11}{4}", "explanation": "Now we subtract two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,4) = 4", "explanation": "Both denominators divide into $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{11}{2} = \\frac{22}{4}", "explanation": "Multiplying top and bottom by $2$ gives twenty-two quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the quarters.", "workingLatex": "\\frac{22}{4} - \\frac{11}{4} = \\frac{11}{4}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to convert back.", "workingLatex": "11 \\div 4 = 2 \\text{ r } 3", "explanation": "Four goes into eleven twice with three left over.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a mixed number.", "workingLatex": "\\frac{11}{4} = 2\\frac{3}{4}", "explanation": "Two wholes and three quarters remain.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "5\\frac{1}{2} - 2\\frac{3}{4} = 2\\frac{3}{4}", "explanation": "The difference is two and three quarters.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{3}{4}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "simplifying"],
    "questionText": "Work out $\\frac{3}{8} \\times \\frac{4}{9}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{3}{8} \\times \\frac{4}{9}", "explanation": "Cancel common factors before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the $3$ and the $9$.", "workingLatex": "\\frac{1}{8} \\times \\frac{4}{3}", "explanation": "Both divide by $3$, giving $1$ and $3$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $4$ and the $8$.", "workingLatex": "\\frac{1}{2} \\times \\frac{1}{3}", "explanation": "Both divide by $4$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 5, "description": "State the final answer.", "workingLatex": "\\frac{3}{8} \\times \\frac{4}{9} = \\frac{1}{6}", "explanation": "The result is one sixth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["fractions", "mixed numbers", "division", "cancelling"],
    "questionText": "Work out $2\\frac{1}{2} \\div \\frac{5}{8}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes is four halves, plus one half makes five halves.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{5}{2} \\div \\frac{5}{8} = \\frac{5}{2} \\times \\frac{8}{5}", "explanation": "Dividing by $\\frac{5}{8}$ means multiplying by $\\frac{8}{5}$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $5$s.", "workingLatex": "\\frac{1}{2} \\times \\frac{8}{1}", "explanation": "The $5$ on the top and the $5$ on the bottom cancel.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $8$ and the $2$.", "workingLatex": "\\frac{1}{1} \\times \\frac{4}{1}", "explanation": "Both divide by $2$, giving $1$ and $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply across.", "workingLatex": "\\frac{1 \\times 4}{1 \\times 1} = 4", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} \\div \\frac{5}{8} = 4", "explanation": "The result is $4$.", "diagram": null }
      ],
      "finalAnswer": "$4$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "context", "common denominator"],
    "questionText": "A recipe needs $\\frac{3}{4}$ of a cup of flour and $\\frac{2}{5}$ of a cup of sugar. What is the total amount, in cups? Give your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the calculation.", "workingLatex": "\\frac{3}{4} + \\frac{2}{5}", "explanation": "The total is the flour plus the sugar.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,5) = 20", "explanation": "As $4$ and $5$ share no factors, the common denominator is $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{4} = \\frac{15}{20}", "explanation": "Multiplying top and bottom by $5$ gives fifteen twentieths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{2}{5} = \\frac{8}{20}", "explanation": "Multiplying top and bottom by $4$ gives eight twentieths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the twentieths.", "workingLatex": "\\frac{15}{20} + \\frac{8}{20} = \\frac{23}{20}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Divide to convert back.", "workingLatex": "23 \\div 20 = 1 \\text{ r } 3", "explanation": "Twenty goes into twenty-three once with three left over.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "\\frac{23}{20} = 1\\frac{3}{20}", "explanation": "One whole cup and three twentieths remain.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "1\\frac{3}{20} \\text{ cups}", "explanation": "The recipe uses one and three twentieths cups in total.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{3}{20}$ cups"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "subtraction", "context"],
    "questionText": "A piece of ribbon is $2\\frac{1}{4}$ m long. A length of $\\frac{3}{8}$ m is cut off. How much ribbon is left? Give your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the calculation.", "workingLatex": "2\\frac{1}{4} - \\frac{3}{8}", "explanation": "The ribbon left is the original length minus the piece cut off.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes is eight quarters, plus one quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the subtraction.", "workingLatex": "\\frac{9}{4} - \\frac{3}{8}", "explanation": "Now we subtract two fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,8) = 8", "explanation": "Both denominators divide into $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{9}{4} = \\frac{18}{8}", "explanation": "Multiplying top and bottom by $2$ gives eighteen eighths.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the eighths.", "workingLatex": "\\frac{18}{8} - \\frac{3}{8} = \\frac{15}{8}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to convert back.", "workingLatex": "15 \\div 8 = 1 \\text{ r } 7", "explanation": "Eight goes into fifteen once with seven left over.", "diagram": null },
        { "stepNumber": 8, "description": "Write as a mixed number.", "workingLatex": "\\frac{15}{8} = 1\\frac{7}{8}", "explanation": "One whole metre and seven eighths remain.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{7}{8} \\text{ m}", "explanation": "There is one and seven eighths metres of ribbon left.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{7}{8}$ m"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "multiplication", "addition"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4}", "explanation": "BIDMAS tells us multiplication comes before addition, so we work out the product first.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the two fractions.", "workingLatex": "\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}", "explanation": "Multiply the tops and the bottoms: $1 \\times 1 = 1$ and $3 \\times 4 = 12$.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{12}", "explanation": "The product replaces the multiplication part, leaving an addition.", "diagram": null },
        { "stepNumber": 4, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,12) = 12", "explanation": "Both denominators divide into $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{6}{12}", "explanation": "Multiplying top and bottom by $6$ gives six twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Add the twelfths.", "workingLatex": "\\frac{6}{12} + \\frac{1}{12} = \\frac{7}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Check for simplification.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "Seven and twelve share no common factor.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4} = \\frac{7}{12}", "explanation": "The result is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "brackets", "multiplication"],
    "questionText": "Work out $\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\times \\frac{6}{7}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\times \\frac{6}{7}", "explanation": "BIDMAS says work out the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator inside the bracket.", "workingLatex": "\\text{LCM}(3,4) = 12", "explanation": "Twelve is the smallest number both $3$ and $4$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiplying top and bottom by $4$ gives eight twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Add inside the bracket.", "workingLatex": "\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{11}{12} \\times \\frac{6}{7}", "explanation": "The bracket value now multiplies the last fraction.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the $6$ and the $12$.", "workingLatex": "\\frac{11}{2} \\times \\frac{1}{7}", "explanation": "Both divide by $6$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply across.", "workingLatex": "\\frac{11 \\times 1}{2 \\times 7} = \\frac{11}{14}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 9, "description": "Check for simplification.", "workingLatex": "\\gcd(11,14) = 1", "explanation": "Eleven and fourteen share no common factor.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\left(\\frac{2}{3} + \\frac{1}{4}\\right) \\times \\frac{6}{7} = \\frac{11}{14}", "explanation": "The result is eleven fourteenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{11}{14}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "order of operations", "multiplication"],
    "questionText": "Work out $2\\frac{1}{2} \\times 1\\frac{1}{3} - \\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "2\\frac{1}{2} \\times 1\\frac{1}{3} - \\frac{1}{2}", "explanation": "BIDMAS says do the multiplication before the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{2} = \\frac{5}{2}", "explanation": "Two wholes is four halves, plus one half makes five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus one third makes four thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the fractions.", "workingLatex": "\\frac{5}{2} \\times \\frac{4}{3}", "explanation": "Set up the product before cancelling.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $4$ and the $2$.", "workingLatex": "\\frac{5}{1} \\times \\frac{2}{3}", "explanation": "Both divide by $2$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply across.", "workingLatex": "\\frac{5 \\times 2}{1 \\times 3} = \\frac{10}{3}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the calculation.", "workingLatex": "\\frac{10}{3} - \\frac{1}{2}", "explanation": "Now subtract the last fraction from the product.", "diagram": null },
        { "stepNumber": 8, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(3,2) = 6", "explanation": "Six is the smallest number both denominators divide into.", "diagram": null },
        { "stepNumber": 9, "description": "Convert both fractions.", "workingLatex": "\\frac{10}{3} = \\frac{20}{6}, \\quad \\frac{1}{2} = \\frac{3}{6}", "explanation": "Rewriting both over $6$ so they can be subtracted.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the sixths.", "workingLatex": "\\frac{20}{6} - \\frac{3}{6} = \\frac{17}{6}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 11, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{17}{6} = 2\\frac{5}{6}", "explanation": "Six goes into seventeen twice with five left over.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "2\\frac{1}{2} \\times 1\\frac{1}{3} - \\frac{1}{2} = 2\\frac{5}{6}", "explanation": "The result is two and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "brackets", "division"],
    "questionText": "Work out $\\left(\\frac{3}{4} - \\frac{1}{6}\\right) \\div \\frac{2}{3}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\left(\\frac{3}{4} - \\frac{1}{6}\\right) \\div \\frac{2}{3}", "explanation": "Work out the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator in the bracket.", "workingLatex": "\\text{LCM}(4,6) = 12", "explanation": "Twelve is the smallest number both $4$ and $6$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{6} = \\frac{2}{12}", "explanation": "Multiplying top and bottom by $2$ gives two twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract inside the bracket.", "workingLatex": "\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{7}{12} \\div \\frac{2}{3}", "explanation": "The bracket value is now divided by the last fraction.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply by the reciprocal.", "workingLatex": "= \\frac{7}{12} \\times \\frac{3}{2}", "explanation": "Dividing by $\\frac{2}{3}$ means multiplying by $\\frac{3}{2}$.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the $3$ and the $12$.", "workingLatex": "\\frac{7}{4} \\times \\frac{1}{2}", "explanation": "Both divide by $3$, giving $4$ and $1$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply across.", "workingLatex": "\\frac{7 \\times 1}{4 \\times 2} = \\frac{7}{8}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\left(\\frac{3}{4} - \\frac{1}{6}\\right) \\div \\frac{2}{3} = \\frac{7}{8}", "explanation": "The result is seven eighths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{8}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "subtraction"],
    "questionText": "Work out $1\\frac{1}{2} + 2\\frac{1}{3} - \\frac{3}{4}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the mixed numbers.", "workingLatex": "1\\frac{1}{2} = \\frac{3}{2}, \\quad 2\\frac{1}{3} = \\frac{7}{3}", "explanation": "Making everything improper lets us combine over one denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{2} + \\frac{7}{3} - \\frac{3}{4}", "explanation": "All three terms are now fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,3,4) = 12", "explanation": "Twelve is the smallest number that $2$, $3$ and $4$ all divide into.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{2} = \\frac{18}{12}", "explanation": "Multiplying top and bottom by $6$ gives eighteen twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second fraction.", "workingLatex": "\\frac{7}{3} = \\frac{28}{12}", "explanation": "Multiplying top and bottom by $4$ gives twenty-eight twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the third fraction.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the numerators.", "workingLatex": "\\frac{18 + 28 - 9}{12}", "explanation": "With a common denominator we add and subtract the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Work through the numerator.", "workingLatex": "18 + 28 = 46, \\quad 46 - 9 = 37", "explanation": "Adding then subtracting gives $37$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the improper fraction.", "workingLatex": "\\frac{37}{12}", "explanation": "The combined value is thirty-seven twelfths.", "diagram": null },
        { "stepNumber": 10, "description": "Convert back to a mixed number.", "workingLatex": "37 \\div 12 = 3 \\text{ r } 1 \\Rightarrow 3\\frac{1}{12}", "explanation": "Twelve goes into thirty-seven three times with one left over.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "1\\frac{1}{2} + 2\\frac{1}{3} - \\frac{3}{4} = 3\\frac{1}{12}", "explanation": "The result is three and one twelfth.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{1}{12}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "context", "division", "multiplication"],
    "questionText": "A recipe for $4$ people uses $\\frac{2}{3}$ of a cup of rice. How much rice is needed for $10$ people? Give your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rice for one person.", "workingLatex": "\\frac{2}{3} \\div 4", "explanation": "Sharing the amount for four people equally gives the amount for one person.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{1} = \\frac{2}{3} \\times \\frac{1}{4}", "explanation": "Dividing by $4$ is multiplying by $\\frac{1}{4}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply across.", "workingLatex": "\\frac{2}{12} = \\frac{1}{6}", "explanation": "Two twelfths simplifies to one sixth per person.", "diagram": null },
        { "stepNumber": 4, "description": "Scale up to ten people.", "workingLatex": "\\frac{1}{6} \\times 10", "explanation": "Ten people need ten times the amount for one person.", "diagram": null },
        { "stepNumber": 5, "description": "Write the whole number as a fraction.", "workingLatex": "\\frac{1}{6} \\times \\frac{10}{1}", "explanation": "This lets us multiply as fractions.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply across.", "workingLatex": "\\frac{1 \\times 10}{6 \\times 1} = \\frac{10}{6}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "\\frac{10}{6} = \\frac{5}{3}", "explanation": "Dividing top and bottom by $2$ gives five thirds.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{5}{3} = 1\\frac{2}{3}", "explanation": "Three goes into five once with two left over.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\frac{2}{3} \\text{ cups}", "explanation": "Ten people need one and two thirds cups of rice.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{2}{3}$ cups"
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
    "tags": ["fractions", "order of operations", "brackets", "division"],
    "questionText": "Work out $\\frac{5}{6} \\div \\left(\\frac{1}{2} + \\frac{1}{3}\\right)$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\frac{5}{6} \\div \\left(\\frac{1}{2} + \\frac{1}{3}\\right)", "explanation": "Work out the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator in the bracket.", "workingLatex": "\\text{LCM}(2,3) = 6", "explanation": "Six is the smallest number both $2$ and $3$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the fractions.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}, \\quad \\frac{1}{3} = \\frac{2}{6}", "explanation": "Rewriting both over $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Add inside the bracket.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the calculation.", "workingLatex": "\\frac{5}{6} \\div \\frac{5}{6}", "explanation": "Now we divide two equal fractions.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the reciprocal.", "workingLatex": "= \\frac{5}{6} \\times \\frac{6}{5}", "explanation": "Dividing by $\\frac{5}{6}$ means multiplying by $\\frac{6}{5}$.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the common factors.", "workingLatex": "\\frac{5}{6} \\times \\frac{6}{5} = \\frac{30}{30}", "explanation": "The tops and bottoms match, so the product is $\\frac{30}{30}$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{30}{30} = 1", "explanation": "Any non-zero number divided by itself is $1$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} \\div \\left(\\frac{1}{2} + \\frac{1}{3}\\right) = 1", "explanation": "The result is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
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
    "tags": ["fractions", "mixed numbers", "multiplication", "cancelling"],
    "questionText": "Work out $3\\frac{1}{3} \\times 2\\frac{2}{5}$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the first mixed number.", "workingLatex": "3\\frac{1}{3} = \\frac{10}{3}", "explanation": "Three wholes is nine thirds, plus one third makes ten thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the second mixed number.", "workingLatex": "2\\frac{2}{5} = \\frac{12}{5}", "explanation": "Two wholes is ten fifths, plus two fifths makes twelve fifths.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the product.", "workingLatex": "\\frac{10}{3} \\times \\frac{12}{5}", "explanation": "Now we multiply two improper fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $10$ and the $5$.", "workingLatex": "\\frac{2}{3} \\times \\frac{12}{1}", "explanation": "Both divide by $5$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $12$ and the $3$.", "workingLatex": "\\frac{2}{1} \\times \\frac{4}{1}", "explanation": "Both divide by $3$, giving $4$ and $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply across.", "workingLatex": "\\frac{2 \\times 4}{1 \\times 1} = \\frac{8}{1}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a whole number.", "workingLatex": "\\frac{8}{1} = 8", "explanation": "Eight over one is just eight.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "3\\frac{1}{3} \\times 2\\frac{2}{5} = 8", "explanation": "The result is $8$.", "diagram": null }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "fraction",
    "tags": ["fractions", "context", "multiplication", "subtraction"],
    "questionText": "A water tank is $\\frac{3}{4}$ full. Then $\\frac{1}{3}$ of the water in the tank is used. (a) What fraction of the whole tank is used? (b) What fraction of the whole tank is now left?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret part (a).", "workingLatex": "\\frac{1}{3} \\text{ of } \\frac{3}{4}", "explanation": "Using one third of the water means finding one third of the three quarters that is there.", "diagram": null },
        { "stepNumber": 2, "description": "Write 'of' as multiplication.", "workingLatex": "\\frac{1}{3} \\times \\frac{3}{4}", "explanation": "The word 'of' between fractions means multiply.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $3$s.", "workingLatex": "\\frac{1}{1} \\times \\frac{1}{4}", "explanation": "The $3$ on the bottom and the $3$ on the top cancel.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{1 \\times 1}{1 \\times 4} = \\frac{1}{4}", "explanation": "So one quarter of the whole tank is used.", "diagram": null },
        { "stepNumber": 5, "description": "State the part (a) answer.", "workingLatex": "\\frac{1}{4} \\text{ of the tank is used}", "explanation": "This is the fraction of the whole tank that has been used.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret part (b).", "workingLatex": "\\frac{3}{4} - \\frac{1}{4}", "explanation": "What is left is the water that was there minus the amount used.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract (denominators already match).", "workingLatex": "\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}", "explanation": "Both are quarters, so we subtract the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{2}{4} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $2$ gives one half.", "diagram": null },
        { "stepNumber": 9, "description": "State both answers.", "workingLatex": "(a)\\ \\frac{1}{4}, \\quad (b)\\ \\frac{1}{2}", "explanation": "A quarter of the tank is used, leaving half of the tank full.", "diagram": null }
      ],
      "finalAnswer": "(a) $\\frac{1}{4}$ used; (b) $\\frac{1}{2}$ left"
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
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "brackets", "multiplication"],
    "questionText": "Work out $\\left(1 - \\frac{2}{5}\\right) \\times \\frac{3}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\left(1 - \\frac{2}{5}\\right) \\times \\frac{3}{4}", "explanation": "Work out the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Write $1$ as a fraction over $5$.", "workingLatex": "1 = \\frac{5}{5}", "explanation": "Writing $1$ as five fifths matches the denominator inside the bracket.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract inside the bracket.", "workingLatex": "\\frac{5}{5} - \\frac{2}{5} = \\frac{3}{5}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{5} \\times \\frac{3}{4}", "explanation": "The bracket value multiplies the last fraction.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the numerators.", "workingLatex": "3 \\times 3 = 9", "explanation": "The new numerator is $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the denominators.", "workingLatex": "5 \\times 4 = 20", "explanation": "The new denominator is $20$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the product.", "workingLatex": "\\frac{9}{20}", "explanation": "This is the answer before checking for simplification.", "diagram": null },
        { "stepNumber": 8, "description": "Check for simplification.", "workingLatex": "\\gcd(9,20) = 1", "explanation": "Nine and twenty share no common factor.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\left(1 - \\frac{2}{5}\\right) \\times \\frac{3}{4} = \\frac{9}{20}", "explanation": "The result is nine twentieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{9}{20}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "multiplication", "subtraction"],
    "questionText": "Work out $\\frac{7}{8} - \\frac{1}{2} \\times \\frac{3}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\frac{7}{8} - \\frac{1}{2} \\times \\frac{3}{4}", "explanation": "BIDMAS says do the multiplication before the subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the two fractions.", "workingLatex": "\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 3, "description": "Rewrite the calculation.", "workingLatex": "\\frac{7}{8} - \\frac{3}{8}", "explanation": "The product replaces the multiplication part.", "diagram": null },
        { "stepNumber": 4, "description": "Confirm the denominators match.", "workingLatex": "8 = 8", "explanation": "Both are eighths, so we can subtract directly.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the eighths.", "workingLatex": "\\frac{7}{8} - \\frac{3}{8} = \\frac{4}{8}", "explanation": "Subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{4}{8} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $4$ gives one half.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{7}{8} - \\frac{1}{2} \\times \\frac{3}{4} = \\frac{1}{2}", "explanation": "The result is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
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
    "tags": ["fractions", "order of operations", "brackets", "multiplying by an integer"],
    "questionText": "Work out $\\left(\\frac{5}{6} - \\frac{1}{4}\\right) \\times 12$, giving your answer in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\left(\\frac{5}{6} - \\frac{1}{4}\\right) \\times 12", "explanation": "Work out the bracket first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(6,4) = 12", "explanation": "Twelve is the smallest number both $6$ and $4$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{5}{6} = \\frac{10}{12}", "explanation": "Multiplying top and bottom by $2$ gives ten twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiplying top and bottom by $3$ gives three twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract inside the bracket.", "workingLatex": "\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 6, "description": "Rewrite the calculation.", "workingLatex": "\\frac{7}{12} \\times 12", "explanation": "The bracket value is now multiplied by $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Write $12$ as a fraction and cancel.", "workingLatex": "\\frac{7}{12} \\times \\frac{12}{1} = \\frac{7}{1} \\times \\frac{1}{1}", "explanation": "The $12$ on the bottom and the $12$ on the top cancel.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply across.", "workingLatex": "\\frac{7 \\times 1}{1 \\times 1} = 7", "explanation": "The result is a whole number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\left(\\frac{5}{6} - \\frac{1}{4}\\right) \\times 12 = 7", "explanation": "The result is $7$.", "diagram": null }
      ],
      "finalAnswer": "$7$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "order of operations", "division"],
    "questionText": "Work out $1\\frac{1}{4} + \\frac{2}{3} \\div \\frac{4}{9}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "1\\frac{1}{4} + \\frac{2}{3} \\div \\frac{4}{9}", "explanation": "BIDMAS says do the division before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply by the reciprocal.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4}", "explanation": "Dividing by $\\frac{4}{9}$ means multiplying by $\\frac{9}{4}$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $9$ and the $3$.", "workingLatex": "\\frac{2}{1} \\times \\frac{3}{4}", "explanation": "Both divide by $3$, giving $1$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the $2$ and the $4$.", "workingLatex": "\\frac{1}{1} \\times \\frac{3}{2}", "explanation": "Both divide by $2$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Complete the division.", "workingLatex": "\\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2}", "explanation": "The division part equals three halves.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the mixed number.", "workingLatex": "1\\frac{1}{4} = \\frac{5}{4}", "explanation": "One whole is four quarters, plus one quarter makes five quarters.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the addition.", "workingLatex": "\\frac{5}{4} + \\frac{3}{2}", "explanation": "Now add the mixed-number part to the division result.", "diagram": null },
        { "stepNumber": 8, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(4,2) = 4", "explanation": "Both denominators divide into $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Convert the second fraction.", "workingLatex": "\\frac{3}{2} = \\frac{6}{4}", "explanation": "Multiplying top and bottom by $2$ gives six quarters.", "diagram": null },
        { "stepNumber": 10, "description": "Add the quarters.", "workingLatex": "\\frac{5}{4} + \\frac{6}{4} = \\frac{11}{4}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 11, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{11}{4} = 2\\frac{3}{4}", "explanation": "Four goes into eleven twice with three left over.", "diagram": null },
        { "stepNumber": 12, "description": "State the final answer.", "workingLatex": "1\\frac{1}{4} + \\frac{2}{3} \\div \\frac{4}{9} = 2\\frac{3}{4}", "explanation": "The result is two and three quarters.", "diagram": null }
      ],
      "finalAnswer": "$2\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "addition", "context"],
    "questionText": "Three planks of wood have lengths $1\\frac{1}{2}$ m, $2\\frac{3}{4}$ m and $1\\frac{1}{4}$ m. What is their total length? Give your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the calculation.", "workingLatex": "1\\frac{1}{2} + 2\\frac{3}{4} + 1\\frac{1}{4}", "explanation": "The total length is the sum of the three planks.", "diagram": null },
        { "stepNumber": 2, "description": "Convert each mixed number.", "workingLatex": "\\frac{3}{2} + \\frac{11}{4} + \\frac{5}{4}", "explanation": "Making everything improper lets us add over one denominator.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(2,4,4) = 4", "explanation": "Four is the smallest number all denominators divide into.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first fraction.", "workingLatex": "\\frac{3}{2} = \\frac{6}{4}", "explanation": "Multiplying top and bottom by $2$ gives six quarters.", "diagram": null },
        { "stepNumber": 5, "description": "Write all terms over $4$.", "workingLatex": "\\frac{6}{4} + \\frac{11}{4} + \\frac{5}{4}", "explanation": "Now every term is in quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Add the numerators.", "workingLatex": "\\frac{6 + 11 + 5}{4} = \\frac{22}{4}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Simplify.", "workingLatex": "\\frac{22}{4} = \\frac{11}{2}", "explanation": "Dividing top and bottom by $2$ gives eleven halves.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{11}{2} = 5\\frac{1}{2}", "explanation": "Two goes into eleven five times with one left over.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "5\\frac{1}{2} \\text{ m}", "explanation": "The three planks together measure five and a half metres.", "diagram": null }
      ],
      "finalAnswer": "$5\\frac{1}{2}$ m"
    }
  },
  {
    "id": "gcse.number.fraction-arithmetic.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Fraction arithmetic",
    "subtopicId": "gcse.number.fraction-arithmetic",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "powers", "order of operations", "addition"],
    "questionText": "Work out $\\left(\\frac{2}{3}\\right)^{2} + \\frac{1}{3}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "\\left(\\frac{2}{3}\\right)^{2} + \\frac{1}{3}", "explanation": "BIDMAS says work out the power before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Square the fraction.", "workingLatex": "\\left(\\frac{2}{3}\\right)^{2} = \\frac{2^{2}}{3^{2}}", "explanation": "Squaring a fraction squares both the top and the bottom.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the squares.", "workingLatex": "\\frac{4}{9}", "explanation": "Two squared is $4$ and three squared is $9$.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the calculation.", "workingLatex": "\\frac{4}{9} + \\frac{1}{3}", "explanation": "The squared value replaces the power.", "diagram": null },
        { "stepNumber": 5, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(9,3) = 9", "explanation": "Both denominators divide into $9$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{3}{9}", "explanation": "Multiplying top and bottom by $3$ gives three ninths.", "diagram": null },
        { "stepNumber": 7, "description": "Add the ninths.", "workingLatex": "\\frac{4}{9} + \\frac{3}{9} = \\frac{7}{9}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Check for simplification.", "workingLatex": "\\gcd(7,9) = 1", "explanation": "Seven and nine share no common factor.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\left(\\frac{2}{3}\\right)^{2} + \\frac{1}{3} = \\frac{7}{9}", "explanation": "The result is seven ninths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{9}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "division", "multiplication"],
    "questionText": "Work out $\\frac{4}{5} \\div \\frac{2}{3} \\times \\frac{1}{2}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note that division and multiplication are done left to right.", "workingLatex": "\\frac{4}{5} \\div \\frac{2}{3} \\times \\frac{1}{2}", "explanation": "With only division and multiplication, we work from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "Start with the division.", "workingLatex": "\\frac{4}{5} \\div \\frac{2}{3} = \\frac{4}{5} \\times \\frac{3}{2}", "explanation": "Dividing by $\\frac{2}{3}$ means multiplying by $\\frac{3}{2}$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the $4$ and the $2$.", "workingLatex": "\\frac{2}{5} \\times \\frac{3}{1}", "explanation": "Both divide by $2$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply across.", "workingLatex": "\\frac{2 \\times 3}{5 \\times 1} = \\frac{6}{5}", "explanation": "The division gives six fifths.", "diagram": null },
        { "stepNumber": 5, "description": "Now multiply by the last fraction.", "workingLatex": "\\frac{6}{5} \\times \\frac{1}{2}", "explanation": "Bring in the final multiplication.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the $6$ and the $2$.", "workingLatex": "\\frac{3}{5} \\times \\frac{1}{1}", "explanation": "Both divide by $2$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply across.", "workingLatex": "\\frac{3 \\times 1}{5 \\times 1} = \\frac{3}{5}", "explanation": "Multiply the remaining tops and bottoms.", "diagram": null },
        { "stepNumber": 8, "description": "State the final answer.", "workingLatex": "\\frac{4}{5} \\div \\frac{2}{3} \\times \\frac{1}{2} = \\frac{3}{5}", "explanation": "The result is three fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
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
    "tags": ["fractions", "context", "multiplication", "fraction of an amount"],
    "questionText": "In a school of $240$ students, $\\frac{5}{8}$ are in Key Stage 4. Of those in Key Stage 4, $\\frac{2}{5}$ walk to school. How many students walk to school?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the number in Key Stage 4.", "workingLatex": "\\frac{5}{8} \\times 240", "explanation": "Finding a fraction of an amount means multiplying the fraction by the amount.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by the denominator.", "workingLatex": "240 \\div 8 = 30", "explanation": "One eighth of $240$ is $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply by the numerator.", "workingLatex": "30 \\times 5 = 150", "explanation": "Five eighths is five of those thirties, giving $150$ students.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the next fraction.", "workingLatex": "\\frac{2}{5} \\times 150", "explanation": "Now we take two fifths of the $150$ Key Stage 4 students.", "diagram": null },
        { "stepNumber": 5, "description": "Divide by the denominator.", "workingLatex": "150 \\div 5 = 30", "explanation": "One fifth of $150$ is $30$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply by the numerator.", "workingLatex": "30 \\times 2 = 60", "explanation": "Two fifths is two of those thirties, giving $60$.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the result.", "workingLatex": "60 \\text{ students walk}", "explanation": "So $60$ students walk to school.", "diagram": null },
        { "stepNumber": 8, "description": "Check the reasoning.", "workingLatex": "\\frac{2}{5} \\times \\frac{5}{8} \\times 240 = \\frac{1}{4} \\times 240 = 60", "explanation": "Combining the fractions first gives one quarter of $240$, which is also $60$.", "diagram": null }
      ],
      "finalAnswer": "$60$ students"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "subtraction", "whole number"],
    "questionText": "Work out $3 - 1\\frac{2}{3} - \\frac{3}{4}$, giving your answer as a fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the terms to fractions.", "workingLatex": "3 = \\frac{3}{1}, \\quad 1\\frac{2}{3} = \\frac{5}{3}", "explanation": "Writing everything as a fraction makes the subtraction manageable.", "diagram": null },
        { "stepNumber": 2, "description": "Rewrite the calculation.", "workingLatex": "\\frac{3}{1} - \\frac{5}{3} - \\frac{3}{4}", "explanation": "All three terms are now fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Find the lowest common denominator.", "workingLatex": "\\text{LCM}(1,3,4) = 12", "explanation": "Twelve is the smallest number that $1$, $3$ and $4$ all divide into.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the first term.", "workingLatex": "\\frac{3}{1} = \\frac{36}{12}", "explanation": "Multiplying top and bottom by $12$ gives thirty-six twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Convert the second term.", "workingLatex": "\\frac{5}{3} = \\frac{20}{12}", "explanation": "Multiplying top and bottom by $4$ gives twenty twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Convert the third term.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiplying top and bottom by $3$ gives nine twelfths.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the numerators.", "workingLatex": "\\frac{36 - 20 - 9}{12}", "explanation": "With a common denominator we subtract the numerators in turn.", "diagram": null },
        { "stepNumber": 8, "description": "Work through the numerator.", "workingLatex": "36 - 20 = 16, \\quad 16 - 9 = 7", "explanation": "Subtracting step by step gives $7$.", "diagram": null },
        { "stepNumber": 9, "description": "Write the result.", "workingLatex": "\\frac{7}{12}", "explanation": "The combined value is seven twelfths.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "3 - 1\\frac{2}{3} - \\frac{3}{4} = \\frac{7}{12}", "explanation": "The result is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "brackets", "division"],
    "questionText": "Work out $\\left(\\frac{1}{2} + \\frac{3}{4}\\right) \\div \\left(1 - \\frac{1}{3}\\right)$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Work out the first bracket.", "workingLatex": "\\frac{1}{2} + \\frac{3}{4}", "explanation": "Each bracket must be simplified before dividing.", "diagram": null },
        { "stepNumber": 2, "description": "Convert to a common denominator.", "workingLatex": "\\frac{1}{2} = \\frac{2}{4}", "explanation": "Rewriting one half as two quarters to match the other fraction.", "diagram": null },
        { "stepNumber": 3, "description": "Add the first bracket.", "workingLatex": "\\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}", "explanation": "With matching denominators we add the numerators.", "diagram": null },
        { "stepNumber": 4, "description": "Work out the second bracket.", "workingLatex": "1 - \\frac{1}{3}", "explanation": "Now simplify the divisor bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Write $1$ as thirds.", "workingLatex": "1 = \\frac{3}{3}", "explanation": "Writing one as three thirds matches the denominator.", "diagram": null },
        { "stepNumber": 6, "description": "Subtract the second bracket.", "workingLatex": "\\frac{3}{3} - \\frac{1}{3} = \\frac{2}{3}", "explanation": "With matching denominators we subtract the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite the division.", "workingLatex": "\\frac{5}{4} \\div \\frac{2}{3}", "explanation": "Now divide the first bracket value by the second.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply by the reciprocal.", "workingLatex": "= \\frac{5}{4} \\times \\frac{3}{2}", "explanation": "Dividing by $\\frac{2}{3}$ means multiplying by $\\frac{3}{2}$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply across.", "workingLatex": "\\frac{5 \\times 3}{4 \\times 2} = \\frac{15}{8}", "explanation": "Multiply the tops and the bottoms.", "diagram": null },
        { "stepNumber": 10, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{15}{8} = 1\\frac{7}{8}", "explanation": "Eight goes into fifteen once with seven left over.", "diagram": null },
        { "stepNumber": 11, "description": "State the final answer.", "workingLatex": "\\left(\\frac{1}{2} + \\frac{3}{4}\\right) \\div \\left(1 - \\frac{1}{3}\\right) = 1\\frac{7}{8}", "explanation": "The result is one and seven eighths.", "diagram": null }
      ],
      "finalAnswer": "$1\\frac{7}{8}$"
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
    "answerType": "fraction",
    "tags": ["fractions", "mixed numbers", "order of operations", "multiplication"],
    "questionText": "Work out $2\\frac{1}{4} \\times 1\\frac{1}{3} + \\frac{1}{2}$, giving your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Decide the order of operations.", "workingLatex": "2\\frac{1}{4} \\times 1\\frac{1}{3} + \\frac{1}{2}", "explanation": "BIDMAS says do the multiplication before the addition.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the first mixed number.", "workingLatex": "2\\frac{1}{4} = \\frac{9}{4}", "explanation": "Two wholes is eight quarters, plus one quarter makes nine quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the second mixed number.", "workingLatex": "1\\frac{1}{3} = \\frac{4}{3}", "explanation": "One whole is three thirds, plus one third makes four thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Set up the product.", "workingLatex": "\\frac{9}{4} \\times \\frac{4}{3}", "explanation": "Multiply the two improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the $4$s.", "workingLatex": "\\frac{9}{1} \\times \\frac{1}{3}", "explanation": "The $4$ on the bottom and the $4$ on the top cancel.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the $9$ and the $3$.", "workingLatex": "\\frac{3}{1} \\times \\frac{1}{1}", "explanation": "Both divide by $3$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Complete the multiplication.", "workingLatex": "\\frac{3 \\times 1}{1 \\times 1} = 3", "explanation": "The product is the whole number $3$.", "diagram": null },
        { "stepNumber": 8, "description": "Rewrite the addition.", "workingLatex": "3 + \\frac{1}{2}", "explanation": "Now add the last fraction to the product.", "diagram": null },
        { "stepNumber": 9, "description": "Combine into a mixed number.", "workingLatex": "3 + \\frac{1}{2} = 3\\frac{1}{2}", "explanation": "Adding a half to three gives three and a half directly.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\frac{1}{4} \\times 1\\frac{1}{3} + \\frac{1}{2} = 3\\frac{1}{2}", "explanation": "The result is three and a half.", "diagram": null }
      ],
      "finalAnswer": "$3\\frac{1}{2}$"
    }
  }
];
