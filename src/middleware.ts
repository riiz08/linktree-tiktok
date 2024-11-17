// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Ambil token dari cookies
  const token = request.cookies.get("auth-token")?.value;

  // Tentukan halaman yang butuh proteksi
  const protectedRoutes = ["/admin"];

  // Cek apakah request menuju halaman yang butuh proteksi
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // Jika tidak ada token, redirect ke halaman login
    if (!token) {
      const loginUrl = new URL("/auth/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  //tentukan halaman yang butuh autentikasi
  const authRoutes = ["/auth"];

  //Cek apakah request menuju halaman yang butuh autentikasi
  if (authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (token) {
      const dashboardUrl = new URL("/admin/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  // Jika semuanya valid, lanjutkan ke halaman yang diminta
  return NextResponse.next();
}
