import DemoRoutePage from '@/app/components/business/DemoRoutePage';
import { mockPurchaseRequests } from '@/app/data/mockData';

export default async function FarmerPurchaseRequestDetailPage({ params }: PageProps<'/farmer/purchase-requests/[id]'>) {
  const { id } = await params;
  const request = mockPurchaseRequests.find((item) => item.id === id) ?? mockPurchaseRequests[0];

  return (
    <DemoRoutePage
      title={`Chi tiết yêu cầu ${request.id}`}
      description={`Theo dõi yêu cầu thu mua ${request.productName}, số lượng ${request.quantity}${request.unit}.`}
      records={[{
        Mã: request.id,
        'Nông sản': request.productName,
        'Giá đề xuất': request.proposedPrice,
        'Trạng thái': request.status,
      }]}
    />
  );
}
