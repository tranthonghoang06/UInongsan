import Link from 'next/link';
import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockOrders } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
export default function CustomerOrdersPage() {
  return (
    <main className="space-y-4 pb-8">
      <PageHeader eyebrow="Đơn hàng" title="Đơn hàng của tôi" description="Theo dõi trạng thái đơn và lịch sử mua hàng." />
      <DataTable
        data={mockOrders}
        columns={[
          { key: 'id', header: 'Mã đơn', render: (order) => <Link href={`/customer/orders/${order.id}`} className="font-bold text-[#166534]">#{order.id}</Link> },
          { key: 'createdDate', header: 'Ngày tạo' },
          { key: 'itemCount', header: 'Sản phẩm' },
          { key: 'totalAmount', header: 'Tổng tiền', render: (order) => formatCurrency(order.totalAmount) },
          { key: 'status', header: 'Trạng thái', render: (order) => <StatusBadge status={order.status} /> },
        ]}
      />
    </main>
  );
}
