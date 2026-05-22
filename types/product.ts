export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  farm: string;
  region: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  category: string;
  status?: 'draft' | 'active' | 'out-of-stock' | 'hidden';
  description?: string;
  unit?: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  createdDate: string;
}
