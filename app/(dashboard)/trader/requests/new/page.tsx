import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewTraderRequestPage() {
  return (
    <MobileFormPage
      title="Gửi yêu cầu mua"
      description="Tạo đề nghị mua hàng rõ ràng để nhà nông phản hồi nhanh."
      backHref="/trader/requests"
      submitLabel="Gửi yêu cầu"
      fields={[
        { type: 'input', label: 'Tên nông sản', placeholder: 'Ví dụ: Cà chua hữu cơ' },
        { type: 'input', label: 'Số lượng cần mua', placeholder: 'Ví dụ: 300', inputType: 'number' },
        {
          type: 'select',
          label: 'Đơn vị',
          options: [
            { value: 'kg', label: 'kg' },
            { value: 'tan', label: 'tấn' },
            { value: 'thung', label: 'thùng' },
          ],
        },
        { type: 'input', label: 'Giá đề xuất', placeholder: 'Ví dụ: 42000', inputType: 'number' },
        { type: 'input', label: 'Ngày cần nhận', inputType: 'date' },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Yêu cầu chất lượng, điểm nhận hàng, quy cách đóng gói...' },
      ]}
    />
  );
}
