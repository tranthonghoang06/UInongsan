import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockFarms } from '@/app/data/mockData';
import { Plus } from 'lucide-react';

export default function FarmerFarmsPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader
        eyebrow="Nhà vườn"
        title="Quản lý vườn"
        description="Theo dõi thông tin vườn, diện tích, cây trồng và sản phẩm đang kinh doanh."
        actions={
          <Link href="/farmer/farms/new">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <Plus className="h-4 w-4" />
              Thêm vườn
            </Button>
          </Link>
        }
      />
      <DataTable
        data={mockFarms}
        columns={[
          { key: 'name', header: 'Tên vườn', render: (farm) => <Link href={`/farmer/farms/${farm.id}`} className="font-bold text-[#166534]">{farm.name}</Link> },
          { key: 'region', header: 'Khu vực' },
          { key: 'area', header: 'Diện tích', render: (farm) => `${farm.area} ha` },
          { key: 'totalProducts', header: 'Sản phẩm' },
          { key: 'status', header: 'Trạng thái', render: () => <StatusBadge status="active" /> },
        ]}
      />
    </div>
  );
}
