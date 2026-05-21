// Mock Products
export const mockProducts = [
  {
    id: '1',
    image: '/images/photos/product-tomato.jpg',
    name: 'Cà chua hữu cơ tươi',
    price: 45000,
    originalPrice: 55000,
    farm: 'Vườn Xanh 1',
    region: 'Hà Nội',
    inStock: true,
    rating: 4.5,
    reviewCount: 120,
    category: 'Rau quả',
  },
  {
    id: '2',
    image: '/images/photos/product-kale.jpg',
    name: 'Rau cải xoăn tươi',
    price: 25000,
    farm: 'Vườn Xanh 2',
    region: 'Hà Nội',
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    category: 'Rau quả',
  },
  {
    id: '3',
    image: '/images/photos/product-strawberry.jpg',
    name: 'Dâu tây tươi',
    price: 85000,
    originalPrice: 100000,
    farm: 'Vườn Ngọt',
    region: 'Đà Lạt',
    inStock: true,
    rating: 5,
    reviewCount: 256,
    category: 'Hoa quả',
  },
  {
    id: '4',
    image: '/images/photos/product-papaya.jpg',
    name: 'Đu đủ vàng tươi',
    price: 35000,
    farm: 'Vườn Miền Tây',
    region: 'Cần Thơ',
    inStock: false,
    rating: 4.2,
    reviewCount: 67,
    category: 'Hoa quả',
  },
  {
    id: '5',
    image: '/images/photos/product-carrot.jpg',
    name: 'Cà rốt tươi',
    price: 20000,
    farm: 'Vườn Xanh 3',
    region: 'Hà Nội',
    inStock: true,
    rating: 4.6,
    reviewCount: 145,
    category: 'Rau quả',
  },
];

// Mock Farms
export const mockFarms = [
  {
    id: 'farm1',
    image: '/images/photos/farm-greenhouse.jpg',
    name: 'Vườn Xanh 1',
    owner: 'Nguyễn Văn A',
    region: 'Hà Nội',
    area: 5.5,
    crops: ['Cà chua', 'Dưa chuột', 'Ớt'],
    totalProducts: 12,
  },
  {
    id: 'farm2',
    image: '/images/photos/farm-rice-vietnam.jpg',
    name: 'Vườn Ngọt',
    owner: 'Trần Thị B',
    region: 'Đà Lạt',
    area: 8.2,
    crops: ['Dâu tây', 'Cam', 'Táo'],
    totalProducts: 18,
  },
  {
    id: 'farm3',
    image: '/images/photos/farm-paddy-vietnam.jpg',
    name: 'Vườn Miền Tây',
    owner: 'Phạm Văn C',
    region: 'Cần Thơ',
    area: 12,
    crops: ['Đu đủ', 'Dứa', 'Chuối'],
    totalProducts: 25,
  },
];

// Mock Videos
export const mockVideos = [
  {
    id: 'vid1',
    thumbnail: '/images/photos/product-tomato.jpg',
    title: 'Hướng dẫn trồng cà chua hữu cơ',
    description: 'Quy trình từ giống đến thu hoạch',
    duration: '15:30',
    farm: 'Vườn Xanh 1',
  },
  {
    id: 'vid2',
    thumbnail: '/images/photos/product-strawberry.jpg',
    title: 'Kỹ thuật chăm sóc dâu tây',
    description: 'Để có năng suất cao nhất',
    duration: '12:45',
    farm: 'Vườn Ngọt',
  },
];

// Mock Orders
export const mockOrders = [
  {
    id: 'ORD001',
    status: 'pending-confirmation' as const,
    totalAmount: 150000,
    itemCount: 3,
    createdDate: '2024-01-15',
    estimatedDelivery: '2024-01-17',
  },
  {
    id: 'ORD002',
    status: 'delivering' as const,
    totalAmount: 245000,
    itemCount: 5,
    createdDate: '2024-01-10',
    estimatedDelivery: '2024-01-16',
  },
  {
    id: 'ORD003',
    status: 'delivered' as const,
    totalAmount: 89000,
    itemCount: 2,
    createdDate: '2024-01-05',
    estimatedDelivery: '2024-01-08',
  },
  {
    id: 'ORD004',
    status: 'completed' as const,
    totalAmount: 320000,
    itemCount: 8,
    createdDate: '2024-01-01',
    estimatedDelivery: '2024-01-04',
  },
];

