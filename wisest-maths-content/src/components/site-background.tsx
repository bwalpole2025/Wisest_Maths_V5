export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora blobs */}
      <div className="absolute -left-[10%] -top-[12%] h-[46rem] w-[46rem] rounded-full bg-violet-600/25 blur-[130px] animate-aurora" />
      <div className="absolute right-[-8%] top-[8%] h-[38rem] w-[38rem] rounded-full bg-sky-500/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-14%] left-[26%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/15 blur-[140px] animate-aurora [animation-delay:-12s]" />

      {/* subtle grid */}
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(240_40%_2%/0.7))] dark:block hidden" />
    </div>
  );
}
