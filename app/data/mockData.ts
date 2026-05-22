import type {
  Complaint,
  DashboardStat,
  Delivery,
  Farm,
  Fertilizer,
  FarmingLog,
  Harvest,
  Notification,
  Order,
  Payment,
  Pesticide,
  Product,
  ProductReview,
  PurchaseRequest,
  QRCodeRecord,
  Tree,
  User,
} from '@/types';

export const mockProducts: Product[] = [
  {
    id: 'PRD001',
    image: '/images/photos/product-papaya.jpg',
    name: 'Xoài Cát Chu Cao Lãnh',
    price: 65000,
    originalPrice: 78000,
    farm: 'Vườn Mekong Xanh',
    region: 'Đồng Tháp',
    inStock: true,
    rating: 4.8,
    reviewCount: 126,
    category: 'Trái cây',
    status: 'active',
    unit: 'kg',
    description: 'Xoài chín tự nhiên, canh tác theo quy trình ghi nhật ký đầy đủ.',
  },
  {
    id: 'PRD002',
    image: '/images/photos/product-tomato.jpg',
    name: 'Cam sành Hàm Yên',
    price: 42000,
    farm: 'Trang trại Sông Lô',
    region: 'Tuyên Quang',
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    category: 'Trái cây',
    status: 'active',
    unit: 'kg',
  },
  {
    id: 'PRD003',
    image: '/images/photos/product-strawberry.jpg',
    name: 'Sầu riêng Ri6 Cai Lậy',
    price: 145000,
    originalPrice: 165000,
    farm: 'Vườn Tiền Giang Ri6',
    region: 'Tiền Giang',
    inStock: true,
    rating: 4.9,
    reviewCount: 215,
    category: 'Trái cây',
    status: 'active',
    unit: 'kg',
  },
  {
    id: 'PRD004',
    image: '/images/photos/product-carrot.jpg',
    name: 'Gạo ST25 Sóc Trăng',
    price: 36000,
    farm: 'HTX Lúa thơm Phù Sa',
    region: 'Sóc Trăng',
    inStock: true,
    rating: 4.9,
    reviewCount: 302,
    category: 'Lương thực',
    status: 'active',
    unit: 'kg',
  },
  {
    id: 'PRD005',
    image: '/images/photos/product-kale.jpg',
    name: 'Rau sạch Đà Lạt',
    price: 28000,
    farm: 'Nhà kính Langbiang',
    region: 'Lâm Đồng',
    inStock: true,
    rating: 4.6,
    reviewCount: 84,
    category: 'Rau sạch',
    status: 'active',
    unit: 'bó',
  },
  {
    id: 'PRD006',
    image: '/images/photos/product-tomato.jpg',
    name: 'Cà phê Robusta Buôn Ma Thuột',
    price: 98000,
    farm: 'Nông trại Bazan',
    region: 'Đắk Lắk',
    inStock: true,
    rating: 4.8,
    reviewCount: 141,
    category: 'Nông sản khô',
    status: 'active',
    unit: 'kg',
  },
  {
    id: 'PRD007',
    image: '/images/photos/product-papaya.jpg',
    name: 'Thanh long ruột đỏ',
    price: 39000,
    farm: 'Vườn Bình Thuận',
    region: 'Bình Thuận',
    inStock: false,
    rating: 4.5,
    reviewCount: 57,
    category: 'Trái cây',
    status: 'out-of-stock',
    unit: 'kg',
  },
  {
    id: 'PRD008',
    image: '/images/photos/product-carrot.jpg',
    name: 'Hồ tiêu Phú Quốc',
    price: 185000,
    farm: 'Vườn tiêu Đảo Ngọc',
    region: 'Kiên Giang',
    inStock: true,
    rating: 4.7,
    reviewCount: 76,
    category: 'Gia vị',
    status: 'active',
    unit: 'kg',
  },
];

export const mockFarms: Farm[] = [
  {
    id: 'FARM001',
    image: '/images/photos/farm-paddy-vietnam.jpg',
    name: 'Vườn Mekong Xanh',
    owner: 'Nguyễn Văn An',
    region: 'Đồng Tháp',
    area: 8.5,
    crops: ['Xoài Cát Chu', 'Thanh long', 'Rau sạch'],
    totalProducts: 18,
  },
  {
    id: 'FARM002',
    image: '/images/photos/farm-rice-vietnam.jpg',
    name: 'HTX Lúa thơm Phù Sa',
    owner: 'Trần Thị Hạnh',
    region: 'Sóc Trăng',
    area: 24,
    crops: ['Gạo ST25', 'Lúa hữu cơ'],
    totalProducts: 9,
  },
  {
    id: 'FARM003',
    image: '/images/photos/farm-greenhouse.jpg',
    name: 'Nhà kính Langbiang',
    owner: 'Lê Minh Khoa',
    region: 'Lâm Đồng',
    area: 5.2,
    crops: ['Rau sạch', 'Cà chua', 'Dâu tây'],
    totalProducts: 22,
  },
];