// Mock Purchase Requests
export const mockPurchaseRequests = [
  {
    id: 'REQ001',
    productName: 'Cà chua tươi',
    quantity: 100,
    unit: 'kg',
    proposedPrice: 40000,
    status: 'pending-response' as const,
    createdDate: '2024-01-14',
  },
  {
    id: 'REQ002',
    productName: 'Rau cải xoăn',
    quantity: 50,
    unit: 'kg',
    proposedPrice: 22000,
    status: 'negotiating' as const,
    createdDate: '2024-01-12',
  },
  {
    id: 'REQ003',
    productName: 'Dâu tây',
    quantity: 30,
    unit: 'kg',
    proposedPrice: 80000,
    status: 'accepted' as const,
    createdDate: '2024-01-08',
  },
];

// Mock Crop Lots
export const mockCropLots = [
  {
    id: 'LOT001',
    cropName: 'Cà chua',
    area: 2.5,
    plantedDate: '2023-12-01',
    estimatedHarvestDate: '2024-02-01',
    status: 'growing' as const,
    health: 'good' as const,
  },
  {
    id: 'LOT002',
    cropName: 'Dưa chuột',
    area: 1.8,
    plantedDate: '2023-11-15',
    estimatedHarvestDate: '2024-01-20',
    status: 'ready-harvest' as const,
    health: 'good' as const,
  },
  {
    id: 'LOT003',
    cropName: 'Ớt',
    area: 2,
    plantedDate: '2023-10-01',
    estimatedHarvestDate: '2024-01-15',
    status: 'ready-harvest' as const,
    health: 'warning' as const,
  },
];

// Mock Harvests
export const mockHarvests = [
  {
    id: 'HAR001',
    lotId: 'LOT002',
    cropName: 'Dưa chuột',
    quantity: 450,
    unit: 'kg',
    harvestDate: '2024-01-10',
    quality: 'excellent' as const,
  },
  {
    id: 'HAR002',
    lotId: 'LOT001',
    cropName: 'Cà chua',
    quantity: 320,
    unit: 'kg',
    harvestDate: '2024-01-08',
    quality: 'good' as const,
  },
];

// Mock Farming Logs
export const mockFarmingLogs = [
  {
    id: 'LOG001',
    date: '2024-01-15',
    activity: 'Tưới nước',
    cropLot: 'LOT001',
    description: 'Tưới nước sáng, mực nước phù hợp',
    images: [],
  },
  {
    id: 'LOG002',
    date: '2024-01-14',
    activity: 'Bón phân',
    cropLot: 'LOT002',
    description: 'Bón phân lá vào chiều tối',
    images: [],
  },
  {
    id: 'LOG003',
    date: '2024-01-13',
    activity: 'Phun thuốc',
    cropLot: 'LOT003',
    description: 'Phun thuốc trừ sâu',
    images: [],
  },
];

// Mock Cart Items
export const mockCartItems = [
  {
    id: '1',
    productId: '1',
    name: 'Cà chua hữu cơ tươi',
    price: 45000,
    quantity: 2,
    image: '/images/photos/product-tomato.jpg',
  },
  {
    id: '3',
    productId: '3',
    name: 'Dâu tây tươi',
    price: 85000,
    quantity: 1,
    image: '/images/photos/product-strawberry.jpg',
  },
];

// Mock Users
export const mockUsers = {
  farmer: {
    id: 'farmer1',
    name: 'Nguyễn Văn A',
    email: 'farmer@example.com',
    role: 'farmer',
    farms: ['farm1'],
    avatar: '/images/photos/avatar-farmer.jpg',
  },
  trader: {
    id: 'trader1',
    name: 'Trần Thị B',
    email: 'trader@example.com',
    role: 'trader',
    avatar: '/images/photos/avatar-trader.jpg',
  },
  seller: {
    id: 'seller1',
    name: 'Phạm Văn C',
    email: 'seller@example.com',
    role: 'seller',
    avatar: '/images/photos/avatar-seller.jpg',
  },
  admin: {
    id: 'admin1',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'admin',
    avatar: '/images/photos/avatar-admin.jpg',
  },
};

