'use client';

import React, { useState, useMemo } from 'react';
import PublicHeader from '@/app/components/layout/PublicHeader';
import SearchFilterBar from '@/app/components/layout/SearchFilterBar';
import ProductCard from '@/app/components/cards/ProductCard';
import EmptyState from '@/app/components/layout/EmptyState';
import { mockProducts } from '@/app/data/mockData';
import { Package } from 'lucide-react';

export default function ProductsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.farm.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesRegion = !filters.region || product.region === filters.region;
      
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchQuery, filters]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const filterOptions = [
    {
      key: 'category',
      label: 'Danh mục',
      options: [
        { value: 'Rau quả', label: 'Rau quả' },
        { value: 'Hoa quả', label: 'Hoa quả' },
        { value: 'Lương thực', label: 'Lương thực' },
      ],
    },
    {
      key: 'region',
      label: 'Khu vực',
      options: [
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Đà Lạt', label: 'Đà Lạt' },
        { value: 'Cần Thơ', label: 'Cần Thơ' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader cartCount={cartCount} />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-8">
        {/* Page Header */}
        <div className="mb-5 sm:mb-8">
          <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Sản phẩm</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">Khám phá những sản phẩm tươi sạch từ các nhà vườn uy tín</p>
        </div>

        {/* Search & Filter */}
        <SearchFilterBar
          onSearch={setSearchQuery}
          onFilterChange={setFilters}
          filterOptions={filterOptions}
        />

        {/* Products Grid */}
        <div className="mt-5 sm:mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Package className="h-20 w-20" />}
              title="Không tìm thấy sản phẩm"
              description="Thử thay đổi bộ lọc hoặc tìm kiếm từ khóa khác"
              action={{
                label: 'Xóa bộ lọc',
                onClick: () => {
                  setSearchQuery('');
                  setFilters({});
                },
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
