import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';

export default function NewSellerProductPage() {
  return (
    <MobileFormPage
      title="Thêm sản phẩm"
      description="Tạo sản phẩm bán lẻ với giá, tồn kho và mô tả dễ hiểu cho khách hàng."
      backHref="/seller/products"
      submitLabel="Lưu sản phẩm"
      fields={[
        { type: 'input', label: 'Tên sản phẩm', placeholder: 'Ví dụ: Rau cải xoăn tươi' },
        { type: 'input', label: 'Giá bán', placeholder: 'Ví dụ: 25000', inputType: 'number' },
        { type: 'input', label: 'Tồn kho', placeholder: 'Ví dụ: 120', inputType: 'number' },
        {
          type: 'select',
          label: 'Danh mục',
          options: [
            { value: 'rau', label: 'Rau quả' },
            { value: 'hoa-qua', label: 'Hoa quả' },
            { value: 'luong-thuc', label: 'Lương thực' },
          ],
        },
        { type: 'input', label: 'Nguồn hàng', placeholder: 'Ví dụ: Vườn Xanh 1' },
        { type: 'textarea', label: 'Mô tả sản phẩm', placeholder: 'Mô tả độ tươi, nguồn gốc, cách bảo quản...' },
      ]}
    />
  );
}
