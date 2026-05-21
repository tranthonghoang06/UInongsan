import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockDeliveries } from '@/app/data/mockData';

const returnDeliveries = [{ ...mockDeliveries[1], id: 'DEL-RETURN-DEMO', status: 'returned' as const }];

export default function DeliveryReturnsPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Vận chuyển" title="Hoàn trả" description="Quản lý đơn hoàn trả về kho hoặc nhà vườn." />
      <DataTable
        data={returnDeliveries}
        columns={[
          { key: 'orderId', header: 'Đơn hàng' },
          { key: 'pickupAddress', header: 'Điểm lấy' },
          { key: 'dropoffAddress', header: 'Điểm trả' },
          { key: 'status', header: 'Trạng thái', render: (item) => <StatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
