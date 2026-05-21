import Link from 'next/link';
import { notFound } from 'next/navigation';
import DeliveryTracker from '@/app/components/layout/DeliveryTracker';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockDeliveries, mockOrders } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { Package, ReceiptText } from 'lucide-react';

interface AdminOrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminOrderDetailPage({ params }: AdminOrderDetailPageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  const delivery = mockDeliveries.find((item) => item.orderId === order.id);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Quản trị đơn hàng</p>
        <h1 className="mt-1 text-2xl font-bold text-[#163B24]">#{order.id}</h1>
        <StatusBadge status={order.status} className="mt-3" />
      </div>
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <ReceiptText className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Tổng tiền</p>
          <p className="font-bold text-[#163B24]">{formatCurrency(order.totalAmount)}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Package className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Số sản phẩm</p>
          <p className="font-bold text-[#163B24]">{order.itemCount}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <p className="text-sm text-gray-600">Ngày tạo</p>
          <p className="mt-2 font-bold text-[#163B24]">{order.createdDate}</p>
        </div>
      </section>
      {delivery && <DeliveryTracker currentStatus={delivery.status} />}
      <Link href="/admin/orders" className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại đơn hàng</Button>
      </Link>
    </div>
  );
}
