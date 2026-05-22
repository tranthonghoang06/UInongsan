import { mockOrders, mockPayments } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const orderService = {
  ...createMockCrudService(mockOrders),
  getPayment: (orderId: string) => mockPayments.find((payment) => payment.orderId === orderId),
};
