import Link from "next/link";
import type { ComponentProps } from "react";

/** Server-safe Link with prefetch enabled by default. */
export function AppLink({ prefetch = true, ...props }: ComponentProps<typeof Link>) {
  return <Link prefetch={prefetch} {...props} />;
}
