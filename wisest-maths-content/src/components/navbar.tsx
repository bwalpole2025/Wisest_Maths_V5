"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/questions", label: "Question Bank" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="glass rise flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 pl-4"
        style={{ "--rise-y": "-24px" } as CSSProperties}
      >
        <Brand />

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                isActive(l.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive(l.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/curriculum"
            className="group hidden items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:flex"
          >
            Start solving
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
