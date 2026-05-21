import { mockCategories, mockComplaints, mockCropTypes, mockPayments, mockUserList } from '@/app/data/mockData';

export const adminService = {
  listUsers: () => mockUserList,
  listComplaints: () => mockComplaints,
  listCategories: () => mockCategories,
  listCropTypes: () => mockCropTypes,
  listPayments: () => mockPayments,
};
