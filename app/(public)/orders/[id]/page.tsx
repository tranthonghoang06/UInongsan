import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import DeliveryTracker from '@/app/components/layout/DeliveryTracker';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockCartItems, mockDeliveries, mockOrders } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { MapPin, PackageCheck, Phone } from 'lucide-react';

interface PublicOrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PublicOrderDetailPage({ params }: PublicOrderDetailPageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  const delivery = mockDeliveries.find((item) => item.orderId === order.id);

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-5xl space-y-4 px-3 py-4 sm:px-4 sm:py-8">
        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Đơn hàng</p>
              <h1 className="mt-1 text-2xl font-bold text-[#163B24]">#{order.id}</h1>
              <p className="mt-2 text-sm text-gray-600">Ngày tạo: {order.createdDate}</p>
            </div>
            <StatusBadge status={order.status} size="md" />
          </div>
        </section>

        {delivery && <DeliveryTracker currentStatus={delivery.status} />}

        <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
            <h2 className="mb-4 font-bold text-[#163B24]">Sản phẩm trong đơn</h2>
            <div className="space-y-3">
              {mockCartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-[#F0FDF4] p-3">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[#163B24]">{item.name}</p>
                    <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                  </div>
                  <p className="shrink-0 font-bold text-[#16A34A]">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-3">
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
              <PackageCheck className="h-5 w-5 text-[#16A34A]" />
              <p className="mt-2 text-sm text-gray-600">Tổng thanh toán</p>
              <p className="text-2xl font-bold text-[#163B24]">{formatCurrency(order.totalAmount)}</p>
            </div>
            {delivery && (
              <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
                <h2 className="font-bold text-[#163B24]">Thông tin giao hàng</h2>
                <div className="mt-3 space-y-3 text-sm text-gray-600">
                  <p className="flex gap-2"><Phone className="h-4 w-4 text-[#16A34A]" /> {delivery.driverName} - {delivery.driverPhone}</p>
                  <p className="flex gap-2"><MapPin className="h-4 w-4 text-[#16A34A]" /> {delivery.dropoffAddress}</p>
                </div>
              </div>
            )}
          </aside>
        </section>

        <Link href="/orders" className="block">
          <Button variant="outline" size="md" className="w-full">
            Quay lại theo dõi đơn
          </Button>
        </Link>
      </main>
    </div>
  );
}
