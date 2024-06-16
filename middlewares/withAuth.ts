import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
      });
      if (!token) {
        const url = new URL('/login', req.url);
        url.searchParams.set('redirected', 'true');
        return NextResponse.redirect(url);
      }
      return middleware(req, next);
    }
    return middleware(req, next);
  };
}
