import type { ReactNode } from 'react';
import PublicFooter from '@/app/components/layout/PublicFooter';

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      {children}
      <PublicFooter />
    </div>
  );
}
