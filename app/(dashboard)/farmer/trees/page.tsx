import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockFarmTrees } from '@/app/data/mockData';
import { Plus } from 'lucide-react';

export default function FarmerTreesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader
        eyebrow="Cây trồng"
        title="Quản lý cây trong vườn"
        description="Theo dõi giống cây, số lượng và tình trạng sức khỏe."
        actions={<Link href="/farmer/trees/new"><Button variant="primary" size="md" className="w-full sm:w-auto"><Plus className="h-4 w-4" /> Thêm cây</Button></Link>}
      />
      <DataTable
        data={mockFarmTrees}
        columns={[
          { key: 'name', header: 'Cây trồng', render: (tree) => <Link href={`/farmer/trees/${tree.id}`} className="font-bold text-[#166534]">{tree.name}</Link> },
          { key: 'variety', header: 'Giống' },
          { key: 'quantity', header: 'Số lượng' },
          { key: 'plantedDate', header: 'Ngày trồng' },
          { key: 'health', header: 'Sức khỏe', render: (tree) => <StatusBadge status={tree.health} /> },
        ]}
      />
    </div>
  );
}
