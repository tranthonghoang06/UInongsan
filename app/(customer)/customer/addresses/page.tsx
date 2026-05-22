'use client';

import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import PageHeader from '@/app/components/layout/PageHeader';
import Badge from '@/app/components/ui/Badge';
import { useToast } from '@/app/components/ui/ToastProvider';
import { mockCustomerAddresses } from '@/app/data/mockData';
import { isRequired, isValidVietnamPhone } from '@/utils/validation';
import { MapPin, Phone, UserRound } from 'lucide-react';

export default function CustomerAddressesPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    receiverName: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const handleSave = () => {
    const nextErrors = {
      receiverName: isRequired(formData.receiverName) ? '' : 'Vui lòng nhập người nhận.',
      phone: isValidVietnamPhone(formData.phone) ? '' : 'Số điện thoại chưa hợp lệ.',
      address: isRequired(formData.address) ? '' : 'Vui lòng nhập địa chỉ giao hàng.',
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error({ title: 'Địa chỉ chưa hợp lệ', message: 'Vui lòng kiểm tra các trường bắt buộc.' });
      return;
    }

    toast.success({ title: 'Đã lưu địa chỉ', message: `${formData.receiverName} đã được thêm vào danh sách giao hàng.` });
    setFormData({ receiverName: '', phone: '', address: '' });
  };

  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Giao hàng" title="Địa chỉ của tôi" description="Quản lý địa chỉ giao hàng mặc định và địa chỉ phụ." />
      <section className="grid gap-3 lg:grid-cols-2">
        {mockCustomerAddresses.map((address) => (
          <article key={address.id} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-[#163B24]">{address.receiverName}</p>
                <p className="mt-1 flex gap-2 text-sm text-gray-600"><Phone className="h-4 w-4 text-[#16A34A]" /> {address.phone}</p>
                <p className="mt-1 flex gap-2 text-sm text-gray-600"><MapPin className="h-4 w-4 text-[#16A34A]" /> {address.address}</p>
              </div>
              {address.isDefault && <Badge variant="success" size="sm">Mặc định</Badge>}
            </div>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <h2 className="mb-4 font-bold text-[#163B24]">Thêm địa chỉ mới</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Người nhận" value={formData.receiverName} onChange={(event) => updateField('receiverName', event.target.value)} icon={<UserRound className="h-4 w-4" />} error={errors.receiverName} required />
          <Input label="Số điện thoại" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} icon={<Phone className="h-4 w-4" />} error={errors.phone} required />
          <Input label="Địa chỉ" value={formData.address} onChange={(event) => updateField('address', event.target.value)} className="sm:col-span-2" icon={<MapPin className="h-4 w-4" />} error={errors.address} required />
        </div>
        <Button type="button" variant="primary" size="md" className="mt-5 w-full sm:w-auto" onClick={handleSave}>
          Lưu địa chỉ
        </Button>
      </section>
    </main>
  );
}
