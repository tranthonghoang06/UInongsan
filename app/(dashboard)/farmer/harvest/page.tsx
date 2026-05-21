'use client';

import React from 'react';
import HarvestCard from '@/app/components/cards/HarvestCard';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockHarvests } from '@/app/data/mockData';
import { CalendarCheck, PackageCheck, Plus, Scale } from 'lucide-react';

export default function FarmerHarvestPage() {
  const totalQuantity = mockHarvests.reduce((sum, harvest) => sum + harvest.quantity, 0);

  return (
    <DataPage
      title="Thu hoạch"
      description="Ghi nhận sản lượng, chất lượng và thời điểm thu hoạch của từng lô."
      actionLabel="Ghi nhận thu hoạch"
      actionHref="/farmer/harvest/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Đợt thu hoạch', value: mockHarvests.length, note: 'Trong tháng', icon: <CalendarCheck className="h-5 w-5" /> },
        { label: 'Tổng sản lượng', value: `${totalQuantity} kg`, note: 'Đã nhập kho', icon: <Scale className="h-5 w-5" /> },
        { label: 'Chất lượng cao', value: mockHarvests.filter((item) => item.quality === 'excellent').length, note: 'Đợt đạt chuẩn', icon: <PackageCheck className="h-5 w-5" /> },
      ]}
    >
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockHarvests.map((harvest) => (
          <HarvestCard
            key={harvest.id}
            harvestId={harvest.id}
            lotId={harvest.lotId}
            cropName={harvest.cropName}
            quantity={harvest.quantity}
            unit={harvest.unit}
            harvestDate={harvest.harvestDate}
            quality={harvest.quality}
            onViewDetails={() => console.log('View harvest:', harvest.id)}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <h2 className="mb-3 font-bold text-[#263238] sm:mb-4">Lô sẵn sàng giao thương</h2>
        <div className="flex flex-wrap gap-2">
          {mockHarvests.map((harvest) => (
            <Badge key={harvest.id} variant="success">{harvest.cropName} - {harvest.quantity} {harvest.unit}</Badge>
          ))}
        </div>
      </div>
    </DataPage>
  );
}
