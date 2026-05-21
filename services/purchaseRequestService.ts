import { mockPurchaseRequests } from '@/app/data/mockData';

export const purchaseRequestService = {
  list: () => mockPurchaseRequests,
  getById: (id: string) => mockPurchaseRequests.find((request) => request.id === id),
};
