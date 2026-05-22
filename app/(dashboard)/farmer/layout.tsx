import React from 'react';
import type { ReactNode } from 'react';
import DashboardSidebar from '@/app/components/layout/DashboardSidebar';
import DashboardHeader from '@/app/components/layout/DashboardHeader';

export default function FarmerDashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F0FDF4] md:flex md:h-screen">
      <DashboardSidebar userRole="farmer" />
      <main className="min-h-screen pb-32 md:flex-1 md:overflow-auto md:pb-0">
        <DashboardHeader role="farmer" />
        {children}
      </main>
    </div>
  );
}
