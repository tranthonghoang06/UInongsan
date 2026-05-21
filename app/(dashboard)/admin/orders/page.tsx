'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { CheckCircle, Clock, Receipt, ShoppingCart } from 'lucide-react';

const statusText = {
  'pending-confirmation': 'Chờ xác nhận',
  delivering: 'Đang giao',
  delivered: 'Đã giao',
  completed: 'Hoàn tất',
};

export default function AdminOrdersPage() {
  const total = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <DataPage
      title="Đơn hàng"
      description="Giám sát đơn hàng toàn hệ thống và tiến độ xử lý."
      stats={[
        { label: 'Tổng đơn', value: mockOrders.length, note: 'Mock hiện có', icon: <ShoppingCart className="h-5 w-5" /> },
        { label: 'Chờ xử lý', value: mockOrders.filter((order) => order.status === 'pending-confirmation').length, note: 'Cần xác nhận', icon: <Clock className="h-5 w-5" /> },
        { label: 'Hoàn tất', value: mockOrders.filter((order) => order.status === 'completed').length, note: 'Đã đóng', icon: <CheckCircle className="h-5 w-5" /> },
        { label: 'Doanh số', value: `${total.toLocaleString()}₫`, note: 'Từ đơn mock', icon: <Receipt className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số SP' },
        { key: 'amount', label: 'Giá trị' },
        { key: 'date', label: 'Ngày tạo' },
      ]}
      rows={mockOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant={order.status} size="sm">{statusText[order.status]}</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          date: order.createdDate,
        },
      }))}
    />
  );
}
