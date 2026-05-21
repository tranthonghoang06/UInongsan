'use client';

import { useEffect } from 'react';
import Button from '@/app/components/ui/Button';
import { TriangleAlert } from 'lucide-react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0FDF4] px-3 py-8">
      <section className="w-full max-w-md rounded-2xl border border-[#BBF7D0] bg-white p-5 text-center shadow-sm shadow-green-100">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
          <TriangleAlert className="h-7 w-7" />
        </div>
        <h1 className="mt-4 text-xl font-bold text-[#163B24]">Có lỗi khi tải giao diện</h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">Hệ thống chưa tải được dữ liệu màn hình này. Bạn có thể thử lại ngay.</p>
        <Button variant="primary" size="md" className="mt-5 w-full" onClick={() => unstable_retry()}>
          Tải lại
        </Button>
      </section>
    </main>
  );
}
