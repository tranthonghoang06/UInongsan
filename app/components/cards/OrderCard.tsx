import React from 'react';
import Badge from '@/app/components/ui/Badge';
import { Clock } from 'lucide-react';

interface OrderCardProps {
  orderId: string;
  status: 'pending-confirmation' | 'confirmed' | 'pending-payment' | 'preparing' | 'delivering' | 'delivered' | 'completed' | 'cancelled';
  totalAmount: number;
  itemCount: number;
  createdDate: string;
  estimatedDelivery?: string;
  onViewDetails: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  status,
  totalAmount,
  itemCount,
  createdDate,
  estimatedDelivery,
  onViewDetails,
}) => {
  const statusText = {
    'pending-confirmation': 'Chờ xác nhận',
    confirmed: 'Đã xác nhận',
    'pending-payment': 'Chờ thanh toán',
    preparing: 'Đang chuẩn bị',
    delivering: 'Đang giao',
    delivered: 'Đã giao',
    completed: 'Hoàn tất',
    cancelled: 'Đã hủy',
  };

  return (
    <div
      className="cursor-pointer rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-4"
      onClick={onViewDetails}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-gray-600">Mã đơn hàng</p>
          <p className="text-base font-bold text-[#163B24] sm:text-lg">#{orderId}</p>
        </div>
        <Badge variant={status} size="sm">
          {statusText[status]}
        </Badge>
      </div>

      {/* Details */}
      <div className="mb-3 grid gap-2.5 text-sm min-[380px]:grid-cols-2 sm:gap-3">
        <div>
          <p className="text-gray-600">Số lượng sản phẩm</p>
          <p className="font-bold text-[#163B24]">{itemCount} sản phẩm</p>
        </div>
        <div>
          <p className="text-gray-600">Tổng tiền</p>
          <p className="font-bold text-[#16A34A]">{totalAmount.toLocaleString()}₫</p>
        </div>
      </div>

      {/* Dates */}
      <div className="space-y-2 border-t border-[#DCFCE7] pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-gray-500" />
          <span>Đặt hàng: {createdDate}</span>
        </div>
        {estimatedDelivery && (
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-gray-500" />
            <span>Dự kiến giao: {estimatedDelivery}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
