'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockFarms, mockProducts } from '@/app/data/mockData';
import { MapPinned, PackageSearch, Plus, Sprout } from 'lucide-react';

export default function TraderSourcesPage() {
  return (
    <DataPage
      title="Tìm nguồn hàng"
      description="Tra cứu nhà vườn, vùng trồng và mặt hàng có thể đặt mua sỉ."
      actionLabel="Tạo yêu cầu mua"
      actionHref="/trader/sources/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Nhà vườn', value: mockFarms.length, note: 'Đang kết nối', icon: <Sprout className="h-5 w-5" /> },
        { label: 'Mặt hàng', value: mockProducts.length, note: 'Có thể đặt', icon: <PackageSearch className="h-5 w-5" /> },
        { label: 'Khu vực', value: new Set(mockFarms.map((farm) => farm.region)).size, note: 'Nguồn cung', icon: <MapPinned className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'farm', label: 'Nguồn hàng' },
        { key: 'region', label: 'Khu vực' },
        { key: 'crops', label: 'Nông sản' },
        { key: 'area', label: 'Diện tích' },
        { key: 'products', label: 'Số SP' },
      ]}
      rows={mockFarms.map((farm) => ({
        id: farm.id,
        cells: {
          farm: (
            <div className="flex items-center gap-3">
              <Image src={farm.image} alt={farm.name} width={44} height={44} className="h-11 w-11 rounded-lg object-cover" />
              <div>
                <p className="font-semibold">{farm.name}</p>
                <p className="text-xs text-gray-500">{farm.owner}</p>
              </div>
            </div>
          ),
          region: farm.region,
          crops: <div className="flex flex-wrap gap-1">{farm.crops.map((crop) => <Badge key={crop} variant="info" size="sm">{crop}</Badge>)}</div>,
          area: `${farm.area} ha`,
          products: `${farm.totalProducts} sản phẩm`,
        },
      }))}
    />
  );
}
