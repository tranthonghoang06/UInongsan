export type OrderStatus =
  | 'pending-confirmation'
  | 'confirmed'
  | 'pending-payment'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'completed'
  | 'cancelled';

export interface Order {
  id: string;
  status: OrderStatus;
  totalAmount: number;
  itemCount: number;
  createdDate: string;
  estimatedDelivery?: string;
  customerId?: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  unit: string;
}