export const mockVideos = [
  {
    id: 'VID001',
    thumbnail: '/images/photos/product-papaya.jpg',
    title: 'Quy trình chăm sóc Xoài Cát Chu',
    description: 'Từ ghi nhật ký canh tác đến đóng gói truy xuất QR.',
    duration: '08:45',
    farm: 'Vườn Mekong Xanh',
  },
  {
    id: 'VID002',
    thumbnail: '/images/photos/farm-rice-vietnam.jpg',
    title: 'Canh tác Gạo ST25 theo mùa vụ',
    description: 'Quản lý lô trồng, phân bón và lịch thu hoạch.',
    duration: '12:20',
    farm: 'HTX Lúa thơm Phù Sa',
  },
];

export const mockCropLots = [
  {
    id: 'LOT001',
    cropName: 'Xoài Cát Chu',
    area: 3.2,
    plantedDate: '2026-01-10',
    estimatedHarvestDate: '2026-06-20',
    status: 'growing' as const,
    health: 'good' as const,
  },
  {
    id: 'LOT002',
    cropName: 'Gạo ST25',
    area: 12,
    plantedDate: '2026-02-05',
    estimatedHarvestDate: '2026-05-30',
    status: 'ready-harvest' as const,
    health: 'good' as const,
  },
  {
    id: 'LOT003',
    cropName: 'Rau sạch',
    area: 1.6,
    plantedDate: '2026-04-02',
    estimatedHarvestDate: '2026-05-28',
    status: 'growing' as const,
    health: 'warning' as const,
  },
];

export const mockFarmTrees: Tree[] = [
  { id: 'TREE001', farmId: 'FARM001', name: 'Xoài Cát Chu', variety: 'Cát Chu', quantity: 450, plantedDate: '2025-08-20', health: 'good' },
  { id: 'TREE002', farmId: 'FARM002', name: 'Lúa ST25', variety: 'ST25', quantity: 12000, plantedDate: '2026-02-05', health: 'good' },
  { id: 'TREE003', farmId: 'FARM003', name: 'Rau thủy canh', variety: 'Xà lách Romaine', quantity: 2200, plantedDate: '2026-04-02', health: 'warning' },
];

export const mockFarmingLogs: FarmingLog[] = [
  { id: 'LOG001', date: '2026-05-20', activity: 'Tưới nước', cropLot: 'LOT001', description: 'Tưới nhỏ giọt 45 phút, độ ẩm đạt chuẩn.', images: [] },
  { id: 'LOG002', date: '2026-05-21', activity: 'Bón phân', cropLot: 'LOT002', description: 'Bón phân hữu cơ vi sinh cho ruộng ST25.', images: [] },
  { id: 'LOG003', date: '2026-05-22', activity: 'Kiểm tra sâu bệnh', cropLot: 'LOT003', description: 'Phát hiện vàng lá nhẹ, theo dõi thêm 48 giờ.', images: [] },
];

export const mockFertilizers: Fertilizer[] = [
  { id: 'FER001', name: 'Phân hữu cơ vi sinh', stock: 120, unit: 'kg', lastUsed: '2026-05-21', supplier: 'Bio Farm' },
  { id: 'FER002', name: 'Phân trùn quế', stock: 80, unit: 'kg', lastUsed: '2026-05-18', supplier: 'Green Soil' },
  { id: 'FER003', name: 'Dung dịch kali hữu cơ', stock: 35, unit: 'lít', lastUsed: '2026-05-12', supplier: 'AgriCare' },
];

export const mockPesticides: Pesticide[] = [
  { id: 'PES001', name: 'Dầu neem sinh học', stock: 24, unit: 'lít', safetyDays: 5, lastUsed: '2026-05-19' },
  { id: 'PES002', name: 'Chế phẩm nấm đối kháng', stock: 16, unit: 'gói', safetyDays: 3, lastUsed: '2026-05-15' },
  { id: 'PES003', name: 'Bẫy dính côn trùng', stock: 60, unit: 'tấm', safetyDays: 0, lastUsed: '2026-05-22' },
];

