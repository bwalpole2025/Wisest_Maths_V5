import Link from "next/link";
import { Brand } from "@/components/brand";
import { stats } from "@/lib/questions";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Brand />
          <p className="max-w-xs text-sm text-muted-foreground">
            {stats.total} exam-style questions with intuitive, step-by-step worked solutions.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</span>
            <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link>
            <Link href="/questions" className="text-muted-foreground transition-colors hover:text-foreground">Question Bank</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Built with</span>
            <span className="text-muted-foreground">Next.js · Tailwind</span>
            <span className="text-muted-foreground">Framer Motion · KaTeX</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wisest Maths — crafted for elegant learning.
      </div>
    </footer>
  );
}
