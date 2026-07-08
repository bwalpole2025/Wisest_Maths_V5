/** Shared loading skeletons for link destinations — instant perceived navigation. */

export function PageSkeleton({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 pt-24">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-landing-electric border-t-transparent" />
        {label}
      </div>
    </div>
  );
}

export function QuestionListSkeleton() {
  return (
    <div className="mt-12 space-y-4 animate-pulse">
      <div className="h-12 rounded-2xl bg-black/[0.04]" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="glass rounded-2xl p-5">
          <div className="flex gap-3">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-black/[0.06]" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 rounded bg-black/[0.06]" />
              <div className="h-3 w-full rounded bg-black/[0.04]" />
              <div className="h-3 w-2/3 rounded bg-black/[0.04]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SolvePageSkeleton() {
  return (
    <section className="mx-auto max-w-3xl animate-pulse px-6 pt-36">
      <div className="h-4 w-32 rounded bg-black/[0.06]" />
      <div className="glass mt-6 rounded-3xl p-9">
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-black/[0.06]" />
          <div className="h-6 w-16 rounded-full bg-black/[0.06]" />
        </div>
        <div className="mt-6 space-y-3">
          <div className="h-5 w-full rounded bg-black/[0.06]" />
          <div className="h-5 w-4/5 rounded bg-black/[0.04]" />
        </div>
        <div className="mt-8 h-10 w-28 rounded-xl bg-black/[0.06]" />
      </div>
    </section>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass h-48 animate-pulse rounded-3xl p-6">
          <div className="h-12 w-12 rounded-2xl bg-black/[0.06]" />
          <div className="mt-5 h-5 w-2/3 rounded bg-black/[0.06]" />
          <div className="mt-2 h-3 w-full rounded bg-black/[0.04]" />
        </div>
      ))}
    </div>
  );
}
