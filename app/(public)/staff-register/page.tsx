'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';
import Badge from '@/app/components/ui/Badge';
import { Building2, CheckCircle2, Lock, Mail, MapPin, Phone, UserRound } from 'lucide-react';

const roleOptions = [
  { value: 'farmer', label: 'Nông dân' },
  { value: 'trader', label: 'Thương lái' },
  { value: 'seller', label: 'Người bán' },
  { value: 'delivery', label: 'Đơn vị vận chuyển' },
];

export default function StaffRegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState('farmer');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:gap-8 sm:px-4 sm:py-8 lg:grid-cols-[420px_1fr]">
        <aside className="space-y-4 rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:space-y-5 sm:p-6 lg:sticky lg:top-24 lg:h-fit">
          <Badge variant="info">Đăng ký đối tác</Badge>
          <div>
            <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Tham gia vận hành hệ sinh thái nông sản</h1>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Dành cho nhà vườn, thương lái, người bán và đơn vị vận chuyển cần dashboard nghiệp vụ riêng.
            </p>
          </div>
          <div className="space-y-3">
            {['Dashboard riêng theo vai trò', 'Theo dõi đơn hàng và tồn kho', 'Kết nối nguồn hàng và nhà vườn'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#263238]">
                <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#DCFCE7] p-4 text-sm font-medium text-[#166534]">
            Đã có tài khoản vận hành?{' '}
            <Link href="/staff-login" className="font-bold hover:underline">
              Đăng nhập
            </Link>
          </div>
        </aside>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#263238] sm:text-2xl">Thông tin đối tác</h2>
            <p className="mt-1 text-sm text-gray-600">Các trường này dùng để dựng hồ sơ demo và điều hướng vào dashboard.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Họ và tên" placeholder="Nguyễn Văn A" icon={<UserRound className="h-4 w-4" />} required />
              <Input label="Số điện thoại" placeholder="0900000000" icon={<Phone className="h-4 w-4" />} required />
              <Input label="Email" type="email" placeholder="email@example.com" icon={<Mail className="h-4 w-4" />} required />
              <Select label="Vai trò vận hành" value={role} onChange={(event) => setRole(event.target.value)} options={roleOptions} required />
              <Input label="Tên đơn vị / nhà vườn" placeholder="Vườn Xanh 1" icon={<Building2 className="h-4 w-4" />} />
              <Input label="Khu vực hoạt động" placeholder="Hà Nội" icon={<MapPin className="h-4 w-4" />} />
              <Input label="Mật khẩu" type="password" icon={<Lock className="h-4 w-4" />} required />
              <Input label="Nhập lại mật khẩu" type="password" icon={<Lock className="h-4 w-4" />} required />
            </div>

            <Textarea label="Mô tả ngắn" placeholder="Ví dụ: Chuyên rau hữu cơ, có 3ha canh tác tại ngoại thành Hà Nội..." rows={4} />

            <Button type="submit" variant="primary" size="md" className="w-full">
              Tạo tài khoản vận hành
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
