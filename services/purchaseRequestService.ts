import { mockPurchaseRequests } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const purchaseRequestService = {
  ...createMockCrudService(mockPurchaseRequests),
};
