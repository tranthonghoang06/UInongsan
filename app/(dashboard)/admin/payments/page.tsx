import DataTable from '@/app/components/ui/DataTable';
import PageHeader from '@/app/components/layout/PageHeader';
import PaymentStatusBadge from '@/app/components/ui/PaymentStatusBadge';
import { PAYMENT_METHOD_LABELS } from '@/constants';
import { mockPayments } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Tài chính" title="Thanh toán" description="Theo dõi phương thức, trạng thái và giá trị thanh toán." />
      <DataTable
        data={mockPayments}
        columns={[
          { key: 'orderId', header: 'Đơn hàng' },
          { key: 'method', header: 'Phương thức', render: (item) => PAYMENT_METHOD_LABELS[item.method] },
          { key: 'amount', header: 'Số tiền', render: (item) => formatCurrency(item.amount) },
          { key: 'status', header: 'Trạng thái', render: (item) => <PaymentStatusBadge status={item.status} /> },
        ]}
      />
    </div>
  );
}
