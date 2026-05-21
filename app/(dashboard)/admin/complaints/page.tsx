'use client';

import React from 'react';
import Badge from '@/app/components/ui/Badge';
import DataPage from '../../_components/DataPage';
import { AlertTriangle, CheckCircle2, MessageCircleWarning, TimerReset } from 'lucide-react';

const complaints = [
  { id: 'CMP001', customer: 'Nguyễn Minh', reason: 'Giao thiếu sản phẩm', status: 'Đang xử lý', priority: 'Cao', date: '2024-01-16' },
  { id: 'CMP002', customer: 'Lan Anh', reason: 'Sản phẩm dập nhẹ', status: 'Chờ phản hồi', priority: 'Trung bình', date: '2024-01-15' },
  { id: 'CMP003', customer: 'Hoàng Nam', reason: 'Giao trễ khung giờ', status: 'Đã giải quyết', priority: 'Thấp', date: '2024-01-12' },
];

export default function AdminComplaintsPage() {
  return (
    <DataPage
      title="Khiếu nại"
      description="Theo dõi phản ánh khách hàng và tiến độ xử lý nội bộ."
      stats={[
        { label: 'Tổng khiếu nại', value: complaints.length, note: 'Trong tháng', icon: <MessageCircleWarning className="h-5 w-5" /> },
        { label: 'Ưu tiên cao', value: complaints.filter((item) => item.priority === 'Cao').length, note: 'Xử lý trước', icon: <AlertTriangle className="h-5 w-5" /> },
        { label: 'Đang mở', value: complaints.filter((item) => item.status !== 'Đã giải quyết').length, note: 'Cần theo dõi', icon: <TimerReset className="h-5 w-5" /> },
        { label: 'Đã xử lý', value: complaints.filter((item) => item.status === 'Đã giải quyết').length, note: 'Hoàn tất', icon: <CheckCircle2 className="h-5 w-5" /> },
      ]}
      columns={[
        { key: 'id', label: 'Mã' },
        { key: 'customer', label: 'Khách hàng' },
        { key: 'reason', label: 'Nội dung' },
        { key: 'priority', label: 'Ưu tiên' },
        { key: 'status', label: 'Trạng thái' },
        { key: 'date', label: 'Ngày tạo' },
      ]}
      rows={complaints.map((item) => ({
        id: item.id,
        cells: {
          id: <span className="font-semibold">#{item.id}</span>,
          customer: item.customer,
          reason: item.reason,
          priority: <Badge variant={item.priority === 'Cao' ? 'error' : item.priority === 'Trung bình' ? 'warning' : 'neutral'} size="sm">{item.priority}</Badge>,
          status: <Badge variant={item.status === 'Đã giải quyết' ? 'success' : 'warning'} size="sm">{item.status}</Badge>,
          date: item.date,
        },
      }))}
    />
  );
}
