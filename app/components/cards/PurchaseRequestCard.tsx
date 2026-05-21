import React from 'react';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import { Package } from 'lucide-react';

interface PurchaseRequestCardProps {
  requestId: string;
  productName: string;
  quantity: number;
  unit: string;
  proposedPrice: number;
  status: 'new' | 'pending-response' | 'negotiating' | 'accepted' | 'rejected' | 'cancelled';
  createdDate: string;
  onViewDetails?: () => void;
  onRespond?: () => void;
}

const PurchaseRequestCard: React.FC<PurchaseRequestCardProps> = ({
  requestId,
  productName,
  quantity,
  unit,
  proposedPrice,
  status,
  createdDate,
  onViewDetails,
  onRespond,
}) => {
  const statusText = {
    new: 'Mới tạo',
    'pending-response': 'Chờ phản hồi',
    negotiating: 'Đang thương lượng',
    accepted: 'Đã chấp nhận',
    rejected: 'Đã từ chối',
    cancelled: 'Đã hủy',
  };

  return (
    <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-4">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Package className="mt-0.5 h-5 w-5 text-[#16A34A]" />
          <div>
            <p className="text-xs text-gray-600">Mã yêu cầu</p>
            <p className="font-bold text-[#163B24]">#{requestId}</p>
          </div>
        </div>
        <Badge variant={status === 'new' ? 'info' : status === 'accepted' ? 'success' : status === 'rejected' ? 'error' : 'warning'} size="sm" className="shrink-0">
          {statusText[status]}
        </Badge>
      </div>

      {/* Product Info */}
      <div className="mb-3 rounded-2xl bg-[#F0FDF4] p-3">
        <h3 className="mb-2 text-base font-bold text-[#163B24] sm:text-lg">{productName}</h3>
        <div className="grid gap-2.5 text-sm min-[380px]:grid-cols-2 sm:gap-3">
          <div>
            <p className="text-gray-600">Số lượng</p>
            <p className="font-bold text-[#163B24]">{quantity} {unit}</p>
          </div>
          <div>
            <p className="text-gray-600">Giá đề xuất</p>
            <p className="font-bold text-[#16A34A]">{proposedPrice.toLocaleString()}₫/{unit}</p>
          </div>
        </div>
      </div>

      {/* Date */}
      <p className="mb-3 text-sm text-gray-600">Ngày tạo: {createdDate}</p>

      {/* Actions */}
      <div className="flex gap-2">
        {onViewDetails && (
          <Button variant="outline" size="sm" className="flex-1" onClick={onViewDetails}>
            Chi tiết
          </Button>
        )}
        {onRespond && (
          <Button variant="primary" size="sm" className="flex-1" onClick={onRespond}>
            Phản hồi
          </Button>
        )}
      </div>
    </div>
  );
};

export default PurchaseRequestCard;
