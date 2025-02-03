/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth(); // get user session

  const { pathname } = request.nextUrl;
  if (
    (pathname.startsWith("/login") || pathname.startsWith("/register")) &&
    session?.user.id
  ) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (pathname.startsWith("/admin") && session?.user.role !== "Admin") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
