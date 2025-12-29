import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Check if it's an admin route
    if (path.startsWith('/admin')) {
        // Allow access to login page and public assets
        if (path === '/admin/login') {
            return NextResponse.next();
        }

        // Check for auth token
        const token = request.cookies.get('auth_token');

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
