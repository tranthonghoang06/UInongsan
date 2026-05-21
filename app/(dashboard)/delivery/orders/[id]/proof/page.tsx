import { notFound } from 'next/navigation';
import PageHeader from '@/app/components/layout/PageHeader';
import UploadMediaBox from '@/app/components/ui/UploadMediaBox';
import Button from '@/app/components/ui/Button';
import { mockOrders } from '@/app/data/mockData';

interface DeliveryProofPageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliveryProofPage({ params }: DeliveryProofPageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Bằng chứng giao hàng" title={`Đơn ${order.id}`} description="Tải ảnh giao hàng, chữ ký hoặc ghi chú xác nhận." />
      <UploadMediaBox title="Tải bằng chứng giao hàng" description="Ảnh kiện hàng, biên nhận hoặc chữ ký người nhận." />
      <Button variant="primary" size="md" className="w-full sm:w-auto">Lưu bằng chứng</Button>
    </div>
  );
}
