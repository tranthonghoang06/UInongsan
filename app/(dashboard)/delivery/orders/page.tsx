'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockOrders } from '@/app/data/mockData';
import { ClipboardList, MapPin, PackagePlus, Truck } from 'lucide-react';

const pickupOrders = mockOrders.filter((order) => order.status === 'pending-confirmation');

export default function DeliveryOrdersPage() {
  return (
    <DataPage
      title="Đơn cần giao"
      description="Danh sách đơn mới cần nhận hàng và phân tuyến giao."
      stats={[
        { label: 'Chờ lấy hàng', value: pickupOrders.length, note: 'Cần điều phối', icon: <PackagePlus className="h-5 w-5" /> },
        { label: 'Tuyến hôm nay', value: 3, note: 'Nội thành', icon: <MapPin className="h-5 w-5" /> },
        { label: 'Xe khả dụng', value: 6, note: 'Sẵn sàng', icon: <Truck className="h-5 w-5" /> },
        { label: 'Phiếu giao', value: mockOrders.length, note: 'Tất cả', icon: <ClipboardList className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã đơn' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'items', label: 'Số SP' },
        { key: 'amount', label: 'Thu hộ' },
        { key: 'delivery', label: 'Hẹn giao' },
      ]}
      rows={pickupOrders.map((order) => ({
        id: order.id,
        cells: {
          id: <span className="font-semibold">#{order.id}</span>,
          status: <Badge variant="warning" size="sm">Chờ lấy hàng</Badge>,
          items: `${order.itemCount} sản phẩm`,
          amount: `${order.totalAmount.toLocaleString()}₫`,
          delivery: order.estimatedDelivery,
        },
      }))}
    />
  );
}
