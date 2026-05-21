import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewSellerPurchaseRequestPage() {
  return (
    <MobileFormPage
      title="Tạo yêu cầu thu mua"
      description="Gửi nhu cầu nhập hàng để nhà nông hoặc thương lái phản hồi nhanh."
      backHref="/seller/purchase-requests"
      submitLabel="Gửi yêu cầu"
      fields={[
        { type: 'input', label: 'Nông sản cần mua', placeholder: 'Ví dụ: Dâu tây Đà Lạt' },
        { type: 'input', label: 'Số lượng', placeholder: 'Ví dụ: 50', inputType: 'number' },
        {
          type: 'select',
          label: 'Đơn vị',
          options: [
            { value: 'kg', label: 'kg' },
            { value: 'tan', label: 'tấn' },
            { value: 'thung', label: 'thùng' },
          ],
        },
        { type: 'input', label: 'Giá đề xuất', placeholder: 'Ví dụ: 80000', inputType: 'number' },
        { type: 'input', label: 'Hạn nhận hàng', inputType: 'date' },
        { type: 'textarea', label: 'Yêu cầu chất lượng', placeholder: 'Ví dụ: loại 1, giao buổi sáng, đóng thùng 5kg...' },
      ]}
    />
  );
}
