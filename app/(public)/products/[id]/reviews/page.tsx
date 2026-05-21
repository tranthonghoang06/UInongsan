import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import PageHeader from '@/app/components/layout/PageHeader';
import Button from '@/app/components/ui/Button';
import { mockProductReviews, mockProducts } from '@/app/data/mockData';
import { Star } from 'lucide-react';

interface ProductReviewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductReviewsPage({ params }: ProductReviewsPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const reviews = mockProductReviews.filter((review) => review.productId === product.id);

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-5xl space-y-4 px-3 py-4 sm:px-4 sm:py-8">
        <PageHeader eyebrow="Đánh giá" title={product.name} description="Phản hồi từ khách hàng đã mua sản phẩm." />
        <section className="space-y-3">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-[#163B24]">{review.userName}</p>
                  <p className="text-sm text-gray-600">{review.createdDate}</p>
                </div>
                <div className="flex text-[#F9A825]">
                  {Array.from({ length: review.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{review.comment}</p>
            </article>
          ))}
        </section>
        <Link href={`/products/${product.id}`}><Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại sản phẩm</Button></Link>
      </main>
    </div>
  );
}
