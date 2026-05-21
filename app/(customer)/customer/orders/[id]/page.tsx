import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import OrderStatusTimeline from '@/app/components/ui/OrderStatusTimeline';
import PaymentStatusBadge from '@/app/components/ui/PaymentStatusBadge';
import DeliveryTracker from '@/app/components/layout/DeliveryTracker';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockDeliveries, mockOrders, mockPayments } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';

interface CustomerOrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CustomerOrderDetailPage({ params }: CustomerOrderDetailPageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  const delivery = mockDeliveries.find((item) => item.orderId === order.id);
  const payment = mockPayments.find((item) => item.orderId === order.id);

  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Chi tiết đơn hàng" title={`Đơn #${order.id}`} description={`${order.itemCount} sản phẩm · ${formatCurrency(order.totalAmount)}`} />
      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="mb-4 font-bold text-[#163B24]">Tiến trình đơn hàng</h2>
          <OrderStatusTimeline status={order.status} />
        </div>
        <aside className="space-y-3">
          {payment && (
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
              <p className="text-sm text-gray-600">Thanh toán</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="font-bold text-[#163B24]">{formatCurrency(payment.amount)}</p>
                <PaymentStatusBadge status={payment.status} />
              </div>
            </div>
          )}
          <Link href={`/orders/${order.id}`} className="block">
            <Button variant="outline" size="md" className="w-full">Xem trang theo dõi public</Button>
          </Link>
        </aside>
      </section>
      {delivery && <DeliveryTracker currentStatus={delivery.status} />}
    </main>
  );
}
