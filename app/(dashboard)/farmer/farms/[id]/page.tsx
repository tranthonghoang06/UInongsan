import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import PageHeader from '@/app/components/layout/PageHeader';
import QRCodeBox from '@/app/components/ui/QRCodeBox';
import { mockFarmTrees, mockFarms, mockProducts, mockTraceRecords } from '@/app/data/mockData';
import { Leaf, Pencil, Ruler } from 'lucide-react';

interface FarmerFarmDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerFarmDetailPage({ params }: FarmerFarmDetailPageProps) {
  const { id } = await params;
  const farm = mockFarms.find((item) => item.id === id);

  if (!farm) {
    notFound();
  }

  const trees = mockFarmTrees.filter((tree) => tree.farmId === farm.id);
  const products = mockProducts.filter((product) => product.farm === farm.name);
  const trace = mockTraceRecords.find((record) => record.farmId === farm.id);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader
        eyebrow="Chi tiết vườn"
        title={farm.name}
        description={`Chủ vườn ${farm.owner}, khu vực ${farm.region}.`}
        actions={
          <Link href={`/farmer/farms/${farm.id}/edit`}>
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <Pencil className="h-4 w-4" />
              Chỉnh sửa
            </Button>
          </Link>
        }
      />
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Ruler className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Diện tích</p>
          <p className="font-bold text-[#163B24]">{farm.area} ha</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Leaf className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Cây trồng</p>
          <p className="font-bold text-[#163B24]">{trees.length} nhóm cây</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <p className="text-sm text-gray-600">Sản phẩm</p>
          <p className="mt-2 font-bold text-[#163B24]">{products.length} sản phẩm</p>
        </div>
      </section>
      {trace && <QRCodeBox code={trace.qrCode} label="QR truy xuất đại diện" />}
    </div>
  );
}