// Mock Dashboard Stats
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
};

export const mockDeliveries = [
  {
    id: 'DEL001',
    orderId: 'ORD001',
    driverName: 'Lê Minh Quân',
    driverPhone: '0912345678',
    pickupAddress: 'Vườn Xanh 1, Sóc Sơn, Hà Nội',
    dropoffAddress: '12 Nguyễn Trãi, Thanh Xuân, Hà Nội',
    status: 'assigned' as const,
    estimatedArrival: '2024-01-17 10:30',
  },
  {
    id: 'DEL002',
    orderId: 'ORD002',
    driverName: 'Phạm Quốc Huy',
    driverPhone: '0987654321',
    pickupAddress: 'Kho trung chuyển PIONE, Đà Lạt',
    dropoffAddress: 'Chợ đầu mối Bình Điền, TP Hồ Chí Minh',
    status: 'in-transit' as const,
    estimatedArrival: '2024-01-16 16:00',
  },
  {
    id: 'DEL003',
    orderId: 'ORD003',
    driverName: 'Nguyễn Anh Tú',
    driverPhone: '0909888777',
    pickupAddress: 'Vườn Ngọt, Đà Lạt',
    dropoffAddress: '26 Lý Thường Kiệt, Hà Nội',
    status: 'delivered' as const,
    estimatedArrival: '2024-01-08 09:15',
  },
  {
    id: 'DEL004',
    orderId: 'ORD004',
    driverName: 'Trần Đức Long',
    driverPhone: '0977001122',
    pickupAddress: 'Kho trung chuyển PIONE, Hà Nội',
    dropoffAddress: '45 Cách Mạng Tháng 8, TP Hồ Chí Minh',
    status: 'failed' as const,
    estimatedArrival: '2024-01-18 14:30',
  },
  {
    id: 'DEL005',
    orderId: 'ORD002',
    driverName: 'Ngô Hải Nam',
    driverPhone: '0966123456',
    pickupAddress: 'Điểm giao Bình Điền, TP Hồ Chí Minh',
    dropoffAddress: 'Kho trung chuyển PIONE, Đà Lạt',
    status: 'returned' as const,
    estimatedArrival: '2024-01-19 09:00',
  },
];

export const mockComplaints = [
  {
    id: 'CMP001',
    title: 'Sản phẩm giao thiếu số lượng',
    orderId: 'ORD001',
    userName: 'Nguyễn Văn A',
    status: 'reviewing' as const,
    priority: 'high' as const,
    createdDate: '2024-01-16',
    description: 'Khách phản ánh đơn hàng thiếu 2kg cà chua so với xác nhận ban đầu.',
  },
  {
    id: 'CMP002',
    title: 'Cần kiểm tra chất lượng đóng gói',
    orderId: 'ORD002',
    userName: 'Trần Thị B',
    status: 'open' as const,
    priority: 'medium' as const,
    createdDate: '2024-01-15',
    description: 'Bao bì bị móp khi nhận hàng, cần đối soát với đơn vị vận chuyển.',
  },
  {
    id: 'CMP003',
    title: 'Hoàn tất đổi trả',
    orderId: 'ORD003',
    userName: 'Phạm Văn C',
    status: 'resolved' as const,
    priority: 'low' as const,
    createdDate: '2024-01-09',
    description: 'Đã xác minh và hoàn tất đổi sản phẩm cho khách.',
  },
];

