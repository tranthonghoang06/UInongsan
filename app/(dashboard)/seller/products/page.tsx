'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockProducts } from '@/app/data/mockData';
import { Boxes, Leaf, Package, Plus } from 'lucide-react';

export default function SellerProductsPage() {
  return (
    <DataPage
      title="Sản phẩm"
      description="Quản lý danh mục, tồn kho và trạng thái bán hàng."
      actionLabel="Thêm sản phẩm"
      actionHref="/seller/products/new"
      actionIcon={<Plus className="h-4 w-4" />}
      stats={[
        { label: 'Tổng sản phẩm', value: mockProducts.length, note: 'Đang niêm yết', icon: <Leaf className="h-5 w-5" /> },
        { label: 'Còn hàng', value: mockProducts.filter((product) => product.inStock).length, note: 'Sẵn sàng bán', icon: <Package className="h-5 w-5" /> },
        { label: 'Hết hàng', value: mockProducts.filter((product) => !product.inStock).length, note: 'Cần nhập thêm', icon: <Boxes className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'product', label: 'Sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'price', label: 'Giá' },
        { key: 'stock', label: 'Tồn kho' },
        { key: 'rating', label: 'Đánh giá' },
      ]}
      rows={mockProducts.map((product) => ({
        id: product.id,
        cells: {
          product: (
            <div className="flex items-center gap-3">
              <Image src={product.image} alt={product.name} width={44} height={44} className="h-11 w-11 rounded-lg object-cover" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500">{product.farm}</p>
              </div>
            </div>
          ),
          category: product.category,
          price: `${product.price.toLocaleString()}₫`,
          stock: <Badge variant={product.inStock ? 'success' : 'error'} size="sm">{product.inStock ? 'Còn hàng' : 'Hết hàng'}</Badge>,
          rating: `${product.rating} / 5`,
        },
      }))}
    />
  );
}
