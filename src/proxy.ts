import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const auth = request.cookies.get("auth")?.value;

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forgot-password");

  const isDashboardRoute = pathname.startsWith("/dashboard");

  // ❌ Not logged in → block dashboard
  if (!auth && isDashboardRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Logged in → prevent going back to login
  if (auth && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
  ],
};