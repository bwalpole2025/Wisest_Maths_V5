import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Entrance reveal. Uses a pure-CSS animation (`.rise`) rather than a JS/observer
 * driven one, so the content is ALWAYS rendered visible and can never be left
 * stuck at opacity:0 if hydration or the animation library misbehaves.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  style,
  ...props
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rise", className)}
      style={{ "--rise-delay": `${delay}s`, "--rise-y": `${y}px`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
