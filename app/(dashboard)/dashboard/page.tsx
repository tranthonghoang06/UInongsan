import Link from 'next/link';
import PublicHeader from '@/app/components/layout/PublicHeader';
import Badge from '@/app/components/ui/Badge';
import { BarChart3, ShieldCheck, Sprout, Store, Truck, Users } from 'lucide-react';

const dashboards = [
  {
    role: 'Nông dân',
    href: '/farmer/dashboard',
    description: 'Quản lý lô trồng, nhật ký canh tác, thu hoạch và yêu cầu mua.',
    icon: <Sprout className="h-6 w-6" />,
  },
  {
    role: 'Thương lái',
    href: '/trader/dashboard',
    description: 'Tìm nguồn hàng, gửi yêu cầu mua và theo dõi đơn mua sỉ.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    role: 'Người bán',
    href: '/seller/dashboard',
    description: 'Quản lý sản phẩm, đơn hàng, doanh thu và yêu cầu thu mua.',
    icon: <Store className="h-6 w-6" />,
  },
  {
    role: 'Vận chuyển',
    href: '/delivery/dashboard',
    description: 'Điều phối đơn cần giao, đơn đang giao và đối soát hoàn tất.',
    icon: <Truck className="h-6 w-6" />,
  },
  {
    role: 'Admin',
    href: '/admin/dashboard',
    description: 'Giám sát người dùng, sản phẩm, đơn hàng, khiếu nại và thống kê.',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

export default function DashboardEntryPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F7]">
      <PublicHeader />
      <main className="mx-auto max-w-7xl space-y-4 px-3 py-4 sm:space-y-8 sm:px-4 sm:py-8">
        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <Badge variant="success">Dashboard</Badge>
          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl md:text-4xl">Chọn dashboard để làm việc</h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">
                Đây là cổng vào nhanh cho bản demo. Khi có backend auth, màn này có thể tự chuyển đến dashboard theo tài khoản đã đăng nhập.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#E8F5E9] px-3 py-2.5 text-xs font-medium text-[#2E7D32] sm:px-4 sm:py-3 sm:text-sm">
              <BarChart3 className="h-4 w-4" />
              {dashboards.length} dashboard khả dụng
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dashboards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 transition-all hover:border-[#16A34A] hover:shadow-md sm:p-5"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32] sm:mb-4 sm:h-12 sm:w-12">
                {item.icon}
              </div>
              <h2 className="text-base font-bold text-[#263238] sm:text-lg">{item.role}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
              <p className="mt-4 text-sm font-semibold text-[#2E7D32] sm:mt-5">Mở dashboard</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
