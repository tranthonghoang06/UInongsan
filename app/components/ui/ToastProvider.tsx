'use client';

import React from 'react';
import Toast from '@/app/components/ui/Toast';

type ToastType = 'success' | 'info' | 'warning' | 'error';

type ToastItem = {
  id: number;
  type: ToastType;
  title: string;
  message?: string;
};

type ToastInput = {
  title: string;
  message?: string;
};

type ToastContextValue = {
  showToast: (toast: ToastInput & { type?: ToastType }) => void;
  success: (toast: ToastInput) => void;
  info: (toast: ToastInput) => void;
  warning: (toast: ToastInput) => void;
  error: (toast: ToastInput) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);
  const idRef = React.useRef(0);

  const removeToast = React.useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = React.useCallback(
    ({ type = 'info', title, message }: ToastInput & { type?: ToastType }) => {
      const id = idRef.current + 1;
      idRef.current = id;
      setToasts((current) => [...current.slice(-2), { id, type, title, message }]);
      window.setTimeout(() => removeToast(id), 3600);
    },
    [removeToast]
  );

  const value = React.useMemo<ToastContextValue>(
    () => ({
      showToast,
      success: (toast) => showToast({ ...toast, type: 'success' }),
      info: (toast) => showToast({ ...toast, type: 'info' }),
      warning: (toast) => showToast({ ...toast, type: 'warning' }),
      error: (toast) => showToast({ ...toast, type: 'error' }),
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-3 bottom-4 z-[100] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-5 sm:items-end">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto w-full max-w-sm">
            <Toast
              type={toast.type}
              title={toast.title}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }

  return context;
}
