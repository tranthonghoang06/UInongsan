import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { mockHarvests } from '@/app/data/mockData';
import { CalendarDays, PackageCheck, Scale } from 'lucide-react';

interface FarmerHarvestDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerHarvestDetailPage({ params }: FarmerHarvestDetailPageProps) {
  const { id } = await params;
  const harvest = mockHarvests.find((item) => item.id === id);

  if (!harvest) {
    notFound();
  }

  const qualityLabel = harvest.quality === 'excellent' ? 'Xuất sắc' : harvest.quality === 'good' ? 'Tốt' : 'Đạt';

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Thu hoạch</p>
        <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{harvest.cropName} - {harvest.id}</h1>
        <Badge variant={harvest.quality === 'excellent' ? 'success' : 'info'} size="sm" className="mt-3">
          {qualityLabel}
        </Badge>
      </div>
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <PackageCheck className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Lô trồng</p>
          <p className="font-bold text-[#163B24]">{harvest.lotId}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Scale className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Sản lượng</p>
          <p className="font-bold text-[#163B24]">{harvest.quantity} {harvest.unit}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <CalendarDays className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Ngày thu hoạch</p>
          <p className="font-bold text-[#163B24]">{harvest.harvestDate}</p>
        </div>
      </section>
      <Link href="/farmer/harvest" className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">
          Quay lại danh sách
        </Button>
      </Link>
    </div>
  );
}
