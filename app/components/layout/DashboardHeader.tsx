'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Search, UserRound } from 'lucide-react';

const roleLabels: Record<string, string> = {
  admin: 'Quản trị hệ thống',
  farmer: 'Nông dân',
  seller: 'Người bán',
  trader: 'Thương lái',
  delivery: 'Vận chuyển',
};

interface DashboardHeaderProps {
  role?: keyof typeof roleLabels;
}

export default function DashboardHeader({ role = 'farmer' }: DashboardHeaderProps) {
  const pathname = usePathname();
  const title = roleLabels[role] ?? 'Dashboard';

  return (
    <header className="sticky top-0 z-40 hidden border-b border-[#BBF7D0] bg-white/95 px-6 py-3 shadow-sm backdrop-blur md:block">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">Dashboard</p>
          <h2 className="text-lg font-bold text-[#163B24]">{title}</h2>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <label className="relative hidden w-full max-w-sm lg:block">
            <span className="sr-only">Tìm kiếm</span>
            <input
              className="h-11 w-full rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] pl-10 pr-3 text-sm outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-200"
              placeholder="Tìm dữ liệu demo..."
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#16A34A]" />
          </label>

          <Link
            href={`/${role}/notifications`}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0FDF4] text-[#166534] hover:bg-[#DCFCE7]"
            aria-label="Thông báo"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#F97316]" />
          </Link>
          <Link
            href={`/${role}/profile`}
            className="flex h-11 items-center gap-2 rounded-xl bg-[#DCFCE7] px-3 text-sm font-semibold text-[#166534] hover:bg-[#BBF7D0]"
            aria-label="Hồ sơ"
          >
            <UserRound className="h-5 w-5" />
            <span className="hidden xl:inline">{pathname.split('/')[1] || title}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
