import Link from 'next/link';
import AppLogo from '@/app/components/layout/AppLogo';
import { Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = [
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Nhà vườn', href: '/farms' },
  { label: 'Truy xuất QR', href: '/trace/QR-AGRI-001' },
  { label: 'Hỗ trợ', href: '/support' },
];

export default function PublicFooter() {
  return (
    <footer className="border-t border-[#BBF7D0] bg-[#EAF8E6]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <AppLogo size={42} className="h-10 w-10" />
            <p className="font-bold text-[#166534]">PIONE GROUP</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            Hệ thống quản lý vườn nông sản và thương mại hóa nông sản, kết nối nông dân, thương lái,
            người bán và khách hàng trên cùng một nền tảng.
          </p>
        </div>

        <nav className="grid content-start gap-2">
          <p className="font-semibold text-[#163B24]">Liên kết</p>
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-[#16A34A]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-gray-600">
          <p className="font-semibold text-[#163B24]">Liên hệ demo</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#16A34A]" /> 1900 1234</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#16A34A]" /> demo@pione.local</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#16A34A]" /> Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
