import Link from 'next/link';
import Badge from '@/app/components/ui/Badge';
import type { Delivery } from '@/types';
import { Truck } from 'lucide-react';

export default function DeliveryCard({ delivery }: { delivery: Delivery }) {
  return (
    <article className="rounded-2xl border border-[#BBF7D0] bg-white p-4 shadow-sm shadow-green-100">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-[#16A34A]">{delivery.orderId}</p>
          <h3 className="mt-1 font-bold text-[#163B24]">{delivery.driverName}</h3>
          <p className="mt-1 text-sm text-gray-600">{delivery.dropoffAddress}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
          <Truck className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Badge variant="info" size="sm">{delivery.status}</Badge>
        <Link href={`/delivery/orders/${delivery.id}`} className="text-sm font-semibold text-[#16A34A] hover:text-[#166534]">
          Chi tiết
        </Link>
      </div>
    </article>
  );
}
