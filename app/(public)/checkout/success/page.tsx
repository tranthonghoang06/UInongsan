import Link from 'next/link';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-3 py-8">
        <section className="w-full max-w-md rounded-2xl border border-[#BBF7D0] bg-white p-5 text-center shadow-sm shadow-green-100">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A]">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-[#163B24]">Thanh toán thành công</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">Đơn hàng đã được ghi nhận. Bạn có thể theo dõi trạng thái giao hàng ngay trong hệ thống.</p>
          <div className="mt-5 grid gap-2">
            <Link href="/orders/ORD001">
              <Button variant="primary" size="md" className="w-full">Xem đơn hàng</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="md" className="w-full">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
