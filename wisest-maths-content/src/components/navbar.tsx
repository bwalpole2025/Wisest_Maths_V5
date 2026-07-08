"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Brand } from "@/components/brand";
import { cn } from "@/lib/utils";

const links = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/questions", label: "Question Bank" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        isLanding
          ? "bg-transparent"
          : "border-b border-black/[0.06] bg-landing-light/90 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Brand
          className={cn(
            isLanding &&
              "[&_span:first-child]:bg-white/10 [&_span:first-child]:shadow-none [&_span:first-child]:ring-white/20 [&_span:last-child]:text-white",
          )}
        />

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-[13px] font-medium transition-colors",
                isLanding
                  ? "text-white/65 hover:text-white"
                  : isActive(l.href)
                    ? "text-landing-navy"
                    : "text-landing-navy/55 hover:text-landing-navy",
              )}
            >
              {!isLanding && isActive(l.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-landing-electric"
                />
              )}
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className={cn(
              "hidden text-[13px] font-medium transition-colors sm:block",
              isLanding ? "text-white/65 hover:text-white" : "text-landing-navy/55 hover:text-landing-navy",
            )}
          >
            Log in
          </Link>
          <Link
            href="/questions"
            className={cn(
              "hidden rounded-full px-4 py-2 text-[13px] font-medium transition-colors sm:inline-flex",
              isLanding
                ? "border border-white/30 text-white hover:bg-white/10"
                : "app-btn-primary py-2",
            )}
          >
            Start solving
          </Link>
        </div>
      </nav>
    </header>
  );
}
