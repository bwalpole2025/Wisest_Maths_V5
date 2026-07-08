import { cn } from "@/lib/utils";
import { difficultyClasses } from "@/lib/difficulty";
import type { Difficulty } from "@/lib/types";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-landing-navy/50">
      <span className="h-1.5 w-1.5 rounded-full bg-[#d0f100]" />
      {children}
    </span>
  );
}

export function DifficultyBadge({ level, className }: { level: Difficulty; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        difficultyClasses[level],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {level}
    </span>
  );
}

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/[0.08] bg-landing-light px-2.5 py-0.5 text-xs font-medium text-landing-navy/55",
        className,
      )}
    >
      {children}
    </span>
  );
}
