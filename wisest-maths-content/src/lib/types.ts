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
      /** Horizontal box-and-whisker plot on a single number-line axis. */
      kind: "boxPlot";
      axisMin: number;
      axisMax: number;
      q1: number;
      median: number;
      q3: number;
      /** Whisker ends = smallest / largest values that are NOT outliers. */
      whiskerLow: number;
      whiskerHigh: number;
      /** Values plotted individually as crosses beyond the whiskers. */
      outliers?: number[];
      axisLabel?: string;
      /** Print the five key values beneath the plot. */
      showValues?: boolean;
      caption?: string;
      alt: string;
    }
  | {
      /** Histogram with frequency density on the y-axis (bars may have unequal widths). */
      kind: "histogram";
      bars: Array<{ x0: number; x1: number; freqDensity: number }>;
      xAxisLabel?: string;
      /** Defaults to "frequency density". */
      yAxisLabel?: string;
      caption?: string;
      alt: string;
    }
  | {
      /** Cumulative frequency graph: (upper class boundary, cumulative frequency) points joined up. */
      kind: "cumulativeFrequency";
      /** Ascending in both x and cf. */
      points: Array<{ x: number; cf: number }>;
      /** x-value where cf = 0 (lowest class boundary); prepended as (origin, 0) if given. */
      origin?: number;
      xAxisLabel?: string;
      /** Defaults to "cumulative frequency". */
      yAxisLabel?: string;
      /** Dashed read-off guides: a line at this cf across to the curve then down to the x-axis. */
      readoffs?: Array<{ cf: number; label?: string }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Scatter diagram for bivariate data, with an optional least-squares line and prediction read-off. */
      kind: "scatter";
      /** The plotted bivariate data points. */
      points: Array<{ x: number; y: number }>;
      /** Optional least-squares regression line y = a + b·x, drawn across the visible x-range. */
      line?: { a: number; b: number };
      /** Optional highlighted prediction point with dashed guides to both axes (interpolation/extrapolation). */
      predict?: { x: number; y: number; label?: string };
      /** Optional explicit axis bounds; otherwise derived from the data (with a small margin). */
      xMin?: number;
      xMax?: number;
      yMin?: number;
      yMax?: number;
      xAxisLabel?: string;
      yAxisLabel?: string;
      caption?: string;
      alt: string;
    }
  | {
      /** Two-set Venn diagram inside a universal-set rectangle. Region values are LaTeX (counts or probabilities). */
      kind: "venn2";
      setALabel: string;
      setBLabel: string;
      /** Region contents as raw LaTeX, e.g. "12" or "\\tfrac{3}{10}". Blank string leaves a region empty. */
      onlyA: string;
      both: string;
      onlyB: string;
      outside?: string;
      universalLabel?: string;
      /** Regions to shade with the blue accent. */
      highlight?: Array<"onlyA" | "both" | "onlyB" | "outside">;
      caption?: string;
      alt: string;
    }
  | {
      /** Three-set Venn diagram (8 regions) inside a universal-set rectangle. Region values are LaTeX. */
      kind: "venn3";
      setALabel: string;
      setBLabel: string;
      setCLabel: string;
      onlyA: string;
      onlyB: string;
      onlyC: string;
      /** Pairwise-only regions (in the two named sets but not the third). */
      AB: string;
      AC: string;
      BC: string;
      /** Centre region, in all three. */
      ABC: string;
      outside?: string;
      universalLabel?: string;
      highlight?: Array<"onlyA" | "onlyB" | "onlyC" | "AB" | "AC" | "BC" | "ABC" | "outside">;
      caption?: string;
      alt: string;
    }
  | {
      /** Probability tree, up to two stages. Branch probabilities are raw LaTeX (e.g. "\\tfrac{3}{5}"). */
      kind: "probTree";
      branches: Array<{
        label: string;
        prob: string;
        children?: Array<{
          label: string;
          prob: string;
          /** Optional outcome text + combined probability shown at the leaf. */
          outcome?: string;
          result?: string;
          /** Draw this root→leaf path in the accent colour. */
          highlight?: boolean;
        }>;
      }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Probability distribution of a discrete random variable as a vertical stick/line chart. */
      kind: "probDist";
      /** Each value of X with its probability as raw LaTeX (e.g. "\\tfrac{1}{6}" or "0.2"). */
      values: Array<{ x: number | string; p: string }>;
      /** Defaults to "x". */
      xAxisLabel?: string;
      /** Defaults to "P(X = x)". */
      yAxisLabel?: string;
      /** x-values to draw in the blue accent (e.g. the ones making up an event). */
      highlight?: Array<number | string>;
      caption?: string;
      alt: string;
    }
  | {
      /** A pre-rendered figure (e.g. a Manim-generated SVG) served from public/. */
      kind: "image";
      /** Path under public/, e.g. "/mechanics/al.y1.mech.forces-newton.q003.svg". */
      src: string;
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
