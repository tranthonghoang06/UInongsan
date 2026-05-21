'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { Clock, Navigation, Route, Truck } from 'lucide-react';

const inTransitOrders = mockOrders.filter((order) => order.status === 'delivering');

export default function DeliveryInTransitPage() {
  return (
    <DataPage
      title="Đang giao"
      description="Theo dõi đơn đang trên đường, điểm đến và trạng thái giao nhận."
      stats={[
        { label: 'Đang giao', value: inTransitOrders.length, note: 'Trên đường', icon: <Truck className="h-5 w-5" /> },
        { label: 'Tuyến hoạt động', value: 2, note: 'Cần theo dõi', icon: <Route className="h-5 w-5" /> },
        { label: 'ETA trung bình', value: '42 phút', note: 'Dự kiến', icon: <Clock className="h-5 w-5" /> },
        { label: 'Điểm giao', value: 8, note: 'Còn lại', icon: <Navigation className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số SP' },
        { key: 'amount', label: 'Thu hộ' },
        { key: 'delivery', label: 'Dự kiến' },
      ]}
      rows={inTransitOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant="delivering" size="sm">Đang giao</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          delivery: order.estimatedDelivery,
        },
      }))}
    />
  );
}
