import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-[13px] font-medium leading-5 text-[#263238] sm:mb-2 sm:text-sm">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`min-h-24 w-full rounded-xl border bg-white px-3 py-2.5 text-base text-[#263238] transition-colors duration-150 placeholder-gray-400 focus:outline-none sm:min-h-28 sm:px-4 sm:py-3 ${
            error
              ? 'border-[#D32F2F] focus:border-[#D32F2F] focus:ring-2 focus:ring-red-200'
              : 'border-[#E0E0E0] focus:border-[#16A34A] focus:ring-2 focus:ring-green-200'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[#D32F2F]">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
