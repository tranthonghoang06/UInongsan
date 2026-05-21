import { mockProductReviews, mockProductVideos, mockProducts } from '@/app/data/mockData';

export const productService = {
  list: () => mockProducts,
  getById: (id: string) => mockProducts.find((product) => product.id === id),
  getReviews: (productId: string) => mockProductReviews.filter((review) => review.productId === productId),
  getVideos: (productId: string) => mockProductVideos.filter((video) => video.productId === productId),
};
