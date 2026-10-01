import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hostname(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  return forwarded.split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
}

export function middleware(request: NextRequest) {
  if (hostname(request) !== "airmets.com") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.hostname = "www.airmets.com";
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/:path*",
};
