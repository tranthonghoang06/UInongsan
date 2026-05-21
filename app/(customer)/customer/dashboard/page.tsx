import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockCustomerAddresses, mockOrders, mockWishlist } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { Heart, MapPin, PackageCheck, ShoppingBasket } from 'lucide-react';

export default function CustomerDashboardPage() {
  const totalSpent = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const latestOrder = mockOrders[0];

  return (
    <main className="space-y-4 pb-8">
      <PageHeader
        eyebrow="Tài khoản khách hàng"
        title="Xin chào,Lê Khách Hàng!"
        description="Quản lý mua hàng, địa chỉ giao nhận và sản phẩm yêu thích của bạn."
        actions={
          <Link href="/products">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <ShoppingBasket className="h-4 w-4" />
              Mua nông sản
            </Button>
          </Link>
        }
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <PackageCheck className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Đơn hàng</p>
          <p className="text-2xl font-bold text-[#163B24]">{mockOrders.length}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <p className="text-sm text-gray-600">Tổng đã mua</p>
          <p className="mt-2 text-2xl font-bold text-[#16A34A]">{formatCurrency(totalSpent)}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <MapPin className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Địa chỉ</p>
          <p className="text-2xl font-bold text-[#163B24]">{mockCustomerAddresses.length}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Heart className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Yêu thích</p>
          <p className="text-2xl font-bold text-[#163B24]">{mockWishlist.length}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-[#163B24]">Đơn gần nhất #{latestOrder.id}</h2>
            <p className="mt-1 text-sm text-gray-600">{latestOrder.itemCount} sản phẩm · {formatCurrency(latestOrder.totalAmount)}</p>
          </div>
          <StatusBadge status={latestOrder.status} />
        </div>
      </section>
    </main>
  );
}
