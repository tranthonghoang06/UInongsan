import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewHarvestPage() {
  return (
    <MobileFormPage
      title="Ghi nhận thu hoạch"
      description="Nhập nhanh sản lượng để cập nhật kho và tạo nguồn hàng bán."
      backHref="/farmer/harvest"
      submitLabel="Lưu thu hoạch"
      fields={[
        {
          type: 'select',
          label: 'Lô trồng',
          options: [
            { value: 'LOT001', label: 'LOT001 - Cà chua' },
            { value: 'LOT002', label: 'LOT002 - Dưa chuột' },
            { value: 'LOT003', label: 'LOT003 - Ớt' },
          ],
        },
        { type: 'input', label: 'Sản lượng', placeholder: 'Ví dụ: 450', inputType: 'number' },
        {
          type: 'select',
          label: 'Đơn vị',
          options: [
            { value: 'kg', label: 'kg' },
            { value: 'tan', label: 'tấn' },
            { value: 'thung', label: 'thùng' },
          ],
        },
        { type: 'input', label: 'Ngày thu hoạch', inputType: 'date' },
        {
          type: 'select',
          label: 'Chất lượng',
          options: [
            { value: 'excellent', label: 'Loại 1' },
            { value: 'good', label: 'Loại 2' },
            { value: 'normal', label: 'Bình thường' },
          ],
        },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Ví dụ: đã phân loại, đóng gói trong ngày...' },
      ]}
    />
  );
}
