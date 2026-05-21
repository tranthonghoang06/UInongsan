import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import PageHeader from '@/app/components/layout/PageHeader';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';

interface SellerPurchaseRequestDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerPurchaseRequestDetailPage({ params }: SellerPurchaseRequestDetailPageProps) {
  const { id } = await params;
  const request = mockPurchaseRequests.find((item) => item.id === id);

  if (!request) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader
        eyebrow="Yêu cầu thu mua"
        title={`#${request.id} - ${request.productName}`}
        description={`${request.quantity} ${request.unit}, giá đề xuất ${formatCurrency(request.proposedPrice)}/${request.unit}.`}
        actions={<Link href={`/seller/purchase-requests/${request.id}/respond`}><Button variant="primary" size="md" className="w-full sm:w-auto">Phản hồi</Button></Link>}
      />
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <StatusBadge status={request.status} />
        <p className="mt-4 text-sm leading-6 text-gray-600">Người bán có thể xác nhận khả năng cung ứng, đề xuất lại giá hoặc chuyển yêu cầu sang đơn thu mua.</p>
      </section>
    </div>
  );
}
