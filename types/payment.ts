export type PaymentStatus = 'unpaid' | 'paid' | 'refunded' | 'failed';
export type PaymentMethod = 'cod' | 'bank-transfer' | 'wallet' | 'card';

export interface Payment {
  id: string;
  orderId: string;
  method: PaymentMethod;
  status: PaymentStatus;
  amount: number;
  paidAt?: string;
}
