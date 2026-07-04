export type Difficulty = "Easy" | "Intermediate" | "Hard";

/**
 * MAFS diagram specs — small, self-contained visual archetypes rendered as SVG
 * by <Diagram>. Attached to a question (`questionDiagram`) or a single solution
 * step (`SolutionStep.diagram`) at the decisive moment. `null` when none.
 */
export type Diagram =
  | {
      kind: "numberLineRay";
      min: number;
      max: number;
      endpoint: number;
      direction: "left" | "right";
      closed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "numberLineInterval";
      min: number;
      max: number;
      lower: number;
      upper: number;
      lowerClosed: boolean;
      upperClosed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "signFlipMirror";
      min: number;
      max: number;
      beforeEndpoint: number;
      beforeDirection: "left" | "right";
      beforeClosed: boolean;
      beforeLabel: string;
      afterEndpoint: number;
      afterDirection: "left" | "right";
      afterClosed: boolean;
      afterLabel: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "parabolaRegion";
      r1: number;
      r2: number;
      opensUp: boolean;
      region: "interior" | "exterior";
      rootsClosed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "discriminantTriad";
      highlight: Array<"two" | "equal" | "none">;
      caption?: string;
      alt: string;
    }
  | {
      kind: "intersectionStack";
      min: number;
      max: number;
      rows: Array<{
        label: string;
        intervals: Array<{
          from: number | null;
          to: number | null;
          fromClosed?: boolean;
          toClosed?: boolean;
        }>;
        highlight?: boolean;
      }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Text-only "what to sketch" note for diagrams we don't render as SVG (e.g. bespoke geometry). */
      kind: "descriptive";
      type?: string;
      description: string;
      elements?: unknown[];
      caption?: string;
      alt?: string;
    };

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  diagram: Diagram | null;
}

export interface WorkedSolution {
  steps: SolutionStep[];
  finalAnswer: string;
}

export interface Question {
  id: string;
  level: string;
  topic: string;
  subtopic: string;
  subtopicId: string;
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  questionDiagram: Diagram | null;
  workedSolution: WorkedSolution;
}
