import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function FarmerFarmNewPage() {
  return (
    <MobileFormPage
      title="Thêm vườn mới"
      description="Khai báo vùng trồng, diện tích và nhóm cây trồng chính."
      backHref="/farmer/farms"
      submitLabel="Lưu vườn"
      fields={[
        { type: 'input', label: 'Tên vườn', placeholder: 'Ví dụ: Vườn Xanh 4' },
        { type: 'input', label: 'Khu vực', placeholder: 'Huyện, tỉnh/thành' },
        { type: 'input', label: 'Diện tích', inputType: 'number', placeholder: '5.5' },
        { type: 'textarea', label: 'Cây trồng chính', placeholder: 'Cà chua, dưa chuột, ớt...' },
      ]}
    />
  );
}
