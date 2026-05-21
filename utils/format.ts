import { STATUS_LABELS } from '@/constants';

export function formatCurrency(value: number) {
  return `${value.toLocaleString('vi-VN')}₫`;
}

export function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('vi-VN');
}

export function getStatusLabel(status: string) {
  return STATUS_LABELS[status] ?? status;
}

export function getStatusVariant(status: string) {
  if (['completed', 'delivered', 'accepted', 'resolved', 'good'].includes(status)) {
    return 'success' as const;
  }

  if (['cancelled', 'rejected', 'failed', 'critical'].includes(status)) {
    return 'error' as const;
  }

  if (['pending-confirmation', 'pending-response', 'warning', 'reviewing'].includes(status)) {
    return 'warning' as const;
  }

  return 'info' as const;
}
