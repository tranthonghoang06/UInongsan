'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { useToast } from '@/app/components/ui/ToastProvider';
import { Star, Heart, Share2, ShoppingCart, Calendar, MapPin, Leaf, Award } from 'lucide-react';
import { mockProducts, mockFarms } from '@/app/data/mockData';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const id = React.use(params).id;
  const toast = useToast();
  const product = mockProducts.find(p => p.id === id);
  const farm = mockFarms[0];
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F0FDF4]">
        <PublicHeader cartCount={cartCount} />
        <div className="flex h-80 items-center justify-center px-4 text-center">
          <p className="text-lg text-gray-600">Sản phẩm không tìm thấy</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    toast.success({ title: 'Đã thêm vào giỏ hàng', message: `${quantity} x ${product?.name ?? 'Sản phẩm'} đã được thêm.` });
  };

  const handleQuantityChange = (nextQuantity: number) => {
    const safeQuantity = Math.max(1, nextQuantity);
    setQuantity(safeQuantity);
    toast.info({ title: 'Đã cập nhật số lượng', message: `${safeQuantity} sản phẩm` });
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader cartCount={cartCount} />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 overflow-hidden text-sm text-gray-600">
          <Link href="/products" className="hover:text-[#2E7D32]">Sản phẩm</Link>
          <span>/</span>
          <span className="text-[#263238]">{product.name}</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Image Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative mx-auto aspect-[4/3] max-h-72 w-full max-w-md overflow-hidden rounded-2xl bg-gray-200 shadow-sm shadow-green-100 sm:max-h-96 md:max-h-none md:max-w-none">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Image Thumbnails */}
            <div className="flex justify-center gap-2 md:justify-start">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-14 w-14 cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent bg-gray-200 hover:border-[#16A34A] sm:h-20 sm:w-20">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div>
            {/* Rating */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-[#F9A825] text-[#F9A825]' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviewCount} đánh giá)</span>
            </div>

            {/* Name & Price */}
            <h1 className="mb-3 text-xl font-bold leading-tight text-[#163B24] sm:mb-4 sm:text-3xl">{product.name}</h1>
            <div className="mb-6 flex items-end gap-2">
              <span className="text-2xl font-bold text-[#16A34A] sm:text-3xl">{product.price.toLocaleString()}₫</span>
              {product.originalPrice && (
                <span className="text-lg line-through text-gray-500">{product.originalPrice.toLocaleString()}₫</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <Badge variant={product.inStock ? 'success' : 'error'}>
                {product.inStock ? 'Còn hàng' : 'Hết hàng'}
              </Badge>
            </div>

            {/* Farm Info */}
            <div className="mb-5 rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:mb-6 sm:p-4">
              <p className="mb-3 text-sm font-medium text-gray-600">Nguồn gốc</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-[#2E7D32]" />
                  <span>Vườn: <strong>{product.farm}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#2E7D32]" />
                  <span>Khu vực: <strong>{product.region}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#2E7D32]" />
                  <span>Thu hoạch: <strong>Hôm qua</strong></span>
                </div>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="mb-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Số lượng:</span>
                <div className="flex items-center gap-3 rounded-2xl border border-[#BBF7D0] bg-white px-4 py-2">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-2xl text-[#16A34A] hover:font-bold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-2xl text-[#16A34A] hover:font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_3.5rem] gap-3">
                <Button
                  variant="primary"
                  size="md"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Thêm vào giỏ
                </Button>
                <Button variant="outline" size="md" onClick={() => toast.success({ title: 'Đã lưu yêu thích', message: product.name })}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="secondary" size="md" className="w-full" disabled={!product.inStock} onClick={() => toast.info({ title: 'Đang chuẩn bị thanh toán', message: 'Sản phẩm đã được chọn để mua ngay.' })}>
                Mua ngay
              </Button>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 border-t border-[#E0E0E0] pt-4">
              <span className="text-sm text-gray-600">Chia sẻ:</span>
              <button type="button" className="rounded-lg p-2 hover:bg-gray-200" onClick={() => toast.info({ title: 'Đã sao chép liên kết', message: 'Bạn có thể chia sẻ sản phẩm này.' })}>
                <Share2 className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Description & Tabs */}
        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-8">
          {/* Left Section - Description */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-[#263238]">Thông tin chi tiết</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-[#263238]">Mô tả</p>
                  <p>Sản phẩm tươi sạch, được trồng theo phương pháp hữu cơ. Không sử dụng hóa chất độc hại, bảo vệ sức khỏe và môi trường.</p>
                </div>
                <div>
                  <p className="font-medium text-[#263238]">Thông tin dinh dưỡng</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Giàu vitamin C</li>
                    <li>Nhiều chất xơ</li>
                    <li>Khoáng chất thiết yếu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Farming Log */}
            <div className="mt-4 rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:mt-5 sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-[#263238]">Nhật ký canh tác</h2>
              <div className="space-y-3 text-sm">
                <div className="border-l-2 border-[#2E7D32] pl-4">
                  <p className="font-medium text-[#263238]">15/01/2024 - Tưới nước</p>
                  <p className="text-gray-600">Tưới nước vào sáng sớm, mực nước đạt 80%</p>
                </div>
                <div className="border-l-2 border-[#2E7D32] pl-4">
                  <p className="font-medium text-[#263238]">14/01/2024 - Bón phân</p>
                  <p className="text-gray-600">Bón phân hữu cơ vào buổi chiều</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Farm Info */}
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-[#263238]">Từ nhà vườn</h3>
            <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={farm.image}
                alt={farm.name}
                width={200}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mb-1 font-semibold text-[#263238]">{farm.name}</p>
            <p className="mb-3 text-xs text-gray-600">Chủ: {farm.owner}</p>
            
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#2E7D32]" />
                <span>Được xác nhận</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#2E7D32]" />
                <span>{farm.totalProducts} sản phẩm</span>
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full mb-3">
              Xem nhà vườn
            </Button>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="mb-3 font-semibold text-[#263238]">Đánh giá</h4>
              <div className="space-y-3">
                <div className="border-t border-[#E0E0E0] pt-3">
                  <div className="mb-1 flex items-center gap-2">
                    <strong className="text-sm">Người dùng A</strong>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#F9A825] text-[#F9A825]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Rất tươi, chất lượng tốt!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
