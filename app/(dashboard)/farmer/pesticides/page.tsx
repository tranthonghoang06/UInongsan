import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockPesticides } from '@/app/data/mockData';

export default function FarmerPesticidesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Vật tư" title="Thuốc và chế phẩm" description="Quản lý chế phẩm sinh học, tồn kho và thời gian cách ly." />
      <DataTable
        data={mockPesticides}
        columns={[
          { key: 'name', header: 'Tên chế phẩm' },
          { key: 'stock', header: 'Tồn kho', render: (item) => `${item.stock} ${item.unit}` },
          { key: 'safetyDays', header: 'Cách ly', render: (item) => `${item.safetyDays} ngày` },
          { key: 'lastUsed', header: 'Lần dùng gần nhất' },
        ]}
      />
    </div>
  );
}
