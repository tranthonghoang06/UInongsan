'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import PageHeader from '@/app/components/layout/PageHeader';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired, isValidEmail, isValidVietnamPhone } from '@/utils/validation';
import { Mail, Phone, UserRound } from 'lucide-react';

export default function CustomerProfilePage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: 'Tạ Thị Khách Hàng',
    phone: '0900111222',
    email: 'customer@example.com',
    region: 'Hà Nội',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const handleSave = () => {
    const nextErrors = {
      name: isRequired(formData.name) ? '' : 'Vui lòng nhập họ và tên.',
      phone: isValidVietnamPhone(formData.phone) ? '' : 'Số điện thoại chưa hợp lệ.',
      email: isValidEmail(formData.email) ? '' : 'Email chưa hợp lệ.',
      region: isRequired(formData.region) ? '' : 'Vui lòng nhập khu vực.',
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error({ title: 'Hồ sơ chưa hợp lệ', message: 'Vui lòng kiểm tra lại thông tin liên hệ.' });
      return;
    }

    toast.success({ title: 'Đã lưu hồ sơ', message: 'Thông tin cá nhân đã được cập nhật.' });
  };

  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Hồ sơ" title="Thông tin cá nhân" description="Cập nhật thông tin liên hệ phục vụ mua hàng và giao nhận." />
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Họ và tên" value={formData.name} onChange={(event) => updateField('name', event.target.value)} icon={<UserRound className="h-4 w-4" />} error={errors.name} required />
          <Input label="Số điện thoại" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} icon={<Phone className="h-4 w-4" />} error={errors.phone} required />
          <Input label="Email" type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} icon={<Mail className="h-4 w-4" />} error={errors.email} required />
          <Input label="Khu vực" value={formData.region} onChange={(event) => updateField('region', event.target.value)} error={errors.region} required />
        </div>
        <Button type="button" variant="primary" size="md" className="mt-5 w-full sm:w-auto" onClick={handleSave}>
          Lưu hồ sơ
        </Button>
      </section>
    </main>
  );
}
