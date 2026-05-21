'use client';

import React from 'react';
import PurchaseRequestCard from '@/app/components/cards/PurchaseRequestCard';
import DataPage from '../../_components/DataPage';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { CheckCircle, Clock, HandCoins, MessageSquare, Plus } from 'lucide-react';

export default function FarmerPurchaseRequestsPage() {
  return (
    <DataPage
      title="Yêu cầu mua"
      description="Theo dõi các đề nghị thu mua từ thương lái và trạng thái thương lượng."
      actionLabel="Tạo yêu cầu bán"
      actionHref="/farmer/purchase-requests/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Tổng yêu cầu', value: mockPurchaseRequests.length, note: 'Đang theo dõi', icon: <HandCoins className="h-5 w-5" /> },
        { label: 'Chờ phản hồi', value: mockPurchaseRequests.filter((request) => request.status === 'pending-response').length, note: 'Cần xử lý', icon: <Clock className="h-5 w-5" /> },
        { label: 'Đang thương lượng', value: mockPurchaseRequests.filter((request) => request.status === 'negotiating').length, note: 'Có cập nhật', icon: <MessageSquare className="h-5 w-5" /> },
        { label: 'Đã chấp nhận', value: mockPurchaseRequests.filter((request) => request.status === 'accepted').length, note: 'Sẵn sàng giao', icon: <CheckCircle className="h-5 w-5" /> },
      ]}
    >
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {mockPurchaseRequests.map((request) => (
          <PurchaseRequestCard
            key={request.id}
            requestId={request.id}
            productName={request.productName}
            quantity={request.quantity}
            unit={request.unit}
            proposedPrice={request.proposedPrice}
            status={request.status}
            createdDate={request.createdDate}
            onViewDetails={() => console.log('View request:', request.id)}
            onRespond={() => console.log('Respond request:', request.id)}
          />
        ))}
      </div>
    </DataPage>
  );
}
