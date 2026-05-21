'use client';

import React from 'react';
import DataPage from '../../_components/DataPage';
import { mockDashboardStats } from '@/app/data/mockData';
import { BarChart3, CircleDollarSign, ShoppingCart, Users } from 'lucide-react';

export default function AdminAnalyticsPage() {
  const stats = mockDashboardStats.admin;
  const bars = [
    { label: 'Người dùng mới', value: 72 },
    { label: 'Đơn hàng', value: 84 },
    { label: 'Doanh thu', value: 68 },
    { label: 'Sản phẩm duyệt', value: 91 },
  ];

  return (
    <DataPage
      title="Thống kê"
      description="Tổng quan sức khỏe hệ thống, tăng trưởng và hiệu quả vận hành."
      stats={[
        { label: 'Người dùng', value: stats.totalUsers, note: '+24 tuần này', icon: <Users className="h-5 w-5" /> },
        { label: 'Đơn hàng', value: stats.totalOrders.toLocaleString(), note: '+312 tuần này', icon: <ShoppingCart className="h-5 w-5" /> },
        { label: 'Doanh thu', value: `${(stats.revenue / 1000000000).toFixed(1)}B₫`, note: '+15% tháng này', icon: <CircleDollarSign className="h-5 w-5" /> },
        { label: 'Tăng trưởng', value: '18%', note: 'Ổn định', icon: <BarChart3 className="h-5 w-5" /> },
      ]}
    >
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <h2 className="text-lg font-bold text-[#163B24] sm:text-xl">Chỉ số vận hành</h2>
        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">
          {bars.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-[#263238]">{item.label}</span>
                <span className="text-gray-600">{item.value}%</span>
              </div>
              <div className="h-3 rounded-full bg-[#E8F5E9]">
                <div className="h-3 rounded-full bg-[#2E7D32]" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DataPage>
  );
}
