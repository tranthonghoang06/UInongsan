import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Textarea from '@/app/components/ui/Textarea';
import { mockPurchaseRequests } from '@/app/data/mockData';
import { Send } from 'lucide-react';

interface TraderNegotiationPageProps {
  params: Promise<{ id: string }>;
}

export default async function TraderNegotiationPage({ params }: TraderNegotiationPageProps) {
  const { id } = await params;
  const request = mockPurchaseRequests.find((item) => item.id === id);

  if (!request) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Thương lượng</p>
        <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{request.productName}</h1>
        <p className="mt-2 text-sm text-gray-600">Yêu cầu #{request.id}</p>
      </div>
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <div className="space-y-3">
          <div className="max-w-[85%] rounded-2xl bg-[#F0FDF4] p-3 text-sm">
            <p className="font-semibold text-[#163B24]">Nhà vườn</p>
            <p className="mt-1 text-gray-600">Có thể giao đủ {request.quantity} {request.unit}, cần xác nhận thời gian lấy hàng.</p>
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl bg-[#16A34A] p-3 text-sm text-white">
            <p className="font-semibold">Thương lái</p>
            <p className="mt-1 opacity-90">Tôi có thể lấy hàng trong sáng mai, giữ giá đề xuất hiện tại.</p>
          </div>
        </div>
        <div className="mt-5 space-y-3 border-t border-[#DCFCE7] pt-4">
          <Textarea label="Phản hồi" placeholder="Nhập nội dung thương lượng..." />
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <Send className="h-4 w-4" />
            Gửi phản hồi
          </Button>
        </div>
      </section>
      <Link href={`/trader/requests/${request.id}`} className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">
          Quay lại yêu cầu
        </Button>
      </Link>
    </div>
  );
}
