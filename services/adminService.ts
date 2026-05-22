import { mockCategories, mockComplaints, mockCropTypes, mockPayments, mockUserList } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const adminService = {
  ...createMockCrudService(mockUserList),
  listUsers: () => mockUserList,
  listComplaints: () => mockComplaints,
  listCategories: () => mockCategories,
  listCropTypes: () => mockCropTypes,
  listPayments: () => mockPayments,
};
