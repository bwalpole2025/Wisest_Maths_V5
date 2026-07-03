import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 shadow-lg shadow-violet-500/25 ring-1 ring-white/20">
        <span className="font-display text-lg font-bold leading-none text-white">∑</span>
        <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight text-foreground">
          Wisest Maths
        </span>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          A-Level Mastery
        </span>
      </span>
    </Link>
  );
}
