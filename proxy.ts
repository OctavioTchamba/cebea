import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// middleware.ts
export async function proxy(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const { pathname } = request.nextUrl;

  // Log para debug (apenas em desenvolvimento)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Middleware] Path:', pathname);
    console.log('[Middleware] Token presente:', !!token);
    console.log('[Middleware] Todos os cookies:', request.cookies.getAll().map(c => c.name));
  }

  const isAuthPage = pathname.startsWith('/admin/login') || pathname.startsWith('/admin/register');
  const isDashboardPage = pathname.startsWith('/admin/dashboard');

  if (isDashboardPage && !token) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Middleware] Redirecionando para login - sem token');
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (isAuthPage && token) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Middleware] Redirecionando para dashboard - token presente');
    }
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configura em quais rotas o middleware deve atuar
export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/login'],
};
































/*import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Defina as rotas de autenticação (Públicas)
  // Certifique-se que estes caminhos coincidem com suas pastas em app/admin/...
  const isAuthPage = pathname === "/admin/login" || pathname === "/admin/register";

  // 2. Defina a área protegida (Tudo que começa com /admin mas não é login/signup)
  const isProtectedRoute = (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) && !isAuthPage;

  // 3. Obter o token do cookie (Nome definido no seu backend Node)
  const token = request.cookies.get("accessToken")?.value;


  // REGRA 1: Se tentar acessar área protegida sem token -> Login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // REGRA 2: Se já tem token e tenta ir para Login/Signup -> Dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // 4. Proxy para API (Opcional - útil para evitar erros de CORS no client-side)
  if (pathname.startsWith("/api/external")) {
    const targetUrl = pathname.replace("/api/external", "");
    return NextResponse.rewrite(new URL(targetUrl, "http://localhost:8000"));
  }

  return NextResponse.next();
}

// O Matcher garante que o middleware só rode nestas rotas para poupar performance
export const config = {
  matcher: [
    "/admin/:path*",
    "/api/external/:path*"
  ],
};*/