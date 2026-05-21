import Timeline from '@/app/components/ui/Timeline';
import type { OrderStatus } from '@/types';

interface OrderStatusTimelineProps {
  status: OrderStatus;
}

const steps: OrderStatus[] = ['pending-confirmation', 'confirmed', 'preparing', 'delivering', 'completed'];

export default function OrderStatusTimeline({ status }: OrderStatusTimelineProps) {
  const currentIndex = Math.max(steps.indexOf(status), 0);

  return (
    <Timeline
      items={steps.map((step, index) => ({
        title: step,
        description: index <= currentIndex ? 'Đã cập nhật trong hệ thống' : 'Đang chờ xử lý',
        status: index < currentIndex ? 'done' : index === currentIndex ? 'current' : 'pending',
      }))}
    />
  );
}
