import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockCropLots, mockFarmingLogs, mockHarvests } from '@/app/data/mockData';
import { CalendarDays, Leaf, Pencil, Ruler } from 'lucide-react';

interface FarmerCropLotDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerCropLotDetailPage({ params }: FarmerCropLotDetailPageProps) {
  const { id } = await params;
  const lot = mockCropLots.find((item) => item.id === id);

  if (!lot) {
    notFound();
  }

  const logs = mockFarmingLogs.filter((item) => item.cropLot === lot.id);
  const harvests = mockHarvests.filter((item) => item.lotId === lot.id);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Lô trồng</p>
          <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{lot.cropName} - {lot.id}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge status={lot.status} />
            <Badge variant={lot.health === 'good' ? 'success' : 'warning'} size="sm">
              {lot.health === 'good' ? 'Sức khỏe tốt' : 'Cần kiểm tra'}
            </Badge>
          </div>
        </div>
        <Link href={`/farmer/crop-lots/${lot.id}/edit`} className="w-full sm:w-auto">
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <Pencil className="h-4 w-4" />
            Chỉnh sửa
          </Button>
        </Link>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Ruler className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Diện tích</p>
          <p className="font-bold text-[#163B24]">{lot.area} ha</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Leaf className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Ngày trồng</p>
          <p className="font-bold text-[#163B24]">{lot.plantedDate}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <CalendarDays className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Dự kiến thu hoạch</p>
          <p className="font-bold text-[#163B24]">{lot.estimatedHarvestDate}</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="mb-4 font-bold text-[#163B24]">Nhật ký gần đây</h2>
          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="border-l-2 border-[#16A34A] pl-3 text-sm">
                <p className="font-semibold text-[#163B24]">{log.date} - {log.activity}</p>
                <p className="mt-1 leading-6 text-gray-600">{log.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="mb-4 font-bold text-[#163B24]">Thu hoạch liên quan</h2>
          <div className="space-y-3">
            {harvests.length > 0 ? harvests.map((harvest) => (
              <Link key={harvest.id} href={`/farmer/harvest/${harvest.id}`} className="block rounded-2xl bg-[#F0FDF4] p-3">
                <p className="font-semibold text-[#163B24]">{harvest.id}</p>
                <p className="text-sm text-gray-600">{harvest.quantity} {harvest.unit} - {harvest.harvestDate}</p>
              </Link>
            )) : <p className="text-sm text-gray-600">Chưa ghi nhận thu hoạch cho lô này.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
