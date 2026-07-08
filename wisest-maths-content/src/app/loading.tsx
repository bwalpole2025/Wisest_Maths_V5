export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 pt-24">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-landing-electric border-t-transparent" />
        Loading…
      </div>
    </div>
  );
}
