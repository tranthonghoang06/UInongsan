'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import AppLogo from '@/app/components/layout/AppLogo';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

interface PublicHeaderProps {
  cartCount?: number;
  onSearchChange?: (query: string) => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ cartCount = 0, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const isInsideMenu = mobileMenuRef.current?.contains(target);
      const isMenuButton = menuButtonRef.current?.contains(target);

      if (!isInsideMenu && !isMenuButton) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Sản phẩm', href: '/products' },
    { label: 'Nhà vườn', href: '/farms' },
    { label: 'Quy trình trồng', href: '/guides' },
    { label: 'Theo dõi đơn', href: '/orders' },
    { label: 'Hỗ trợ', href: '/support' },
    { label: 'Cổng vận hành', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-[120] border-b border-[#BBF7D0] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 py-2.5 sm:px-4 sm:py-3">
        {/* Desktop Header */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3">
            <AppLogo size={38} className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="max-w-[10rem] truncate whitespace-nowrap text-sm font-bold text-[#166534] sm:max-w-[12rem] sm:text-lg">
              PIONE 
            </span>
          </Link>

          {/* Search Box */}
          <div className="hidden w-full max-w-xs shrink lg:flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearchChange?.(e.target.value);
                }}
                className="min-h-11 w-full rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] transition-colors hover:bg-[#BBF7D0] sm:h-11 sm:w-11"
            >
              <ShoppingCart className="h-5 w-5 text-[#166534]" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D32F2F] text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link href="/login">
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" className="whitespace-nowrap">
                  Đăng ký
                </Button>
              </Link>
              <Link href="/staff-login">
                <Button variant="secondary" size="sm" className="whitespace-nowrap">
                  Đối tác
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="relative z-[130] flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#166534] hover:bg-[#DCFCE7] sm:h-11 sm:w-11 lg:hidden"
              aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMenuOpen}
              aria-controls="public-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="mt-3 hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#BBF7D0] pt-3 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-[#263238] transition-colors hover:text-[#16A34A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="public-mobile-menu"
            className="relative z-[125] mt-3 space-y-3 border-t border-[#BBF7D0] pt-3 lg:hidden"
          >
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearchChange?.(e.target.value);
                }}
                className="min-h-11 w-full rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] py-2.5 pl-3 pr-10 text-base placeholder-gray-500 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </div>

            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block min-h-11 rounded-2xl bg-[#F0FDF4] px-3.5 py-2.5 text-sm font-semibold text-[#163B24] hover:bg-[#DCFCE7]"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Auth */}
            <div className="grid grid-cols-2 gap-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  Đăng ký
                </Button>
              </Link>
            </div>
            <Link href="/staff-login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" size="sm" className="w-full">
                Đối tác / nhân viên
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default PublicHeader;
