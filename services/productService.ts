import { mockProductReviews, mockProductVideos, mockProducts } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const productService = {
  ...createMockCrudService(mockProducts),
  getReviews: (productId: string) => mockProductReviews.filter((review) => review.productId === productId),
  getVideos: (productId: string) => mockProductVideos.filter((video) => video.productId === productId),
};
