"use client";

import { usePathname } from "next/navigation";

export function SiteBackground() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-landing-light">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e3f2fd]/40 via-landing-light to-landing-light" />
      <div className="dot-bg absolute inset-0 opacity-50" />
    </div>
  );
}
