import { mockFarmTrees, mockFarms } from '@/app/data/mockData';

export const farmService = {
  list: () => mockFarms,
  getById: (id: string) => mockFarms.find((farm) => farm.id === id),
  getTrees: (farmId?: string) => mockFarmTrees.filter((tree) => !farmId || tree.farmId === farmId),
};
