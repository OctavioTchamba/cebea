import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  const decoded = await adminAuth.verifyIdToken(idToken);

  const response = NextResponse.json({ uid: decoded.uid });

  response.cookies.set("admin-token", idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
