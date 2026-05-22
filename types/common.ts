export type EntityStatus = 'active' | 'inactive' | 'draft' | 'archived';
export type CommonStatus = EntityStatus | 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled';

export interface SelectOption {
  value: string;
  label: string;
}

export interface PageParams<T extends Record<string, string> = Record<string, string>> {
  params: Promise<T>;
}

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  status?: 'done' | 'current' | 'pending';
}

export interface DashboardStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  role?: string;
  tone?: 'green' | 'blue' | 'amber' | 'red' | 'purple';
}

export interface Notification {
  id: string;
  userId?: string;
  role?: string;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  type?: 'order' | 'payment' | 'system' | 'delivery' | 'farm';
}

export interface Complaint {
  id: string;
  title: string;
  orderId: string;
  userName: string;
  status: 'open' | 'reviewing' | 'resolved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  createdDate: string;
  description: string;
}
