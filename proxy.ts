import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { adminAuth } from "./lib/firebaseAdmin";
import { error } from "console";

export default async  function proxy(request: NextRequest){
  const {pathname} = request.nextUrl;

  if(pathname.startsWith("/admin") && pathname !== "/admin/login"){
   const token = request.cookies.get("admin-token")?.value;
   if(!token){
      return NextResponse.redirect(new URL("/admin/login", request.url))
   }

   try {
      await adminAuth.verifyIdToken((token));
      return NextResponse.next()
   } catch (error) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
   }
  }

  if( request.nextUrl.pathname.startsWith("/api/publicacoes")){
   return NextResponse.json(
      {error: "Nao autorizado"},
      {status: 401}
   )
  }

  return NextResponse.next()
}
export const config = {
   matcher: ["/admin/:path*"],
 };