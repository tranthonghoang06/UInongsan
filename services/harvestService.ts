import { mockHarvests } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const harvestService = createMockCrudService(mockHarvests);
