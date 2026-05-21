import Link from 'next/link';
import { notFound } from 'next/navigation';
import DeliveryTracker from '@/app/components/layout/DeliveryTracker';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockDeliveries, mockOrders } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { MapPin, Phone, Truck } from 'lucide-react';

interface DeliveryOrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliveryOrderDetailPage({ params }: DeliveryOrderDetailPageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  const delivery = mockDeliveries.find((item) => item.orderId === order.id) ?? mockDeliveries[0];

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Vận chuyển</p>
          <h1 className="mt-1 text-2xl font-bold text-[#163B24]">Đơn #{order.id}</h1>
          <StatusBadge status={delivery.status} className="mt-3" />
        </div>
        <Link href={`/delivery/orders/${order.id}/update`} className="w-full sm:w-auto">
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <Truck className="h-4 w-4" />
            Cập nhật
          </Button>
        </Link>
      </div>
      <DeliveryTracker currentStatus={delivery.status} />
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="font-bold text-[#163B24]">Điểm lấy và giao</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-[#16A34A]" /> Lấy hàng: {delivery.pickupAddress}</p>
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-[#16A34A]" /> Giao hàng: {delivery.dropoffAddress}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="font-bold text-[#163B24]">Tài xế và thanh toán</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p className="flex gap-2"><Phone className="h-4 w-4 text-[#16A34A]" /> {delivery.driverName} - {delivery.driverPhone}</p>
            <p>Tổng đơn: <span className="font-bold text-[#163B24]">{formatCurrency(order.totalAmount)}</span></p>
            <p>ETA: {delivery.estimatedArrival}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
