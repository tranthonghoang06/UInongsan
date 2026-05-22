import type { UserRole } from '@/types';

export const APP_NAME = 'PIONE GROUP';
export const APP_DESCRIPTION = 'Hệ thống quản lý vườn nông sản và thương mại hóa nông sản';

export const DASHBOARD_ROLES: Array<{ role: UserRole; label: string; home: string }> = [
  { role: 'farmer', label: 'Nông dân', home: '/farmer/dashboard' },
  { role: 'trader', label: 'Thương lái', home: '/trader/dashboard' },
  { role: 'seller', label: 'Người bán', home: '/seller/dashboard' },
  { role: 'delivery', label: 'Vận chuyển', home: '/delivery/dashboard' },
  { role: 'admin', label: 'Quản trị', home: '/admin/dashboard' },
];

export const ROLE_LABELS: Record<UserRole, string> = {
  customer: 'Khách hàng',
  farmer: 'Nông dân',
  trader: 'Thương lái',
  seller: 'Người bán',
  delivery: 'Vận chuyển',
  admin: 'Quản trị',
};

export const USER_ROLES: Record<UserRole, { label: string; className: string; home: string }> = {
  customer: { label: 'Khách hàng', className: 'bg-sky-100 text-sky-700', home: '/customer/dashboard' },
  farmer: { label: 'Nông dân', className: 'bg-green-100 text-green-700', home: '/farmer/dashboard' },
  trader: { label: 'Thương lái', className: 'bg-amber-100 text-amber-700', home: '/trader/dashboard' },
  seller: { label: 'Người bán', className: 'bg-emerald-100 text-emerald-700', home: '/seller/dashboard' },
  delivery: { label: 'Vận chuyển', className: 'bg-blue-100 text-blue-700', home: '/delivery/dashboard' },
  admin: { label: 'Quản trị', className: 'bg-purple-100 text-purple-700', home: '/admin/dashboard' },
};
