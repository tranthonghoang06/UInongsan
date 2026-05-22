'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PublicHeader from '@/app/components/layout/PublicHeader';
import ProductCard from '@/app/components/cards/ProductCard';
import FarmCard from '@/app/components/cards/FarmCard';
import VideoCard from '@/app/components/cards/VideoCard';
import Button from '@/app/components/ui/Button';
import AppLogo from '@/app/components/layout/AppLogo';
import { useToast } from '@/app/components/ui/ToastProvider';
import { mockProducts, mockFarms, mockVideos } from '@/app/data/mockData';
import { ArrowRight, Leaf, Truck, Award, Mail, MapPin, Phone } from 'lucide-react';

export default function HomePage() {
  const toast = useToast();
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productName = 'Sản phẩm') => {
    setCartCount(prev => prev + 1);
    toast.success({ title: 'Đã thêm vào giỏ hàng', message: `${productName} đã được thêm vào giỏ.` });
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      {/* Header */}
      <PublicHeader cartCount={cartCount} />

      {/* Hero Banner */}
      <section className="border-b border-[#BBF7D0] bg-[#EAF8E6]">
        <div className="mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-10 md:py-14">
          <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white px-3 py-1 text-xs font-semibold text-[#166534] shadow-sm shadow-green-100">
                <Leaf className="h-3.5 w-3.5" />
                PIONE GROUP
              </div>
              <h1 className="text-[26px] font-bold leading-[1.18] text-[#12351F] sm:text-4xl md:text-5xl">
                Nông sản sạch, từ vườn đến nhà bạn
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#395943] sm:mt-4 sm:text-base sm:leading-7">
                Kết nối trực tiếp với nông dân, cam kết sản phẩm tươi sạch, chất lượng cao.
              </p>
              <div className="mt-5 grid gap-2 sm:flex sm:gap-3">
                <Link href="/products" className="min-w-0">
                  <Button variant="primary" size="lg" className="min-h-11 w-full rounded-2xl bg-[#16A34A] px-5 py-3 text-sm shadow-md shadow-green-900/15 hover:bg-[#15803D] sm:w-auto sm:text-base">
                    Khám phá sản phẩm
                  </Button>
                </Link>
                <Link href="/register" className="min-w-0">
                  <Button variant="secondary" size="lg" className="min-h-11 w-full rounded-2xl border border-[#D69A22] bg-[#FFF7E6] px-5 py-3 text-sm text-[#6B3F05] hover:bg-[#FFE8B3] sm:w-auto sm:text-base">
                    Đăng ký bán hàng
                  </Button>
                </Link>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center sm:max-w-md">
                {[
                  { value: '24h', label: 'Giao nhanh' },
                  { value: '100%', label: 'Nguồn gốc' },
                  { value: '5+', label: 'Vai trò' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#BBF7D0] bg-white/80 px-2 py-2 shadow-sm shadow-green-100">
                    <p className="text-base font-bold text-[#166534]">{item.value}</p>
                    <p className="mt-0.5 truncate text-[11px] font-medium text-[#395943]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.35rem] border border-[#A7E7B8] bg-white shadow-lg shadow-green-900/12 sm:aspect-[4/3]">
                <Image
                  src="/images/photos/hero-farm-vietnam.jpg"
                  alt="Nông sản"
                  fill
                  preload
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12351F]/30 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-2xl bg-white/92 px-3 py-2 shadow-md shadow-green-950/10 backdrop-blur">
                  <p className="text-xs font-bold text-[#166534]">Tươi mới mỗi ngày</p>
                  <p className="text-[11px] text-[#395943]">Từ nhà vườn đến khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 text-center shadow-sm shadow-green-100 sm:p-5">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F5E9]">
                  <Leaf className="h-6 w-6 text-[#2E7D32]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[#263238]">Nông sản tươi sạch</h3>
              <p className="text-sm text-gray-600">
                Sản phẩm từ nông dân chuyên nghiệp, cam kết không hóa chất độc hại
              </p>
            </div>
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 text-center shadow-sm shadow-green-100 sm:p-5">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F5E9]">
                  <Truck className="h-6 w-6 text-[#2E7D32]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[#263238]">Giao hàng nhanh</h3>
              <p className="text-sm text-gray-600">
                Giao trong vòng 24-48 giờ, bảo quản tươi mới từ khi rời khỏi vườn
              </p>
            </div>
            <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 text-center shadow-sm shadow-green-100 sm:p-5">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F5E9]">
                  <Award className="h-6 w-6 text-[#2E7D32]" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-[#263238]">Giá cạnh tranh</h3>
              <p className="text-sm text-gray-600">
                Giá tốt nhất vì loại bỏ trung gian, hỗ trợ nông dân trực tiếp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <h2 className="text-2xl font-bold text-[#163B24] sm:text-3xl">Sản phẩm nổi bật</h2>
              <p className="mt-2 text-gray-600">Những sản phẩm được yêu thích nhất</p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 font-medium text-[#2E7D32] hover:underline"
            >
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {mockProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="bg-white py-8 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <h2 className="text-2xl font-bold text-[#163B24] sm:text-3xl">Nhà vườn nổi bật</h2>
              <p className="mt-2 text-gray-600">Các vườn uy tín, chất lượng cao</p>
            </div>
            <Link
              href="/farms"
              className="flex items-center gap-2 font-medium text-[#2E7D32] hover:underline"
            >
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockFarms.map((farm) => (
              <FarmCard
                key={farm.id}
                {...farm}
                onViewDetails={() => console.log('View farm:', farm.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-8 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 sm:mb-10">
            <h2 className="text-2xl font-bold text-[#163B24] sm:text-3xl">Video hướng dẫn</h2>
            <p className="mt-2 text-gray-600">Học cách trồng trọt từ các chuyên gia</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockVideos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
                onPlay={() => console.log('Play video:', video.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#BBF7D0] bg-[#EAF8E6] py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-[#A7E7B8] bg-[#DCFCE7] px-3.5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-[#163B24] sm:text-2xl">
                Sẵn sàng bắt đầu?
              </h2>
              <p className="mt-1 text-sm text-[#31523A]">
                Tham gia cộng đồng nông dân và khách hàng uy tín.
              </p>
            </div>
            <div className="mt-4 grid gap-2 sm:mt-0 sm:flex sm:shrink-0 sm:justify-end">
              <Link href="/register" className="min-w-0">
                <Button variant="primary" size="sm" className="w-full min-w-36 rounded-2xl px-5 sm:w-auto">
                  Đăng ký ngay
                </Button>
              </Link>
              <Link href="/login" className="min-w-0">
                <Button variant="outline" size="sm" className="w-full min-w-44 rounded-2xl border-[#16A34A] px-5 text-[#166534] hover:bg-[#F0FDF4] sm:w-auto">
                  Đăng nhập dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EAF8E6] pb-6 text-[#163B24]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="border-t border-[#BBF7D0] px-1 py-7 sm:px-0">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <AppLogo size={40} className="h-10 w-10 rounded-xl bg-white p-1" />
                <div>
                  <p className="font-bold text-[#166534]">PIONE GROUP</p>
                  <p className="text-xs text-[#395943]">Từ vườn đến khách hàng</p>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#395943]">
                Kết nối nông dân với khách hàng, phát triển nông nghiệp bền vững và dễ theo dõi.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-[#166534]">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-[#395943]">
                <li><Link href="/products" className="hover:text-[#16A34A]">Sản phẩm</Link></li>
                <li><Link href="/farms" className="hover:text-[#16A34A]">Nhà vườn</Link></li>
                <li><Link href="/guides" className="hover:text-[#16A34A]">Hướng dẫn</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-[#166534]">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-[#395943]">
                <li><Link href="/support" className="hover:text-[#16A34A]">Liên hệ</Link></li>
                <li><Link href="/orders" className="hover:text-[#16A34A]">Theo dõi đơn</Link></li>
                <li><Link href="/login" className="hover:text-[#16A34A]">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-[#166534]">Liên hệ</h4>
              <div className="space-y-3 text-sm text-[#395943]">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#16A34A]" />1900 1234</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#16A34A]" />support@pione.vn</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#16A34A]" />Hệ thống nông sản Việt</p>
              </div>
            </div>
          </div>
            <div className="mt-6 border-t border-[#BBF7D0] pt-5 text-center text-xs text-[#4B6353] sm:flex sm:items-center sm:justify-between sm:text-left">
              <p>&copy; 2024 PIONE GROUP. Tất cả các quyền được bảo lưu.</p>
              <p className="mt-2 sm:mt-0">Facebook · Instagram · YouTube</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
