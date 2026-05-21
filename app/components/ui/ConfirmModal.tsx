'use client';

import React from 'react';
import Button from '@/app/components/ui/Button';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy',
  variant = 'primary',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[160] flex items-center justify-center bg-black/40 px-3">
      <section className="w-full max-w-sm rounded-2xl border border-[#BBF7D0] bg-white p-4 shadow-xl sm:p-5" role="dialog" aria-modal="true">
        <h2 className="text-lg font-bold text-[#163B24]">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button variant={variant} size="md" onClick={onConfirm}>
            {confirmLabel}
          </Button>
          <Button variant="outline" size="md" onClick={onCancel}>
            {cancelLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
