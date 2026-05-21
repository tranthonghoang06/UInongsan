'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { mockProducts } from '@/app/data/mockData';
import { BadgeCheck, Leaf, PackageSearch, ShieldAlert } from 'lucide-react';

export default function AdminProductsPage() {
  return (
    <DataPage
      title="Sản phẩm"
      description="Kiểm duyệt sản phẩm, tồn kho và chất lượng nội dung đăng bán."
      stats={[
        { label: 'Tổng sản phẩm', value: mockProducts.length, note: 'Đang hiển thị', icon: <Leaf className="h-5 w-5" /> },
        { label: 'Còn hàng', value: mockProducts.filter((product) => product.inStock).length, note: 'Có thể bán', icon: <PackageSearch className="h-5 w-5" /> },
        { label: 'Đã duyệt', value: mockProducts.length - 1, note: 'Nội dung hợp lệ', icon: <BadgeCheck className="h-5 w-5" /> },
        { label: 'Cần kiểm tra', value: 1, note: 'Ảnh hoặc mô tả', icon: <ShieldAlert className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'product', label: 'Sản phẩm' },
        { key: 'category', label: 'Danh mục' },
        { key: 'farm', label: 'Nhà vườn' },
        { key: 'price', label: 'Giá' },
        { key: 'status', label: 'Trạng thái' },
      ]}
      rows={mockProducts.map((product) => ({
        id: product.id,
        cells: {
          product: (
            <div className="flex items-center gap-3">
              <Image src={product.image} alt={product.name} width={44} height={44} className="h-11 w-11 rounded-lg object-cover" />
              <span className="font-semibold">{product.name}</span>
            </div>
          ),
          category: product.category,
          farm: product.farm,
          price: `${product.price.toLocaleString()}₫`,
          status: <Badge variant={product.inStock ? 'success' : 'warning'} size="sm">{product.inStock ? 'Đang bán' : 'Tạm hết'}</Badge>,
        },
      }))}
    />
  );
}
