# Rive Gamification Rules — State-Driven Feedback & Celebrations

**Core Principles** (from Wisest Maths Blueprint 3):
- Use @rive-app/react-canvas package: const { rive, RiveComponent } = useRive({ src: '/assets/animations/math-rewards.riv', stateMachines: 'Interaction', autoplay: true });
- Extract inputs with useStateMachineInput hook:
  - SMITrigger → successTrigger.fire() on mathematical success (correct ratio, convergence, theorem proven, correct region)
  - SMINumber → streakLevel.value = streakCount (intensity or progressive counter)
  - SMIBoolean → hintInput.value = true (toggle hints or focused learning mode)
- Bind directly to React state so the animation reacts instantly to user drag / calculation without blocking the main math thread.

**Integration Patterns** (always follow):
- In a widget’s useEffect: if (isCorrect && successTrigger) successTrigger.fire();
- For continuous values: useEffect(() => { if (streakLevel) streakLevel.value = currentStreak; }, [currentStreak]);
- Global streak system: share a single Rive instance across widgets for a persistent mascot that reacts to overall progress.

**Common Pitfalls to Avoid**:
- Do not use CSS keyframes or Lottie for complex state machines — Rive is required for fluid, non-blocking animations on mobile.
- Do not trigger Rive on every render — use useEffect with proper dependencies only.
- Ensure the Rive canvas has pointer-events-none so it does not interfere with draggable Mafs/JSXGraph points.

**Examples from Blueprint**:
- RewardGraphic component with OnSuccess trigger on correct answer
- StreakMultiplier Number input tied to progressive counter
- Boolean input for hint mode that lights up construction lines

Always collaborate with graphics experts (Mafs or JSXGraph) to map mathematical success states to Rive inputs.