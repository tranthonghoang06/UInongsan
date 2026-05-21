'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { PackageCheck, ShoppingBag, Truck } from 'lucide-react';

const statusText = {
  'pending-confirmation': 'Chờ xác nhận',
  delivering: 'Đang giao',
  delivered: 'Đã giao',
  completed: 'Hoàn tất',
};

export default function TraderOrdersPage() {
  return (
    <DataPage
      title="Đơn mua sỉ"
      description="Theo dõi đơn mua từ lúc xác nhận đến khi hoàn tất giao nhận."
      stats={[
        { label: 'Tổng đơn', value: mockOrders.length, note: 'Đang theo dõi', icon: <ShoppingBag className="h-5 w-5" /> },
        { label: 'Đang giao', value: mockOrders.filter((order) => order.status === 'delivering').length, note: 'Trên đường', icon: <Truck className="h-5 w-5" /> },
        { label: 'Đã nhận', value: mockOrders.filter((order) => order.status === 'delivered' || order.status === 'completed').length, note: 'Hoàn tất', icon: <PackageCheck className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số lượng' },
        { key: 'amount', label: 'Giá trị' },
        { key: 'delivery', label: 'Dự kiến giao' },
      ]}
      rows={mockOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant={order.status} size="sm">{statusText[order.status]}</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          delivery: order.estimatedDelivery,
        },
      }))}
    />
  );
}
