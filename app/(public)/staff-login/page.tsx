'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Badge from '@/app/components/ui/Badge';
import { useToast } from '@/app/components/ui/ToastProvider';
import { hasMinLength, isValidEmail } from '@/utils/validation';
import { BarChart3, Lock, Mail, ShieldCheck, Sprout, Truck, Users } from 'lucide-react';

const roleOptions = [
  { value: 'farmer', label: 'Nông dân' },
  { value: 'trader', label: 'Thương lái' },
  { value: 'seller', label: 'Người bán' },
  { value: 'delivery', label: 'Vận chuyển' },
  { value: 'admin', label: 'Quản trị viên' },
];

const demoAccounts = [
  { role: 'farmer', label: 'Nông dân', email: 'farmer@example.com', icon: <Sprout className="h-4 w-4" /> },
  { role: 'seller', label: 'Người bán', email: 'seller@example.com', icon: <BarChart3 className="h-4 w-4" /> },
  { role: 'delivery', label: 'Vận chuyển', email: 'delivery@example.com', icon: <Truck className="h-4 w-4" /> },
  { role: 'admin', label: 'Admin', email: 'admin@example.com', icon: <ShieldCheck className="h-4 w-4" /> },
];

export default function StaffLoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [role, setRole] = useState('farmer');
  const [email, setEmail] = useState('farmer@example.com');
  const [password, setPassword] = useState('123456');
  const [errors, setErrors] = useState({ role: '', email: '', password: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      role: role ? '' : 'Vui lòng chọn vai trò.',
      email: isValidEmail(email) ? '' : 'Vui lòng nhập email hợp lệ.',
      password: hasMinLength(password, 6) ? '' : 'Mật khẩu phải có ít nhất 6 ký tự.',
    };

    setErrors(nextErrors);

    if (nextErrors.role || nextErrors.email || nextErrors.password) {
      toast.error({ title: 'Thông tin chưa hợp lệ', message: 'Vui lòng kiểm tra các trường bắt buộc.' });
      return;
    }

    document.cookie = `mock-role=${role}; path=/; max-age=86400; SameSite=Lax`;
    toast.success({ title: 'Đăng nhập thành công', message: 'Đang mở dashboard vận hành.' });
    router.push(`/${role}/dashboard`);
  };

  const handleDemoAccount = (account: (typeof demoAccounts)[number]) => {
    setRole(account.role);
    setEmail(account.email);
    setPassword('123456');
    setErrors({ role: '', email: '', password: '' });
    toast.info({ title: 'Đã điền tài khoản demo', message: `Vai trò ${account.label} đã sẵn sàng để đăng nhập.` });
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl gap-4 px-3 py-4 sm:gap-8 sm:px-4 sm:py-8 lg:grid-cols-[1fr_440px] lg:items-center">
        <section className="space-y-4 sm:space-y-6">
          <Badge variant="info">Cổng đối tác và nhân viên</Badge>
          <div>
            <h1 className="max-w-3xl text-2xl font-bold leading-tight text-[#163B24] sm:text-4xl md:text-5xl">
              Đăng nhập để vận hành quy trình từ vườn đến giao hàng
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-lg">
              Dành cho nông dân, thương lái, người bán, đơn vị vận chuyển và quản trị viên.
            </p>
          </div>
          <div className="grid gap-3 min-[520px]:grid-cols-3 sm:gap-4">
            {[
              { label: 'Vai trò vận hành', value: '5', icon: <Users className="h-5 w-5" /> },
              { label: 'Dashboard riêng', value: 'Tách biệt', icon: <BarChart3 className="h-5 w-5" /> },
              { label: 'Phân quyền', value: 'Rõ ràng', icon: <ShieldCheck className="h-5 w-5" /> },
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
            <h2 className="text-xl font-bold text-[#263238] sm:text-2xl">Đăng nhập vận hành</h2>
            <p className="mt-1 text-sm text-gray-600">Chọn vai trò để vào dashboard tương ứng.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <Select label="Vai trò" value={role} onChange={(event) => setRole(event.target.value)} options={roleOptions} error={errors.role} required />
            <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} icon={<Mail className="h-4 w-4" />} error={errors.email} required />
            <Input label="Mật khẩu" type="password" value={password} onChange={(event) => setPassword(event.target.value)} icon={<Lock className="h-4 w-4" />} error={errors.password} required />
            <Button type="submit" variant="primary" size="md" className="w-full">
              Vào dashboard vận hành
            </Button>
          </form>

          <div className="mt-6 border-t border-[#DCFCE7] pt-5">
            <p className="mb-3 text-sm font-medium text-[#263238]">Tài khoản demo</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {demoAccounts.map((account) => (
                <button
                  key={account.email}
                  type="button"
                  onClick={() => handleDemoAccount(account)}
                  className="flex min-h-14 items-center gap-2 rounded-2xl border border-[#BBF7D0] px-3 py-2 text-left text-sm transition-colors hover:border-[#16A34A] hover:bg-[#DCFCE7]"
                >
                  <span className="text-[#2E7D32]">{account.icon}</span>
                  <span>
                    <span className="block font-medium text-[#263238]">{account.label}</span>
                    <span className="text-xs text-gray-500">{account.email}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-[#F0FDF4] p-4 text-sm text-gray-600">
            Bạn là khách mua hàng?{' '}
            <Link href="/login" className="font-bold text-[#166534] hover:underline">
              Đăng nhập khách hàng
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
