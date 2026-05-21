import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import QRTraceCard from '@/app/components/cards/QRTraceCard';
import { mockCropLots, mockFarmingLogs, mockHarvests, mockProducts, mockTraceRecords } from '@/app/data/mockData';
import { CalendarDays, Leaf, Sprout } from 'lucide-react';

interface TracePageProps {
  params: Promise<{ qrCode: string }>;
}

export default async function TracePage({ params }: TracePageProps) {
  const { qrCode } = await params;
  const record = mockTraceRecords.find((item) => item.qrCode === qrCode);

  if (!record) {
    notFound();
  }

  const product = mockProducts.find((item) => item.id === record.productId);
  const cropLot = mockCropLots.find((item) => item.id === record.cropLotId);
  const harvest = mockHarvests.find((item) => item.id === record.harvestId);
  const logs = mockFarmingLogs.filter((item) => item.cropLot === record.cropLotId);

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-5xl space-y-4 px-3 py-4 sm:px-4 sm:py-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Truy xuất nguồn gốc</p>
          <h1 className="mt-1 text-2xl font-bold text-[#163B24] sm:text-3xl">{record.productName}</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">Mã QR: {record.qrCode}</p>
        </div>

        <QRTraceCard
          qrCode={record.qrCode}
          productName={record.productName}
          farmName={record.farmName}
          harvestDate={record.harvestDate}
          status={record.status}
        />

        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <Leaf className="h-5 w-5 text-[#16A34A]" />
            <p className="mt-2 text-sm text-gray-600">Lô trồng</p>
            <p className="font-bold text-[#163B24]">{cropLot?.id ?? 'Đang cập nhật'}</p>
            {cropLot && <StatusBadge status={cropLot.status} className="mt-2" />}
          </div>
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <CalendarDays className="h-5 w-5 text-[#16A34A]" />
            <p className="mt-2 text-sm text-gray-600">Ngày thu hoạch</p>
            <p className="font-bold text-[#163B24]">{harvest?.harvestDate ?? record.harvestDate}</p>
          </div>
          <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <Sprout className="h-5 w-5 text-[#16A34A]" />
            <p className="mt-2 text-sm text-gray-600">Sản lượng</p>
            <p className="font-bold text-[#163B24]">{harvest ? `${harvest.quantity} ${harvest.unit}` : 'Đang cập nhật'}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <h2 className="mb-4 font-bold text-[#163B24]">Nhật ký canh tác</h2>
          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="border-l-2 border-[#16A34A] pl-3 text-sm">
                <p className="font-semibold text-[#163B24]">{log.date} - {log.activity}</p>
                <p className="mt-1 leading-6 text-gray-600">{log.description}</p>
              </div>
            ))}
          </div>
        </section>

        {product && (
          <Link href={`/products/${product.id}`} className="block">
            <Button variant="primary" size="md" className="w-full">
              Xem sản phẩm
            </Button>
          </Link>
        )}
      </main>
    </div>
  );
}
