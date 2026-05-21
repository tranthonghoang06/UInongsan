import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import { DASHBOARD_ROLES } from '@/constants';

const roleRows = DASHBOARD_ROLES.map((role) => ({ id: role.role, ...role }));

export default function AdminRolesPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Quản trị" title="Vai trò người dùng" description="Theo dõi các nhóm quyền chính trong hệ thống." />
      <DataTable
        data={roleRows}
        columns={[
          { key: 'label', header: 'Vai trò' },
          { key: 'role', header: 'Mã' },
          { key: 'home', header: 'Trang mặc định' },
        ]}
      />
    </div>
  );
}
