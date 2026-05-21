import { notFound } from 'next/navigation';
import PageHeader from '@/app/components/layout/PageHeader';
import UploadMediaBox from '@/app/components/ui/UploadMediaBox';
import VideoPreview from '@/app/components/ui/VideoPreview';
import { mockProductVideos, mockProducts } from '@/app/data/mockData';

interface SellerProductMediaPageProps {
  params: Promise<{ id: string }>;
}

export default async function SellerProductMediaPage({ params }: SellerProductMediaPageProps) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const videos = mockProductVideos.filter((video) => video.productId === product.id);

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <PageHeader eyebrow="Media sản phẩm" title={product.name} description="Quản lý hình ảnh và video giới thiệu sản phẩm." />
      <UploadMediaBox />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => <VideoPreview key={video.id} title={video.title} duration={video.duration} thumbnail={video.thumbnail} />)}
      </div>
    </div>
  );
}
