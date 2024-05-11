import withAuth from "@/middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;

}

export default withAuth(mainMiddleware,[
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
])