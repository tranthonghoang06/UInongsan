import React from 'react';

export interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: string }> {
  columns: Array<DataTableColumn<T>>;
  data: T[];
  emptyText?: string;
}

export default function DataTable<T extends { id: string }>({ columns, data, emptyText = 'Chưa có dữ liệu' }: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#BBF7D0] bg-white p-6 text-center text-sm text-gray-600">
        {emptyText}
      </div>
    );
  }

  return (
    <>
      <div className="space-y-3 md:hidden">
        {data.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100">
            <div className="space-y-3">
              {columns.map((column) => (
                <div key={String(column.key)} className="border-b border-[#DCFCE7] pb-3 last:border-0 last:pb-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#16A34A]">{column.header}</p>
                  <div className="mt-1 text-sm font-semibold text-[#163B24]">
                    {column.render ? column.render(item) : String(item[column.key as keyof T] ?? '')}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-2xl border border-[#BBF7D0] bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[#F0FDF4]">
              <tr>
                {columns.map((column) => (
                  <th key={String(column.key)} className="px-4 py-3 text-left font-bold text-[#163B24]">
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t border-[#DCFCE7]">
                  {columns.map((column) => (
                    <td key={String(column.key)} className="px-4 py-3 text-[#263238]">
                      {column.render ? column.render(item) : String(item[column.key as keyof T] ?? '')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
