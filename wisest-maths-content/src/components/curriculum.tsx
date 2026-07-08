import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------- breadcrumb */

export function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <Reveal>
      <nav className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {trail.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="px-1 opacity-40">/</span>}
            {c.href ? (
              <Link href={c.href} className="rounded-md px-1.5 py-1 transition-colors hover:text-foreground">
                {c.label}
              </Link>
            ) : (
              <span className="px-1.5 py-1 font-medium text-foreground">{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </Reveal>
  );
}

/* ----------------------------------------------------------- level header */

export function LevelHeader({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <Reveal delay={0.05}>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-landing-electric">{eyebrow}</p>
      <h1 className="mt-3 text-balance font-serif text-3xl font-normal tracking-tight text-landing-navy sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{blurb}</p>
    </Reveal>
  );
}

/* ----------------------------------------------------------------- grid */

export function CardGrid({
  children,
  cols = 3,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "mt-8 grid gap-4",
        cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- nav card */

interface NavCardProps {
  href: string;
  grad: string;
  tile: React.ReactNode;
  tileClass?: string;
  kicker?: string;
  badge?: string;
  title: string;
  blurb?: string;
  foot?: string;
  cta?: string;
  index?: number;
}

export function NavCard(p: NavCardProps) {
  return (
    <Reveal delay={((p.index ?? 0) % 3) * 0.05}>
      <Link href={p.href} className="group block h-full">
        <div className="card-glow glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
          <div
            className={cn(
              "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40",
              p.grad,
            )}
          />
          <div className="relative flex items-start justify-between gap-3">
            <span
              className={cn(
                "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/20",
                p.grad,
                p.tileClass,
              )}
            >
              {p.tile}
            </span>
            {p.badge && (
              <span className="rounded-full border border-black/[0.08] bg-landing-light px-2.5 py-1 text-xs font-semibold text-landing-navy/55">
                {p.badge}
              </span>
            )}
          </div>

          {p.kicker && (
            <p className="relative mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {p.kicker}
            </p>
          )}
          <h3 className={cn("relative font-display text-lg font-semibold tracking-tight text-foreground", p.kicker ? "mt-1" : "mt-5")}>
            {p.title}
          </h3>
          {p.blurb && <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>}

          <div className={cn("relative flex items-center justify-between gap-2", p.blurb ? "mt-5" : "mt-6 flex-1 items-end")}>
            <span className="text-xs text-muted-foreground">{p.foot}</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {p.cta ?? "Open"} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------------------------------------------------- subtopic card */

interface SubtopicCardData {
  name: string;
  description: string;
  live: boolean;
  href: string | null;
  higherOnly: boolean;
  grad: string;
  count: number;
  easy: number;
  intermediate: number;
  hard: number;
}

export function SubtopicGridCard({ s, index = 0 }: { s: SubtopicCardData; index?: number }) {
  const inner = (
    <div
      className={cn(
        "card-glow glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300",
        s.live ? "group-hover:-translate-y-1" : "opacity-70",
      )}
    >
      {s.live && (
        <div
          className={cn(
            "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40",
            s.grad,
          )}
        />
      )}
      <div className="relative flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-lg ring-1 ring-white/20",
            s.live ? cn("bg-gradient-to-br", s.grad) : "bg-landing-light text-landing-navy/40 ring-black/[0.06]",
          )}
        >
          <span className="font-display text-sm font-bold">{s.live ? "✓" : "·"}</span>
        </span>
        {s.live ? (
          <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {s.count} Q
          </span>
        ) : (
          <span className="rounded-full border border-black/[0.08] bg-landing-light px-2.5 py-1 text-xs font-semibold text-landing-navy/55">
            {s.higherOnly ? "Higher only" : "Coming soon"}
          </span>
        )}
      </div>

      <h3 className="relative mt-5 font-display text-base font-semibold tracking-tight text-foreground">{s.name}</h3>
      <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

      {s.live ? (
        <>
          <div className="relative mt-5 flex h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
            <span className="bg-emerald-400/80" style={{ width: `${(s.easy / s.count) * 100}%` }} />
            <span className="bg-amber-400/80" style={{ width: `${(s.intermediate / s.count) * 100}%` }} />
            <span className="bg-rose-400/80" style={{ width: `${(s.hard / s.count) * 100}%` }} />
          </div>
          <div className="relative mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex gap-3">
              <span><b className="text-emerald-700">{s.easy}</b> easy</span>
              <span><b className="text-amber-700">{s.intermediate}</b> med</span>
              <span><b className="text-rose-700">{s.hard}</b> hard</span>
            </span>
            <span className="flex items-center gap-1 font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              Open <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </>
      ) : (
        <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-black/[0.04]" />
      )}
    </div>
  );

  return (
    <Reveal delay={(index % 3) * 0.05}>
      {s.live && s.href ? (
        <Link href={s.href} className="group block h-full">
          {inner}
        </Link>
      ) : (
        <div className="h-full cursor-default">{inner}</div>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------- back link */

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Reveal>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {label}
      </Link>
    </Reveal>
  );
}
