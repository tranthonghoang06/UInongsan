import { NextResponse, type NextRequest } from 'next/server';
import { getRoleFromPath, isDashboardPath } from '@/lib/auth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  if (isDashboardPath(pathname)) {
    const role = getRoleFromPath(pathname);
    response.headers.set('x-dashboard-area', role ?? 'entry');
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/customer/:path*', '/admin/:path*', '/farmer/:path*', '/trader/:path*', '/seller/:path*', '/delivery/:path*'],
};
