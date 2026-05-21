import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function FarmerTreeNewPage() {
  return (
    <MobileFormPage
      title="Thêm cây trồng"
      description="Ghi nhận giống cây, số lượng và ngày trồng trong vườn."
      backHref="/farmer/trees"
      submitLabel="Lưu cây trồng"
      fields={[
        { type: 'input', label: 'Tên cây', placeholder: 'Cà chua beef' },
        { type: 'input', label: 'Giống', placeholder: 'Beef tomato' },
        { type: 'input', label: 'Số lượng', inputType: 'number', placeholder: '1200' },
        { type: 'input', label: 'Ngày trồng', inputType: 'date' },
        { type: 'select', label: 'Sức khỏe', options: [{ value: 'good', label: 'Tốt' }, { value: 'warning', label: 'Cần kiểm tra' }, { value: 'critical', label: 'Nguy hiểm' }] },
      ]}
    />
  );
}
