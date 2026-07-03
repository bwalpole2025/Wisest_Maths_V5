---
name: intuitive-explainer
description: Specialised skill for writing clear, intuitive explanations that help students understand the 'why' behind mathematical steps. Used to generate the explanation field in worked solution steps. Focus on conceptual understanding rather than just procedural description.
---

# Intuitive Explainer Skill

## Purpose
This skill helps generate high-quality **intuitive explanations** for each step in a worked solution. The goal is to help students understand *why* a particular step is taken, not just *what* to do.

## When to Use This Skill
Use this skill whenever you need to write or improve the `explanation` field in a solution step. It is especially useful for:
- The first 2–3 steps of a solution (to build understanding)
- Steps involving key concepts or techniques
- Any step where students commonly get confused

## Core Principles for Good Intuitive Explanations

### 1. Focus on "Why", Not Just "What"
Bad: "We factorise the quadratic."
Good: "We factorise because the equation is equal to zero, so we can use the fact that if a product is zero, at least one of the factors must be zero."

### 2. Use Simple Analogies or Visual Thinking (When Helpful)
- Compare abstract ideas to familiar concepts
- Describe what is happening geometrically or physically when relevant

### 3. Keep It Concise but Meaningful
- Aim for 1–3 sentences
- Avoid long paragraphs
- Be direct and clear

### 4. Connect to Previous Knowledge
Link the current step to something the student should already know or have seen earlier in the solution.

### 5. Avoid Socratic Questioning
Do **not** end explanations with questions like “Can you see why?” or “What do you think happens next?”

## Output Format
When using this skill, return the explanation in this simple structure:

```json
{
  "explanation": "Clear, intuitive explanation of why this step is done and what it means conceptually."
}