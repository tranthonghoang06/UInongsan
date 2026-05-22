import { mockCropLots } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const cropLotService = createMockCrudService(mockCropLots);
