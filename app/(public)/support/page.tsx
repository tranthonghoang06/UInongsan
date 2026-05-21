'use client';

import React from 'react';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Textarea from '@/app/components/ui/Textarea';
import { Headphones, MessageCircle, Phone, ShieldQuestion } from 'lucide-react';

const supportCards = [
  { title: 'Gọi hỗ trợ', note: 'Tư vấn đơn hàng và tài khoản', value: '1900 1234', icon: <Phone className="h-7 w-7" /> },
  { title: 'Chat nhanh', note: 'Phản hồi trong vài phút', value: 'Mở chat', icon: <MessageCircle className="h-7 w-7" /> },
  { title: 'Câu hỏi thường gặp', note: 'Hướng dẫn mua, bán, giao hàng', value: 'Xem FAQ', icon: <ShieldQuestion className="h-7 w-7" /> },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-8">
        <div className="mb-5">
          <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Hỗ trợ nhanh</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">Thiết kế cho thao tác trên điện thoại: rõ, to, dễ gửi yêu cầu.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {supportCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A]">{card.icon}</div>
              <h2 className="mt-4 text-lg font-bold text-[#163B24]">{card.title}</h2>
              <p className="mt-1 text-sm leading-5 text-gray-600">{card.note}</p>
              <p className="mt-3 text-base font-bold text-[#16A34A]">{card.value}</p>
            </article>
          ))}
        </div>

        <section className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A]">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#163B24]">Gửi yêu cầu hỗ trợ</h2>
                <p className="text-sm text-gray-600">Đội ngũ sẽ liên hệ lại sớm.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Họ và tên" placeholder="Nhập tên của bạn" />
                <Input label="Số điện thoại" placeholder="090..." />
              </div>
              <Input label="Tiêu đề" placeholder="Ví dụ: Cần hỗ trợ theo dõi đơn hàng" />
              <Textarea label="Nội dung" placeholder="Mô tả vấn đề bạn đang gặp..." />
              <Button variant="primary" size="md" className="w-full sm:w-auto">Gửi yêu cầu</Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
            <h2 className="text-xl font-bold text-[#163B24]">Câu hỏi nhanh</h2>
            <div className="mt-4 space-y-3">
              {['Làm sao đổi địa chỉ giao hàng?', 'Khi nào đơn được xác nhận?', 'Nhà nông đăng sản phẩm ở đâu?', 'Quên mật khẩu thì xử lý thế nào?'].map((question) => (
                <button key={question} className="w-full rounded-2xl bg-[#F0FDF4] px-4 py-3 text-left text-base font-semibold text-[#163B24]" type="button">
                  {question}
                </button>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
