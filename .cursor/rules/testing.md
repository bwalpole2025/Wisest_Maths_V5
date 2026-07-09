# Testing & Validation Rules — Quality Gate for Every Widget

**Core Validation Checklist** (run mentally or via testing-and-validation-agent):
- Component renders without errors on mount/unmount
- Dragging updates graphics + KaTeX + Rive instantly (no lag)
- JSXGraph cleanup prevents memory leaks (check in dev tools)
- Rive triggers fire only on actual mathematical success
- Mobile viewport test: 60fps, correct aspect ratio, no jitter
- Curriculum comment present and accurate
- Code follows TypeScript best practices and blueprint patterns

**Recommended Test Command** (add to your custom commands if desired):
/test-widget → calls testing-and-validation-agent to verify the last component.

**Pitfalls to Catch**:
- Missing freeBoard cleanup
- KaTeX layout shift
- Rive blocking main thread
- Non-curriculum-aligned widget

This rule ensures every generated widget is hackathon-ready and production-quality.