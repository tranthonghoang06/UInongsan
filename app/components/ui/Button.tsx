import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, className = '', children, disabled, ...props }, ref) => {
    const baseClasses = 'min-h-10 font-semibold transition-colors duration-150 inline-flex items-center justify-center rounded-xl gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] sm:min-h-11';
    
    const variants = {
      primary: 'bg-[#16A34A] text-white shadow-sm shadow-green-200 hover:bg-[#15803D] active:bg-[#166534]',
      secondary: 'bg-[#DCFCE7] text-[#166534] hover:bg-[#BBF7D0] active:bg-[#86EFAC]',
      outline: 'border-2 border-[#16A34A] bg-white text-[#15803D] hover:bg-[#DCFCE7] active:bg-[#BBF7D0]',
      danger: 'bg-[#D32F2F] text-white hover:bg-[#C62828] active:bg-[#B71C1C]',
    };

    const sizes = {
      sm: 'px-3.5 py-2 text-[13px] sm:px-4 sm:py-2.5 sm:text-sm',
      md: 'px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base',
      lg: 'px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-lg',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
