import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewTraderSourcePage() {
  return (
    <MobileFormPage
      title="Lưu nguồn hàng"
      description="Ghi lại nhà vườn hoặc nguồn cung tiềm năng để dễ liên hệ lại."
      backHref="/trader/sources"
      submitLabel="Lưu nguồn hàng"
      fields={[
        { type: 'input', label: 'Tên nhà vườn', placeholder: 'Ví dụ: Vườn Xanh 1' },
        { type: 'input', label: 'Người liên hệ', placeholder: 'Tên chủ vườn hoặc người bán' },
        { type: 'input', label: 'Số điện thoại', placeholder: '090...' },
        { type: 'input', label: 'Khu vực', placeholder: 'Ví dụ: Đà Lạt' },
        { type: 'input', label: 'Sản phẩm chính', placeholder: 'Ví dụ: Dâu tây, rau cải' },
        { type: 'textarea', label: 'Ghi chú', placeholder: 'Sản lượng, mùa vụ, cách giao nhận...' },
      ]}
    />
  );
}
