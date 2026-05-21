import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { formatCurrency } from '@/utils';
import { Handshake, MessageSquare, Scale } from 'lucide-react';

interface TraderRequestDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function TraderRequestDetailPage({ params }: TraderRequestDetailPageProps) {
  const { id } = await params;
  const request = mockPurchaseRequests.find((item) => item.id === id);

  if (!request) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Yêu cầu mua</p>
          <h1 className="mt-1 text-2xl font-bold text-[#163B24]">#{request.id}</h1>
          <StatusBadge status={request.status} className="mt-3" />
        </div>
        <Link href={`/trader/requests/${request.id}/negotiation`} className="w-full sm:w-auto">
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <MessageSquare className="h-4 w-4" />
            Thương lượng
          </Button>
        </Link>
      </div>
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Handshake className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Sản phẩm</p>
          <p className="font-bold text-[#163B24]">{request.productName}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <Scale className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Số lượng</p>
          <p className="font-bold text-[#163B24]">{request.quantity} {request.unit}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <p className="text-sm text-gray-600">Giá đề xuất</p>
          <p className="mt-2 text-xl font-bold text-[#16A34A]">{formatCurrency(request.proposedPrice)}/{request.unit}</p>
        </div>
      </section>
    </div>
  );
}
