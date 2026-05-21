import { notFound } from 'next/navigation';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockFarmTrees } from '@/app/data/mockData';
import { CalendarDays, Leaf, Sprout } from 'lucide-react';

interface FarmerTreeDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerTreeDetailPage({ params }: FarmerTreeDetailPageProps) {
  const { id } = await params;
  const tree = mockFarmTrees.find((item) => item.id === id);

  if (!tree) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Chi tiết cây trồng" title={tree.name} description={`Giống ${tree.variety}`} />
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Sprout className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Số lượng</p>
          <p className="font-bold text-[#163B24]">{tree.quantity} cây</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <CalendarDays className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Ngày trồng</p>
          <p className="font-bold text-[#163B24]">{tree.plantedDate}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Leaf className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Sức khỏe</p>
          <StatusBadge status={tree.health} className="mt-2" />
        </div>
      </section>
    </div>
  );
}
