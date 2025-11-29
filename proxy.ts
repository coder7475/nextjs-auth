// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/config/config';

export function proxy(request: NextRequest) {
  // Protect only /dashboard and sub-routes
  console.log("Middleware");
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    console.log(token);
    // No token = redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],  
};
