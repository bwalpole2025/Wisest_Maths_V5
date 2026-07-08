"use client";

import { useRouter } from "next/navigation";
import { memo, useEffect, useRef } from "react";

interface PrefetchOnViewProps {
  hrefs: string[];
  children: React.ReactNode;
  className?: string;
}

/**
 * IntersectionObserver wrapper — prefetches all hrefs when the block enters
 * the viewport (link-heavy grids: curriculum cards, question lists).
 */
export const PrefetchOnView = memo(function PrefetchOnView({
  hrefs,
  children,
  className,
}: PrefetchOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const prefetched = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefetched.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        prefetched.current = true;
        for (const href of hrefs) {
          if (href) router.prefetch(href);
        }
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hrefs, router]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});