export const mockHarvests: Harvest[] = [
  { id: 'HAR001', lotId: 'LOT002', cropName: 'Gạo ST25', quantity: 6800, unit: 'kg', harvestDate: '2026-05-30', quality: 'excellent' },
  { id: 'HAR002', lotId: 'LOT001', cropName: 'Xoài Cát Chu', quantity: 1250, unit: 'kg', harvestDate: '2026-06-20', quality: 'good' },
];

export const mockTraceRecords: QRCodeRecord[] = [
  {
    qrCode: 'QR-AGRI-001',
    productId: 'PRD001',
    productName: 'Xoài Cát Chu Cao Lãnh',
    farmId: 'FARM001',
    farmName: 'Vườn Mekong Xanh',
    cropLotId: 'LOT001',
    harvestId: 'HAR002',
    harvestDate: '2026-06-20',
    status: 'completed',
  },
  {
    qrCode: 'QR-AGRI-004',
    productId: 'PRD004',
    productName: 'Gạo ST25 Sóc Trăng',
    farmId: 'FARM002',
    farmName: 'HTX Lúa thơm Phù Sa',
    cropLotId: 'LOT002',
    harvestId: 'HAR001',
    harvestDate: '2026-05-30',
    status: 'completed',
  },
];

export const mockPurchaseRequests: PurchaseRequest[] = [
  { id: 'REQ001', productName: 'Xoài Cát Chu', quantity: 500, unit: 'kg', proposedPrice: 58000, status: 'pending-response', createdDate: '2026-05-18' },
  { id: 'REQ002', productName: 'Gạo ST25', quantity: 2000, unit: 'kg', proposedPrice: 32000, status: 'negotiating', createdDate: '2026-05-17' },
  { id: 'REQ003', productName: 'Rau sạch Đà Lạt', quantity: 300, unit: 'bó', proposedPrice: 24000, status: 'accepted', createdDate: '2026-05-16' },
];

export const mockOrders: Order[] = [
  { id: 'ORD001', customerId: 'CUS001', status: 'pending-confirmation', totalAmount: 195000, itemCount: 3, createdDate: '2026-05-20', estimatedDelivery: '2026-05-23' },
  { id: 'ORD002', customerId: 'CUS001', status: 'delivering', totalAmount: 420000, itemCount: 5, createdDate: '2026-05-18', estimatedDelivery: '2026-05-22' },
  { id: 'ORD003', customerId: 'CUS002', status: 'completed', totalAmount: 980000, itemCount: 8, createdDate: '2026-05-10', estimatedDelivery: '2026-05-14' },
];

export const mockDeliveries: Delivery[] = [
  {
    id: 'DEL001',
    orderId: 'ORD001',
    driverName: 'Lê Minh Quân',
    driverPhone: '0912345678',
    pickupAddress: 'Vườn Mekong Xanh, Đồng Tháp',
    dropoffAddress: '12 Nguyễn Trãi, Quận 5, TP.HCM',
    status: 'assigned',
    estimatedArrival: '2026-05-23 10:30',
  },
  {
    id: 'DEL002',
    orderId: 'ORD002',
    driverName: 'Phạm Quốc Huy',
    driverPhone: '0987654321',
    pickupAddress: 'Kho trung chuyển Lâm Đồng',
    dropoffAddress: 'Chợ đầu mối Bình Điền, TP.HCM',
    status: 'in-transit',
    estimatedArrival: '2026-05-22 16:00',
  },
];

export const mockPayments: Payment[] = [
  { id: 'PAY001', orderId: 'ORD001', method: 'cod', status: 'unpaid', amount: 195000 },
  { id: 'PAY002', orderId: 'ORD002', method: 'bank-transfer', status: 'paid', amount: 420000, paidAt: '2026-05-18' },
  { id: 'PAY003', orderId: 'ORD003', method: 'wallet', status: 'paid', amount: 980000, paidAt: '2026-05-10' },
];

export const mockProductReviews: ProductReview[] = [
  { id: 'REV001', productId: 'PRD001', userName: 'Minh Anh', rating: 5, comment: 'Xoài thơm, đóng gói chắc chắn và có QR truy xuất rõ ràng.', createdDate: '2026-05-21' },
  { id: 'REV002', productId: 'PRD004', userName: 'Hoàng Nam', rating: 5, comment: 'Gạo ST25 dẻo, thơm, giao đúng ngày.', createdDate: '2026-05-19' },
  { id: 'REV003', productId: 'PRD005', userName: 'Thanh Hà', rating: 4, comment: 'Rau tươi, phù hợp dùng trong ngày.', createdDate: '2026-05-18' },
];

