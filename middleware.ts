import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { proxy } from './proxy';

export async function middleware(request: NextRequest) {
  return proxy(request);
}

// Configura em quais rotas o middleware deve atuar
export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/login', '/admin/register'],
};
