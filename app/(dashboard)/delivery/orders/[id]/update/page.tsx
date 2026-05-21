import { notFound } from 'next/navigation';
import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';
import { mockOrders } from '@/app/data/mockData';

interface DeliveryOrderUpdatePageProps {
  params: Promise<{ id: string }>;
}

export default async function DeliveryOrderUpdatePage({ params }: DeliveryOrderUpdatePageProps) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return (
    <MobileFormPage
      title={`Cập nhật đơn ${order.id}`}
      description="Ghi nhận trạng thái vận chuyển và ghi chú giao hàng."
      backHref={`/delivery/orders/${order.id}`}
      submitLabel="Lưu trạng thái"
      fields={[
        {
          type: 'select',
          label: 'Trạng thái giao hàng',
          options: [
            { value: 'assigned', label: 'Đã phân công' },
            { value: 'picked-up', label: 'Đã lấy hàng' },
            { value: 'in-transit', label: 'Đang vận chuyển' },
            { value: 'delivered', label: 'Đã giao' },
            { value: 'failed', label: 'Giao thất bại' },
          ],
        },
        { type: 'input', label: 'Thời gian dự kiến', placeholder: order.estimatedDelivery ?? '2024-01-17 10:30' },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Tình trạng hàng, ảnh giao nhận hoặc lý do giao thất bại.' },
      ]}
    />
  );
}
