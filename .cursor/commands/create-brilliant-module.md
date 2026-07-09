# /create-brilliant-module [GCSE|A-Level topic]

@wisest-maths-architect Create a complete Brilliant-style interactive learning module for the GCSE or A-Level topic: [topic].

**Full Requirements** (use the rule tree + blueprint automatically):
- One production-ready interactive widget (Mafs or JSXGraph based on logic tree)
- Live KaTeX equation bound to state
- Rive gamification (success trigger + streak counter + optional hint Boolean)
- Pedagogical comment referencing the exact UK curriculum objective
- Surrounding UI: 
  - Clean card layout with title and “Check Answer” button
  - Progress indicator (localStorage streak for this topic)
  - “Next topic” teaser link
  - Mobile-responsive with aspect-ratio containers
- Global consistency: use Tailwind, the existing rule tree, and all relevant skills (performance-60fps, responsive-aspect-ratio, etc.)

**Workflow the architect must follow**:
1. Read curriculum mapping via MCP (wisest-maths://curriculum/gcse or /alevel)
2. Choose correct engine (Mafs or JSXGraph)
3. Generate the core widget
4. Wrap it in a full module component with UI and progress
5. Add Rive mascot reaction on success
6. End with a test note for the testing-and-validation-agent

Output the complete folder-ready code (component + any needed assets reference) ready to drop into src/components/.

This command creates a drop-in module that feels exactly like Brilliant.org but is 100% aligned to the UK GCSE/A-Level syllabus.