'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { CircleDollarSign, FileClock, History, Repeat } from 'lucide-react';

export default function TraderHistoryPage() {
  const total = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <DataPage
      title="Lịch sử giao dịch"
      description="Tra cứu các giao dịch mua sỉ, giá trị đơn và trạng thái đối soát."
      stats={[
        { label: 'Giao dịch', value: mockOrders.length, note: 'Tất cả thời gian', icon: <History className="h-5 w-5" /> },
        { label: 'Tổng giá trị', value: `${total.toLocaleString()}₫`, note: 'Đã ghi nhận', icon: <CircleDollarSign className="h-5 w-5" /> },
        { label: 'Tái đặt hàng', value: '36%', note: 'Nguồn quen', icon: <Repeat className="h-5 w-5" /> },
        { label: 'Đối soát', value: 'Đúng hạn', note: 'Tháng này', icon: <FileClock className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Giao dịch' },
        { key: 'date', label: 'Ngày tạo' },
        { key: 'amount', label: 'Giá trị' },
        { key: 'status', label: 'Đối soát' },
      ]}
      rows={mockOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          date: order.createdDate,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          status: <Badge variant={order.status === 'completed' ? 'success' : 'info'} size="sm">{order.status === 'completed' ? 'Hoàn tất' : 'Đang ghi nhận'}</Badge>,
        },
      }))}
    />
  );
}
