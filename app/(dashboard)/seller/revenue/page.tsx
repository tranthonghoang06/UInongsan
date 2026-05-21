'use client';

import React from 'react';
import DataPage from '../../_components/DataPage';
import { mockDashboardStats, mockOrders } from '@/app/data/mockData';
import { BarChart3, CircleDollarSign, TrendingUp, Wallet } from 'lucide-react';

export default function SellerRevenuePage() {
  const stats = mockDashboardStats.seller;
  const paidOrders = mockOrders.filter((order) => order.status === 'completed' || order.status === 'delivered');

  return (
    <DataPage
      title="Doanh thu"
      description="Tổng quan doanh thu, đơn đã hoàn tất và hiệu suất bán hàng."
      stats={[
        { label: 'Doanh thu tháng', value: `${(stats.revenue / 1000000).toFixed(1)}M₫`, note: '+20% so với tháng trước', icon: <CircleDollarSign className="h-5 w-5" /> },
        { label: 'Đơn đã ghi nhận', value: paidOrders.length, note: 'Đã giao/hoàn tất', icon: <Wallet className="h-5 w-5" /> },
        { label: 'Giá trị TB', value: `${Math.round(stats.revenue / Math.max(stats.newOrders, 1)).toLocaleString()}₫`, note: 'Mỗi đơn mới', icon: <BarChart3 className="h-5 w-5" /> },
        { label: 'Tăng trưởng', value: '20%', note: 'Tích cực', icon: <TrendingUp className="h-5 w-5" /> },
      ]}
    >
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {['Rau quả', 'Hoa quả', 'Combo tuần'].map((label, index) => (
          <div key={label} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="mt-2 text-xl font-bold text-[#263238] sm:text-2xl">{(4.2 + index * 1.6).toFixed(1)}M₫</p>
            <div className="mt-4 h-2 rounded-full bg-[#E8F5E9]">
              <div className="h-2 rounded-full bg-[#2E7D32]" style={{ width: `${62 + index * 12}%` }} />
            </div>
          </div>
        ))}
      </div>
    </DataPage>
  );
}
