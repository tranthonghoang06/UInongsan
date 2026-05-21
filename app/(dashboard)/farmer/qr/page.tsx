import PageHeader from '@/app/components/layout/PageHeader';
import QRCodeBox from '@/app/components/ui/QRCodeBox';
import QRTraceCard from '@/app/components/cards/QRTraceCard';
import { mockTraceRecords } from '@/app/data/mockData';

export default function FarmerQRPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Truy xuất" title="Quản lý mã QR" description="Tạo và theo dõi mã truy xuất nguồn gốc cho từng lô hàng." />
      <section className="grid gap-4 lg:grid-cols-[0.7fr_1fr]">
        <QRCodeBox code={mockTraceRecords[0]?.qrCode ?? 'QR-PIONE-001'} />
        <div className="space-y-3">
          {mockTraceRecords.map((record) => (
            <QRTraceCard key={record.qrCode} qrCode={record.qrCode} productName={record.productName} farmName={record.farmName} harvestDate={record.harvestDate} status={record.status} />
          ))}
        </div>
      </section>
    </div>
  );
}
