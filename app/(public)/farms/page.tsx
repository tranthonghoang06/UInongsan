'use client';

import React, { useState } from 'react';
import PublicHeader from '@/app/components/layout/PublicHeader';
import FarmCard from '@/app/components/cards/FarmCard';
import SearchFilterBar from '@/app/components/layout/SearchFilterBar';
import { mockFarms } from '@/app/data/mockData';

export default function FarmsPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});

  const farms = mockFarms.filter((farm) => {
    const matchesSearch = [farm.name, farm.owner, farm.region, ...farm.crops]
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesRegion = !filters.region || farm.region === filters.region;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-7xl space-y-4 px-3 py-4 sm:space-y-6 sm:px-4 sm:py-8">
        <div>
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Nhà vườn</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">Khám phá các vùng trồng đang cung cấp nông sản tươi cho hệ thống.</p>
        </div>

        <SearchFilterBar
          onSearch={setQuery}
          onFilterChange={setFilters}
          filterOptions={[
            {
              key: 'region',
              label: 'Khu vực',
              options: [
                { value: '', label: 'Tất cả' },
                { value: 'Hà Nội', label: 'Hà Nội' },
                { value: 'Đà Lạt', label: 'Đà Lạt' },
                { value: 'Cần Thơ', label: 'Cần Thơ' },
              ],
            },
          ]}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {farms.map((farm) => (
            <FarmCard key={farm.id} {...farm} onViewDetails={() => console.log('View farm:', farm.id)} />
          ))}
        </div>
      </main>
    </div>
  );
}
