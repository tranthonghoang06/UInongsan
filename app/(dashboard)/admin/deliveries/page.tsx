import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockDeliveries } from '@/app/data/mockData';

export default function AdminDeliveriesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Quản trị" title="Vận chuyển" description="Giám sát đơn vị giao hàng, trạng thái và ETA." />
      <DataTable
        data={mockDeliveries}
        columns={[
          { key: 'orderId', header: 'Đơn hàng' },
          { key: 'driverName', header: 'Tài xế' },
          { key: 'estimatedArrival', header: 'ETA' },
          { key: 'status', header: 'Trạng thái', render: (item) => <StatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
