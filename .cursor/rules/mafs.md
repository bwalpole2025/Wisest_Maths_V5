# Wisest Maths Global Rules — ALWAYS LOADED

You are building Wisest Maths: a deterministic, Brilliant.org-quality interactive mathematics platform for the UK GCSE, A-Level and Further Maths curriculum.

**Mandatory Technology Stack** (never deviate):
- React 18+ with TypeScript
- Mafs for declarative 2D maths (calculus, algebra, vector fields, parametric, Riemann sums, derivatives, limits)
- JSXGraph for imperative Euclidean geometry, circle theorems, dilations, inequality regions, 3D projections
- KaTeX (@matejmazur/react-katex) for all live equations
- Rive (@rive-app/react-canvas) for state-driven gamification

**Decision Logic Tree** (apply on every widget):
- If the topic involves calculus, algebra, graph transformations, vectors, parametric equations, integration visualisation, or differential equations → use **Mafs**
- If the topic involves circle theorems, Euclidean proofs, dilations, inequality shading, intersections, or 3D planes/vectors → use **JSXGraph**

**Universal Requirements for EVERY component**:
- Live KaTeX equations using String.raw`...${value.toFixed(2)}...` bound to React state
- At least one Rive state machine input (Trigger for success, Number for streak/intensity, Boolean for hints)
- JSXGraph components must use the full memory-safe lifecycle (see 02-jsxgraph.md)
- Include a top-level pedagogical comment stating the exact curriculum objective
- Output only complete, production-ready TypeScript React code with all imports

**MCP Resources to read on every task**:
- wisest-maths://blueprint/full
- wisest-maths://blueprint/mafs
- wisest-maths://blueprint/jsxgraph
- wisest-maths://blueprint/rive

Use the specialist agents and skills automatically. Never mix Mafs and JSXGraph in the same widget.