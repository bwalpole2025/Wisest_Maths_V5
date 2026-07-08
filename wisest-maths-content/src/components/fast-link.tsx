"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback, type ComponentProps } from "react";

export type FastLinkProps = ComponentProps<typeof NextLink>;

/**
 * Drop-in Link replacement: viewport prefetch (Next default) + explicit
 * router.prefetch on hover/focus for sub-800ms perceived navigation.
 */
export const FastLink = memo(function FastLink({
  href,
  prefetch = true,
  onMouseEnter,
  onFocus,
  ...props
}: FastLinkProps) {
  const router = useRouter();

  const prefetchHref = useCallback(() => {
    if (!prefetch) return;
    const target = typeof href === "string" ? href : href.pathname ?? "";
    if (target) router.prefetch(target);
  }, [href, prefetch, router]);

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      onMouseEnter?.(event);
      prefetchHref();
    },
    [onMouseEnter, prefetchHref],
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLAnchorElement>) => {
      onFocus?.(event);
      prefetchHref();
    },
    [onFocus, prefetchHref],
  );

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...props}
    />
  );
});
