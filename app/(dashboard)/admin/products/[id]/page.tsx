import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import QRTraceCard from '@/app/components/cards/QRTraceCard';
import { mockProducts, mockTraceRecords } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { BadgeCheck, ShieldAlert } from 'lucide-react';

interface AdminProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminProductDetailPage({ params }: AdminProductDetailPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const traceRecord = mockTraceRecords.find((item) => item.productId === product.id);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Kiểm duyệt sản phẩm</p>
        <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{product.name}</h1>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-gray-600">Giá bán</p>
                <p className="mt-1 text-2xl font-bold text-[#16A34A]">{formatCurrency(product.price)}</p>
              </div>
              <Badge variant={product.inStock ? 'success' : 'warning'} size="sm">{product.inStock ? 'Đang bán' : 'Tạm hết'}</Badge>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              <p><span className="font-semibold text-[#163B24]">Danh mục:</span> {product.category}</p>
              <p><span className="font-semibold text-[#163B24]">Nhà vườn:</span> {product.farm}</p>
              <p><span className="font-semibold text-[#163B24]">Khu vực:</span> {product.region}</p>
              <p><span className="font-semibold text-[#163B24]">Đánh giá:</span> {product.rating}/5</p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button variant="primary" size="md"><BadgeCheck className="h-4 w-4" /> Duyệt sản phẩm</Button>
            <Button variant="outline" size="md"><ShieldAlert className="h-4 w-4" /> Yêu cầu sửa</Button>
          </div>
        </div>
      </section>

      {traceRecord && (
        <QRTraceCard
          qrCode={traceRecord.qrCode}
          productName={traceRecord.productName}
          farmName={traceRecord.farmName}
          harvestDate={traceRecord.harvestDate}
          status={traceRecord.status}
        />
      )}

      <Link href="/admin/products" className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại sản phẩm</Button>
      </Link>
    </div>
  );
}
