'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';

type StatItem = {
  label: string;
  value: string | number;
  note?: string;
  icon: React.ReactNode;
};

type TableColumn = {
  key: string;
  label: string;
  className?: string;
};

type TableRow = {
  id: string;
  cells: Record<string, React.ReactNode>;
};

interface DataPageProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionIcon?: React.ReactNode;
  stats?: StatItem[];
  columns?: TableColumn[];
  rows?: TableRow[];
  children?: React.ReactNode;
}

export default function DataPage({
  title,
  description,
  actionLabel,
  actionHref,
  actionIcon,
  stats = [],
  columns = [],
  rows = [],
  children,
}: DataPageProps) {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">{title}</h1>
          <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">{description}</p>
        </div>
        {actionLabel && (
          actionHref ? (
            <Link href={actionHref} className="w-full shrink-0 sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                {actionIcon}
                {actionLabel}
              </Button>
            </Link>
          ) : (
            <Button variant="primary" size="md" className="w-full shrink-0 sm:w-auto">
              {actionIcon}
              {actionLabel}
            </Button>
          )
        )}
      </div>

      {stats.length > 0 && (
        <div className="grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-600 sm:text-sm">{stat.label}</p>
                  <p className="mt-1.5 text-xl font-bold text-[#163B24] sm:mt-2 sm:text-2xl">{stat.value}</p>
                  {stat.note && <p className="mt-2 line-clamp-2 text-xs font-semibold text-[#16A34A]">{stat.note}</p>}
                </div>
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A] min-[380px]:flex">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {children}

      {columns.length > 0 && (
        <>
          <div className="space-y-3 md:hidden">
            {rows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
                <div className="space-y-3">
                  {columns.map((column, index) => (
                    <div
                      key={column.key}
                      className={index === 0 ? '' : 'border-t border-[#DCFCE7] pt-3'}
                    >
                      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#16A34A]">{column.label}</p>
                      <div className="text-sm font-medium text-[#163B24]">{row.cells[column.key]}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="border-b border-[#BBF7D0] bg-[#F0FDF4]">
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} className={`px-4 py-3 text-left font-semibold text-[#163B24] ${column.className ?? ''}`}>
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-[#E0E0E0] last:border-0 hover:bg-[#F0FDF4]">
                    {columns.map((column) => (
                      <td key={column.key} className={`px-4 py-3 align-middle text-[#263238] ${column.className ?? ''}`}>
                        {row.cells[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
