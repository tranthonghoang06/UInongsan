import { mockOrders, mockPayments } from '@/app/data/mockData';

export const orderService = {
  list: () => mockOrders,
  getById: (id: string) => mockOrders.find((order) => order.id === id),
  getPayment: (orderId: string) => mockPayments.find((payment) => payment.orderId === orderId),
};
