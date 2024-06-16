import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_PAGES = [
  "/KalkulatorKesehatan", 
  "/ForumKomunitas",
  "/LayananKomunitas",
  "/LayananKonsultasi",
  "/AsupanAir",
  "/KalkulatorBMR",
  "/KalkulatorIBM", 
  "/KalkulatorKesehatan/KalkulatorIBM",
  "/KalkulatorKesehatan/AsupanAir",
  "/KalkulatorKesehatan/KalkulatorBMR"
];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token && AUTH_PAGES.includes(req.nextUrl.pathname)) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: AUTH_PAGES,
};
