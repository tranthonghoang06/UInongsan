import type { UserRole } from '@/types';

export const dashboardRoles: UserRole[] = ['farmer', 'trader', 'seller', 'delivery', 'admin'];
export const customerHome = '/customer/dashboard';

export function getRoleFromPath(pathname: string): UserRole | null {
  const role = pathname.split('/').filter(Boolean)[0];
  return dashboardRoles.includes(role as UserRole) ? (role as UserRole) : null;
}

export function getRoleHome(role: UserRole) {
  return `/${role}/dashboard`;
}

export function isDashboardPath(pathname: string) {
  return getRoleFromPath(pathname) !== null || pathname === '/dashboard';
}

export function canAccessDashboardPath(pathname: string, role?: UserRole | null) {
  const routeRole = getRoleFromPath(pathname);
  return !routeRole || !role || routeRole === role;
}
