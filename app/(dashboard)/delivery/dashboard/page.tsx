'use client';

import React from 'react';
import StatCard from '@/app/components/cards/StatCard';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockOrders } from '@/app/data/mockData';
import { Truck, CheckCircle, TrendingUp, AlertCircle, Plus } from 'lucide-react';

export default function DeliveryDashboardPage() {
  const pendingOrders = mockOrders.filter(o => o.status === 'pending-confirmation').length;
  const inTransit = mockOrders.filter(o => o.status === 'delivering').length;
  const completed = mockOrders.filter(o => o.status === 'delivered' || o.status === 'completed').length;

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Dashboard Vận chuyển</h1>
          <p className="mt-1 text-gray-600">Quản lý đơn hàng giao hàng</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" />
          Cập nhật trạng thái
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={<AlertCircle className="h-6 w-6" />}
          label="Chờ lấy hàng"
          value={pendingOrders}
          change="Cần xử lý"
          isPositive={false}
        />
        <StatCard
          icon={<Truck className="h-6 w-6" />}
          label="Đang giao"
          value={inTransit}
          change="Trên đường"
          isPositive
        />
        <StatCard
          icon={<CheckCircle className="h-6 w-6" />}
          label="Giao thành công"
          value={completed}
          change="+15 hôm nay"
          isPositive
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6" />}
          label="Tỷ lệ hoàn thành"
          value="98%"
          change="Tốt"
          isPositive
        />
      </div>

      {/* Orders Table */}
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#263238]">Đơn hàng chờ giao</h2>
          <Button variant="outline" size="sm">Lọc</Button>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {mockOrders.filter(o => o.status === 'delivering' || o.status === 'pending-confirmation').map((order) => (
            <div key={order.id} className="flex flex-col gap-3 rounded-2xl border border-[#BBF7D0] p-3 hover:bg-[#F0FDF4] sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <p className="font-semibold text-[#263238]">#{order.id}</p>
                  <Badge variant={order.status === 'delivering' ? 'info' : 'warning'} size="sm">
                    {order.status === 'delivering' ? 'Đang giao' : 'Chờ xác nhận'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  {order.itemCount} sản phẩm • {order.totalAmount.toLocaleString()}₫
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">Cập nhật</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
