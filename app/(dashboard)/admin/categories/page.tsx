import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockCategories } from '@/app/data/mockData';

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Quản trị" title="Danh mục sản phẩm" description="Quản lý nhóm sản phẩm hiển thị trên sàn." />
      <DataTable
        data={mockCategories}
        columns={[
          { key: 'name', header: 'Danh mục' },
          { key: 'productCount', header: 'Số sản phẩm' },
          { key: 'status', header: 'Trạng thái', render: (item) => <StatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
