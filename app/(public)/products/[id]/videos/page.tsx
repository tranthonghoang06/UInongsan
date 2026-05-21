import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicHeader from '@/app/components/layout/PublicHeader';
import PageHeader from '@/app/components/layout/PageHeader';
import Button from '@/app/components/ui/Button';
import VideoPreview from '@/app/components/ui/VideoPreview';
import { mockProductVideos, mockProducts } from '@/app/data/mockData';

interface ProductVideosPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductVideosPage({ params }: ProductVideosPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const videos = mockProductVideos.filter((video) => video.productId === product.id);

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <PublicHeader />
      <main className="mx-auto max-w-5xl space-y-4 px-3 py-4 sm:px-4 sm:py-8">
        <PageHeader eyebrow="Video" title={product.name} description="Video hướng dẫn, quy trình canh tác và đóng gói." />
        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => <VideoPreview key={video.id} title={video.title} duration={video.duration} thumbnail={video.thumbnail} />)}
        </section>
        <Link href={`/products/${product.id}`}><Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại sản phẩm</Button></Link>
      </main>
    </div>
  );
}
