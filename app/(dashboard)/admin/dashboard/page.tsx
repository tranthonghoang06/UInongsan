'use client';

import React from 'react';
import StatCard from '@/app/components/cards/StatCard';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockDashboardStats } from '@/app/data/mockData';
import { Users, Leaf, ShoppingCart, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = mockDashboardStats.admin;

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Dashboard Admin</h1>
        <p className="mt-1 text-gray-600">Quản lý hệ thống, người dùng và nội dung</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-5">
        <StatCard
          icon={<Users className="h-6 w-6" />}
          label="Người dùng"
          value={stats.totalUsers}
          change="+24 tuần này"
          isPositive
        />
        <StatCard
          icon={<Users className="h-6 w-6" />}
          label="Nông dân"
          value={stats.totalFarmers}
          change="+8 tuần này"
          isPositive
        />
        <StatCard
          icon={<Users className="h-6 w-6" />}
          label="Thương lái"
          value={stats.totalTraders}
          change="+3 tuần này"
          isPositive
        />
        <StatCard
          icon={<Leaf className="h-6 w-6" />}
          label="Sản phẩm"
          value={stats.totalProducts}
          change="+45 tuần này"
          isPositive
        />
        <StatCard
          icon={<ShoppingCart className="h-6 w-6" />}
          label="Đơn hàng"
          value={stats.totalOrders}
          change="+312 tuần này"
          isPositive
        />
      </div>

      {/* Revenue Card */}
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <h2 className="text-lg font-bold text-[#263238]">Doanh thu</h2>
        <p className="mt-2 text-2xl font-bold text-[#2E7D32] sm:text-3xl">
          {(stats.revenue / 1000000000).toFixed(1)}B₫
        </p>
        <p className="text-sm text-green-600">+15% so với tháng trước</p>
      </div>

      {/* Management Section */}
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Pending Reviews */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-[#263238]">Sản phẩm chờ duyệt</h3>
          <div className="mb-4 flex items-center justify-between rounded-lg bg-orange-50 p-3 sm:mb-6 sm:p-4">
            <div>
              <p className="text-xl font-bold text-orange-600 sm:text-2xl">24</p>
              <p className="text-sm text-orange-600">Chờ xử lý</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-600" />
          </div>
          <Button variant="primary" size="md" className="w-full">
            Duyệt sản phẩm
          </Button>
        </div>

        {/* Complaints */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-[#263238]">Khiếu nại</h3>
          <div className="mb-4 flex items-center justify-between rounded-lg bg-red-50 p-3 sm:mb-6 sm:p-4">
            <div>
              <p className="text-xl font-bold text-red-600 sm:text-2xl">8</p>
              <p className="text-sm text-red-600">Cần xử lý</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <Button variant="danger" size="md" className="w-full">
            Xem khiếu nại
          </Button>
        </div>
      </div>

      {/* System Status */}
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <h3 className="mb-4 text-lg font-bold text-[#263238]">Trạng thái hệ thống</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Server</span>
            <Badge variant="success" size="sm">Bình thường</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Database</span>
            <Badge variant="success" size="sm">Bình thường</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">API</span>
            <Badge variant="success" size="sm">Bình thường</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Email Service</span>
            <Badge variant="warning" size="sm">Chậm</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
