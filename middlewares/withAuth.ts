// withAuth.ts
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { useSession } from "next-auth/react";

export default function withAuth(middleware:NextMiddleware, requireAuth:string[]= []){
  return async (req:NextRequest, next:NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)){
      const token = await getToken({
        req,
        secret:process.env.NEXTAUTH_SECRET
      });
      if(!token){
        const url = new URL('/login', req.url);
        return NextResponse.redirect(url);
      }
      return middleware(req,next);
    }
    // Tambahkan pengembalian nilai default jika tidak ada kondisi yang terpenuhi
    return middleware(req,next);
  }
}
