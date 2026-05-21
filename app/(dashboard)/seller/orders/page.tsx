'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { CheckCircle, Clock, PackageCheck, ShoppingCart } from 'lucide-react';

const statusText = {
  'pending-confirmation': 'Chờ xác nhận',
  delivering: 'Đang giao',
  delivered: 'Đã giao',
  completed: 'Hoàn tất',
};

export default function SellerOrdersPage() {
  return (
    <DataPage
      title="Đơn hàng"
      description="Theo dõi đơn mới, tiến độ giao hàng và lịch sử hoàn tất."
      stats={[
        { label: 'Tổng đơn', value: mockOrders.length, note: 'Trong hệ thống', icon: <ShoppingCart className="h-5 w-5" /> },
        { label: 'Chờ xác nhận', value: mockOrders.filter((order) => order.status === 'pending-confirmation').length, note: 'Cần xử lý', icon: <Clock className="h-5 w-5" /> },
        { label: 'Đang giao', value: mockOrders.filter((order) => order.status === 'delivering').length, note: 'Theo dõi vận chuyển', icon: <PackageCheck className="h-5 w-5" /> },
        { label: 'Hoàn tất', value: mockOrders.filter((order) => order.status === 'completed').length, note: 'Đã đối soát', icon: <CheckCircle className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số SP' },
        { key: 'amount', label: 'Tổng tiền' },
        { key: 'date', label: 'Ngày đặt' },
        { key: 'delivery', label: 'Dự kiến giao' },
      ]}
      rows={mockOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant={order.status} size="sm">{statusText[order.status]}</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          date: order.createdDate,
          delivery: order.estimatedDelivery,
        },
      }))}
    />
  );
}
