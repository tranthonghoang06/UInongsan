import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockFarms } from '@/app/data/mockData';

export default function TraderSourcesComparePage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="So sánh" title="So sánh nguồn hàng" description="Đối chiếu diện tích, khu vực và số lượng sản phẩm của các nhà vườn." />
      <DataTable
        data={mockFarms}
        columns={[
          { key: 'name', header: 'Nhà vườn' },
          { key: 'region', header: 'Khu vực' },
          { key: 'area', header: 'Diện tích', render: (farm) => `${farm.area} ha` },
          { key: 'totalProducts', header: 'Sản phẩm' },
          { key: 'crops', header: 'Cây trồng', render: (farm) => farm.crops.join(', ') },
        ]}
      />
    </div>
  );
}
