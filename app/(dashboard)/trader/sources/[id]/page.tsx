import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockFarms, mockProducts } from '@/app/data/mockData';
import { Leaf, MapPin, Ruler } from 'lucide-react';

interface TraderSourceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function TraderSourceDetailPage({ params }: TraderSourceDetailPageProps) {
  const { id } = await params;
  const farm = mockFarms.find((item) => item.id === id);

  if (!farm) {
    notFound();
  }

  const products = mockProducts.filter((product) => product.farm === farm.name);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Nguồn hàng" title={farm.name} description={`Chủ vườn ${farm.owner}, khu vực ${farm.region}.`} />
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <MapPin className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Khu vực</p>
          <p className="font-bold text-[#163B24]">{farm.region}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Ruler className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Diện tích</p>
          <p className="font-bold text-[#163B24]">{farm.area} ha</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Leaf className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Sản phẩm</p>
          <p className="font-bold text-[#163B24]">{products.length}</p>
        </div>
      </section>
      <div className="grid gap-2 sm:grid-cols-2">
        <Link href="/trader/requests/new"><Button variant="primary" size="md" className="w-full">Gửi yêu cầu mua</Button></Link>
        <Link href="/trader/sources/compare"><Button variant="outline" size="md" className="w-full">So sánh nguồn</Button></Link>
      </div>
      <StatusBadge status="active" />
    </div>
  );
}
