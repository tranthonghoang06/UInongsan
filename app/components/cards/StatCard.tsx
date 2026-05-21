import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, change, isPositive }) => {
  return (
    <div className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 truncate text-xs font-medium text-gray-600 sm:mb-2 sm:text-sm">{label}</p>
          <p className="mb-2 text-2xl font-bold text-[#163B24] sm:mb-3 sm:text-3xl">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              <TrendingUp
                className={`h-4 w-4 ${isPositive ? 'text-green-600' : 'text-red-600'}`}
              />
              <span className={`text-xs font-semibold sm:text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#16A34A] sm:h-14 sm:w-14">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
