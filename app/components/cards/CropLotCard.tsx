import React from 'react';
import Badge from '@/app/components/ui/Badge';
import { Leaf } from 'lucide-react';

interface CropLotCardProps {
  lotId: string;
  cropName: string;
  area: number;
  plantedDate: string;
  estimatedHarvestDate: string;
  status: 'growing' | 'ready-harvest' | 'harvested';
  health: 'good' | 'warning' | 'critical';
  onViewDetails: () => void;
}

const CropLotCard: React.FC<CropLotCardProps> = ({
  lotId,
  cropName,
  area,
  plantedDate,
  estimatedHarvestDate,
  status,
  health,
  onViewDetails,
}) => {
  const statusText = {
    growing: 'Đang phát triển',
    'ready-harvest': 'Sắp thu hoạch',
    harvested: 'Đã thu hoạch',
  };

  const healthText = {
    good: 'Khỏe mạnh',
    warning: 'Cảnh báo',
    critical: 'Nguy hiểm',
  };

  return (
    <div
      className="cursor-pointer rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-4"
      onClick={onViewDetails}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Leaf className="mt-0.5 h-5 w-5 text-[#16A34A]" />
          <div>
            <p className="text-xs text-gray-600">Lô trồng</p>
            <p className="font-bold text-[#163B24]">{lotId}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-1">
          <Badge
            variant={
              status === 'growing'
                ? 'info'
                : status === 'ready-harvest'
                  ? 'warning'
                  : 'success'
            }
            size="sm"
          >
            {statusText[status]}
          </Badge>
          <Badge
            variant={
              health === 'good' ? 'success' : health === 'warning' ? 'warning' : 'error'
            }
            size="sm"
          >
            {healthText[health]}
          </Badge>
        </div>
      </div>

      {/* Crop Info */}
      <h3 className="mb-3 text-base font-bold text-[#163B24] sm:text-lg">{cropName}</h3>

      {/* Details Grid */}
      <div className="mb-3 grid gap-2.5 text-sm min-[380px]:grid-cols-2 sm:gap-3">
        <div>
          <p className="text-gray-600">Diện tích</p>
          <p className="font-bold text-[#163B24]">{area} ha</p>
        </div>
        <div>
          <p className="text-gray-600">Ngày trồng</p>
          <p className="font-bold text-[#163B24]">{plantedDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600">Dự kiến thu hoạch</p>
          <p className="font-bold text-[#163B24]">{estimatedHarvestDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CropLotCard;
