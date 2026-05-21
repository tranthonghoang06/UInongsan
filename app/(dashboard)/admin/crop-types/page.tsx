import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import { mockCropTypes } from '@/app/data/mockData';

export default function AdminCropTypesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Quản trị" title="Loại cây trồng" description="Chuẩn hóa danh mục cây trồng và mùa vụ." />
      <DataTable
        data={mockCropTypes}
        columns={[
          { key: 'name', header: 'Cây trồng' },
          { key: 'season', header: 'Mùa vụ' },
          { key: 'durationDays', header: 'Thời gian', render: (item) => `${item.durationDays} ngày` },
        ]}
      />
    </div>
  );
}
