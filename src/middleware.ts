import {NextResponse} from "next/server"
import type {NextRequest} from "next/server"

export function middleware(request:NextRequest){
  // if (request.nextUrl.pathname === "/hello") {
  //   return NextResponse.rewrite(new URL("/feed", request.url));
  // }

  // return NextResponse.next();

  
  return NextResponse.redirect(new URL("/",request.url))
}
export const config={
  matcher:"/f3"
}