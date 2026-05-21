'use client';

import React from 'react';
import PurchaseRequestCard from '@/app/components/cards/PurchaseRequestCard';
import DataPage from '../../_components/DataPage';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { Clock, FilePlus, Handshake, MessageSquare } from 'lucide-react';

export default function TraderRequestsPage() {
  return (
    <DataPage
      title="Yêu cầu mua"
      description="Quản lý yêu cầu mua đã gửi và phản hồi từ nhà vườn."
      actionLabel="Gửi yêu cầu"
      actionHref="/trader/requests/new"
      actionIcon={<FilePlus className="h-4 w-4" />}
      stats={[
        { label: 'Đã gửi', value: mockPurchaseRequests.length, note: 'Tổng yêu cầu', icon: <FilePlus className="h-5 w-5" /> },
        { label: 'Chờ phản hồi', value: mockPurchaseRequests.filter((request) => request.status === 'pending-response').length, note: 'Theo dõi', icon: <Clock className="h-5 w-5" /> },
        { label: 'Thương lượng', value: mockPurchaseRequests.filter((request) => request.status === 'negotiating').length, note: 'Cần cập nhật', icon: <MessageSquare className="h-5 w-5" /> },
        { label: 'Đã chấp nhận', value: mockPurchaseRequests.filter((request) => request.status === 'accepted').length, note: 'Chuyển đơn', icon: <Handshake className="h-5 w-5" /> },
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
            onRespond={() => console.log('Update request:', request.id)}
          />
        ))}
      </div>
    </DataPage>
  );
}
