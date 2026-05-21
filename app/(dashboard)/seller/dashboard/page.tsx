'use client';

import React from 'react';
import StatCard from '@/app/components/cards/StatCard';
import OrderCard from '@/app/components/cards/OrderCard';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockDashboardStats, mockOrders } from '@/app/data/mockData';
import { Leaf, ShoppingCart, TrendingUp, Package, Plus } from 'lucide-react';

export default function SellerDashboardPage() {
  const stats = mockDashboardStats.seller;

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Dashboard Người bán</h1>
          <p className="mt-1 text-gray-600">Quản lý sản phẩm, đơn hàng và doanh thu</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm sản phẩm
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={<Leaf className="h-6 w-6" />}
          label="Tổng sản phẩm"
          value={stats.totalProducts}
          change="+8 tháng này"
          isPositive
        />
        <StatCard
          icon={<Package className="h-6 w-6" />}
          label="Tồn kho"
          value={stats.inStock}
          change="Đơn vị"
          isPositive
        />
        <StatCard
          icon={<ShoppingCart className="h-6 w-6" />}
          label="Đơn hàng mới"
          value={stats.newOrders}
          change="Cần xử lý"
          isPositive={false}
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6" />}
          label="Doanh thu"
          value={`${(stats.revenue / 1000000).toFixed(1)}M₫`}
          change="+20% tháng này"
          isPositive
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {/* Recent Orders */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#263238]">Đơn hàng gần đây</h2>
            <Button variant="outline" size="sm">Xem tất cả</Button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {mockOrders.map((order) => (
              <OrderCard
                key={order.id}
                orderId={order.id}
                status={order.status}
                totalAmount={order.totalAmount}
                itemCount={order.itemCount}
                createdDate={order.createdDate}
                estimatedDelivery={order.estimatedDelivery}
                onViewDetails={() => console.log('View:', order.id)}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-5 lg:space-y-6">
          {/* Overview Card */}
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-[#263238]">Tổng quan</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Hoạt động</span>
                <Badge variant="success" size="sm">Bình thường</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Đánh giá</span>
                <span className="font-medium">4.8★</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tỷ lệ hủy</span>
                <span className="font-medium text-green-600">0.5%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-[#263238]">Hành động nhanh</h3>
            <div className="space-y-3">
              <Button variant="primary" size="md" className="w-full justify-start gap-2">
                <Plus className="h-4 w-4" />
                Thêm sản phẩm
              </Button>
              <Button variant="secondary" size="md" className="w-full justify-start gap-2">
                <ShoppingCart className="h-4 w-4" />
                Quản lý đơn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
