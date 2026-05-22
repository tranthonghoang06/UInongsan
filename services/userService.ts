import { mockUserList } from '@/app/data/mockData';
import { createMockCrudService } from './mockApi';

export const userService = createMockCrudService(mockUserList);
