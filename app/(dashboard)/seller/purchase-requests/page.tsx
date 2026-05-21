'use client';

import React from 'react';
import PurchaseRequestCard from '@/app/components/cards/PurchaseRequestCard';
import DataPage from '../../_components/DataPage';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { FileText, Handshake, MessageSquare, Plus } from 'lucide-react';

export default function SellerPurchaseRequestsPage() {
  return (
    <DataPage
      title="Yêu cầu thu mua"
      description="Quản lý các đề nghị thu mua đang gửi tới quầy bán và nguồn hàng."
      actionLabel="Tạo yêu cầu"
      actionHref="/seller/purchase-requests/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Tổng yêu cầu', value: mockPurchaseRequests.length, note: 'Đang mở', icon: <FileText className="h-5 w-5" /> },
        { label: 'Thương lượng', value: mockPurchaseRequests.filter((request) => request.status === 'negotiating').length, note: 'Cần phản hồi', icon: <MessageSquare className="h-5 w-5" /> },
        { label: 'Đã chấp nhận', value: mockPurchaseRequests.filter((request) => request.status === 'accepted').length, note: 'Chuẩn bị đơn', icon: <Handshake className="h-5 w-5" /> },
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
