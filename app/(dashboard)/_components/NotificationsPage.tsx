'use client';

import React from 'react';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { Bell, CheckCircle, Clock, PackageCheck, Sprout } from 'lucide-react';

interface NotificationsPageProps {
  roleLabel: string;
}

const notifications = [
  {
    title: 'Có yêu cầu thu mua mới',
    message: 'Thương lái đề xuất mua 100kg cà chua, cần phản hồi trong hôm nay.',
    time: '5 phút trước',
    status: 'Mới',
    icon: <Sprout className="h-6 w-6" />,
  },
  {
    title: 'Đơn hàng đang được giao',
    message: 'Đơn ORD002 đã rời kho và dự kiến đến nơi trong chiều nay.',
    time: '1 giờ trước',
    status: 'Đang xử lý',
    icon: <PackageCheck className="h-6 w-6" />,
  },
  {
    title: 'Nhắc lịch ghi nhật ký',
    message: 'Lô LOT001 chưa có nhật ký tưới nước hôm nay.',
    time: 'Sáng nay',
    status: 'Cần xem',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: 'Hồ sơ đã cập nhật',
    message: 'Thông tin liên hệ của bạn đã được lưu thành công.',
    time: 'Hôm qua',
    status: 'Xong',
    icon: <CheckCircle className="h-6 w-6" />,
  },
];

export default function NotificationsPage({ roleLabel }: NotificationsPageProps) {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">Thông báo</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:text-base">Các cập nhật quan trọng cho tài khoản {roleLabel.toLowerCase()}.</p>
        </div>
        <Button variant="outline" size="md" className="w-full sm:w-auto">
          <Bell className="h-5 w-5" />
          Đánh dấu đã đọc
        </Button>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        {notifications.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A] sm:h-14 sm:w-14 sm:rounded-2xl">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-base font-bold leading-tight text-[#163B24] sm:text-lg">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">{item.message}</p>
                  </div>
                  <Badge variant={item.status === 'Mới' ? 'success' : item.status === 'Cần xem' ? 'warning' : 'info'} size="sm">
                    {item.status}
                  </Badge>
                </div>
                <p className="mt-2.5 text-xs font-semibold text-[#16A34A] sm:mt-3 sm:text-sm">{item.time}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
