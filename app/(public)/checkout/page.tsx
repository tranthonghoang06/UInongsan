'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired, isValidEmail, isValidVietnamPhone } from '@/utils/validation';
import { mockCartItems } from '@/app/data/mockData';
import { CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const toast = useToast();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirm'>('shipping');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    district: '',
    city: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'transfer' | 'ewallet'>('cod');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200000 ? 0 : 25000;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = () => {
    if (step === 'shipping') {
      const nextErrors = {
        fullName: isRequired(formData.fullName) ? '' : 'Vui lòng nhập họ và tên.',
        phone: isValidVietnamPhone(formData.phone) ? '' : 'Số điện thoại chưa hợp lệ.',
        email: !formData.email || isValidEmail(formData.email) ? '' : 'Email chưa hợp lệ.',
        address: isRequired(formData.address) ? '' : 'Vui lòng nhập địa chỉ giao hàng.',
        district: isRequired(formData.district) ? '' : 'Vui lòng chọn quận/huyện.',
        city: isRequired(formData.city) ? '' : 'Vui lòng chọn tỉnh/thành phố.',
      };

      setErrors(nextErrors);

      if (Object.values(nextErrors).some(Boolean)) {
        toast.error({ title: 'Thiếu thông tin giao hàng', message: 'Anh bổ sung các trường được đánh dấu đỏ nhé.' });
        return;
      }

      toast.success({ title: 'Đã lưu thông tin giao hàng', message: 'Mời anh chọn phương thức thanh toán.' });
      setStep('payment');
    } else if (step === 'payment') {
      toast.success({ title: 'Đặt hàng thành công', message: 'Đơn hàng demo đã được tạo.' });
      setStep('confirm');
    }
  };

  if (step === 'confirm') {
    return (
      <div className="min-h-screen bg-[#F0FDF4]">
        <PublicHeader />
        <main className="mx-auto max-w-2xl px-4 py-8 sm:py-16">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="h-16 w-16 text-[#2E7D32]" />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-[#263238] sm:text-3xl">Đơn hàng đã được tạo</h1>
            <p className="mb-6 text-gray-600">
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xác nhận đơn hàng sớm nhất
            </p>
            <div className="mb-8 rounded-2xl border border-[#BBF7D0] bg-white p-4 text-left shadow-sm shadow-green-100 sm:p-6">
              <h3 className="mb-4 font-semibold text-[#263238]">Thông tin đơn hàng</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Mã đơn:</strong> ORD-2024-001234</p>
                <p><strong>Tên người nhận:</strong> {formData.fullName}</p>
                <p><strong>Địa chỉ:</strong> {formData.address}, {formData.district}, {formData.city}</p>
                <p><strong>Phương thức thanh toán:</strong> {paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : paymentMethod === 'transfer' ? 'Chuyển khoản' : 'Ví điện tử'}</p>
                <p className="mt-4 border-t pt-4"><strong>Tổng tiền:</strong> {total.toLocaleString()}₫</p>
              </div>
            </div>
            <Link href="/products">
              <Button variant="primary" size="md">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-8">
        <h1 className="mb-4 text-xl font-bold text-[#163B24] sm:mb-8 sm:text-3xl">Thanh toán</h1>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
          {/* Checkout Form */}
          <div className="space-y-5 lg:col-span-2 lg:space-y-6">
            {/* Progress */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {(['shipping', 'payment', 'confirm'] as const).map((s, idx) => (
                <div
                  key={s}
                  className={`rounded-2xl px-2 py-3 text-center text-xs font-bold sm:text-base ${
                    s === step
                      ? 'bg-[#16A34A] text-white'
                      : idx < (['shipping', 'payment', 'confirm'] as const).indexOf(step)
                        ? 'bg-[#DCFCE7] text-[#166534]'
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {['Giao hàng', 'Thanh toán', 'Xác nhận'][idx]}
                </div>
              ))}
            </div>

            {/* Shipping Form */}
            {step === 'shipping' && (
              <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
                <h2 className="mb-5 text-xl font-bold text-[#163B24]">Thông tin giao hàng</h2>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Họ và tên"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      error={errors.fullName}
                      required
                    />
                    <Input
                      label="Số điện thoại"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                      required
                    />
                  </div>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                  <Input
                    label="Địa chỉ"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    error={errors.address}
                    required
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select
                      label="Quận/Huyện"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      error={errors.district}
                      required
                      options={[
                        { value: 'Hoan Kiem', label: 'Hoàn Kiếm' },
                        { value: 'Dong Da', label: 'Đống Đa' },
                      ]}
                    />
                    <Select
                      label="Tỉnh/Thành phố"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      error={errors.city}
                      required
                      options={[
                        { value: 'Ha Noi', label: 'Hà Nội' },
                        { value: 'Ho Chi Minh', label: 'TP HCM' },
                      ]}
                    />
                  </div>
                  <Textarea
                    label="Ghi chú (tùy chọn)"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Giao cho người khác, vào cửa sau..."
                  />
                </div>
              </div>
            )}

            {/* Payment Form */}
            {step === 'payment' && (
              <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
                <h2 className="mb-5 text-xl font-bold text-[#163B24]">Phương thức thanh toán</h2>
                <div className="space-y-3">
                  <label className="flex min-h-16 cursor-pointer items-center rounded-2xl border-2 p-4 transition-colors" style={{ borderColor: paymentMethod === 'cod' ? '#16A34A' : '#E0E0E0', backgroundColor: paymentMethod === 'cod' ? '#DCFCE7' : 'white' }}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value as 'cod');
                        toast.info({ title: 'Đã chọn thanh toán COD' });
                      }}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-medium text-[#263238]">Thanh toán khi nhận hàng (COD)</p>
                      <p className="text-sm text-gray-600">Không cần thanh toán trước, thanh toán khi nhận hàng</p>
                    </div>
                  </label>

                  <label className="flex min-h-16 cursor-pointer items-center rounded-2xl border-2 p-4 transition-colors" style={{ borderColor: paymentMethod === 'transfer' ? '#16A34A' : '#E0E0E0', backgroundColor: paymentMethod === 'transfer' ? '#DCFCE7' : 'white' }}>
                    <input
                      type="radio"
                      name="payment"
                      value="transfer"
                      checked={paymentMethod === 'transfer'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value as 'transfer');
                        toast.info({ title: 'Đã chọn chuyển khoản ngân hàng' });
                      }}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-medium text-[#263238]">Chuyển khoản ngân hàng</p>
                      <p className="text-sm text-gray-600">Chuyển tiền trực tiếp vào tài khoản ngân hàng</p>
                    </div>
                  </label>

                  <label className="flex min-h-16 cursor-pointer items-center rounded-2xl border-2 p-4 transition-colors" style={{ borderColor: paymentMethod === 'ewallet' ? '#16A34A' : '#E0E0E0', backgroundColor: paymentMethod === 'ewallet' ? '#DCFCE7' : 'white' }}>
                    <input
                      type="radio"
                      name="payment"
                      value="ewallet"
                      checked={paymentMethod === 'ewallet'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value as 'ewallet');
                        toast.info({ title: 'Đã chọn ví điện tử' });
                      }}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-medium text-[#263238]">Ví điện tử</p>
                      <p className="text-sm text-gray-600">Thanh toán qua Momo, ZaloPay, v.v...</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Order Summary */}
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
              <h3 className="mb-4 font-semibold text-[#263238]">Tóm tắt đơn hàng</h3>
              <div className="space-y-2 text-sm">
                {mockCartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString()}₫</span>
                  </div>
                ))}
              </div>
              <div className="my-4 border-t border-[#E0E0E0] pt-4">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Vận chuyển</span>
                  <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString()}₫`}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold">
                <span>Tổng cộng</span>
                <span className="text-[#2E7D32]">{total.toLocaleString()}₫</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={handleSubmit}
              >
                {step === 'payment' ? 'Đặt hàng' : 'Tiếp tục'}
              </Button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="h-fit rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:sticky lg:top-20">
            <h3 className="mb-4 font-semibold text-[#263238]">Đơn hàng của bạn</h3>
            <div className="space-y-3 mb-6">
              {mockCartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="font-medium">{(item.price * item.quantity).toLocaleString()}₫</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E0E0E0] space-y-3 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính</span>
                <span>{subtotal.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vận chuyển</span>
                <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString()}₫`}</span>
              </div>
            </div>
            <div className="mt-4 border-t border-[#E0E0E0] pt-4 flex justify-between font-bold">
              <span>Tổng cộng</span>
              <span className="text-[#2E7D32]">{total.toLocaleString()}₫</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
