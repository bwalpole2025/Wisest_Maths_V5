"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Shows a top progress bar as soon as an in-app link is clicked, so slow
 * dev-mode route compilation never feels like a dead click.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    stopTimer();
    setActive(false);
    setProgress(100);
    const hide = window.setTimeout(() => setProgress(0), 250);
    return () => window.clearTimeout(hide);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || anchor.target === "_blank") {
        return;
      }

      const nextPath = href.split(/[?#]/)[0];
      if (!nextPath || nextPath === pathname) return;

      stopTimer();
      setActive(true);
      setProgress(18);

      timerRef.current = setInterval(() => {
        setProgress((value) => (value >= 92 ? value : value + 4));
      }, 400);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      stopTimer();
    };
  }, [pathname]);

  if (!active && progress === 0) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 bg-black/[0.04]"
    >
      <div
        className="h-full bg-[#d0f100] shadow-[0_0_12px_rgba(208,241,0,0.65)] transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
