import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';
import { ArrowLeft, CheckCircle2, ClipboardList, Plus } from 'lucide-react';

interface DemoRoutePageProps {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
  records?: Array<Record<string, string | number>>;
  formTitle?: string;
}

export default function DemoRoutePage({
  title,
  description,
  actionHref,
  actionLabel = 'Tạo mới',
  records = [],
  formTitle = 'Thông tin demo',
}: DemoRoutePageProps) {
  const columns = records[0] ? Object.keys(records[0]) : ['Mã', 'Tên', 'Trạng thái'];

  return (
    <div className="space-y-5 p-3 pb-24 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href=".." className="mb-2 inline-flex items-center gap-1 text-sm font-semibold text-[#16A34A]">
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </Link>
          <h1 className="text-2xl font-bold text-[#163B24] sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">{description}</p>
        </div>
        {actionHref && (
          <Link href={actionHref}>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4" />
              {actionLabel}
            </Button>
          </Link>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm shadow-green-100">
          <div className="border-b border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3">
            <h2 className="font-bold text-[#163B24]">Danh sách dữ liệu</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b border-[#DCFCE7]">
                  {columns.map((column) => (
                    <th key={column} className="px-4 py-3 text-left font-semibold text-[#163B24]">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(records.length ? records : [
                  { Mã: 'DEMO-001', Tên: title, 'Trạng thái': 'Sẵn sàng' },
                  { Mã: 'DEMO-002', Tên: 'Dữ liệu mock', 'Trạng thái': 'Đang dùng' },
                ]).map((record, index) => (
                  <tr key={index} className="border-b border-[#F0FDF4] last:border-0">
                    {Object.values(record).map((value, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-gray-700">
                        {cellIndex === Object.values(record).length - 1 ? (
                          <Badge variant="success" size="sm">{String(value)}</Badge>
                        ) : (
                          String(value)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-[#DCFCE7] px-4 py-3 text-sm text-gray-600">
            <span>Trang 1 / 1</span>
            <span>Phân trang mẫu cho demo</span>
          </div>
        </section>

        <section className="rounded-2xl border border-[#BBF7D0] bg-white p-4 shadow-sm shadow-green-100">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-[#16A34A]" />
            <h2 className="font-bold text-[#163B24]">{formTitle}</h2>
          </div>
          <div className="mt-4 space-y-3">
            <label className="block">
              <span className="text-sm font-semibold text-[#263238]">Tên hiển thị</span>
              <input className="mt-1 h-11 w-full rounded-xl border border-[#BBF7D0] px-3 text-sm outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-200" defaultValue={title} />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[#263238]">Ghi chú</span>
              <textarea className="mt-1 min-h-24 w-full rounded-xl border border-[#BBF7D0] px-3 py-2 text-sm outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-200" defaultValue={description} />
            </label>
            <div className="rounded-xl bg-[#F0FDF4] p-3 text-sm text-[#166534]">
              <CheckCircle2 className="mr-2 inline h-4 w-4" />
              UI dùng mock data, sẵn sàng nối API thật ở service layer.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
