import Link from "next/link";
import { Brand } from "@/components/brand";
import { stats } from "@/lib/questions";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-landing-navy/10 bg-landing-light pt-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-16 lg:px-10">
        <div className="space-y-3">
          <Brand />
          <p className="max-w-xs text-sm text-landing-navy/55">
            {stats.total} exam-style questions with intuitive, step-by-step worked solutions.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-landing-navy/40">
              Explore
            </span>
            <Link
              href="/dashboard"
              className="text-landing-navy/55 transition-colors hover:text-landing-navy"
            >
              Dashboard
            </Link>
            <Link
              href="/questions"
              className="text-landing-navy/55 transition-colors hover:text-landing-navy"
            >
              Question Bank
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-landing-navy/40">
              Built with
            </span>
            <span className="text-landing-navy/55">Next.js · Tailwind</span>
            <span className="text-landing-navy/55">Framer Motion · KaTeX</span>
          </div>
        </div>
      </div>
      <div className="border-t border-landing-navy/[0.06] py-5 text-center text-xs text-landing-navy/40">
        © {new Date().getFullYear()} Wisest Maths — crafted for elegant learning.
      </div>
    </footer>
  );
}
