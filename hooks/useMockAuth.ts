'use client';

import { useMemo, useState } from 'react';
import { mockUsers } from '@/app/data/mockData';
import type { User, UserRole } from '@/types';

export function useMockAuth(defaultRole: UserRole = 'customer') {
  const [role, setRole] = useState<UserRole>(defaultRole);
  const user = useMemo(() => mockUsers[role] as User, [role]);

  return {
    user,
    role,
    setRole,
    isAuthenticated: true,
    hasRole: (allowedRoles: UserRole | UserRole[]) =>
      Array.isArray(allowedRoles) ? allowedRoles.includes(role) : allowedRoles === role,
  };
}
