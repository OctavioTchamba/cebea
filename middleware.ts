import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith('/admin/login');
  const isDashboardPage = pathname.startsWith('/admin/dashboard') || pathname.startsWith('/admin/register');

  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/login'],
};