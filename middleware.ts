import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isLogin = false; // 나중에 쿠키로 판단
  const { pathname } = req.nextUrl;

  if (pathname === '/') {
    return NextResponse.rewrite(
      new URL(isLogin ? '/main' : '/login', req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};