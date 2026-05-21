'use client';

import React from 'react';
import { CheckCircle, Info, TriangleAlert, X, XCircle } from 'lucide-react';

interface ToastProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
  onClose?: () => void;
}

const styles = {
  success: 'border-green-200 bg-green-50 text-green-800',
  info: 'border-blue-200 bg-blue-50 text-blue-800',
  warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  error: 'border-red-200 bg-red-50 text-red-800',
};

const icons = {
  success: <CheckCircle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
  warning: <TriangleAlert className="h-5 w-5" />,
  error: <XCircle className="h-5 w-5" />,
};

export default function Toast({ type = 'info', title, message, onClose }: ToastProps) {
  return (
    <div className={`flex w-full max-w-sm items-start gap-3 rounded-2xl border p-3.5 shadow-lg ${styles[type]}`}>
      <span className="mt-0.5 shrink-0">{icons[type]}</span>
      <div className="min-w-0 flex-1">
        <p className="font-bold">{title}</p>
        {message && <p className="mt-1 text-sm leading-5 opacity-85">{message}</p>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} className="shrink-0 rounded-lg p-1 hover:bg-white/60" aria-label="Đóng thông báo">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
