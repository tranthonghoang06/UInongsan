# Hệ thống quản lý vườn nông sản và thương mại hóa nông sản

Frontend demo cho nền tảng quản lý chuỗi nông sản: quản lý nhà vườn, lô trồng, nhật ký canh tác, truy xuất nguồn gốc QR, mua bán nông sản, đơn hàng, vận chuyển và quản trị hệ thống.

## Công nghệ

- Next.js App Router 16
- React 19
- TypeScript
- Tailwind CSS
- Mock data trong `app/data/mockData.ts`
- Service layer mock trong `services/`, sẵn sàng thay bằng API backend

## Cấu trúc thư mục chính

```text
app/
├── (public)/       # Trang bán hàng, sản phẩm, nhà vườn, giỏ hàng, checkout, auth
├── (customer)/     # Khu vực khách hàng tại /customer/*
├── (dashboard)/    # Dashboard admin, farmer, seller, trader, delivery
├── components/     # ui, layout, cards, business
└── data/mockData.ts
constants/          # roles, routes, status, payment, farming activities
hooks/              # useDebouncedValue, usePagination, useMockAuth, useCart
lib/                # axios, auth, cn
services/           # mock CRUD services
types/              # TypeScript domain types
utils/              # format, validators, qr, date
public/             # logo, images, placeholder
proxy.ts            # bảo vệ route theo vai trò cho Next.js 16
```

Lưu ý: Next.js 16 đã đổi `middleware.ts` thành `proxy.ts`, nên project dùng `proxy.ts` để build đúng chuẩn hiện tại.

## Vai trò

- Admin: quản trị hệ thống
- Nông dân: quản lý trang trại, lô trồng, cây trồng, nhật ký, thu hoạch, QR
- Người bán: quản lý sản phẩm, tồn kho, đơn hàng, doanh thu
- Thương lái: tìm nguồn hàng, gửi yêu cầu thu mua, thương lượng, đơn mua sỉ
- Khách hàng: mua hàng, đơn hàng, địa chỉ, yêu thích, đánh giá
- Vận chuyển: nhận đơn giao, cập nhật trạng thái, bằng chứng giao hàng, hoàn hàng

## Tài khoản mock

| Vai trò | Email | Mật khẩu |
| --- | --- | --- |
| Khách hàng | customer@example.com | 123456 |
| Nông dân | farmer@example.com | 123456 |
| Người bán | seller@example.com | 123456 |
| Thương lái | trader@example.com | 123456 |
| Vận chuyển | delivery@example.com | 123456 |
| Admin | admin@example.com | 123456 |

Đăng nhập khách hàng tại `/login`, đăng nhập nhân sự/đối tác tại `/staff-login`.

## Chức năng demo

- Public: trang chủ, danh sách/chi tiết sản phẩm, nhà vườn, truy xuất QR, giỏ hàng, checkout, lịch sử đơn, hỗ trợ.
- Customer: hồ sơ, đơn hàng, địa chỉ, yêu thích, đánh giá, thông báo.
- Admin: dashboard, người dùng, sản phẩm, đơn hàng, khiếu nại, danh mục, giống cây, vai trò, thanh toán, vận chuyển, thống kê, cài đặt.
- Farmer: dashboard, trang trại, lô trồng, cây trồng, nhật ký canh tác, phân bón, thuốc BVTV, thu hoạch, QR, yêu cầu thu mua.
- Seller: sản phẩm, ảnh/video, tồn kho, đơn hàng, yêu cầu thu mua, doanh thu.
- Trader: nguồn hàng, so sánh, yêu cầu thu mua, thương lượng, đơn mua sỉ, lịch sử.
- Delivery: đơn giao, cập nhật trạng thái, bằng chứng giao hàng, đơn đang giao, hoàn tất, thất bại, hoàn hàng.

## Cài đặt và chạy local

```bash
npm install
npm run dev
npm run lint
npm run build
```

Mở `http://localhost:3000` để xem UI demo.

## Ghi chú phát triển

Hiện tại project dùng mock data, chưa kết nối backend thật. Khi có backend, ưu tiên thay logic trong `services/*Service.ts` bằng API thật và giữ nguyên component/page để giảm ảnh hưởng UI.
