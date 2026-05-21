'use client';

import React from 'react';
import PublicHeader from '@/app/components/layout/PublicHeader';
import VideoCard from '@/app/components/cards/VideoCard';
import Badge from '@/app/components/ui/Badge';
import { mockVideos } from '@/app/data/mockData';
import { BookOpen, Calendar, Leaf } from 'lucide-react';

const guideArticles = [
  {
    title: 'Chuẩn bị đất trước mùa vụ',
    category: 'Canh tác',
    readTime: '8 phút',
    description: 'Các bước kiểm tra độ ẩm, pH và bổ sung hữu cơ trước khi xuống giống.',
  },
  {
    title: 'Bảo quản rau quả sau thu hoạch',
    category: 'Sau thu hoạch',
    readTime: '6 phút',
    description: 'Quy trình phân loại, làm mát và đóng gói để giữ độ tươi khi vận chuyển.',
  },
  {
    title: 'Nhận diện sâu bệnh thường gặp',
    category: 'Bảo vệ cây',
    readTime: '10 phút',
    description: 'Dấu hiệu sớm trên lá, thân, quả và cách ghi nhật ký xử lý an toàn.',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-7xl space-y-4 px-3 py-4 sm:space-y-8 sm:px-4 sm:py-8">
        <div>
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Hướng dẫn canh tác</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">Tài liệu ngắn gọn giúp nông dân và người mua hiểu rõ quy trình sản xuất.</p>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {guideArticles.map((guide) => (
            <article key={guide.title} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="info" size="sm">{guide.category}</Badge>
                <span className="text-xs text-gray-500">{guide.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-[#163B24]">{guide.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{guide.description}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#2E7D32]">
                <BookOpen className="h-4 w-4" />
                Đọc hướng dẫn
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-[#2E7D32]" />
            <h2 className="text-xl font-bold text-[#263238]">Video thực hành</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} {...video} onPlay={() => console.log('Play video:', video.id)} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#263238]">Lịch nội dung sắp tới</h2>
              <p className="mt-1 text-sm text-gray-600">Cập nhật kiến thức theo mùa vụ và phản hồi từ nhà vườn.</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#E8F5E9] px-4 py-3 text-sm font-medium text-[#2E7D32]">
              <Calendar className="h-4 w-4" />
              Thứ Sáu hàng tuần
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