export const mockComplaints: Complaint[] = [
  { id: 'CMP001', title: 'Sản phẩm giao thiếu số lượng', orderId: 'ORD001', userName: 'Minh Anh', status: 'reviewing', priority: 'high', createdDate: '2026-05-21', description: 'Khách phản ánh thiếu 2kg xoài so với xác nhận ban đầu.' },
  { id: 'CMP002', title: 'Bao bì bị móp', orderId: 'ORD002', userName: 'Hoàng Nam', status: 'open', priority: 'medium', createdDate: '2026-05-20', description: 'Cần đối soát với đơn vị vận chuyển.' },
];

export const mockUserList: User[] = [
  { id: 'CUS001', name: 'Lê Khánh Hằng', email: 'customer@example.com', phone: '0900111222', role: 'customer', status: 'active', region: 'TP.HCM', avatar: '/images/photos/avatar-customer.jpg' },
  { id: 'FAR001', name: 'Nguyễn Văn An', email: 'farmer@example.com', phone: '0901234567', role: 'farmer', status: 'active', region: 'Đồng Tháp', avatar: '/images/photos/avatar-farmer.jpg' },
  { id: 'TRA001', name: 'Trần Thị Bình', email: 'trader@example.com', phone: '0911222333', role: 'trader', status: 'active', region: 'TP.HCM', avatar: '/images/photos/avatar-trader.jpg' },
  { id: 'SEL001', name: 'Phạm Văn Cường', email: 'seller@example.com', phone: '0988777666', role: 'seller', status: 'active', region: 'Cần Thơ', avatar: '/images/photos/avatar-seller.jpg' },
  { id: 'DEL001_USER', name: 'Lê Minh Quân', email: 'delivery@example.com', phone: '0912345678', role: 'delivery', status: 'active', region: 'TP.HCM', avatar: '/images/photos/avatar-seller.jpg' },
  { id: 'ADM001', name: 'Quản trị viên', email: 'admin@example.com', phone: '19001234', role: 'admin', status: 'active', region: 'Hệ thống', avatar: '/images/photos/avatar-admin.jpg' },
];

export const mockUsers = {
  customer: mockUserList[0],
  farmer: mockUserList[1],
  trader: mockUserList[2],
  seller: mockUserList[3],
  delivery: mockUserList[4],
  admin: mockUserList[5],
};

export const mockCategories = [
  { id: 'CAT001', name: 'Trái cây', productCount: 4, status: 'active' },
  { id: 'CAT002', name: 'Rau sạch', productCount: 1, status: 'active' },
  { id: 'CAT003', name: 'Lương thực', productCount: 1, status: 'active' },
  { id: 'CAT004', name: 'Nông sản khô', productCount: 2, status: 'active' },
];

export const mockCropTypes = [
  { id: 'CROP001', name: 'Xoài Cát Chu', season: 'Tháng 4 - 7', durationDays: 150 },
  { id: 'CROP002', name: 'Cam sành', season: 'Tháng 9 - 12', durationDays: 210 },
  { id: 'CROP003', name: 'Gạo ST25', season: 'Đông xuân', durationDays: 110 },
  { id: 'CROP004', name: 'Rau sạch', season: 'Quanh năm', durationDays: 35 },
];

export const mockInventoryItems = [
  { id: 'INV001', productId: 'PRD001', productName: 'Xoài Cát Chu Cao Lãnh', quantity: 650, unit: 'kg', warehouse: 'Kho TP.HCM', status: 'active' },
  { id: 'INV002', productId: 'PRD004', productName: 'Gạo ST25 Sóc Trăng', quantity: 4200, unit: 'kg', warehouse: 'Kho Cần Thơ', status: 'active' },
  { id: 'INV003', productId: 'PRD005', productName: 'Rau sạch Đà Lạt', quantity: 320, unit: 'bó', warehouse: 'Kho Lâm Đồng', status: 'active' },
];

export const mockProductVideos = [
  { id: 'PVID001', productId: 'PRD001', title: 'Thu hoạch Xoài Cát Chu', duration: '08:45', thumbnail: mockProducts[0].image },
  { id: 'PVID002', productId: 'PRD004', title: 'Quy trình xay xát Gạo ST25', duration: '11:20', thumbnail: mockProducts[3].image },
];

export const mockCustomerAddresses = [
  { id: 'ADDR001', customerId: 'CUS001', receiverName: 'Lê Khánh Hằng', phone: '0900111222', address: '12 Nguyễn Trãi, Quận 5, TP.HCM', isDefault: true },
  { id: 'ADDR002', customerId: 'CUS001', receiverName: 'Lê Khánh Hằng', phone: '0900111222', address: '45 Hoàng Diệu, Ba Đình, Hà Nội', isDefault: false },
];

