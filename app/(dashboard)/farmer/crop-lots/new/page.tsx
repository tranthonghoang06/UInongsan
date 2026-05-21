import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewCropLotPage() {
  return (
    <MobileFormPage
      title="Thêm lô trồng"
      description="Tạo lô mới với thông tin rõ ràng để dễ theo dõi chăm sóc và thu hoạch."
      backHref="/farmer/crop-lots"
      submitLabel="Lưu lô trồng"
      fields={[
        { type: 'input', label: 'Tên cây trồng', placeholder: 'Ví dụ: Cà chua hữu cơ' },
        { type: 'input', label: 'Diện tích', placeholder: 'Ví dụ: 2.5', inputType: 'number', helperText: 'Đơn vị tính theo ha.' },
        { type: 'input', label: 'Ngày xuống giống', inputType: 'date' },
        { type: 'input', label: 'Ngày dự kiến thu hoạch', inputType: 'date' },
        {
          type: 'select',
          label: 'Tình trạng hiện tại',
          options: [
            { value: 'growing', label: 'Đang phát triển' },
            { value: 'ready', label: 'Sắp thu hoạch' },
            { value: 'warning', label: 'Cần chú ý' },
          ],
        },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Ghi lại giống cây, khu vực, tình trạng đất...' },
      ]}
    />
  );
}
