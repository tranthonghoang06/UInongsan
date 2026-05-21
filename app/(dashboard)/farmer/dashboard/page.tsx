'use client';

import React from 'react';
import Link from 'next/link';
import StatCard from '@/app/components/cards/StatCard';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockDashboardStats, mockCropLots } from '@/app/data/mockData';
import { Leaf, AlertCircle, TrendingUp, FileText, Plus } from 'lucide-react';

export default function FarmerDashboardPage() {
  const stats = mockDashboardStats.farmer;

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#65A30D] p-4 text-white shadow-lg shadow-green-200 sm:flex sm:items-center sm:justify-between sm:rounded-3xl sm:p-6">
        <div>
          <p className="text-sm font-semibold text-green-100">Chào buổi tốt lành</p>
          <h1 className="mt-1 text-xl font-bold leading-tight sm:text-4xl">Dashboard Nông dân</h1>
          <p className="mt-2 text-sm text-green-50 sm:text-base">Quản lý vườn, lô trồng và nhật ký canh tác thật nhanh trên điện thoại.</p>
        </div>
        <Link href="/farmer/logs" className="mt-5 block sm:mt-0">
          <Button variant="secondary" size="md" className="w-full bg-white text-[#166534] hover:bg-green-50 sm:w-auto">
            <Plus className="h-5 w-5" />
            Thêm nhật ký
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={<Leaf className="h-6 w-6" />}
          label="Tổng trang trại"
          value={stats.totalFarms}
          change="+2 tháng này"
          isPositive
        />
        <StatCard
          icon={<Leaf className="h-6 w-6" />}
          label="Tổng lô trồng"
          value={stats.totalCropLots}
          change="+1 tháng này"
          isPositive
        />
        <StatCard
          icon={<AlertCircle className="h-6 w-6" />}
          label="Sắp thu hoạch"
          value={stats.cropLotsReadyForHarvest}
          change="Trong 7 ngày tới"
          isPositive
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6" />}
          label="Cảnh báo cách ly"
          value={stats.isolationWarnings}
          change="Cần chú ý"
          isPositive={false}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {/* Recent Logs */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:rounded-3xl sm:p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#163B24]">Nhật ký gần đây</h2>
            <Link href="/farmer/logs">
              <Button variant="outline" size="sm">Xem tất cả</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {stats.recentLogs.map((log) => (
              <div key={log.id} className="rounded-2xl border-l-4 border-[#16A34A] bg-[#F0FDF4] px-4 py-4">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#163B24] sm:text-base">{log.activity}</h3>
                  <span className="text-xs text-gray-600">{log.date}</span>
                </div>
                <p className="text-sm text-gray-700 sm:text-base">{log.description}</p>
                <Badge variant="info" size="sm" className="mt-2">
                  Lô {log.cropLot}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:rounded-3xl sm:p-6">
          <h3 className="mb-4 text-xl font-bold text-[#163B24]">Thao tác nhanh</h3>
          <div className="grid gap-3 min-[420px]:grid-cols-2 lg:grid-cols-1">
            <Link href="/farmer/logs">
              <Button variant="primary" size="md" className="h-16 w-full flex-col text-sm sm:h-20 sm:text-base">
                <Plus className="h-6 w-6" />
                Nhật ký
              </Button>
            </Link>
            <Link href="/farmer/crop-lots">
              <Button variant="secondary" size="md" className="h-16 w-full flex-col text-sm sm:h-20 sm:text-base">
                <Leaf className="h-6 w-6" />
                Lô trồng
              </Button>
            </Link>
            <Link href="/farmer/harvest">
              <Button variant="outline" size="md" className="h-16 w-full flex-col text-sm sm:h-20 sm:text-base">
                <TrendingUp className="h-6 w-6" />
                Thu hoạch
              </Button>
            </Link>
            <Link href="/farmer/purchase-requests">
              <Button variant="outline" size="md" className="h-16 w-full flex-col text-sm sm:h-20 sm:text-base">
                <FileText className="h-6 w-6" />
                Yêu cầu
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Crop Lots Section */}
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:rounded-3xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#163B24]">Lô trồng hiện tại</h2>
          <Link href="/farmer/crop-lots">
            <Button variant="outline" size="sm">Tất cả</Button>
          </Link>
        </div>
        <div className="space-y-3 md:hidden">
          {mockCropLots.map((lot) => (
            <Link
              key={lot.id}
              href="/farmer/crop-lots"
              className="block rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] p-3.5 sm:p-4"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#16A34A]">{lot.id}</p>
                  <h3 className="text-lg font-bold text-[#163B24]">{lot.cropName}</h3>
                </div>
                <Badge variant={lot.status === 'ready-harvest' ? 'warning' : 'info'} size="sm">
                  {lot.status === 'growing' ? 'Đang lớn' : 'Sắp thu'}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:gap-3 sm:text-sm">
                <div>
                  <p className="text-gray-500">Diện tích</p>
                  <p className="font-bold text-[#163B24]">{lot.area} ha</p>
                </div>
                <div>
                  <p className="text-gray-500">Sức khỏe</p>
                  <p className="font-bold text-[#163B24]">{lot.health === 'good' ? 'Khỏe' : 'Cảnh báo'}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-sm">
            <thead className="border-b border-[#E0E0E0] bg-[#F7F9F7]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Lô</th>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Nông sản</th>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Diện tích</th>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Trạng thái</th>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Sức khỏe</th>
                <th className="px-4 py-3 text-left font-semibold text-[#263238]">Dự kiến thu hoạch</th>
              </tr>
            </thead>
            <tbody>
              {mockCropLots.map((lot) => (
                <tr key={lot.id} className="border-b border-[#E0E0E0] hover:bg-[#F7F9F7]">
                  <td className="px-4 py-3 font-medium text-[#263238]">{lot.id}</td>
                  <td className="px-4 py-3 text-[#263238]">{lot.cropName}</td>
                  <td className="px-4 py-3 text-[#263238]">{lot.area} ha</td>
                  <td className="px-4 py-3">
                    <Badge variant={lot.status === 'ready-harvest' ? 'warning' : 'info'} size="sm">
                      {lot.status === 'growing' ? 'Đang phát triển' : 'Sắp thu hoạch'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={lot.health === 'good' ? 'success' : 'warning'} size="sm">
                      {lot.health === 'good' ? 'Khỏe' : 'Cảnh báo'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-[#263238]">{lot.estimatedHarvestDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
