import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import AppLogo from '@/app/components/layout/AppLogo';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0FDF4] px-3 py-8">
      <section className="w-full max-w-md rounded-2xl border border-[#BBF7D0] bg-white p-5 text-center shadow-sm shadow-green-100">
        <AppLogo size={56} className="mx-auto h-14 w-14" />
        <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[#16A34A]">404</p>
        <h1 className="mt-1 text-xl font-bold text-[#163B24]">Không tìm thấy trang</h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">Đường dẫn này chưa tồn tại hoặc đã được chuyển sang vị trí khác.</p>
        <Link href="/" className="mt-5 block">
          <Button variant="primary" size="md" className="w-full">
            Về trang chủ
          </Button>
        </Link>
      </section>
    </main>
  );
}