export const mockUserList = [
  {
    id: 'customer1',
    name: 'Lê Khánh Hàng',
    email: 'customer@example.com',
    phone: '0900111222',
    role: 'customer' as const,
    status: 'active',
    region: 'Hà Nội',
  },
  {
    id: 'farmer1',
    name: 'Nguyễn Văn A',
    email: 'farmer@example.com',
    phone: '0901234567',
    role: 'farmer' as const,
    status: 'active',
    region: 'Hà Nội',
  },
  {
    id: 'trader1',
    name: 'Trần Thị B',
    email: 'trader@example.com',
    phone: '0911222333',
    role: 'trader' as const,
    status: 'active',
    region: 'Đà Lạt',
  },
  {
    id: 'seller1',
    name: 'Phạm Văn C',
    email: 'seller@example.com',
    phone: '0988777666',
    role: 'seller' as const,
    status: 'active',
    region: 'Cần Thơ',
  },
  {
    id: 'admin1',
    name: 'Admin',
    email: 'admin@example.com',
    phone: '19001234',
    role: 'admin' as const,
    status: 'active',
    region: 'Hệ thống',
  },
];

export const mockTraceRecords = [
  {
    qrCode: 'QR-PIONE-001',
    productId: '1',
    productName: mockProducts[0].name,
    farmId: mockFarms[0].id,
    farmName: mockFarms[0].name,
    cropLotId: mockCropLots[0].id,
    harvestId: mockHarvests[1].id,
    harvestDate: mockHarvests[1].harvestDate,
    status: 'completed',
  },
  {
    qrCode: 'QR-PIONE-003',
    productId: '3',
    productName: mockProducts[2].name,
    farmId: mockFarms[1].id,
    farmName: mockFarms[1].name,
    cropLotId: mockCropLots[1].id,
    harvestId: mockHarvests[0].id,
    harvestDate: mockHarvests[0].harvestDate,
    status: 'completed',
  },
];

export const mockFarmTrees = [
  {
    id: 'TREE001',
    farmId: 'farm1',
    name: 'Cà chua beef',
    variety: 'Beef tomato',
    quantity: 1200,
    plantedDate: '2023-12-01',
    health: 'good' as const,
  },
  {
    id: 'TREE002',
    farmId: 'farm1',
    name: 'Dưa chuột baby',
    variety: 'Baby cucumber',
    quantity: 850,
    plantedDate: '2023-11-15',
    health: 'warning' as const,
  },
  {
    id: 'TREE003',
    farmId: 'farm2',
    name: 'Dâu tây New Zealand',
    variety: 'Albion',
    quantity: 2400,
    plantedDate: '2023-10-20',
    health: 'good' as const,
  },
];

export const mockFertilizers = [
  { id: 'FER001', name: 'Phân hữu cơ vi sinh', stock: 120, unit: 'kg', lastUsed: '2024-01-10', supplier: 'Bio Farm' },
  { id: 'FER002', name: 'Phân trùn quế', stock: 80, unit: 'kg', lastUsed: '2024-01-12', supplier: 'Green Soil' },
  { id: 'FER003', name: 'Dung dịch kali hữu cơ', stock: 35, unit: 'lít', lastUsed: '2024-01-05', supplier: 'AgriCare' },
];

export const mockPesticides = [
  { id: 'PES001', name: 'Dầu neem sinh học', stock: 24, unit: 'lít', safetyDays: 5, lastUsed: '2024-01-13' },
  { id: 'PES002', name: 'Chế phẩm nấm đối kháng', stock: 16, unit: 'gói', safetyDays: 3, lastUsed: '2024-01-09' },
  { id: 'PES003', name: 'Bẫy dính côn trùng', stock: 60, unit: 'tấm', safetyDays: 0, lastUsed: '2024-01-15' },
];

export const mockCategories = [
  { id: 'CAT001', name: 'Rau quả', productCount: 18, status: 'active' },
  { id: 'CAT002', name: 'Hoa quả', productCount: 12, status: 'active' },
  { id: 'CAT003', name: 'Combo tuần', productCount: 6, status: 'active' },
];

export const mockCropTypes = [
  { id: 'CROP001', name: 'Cà chua', season: 'Đông xuân', durationDays: 75 },
  { id: 'CROP002', name: 'Dưa chuột', season: 'Quanh năm', durationDays: 45 },
  { id: 'CROP003', name: 'Dâu tây', season: 'Mùa lạnh', durationDays: 90 },
];

