# JSXGraph Rules — Imperative Euclidean Geometry

**Critical Lifecycle & Memory Rules** (Blueprint 2 — NEVER break):
- const boardRef = useRef<HTMLDivElement>(null);
- Create board ONLY inside useEffect(() => { ... }, []);
- Full cleanup is mandatory: return () => { JXG.JSXGraph.freeBoard(boardRef.current); };
- Use Reverse Data Flow for all calculated values:
  board.on('update', () => {
    setCenterAngle(angCenter.Value() * (180 / Math.PI));
    // etc.
  });
- Initialise with: JXG.JSXGraph.initBoard(boardRef.current.id, { boundingbox: [-5,5,5,-5], axis: false, showNavigation: false, showCopyright: false });
- Prefer gliders for points constrained to circles/lines/curves
- Never store JSXGraph objects (points, angles, etc.) in React state or dependency arrays

**Common Pitfalls to Avoid**:
- Missing cleanup → memory leaks and duplicate canvases on hot-reload
- Putting board objects in React state → destructive re-renders
- Using JSXGraph for calculus topics (use Mafs instead)

**Examples to follow** (from blueprint):
- AngleAtCenterTheorem widget (gliders on circle, live angle display)
- Inequality shading and intersection regions

Always integrate live KaTeX for displayed values and Rive triggers for success states.