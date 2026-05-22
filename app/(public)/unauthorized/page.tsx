import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { ShieldAlert } from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0FDF4] px-4">
      <section className="w-full max-w-lg rounded-2xl border border-[#BBF7D0] bg-white p-6 text-center shadow-sm shadow-green-100">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#D32F2F]">
          <ShieldAlert className="h-7 w-7" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-[#163B24]">Không có quyền truy cập</h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Tài khoản hiện tại không phù hợp với khu vực bạn đang mở. Vui lòng đăng nhập bằng đúng vai trò demo.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link href="/login">
            <Button>Đăng nhập lại</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Về trang chủ</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
