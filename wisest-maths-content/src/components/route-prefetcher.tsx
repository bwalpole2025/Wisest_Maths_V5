"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Critical routes prefetched on idle after first paint. */
const CRITICAL_ROUTES = [
  "/",
  "/curriculum",
  "/questions",
  "/dashboard",
  "/curriculum/a-level-maths",
  "/curriculum/a-level-maths/year-2/mechanics",
] as const;

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const run = () => {
      for (const route of CRITICAL_ROUTES) {
        router.prefetch(route);
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }

    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  }, [router]);

  return null;
}
