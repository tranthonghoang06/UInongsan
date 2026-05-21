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
}