export const mockInventoryItems = [
  { id: 'INV001', productId: '1', productName: mockProducts[0].name, quantity: 320, unit: 'kg', warehouse: 'Kho Hà Nội', status: 'active' },
  { id: 'INV002', productId: '2', productName: mockProducts[1].name, quantity: 180, unit: 'kg', warehouse: 'Kho Hà Nội', status: 'active' },
  { id: 'INV003', productId: '3', productName: mockProducts[2].name, quantity: 95, unit: 'kg', warehouse: 'Kho Đà Lạt', status: 'active' },
];

export const mockPayments = [
  { id: 'PAY001', orderId: 'ORD001', method: 'cod' as const, status: 'unpaid' as const, amount: 150000 },
  { id: 'PAY002', orderId: 'ORD002', method: 'bank-transfer' as const, status: 'paid' as const, amount: 245000, paidAt: '2024-01-10' },
  { id: 'PAY003', orderId: 'ORD003', method: 'wallet' as const, status: 'paid' as const, amount: 89000, paidAt: '2024-01-05' },
  { id: 'PAY004', orderId: 'ORD004', method: 'card' as const, status: 'refunded' as const, amount: 320000, paidAt: '2024-01-02' },
];

export const mockProductVideos = [
  { id: 'PVID001', productId: '1', title: 'Quy trình thu hoạch cà chua', duration: '08:45', thumbnail: mockProducts[0].image },
  { id: 'PVID002', productId: '3', title: 'Chăm sóc dâu tây trước thu hoạch', duration: '11:20', thumbnail: mockProducts[2].image },
];

export const mockProductReviews = [
  { id: 'REV001', productId: '1', userName: 'Minh Anh', rating: 5, comment: 'Cà chua tươi, đóng gói chắc chắn.', createdDate: '2024-01-16' },
  { id: 'REV002', productId: '1', userName: 'Hoàng Nam', rating: 4, comment: 'Giao nhanh, vị ngọt tự nhiên.', createdDate: '2024-01-14' },
  { id: 'REV003', productId: '3', userName: 'Thanh Hà', rating: 5, comment: 'Dâu thơm và đều quả.', createdDate: '2024-01-12' },
];

export const mockCustomerAddresses = [
  {
    id: 'ADDR001',
    customerId: 'customer1',
    receiverName: 'Lê Khánh Hàng',
    phone: '0900111222',
    address: '12 Nguyễn Trãi, Thanh Xuân, Hà Nội',
    isDefault: true,
  },
  {
    id: 'ADDR002',
    customerId: 'customer1',
    receiverName: 'Lê Khánh Hàng',
    phone: '0900111222',
    address: '45 Hoàng Diệu, Ba Đình, Hà Nội',
    isDefault: false,
  },
];

export const mockWishlist = [
  { id: 'WISH001', customerId: 'customer1', productId: '1' },
  { id: 'WISH002', customerId: 'customer1', productId: '3' },
];

export const farms = mockFarms;
export const products = mockProducts;
export const cropLots = mockCropLots;
export const farmingLogs = mockFarmingLogs;
export const harvests = mockHarvests;
export const purchaseRequests = mockPurchaseRequests;
export const orders = mockOrders;
export const deliveries = mockDeliveries;
export const users = mockUserList;
export const complaints = mockComplaints;
export const trees = mockFarmTrees;
export const fertilizers = mockFertilizers;
export const pesticides = mockPesticides;
export const categories = mockCategories;
export const cropTypes = mockCropTypes;
export const inventoryItems = mockInventoryItems;
export const payments = mockPayments;
export const productVideos = mockProductVideos;
export const productReviews = mockProductReviews;
export const customerAddresses = mockCustomerAddresses;
export const wishlist = mockWishlist;

export const mockData = {
  farms,
  products,
  cropLots,
  farmingLogs,
  harvests,
  purchaseRequests,
  orders,
  deliveries,
  users,
  complaints,
  trees,
  fertilizers,
  pesticides,
  categories,
  cropTypes,
  inventoryItems,
  payments,
  productVideos,
  productReviews,
  customerAddresses,
  wishlist,
};
