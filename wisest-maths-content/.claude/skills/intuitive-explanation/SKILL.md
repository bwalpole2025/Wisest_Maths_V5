---
name: intuitive-explanation
description: Specialised skill for writing clear, intuitive explanations that help students understand the reasoning behind mathematical steps. Focuses on the 'why' rather than just the 'how'. Used to generate the explanation field in worked solution steps.
---

# Intuitive Explanation Skill

## Purpose
This skill generates high-quality **intuitive explanations** for individual steps in a worked solution. The goal is to help students understand *why* a particular mathematical step is taken, not just what to do procedurally.

## When to Use This Skill
Use this skill when writing or improving the `explanation` field for any step in a worked solution. It is especially valuable for:
- The first 1–3 steps of a solution (to build understanding)
- Steps involving key concepts or techniques
- Any step where students commonly struggle to see the reasoning

## Core Principles

### 1. Focus on "Why", Not Just "What"
A good explanation answers **why** we are doing this step.

**Weak**: "We multiply both sides by 2."  
**Strong**: "We multiply both sides by 2 to eliminate the fraction and make the equation easier to work with."

### 2. Connect to Conceptual Understanding
Explain the underlying idea or principle behind the step.

**Example**:  
"We use the fact that the sum of angles on a straight line is 180° because point N lies on the straight line PR."

### 3. Keep Explanations Concise but Meaningful
- Aim for 1–3 sentences.
- Be direct and avoid unnecessary words.
- Focus on the key insight.

### 4. Use Simple Language and Analogies (When Helpful)
When appropriate, relate the mathematics to something familiar or visual.

**Example**:  
"Think of the position vector of M as the 'average' of the position vectors of Q and R — just like finding the midpoint of two numbers on a number line."

### 5. Avoid Socratic Questioning
Do **not** use questions in explanations such as:
- "Can you see why?"
- "What do you notice?"
- "How might we continue?"

## Output Format
When using this skill, return the explanation in this structure:

```json
{
  "explanation": "Clear, intuitive explanation of why this step is performed and what it achieves conceptually."
}