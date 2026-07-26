import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./constants/routes";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const isProtectedRoute =
        PROTECTED_ROUTES.some((route) =>
            pathname.startsWith(route)
        );

    const isAuthRoute =
        AUTH_ROUTES.some((route) =>
            pathname.startsWith(route)
        );

    const token = request.cookies.get("accessToken");

    const isLoggedIn = !!token;

    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    if (isAuthRoute && isLoggedIn) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );
    }

    return NextResponse.next();
}