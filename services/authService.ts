import { DASHBOARD_ROLES } from '@/constants';
import { mockUserList, mockUsers } from '@/app/data/mockData';
import type { UserRole } from '@/types';

export function getDemoSession(role: UserRole = 'farmer') {
  const roleInfo = DASHBOARD_ROLES.find((item) => item.role === role) ?? DASHBOARD_ROLES[0];

  return {
    user: {
      id: `${roleInfo.role}1`,
      name: roleInfo.label,
      role: roleInfo.role,
    },
    home: roleInfo.home,
  };
}

export function hasRole(role: UserRole, allowedRoles: UserRole[]) {
  return allowedRoles.includes(role);
}

export const authService = {
  login: (email: string) => mockUserList.find((user) => user.email === email) ?? mockUsers.customer,
  logout: () => true,
  getCurrentUser: () => mockUsers.customer,
  hasRole: (role: UserRole, allowedRoles: UserRole | UserRole[]) =>
    Array.isArray(allowedRoles) ? allowedRoles.includes(role) : allowedRoles === role,
};
