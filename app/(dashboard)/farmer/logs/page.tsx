'use client';

import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';
import Badge from '@/app/components/ui/Badge';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired } from '@/utils/validation';
import { mockCropLots } from '@/app/data/mockData';
import { Upload } from 'lucide-react';

export default function FarmingLogsPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    activity: '',
    cropLot: '',
    description: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const nextErrors = {
      date: isRequired(formData.date) ? '' : 'Vui lòng chọn ngày thực hiện.',
      cropLot: isRequired(formData.cropLot) ? '' : 'Vui lòng chọn lô trồng.',
      activity: isRequired(formData.activity) ? '' : 'Vui lòng chọn hoạt động.',
      description: isRequired(formData.description) ? '' : 'Vui lòng nhập mô tả chi tiết.',
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error({ title: 'Nhật ký chưa hợp lệ', message: 'Vui lòng bổ sung các trường bắt buộc.' });
      return;
    }

    toast.success({ title: 'Nhật ký đã được lưu', message: 'Hoạt động canh tác mới đã được ghi nhận.' });
  };

  const activityOptions = [
    { value: 'watering', label: 'Tưới nước' },
    { value: 'fertilizing', label: 'Bón phân' },
    { value: 'spraying', label: 'Phun thuốc' },
    { value: 'pruning', label: 'Cắt tỉa' },
    { value: 'harvesting', label: 'Thu hoạch' },
    { value: 'other', label: 'Khác' },
  ];

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[#163B24] sm:text-3xl">Nhật ký canh tác</h1>
        <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">Ghi chép các hoạt động canh tác hàng ngày</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {/* Form */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6 lg:col-span-2">
          <h2 className="mb-5 text-xl font-bold text-[#163B24]">Thêm nhật ký mới</h2>

          <div className="space-y-4">
            {/* Date & Crop Lot */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Ngày thực hiện"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                error={errors.date}
                required
              />
              <Select
                label="Lô trồng"
                value={formData.cropLot}
                onChange={(e) => setFormData({ ...formData, cropLot: e.target.value })}
                options={mockCropLots.map(lot => ({ value: lot.id, label: `${lot.id} - ${lot.cropName}` }))}
                error={errors.cropLot}
                required
              />
            </div>

            {/* Activity */}
            <Select
              label="Hoạt động"
              value={formData.activity}
              onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
              options={activityOptions}
              error={errors.activity}
              required
            />

            {/* Description */}
            <Textarea
              label="Mô tả chi tiết"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Mô tả chi tiết hoạt động đã thực hiện..."
              error={errors.description}
              required
            />

            {/* Notes */}
            <Textarea
              label="Ghi chú (tùy chọn)"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Ví dụ: Tình trạng cây, dự báo, v.v..."
            />

            {/* Image Upload */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium leading-5 text-[#263238] sm:mb-2 sm:text-sm">
                Tải ảnh/video (tùy chọn)
              </label>
              <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] px-4 py-8">
                <div className="text-center">
                  <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                  <p className="text-sm text-gray-600">Kéo thả hoặc click để tải ảnh</p>
                  <p className="text-xs text-gray-500">Tối đa 5MB, PNG, JPG, MP4</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button variant="primary" size="md" className="flex-1" onClick={handleSubmit}>
                Lưu nhật ký
              </Button>
              <Button variant="outline" size="md" className="flex-1" onClick={() => {
                setFormData({ date: new Date().toISOString().split('T')[0], activity: '', cropLot: '', description: '', notes: '' });
                setErrors({});
                toast.info({ title: 'Đã xóa nội dung nhập', message: 'Form nhật ký đã được làm mới.' });
              }}>
                Xóa
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Logs */}
        <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
          <h3 className="mb-4 text-xl font-bold text-[#163B24]">Nhật ký gần đây</h3>
          <div className="space-y-3">
            <div className="rounded-2xl border-l-4 border-[#16A34A] bg-[#F0FDF4] p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-[#263238]">Tưới nước</p>
                <span className="text-xs text-gray-600">Hôm qua</span>
              </div>
              <Badge variant="info" size="sm">Lô LOT001</Badge>
            </div>
            <div className="rounded-2xl border-l-4 border-[#16A34A] bg-[#F0FDF4] p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-[#263238]">Bón phân</p>
                <span className="text-xs text-gray-600">2 ngày trước</span>
              </div>
              <Badge variant="info" size="sm">Lô LOT002</Badge>
            </div>
            <div className="rounded-2xl border-l-4 border-[#16A34A] bg-[#F0FDF4] p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-[#263238]">Phun thuốc</p>
                <span className="text-xs text-gray-600">3 ngày trước</span>
              </div>
              <Badge variant="warning" size="sm">Lô LOT003</Badge>
            </div>
          </div>
          <Button variant="outline" size="sm" className="mt-4 w-full">
            Xem tất cả
          </Button>
        </div>
      </div>
    </div>
  );
}
