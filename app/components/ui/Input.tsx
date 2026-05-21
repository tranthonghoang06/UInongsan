import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-[13px] font-medium leading-5 text-[#263238] sm:mb-2 sm:text-sm">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#263238]">{icon}</div>}
          <input
            ref={ref}
            className={`min-h-11 w-full rounded-xl border bg-white px-3 py-2.5 text-base text-[#263238] transition-colors duration-150 placeholder-gray-400 focus:outline-none sm:min-h-12 sm:px-4 sm:py-3 ${
              icon ? 'pl-9 sm:pl-10' : ''
            } ${
              error
                ? 'border-[#D32F2F] focus:border-[#D32F2F] focus:ring-2 focus:ring-red-200'
                : 'border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-2 focus:ring-green-200'
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-[#D32F2F]">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
