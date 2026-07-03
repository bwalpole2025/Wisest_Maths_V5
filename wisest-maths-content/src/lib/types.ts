export type Difficulty = "Easy" | "Intermediate" | "Hard";

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  diagram: unknown | null;
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
  questionDiagram: unknown | null;
  workedSolution: WorkedSolution;
}
