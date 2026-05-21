import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockInventoryItems } from '@/app/data/mockData';

export default function SellerInventoryPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Kho hàng" title="Tồn kho" description="Theo dõi tồn kho theo sản phẩm, kho và đơn vị tính." />
      <DataTable
        data={mockInventoryItems}
        columns={[
          { key: 'productName', header: 'Sản phẩm' },
          { key: 'quantity', header: 'Tồn kho', render: (item) => `${item.quantity} ${item.unit}` },
          { key: 'warehouse', header: 'Kho' },
          { key: 'status', header: 'Trạng thái', render: (item) => <StatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
