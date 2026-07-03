---
name: step-controller
description: Enforces and validates the correct number of steps in a worked solution based on question difficulty. Helps maintain consistency with the defined step count rules (Easy: 6-9, Intermediate: 9-13, Hard: 13-18).
---

# Step Controller Skill

## Purpose
This skill ensures that worked solutions follow the correct number of steps according to the difficulty of the question. It acts as a guardrail to maintain quality and consistency across all generated content.

## When to Use This Skill
Use this skill in the following situations:
- When planning a new solution (`solution-architect`)
- When writing or reviewing steps (`step-writer-agent` or `worked-solution-writer`)
- When the `quality-reviewer-agent` needs to validate step count
- When adjusting a solution that has too many or too few steps

## Step Count Rules (Strict)

| Difficulty    | Minimum Steps | Maximum Steps | Recommended Range |
|---------------|---------------|---------------|-------------------|
| Easy          | 6             | 9             | 6–9               |
| Intermediate  | 9             | 13            | 9–13              |
| Hard          | 13            | 18            | 13–18             |

## Core Responsibilities

### 1. Validate Step Count
Check if the current number of steps is appropriate for the difficulty level.

### 2. Suggest Adjustments
If the step count is incorrect, suggest how to fix it:
- Combine steps (if too many)
- Split steps (if too few)
- Add or remove explanatory steps

### 3. Provide Guidance
Help other agents understand:
- Why a certain number of steps is appropriate
- How to structure steps for better flow and understanding

## Output Format
When validating or advising, respond in this structure:

```json
{
  "isValid": true | false,
  "currentStepCount": number,
  "recommendedRange": "6-9" | "9-13" | "13-18",
  "difficulty": "Easy" | "Intermediate" | "Hard",
  "suggestion": "Clear advice on what to do (e.g. 'Combine steps 4 and 5' or 'Add an intuitive explanation step at the beginning')",
  "reasoning": "Brief explanation of the decision"
}