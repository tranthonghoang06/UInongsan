import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import PageHeader from '@/app/components/layout/PageHeader';
import Button from '@/app/components/ui/Button';
import Timeline from '@/app/components/ui/Timeline';
import { mockProducts } from '@/app/data/mockData';

interface ProductProcessPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductProcessPage({ params }: ProductProcessPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-5xl space-y-4 px-3 py-4 sm:px-4 sm:py-8">
        <PageHeader eyebrow="Quy trình" title={product.name} description="Các mốc chính từ gieo trồng đến đóng gói." />
        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
          <Timeline
            items={[
              { title: 'Chuẩn bị đất', date: '2023-11-25', description: 'Làm đất, bổ sung phân hữu cơ và kiểm tra độ ẩm.', status: 'done' },
              { title: 'Gieo trồng', date: '2023-12-01', description: 'Ghi nhận giống cây và mật độ trồng.', status: 'done' },
              { title: 'Chăm sóc', date: '2024-01-05', description: 'Tưới nước, bón phân và kiểm tra sâu bệnh.', status: 'done' },
              { title: 'Thu hoạch', date: '2024-01-15', description: 'Phân loại, đóng gói và gắn QR truy xuất.', status: 'current' },
            ]}
          />
        </section>
        <Link href={`/products/${product.id}`}><Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại sản phẩm</Button></Link>
      </main>
    </div>
  );
}
