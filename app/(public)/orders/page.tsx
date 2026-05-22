'use client';

import React, { useState } from 'react';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Badge from '@/app/components/ui/Badge';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired } from '@/utils/validation';
import { CheckCircle, ClipboardList, Package, Truck } from 'lucide-react';

const steps = [
  { label: 'Đã đặt', note: 'Đơn hàng đã được tạo', icon: <ClipboardList className="h-6 w-6" /> },
  { label: 'Đã xác nhận', note: 'Nhà bán chuẩn bị hàng', icon: <CheckCircle className="h-6 w-6" /> },
  { label: 'Đang giao', note: 'Tài xế đang trên đường', icon: <Truck className="h-6 w-6" /> },
  { label: 'Hoàn tất', note: 'Khách đã nhận hàng', icon: <Package className="h-6 w-6" /> },
];

export default function OrdersPage() {
  const toast = useToast();
  const [orderCode, setOrderCode] = useState('ORD002');
  const [error, setError] = useState('');

  const handleLookup = () => {
    const nextError = isRequired(orderCode) ? '' : 'Vui lòng nhập mã đơn hàng.';
    setError(nextError);

    if (nextError) {
      toast.error({ title: 'Chưa có mã đơn hàng', message: 'Anh nhập mã đơn để tra cứu trạng thái nhé.' });
      return;
    }

    toast.success({ title: 'Đã tra cứu đơn hàng', message: `Đang hiển thị trạng thái của ${orderCode}.` });
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-4xl px-3 py-4 sm:px-4 sm:py-8">
        <div className="mb-5">
          <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Theo dõi đơn hàng</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">Nhập mã đơn để xem trạng thái giao hàng nhanh trên điện thoại.</p>
        </div>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <Input label="Mã đơn hàng" value={orderCode} onChange={(event) => setOrderCode(event.target.value)} placeholder="Ví dụ: ORD002" error={error} />
            <Button variant="primary" size="md" className="self-end" onClick={handleLookup}>Tra cứu</Button>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:mt-5 sm:p-6">
          <div className="flex flex-col gap-3 border-b border-[#DCFCE7] pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#16A34A]">Mã đơn {orderCode || 'ORD002'}</p>
              <h2 className="mt-1 text-xl font-bold text-[#163B24]">Rau củ tươi giao trong ngày</h2>
            </div>
            <Badge variant="info" size="md">Đang giao</Badge>
          </div>

          <div className="mt-5 space-y-4">
            {steps.map((step, index) => {
              const active = index <= 2;
              return (
                <div key={step.label} className="flex gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${active ? 'bg-[#16A34A] text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {step.icon}
                  </div>
                  <div className="min-w-0 flex-1 border-b border-[#DCFCE7] pb-4 last:border-0">
                    <h3 className="text-lg font-bold text-[#163B24]">{step.label}</h3>
                    <p className="mt-1 text-base text-gray-600">{step.note}</p>
                    {active && <p className="mt-2 text-sm font-semibold text-[#16A34A]">{index === 2 ? 'Dự kiến 16:30 hôm nay' : 'Đã cập nhật'}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
