'use client';

import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired, isValidEmail, isValidVietnamPhone } from '@/utils/validation';
import { Camera, ShieldCheck, Smartphone, User } from 'lucide-react';

interface ProfilePageProps {
  roleLabel: string;
}

export default function ProfilePage({ roleLabel }: ProfilePageProps) {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: 'Nguyễn Văn A',
    phone: '0901234567',
    email: 'nongdan@example.com',
    address: 'Xã Minh Châu, huyện Ba Vì, Hà Nội',
    province: 'Hà Nội',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (key: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: '' }));
  };

  const handleSave = () => {
    const nextErrors = {
      name: isRequired(formData.name) ? '' : 'Vui lòng nhập họ và tên.',
      phone: isValidVietnamPhone(formData.phone) ? '' : 'Số điện thoại chưa hợp lệ.',
      email: isValidEmail(formData.email) ? '' : 'Email chưa hợp lệ.',
      address: isRequired(formData.address) ? '' : 'Vui lòng nhập địa chỉ.',
      province: isRequired(formData.province) ? '' : 'Vui lòng chọn tỉnh/thành phố.',
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error({ title: 'Hồ sơ chưa hợp lệ', message: 'Vui lòng kiểm tra các trường bắt buộc.' });
      return;
    }

    toast.success({ title: 'Đã lưu thay đổi', message: 'Thông tin tài khoản đã được cập nhật.' });
  };

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Hồ sơ tài khoản</h1>
        <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:text-base">Cập nhật thông tin liên hệ để giao dịch và nhận thông báo nhanh hơn.</p>
      </div>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534] sm:h-24 sm:w-24 sm:rounded-3xl">
                <User className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
              <button className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#16A34A] text-white shadow-sm sm:h-11 sm:w-11 sm:rounded-2xl" type="button" onClick={() => toast.info({ title: 'Đã chọn cập nhật ảnh đại diện' })}>
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <h2 className="mt-3 text-lg font-bold text-[#163B24] sm:mt-4 sm:text-xl">{formData.name}</h2>
            <p className="mt-1 text-sm font-semibold text-[#16A34A]">{roleLabel}</p>
          </div>

          <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
            {[
              { icon: <ShieldCheck className="h-5 w-5" />, label: 'Đã xác minh tài khoản' },
              { icon: <Smartphone className="h-5 w-5" />, label: 'Ưu tiên thông báo qua điện thoại' },
            ].map((item) => (
              <div key={item.label} className="flex min-h-11 items-center gap-2.5 rounded-xl bg-[#F0FDF4] px-3 text-xs font-semibold text-[#163B24] sm:min-h-12 sm:gap-3 sm:rounded-2xl sm:px-4 sm:text-sm">
                <span className="text-[#16A34A]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-bold text-[#163B24] sm:mb-5 sm:text-xl">Thông tin cá nhân</h2>
          <div className="space-y-3.5 sm:space-y-4">
            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              <Input label="Họ và tên" value={formData.name} onChange={(event) => updateField('name', event.target.value)} error={errors.name} required />
              <Input label="Số điện thoại" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} error={errors.phone} required />
            </div>
            <Input label="Email" type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} error={errors.email} required />
            <Input label="Địa chỉ" value={formData.address} onChange={(event) => updateField('address', event.target.value)} error={errors.address} required />
            <Select
              label="Tỉnh/Thành phố"
              value={formData.province}
              onChange={(event) => updateField('province', event.target.value)}
              error={errors.province}
              required
              options={[
                { value: 'Hà Nội', label: 'Hà Nội' },
                { value: 'Đà Lạt', label: 'Đà Lạt' },
                { value: 'Cần Thơ', label: 'Cần Thơ' },
                { value: 'TP Hồ Chí Minh', label: 'TP Hồ Chí Minh' },
              ]}
            />
            <div className="grid gap-2.5 pt-1 sm:grid-cols-2 sm:gap-3 sm:pt-2">
              <Button type="button" variant="primary" size="md" onClick={handleSave}>Lưu thay đổi</Button>
              <Button type="button" variant="outline" size="md" onClick={() => toast.info({ title: 'Đang mở đổi mật khẩu' })}>Đổi mật khẩu</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
