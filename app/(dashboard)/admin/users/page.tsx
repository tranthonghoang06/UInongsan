'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockUsers } from '@/app/data/mockData';
import { ShieldCheck, UserCog, UserPlus, Users } from 'lucide-react';

const roleText: Record<string, string> = {
  customer: 'Khách hàng',
  farmer: 'Nông dân',
  trader: 'Thương lái',
  seller: 'Người bán',
  delivery: 'Vận chuyển',
  admin: 'Admin',
};

export default function AdminUsersPage() {
  const users = Object.values(mockUsers);

  return (
    <DataPage
      title="Người dùng"
      description="Quản lý tài khoản, vai trò và trạng thái hoạt động trong hệ thống."
      actionLabel="Thêm người dùng"
      actionHref="/admin/users/new"
      actionIcon={<UserPlus className="h-4 w-4" />}
      stats={[
        { label: 'Tài khoản', value: users.length, note: 'Mock hiện có', icon: <Users className="h-5 w-5" /> },
        { label: 'Vai trò', value: new Set(users.map((user) => user.role)).size, note: 'Đã phân quyền', icon: <UserCog className="h-5 w-5" /> },
        { label: 'Bảo mật', value: 'Ổn định', note: 'Không có cảnh báo', icon: <ShieldCheck className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'user', label: 'Người dùng' },
        { key: 'role', label: 'Vai trò' },
        { key: 'email', label: 'Email' },
        { key: 'status', label: 'Trạng thái' },
      ]}
      rows={users.map((user) => ({
        id: user.id,
        cells: {
          user: (
            <div className="flex items-center gap-3">
              <Image src={user.avatar ?? '/logo.png'} alt={user.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <span className="font-semibold">{user.name}</span>
            </div>
          ),
          role: roleText[user.role] ?? user.role,
          email: user.email,
          status: <Badge variant="success" size="sm">Hoạt động</Badge>,
        },
      }))}
    />
  );
}