export const mockWishlist = [
  { id: 'WISH001', customerId: 'CUS001', productId: 'PRD001' },
  { id: 'WISH002', customerId: 'CUS001', productId: 'PRD004' },
];

export const notifications: Notification[] = [
  { id: 'NOT001', userId: 'CUS001', role: 'customer', title: 'Đơn hàng đang giao', message: 'Đơn ORD002 đang trên đường giao.', createdAt: '2026-05-22', read: false, type: 'delivery' },
  { id: 'NOT002', role: 'farmer', title: 'Lô trồng sắp thu hoạch', message: 'LOT002 dự kiến thu hoạch trong tuần này.', createdAt: '2026-05-21', read: false, type: 'farm' },
  { id: 'NOT003', role: 'seller', title: 'Có yêu cầu thu mua mới', message: 'Thương lái gửi yêu cầu cho Xoài Cát Chu.', createdAt: '2026-05-20', read: true, type: 'order' },
  { id: 'NOT004', role: 'admin', title: 'Khiếu nại cần xử lý', message: 'CMP001 đang chờ quản trị xác minh.', createdAt: '2026-05-20', read: false, type: 'system' },
];

export const dashboardStats: DashboardStat[] = [
  { id: 'STAT001', role: 'admin', label: 'Người dùng', value: 156, trend: '+12 tháng này', tone: 'green' },
  { id: 'STAT002', role: 'farmer', label: 'Lô trồng', value: 12, trend: '3 lô sắp thu hoạch', tone: 'amber' },
  { id: 'STAT003', role: 'seller', label: 'Doanh thu', value: '125 triệu', trend: '+8%', tone: 'blue' },
  { id: 'STAT004', role: 'delivery', label: 'Đơn đang giao', value: 18, trend: '5 đơn ưu tiên', tone: 'purple' },
];

export const mockDashboardStats = {
  farmer: {
    totalFarms: 3,
    totalCropLots: 12,
    cropLotsReadyForHarvest: 3,
    isolationWarnings: 1,
    recentLogs: mockFarmingLogs,
  },
  trader: {
    totalSources: 45,
    pendingRequests: 5,
    activeOrders: 8,
    completedOrders: 124,
  },
  seller: {
    totalProducts: 28,
    inStock: 2340,
    newOrders: 12,
    purchaseRequests: 3,
    revenue: 12500000,
  },
  admin: {
    totalUsers: 156,
    totalFarmers: 89,
    totalTraders: 32,
    totalProducts: 512,
    totalOrders: 3450,
    revenue: 2450000000,
  },
  delivery: {
    assigned: 12,
    inTransit: 18,
    completed: 230,
    failed: 3,
  },
};

export const mockCartItems = [
  { id: 'CART001', productId: 'PRD001', name: 'Xoài Cát Chu Cao Lãnh', price: 65000, quantity: 2, image: mockProducts[0].image },
  { id: 'CART002', productId: 'PRD004', name: 'Gạo ST25 Sóc Trăng', price: 36000, quantity: 3, image: mockProducts[3].image },
];

export const farms = mockFarms;
export const products = mockProducts;
export const categories = mockCategories;
export const cropTypes = mockCropTypes;
export const cropLots = mockCropLots;
export const trees = mockFarmTrees;
export const farmingLogs = mockFarmingLogs;
export const fertilizers = mockFertilizers;
export const pesticides = mockPesticides;
export const harvests = mockHarvests;
export const qrCodes = mockTraceRecords;
export const purchaseRequests = mockPurchaseRequests;
export const orders = mockOrders;
export const deliveries = mockDeliveries;
export const payments = mockPayments;
export const reviews = mockProductReviews;
export const complaints = mockComplaints;
export const users = mockUserList;
export const inventoryItems = mockInventoryItems;
export const productVideos = mockProductVideos;
export const productReviews = mockProductReviews;
export const customerAddresses = mockCustomerAddresses;
export const wishlist = mockWishlist;

export const mockData = {
  users,
  farms,
  products,
  categories,
  cropTypes,
  cropLots,
  trees,
  farmingLogs,
  fertilizers,
  pesticides,
  harvests,
  qrCodes,
  purchaseRequests,
  orders,
  deliveries,
  payments,
  reviews,
  complaints,
  notifications,
  dashboardStats,
  inventoryItems,
  customerAddresses,
  wishlist,
};
