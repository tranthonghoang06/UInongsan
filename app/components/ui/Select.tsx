'use client';

import React from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  helperText?: string;
}

const placeholder = 'Chọn một tùy chọn';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      helperText,
      className = '',
      value,
      defaultValue,
      onChange,
      onBlur,
      name,
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id ?? `select-${generatedId}`;
    const listboxId = `${selectId}-listbox`;
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(() => {
      if (typeof defaultValue === 'string' || typeof defaultValue === 'number') {
        return String(defaultValue);
      }

      return '';
    });

    const selectedValue = value !== undefined ? String(value) : internalValue;
    const selectedOption = options.find((option) => option.value === selectedValue);
    const displayLabel = selectedOption?.label ?? placeholder;
    const menuOptions = options.some((option) => option.value === '')
      ? options
      : [{ value: '', label: placeholder }, ...options];

    React.useEffect(() => {
      if (!isOpen) {
        return;
      }

      const handlePointerDown = (event: PointerEvent) => {
        if (!wrapperRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('pointerdown', handlePointerDown);

      return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [isOpen]);

    const handleSelect = (nextValue: string) => {
      if (disabled) {
        return;
      }

      if (value === undefined) {
        setInternalValue(nextValue);
      }

      onChange?.({
        target: { value: nextValue, name },
        currentTarget: { value: nextValue, name },
      } as React.ChangeEvent<HTMLSelectElement>);
      setIsOpen(false);
    };

    return (
      <div ref={wrapperRef} className="min-w-0 w-full">
        {label && (
          <label className="mb-1.5 block text-xs font-medium leading-5 text-[#263238] sm:mb-2 sm:text-sm">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <div className="relative min-w-0">
          <select
            ref={ref}
            name={name}
            value={selectedValue}
            disabled={disabled}
            tabIndex={-1}
            aria-hidden="true"
            className="sr-only"
            onChange={() => undefined}
            {...props}
          >
            {menuOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <button
            id={selectId}
            type="button"
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            onBlur={(event) => onBlur?.(event as unknown as React.FocusEvent<HTMLSelectElement>)}
            onClick={() => setIsOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setIsOpen(false);
              }
            }}
            className={`flex min-h-10 w-full min-w-0 items-center justify-between gap-2 rounded-xl border bg-white py-2 pl-3 pr-3 text-left text-[13px] text-[#263238] transition-colors duration-150 focus:outline-none focus:ring-2 sm:min-h-12 sm:px-4 sm:py-3 sm:text-sm ${
              error
                ? 'border-[#D32F2F] focus:border-[#D32F2F] focus:ring-red-200'
                : 'border-[#E0E0E0] focus:border-[#2E7D32] focus:ring-green-200'
            } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`}
          >
            <span className={`min-w-0 flex-1 truncate ${selectedOption ? '' : 'text-gray-400'}`}>
              {displayLabel}
            </span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-[#263238] transition-transform sm:h-5 sm:w-5 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div
              id={listboxId}
              role="listbox"
              className="absolute left-0 right-0 top-[calc(100%+0.25rem)] z-50 max-h-52 overflow-y-auto rounded-xl border border-[#BBF7D0] bg-white p-1 text-[13px] shadow-lg shadow-green-900/10 sm:text-sm"
            >
              {menuOptions.map((option) => {
                const isSelected = option.value === selectedValue;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    className={`flex min-h-9 w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left leading-5 transition-colors ${
                      isSelected
                        ? 'bg-[#DCFCE7] font-semibold text-[#166534]'
                        : 'text-[#263238] hover:bg-[#F0FDF4]'
                    }`}
                  >
                    <span className="min-w-0 flex-1 truncate">{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {error && <p className="mt-1 text-sm text-[#D32F2F]">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
