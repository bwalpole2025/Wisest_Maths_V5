import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0a3580] via-[#1565c0] to-[#42a5f5] shadow-md shadow-[#1565c0]/20 ring-1 ring-black/[0.06]">
        <span className="font-display text-lg font-bold leading-none text-white">∑</span>
        <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
      </span>
      <span className="font-display text-[0.95rem] font-semibold leading-none tracking-tight text-landing-navy">
        Wisest Maths
      </span>
    </Link>
  );
}
