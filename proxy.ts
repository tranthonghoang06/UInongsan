import { NextResponse, type NextRequest } from 'next/server';
import { getRoleFromPath, isDashboardPath } from '@/lib/auth';
import type { UserRole } from '@/types';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const routeRole = pathname.startsWith('/customer') ? 'customer' : getRoleFromPath(pathname);
  const sessionRole = request.cookies.get('mock-role')?.value as UserRole | undefined;

  if (routeRole && !sessionRole) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (routeRole && sessionRole !== routeRole) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (isDashboardPath(pathname)) {
    const response = NextResponse.next();
    const role = getRoleFromPath(pathname);
    response.headers.set('x-dashboard-area', role ?? 'entry');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/customer/:path*', '/admin/:path*', '/farmer/:path*', '/trader/:path*', '/seller/:path*', '/delivery/:path*'],
};
