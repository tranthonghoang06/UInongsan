import DemoRoutePage from '@/app/components/business/DemoRoutePage';
import { mockOrders } from '@/app/data/mockData';

export default async function TraderOrderDetailPage({ params }: PageProps<'/trader/orders/[id]'>) {
  const { id } = await params;
  const order = mockOrders.find((item) => item.id === id) ?? mockOrders[0];

  return (
    <DemoRoutePage
      title={`Đơn mua sỉ ${order.id}`}
      description="Chi tiết đơn mua sỉ của thương lái, dùng để demo luồng giao dịch và vận chuyển."
      records={[{
        Mã: order.id,
        'Số lượng mục': order.itemCount,
        'Tổng tiền': order.totalAmount,
        'Trạng thái': order.status,
      }]}
    />
  );
}
