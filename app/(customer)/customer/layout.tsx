import type { ReactNode } from 'react';
import Link from 'next/link';
import PublicHeader from '@/app/components/layout/PublicHeader';
import { Bell, Heart, Home, MapPin, MessageSquare, PackageCheck, UserRound } from 'lucide-react';

const customerNav = [
  { label: 'Tổng quan', href: '/customer/dashboard', icon: <Home className="h-4 w-4" /> },
  { label: 'Đơn hàng', href: '/customer/orders', icon: <PackageCheck className="h-4 w-4" /> },
  { label: 'Địa chỉ', href: '/customer/addresses', icon: <MapPin className="h-4 w-4" /> },
  { label: 'Yêu thích', href: '/customer/wishlist', icon: <Heart className="h-4 w-4" /> },
  { label: 'Đánh giá', href: '/customer/reviews', icon: <MessageSquare className="h-4 w-4" /> },
  { label: 'Thông báo', href: '/customer/notifications', icon: <Bell className="h-4 w-4" /> },
  { label: 'Hồ sơ', href: '/customer/profile', icon: <UserRound className="h-4 w-4" /> },
];

export default function CustomerLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6">
        <nav className="mb-4 flex gap-2 overflow-x-auto rounded-2xl border border-[#BBF7D0] bg-white p-2 shadow-sm shadow-green-100">
          {customerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-10 shrink-0 items-center gap-2 rounded-xl bg-[#F0FDF4] px-3 text-sm font-semibold text-[#166534] hover:bg-[#DCFCE7]"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
