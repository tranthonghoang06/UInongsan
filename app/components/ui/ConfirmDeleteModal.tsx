'use client';

import ConfirmModal from '@/app/components/ui/ConfirmModal';

interface ConfirmDeleteModalProps {
  open: boolean;
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDeleteModal({ open, itemName, onConfirm, onCancel }: ConfirmDeleteModalProps) {
  return (
    <ConfirmModal
      open={open}
      title="Xóa dữ liệu?"
      description={`Bạn có chắc muốn xóa ${itemName}? Thao tác này chỉ là UI demo và chưa gọi API thật.`}
      confirmLabel="Xóa"
      cancelLabel="Giữ lại"
      variant="danger"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
