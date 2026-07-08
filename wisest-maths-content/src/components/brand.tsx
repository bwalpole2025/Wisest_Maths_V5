import { AppLink } from "@/components/app-link";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <AppLink href="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative h-9 w-9 overflow-hidden rounded-xl shadow-md shadow-[#2c9de4]/25 ring-1 ring-black/[0.06]">
        <img
          src="/logo.png"
          alt="Wisest Maths"
          width={36}
          height={36}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span className="font-display text-[0.95rem] font-semibold leading-none tracking-tight text-landing-navy">
        Wisest Maths
      </span>
    </AppLink>
  );
}
