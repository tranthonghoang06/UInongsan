import { mockDeliveries } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const deliveryService = {
  ...createMockCrudService(mockDeliveries),
  getByOrderId: (orderId: string) => mockDeliveries.find((delivery) => delivery.orderId === orderId),
  getFailed: () => mockDeliveries.filter((delivery) => delivery.status === 'failed'),
  getReturns: () => mockDeliveries.filter((delivery) => delivery.status === 'returned'),
};
