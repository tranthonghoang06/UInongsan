import { notFound } from 'next/navigation';
import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';
import { mockFarms } from '@/app/data/mockData';

interface FarmerFarmEditPageProps {
  params: Promise<{ id: string }>;
}

export default async function FarmerFarmEditPage({ params }: FarmerFarmEditPageProps) {
  const { id } = await params;
  const farm = mockFarms.find((item) => item.id === id);

  if (!farm) {
    notFound();
  }

  return (
    <MobileFormPage
      title={`Chỉnh sửa ${farm.name}`}
      description="Cập nhật thông tin vườn, diện tích và vùng trồng."
      backHref={`/farmer/farms/${farm.id}`}
      submitLabel="Lưu thay đổi"
      fields={[
        { type: 'input', label: 'Tên vườn', placeholder: farm.name },
        { type: 'input', label: 'Khu vực', placeholder: farm.region },
        { type: 'input', label: 'Diện tích', inputType: 'number', placeholder: String(farm.area) },
        { type: 'textarea', label: 'Cây trồng', placeholder: farm.crops.join(', ') },
      ]}
    />
  );
}
