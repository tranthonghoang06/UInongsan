import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewFarmerPurchaseRequestPage() {
  return (
    <MobileFormPage
      title="Tạo yêu cầu bán"
      description="Đăng nguồn hàng để thương lái hoặc người bán gửi đề nghị mua."
      backHref="/farmer/purchase-requests"
      submitLabel="Đăng yêu cầu"
      fields={[
        { type: 'input', label: 'Tên nông sản', placeholder: 'Ví dụ: Cà chua hữu cơ' },
        { type: 'input', label: 'Số lượng có thể bán', placeholder: 'Ví dụ: 100', inputType: 'number' },
        {
          type: 'select',
          label: 'Đơn vị',
          options: [
            { value: 'kg', label: 'kg' },
            { value: 'tan', label: 'tấn' },
            { value: 'thung', label: 'thùng' },
          ],
        },
        { type: 'input', label: 'Giá mong muốn', placeholder: 'Ví dụ: 40000', inputType: 'number', helperText: 'Đơn vị VNĐ.' },
        { type: 'input', label: 'Ngày có hàng', inputType: 'date' },
        { type: 'textarea', label: 'Mô tả', placeholder: 'Mô tả chất lượng, quy cách đóng gói, địa điểm nhận hàng...' },
      ]}
    />
  );
}
