import { notFound } from 'next/navigation';
import MobileFormPage from '@/app/(dashboard)/_components/MobileFormPage';
import { mockProducts } from '@/app/data/mockData';

interface SellerProductEditPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerProductEditPage({ params }: SellerProductEditPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <MobileFormPage
      title={`Chỉnh sửa ${product.name}`}
      description="Cập nhật thông tin bán hàng, giá và trạng thái tồn kho."
      backHref={`/seller/products/${product.id}`}
      submitLabel="Lưu sản phẩm"
      fields={[
        { type: 'input', label: 'Tên sản phẩm', placeholder: product.name },
        { type: 'select', label: 'Danh mục', options: [{ value: 'Rau quả', label: 'Rau quả' }, { value: 'Hoa quả', label: 'Hoa quả' }, { value: 'Combo', label: 'Combo' }] },
        { type: 'input', label: 'Giá bán', inputType: 'number', placeholder: String(product.price) },
        { type: 'input', label: 'Nhà vườn', placeholder: product.farm },
        { type: 'textarea', label: 'Mô tả', placeholder: 'Mô tả sản phẩm, tiêu chuẩn canh tác và gợi ý sử dụng.' },
        { type: 'select', label: 'Trạng thái', options: [{ value: 'in-stock', label: 'Đang bán' }, { value: 'out-of-stock', label: 'Tạm hết' }] },
      ]}
    />
  );
}
