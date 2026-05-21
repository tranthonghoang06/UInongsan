export type UserRole = 'customer' | 'farmer' | 'trader' | 'seller' | 'delivery' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: string;
  region?: string;
  avatar?: string;
}
