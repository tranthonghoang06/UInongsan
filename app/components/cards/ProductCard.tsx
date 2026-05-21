 'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  farm: string;
  region: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  onViewDetails?: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  originalPrice,
  farm,
  region,
  inStock,
  rating,
  reviewCount,
  onViewDetails,
  onAddToCart,
}) => {
  const router = useRouter();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
      return;
    }

    router.push(`/products/${id}`);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {discount > 0 && (
          <div className="absolute right-2 top-2 rounded-xl bg-[#D32F2F] px-2 py-1 text-xs font-bold text-white sm:right-3 sm:top-3 sm:text-sm">
            -{discount}%
          </div>
        )}
        <Badge
          variant={inStock ? 'success' : 'error'}
          size="sm"
          className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3"
        >
          {inStock ? 'Còn hàng' : 'Hết hàng'}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-5 text-[#163B24] sm:text-base sm:leading-6">{name}</h3>

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1 sm:mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${i < Math.floor(rating) ? 'fill-[#F9A825] text-[#F9A825]' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Farm & Region */}
        <div className="mb-2 space-y-1 text-xs text-gray-600 sm:mb-3 sm:text-sm">
          <p className="truncate">Vườn: {farm}</p>
          <p className="truncate">Khu vực: {region}</p>
        </div>

        {/* Price */}
        <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:mb-4">
          <span className="text-base font-bold text-[#16A34A] sm:text-xl">{price.toLocaleString()}₫</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-500">{originalPrice.toLocaleString()}₫</span>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-[1fr_2.75rem] gap-2 sm:grid-cols-[1fr_3.5rem]">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleViewDetails}
          >
            Xem chi tiết
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={onAddToCart}
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
