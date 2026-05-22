export const PUBLIC_ROUTES = {
  home: '/',
  products: '/products',
  farms: '/farms',
  trace: '/trace/QR-PIONE-001',
  orders: '/orders',
  support: '/support',
};

export const DASHBOARD_ROUTES = {
  farmer: '/farmer/dashboard',
  trader: '/trader/dashboard',
  seller: '/seller/dashboard',
  delivery: '/delivery/dashboard',
  admin: '/admin/dashboard',
};

export const ROUTES = {
  public: PUBLIC_ROUTES,
  dashboard: DASHBOARD_ROUTES,
  auth: {
    login: '/login',
    register: '/register',
    unauthorized: '/unauthorized',
  },
  customer: {
    dashboard: '/customer/dashboard',
    profile: '/customer/profile',
    orders: '/customer/orders',
    addresses: '/customer/addresses',
    reviews: '/customer/reviews',
    wishlist: '/customer/wishlist',
    notifications: '/customer/notifications',
  },
};
