import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockFertilizers } from '@/app/data/mockData';

export default function FarmerFertilizersPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Vật tư" title="Phân bón" description="Theo dõi tồn kho phân bón và lịch sử sử dụng gần nhất." />
      <DataTable
        data={mockFertilizers}
        columns={[
          { key: 'name', header: 'Tên phân bón' },
          { key: 'stock', header: 'Tồn kho', render: (item) => `${item.stock} ${item.unit}` },
          { key: 'supplier', header: 'Nhà cung cấp' },
          { key: 'lastUsed', header: 'Lần dùng gần nhất' },
        ]}
      />
    </div>
  );
}
