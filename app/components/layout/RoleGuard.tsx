import type { ReactNode } from 'react';
import type { UserRole } from '@/types';
import { ROLE_LABELS } from '@/constants';

interface RoleGuardProps {
  role: UserRole;
  allowed: UserRole[];
  children: ReactNode;
}

export default function RoleGuard({ role, allowed, children }: RoleGuardProps) {
  if (!allowed.includes(role)) {
    return (
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-5 text-center shadow-sm shadow-green-100">
        <p className="font-bold text-[#163B24]">Không có quyền truy cập</p>
        <p className="mt-2 text-sm text-gray-600">Vai trò {ROLE_LABELS[role]} chưa được cấp quyền cho màn hình này.</p>
      </div>
    );
  }

  return <>{children}</>;
}
