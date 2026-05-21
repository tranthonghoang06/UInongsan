'use client';

import React from 'react';
import CropLotCard from '@/app/components/cards/CropLotCard';
import Button from '@/app/components/ui/Button';
import DataPage from '../../_components/DataPage';
import { mockCropLots } from '@/app/data/mockData';
import { AlertCircle, Leaf, Plus, Sprout } from 'lucide-react';

export default function FarmerCropLotsPage() {
  return (
    <DataPage
      title="Lô trồng"
      description="Theo dõi tiến độ, sức khỏe cây trồng và lịch thu hoạch từng lô."
      actionLabel="Thêm lô trồng"
      actionHref="/farmer/crop-lots/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Tổng lô', value: mockCropLots.length, note: 'Đang quản lý', icon: <Leaf className="h-5 w-5" /> },
        { label: 'Sắp thu hoạch', value: mockCropLots.filter((lot) => lot.status === 'ready-harvest').length, note: 'Cần chuẩn bị', icon: <Sprout className="h-5 w-5" /> },
        { label: 'Cảnh báo', value: mockCropLots.filter((lot) => lot.health !== 'good').length, note: 'Kiểm tra sớm', icon: <AlertCircle className="h-5 w-5" /> },
      ]}
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockCropLots.map((lot) => (
          <CropLotCard
            key={lot.id}
            lotId={lot.id}
            cropName={lot.cropName}
            area={lot.area}
            plantedDate={lot.plantedDate}
            estimatedHarvestDate={lot.estimatedHarvestDate}
            status={lot.status}
            health={lot.health}
            onViewDetails={() => console.log('View crop lot:', lot.id)}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-bold text-[#263238]">Kế hoạch chăm sóc tuần này</h2>
            <p className="mt-1 text-sm text-gray-600">Ưu tiên LOT003 vì đang có cảnh báo sức khỏe.</p>
          </div>
          <Button variant="outline" size="sm">Xem lịch chăm sóc</Button>
        </div>
      </div>
    </DataPage>
  );
}
