import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Long-cache immutable build assets
  if (request.nextUrl.pathname.startsWith("/_next/static/")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return response;
  }

  // HTML navigations: allow SW + browser caching without blocking freshness
  if (request.headers.get("accept")?.includes("text/html")) {
    response.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    response.headers.set("X-DNS-Prefetch-Control", "on");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/image|favicon.ico).*)"],
};
