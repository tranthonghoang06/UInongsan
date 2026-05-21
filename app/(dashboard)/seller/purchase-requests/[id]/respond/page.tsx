import { notFound } from 'next/navigation';
import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';
import { mockPurchaseRequests } from '@/app/data/mockData';

interface SellerPurchaseRequestRespondPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerPurchaseRequestRespondPage({ params }: SellerPurchaseRequestRespondPageProps) {
  const { id } = await params;
  const request = mockPurchaseRequests.find((item) => item.id === id);

  if (!request) {
    notFound();
  }

  return (
    <MobileFormPage
      title={`Phản hồi ${request.id}`}
      description="Xác nhận khả năng cung ứng và gửi phản hồi cho yêu cầu thu mua."
      backHref={`/seller/purchase-requests/${request.id}`}
      submitLabel="Gửi phản hồi"
      fields={[
        { type: 'select', label: 'Phản hồi', options: [{ value: 'accepted', label: 'Chấp nhận' }, { value: 'negotiating', label: 'Thương lượng' }, { value: 'rejected', label: 'Từ chối' }] },
        { type: 'input', label: 'Giá phản hồi', inputType: 'number', placeholder: String(request.proposedPrice) },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Thời gian cung ứng, điều kiện giao hàng...' },
      ]}
    />
  );
}
