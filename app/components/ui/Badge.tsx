import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'ordered' | 'pending-confirmation' | 'confirmed' | 'pending-payment' | 'preparing' | 'delivering' | 'delivered' | 'completed' | 'cancelled';
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'neutral', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap';

    const variants = {
      success: 'bg-green-100 text-green-800',
      warning: 'bg-[#FFF3CD] text-[#856404]',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      neutral: 'bg-gray-200 text-gray-800',
      ordered: 'bg-blue-100 text-[#1976D2]',
      'pending-confirmation': 'bg-yellow-100 text-[#F9A825]',
      confirmed: 'bg-cyan-100 text-cyan-800',
      'pending-payment': 'bg-orange-100 text-orange-800',
      preparing: 'bg-purple-100 text-purple-800',
      delivering: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      completed: 'bg-[#E8F5E9] text-[#2E7D32]',
      cancelled: 'bg-red-100 text-red-800',
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
    };

    return (
      <div ref={ref} className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
