'use client';

import React from 'react';
import StatCard from '@/app/components/cards/StatCard';
import PurchaseRequestCard from '@/app/components/cards/PurchaseRequestCard';
import Button from '@/app/components/ui/Button';
import { mockDashboardStats, mockPurchaseRequests } from '@/app/data/mockData';
import { Leaf, TrendingUp, AlertCircle, Package, Plus } from 'lucide-react';

export default function TraderDashboardPage() {
  const stats = mockDashboardStats.trader;

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Dashboard Thương lái</h1>
          <p className="mt-1 text-gray-600">Tìm nguồn hàng, quản lý yêu cầu mua và đơn hàng</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          Gửi yêu cầu mua
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={<Leaf className="h-6 w-6" />}
          label="Tổng nguồn hàng"
          value={stats.totalSources}
          change="+5 tuần này"
          isPositive
        />
        <StatCard
          icon={<AlertCircle className="h-6 w-6" />}
          label="Chờ phản hồi"
          value={stats.pendingRequests}
          change="Cần xử lý"
          isPositive={false}
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6" />}
          label="Đơn mua đang giao"
          value={stats.activeOrders}
          change="Trong quá trình"
          isPositive
        />
        <StatCard
          icon={<Package className="h-6 w-6" />}
          label="Đơn hoàn tất"
          value={stats.completedOrders}
          change="+12 tháng này"
          isPositive
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {/* Purchase Requests */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#263238]">Yêu cầu mua gần đây</h2>
            <Button variant="outline" size="sm">Xem tất cả</Button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {mockPurchaseRequests.map((req) => (
              <PurchaseRequestCard
                key={req.id}
                requestId={req.id}
                productName={req.productName}
                quantity={req.quantity}
                unit={req.unit}
                proposedPrice={req.proposedPrice}
                status={req.status}
                createdDate={req.createdDate}
                onViewDetails={() => console.log('View:', req.id)}
                onRespond={() => console.log('Respond to:', req.id)}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-[#263238]">Hành động nhanh</h3>
          <div className="space-y-3">
            <Button variant="primary" size="md" className="w-full justify-start gap-2">
              <Plus className="h-4 w-4" />
              Gửi yêu cầu mua
            </Button>
            <Button variant="secondary" size="md" className="w-full justify-start gap-2">
              <Leaf className="h-4 w-4" />
              Tìm nguồn hàng
            </Button>
            <Button variant="outline" size="md" className="w-full justify-start gap-2">
              <TrendingUp className="h-4 w-4" />
              Xem báo cáo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
