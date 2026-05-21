import { mockDeliveries } from '@/app/data/mockData';

export const deliveryService = {
  list: () => mockDeliveries,
  getByOrderId: (orderId: string) => mockDeliveries.find((delivery) => delivery.orderId === orderId),
  getFailed: () => mockDeliveries.filter((delivery) => delivery.status === 'failed'),
  getReturns: () => mockDeliveries.filter((delivery) => delivery.status === 'returned'),
};
