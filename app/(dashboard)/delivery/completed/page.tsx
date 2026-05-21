'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { CheckCircle2, ClipboardCheck, PackageCheck, ReceiptText } from 'lucide-react';

const completedOrders = mockOrders.filter((order) => order.status === 'delivered' || order.status === 'completed');

export default function DeliveryCompletedPage() {
  return (
    <DataPage
      title="Hoàn tất"
      description="Các đơn đã giao thành công và sẵn sàng đối soát."
      stats={[
        { label: 'Đã giao', value: completedOrders.length, note: 'Thành công', icon: <PackageCheck className="h-5 w-5" /> },
        { label: 'Tỷ lệ hoàn tất', value: '98%', note: 'Trong tuần', icon: <CheckCircle2 className="h-5 w-5" /> },
        { label: 'Biên bản', value: completedOrders.length, note: 'Đã lưu', icon: <ClipboardCheck className="h-5 w-5" /> },
        { label: 'Đối soát', value: 'Sẵn sàng', note: 'Cuối ngày', icon: <ReceiptText className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số SP' },
        { key: 'amount', label: 'Giá trị' },
        { key: 'delivery', label: 'Ngày giao' },
      ]}
      rows={completedOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant={order.status} size="sm">{order.status === 'completed' ? 'Hoàn tất' : 'Đã giao'}</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          delivery: order.estimatedDelivery,
        },
      }))}
    />
  );
}
