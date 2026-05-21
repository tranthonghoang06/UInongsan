'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Badge from '@/app/components/ui/Badge';
import { CheckCircle2, Lock, Mail, MapPin, Phone, UserRound } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/customer/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:gap-8 sm:px-4 sm:py-8 lg:grid-cols-[420px_1fr]">
        <aside className="space-y-4 rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:space-y-5 sm:p-6 lg:sticky lg:top-24 lg:h-fit">
          <Badge variant="success">Khách hàng mới</Badge>
          <div>
            <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Tạo tài khoản mua nông sản sạch</h1>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Tài khoản khách hàng giúp lưu địa chỉ, theo dõi đơn, đánh giá sản phẩm và nhận thông tin truy xuất nguồn gốc rõ ràng hơn.
            </p>
          </div>
          <div className="space-y-3">
            {['Theo dõi đơn hàng cá nhân', 'Lưu nhiều địa chỉ giao hàng', 'Quản lý sản phẩm yêu thích'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#263238]">
                <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#DCFCE7] p-4 text-sm font-medium text-[#166534]">
            Bạn là đối tác vận hành?{' '}
            <Link href="/staff-register" className="font-bold hover:underline">
              Đăng ký đối tác
            </Link>
          </div>
        </aside>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#263238] sm:text-2xl">Thông tin khách hàng</h2>
            <p className="mt-1 text-sm text-gray-600">Các thông tin này dùng cho mua hàng và giao nhận.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Họ và tên" placeholder="Lê Khánh Hàng" icon={<UserRound className="h-4 w-4" />} required />
              <Input label="Số điện thoại" placeholder="0900000000" icon={<Phone className="h-4 w-4" />} required />
              <Input label="Email" type="email" placeholder="customer@example.com" icon={<Mail className="h-4 w-4" />} required />
              <Input label="Địa chỉ mặc định" placeholder="Quận/Huyện, Tỉnh/Thành" icon={<MapPin className="h-4 w-4" />} />
              <Input label="Mật khẩu" type="password" icon={<Lock className="h-4 w-4" />} required />
              <Input label="Nhập lại mật khẩu" type="password" icon={<Lock className="h-4 w-4" />} required />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[#2E7D32]" required />
              <span>Tôi đồng ý với điều khoản mua hàng, chính sách giao nhận và xử lý dữ liệu cá nhân của hệ thống.</span>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" variant="primary" size="md" className="flex-1">
                Tạo tài khoản khách hàng
              </Button>
              <Link href="/login" className="flex-1">
                <Button type="button" variant="outline" size="md" className="w-full">
                  Đăng nhập
                </Button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
