import { mockFarmTrees, mockFarms } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const farmService = {
  ...createMockCrudService(mockFarms),
  getTrees: (farmId?: string) => mockFarmTrees.filter((tree) => !farmId || tree.farmId === farmId),
};
