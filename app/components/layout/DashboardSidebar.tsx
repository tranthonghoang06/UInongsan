'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import AppLogo from '@/app/components/layout/AppLogo';
import {
  Home,
  Package,
  ShoppingCart,
  Leaf,
  Sprout,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  Truck,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Bell,
} from 'lucide-react';

interface SidebarItem {
  label: string;
  shortLabel?: string;
  href: string;
  icon: React.ReactNode;
}

interface DashboardSidebarProps {
  userRole?: 'farmer' | 'trader' | 'seller' | 'admin' | 'delivery';
}

const roleTitle = {
  farmer: 'Nhà nông',
  trader: 'Thương lái',
  seller: 'Người bán',
  admin: 'Quản trị',
  delivery: 'Giao hàng',
};

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ userRole = 'farmer' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems: Record<string, SidebarItem[]> = {
    farmer: [
      { label: 'Trang chủ', shortLabel: 'Nhà', href: '/farmer/dashboard', icon: <Home className="h-5 w-5" /> },
      { label: 'Vườn', shortLabel: 'Vườn', href: '/farmer/farms', icon: <Leaf className="h-5 w-5" /> },
      { label: 'Cây trồng', shortLabel: 'Cây', href: '/farmer/trees', icon: <Sprout className="h-5 w-5" /> },
      { label: 'Nhật ký canh tác', shortLabel: 'Nhật ký', href: '/farmer/logs', icon: <FileText className="h-5 w-5" /> },
      { label: 'Lô trồng', shortLabel: 'Lô', href: '/farmer/crop-lots', icon: <Leaf className="h-5 w-5" /> },
      { label: 'Thu hoạch', shortLabel: 'Thu', href: '/farmer/harvest', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Yêu cầu mua', shortLabel: 'Yêu cầu', href: '/farmer/purchase-requests', icon: <ShoppingCart className="h-5 w-5" /> },
      { label: 'QR truy xuất', shortLabel: 'QR', href: '/farmer/qr', icon: <BarChart3 className="h-5 w-5" /> },
    ],
    trader: [
      { label: 'Trang chủ', shortLabel: 'Nhà', href: '/trader/dashboard', icon: <Home className="h-5 w-5" /> },
      { label: 'Tìm nguồn hàng', shortLabel: 'Nguồn', href: '/trader/sources', icon: <Leaf className="h-5 w-5" /> },
      { label: 'So sánh nguồn', shortLabel: 'So sánh', href: '/trader/sources/compare', icon: <BarChart3 className="h-5 w-5" /> },
      { label: 'Yêu cầu mua', shortLabel: 'Yêu cầu', href: '/trader/requests', icon: <ShoppingCart className="h-5 w-5" /> },
      { label: 'Đơn mua sỉ', shortLabel: 'Đơn', href: '/trader/orders', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Lịch sử giao dịch', shortLabel: 'Lịch sử', href: '/trader/history', icon: <FileText className="h-5 w-5" /> },
    ],
    seller: [
      { label: 'Trang chủ', shortLabel: 'Nhà', href: '/seller/dashboard', icon: <Home className="h-5 w-5" /> },
      { label: 'Sản phẩm', shortLabel: 'SP', href: '/seller/products', icon: <Leaf className="h-5 w-5" /> },
      { label: 'Tồn kho', shortLabel: 'Kho', href: '/seller/inventory', icon: <Package className="h-5 w-5" /> },
      { label: 'Đơn hàng', shortLabel: 'Đơn', href: '/seller/orders', icon: <ShoppingCart className="h-5 w-5" /> },
      { label: 'Doanh thu', shortLabel: 'Thu', href: '/seller/revenue', icon: <BarChart3 className="h-5 w-5" /> },
      { label: 'Yêu cầu thu mua', shortLabel: 'Yêu cầu', href: '/seller/purchase-requests', icon: <FileText className="h-5 w-5" /> },
    ],
    admin: [
      { label: 'Trang chủ', shortLabel: 'Nhà', href: '/admin/dashboard', icon: <Home className="h-5 w-5" /> },
      { label: 'Người dùng', shortLabel: 'User', href: '/admin/users', icon: <Users className="h-5 w-5" /> },
      { label: 'Sản phẩm', shortLabel: 'SP', href: '/admin/products', icon: <Leaf className="h-5 w-5" /> },
      { label: 'Danh mục', shortLabel: 'DM', href: '/admin/categories', icon: <Settings className="h-5 w-5" /> },
      { label: 'Đơn hàng', shortLabel: 'Đơn', href: '/admin/orders', icon: <ShoppingCart className="h-5 w-5" /> },
      { label: 'Vận chuyển', shortLabel: 'VC', href: '/admin/deliveries', icon: <Truck className="h-5 w-5" /> },
      { label: 'Thanh toán', shortLabel: 'Pay', href: '/admin/payments', icon: <BarChart3 className="h-5 w-5" /> },
      { label: 'Khiếu nại', shortLabel: 'Khiếu nại', href: '/admin/complaints', icon: <FileText className="h-5 w-5" /> },
      { label: 'Thống kê', shortLabel: 'TK', href: '/admin/analytics', icon: <BarChart3 className="h-5 w-5" /> },
    ],
    delivery: [
      { label: 'Trang chủ', shortLabel: 'Nhà', href: '/delivery/dashboard', icon: <Home className="h-5 w-5" /> },
      { label: 'Đơn cần giao', shortLabel: 'Nhận', href: '/delivery/orders', icon: <Truck className="h-5 w-5" /> },
      { label: 'Đang giao', shortLabel: 'Giao', href: '/delivery/in-transit', icon: <TrendingUp className="h-5 w-5" /> },
      { label: 'Hoàn tất', shortLabel: 'Xong', href: '/delivery/completed', icon: <FileText className="h-5 w-5" /> },
      { label: 'Thất bại', shortLabel: 'Lỗi', href: '/delivery/failed', icon: <FileText className="h-5 w-5" /> },
      { label: 'Hoàn trả', shortLabel: 'Trả', href: '/delivery/returns', icon: <FileText className="h-5 w-5" /> },
    ],
  };

  const items = menuItems[userRole] || [];
  const profileHref = `/${userRole}/profile`;
  const notificationsHref = `/${userRole}/notifications`;
  const mobileItems =
    userRole === 'farmer'
      ? [items[0], items[1], items[2], items[4]].filter(Boolean)
      : items.slice(0, 4);
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="sticky top-0 z-[120] border-b border-[#BBF7D0] bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="relative z-[130] flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]"
            aria-label="Mở menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="dashboard-mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">PIONE GROUP</p>
            <h1 className="truncate text-base font-bold text-[#163B24]">{roleTitle[userRole]}</h1>
          </div>
          <Link
            href={notificationsHref}
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#166534]"
            aria-label="Thông báo"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-[#F97316]" />
          </Link>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div id="dashboard-mobile-menu" className="fixed inset-0 z-[140] bg-black/35 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto rounded-r-3xl bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AppLogo size={48} className="h-12 w-12" />
                <div>
                  <p className="font-bold text-[#163B24]">PIONE GROUP</p>
                  <p className="text-sm text-gray-600">{roleTitle[userRole]}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0FDF4]"
                aria-label="Đóng menu"
              >
                <X className="h-6 w-6 text-[#166534]" />
              </button>
            </div>

            <nav className="space-y-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex min-h-12 items-center gap-3 rounded-2xl px-3.5 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#16A34A] text-white shadow-sm shadow-green-200'
                      : 'bg-[#F0FDF4] text-[#163B24] hover:bg-[#DCFCE7]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-5 border-t border-[#BBF7D0] pt-4">
              <Link
                href={profileHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-12 items-center gap-3 rounded-2xl bg-[#F0FDF4] px-3.5 text-sm font-semibold text-[#163B24] hover:bg-[#DCFCE7]"
              >
                <Settings className="h-5 w-5" />
                <span>Hồ sơ tài khoản</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <aside
        className={`relative hidden h-screen flex-col border-r border-[#BBF7D0] bg-white transition-all duration-200 md:flex ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#BBF7D0] px-4 py-6">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <AppLogo size={42} className="h-10 w-10" />
              <span className="font-bold text-[#166534]">PIONE GROUP</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-xl p-2 hover:bg-[#DCFCE7]"
            aria-label="Thu gọn menu"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-[#166534]" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-[#166534]" />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-12 items-center gap-3 rounded-2xl px-3 text-sm font-semibold transition-colors duration-150 ${
                isActive(item.href)
                  ? 'bg-[#DCFCE7] text-[#166534]'
                  : 'text-[#263238] hover:bg-[#F0FDF4]'
              }`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-[#BBF7D0] px-3 py-4">
          {!isCollapsed && (
            <>
              <Link href={profileHref}>
                <Button variant="outline" size="sm" className="w-full justify-center">
                  <Settings className="h-4 w-4" />
                  Hồ sơ
                </Button>
              </Link>
              <Button variant="secondary" size="sm" className="w-full justify-center">
                <LogOut className="h-4 w-4" />
                Đăng xuất
              </Button>
            </>
          )}
          {isCollapsed && (
            <button className="flex w-full justify-center rounded-xl p-2 hover:bg-[#DCFCE7]">
              <LogOut className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>
      </aside>

      <nav className="pointer-events-auto fixed bottom-0 left-0 right-0 z-[100] border-t border-[#BBF7D0] bg-white pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-1.5 shadow-[0_-8px_30px_rgba(22,163,74,0.14)] md:hidden">
        <div className="grid grid-cols-4 gap-1 px-2">
          {mobileItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`pointer-events-auto flex min-h-14 touch-manipulation flex-col items-center justify-center gap-0.5 rounded-2xl px-1 text-[10px] font-bold transition-colors min-[380px]:text-[11px] ${
                isActive(item.href)
                  ? 'bg-[#16A34A] text-white'
                  : 'text-[#166534] hover:bg-[#DCFCE7]'
              }`}
            >
              <span className="flex h-5 items-center [&>svg]:h-[18px] [&>svg]:w-[18px]">{item.icon}</span>
              <span className="max-w-full truncate">{item.shortLabel ?? item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default DashboardSidebar;
