import DemoRoutePage from '@/app/components/business/DemoRoutePage';
import { mockProductReviews } from '@/app/data/mockData';

export default function CustomerReviewsPage() {
  return (
    <DemoRoutePage
      title="Đánh giá đã viết"
      description="Theo dõi các đánh giá sản phẩm nông sản khách hàng đã gửi."
      records={mockProductReviews.map((review) => ({
        Mã: review.id,
        'Sản phẩm': review.productId,
        'Điểm': review.rating,
        'Trạng thái': 'Đã đăng',
      }))}
    />
  );
}
