import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import QRTraceCard from '@/app/components/cards/QRTraceCard';
import { mockFarms, mockProducts, mockTraceRecords } from '@/app/data/mockData';
import { Leaf, MapPin, Ruler, ShieldCheck } from 'lucide-react';

interface FarmDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmDetailPage({ params }: FarmDetailPageProps) {
  const { id } = await params;
  const farm = mockFarms.find((item) => item.id === id);

  if (!farm) {
    notFound();
  }

  const products = mockProducts.filter((product) => product.farm === farm.name);
  const traceRecord = mockTraceRecords.find((record) => record.farmId === farm.id);

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-7xl space-y-5 px-3 py-4 sm:px-4 sm:py-8">
        <section className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
          <div className="relative aspect-[16/10] max-h-80 w-full">
            <Image src={farm.image} alt={farm.name} fill className="object-cover" priority />
          </div>
          <div className="p-3.5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Badge variant="success" size="sm">Nhà vườn xác minh</Badge>
                <h1 className="mt-3 text-2xl font-bold text-[#163B24] sm:text-3xl">{farm.name}</h1>
                <p className="mt-2 text-sm leading-6 text-gray-600">Chủ vườn: <span className="font-semibold text-[#163B24]">{farm.owner}</span></p>
              </div>
              <Link href="/products" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Xem sản phẩm
                </Button>
              </Link>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F0FDF4] p-3">
                <MapPin className="h-5 w-5 text-[#16A34A]" />
                <p className="mt-2 text-sm text-gray-600">Khu vực</p>
                <p className="font-bold text-[#163B24]">{farm.region}</p>
              </div>
              <div className="rounded-2xl bg-[#F0FDF4] p-3">
                <Ruler className="h-5 w-5 text-[#16A34A]" />
                <p className="mt-2 text-sm text-gray-600">Diện tích</p>
                <p className="font-bold text-[#163B24]">{farm.area} ha</p>
              </div>
              <div className="rounded-2xl bg-[#F0FDF4] p-3">
                <Leaf className="h-5 w-5 text-[#16A34A]" />
                <p className="mt-2 text-sm text-gray-600">Cây trồng</p>
                <p className="font-bold text-[#163B24]">{farm.crops.join(', ')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#16A34A]" />
              <h2 className="font-bold text-[#163B24]">Thông tin canh tác</h2>
            </div>
            <div className="space-y-3 text-sm leading-6 text-gray-600">
              <p>Nhà vườn áp dụng quy trình ghi nhật ký canh tác, theo dõi lô trồng và cập nhật thu hoạch theo từng đợt.</p>
              <p>Mỗi lô hàng có thể truy xuất nguồn gốc bằng QR để khách hàng kiểm tra nhà vườn, ngày thu hoạch và trạng thái kiểm định.</p>
            </div>
          </div>
          {traceRecord && (
            <QRTraceCard
              qrCode={traceRecord.qrCode}
              productName={traceRecord.productName}
              farmName={traceRecord.farmName}
              harvestDate={traceRecord.harvestDate}
              status={traceRecord.status}
            />
          )}
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[#163B24]">Sản phẩm từ nhà vườn</h2>
          <div className="grid gap-3 min-[380px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-2 text-sm font-bold text-[#163B24]">{product.name}</h3>
                  <p className="mt-2 text-base font-bold text-[#16A34A]">{product.price.toLocaleString()}₫</p>
                  <p className="mt-1 text-xs text-gray-600">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
