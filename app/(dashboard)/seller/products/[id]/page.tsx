import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockProducts } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { Boxes, Pencil, Star } from 'lucide-react';

interface SellerProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerProductDetailPage({ params }: SellerProductDetailPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Sản phẩm</p>
          <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{product.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant={product.inStock ? 'success' : 'warning'} size="sm">{product.inStock ? 'Đang bán' : 'Tạm hết'}</Badge>
            <Badge variant="info" size="sm">{product.category}</Badge>
          </div>
        </div>
        <Link href={`/seller/products/${product.id}/edit`} className="w-full sm:w-auto">
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <Pencil className="h-4 w-4" />
            Chỉnh sửa
          </Button>
        </Link>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <p className="text-sm text-gray-600">Giá bán</p>
            <p className="mt-2 text-2xl font-bold text-[#16A34A]">{formatCurrency(product.price)}</p>
          </div>
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <Star className="h-5 w-5 text-[#F9A825]" />
            <p className="mt-2 text-sm text-gray-600">Đánh giá</p>
            <p className="font-bold text-[#163B24]">{product.rating}/5 ({product.reviewCount})</p>
          </div>
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <Boxes className="h-5 w-5 text-[#16A34A]" />
            <p className="mt-2 text-sm text-gray-600">Nhà vườn</p>
            <p className="font-bold text-[#163B24]">{product.farm}</p>
          </div>
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <p className="text-sm text-gray-600">Khu vực</p>
            <p className="mt-2 font-bold text-[#163B24]">{product.region}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
