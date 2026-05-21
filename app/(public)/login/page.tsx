'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Badge from '@/app/components/ui/Badge';
import { Heart, Lock, Mail, PackageCheck, ShieldCheck, ShoppingBasket } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('customer@example.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/customer/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl gap-4 px-3 py-4 sm:gap-8 sm:px-4 sm:py-8 lg:grid-cols-[1fr_430px] lg:items-center">
        <section className="space-y-4 sm:space-y-6">
          <Badge variant="success">Tài khoản khách hàng</Badge>
          <div>
            <h1 className="max-w-3xl text-2xl font-bold leading-tight text-[#163B24] sm:text-4xl md:text-5xl">
              Đăng nhập để mua nông sản sạch dễ hơn
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-lg">
              Theo dõi đơn hàng, lưu địa chỉ giao hàng, quản lý sản phẩm yêu thích và xem lại lịch sử mua hàng trong một tài khoản.
            </p>
          </div>
          <div className="grid gap-3 min-[520px]:grid-cols-3 sm:gap-4">
            {[
              { label: 'Đơn hàng của tôi', value: 'Theo dõi', icon: <PackageCheck className="h-5 w-5" /> },
              { label: 'Yêu thích', value: 'Lưu nhanh', icon: <Heart className="h-5 w-5" /> },
              { label: 'Mua an toàn', value: 'QR rõ ràng', icon: <ShieldCheck className="h-5 w-5" /> },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#BBF7D0] bg-white p-3 shadow-sm shadow-green-100 sm:p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A]">
                  {item.icon}
                </div>
                <p className="text-lg font-bold text-[#163B24]">{item.value}</p>
                <p className="mt-1 text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#263238] sm:text-2xl">Đăng nhập khách hàng</h2>
            <p className="mt-1 text-sm text-gray-600">Dùng tài khoản khách hàng để tiếp tục mua sắm.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              icon={<Mail className="h-4 w-4" />}
              required
            />
            <Input
              label="Mật khẩu"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              icon={<Lock className="h-4 w-4" />}
              required
            />
            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="h-4 w-4 accent-[#2E7D32]" defaultChecked />
                Ghi nhớ
              </label>
              <Link href="/register" className="font-medium text-[#2E7D32] hover:underline">
                Tạo tài khoản
              </Link>
            </div>
            <Button type="submit" variant="primary" size="md" className="w-full">
              <ShoppingBasket className="h-4 w-4" />
              Vào tài khoản của tôi
            </Button>
          </form>

          <div className="mt-6 rounded-2xl bg-[#F0FDF4] p-4 text-sm text-gray-600">
            Bạn là nông dân, người bán, vận chuyển hoặc quản trị viên?{' '}
            <Link href="/staff-login" className="font-bold text-[#166534] hover:underline">
              Đăng nhập cổng vận hành
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
