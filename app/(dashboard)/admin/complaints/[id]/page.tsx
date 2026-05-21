import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import StatusBadge from '@/app/components/ui/StatusBadge';
import { mockComplaints } from '@/app/data/mockData';
import { AlertTriangle, CalendarDays, UserRound } from 'lucide-react';

interface AdminComplaintDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminComplaintDetailPage({ params }: AdminComplaintDetailPageProps) {
  const { id } = await params;
  const complaint = mockComplaints.find((item) => item.id === id);

  if (!complaint) {
    notFound();
  }

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">Khiếu nại</p>
        <h1 className="mt-1 text-2xl font-bold text-[#163B24]">{complaint.title}</h1>
        <StatusBadge status={complaint.status} className="mt-3" />
      </div>
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <AlertTriangle className="h-5 w-5 text-[#F97316]" />
          <p className="mt-2 text-sm text-gray-600">Mức ưu tiên</p>
          <p className="font-bold text-[#163B24]">{complaint.priority}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <UserRound className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Người gửi</p>
          <p className="font-bold text-[#163B24]">{complaint.userName}</p>
        </div>
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
          <CalendarDays className="h-5 w-5 text-[#16A34A]" />
          <p className="mt-2 text-sm text-gray-600">Ngày tạo</p>
          <p className="font-bold text-[#163B24]">{complaint.createdDate}</p>
        </div>
      </section>
      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
        <h2 className="font-bold text-[#163B24]">Nội dung phản ánh</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">{complaint.description}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button variant="primary" size="md">Đánh dấu đã xử lý</Button>
          <Button variant="outline" size="md">Yêu cầu bổ sung</Button>
        </div>
      </section>
      <Link href="/admin/complaints" className="block">
        <Button variant="outline" size="md" className="w-full sm:w-auto">Quay lại khiếu nại</Button>
      </Link>
    </div>
  );
}
