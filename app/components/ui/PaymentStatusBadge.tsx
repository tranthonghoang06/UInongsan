import Badge from '@/app/components/ui/Badge';
import { PAYMENT_STATUS_LABELS } from '@/constants';
import type { PaymentStatus } from '@/types';

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

export default function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
  const variant = status === 'paid' ? 'success' : status === 'failed' ? 'error' : status === 'refunded' ? 'info' : 'warning';

  return (
    <Badge variant={variant} size="sm">
      {PAYMENT_STATUS_LABELS[status]}
    </Badge>
  );
}
