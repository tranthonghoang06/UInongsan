import Link from 'next/link';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import { XCircle } from 'lucide-react';

export default function CheckoutFailedPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-3 py-8">
        <section className="w-full max-w-md rounded-2xl border border-[#BBF7D0] bg-white p-5 text-center shadow-sm shadow-green-100">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
            <XCircle className="h-9 w-9" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-[#163B24]">Thanh toán chưa hoàn tất</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">Giao dịch bị gián đoạn hoặc chưa được xác nhận. Giỏ hàng vẫn được giữ để bạn thử lại.</p>
          <div className="mt-5 grid gap-2">
            <Link href="/checkout">
              <Button variant="primary" size="md" className="w-full">Thử thanh toán lại</Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline" size="md" className="w-full">Về giỏ hàng</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
