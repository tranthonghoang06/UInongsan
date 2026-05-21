import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockDeliveries } from '@/app/data/mockData';

const failedDeliveries = mockDeliveries.filter((delivery) => delivery.status === 'failed');
const fallbackDeliveries = failedDeliveries.length > 0 ? failedDeliveries : [{ ...mockDeliveries[0], id: 'DEL-FAILED-DEMO', status: 'failed' as const }];

export default function DeliveryFailedPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Vận chuyển" title="Đơn giao thất bại" description="Theo dõi các đơn cần xử lý lại hoặc liên hệ khách hàng." />
      <DataTable
        data={fallbackDeliveries}
        columns={[
          { key: 'orderId', header: 'Đơn hàng' },
          { key: 'dropoffAddress', header: 'Địa chỉ giao' },
          { key: 'estimatedArrival', header: 'Thời gian' },
          { key: 'status', header: 'Trạng thái', render: (item) => <StatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
