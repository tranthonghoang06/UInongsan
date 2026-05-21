import { notFound } from 'next/navigation';
import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';
import { mockCropLots } from '@/app/data/mockData';

interface FarmerCropLotEditPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerCropLotEditPage({ params }: FarmerCropLotEditPageProps) {
  const { id } = await params;
  const lot = mockCropLots.find((item) => item.id === id);

  if (!lot) {
    notFound();
  }

  return (
    <MobileFormPage
      title={`Chỉnh sửa ${lot.id}`}
      description="Cập nhật thông tin lô trồng, sức khỏe cây trồng và lịch thu hoạch."
      backHref={`/farmer/crop-lots/${lot.id}`}
      submitLabel="Lưu lô trồng"
      fields={[
        { type: 'input', label: 'Tên cây trồng', placeholder: lot.cropName },
        { type: 'input', label: 'Diện tích', inputType: 'number', placeholder: String(lot.area) },
        { type: 'input', label: 'Ngày trồng', inputType: 'date', placeholder: lot.plantedDate },
        { type: 'input', label: 'Dự kiến thu hoạch', inputType: 'date', placeholder: lot.estimatedHarvestDate },
        {
          type: 'select',
          label: 'Trạng thái',
          options: [
            { value: 'growing', label: 'Đang phát triển' },
            { value: 'ready-harvest', label: 'Sắp thu hoạch' },
            { value: 'harvested', label: 'Đã thu hoạch' },
          ],
        },
        {
          type: 'select',
          label: 'Sức khỏe',
          options: [
            { value: 'good', label: 'Tốt' },
            { value: 'warning', label: 'Cần kiểm tra' },
            { value: 'critical', label: 'Nguy hiểm' },
          ],
        },
      ]}
    />
  );
}
