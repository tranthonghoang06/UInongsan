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
