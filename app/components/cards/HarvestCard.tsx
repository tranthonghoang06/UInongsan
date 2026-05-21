import React from 'react';
import Badge from '@/app/components/ui/Badge';
import { Calendar } from 'lucide-react';

interface HarvestCardProps {
  harvestId: string;
  lotId: string;
  cropName: string;
  quantity: number;
  unit: string;
  harvestDate: string;
  quality: 'excellent' | 'good' | 'fair';
  onViewDetails: () => void;
}

const HarvestCard: React.FC<HarvestCardProps> = ({
  lotId,
  cropName,
  quantity,
  unit,
  harvestDate,
  quality,
  onViewDetails,
}) => {
  const qualityText = {
    excellent: 'Xuất sắc',
    good: 'Tốt',
    fair: 'Bình thường',
  };

  return (
    <div
      className="cursor-pointer rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-4"
      onClick={onViewDetails}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-gray-600">Lô {lotId}</p>
          <p className="text-base font-bold text-[#163B24] sm:text-lg">{cropName}</p>
        </div>
        <Badge
          variant={quality === 'excellent' ? 'success' : quality === 'good' ? 'info' : 'warning'}
          size="sm"
        >
          {qualityText[quality]}
        </Badge>
      </div>

      {/* Quantity */}
      <div className="mb-3 rounded-2xl bg-[#DCFCE7] p-3">
        <p className="mb-1 text-sm text-gray-600">Sản lượng</p>
        <p className="text-xl font-bold text-[#166534] sm:text-2xl">{quantity} {unit}</p>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Calendar className="h-3 w-3" />
        <span>Thu hoạch: {harvestDate}</span>
      </div>
    </div>
  );
};

export default HarvestCard;
