import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

const protectedPaths = ["/dashboard", "/home", "/tentang-kami"];
const authPaths = ["/login"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedPaths.some((p) => path.startsWith(p));
  const isAuthPage = authPaths.some((p) => path.startsWith(p));

  const session = req.cookies.get("session")?.value;
  let isValid = false;

  if (session) {
    try {
      await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });
      isValid = true;
    } catch {
      isValid = false;
    }
  }

  if (isProtected && !isValid) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthPage && isValid) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)"],
};
