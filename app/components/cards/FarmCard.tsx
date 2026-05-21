import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import { Users, MapPin } from 'lucide-react';

interface FarmCardProps {
  id: string;
  image: string;
  name: string;
  owner: string;
  region: string;
  area: number;
  crops: string[];
  totalProducts: number;
  onViewDetails: () => void;
}

const FarmCard: React.FC<FarmCardProps> = ({
  image,
  name,
  owner,
  region,
  area,
  crops,
  totalProducts,
  onViewDetails,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="mb-1 text-base font-bold text-[#163B24] sm:text-lg">{name}</h3>
        <p className="mb-2 text-xs text-gray-600 sm:mb-3 sm:text-sm">Chủ: {owner}</p>

        {/* Location & Area */}
        <div className="mb-3 space-y-1.5 text-xs text-gray-600 sm:space-y-2 sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#2E7D32]" />
            <span>{region}</span>
          </div>
          <p>Diện tích: {area} ha</p>
        </div>

        {/* Crops */}
        <div className="mb-3">
          <p className="mb-2 text-xs font-bold text-[#163B24] sm:text-sm">Nông sản:</p>
          <div className="flex flex-wrap gap-1">
            {crops.map((crop, idx) => (
              <Badge key={idx} variant="info" size="sm">
                {crop}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-3 flex items-center gap-2 rounded-2xl bg-[#DCFCE7] px-3 py-2.5 sm:mb-4 sm:py-3">
          <Users className="h-4 w-4 text-[#16A34A]" />
          <span className="text-xs font-bold text-[#166534] sm:text-sm">{totalProducts} sản phẩm</span>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={onViewDetails}
        >
          Xem nhà vườn
        </Button>
      </div>
    </div>
  );
};

export default FarmCard;
