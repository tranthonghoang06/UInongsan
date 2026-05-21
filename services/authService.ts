import { DASHBOARD_ROLES } from '@/constants';
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
